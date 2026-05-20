# CLAUDE.md

Main AI orientation file for MindWP. Claude, Codex, Copilot Chat, and other coding agents should read this first, then read only the task-relevant docs.

Follow the current user prompt first. Then follow this file. When deeper context is needed, use the core docs instead of guessing.

## MindWP In One Line

MindWP builds conversion-focused website systems with connected handling for established service businesses and specialist clinics.

The repo is docs-led, not old-page-led. Existing pages, renderers, page data, and planning notes are context. They are not authority when they conflict with the core docs.

Public explanation starts from the owner's or practice manager's working day: calls, searches, forms, quotes, bookings, consultation requests, jobs, appointments, reviews, inboxes, staff pressure, and missed follow-up. The system model should help structure the answer; it should not make the buyer decode internal architecture before they recognise their situation.

## Active Offer Model

The five active primary systems are:

1. Smart Website Systems
2. Local SEO Authority Systems
3. Lead Response & Handling Systems
4. Follow-Up & CRM Systems
5. Reputation & Review Systems

Revenue Recovery is only a cross-system improvement layer. It must not become a primary system, route, service page, graph category, CTA category, navigation pillar, panel, card, form, related-content cluster, or public offer.

Implementation services sit under Smart Website Systems. WordPress, Elementor, Bricks, Divi, WooCommerce, and website rebuild pages are implementation pathways, not primary systems or generic builder-agency offers.

## Build Flow

Use this flow for page planning and rebuild work:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Start with what is visibly happening in the buyer's business, clinic, or practice. Create recognition before explaining the system. Build page and section patterns in JSX while they are being proven. Extract data, reusable primitives, metadata, graph rules, and tighter types only after approval.

Plan before editing. For page rebuilds, produce a page plan and get approval before changing JSX, page data, styles, or shared components.

## Page Rebuild Workflow

Use this workflow for each major page rebuild:

1. Understand the positioning and active offer model from `CLAUDE.md` and the relevant core docs.
2. Confirm which page is being rebuilt and what business moment it owns.
3. Make a page plan before editing.
4. Decide the high-level section sequence and make sure the page will not visually repeat previous approved pages too closely.
5. Create the render base first: set up the page-level use of existing shared components such as `HeroFrame`, `SectionShell`, `DecisionPanel`, and `FAQSection` where useful.
6. Decide section titles, descriptions, tone, variants, props, and whether any section needs a custom class or background treatment.
7. Do not build inner body JSX until the render shape is clear.
8. After the render shape is approved or clearly established, design the inner section content with page-owned JSX, Tailwind, and direct section content inside `SectionShell` where appropriate.
9. Run validation and report what changed.

For the first three pages — Homepage, Smart Website Systems, and Local SEO Authority Systems — there are no fully approved designed pages yet. These pages establish the base design standard. Shared component, token, or CSS improvements are allowed only during this baseline phase when clearly justified by the approved design direction in `docs/Planning/Design-Direction.md`.

After these three pages are approved, later page rebuilds should treat `HeroFrame`, `SectionShell`, `DecisionPanel`, `FAQSection`, tokens, and shared CSS as stable unless the user explicitly approves a design-system change.

Later pages should inspect approved rebuilt pages for design rhythm. Pages can share shells and rhythm, but primary visual arguments must feel distinct.

## Active Rebuild Memory

Captured so future sessions do not re-audit the full repo for every task:

- `docs/Planning/Website-Rebuild.md` — phase structure, sequence, and acceptance criteria.
- `docs/Planning/Website-memory-and-plan.md` — current phase status, branch, decisions, and next-session handoff.
- `docs/Planning/Design-Direction.md` — proposed visual baseline for Homepage, Smart Website Systems, and Local SEO Authority. Locks in after those three pages are approved.
- `docs/Planning/Repo-Map.md` — durable repo structure, ownership, validator behavior, and reset-base constraints from the Phase 2 audit. Read this before exploring source folders from scratch.

## Task-Based Reading

Use the smallest reading set that fully supports the task.

For positioning, offer, or copy work:

- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/WRITING.md`
- `docs/core/CONTENT.md` when page role matters
- `docs/core/CONVERSION.md` when CTA or contact behavior matters

For page planning:

- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/CONTENT.md`
- `docs/core/DESIGN.md`
- `docs/core/WRITING.md`
- `docs/core/CONVERSION.md`
- `docs/ops/CONTENT-INVENTORY.md` only for planning inventory, never runtime truth

For page implementation or rebuild work:

- this file first
- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/CONTENT.md`
- `docs/core/DESIGN.md`
- `docs/core/WRITING.md`
- `docs/core/CONVERSION.md`
- `docs/core/SYSTEM-ARCHITECTURE.md` only when source structure, routes, renderers, metadata, graph, or ownership changes
- `docs/core/SYSTEM-RULES.md` for guardrails and validation

For design review or visual section direction:

- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/DESIGN.md`
- `docs/core/WRITING.md` when public copy is visible
- `docs/core/CONVERSION.md` when CTAs are visible

For source cleanup, routes, graph, metadata, or architecture work:

- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/SYSTEM-ARCHITECTURE.md`
- `docs/core/SYSTEM-RULES.md`
- `docs/core/GRAPH.md` when graph or related content changes
- `docs/core/CONVERSION.md` when CTA/contact source changes

For docs-only maintenance:

- this file first
- the doc being edited
- any governing doc the edit depends on

## Doc Ownership

- `README.md` = lightweight repo overview
- `CLAUDE.md` = main AI orientation and task routing
- `docs/core/FOUNDATION.md` = identity, buyer truth, positioning, public path, build philosophy
- `docs/core/OFFER-ARCHITECTURE.md` = active offer model, system ownership, implementation services, Revenue Recovery boundary
- `docs/core/WRITING.md` = voice, public language, copy rules
- `docs/core/CONTENT.md` = page roles, funnel behavior, editorial boundaries
- `docs/core/CONVERSION.md` = CTA/contact behavior
- `docs/core/DESIGN.md` = visual direction, UI/page rebuild design, visual concepts, tokens/CSS/component design judgment
- `docs/core/GRAPH.md` = related content, graph metadata, routing logic
- `docs/core/SYSTEM-ARCHITECTURE.md` = strategy-to-repo mapping
- `docs/core/SYSTEM-RULES.md` = hard execution guardrails and validation expectations
- `docs/ops/CONTENT-INVENTORY.md` = planning inventory only
- `.claude/skills/**` = workflow helpers only

Generated files under `reports/` are diagnostic snapshots, not governing docs. They may contain stale route names, removed systems, or historical audit output. Do not use them as strategy, route, offer, graph, CTA, or page-rebuild authority unless the report has just been regenerated for the current active model.

## Hard Boundaries

- Do not revive removed service names or old offer models.
- Do not create public `/systems`, `/topics`, or `/portfolio` route families unless governing docs are intentionally updated.
- Public topic hubs are not active. Keep `topics[]` as internal metadata only; do not create topic routes, topic templates, topic ownership, topic indexing, navigation paths, or public topic hubs.
- Do not expose backend platform names as the public product.
- Do not mention GoHighLevel, GHL, or HighLevel in public copy.
- Do not turn implementation services into primary systems.
- Do not merge Lead Response & Handling with Follow-Up & CRM.
- Do not make every service page repeat the full MindWP model.
- Do not invent fake proof, metrics, testimonials, rankings, guarantees, or client results.
- Do not use page briefs, old pages, components, data files, or renderer order as strategy authority.
- Do not turn specialist clinic pages into medical software, EMR, compliance, hospital operations, generic doctor marketing, or treatment-claim pages.

## Commands

Use pnpm only.

`package.json` scripts are the command authority. Keep this list synchronized when scripts change.

```bash
pnpm dev
pnpm build
pnpm lint
pnpm lint:fix
pnpm typecheck
pnpm check:names
pnpm check:minimal
pnpm check:frontend
pnpm check:domain-registries
pnpm check:clean-base
pnpm check:architecture
```

Use `pnpm check:frontend` after visual or page work. For docs-only work, run the requested search validation and any requested pnpm checks.
