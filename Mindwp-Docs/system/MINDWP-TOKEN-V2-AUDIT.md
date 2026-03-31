# MindWP Design System — Color Token Reconstruction

> Generated: 2026-03-31
> Source: Visual Audit System (39 routes, computed styles) + CSS Token Analysis
> Principle: FINAL COMPUTED VALUE = TRUTH

---

## 1. COMPUTED COLOR PALETTE (from audit)

### A. Off-Token Colors (detected by audit across 39 routes)

| Computed Value | Routes | Usage | Properties | Nearest Token |
|---|---|---|---|---|
| `rgba(0, 0, 0, 0.1)` | 39/39 | ALL components (benefit-card, section-header, cta-section, etc.) | borderColor | `--brand-primary` (wrong match) |
| `rgb(61, 75, 92)` | 36/39 | section-header, benefit-card, cta-section, business-use-case-card, etc. | color (text) | `--brand-primary` |
| `rgb(10, 22, 40)` | 31/39 | section-header, benefit-card, business-use-case-card, etc. | color (text) | `--brand-primary` |
| `rgb(255, 255, 255)` | 10/39 | div, feature-lnd, cta-section, benefit-card | backgroundColor, color | `--brand-primary` (wrong) |
| `rgb(248, 250, 252)` | 2/39 | div | backgroundColor | `--brand-primary` (wrong) |
| `rgb(10, 10, 10)` | 3/39 | business-use-case-card | color (text) | `--brand-primary` |
| `color(srgb 0.039 0.086 0.157 / 0.1)` | 3/39 | div, benefit-card | backgroundColor | — |
| `color(srgb 1 1 1 / 0.1)` | 3/39 | div | backgroundColor | — |
| `color(srgb 1 1 1 / 0.9)` | 1/39 | cta-section | color | — |

### B. On-Token Colors (resolved from CSS definitions)

| Token | Hex | RGB Equivalent | Role |
|---|---|---|---|
| `--brand-primary` | `#0A1628` | `rgb(10, 22, 40)` | Primary brand (dark navy) |
| `--brand-secondary` | `#2E5C8A` | `rgb(46, 92, 138)` | Secondary (medium blue) |
| `--brand-accent` | `#4A9AB2` | `rgb(74, 154, 178)` | Accent (teal) |
| `--brand-primary-mid` | `#1B2845` | `rgb(27, 40, 69)` | Dark navy mid-tone |
| `--brand-neutral-700` | `#3D4B5C` | `rgb(61, 75, 92)` | Body text |
| `--brand-neutral-500` | `#9CA3AF` | `rgb(156, 163, 175)` | Muted text |
| `--brand-neutral-300` | `#D1D5DB` | `rgb(209, 213, 219)` | Light neutral |
| `--brand-neutral-200` | `#E5E7EB` | `rgb(229, 231, 235)` | Light borders |
| `--brand-surface` | `#F9FAFB` | `rgb(249, 250, 251)` | Surface bg |
| `--brand-white` | `#FFFFFF` | `rgb(255, 255, 255)` | White |
| `--brand-border-dark` | `#374151` | `rgb(55, 65, 81)` | Dark borders |
| `--brand-dark` | `#0a0a0a` | `rgb(10, 10, 10)` | Near-black |
| `--brand-amber` | `#070606` | `rgb(7, 6, 6)` | MISLEADING — near-black, NOT amber |
| `--brand-primary-light` | `#60a5fa` | `rgb(96, 165, 250)` | Light blue |
| `--brand-grey` | `#f8fafc` | `rgb(248, 250, 252)` | Page background |
| `--brand-grey-light` | `#f1f5f9` | `rgb(241, 245, 249)` | Muted surface |
| `--brand-blue-lightest` | `#eff6ff` | `rgb(239, 246, 255)` | Tint surface |
| `--brand-teal-lightest` | `#f0fdfa` | `rgb(240, 253, 250)` | Tint surface |
| `--brand-teal-lighter` | `#ccfbf1` | `rgb(204, 251, 241)` | Strong tint |
| `--brand-yellow-star` | `#fbbf24` | `rgb(251, 191, 36)` | Rating stars |
| `--border-default` | `#0000001a` | `rgba(0, 0, 0, 0.1)` | Default border |
| `--border-light` | `#0000000d` | `rgba(0, 0, 0, 0.05)` | Light border |

---

## 2. COLOR GROUPING (RGB diff ≤ 3 = same group)

| Group | Members | Resolved RGB | Intended Role |
|---|---|---|---|
| **DARK-NAVY** | `--brand-primary`, audit `rgb(10, 22, 40)` | `rgb(10, 22, 40)` | Headings, primary actions |
| **NEAR-BLACK** | `--brand-dark`, `--brand-amber`, audit `rgb(10, 10, 10)` | `rgb(10, 10, 10)` / `rgb(7, 6, 6)` | Foreground, "amber" (misleading) |
| **BODY-TEXT** | `--brand-neutral-700`, audit `rgb(61, 75, 92)` | `rgb(61, 75, 92)` | Body text, card descriptions |
| **MUTED-TEXT** | `--brand-neutral-500` | `rgb(156, 163, 175)` | Muted/secondary text |
| **BLUE** | `--brand-secondary` | `rgb(46, 92, 138)` | Secondary brand blue |
| **TEAL** | `--brand-accent` | `rgb(74, 154, 178)` | Accent teal |
| **LIGHT-BLUE** | `--brand-primary-light` | `rgb(96, 165, 250)` | Light accent blue |
| **BORDER-LIGHT** | `--brand-neutral-200`, `--border-default`, audit `rgba(0,0,0,0.1)` | `rgb(229, 231, 235)` / `rgba(0,0,0,0.1)` | Borders (two competing values) |
| **NEUTRAL-300** | `--brand-neutral-300` | `rgb(209, 213, 219)` | Dividers, on-dark text |
| **BORDER-DARK** | `--brand-border-dark` | `rgb(55, 65, 81)` | Dark borders |
| **WHITE** | `--brand-white`, audit `rgb(255,255,255)` | `rgb(255, 255, 255)` | Cards, inverse text |
| **SURFACE** | `--brand-surface`, `--brand-grey`, audit `rgb(248,250,252)` | `rgb(249, 250, 251)` / `rgb(248, 250, 252)` | Page bg (≤1 diff, SAME group) |
| **SURFACE-MUTED** | `--brand-grey-light` | `rgb(241, 245, 249)` | Input bg, muted surface |
| **TINT-BLUE** | `--brand-blue-lightest` | `rgb(239, 246, 255)` | Blue tint surface |
| **TINT-TEAL** | `--brand-teal-lightest` | `rgb(240, 253, 250)` | Teal tint surface |
| **TINT-TEAL-STRONG** | `--brand-teal-lighter` | `rgb(204, 251, 241)` | Strong teal accent bg |
| **STAR-YELLOW** | `--brand-yellow-star` | `rgb(251, 191, 36)` | Ratings only |

---

## 3. COMPONENT vs SECTION BREAKDOWN

### COMPONENTS (reusable, data-driven)

| Name | Type | Audit Status |
|---|---|---|
| `benefit-card` | component | color-off-token (borderColor, text) across 2+ routes |
| `business-use-case-card` | component | color-off-token acros 3+ routes |
| `section-header` | component | score variance 40 across 16 routes |
| `feature-lnd` | component | off-token backgroundColor |
| `cta-section` | component (inline in sections) | borderColor, text off-token |
| `reusable-card` | component (CSS-only) | fully tokenized |
| `btn-primary` | component | fully tokenized |
| `btn-secondary` | component | fully tokenized |
| `btn-outline` | component | fully tokenized |
| `btn-white` | component | fully tokenized |

### SECTIONS (layout wrappers, composed)

| Name | Type | Background | Routes |
|---|---|---|---|
| `c-icon-benefit-cards-section` | section | transparent, white | 8 |
| `c-process-steps-section` | section | white | 14 |
| `c-related-cards-section` | section | white | 10 |
| `c-feature-checklist-cards-section` | section | transparent, white | 10 |
| `c-dual-tone-checklist-comparison-section` | section | white | 13 |
| `c-stacked-feature-list-section` | section | other, white | 4 |
| `c-explore-cards-section` | section | other | 2 |
| `c-scenario-cards-section` | section | white | 3 |
| `c-comparison-section` | section | white | 2 |
| `c-operational-shift-cards-section` | section | transparent | 5 |
| `c-service-spectrum-cards-section` | section | white | 1 |
| `c-faq-accordion-section` | section | white | 2 |
| `cta-section` | section | white, transparent | 35 |
| `faq-section` | section | white | 1 |
| `section` (generic) | section | white, transparent | 32 |
| `diy-section` | section | transparent | 3 |
| `blog-steps-section` | section | transparent | 1 |
| `blog-takeaways-section` | section | transparent | 1 |
| `case-section` | section | transparent | 1 |

**Section background pattern:** Overwhelmingly `white` or `transparent`. No deliberate alternation. This causes the audit's #1 problem: **190 critical issues** from consecutive same-background sections.

---

## 4. TOKEN DUPLICATION REPORT

### Same Computed Value → Multiple Tokens

| Computed RGB | Tokens Pointing to This Value |
|---|---|
| `rgb(10, 22, 40)` | `--brand-primary`, `--brand-heading-color` → `--brand-primary`, `--brand-headline` → `--brand-heading-color` → `--brand-primary`, `--foreground` via `--brand-dark`*(close, not exact)*, `--color-text-heading` → `--color-text-primary` → `--foreground`, `--destructive` → `--brand-primary`, `--color-action-primary` → `--brand-primary`, `--color-info` → `--brand-primary`, `--ring` → `--brand-primary`, `--secondary` → `--brand-dark`*(close)* |
| `rgb(61, 75, 92)` | `--brand-neutral-700`, `--brand-text-color` → `--brand-neutral-700`, `--brand-text` → `--brand-text-color`, `--muted-foreground` → `--brand-text`, `--color-text-secondary` → `--brand-text`, `--color-text-muted` → `--brand-text`, `--color-text-body` → `--color-text-secondary`, `--color-text-muted-strong` → `--color-text-secondary` |
| `rgb(255, 255, 255)` | `--brand-white` (declared TWICE: L95 as `#FFFFFF`, L215 as `#fff`), `--card` → `--brand-white`, `--color-surface-default` → `--card`, `--color-text-inverse` → `--color-inverse-100` → `--brand-white`, `--primary-foreground`, `--secondary-foreground`, `--accent-foreground`, `--destructive-foreground` |
| `rgb(249, 250, 251)` / `rgb(248, 250, 252)` | `--brand-surface` (`#F9FAFB`), `--brand-grey` (`#f8fafc`), `--background` → `--brand-grey`, `--muted` → `--brand-grey`, `--color-surface-page` → `--background` |
| `rgb(46, 92, 138)` | `--brand-secondary`, `--brand-purple` → `--brand-secondary`, `--color-accent-purple` → `--brand-purple` |
| `rgb(74, 154, 178)` | `--brand-accent`, `--brand-teal` → `--brand-accent`, `--accent` → `--brand-teal`, `--color-success` → `--brand-teal`, `--color-accent-teal` → `--brand-teal` |
| `rgba(0, 0, 0, 0.1)` | `--border-default` (`#0000001a`), `--border` → `--border-default`, `--color-border` → `--border`, ALSO every `*` element via primitives.css global `border-color: var(--border)` |
| `rgb(7, 6, 6)` / `rgb(10, 10, 10)` | `--brand-amber` (`#070606`), `--brand-dark` (`#0a0a0a`), `--color-warning` → `--brand-amber`, `--color-accent` → `--brand-amber` |

---

## 5. SYSTEM PROBLEMS

### P1 — CRITICAL: `--brand-amber` is `#070606` (near-black, NOT amber)
- **Impact:** `--color-warning` → `--brand-amber` renders as NEAR-BLACK, not a warning color
- `--color-accent` → `--brand-amber` is also NEAR-BLACK
- `--icon-text-warm` → `--brand-amber` renders dark instead of warm
- **Root cause:** Wrong hex value. Should be an amber/orange color.

### P2 — CRITICAL: `--brand-surface` vs `--brand-grey` are near-duplicates
- `--brand-surface`: `#F9FAFB` → `rgb(249, 250, 251)`
- `--brand-grey`: `#f8fafc` → `rgb(248, 250, 252)`
- RGB diff = 2 → functionally IDENTICAL
- Both used for page/section backgrounds via separate alias chains
- `--background` → `--brand-grey`, `--brand-light-bg` → `--brand-surface`

### P3 — CRITICAL: `--brand-white` declared TWICE
- Line 95: `--brand-white: #FFFFFF;`
- Line 215: `--brand-white: #fff;`
- Second declaration wins (same value, but fragile)

### P4 — HIGH: Deep alias chains (3–4 hops)
- `--color-text-body` → `--color-text-secondary` → `--brand-text` → `--brand-text-color` → `--brand-neutral-700` (4 hops)
- `--color-text-heading` → `--color-text-primary` → `--foreground` → `--brand-dark` (3 hops)
- `--color-surface-default` → `--card` → `--brand-white` (2 hops, acceptable)
- `--color-text-inverse` → `--color-inverse-100` → `--brand-white` (2 hops)

### P5 — HIGH: Token naming misleads
| Token | Name Implies | Actual Value |
|---|---|---|
| `--brand-amber` | Amber/orange | `#070606` (near-black) |
| `--brand-purple` | Purple | `#2E5C8A` (blue) — it aliases `--brand-secondary` |
| `--color-accent` | Site accent | `#070606` (near-black via `--brand-amber`) |
| `--destructive` | Red/danger | `#0A1628` (dark navy via `--brand-primary`) |
| `--color-warning` | Warning orange | `#070606` (near-black via `--brand-amber`) |
| `--brand-text-light` | Light-colored text | `#9CA3AF` (grey — "light" means "lighter weight" not "light colored") |

### P6 — HIGH: Border color inconsistency
- `--border-default`: `#0000001a` (10% black = `rgba(0,0,0,0.1)`)
- `--brand-border-light` → `--brand-neutral-200` = `#E5E7EB` (opaque grey)
- Both used for "light borders" but produce different computed values
- Audit detects `rgba(0,0,0,0.1)` as off-token on ALL 39 routes because the token list the audit checks doesn't include `--border-default`

### P7 — MEDIUM: Massive token count with low utility
- 35 raw OKLCH palette tokens (`--color-red-50` through `--color-zinc-500`) — used only in gradient aliases
- 26 `--color-gradient-*` tokens that just wrap the raw palette (pure duplication)
- 14+ gradient CTA tokens
- ~200+ total CSS variables for what resolves to ~12 actually-used colors

### P8 — MEDIUM: Tailwind config uses `hsl(var(--border))` but `--border` resolves to hex
- `tailwind.config.ts`: `border: 'hsl(var(--border))'`
- `--border` → `--border-default` → `#0000001a` (not HSL)
- This is a non-functional Tailwind color bridge

### P9 — LOW: Section rhythm failure
- 190 critical issues: consecutive sections share same background
- No alternation token or pattern exists
- All sections default to white/transparent with no system for alternation

---

## 6. MINDWP TOKEN V2 — MINIMAL FLAT SYSTEM

Based on audit computed values and actual usage:

```css
:root {
  /* ── Backgrounds ── */
  --c-bg:              rgb(248, 250, 252);  /* page background (was --brand-grey / --brand-surface) */
  --c-bg-alt:          rgb(241, 245, 249);  /* alternating section bg (was --brand-grey-light) */
  --c-surface:         rgb(255, 255, 255);  /* cards, elevated surfaces (was --brand-white) */

  /* ── Text ── */
  --c-text:            rgb(10, 22, 40);     /* headings, primary text (was --brand-primary) */
  --c-text-muted:      rgb(61, 75, 92);     /* body text, descriptions (was --brand-neutral-700) */
  --c-text-subtle:     rgb(156, 163, 175);  /* captions, de-emphasized (was --brand-neutral-500) */
  --c-text-inverse:    rgb(255, 255, 255);  /* text on dark/colored backgrounds */

  /* ── Brand ── */
  --c-primary:         rgb(10, 22, 40);     /* primary actions, headings (was --brand-primary) */
  --c-secondary:       rgb(46, 92, 138);    /* secondary brand blue (was --brand-secondary) */
  --c-accent:          rgb(74, 154, 178);   /* accent teal, CTA buttons (was --brand-accent) */

  /* ── Borders ── */
  --c-border:          rgb(229, 231, 235);  /* default borders (was --brand-neutral-200) */
  --c-divider:         rgb(209, 213, 219);  /* section dividers (was --brand-neutral-300) */
}
```

**Total: 12 tokens. Flat. No aliases. Value-first.**

### Optional Extended Tokens (only if actually needed)

```css
:root {
  /* ── Extended (use only when required) ── */
  --c-primary-mid:     rgb(27, 40, 69);     /* dark gradient stop */
  --c-accent-light:    rgb(96, 165, 250);   /* light blue highlights */
  --c-border-dark:     rgb(55, 65, 81);     /* borders on dark bg */
  --c-star:            rgb(251, 191, 36);   /* star ratings only */
  --c-tint-blue:       rgb(239, 246, 255);  /* blue tint surface */
  --c-tint-teal:       rgb(240, 253, 250);  /* teal tint surface */
}
```

---

## 7. TOKEN MAPPING TABLE (Old → New)

### Brand Primitives
| Old Token | → | New Token |
|---|---|---|
| `--brand-primary` | → | `--c-primary` |
| `--brand-secondary` | → | `--c-secondary` |
| `--brand-accent` | → | `--c-accent` |
| `--brand-primary-mid` | → | `--c-primary-mid` (extended) |
| `--brand-neutral-700` | → | `--c-text-muted` |
| `--brand-neutral-500` | → | `--c-text-subtle` |
| `--brand-neutral-300` | → | `--c-divider` |
| `--brand-neutral-200` | → | `--c-border` |
| `--brand-surface` | → | `--c-bg` (MERGE with `--brand-grey`) |
| `--brand-white` | → | `--c-surface` |
| `--brand-dark` | → | `--c-primary` (MERGE — near-identical to primary) |
| `--brand-amber` | → | **REMOVE** (broken — `#070606` is not amber) |
| `--brand-grey` | → | `--c-bg` (MERGE with `--brand-surface`) |
| `--brand-grey-light` | → | `--c-bg-alt` |
| `--brand-primary-light` | → | `--c-accent-light` (extended) |
| `--brand-border-dark` | → | `--c-border-dark` (extended) |
| `--brand-yellow-star` | → | `--c-star` (extended) |
| `--brand-blue-lightest` | → | `--c-tint-blue` (extended) |
| `--brand-teal-lightest` | → | `--c-tint-teal` (extended) |
| `--brand-teal-lighter` | → | **REMOVE** (use `--c-tint-teal` or Tailwind utility) |

### Semantic Aliases → Flatten
| Old Token (Semantic) | Chain | → | New Token |
|---|---|---|---|
| `--brand-heading-color` | → `--brand-primary` | → | `--c-text` |
| `--brand-text-color` | → `--brand-neutral-700` | → | `--c-text-muted` |
| `--brand-text` | → `--brand-text-color` | → | `--c-text-muted` |
| `--brand-headline` | → `--brand-heading-color` | → | `--c-text` |
| `--brand-text-light` | → `--brand-neutral-500` | → | `--c-text-subtle` |
| `--brand-light-bg` | → `--brand-surface` | → | `--c-bg` |
| `--brand-light-on-dark` | → `--brand-neutral-300` | → | `--c-divider` |
| `--brand-border-light` | → `--brand-neutral-200` | → | `--c-border` |
| `--brand-purple` | → `--brand-secondary` | → | `--c-secondary` |
| `--brand-teal` | → `--brand-accent` | → | `--c-accent` |

### Framework/UI Tokens → Flatten
| Old Token | → | New Token |
|---|---|---|
| `--background` | → | `--c-bg` |
| `--foreground` | → | `--c-text` |
| `--muted` | → | `--c-bg` |
| `--muted-foreground` | → | `--c-text-muted` |
| `--border` | → | `--c-border` |
| `--card` | → | `--c-surface` |
| `--card-foreground` | → | `--c-text` |
| `--primary-foreground` | → | `--c-text-inverse` |
| `--secondary` | → | `--c-primary` |
| `--secondary-foreground` | → | `--c-text-inverse` |
| `--accent` | → | `--c-accent` |
| `--accent-foreground` | → | `--c-text-inverse` |
| `--destructive` | → | `--c-primary` (or introduce `--c-danger` if red is added) |
| `--destructive-foreground` | → | `--c-text-inverse` |
| `--ring` | → | `--c-primary` |

### Color-Text/Surface Tokens → Flatten
| Old Token | → | New Token |
|---|---|---|
| `--color-text-primary` | → | `--c-text` |
| `--color-text-secondary` | → | `--c-text-muted` |
| `--color-text-muted` | → | `--c-text-muted` |
| `--color-text-heading` | → | `--c-text` |
| `--color-text-body` | → | `--c-text-muted` |
| `--color-text-inverse` | → | `--c-text-inverse` |
| `--color-text-muted-strong` | → | `--c-text-muted` |
| `--color-border` | → | `--c-border` |
| `--color-action-primary` | → | `--c-primary` |
| `--color-surface-default` | → | `--c-surface` |
| `--color-surface-muted` | → | `--c-bg-alt` |
| `--color-surface-page` | → | `--c-bg` |
| `--color-surface-strong` | → | `--c-primary` |

### REMOVE (no replacement needed)
| Token | Reason |
|---|---|
| `--brand-amber` | Broken value (`#070606`), not amber |
| `--color-warning` → `--brand-amber` | Broken chain |
| `--color-accent` → `--brand-amber` | Broken chain |
| `--brand-teal-lighter` | Rarely used, replaced by `--c-tint-teal` |
| 26× `--color-gradient-*` aliases | Pure wrapper duplication over raw palette |
| `--border-default`, `--border-light` | Replaced by `--c-border` |
| `--brand-dark-90`, `--brand-primary-90`, etc. | Use `color-mix()` inline or Tailwind opacity |
| 18× `--brand-white-*` opacity variants | Use `color-mix()` inline |

---

## 8. MIGRATION PLAN

### Phase 1 — High Impact, Safe (fix broken tokens)

1. **Fix `--brand-amber`**: Change `#070606` to actual amber (e.g. `#d97706` / `rgb(217, 119, 6)`)
   - Immediately fixes `--color-warning`, `--color-accent`, `--icon-text-warm`
   - Zero visual regression risk (current value is already broken)

2. **Merge `--brand-surface` and `--brand-grey`**: Pick one value (`#f8fafc`)
   - Point both tokens to same value
   - Zero visual change (1px RGB difference)

3. **Remove duplicate `--brand-white` declaration** (keep first, remove L215)

4. **Add `--border-default` to audit token checklist**
   - Eliminates 39-route × N-component false positives in audit
   - Zero visual change

### Phase 2 — Introduce V2 Tokens (additive)

5. **Add V2 tokens** to `foundation.css` alongside existing tokens:
   ```css
   /* V2 Color System */
   --c-bg: var(--brand-grey);
   --c-bg-alt: var(--brand-grey-light);
   --c-surface: var(--brand-white);
   --c-text: var(--brand-primary);
   --c-text-muted: var(--brand-neutral-700);
   --c-text-subtle: var(--brand-neutral-500);
   --c-text-inverse: var(--brand-white);
   --c-primary: var(--brand-primary);
   --c-secondary: var(--brand-secondary);
   --c-accent: var(--brand-accent);
   --c-border: var(--brand-neutral-200);
   --c-divider: var(--brand-neutral-300);
   ```
   - References old tokens initially for zero-risk addition

6. **Update audit script** `normalizeColorTokens()` to include V2 tokens

### Phase 3 — Migrate Components (incremental)

7. **Migrate `components.css`** to use V2 tokens:
   - `var(--card)` → `var(--c-surface)`
   - `var(--card-foreground)` → `var(--c-text)`
   - `var(--muted-foreground)` → `var(--c-text-muted)`
   - `var(--border)` → `var(--c-border)`
   - `var(--color-action-primary)` → `var(--c-primary)`
   - `var(--color-text-inverse)` → `var(--c-text-inverse)`
   - `var(--brand-accent)` → `var(--c-accent)`

8. **Migrate `primitives.css`** base styles:
   - `var(--brand-text)` → `var(--c-text-muted)`
   - `var(--brand-headline)` → `var(--c-text)`

9. **Migrate Tailwind theme bridge** in `primitives.css`:
   - Update `@theme inline` block to reference V2 tokens

10. **Fix Tailwind config** `tailwind.config.ts`:
    - Remove broken `hsl(var(--border))` / `hsl(var(--ring))`
    - These should be `var(--c-border)` / `var(--c-primary)` directly

### Phase 4 — Section Rhythm Fix

11. **Add section alternation pattern**:
    - Odd sections: `--c-surface` (white)
    - Even sections: `--c-bg` (near-white grey)
    - Or use `--c-bg-alt` for CTA sections
    - This addresses the 190 critical "background-conflict" issues

### Phase 5 — Cleanup (remove old tokens last)

12. **Remove old semantic aliases** (`--brand-heading-color`, `--brand-text-color`, `--brand-text`, `--brand-headline`, etc.)
13. **Remove framework bridge tokens** (`--background`, `--foreground`, `--card`, `--muted`, etc.) — only after all consumers migrated
14. **Remove raw OKLCH palette** if not used outside gradients, or consolidate
15. **Remove `--color-gradient-*` wrapper tokens** (use raw palette directly in gradients)

---

## 9. FINAL VERDICT

### Current System State
- **~200+ CSS variables** resolving to **~12 actually distinct colors**
- **4-hop alias chains** that obscure true values
- **Critically broken** `--brand-amber` token (near-black labeled "amber")
- **Misleading names**: `--brand-purple` is blue, `--destructive` is navy, `--color-warning` is black
- **Near-duplicate** primitives (`--brand-surface` vs `--brand-grey`)
- **No section rhythm** system → 190 critical audit issues
- **Audit blind spot**: `--border-default` not in token checklist → 10,000+ false positive warnings

### V2 Target State
- **12 core tokens** + 6 optional extended = 18 max
- **Flat system**: every token resolves in 0 hops (direct rgb value)
- **Value-first**: names describe function, values are truth
- **No duplication**: one token per distinct computed value
- **Audit-compatible**: all tokens registered in checklist
- **Section rhythm ready**: `--c-bg` / `--c-bg-alt` / `--c-surface` provide 3-level alternation

### Risk Assessment
| Phase | Risk | Visual Impact |
|---|---|---|
| Phase 1 (fixes) | **Zero** | Fixes broken colors, no regressions |
| Phase 2 (additive) | **Zero** | New tokens added alongside old |
| Phase 3 (migration) | **Low** | Find-replace with audit validation |
| Phase 4 (rhythm) | **Medium** | Visible section spacing changes (improvement) |
| Phase 5 (cleanup) | **Low** | Remove unused tokens after migration verified |
