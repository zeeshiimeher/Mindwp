# MindWP Agent Instructions

This file is for Codex, GitHub Copilot Chat, Claude, and other coding agents working in the MindWP repo.

Follow the current user prompt first. Then follow this file. This file is the routing layer for AI agents. It tells agents which docs to read, which rules to respect, which commands to use, and which removed models must not return. It is not the full strategy brain.

When you need deeper context, read the relevant core doc instead of guessing. Do not load every doc by default when a smaller task-specific reading set is enough.

## Source Of Truth

Use this reading order:

1. [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md) for identity, buyer truth, positioning, public path, and build philosophy.
2. [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md) for active systems, service ownership, implementation services, and offer boundaries.
3. [docs/core/WRITING.md](./docs/core/WRITING.md) for public language and rewrite rules.
4. [docs/core/CONTENT.md](./docs/core/CONTENT.md) for page roles and funnel behavior.
5. [docs/core/CONVERSION.md](./docs/core/CONVERSION.md) for CTA and contact behavior.
6. [docs/core/DESIGN.md](./docs/core/DESIGN.md) for visual and section design judgment.
7. [docs/core/GRAPH.md](./docs/core/GRAPH.md) for related-content behavior.
8. [docs/core/SYSTEM-ARCHITECTURE.md](./docs/core/SYSTEM-ARCHITECTURE.md) for repo mapping and route/domain ownership.
9. [docs/core/SYSTEM-RULES.md](./docs/core/SYSTEM-RULES.md) for hard guardrails and validation.

For page rebuilds, also read [docs/Planning/design-first-rebuild.md](./docs/Planning/design-first-rebuild.md), then [docs/Planning/page-rebuild-briefs.md](./docs/Planning/page-rebuild-briefs.md) when planning or rebuilding a specific page. Page briefs are context, not governing strategy. If they conflict with core docs, core docs win.

Read only what is relevant to the task.

## Task-Based Reading

Use the smallest reading set that fully supports the task.

For positioning, offer, or copy work, read:

- [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md)
- [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md)
- [docs/core/WRITING.md](./docs/core/WRITING.md)
- [docs/core/CONTENT.md](./docs/core/CONTENT.md) when page role matters
- [docs/core/CONVERSION.md](./docs/core/CONVERSION.md) when CTA or contact behavior matters

For page planning, read:

- [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md)
- [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md)
- [docs/core/CONTENT.md](./docs/core/CONTENT.md)
- [docs/core/DESIGN.md](./docs/core/DESIGN.md)
- [docs/core/CONVERSION.md](./docs/core/CONVERSION.md)
- [docs/Planning/design-first-rebuild.md](./docs/Planning/design-first-rebuild.md)
- [docs/Planning/page-rebuild-briefs.md](./docs/Planning/page-rebuild-briefs.md) when the page has a brief

For page implementation or rebuild work, read:

- this file first
- [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md)
- [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md)
- [docs/core/CONTENT.md](./docs/core/CONTENT.md)
- [docs/core/DESIGN.md](./docs/core/DESIGN.md)
- [docs/core/WRITING.md](./docs/core/WRITING.md)
- [docs/core/CONVERSION.md](./docs/core/CONVERSION.md)
- [docs/Planning/design-first-rebuild.md](./docs/Planning/design-first-rebuild.md)
- [docs/Planning/page-rebuild-briefs.md](./docs/Planning/page-rebuild-briefs.md) when the page has a brief
- [docs/core/SYSTEM-ARCHITECTURE.md](./docs/core/SYSTEM-ARCHITECTURE.md) only when source structure, routes, renderers, metadata, graph, or ownership changes

For source cleanup, routes, graph, metadata, or architecture work, read:

- this file first
- [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md)
- [docs/core/SYSTEM-ARCHITECTURE.md](./docs/core/SYSTEM-ARCHITECTURE.md)
- [docs/core/SYSTEM-RULES.md](./docs/core/SYSTEM-RULES.md)
- [docs/core/GRAPH.md](./docs/core/GRAPH.md) when graph or related content changes
- [docs/core/CONVERSION.md](./docs/core/CONVERSION.md) when CTA/contact source changes

For design review or visual section direction, read:

- [docs/core/FOUNDATION.md](./docs/core/FOUNDATION.md)
- [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md)
- [docs/core/DESIGN.md](./docs/core/DESIGN.md)
- [docs/core/WRITING.md](./docs/core/WRITING.md) when public copy is visible
- [docs/core/CONVERSION.md](./docs/core/CONVERSION.md) when CTAs are visible

For docs-only maintenance, read:

- this file first
- the doc being edited
- any governing doc the edit depends on

Do not use a broader reading set just because more docs exist. Read enough to stay aligned, then work within the requested scope.

## What MindWP Is

MindWP builds conversion-focused website systems with connected handling for established service businesses.

The public idea starts from the owner's working day: calls, searches, forms, quotes, jobs, reviews, inboxes, staff pressure, and missed follow-up. The system model should help structure the answer; it should not make the buyer decode internal architecture before they recognise their situation.

MindWP is not a generic web design agency, SaaS product, backend tool reseller, template business, AI chatbot vendor, cheap website package business, or ranking-hype SEO provider.

Core principles to preserve:

- The website works as part of the business, not as a standalone brochure.
- The website is the visible control point where search, trust, enquiry capture, response, follow-up, proof, reviews, and improvement connect.
- Search, enquiries, response, follow-up, and reviews should connect from the start, not be bolted on separately.
- Structure comes before optimisation.
- Local SEO starts with the website, not around it, and should follow find -> verify -> trust -> contact.
- Visibility is maintained, not installed.
- Local visibility only matters if trust becomes contact and contact becomes handled enquiry.
- Nothing should depend on someone remembering.
- Implementation choice should be framed through business fit, not builder preference.
- Fit/not-fit filtering protects the offer.

## Active Build Flow

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Apply it like this:

- Start with what is visibly happening in the buyer's business.
- Create recognition before explaining the system.
- Decide what the page or section must help the visitor understand, believe, or do.
- Choose the pattern: leak, connected-handling surface, stack, split, arc, before/after, priority, fit, proof, scenario, or operating map.
- Design the actual section shape.
- Build directly in JSX when the pattern is still being proven.
- Judge visually, strategically, and commercially.
- Extract stable data, primitives, metadata, graph rules, and tighter types after approval.

Do not reverse this into component -> data -> page -> forced design.

## Active Offer Summary

The detailed offer model is owned by [docs/core/OFFER-ARCHITECTURE.md](./docs/core/OFFER-ARCHITECTURE.md).

The active primary systems are:

- Smart Website Systems
- Local SEO Authority Systems
- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

Revenue Recovery is a cross-system improvement layer only. It is not a primary system, primary service page, route family, graph category, navigation pillar, page type, CTA category, related-content cluster, service card, panel, form, public offer, or equal system.

## Implementation Services

Implementation services are active implementation pathways under Smart Website Systems.

Approved folder direction:

- `src/domains/services/implementation/wordpress-development`
- `src/domains/services/implementation/elementor`
- `src/domains/services/implementation/bricks-builder`
- `src/domains/services/implementation/divi5`
- `src/domains/services/implementation/woocommerce`
- `src/domains/services/implementation/website-redesign-system-rebuild`

Frame WordPress, Elementor, Bricks, Divi, WooCommerce, and rebuild pages as conversion-focused website-system implementation paths. They should connect back to website clarity, trust, enquiry capture, and connected handling. Do not turn them into generic builder-agency pages, affiliate-style comparisons, cheap website packages, or equal strategic pillars.

## Public Tool Boundary

Do not publicly mention backend CRM, automation, booking, form, AI, or white-label platform names as the product.

Do not publicly mention GoHighLevel, GHL, or HighLevel.

MindWP sells conversion-focused website systems, clarity, connected handling, response, follow-up, ownership, reviews, proof, and systems. It does not sell tools.

## Route And Cleanup Rules

- `src/app/**` owns routes.
- `src/domains/**` owns domain content, page data, renderers, and registries.
- `src/domains/services/**` owns active system service pages.
- `src/domains/services/implementation/**` owns implementation pathways.
- `src/lib/content-graph/**` owns graph behavior.
- `src/config/routeOwnership.ts` and indexing config must align with active public routes.
- Do not create a public `/systems` taxonomy unless governing docs are intentionally updated.
- The site has not been published. Do not preserve unpublished removed routes, aliases, old names, or compatibility wrappers.
- Prefer direct rename, move, or delete during source cleanup.
- Keep `lead-response-handling` and `follow-up-crm` separate in routes, data, metadata, CTA posture, graph relationships, renderer logic, and page copy.
- Remove Revenue Growth or Revenue Recovery route/category/CTA/graph models if they exist as primary structures.

## Page Build Rules

- Compose pages and sections in JSX first while the communication pattern is being shaped.
- Page-owned content, local arrays, helper components, and repeated JSX are acceptable while proving a page.
- Custom connected-handling surfaces are acceptable when they make ownership, response, follow-up, reviews, or proof easier to see.
- Existing pages and page briefs may inform buyer problems, useful ideas, implementation constraints, and pattern clues, but must not dictate final section order, renderer structure, component choice, page data shape, visual pattern, or final copy.
- Primary service pages must each own one business moment. They may show connected context, but must not repeat the full MindWP model or absorb adjacent systems.
- Connected handling must be earned by buyer recognition. Do not lead with the phrase before the working-day problem is visible.
- Simple CTA labels such as contact or conversation labels are allowed only when nearby context explains the diagnostic purpose.
- Use Tailwind utilities plus existing `mw-*` and token classes.
- Avoid page-specific CSS for migrated pages unless no existing styling surface can reasonably solve the problem.
- Domain `pageData` files connect slug -> data -> renderer after the shape is stable.
- `RelatedSection` belongs in domain/config injection when stable, not as unmanaged renderer filler.
- Extract only after visual and strategic approval.

## Components

Approved shared base components include:

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

These are building blocks, not gates. Use custom JSX when it communicates the business reality better.

## What Not To Do

- Do not edit source code during docs-only tasks.
- Do not revive removed service names or removed offer models.
- Do not create parallel service hierarchies.
- Do not flatten MindWP into web design, SEO, automation, CRM, AI, reviews, and growth as a generic service menu.
- Do not make every primary service page explain website + response + follow-up + reviews + recovery in the same way.
- Do not invent fake proof, metrics, testimonials, rankings, guarantees, or client results.
- Do not add unsupported service capabilities.
- Do not make AI, CRM, automation, or backend tools the public product.
- Do not lead public copy with CRM software; lead with ownership, status, follow-up, and next-step visibility.
- Do not ask approval questions when the governing docs already answer the decision.

## Commands

Use pnpm only.

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm lint:fix`
- `pnpm typecheck`
- `pnpm check:names`
- `pnpm check:minimal`
- `pnpm check:frontend`

Use `pnpm check:frontend` after visual/page work. For docs-only work, run the requested search validation instead of source checks.

## Validation Expectations

Before finishing, confirm the task did not:

- change files outside the requested scope
- revive removed names or old offer models
- create a public `/systems` route direction
- expose backend platform names in public copy
- turn implementation services into primary systems
- disconnect implementation services from Smart Website Systems
- blur primary service pages by making them repeat the full MindWP model or absorb adjacent systems
- merge Lead Response & Handling with Follow-Up & CRM in route, data, metadata, CTA, graph, renderer, or copy ownership
- treat Revenue Recovery as a route, page type, graph category, CTA category, navigation pillar, related-content cluster, service card, panel, form, public offer, active system, or additional pillar
- add fake proof or unsupported claims
- use non-pnpm workflow instructions

If a task touches page UX, build/runtime behavior, source cleanup, or route ownership, run the relevant checks from the command list and report what passed or could not run.
