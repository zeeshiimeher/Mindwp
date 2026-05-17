# MindWP

MindWP is the production rebuild workspace for the new MindWP public site.

MindWP builds conversion-focused website systems with connected handling for established service businesses. The site should communicate a practical business idea: work already comes in, but too much slips away between being found, trusted, contacted, answered, followed up, reviewed, and recovered.

This repository contains the Next.js site, domain content, page renderers, route ownership, conversion/contact behavior, graph support, and the documentation used by future AI and human contributors.

## What This Repo Is

- Next.js public website for MindWP.
- Domain-owned page data, renderer registries, and content surfaces.
- Service, implementation service, feature, industry, blog, resource, and case-study routes.
- Shared components and styling primitives for approved page patterns and connected-handling surfaces.
- CTA, contact, SEO, and related-content support.
- Documentation for strategy, content, design, architecture, and execution guardrails.

MindWP is not a generic web design agency, SaaS product, tool reseller, template business, AI chatbot vendor, or ranking-hype SEO provider.

## Documentation Map

Read only what is relevant to the task.

| Doc | Owns |
| --- | --- |
| [AGENTS.md](./AGENTS.md) | Practical instructions for Codex, Copilot Chat, Claude, and other coding agents. |
| [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md) | MindWP identity, buyer truth, positioning, public path, and build philosophy. |
| [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md) | Active offer model, service ownership, implementation pathways, and offer drift prevention. |
| [docs/core/WRITING.md](./docs/core/WRITING.md) | Public language, voice, rewrite behavior, banned phrasing, and applied copy rules. |
| [docs/core/CONTENT.md](./docs/core/CONTENT.md) | Page roles, funnel behavior, editorial boundaries, and content intent. |
| [docs/core/CONVERSION.md](./docs/core/CONVERSION.md) | CTA posture, contact behavior, diagnostic conversion, and proof-before-action logic. |
| [docs/core/DESIGN.md](./docs/core/DESIGN.md) | Visual direction, section composition, interaction taste, and design judgment. |
| [docs/core/GRAPH.md](./docs/core/GRAPH.md) | Related-content behavior, routing logic, graph metadata, and future resolver rules. |
| [docs/core/SYSTEM-ARCHITECTURE.md](./docs/core/SYSTEM-ARCHITECTURE.md) | Mapping the strategy into routes, domains, renderers, components, styles, and graph code. |
| [docs/core/SYSTEM-RULES.md](./docs/core/SYSTEM-RULES.md) | Hard execution guardrails and validation rules. |
| [docs/Planning/design-first-rebuild.md](./docs/Planning/design-first-rebuild.md) | Page rebuild workflow for high-quality design-first AI sessions. |
| [docs/ops/CONTENT-INVENTORY.md](./docs/ops/CONTENT-INVENTORY.md) | Planning inventory for future content clusters and publishing priorities. |

## Working Philosophy

The active build flow is:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Pages start from the buyer's visible working day: calls, searches, forms, quotes, jobs, reviews, inboxes, staff pressure, and missed follow-up. Components, data files, metadata, CTA rules, and graph relationships are extracted after the page or section pattern is approved.

## Architecture Overview

- `src/app/**` owns public routes.
- `src/domains/**` owns domain content, data, renderers, registries, and page-specific domain behavior.
- `src/domains/services/**` owns active system service pages.
- `src/domains/services/implementation/**` owns implementation pathways under Smart Website Systems, not separate primary systems.
- `src/components/**` owns reusable UI surfaces.
- `src/styles/**` owns tokens, layout primitives, typography, and shared visual rules.
- `src/lib/content-graph/**` owns graph metadata and related-content behavior.
- `src/lib/cta/**`, `src/lib/contact/**`, and `src/lib/seo/**` own shared CTA, contact, and SEO behavior.

The detailed architecture contract is in [docs/core/SYSTEM-ARCHITECTURE.md](./docs/core/SYSTEM-ARCHITECTURE.md).

## Common Commands

Use pnpm only.

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm check:names
pnpm check:minimal
pnpm check:frontend
pnpm build
```

Use `pnpm check:frontend` after meaningful page or visual work. Use `pnpm build` before considering production-facing source changes complete.

## High-Level Guardrails

- Keep MindWP service-business specific, system-first, conversion-focused, and commercially serious.
- Do not turn the site into a generic agency menu or builder-service catalog.
- Do not create a public `/systems` taxonomy unless governing docs are intentionally updated.
- Do not preserve unpublished removed routes or removed names for compatibility.
- Do not invent proof, metrics, rankings, guarantees, testimonials, or client results.
- Do not publicly mention backend platform names, tool names, or white-label delivery details as the product.
- Keep Revenue Recovery as a cross-system improvement layer, not a primary service page, route, page type, graph category, or CTA category.

For source work, read [AGENTS.md](./AGENTS.md) first.
