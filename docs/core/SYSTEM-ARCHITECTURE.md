# SYSTEM ARCHITECTURE — MindWP

Authority for mapping MindWP strategy into repo structure.

This doc explains which parts of the source tree own routes, domain data, renderers, graph behavior, CTA/contact/SEO support, styles, and cleanup. It does not redefine the business strategy or offer model.

## Governing Context

- Business identity: [FOUNDATION.md](./FOUNDATION.md)
- Active offer model: [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- Page roles: [CONTENT.md](./CONTENT.md)
- Related-content behavior: [GRAPH.md](./GRAPH.md)
- Execution guardrails: [SYSTEM-RULES.md](./SYSTEM-RULES.md)

Architecture supports approved page meaning. It should not preserve stale source structures when governing docs define the active direction.

## Build Flow

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Source structure should follow approved page decisions. Do not force weak pages into premature data models, component shells, metadata contracts, or graph rules.

## Top-Level Ownership

- `src/app/**` owns public routes.
- `src/domains/**` owns domain content, page data, renderers, registries, and page-specific domain behavior.
- `src/domains/services/**` owns active system service pages.
- `src/domains/services/implementation/**` owns implementation pathways under Smart Website Systems.
- `src/components/**` owns reusable UI and component surfaces.
- `src/styles/**` owns tokens, layout primitives, typography, and shared visual rules.
- `src/lib/content-graph/**` owns graph metadata, relationship helpers, and related-content behavior.
- `src/lib/cta/**` owns shared CTA behavior.
- `src/lib/contact/**` owns contact helpers and source-context support.
- `src/lib/seo/**` owns shared SEO behavior.
- `src/config/routeOwnership.ts` and indexing config must align with active public routes.

Do not create a public `/systems` taxonomy unless governing docs are intentionally updated.

## Route Ownership

`src/app/**` is the canonical route owner.

Rules:

- One content item gets one canonical app route.
- Duplicate alias routes are not allowed.
- Removed unpublished names do not need compatibility.
- Indexing config must not preserve removed route families.
- Route ownership config must match the active public routes.

Because the site has not been published, prefer direct correction over compatibility.

## Domain Responsibilities

`src/domains/services/**` should describe active system service pages and their renderers.

`src/domains/services/implementation/**` should describe implementation pathway pages under Smart Website Systems. These pages may discuss WordPress, Elementor, Bricks, Divi, WooCommerce, and rebuild choices, but their strategic parent remains Smart Website Systems.

Domain files should not preserve removed service names, removed categories, stale aliases, or parallel models.

## Page Data And Renderers

Domain `pageData` files connect slug -> data -> renderer after the page shape is stable.

Allowed while proving a page:

- page-owned content
- local arrays
- page-local helper components
- repeated JSX
- custom section layouts
- broad types that support the page

Extract after approval:

- stable data groups
- reusable primitives
- shared section components
- metadata contracts
- graph relationships
- stricter types

Renderers should not manually add `RelatedSection` as unmanaged body filler. Related-content injection belongs in domain/config layers when the journey is stable.

## Component Responsibilities

Components are building blocks, not gates.

Shared surfaces may include:

- `HeroFrame`
- `SectionShell`
- `FAQSection`
- `DecisionPanel`
- `Button`
- `SignalDot`
- `StatusBadge`
- `InlineText`
- `Accordion`
- `Tabs`

Use shared components when they strengthen the approved section. Use custom JSX when the section needs a specific leak map, connected-handling surface, signal board, before/after panel, operating map, or proof stack.

Do not force generic card grids because reusable components already exist.

## Styles

`src/styles/**` owns tokens, layout primitives, typography, and shared visual rules.

Use Tailwind utilities plus existing `mw-*` and token classes for page work. Avoid page-specific CSS for migrated pages unless existing surfaces cannot reasonably express the design.

Stable repeated visual primitives can be extracted after approval.

## Content Graph And Metadata

Graph metadata should use:

- `primarySystem`
- `supportingSystems[]`
- `pageType`
- `funnelRole`
- `industries[]`
- `topics[]`
- `proofType` where relevant

Graph relationships should support the next useful step and respect [GRAPH.md](./GRAPH.md).

Implementation pages relate upward to Smart Website Systems. Service pages should not become blog hubs. Resources should not trap readers in education loops. Revenue Recovery appears only as a theme or improvement layer, not a route, page type, or graph category.

Graph resolver behavior should be extracted after approved page journeys are clear.

## CTA, Contact, And SEO Responsibilities

CTA behavior is governed by [CONVERSION.md](./CONVERSION.md).

During page design:

- CTA copy may live in JSX.
- CTA placement may move.
- `DecisionPanel` is useful but optional.
- contact helpers should not block strong section composition.

After approval:

- stable CTA labels can move into shared helpers or registries
- source context can be preserved through `buildContactHref()`
- SEO metadata can be tightened around approved page identity and canonical route ownership
- indexing config can be aligned with route ownership

SEO should follow active routes and canonical page identity.

## Cleanup Rules

Prefer:

- direct rename
- direct move
- direct delete
- one canonical route per content item
- updated route ownership and indexing config
- active metadata fields

Avoid:

- alias routes for removed names
- redirects for unpublished removed names
- compatibility wrappers
- hidden removed categories
- duplicate app routes
- parallel data models
- old identifiers in graph metadata

If source code conflicts with active docs, update source during a source-cleanup task unless implementation reality proves the doc is wrong.

## Active Commands

Use pnpm only.

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm lint:fix`
- `pnpm typecheck`
- `pnpm check:names`
- `pnpm check:minimal`
- `pnpm check:frontend`

Use `pnpm check:frontend` after visual or page work.

## Architecture Validation

Before approving source cleanup, confirm:

- `src/app/**` has one canonical route per page
- `src/domains/services/**` reflects active system service pages
- `src/domains/services/implementation/**` holds implementation pathways under Smart Website Systems
- route ownership config matches public routes
- indexing config does not preserve removed routes
- metadata uses `primarySystem` and `supportingSystems[]`
- Revenue Recovery is not modeled as a primary route category, page type, or graph category
- no public backend platform names leak into source or copy
- related content is injected from config/domain layers when stable
- page renderers retain custom JSX where it protects approved design
