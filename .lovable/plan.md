## Goal

Merge the two sites into **one** clean Vite + React Router project (`src/`), using the anything.com design (`apps-anything/web/`) as the visual + content source. The `apps-anything/` folder uses a different stack (React Router v7 + Hono server + Neon DB + Auth.js) that can't run as-is on Lovable, so we port its frontend into your existing site rather than swap stacks.

## Why this approach

- Your current `src/` already builds and runs on Lovable (Vite SPA).
- `apps-anything/web/` has nicer page content (blog, careers, events, product, solutions, trust) and a more polished dark theme with CSS variables + styled-jsx.
- Porting = best of both: keep the working stack, get the better design and richer pages.

## Scope

### 1. Design system unification
- Move the dark theme tokens from `apps-anything/web/src/app/layout.jsx` (CSS variables: `--bg`, `--accent` emerald, `--text-muted`, etc.) into `src/index.css` as proper HSL semantic tokens.
- Update `tailwind.config.ts` to expose them (background, foreground, primary, muted, accent, border).
- Add the `Inter` font + light/dark theme toggle support (port `ThemeProvider.jsx` → `src/utils/ThemeProvider.tsx`).
- Remove hardcoded `bg-zinc-950 text-zinc-50` in `Layout.tsx`; use semantic tokens instead.

### 2. Navbar + Footer
- Replace `src/components/layout/Navbar.tsx` and `Footer.tsx` with TypeScript ports of `apps-anything/web/src/components/Navbar.jsx` + `Footer.jsx`, adapted to use `react-router-dom`'s `Link` (instead of React Router v7's), Lucide icons, and the new semantic tokens.
- Wire nav links to all final routes.

### 3. Pages — port from anything.com → `src/pages/`
New pages to create (converted from `.jsx` styled-jsx → `.tsx` with Tailwind + semantic tokens):
- `Product.tsx` (from `product/page.jsx`)
- `Solutions.tsx` (from `solutions/page.jsx`)
- `Blog.tsx` (from `blog/page.jsx`)
- `Careers.tsx` (from `careers/page.jsx`)
- `Events.tsx` (from `events/page.jsx`)
- `Trust.tsx` (from `trust/page.jsx`)

Existing pages — restyle to match, keep content:
- `Index.tsx` — merge with anything.com's homepage hero/sections (yours has product-specific copy; theirs has nicer layout)
- `About.tsx` — replace with the richer anything.com About content
- `Contact.tsx` — replace with anything.com Contact (has form + info blocks)
- `Technology.tsx` — keep, restyle to match
- `Privacy.tsx`, `Terms.tsx`, `NotFound.tsx` — restyle only

### 4. Shared content
- Port `apps-anything/web/src/data/content.js` → `src/data/content.ts` (faqs, blogPosts, openRoles, etc.) so pages share the data.

### 5. Routing
Update `src/App.tsx` routes:
```text
/, /product, /solutions, /technology, /trust,
/blog, /events, /careers, /about, /contact,
/privacy, /terms, *
```

### 6. Cleanup
- Leave `apps-anything/` folder in place as reference (you can delete it later when satisfied).
- Remove unused shadcn UI primitives only if they're not referenced after the port.

## Out of scope
- Backend/auth/database from anything.com (Hono, Neon, Auth.js) — not portable to Lovable's stack and not needed for a marketing site.
- The mobile app (`apps-anything/mobile/`) — separate Expo project, untouched.
- Removing every Lovable "fingerprint" (covered in earlier discussion; can be a follow-up).

## Technical notes
- All anything.com pages use `styled-jsx` — Vite doesn't support that out of the box, so each ported page is rewritten using Tailwind classes + semantic tokens (no styled-jsx dependency added).
- Colors converted from hex (`#10b981`, `#09090b`) to HSL in `index.css` to satisfy Lovable's design-system rule.
- `framer-motion` is already in your stack — reuse for scroll animations the anything.com pages imply.

## Deliverable
One unified site at `src/` with 11 routes, consistent dark-emerald theme + optional light mode, shared content data, and matching Navbar/Footer across all pages.
