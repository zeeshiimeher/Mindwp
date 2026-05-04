# DESIGN — MindWP

> Source of truth for the live UI system.
> This document describes the production CSS architecture and styling ownership model.
> If this doc conflicts with live code under `src/styles/*`, code wins and this doc must be updated.

---

## USE THIS DOC

Use this doc when working on:

- design tokens
- layout and section shells
- reusable UI primitives
- component styling boundaries
- visual consistency rules

Do not use this doc to change page identity, metadata, CTA logic, graph logic, or content behavior.

For the active full-system/component refactor, use [../ui/system-xray.md](../ui/system-xray.md) as the operating guide under the authority of FOUNDATION, CONTENT, CONVERSION, GRAPH, DESIGN, and SYSTEM-RULES.

---

## LIVE DESIGN SYSTEM

MindWP uses a layered CSS system.

```text
foundation.css -> framework.css -> primitives.css -> components.css
```

That order is the design system.

Rules:

- Design is system-driven, not page-driven.
- Visual values enter through tokens first.
- Layout comes from the framework layer.
- Reusable UI atoms come from the primitive layer.
- Production shells live in the component layer.
- JSX should consume styles, not invent styling systems.

---

## 1. FOUNDATION LAYER

Owner: `src/styles/foundation.css`

This layer owns tokens only.

Current live token groups include:

- color tokens such as `--primary`, `--secondary`, `--accent`, `--accent-soft`
- surface and foreground tokens such as `--surface`, `--surface-soft`, `--fg-on-light`, `--fg-on-dark`
- spacing tokens such as `--space-*`, `--space-section`, `--space-inline`
- width tokens such as `--rd-page-max`, `--rd-content-max`, `--rd-text-max`
- typography tokens such as `--font-sans`, `--font-display`, `--text-*`, `--leading-*`, `--tracking-*`
- radii, shadows, borders, easing, duration, z-index, and breakpoint tokens

Rules:

- No component selectors belong here.
- No layout patterns belong here.
- No buttons, cards, nav, hero, or footer rules belong here.
- If a new visual value is needed, add the token here before consuming it elsewhere.

---

## 2. FRAMEWORK LAYER

Owner: `src/styles/framework.css`

This layer owns layout, shell rhythm, shared containers, grid patterns, and background or foreground utilities.

Current live framework classes include:

- `rd-section`, `rd-section--compact`, `rd-section--spacious`
- `rd-section-inner`
- `rd-container`, `rd-container--content`, `rd-container--text`
- `rd-grid`, `rd-grid--2`, `rd-grid--3`
- `rd-split`, `rd-split--reverse`
- `rd-stack`, `rd-stack--sm`, `rd-stack--lg`
- `rd-cluster`
- `rd-panel`
- `bg-*` and `text-*` framework utilities
- `rd-section-head*` section heading utilities

Rules:

- Shared vertical rhythm comes from `rd-section*`.
- Shared width comes from `rd-container*`.
- Shared layout comes from `rd-grid`, `rd-split`, `rd-stack`, and `rd-cluster`.
- Shared background and contrast handling stays in framework utilities.
- Section headers should use the `rd-section-head*` system instead of ad-hoc wrappers.

Forbidden:

- page-local container systems
- arbitrary width wrappers
- competing shell abstractions
- reviving `l-section` or `l-container` as current design truth

---

## 3. PRIMITIVES LAYER

Owner: `src/styles/primitives.css`

This layer owns small reusable UI atoms and their interaction states.

Current live primitive classes include:

- `rd-link`
- `rd-btn`, `rd-btn--primary`, `rd-btn--secondary`, `rd-btn--white`, `rd-btn--ghost`
- `rd-btn--sm`, `rd-btn--lg`
- `rd-card`
- `rd-panel-light`, `rd-panel-dark`
- `rd-badge`
- focus-visible behavior and tokenized hover states

Rules:

- Buttons, links, cards, badges, and low-level panels belong here.
- Hover and focus behavior must stay token-driven.
- Primitive states should be shared, not re-authored inside components.
- A component may compose primitives, but it should not replace them with a new local styling system.

Forbidden:

- `btn-primary`, `btn-outline`, `btn-outline-light` as active system primitives
- component-local button systems
- one-off card systems for ordinary reusable surfaces

---

## 4. COMPONENT LAYER

Owner: `src/styles/components.css`

This layer owns production component shells and route-level composed styling.

Current live ownership includes:

- header shell
- footer shell
- navigation states
- mobile nav panel styling
- other production component shells that are too specific for primitives but still belong in CSS

Rules:

- Component styling belongs in CSS, not JSX condition trees.
- Components consume tokens, framework classes, and primitives.
- Components may compose layout and primitives, but they do not define a parallel design system.
- Section renderers should stay presentational and use shared CSS layers.

Forbidden:

- inline production styling
- ad-hoc width, spacing, and color logic inside component files
- metadata, graph, or inventory logic mixed into style ownership

---

## 5. SECTION COMPOSITION MODEL

The default section pattern is:

1. `rd-section` for vertical rhythm
2. `rd-container` for page width
3. `rd-section-inner`, `rd-grid`, `rd-split`, or `rd-stack` for structure
4. primitives or component-shell classes for the interior UI

That is the expected path unless a component has a real structural exception.

Rules:

- Use framework shells before inventing new wrappers.
- Keep width and rhythm consistent across routes.
- Keep visual exceptions narrow and intentional.
- Repeated structures should become shared CSS, not repeated local markup hacks.

---

## 6. TYPOGRAPHY AND CONTRAST

The live typography system is token-based.

Current foundations:

- `--font-sans` for product UI copy
- `--font-display` for stronger display treatment
- `--font-mono` for code and machine-style surfaces
- `--text-*` and `--leading-*` tokens for scale and rhythm

Rules:

- Use typography tokens instead of hardcoded font sizes.
- Use foreground tokens and `bg-*` utilities so contrast stays system-owned.
- A dark surface must also carry the correct dark-surface foreground handling.
- Typography hierarchy should come from the token scale, not page-local exceptions.

---

## 7. NON-NEGOTIABLE DESIGN RULES

- No inline styles in production UI.
- No page-specific mini design systems.
- No local spacing scales.
- No component-owned hover or focus systems that bypass primitives.
- No revival of legacy class naming as current truth.
- No styling logic embedded in metadata or content layers.

Legacy files under `src/styles/_legacy` are not design authority and should not be used to define current rules.

---

## 8. MENTAL MODEL

Use this routing rule before adding styles:

```text
token value -> foundation.css
shared layout or shell -> framework.css
reusable atom -> primitives.css
production component shell -> components.css
```

If a change does not fit one of those layers, stop and place it correctly before editing.

---

## 9. DESIGN AUTHORITY SUMMARY

These are the active design truths:

- the `rd-*` layout system is live
- the four-layer CSS stack is live
- tokens drive color, spacing, type, borders, and motion
- primitives own reusable interaction surfaces
- components render with shared styling layers instead of local style systems

Anything outside that model is drift.
---

## 10. UI SYSTEM + COMPONENT ARCHITECTURE ALIGNMENT

This system does NOT treat components as isolated UI blocks.

Components are:
→ system surfaces  
→ content structures  
→ conversion carriers  

They must align with:
- FOUNDATION (business + positioning)
- CONTENT (page behavior)
- CONVERSION (intent + flow)
- GRAPH (relationships)

---

### COMPONENT DESIGN RULES (SYSTEM LEVEL)

- Components must reflect real content structure (not generic layouts)
- Components must not be created for visual variation only
- Components must support deterministic rendering (no randomness, no guessing)
- Components must map to real page sections and narrative flow
- Components must preserve page-type behavior (landing, system, entry)

---

### UI QUALITY RULES (MANDATORY)

Every component must enforce:

Visual Hierarchy
- clear primary → secondary → tertiary structure
- scannable layout (no flat blocks)

Layout Behavior
- avoid repetitive grids as default
- allow asymmetry where it improves clarity
- control density (compact / medium / spacious)

Interaction Layer
- subtle hover states allowed
- no decorative or unnecessary animation
- interaction must improve understanding, not distract

Attention Control
- first visible element must be intentional
- reading flow must guide progression

---
---

### INTERACTION AS SYSTEM BEHAVIOR (CRITICAL)

Interaction is NOT decoration.

Interaction is part of how the component communicates meaning.

Rules:

- Interaction must reinforce structure, not distract from it
- Interaction must help the user understand relationships (flow, grouping, priority)
- Interaction must be predictable and consistent across components

Valid interaction patterns:

- hover focus (highlighting one item within a group)
- progressive disclosure (FAQ, expandable details)
- emphasis shift (focus moves between items)
- subtle state feedback (active, selected, highlighted)

Invalid interaction patterns:

- decorative animation with no meaning
- delayed or staged reveals for visual effect
- motion that competes with content hierarchy

If interaction does not improve clarity, it must not exist.

---

### COMPONENT QUALITY BAR (ANTI-GENERIC RULE)

The system must actively reject generic UI patterns.

Not allowed:

- repeated card grids as default layout
- flat sections with no hierarchy
- identical cards with equal visual weight
- template-style SaaS sections reused across pages
- components that do not change scanning behavior

Required:

- clear hierarchy (primary → secondary → supporting)
- intentional layout differences between sections
- controlled asymmetry where it improves clarity
- visible grouping based on meaning (not spacing only)
- variation driven by structure, not styling

---

### SCANNING BEHAVIOR RULE

Every component must define how it is scanned.

Examples:

- Grid → peer scanning (no dependency)
- Stack → top-to-bottom dependency
- Timeline → directional progression
- Map → group → item → detail

Rule:

If scanning order is unclear, the component is incorrectly designed.

---

### STRUCTURE OVER STYLE RULE

Design decisions must prioritize structure over styling.

- Layout, grouping, and hierarchy come first
- Color, spacing, and typography support structure
- Styling must never be used to fake structural differences

If a difference can be removed without changing meaning,
it is not a structural difference.

### COMPONENT VS SECTION RULE

In MindWP:

Section = content intent + narrative role  
Component = structural + visual system to render that section  

Rules:
- Do not design components without section intent
- Do not design sections without component mapping
- Component system must follow page flow (not arbitrary placement)

---

### VARIANT RULE (STRICT)

Variants are structural differences, not styling changes.

A valid variant must change at least one of:
- layout structure (grid vs stack vs split)
- content grouping
- data requirement
- semantic meaning

Invalid variants:
- color-only changes
- spacing-only changes
- naming-only differences

---

### DATA ALIGNMENT RULE

Components must respect real data.

Rules:
- Read existing data before adding new props
- Do not invent props without need
- Prefer extending existing data structures over creating new ones
- Content richness must come from real data, not UI placeholders

---

### SYSTEM CONSISTENCY RULE

The UI system must:

- scale across all page types
- prevent visual repetition across pages
- support controlled uniqueness per page
- remain predictable for developers

---

### FINAL PRINCIPLE

This is NOT a component library.

This is:
→ a deterministic UI system driven by content, business logic, and conversion flow

Any component that does not support this must be removed or redesigned.

