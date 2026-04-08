# MindWP Website (Next.js App Router)

This repo contains the MindWP marketing site: homepage + services, features, industries, resources, blog, case studies, and utility pages.

Runtime is consolidated to the Next.js app in `next-app/`.

## Run

- Dev: `npm run dev`
- Start production server: `npm run start`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Full validation: `npm run validate:all`
- Full test + validator aggregation: `npm run test:all`
- CI-safe gate (recommended): `npm run validate:ci`
- Production build: `npm run build`

## Test Architecture

This repo now separates runtime test coverage into four layers:

- `tests/unit` — high-value helper contracts
- `tests/integration` — route modules, API handlers, validator contract fixtures, and runtime budgets
- `tests/system` — cross-layer invariants across graph, routing, metadata, CTA/contact, taxonomy, and protection rules
- `tests/e2e` — Playwright revenue-path flows and route crawling

Run the layers with:

- `npm run test:unit`
- `npm run test:integration`
- `npm run test:system`
- `npm run test:runtime`
- `npm run test:e2e`
- `npm run test:all`

`npm run test:all` runs the validator layer, Vitest unit/system/integration layers, and Playwright E2E, then writes the aggregated machine-readable report to `reports/test-results.json` for dashboard and CI visibility.

## Validator Extensions

The production control layer now includes these additional blocking validators:

- `npm run validate:template-payload-sufficiency`
- `npm run validate:section-structure`

These catch incomplete template payloads and weak section-cardinality data before they reach runtime.

## Local-first Git policy

- The local working folder is the source of truth.
- Git is used to record and protect the current local state with frequent commits.
- Preferred workflow: change files locally, validate, run system sync when needed, then commit the resulting code and docs.
- Do not use Git to overwrite the working folder unless you explicitly intend to do that.

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

The contact page posts JSON to `/api/contact`, which sends a plain email through Resend. Configure `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env.local` before testing submissions.

