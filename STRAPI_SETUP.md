# Strapi Setup (Projects CMS)

This repo is now Strapi-ready and already includes a CMS at `./cms`.

## 1) Start Strapi CMS

```bash
cd cms
npm run develop
```

Open:
- `http://localhost:1337/admin`

Create your first admin account when prompted.

## 2) Create content types in Strapi

These are already created in code:
- `SIG` (`sig`) collection type
- `Project` (`project`) collection type
- relation: one SIG -> many Projects
- draft/publish enabled

Seed data is also auto-added on first boot:
- SIGs: `crypt`, `clutch`, `concrete`, `chronicle`, `catalyst`
- Project: `cipher-campus` under `crypt`

## 3) Permissions

Public read for `sigs` and `projects` is auto-enabled in bootstrap.

For project-head write access in Admin Panel:
1. Go to `Settings -> Administration Panel -> Roles`.
2. Create role: `Project Head`.
3. Give only content permissions needed:
   - `Project`: create, read, update
   - `SIG`: read
4. Go to `Settings -> Administration Panel -> Users`.
5. Add each SIG head user and assign role `Project Head`.

This ensures:
- normal website visitors can only view published content,
- only logged-in project heads/admins can add or edit data in Strapi admin.

## 4) Connect Next.js to Strapi

In this repo:

```bash
cd ..
```

`.env.local` is already created with:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

If you lock public permissions later, add a read-only API token value.

Then run:

```bash
npm run dev
```

Open:
- `/projects`
- `/sigs/crypt`

If Strapi is not available, frontend automatically falls back to local data.
