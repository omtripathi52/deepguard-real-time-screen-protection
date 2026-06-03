# ScreenSentinel

A marketing/product website for ScreenSentinel — an on-device AI app that detects deepfakes and synthetic voices in real time on Windows.

## Run & Operate

- `pnpm --filter @workspace/screensentinel run dev` — run the ScreenSentinel web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7, Tailwind CSS v3, react-router-dom v7
- Fonts: IBM Plex Sans (body), Space Grotesk (headings) via Google Fonts
- Theme: dark/light toggle, persisted in localStorage; default dark

## Where things live

- `artifacts/screensentinel/` — the ScreenSentinel web app artifact
- `artifacts/screensentinel/src/pages/` — all 12+ route pages
- `artifacts/screensentinel/src/components/layout/` — Navbar, Footer, Layout
- `artifacts/screensentinel/src/assets/` — images and logo
- `artifacts/screensentinel/src/index.css` — Tailwind + custom CSS design system (color tokens, layout utilities)
- `artifacts/screensentinel/src/data/content.ts` — static page content/copy
- `artifacts/screensentinel/src/hooks/use-github-release.ts` — fetches latest release from GitHub API

## Architecture decisions

- Pure frontend app — no backend needed; this is a marketing site
- Tailwind v3 (not v4) because the original used v3 class syntax; postcss configured in vite.config.ts
- react-router-dom BrowserRouter with `basename={import.meta.env.BASE_URL}` for Replit proxy compatibility
- GitHub release download links fetched live via `useGitHubRelease` hook (repo: omtripathi52/ScreenSentinel)

## Product

ScreenSentinel is an on-device AI layer that detects deepfaked faces and synthetic voices the moment they appear on the screen — privately, instantly, with sub-200ms inference. The website is a marketing site covering product features, solutions, technology, trust/security, events, careers, blog, and contact.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Tailwind v3 (not v4): use `@tailwind base/components/utilities` directives, not `@import "tailwindcss"`
- Do NOT add `@tailwindcss/vite` — this project uses postcss with tailwindcss v3
- Restart the `artifacts/screensentinel: web` workflow after config changes

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
