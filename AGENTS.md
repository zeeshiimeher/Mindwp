# MindWP Agent Instructions

## Current Status

MindWP main is being reset for a design-first rebuild.

- The old validator/report/control-plane pipeline has been removed from active use.
- `Mindwp-Design` is the visual reference and quality source.
- This main folder is the production-path rebuild target.
- Design approval comes before final architecture.

Do not recreate the old system to make current pages feel tidy. The current main folder is a rebuild workspace, not production truth.

## What MindWP Is

- Systems-first digital infrastructure consultancy for established service businesses.
- Not a generic web design agency, SaaS product, tool reseller, or template business.
- Primary goal: qualified enquiries and conversion through visible, reliable business handling.
- Six business systems: Smart Website Systems, Local SEO Authority, AI Lead Handling, CRM & Automation, Reputation & Reviews, Revenue Growth.

Public copy starts from the owner's working day: calls, searches, forms, quotes, jobs, reviews, inboxes, staff, missed follow-up. Use internal system structure quietly; do not lead with it before the reader recognises the situation.

## Build Logic

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN LOGIC -> SECTION COMPOSITION -> TAILWIND JSX -> APPROVAL -> EXTRACTION
```

1. Business Reality: what is visibly happening in the buyer's business.
2. Page Intent: what the visitor must recognise, understand, or decide.
3. Pattern Logic: leak, handoff, stack, split, arc, before/after, priority, fit, proof, scenario, operating map.
4. Section Composition: the actual section shape.
5. Tailwind JSX: build the page/section directly.
6. Approval: user visually approves.
7. Extraction: only then extract primitives, stable data, validators, SEO/graph/related rules, and tighter types.

## Design-Mode Allowances

During design mode, agents may use:

- JSX-owned content
- local arrays inside page files
- page-owned section layouts
- temporary repeated JSX
- flexible section count
- full section rewrites
- Tailwind layout/composition utilities
- page-local helper components
- minimal data files
- broad transitional types

Good UI matters more than perfect architecture during design mode. Do not preserve old data contracts by making old section fields optional.

## Components

Useful components may be used as optional building blocks:

- `HeroFrame` / `PageHero`
- `SectionFrame`
- `FAQSection` / FAQ blocks
- `DecisionPanel` / CTA blocks
- `Container`
- `SectionHeader`
- `Button`
- `SignalDot`
- `Pill` / `Badge`

These are tools, not gates. No validator or data contract should require every section to use a specific shell during design mode.

## Styling

Tailwind is allowed for layout, composition, spacing, responsive behavior, and typography during design mode. Token-aware colors and surfaces are preferred where already available, but color/token enforcement is a later production pass.

Do not let old CSS-only rules block visual exploration.

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

## Do Not Bring Back

- `system:full`
- `system:quick`
- `validate:all`
- `build-safe`
- old validators
- graph/report/authority gates
- canonical section contracts
- old render-alignment checks
- old dashboard/report system
- mandatory related-section injection
- CTA registry enforcement
- strict token/Tailwind gates during design mode

## Safety Rules

- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not invent fake proof, fake metrics, testimonials, rankings, guarantees, or client results.
- Do not add unsupported service capabilities.
- Build and frontend smoke should pass after page work.
- If docs conflict, follow the current scoped user prompt first, then the design-first docs, then current code.

## Reading Discipline

Read only what is relevant to the task. For page/design work, prefer:

- `docs/Planning/design-first-rebuild.md`
- `docs/core/FOUNDATION.md`
- `docs/core/WRITING.md`
- `docs/core/CONTENT.md`
- `docs/core/CONVERSION.md`
- `docs/core/DESIGN.md`

Do not revive archived planning docs as active instructions.
