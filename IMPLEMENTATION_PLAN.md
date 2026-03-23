# ISTE Projects CMS - Handover Plan

## 1) Objective
- Maintain a uniform projects showcase for all SIGs.
- Let SIG/project heads add project data without touching frontend code.
- Keep public website read-only for visitors.

## 2) Current State (Already Implemented)
- Frontend `Projects` tab added in navbar.
- Routes available:
  - `/projects` (all SIGs + grouped projects)
  - `/sigs/[sig_name]` (SIG detail + project list)
  - `/projects/[slug]` (uniform project template)
- Strapi backend scaffolded in `cms/`.
- Strapi collection types created:
  - `sig`
  - `project` (linked to `sig`)
- Seeded data:
  - SIGs: `crypt`, `clutch`, `concrete`, `chronicle`, `catalyst`
  - Project: `cipher-campus` under `crypt`
- Frontend CMS integration with fallback exists in `lib/cms.ts`.

## 3) Handover Scope for New Owner
- Own deployment and uptime of Strapi + frontend.
- Own role/user management for project heads.
- Own schema evolution (fields, validations, workflow).
- Own content quality (uniform formatting standards).

## 4) Local Runbook
1. Start Strapi:
```bash
cd cms
npm install
npm run develop
```
2. Start frontend:
```bash
cd ..
npm install
npm run dev
```
3. Open:
- Strapi Admin: `http://localhost:1337/admin`
- Frontend: `http://localhost:3000/projects`

## 5) Production Rollout Plan
1. Deploy Strapi (`cms/`) on Render/Railway/VPS.
2. Use production DB (Postgres preferred).
3. Configure Strapi env secrets on host.
4. Deploy frontend (Vercel or equivalent).
5. Set frontend env:
   - `NEXT_PUBLIC_STRAPI_URL=https://<strapi-domain>`
   - `STRAPI_API_TOKEN=<readonly token>` (optional if public read is allowed)
6. Smoke test:
   - `/projects`
   - `/sigs/crypt`
   - `/projects/cipher-campus`

## 6) Access & Permissions Model
- `Super Admin`:
  - Full control (you/tech team only).
- `Project Head` role:
  - `project`: create, read, update
  - `sig`: read
  - No settings/users/security access
- Public:
  - Read-only content via frontend.

## 7) Content Standards (Uniform Template Rules)
- Required for every project:
  - `title`, `slug`, `shortDescription`, `description`, `status`, `year`, `sig`
- Recommended:
  - `coverImage`, `techStack[]`, `githubUrl`, `demoUrl`, `leads[]`
- Slugs:
  - lowercase, hyphen-separated, stable once published
- Copy style:
  - concise summary + clear technical value

## 8) Week-1 Task List for New Owner
1. Create admin and project-head accounts.
2. Add remaining SIGs if missing.
3. Add at least one project per active SIG.
4. Add real images for cover assets.
5. Verify each SIG page has valid project links.
6. Confirm mobile responsiveness for projects pages.

## 9) Risks & Mitigations
- Risk: Strapi down -> no CMS data.
  - Mitigation: frontend fallback to local data already implemented.
- Risk: accidental permission escalation.
  - Mitigation: strict role policy and admin-only user creation.
- Risk: inconsistent data format from multiple editors.
  - Mitigation: required fields + content checklist + review step.

## 10) File Map (Key Ownership)
- Frontend CMS integration:
  - `lib/cms.ts`
  - `app/projects/page.tsx`
  - `app/projects/[slug]/page.tsx`
  - `app/sigs/[sig_name]/page.tsx`
  - `components/NavBar.tsx`
- Seed + schema:
  - `cms/src/index.ts`
  - `cms/src/api/sig/**`
  - `cms/src/api/project/**`
- Setup docs:
  - `STRAPI_SETUP.md`
  - `IMPLEMENTATION_PLAN.md`

## 11) Recommended Next Enhancements
1. Add moderation workflow (draft -> review -> publish).
2. Add per-SIG ownership (project heads can only edit their SIG’s projects).
3. Add audit log/change history policy.
4. Add backup + restore schedule for DB and uploads.
