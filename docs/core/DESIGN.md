# Design

MindWP design should feel operational, precise, calm, and commercially serious.

## Design Direction

Start with business reality, then choose the section composition.

Strong MindWP sections often look like:

- dark split hero
- diagnostic lane map
- operating map
- signal board
- featured card plus support cards
- before/after panel
- handoff surface
- compounding staircase
- priority map
- fit filter

Avoid generic agency layouts, decorative dashboards, random icon grids, fake charts, and tech-first diagrams.

## Build-System Design

Allowed in the MindWP build system:

- Tailwind layout/composition utilities
- JSX-owned content
- local arrays
- page-owned sections
- page-local helper components
- repeated JSX until a pattern proves it should be extracted
- custom section layouts
- flexible section count

Do not block page design work because a section is not using `SectionFrame`, `HeroFrame`, a data file, or a shared renderer. Those can be extracted after approval and proven patterns.

## Tailwind and Tokens

Use Tailwind for layout, spacing, responsive behavior, and typography while designing.

Prefer MindWP tokens for colors and surfaces when available. Strict token and raw-color enforcement is deferred until after approved designs are stable.

Future production target:

- Tailwind for layout and composition.
- MindWP tokens for colors, surfaces, and signals.
- Extract stable repeated visual primitives after approval.

## Visual Taste

- Show state and ownership, not abstract architecture.
- Pair color with labels or shape; never rely on color alone.
- Make the leak or handoff visible before explaining the system.
- Keep typography clear and readable.
- Use motion only when it helps comprehension.
- Prefer calm confidence over hype.
