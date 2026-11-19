
-- Cover remaining foreign keys reported by the Supabase performance advisor.
create index if not exists workspaces_owner_id_idx on public.workspaces(owner_id);
create index if not exists projects_created_by_idx on public.projects(created_by);
create index if not exists audit_events_actor_id_idx on public.audit_events(actor_id);
