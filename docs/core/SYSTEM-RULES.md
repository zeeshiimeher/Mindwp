# System Rules

MindWP is currently in design-first rebuild mode.

## Active Rule

Design approval comes before final architecture.

Do not use old validators, data contracts, graph reports, dashboards, section keys, or render-alignment rules as current truth.

## Active Checks

- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run build`
- `npm run check:frontend`

## Design-Mode Rules

Allowed:

- JSX-owned content
- local arrays
- Tailwind layout/composition utilities
- page-owned sections
- page-local helper components
- temporary repeated JSX
- flexible section count
- broad transitional types

Deferred until after approval:

- strict section contracts
- graph/authority rules
- related-content enforcement
- CTA registry enforcement
- strict SEO/OG completeness
- strict token/Tailwind validation
- report dashboards

## Safety Rules

- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not invent fake proof, metrics, testimonials, guarantees, or rankings.
- Do not add unsupported capabilities.
- Keep public copy operational and buyer-first.
- Use frontend smoke checks for runtime page crashes.
