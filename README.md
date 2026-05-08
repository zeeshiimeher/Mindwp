# MindWP

## What This Is

MindWP is a systems-first digital infrastructure consultancy for established service businesses. The site and repo are built around one idea: work already comes in, but too much slips away between being found, contacted, followed up, reviewed, and measured. MindWP connects those weak points so work gets handled properly.

Do not describe MindWP as a platform, SaaS product, web design agency, generic marketing agency, or tool reseller.

## Repo Purpose

- Next.js public site
- Domain-owned content and registries
- Canonical graph and metadata system
- CTA and contact routing
- Design system and page rendering surfaces
- Validators, reports, snapshots, and control plane

## Documentation Dashboard

| Doc | Use When | Owns |
| --- | --- | --- |
| `docs/core/FOUNDATION.md` | Defining business truth or system boundaries | Identity, positioning, audience, six systems, hierarchy, boundaries |
| `docs/core/WRITING.md` | Writing or auditing public copy | Public language, rewrite rules, FLOW -> HANDLING -> RESULT |
| `docs/core/CONTENT.md` | Deciding what a page is allowed to do | Page roles, funnel roles, content hierarchy |
| `docs/core/CONVERSION.md` | Changing CTAs or contact flow | CTA intent, labels, placement, contact routing |
| `docs/core/GRAPH.md` | Changing metadata or related content | Metadata, relationships, related-content rules |
| `docs/core/DESIGN.md` | Working on UI, CSS, or visual structure | Visual system, CSS ownership, component design |
| `docs/core/SYSTEM-ARCHITECTURE.md` | Mapping runtime/control-plane ownership | Runtime layers, validation/report flow, build/deploy gates |
| `docs/core/SYSTEM-RULES.md` | Checking enforceable system locks | Route, SEO, OG, component, design, generated-source, validator locks |
| `docs/Planning/System-hard-reset.md` | Continuing hard-reset work | Temporary reset state, active build rules, build order |
| `docs/Planning/Legacy-dependency-map.md` | Removing old UI dependencies | Old dependencies, remaining consumers, delete gates |
| `AGENTS.md` | Guiding Copilot in this repo | Concise execution rules and scoped reading discipline |

Do not read every doc for every task. Read the docs relevant to the task.

## Task-Based Reading Guide

- Positioning or content work: `FOUNDATION.md`, `WRITING.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`
- Public copy rewrite: `FOUNDATION.md`, `WRITING.md`, and relevant page data
- CTA work: `CONVERSION.md`, relevant page/template, and CTA helpers
- Related or graph work: `GRAPH.md` and relevant domain config
- Design or UI work: `DESIGN.md` and relevant components/CSS
- Architecture or control-plane work: `SYSTEM-ARCHITECTURE.md`, `SYSTEM-RULES.md`, and relevant scripts
- Legacy cleanup: `Legacy-dependency-map.md`
- Hard reset work: `System-hard-reset.md` plus relevant stable docs

## Common Commands

All commands below exist in `package.json`.

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run system:quick
npm run system:full
npm run system:regen
npm run generate:core
npm run build
npm run deploy
```

`npm run system:quick` is the fast development check. `npm run system:full` is the full validation/reporting gate. `npm run build` runs through the safe build path. `npm run deploy` must remain the production release path.

## Active Architecture Guardrails

- Current CSS stack: `tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> page/domain CSS`
- `DecisionPanel` is the final conversion component for rebuilt/new pages.
- `PrimaryCTASection` is quarantine delete-later only for old consumers.
- `RelatedSection` is global/wrapper-owned; page renderers should not manually own related sections.
- Approved new component folders: `src/components/layout`, `src/components/primitives`, `src/components/conversion`, `src/components/navigation`, `src/components/content`.
- Quarantined old folders: `src/components/reusable`, `src/components/sections`.
- Rebuilt/new code must not use old `rd-*`, `l-section`, or `l-container` patterns.
- Do not restore deleted workflow docs; use this dashboard and the stable core docs instead.

## Final Principle

Start from the business owner's visible day: calls, searches, forms, quotes, reviews, jobs, staff, inboxes, and missed follow-up. Use the system model to structure the solution, not to make the buyer decode the architecture.