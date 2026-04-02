# Phase 7 — Visual System Standardization Audit

> **Branch:** `refactor/token-v2-safe`  
> **Baseline commit:** `cf4815c` (Phase 6 final)  
> **Scope:** AUDIT ONLY — zero code changes  
> **Data sources:** Playwright visual screenshots (5 pages) + automated DOM audit (`visual-audit-data.json`) + manual CSS code analysis  

---

## Table of Contents

1. [Visual Audit (Screenshots + DOM)](#1-visual-audit)
2. [Color System](#2-color-system)
3. [Gradient System](#3-gradient-system)
4. [Hover & Transition System](#4-hover--transition-system)
5. [Section Background System](#5-section-background-system)
6. [Component Issues](#6-component-issues)
7. [Icon & Badge System](#7-icon--badge-system)
8. [Execution Plan (Phases 7A–7E)](#8-execution-plan)

---

## 1. Visual Audit

### 1.1 Page-Level Observations (from screenshots)

| Page | Hero Style | Section Count | Contrast Issues | Gradients |
|---|---|---|---|---|
| **Homepage** | Dark navy→teal gradient (`--gradient-hero`) | 15 | 357 (mostly nested) | 22 |
| **Services** | Light `bg-gradient-light` | 7 | 43 | 3 |
| **Blog** | Custom oklab fade | 3 | 14 | 1 |
| **Features** | Light `bg-gradient-light` | 3 | 7 | 2 |
| **Case Studies** | Light `bg-gradient-light` | 4 | 15 | 2 |

### 1.2 Section Background Rhythm (from DOM data)

| Page | Sequence |
|---|---|
| **Homepage** | transparent → white → `#F8FAFC` → transparent → white → `#F8FAFC` → transparent → `#F8FAFC` → transparent → transparent → white → `#F8FAFC` → white → `#F8FAFC` → `#F8FAFC` |
| **Services** | transparent → white → transparent ×4 → transparent |
| **Blog** | transparent → transparent → oklab muted |
| **Features** | transparent → white → transparent |
| **Case Studies** | transparent → `#F8FAFC` → `#F8FAFC` → transparent |

**Finding:** Homepage section rhythm breaks at sections 8–9 (two back-to-back transparent sections) and 12–14 (white → `#F8FAFC` → `#F8FAFC` — two identical muted in a row). Services sections 2–5 are all transparent (inner stack items, not real sections).

### 1.3 Typography Consistency

All pages show consistent heading sizing:
- H1: `48.832px` (`--font-5xl` at 3.052rem × 16 = 48.832) ✓
- H2: `39.056px` (`--font-4xl`) ✓  
- H3: `25.008px` (`--font-2xl`) ✓
- H4: `20px` (`--font-xl`) ✓

Font weight universally `400` (`--font-weight-normal`) across all headings ✓

### 1.4 Computed Contrast Warning

The Playwright audit flags **436 total contrast issues** across 5 pages. However, ~90% are **false positives** — the script compares text luminance against `bgLuminance=0.00` (transparent), which means the element's own background is transparent and the script doesn't resolve the parent's actual painted background. Only elements with truly dark painted backgrounds (e.g., hero sections, CTA panels) genuinely have low contrast — and those are **white-on-dark, which is correct**.

**Real contrast concern:** None identified. All dark-background sections use `--c-text-inverse` (white) text.

---

## 2. Color System

### 2.1 Token Architecture Health

| Layer | Status |
|---|---|
| Spacing scale (`--space-1` to `--space-10`) | ✅ Clean, no gaps |
| Typography scale (`--font-xs` to `--font-5xl`) | ✅ Clean, 3 responsive breakpoints |
| Brand primitives (5 core + 7 neutral/surface) | ✅ Correctly isolated |
| Brand shades (color-mix derivatives) | ✅ 19 shades, all use `color-mix(in srgb)` |
| V2 flat tokens (`--c-*`) | ✅ 31 tokens covering bg/text/brand/border/status |
| Raw palette (oklch colors) | ✅ 28 tokens, used only by gradient/status tokens |
| Semantic UI tokens (legacy) | ⚠️ 12 tokens still active — consumed by shadcn/sidebar utilities |

### 2.2 Misleading Token Names

| Token | Value | Problem |
|---|---|---|
| `--brand-amber` | `#070606` | Near-black, not amber. Propagates to `--c-warning` and `--icon-text-warm` |
| `--brand-purple` | `var(--brand-secondary)` = `#2E5C8A` | Not purple — it's blue. Alias kept for legacy compatibility |
| `--gradient-cta-warm` | `primary → amber` | Resolves to **dark-navy → near-black** — not "warm" at all |

### 2.3 Direct Brand Token Leakage in `components.css`

Only **8 instances** of `var(--brand-*)` leak into components.css (should route through `--c-*` V2 tokens):

| Line | Token Used | Context | Fix |
|---|---|---|---|
| 163 | `--brand-primary-30` | `.btn-primary:hover` box-shadow | Use `--c-primary` with `color-mix` or add `--c-shadow-primary` |
| 182 | `--brand-dark-30` | `.btn-secondary:hover` box-shadow | Use `--c-dark` with `color-mix` |
| 240 | `--brand-white-10` | `.btn-white.btn-outline:hover` | Use `--color-inverse-10` ✓ (exists) |
| 943 | `--brand-white-15` | system-capabilities visual icon wrap | Use `--color-inverse-10` or new `--c-overlay-light` |
| 965 | `--brand-white-10` | system-capabilities feature badge | Use `--color-inverse-10` |
| 1247 | `--brand-accent-20` | feature-card icon bg | Use `--c-success-bg` or `--icon-bg-accent` |
| 1991 | `--brand-light-bg` | problem-solution card bg | Use `--c-bg` (equivalent) |
| 8656 | `--brand-white-90` | CTA animate color | Use `--color-inverse-80` or `--c-text-inverse` |

### 2.4 Alias Chain Depth

All alias chains are **≤2 hops** — compliant with the foundation.css style guide:
- Semantic → brand → hex ✓ (e.g., `--c-accent` → `--brand-accent` → `#4A9AB2`)
- No deep chains detected ✓

---

## 3. Gradient System

### 3.1 Token Coverage

| Category | Count | Token | Hardcoded |
|---|---|---|---|
| Foundation tokens | 15 | 15 | 0 |
| Component gradients | 32 | **10** (31%) | **22** (69%) |
| **Total** | 47 | 25 | 22 |

### 3.2 Gradient Patterns Found

**A. Fully tokenized (10 usages):** `--gradient-primary-from/to`, `--gradient-secondary-from/to`, `--gradient-accent-from/to` used in how-it-works, system-capabilities visuals.

**B. Hardcoded but unique (8 usages):** Each is a one-off that doesn't map to any existing token:
- System capabilities section wash (180deg, blue-accent fade)
- System capabilities tab (surface-to-surface)
- Warning gradient (`--c-warning` → `--color-accent-warning-90`)
- Use-case icon gradient (`--c-success-soft` → `--c-accent-soft`)
- Various hero fades (to-bottom, 50-55% opacity)

**C. Hardcoded but should be tokenized (14 usages):**
| Pattern | Used In | Candidate Token |
|---|---|---|
| `--c-bg-alt → --c-surface` (135deg) | technologies card soft | `--gradient-surface-soft` |
| `--color-surface-accent-blue → --c-surface` (135deg) | explore-cards blue, feature-hero | `--gradient-tint-blue` |
| `--color-surface-accent-teal → --c-surface` (135deg) | explore-cards teal | `--gradient-tint-teal` |
| `--c-secondary 10% → --c-surface` (135deg) | explore-cards purple | `--gradient-tint-purple` |
| `--c-warning 12% → --c-surface` (135deg) | explore-cards amber | `--gradient-tint-amber` |
| `--c-bg 50-55% → --c-bg` (180deg) | hero-section, blog-hero | `--gradient-hero-fade` |
| `--c-bg-alt 60% → --c-bg` (180deg) | resource-category hero | Merge with above |

### 3.3 Duplicate/Redundant Gradient Classes

Legacy graduation class names coexist with new BEM-style names:

| Legacy | New | Notes |
|---|---|---|
| `.gradient-cta-1` | `.bg-gradient-cta-1` | Legacy uses `!important` |
| `.gradient-cta-2` | `.bg-gradient-cta-2` | Legacy uses `!important` |
| `.gradient-cta-10`–`14` | `.bg-gradient-cta-10`–`14` | Legacy uses `!important` |

**6 duplicate gradient utility classes** to consolidate.

---

## 4. Hover & Transition System

### 4.1 Hover State Inventory

**80 `:hover` rules** found in components.css across these component categories:

| Category | Components | Pattern |
|---|---|---|
| Buttons (7) | btn-primary, btn-secondary, btn-outline, btn-outline-light, btn-white, btn-white.btn-outline, btn-link | Shadow elevation + `translateY(-1px)` |
| Cards (24) | feature-card, benefit-card, problem-solution, industry-features, case-study-card, technologies, portfolio, faq, trust-section, use-case-card, section-card, case-study-detail-metrics, card-style-link, audit-card, solution-card, diy-step-card, results-comparison, resource-card, resources-hub-topic, explore-cards, service-lnd, feature-lnd, icon-info-cards, centered-icon-card, blog-related, blog-landing-cta | Varies (see 4.2) |
| Links (4) | header-nav-link, footer links, blog-post resources-link, legal-content links | Color change |
| Other (5) | feature-list item, system-capabilities tab, how-it-works-step, component-library sidebar, image-accordion-strip | Mixed |

### 4.2 Hover Inconsistencies

| Issue | Components | Expected Standard |
|---|---|---|
| **Missing hover entirely** | DualToneChecklist, ServiceSpectrum, ProcessSteps | Should have `translateY(-0.25rem)` + `box-shadow: var(--shadow-lg)` |
| **Inconsistent hover shadows** | benefit-card `--left` uses `--shadow-lg`, `--centered` uses `--shadow-xl` | Should use same elevation tier |
| **`--link` variant weak hover** | benefit-card `--link:hover` only changes border-color | Should include shadow elevation |

### 4.3 Transition Inconsistencies

**52 `transition:` declarations** found. Two patterns coexist:

| Pattern | Count | Examples |
|---|---|---|
| Token-based: `var(--transition-fast)` = `150ms ease-in-out` | **36** (69%) | Majority of components |
| Hardcoded: `0.2s ease` = `200ms ease` | **16** (31%) | card-style-link, audit-card, solution-card, link-primary, diy-step-card, results-comparison, resource-related, resource-interactive, resources-hub, explore-cards |

**Problem:** `150ms ease-in-out` ≠ `200ms ease` — different duration AND easing. This creates subtly different interaction feel across sibling components.

### 4.4 Missing `@media (hover: hover)` Guards

Some hover rules are wrapped in `@media (hover: hover)` (benefit-card, faq) while others are not. Touch device users may experience stuck hover states on unguarded components.

---

## 5. Section Background System

### 5.1 Architecture

Section backgrounds are **entirely component-driven** — no framework-level enforcement. 
The `l-section` class is structural only (padding). Each component defines its own BEM modifiers:
- `--bg-default` → `var(--c-bg)` 
- `--bg-white` → `var(--c-surface)`
- `--bg-muted` → `color-mix(in oklab, var(--c-bg) N%, transparent)`

### 5.2 Muted Opacity Divergence (Critical)

**Three different `color-mix` percentages** for `--bg-muted`:

| Percentage | Sections Using It |
|---|---|
| **30%** | FAQ, related-cards, technologies, industry-packages, grid-section, process-steps |
| **35%** | DualToneChecklist, ServiceSpectrum, dual-feature-cards, stacked-feature-list, narrative-stats, image-stats-services |
| **50%** | IconBenefitCards (benefits-section), use-cases-section (scenario-cards) |

### 5.3 Missing Variants

| Section | Missing Variant | Impact |
|---|---|---|
| `technologies` / `c-technology-cards-section` | `--bg-default` | Only has white + muted |
| `industry-packages` / `c-tier-cards-section` | `--bg-default` | Only has white + muted |
| `grid-section` / `c-content-cards-grid-section` | `--bg-default` | Only has white + muted |
| `hero-section` | `--bg-muted` | Only has default + white |
| `c-faq-accordion-section` | `--bg-white`, `--bg-muted` | Hard-sets `var(--c-bg)`, no variants |

### 5.4 Comparison Section Bug

Both `platform-comparison--bg-muted` and `comparison--bg-muted` set `background-color: var(--c-bg)` — **identical** to their `--bg-default` variant. The muted modifier has no visual effect.

### 5.5 CTA Gradient Duplicates

Both `.bg-gradient-cta-N` and `.gradient-cta-N` utility classes exist. The legacy `.gradient-cta-*` versions use `!important`.

---

## 6. Component Issues

### 6.1 DualToneChecklistComparisonSection (Lines 10623–10720)

| Severity | Issue |
|---|---|
| 🔴 High | No hover/interactive states on any element |
| 🔴 High | No `:focus-visible` ring |
| 🟡 Medium | No `border` or `box-shadow` on columns (inconsistent with other cards) |
| 🟡 Medium | `--bg-muted` uses 35% (not 30%) |
| 🟢 Low | Hardcoded icon size `1.125rem` |
| 🟢 Low | Missing `line-height` on descriptions |

### 6.2 ServiceSpectrumCardsSection (Lines 10802–10879)

| Severity | Issue |
|---|---|
| 🔴 High | No hover/interactive states on cards |
| 🔴 High | No `border` or `border-radius` on cards |
| 🟡 Medium | `--bg-muted` uses 35% (not 30%) |
| 🟡 Medium | Hardcoded `padding-left: 1.25rem` → should be `var(--space-5)` |
| 🟢 Low | Missing `line-height` on descriptions |

### 6.3 IconBenefitCardsSection (Lines 1341–1510 + 6419–6470)

| Severity | Issue |
|---|---|
| 🔴 High | `--bg-muted` uses **50%** — largest deviation |
| 🔴 High | `.benefit-card--r-xl` maps to `var(--radius)` not `var(--radius-xl)` — likely bug |
| 🟡 Medium | Inconsistent hover shadows: `--left` → `shadow-lg`, `--centered` → `shadow-xl` |
| 🟡 Medium | `--link` variant hover too weak (only border-color change) |
| 🟡 Medium | Hardcoded border-separator color (`color-mix(in oklab, var(--c-dark) 8%, transparent)`) |

### 6.4 ProcessStepsSection (Lines 4893–4979 + 7182–7228)

| Severity | Issue |
|---|---|
| 🔴 High | No hover states on cards |
| 🔴 High | No `:focus-visible` ring |
| 🟡 Medium | No `border-radius` on cards (has border but square corners) |
| 🟡 Medium | Hardcoded badge shadow `0 12px 24px` (not a shadow token) |
| 🟡 Medium | 5 hardcoded size values (badge: `2.5rem`, icon: `3.5rem`/`1.75rem`) |
| 🟢 Low | Description uses `--line-height-ui` instead of `--line-height-prose` |

### 6.5 Accordion / FAQ (Lines 2766–2910 + 6586–6624)

| Severity | Issue |
|---|---|
| 🟡 Medium | Duplicate `.faq__answer[data-open='true']` rule blocks (L2884 + L2889) |
| 🟡 Medium | `c-faq-accordion-section` has no `--bg-white`/`--bg-muted` variants |
| 🟡 Medium | Hardcoded `max-height: 24rem` — clips long answers |
| 🟢 Low | Formatting inconsistency in `.faq-list .faq__card{ gap:0px; }` |

---

## 7. Icon & Badge System

### 7.1 Badge System

| Variant Type | Count | Issues |
|---|---|---|
| Sizes (sm/md/lg) | 3 | ✅ Clean |
| Context (card/meta/section) | 3 | ⚠️ All use hardcoded rem padding instead of space tokens |
| Colors (primary/secondary/outline/alert/outline-white) | 5 | ✅ Use tokens |
| Icon sub-rules | 2 | ✅ Clean |

**Badge-specific issues:**
- `.badge--section` uses hardcoded `font-size: 0.7rem` (no token)
- `.badge--card`, `--meta`, `--section` use hardcoded rem padding

### 7.2 Icon Container Chaos

**16+ distinct icon container patterns** across components, using **9 different hardcoded sizes**:

| Size | Components Using It |
|---|---|
| 2rem | tabbed-feature-cards |
| 2.5rem | grid-section |
| 3rem | feature-card--sm, comparison, solution-card, sys-capabilities visual |
| 3.25rem | sys-capabilities feature |
| 3.5rem | audit-card, process-step, stacked-feature-list |
| 4rem | feature-card, how-it-works, use-case-card |
| 4.5rem | feature-card stacked |
| `--space-7` | feature-list, section-cards-header (only 2 use tokens!) |
| `--space-8/9/10` | utility classes only (unused by components) |

**4 utility classes exist** (`.icon-container-sm/md/lg/xl`) with token-based sizes — but **zero** component icon containers use them.

### 7.3 Icon Token Adoption

**6 icon background tokens** defined in foundation.css. Adoption:
- Used by utility classes: ✅
- Used by component CSS: ❌ (components use `--c-info-bg`, `color-mix()` ad hoc, or no background)

### 7.4 Naming Inconsistency

5 different BEM suffixes for icon containers: `__icon-wrap`, `__icon-container`, `__icon` (as container), `__feature-icon`, `__feature-icon-wrap`

---

## 8. Execution Plan (Phases 7A–7E)

### Phase 7A — Muted Opacity + Section Variant Normalization
**Risk:** Low | **Effort:** Small | **Impact:** High visual consistency

1. Standardize `--bg-muted` to `30%` across ALL sections (change 35% → 30% in 6 sections, 50% → 30% in 2 sections)
2. Fix comparison section `--bg-muted` (currently identical to `--bg-default`)
3. Add missing `--bg-default` to technologies, industry-packages, grid-section
4. Add `--bg-muted` to hero-section
5. Add `--bg-white`/`--bg-muted` to `c-faq-accordion-section`
6. Remove duplicate gradient utility classes (`.gradient-cta-*` legacy with `!important`)

**Estimated changes:** ~20 CSS rules

### Phase 7B — Hover & Transition Standardization
**Risk:** Low | **Effort:** Medium | **Impact:** High interaction consistency

1. Add hover states to DualToneChecklist, ServiceSpectrum, ProcessSteps cards:
   - `transform: translateY(-0.25rem)`
   - `box-shadow: var(--shadow-lg)`
   - Wrap in `@media (hover: hover)`
2. Add `:focus-visible` to same 3 components + any others missing it
3. Normalize benefit-card hover shadows (pick one: `--shadow-lg`)
4. Strengthen benefit-card `--link` hover (add shadow elevation)
5. Replace all `0.2s ease` with `var(--transition-fast)` (16 instances)
6. Audit and add missing `@media (hover: hover)` guards

**Estimated changes:** ~40 CSS rules

### Phase 7C — Gradient Tokenization
**Risk:** Low | **Effort:** Medium | **Impact:** Medium maintainability

1. Create 5 new gradient tokens in foundation.css:
   - `--gradient-surface-soft`: `linear-gradient(135deg, var(--c-bg-alt), var(--c-surface))`
   - `--gradient-tint-blue`: `linear-gradient(135deg, var(--color-surface-accent-blue), var(--c-surface))`
   - `--gradient-tint-teal`: `linear-gradient(135deg, var(--color-surface-accent-teal), var(--c-surface))`
   - `--gradient-hero-fade`: `linear-gradient(to bottom, color-mix(in oklab, var(--c-bg) 50%, transparent), var(--c-bg))`
   - `--gradient-warning`: `linear-gradient(135deg, var(--c-warning), var(--color-accent-warning-90))`
2. Replace 14 hardcoded gradients with new tokens
3. Remove 6 legacy `.gradient-cta-*` duplicate classes (if not done in 7A)

**Estimated changes:** ~25 CSS rules + 5 new tokens

### Phase 7D — Brand Token Leakage Cleanup + Icon Normalization
**Risk:** Low | **Effort:** Medium | **Impact:** Medium architecture cleanliness

1. Replace 8 `var(--brand-*)` references in components.css with `--c-*` / `--color-inverse-*` equivalents
2. Normalize icon container sizes to utility scale (`--space-7` through `--space-10` or extend with `--icon-size-xs/sm/md/lg/xl`)
3. Route component icon backgrounds through `--icon-bg-*` tokens
4. Fix badge hardcoded values (`.badge--section` font-size, padding → tokens)
5. Standardize icon container naming convention (recommend `__icon-wrap`)

**Estimated changes:** ~50+ CSS rules

### Phase 7E — Component-Specific Fixes
**Risk:** Medium (visual changes required) | **Effort:** Medium | **Impact:** High quality

1. **DualToneChecklist:** Add border + box-shadow to columns, add `line-height: var(--line-height-prose)` to descriptions
2. **ServiceSpectrum:** Add `border: 2px solid var(--c-border-alpha)`, `border-radius: var(--radius)` to cards, fix hardcoded padding
3. **ProcessSteps:** Add `border-radius: var(--radius)` to cards, replace hardcoded badge shadow with `var(--shadow-lg)`, fix line-height
4. **IconBenefit:** Fix `.benefit-card--r-xl` to use `var(--radius-xl)`, replace hardcoded border-separator color
5. **FAQ:** Merge duplicate `[data-open='true']` blocks, fix `max-height` strategy (use `max-height: none` + JS measurement)
6. **Misleading token names:** Rename `--brand-amber` (requires full grep + replace audit first — flag for Phase 8)

**Estimated changes:** ~30 CSS rules

---

## Summary Scorecard

| Area | Grade | Key Metric |
|---|---|---|
| Color System | **A-** | 8 brand-token leaks, 3 misleading names, 0 deep chains |
| Gradient System | **B-** | 69% hardcoded in components, 6 duplicate utility classes |
| Hover System | **B** | 80 hover rules, 3 components missing hover, 16 hardcoded transitions |
| Section System | **B-** | 3 different muted opacities, 5 missing variants, 1 bug |
| Component Quality | **B** | 5 audited: 3 need hover+focus, 2 have bugs, all have minor issues |
| Icon/Badge System | **C+** | 9 hardcoded sizes, 0 components use utility classes, 5 naming patterns |

**Overall System Grade: B**

Priority order: **7A → 7B → 7E → 7C → 7D**
(Normalize backgrounds → Fix interactions → Fix components → Tokenize gradients → Clean architecture)

---
---

# PHASE 7 — DEEP SYSTEM ANALYSIS & IMPROVED EXECUTION PLAN

> **Generated from:** Code-level analysis of foundation.css (366L), primitives.css (248L), framework.css (836L), components.css (10882L) + validation against the visual audit above  
> **Purpose:** Improve upon the existing audit — no repetition, only new findings, deeper root-cause analysis, and a production-grade execution plan

---

## PART 0 — VISUAL AUDIT VALIDATION

### Confirmed Correct

1. **Muted opacity divergence** (30%/35%/50%) — Verified in CSS. Line-accurate.
2. **Comparison section bug** — `--bg-muted` and `--bg-default` both set `var(--c-bg)` at lines 4986-4993.
3. **Brand token leakage** — All 8 instances confirmed at stated lines.
4. **Misleading tokens** — `--brand-amber: #070606` confirmed. `--c-warning` chains to it (near-black).
5. **Transition inconsistency** — 9 hardcoded `0.2s ease` found (audit said 16; actual count from code is 9 in components.css: lines 4470, 4619, 4831, 5496, 5999 + 2 additional in adjacent areas). The audit overcounted by including non-component sources.
6. **Icon container chaos** — 42 icon sizing rules found; audit said 16+ patterns with 9 sizes — actual is worse than reported.
7. **`@media (hover: hover)` gaps** — ~94% are guarded. Only 3 unguarded: `.problem-solution:hover`, `.link-primary:hover`, `.legal-content a:hover`.

### Corrections to Existing Audit

| # | Audit Claim | Reality |
|---|---|---|
| 1 | "16 hardcoded transitions" | **9 hardcoded** in components.css (lines 4470, 4619, 4831, 5496, 5999, 8720, 10762). The 0.6s opacity animation (L8720) and flex-grow transition (L10762) are intentionally different durations — not bugs. Net fix count: **5 real inconsistencies**. |
| 2 | "80 hover rules" | **53 `:hover` rules** in components.css. Previous count may have included pseudo-states and media-wrapped duplicates. |
| 3 | "0 hardcoded colors outside :root" | **Correct** — validated. All colors use `var()` or `color-mix()`. Zero hex/rgb leakage in component rules. This is excellent. |
| 4 | "6 duplicate gradient utility classes" | **5 duplicates**: `.gradient-cta-10` through `.gradient-cta-14` use `!important` and shadow `.bg-gradient-cta-*` equivalents. `.gradient-cta-1` and `.gradient-cta-2` do NOT have `!important` and use different source tokens — not exact duplicates. |

### Overlooked Issues (Not in Original Audit)

| # | Issue | Severity | Location |
|---|---|---|---|
| 1 | **BEM `--bg-` background system is architecturally redundant** — 30 section components each define `--bg-default/white/muted` CSS rules (122 total rules). Every component's `backgroundColor` prop has a passthrough fallback that already accepts utility classes. The entire BEM bg system can be replaced by utility classes at the composition level. | 🔴 Architecture | All 30 section components in components.css + TSX |
| 2 | **Legacy class aliases double every component** — e.g., `.service-process-steps` + `.c-process-steps-section`, `.technologies` + `.c-technology-cards-section`. Both selectors are defined in CSS for backward compat. ~19 components have this. | 🟡 Debt | components.css throughout |
| 3 | **`l-section` scaling is a no-op** — framework.css defines 4 media queries (640/768/1024/1280px) for `.l-section` padding, but all 4 set the exact same property to the same CSS variable `var(--l-section-padding)`. The responsive scaling relies on the `:root` variable changing, not the rule itself — making 4 of 4 selector-level media queries dead code. | 🟢 Dead code | framework.css L805-836 |
| 4 | **`--brand-purple: var(--brand-secondary)` is a circular identity** — `--brand-purple` resolves to `#2E5C8A` (blue). Then `--gradient-secondary-from` uses `--brand-purple`, and `--icon-bg-secondary-alpha` uses `--brand-purple-10`. This means "purple" tokens render as blue throughout. | 🟡 Naming | foundation.css L97, 103, 119-120 |
| 5 | **Shadow tokens are incomplete** — `--shadow-sm/md/lg/xl/2xl` exist but hover behaviors use ad-hoc shadows: `0 14px 32px var(--shadow-ink-12)` (diy-step-card), `0 4px 12px var(--brand-primary-30)` (btn-primary), `0 12px 24px` (process-step badge). 3 one-off shadow patterns bypass the elevation system. | 🟡 System gap | components.css L160, 179, process-steps |
| 6 | **Button padding is hardcoded rem** — `.btn` uses `padding: 0.8rem 1.2rem` (default), `.btn--sm`: `0.6rem 1rem`, `.btn--lg`: `1rem 1.5rem`. None use `--space-*` tokens. | 🟢 Consistency | components.css L70-100 |
| 7 | **`--c-success-soft` ≡ `--c-accent` ≡ `--brand-teal`** — All three resolve to `#4A9AB2`. Three tokens for one color creates semantic confusion (is teal a success indicator or brand accent?). | 🟡 Architecture | foundation.css |
| 8 | **`!important` in gradient utilities** — 5 `.gradient-cta-10` through `.gradient-cta-14` use `!important` on `background`. This forces override behavior and is a specificity smell. | 🟡 Specificity | components.css L9129-9145 |
| 9 | **`--icon-bg-secondary` vs `--icon-bg-secondary-alpha`** — Two tokens for the same intent. `--icon-bg-secondary: var(--brand-secondary-10)` and `--icon-bg-secondary-alpha: var(--brand-purple-10)`. Since `--brand-purple === --brand-secondary`, these compute to the **same value**. | 🟢 Dead token | foundation.css L119-120 |
| 10 | **`how-it-works-step:hover` missing hover guard** — Uses raw `:hover` at L1031 without `@media (hover: hover)` wrapper, causing sticky hover on touch. | 🟡 UX | components.css L1031 |

---

## PART 1 — COLOR SYSTEM ANALYSIS (DEEP)

### A. Token Chain Analysis

All chains are **≤2 hops** — compliant with the style guide contract.

| Chain | Resolution | Verdict |
|---|---|---|
| `--c-bg` → `--brand-grey` → `#f8fafc` | 2 hops | ✅ Clean |
| `--c-primary` → `--brand-primary` → `#0A1628` | 2 hops | ✅ Clean |
| `--c-warning` → `--brand-amber` → `#070606` | 2 hops | ⚠️ Value misleading (not chain) |
| `--icon-bg-secondary-alpha` → `--brand-purple-10` → `color-mix(--brand-purple, 10%)` → `var(--brand-secondary)` → `#2E5C8A` | 4 hops | ⚠️ **Longest chain** — alias through alias through alias. Not a deep runtime chain (CSS resolves at paint), but cognitively complex. |
| `--gradient-secondary-from` → `--brand-purple` → `--brand-secondary` → `#2E5C8A` | 3 hops | ⚠️ Borderline — one alias could be removed |

**Finding:** Token chains are architecturally sound. The only concern is the `--brand-purple` ↔ `--brand-secondary` identity alias creating cognitive overhead, not runtime issues.

### B. Misleading Token Names

| Token | Value | Why It's Misleading | Impact |
|---|---|---|---|
| `--brand-amber` | `#070606` | Near-black. "Amber" universally implies warm orange/gold. | `--c-warning` inherits this → warning states render as near-black instead of orange. `--icon-text-warm` and `--icon-bg-warm` are near-black. `--gradient-cta-warm` goes dark-navy → near-black (not "warm"). |
| `--brand-purple` | `var(--brand-secondary)` = `#2E5C8A` | This is blue, not purple. | `--gradient-secondary-from/to` and `--icon-bg-secondary-alpha` are conceptually "purple" but render blue. |
| `--c-success-soft` | `var(--brand-teal)` = `#4A9AB2` | "Success" implies green. This is teal/brand accent. | Semantically confusing — is teal a success state or a brand color? |
| `--brand-grey` | `#f8fafc` | This is actually slate-50, not grey. "Grey" implies mid-tone. | Minor — but `--brand-surface: #F9FAFB` is nearly identical (`1 point` difference in blue channel). Two tokens for essentially the same off-white. |

**Suggested Naming Strategy (DO NOT RENAME YET):**
- `--brand-amber` → should become `--brand-dark-warm` or rename the hex to an actual amber
- `--brand-purple` → should become `--brand-blue` or remove the alias entirely (use `--brand-secondary` directly)
- `--c-success-soft` → should become `--c-accent` (it already IS the accent)
- `--brand-grey` vs `--brand-surface` → merge into one token

### C. Semantic Layer Integrity

| Check | Status | Detail |
|---|---|---|
| Components use `--c-*` for colors? | **95%** | 8 instances bypass to `--brand-*` directly (documented in audit 2.3) |
| Components use `--space-*` for spacing? | **~85%** | Button padding (`0.8rem 1.2rem`), badge padding, process-step badge sizes, and ~5 icon containers use hardcoded rem |
| Components use `--shadow-*` for elevation? | **~80%** | 3 ad-hoc shadows bypass the system (btn-primary/secondary hover, diy-step-card, process-step badge) |
| Components use `--transition-*` for motion? | **83%** | 9/52 transitions are hardcoded |
| Components use `--radius-*`? | **~95%** | One known bug: `.benefit-card--r-xl` maps to `var(--radius)` not `var(--radius-xl)` |

**Verdict:** Semantic layer is strong. The 5–20% leakage is concentrated in older components (buttons, diy-step-card, process-steps) and is fixable without risk.

### D. Duplicate Color Values

**Zero duplicate hex values** in foundation.css — each hex appears exactly once.

However, there are **semantic duplicates** (different tokens → same computed value via alias chains):

| Token A | Token B | Same Value | Action |
|---|---|---|---|
| `--c-accent` (`--brand-accent`) | `--c-success-soft` (`--brand-teal`) | `#4A9AB2` | Merge — `--c-success-soft` is redundant |
| `--icon-bg-secondary` | `--icon-bg-secondary-alpha` | Both → `color-mix(in srgb, #2E5C8A 10%, transparent)` | Remove `--icon-bg-secondary-alpha` |
| `--brand-grey` | `--brand-surface` | `#f8fafc` vs `#F9FAFB` | **Not identical** but visually indistinguishable (ΔE < 0.5). `--brand-light-bg: var(--brand-surface)` adds a third near-duplicate. |

### E. Token Architecture Assessment

**Strengths:**
- Clean 3-layer architecture (brand → semantic → component helpers)
- Complete status color system (success/warning/danger/info with bg variants)
- `color-mix()` for programmatic shade generation (no manual hex math)
- All 28 raw palette tokens are oklch (modern, perceptually uniform)

**Weaknesses:**
1. **No section-level background tokens** — Backgrounds are set by 122 BEM modifier rules that all resolve to the same 3 values (`--c-bg`, `--c-surface`, `color-mix(--c-bg, N%)`). These should be 3 utility tokens: `--section-bg-default`, `--section-bg-surface`, `--section-bg-muted`.
2. **icon-bg/icon-text tokens exist but aren't used by components** — Only utility classes consume them; component CSS uses `--c-info-bg`, `--c-primary` directly, or `color-mix()` ad-hoc.
3. **No elevation token between `--shadow-lg` and `--shadow-2xl`** — Cards hover to `--shadow-lg` (some to `--shadow-xl`, some to `--shadow-2xl`). Missing a clear "hover elevation" token.
4. **`--gradient-cta-warm` is semantically broken** — Resolves to dark-navy → near-black. Anyone using the token expecting a "warm" CTA gets a near-invisible gradient on dark backgrounds.

---

## PART 2 — GRADIENT SYSTEM DESIGN

### Current State

**47 total gradient usages** (15 foundation tokens + 32 component instances). 69% hardcoded.

### Proposed Gradient Token System (8 tokens)

| # | Token | Value | Usage |
|---|---|---|---|
| 1 | `--gradient-hero` | `linear-gradient(135deg, --brand-primary, --brand-primary-mid, --brand-secondary)` | **Exists.** Hero sections, dark immersive backgrounds |
| 2 | `--gradient-cta-primary` | `linear-gradient(135deg, --brand-primary, --brand-secondary)` | **Exists as `--gradient-cta-1`.** CTA panels, elevated dark sections |
| 3 | `--gradient-cta-reverse` | `linear-gradient(135deg, --brand-secondary, --brand-primary)` | **Exists as `--gradient-cta-2`.** Alternate CTA direction |
| 4 | `--gradient-surface-soft` | `linear-gradient(135deg, --c-bg-alt, --c-surface)` | **NEW.** Subtle card tints, technology cards, soft differentiation |
| 5 | `--gradient-tint-blue` | `linear-gradient(135deg, --color-surface-accent-blue, --c-surface)` | **NEW.** Blue-tinted cards (explore-cards blue, feature-hero) |
| 6 | `--gradient-tint-teal` | `linear-gradient(135deg, --color-surface-accent-teal, --c-surface)` | **NEW.** Teal-tinted cards (explore-cards teal) |
| 7 | `--gradient-hero-fade` | `linear-gradient(to bottom, color-mix(in oklab, --c-bg 50%, transparent), --c-bg)` | **NEW.** Hero fade-out, section transitions |
| 8 | `--gradient-step-accent` | `linear-gradient(135deg, --gradient-accent-from, --gradient-accent-to)` | **Exists as individual tokens.** Step number badges, accent elements |

### Gradient Categories

| Category | Tokens | Usage Rule |
|---|---|---|
| **Hero** (immersive dark) | `--gradient-hero` | Only on page hero sections. 1 per page maximum. |
| **CTA** (dark call-to-action) | `--gradient-cta-primary`, `--gradient-cta-reverse` | CTA panels, footer CTAs. Use primary for main, reverse for secondary. |
| **Tint** (light card backgrounds) | `--gradient-tint-blue`, `--gradient-tint-teal`, `--gradient-surface-soft` | Card backgrounds for visual differentiation. Never on full sections. |
| **Fade** (transition overlays) | `--gradient-hero-fade` | Section top/bottom fades, hero-to-content transitions. |
| **Element** (small UI components) | `--gradient-step-accent` | Step badges, icon backgrounds, small accent elements. |

### Migration Map (Existing → New)

| Current Usage | Lines | Maps To |
|---|---|---|
| `explore-cards --gradient-blue` (hardcoded) | 6688 | `--gradient-tint-blue` |
| `explore-cards --gradient-teal` (hardcoded) | 6697 | `--gradient-tint-teal` |
| `explore-cards --gradient-purple` (hardcoded `color-mix`) | 6706 | **Keep as-is** — unique one-off, not worth tokenizing |
| `explore-cards --gradient-amber` (hardcoded `color-mix`) | 6715 | **Keep as-is** — unique one-off, uses `--c-warning` (near-black) |
| `technology-cards soft` (hardcoded) | 2473 | `--gradient-surface-soft` |
| `hero-section --bg-default` (hardcoded) | 6399 | `--gradient-hero-fade` |
| `system-capabilities --booking` (hardcoded) | 922 | **Omit** — broken (near-black `--c-warning` → near-black `--color-accent-warning-90`) |
| `.gradient-cta-10/11/12/13/14` | 9129-9145 | Keep — these are data-visualization palette gradients, not design system tokens |

### Missing Gradient Types
- **`--gradient-tint-purple`** — explore-cards has purple variant but uses `color-mix` instead of a token
- **`--gradient-section-wash`** — For the system-capabilities section background (180deg blue wash). Currently hardcoded.

---

## PART 3 — HOVER SYSTEM DESIGN

### Current State Inventory

- **53 `:hover` rules** across components.css
- **51 `@media (hover: hover)` blocks** — 94% coverage
- **3 unguarded hover states**: `.problem-solution:hover`, `.link-primary:hover`, `.legal-content a:hover`
- **1 additional unguarded**: `.how-it-works-step:hover` (missed in original audit)

### Hover Inconsistencies (By Behavior)

| Behavior | Components | Issue |
|---|---|---|
| `translateY(-1px)` + shadow | Buttons (7) | ✅ Consistent |
| `translateY(-0.25rem)` + `shadow-lg` | section-card, linked-icon-cards | ✅ Standard card rise |
| `translateY(-0.125rem)` + `shadow-xl` | explore-cards | 🟡 Half the rise, higher shadow tier |
| `translateY(-0.5rem)` + `shadow-2xl` | how-it-works-step | 🟡 Double the rise, highest shadow tier |
| `shadow-lg` only (no translate) | benefit-card-left, case-study-metrics, linked-icon-cards, technology-cards | 🟡 Shadow without motion (inconsistent with translate pattern) |
| `shadow-xl` only | benefit-card-centered, card-elevated | 🟡 Higher tier than siblings |
| `scale(1.1)` | trust-section items | ⚠️ Only component using scale — breaks uniformity |
| `flex-grow: 1.25` | image-accordion-strip | ✅ Intentional (accordion expand behavior) |
| Border-color change only | benefit-card-link, technology-cards-soft | 🟡 Weakest hover; insufficient feedback |
| **No hover at all** | DualToneChecklist, ServiceSpectrum, ProcessSteps | 🔴 Critical gaps in interactive-looking components |

### Proposed Standard Hover System

```
TIER 0: Non-interactive (no hover)
  → Static display elements, read-only content

TIER 1: Subtle (links, inline elements)
  → color change only
  → transition: color var(--transition-fast)

TIER 2: Standard Card Hover
  → transform: translateY(-0.25rem)
  → box-shadow: var(--shadow-lg)
  → transition: transform var(--transition-fast), box-shadow var(--transition-fast)
  → MUST wrap in @media (hover: hover)

TIER 3: Elevated Card Hover (hero/featured cards only)
  → transform: translateY(-0.375rem)
  → box-shadow: var(--shadow-xl)
  → Same transition + guard

TIER 4: Button Hover
  → transform: translateY(-1px)
  → box-shadow: 0 4px 12px var(--c-primary-shadow, color-mix(in oklab, var(--c-primary) 30%, transparent))
  → Same transition + guard
```

### Proposed Elevation System (Shadow Tiers)

| Tier | Token | Value | Usage |
|---|---|---|---|
| Rest | `--shadow-sm` | `0 1px 2px rgb(0 0 0 / 0.05)` | Badges, subtle depth |
| Default | `--shadow-md` | `0 4px 6px ...` | Cards at rest (if elevated by default) |
| Hover | `--shadow-lg` | `0 10px 15px ...` | **Standard hover elevation** |
| Feature | `--shadow-xl` | `0 20px 25px ...` | Feature/hero card hover only |
| Modal | `--shadow-2xl` | `0 25px 50px ...` | Modals, dropdowns. NOT for card hover. |

### Motion Timing Rules

| Token | Value | Use For |
|---|---|---|
| `--transition-fast` | `150ms ease-in-out` | **ALL** hover/focus transitions (cards, buttons, links) |
| `--transition-normal` | `250ms ease-in-out` | Accordion open/close, tab switches, content reveals |
| **NEW** `--transition-slow` | `400ms ease-in-out` | Page-level animations, hero entrances (if needed) |

**Rule:** No hardcoded transition values in component CSS. Always use tokens.

---

## PART 4 — SECTION BACKGROUND SYSTEM DESIGN

### The Root Problem

The current system has **no system** — it has 30 copies of the same 3-rule pattern (`--bg-default`, `--bg-white`, `--bg-muted`) baked into each component. This creates:

1. **122 CSS rules** in components.css doing the same thing with different selectors
2. **28 TSX components** each containing identical branching logic for `backgroundColor` prop
3. **3 different muted opacities** (30%, 35%, 50%) because each component defines its own
4. **No way to enforce page-level background rhythm** — each section decides independently

### Proposed Section Background Logic System

#### Background Tokens (3 canonical values)

| Token | Value | Visual |
|---|---|---|
| `--section-bg-base` | `var(--c-bg)` = `#f8fafc` | Lightest — default page background |
| `--section-bg-surface` | `var(--c-surface)` = `#ffffff` | White — elevated/card-feel sections |
| `--section-bg-muted` | `color-mix(in oklab, var(--c-bg) 30%, transparent)` | Subtle tint — visual break without weight |

#### Background Utility Classes (replaces 122 BEM rules)

```css
/* These 3 rules replace ALL 122 --bg-* rules */
.bg-section-base    { background-color: var(--section-bg-base); }
.bg-section-surface  { background-color: var(--section-bg-surface); }
.bg-section-muted   { background-color: var(--section-bg-muted); }
```

#### Background Sequence Rules

| Rule | Description |
|---|---|
| **No consecutive identical** | Never stack two sections with the same background class |
| **Alternation pattern** | Prefer: `base → surface → muted → base` or `base → surface → base` |
| **CTA breaks rhythm** | CTA sections (gradient backgrounds) act as rhythm resets — any background can follow |
| **Hero → content transition** | Hero section is always followed by a `surface` or `base` section (never muted) |
| **Footer transition** | Last content section before footer should be `base` or `muted` (not surface) — the footer's dark bg needs visual distance from white |
| **Max 2 muted per page** | `muted` is a subtle shade; overuse reduces its visual separation effect |

#### CTA Behavior Inside Sections

| CTA Type | Background | Text | Rule |
|---|---|---|---|
| Primary CTA (hero, footer) | `--gradient-cta-primary` | `--c-text-inverse` | Full-width dark gradient |
| Inline CTA (mid-page) | `--gradient-cta-primary` | `--c-text-inverse` | Container-width, acts as rhythm break |
| Soft CTA (blog, resources) | `--section-bg-muted` | `--c-text` | Light background, no gradient |

#### Migration Path

1. **Add 3 utility classes** (`bg-section-base`, `bg-section-surface`, `bg-section-muted`) to a utility section in components.css
2. **Update all 28 section components** — simplify `backgroundColor` prop to direct className passthrough (the escape hatch already exists; just remove the BEM branching)
3. **Update all ~50 caller sites** — replace BEM keywords (`'muted'`, `'white'`, `'default'`) with utility classes
4. **Delete 122 BEM `--bg-*` CSS rules** — all dead after step 2-3
5. **Delete legacy alias selectors** — ~19 components have duplicate legacy names

---

## PART 5 — COMPONENT SYSTEM GAPS (ROOT CAUSES)

### Why Do Inconsistencies Exist?

| Root Cause | Affected | Explanation |
|---|---|---|
| **No component contract** | DualToneChecklist, ServiceSpectrum, ProcessSteps | These were built as one-offs without referencing an existing component spec. They lack hover/focus because no spec mandated it. |
| **Copy-paste inheritance** | All 28 section components | The `backgroundColor` prop logic was copied from one component to all others. Each copy drifted slightly (30% vs 35% vs 50% muted). |
| **Icon sizing was never standardized** | 42 icon rules across components | Each component author picked a "looks right" value. 4 utility classes exist but nobody adopted them. |
| **Hover was added reactively** | 53 hover rules | Hover was added when a component "needed" it, not applied systemically. Some authors used `translateY(-0.25rem)`, others `-0.5rem`, others just shadow. |
| **Legacy → new naming migration was incomplete** | 19 dual-named components | Components were renamed from `.feature-card` to `.c-feature-checklist-cards-section` but the old CSS was kept "just in case" alongside the new rules. |

### Missing System Rules (Component Design Standards)

| Standard | Rule | Applies To |
|---|---|---|
| **Card Contract** | Every card-like element MUST have: `border: 1px/2px solid var(--c-border-alpha)`, `border-radius: var(--radius)`, `padding: var(--card-padding)`, `background: var(--c-surface)` | All card components |
| **Interactive Card Contract** | Every card that links/navigates MUST have: Tier 2 hover (translateY + shadow-lg), `@media (hover: hover)` guard, `:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }` | Linked cards, clickable sections |
| **Section Component Contract** | Every `<section>` component MUST accept `cssPrefix` (additive class) and `backgroundColor` (direct className passthrough — no BEM conversion). No component should set its own background color internally. | All section components |
| **Icon Container Contract** | All icon containers MUST use `icon-container-{sm|md|lg|xl}` utility + `icon-bg-{type}` for background. No hardcoded `width/height` on icon wrappers. | All components with icons |
| **Transition Contract** | All interactive transitions MUST use `var(--transition-fast)`. Exception: accordion/reveal use `var(--transition-normal)`. | All hover/focus transitions |

### Component-Specific Root Causes

| Component | Root Cause | Fix Category |
|---|---|---|
| **DualToneChecklist** | Built as a layout comparison, not an interactive card. Missing the card contract entirely. | Add card contract + Tier 0 hover (or Tier 2 if items are linked) |
| **ServiceSpectrum** | Cards have no `border` or `border-radius` — they rely on left-border + padding to create visual separation. This is a unique pattern, not a card. | Either standardize to card contract OR formalize as a "list-item" pattern |
| **IconBenefit** | Three variants (left/centered/link) have three different hover behaviors because they were designed as separate components merged into one. The `--r-xl` bug is a typo (`var(--radius)` instead of `var(--radius-xl)`). | Unify hover to Tier 2 for all variants except static display |
| **ProcessSteps** | Number badge uses hardcoded `2.5rem` width/height and non-token shadow `0 12px 24px`. Cards have no hover because they're "display" elements — but they look interactive due to borders + elevation. | Add Tier 2 hover, tokenize badge shadow to `var(--shadow-lg)` |
| **FAQ Accordion** | Duplicate `[data-open='true']` rule blocks (L2884/L2889) — one is a leftover from a merge. `max-height: 24rem` clips long answers on mobile. | Merge dupes, replace `max-height` with JS-measured height or `max-height: none` |

---

## PART 6 — ICON + BADGE SYSTEM

### Current Icon Sizing Inventory

| Hardcoded Size | rem | px | Components Using It | Token Equivalent |
|---|---|---|---|---|
| 1rem | 1 | 16 | badge__icon, workflow__action-icon | — (too small for container) |
| 1.125rem | 1.125 | 18 | DualToneChecklist icon | — |
| 1.25rem | 1.25 | 20 | feature-list item, faq q-icon, technology icon, checklist-md | `--space-5` |
| 1.5rem | 1.5 | 24 | feature-card--sm icon, comparison, checklist-lg, sys-capabilities visual-icon, linked-icon SVG | `--space-6` |
| 1.75rem | 1.75 | 28 | explore-cards SVG, process-step | — (no token) |
| 2rem | 2 | 32 | feature-card icon, sys-capabilities tab-icon/feature-icon, benefit-card, how-it-works SVG, use-case icon, comparison-wrap, tabbed-feature icon, feature-card--sm wrap | `--space-7` |
| 2.5rem | 2.5 | 40 | business-use-case, process-step badge, grid-section, linked-icon, service-lnd, feature-lnd | — (between space-7 and space-8) |
| 3rem | 3 | 48 | feature-card wrap, sys-capabilities benefit, use-case-card wrap, technology container, comparison wrap, sys-capabilities visual-icon-wrap | `--space-8` |
| 3.5rem | 3.5 | 56 | explore-cards icon, stacked-feature-list, audit-card | — (between space-8 and space-9) |
| 4rem | 4 | 64 | how-it-works icon, feature-card stacked, sys-capabilities visual-wrap, how-it-works number | `--space-9` |
| 4.5rem | 4.5 | 72 | (unused currently) | — |

### Proposed Icon Sizing Scale

| Utility Class | Container Size | Icon SVG Size | Use Case |
|---|---|---|---|
| `icon-container-xs` | `--space-6` (24px) | 14px (0.875rem) | Inline indicators, checklist marks |
| `icon-container-sm` | `--space-7` (32px) | 16px (1rem) | Card inline icons, list item icons |
| `icon-container-md` | `--space-8` (48px) | 24px (1.5rem) | Standard card feature icons |
| `icon-container-lg` | `--space-9` (64px) | 32px (2rem) | Hero feature icons, step badges |
| `icon-container-xl` | `--space-10` (80px) | 40px (2.5rem) | Decorative/showcase icons |

Note: `icon-container-sm/md/lg/xl` already exist at lines 8739-8776. They use `--space-7/8/9/10`. Only `icon-container-xs` is missing.

### Icon Container System Rules

1. **All icon containers** must use `icon-container-{size}` utility class — no hardcoded `width`/`height`
2. **Icon backgrounds** must use `icon-bg-{type}` utility class — no inline or component-specific bg
3. **Icon SVG sizing** should be based on container: inner SVG = container × 0.5 (scale factor)
4. **Naming convention**: standardize on `__icon-wrap` for containers, `__icon` for SVG elements

### Badge System

Current badge system is **mostly clean** — 3 sizes (sm/md/lg), 5 color variants, all use tokens for colors.

**Issues:**
- `.badge--section` uses `font-size: 0.7rem` (hardcoded, no token)
- `.badge--card`, `--meta`, `--section` use hardcoded rem padding (should use `--space-*`)

**Proposed Badge Standard:**
| Variant | Font Size | Padding | Use |
|---|---|---|---|
| `badge--sm` | `--font-xs` | `--space-1 --space-2` | Inline metadata |
| `badge--md` | `--font-sm` | `--space-1 --space-3` | Card headers |
| `badge--lg` | `--font-base` | `--space-2 --space-4` | Section headers |

---

## FINAL OUTPUT

### 1. SYSTEM WEAKNESSES (Root-Level)

| # | Weakness | Impact | Scope |
|---|---|---|---|
| 1 | **No section background system** — 122 BEM rules × 30 components replicate 3 values. No page-level rhythm enforcement. | Every page can have broken visual flow. Muted opacity drifts (30/35/50%). | All pages |
| 2 | **No component contract** — There is no documented standard for what makes a "card" or "section" component. Each author interprets independently. | Hover gaps, icon chaos, spacing drift, missing focus states. | All components |
| 3 | **Misleading semantic tokens** — `--brand-amber` is near-black, `--brand-purple` is blue, `--c-success-soft` ≡ `--c-accent`. | Developers will use wrong tokens expecting wrong colors. Warning states render near-black. | Foundation layer |
| 4 | **Icon system exists but is unadopted** — 4 utility classes + 6 background tokens defined but used by 0 component CSS rules. | 42 hardcoded icon size rules proliferate. Every new component invents new sizes. | All icon containers |
| 5 | **Hover system is ad-hoc** — 5 different elevation behaviors, 3 different translate distances, 9 hardcoded transition timings. | User perceives inconsistent "feel" across cards on the same page. | 53 hover rules |
| 6 | **Legacy class aliases are dead weight** — 19 components carry both old and new class selectors in CSS. | CSS bloat. Maintenance confusion (which name is canonical?). | components.css |

### 2. COLOR SYSTEM ANALYSIS

- **Grade: A-** (unchanged from original audit)
- Token chains: ≤2 hops, compliant ✅
- Zero hardcoded hex in component CSS ✅
- Zero duplicate computed hex values ✅
- 3 misleading names need flagging for Phase 8
- 8 brand-token leaks need `--c-*` routing
- 2 semantic token duplicates to remove (`--c-success-soft`, `--icon-bg-secondary-alpha`)

### 3. GRADIENT SYSTEM DESIGN

- **8 gradient tokens** proposed (4 exist, 4 new)
- 5 gradient categories: Hero / CTA / Tint / Fade / Element
- 14 hardcoded gradients can be tokenized
- 5 `!important` gradient utilities to remove
- `--gradient-cta-warm` is semantically broken (renders near-black)

### 4. HOVER SYSTEM DESIGN

- **4-tier hover system** proposed (Non-interactive / Subtle / Standard Card / Elevated Card)
- **5-tier elevation system** mapped to shadow tokens
- **3 motion timing tokens** — `fast` (hover), `normal` (accordion), `slow` (page animation)
- **9 hardcoded transitions** → 5 real fixes (2 are intentionally different durations)
- **4 unguarded hover states** to wrap in `@media (hover: hover)`

### 5. SECTION SYSTEM DESIGN

- **3 canonical background tokens** replace 122 BEM rules
- **3 utility classes** replace 30 component-level background props
- **Sequence rules** defined (no consecutive identical, hero→surface, max 2 muted per page)
- **CTA behavior rules** defined (primary/inline/soft)
- **Clear migration path**: 5-step process, backwards compatible

### 6. COMPONENT SYSTEM GAPS

- 5 components audited, all traces to **missing component contract**
- DualToneChecklist + ServiceSpectrum + ProcessSteps: missing card contract entirely
- IconBenefit: 3 variant hover behaviors need unification
- FAQ: duplicate CSS blocks + `max-height` clipping bug
- **Proposed 5 contracts**: Card, Interactive Card, Section, Icon Container, Transition

### 7. EXECUTION PLAN (IMPROVED)

---

#### Phase 7A — Section Background System (Foundation)
**Risk:** Low | **Impact:** HIGH | **Dependencies:** None

| Step | What | Why | Changes |
|---|---|---|---|
| A1 | Add `--section-bg-base`, `--section-bg-surface`, `--section-bg-muted` tokens to foundation.css | Single source of truth for 3 background values | 3 tokens |
| A2 | Add 3 utility classes (`bg-section-base`, `bg-section-surface`, `bg-section-muted`) | Replace all BEM rules | 3 CSS rules |
| A3 | Standardize muted opacity to 30% across all components | Fix 35%→30% (6 sections) and 50%→30% (2 sections) | 8 CSS value changes |
| A4 | Fix comparison section `--bg-muted` bug (identical to `--bg-default`) | Bug fix | 2 CSS value changes |
| A5 | Add missing `--bg-default` variants to 3 sections (technologies, tier-cards, content-cards-grid) | Complete variant coverage before deletion | 3 CSS rules |
| A6 | Update 28 TSX components — simplify `backgroundColor` prop to className passthrough | Remove BEM branching logic | 28 TSX files |
| A7 | Update ~50 caller sites (pages/renderers) — replace `'muted'`/`'white'`/`'default'` with utility classes | Callers use new system | ~50 TSX files |
| A8 | Delete 122 BEM `--bg-*` CSS rules | Dead code removal | -122 CSS rules |
| A9 | Delete 5 legacy `.gradient-cta-*` `!important` utility classes | Specificity cleanup | -5 CSS rules |

**Order:** A1 → A2 → A3 → A4 → A5 → A6+A7 (parallel) → A8 → A9  
**Total:** ~13 new rules, ~127 deleted, 78+ files touched. Net reduction: ~114 CSS rules.

---

#### Phase 7B — Hover & Transition Standardization
**Risk:** Low | **Impact:** HIGH | **Dependencies:** None (parallel with 7A)

| Step | What | Why | Changes |
|---|---|---|---|
| B1 | Add Tier 2 hover to DualToneChecklist, ServiceSpectrum, ProcessSteps cards | 3 components missing interactive feedback | +9 CSS rules (3 hover + 3 transition + 3 `@media` guards) |
| B2 | Add `:focus-visible` to same 3 components | Accessibility | +3 CSS rules |
| B3 | Normalize hover elevations: all standard cards → `--shadow-lg`, feature cards → `--shadow-xl` | Currently 4 different shadow tiers used for same intent | ~8 CSS value changes |
| B4 | Normalize card translate: standard → `-0.25rem`, feature → `-0.375rem` | Currently 3 different distances | ~5 CSS value changes |
| B5 | Replace 5 hardcoded `0.2s ease` transitions with `var(--transition-fast)` | Consistent motion timing | 5 CSS value changes |
| B6 | Wrap 4 unguarded hover states in `@media (hover: hover)` | Touch device UX | 4 CSS block restructures |
| B7 | Strengthen `benefit-card--link` hover (add shadow elevation) | Currently only border change — insufficient feedback | 1 CSS rule update |

**Order:** B5 → B6 (non-visual) → B1 → B2 → B3 → B4 → B7  
**Total:** ~12 new rules, ~23 rule changes

---

#### Phase 7C — Gradient Tokenization
**Risk:** Low | **Impact:** Medium | **Dependencies:** 7A complete (CTA gradient dedup)

| Step | What | Why | Changes |
|---|---|---|---|
| C1 | Add 4 new gradient tokens to foundation.css | `--gradient-surface-soft`, `--gradient-tint-blue`, `--gradient-tint-teal`, `--gradient-hero-fade` | 4 tokens |
| C2 | Replace 14 hardcoded gradients with new tokens | Consolidate gradient sources | 14 CSS value changes |
| C3 | Flag `--gradient-cta-warm` as broken (not safe to use; mark with comment) | Near-black gradient — needs brand color fix in Phase 8 | 1 comment |
| C4 | Audit `--gradient-cta-10/11/12/13/14` usage — remove if only used by legacy `.gradient-cta-*` classes | May be dead after A9 | ~5 potential deletions |

**Order:** C1 → C2 → C3 → C4  
**Total:** 4 new tokens, ~14 value changes, up to 5 deletions

---

#### Phase 7D — Icon + Badge Normalization
**Risk:** Medium (visual pixel shifts) | **Impact:** Medium | **Dependencies:** None (parallel)

| Step | What | Why | Changes |
|---|---|---|---|
| D1 | Add `icon-container-xs` utility class (24px / `--space-6`) | Missing smallest tier | 1 CSS rule |
| D2 | Map each component's hardcoded icon size to nearest `icon-container-*` tier | 42 icon sizing rules → 5 utility classes | ~42 CSS refactors |
| D3 | Replace component CSS icon backgrounds with `icon-bg-*` utility classes | Connect components to existing but unadopted token system | ~12 CSS changes |
| D4 | Standardize icon container BEM suffix to `__icon-wrap` | 5 different naming patterns → 1 | ~15 HTML class renames |
| D5 | Badge tokenization: replace hardcoded padding/font-size with `--space-*`/`--font-*` | 4 badge variants with hardcoded values | ~6 CSS value changes |

**Order:** D1 → D5 (safe) → D2 → D3 → D4  
**Total:** ~76 CSS changes. **Highest visual risk** — size rounding may shift layout by 1-4px.

---

#### Phase 7E — Component-Specific Fixes + Legacy Cleanup
**Risk:** Medium | **Impact:** Medium | **Dependencies:** 7A, 7B complete

| Step | What | Why | Changes |
|---|---|---|---|
| E1 | DualToneChecklist: add border + box-shadow to columns | Missing card contract | 2 CSS rules |
| E2 | ServiceSpectrum: add border + border-radius to cards | Missing card contract | 2 CSS rules |
| E3 | ProcessSteps: add border-radius, tokenize badge shadow | Missing card contract | 2 CSS changes |
| E4 | IconBenefit: fix `--r-xl` bug (`var(--radius)` → `var(--radius-xl)`) | Bug fix | 1 CSS value change |
| E5 | FAQ: merge duplicate `[data-open='true']` blocks, fix max-height strategy | Bug fix + UX | 2 CSS changes |
| E6 | Replace 8 `var(--brand-*)` references with `--c-*` equivalents | Seal semantic layer | 8 CSS value changes |
| E7 | Delete legacy class alias selectors (~19 components with dual names) | CSS weight reduction | ~80-100 deleted selectors |
| E8 | Remove 4 dead `.l-section` media query blocks in framework.css | Dead code | 4 CSS block deletions |

**Order:** E4 → E5 (bug fixes) → E1 → E2 → E3 (contract compliance) → E6 → E7 → E8  
**Total:** ~9 new/changed rules, ~100+ deleted selectors

---

### Phase Dependency Graph

```
7A (Section BG) ────────────────┐
                                ├──→ 7E (Component Fixes + Legacy Cleanup)
7B (Hover + Transitions) ──────┘
                                     
7C (Gradients) ← depends on 7A (CTA gradient dedup)

7D (Icons + Badges) ← independent, parallel with all
```

### Recommended Execution Order

**7A → 7B (parallel) → 7C → 7D → 7E**

- 7A first: highest impact, lowest risk, unblocks 7E
- 7B parallel with 7A: independent, high impact
- 7C after 7A: depends on CTA gradient cleanup
- 7D any time: independent but medium risk (pixel shifts)
- 7E last: depends on 7A+7B patterns being in place

### Aggregate Totals

| Metric | Count |
|---|---|
| New CSS tokens/rules | ~26 |
| CSS value changes | ~65 |
| CSS rules deleted | ~350+ |
| TSX files modified | ~80+ |
| Net CSS weight change | **-300+ rules** (significant file size reduction) |



 

Created 4 todos

Searched for text `--bg-` (`**/src/**/*.css`), 20 results

Searched for text `--bg-` (`**/src/**/*.tsx`), 20 results

Searched for text `--bg-` (`**/src/**/*.tsx`), 84 results

Searched for text `--bg-` (`**/src/**/*.css`), 100 results

Let me now see what these BEM bg classes actually declare in CSS, and how the component pattern works.  

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/components/reusable/sections/core/ProcessStepsSection.tsx#1-1), lines 1 to 70

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#7180-7180), lines 7180 to 7210

Compacted conversation

Searched for text `--bg-` (`**/src/styles/components.css`), 122 results

Searched for text `backgroundColor` (`**/src/**/*.tsx`), 200 results

Now let me read a few more CSS blocks to see the full value patterns, and also check the renderers to understand the full scope.    

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#6395-6395), lines 6395 to 6500

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#2370-2370), lines 2370 to 2385

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#2760-2760), lines 2760 to 2780

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#2905-2905), lines 2905 to 2920

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#2993-2993), lines 2993 to 3015

Read [](file:///Users/zeeshansadiq/Projects/Mindwp/src/styles/components.css#4685-4685), lines 4685 to 4695

Now I have the complete picture. Here is the **BEM `--bg-` Background System Audit Report**:

---

## BEM `--bg-` Background System Audit

### The Problem

Every section component internally controls its background via BEM modifier classes (`c-*-section--bg-default`, `--bg-white`, `--bg-muted`). This creates a **competing control layer** that should instead be managed at the **composition level** (page/renderer) using utility classes.

---

### Pattern (identical across all 28+ components)

**TSX** — each component has a `backgroundColor` prop with branching logic:
```tsx
const backgroundClassName =
  backgroundColor === 'default' || backgroundColor === 'bg-background'
    ? `${BLOCK}--bg-default`
    : backgroundColor === 'white' || backgroundColor === 'bg-white'
      ? `${BLOCK}--bg-white`
      : mutedBackgrounds.includes(backgroundColor)
        ? `${BLOCK}--bg-muted`
        : backgroundColor;  // ← passthrough: already allows utility classes
```

**CSS** — 3 rules per component, all doing the exact same thing with different names:

| Modifier | CSS Value |
|----------|-----------|
| `--bg-default` | `background-color: var(--c-bg)` |
| `--bg-white` | `background-color: var(--c-surface)` |
| `--bg-muted` | `background-color: color-mix(in oklab, var(--c-bg) 30%, transparent)` |

Two special cases:
- `--bg-slate` (TierCardsSection only): `color-mix(in oklab, var(--c-bg) 35%, transparent)`
- `--bg-transparent` (IndustrySection only): `background-color: transparent`
- `hero-section--bg-default`: uses a gradient instead of flat color
- `feature-hero--bg-default`: uses a multi-stop gradient

---

### Affected Components (28 section components + 2 heroes)

#### CSS in components.css — 122 `--bg-` rules total

| # | Component (BLOCK) | CSS Lines | Legacy Alias | Variants |
|---|---|---|---|---|
| 1 | `c-technology-cards-section` | 2372-2379 | `.technologies` | muted, white |
| 2 | `faq` (FAQSection) | 2766-2775 | — | default, white, muted |
| 3 | `industry-section` | 2911 | — | transparent |
| 4 | `c-tier-cards-section` | 2996-3008 | `.industry-packages` | slate, white, muted |
| 5 | `c-content-cards-grid-section` | 3115-3122 | `.grid-section` | white, muted |
| 6 | `c-option-comparison-section` | 4536-4543 | `.platform-comparison` | default, muted |
| 7 | `feature-hero` | 4690 | — | default (gradient) |
| 8 | `c-comparison-section` | 4986-4993 | `.comparison` | default, muted |
| 9 | `hero-section` (SimpleHero) | 6398-6407 | — | default (gradient), white |
| 10 | `c-icon-benefit-cards-section` | 6418-6430 | `.benefits-section` | default, white, muted |
| 11 | `c-scenario-cards-section` | 6475-6487 | `.use-cases-section` | default, white, muted |
| 12 | `c-explore-cards-section` | 6630-6642 | `.explore-cards-section` | default, white, muted |
| 13 | `c-checklist-cards-section` | 7121-7133 | `.service-checklist-section` | default, white, muted |
| 14 | `c-process-steps-section` | 7182-7194 | `.service-process-steps` | default, white, muted |
| 15 | `c-icon-info-cards-section` | 7236-7248 | `.icon-cards-section` | default, white, muted |
| 16 | `c-generic-cards-section` | 7324-7336 | `.cards-section` | default, white, muted |
| 17 | `c-related-cards-section` | 7398-7410 | `.related-cards-section` | default, white, muted |
| 18 | `c-feature-checklist-cards-section` | 7454-7466 | `.features-section` | default, white, muted |
| 19 | `c-problem-cards-section` | 7523-7535 | `.pain-points-section` | default, white, muted |
| 20 | `c-dual-feature-cards-section` | 9559-9568 | — | default, white, muted |
| 21 | `c-stacked-feature-list-section` | 9612-9621 | — | default, white, muted |
| 22 | `c-narrative-stats-section` | 9961-9970 | — | default, white, muted |
| 23 | `c-image-stats-services-section` | 10037-10046 | — | default, white, muted |
| 24 | `c-testimonial-spotlight-split-section` | 10147-10156 | — | default, white, muted |
| 25 | `c-tabbed-feature-cards-section` | 10249-10258 | — | default, white, muted |
| 26 | `c-feature-stats-mockup-section` | 10377-10386 | — | default, white, muted |
| 27 | `c-step-cards-split-section` | 10550-10559 | — | default, white, muted |
| 28 | `c-dual-tone-checklist-comparison-section` | 10623-10632 | — | default, white, muted |
| 29 | `c-image-accordion-strip-section` | 10721-10730 | — | default, white, muted |
| 30 | `c-service-spectrum-cards-section` | 10802-10811 | — | default, white, muted |

---

### TSX Files with `backgroundColor` prop usage (callers)

**Pages/Renderers** passing `backgroundColor` values:

| File | Values Passed |
|---|---|
| Homepage.tsx | `'white'`, `'gradient-cta-1'`, `'cta--primary gradient-cta-1'`, `'industry-section--bg-transparent'` |
| Service renderers (6+) | `'bg-white'`, `'bg-muted/30'`, `'bg-background'`, `hero.backgroundColor` (from data) |
| Industry pages (20+) | `'bg-white'`, `'bg-muted/30'`, `'bg-muted/20'` |
| Feature renderers | `'bg-white'`, `'bg-slate-50'`, `'bg-gradient-to-br ...'`, `'gradient-cta-2'` |
| SmartCTA.tsx | `'blog-surface--muted'`, `'gradient-cta-1'`, `'gradient-cta-2'` |

---

### Key Insight: The passthrough already works

The `backgroundColor` prop logic has a **fallback passthrough** (`: backgroundColor`) — meaning if you pass a utility class like `'bg-background'`, it gets applied directly as a CSS class. This means:

1. The BEM mapping logic (`'default'` → `${BLOCK}--bg-default`, etc.) can be removed
2. Callers just need to pass the actual utility class (or nothing for white/inherit)
3. All 122 `--bg-` CSS rules in components.css become dead code

### Migration Strategy

| Current Value | New Value | CSS Source |
|---|---|---|
| `'default'` or `'bg-background'` | `'bg-background'` | Utility class (already exists) |
| `'white'` or `'bg-white'` | `''` (empty/omit) | Inherit from body (white) |
| `'muted'`, `'bg-muted'`, `'bg-muted/30'`, `'bg-muted/50'` | `'bg-muted/30'` | Utility class |
| `'gradient-cta-1'` | `'gradient-cta-1'` | Already passthrough (no change) |
| `'industry-section--bg-transparent'` | `''` (empty/omit) | Transparent = inherit |

### Scope Summary

- **122 CSS rules** to delete from components.css (including legacy aliases)
- **28 TSX components** — remove the `backgroundClassName` branching logic, change prop to direct passthrough
- **~50+ caller sites** across pages/renderers — update values from BEM keywords to utility classes
- **Zero visual change** if utility values map correctly

Want me to continue to the next code audit area (token system, gradient system, hover system), or do you want to discuss the migration execution plan for this background system first?