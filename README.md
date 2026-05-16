# MindWP

MindWP is a systems-first digital infrastructure consultancy for established service businesses. The site is built around one idea: work already comes in, but too much slips away between being found, contacted, followed up, reviewed, and measured. MindWP connects those weak points so work gets handled properly.

Do not describe MindWP as a platform, SaaS product, web design agency, generic marketing agency, or tool reseller.

## Repo Purpose

- Next.js public site
- Domain-owned content, page data, and renderer registries
- Service, feature, industry, blog, resource, and case-study routes
- CTA and contact routing
- Shared base components for approved page patterns
- Runtime smoke checks for build and browser safety

## Build Workflow

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> TYPES / EXTRACTION
```

Page decisions start from the buyer's visible working day: calls, searches, forms, quotes, reviews, jobs, staff, inboxes, and missed follow-up. Section design happens in JSX first. Data, types, shared primitives, and metadata are extracted only after a section or page pattern is approved.

## Documentation

| Doc | Use When | Owns |
| --- | --- | --- |
| `AGENTS.md` | Guiding agents in this repo | Concise execution rules and scoped reading discipline |
| `docs/core/FOUNDATION.md` | Defining business truth or system boundaries | Identity, positioning, audience, six systems, boundaries |
| `docs/core/WRITING.md` | Writing or auditing public copy | Public language, rewrite rules, FLOW -> HANDLING -> RESULT |
| `docs/core/CONTENT.md` | Deciding what a page is allowed to do | Page roles, funnel roles, content hierarchy |
| `docs/core/CONVERSION.md` | Changing CTAs or contact flow | CTA intent, labels, placement, contact routing |
| `docs/core/GRAPH.md` | Changing related-content behavior | Related content ownership and injection rules |
| `docs/core/DESIGN.md` | Working on UI, CSS, or visual structure | Visual system, CSS ownership, component design |
| `docs/core/SYSTEM-ARCHITECTURE.md` | Mapping current runtime ownership | Route, domain, component, and verification shape |
| `docs/core/SYSTEM-RULES.md` | Checking implementation rules | Current build workflow and verification rules |

Read only the docs relevant to the task.

## Common Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run check:names
npm run check:minimal
npm run check:frontend
npm run build
```

`npm run check:minimal` runs typecheck, lint, and name checks. `npm run check:frontend` starts a local app and smoke-tests key routes. `npm run build` verifies the production build.

## Architecture Guardrails

- Domain `pageData` files connect slug -> data -> renderer.
- `RelatedSection` is injected by domain/config where used; renderers should not manually add it.
- Approved shared base components include `HeroFrame`, `SectionShell`, `FAQSection`, and `DecisionPanel`.
- Tailwind utilities plus existing `mw-*` and token classes are the default styling surface.
- Migrated pages should not add page-specific CSS unless there is a clear local need.
- Keep proof honest, system boundaries clear, and copy grounded in operational reality.

## Final Principle

Start from the business owner's visible day. Use the system model to structure the solution, not to make the buyer decode the architecture.
