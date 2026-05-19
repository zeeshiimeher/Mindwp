# SYSTEM RULES — MindWP

AI execution rulebook for MindWP.

Use this when changing docs, source, content, routes, data, metadata, graph behavior, or page systems. The goal is to prevent future sessions from reviving removed strategy or creating parallel models.

Do not duplicate offer definitions in this file. Use [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) for system ownership and use this file only for execution guardrails, cleanup rules, validation expectations, and hard do/don't behavior.

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
- Do not create public `/systems`, `/topics`, or `/portfolio` route families unless governing docs are intentionally updated.
- Do not preserve unpublished removed routes, aliases, or compatibility wrappers.
- Do not add inactive industry lanes, public topic hubs, public system taxonomies, or portfolio aliases during cleanup.
- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not publicly mention backend CRM, automation, booking, form, AI, or white-label platform names as the product.
- Do not invent fake proof, fake metrics, testimonials, rankings, guarantees, or client results.
- Do not add unsupported service capabilities.
- Do not use non-pnpm workflow instructions in repo docs.

## Offer Rules

Active primary systems are defined in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

Revenue Recovery is a cross-system improvement layer only. It exists to block old Revenue Growth strategy from returning as a public offer. It is not:

- a primary system
- a primary service page
- a route family
- a graph category
- a navigation pillar
- a page type
- a CTA category
- a related-content cluster
- a service card
- a panel
- a form
- a public offer
- an equal system

Do not plan pages, routes, navigation, graph categories, related-content clusters, CTA categories, forms, panels, or service cards around Revenue Recovery.

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

Each primary service page must own one business moment. It may show connected context, but it must not repeat the full MindWP model, re-explain every active system, or absorb adjacent systems.

Lead Response & Handling and Follow-Up & CRM must stay distinct. Lead Response & Handling owns first response and routing after someone reaches out. Follow-Up & CRM owns owner, status, reminder, and next-step visibility after first response or quote. Do not merge their routes, data, metadata, CTA posture, graph relationships, renderer logic, or page copy.

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

Page briefs and existing pages are context, not section orders. They may inform buyer problems, useful ideas, implementation constraints, and pattern clues, but they must not dictate final section order, renderer structure, page data shape, component choice, visual pattern, or final copy.

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

If source still contains Revenue Growth, Revenue Recovery as a primary structure, old `/systems` or `/topics` route families, portfolio aliases, old AI Lead Handling naming, old CRM & Automation naming, or merged Lead Response/Follow-Up ownership, correct the source to match the active docs rather than preserving compatibility.

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

## CTA And Public Language Rules

CTA behavior is defined in [CONVERSION.md](./CONVERSION.md). Public language is defined in [WRITING.md](./WRITING.md).

Simple UI labels such as "Contact us," "Start a conversation," "Talk to us," or "Send your website" are allowed only when nearby context explains the diagnostic purpose. They must not replace the strategic CTA posture.

"Connected handling" must be earned by buyer recognition. Do not lead with the phrase before the working-day problem is visible.

"CRM" may appear in the system name, but public copy must lead with ownership, status, follow-up, and next-step visibility before software.

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
- no public `/systems`, `/topics`, or `/portfolio` route direction was created
- implementation services still sit under Smart Website Systems
- Revenue Recovery is not modeled as a route, page type, graph category, CTA category, navigation pillar, related-content cluster, service card, panel, form, public offer, or active system
- service pages resolve to active systems
- primary service pages each own one business moment instead of repeating the full MindWP model
- Lead Response & Handling and Follow-Up & CRM remain separate in routes, data, metadata, CTA posture, graph relationships, renderer logic, and page copy
- implementation service pages resolve upward to Smart Website Systems
- feature pages do not sound like SaaS pages
- service pages do not sound like a generic catalog
- simple CTA labels are supported by nearby diagnostic context when used
- proof is real, clearly framed, or absent
- appropriate validation was run and reported
