# System Architecture

MindWP main is the business-first, conversion-led rebuild target.

## Current Flow

```text
BUSINESS REALITY → BUYER RECOGNITION → PAGE INTENT → PATTERN → SECTION DESIGN → JSX → APPROVAL → SYSTEMIZATION
```

## Runtime Shape

- `src/app/**` owns routes.
- `src/domains/**` contains existing domain content and transitional page data.
- Page renderers may own section composition when the page or section needs custom business communication.
- Shared components are optional building blocks, not mandatory gates.
- Data files stay minimal until a page or section is approved and worth systemizing.

## Active Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run check:frontend`

## Minimal Safety Stack

- Build must run.
- TypeScript must stay useful without forcing premature page/section contracts.
- Lint should stay clean.
- Public source/content must not expose hidden internal tool names.
- Frontend smoke should catch browser/runtime crashes.

## Deferred Production Systems

These should be rebuilt later around approved designs:

- strict domain data contracts
- section-order/render-alignment validators
- graph/authority scoring
- related-content strategy
- CTA registry rules
- full SEO/OG contract enforcement
- token and Tailwind validators
- report dashboards

Do not recreate the removed control plane as a shortcut.
