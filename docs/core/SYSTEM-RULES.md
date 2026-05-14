# System Rules

MindWP uses a business-first, conversion-led build system.

## Active Rule

Business reality, buyer recognition, page intent, section quality, and visual trust come before extraction.

The active build path is:

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> TYPES / EXTRACTION
```

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
- small, useful types that support the current page

Extract after approval:

- shared base components
- stable data groups
- domain `pageData` entries
- related-content rules
- metadata rules
- tighter types

## Safety Rules

- Do not publicly mention GoHighLevel, GHL, or HighLevel.
- Do not invent fake proof, metrics, testimonials, guarantees, or rankings.
- Do not add unsupported capabilities.
- Keep public copy operational and buyer-first.
- Use frontend smoke checks for runtime page crashes.
