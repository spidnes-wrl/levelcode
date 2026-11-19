# Authentication foundation

## Flow

- Sign-up and sign-in use Supabase Auth email/password.
- Supabase sessions are stored in HTTP-only-compatible SSR cookies through `@supabase/ssr`.
- `middleware.ts` refreshes the session and validates the current user with `auth.getUser()`.
- The auth callback exchanges the PKCE code for a session.
- Sign-out is a POST route.
- The dashboard checks the authenticated user on the server.

## Environment

Set these values in `.env.local` and in the deployment environment:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

The publishable key is designed for browser use, but it does not grant access to private rows when RLS and grants are correctly configured. Never expose a secret/service-role key in a `NEXT_PUBLIC_` variable.

## Supabase Auth dashboard

For the deployed application, configure:
- Site URL: the deployed LevelCode origin.
- Redirect URL: `https://<levelcode-domain>/auth/callback`.
- Local redirect URL: `http://localhost:3000/auth/callback`.

Email confirmation may be enabled; when enabled, the user must confirm their email before a session is created.

## Current limitation

The connected Supabase project `levelcode-waitlist` is currently inactive. The code is prepared, but end-to-end sign-up, sign-in, session refresh and RLS isolation have not yet been tested against an active LevelCode database.
