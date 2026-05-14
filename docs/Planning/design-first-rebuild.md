# MindWP Page Build Workflow

This is the active planning note for the main MindWP folder.

## Core Flow

```text
BUSINESS REALITY -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> TYPES / EXTRACTION
```

## Working Rules

- Start from the buyer's visible working day.
- Decide the page intent before composing sections.
- Choose the pattern logic that best explains the problem or decision.
- Compose the actual section in JSX first.
- Use Tailwind utilities plus existing `mw-*` and token classes for fast layout and responsive structure.
- Ask for visual approval before extracting shared primitives or data structures.
- Keep types broad enough to support the current page, then tighten them when the pattern is stable.

## Approved Base Components

- `HeroFrame`
- `SectionFrame`
- `FAQSection`
- `DecisionPanel`
- `SignalDot`
- `StatusBadge`

Use these when they help. Custom page-owned JSX is appropriate when the section needs a specific business explanation.

## Extraction

After approval, extract only what has proven stable:

- repeated primitives
- shared visual components
- stable data groups
- production metadata
- related-content rules
- tighter types

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
