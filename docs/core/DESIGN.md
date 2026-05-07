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

For the active full-system/component refactor, see [../Planning/System-hard-reset.md](../Planning/System-hard-reset.md) and [../Planning/Legacy-dependency-map.md](../Planning/Legacy-dependency-map.md).

---

## LIVE DESIGN SYSTEM

MindWP uses a layered CSS system.

```text
tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> domain/page CSS
```

That order is the design system.

Rules:

- Design is system-driven, not page-driven.
- Visual values enter through tokens first.
- Layout and shared section frames come from the layout layer.
- Reusable UI atoms come from the primitive layer.
- Production shells live in the component layer.
- Page-specific visual bodies live in domain/page CSS.
- JSX should consume styles, not invent styling systems.

---

## 1. TOKEN LAYER

Owner: `src/styles/tokens.css`

This layer is the only raw-value source. All tokens use the `--mw-*` namespace.

Current live token groups include:

- color tokens such as `--mw-color-*`
- surface and foreground tokens such as `--mw-text-primary`, `--mw-text-secondary`, `--mw-text-muted`, `--mw-surface-*`
- spacing tokens such as `--mw-space-*`
- width tokens such as `--mw-page-max`, `--mw-container-max`, `--mw-content-max`, `--mw-text-max`
- typography tokens such as `--mw-font-*`, `--mw-text-*`, `--mw-leading-*`
- signal tokens such as `--mw-signal-*`, `--mw-risk-*`
- radii, shadows, borders, easing, duration, z-index, and breakpoint tokens

Rules:

- No component selectors belong here.
- No layout patterns belong here.
- No buttons, cards, nav, hero, or footer rules belong here.
- All normal CSS files must reference tokens via `var(--mw-*)` — no raw hex or `rgba()` outside this file.
- Do not invent token names. Confirm the token exists before consuming it.
- If a new visual value is needed, add the token here before consuming it elsewhere.

---

## 2. LAYOUT LAYER

Owner: `src/styles/layout.css`

This layer owns layout rhythm, shared containers, base component CSS, reveal motion, and shared inline text utilities.

Current live layout classes include:

- `mw-container` — shared page width constraint
- `mw-section-frame` and `mw-section-frame__*` — owned by `SectionFrame` component
- `mw-hero-section` and `mw-hero-section__*` — owned by `HeroFrame` component
- `mw-text-muted` — shared inline muted text; produced by `InlineText [[muted:...]]`
- reveal motion classes (`mw-reveal-*`)

Rules:

- Shared vertical rhythm comes from `SectionFrame` and `HeroFrame` components via `layout.css`.
- Shared page width comes from `mw-container`.
- Section shells must use `SectionFrame` for normal sections and `HeroFrame` for hero sections.
- Do not reinvent container or section wrapper patterns outside this layer.

> **Legacy note:** `rd-section`, `rd-container`, `rd-grid`, `rd-split`, `rd-stack`, `rd-section-inner`, and the `framework.css` file are from the old system. They are quarantine/delete-later fallout used only by unrebuilt old pages. Do not use them for new or rebuilt pages.

---

## 3. PRIMITIVES LAYER

Owner: `src/styles/primitives.css`

This layer owns small reusable UI atoms and their interaction states.

Current live primitive classes include:

- `mw-btn`, `mw-btn--*` variants — button primitives
- `mw-badge`, `mw-badge--*` — badge/eyebrow primitives
- `mw-accordion` and `mw-accordion__*` — owned by `Accordion` component
- `mw-tabs` and `mw-tabs__*` — owned by `Tabs` component
- focus-visible behavior and tokenized hover states

Rules:

- Buttons, links, badges, disclosure primitives, and low-level panels belong here.
- Hover and focus behavior must stay token-driven.
- Primitive states should be shared, not re-authored inside components.
- A component may compose primitives, but it should not replace them with a new local styling system.

Forbidden:

- `btn-primary`, `btn-outline`, `btn-outline-light` as active system primitives — these are quarantine/legacy
- `rd-btn`, `rd-card`, `rd-panel-*` as active primitives — these are quarantine/legacy
- component-local button systems
- one-off card systems for ordinary reusable surfaces

---

## 4. COMPONENT LAYER

Owner: `src/styles/components.css`

This layer owns production component shells and composed shared component styling.

Current live ownership includes:

- header shell
- footer shell
- navigation states
- mobile nav panel styling
- `mw-decision-panel` and `mw-decision-panel__*` — owned by `DecisionPanel`
- `mw-related-section` and `mw-related-section__*` — owned by `RelatedSection`
- `mw-faq-section` and `mw-faq-section__*` — owned by `FAQSection`

Shared component CSS namespace summary:

| CSS class prefix | Component |
|---|---|
| `mw-section-frame` | `SectionFrame` (layout.css) |
| `mw-hero-section` | `HeroFrame` (layout.css) |
| `mw-decision-panel` | `DecisionPanel` (components.css) |
| `mw-related-section` | `RelatedSection` (components.css) |
| `mw-faq-section` | `FAQSection` (components.css) |
| `mw-accordion` | `Accordion` (primitives.css) |
| `mw-tabs` | `Tabs` (primitives.css) |
| `mw-text-muted` | `InlineText [[muted:...]]` (layout.css) |

Rules:

- Component styling belongs in CSS, not JSX condition trees.
- Components consume tokens, layout, and primitives.
- Components may compose layout and primitives, but they do not define a parallel design system.
- Section renderers should stay presentational and use shared CSS layers.

Forbidden:

- inline production styling
- ad-hoc width, spacing, and color logic inside component files
- metadata, graph, or inventory logic mixed into style ownership
- duplicating shared component CSS in page CSS files

---

## 5. SECTION COMPOSITION MODEL

The default section pattern for new/rebuilt pages is:

1. `SectionFrame` for normal content section shells (owns `<section>`, `mw-container`, heading block, padding, tone)
2. `HeroFrame` for hero section shells (owns `<section>`, split layout, actions, chips, visual slot)
3. `FAQSection` for FAQ sections (wraps `SectionFrame` + `Accordion`)
4. `DecisionPanel` for final conversion sections
5. `RelatedSection` injected globally by config wrappers — not by page renderers
6. Page-specific visual JSX and CSS inside section body

For inline muted text in headings: use `[[muted:...]]` syntax in data strings. `InlineText` renders the marker. Do not use `titleMuted` or `headingMuted` props.

Rules:

- Use base components before inventing new wrappers.
- Keep width and rhythm consistent across routes.
- Keep visual exceptions narrow and intentional.
- Repeated structures should become shared CSS, not repeated local markup hacks.
- Page CSS files own only page-specific visual bodies — not section shells.

> **Legacy note:** The old pattern using `rd-section`, `rd-container`, `rd-section-inner` remains in unrebuilt old pages as quarantine fallout. Do not use it for new or rebuilt pages.

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
token value            -> tokens.css
shared layout / frame  -> layout.css  (SectionFrame, HeroFrame, mw-container)
reusable atom          -> primitives.css  (Accordion, Tabs, buttons, badges)
production component   -> components.css  (DecisionPanel, RelatedSection, FAQSection, Header, Footer)
page-specific visuals  -> domain/page CSS  (home.css, smart-website.css, etc.)
```

If a change does not fit one of those layers, stop and place it correctly before editing.

---

## 9. DESIGN AUTHORITY SUMMARY

These are the active design truths:

- the six-layer CSS stack is live: `tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> domain/page CSS`
- `--mw-*` tokens drive color, spacing, type, borders, and motion
- `SectionFrame` owns normal section shells
- `HeroFrame` owns hero section shells
- `DecisionPanel` owns final conversion sections
- `FAQSection` owns full FAQ sections
- `RelatedSection` owns global related-content display, injected by config wrappers
- `InlineText` renders `[[muted:...]]` markers — no `titleMuted` / `headingMuted` props
- primitives own reusable interaction surfaces (Accordion, Tabs, buttons, badges)
- components render with shared styling layers instead of local style systems
- new components belong in `layout/`, `primitives/`, `conversion/`, `navigation/`, or `content/`
- `src/components/reusable` and `src/components/sections` are quarantine/delete-later only

Anything outside that model is drift.

> **Legacy note:** The `rd-*` layout system, `foundation.css`, and `framework.css` are from the old architecture. They remain only as quarantine fallout for unrebuilt pages. They are not active design authority.
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

