# Design Planning Execution

> Redesign execution backlog.
> Decisions and tasks only. No commentary, no strategy essays.
> Update this file only when the user explicitly says `autopatch`.

---

## Operating Rule

- Do not edit implementation files from this doc directly.
- Use this doc to store redesign decisions, execution tasks, and constraints.
- Discuss decisions in chat first.
- Add or update this doc only after decisions are clear.
- If a future message does not include `autopatch`, do not modify this file.

---

## Current Redesign Mode

- Redesign is parallel, not replacement.
- `/services/smart-website-systems` stays untouched.
- `/dev/redesign/smart-website-systems` is the prototype route.
- Old global CSS files stay untouched for now.
- Prototype components and CSS stay isolated until approved.
- Approved patterns will later be extracted into reusable production components.

---

## Global Design System Tasks

### Token Usage

- Replace hardcoded colors inside redesign components with tokens.
- Inline styles are allowed only when values use CSS variables or tokens.
- Avoid direct hex, rgba, magic px values, and one-off visual values inside JSX.
- CSS may define tokens, but components must consume tokens.
- Gradients must use approved gradient tokens from `docs/ui/REDESIGN-GUIDE.md`.
- Functional colors must carry meaning only: risk, fixed, warning, status, before/after.

### Required Token Areas

Create or standardize redesign tokens for:

- colors
- gradients
- spacing
- container widths
- radius
- shadows
- borders
- motion duration
- motion easing
- section padding
- card padding
- grid gaps

---

## Layout Framework Tasks

### Base Layout Ownership

- `rd-section` owns default section padding and section rhythm.
- `rd-container` owns default width and inline padding.
- Default container should be wide enough for premium layouts.
- Components must not manually recreate container logic.
- Section-level spacing should come from framework classes and tokens.
- `rd-section` should not decide visual background by semantic meaning.
- Background decisions should come from background utility classes.
- Avoid classes like `rd-section--diagnostic` for reusable background behavior.

### Container Decisions

Default target widths:

```css
--rd-page-max: 1440px;
--rd-wide-max: 1320px;
--rd-content-max: 1180px;
--rd-text-max: 720px;
```

Required container variants:

- `rd-container`
- `rd-container--wide`
- `rd-container--content`
- `rd-container--text`

### Section Variants

Required section classes:

- `rd-section`
- `rd-section--compact`
- `rd-section--standard`
- `rd-section--spacious`

### Layout Primitives

Required primitives:

- `rd-grid`
- `rd-grid--2`
- `rd-grid--3`
- `rd-split`
- `rd-stack`
- `rd-cluster`
- `rd-panel`
- `rd-card`

---

## Class Naming Decisions

### Reusable Component Naming

Use general reusable component names for production-ready patterns.

Approved section component names:

- `HeroSplitSection`
- `IssueCardsSection`
- `BeforeAfterSection`
- `LayerStackSection`
- `ProcessStepsSection`
- `ProofStorySection`
- `FitCheckSection`
- `AccordionFAQSection`
- `CTASection`

Rules:

- Do not use page-specific names for reusable section components.
- Avoid names like `DiagnosticLeakageSection`, `SmartWebsiteHero`, `SmartWebsiteSystemPanel`, or `SWS*` for reusable components.
- Page-specific wrappers may keep page-specific names.
- Reusable components must describe layout/pattern, not page topic.
- Component names must stay understandable in live code and browser inspection.

### Framework + Component Pattern

Use framework classes for shared layout behavior and BEM-style component classes for component internals.

Preferred pattern:

```html
<section class="rd-section service-hero bg-gradient-hero">
  <div class="rd-container rd-container--wide">
    <div class="service-hero__grid">
      <div class="service-hero__copy"></div>
      <div class="service-hero__visual"></div>
    </div>
  </div>
</section>
```

Rules:

- Use `rd-*` for redesign framework primitives and utilities.
- Use component-specific BEM classes for component internals.
- Avoid deep one-off class names that cannot be reused.
- Avoid old-style random page-scoped classes for reusable components.
- Avoid `<header>` wrappers for internal section headings unless semantic need is clear.
- Use `div.rd-section-head` for internal section heading blocks.

Component BEM prefixes should match the approved component names:

| Component | BEM Prefix |
| --------- | ---------- |
| `HeroSplitSection` | `hero-split__*` |
| `IssueCardsSection` | `issue-cards__*` |
| `BeforeAfterSection` | `before-after__*` |
| `LayerStackSection` | `layer-stack__*` |
| `ProcessStepsSection` | `process-steps__*` |
| `ProofStorySection` | `proof-story__*` |
| `FitCheckSection` | `fit-check__*` |
| `AccordionFAQSection` | `accordion-faq__*` |
| `CTASection` | `cta-section__*` |

---

## Utility Class Tasks

Create controlled utilities for:

- background gradients
- surface backgrounds
- grid layouts
- flex alignment
- stack gaps
- text width
- card elevation
- reveal motion
- hover lift
- connector lines
- status dots

Required background utilities:

- `bg-surface`
- `bg-surface-soft`
- `bg-body`
- `bg-dark`
- `bg-gradient-hero`
- `bg-gradient-blue`
- `bg-gradient-compare`
- `bg-gradient-cta`

Required text-width utilities:

- `text-measure-sm`
- `text-measure-md`
- `text-measure-lg`

Rules:

- Utilities must use tokens only.
- Utilities must not introduce one-off colors or spacing values.
- Utilities must not replace component structure.

Background utility rules:

- Use background utilities to control section background rhythm.
- `rd-section` should provide spacing and structure only.
- Semantic section names should not own global background decisions.
- Default section rhythm can use body background with no extra background utility.
- Dark footer remains the default footer direction.
- If the footer is dark, the section immediately before it should usually be light/soft or contain only a contained dark panel, not a full dark section.

---

## Section Header System

Create a consistent section header system.

Required classes:

- `rd-section-head`
- `rd-section-head--left`
- `rd-section-head--center`
- `rd-section-head--split`
- `rd-section-kicker`
- `rd-section-title`
- `rd-section-description`

Required kicker variants:

- `rd-kicker`
- `rd-kicker--risk`
- `rd-kicker--good`
- `rd-kicker--neutral`
- `rd-kicker--dark`

Rules:

- Section headers must control alignment, max width, spacing, and dark/light variants.
- Eyebrow/kicker must not stretch full width unless explicitly intended.
- Section descriptions should use `--rd-text-max` or a controlled text-width utility.
- Section heading structure should be consistent across prototype sections.
- Do not set a global `max-width` on `rd-section-title`.
- Control heading width through `rd-section-head` variants or text-measure utilities.
- Default section heading alignment should be left aligned unless a page pattern needs center or split alignment.

---

## Motion System Tasks

Create reusable CSS motion utilities.

Required classes:

- `rd-reveal`
- `rd-reveal-up`
- `rd-hover-lift`
- `rd-line-reveal`
- `rd-pulse`
- `rd-float-subtle`
- `rd-glow-breathe`

Apply motion to:

- hero visual panel
- hero status rows
- diagnostic cards
- before/after connector
- system layer cards
- process steps
- proof cards
- FAQ accordion
- final CTA panel/checklist

Rules:

- Respect `prefers-reduced-motion`.
- Motion must be calm and useful.
- Avoid bouncy, playful, spinning, or distracting animation.
- Motion should make the system feel active and understandable.

---

## Button System Tasks

Button behavior must be tokenized and consistent.

Rules:

- Primary button hover must not jump to cyan by default.
- Primary button on dark background: white background, dark text, subtle warm/soft-white hover.
- Primary button on light background: navy background, white text, deeper navy hover.
- Accent/cyan button treatment is allowed only when intentionally selected.
- Button colors, borders, shadows, and hover states must use tokens.
- Avoid one-off button styles inside sections.

---

## Gradient and Color Token Tasks

Redesign colors and gradients must become token-driven.

Rules:

- Define redesign color tokens using OKLCH where practical.
- Gradients must reference color tokens instead of raw hex/rgb/rgba values.
- Use `color-mix(in oklch, ...)` for transparent glow and tint effects where practical.
- Do not hardcode raw gradient colors inside component CSS after tokens exist.
- Decorative glow should live in CSS pseudo-elements when possible.
- Hero atmosphere/glow should be owned by the hero section class, not extra decorative HTML.

---

## Content/Data Rules

- Important text must come from data or props.
- Avoid hardcoded marketing/content strings inside reusable components.
- Components may contain structural labels only when unavoidable.
- Hero mockup rows should come from props/data.
- CTA support bullets should come from props/data.
- Diagnostic labels should come from props/data or a controlled config.
- Layer names should come from props/data or a controlled config.
- Do not expand content volume during redesign.
- Small copy tightening is allowed only when required by visual layout.
- Components should not contain default marketing text unless explicitly approved.
- Structural placeholder text should be avoided where real data/props can be passed.

---

## Hero Family Decisions

Do not force one hero component across all page types.

Hero families:

- Homepage hero: one-column authority hero, no required right visual.
- Service hero: two-column hero with operational visual.
- Industry hero: situation-first hero with industry-specific visual.
- Case-study hero: proof/narrative hero.
- Resource/blog hero: clean readable hero with minimal visual weight.

Service hero variation:

- Service pages may share the same hero framework.
- Service pages should not all use the exact same visual style.
- Variation may come from gradient role, right-side visual type, status rows, system diagram, layer stack, or proof card.

Smart Website prototype hero decisions:

- Keep two-column hero direction.
- Badge must not stretch full width.
- Keep only one chip/meta group unless both groups serve distinct meaning.
- Hero visual should be animated with subtle row/status movement.
- Hero visual must remain schematic, not fake product screenshot.

---

## Page Rhythm Decisions

Service-page preferred rhythm:

```text
Dark hero
Light or body-background issue section
Dark/blue comparison section
Light interactive system section
Dark process or proof section
Light fit/FAQ section
Light/soft final CTA
Dark footer
```

Rules:

- Avoid dark CTA directly before dark footer unless there is a clear separator or light wrapper.
- Final CTA before footer should usually be light/soft with a strong contained panel.
- Do not make every section visually heavy.
- Alternate section weight through background utilities, spacing, panels, and interaction.
- Section backgrounds should support page rhythm, not decorate randomly.

---

## Smart Website Prototype Section Tasks

### Section 1 — Hero

- Keep direction.
- Fix full-width badge.
- Remove or merge duplicate chip/meta groups.
- Animate visual rows/status pills/glow/panel movement.
- Ensure visual content comes from props/data.
- Move decorative glow/background atmosphere to CSS pseudo-elements where possible.
- Use `HeroSplitSection` naming for reusable hero pattern planning.

### Section 2 — Where It Leaks

- Current card-grid direction is not approved.
- Do not keep simple white diagnostic cards as the final pattern.
- Preferred redesign direction: leak timeline or diagnostic board.
- Option A: leak timeline showing `Search → Page → Form → Inbox → Follow-up → Booking`.
- Option B: diagnostic board showing how a lead gets lost through disconnected steps.
- Use 3-column grid only if the cards are redesigned into strong premium diagnostic tiles.
- Six items should not display as a weak generic card grid.
- Reduce repeated `Leak point` labels.
- Add stagger reveal, hover lift, and meaningful connector/flow treatment.
- Improve hierarchy, spacing, and icon/status treatment.
- Use `IssueCardsSection` naming for reusable issue-card pattern planning.

### Section 3 — Broken vs Fixed

- Keep direction.
- Reduce excessive dots.
- Dots should carry meaning, not appear on every tiny element.
- Keep strong dark comparison panel.
- Improve connector/transition animation.
- Use `BeforeAfterSection` naming for reusable comparison pattern planning.

### Section 4 — System Layers

- Current accordion/list direction is not approved.
- Do not keep left mockup plus long numbered list as final pattern.
- Do not make this section look like the hero visual.
- Redesign as an interactive layer explorer.
- Left or top area should show the five system layers visually:
  - Visibility
  - Capture
  - Routing
  - Follow-up
  - Proof
- Right or detail area should update based on the active layer.
- Each active layer should show:
  - what it handles
  - what breaks without it
  - included items
  - visible outcome
- Only one layer should be active/open at a time.
- Mobile version may become an accordion, but closed content must be hidden.
- Add active-layer animation, connector movement, or step-through interaction.
- Visual style must differ from hero and must feel like infrastructure, not a simple FAQ.
- Use `LayerStackSection` naming for reusable layered-system pattern planning.

### Section 5 — How It Works

- Keep section.
- Add connector animation and step reveal.
- Apply minor polish only.
- Use `ProcessStepsSection` naming for reusable process pattern planning.

### Section 6 — Real Outcome

- Keep section with polish.
- Make it read visually as Before → What changed → After.
- Strengthen the center card.
- Reduce dense text feeling where possible without changing meaning.
- Add subtle connector/transition.
- Use `ProofStorySection` naming for reusable proof/story pattern planning.

### Section 7 — Fit Check

- Keep section.
- Minor polish only.
- Use `FitCheckSection` naming for reusable fit-check pattern planning.

### Section 8 — FAQ

- Convert to controlled accordion.
- Only one item open at a time.
- First item may be open by default, or all closed by default.
- Closed item content must be fully hidden.
- Current behavior where closed content remains visible is a bug.
- Add smooth open/close animation.
- Avoid uncontrolled `details` if it allows multiple open items or visible closed content.
- Use `AccordionFAQSection` naming for reusable FAQ pattern planning.

### Section 9 — Final CTA

- Current full-dark final CTA direction is not approved when footer remains dark.
- Footer should stay dark by default.
- Final CTA before dark footer should usually be light/soft with a strong contained panel.
- Preferred direction: light/soft section with CTA copy on one side and operational checklist/status card on the other.
- Avoid dark section directly touching dark footer unless there is a clear rhythm reason.
- Improve spacing, authority, and right-side checklist panel.
- Add subtle motion/glow/checklist animation.
- CTA support bullets must come from props/data.
- Use `CTASection` naming for reusable CTA pattern planning.

---

## Page-Level Tasks

### Homepage

- Not redesigned yet.
- Plan only for now.
- Homepage hero may be one-column without right visual.
- Homepage should feel like primary authority surface.
- Do not reuse service hero blindly.

### Service Pages

- Smart Website prototype is the first service-page visual test.
- Service pages may share framework primitives.
- Service pages should vary visuals by system and intent.
- Do not use the exact same hero visual for every service page.

### Industry Pages

- Not redesigned yet.
- Must remain situation-first and industry-specific.
- Should not copy service-page layout blindly.

### Case Studies

- Not redesigned yet.
- Must feel proof-led and believable.
- Should not use sales-page hero structure.

### Resource/Blog Pages

- Not redesigned yet.
- Should stay readable and lighter than service pages.
- Should use the design system without over-design.

---

## Extraction Rules

Do not extract prototype components into production until:

- Smart Website prototype section direction is approved.
- Framework primitives are stable.
- Token usage is clean.
- Hardcoded content is removed from reusable components.
- Animations are systemized.
- Section patterns are reusable beyond one page.
- Build and validators are clean.

---

## Validation Expectations

After redesign changes, run safe checks:

- typecheck
- lint
- build if safe
- targeted validators that previously flagged issues

Do not modify validators to make prototype pass.
Do not weaken production contracts.
Do not touch live service route until prototype is approved.
