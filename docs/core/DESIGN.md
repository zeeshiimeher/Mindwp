# MindWP Design System

> Long-term stable reference for the MindWP visual and design system.
> This document defines active design rules, CSS ownership, component responsibilities, and visual principles that survive after the hard reset is complete.
>
> `docs/Planning/System-hard-reset.md` is the temporary operating manual for the active reset process. That document will be retired once the rebuild is done.
> This document (`DESIGN.md`) is the permanent design authority going forward.
>
> If this doc conflicts with live code under `src/styles/*`, code wins and this doc must be updated.

---

## 1. Purpose

This document answers:

- What is the current CSS stack and who owns what?
- What are the active base components and their design responsibilities?
- What visual language and patterns should MindWP pages use?
- What are the hard design rules that must not be violated?

Use this doc when:

- working on design tokens, layout, or section shells
- adding or updating CSS for components or pages
- building new page sections or primitives
- checking visual/design rules for a rebuilt page

Do not use this doc to change content behavior, metadata, CTA routing logic, or data contracts.

---

## 2. Design Philosophy

MindWP design should feel: **operational, precise, calm, conversion-focused**.

Every design decision should read like infrastructure, not a brochure.

**Aim for:**

- system-first — surfaces feel like dashboards and operational panels, not landing pages
- clear before clever — hierarchy and meaning before visual interest
- quiet authority — typographically strong, not decorative
- premium but grounded — not generic SaaS, not template agency
- purposeful contrast — dark surfaces signal depth and ownership, not aesthetics

**Avoid:**

- generic agency look (random card grids, testimonial carousels, stock-photo hero)
- SaaS dashboard cosplay (fake charts, decorative progress bars, pointless status badges)
- over-designed process diagrams that obscure rather than clarify
- hype or flash — animation, gradients, or motion used for visual effect without meaning
- feature dumping — listing capabilities without context

The design exists to support the reader's decision, not to impress or signal effort.

---

## 3. Visual Language

MindWP pages use a consistent family of visual structures. These are not mandated section templates — they are the visual vocabulary that creates coherence.

**Structured surfaces:**
Signal boards, operational panels, enquiry feeds, status maps — surfaces that look like they are doing something. Dark backgrounds with structured data layouts.

**Signal boards and state displays:**
Items with `SignalDot` / `StatusBadge` states. Active, risk, warning, muted. Color is never the only signal — it is always paired with a label or shape.

**Connected flows and journey rails:**
Sequential stages, process steps, and cause/effect chains. Directional layout (left-to-right or top-to-bottom). Stage labels, outcomes, and routing logic made visible.

**Ownership boundary panels:**
Before/after, comparison, scope, or fit-filter layouts. Two-panel structures that define what's in and what's out.

**Quiet gradients and dark depth:**
Dark surfaces use restrained gradient depth, not decorative color. Gradients signal hierarchy, not decoration.

**Restrained motion:**
Motion supports comprehension — reveals, fades, panel transitions. Nothing spins, bounces, or plays for effect.

**High readability:**
Long lines break. Muted text supports primary text. Heading hierarchy is always clear.

---

## 4. CSS Stack

Current stack in import order:

```txt
tokens.css      → raw values only; all --mw-* token definitions
reset.css       → browser reset
typography.css  → global type scale
layout.css      → containers, SectionFrame, HeroFrame, motion utilities
primitives.css  → buttons, badges, Accordion, Tabs, signal/status atoms
components.css  → Header, Footer, DecisionPanel, RelatedSection, FAQSection
services.css    → domain bundle: aih-*, crm-*, rep-*, rev-* service page CSS
page/domain CSS → remaining page-specific visual bodies (home, smart-website, local-seo)
```

**Layer ownership rule:**

| Layer            | Contains                                                    |
| ---------------- | ----------------------------------------------------------- |
| `tokens.css`     | all `--mw-*` definitions; raw values only                   |
| `reset.css`      | browser reset; nothing custom                               |
| `typography.css` | font stack, scale, line heights                             |
| `layout.css`     | `mw-container`, `SectionFrame`, `HeroFrame`, motion classes |
| `primitives.css` | buttons, badges, Accordion, Tabs, signal/status primitives  |
| `components.css` | DecisionPanel, RelatedSection, FAQSection, Header, Footer   |
| page/domain CSS  | page visual classes only; `services.css` owns rebuilt service page domains (aih-*, crm-*, rep-*, rev-*) |

The `src/index.css` imports only this stack in order. No legacy CSS is imported.

---

## 5. Token Rules

**Namespace:** All tokens use `--mw-*`. No exceptions.

**Raw values** (raw hex, `rgba()`, hardcoded px sizes) belong only inside `tokens.css`. Every other CSS file must reference tokens via `var(--mw-*)`.

**Token groups:**

- brand: `--mw-brand-primary`, `--mw-brand-secondary`, `--mw-brand-white`, `--mw-brand-logo-ring` — identity colours for logos/brand assets only; not for use in general page/component CSS
- color: `--mw-color-dark`, `--mw-color-ink`, `--mw-color-surface-mist`, etc.
- alpha overlays: `--mw-white-02` through `--mw-white-85` — use instead of raw `rgba(255,255,255,X)`
- text/foreground: `--mw-text-primary`, `--mw-text-secondary`, `--mw-text-on-dark`, etc.
- surface: `--mw-bg-page`, `--mw-bg-mist`, `--mw-bg-dark`, `--mw-bg-dark-panel`
- spacing: `--mw-space-*`
- typography scale: `--mw-text-hero`, `--mw-text-h1`, `--mw-text-h2`, `--mw-text-body`, `--mw-text-label`
- font families: `--mw-font-sans` (Inter), `--mw-font-mono` (JetBrains Mono)
- line heights: `--mw-leading-tight`, `--mw-leading-heading`, `--mw-leading-body`, `--mw-leading-relaxed`
- width: `--mw-frame-max`, `--mw-container-max`, `--mw-container-text`
- radius: `--mw-radius-*`
- shadow: `--mw-shadow-*`, glow: `--mw-glow-*`
- signal: `--mw-signal-*` (core + tints)
- gradient: `--mw-gradient-*`
- motion: `--mw-dur-*`, `--mw-ease-*`
- z-index: `--mw-z-*`

**Rules:**

- Do not invent token names. Confirm the token exists in `tokens.css` before consuming it.
- If a new visual value is needed, add the token to `tokens.css` first.
- Do not create one-off tokens per section (bad: `--home-hero-left-special-gap`).
- Prefer semantic/scale tokens: `--mw-space-8`, `--mw-radius-panel`, `--mw-gradient-hero`.
- Token validator enforces this: raw hex or `rgba()` outside `tokens.css` fails.
- Valid CSS exemptions that do not need tokenization: `0`, `auto`, `inherit`, `currentColor`, `transparent`, `calc()`, `clamp()`, `min()`, `max()`.

---

## 6. Layout Rules

**Page frame reference:** `1440px` (`--mw-page-max`)

**Container:** approximately `1240px` (`--mw-container-max`). Use `mw-container` class — do not reinvent container patterns.

**Readable text:** constrained by `--mw-text-max`. Do not stretch readable paragraphs to full container width.

**Section shells:**

- Normal content sections use `SectionFrame` — owns `<section>`, `mw-container`, padding, heading block, tone/bg.
- Hero sections use `HeroFrame` — owns hero `<section>`, split layout, copy, actions, chips, visual slot.
- Do not manually compose `<section>` + container + heading for normal or hero sections.
- Page body visuals (visual JSX, data-driven panels) stay inside the section body, not the shell.

**CSS prefixes for page sections:** use semantic domain prefixes only:

| Domain                | Prefix       |
| --------------------- | ------------ |
| Homepage              | `home-*`     |
| Smart Website Systems | `sws-*`      |
| Local SEO Authority   | `lsa-*`      |
| Feature pages         | `feature-*`  |
| Industry pages        | `industry-*` |
| Case studies          | `case-*`     |
| Resources             | `resource-*` |
| Blog                  | `blog-*`     |

**CSS folder ownership:**

| Page/domain            | CSS location                                          |
| ---------------------- | ----------------------------------------------------- |
| Homepage               | `src/styles/pages/home.css`                           |
| Flagship service pages | `src/styles/services/[service].css`                   |
| Shared service styles  | `src/styles/services/services-base.css`               |
| Feature pages          | `src/styles/features/features-base.css`               |
| Industry pages         | `src/styles/industries/category.css` and `detail.css` |
| Case studies           | `src/styles/case-studies/case-study.css`              |
| Resources              | `src/styles/resources/resources.css`                  |
| Blog                   | `src/styles/blog/blog.css`                            |

Do not create one CSS file per content page. Template/content pages share domain CSS files.

---

## 7. Component Design Ownership

Active base components and their design responsibilities:

**`SectionFrame`** (`src/components/layout/`):
Owns the normal section shell: `<section>`, `mw-container`, padding, tone/background, heading block (kicker, title via `InlineText`, description). Does not own page body visuals.

**`HeroFrame`** (`src/components/layout/`):
Owns the hero section shell: `<section>`, container, split layout, copy side (title, description, actions, chips), visual slot, texture slot. Does not own page-specific visual internals.

**`DecisionPanel`** (`src/components/conversion/`):
Owns the final conversion section: heading, actions, reassurance text, expectations, gradient background. All new and rebuilt pages use `DecisionPanel` — not manual CTA markup.

**`FAQSection`** (`src/components/content/`):
Full reusable FAQ content section. Wraps `SectionFrame` + `Accordion`. Props: `eyebrow`, `title`, `description`, `items`, `initialOpenId`, `tone`, `variant` (stacked / split). Use for all FAQ sections in new/rebuilt pages.

**`RelatedSection`** (`src/components/navigation/`):
Global related-content section. Injected by domain config wrappers. Page renderers do not render their own related sections. Config: `relatedSection: { enabled?, variant? }`.

**`Accordion`** (`src/components/primitives/`):
Disclosure primitive only. No section shell, no container, no heading. Used internally by `FAQSection`. Use directly only when `FAQSection` does not apply.

**`Tabs`** (`src/components/primitives/`):
Tab primitive. Generic API (`items`, `description`, `entries`). No page-specific tab component variants.

**`InlineText`** (`src/components/primitives/`):
Renders `[[muted:...]]` markers as `.mw-text-muted` spans inside headings and titles. Used internally by `SectionFrame` and `HeroFrame`. Inline use only.

**`SignalDot`**, **`StatusBadge`** (`src/components/primitives/`):
Status primitives driven by `AccentKey` / `StatusTone` from `src/types/ui.ts`. Color is always paired with a label — never the sole signal.

**`InternalLink`** (`src/global/`):
Internal link primitive.

**CSS class namespace summary:**

| CSS prefix                | Component                  | CSS file         |
| ------------------------- | -------------------------- | ---------------- |
| `mw-section-frame`        | `SectionFrame`             | `layout.css`     |
| `mw-hero-section`         | `HeroFrame`                | `layout.css`     |
| `mw-decision-panel`       | `DecisionPanel`            | `components.css` |
| `mw-related-section`      | `RelatedSection`           | `components.css` |
| `mw-faq-section`          | `FAQSection`               | `components.css` |
| `mw-accordion`            | `Accordion`                | `primitives.css` |
| `mw-tabs`                 | `Tabs`                     | `primitives.css` |
| `mw-text-muted`           | `InlineText [[muted:...]]` | `layout.css`     |
| `mw-btn`, `mw-btn--*`     | button primitives          | `primitives.css` |
| `mw-badge`, `mw-badge--*` | badge/eyebrow              | `primitives.css` |
| `mw-animate-*`            | motion utilities           | `layout.css`     |

---

## 8. Page CSS Ownership

Page CSS files own page-specific visual bodies only. They do not own:

- section shells (owned by `SectionFrame` / `HeroFrame`)
- heading blocks (owned by `SectionFrame`)
- FAQ sections (owned by `FAQSection`)
- final conversion sections (owned by `DecisionPanel`)
- related sections (owned by `RelatedSection`)

After a page is rebuilt with base components, page CSS should only contain:

- page-specific card/grid/panel visual rules
- domain-specific color accents and surface treatments
- page-specific data visualisations and signal board layouts
- any custom section visuals that are intentionally unique to that page

Do not duplicate wrapper, heading, CTA, FAQ, or related CSS in page files after migration. Do not use generic names like `.card-grid` or `.process-step` for meaningful page visuals — use domain-prefixed names instead.

---

## 9. Visual Patterns

These are visual pattern families, not mandated reusable components. They describe the vocabulary of layout structures that MindWP pages use.

| Pattern family                   | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| Signal surface                   | Status/signal panel; active items with state dots and labels       |
| Leak map                         | Journey-stage leak diagram; flow with highlighted failure points   |
| Ownership boundary               | Before/after or fit-filter comparison; two-panel scope definition  |
| System stack / journey rail      | Sequential stages or phases with directional flow                  |
| Coverage map                     | Zone or area coverage grid; what is and is not covered             |
| Proof story                      | Observational scenario or case narrative; before and after context |
| Workbench / implementation board | Inputs, active work, and output/state display                      |
| Fit filter                       | Strong fit vs poor fit; binary or tiered qualification table       |
| Related rail / list              | Related systems, content, or context — compact linked list         |
| Decision panel                   | Final conversion section; action, reassurance, what-to-expect      |
| FAQ split / stacked              | FAQ disclosure in split or stacked layout                          |

Extract a pattern into a shared component only if it proves reusable across at least two different pages with identical structural requirements. Page-specific visual sections stay custom first.

---

## 10. Typography Rules

**Scale:** Use typography tokens — never hardcode font sizes.

- Display / hero: `--mw-text-hero`, `--mw-text-h1`
- Section headings: `--mw-text-h2`, `--mw-text-h2-sm`
- Sub-headings: `--mw-text-h3`
- Body copy: `--mw-text-body-lg`, `--mw-text-body`, `--mw-text-body-sm`
- Labels and kickers: `--mw-text-label`, `--mw-text-label-sm`

**Line heights:** `--mw-leading-tight`, `--mw-leading-heading`, `--mw-leading-snug`, `--mw-leading-body`, `--mw-leading-relaxed`

**Font families:** `--mw-font-sans` (Inter) for product copy; `--mw-font-mono` (JetBrains Mono) for code and machine-style surfaces.

**Rules:**

- Heading hierarchy must always be clear (`h1` → `h2` → `h3` → body).
- No all-caps noise except small kicker/label text with clear context.
- Muted inline text uses `[[muted:...]]` markers in data strings rendered by `InlineText` — do not use `titleMuted` or `headingMuted` props.
- Readable line lengths — respect `--mw-text-max` for paragraph content.
- No forced `<br>` line breaks unless intentional and tested across breakpoints.
- No decorative text gimmicks (outlines, gradient fills, randomly sized words).
- Dark surfaces must carry correct dark-surface foreground tokens (`--mw-text-on-dark`, `--mw-text-on-dark-muted`).

---

## 11. Color / Surface Rules

**Dark surfaces:**
Used intentionally to signal depth, ownership, or operational context. Not decorative. Always carry dark-surface foreground tokens. Use `--mw-surface-dark` and gradient variants from `--mw-gradient-*`.

**Light / mist surfaces:**
Used for breathing room, contrast, or neutral-context sections. Use `--mw-surface-mist`, `--mw-surface-white`.

**Signal colors:**
`--mw-signal-*` (active, teal, green) and `--mw-risk-*` (warning, error). Signal colors are always paired with a visible label or shape — color alone is never the full signal.

**Gradients:**
Use gradient tokens (`--mw-gradient-*`). Gradients are quiet, directional, and system-like. No rainbow gradients. No decorative color splashes. Gradient backgrounds must contrast correctly with their foreground text.

**Accent color:**
Accent is a system signal — it indicates active state, urgency, or structural emphasis. Not decoration.

**Rules:**

- No raw hex or `rgba()` outside `tokens.css`.
- No inline `style={{ color: '...' }}` in production TSX.
- Dark sections must handle contrast explicitly.
- Status colors are always text-supported.

---

## 12. Motion Rules

Motion system uses `data-js-motion` attribute on `<html>` and `IntersectionObserver` to trigger reveals.

**Classes:** `mw-animate-fade`, `mw-animate-up`, `mw-animate-panel`, `mw-animate-section`, `mw-animate-list`, `mw-animate-stagger`, `mw-animate-line`.

**Rules:**

- Motion supports clarity and content comprehension. It does not decorate.
- Use simple reveal motion only: fade, fade-up, stagger, panel slide.
- No heavy animation libraries. No keyframe sequences that compete with content.
- Without JS, everything is visible — no motion is required for a functional page.
- All motion respects `prefers-reduced-motion: reduce` (handled in `layout.css`).
- Motion must be intentional — if it does not improve comprehension, remove it.

**Invalid motion patterns:**

- Decorative looping animations
- Delayed staged reveals for visual effect only
- Anything that competes with content hierarchy

---

## 13. CTA / Conversion Design

`DecisionPanel` owns the final conversion section on all new and rebuilt pages.

**Design principles:**

- The final section must clarify what happens next, not hype a benefit.
- One primary action. Reassurance text below the action. Expectations list (optional).
- No manual CTA button markup in page renderers — use `DecisionPanel`.
- Use `buildContactHref()` from `@/lib/contact/contactHref` for action hrefs — no hardcoded `/contact`.
- Use `PRIMARY_CTA_LABEL` from `@/lib/cta/primaryAction` for the label — no hardcoded strings.

Hero section actions are not conversion CTAs — they support recognition and routing. The final conversion CTA belongs in `DecisionPanel` at the bottom of the page.

---

## 14. Related / FAQ Design

**`RelatedSection`:**

- Global visual pattern — single server component injected by domain config wrappers.
- Variants: `standard` (3-col grid), `compact` (list), `rail`.
- Page renderers do not render their own related sections.
- Config controls injection via `relatedSection: { enabled?, variant? }` in the domain registry.

**`FAQSection`:**

- Full FAQ section design owned by `FAQSection`.
- Variants: `stacked` and `split`. Tone: `white`, `mist`, `dark`.
- Use `FAQSection` rather than manually composing `SectionFrame` + `Accordion` for new pages.

**`Accordion`:**

- Disclosure primitive only — no section heading, no container.
- Do not use raw `<details>` / `<summary>` for FAQ sections in new pages.

---

## 15. Responsive Rules

- Mobile must preserve meaning, not just stack cards.
- Avoid hiding core decision information or conversion content on mobile.
- Signal boards and operational panels should collapse to a readable list, not disappear.
- Journey rails and process flows should re-stack vertically with clear step labels.
- Spacing uses tokens (`--mw-space-*`) — no hardcoded `px` for spacing in responsive rules.
- Typography scale is clamp-based — do not override with fixed sizes at breakpoints.

---

## 16. Accessibility Design Rules

- Visible focus states on all interactive elements.
- Color is never the sole signal — pair with shape, label, or text.
- Dark and light surfaces must meet readable contrast ratios.
- `SignalDot` / `StatusBadge` state is always also communicated via label or `aria-label`.
- Headings follow a logical hierarchy per page — no skipped levels.
- Interactive controls (Accordion, Tabs) use semantic elements (`<button>`, ARIA roles, ARIA labels).
- `prefers-reduced-motion` is respected by the motion system.
- Disabled or placeholder buttons must not appear in the accessibility tree.
- Do not use `aria-hidden` to hide meaningful content as a substitute for correct structure.

---

## 17. Reuse Rules

**Primitives first.** Before building a page-specific component, check if `SectionFrame`, `HeroFrame`, `Accordion`, `Tabs`, `DecisionPanel`, `FAQSection`, or `RelatedSection` already covers the need.

**Page-specific sections stay custom first.** Do not extract a section into a shared component until the same structural pattern has proven itself across at least two different pages with identical data requirements.

**Extract into a shared component only if:**

- the same shell/structure is used on two or more distinct pages
- the data contract is stable and shared
- extracting it would not reduce the visual distinction between those pages

**Shared component owns shell, page owns narrative body.** `SectionFrame` handles the section wrapper and heading. Page CSS handles the visual body. This boundary must be maintained.

**SectionFrame shell ownership rules (enforced by validator):**

- Section background and padding-block are owned by `SectionFrame`. Use the `tone` prop (`mist` / `white` / `dark` / `gradient-dark` / `gradient-mist` / `gradient-teal`). Do not duplicate in page CSS.
- Text colors for heading/description/eyebrow in dark/gradient-dark sections are owned by the tone system. Do not override in page CSS.
- Rebuilt page CSS must NOT contain selectors targeting `.mw-section-frame__header`, `.mw-section-frame__heading`, `.mw-section-frame__description`, or `.mw-section-frame__eyebrow`.
- Page CSS owns only visual body content: cards, grids, panels, data visualisations, textures, domain-specific widgets.

**SectionFrame layout variants:**

- Default: `layout='stack'` — header stacks above body. Existing behavior. No change to current pages.
- `layout='split'` — header and body in side-by-side columns. Add `ratio` to control column widths (`50-50` / `40-60` / `60-40`).
- Do not add `headerWidth` or `gap` props. These concepts do not exist in the current API.

**Avoid premature abstraction.** Over-abstracting pages toward identical templates destroys the visual distinction between MindWP's systems. Each page should look like it belongs to its system, not to a shared template grid.

---

## 18. Legacy Design Notes

The following belong to the old architecture and are not active design rules:

- `rd-*` layout classes (`rd-section`, `rd-container`, `rd-split`, `rd-stack`) — quarantine/delete-later
- `l-section`, `l-container` — quarantine/delete-later
- `btn-primary`, `btn-outline` — old button classes; quarantine
- `foundation.css`, `framework.css` — old CSS layers; deleted
- `PrimaryCTASection` — quarantine for remaining old consumers; replaced by `DecisionPanel`
- `RelatedContentSection`, `SmartRelatedSection`, `SmartRelatedSectionClient` — deleted in 6F
- `SectionShell` — deleted in 6G
- `src/components/reusable/`, `src/components/sections/` — quarantine; do not import in new/rebuilt files
- `titleMuted` and `headingMuted` props — replaced by `[[muted:...]]` syntax

These patterns exist only as fallout from unrebuilt pages. For deletion gates and remaining consumers, see `docs/Planning/Legacy-dependency-map.md`.

---

## 19. Mental Model for CSS Decisions

Before writing any CSS or placing any class, route it through this:

```txt
token value            → tokens.css
shared layout / frame  → layout.css  (mw-container, SectionFrame, HeroFrame, motion)
reusable atom          → primitives.css  (Accordion, Tabs, buttons, badges, signals)
shared component shell → components.css  (DecisionPanel, RelatedSection, FAQSection, Header, Footer)
page-specific visual   → domain/page CSS  (home.css, smart-website.css, local-seo.css, etc.)
```

If a change does not cleanly fit one of those layers, place it correctly before writing it.

---

## 20. Design Authority Summary

Active truths:

- Seven-layer CSS stack: `tokens.css → reset.css → typography.css → layout.css → primitives.css → components.css → page/domain CSS`
- `--mw-*` tokens drive all color, spacing, typography, borders, shadows, and motion
- `SectionFrame` owns normal section shells
- `HeroFrame` owns hero section shells
- `DecisionPanel` owns the final conversion section
- `FAQSection` owns full FAQ sections
- `RelatedSection` owns global related-content display, injected by config wrappers
- `InlineText` renders `[[muted:...]]` markers — no `titleMuted` / `headingMuted` props
- `Accordion` and `Tabs` are behavior primitives owned by `primitives.css`
- New components belong in `layout/`, `primitives/`, `conversion/`, `navigation/`, or `content/`
- Page CSS owns visual bodies only — not shells, headings, FAQ, CTA, or related sections
- Component styling belongs in CSS, not JSX condition trees or inline styles

Anything outside this model is drift.
