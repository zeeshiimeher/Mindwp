# MindWP Website (Next.js App Router)

This repo contains the MindWP marketing site: homepage + services, features, industries, resources, blog, case studies, and utility pages.

Runtime is consolidated to the Next.js app in `next-app/`.

## Run

- Dev: `npm run dev`
- Start production server: `npm run start`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Full validation: `npm run validate:all`
- CI-safe gate (recommended): `npm run validate:ci`
- Production build: `npm run build`

## Smoke Tests (Routing)

This repo includes a lightweight Playwright smoke test that loads a small set of critical routes in a real browser and fails if critical routes do not render correctly.

- Run: `npm run test:smoke`
- Full gate (validate + smoke): `npm run validate:ci`

## Case Study Structure Validator

Use these commands for case-study content structure checks:

- Human-readable check: `npm run validate:case-study-structure`
- Auto-fix core section order: `npm run validate:case-study-structure:fix`
- Machine-readable JSON report (for CI tooling): `npm run validate:case-study-structure:report`

Recommended usage:

- Local development: run human-readable check (and `:fix` when needed).
- CI/automation: use JSON report mode for machine parsing and annotations.

## Related Cards Resolver

Related cards are resolver-driven and graph-backed for service and feature pages.

Variants:

- `domain-only` (default): same-domain related cards only.
- `mix-ranked`: service-first, then industry/case-study, then feature fill.
- `one-each-sic`: one service + one industry + one case-study.
- `domain-resource-blog`: one same-domain + one resource + one blog.

Resolver guarantees:

- Excludes current page slug.
- Deduplicates by slug.
- Caps output at 3 cards.

## Docs (authoritative)

- Start here: `../Mindwp-Docs/DOCUMENTATION-INDEX.md`
- AI agents: `../Mindwp-Docs/AI-AGENT-RUNBOOK.md`
- Strategy / positioning: `../Mindwp-Docs/00_FOUNDATION_DOCTRINE.md`
- Architecture reality: `../Mindwp-Docs/ARCHITECTURE-AND-DECISIONS.md`

## Architecture

- Runtime: Next.js App Router in `next-app/src/app/`
- Shared/domain code: `next-app/src/`

## Forms

Client submissions post directly to `/form-handler.php` via browser `FormData` from the contact and conversation pages.

