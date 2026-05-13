# MindWP Design-First Rebuild

This is the active planning note for the main MindWP folder.

## Current Status

- The main folder is being reset for a design-first rebuild.
- The old validator/report/control plane has been removed from active workflow.
- Old canonical section and generated-report type contracts are being stripped back.
- `Mindwp-Design` is the visual reference and quality source.
- The main folder is the production-path rebuild target.

## Build Logic

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN LOGIC -> SECTION COMPOSITION -> TAILWIND JSX -> APPROVAL -> EXTRACTION
```

## Design Mode

Allowed during design mode:

- JSX-owned content
- local visual arrays
- page-owned layouts
- temporary repeated JSX
- page-local helper components
- flexible section count
- full section rewrites
- Tailwind layout/composition utilities
- minimal data files
- broad transitional types

Do not preserve old architecture by making old section fields optional. Delete old contracts and rebuild strong types later from approved designs.

## Page Improvement Workflow

1. Start with the buyer's visible working day.
2. Decide the page intent.
3. Choose the pattern logic.
4. Compose the actual sections in JSX.
5. Use Tailwind for fast layout and responsive exploration.
6. Ask for visual approval.
7. Extract stable primitives/data only after approval.

## Extraction Later

After approval, extract only what has proven stable:

- repeated primitives
- shared visual components
- stable data groups
- production metadata
- related/graph rules
- stricter types
- targeted validators

Extraction is a cleanup phase, not the design starting point.

## Active Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run check:frontend`

## Safety

- Never mention GoHighLevel, GHL, or HighLevel publicly.
- Do not invent proof, metrics, rankings, testimonials, or guarantees.
- Keep copy operational, specific, and buyer-first.
- Run build and frontend smoke after meaningful page work.

## Deferred Systems

These are deferred until the design system is approved:

- graph/authority scoring
- report dashboards
- section-order validators
- strict token/Tailwind validators
- CTA registry enforcement
- related-content enforcement
- strict SEO/OG contracts
