# DOC RECONCILIATION — Decision Validation Before Documentation Update

> This is NOT an audit. NOT a fix.
> This is: DECISION VALIDATION.
> Purpose: Classify every mismatch. Determine intent. Generate questions.
> Date: 2026-04-02

---

## PART 1 — MISMATCH CLASSIFICATION

### ⚠️ AUDIT CORRECTION: M3 Was a False Finding

Before classifying, one critical correction to SYSTEM-ALIGNMENT-AUDIT.md:

**M3 (l-section compliance) was WRONG.** The original audit claimed "30 core sections missing l-section." This was caused by a buggy `grep -qL` command that produced false positives.

**Verified reality:**
- 37 section files contain `l-section` string directly
- 51 files don't contain the string, but ALL of them are either:
  - **S4 exempt** (blog 5, case-studies 8, resources 11 = 24 files)
  - **Thin re-exports** that delegate to core components WITH l-section (features 8, industries 14, service 2, core 2 = 26 files)
  - **1 real implementation** (IndustryWorkflowExamplesSection) — HAS l-section (verified)
- Example: `FeatureCTASection` is just `export { CTASection as FeatureCTASection }` — CTASection handles l-section
- Example: `ProblemCardsSection` is just `export { OperationalShiftCardsSection as ProblemCardsSection }` — underlying component has l-section
- Example: `AutoRelatedContentCardsSection` wraps `RelatedCardsSection` which has l-section

**Actual l-section violation count: 0**

DESIGN-SYSTEM-CONTROL-LAYER.md claims "42+ TSX files" using l-section — this counts all 86 files across `src/` (not just sections/). Approximately correct.

---

### ⚠️ AUDIT CORRECTION: M1 Severity Downgrade

**SmartCTA has ZERO consumers.** No page imports or renders it.

The `GOAL_CTA_LABELS` ("Book a Free Consultation", etc.) and `CTA_LABELS["strong"]` ("Start your project") exist in `ctaResolver.ts` but are **dead code** — SmartCTA is never used on any page.

**What actually renders on production pages:**
- `CTA_CONFIG` from `ui-intelligence.ts` → uses "Start a Conversation" for all types (COMPLIANT)
- Homepage data → uses "Start a Conversation", "Explore the Approach", "See How It Works" (COMPLIANT)
- `CTASection` component → receives labels via props from data files (COMPLIANT)

The governance violations exist in code but have **zero production blast radius today**.

---

### M1. CTA Resolver Labels vs Foundation §5

| Field | Value |
|---|---|
| **Issue** | `ctaResolver.ts` contains CTA labels that violate Foundation §5: "Book a Free Consultation" (banned pattern), "Start your project" (not locked CTA), "Get a Custom Strategy" (unapproved), "Get Free Resources" (unapproved + contradicts "system works without free resources") |
| **Type** | **TYPE D — UNCERTAIN (ASK USER)** |
| **Explanation** | SmartCTA has 0 consumers. These labels are dead code today. BUT: (a) the ConversionGoal system is wired into the content graph, (b) SmartCTA was clearly built to be the intelligence-driven CTA component, (c) when it gets connected, these labels will violate governance with no validator to catch them. The question is: fix now (before wiring), or document as "planned future — not yet governed"? |
| **Recommended action** | **ASK USER** — see Question Q1 |

---

### M2. Inline Styles (11 files)

#### M2a. shadcn/ui Components (4 files)

| Field | Value |
|---|---|
| **Issue** | `progress.tsx`, `chart.tsx`, `sidebar.tsx`, `carousel.tsx` — all in `src/components/ui/` — use `style={{}}` |
| **Type** | **TYPE C — INTENTIONAL DEVIATION** |
| **Explanation** | These are third-party shadcn/ui components. Inline styles are part of the library's design pattern (dynamic width, chart dimensions, CSS variable injection). Modifying them would break shadcn compatibility and create maintenance burden on upgrades. |
| **Recommended action** | **Document exception** — add explicit exemption in SYSTEM-TRUTH.md: "shadcn/ui components in `src/components/ui/` may use inline styles where required by the library pattern." |

#### M2b. Logo SVGs (4 files, 2 pairs of duplicates)

| Field | Value |
|---|---|
| **Issue** | `HeaderLogoSvg.tsx` and `FooterLogoSvg.tsx` exist in BOTH `src/components/layout/` and `src/global/logos/`. Both copies use inline styles for SVG `viewBox`/dimensions. |
| **Type** | **TYPE D — UNCERTAIN (ASK USER)** |
| **Explanation** | SVG components commonly need inline styles for `width`, `height`, `viewBox` — these can't be meaningfully replaced with CSS classes. However, having two copies of each is a separate issue (duplication). The inline style question: is SVG sizing via inline style acceptable, or should it move to CSS? |
| **Recommended action** | **ASK USER** — see Question Q2 |

#### M2c. Header / Mobile Menu (3 files)

| Field | Value |
|---|---|
| **Issue** | `Header.tsx` (layout + global), `HeaderMobileMenuIsland.tsx` — use inline styles for dynamic mobile menu behavior |
| **Type** | **TYPE D — UNCERTAIN (ASK USER)** |
| **Explanation** | Mobile menu open/close typically requires JS-controlled inline styles for height transitions, transforms, or visibility. This may be a legitimate technical necessity. But it could also be replaceable with CSS class toggling + CSS transitions. |
| **Recommended action** | **ASK USER** — see Question Q3 |

---

### M3. l-section Compliance

| Field | Value |
|---|---|
| **Issue** | Original audit claimed 30 core sections missing l-section |
| **Type** | **AUDIT ERROR — NOT A REAL MISMATCH** |
| **Explanation** | Verified: 0 actual violations. All non-exempt sections either contain l-section directly or delegate to a component that does. Blog/case-study/resource sections are S4 exempt. Domain wrappers (features/, industries/, service/) are thin re-exports. |
| **Recommended action** | **Correct SYSTEM-ALIGNMENT-AUDIT.md** to retract M3. Update DESIGN-SYSTEM-CONTROL-LAYER.md counts if desired (minor — "42+" vs actual 86 across all src/). |

---

### M4. Gradient Tokens cta-5 and cta-6

| Field | Value |
|---|---|
| **Issue** | `components.css` references `--gradient-cta-5` and `--gradient-cta-6` with fallbacks. These tokens are NOT defined in `foundation.css`. They silently fall back to `--gradient-cta-warm`. |
| **Type** | **TYPE D — UNCERTAIN (ASK USER)** |
| **Explanation** | Three possibilities: (a) These were planned tokens never defined — define them in foundation.css, (b) They're orphaned references from a previous design iteration — remove from components.css, (c) The fallback pattern is intentional — document it. No TSX file references `gradient-cta-5` or `gradient-cta-6` directly — they're only in CSS class definitions. |
| **Recommended action** | **ASK USER** — see Question Q4 |

---

### M5. 32 Bare "industry" Nodes in Graph

| Field | Value |
|---|---|
| **Issue** | `ContentNodeType` has 7 formal types. `authority-map.json` contains 32 nodes typed `"industry"` (not `"industry-detail"` or `"industry-category"`). |
| **Type** | **TYPE D — UNCERTAIN (ASK USER)** |
| **Explanation** | The `conversionPriorityEngine.ts` deliberately maps both `industry-category` and `industry-detail` → `"industry"` (lossy consolidation). `generate-content-intelligence.ts` uses `"industry"` as an analysis/cluster type. This is an intentional simplification in the analysis layer. Question: should the formal type system expand to include bare `"industry"`, or should the analysis layer preserve specific types? |
| **Recommended action** | **ASK USER** — see Question Q5 |

---

### M6. Hardcoded Values in components.css

| Field | Value |
|---|---|
| **Issue** | 323 hardcoded `px` values + 326 hardcoded `rem` values in components.css. Doc rule: "Components consume tokens — never hardcode values." |
| **Type** | **TYPE B — DOC IS OVERBROAD** |
| **Explanation** | Many hardcoded values are **legitimate and correct**: `1px` borders, `2px` stronger borders, `9999px` border-radius (full-round), `44px` min-height (touch target), media query breakpoints, `border-radius: 4px/8px/12px` (though radius tokens exist). The doc rule "never hardcode" does not distinguish between values that SHOULD be tokens (spacing, font-size, padding) and values that are inherently literal (borders, browser-default accessibility targets). Some `rem` values in button padding ARE hardcoded where tokens could be used. |
| **Recommended action** | **Update doc** — the "never hardcode" rule needs an allowlist of acceptable literals. Separate concern: the hardcoded `rem` padding/font-size values should move to tokens, but that's a Phase 13 code task, not a doc error. |

---

### M7. "No Inline Styles" Claim in System Strengths

| Field | Value |
|---|---|
| **Issue** | SYSTEM-TRUTH.md System Strengths says "No inline styles" — 11 files have inline styles |
| **Type** | **TYPE B — DOC IS OUTDATED** |
| **Explanation** | Once the shadcn exemption is documented (M2a) and the other inline style decisions are made (M2b, M2c), the Strengths claim should be updated to reflect reality: "BEM everywhere. Inline styles only in shadcn/ui and SVG/dynamic components." |
| **Recommended action** | **Update doc** — revise claim to match decided reality |

---

### GOVERNANCE GAPS — Classification

| Gap | Type | Explanation |
|---|---|---|
| G1. No validator count sync | **TYPE C** | Validator count is informational, not architectural. Auto-checking would be brittle. Acceptable as manual-update field. |
| G2. No token enforcement rule | **TYPE B** | Doc needs nuancing (see M6). The rule exists but is overbroad. |
| G3. No graph type integrity rule | **TYPE D** | Depends on Q5 decision. |
| G4. No CTA scan scope rule | **TYPE A** | The validator scope is wrong regardless of SmartCTA status. Foundation §5 should explicitly govern all CTA label sources. |
| G5. No inline style exemption | **TYPE B** | Doc needs explicit exemption for shadcn (see M2a). |
| G6. No gradient token lifecycle | **TYPE D** | Depends on Q4 decision. |
| G7. No hero system doc | **TYPE B** | SYSTEM-TRUTH documents this but no governing doc does. Should be added to DESIGN-SYSTEM-CONTROL-LAYER.md. |
| G8. No section rhythm enforcement | **TYPE B** | DESIGN-SYSTEM-CONTROL-LAYER.md documents the pattern but no validator enforces it. |

---

## PART 2 — HIGH-RISK AREAS

### 🔴 CTA SYSTEM (Highest Risk)

**Current state:** Production CTAs are COMPLIANT. `CTA_CONFIG` (ui-intelligence.ts) uses "Start a Conversation." Homepage data uses "Start a Conversation." All live pages are correct.

**Risk:** `ctaResolver.ts` contains non-compliant labels in dead code. If SmartCTA is ever wired in (which was clearly the design intent), governance violations will silently ship on every page. No validator covers `src/lib/`.

**What needs decision:**
1. Should ctaResolver.ts labels be fixed NOW (defensive) or LATER (when SmartCTA is activated)?
2. Should `validate-cta.mjs` scope be expanded regardless?

### 🟡 DESIGN TOKENS

**Current state:** Token system is well-layered and functional. Most hardcoded values are legitimate constants.

**Risk:** The "never hardcode" rule is overbroad. Enforcing it literally would flag ~400+ values, most of which are correct. This creates a "boy who cried wolf" problem — no one will review 400 issues.

**What needs decision:** Define the allowlist of acceptable literals to make enforcement meaningful.

### 🟢 SECTION SYSTEM

**Current state:** Better than the audit reported. l-section compliance is effectively 100% for non-exempt sections. The DESIGN-SYSTEM-CONTROL-LAYER.md rules are being followed.

**Remaining risk:** Section background alternation on homepage (consecutive identical backgrounds at sections 8-9 and 12-14). This is documented in SYSTEM-TRUTH.md §7.1 P4 but has no validator.

### 🟡 GRAPH SYSTEM

**Current state:** Functional. 243 nodes, 2,742 edges, authority scoring works.

**Risk:** The `"industry"` type consolidation in the analysis layer creates a type safety gap. Not breaking today but will cause query misses if new features filter by `ContentNodeType`.

---

## PART 3 — QUESTIONS FOR USER

### Q1. CTA Resolver: Fix Now or Later? (CRITICAL)

`ctaResolver.ts` contains these labels (currently dead code — SmartCTA unused):

| Label | Violation |
|---|---|
| "Book a Free Consultation" | "Book a" is Foundation §5 banned pattern |
| "Start your project" | Should be "Start a Conversation" (locked) |
| "Get a Custom Strategy" | Not in approved vocabulary |
| "Get Free Resources" | Contradicts "system works without free resources" |

**Options:**
- **A)** Fix labels NOW to comply with Foundation §5 (defensive — labels will be correct when SmartCTA activates)
- **B)** Leave as-is, document as "future system — not yet governed" (deferred — fix when SmartCTA is wired in)
- **C)** Delete GOAL_CTA_LABELS entirely (SmartCTA should use CTA_CONFIG from ui-intelligence.ts instead of having its own label system)

**Recommendation:** Option A or C. Option B creates governance debt.

---

### Q2. Logo SVG Inline Styles — Exempt or Fix?

`HeaderLogoSvg.tsx` and `FooterLogoSvg.tsx` use inline `style={{}}` for SVG dimensions.

**Options:**
- **A)** Exempt SVGs — add to inline style exemption policy alongside shadcn
- **B)** Move SVG sizing to CSS classes (more work, stricter compliance)

Also: duplicate logo files exist in both `components/layout/` and `global/logos/`. Should one be deleted?

---

### Q3. Header Dynamic Inline Styles — Technical Necessity?

`Header.tsx` and `HeaderMobileMenuIsland.tsx` use inline styles for mobile menu behavior.

**Options:**
- **A)** Exempt as "dynamic JS-driven behavior necessitating inline styles"
- **B)** Refactor to CSS class toggling + CSS transitions (Phase 13 task)

---

### Q4. Gradient cta-5 and cta-6 — Define or Remove?

`components.css` has `.bg-gradient-cta-5` and `.bg-gradient-cta-6` referencing undefined tokens (fall back to `cta-warm`).

**Options:**
- **A)** Define `--gradient-cta-5` and `--gradient-cta-6` in foundation.css with real values
- **B)** Remove the references from components.css (no TSX file uses them)
- **C)** Keep fallback pattern, document as acceptable

---

### Q5. Industry Type in Graph — Formalize or Fix Analysis Layer?

`ContentNodeType` has 7 types. Analysis layer generates 32 bare "industry" nodes (consolidating industry-detail + industry-category).

**Options:**
- **A)** Add `"industry"` as 8th type in `ContentNodeType` (formalize the consolidation)
- **B)** Fix analysis layer to preserve `"industry-detail"` and `"industry-category"` (maintain type safety)
- **C)** Document as intentional analysis-layer behavior (accepted simplification)

---

### Q6. Should `validate-cta.mjs` Scope Expand Now?

Independent of Q1: the validator only scans data directories. Should it scan `src/lib/` and `src/config/` too?

**Recommendation:** Yes, regardless of other decisions. Foundation §5 governs all CTA sources.

---

## PART 4 — DOC UPDATE PLAN (DO NOT EXECUTE)

### 4.1 SYSTEM-TRUTH.md Updates Needed

| Section | Change | Depends on |
|---|---|---|
| §4.1 "Zero inline styles" | Add exemption note: "Zero inline styles (shadcn/ui and SVG components exempt)" | Q2, Q3 decisions |
| §8.4 "never hardcode values" | Add allowlist: "Acceptable literals: borders ≤2px, `border-radius: 9999px`, media queries, touch targets (44px). All spacing, padding, font-size must use tokens." | Immediate |
| System Strengths "No inline styles" | Revise to: "Inline styles only in shadcn/ui and approved dynamic components" | Q2, Q3 decisions |
| §2.4 Graph anomaly | Update based on Q5 decision | Q5 |
| §3.3 Gradient gap note | Update based on Q4 decision | Q4 |

### 4.2 SYSTEM-ALIGNMENT-AUDIT.md Corrections

| Section | Change | Reason |
|---|---|---|
| M1 severity | Downgrade from CRITICAL to MEDIUM | SmartCTA has 0 consumers. Dead code. Production CTAs compliant. |
| M3 entire section | Retract. Replace with correction note. | False finding — buggy grep. 0 actual violations. |
| R4 (l-section risk) | Retract. | Based on false M3 data. |
| Part 3 validator gaps | Remove "l-section compliance" as P1 gap | Not actually missing — compliance is 100%. |
| Part 6 governance plan B2 | Remove l-section validator action | Not needed. |

### 4.3 DESIGN-SYSTEM-CONTROL-LAYER.md Updates

| Section | Change | Depends on |
|---|---|---|
| §1 l-section counts | Update "42+" to reflect actual count if desired | Minor — numbers approximately correct |
| §1 "Sections without l-section (intentional)" | Update from 13 to current count | Minor |
| Add hero system section | Document SimpleHero vs SplitHeroSection archetypes | Immediate (G7) |
| Add gradient lifecycle note | Document token lifecycle rule | Q4 |

### 4.4 FOUNDATION-AND-POSITIONING.md Updates

| Section | Change | Depends on |
|---|---|---|
| §5 CTA Language Standards | Add scope clause: "Applies to all files producing CTA labels, including data directories, lib/, and config/" | Immediate (G4) — this is TYPE A: code/validator is wrong |

### 4.5 New Files

| File | Purpose | Depends on |
|---|---|---|
| None proposed | — | — |

### 4.6 File Operations

| Action | File | Depends on |
|---|---|---|
| Promote | `archive-reference/project-todo.md` → `Mindwp-Docs/project-todo.md` | Immediate |
| Delete | `PHASE-7-VISUAL-SYSTEM-AUDIT Dump.md` | Confirm with user |
| Delete | `archive/` (empty dir) | Immediate |
| Resolve duplicate | Logo SVGs in `components/layout/` vs `global/logos/` | Q2 |

---

## CLASSIFICATION SUMMARY

| Issue | Type | Action |
|---|---|---|
| M1. CTA resolver labels | **D — Ask user** | Q1: Fix now, defer, or delete? |
| M2a. shadcn inline styles | **C — Intentional** | Document exemption |
| M2b. Logo SVG inline styles | **D — Ask user** | Q2: Exempt or fix? |
| M2c. Header dynamic styles | **D — Ask user** | Q3: Exempt or refactor? |
| M3. l-section compliance | **RETRACTED** | Audit error — 0 violations |
| M4. Gradient cta-5, cta-6 | **D — Ask user** | Q4: Define, remove, or document? |
| M5. Industry type gap | **D — Ask user** | Q5: Formalize, fix, or document? |
| M6. Hardcoded values rule | **B — Doc overbroad** | Update doc with allowlist |
| M7. "No inline styles" claim | **B — Doc outdated** | Update after Q2/Q3 decisions |
| G4. CTA scan scope | **A — Code is wrong** | Expand validator scope |

**Type breakdown:**
- TYPE A (code is wrong): 1 — CTA validator scope
- TYPE B (doc is outdated): 3 — hardcoded values rule, inline styles claim, governance gaps
- TYPE C (intentional deviation): 1 — shadcn inline styles
- TYPE D (ask user): 5 — CTA labels, logo SVGs, header styles, gradients, industry types
- RETRACTED: 1 — l-section (false finding)

---

## 🚫 STOP

Waiting for user decisions on Q1-Q6 before any updates.
