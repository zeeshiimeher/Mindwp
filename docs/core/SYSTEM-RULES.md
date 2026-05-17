# SYSTEM RULES — MindWP

AI execution rulebook for MindWP.

Use this when changing docs, source, content, routes, data, metadata, graph behavior, or page systems. The goal is to prevent future sessions from reviving removed strategy or creating parallel models.

## Governing Docs

- Identity and buyer truth: [FOUNDATION.md](./FOUNDATION.md)
- Active offer model: [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- Public language: [WRITING.md](./WRITING.md)
- Page roles: [CONTENT.md](./CONTENT.md)
- CTA behavior: [CONVERSION.md](./CONVERSION.md)
- Design judgment: [DESIGN.md](./DESIGN.md)
- Graph behavior: [GRAPH.md](./GRAPH.md)
- Repo mapping: [SYSTEM-ARCHITECTURE.md](./SYSTEM-ARCHITECTURE.md)

Do not ask approval questions that these docs already answer.

## Hard Rules

- Use only the active offer model defined in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).
- Do not revive removed service names, removed identifiers, or removed offer structures.
- Do not create parallel offer models.
- Do not create a public `/systems` taxonomy unless governing docs are intentionally updated.
- Do not preserve unpublished removed routes, aliases, or compatibility wrappers.
- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not publicly mention backend CRM, automation, booking, form, AI, or white-label platform names as the product.
- Do not invent fake proof, fake metrics, testimonials, rankings, guarantees, or client results.
- Do not add unsupported service capabilities.
- Do not use non-pnpm workflow instructions in repo docs.

## Offer Rules

Active primary systems are defined in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

Revenue Recovery is a cross-system improvement layer only. It is not:

- a primary service page
- a route family
- a graph category
- a navigation pillar
- a page type
- a CTA category
- an equal system

Implementation services are active implementation pathways under Smart Website Systems. They support conversion-focused website systems and connected handling, but they are not primary systems or equal strategic pillars.

## Page Role Rules

Page roles are defined in [CONTENT.md](./CONTENT.md).

Apply these local guardrails:

- Service pages are active system decision pages.
- Implementation service pages are conversion-focused website-system implementation pathways.
- Feature pages are capabilities inside active systems.
- Industry pages translate systems into vertical reality.
- Blogs diagnose.
- Resources explain frameworks.
- Case studies prove or illustrate operating change.

Do not turn blogs or resources into BOFU service pages. Do not turn service pages into generic catalogs.

## Build-System Rules

Use:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Allowed while proving a page:

- JSX-owned content
- local arrays
- Tailwind layout and composition utilities
- page-owned sections
- page-local helper components
- custom connected-handling surfaces where the business reality needs them
- repeated JSX
- flexible section count
- small useful types

Extract after approval:

- shared components
- stable data groups
- domain `pageData`
- graph rules
- CTA rules
- metadata rules
- tighter types

Shared components are optional building blocks, not mandatory shells.

## Source Cleanup Rules

Because the site has not been published, source cleanup should prefer direct correction.

Prefer:

- rename
- move
- delete
- align route ownership
- align indexing config
- align graph metadata
- align renderers and page data

Avoid:

- redirects for unpublished removed names
- alias routes for old names
- compatibility wrappers
- duplicate source models
- hidden old categories

If active docs clearly define a decision and source is stale, update source during a source-cleanup pass.

## Proof And Claims

Never create:

- invented metrics
- fabricated testimonials
- fake rankings
- unsupported revenue claims
- guaranteed reviews
- guaranteed rankings
- guaranteed lead volume
- fictional client results presented as real

Scenario studies and system examples are allowed only when clearly framed as illustrative or operational examples.

## Validation

For docs-only passes, run search validation for removed drift terms, backend platform terms, and non-pnpm workflow commands.

For source cleanup or page work, run the relevant checks:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm check:names`
- `pnpm check:minimal`
- `pnpm build`
- `pnpm check:frontend`

Use `pnpm check:frontend` after visual/page work.

## Final AI Checklist

Before finishing, confirm:

- no source files were changed during docs-only tasks
- no removed names or old offer structures were revived
- no parallel offer model was introduced
- no public backend platform name appears in public copy
- no public `/systems` route direction was created
- implementation services still sit under Smart Website Systems
- Revenue Recovery remains a layer only, not a route, page type, graph category, CTA category, or active system
- service pages resolve to active systems
- implementation service pages resolve upward to Smart Website Systems
- feature pages do not sound like SaaS pages
- service pages do not sound like a generic catalog
- proof is real, clearly framed, or absent
- appropriate validation was run and reported
