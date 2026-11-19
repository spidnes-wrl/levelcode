# LevelCode database foundation

## Existing project discovery

The connected Supabase project named `levelcode-waitlist` was found, but its status is `INACTIVE`. Its database cannot currently be inspected or queried. No project was restored, no database was changed, and no new paid project was created.

## First shared schema

The reviewed schema blueprint is in [schema.sql](./schema.sql). It introduces:

- profiles linked to Supabase Auth users;
- workspaces and workspace memberships;
- projects scoped to workspaces;
- module preferences scoped to users;
- audit events scoped to workspaces.

All tables enable RLS and have explicit grants for authenticated users. Anonymous access is revoked. Policies are ownership- and membership-based.

## Deployment sequence

1. Confirm the target Supabase project and that it is intended for the LevelCode application (not merely the waitlist).
2. Restore/activate the project only after its cost and purpose are confirmed.
3. Inspect existing tables and migrations before any schema change.
4. Create a migration using the Supabase CLI `supabase migration new <name>`.
5. Review and apply the migration to the intended project.
6. Run Supabase security and performance advisors.
7. Test two separate accounts to verify that one account cannot read or change the other's rows.

Never apply the reference SQL blindly to an existing production database.
