# Phase 7 — Visual Task Playbook

> THIS FILE IS A PHASE TASK PLAYBOOK.
> It is NOT system truth.
> It is NOT a rules document.

---

## 1. Phase Scope

- Close visual-system drift through Phase 7 implementation work only.
- Track open issues, fixes, and execution order for 7A through 7E.
- Keep shared rules in `SYSTEM-TRUTH.md`, `AI-RULES.md`, and `DESIGN-SYSTEM-CONTROL-LAYER.md`.

---

## 2. Open Issues

### 7B — Hover and transition drift
- DualToneChecklist, ServiceSpectrum, and ProcessSteps are missing shared hover treatment.
- Comparable cards do not use consistent shadow tiers.
- Some interactive elements are missing `:focus-visible`.
- Hardcoded `0.2s ease` transitions still exist in Phase 7 scope.
- Some hover rules still need `@media (hover: hover)` guards.

### 7C — Gradient drift
- Repeated gradient patterns are still hardcoded in component CSS.
- Legacy CTA gradient utility naming still creates duplication pressure.
- `--gradient-cta-warm` remains a broken name and needs explicit handling.

### 7D — Icon and badge drift
- Icon containers still use too many size patterns.
- Shared icon container utilities are underused.
- Badge padding and section badge font sizing still need tokenized cleanup.

### 7E — Remaining component defects
- `benefit-card--r-xl` uses the wrong radius token.
- FAQ still has duplicate open-state logic and brittle max-height behavior.
- DualToneChecklist columns need border and shadow normalization.
- ServiceSpectrum cards need border and border-radius normalization.
- ProcessSteps cards need radius and badge shadow cleanup.
- A small set of `--brand-*` leaks still need replacement.
- Dead `l-section` media-query blocks still need removal from `framework.css`.

---

## 3. Execution Plan

### 7A — Section Background System

**Status:** Done

**Closed work**
- T-104 Add 3 `--section-bg-*` tokens + 3 `bg-section-*` utility classes
- T-105 Standardize `--bg-muted` opacity to 30% across 15 sections
- T-106 Fix comparison section background bug
- T-107 Add missing `--bg-default` to 3 sections
- T-108 Remove 5 legacy gradient `!important` utilities
- T-109 Validate section background system consistency

### 7B — Hover & Transition Standardization

**Status:** Active

**Fixes to execute**
- T-110 Add Tier 2 hover to DualToneChecklist, ServiceSpectrum, and ProcessSteps cards
- T-111 Add `:focus-visible` ring to DualToneChecklist, ServiceSpectrum, and ProcessSteps
- T-112 Normalize hover shadows: standard cards use `--shadow-lg`, feature cards use `--shadow-xl`
- T-113 Replace hardcoded `0.2s ease` transitions with `var(--transition-fast)`
- T-114 Wrap 4 unguarded hover states in `@media (hover: hover)`
- T-115 Strengthen `benefit-card--link` hover with shadow elevation

**Exit condition**
- Shared interaction behavior is aligned for the scoped cards and links.

### 7C — Gradient Tokenization

**Status:** Queued

**Fixes to execute**
- T-116 Add 4 new gradient tokens to `foundation.css`
- T-117 Replace 14 hardcoded gradients in `components.css` with the new tokens
- T-118 Mark `--gradient-cta-warm` as broken with an explanatory code comment

**Exit condition**
- Repeated gradient patterns are named and consumed through tokens.

### 7D — Icon + Badge Normalization

**Status:** Queued

**Fixes to execute**
- T-119 Add `icon-container-xs` utility class
- T-120 Map hardcoded icon sizes to `icon-container-*` tiers
- T-121 Replace component icon backgrounds with `icon-bg-*` utility classes
- T-122 Replace hardcoded badge padding and font-size values with tokens

**Exit condition**
- Icon and badge implementation uses a shared size and utility model.

### 7E — Component Fixes + Legacy Cleanup

**Status:** Queued

**Fixes to execute**
- T-123 Fix `benefit-card--r-xl` bug (`var(--radius)` → `var(--radius-xl)`)
- T-124 FAQ: merge duplicate `[data-open='true']` blocks and fix max-height behavior
- T-125 DualToneChecklist: add border + box-shadow to columns
- T-126 ServiceSpectrum: add border + border-radius to cards
- T-127 ProcessSteps: add border-radius and tokenize badge shadow
- T-128 Replace 8 `var(--brand-*)` leaks with `--c-*` equivalents
- T-129 Remove 4 dead `l-section` media query blocks in `framework.css`

**Exit condition**
- Remaining scoped defects are closed without expanding Phase 7 beyond its queue.

---

## 4. Completion Tracking

| Phase | Status | Check |
|---|---|---|
| 7A | Done | Section background cleanup complete |
| 7B | Active | Hover, focus, and transition fixes in progress |
| 7C | Queued | Gradient tokenization pending |
| 7D | Queued | Icon and badge normalization pending |
| 7E | Queued | Remaining component cleanup pending |

**Execution order:** 7B → 7C → 7D → 7E

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

---

## Appendix — BEM `--bg-` Background System Audit

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

---

## 🔵 SYSTEM UI AUDIT (CODE-BASED)

This section is a code-driven UI audit of the current reusable system, template layer, and homepage custom layer.

Scope audited:
- homepage custom sections in `src/screens/Homepage.tsx`
- reusable components in `src/components/reusable/*`
- page templates and renderers in `src/domains/*`
- system surfaces in `src/components/system/*`

### System Structure

#### A. Core Components (high reuse)
- `Button` — shared action primitive with 6 visual variants and 3 sizes
- `SectionIntro` — shared section heading wrapper with badge, title, description, and optional actions
- `CTASection` — shared conversion panel used as full section and inline panel
- `Card` — shared card shell used by comparison, FAQ, checklist, and multiple domain sections
- `IconBenefitCard` — most reused feature/benefit card across homepage, services, and shared sections
- `FAQSection` — shared accordion shell reused across services, blog, resources, industries, and case studies

#### B. Shared Sections
- `ProcessStepsSection`
- `ComparisonSection`
- `ChecklistCardsSection`
- `IconBenefitCardsSection`
- `FeatureChecklistCardsSection`
- `ServiceSpectrumCardsSection`
- `DualToneChecklistComparisonSection`
- `SmartRelatedSection`
- `JourneyNavigator`

#### C. Page Templates
- services: renderer-driven, mixed reusable sections plus inline custom layout blocks
- features: mostly consistent renderer order, but allows custom page-level visual content
- industries: strongest template consistency; order is enforced in template
- resources: flexible section array with required-section validation but no enforced order
- blog: flexible section array with no required-order enforcement
- case studies: strongest ordered content model via explicit `SECTION_ORDER`

#### D. Homepage Custom Sections
- hero
- infrastructure gaps
- smart website framework
- trust foundations
- client journey
- system capabilities
- infrastructure layers
- industries
- visibility alignment
- case studies
- footer CTA

### Component: Button

Issues
- `btn-primary` and `btn-secondary` add lift and shadow on hover, while `btn-outline`, `btn-outline-light`, and `btn-white` only change background and do not share the same elevation behavior.
- Variant styling is centralized in CSS, but interactive feedback is not normalized across variants.

Impact
- Shared. Every page inherits different button feel depending on chosen variant.

Fix Direction
- Normalize hover/focus feedback across button variants inside `components.css`, keeping the current button API unchanged.

Scope
- shared

### Component: SectionIntro

Issues
- `SectionIntro` itself is consistent, but system drift comes from bypassing it: resources use `ResourceSectionHeader`, blog content sections sometimes use raw section markup around `SectionIntro`, and homepage custom sections mix `SectionIntro` with bespoke headings.
- The component has become the de facto section-heading standard, but it is not applied consistently across all section families.

Impact
- Shared. Heading rhythm is mostly standardized, but not universal.

Fix Direction
- Use `SectionIntro` as the default header shell for reusable sections and keep exceptions limited to true special cases.

Scope
- shared

### Component: CTASection

Issues
- `CTASection` supports `wrapper='none'`, `includeContainer={false}`, additive `cssPrefix`, and freeform `backgroundColor`, which allows the same CTA pattern to render as a full section, inline panel, or embedded block.
- That flexibility is useful, but it also creates multiple presentation modes with different spacing and container behavior.

Impact
- Global. CTA placement and panel framing vary between homepage, service pages, and content templates.

Fix Direction
- Keep the current API, but define which CTA usages are standard: full-width section, inline panel, or footer CTA.

Scope
- global

### Component: Card

Issues
- The primitive is clean and stable, but many sections still wrap it with bespoke spacing, header, and icon conventions instead of converging on a narrower shared card contract.

Impact
- Shared. Card density, padding rhythm, and icon treatment drift across sections built on the same shell.

Fix Direction
- Tighten card usage rules in shared sections before introducing more one-off card wrappers.

Scope
- shared

### Component: IconBenefitCard

Issues
- This component carries multiple layout and behavior modes: `centered`, `left`, CTA button mode, footer-link mode, heading size variants, description size variants, and icon color variants.
- The API is still workable, but a single card is currently responsible for too many presentation patterns.
- Homepage custom sections also duplicate icon-color mapping logic instead of letting `IconBenefitCard` own that concern.

Impact
- Global. It is one of the most reused visual primitives in the codebase.

Fix Direction
- Normalize how `IconBenefitCard` is used across shared sections and stop duplicating its icon-treatment logic in homepage custom sections.

Scope
- global

### Component: FAQSection

Issues
- `FAQSection` mixes interactive behavior (`accordion` vs `expanded`), layout size (`default` vs `compact`), and background mapping logic in one component.
- It is reused widely, but each domain still presents it with slightly different framing and background inputs.

Impact
- Shared. FAQ behavior is reusable, but visual framing varies by template.

Fix Direction
- Keep the current component, but narrow the allowed presentation patterns per page type.

Scope
- shared

### Section: Shared Section Shells

Issues
- Background mapping logic is duplicated across many reusable sections through the same `backgroundColor === 'default' || 'bg-background'` style branches.
- Column-class branching for `2 | 3 | 4` grid variants is also repeated across many section components.
- The result is a reusable section layer with repeated logic instead of one consistent section shell behavior.

Impact
- Global. This affects almost every reusable section family.

Fix Direction
- Standardize accepted section background inputs and grid-column behavior across shared sections without changing page architecture.

Scope
- global

### Section: ProcessStepsSection

Issues
- The section follows the shared shell pattern, but still duplicates background and column branching internally.
- It is used in homepage, services, and features, so any spacing or interaction drift here propagates broadly.

Impact
- Shared. High-reuse section with broad surface area.

Fix Direction
- Treat this as a reference section for shared spacing, card rhythm, and interaction normalization.

Scope
- shared

### Section: ComparisonSection

Issues
- Uses the shared `Card` primitive cleanly, but still has its own background branching instead of a common section behavior.
- It is a representative example of card-based section reuse that is visually close to other grid sections while still maintaining its own layout rules.

Impact
- Shared. Services, industries, and resources all rely on comparison-style content.

Fix Direction
- Keep the component structure, but align its background and spacing behavior with the other shared card sections.

Scope
- shared

### Section: ResourceChecklistSection

Issues
- `ResourceChecklistSection` uses a separate `ResourceSectionHeader` instead of the main `SectionIntro` system.
- It also wraps checklist content in a local section shell rather than leaning on the core checklist section pattern.

Impact
- Shared. Resources keep a visibly separate section-header pattern from the rest of the system.

Fix Direction
- Reduce resource-specific header drift and bring resource section framing closer to the shared section standard.

Scope
- shared

### Template: Services

Issues
- Service pages reuse the same section families, but ordering is not fully standardized at renderer level.
- `SmartWebsiteSystemsRenderer` mixes reusable sections with several inline custom sections, including value blocks, type grids, concerns, and an inline CTA panel.
- `LocalSeoAuthorityRenderer` stays closer to the reusable-section pattern and shows a different service-page rhythm.

Impact
- Shared. Services are visually related, but their mid-page section sequencing is not as consistent as the component inventory suggests.

Fix Direction
- Standardize the canonical service-page sequence without removing renderer flexibility.

Scope
- shared

### Template: Features

Issues
- Feature renderers are structurally more consistent than services, but they allow more inline visual composition inside the renderer layer.
- `AIChatRenderer` embeds a custom `ChatDemo` card and multiple inline fallback sections using utility-heavy markup, which creates page-level exceptions inside an otherwise reusable template flow.

Impact
- Shared. The overall feature-page order is stable, but custom visual inserts can bypass the standard section language.

Fix Direction
- Keep feature order stable and limit renderer-level bespoke visual blocks to intentional feature demos only.

Scope
- shared

### Template: Industries

Issues
- Industry pages are the cleanest template family: `IndustryDetailPageTemplate` enforces a stable top-to-bottom sequence.
- The main drift here is not ordering; it is that some industry sections are domain aliases or wrappers around generic sections, which can hide shared behavior behind domain-specific names.

Impact
- Shared. Good consistency at template level, moderate naming drift at section layer.

Fix Direction
- Preserve the template order and keep industry-specific naming aligned with the shared section behaviors underneath.

Scope
- shared

### Template: Resources

Issues
- `ResourcePageTemplate` validates required sections, but it does not enforce a canonical order beyond the order supplied in content.
- Resource pages also maintain their own header treatment in some section types, which makes them feel like a parallel UI system rather than a themed use of the shared one.

Impact
- Shared. Resource pages are structurally valid, but visual hierarchy depends heavily on author-provided sequence.

Fix Direction
- Define the preferred resource-section order and align resource-specific headers with the main section-heading system.

Scope
- shared

### Template: Blog

Issues
- `BlogPostTemplate` is the loosest page model: it renders sections in content order and does not require a stronger structural sequence.
- FAQ rendering also hardcodes the title `Frequently Asked Questions` rather than using the section heading as the primary UI label.

Impact
- Shared. Blog has the most editorial freedom and therefore the highest risk of hierarchy drift.

Fix Direction
- Keep editorial flexibility, but define a minimal structural expectation for blog posts and reuse heading content more directly.

Scope
- shared

### Template: Case Studies

Issues
- `CaseStudyTemplate` has the strongest ordering discipline through `SECTION_ORDER`.
- The main gap is that required-section validation is minimal compared with the amount of order logic already present.

Impact
- Shared. Case studies are already the most systematized template family.

Fix Direction
- Use case studies as the benchmark for ordered template composition in the rest of Phase 7.

Scope
- shared

### Homepage (Custom)

Issues
- Homepage is the main exception to the reusable system: most sections are declared inline in `Homepage.tsx` instead of living as reusable domain sections.
- Homepage duplicates several system behaviors locally, including icon-class mapping in `SmartWebsiteFrameworkSection`, custom section shells, and direct composition of cards, tabs, and CTA panels.
- Reusable sections are also mixed with extra wrapper sections, which changes spacing and section semantics compared with how the same shared components are used elsewhere.
- Custom sections such as `TrustFoundationsSection`, `SystemCapabilitiesSection`, `InfrastructureLayersSection`, `VisibilityAlignmentSection`, and `FooterCTASection` define homepage-specific visual rules outside the reusable section layer.

Impact
- Local with high visibility. Homepage is the most important custom surface and the biggest source of system drift.

Fix Direction
- Audit homepage as its own custom system first, then align its section framing and shared-component usage with the reusable site standard.

Scope
- local

## 🔥 SYSTEM PRIORITIES

### Critical (global impact)
- Repeated reusable-section shell logic: duplicated background and grid-column branching across many section components.
- CTASection presentation drift: same CTA primitive used as section, inline panel, and footer panel without a consistent placement rule.
- IconBenefitCard variation pressure: too many presentation modes in one global card primitive.

### Medium (shared impact)
- Service template order drift between renderers.
- Resource template sequence freedom and resource-specific header split from `SectionIntro`.
- Feature renderer-level custom demo blocks and inline fallback sections.
- FAQSection framing differences across page types.
- Button hover behavior inconsistency across variants.

### Low (page-level)
- Blog FAQ title hardcoded instead of using supplied section heading.
- Homepage wrapper differences around reused sections.
- Industry naming drift where domain wrappers hide shared core behavior.

## Issue Mapping Summary

### Global
- shared section shell duplication
- CTA section framing drift
- IconBenefitCard variation pressure

### Shared
- button interaction drift
- section-heading adoption drift
- service page order drift
- resource page header and sequence drift
- feature renderer custom visual inserts
- FAQ framing inconsistency

### Local
- homepage custom-section drift
- blog heading/FAQ label drift
- industry naming-layer drift

---

## PHASE 7 SYSTEM DECISION ANALYSIS

### System: Background System

Decision:
- Replace

Reason:
- This is repeated system logic, not a component bug.

Execution:
- Replace per-section background branching with one shared section-surface layer.
- Standardize all section background inputs to a small fixed set.
- Remove section-local background mapping from reusable sections.

### System: Card System

Decision:
- Fix

Reason:
- The base card exists and is usable. Drift is in contract enforcement.

Execution:
- Keep `Card` as the primitive.
- Normalize border, radius, padding, and elevation rules across card-based sections.
- Upgrade `ServiceSpectrumCardsSection`, `DualToneChecklistComparisonSection`, and `ProcessStepsSection` to the same card contract.

### System: Hover System

Decision:
- Replace

Reason:
- Per-component hover tuning will keep the system fragmented.

Execution:
- Introduce one shared interaction layer with fixed hover tiers and one focus-visible rule set.
- Move card hover behavior to shared tier classes/tokens.
- Strip one-off hover values from individual section implementations.

### System: Icon System

Decision:
- Fix

Reason:
- The utility base already exists. Adoption is the problem.

Execution:
- Complete the icon-container utility scale.
- Standardize icon size/background usage on existing utilities.
- Remove local icon-class mapping from homepage and section-specific wrappers.

### System: CTA System

Decision:
- Fix

Reason:
- `CTASection` is already the correct base component.

Execution:
- Keep `CTASection`.
- Lock its allowed modes: full section, inline panel, footer CTA.
- Standardize CTA placement rules at template level instead of adding new CTA components.

### System: Section Structure

Decision:
- Replace

Reason:
- The duplication is structural and repeated too widely to clean up piecemeal.

Execution:
- Add one shared section-shell decision layer for surface class and grid-column mapping.
- Remove repeated branching from reusable sections.
- Keep existing section components, but route them through the same structure rules.

## COMPONENT STRATEGY

### A. Keep & Upgrade
- `Button`
- `SectionIntro`
- `CTASection`
- `Card`
- `FAQSection`
- `ProcessStepsSection`
- `ComparisonSection`
- `ChecklistCardsSection`
- `SmartRelatedSection`
- `JourneyNavigator`

### B. Refactor (medium changes)
- `IconBenefitCard`
- `IconBenefitCardsSection`
- `ServiceSpectrumCardsSection`
- `DualToneChecklistComparisonSection`
- `ResourceChecklistSection`
- service renderers using inline section markup
- `ResourcePageTemplate`
- `BlogPostTemplate`

### C. Replace (critical)
- homepage inline custom sections inside `Homepage.tsx`
- per-section background branching layer
- per-section grid-column branching layer
- ad hoc hover rules as a system

## SYSTEM LAYERS TO CREATE

Create only these:

1. Section surface layer
- small shared mapping for approved section backgrounds

2. Interaction layer
- shared hover tiers
- shared focus-visible rule

3. Section shell helpers
- one grid-column mapping helper
- one section-surface helper

4. One missing icon utility
- `icon-container-xs`

Do not create new page architectures.
Do not create a new CTA component.
Do not create a new card primitive.

## EXECUTION ORDER

1. Build the shared section-surface and section-shell layer.
2. Build the shared interaction layer for hover and focus states.
3. Normalize the base primitives: `Button`, `CTASection`, `Card`, `SectionIntro`.
4. Upgrade high-impact shared sections: `ProcessStepsSection`, `ComparisonSection`, `ChecklistCardsSection`, `ServiceSpectrumCardsSection`, `DualToneChecklistComparisonSection`, `FAQSection`.
5. Refactor `IconBenefitCard` and `IconBenefitCardsSection`, then standardize icon utility usage.
6. Standardize template rules in services, resources, blog, and CTA placement.
7. Rebuild homepage custom sections into explicit home-section components using the finalized system rules.
8. Finish local cleanup only after the homepage matches the shared system.

## RISK CONTROL

What can break UI
- background-system replacement can change section rhythm fast
- hover-tier replacement can change perceived density and card emphasis
- icon utility normalization can shift layout by a few pixels across many sections
- CTA mode locking can break spacing in inline CTA placements
- homepage section extraction can break the most visible page if done before primitives settle

What must be tested first
- homepage
- one service detail page using `ServiceSpectrumCardsSection` and `DualToneChecklistComparisonSection`
- one feature detail page with custom visual content
- one industry detail page
- one resource page
- one blog page
- one case study page
- FAQ interaction states
- CTA section in full-section mode and inline-panel mode

---

## 🚧 PHASE 7 — REDESIGN EXECUTION PLAN

### 1. Redesign Approach

- Hybrid approach.
- Upgrade stable primitives and shared sections in place where the API is already sound.
- Use V2 only for overloaded patterns that need structural cleanup without breaking current page usage.
- Keep compatibility through existing exports so pages continue rendering through the same entry points during the redesign.

---

### 2. Component Strategy

#### Level 1 — Safe (no API change)
- `Button`
- `SectionIntro`
- `CTASection`
- `Card`
- `FAQSection`
- `SimpleHero`
- `SplitHeroSection`
- `ProcessStepsSection`
- `ComparisonSection`
- `ChecklistCardsSection`
- `RelatedCardsSection`
- `SmartRelatedSection`
- `JourneyNavigator`

- What changes internally
  - normalize styling contracts, interaction rules, spacing, and shared class behavior
- Why safe
  - public APIs stay stable and all propagation happens through existing exports

#### Level 2 — Controlled (small API change)
- `IconBenefitCard`
- `IconBenefitCardsSection`
- `FeatureChecklistCardsSection`
- `ServiceSpectrumCardsSection`
- `DualToneChecklistComparisonSection`
- `ResourceChecklistSection`
- resource and blog template helpers that still inject local UI patterns

- What changes
  - reduce styling prop sprawl, tighten presentation modes, and remove local system logic from wrappers
- How compatibility is handled
  - keep compatibility paths for one phase, apply targeted mechanical updates, and preserve current exports while internals shift

#### Level 3 — Replace
- homepage inline custom sections
- ad hoc section-shell logic
- ad hoc interaction logic
- one-off icon mapping inside local page sections

- What gets rebuilt
  - the implementation layer for homepage and repeated system logic
- What stays unchanged
  - content, page flow, routing, data structure, and page architecture

---

### 3. System Layers

#### Section System
- what changes
  - one transparent-by-default section contract, external surface control only, one shared section-shell behavior
- where applied
  - reusable sections first, homepage custom sections after extraction, then template composition

#### Card System
- what changes
  - one card contract for border, radius, padding, shadow, and internal spacing tiers
- where applied
  - comparison, checklist, process, spectrum, benefit, testimonial, related, and FAQ card surfaces

#### Interaction System (IMPORTANT — FIRST PRIORITY)
- define hover tier system
  - one shared hover tier model for links, standard cards, elevated cards, and buttons
- define focus-visible rules
  - one focus-visible rule set for all interactive controls and card-like links
- define transition token usage
  - tokenized transition timing only, no local hardcoded timings in shared components
- clearly state: this is FIRST implementation step
  - interaction is the first implementation step because it affects the widest surface with the lowest structural risk

#### Icon System
- container scale
  - fixed icon container scale including `icon-container-xs`
- utility usage
  - semantic icon background and text utilities only
- removal of local mappings
  - remove section-level icon-class mapping objects and page-level icon treatment logic

---

### 4. Update Strategy

- global propagation order
  - primitives first, shared sections second, template wrappers third, homepage last
- how to avoid breaking layouts
  - keep existing exports, preserve DOM shape where possible, keep wrapper hooks during transition, and change shared rules before removing compatibility paths
- compatibility strategy
  - use current exports as the compatibility layer while internals move to the redesigned system
- file update strategy (mechanical vs targeted)
  - use mechanical updates for exact prop/value migrations and targeted edits for overloaded components, wrappers, and template logic

---

### 5. Execution Order (CRITICAL)

1. Interaction system (hover + focus + transitions) ← FIRST
2. Section system
3. Card system
4. Safe components
5. Controlled components
6. Template standardization
7. Homepage rebuild
8. Cleanup

---

### 6. Risk Control

#### High Risk Areas
- `IconBenefitCard`
- homepage custom sections
- `ServiceSpectrumCardsSection`
- `DualToneChecklistComparisonSection`
- `FAQSection`
- hero primitives if DOM structure shifts

#### Visual Breaking Points
- section spacing rhythm
- card density and elevation
- icon sizing
- hover emphasis
- CTA spacing and panel width
- homepage section stacking

#### Rollback Strategy
- keep compatibility exports until the redesign is stable
- land changes layer by layer, not page by page
- do not remove legacy styling hooks until representative pages are checked
- if a shared-component redesign causes drift, revert that layer only instead of rolling back the entire phase