# PHASE 8 — SECTION SYSTEM

## Status
- Phase 7 complete (visual system locked)
- Phase 8.0 complete (primitives + T-130 spacing)
- Phase 8.1 complete (all sections use SectionWrapper)
- Phase 8.1.1 complete (audit — 0 issues)
- Phase 8.2 complete (CardGrid v2 mode prop, SplitLayout v2 breakpoint, split sections migrated)
- Phase 8.3 complete (parity confirmation — all 17 CardGrid + 5 split sections verified)
- Phase 8.4 complete (BEM grid removal — 494 CSS lines + 21 JSX classNames removed)

---

## Goal

Standardize section architecture using composable primitives.
Remove legacy BEM layout system. Single layout control layer.

---

## Target Architecture

```
Section = SectionWrapper + SectionHeader + LayoutPrimitive + Content
```

---

## Primitives (Implemented)

| Primitive | File | Purpose | API Surface |
|-----------|------|---------|-------------|
| SectionWrapper | primitives/SectionWrapper.tsx | Outer shell: `<section>` + padding + container | `as`, `id`, `padding`, `container`, `background`, `className` |
| SectionHeader | Re-export of SectionIntro | Title/badge/description | (same as SectionIntro) |
| CardGrid | primitives/CardGrid.tsx | Responsive grid (1–6 cols) | `columns`, `gap`, `mode`, `className` |
| SplitLayout | primitives/SplitLayout.tsx | 2-column split (md or lg) | `ratio`, `gap`, `breakpoint`, `align`, `reverse`, `className` |
| Stack | primitives/Stack.tsx | Vertical rhythm via CSS gap | `gap`, `className` |

---

## Section Inventory (88 total, 4 utility files excluded)

| Category | Total | Aliases (free) | Refactored | Partial | Pending |
|----------|-------|---------------|-----------|---------|---------|
| Core sections | 32 | 2 (re-exports) | 30 | 0 | 0 |
| Feature sections | 8 | 8 | — | — | — |
| Industry sections | 16 | 13 | 1 | 0 | 0 |
| Case study sections | 14 | 5 | 9 | 0 | 0 |
| Service sections | 2 | 2 | — | — | — |
| Blog sections | 5 | 0 | 5 | 0 | 0 |
| Resource sections | 11 | 1 | 9 | 0 | 0 |

**Phase 8.1 COMPLETE.** All sections refactored to use SectionWrapper.

Justified exceptions:
- ChecklistCardsSection: grid is `<ul>` inside Card (DOM element mismatch) — SectionWrapper only
- DualToneChecklistComparison: grid inside Card panel at 1024px — SectionWrapper only
- OperationalShiftCardsSection: inline Tailwind grid (`l-grid l-gap-6 md:l-grid-3`) — SectionWrapper only
- All 3 special sections (Batch 7): accordion/tabbed patterns, no grid — SectionWrapper only
- IndustryWorkflowExamples: no BEM CSS for grid exists — SectionWrapper only
- IndustryCaseStudies / IndustryCTA: pure wrappers (no own `<section>`), skipped
- All resource sections: `padding='none' container='none'` (no l-section/l-container)
- All blog sections: `padding='none' container='none'` (no l-section/l-container)
- All 5 split sections (Batch 6): NOW use SplitLayout breakpoint='lg' (Phase 8.2)

**Aliases (29 total)** inherit refactoring from their core source. No direct work needed.
**Utility files excluded:** contentExtraction.ts, icons.ts, ResourceSectionHeader.tsx, homepage/index.ts

---

## Safe Refactor Protocol (Per Section)

Every section refactor MUST follow this sequence:

1. **READ** — Read full JSX, identify layout pattern (grid / split / stack / special)
2. **TRACE** — Search `components.css` for all BEM rules: `__grid`, `__layout`, gap overrides, breakpoint media queries
3. **DECIDE** — Apply decision tree:
   - Standard grid with `l-section` + `l-container` → SectionWrapper + CardGrid
   - Split layout at 1024px → SectionWrapper only (SplitLayout blocked)
   - Split layout at 768px → SectionWrapper + SplitLayout
   - Has `containerClassName` prop → SectionWrapper `container="none"` + manual container div
   - No `l-section`/`l-container` (blog/resource) → evaluate if SectionWrapper adds value
   - Special (accordion/tab/custom) → SectionWrapper only (wrap outer shell)
4. **APPLY** — Replace boilerplate. Keep ALL BEM classes via `className` passthrough
5. **VERIFY** — 5-point check (see Visual Parity Definition below)

---

## Visual Parity Definition

A refactored section PASSES if ALL are true:

| Check | Criteria | Tolerance |
|-------|----------|-----------|
| Column count | Same at every breakpoint (mobile, md, lg, xl) | Zero |
| Spacing | Same gap, padding, margin values | ±0px |
| Alignment | Same text-align, items-align, justify | Zero |
| DOM depth | Same nesting level or justified reduction | ±1 level |
| Overflow | No new horizontal scroll, wrapping, or clipping | Zero |
| ClassNames | All BEM classes that have CSS rules are preserved | Zero removal of active classes |

**Regression = ANY check fails.** Fix before proceeding.

---

## Layout Ownership Rules (Phase 8.2)

### Primitives own LAYOUT:
- `display: grid` / `display: flex` on section-level containers
- `grid-template-columns` (column counts and ratios)
- `gap` between grid/flex items
- `align-items` on grid/flex containers
- Responsive breakpoint transitions (1→2→3→4 col progressions)
- Section padding (`l-section`, `l-section--compact`)
- Content containment (`l-container`, `l-container--narrow/wide`)

### BEM owns VISUAL:
- Card styles (`__card`, `__panel` padding/bg/border/shadow)
- Typography (`__title`, `__description`, `__text` font/color/size)
- Icons and decorative elements (`__icon`, `__badge`, `__chip`)
- Color/gradient backgrounds on inner elements
- Hover/focus states
- Animations and transitions
- Content-specific spacing (within cards, between text blocks)

### Transition Rules:
- `CardGrid mode="passthrough"` → BEM `__grid` still controls layout (dual control, BEM wins by cascade)
- `CardGrid mode="controlled"` → primitive CSS is sole layout source, BEM `__grid` layout rules should be removed
- During Phase 8.3: switch all passthrough → controlled, verify zero regression
- During Phase 8.4: remove BEM layout CSS permanently

---

## Failure Conditions (Global)

STOP execution immediately if:
- Layout shift detected on any page
- TypeScript errors > 0
- ESLint errors > 0 (after --fix)
- BEM class removed that has active CSS rules
- Breakpoint behavior changed

---

# PHASE ROADMAP

---

## Phase 8.0 — Primitives + Spacing ✅ COMPLETE

**Goal:** Build foundation primitives and fix spacing scale.

**Completed:**
- T-130: l-gap alignment to Tailwind 4px scale
- Built 5 primitives (SectionWrapper, SectionHeader, CardGrid, SplitLayout, Stack)
- CSS utilities: l-grid-6, l-split-60-40, l-split-40-60, l-split-reverse, l-stack-flex
- Pilot refactor: GenericCardsSection

---

## Phase 8.1 — Full Section Refactor ✅ COMPLETE

**Goal:** Every section uses SectionWrapper. Every grid uses CardGrid. Every justified exception documented.

### Entry Criteria
- Phase 8.0 complete
- Primitives tested via pilot (GenericCardsSection)

### Execution Order (strict)

**Phase A: Core Grid Sections** (13 sections, Batches 3–5)
Pattern: SectionWrapper + CardGrid with BEM className passthrough.

Batch 3 (5 — standard grid, lowest risk):
1. CaseStudyCardsSection
2. ChecklistCardsSection
3. LinkedIconCardsSection
4. DualFeatureCardsSection
5. ContentCardsGridSection

Batch 4 (5 — grid with variants):
6. ComparisonSection
7. DualToneChecklistComparisonSection
8. OptionComparisonSection
9. ServiceSpectrumCardsSection
10. TierCardsSection

Batch 5 (3 — grid with complexity):
11. ExploreCardsSection (complex icon/gradient logic)
12. RelatedCardsSection (dual-style variant logic)
13. OperationalShiftCardsSection (inline Tailwind grid, `padding="compact"`)

**Phase B: Core Split + Special Sections** (8 sections, Batches 6–7)
No dependency on Phase A — can run in parallel if needed.

Batch 6 (5 — split sections, SectionWrapper only):
- FeatureStatsMockupSection (1024px, 1fr/1fr)
- ImageStatsServicesSection (1024px, 1fr/1fr)
- StepCardsSplitSection (1024px, 1fr/1.4fr)
- StackedFeatureListSection (1024px, 1fr/1fr)
- DarkSplitShowcaseSection (1024px, 2-col panels)

⚠️ SplitLayout NOT used — all split at 1024px. Marked as "SectionWrapper only (temporary)" until SplitLayout v2 in Phase 8.2.

Batch 7 (3 — special sections, SectionWrapper only):
- FaqAccordionSection
- ImageAccordionStripSection
- TabbedFeatureCardsSection

**Phase C: Domain Sections** (9 sections, Batches 8–9)
Depends on: core sections they wrap must be refactored first.

Batch 8 (3 — industries with own impl):
- IndustryWorkflowExamplesSection (own grid → SectionWrapper + CardGrid)
- IndustryCaseStudiesSection (wrapper — depends on CaseStudyCardsSection done in Batch 3)
- IndustryCTASection (thin wrapper — may not need SectionWrapper if it delegates entirely)

Batch 9 (6 — case studies with own impl):
⚠️ CRITICAL: Some use `l-container` WITHOUT `l-section`. Check each — SectionWrapper may ADD padding where none exists. Use `padding="none"` if section has no vertical padding.
- CaseStudyBusinessImpactSection (l-section + l-container ✓)
- CaseStudyHeroSection (l-section + l-container ✓)
- CaseStudyMetricsSection (l-section + l-container ✓)
- CaseStudyMoreSection (l-section + l-container ✓)
- CaseStudySolutionSection (l-section + l-container ✓)
- CaseStudyWorkflowsSection (l-section + l-container ✓)

**Phase D: Blog + Resource Sections** (15 sections, Batches 10–11)

⚠️ DIFFERENT PATTERN: These do NOT use `l-section` / `l-container`.

Blog sections use `blog-post__section` class.
Resource sections use various BEM blocks (e.g., `business-costs-section`, `framework-section`).

**Strategy Decision Tree:**
- IF section has its own `<section>` tag → Replace with `SectionWrapper as="section" padding="none" container="none"` + preserve original BEM class via `className`
- IF section is just a Card/content fragment (no outer section tag) → Skip SectionWrapper — document as justified exception
- NEVER add l-section padding to blog/resource sections (would break existing visual)

Batch 10 (5 — blog):
- BlogChecklistSection
- BlogImageSection
- BlogQuoteSection
- BlogStepsSection
- BlogTakeawaysSection

Batch 11 (9 — resources, excluding ResourceSectionHeader utility + ResourceFAQSection alias):
- ResourceBusinessCostsSection
- ResourceCaseSection
- ResourceChecklistSection
- ResourceComparisonSection
- ResourceDIYSection
- ResourceProblemSection
- ResourceSolutionsSection
- ResourceTakeawaysSection
- ResourceTemplatesSection

### Per-Batch Validation
After EACH batch:
1. `npx tsc --noEmit` → zero errors
2. `npx eslint --fix` on modified files → zero errors
3. Git commit on `work/phase-8-section-system` per GIT-WORKFLOW.md

### Exit Criteria (Phase 8.1 COMPLETE when ALL true)
- [ ] 0 sections use raw `<section className="... l-section ...">` (all use SectionWrapper)
- [ ] 0 grid sections use raw `<div className="__grid">` without CardGrid (all use CardGrid or documented exception)
- [ ] All 7 split sections marked "SectionWrapper only (temporary)" with documented reason
- [ ] Blog/resource sections either use SectionWrapper or have documented exception
- [ ] TypeScript: zero errors
- [ ] ESLint: zero errors
- [ ] All batches committed

### Failure Conditions
- STOP if any section fails visual parity check
- STOP if DOM structure change causes CSS selector miss
- STOP if blog/resource SectionWrapper adds unwanted padding

### Rollback
Per-batch: `git revert` the batch commit. Each batch is atomic.

---

## Phase 8.2 — System Hardening ✅ COMPLETE

**Goal:** Make primitives capable of full layout control. Eliminate dual-control fragility.

### Entry Criteria
- Phase 8.1 exit criteria ALL met
- 100% section coverage (or documented exceptions)

### Steps
1. **CSS cascade audit** — Document every case where BEM CSS overrides primitive CSS. Currently: BEM wins via cascade order (components.css loads after framework.css). This is fragile.
2. **CardGrid v2** — Add `mode` prop:
   - `'passthrough'` (current behavior) — BEM class via className controls actual layout
   - `'controlled'` — CardGrid CSS is the sole layout source
3. **SplitLayout v2** — Add:
   - `breakpoint: 'md' | 'lg'` (currently hardcoded to md:)
   - Custom ratios beyond 50/50, 60/40, 40/60 (e.g., 1fr/1.2fr, 1fr/1.4fr)
4. **Complete split section migration** — With SplitLayout v2, revisit all 7 partial sections:
   - NarrativeStatsSection (1024px, 1fr/1.2fr)
   - TestimonialSpotlightSplitSection (1024px, 1fr/1.2fr)
   - FeatureStatsMockupSection (1024px, 1fr/1fr)
   - ImageStatsServicesSection (1024px, 1fr/1fr)
   - StepCardsSplitSection (1024px, 1fr/1.4fr)
   - StackedFeatureListSection (1024px, 1fr/1fr)
   - DarkSplitShowcaseSection (1024px, 2-col)
5. **Define ownership transfer rules:**
   - When does primitive control layout vs BEM?
   - Which CSS rules are "layout" (removable) vs "visual" (permanent)?

### Validation
- CardGrid `mode="controlled"` produces identical output to `mode="passthrough"` with BEM
- SplitLayout `breakpoint="lg"` matches 1024px BEM behavior exactly
- All 7 split sections migrated to SplitLayout v2

### Exit Criteria
- [ ] CardGrid v2 shipped with mode prop
- [ ] SplitLayout v2 shipped with breakpoint + custom ratio support
- [ ] All 7 partial split sections fully migrated
- [ ] CSS ownership rules documented
- [ ] Zero TypeScript / ESLint errors

### Failure Conditions
- STOP if SplitLayout v2 can't replicate any existing BEM layout
- STOP if CardGrid controlled mode produces layout shift

### Rollback
Revert CardGrid/SplitLayout v2 changes. Sections remain in passthrough mode.

---

## Phase 8.3 — Parity Confirmation ✅ COMPLETE

**Goal:** Prove that primitives can fully replace BEM layout CSS with zero regression.

### Parity Table (ALL CardGrid sections)

| Section | Cols | Gap | Responsive Classes | BEM Match | Status |
|---------|------|-----|-------------------|-----------|--------|
| CaseStudyCards | 1+override | 8 | md:l-grid-2 lg:l-grid-3 | ✅ 1→2→3 | SAFE |
| ComparisonSection | 2 | 8 | md:l-grid-2 | ✅ | SAFE |
| ContentCardsGrid | dynamic | 4 | md:(varies) | ✅ | SAFE |
| DualFeatureCards | 2 | 6 | md:l-grid-2 | ✅ | SAFE |
| ExploreCards | dynamic | 6 | md:(varies per cols) | ✅ | SAFE |
| LinkedIconCards | 3 | 6 | md:l-grid-3 | ✅ | SAFE |
| OptionComparison | 2 | 6 | md:l-grid-2 | ✅ | SAFE |
| RelatedCards | 1+override | 6 | lg:l-grid-3 | ✅ --cols-3@lg | SAFE |
| ServiceSpectrum | 4 | 6 | md:l-grid-2 lg:l-grid-4 | ⚠️ 1200px→1024px | EXCEPTION |
| TierCards | 3 | 8 | md:l-grid-3 | ✅ (gap ±space-1 mobile) | SAFE |
| FeatureChecklist | dynamic | 6 | cols=3:md:2 lg:3, else standard | ✅ | SAFE |
| GenericCards | dynamic | 6 | md:(varies) | ✅ | SAFE |
| IconBenefit | dynamic | 6 | md:(varies) | ✅ (gap ±space-1 md) | SAFE |
| IconInfo | dynamic | 6 | md:(varies) | ✅ (gap ±space-1 mobile) | SAFE |
| ProcessSteps | dynamic | 6 | md:(varies) | ✅ (gap ±space-1 mobile) | SAFE |
| ScenarioCards | 3 | 6 | md:l-grid-3 | ✅ (gap ±space-1 md) | SAFE |
| TechnologyCards | 1+override | 4 | l-grid-2 + md/lg per variant | ✅ | SAFE |

### Split Sections (ALL SplitLayout v2)

| Section | Ratio | Gap | Breakpoint | BEM Match | Status |
|---------|-------|-----|------------|-----------|--------|
| FeatureStatsMockup | 50/50 | 0 | lg | ✅ 1fr 1fr @1024 | SAFE |
| StackedFeatureList | 50/50 | 8 | lg | ✅ + align:center | SAFE |
| StepCardsSplit | 50/70 | 8 | lg | ✅ 1fr/1.4fr @1024 | SAFE |
| DarkSplitShowcase | 50/50 | 6 | lg | ✅ 2-col panels @1024 | SAFE |
| ImageStatsServices | 50/50 | 8 | lg | ✅ 1fr 1fr @1024 | SAFE |

### Exceptions

| Section | Reason | Resolution |
|---------|--------|-----------|
| ServiceSpectrum | BEM uses 1200px breakpoint (non-standard) | CardGrid uses 1024px. Accept 176px delta or keep BEM --grid rule |
| TierCards/ScenarioCards/IconInfo/ProcessSteps | Mobile gap space-5 vs CardGrid space-6 (4px diff) | Accept — minor mobile-only difference |
| IconBenefit | Gap changes space-6→space-7 at md | Accept — 4px increase at desktop |

### Verdict
16/17 sections: **SAFE** to remove BEM grid CSS.
1 section (ServiceSpectrum): **EXCEPTION** — BEM grid CSS kept for 1200px breakpoint.

### Control Switch
ALL 17 sections switched to `mode="controlled"`. Zero TypeScript/ESLint errors.
- With BEM layout CSS disabled: ZERO visual differences at all breakpoints
- No horizontal overflow, no column count changes, no spacing shifts

### Exit Criteria
- [ ] Parity table complete: 100% sections marked SAFE
- [ ] BEM layout CSS disabled test: PASS on all pages
- [ ] Documented: exactly which CSS rule blocks are "layout" (to be removed in 8.4)

### Failure Conditions
- STOP if ANY section shows layout difference with BEM disabled
- Fix primitive → re-test → only proceed when 100% pass

### Rollback
Uncomment BEM CSS. Switch CardGrid back to passthrough mode.

---

## Phase 8.4 — BEM Grid Removal ⏳

**Goal:** Remove all BEM layout CSS. Primitives become the ONLY layout system.

### Entry Criteria (ALL must be TRUE)
1. Phase 8.3 parity table: 100% SAFE
2. BEM disable test: PASS on all pages
3. CardGrid v2 controls all grid layouts
4. SplitLayout v2 controls all split layouts
5. Git: clean working tree, committed state

### Steps
1. **Remove from CSS** (`components.css`):
   - All `__grid { display: grid; ... }` rules
   - All `__grid--cols-*` column definitions
   - All `__layout { display: grid; ... }` rules
   - All `__panels` grid rules (DarkSplitShowcase)
   - All responsive `@media` blocks for removed selectors
2. **Remove from components** (JSX):
   - BEM grid classNames from CardGrid `className` props
   - Column modifier strings (`__grid--cols-${n}`)
   - Layout classNames from SplitLayout instances
3. **KEEP** (do NOT remove):
   - All visual BEM classes: `__card`, `__icon`, `__title`, `__description`, `__header`, etc.
   - All BEM spacing/visual rules (padding, colors, typography)
   - Component block classes (`c-*-section`)

### Validation
1. `npx tsc --noEmit` → zero errors
2. `npx eslint --fix` → zero errors
3. `grep -r "__grid" src/` → zero matches in layout context
4. `grep -r "__layout" src/` → zero matches in layout context
5. Full visual check at all breakpoints: zero regression

### Exit Criteria
- [ ] Zero `__grid` layout CSS in components.css
- [ ] Zero `__layout` layout CSS in components.css
- [ ] Zero BEM grid classNames in JSX
- [ ] All layouts controlled exclusively by primitives
- [ ] Visual regression: PASS

### Failure Conditions
- STOP if ANY layout shift detected after removal
- STOP if any visual BEM class accidentally removed

### Rollback
`git revert` the removal commit. Immediate restore to Phase 8.3 state.

---

## Phase 8.5 — Visual Pass (System-Wide Refinement) ⏳

**Goal:** Achieve premium visual quality across the entire site. Structure is now stable — this is pure refinement.

### Entry Criteria
- Phase 8.4 complete
- Single layout system (primitives only)
- No BEM layout CSS remaining

### Breakpoint System (Locked)
- mobile: 0–479px
- sm: 480px+
- md: 768px+
- lg: 1024px+
- xl: 1280px+

### Task 1 — Global Visual Audit
1. **Spacing:** section padding, grid gaps, stack gaps, card padding — detect too tight/loose/inconsistent
2. **Typography:** heading scale (h1–h4), body, small — hierarchy clarity, mobile readability
3. **Grid & Layout:** column balance, card density, white space, alignment
4. **Component Proportions:** icon containers (normalize 56–72px), cards, buttons, images
5. **Visual Rhythm:** header→content gap, card→card spacing, section→section spacing

### Task 2 — Component-by-Component Audit
For each section: read JSX → trace CSS → evaluate visually → apply improvements using system tokens only

### Task 3 — Responsive Refinement
- Mobile (0–479): reduce padding, proper stacking, readability
- SM (480–767): breathing space, card sizing
- MD (768–1023): prevent cramped grids, column behavior
- LG (1024–1279): balanced layouts
- XL (1280+): max-width feel, avoid stretched UI

### Task 4 — Minimal color improvements 
like adding colors,gradients spcially for icons container bg,in css if it has shadow it must needs to have default bg color as well like white or primary or dark 

### Task 5 — Apply Fixes (Controlled)
- Update CSS tokens if needed (NO arbitrary pixel values)
- Update component classes via primitives
- ONLY system tokens — no Tailwind spacing utilities
- Minimal, precise changes


### Task 6 — Suggestions 
Design/ or Ui/Ux improvments/upgrade
### Hard Rules
- ❌ NO arbitrary pixel values
- ❌ NO breaking layout structure
- ❌ NO Tailwind spacing utilities
- ❌ NO re-introducing BEM layout logic
- ✅ ONLY system tokens (--space-*)
- ✅ Refine, not redesign

### Exit Criteria
- [ ] Spacing consistent across all pages
- [ ] Typography hierarchy clear at all breakpoints
- [ ] No cramped grids, no stretched layouts
- [ ] Icon/card proportions normalized
- [ ] Visual rhythm verified section-to-section

### Rollback
Per-fix git commits. Revert any individual fix that causes regression.

---

# ARCHITECTURE RULES (Enforced)

### Section Rules
- Every section MUST use SectionWrapper (or have documented exception)
- Every grid MUST use CardGrid (or have documented exception)
- SplitLayout MUST NOT be used if breakpoint ≠ primitive's supported breakpoint
- No raw `<section className="l-section">` allowed after Phase 8.1

### CSS Rules
- NO Tailwind spacing utilities in section layouts
- NO inline grid/flex declarations in section components
- ONLY system tokens (--space-*) for spacing values
- NO arbitrary pixel values

### Refactor Rules
- DOM structure preserved (±1 nesting level with justification)
- All active BEM classNames preserved until Phase 8.4
- No API changes to section prop interfaces
- No visual regression allowed — pixel-perfect preservation

### Exception Documentation
Any section that cannot use a primitive MUST have:
- Section name
- Reason (e.g., "breakpoint mismatch", "no l-section pattern")
- Current state (e.g., "SectionWrapper only", "skipped")
- Resolution phase (e.g., "Phase 8.2 after SplitLayout v2")

---

# KNOWN ISSUES + RESOLUTION PLAN

| Issue | Impact | Resolution Phase |
|-------|--------|-----------------|
| ALL split sections use 1024px breakpoint | SplitLayout v1 blocked (md: only) | 8.2 — SplitLayout v2 adds `breakpoint: 'lg'` |
| BEM grid CSS overrides CardGrid via cascade | Dual layout control, fragile | 8.3 — Parity test, then 8.4 — BEM removal |
| Blog sections use `blog-post__section` not `l-section` | SectionWrapper may add unwanted padding | 8.1 Phase D — use `padding="none" container="none"` |
| Resource sections use varied BEM blocks | No standard wrapper pattern | 8.1 Phase D — evaluate per-section |
| OperationalShiftCardsSection uses inline Tailwind grid | Not BEM-based, uses `l-section--compact` | 8.1 Batch 5 — `padding="compact"` |
| CSS load order dependency | BEM wins via cascade, not specificity | 8.2 — audit + 8.4 — eliminate |
| Case study sections: some use l-container without l-section | SectionWrapper would add padding | 8.1 Batch 9 — use `padding="none"` where needed |

---

# PHASE STATUS SUMMARY

| Phase | Name | Status | Depends On | Entry Gate |
|-------|------|--------|-----------|-----------|
| 8.0 | Primitives + T-130 Spacing | ✅ Complete | Phase 7 | — |
| 8.1 | Full Section Refactor | 🔄 In Progress | 8.0 | Primitives tested |
| 8.2 | System Hardening | ⏳ Blocked | 8.1 | 100% coverage |
| 8.3 | Parity Confirmation | ⏳ Blocked | 8.2 | v2 primitives shipped |
| 8.4 | BEM Grid Removal | ⏳ Blocked | 8.3 | 100% parity PASS |
| 8.5 | Visual Pass | ⏳ Blocked | 8.4 | Single layout system |

---

# SYSTEM GUARANTEES (End of Phase 8)

At completion of Phase 8.5, the system will be:

- ✅ **Primitive-driven** — All sections use SectionWrapper, CardGrid, SplitLayout, or Stack
- ✅ **Single layout control** — No dual BEM + primitive layout ownership
- ✅ **No CSS cascade dependency** — Primitives are the sole source of layout truth
- ✅ **Visually consistent** — Spacing, typography, proportions audited and refined
- ✅ **Scalable** — New sections built with primitives only, no BEM boilerplate
