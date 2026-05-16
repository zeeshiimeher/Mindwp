# MindWP Agent Instructions

## Source Of Truth

MindWP main is the production rebuild workspace for the new business-first site system.

The working sequence is:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

1. Business Reality: what is visibly happening in the buyer's business.
2. Buyer Recognition: what the visitor must recognise as their own situation.
3. Page Intent: what the visitor must understand, believe, or decide.
4. Pattern: leak, handoff, stack, split, arc, before/after, priority, fit, proof, scenario, or operating map.
5. Section Design: the actual section shape.
6. JSX: build the page or section directly.
7. Approval: user visually approves.
8. Systemization: extract stable data, primitives, metadata, and tighter types after the pattern proves itself.

## What MindWP Is

- Systems-first website and connected handling systems business for established service businesses.
- Not a generic web design agency, SaaS product, tool reseller, template business, AI chatbot vendor, or rankings-hype SEO provider.
- Primary goal: qualified enquiries and conversion through visible, reliable business handling.
- Active public systems:
  - Smart Website Systems
  - Local SEO Authority Systems
  - Lead Response & Handling Systems
  - Follow-Up & CRM Systems
  - Reputation & Review Systems
- Revenue Recovery is a cross-system improvement layer only. It is not a primary service page, route category, or equal navigation item.

Public copy starts from the owner's working day: calls, searches, forms, quotes, jobs, reviews, inboxes, staff, and missed follow-up. Use internal system structure quietly; do not lead with it before the reader recognises the situation.

## Implementation Services

Implementation services may exist as practical delivery pathways under Smart Website Systems.

Approved future folder direction:

- `domains/services/implementation/wordpress-development`
- `domains/services/implementation/elementor`
- `domains/services/implementation/bricks-builder`
- `domains/services/implementation/divi5`
- `domains/services/implementation/woocommerce`
- `domains/services/implementation/website-redesign-system-rebuild`

Rules:

- Implementation services are active implementation pathways, not primary active systems.
- Frame WordPress, Elementor, Bricks, Divi, WooCommerce, and rebuild pages as website-system implementation paths.
- Do not turn implementation pages into generic builder-agency pages.
- Do not create equal strategic pillars for implementation services.

## Page Build Rules

- Compose pages and sections in JSX first when the pattern is still being shaped.
- Page-owned content, local arrays, page-local helpers, and repeated JSX are acceptable while the section is being proven.
- Extract only after visual approval or repeated use makes the shape stable.
- Domain `pageData` files connect slug -> data -> renderer.
- `RelatedSection` belongs in domain/config injection, not inside page bodies or renderers.
- Use Tailwind utilities plus existing `mw-*` and token classes.
- Avoid page-specific CSS for migrated pages.

## Components

Approved shared base components:

- `HeroFrame`
- `SectionShell`
- `FAQSection`
- `DecisionPanel`
- `SignalDot`
- `StatusBadge`
- `Button` where already part of the current component surface

These are building blocks, not gates. Use custom JSX when it communicates the business reality better.

## Route And Cleanup Rules

- Do not revive removed service names or removed offer models.
- Do not create a `/systems` public taxonomy unless the docs are intentionally updated later.
- Do not preserve unpublished removed routes, aliases, or removed service names because the site has not been published.
- Prefer direct rename, move, or delete during future source cleanup over compatibility scaffolding.
- Align `src/app/**`, domain data, route ownership, indexing config, graph metadata, and page renderers to the active model.

## Active Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run check:frontend`

Use `check:frontend` after visual/page work to catch browser/runtime crashes.

## Safety Rules

- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not invent fake proof, fake metrics, testimonials, rankings, guarantees, or client results.
- Do not add unsupported service capabilities.
- Keep service-business buyer focus, conversion clarity, and system-first positioning.
- Build and frontend smoke should pass after page work.
- If docs conflict, follow the current scoped user prompt first, then these instructions, then current code.

## Reading Discipline

Read only what is relevant to the task. For page/design work, prefer:

- `docs/Planning/design-first-rebuild.md`
- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/WRITING.md`
- `docs/core/CONTENT.md`
- `docs/core/CONVERSION.md`
- `docs/core/DESIGN.md`
