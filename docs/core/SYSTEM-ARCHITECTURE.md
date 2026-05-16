# SYSTEM ARCHITECTURE — MindWP

> Practical architecture brain for future source cleanup.
> Business identity and offer ownership come from `FOUNDATION.md` and `OFFER-ARCHITECTURE.md`.
> Architecture should support the active model instead of preserving old routes, names, or parallel systems.

---

## CURRENT BUILD FLOW

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Architecture follows approved page meaning. It does not decide the page before the business reality and section design are clear.

---

## TOP-LEVEL OWNERSHIP

- `src/app/**` owns public routes.
- `src/domains/**` owns domain content, data, renderers, registries, and page-specific domain behavior.
- `src/domains/services/**` owns active system service pages.
- `src/domains/services/implementation/**` owns implementation pathway pages under Smart Website Systems.
- `src/components/**` owns reusable UI and component surfaces.
- `src/styles/**` owns tokens, layout primitives, typography, and shared visual rules.
- `src/lib/content-graph/**` owns graph metadata, relationship helpers, and related-content behavior.
- `src/lib/cta/**`, `src/lib/contact/**`, and `src/lib/seo/**` own shared CTA, contact, and SEO behavior.
- `src/config/routeOwnership.ts` and indexing config must align with active routes.

Do not create a `/systems` public route taxonomy unless the governing docs are intentionally updated later.

---

## ACTIVE ROUTE MODEL

The active public system model is:

- Smart Website Systems
- Local SEO Authority Systems
- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

Revenue Recovery is a cross-system improvement layer only. It is not a primary service route, graph category, or route family.

Implementation services may exist under:

- `domains/services/implementation/wordpress-development`
- `domains/services/implementation/elementor`
- `domains/services/implementation/bricks-builder`
- `domains/services/implementation/divi5`
- `domains/services/implementation/woocommerce`
- `domains/services/implementation/website-redesign-system-rebuild`

These are implementation pathways under Smart Website Systems, not equal primary systems.

---

## DOMAIN RESPONSIBILITIES

`src/domains/services` should describe active system service pages and their renderers.

Each active system page should have one primary identity, one route owner, one renderer/data path, and one active-system metadata owner.

`src/domains/services/implementation` should describe implementation pathway pages. These pages may talk about WordPress, Elementor, Bricks, Divi, WooCommerce, or rebuild implementation choices, but their strategic parent is Smart Website Systems.

Domain files should not preserve removed service names, removed categories, or compatibility aliases.

---

## PAGE RENDERERS

Page renderers may own section composition while pages are being proven.

Allowed during page design:

- page-owned content
- local arrays
- page-local helper components
- repeated JSX
- custom section layouts
- broad types that do not fight the page

Extract after approval:

- stable data groups
- reusable primitives
- shared section components
- metadata contracts
- stricter types
- graph relationships

Renderers should not manually render `RelatedSection` as unmanaged page body content. Related-content injection belongs in config/domain layers when the journey is ready.

---

## COMPONENT RESPONSIBILITIES

Shared components are optional building blocks, not mandatory shells.

Current shared surfaces may include:

- `src/components/layout`: `HeroFrame`, `SectionShell`
- `src/components/content`: `FAQSection`
- `src/components/conversion`: `DecisionPanel`
- `src/components/navigation`: related-content presentation
- `src/components/primitives`: small UI primitives

Use a shared component when it strengthens the approved section.
Use custom JSX when the pattern needs a specific leak map, handoff surface, signal board, before/after panel, or operating map.

Do not force a generic card grid because a reusable component already exists.

---

## CONTENT GRAPH AND METADATA

Graph metadata should use:

- `primarySystem`
- `supportingSystems[]`
- `pageType`
- `funnelRole`
- `industries[]`
- `topics[]`
- `proofType` where relevant

Do not use old broad `systems[]` metadata as the strategic source of truth.

Graph relationships should support the next useful step:

```text
Blog -> Resource -> Industry -> Service
```

The graph resolver is deferred until approved page journeys are clear. Inline links and hand-picked related content are acceptable during page creation when they support the section narrative.

Service pages should not become blog hubs.
Resources should not trap readers in education loops.
Implementation pages should relate upward to Smart Website Systems.
Revenue Recovery should appear only as a theme or improvement layer.

---

## CTA, CONTACT, AND SEO

CTA behavior belongs to the conversion system, not individual page improvisation after approval.

During page design:

- CTA copy may live in JSX.
- CTA placement may move.
- `DecisionPanel` is useful but optional.
- contact helpers should not block section composition.

After approval:

- stable CTA labels can move into shared helpers or registries
- source context can be preserved through `buildContactHref()`
- SEO metadata can be tightened around the approved page identity

SEO and indexing config must follow active routes. Do not index removed aliases or removed service families.

---

## ROUTE CLEANUP RULES

Because the site has not been published, cleanup should prefer direct correction over compatibility.

Prefer:

- direct rename
- direct move
- direct delete
- one canonical route per content item
- updated route ownership and indexing config

Avoid:

- alias routes for removed names
- redirects for unpublished removed names
- duplicate app routes
- compatibility wrappers
- hidden removed categories
- parallel data models

If source code conflicts with active docs, update source code during a source-cleanup pass unless implementation reality proves a doc is wrong.

---

## ACTIVE COMMANDS

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run check:frontend`

Use `check:frontend` after visual/page work to catch runtime crashes.

---

## ARCHITECTURE VALIDATION CHECKLIST

Before approving source cleanup, confirm:

- `src/app/**` has one canonical route per page
- `domains/services` reflects the five active systems
- `domains/services/implementation` holds implementation pathways under Smart Website Systems
- route ownership config matches public routes
- indexing config does not preserve removed routes
- metadata uses `primarySystem` and `supportingSystems[]`
- Revenue Recovery is not modeled as a primary route category
- no public backend platform names leak into source/copy
- related content is injected from config/domain layers when stable
- page renderers retain custom JSX where it protects approved design
