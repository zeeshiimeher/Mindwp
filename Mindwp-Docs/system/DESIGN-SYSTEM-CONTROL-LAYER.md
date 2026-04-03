# MindWP Design System — Control Layer (Phase 5)

> Defines **how the UI should behave globally** — rules, not refactoring.

---

## 1. SECTION RHYTHM RULES

### Current State: ✅ EXCELLENT

| Metric | Value |
|--------|-------|
| Sections using `l-section` | **42+ TSX files** |
| `l-section--compact` consumers | 1 (OperationalShiftCardsSection) |
| `l-section--spacious` consumers | 1 (SimpleHero) |
| Sections without `l-section` (intentional) | 13 |
| CSS classes overriding section padding | 3 (all tokenized) |

### Rules

| # | Rule | Enforcement |
|---|------|-------------|
| S1 | Every page-level `<section>` MUST use `l-section` | Code review |
| S2 | No section may override padding unless: **hero**, **CTA**, or **footer** | `.cta` uses `--site-padding-y`, `.footer` uses `--space-9`/`--space-8` — both approved |
| S3 | `l-section--compact` for condensed sections, `l-section--spacious` for hero/prominent sections | Available modifiers |
| S4 | Blog post sections, resource detail sections, and case study detail sections are exempt (content-flow elements, not page sections) | By design |

### Approved Exceptions

| Component | Why |
|-----------|-----|
| `.cta` | Full-bleed CTA panels need custom vertical padding (`--site-padding-y`) |
| `.footer` | Footer has asymmetric padding (`--space-9` top, `--space-8` bottom) — intentional |
| `.system-capabilities` | Uses `--l-section-padding` directly — equivalent to `l-section` |
| Blog/Resource/CaseStudy detail sections | Content-flow elements inside article, not page-level sections |

---

## 2. HEADING HIERARCHY RULES

### Current State: ⚠️ NEEDS GOVERNANCE

**Token adoption**: 39% explicitly tokenized font-size, 25% inherit (no explicit size), 2% hardcoded.

### Rules

| # | Rule | Token |
|---|------|-------|
| H1 | Page hero headings | `--font-3xl` to `--font-4xl` |
| H2 | Section titles | `--font-2xl` (standard) or `--font-3xl` (narrative/hero sections) |
| H3 | Card titles, sub-section headings | `--font-lg` to `--font-xl` |
| H4 | Small titles, labels | `--font-base` to `--font-sm` |
| H5 | Weight or color changes only | Inherit parent size |

| # | Rule |
|---|------|
| H6 | Each section → max 1 primary heading (h2-level) |
| H7 | Heading `margin-bottom` follows this scale: h2 → `--space-4` to `--space-6`, h3 → `--space-2` to `--space-3`, h4 → `--space-1` to `--space-2` |
| H8 | All headings SHOULD use `line-height: var(--line-height-tight)` |
| H9 | All headings SHOULD use explicit `font-weight` token |

### Known Violations

| Type | Count | Details |
|------|-------|---------|
| Missing font-size (inherits) | ~11 card titles | `.benefit-card__title`, `.how-it-works-step__title`, `.case-study-card__title`, `.process-step__title`, `.solution-card__title`, `.use-case-card__title`, `.reusable-card__title`, `.blog-landing__card-title`, etc. |
| Hardcoded font-size | 2 selectors | `.cta-heading` uses `1.875rem`/`2.25rem` (intentionally off-grid for CTA branding) |
| Hardcoded line-height | 1 selector | `.cta-heading` uses `1.2` (close to `--line-height-tight: 1.25`) |
| Hardcoded margins | 3 selectors | `.legal-content h1/h2/h3` — legal pages only |

### Assessment

The 11 card titles that inherit font-size are **not broken** — they work because their parent `<h3>` or `<h4>` tags provide browser defaults. However, they become fragile if parent context changes. This is a **design governance gap**, not a CSS bug.

The `.cta-heading` hardcoded values (`1.875rem`, `2.25rem`, `1.5rem`) sit between token steps and are intentional branding sizes. Do NOT force-fit to tokens.

---

## 3. CARD USAGE RULES

### Current State: ✅ GOOD (no changes needed)

### Rules (NOT CSS — decision rules)

| # | When | Card Style | Padding |
|---|------|-----------|---------|
| C1 | Informational content (features, benefits, processes) | Bordered (`1px solid --c-border-alpha`) | `--card-padding` |
| C2 | Highlighted content (case studies, testimonials) | Bordered + shadow (`--shadow-lg` or `--shadow-xl`) | `--card-padding` |
| C3 | Interactive/CTA content | No border, custom background | Component-specific |
| C4 | Dense layouts (grids of 4+) | Bordered, no shadow | `--card-padding` |
| C5 | Prominent/featured cards | Stronger border (2px) + hover shadow | `--card-padding` |

### Padding Token Usage

| Token | Value | Usage | Status |
|-------|-------|-------|--------|
| `--card-padding` | `var(--space-5)` (20px) | 20+ components | ✅ Active |
| `--card-padding-lg` | `var(--space-6)` (24px) | 0 components | ⚠️ Unused — keep for future |
| `--card-padding-tight` | `var(--space-4)` (16px) | 0 components | ⚠️ Unused — keep for future |

### Card Border Patterns (Observed)

| Pattern | Components |
|---------|-----------|
| `1px solid var(--c-border-alpha)` | `.business-use-case-card`, `.feature-list`, `.workflow`, `.feature-card`, `.reusable-card` |
| `2px solid` (stronger) | `.problem-solution`, `.technologies__card`, `.faq__card` |
| Border + hover shadow | `.portfolio-section__card`, `.industry-features__card`, `.technologies__card` |
| Border + always shadow | `.how-it-works-step__card`, `.case-study-card` |

### Orphan Utilities

`.card-bordered` and `.card-elevated` exist in CSS but have **0 TSX consumers**. Cleaned up in Phase 4 (standalone, no `--tw-*` deps). Keep as available utilities for future use.

---

## 4. BUTTON SYSTEM RULES

### Current State: ✅ WELL-STRUCTURED

### Variant Inventory

| Variant | Background | Text | Border | Usage Count |
|---------|-----------|------|--------|-------------|
| `btn-primary` | `--c-accent` | `--c-text-inverse` | none | ~15 |
| `btn-secondary` | `--c-dark` | `--c-text-inverse` | none | ~3 |
| `btn-outline` | transparent | `--c-primary` | `--c-primary` 2px | ~8 |
| `btn-outline-light` | transparent | `--c-text-inverse` | `--c-text-inverse` 2px | ~2 |
| `btn-white` | `--c-surface` | `--c-primary` | `--c-text-inverse` 2px | ~3 |
| `btn-link` | transparent | `--c-primary` | none | ~8 |

### Size Variants

| Class | Padding | Font Size |
|-------|---------|-----------|
| `btn--sm` | 0.6rem 1rem | `--font-base` |
| `btn--md` | 0.8rem 1.2rem | `--font-lg` |
| `btn--lg` | 1rem 1.5rem | `--font-xl` |

### Usage Rules

| # | Rule |
|---|------|
| B1 | **Primary** (`btn-primary`) → main call-to-action only. Max 1 per visible section |
| B2 | **Secondary** (`btn-secondary`) → supporting action alongside primary |
| B3 | **Outline** (`btn-outline`) → low-priority, pagination, cancel/dismiss |
| B4 | **White** (`btn-white`) → on dark backgrounds only |
| B5 | **Link** (`btn-link`) → card/inline actions, "Learn more" patterns |
| B6 | **Outline-light** (`btn-outline-light`) → on dark backgrounds, secondary to white |
| B7 | Prefer `Button` component over raw `<button className='btn ...'>` |
| B8 | Size default is `btn--md`. Use `btn--sm` for headers/compact UI, `btn--lg` for hero CTAs |

### Known Issues

| Issue | File | Fix |
|-------|------|-----|
| ~~`btn--primary` typo~~ | ~~RelatedSectionCTA.tsx~~ | ✅ Fixed → `btn-primary` (commit `5eba594`) |
| `.btn-small` legacy alias | Header.tsx (3 consumers) | Low priority — functionally identical to `btn--sm` |
| Direct class strings vs Button component | Header.tsx, Contact.tsx form, ConversationFormIsland.tsx | Refactoring opportunity for future |

---

## 5. TEXT SYSTEM RULES

### Current State: ✅ EXCELLENT

**100% tokenized** — no hardcoded font-sizes or colors in text/description elements.

### Text Color Hierarchy

| Token | Purpose | Example Usage |
|-------|---------|---------------|
| `--c-text` | Headings, primary text | All heading classes |
| `--c-text-muted` | Body text, descriptions | Card descriptions, step text |
| `--c-text-subtle` | Captions, metadata | Labels, timestamps |
| `--c-text-inverse` | Text on dark backgrounds | CTA sections, dark cards |

### Rules

| # | Rule |
|---|------|
| T1 | Max 2 text color tiers per section: `--c-text` (heading) + `--c-text-muted` (body) |
| T2 | `--c-text-subtle` reserved for metadata/captions only — never for primary content |
| T3 | Body text: `--font-sm` (default) or `--font-base` (prominent). No random sizes |
| T4 | Description line-height: `--line-height-prose` (1.6) or `--line-height-prose-relaxed` (1.7) |
| T5 | No utility text classes needed — BEM scoping handles all cases |

---

## 6. SPACING CONSISTENCY RULES

### Current State: ⚠️ MOSTLY GOOD, SOME DRIFT

### Gap Distribution (145 declarations)

| Token | Count | % | Usage Pattern |
|-------|-------|---|---------------|
| `--space-2` (8px) | 39 | 27% | Icon gaps, tight inline spacing |
| `--space-4` (16px) | 29 | 20% | Card internal gaps, list items |
| `--space-3` (12px) | 24 | 16% | Small component gaps |
| `--space-6` (24px) | 17 | 12% | Section grid gaps, card grids |
| `--space-5` (20px) | 5 | 3% | Transition spacing |
| `--space-7` (32px) | 5 | 3% | Large gaps between blocks |
| `--space-8` (48px) | 4 | 3% | Section-level separators |

### Rules

| # | Rule | Token |
|---|------|-------|
| SP1 | Icon + text inline gap | `--space-2` (8px) |
| SP2 | Card internal element gap (title → description) | `--space-2` to `--space-3` |
| SP3 | List/grid item gap | `--space-4` (16px) |
| SP4 | Section card grid gap | `--space-6` (24px) |
| SP5 | Section header → content | `--space-7` (32px) |
| SP6 | Section-to-section | Handled by `l-section` padding |

### Known Inconsistencies

| Pattern | Inconsistency | Impact |
|---------|--------------|--------|
| Card title → description gap | Varies: `--space-2`, `--space-3`, `--space-4` across different card types | Low — works visually per context |
| Section grid gap | Most use `--space-6`, but `.industry-case-studies-section__grid` uses `--space-8` | Low — intentional for larger cards |
| Hardcoded spacing | 2 instances of `0.25rem`, 1 instance of `0.125rem` | Minimal — icon alignment micro-adjustments |

---

## 7. COMPONENT MISUSE DETECTION

### Current State: ✅ CLEAN

| Check | Result |
|-------|--------|
| Wrong button syntax (`btn--primary` etc.) | 1 found → ✅ Fixed |
| Missing `l-container` inside `l-section` | 0 issues |
| Duplicate nested `l-section` wrappers | 0 issues |
| Inline padding/margin on `<section>` | 8 instances — all in dev dashboard (non-production) |
| Bare `btn` without variant | 0 issues |

---

## 8. SYSTEM HEALTH SCORECARD

| Layer | Score | Status | Notes |
|-------|-------|--------|-------|
| **Token Layer** | 97% | ✅ | Colors, spacing, typography fully tokenized |
| **Section Rhythm** | 95% | ✅ | 42+ sections governed, 3 approved overrides |
| **Button System** | 93% | ✅ | Well-structured, 1 typo fixed, legacy alias exists |
| **Text System** | 100% | ✅ | Fully tokenized, consistent color hierarchy |
| **Card System** | 90% | ✅ | Padding governed, border patterns consistent, 2 orphan utilities |
| **Heading Hierarchy** | 75% | ⚠️ | 11 card titles lack explicit font-size (inherit from HTML tags) |
| **Spacing Consistency** | 92% | ✅ | 3 minor off-grid values, gap patterns well-distributed |

### Overall System Grade: **A-**

---

## 9. REMAINING INTENTIONAL EXCEPTIONS (DO NOT FIX)

These are **by design** and should NOT be tokenized or standardized:

| Item | Value | Reason |
|------|-------|--------|
| `.cta-heading` font-size | `1.875rem` / `2.25rem` | Intentionally between token steps for CTA branding |
| `h3.cta-heading` font-size | `1.5rem` / `1.875rem` | Scaled-down CTA heading variant |
| Button compound padding | `0.8rem 1.2rem`, `0.6rem 1rem`, `1rem 1.5rem` | Off-grid intentional touch targets |
| Badge compound padding | `0.375rem 0.75rem`, `0.25rem 0.5rem` | Optically fine-tuned |
| Legal content margins | `2rem 0 0.75rem 0`, `1.5rem 0 0.5rem 0` | Legal page-specific, low priority |
| Dev dashboard inline styles | 8 instances | Non-production internal tooling |

---

## 10. GRADIENT TOKEN LIFECYCLE

**Active gradient tokens:** `--gradient-primary` through `--gradient-cta-10`. Defined in `foundation.css`, applied via BEM classes `.gradient-cta-{1..10}` in `components.css`.

**Rules:**
- Gradient tokens MUST be defined in `foundation.css` and consumed ONLY via BEM classes in `components.css`.
- If a gradient token is removed, its corresponding BEM class MUST also be removed.
- Do NOT add gradient tokens without a consuming BEM class (dead tokens drift).
- The `validate-design-system.cjs` validator checks gradient class existence against token definitions.
- **Previously removed:** `--gradient-cta-5` and `--gradient-cta-6` (undefined tokens with fallbacks — removed in Phase 3.1).

---

## 11. HERO SYSTEM ARCHETYPES

Two hero patterns are used across the system:

| Archetype | Component | Layout | Use Case |
|-----------|-----------|--------|----------|
| **SimpleHero** | `src/components/reusable/sections/core/SimpleHero.tsx` | Full-width, single column, centered text | Service pages, feature pages, industry pages |
| **SplitHeroSection** | `src/components/reusable/sections/core/SplitHeroSection.tsx` | Two-column split (text + visual) | Homepage, high-impact landing pages |

**Rules:**
- All page heroes MUST use one of these two archetypes.
- SimpleHero uses `l-section--spacious` for extra padding (see §1 Rule S2).
- Hero headings use `--font-3xl` to `--font-4xl` (see §2).
- Hero CTAs use `btn--lg` (see §4 Rule B8).
- Custom hero layouts are NOT allowed without a governing doc amendment.

---

## 12. FUTURE OPPORTUNITIES (NOT URGENT)

| Opportunity | Priority | Effort |
|------------|----------|--------|
| Add explicit `font-size` to 11 card title classes | Medium | Low |
| Migrate `.btn-small` consumers to `btn--sm` | Low | Low |
| Consolidate direct button class strings to Button component | Low | Medium |
| Remove unused `--card-padding-lg` and `--card-padding-tight` tokens | Low | Trivial |
| Tokenize `.cta-heading` line-height `1.2` → `--line-height-tight` | Low | Trivial |
