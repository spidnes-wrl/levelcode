-- LevelCode shared data foundation — reference schema.
-- Review and apply as a Supabase migration only after the target project is active.
-- All exposed tables have RLS enabled and explicit authenticated grants.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_length check (username is null or char_length(username) between 3 and 32)
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 100),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  owner_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner' check (role in ('owner', 'admin', 'member')),
  joined_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete restrict,
  name text not null check (char_length(trim(name)) between 1 and 120),
  description text not null default '',
  status text not null default 'active' check (status in ('active', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.module_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_key text not null check (module_key in (
    'memory', 'coach', 'verify', 'skills', 'market', 'dev',
    'connect', 'import', 'mcp', 'api', 'studio', 'levely'
  )),
  enabled boolean not null default true,
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, module_key)
);

create table if not exists public.audit_events (
  id bigint generated always as identity primary key,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null check (char_length(action) between 1 and 120),
  resource_type text not null check (char_length(resource_type) between 1 and 80),
  resource_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists workspace_members_user_idx on public.workspace_members(user_id);
create index if not exists projects_workspace_created_idx on public.projects(workspace_id, created_at desc);
create index if not exists audit_events_workspace_created_idx on public.audit_events(workspace_id, created_at desc);
create index if not exists module_preferences_user_idx on public.module_preferences(user_id);

alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.projects enable row level security;
alter table public.module_preferences enable row level security;
alter table public.audit_events enable row level security;

revoke all on public.profiles, public.workspaces, public.workspace_members,
  public.projects, public.module_preferences, public.audit_events from anon;

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update, delete on public.workspaces to authenticated;
grant select, insert on public.workspace_members to authenticated;
grant select, insert, update, delete on public.projects to authenticated;
grant select, insert, update, delete on public.module_preferences to authenticated;
grant select, insert on public.audit_events to authenticated;
grant usage, select on sequence public.audit_events_id_seq to authenticated;

drop policy if exists "profiles_read_own" on public.profiles;
create policy "profiles_read_own" on public.profiles
  for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert to authenticated with check ((select auth.uid()) = id);
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update to authenticated using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists "workspaces_read_member" on public.workspaces;
create policy "workspaces_read_member" on public.workspaces
  for select to authenticated using (
    owner_id = (select auth.uid()) or exists (
      select 1 from public.workspace_members wm
      where wm.workspace_id = id and wm.user_id = (select auth.uid())
    )
  );
drop policy if exists "workspaces_create_owner" on public.workspaces;
create policy "workspaces_create_owner" on public.workspaces
  for insert to authenticated with check ((select auth.uid()) = owner_id);
drop policy if exists "workspaces_update_owner" on public.workspaces;
create policy "workspaces_update_owner" on public.workspaces
  for update to authenticated using ((select auth.uid()) = owner_id)
  with check ((select auth.uid()) = owner_id);
drop policy if exists "workspaces_delete_owner" on public.workspaces;
create policy "workspaces_delete_owner" on public.workspaces
  for delete to authenticated using ((select auth.uid()) = owner_id);

drop policy if exists "workspace_members_read_self" on public.workspace_members;
create policy "workspace_members_read_self" on public.workspace_members
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "workspace_members_add_owner_self" on public.workspace_members;
create policy "workspace_members_add_owner_self" on public.workspace_members
  for insert to authenticated with check (
    user_id = (select auth.uid()) and exists (
      select 1 from public.workspaces w
      where w.id = workspace_id and w.owner_id = (select auth.uid())
    )
  );

drop policy if exists "projects_read_workspace_member" on public.projects;
create policy "projects_read_workspace_member" on public.projects
  for select to authenticated using (
    exists (select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid()))
  );
drop policy if exists "projects_create_workspace_member" on public.projects;
create policy "projects_create_workspace_member" on public.projects
  for insert to authenticated with check (
    created_by = (select auth.uid()) and exists (
      select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid())
    )
  );
drop policy if exists "projects_update_workspace_member" on public.projects;
create policy "projects_update_workspace_member" on public.projects
  for update to authenticated using (
    exists (select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid()))
  ) with check (
    exists (select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid()))
  );
drop policy if exists "projects_delete_workspace_member" on public.projects;
create policy "projects_delete_workspace_member" on public.projects
  for delete to authenticated using (
    exists (select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid()))
  );

drop policy if exists "module_preferences_all_own" on public.module_preferences;
create policy "module_preferences_all_own" on public.module_preferences
  for all to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "audit_events_read_own" on public.audit_events;
create policy "audit_events_read_own" on public.audit_events
  for select to authenticated using ((select auth.uid()) = actor_id);
drop policy if exists "audit_events_insert_member" on public.audit_events;
create policy "audit_events_insert_member" on public.audit_events
  for insert to authenticated with check (
    actor_id = (select auth.uid()) and exists (
      select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_id and wm.user_id = (select auth.uid())
    )
  );
