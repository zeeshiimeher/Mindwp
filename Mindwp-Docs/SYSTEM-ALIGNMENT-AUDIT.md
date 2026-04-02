# SYSTEM ALIGNMENT AUDIT

> DOC ↔ CODE consistency analysis + governance gap analysis.
> Performed: 2026-04-02
> Scope: SYSTEM-TRUTH.md claims vs live code. Validator coverage. Doc structure.
> Action: READ-ONLY AUDIT. No code changes. No doc rewrites.

---

## PART 1 — MISMATCH REPORT

Code-verified mismatches between governing docs / SYSTEM-TRUTH.md and actual implementation.

### M1. CTA Resolver Labels Violate Foundation §5 (MEDIUM)

> **Post-reconciliation note:** SmartCTA has zero consumers — no page imports it. Furthermore, SmartCTA uses `CTA_CONFIG.actionLabel` (compliant), NOT `resolved.label` from ctaResolver. The violating labels (`GOAL_CTA_LABELS`, `CTA_LABELS`) are dead code with zero production impact. Severity downgraded from CRITICAL to MEDIUM. Decision: delete `GOAL_CTA_LABELS` and `CTA_LABELS` — ctaResolver becomes intensity-only.

**Source of truth:** FOUNDATION-AND-POSITIONING.md §5 — "CTA Language Standards"
- Primary CTA: "Start a Conversation" → /contact (LOCKED)
- Secondary CTA: "Explore the Approach" → relevant service
- Banned: "Book a Call", "Get Started Now", "Claim Your Free Audit", "Schedule a Demo", "Unlock Your Growth", any CTA creating urgency or pressure

**Code reality** (`src/lib/ui/ctaResolver.ts`):

| Constant | Key | Actual Label | Violation |
|---|---|---|---|
| `CTA_LABELS` | `strong` | "Start your project" | Not the locked "Start a Conversation" |
| `GOAL_CTA_LABELS` | `consultation` | "Book a Free Consultation" | "Book a" is banned CTA pattern |
| `GOAL_CTA_LABELS` | `lead` | "Get a Custom Strategy" | Not in approved vocabulary |
| `GOAL_CTA_LABELS` | `email-capture` | "Get Free Resources" | Not in approved vocabulary; system "works without free resources" |

**Why it's not caught:** `validate-cta.mjs` only scans data directories (`src/domains/*/data`). It never scans `src/lib/` or `src/config/`. The CTA resolver lives in `src/lib/ui/` — completely outside validator scope.

**Severity:** MEDIUM. Dead code — no production blast radius. Scheduled for deletion.

---

### M2. Inline Styles Violate "Zero Inline Styles" Rule (HIGH)

**Source of truth:** SYSTEM-TRUTH.md §4.1 — "BEM everywhere. Zero inline styles."

**Code reality:** 11 files contain `style={{}}`:

| File | Category | Notes |
|---|---|---|
| `src/components/ui/progress.tsx` | shadcn | Dynamic width value |
| `src/components/ui/chart.tsx` | shadcn | Dynamic chart dimensions |
| `src/components/ui/sidebar.tsx` | shadcn | CSS variable injection |
| `src/components/ui/carousel.tsx` | shadcn | Transform positioning |
| `src/components/layout/HeaderLogoSvg.tsx` | Layout | SVG sizing |
| `src/components/layout/FooterLogoSvg.tsx` | Layout | SVG sizing |
| `src/components/layout/Header.tsx` | Layout | Dynamic mobile menu |
| `src/global/logos/HeaderLogoSvg.tsx` | Global | Duplicate of layout/ version |
| `src/global/logos/FooterLogoSvg.tsx` | Global | Duplicate of layout/ version |
| `src/global/HeaderMobileMenuIsland.tsx` | Global | Dynamic height calc |
| `src/global/Header.tsx` | Global | Mobile interactions |

**Mitigating factor:** 4 of 11 are shadcn/ui components (third-party pattern — may be intentionally exempt). The remaining 7 are project code.

**Not caught by:** Any validator. `validate-design-system.cjs` does not check for inline styles.

**Severity:** HIGH for the 7 project files. LOW for shadcn (consider documenting exemption).

---

### M3. ~~l-section Compliance Gap~~ (RETRACTED)

> **Retracted:** False positive due to incorrect grep command (`grep -qL` produced unreliable results). Subsequent verification confirmed: all non-exempt sections either contain `l-section` directly or are thin re-exports delegating to components that do. Blog/case-study/resource sections are S4 exempt. Domain wrappers (features/, industries/, service/) are re-exports. **Actual l-section violation count: 0.**

---

### M4. Gradient Tokens — Undefined Tokens Referenced (MEDIUM)

**Source of truth:** `foundation.css` defines 12 gradient tokens: `hero`, `primary`, `cta-1` through `cta-4`, `cta-10` through `cta-14`, `cta-warm`, `section`, `bg-light`.

SYSTEM-TRUTH.md §3.3: "Gap: 5-9 undefined."

**Code reality:** `components.css` references `gradient-cta-5` and `gradient-cta-6`:

```css
/* Line 8907 */
.bg-gradient-cta-5 {
  background: var(--gradient-cta-5, var(--gradient-cta-warm));  /* fallback to cta-warm */
}
.bg-gradient-cta-6 {
  background: var(--gradient-cta-6, var(--gradient-cta-warm));  /* fallback to cta-warm */
}
```

These tokens are NOT defined in `foundation.css`. They silently fall back to `--gradient-cta-warm`. The system works but renders identical gradients where differentiation was intended.

**Not caught by:** Any validator.

**Severity:** MEDIUM. Silent visual degradation — not broken, but misleading.

---

### M5. 32 Bare "industry" Nodes — Type System Gap (MEDIUM)

**Source of truth:** `ContentNodeType` union in types.ts defines 7 formal types: blog, service, resource, case-study, feature, industry-detail, industry-category.

SYSTEM-TRUTH.md §2.4: "Authority map contains 32 additional 'industry' nodes not in the ContentNodeType union."

**Code reality:**
- `generate-authority-map.ts` assigns 6 types: service, feature, industry-detail, blog, resource, case-study. Never assigns bare "industry" or "industry-category".
- `conversionPriorityEngine.ts` maps both `industry-category` and `industry-detail` → `"industry"` (a lossy conversion).
- `generate-content-intelligence.ts` uses `"industry"` as a gap/cluster type.
- `authority-map.json` contains 32 nodes typed `"industry"` — created by the analysis/reporting layer, not the content graph engine.

**Impact:** Graph queries filtering by `ContentNodeType` will miss these 32 nodes. Type safety gap between formal types and runtime data.

**Severity:** MEDIUM. Functional today but creates silent query gaps.

---

### M6. Hardcoded Values in components.css (MEDIUM)

**Source of truth:** SYSTEM-TRUTH.md §8.4 — "Components consume tokens — never hardcode values."

**Code reality:**
- 323 hardcoded `px` values in `components.css`
- 326 hardcoded `rem` values in `components.css`

**Sample categories:**
- `px` values: borders (1px, 2px — acceptable), box-shadows, media queries, `border-radius: 9999px`, `min-height: 44px`
- `rem` values: padding (0.6rem, 0.8rem, 1rem, 1.2rem, 1.5rem), font-sizes, widths/heights

Many are legitimate (1px borders, media query breakpoints). But padding, font-size, and spacing values should use tokens from foundation.css.

**Not caught by:** Any validator. `validate-design-system.cjs` does not check token compliance.

**Severity:** MEDIUM. Technical debt, not a production bug.

---

### M7. SYSTEM-TRUTH §4.1 Claims "No Inline Styles" — System Strengths Repeats It (LOW)

**Source of truth:** SYSTEM-TRUTH.md System Strengths table: "BEM everywhere. Server-first. Domain wrappers. No inline styles."

**Reality:** 11 files have inline styles (see M2). The Strengths section makes an absolute claim that is factually incorrect.

**Severity:** LOW. Internal doc inconsistency (SYSTEM-TRUTH states a rule AND claims compliance, but compliance is not met).

---

## PART 2 — DOC GOVERNANCE GAPS

Rules that SHOULD exist in governing docs but don't.

### G1. No Validator Count Sync Rule

The system has 25 validators, but no doc requires keeping this count synchronized. If a validator is added or removed, no doc or check enforces an update.

### G2. No Token Consistency Enforcement Rule

Governing docs say "use tokens" and "no hardcoding" but provide no mechanism to verify compliance. No doc defines what counts as a "hardcoded value" vs an acceptable literal (e.g., `1px` border vs `0.8rem` padding).

**Recommendation:** Define an explicit allowlist of acceptable literal values (borders ≤2px, border-radius 9999px, media queries) and require tokens for everything else.

### G3. No Graph Type Integrity Rule

`ContentNodeType` defines 7 types. The authority map contains 8+ actual types. No doc governs how analysis/reporting layers may create derived types or requires them to stay within the formal type system.

### G4. No CTA Scan Scope Rule

FOUNDATION-AND-POSITIONING.md §5 locks CTA language, but doesn't specify where enforcement applies. `validate-cta.mjs` only scans data directories — the CTA resolver in `src/lib/` is completely unscanned.

**Recommendation:** Foundation §5 should state: "CTA language governance applies to all files that produce CTA labels — including data directories, lib/ resolvers, and config files."

### G5. No Inline Style Exemption Policy

"Zero inline styles" is stated as absolute. But shadcn/ui components (chart, progress, sidebar, carousel) use inline styles by design. No doc carves out an exemption for third-party UI primitives.

**Recommendation:** Add explicit exemption: "shadcn/ui components in `src/components/ui/` may use inline styles where required by the library pattern."

### G6. No Gradient Token Lifecycle Rule

12 tokens are defined. `cta-5` through `cta-9` are undefined but `cta-5` and `cta-6` are referenced with fallbacks. No doc governs:
- How new gradient tokens are added
- When undefined tokens should be formally created vs removed
- Whether fallback patterns are acceptable

### G7. No Hero System Documentation

Two hero archetypes exist (SimpleHero, SplitHeroSection) but no governing doc defines when to use which, or what makes the homepage hero exclusive (only `--gradient-hero`). This is documented in SYSTEM-TRUTH.md but not in any governing doc.

### G8. No Section Rhythm Enforcement Rule

DESIGN-SYSTEM-CONTROL-LAYER.md documents the 3-tier background system and states sections should alternate. But no formal rule defines the algorithm (e.g., "no two consecutive sections with the same background modifier").

---

## PART 3 — VALIDATOR GAP ANALYSIS

What the 25 validators catch, what they miss, and what new validators are needed.

### Current Coverage Map

| Validator | What it checks |
|---|---|
| `typecheck` | TypeScript strict compilation |
| `lint` | ESLint rules |
| `validate-docs` | Doc structure |
| `validate-blog` | Blog content rules |
| `validate-resources` | Resource content rules |
| `validate-case-study-structure` | Case study structure |
| `validate-service-structure` | Service page structure |
| `validate-feature-structure` | Feature page structure |
| `validate-home-structure` | Homepage structure |
| `validate-industry-structure` | Industry page structure |
| `validate-design-system` | Button imports, Tailwind on btn, CTA classes |
| `validate-graph` | Graph integrity |
| `validate-metadata` | Metadata rules |
| `validate-metadata-completeness` | Metadata coverage |
| `validate-cta` | Banned CTA labels in data dirs, CTA href |
| `validate-vocabulary` | Banned/anti-hype words |
| `validate-structure` | Domain exports, CTA placement, hype in headings |
| `validate-internal-links` | Max links, duplicates, zone limits |
| `check-generated` | Generated file integrity |
| `validate-conversion` | hasCTA, hasServiceLink, hasJourneyNextStep |
| `validate-system-docs` | System doc consistency |
| `validate-readable-report` | Report format |
| `validate-rewrite-engine` | Rewrite engine rules |
| `validate-checklist` | Checklist compliance |
| `validate-session-log` | Session log format |

### Critical Gaps (No Validator Exists)

| Gap | What's Missing | Why Needed | Priority |
|---|---|---|---|
| **CTA label compliance in lib/** | `validate-cta.mjs` only scans data dirs | ctaResolver.ts contains deprecated labels (dead code — scheduled for deletion) | P0 |
| **Inline style detection** | No validator scans for `style={{` | 11 files have inline styles (4 shadcn exempt, 4 SVG exempt, 3 to fix in Phase 13) | P1 |
| **Semantic token enforcement** | No validator checks for hardcoded rem/px in components | 326 rem + 323 px values vs "consume tokens" rule | P2 |
| **Gradient token validity** | No validator checks gradient references against foundation.css definitions | `cta-5`, `cta-6` referenced but undefined | P2 |
| **Section background alternation** | No validator checks consecutive section backgrounds | Homepage has documented consecutive-bg violations | P2 |
| **Graph type reconciliation** | No validator checks authority-map types against ContentNodeType | 32 "industry" nodes outside formal type system | P3 |
| **Multiple primary CTA per section** | No validator checks for >1 `btn-primary` per visible section | Rule B1 exists but is unenforced | P3 |

### Narrow Validators (Exist But Underscoped)

| Validator | Current Scope | Should Also Check |
|---|---|---|
| `validate-design-system.cjs` | Button imports, Tailwind on btn, CTA classes (3 scans) | Token compliance, gradient validity, inline styles, hardcoded values |
| `validate-cta.mjs` | Data dirs only (5 banned patterns) | `src/lib/`, `src/config/`, all files producing CTA labels |
| `validate-structure.mjs` | Domain exports, CTA placement, hype words | section background prop |

---

## PART 4 — DOC STRUCTURE PROBLEMS

### D1. `project-todo.md` Buried in Archive (HIGH)

**Location:** `Mindwp-Docs/archive-reference/project-todo.md`
**Problem:** Active roadmap document is in a folder named "archive-reference". Governance rule §8.1: "Archived docs must not be used as reference."
**Fix:** Promote to `Mindwp-Docs/project-todo.md`.

### D2. PHASE-7 Dump File (MEDIUM)

**Location:** `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT Dump.md` (337 KB)
**Problem:** Working dump file at doc root. Not a governing doc. Not a reference doc. Contains space in filename.
**Fix:** Delete or move to archive.

### D3. Empty `archive/` Directory (LOW)

**Location:** `Mindwp-Docs/archive/`
**Problem:** Empty directory. Serves no purpose.
**Fix:** Delete.

### D4. Superseded `DESIGN-SYSTEM-ARCHITECTURE.md` (LOW)

**Location:** `Mindwp-Docs/archive-reference/DESIGN-SYSTEM-ARCHITECTURE.md`
**Problem:** Superseded by `system/DESIGN-SYSTEM-CONTROL-LAYER.md`. Being in "archive-reference" creates ambiguity about whether it's still active.
**Fix:** Delete or clearly mark as superseded.

### D5. `PHASE-7-VISUAL-SYSTEM-AUDIT.md` at Root (LOW)

**Location:** `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md` (66 KB)
**Problem:** Phase-specific working document at doc root alongside governing docs. Creates clutter and ambiguity.
**Fix:** Move to archive or `phase7-audit/` subdirectory.

### D6. Duplicate Logo Components (LOW)

Not a doc issue, but discovered during audit:
- `src/components/layout/HeaderLogoSvg.tsx` ↔ `src/global/logos/HeaderLogoSvg.tsx`
- `src/components/layout/FooterLogoSvg.tsx` ↔ `src/global/logos/FooterLogoSvg.tsx`

Two copies of each logo component exist. One should be the canonical source; the other should import from it.

---

## PART 5 — SYSTEM RISKS

Forward-looking risks identified by this audit. Ordered by blast radius.

### R1. CTA Resolver Contains Deprecated Labels (MEDIUM)

> **Post-reconciliation note:** Downgraded from CRITICAL. SmartCTA has zero consumers and uses `CTA_CONFIG.actionLabel`, not `resolved.label`. The violating constants (`GOAL_CTA_LABELS`, `CTA_LABELS`) are dead code. Decision: delete them. ctaResolver becomes intensity-only.

**Risk:** If new code consumes `resolved.label` before deletion, governance violations would ship.

**Blast radius:** None currently. Mitigated by scheduled deletion.

**Mitigation:** Delete `GOAL_CTA_LABELS` and `CTA_LABELS`. Extend `validate-cta.mjs` scope to `src/lib/` and `src/config/`.

### R2. Design System Validator Gives False Confidence (HIGH)

**Risk:** `validate-design-system.cjs` has only 3 scan functions (buttons, Tailwind on buttons, CTA classes). The validator name implies comprehensive design system enforcement, but it misses: inline styles (shadcn/SVG exempt), token compliance, gradient validity, section rhythm.

**Blast radius:** Any design system violation ships undetected.

**Mitigation:** Either expand the validator or rename it to `validate-button-system.cjs` to accurately represent scope.

### R3. SYSTEM-TRUTH.md Drift (HIGH)

**Risk:** SYSTEM-TRUTH.md is manually maintained. As code changes, it will drift. There is no automated check that SYSTEM-TRUTH claims match live code.

**Blast radius:** SYSTEM-TRUTH becomes unreliable, which undermines its purpose as the single source of truth.

**Mitigation:** Create a `validate-system-truth.mjs` that checks key counts (validators, nodes, edges, component counts) against live data.

### R4. ~~30 Core Sections Without l-section~~ (RETRACTED)

> **Retracted:** Based on false M3 data. Subsequent verification confirmed 0 actual l-section violations. All core sections contain `l-section` or delegate to components that do.

### R5. Gradient Token Proliferation Without Governance (MEDIUM)

**Risk:** `cta-5` and `cta-6` were added to components.css with fallbacks but never defined in foundation.css. Without a governance rule, more undefined gradient tokens could proliferate.

**Blast radius:** Visual inconsistency (silent fallbacks masking missing tokens).

**Mitigation:** Either define `cta-5` and `cta-6` in foundation.css or remove references from components.css. Establish a gradient token lifecycle rule.

### R6. Industry Type Reconciliation (MEDIUM)

**Risk:** The analysis layer creates bare "industry" nodes that don't match the formal `ContentNodeType` union. Any new feature that queries by formal type will silently exclude 32 nodes.

**Blast radius:** Content intelligence accuracy for industry pages.

**Mitigation:** Either add "industry" to `ContentNodeType` or fix the analysis layer to preserve the specific types (industry-detail / industry-category).

---

## PART 6 — GOVERNANCE PLAN

### 6.1 Immediate Actions (Before Next Code Change)

| # | Action | Owner | Blocks |
|---|---|---|---|
| A1 | Extend `validate-cta.mjs` scan scope to `src/lib/` and `src/config/` | Dev | Fixes R1 |
| A2 | Delete `GOAL_CTA_LABELS` and `CTA_LABELS` from ctaResolver.ts — make intensity-only | Dev | Fixes M1 |
| A3 | Promote `project-todo.md` from archive-reference to docs root | Dev | Fixes D1 |
| A4 | Delete `PHASE-7-VISUAL-SYSTEM-AUDIT Dump.md` | Dev | Fixes D2 |

### 6.2 Short-Term Actions (Before Phase 13)

| # | Action | Owner | Blocks |
|---|---|---|---|
| B1 | Add inline style detection to `validate-design-system.cjs` (exempt `src/components/ui/` and SVG text elements) | Dev | Fixes M2, R2 |
| B2 | Refactor Header/MobileMenu inline styles to BEM classes | Dev | Fixes M2 (Phase 13 task) |
| B3 | Remove `.bg-gradient-cta-5` and `.bg-gradient-cta-6` from components.css | Dev | Fixes M4, R5 |
| B4 | Add gradient token validity check | Dev | Fixes R5 |
| B5 | Document shadcn inline style exemption in SYSTEM-TRUTH.md | Dev | Fixes G5 |
| B6 | Fix analysis layer to preserve industry-detail/industry-category types | Dev | Fixes M5, R6 |

### 6.3 Medium-Term Actions (Before Phase 17 Deploy)

| # | Action | Owner | Blocks |
|---|---|---|---|
| C1 | Add semantic token enforcement validator (flag non-border px/rem in components) | Dev | Fixes M6 |
| C2 | Add section background alternation check | Dev | Fixes G8 |
| C3 | Create `validate-system-truth.mjs` to auto-check key counts | Dev | Fixes R3 |
| C4 | Define CTA scan scope rule in Foundation §5 | Doc | Fixes G4 |
| C5 | Define gradient token lifecycle rule | Doc | Fixes G6 |
| C6 | Document hero system archetypes in governing doc | Doc | Fixes G7 |
| C7 | Clean up doc structure (D3-D6) | Dev | Fixes D3-D6 |

### 6.4 Drift Prevention Model

```
CODE CHANGE
    ↓
validate-all.mjs (25+ validators)  ← EXPAND to cover gaps above
    ↓
SYSTEM-TRUTH.md                    ← validate-system-truth.mjs auto-checks counts
    ↓
GOVERNING DOCS                     ← Manual review only when architecture changes
```

**Rules:**
1. Every governance rule MUST have a corresponding validator check.
2. Validators MUST scan ALL files that can produce governed output (not just data dirs).
3. SYSTEM-TRUTH.md factual claims MUST be machine-verifiable where possible.
4. New tokens/types MUST be added to foundation.css/types.ts BEFORE being referenced.

---

## AUDIT SUMMARY

| Part | Findings |
|---|---|
| **Part 1 — Mismatches** | 7 mismatches: 1 MEDIUM (CTA labels — dead code), 1 HIGH (inline styles), 1 RETRACTED (l-section — false positive), 3 MEDIUM (gradients, industry types, hardcoded values), 1 LOW (doc claim) |
| **Part 2 — Doc Gaps** | 8 governance gaps: CTA scope, token enforcement, type integrity, inline style exemption, gradient lifecycle, hero system, section rhythm, validator count sync |
| **Part 3 — Validator Gaps** | 8 critical gaps (no validator), 3 narrow validators needing expansion |
| **Part 4 — Doc Structure** | 6 structural problems: buried roadmap, dump files, empty dirs, superseded docs, duplicate components |
| **Part 5 — System Risks** | 6 forward risks: CTA deprecated labels (MEDIUM), false validator confidence (HIGH), SYSTEM-TRUTH drift (HIGH), l-section retracted, gradient proliferation (MEDIUM), type reconciliation (MEDIUM) |
| **Part 6 — Governance Plan** | 4 immediate + 6 short-term + 7 medium-term actions. Drift prevention model defined. |

**Bottom line:** The governance framework is strong in intent but has enforcement gaps. The most impactful finding is M1/R1 — the CTA resolver contains deprecated labels that must be deleted (dead code, no production impact). The second most important is R2 — the design system validator's name implies coverage it doesn't provide.

No code was changed. No docs were rewritten. This is a read-only audit.
