# System Architecture

MindWP main is the business-first, conversion-led production rebuild target.

## Current Flow

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> TYPES / EXTRACTION
```

## Runtime Shape

- `src/app/**` owns routes.
- `src/domains/**` owns domain content, page data, renderers, and registries.
- Domain `pageData` files connect slug -> data -> renderer.
- Page renderers may own section composition when the page needs custom business communication.
- Shared components are optional building blocks, not mandatory shells.
- Data files stay minimal until a page or section is approved and worth extracting.
- `RelatedSection` is injected by domain/config where used, not manually rendered inside page bodies.

## Current Shared Surfaces

- `src/components/layout`: `HeroFrame`, `SectionShell`
- `src/components/content`: `FAQSection`
- `src/components/conversion`: `DecisionPanel`
- `src/components/navigation`: related-content presentation
- `src/components/primitives`: small UI primitives

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
- TypeScript must stay useful without blocking approved page composition.
- Lint should stay clean.
- Public source/content must not expose hidden internal tool names.
- Frontend smoke should catch browser/runtime crashes.
