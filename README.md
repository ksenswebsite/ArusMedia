# ArusMedia — Phase 1 Foundation

Starter foundation for ArusMedia using Next.js App Router, TypeScript, Tailwind CSS, and Supabase.

## Included in Phase 1

- Next.js App Router project structure
- ArusMedia public placeholder homepage
- Supabase browser and server clients using `@supabase/ssr`
- Server-only Supabase admin client helper
- Admin email/password login
- Cookie-based session refresh and protected `/admin` route
- Admin role check against `public.profiles`
- Initial PostgreSQL schema, indexes, RLS policies, and `article-images` bucket
- Environment variable template

## Requirements

- Node.js 20+
- A Supabase project
- A Vercel account (deployment comes after local setup)

## 1. Install

```bash
npm install
cp .env.example .env.local
```

Fill `.env.local` with your Supabase Project URL and publishable/anon key.

## 2. Set up Supabase

1. Create a new Supabase project.
2. Open SQL Editor.
3. Run `supabase/migrations/0001_initial_schema.sql`.
4. In Authentication > Users, create the administrator account.
5. Copy that user's UUID.
6. Run this SQL, replacing the UUID:

```sql
insert into public.profiles (id, display_name, role)
values ('AUTH-USER-UUID', 'ArusMedia Administrator', 'admin');
```

Do not enable public signups for this admin-only application. Keep account creation restricted to the project owner.

## 3. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`. Admin login is at `/admin/login`.

## 4. Vercel environment variables

Set these in Vercel Project Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

`SUPABASE_SERVICE_ROLE_KEY` is intentionally not required by the Phase 1 UI. If introduced later, it must only be used in trusted server-side code and must never use the `NEXT_PUBLIC_` prefix.

Redeploy after changing environment variables.

## Security notes

- RLS is enabled for all application tables.
- Only a profile with role `admin` can manage protected data.
- Public article reads are restricted to published articles whose `published_at` is in the past.
- The service-role client helper bypasses RLS; never import it into a Client Component or expose its key.
- The admin route checks the authenticated user's profile role.
- Add rate limiting and abuse protection before exposing public write or analytics endpoints.
- The public `article-images` bucket allows reads only; uploads, updates, and deletes require an admin session.

## Phase 1 boundaries

This is a foundation, not the completed news CMS. Article CRUD, Tiptap editor, category management UI, scheduled publishing, analytics dashboard, and full editorial homepage are planned for later phases.
