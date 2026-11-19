# Architecture LevelCode

## Product direction

LevelCode is a modular workspace for organizing knowledge, AI workflows, reusable Skills and external integrations.

**Product rule:** LevelCoach recommends. The user decides. LevelCode executes.

## Application layers

1. **Presentation — Next.js App Router**
   - Responsive web application.
   - Public product pages and authenticated account area.
   - Module routes remain independent UI surfaces.

2. **Identity — Supabase Auth**
   - Email/password authentication to start.
   - Server-side sessions stored in secure cookies through `@supabase/ssr`.
   - The browser uses only the publishable key.
   - Server routes validate identity with `auth.getUser()`.

3. **Data — Supabase Postgres**
   - Shared database, module-owned tables.
   - Every exposed table enables Row Level Security.
   - User and workspace ownership is enforced in Postgres, not only in UI filters.
   - JSONB settings are for flexible module configuration, not a substitute for typed core entities.

4. **Domain modules**
   - LevelMemory, LevelCoach, LevelVerify.
   - LevelSkills, LevelMarket, LevelDev, LevelStudio.
   - LevelConnect, LevelImport, LevelMCP, LevelAPI.
   - Levely AI as the central assistant layer.

5. **Integration services**
   - External provider credentials stay server-side.
   - Connectors require explicit scopes and user consent.
   - MCP tools are registered and authorized before execution.

## Shared data model — first foundation

- `profiles`: account profile linked to `auth.users`.
- `workspaces`: shared work areas owned by an account.
- `workspace_members`: membership and initial role.
- `projects`: work items scoped to a workspace.
- `module_preferences`: per-user module enablement and settings.
- `audit_events`: append-only activity history for workspace actions.

The SQL reference is in [supabase/schema.sql](../supabase/schema.sql). It is a reviewed schema blueprint, not yet a deployed migration.

## Security boundaries

- Never put Supabase secret/service-role keys in browser variables.
- Use the publishable key only with RLS enabled and least-privilege grants.
- Every private row must have an ownership or membership policy.
- Use `auth.getUser()` for server-side identity validation; do not authorize from unverified client state.
- No service may execute external actions without explicit authorization.
- Keep an audit record for sensitive workspace operations.

## Current implementation status

- Supabase browser and server client helpers: added.
- Session refresh middleware: added.
- Email/password sign-up and sign-in UI: added.
- Auth callback and sign-out route: added.
- Authenticated dashboard shell: added.
- Shared database schema: drafted with RLS policies.
- Live Supabase database: not connected or migrated yet.
- Workspace creation/invitations and module data APIs: next implementation step.

## Deployment requirements

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in local/Vercel environments. Configure the Auth Site URL and redirect URL to include the deployed domain and `/auth/callback`.

Do not mark auth or persistence as operational until a real account flow and RLS isolation test pass against the active LevelCode project.
