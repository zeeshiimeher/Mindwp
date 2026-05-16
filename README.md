# MindWP

MindWP is a systems-first website and connected handling systems business for established service businesses. The site is built around one idea: work already comes in, but too much slips away between being found, trusted, contacted, answered, followed up, reviewed, and recovered.

Do not describe MindWP as a platform, SaaS product, generic web design agency, generic marketing agency, backend tool reseller, AI chatbot vendor, or rankings-hype SEO provider.

## Repo Purpose

- Next.js public site
- Domain-owned content, page data, and renderer registries
- Service, implementation-service, feature, industry, blog, resource, and case-study routes
- CTA and contact routing
- Shared base components for approved page patterns
- Runtime smoke checks for build and browser safety

## Build Workflow

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Page decisions start from the buyer's visible working day: calls, searches, forms, quotes, reviews, jobs, staff, inboxes, and missed follow-up. Section design happens in JSX first. Data, types, shared primitives, and metadata are extracted only after a section or page pattern is approved.

## Documentation

| Doc | Use When | Owns |
| --- | --- | --- |
| `AGENTS.md` | Guiding agents in this repo | Concise execution rules, scoped reading discipline, commands, and safety rules |
| `docs/core/FOUNDATION.md` | Defining business truth | Identity, positioning, buyer, public path, boundaries, and build philosophy |
| `docs/core/OFFER-ARCHITECTURE.md` | Planning services or offer hierarchy | Active offer model, system ownership, Revenue Recovery, and implementation services |
| `docs/core/WRITING.md` | Writing or auditing public copy | Public language, tone, rewrite rules, vocabulary, and wording boundaries |
| `docs/core/CONTENT.md` | Deciding what a page is allowed to do | Page roles, funnel behavior, content hierarchy, and page-type permissions |
| `docs/core/CONVERSION.md` | Changing CTAs or contact flow | CTA posture, diagnostic next steps, contact behavior, and conversion validation |
| `docs/core/DESIGN.md` | Working on UI or visual structure | Visual direction, section composition, design patterns, and component judgment |
| `docs/core/GRAPH.md` | Changing related-content behavior | Related-content routing, graph metadata, inline links, and resolver direction |
| `docs/core/SYSTEM-ARCHITECTURE.md` | Mapping strategy to repo structure | App/domain/component/style/lib/config ownership and route/source alignment |
| `docs/core/SYSTEM-RULES.md` | Checking execution guardrails | AI do/don't rules, source-cleanup rules, proof boundaries, and validation checks |
| `docs/Planning/design-first-rebuild.md` | Rebuilding pages | Design-first page workflow and extraction discipline |
| `docs/ops/CONTENT-INVENTORY.md` | Planning future content | Planning categories, clusters, priority industries, and publishing order |

Read only the docs relevant to the task.

## Offer Summary

The active offer model is owned by `docs/core/OFFER-ARCHITECTURE.md`.

Implementation services are active implementation pathways under Smart Website Systems. They are not primary active systems or equal strategic pillars.

Do not create a public `/systems` taxonomy unless the governing docs are intentionally updated later.

## Public Tool Boundary

Do not publicly mention backend CRM, automation, booking, form, AI, or white-label platform names. Do not publicly mention GoHighLevel, GHL, or HighLevel.

MindWP sells outcomes, handling, clarity, response, follow-up, reviews, proof, and systems. It does not sell tools.

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

- `src/app/**` owns routes.
- `src/domains/**` owns domain content, page data, renderers, and registries.
- `domains/services/implementation/**` is for implementation pathways under Smart Website Systems.
- Domain `pageData` files connect slug -> data -> renderer.
- `RelatedSection` is injected by domain/config where used; renderers should not manually add it.
- Tailwind utilities plus existing `mw-*` and token classes are the default styling surface.
- Keep proof honest, system boundaries clear, and copy grounded in operational reality.

## Final Principle

Start from the business owner's visible day. Use the system model to structure the solution, not to make the buyer decode the architecture.
