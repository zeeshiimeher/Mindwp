# System Rules

MindWP now uses a business-first, conversion-led build system.

## Active Rule

Business reality, buyer recognition, page intent, section quality, and visual trust come before final architecture.

Do not use old validators, data contracts, graph reports, dashboards, section keys, or render-alignment rules as current truth.

## Active Checks

- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run build`
- `npm run check:frontend`

## Build-System Rules

Allowed:

- JSX-owned content when it improves page communication
- local arrays for section-specific content
- Tailwind layout/composition utilities
- page-owned sections
- page-local helper components
- repeated JSX until a pattern proves it should be extracted
- flexible section count
- small, useful types that do not force premature section contracts

Rebuilt after approval and proven patterns:

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
- Keep public copy operational and buyer-first, conversion-led.
- Use frontend smoke checks for runtime page crashes.
