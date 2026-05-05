# Component System X-Ray

Date: 2026-05-01

Scope: deterministic component system review for `/src/components/sections`, anchor renderers, and service renderer/data mapping. This document is the source of truth for the component inventory, duplication control, controlled uniqueness strategy, and dev visualizer plan.

## 1. Component Inventory Table

| Component | Path | Purpose | Type | Variants | Required Props | Optional Props | Dependencies | Issues | Reusability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AccordionFAQSection | `/src/components/sections/AccordionFAQSection.tsx` | Renders a single-column FAQ accordion with one open item at a time. | faq | `single-column` | `heading`, `items` | `variant`, `tone`, `density`, `defaultOpenId` | `useState`, `ChevronDown`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | None observed. | High |
| BeforeAfterSection | `/src/components/sections/BeforeAfterSection.tsx` | Renders a before/after comparison with two validated item columns. | comparison | `split-panel`, `scorecard` | `heading`, `before`, `after` | `variant`, `density` | `Check`, `Minus`, `SectionShell`, `SectionDensity`, `SectionHeading` | `scorecard` is declared but uses the same JSX structure as `split-panel`; structural distinction depends entirely on CSS. | Medium |
| FitCheckSection | `/src/components/sections/FitCheckSection.tsx` | Renders good/not-fit decision columns with optional item notes. | comparison | `two-column`, `decision-cards` | `heading`, `good`, `not` | `variant`, `tone`, `density` | `Check`, `X`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `decision-cards` is declared but uses the same JSX structure as `two-column`; structural distinction depends entirely on CSS. | Medium |
| GridCardsSection | `/src/components/sections/GridCardsSection.tsx` | Renders validated icon/status card grids with configurable column count. | content | `diagnostic-grid`, `signal-board`, `feature-grid` | `heading`, `items` | `variant`, `tone`, `density`, `columns` | `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `signal-board` uniquely parses `badge` into a list; other variants share identical structure. | High |
| HeroSplitSection | `/src/components/sections/HeroSplitSection.tsx` | Renders a two-column hero with primary CTA and operational visual panel. | hero | `operations`, `visibility` | `heading`, `actions`, `visual` | `variant`, `tone`, `density`, `kicker`, `chips` | `LucideIcon`, `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `operations` and `visibility` share identical JSX structure; distinction depends on data and CSS. | Medium |
| ImageStorySection | `/src/components/sections/ImageStorySection.tsx` | Renders image-led story content with optional bullets and metric highlights. | content | `operational-photo`, `visual-panel`, `split-evidence` | `heading`, `image` | `variant`, `tone`, `density`, `reverse`, `body`, `bullets`, `highlights`, `caption` | `SectionShell`, `MediaSource`, `SectionDensity`, `SectionHeading`, `SectionTone` | All variants share identical JSX structure; `reverse` adds layout direction outside variant naming. | Medium |
| LayerStackSection | `/src/components/sections/LayerStackSection.tsx` | Renders always-visible ordered layer cards with summaries and optional bullets. | process | `interactive-stack`, `signal-map` | `heading`, `layers` | `variant`, `density` | `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading` | `interactive-stack` and `signal-map` share identical JSX structure; distinction depends on CSS/data semantics. | Medium |
| PrimaryCTASection | `/src/components/sections/PrimaryCTASection.tsx` | Renders a section-level primary CTA with optional trust support list. | cta | `soft-panel`, `split-card` | `heading`, `actions` | `variant`, `tone`, `shellTone`, `density`, `supports` | `Check`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | Component name/comment conflicts with an apparent global CTA naming contract; `split-card` uses same JSX structure as `soft-panel`. | Medium |
| ProcessStepsSection | `/src/components/sections/ProcessStepsSection.tsx` | Renders numbered operational steps with connector flow and optional outcomes. | process | `timeline`, `cycle` | `heading`, `steps` | `variant`, `tone`, `density` | `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `cycle` is declared but uses the same linear ordered-list JSX as `timeline`; structural cycle behavior is not represented in component logic. | Medium |
| ProofStorySection | `/src/components/sections/ProofStorySection.tsx` | Renders a before/change/after proof narrative with optional metrics. | proof | `before-change-after`, `metric-story` | `heading`, `before`, `change`, `after` | `variant`, `tone`, `density`, `attribution` | `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `metric-story` is declared but all variants render the same before/change/after column structure. | Medium |
| RelatedContentSection | `/src/components/sections/RelatedContentSection.tsx` | Renders graph-owned related links as an ordered progression list. | supporting | `progression` | `heading`, `items` | `variant`, `tone`, `density` | `ArrowRight`, `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | Error message mentions `groups`, but props expose `items`; also `summary` is validated by type as optional but not required at runtime. | High |
| ScopeSection | `/src/components/sections/ScopeSection.tsx` | Renders grouped scope or inclusion lists with optional icons and descriptions. | content | `layered-list`, `service-map` | `heading`, `groups` | `variant`, `tone`, `density` | `resolveSectionIcon`, `SectionIconKey`, `SectionShell`, `SectionDensity`, `SectionHeading`, `SectionTone` | `service-map` uses the same grouped-card JSX structure as `layered-list`; group item strings are not checked for blank values. | Medium |
| SectionShell | `/src/components/sections/SectionShell.tsx` | Provides the shared section wrapper, container, heading, tone, density, and alignment contract. | supporting | `tone`, `density`, `align`, `bare` | `children` | `tone`, `density`, `align`, `heading`, `sectionClassName`, `containerClassName`, `headingTrailing`, `bare`, `className` | `HTMLAttributes`, `ReactNode`, `SectionAlign`, `SectionDensity`, `SectionHeading`, `SectionTone` | Allows arbitrary `sectionClassName`, `containerClassName`, and `className`; this is useful but can bypass strict class governance if callers are not controlled. | High |
| Section icon registry | `/src/components/sections/icons.ts` | Provides a controlled Lucide icon key registry for section components. | supporting | None | None | `key` for `resolveSectionIcon` | `LucideIcon`, vetted `lucide-react` icons | `resolveSectionIcon` silently returns `null` for missing keys, which behaves like fallback logic if invalid keys ever reach runtime outside TypeScript coverage. | High |
| Section exports | `/src/components/sections/index.ts` | Re-exports the production section component family and shared section types. | supporting | None | None | None | Section components, `SectionIconKey`, `resolveSectionIcon`, `SECTION_ICONS`, shared types | Comment references `docs/Planning/audit7.md PHASE 3`, which may become stale process documentation. | High |
| Section shared types | `/src/components/sections/types.ts` | Defines shared tone, density, heading, link, bullet, media, and footnote contracts. | supporting | `SectionTone`, `SectionDensity`, `SectionAlign` | None | None | `ReactNode`, `SectionIconKey` | `SectionFootnote.text` permits `ReactNode`, which can weaken deterministic data-only contracts if used across renderer boundaries. | High |

## 2. Component Usage Table

| Page | Section Position | Section Purpose | Component | Variant | Tone | Data Source | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Smart Website | Hero | Service hero with operational visual and primary CTA. | HeroSplitSection | `operations` | default `gradient-blue` | `data.hero`, `PRIMARY_CTA_LABEL`, `buildContactHref({ system: slug, sourceType: 'page', slug })` | Fits because the page opens with a two-column operational dashboard metaphor. |
| Smart Website | 2 | Value blocks / diagnostic signals. | GridCardsSection | `diagnostic-grid` | `soft` | `sections.value` | Fits because mapped value items are independent diagnostic cards. |
| Smart Website | 3 | Before/after comparison. | BeforeAfterSection | `split-panel` | fixed `gradient-blue` | `sections.comparison` | Fits because data has explicit `before` and `after` item groups. |
| Smart Website | 4 | Included deliverables. | GridCardsSection | `feature-grid` | `light` | `sections.included` | Fits because included items are feature-like checklist cards. |
| Smart Website | 5 | Implementation types. | GridCardsSection | `signal-board` | `soft` | `sections.types` | Fits loosely; type cards use descriptions but do not pass `badge`, so the signal-board-specific badge structure is unused. |
| Smart Website | 6 | Core layer explanation. | LayerStackSection | `interactive-stack` | fixed `soft` | `sections.coreLayer` | Fits because cards are ordered layers with summaries and points. |
| Smart Website | 7 | Proof narrative. | ProofStorySection | `before-change-after` | `soft` | `sections.proof` | Fits because the proof data is explicitly mapped to before/change/after columns. |
| Smart Website | 8 | Strategic bridge / visibility foundations. | ImageStorySection | `operational-photo` | `light` | `sections.visibilityFoundations` via `optionalSections` | Fits because the section combines copy, bullets, highlights, image, and caption. |
| Smart Website | 9 | Benefits by business size. | GridCardsSection | `feature-grid` | `light` | `sections.businessSizes` via `optionalSections` | Fits because business sizes become peer feature cards. |
| Smart Website | 10 | How it works. | ProcessStepsSection | `timeline` | `light` | `sections.process` | Fits because steps have explicit numbers and descriptions. |
| Smart Website | 11 | Common concerns addressed. | GridCardsSection | `diagnostic-grid` | `soft` | `sections.concerns` via `optionalSections` | Fits because concern items are independent issue/response cards. |
| Smart Website | 12 | Technologies used. | GridCardsSection | `signal-board` | `light` | `sections.technologies` via `optionalSections` | Fits loosely; technology items do not pass `badge`, so the signal-board-specific badge structure is unused. |
| Smart Website | 13 | Qualification / fit check. | FitCheckSection | `two-column` | `light` | `sections.qualification` | Fits because data has strong-fit and not-for groups with notes. |
| Smart Website | 14 | FAQ. | AccordionFAQSection | `single-column` | `soft` | `sections.faq` | Fits because FAQ data is question/answer list content. |
| Smart Website | 15 | Final CTA. | PrimaryCTASection | `soft-panel` | default `soft`, shell default `gradient-cta` | `data.cta.heading`, `data.cta.actions` | Fits because the page closes with one primary deterministic action. |
| Local SEO | Hero | Service hero with visibility visual and primary CTA. | HeroSplitSection | `visibility` | default `gradient-blue` | `data.hero`, `PRIMARY_CTA_LABEL`, `buildContactHref({ system: slug, sourceType: 'page', slug })` | Fits because the page opens around visibility status and local search signals. |
| Local SEO | 2 | Three assumptions / misconceptions. | GridCardsSection | `signal-board` | `soft` | `sections.misconceptions` | Fits because each pain point carries a repeated current-state badge and risk status. |
| Local SEO | 3 | Website-first SEO approach. | LayerStackSection | `signal-map` | fixed `soft` | `sections.why` | Fits because features are ordered approach layers with shared meta. |
| Local SEO | 4 | Off-the-shelf SEO comparison. | BeforeAfterSection | `scorecard` | fixed `gradient-blue` | `sections.comparison` | Fits because data has before/after groups, but scorecard does not alter JSX structure. |
| Local SEO | 5 | Integration outcomes. | LayerStackSection | `signal-map` | fixed `soft` | `sections.integrations` | Fits because integration cards are ordered signal layers with bullets. |
| Local SEO | 6 | What happens after start. | ProcessStepsSection | `timeline` | `light` | `sections.processSection` | Fits because data maps to numbered process steps. |
| Local SEO | 7 | Scope of handled services. | GridCardsSection | `feature-grid` | `soft` | `sections.scopeSection` | Fits because service scope items become peer summary cards. |
| Local SEO | 8 | Real business proof. | ProofStorySection | `before-change-after` | `light` | `sections.proof` | Fits because proof data is explicitly before/change/after. |
| Local SEO | 9 | Qualification / fit check. | FitCheckSection | `two-column` | `soft` | `sections.qualification` | Fits because data has strong-fit and not-designed groups with notes. |
| Local SEO | 10 | FAQ. | AccordionFAQSection | `single-column` | `light` | `sections.faqSection` | Fits because FAQ data is question/answer list content. |
| Local SEO | 11 | Final CTA. | PrimaryCTASection | `soft-panel` | default `soft`, shell default `gradient-cta` | `data.cta.heading`, `data.cta.actions` | Fits because the page closes with one primary deterministic action. |

## 3. Service Landscape Table

| Page | Section Type | Current Component | Pattern | Notes |
| --- | --- | --- | --- | --- |
| Smart Website Systems | Full service page | HeroSplitSection, GridCardsSection, BeforeAfterSection, LayerStackSection, ProofStorySection, ImageStorySection, ProcessStepsSection, FitCheckSection, AccordionFAQSection, PrimaryCTASection | New deterministic section family | Data file: `/src/domains/services/data/smart-website-systems.ts`; renderer: `SmartWebsiteSystemsRenderer.tsx`. |
| Local SEO Authority | Full service page | HeroSplitSection, GridCardsSection, LayerStackSection, BeforeAfterSection, ProcessStepsSection, ProofStorySection, FitCheckSection, AccordionFAQSection, PrimaryCTASection | New deterministic section family | Data file: `/src/domains/services/data/local-seo-authority.ts`; renderer: `LocalSeoAuthorityRenderer.tsx`. |
| Service Pages vs One Generic Services Page | Comparison/service page | SmartWebsiteSystemsRenderer-compatible section family | New deterministic section family via shared renderer prop union | Data file exists and `SmartWebsiteSystemsRenderer` accepts this slug's data shape. |
| AI Lead Handling | Full service page | ServiceHeroSection, reusable sections, ProcessStepsSection, renderAlternatingSection, FAQSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/ai-lead-handling.ts`; renderer imports `renderAlternatingSection`. |
| Lead Reactivation System | Full service page | ServiceHeroSection, reusable sections, renderAlternatingSection, ProcessStepsSection, FAQSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/lead-reactivation-system.ts`; alternating detail helper is used. |
| Missed Call Recovery System | Full service page | ServiceHeroSection, reusable sections, ProcessStepsSection, FAQSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/missed-call-recovery-system.ts`. |
| Reputation Review Systems | Full service page | ServiceHeroSection, reusable sections, ProcessStepsSection, FAQSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/reputation-review-systems.ts`. |
| WordPress Development | Full service page | ServiceHeroSection, reusable sections, ProcessStepsSection, FAQSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/wordpress-development.ts`. |
| Bricks Builder | Builder/service page | ServiceHeroSection, reusable sections, ProcessStepsSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/bricks-builder.ts`; no FAQ usage seen in grep results. |
| Divi 5 | Builder/service page | ServiceHeroSection, reusable sections, ProcessStepsSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/divi5.ts`; no FAQ usage seen in grep results. |
| Elementor | Builder/service page | ServiceHeroSection, reusable sections, ProcessStepsSection, PrimaryCTASection | Legacy reusable renderer plus selected new sections | Data file: `/src/domains/services/data/elementor.ts`; no FAQ usage seen in grep results. |
| WooCommerce | Commerce/service page | ServiceHeroSection, reusable sections, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/woocommerce.ts`; no new process or FAQ usage seen in grep results. |
| CRM Automation | Full service page | ServiceHeroSection, reusable sections, FAQSection, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/crm-automation.ts`. |
| Conversion Layer | Full service page | ServiceHeroSection, reusable sections, FAQSection, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/conversion-layer.ts`. |
| Unified Communication System | Full service page | ServiceHeroSection, reusable sections, FAQSection, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/unified-communication-system.ts`. |
| Website Redesign System Rebuild | Full service page | ServiceHeroSection, reusable sections, FAQSection, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/website-redesign-system-rebuild.ts`. |
| System Migration Platform Consolidation | Full service page | ServiceHeroSection, reusable sections, FAQSection, PrimaryCTASection | Legacy reusable renderer | Data file: `/src/domains/services/data/system-migration-platform-consolidation.ts`. |
| Conversion Funnel System vs Landing Page Development | Comparison/service page | No matching renderer found in `/src/domains/services/renderers` scan | Data-only in scanned folders | Data file exists; renderer mapping not visible in scanned renderer filenames. |
| Website CRM Integration vs Manual Lead Handling | Comparison/service page | No matching renderer found in `/src/domains/services/renderers` scan | Data-only in scanned folders | Data file exists; renderer mapping not visible in scanned renderer filenames. |
| renderAlternatingSection helper | Supporting renderer helper | AlternatingDetailRowsSection | Legacy reusable detail-row adapter | Normalizes alternating items for renderers that still use the reusable alternating pattern. |

## 4. Observations

### Component Classification

| Classification | Components |
| --- | --- |
| layout | SectionShell |
| content | GridCardsSection, ImageStorySection, ScopeSection |
| comparison | BeforeAfterSection, FitCheckSection |
| narrative | ImageStorySection, ProofStorySection |
| proof | ProofStorySection |
| process | ProcessStepsSection, LayerStackSection |
| utility | Section icon registry, Section exports, Section shared types, RelatedContentSection, AccordionFAQSection, PrimaryCTASection |

### Reuse Patterns

- GridCardsSection is the dominant reusable mid-page component across both anchor pages; it handles diagnostics, features, scope, business-size cards, concerns, technologies, and misconceptions.
- LayerStackSection is the main reusable structured-explanation component; Smart Website uses `interactive-stack`, while Local SEO uses `signal-map` for two separate sections.
- ProcessStepsSection is consistently used for numbered operational flow where data includes explicit step numbers.
- ProofStorySection has a strong contract fit wherever data is already before/change/after.
- AccordionFAQSection and PrimaryCTASection are stable terminal patterns for anchor pages.
- Legacy service pages still rely on ServiceHeroSection, reusable sections, FAQSection, and renderAlternatingSection, with selective adoption of ProcessStepsSection and PrimaryCTASection.

### Inconsistencies

- Several variants are declared without structural JSX differences: HeroSplitSection `operations`/`visibility`, BeforeAfterSection `split-panel`/`scorecard`, FitCheckSection `two-column`/`decision-cards`, LayerStackSection `interactive-stack`/`signal-map`, ProcessStepsSection `timeline`/`cycle`, ProofStorySection `before-change-after`/`metric-story`, PrimaryCTASection `soft-panel`/`split-card`.
- GridCardsSection `signal-board` has a real structural branch for `badge`, but Smart Website `types` and `technologies` use `signal-board` without passing `badge`, making those usages visually dependent on CSS only.
- ImageStorySection uses `reverse` as a structural layout switch while also exposing three named variants; that creates two competing uniqueness mechanisms.
- ScopeSection exists but neither anchor renderer uses it; Local SEO scope currently maps to GridCardsSection `feature-grid`.
- RelatedContentSection exists but is absent from the anchor renderers and the scanned service renderer mapping.
- Service landscape is split between a new deterministic section family and older reusable service components.

### Variant Misuse

- Local SEO uses BeforeAfterSection `scorecard`, but the component renders the same two-column JSX as `split-panel`; this is a variant-name promise without a structural guarantee.
- Smart Website uses GridCardsSection `signal-board` for `types` and `technologies` without badge data, so the only signal-board-specific JSX path is not exercised.
- ProcessStepsSection declares `cycle`, but no anchor usage exercises it and the component always renders a linear ordered list.
- ProofStorySection declares `metric-story`, but the component always renders before/change/after columns.
- FitCheckSection declares `decision-cards`, but both anchors use `two-column` and the component has no JSX branch for decision-card structure.

### Duplication Detection

- Overlapping responsibilities: GridCardsSection, ScopeSection, and LayerStackSection can all present grouped service capabilities; the distinction should be enforced as card grid vs grouped list vs ordered layer map.
- Structural duplication: BeforeAfterSection and FitCheckSection both render paired columns with icons, labels, titles, and item lists; keep them separate only because comparison and qualification have different semantics.
- Structural duplication: ProcessStepsSection and LayerStackSection both render ordered sequences; ProcessStepsSection owns linear flow, LayerStackSection owns always-visible layered explanation.
- Variant misuse risk: variants that do not branch structurally can be used as cosmetic labels, which weakens controlled uniqueness.
- Over-generic risk: GridCardsSection can absorb too many mid-page concepts unless `feature-grid`, `diagnostic-grid`, and `signal-board` are limited by data shape rules.

## 5. Keep / Merge / Delete / Split

### KEEP

- SectionShell: foundational layout contract for all production sections.
- GridCardsSection: high-reuse content grid, but keep strict data-shape rules per variant.
- HeroSplitSection: anchor hero for service pages; keep while requiring structural proof for future variants.
- ProcessStepsSection: clear process/timeline owner.
- LayerStackSection: clear ordered-layer owner.
- ProofStorySection: clear before/change/after proof owner.
- AccordionFAQSection: clear FAQ owner.
- PrimaryCTASection: clear page CTA owner after naming-contract cleanup is planned.
- Section icon registry: required controlled vocabulary.
- RelatedContentSection: keep as graph-owned supporting component, even though unused by anchors.

### MERGE

- Do not merge BeforeAfterSection and FitCheckSection now; their JSX overlaps, but the semantic contracts differ enough to keep both.
- Do not merge ScopeSection into GridCardsSection now; instead enforce that ScopeSection owns grouped inclusion lists when groups contain multiple bullet items.

### DELETE

- No component should be deleted based on this scan alone.
- Candidate for future deletion only if unused after migration: variants with no structural branch and no validated usage (`cycle`, `metric-story`, `decision-cards`, `split-card`).

### SPLIT

- Split GridCardsSection only if future pages need a structurally distinct signal board with grouped signals, filters, rows, or dense comparison behavior.
- Split ImageStorySection if `visual-panel` or `split-evidence` needs non-image panel structure; do not keep structural uniqueness hidden behind the same JSX.
- Split HeroSplitSection if a future hero needs more than an operational status panel, e.g. map-first visual or calculator-style visual.

## 6. Missing Components

- A structural signal-board component or variant for grouped signals when `badge` is required and meaningful.
- A unique Tier-1 Section 2-4 component/variant per anchor page so pages do not feel templated.
- A governed visual registry route at `/dev/component-system` showing every component and variant.
- A service-scope grouped list usage path that exercises ScopeSection instead of forcing all scope into GridCardsSection.
- A related-content integration point that exercises RelatedContentSection with graph-owned candidates.
- A variant validation layer that rejects variants not supported by structural data requirements.
- A renderer migration map for legacy pages still using ServiceHeroSection, FAQSection, and reusable sections.

## 7. System Rules

### Reuse Rules

- Reuse a component only when the data shape matches the component's semantic contract, not merely because the layout looks acceptable.
- Use GridCardsSection for independent peer cards only; use LayerStackSection for ordered layered explanations; use ProcessStepsSection for process flow; use ScopeSection for grouped inclusion lists.
- Use ProofStorySection only for before/change/after or a structurally proven metric-story branch.
- Use FitCheckSection only for qualification or decision fit; do not use it as a general comparison block.
- Use RelatedContentSection only with already-resolved graph candidates; UI components must not fetch or hardcode recommendations.

### Creation Rules

- Create a new component when a page needs a structural pattern not expressible through existing component props without changing layout, hierarchy, or grouping semantics.
- Create a new variant only when the JSX structure or required data shape changes, not for color, spacing, or typography differences.
- Add variant-specific runtime validation when a variant requires specific props such as `badge`, `metric`, `bullets`, or grouped items.
- Keep all content in service data/renderers; section components stay data-driven and UI-layer content-free.

### Variant Limits

- Maximum recommended variants per component: three.
- A variant must document valid data shape, invalid data shape, and structural difference.
- If a variant needs different child ordering, nested grouping, different semantic element structure, or different required props, it may remain a variant.
- If a variant needs a different mental model, data source, or interaction contract, it becomes a new component.

### Naming Conventions

- Component names should express semantic role: `GridCardsSection`, `LayerStackSection`, `ProofStorySection`.
- Variant names should express structure or data shape, not mood: `signal-board` is acceptable only when signal badges/groups are structurally required.
- Avoid variant names that imply behavior not present in JSX, such as `cycle` without cycle structure.
- Keep support files named by role: `SectionShell`, `icons`, `types`, `index`.

### Per-Component Variant Strategy

| Component | Valid Variants | Invalid Variants | When Variant Becomes New Component |
| --- | --- | --- | --- |
| AccordionFAQSection | `single-column` | Any multi-column, categorized, searchable, or tabbed FAQ without new structure | When FAQs need category grouping, filters, search, or multiple open panels. |
| BeforeAfterSection | `split-panel`; `scorecard` only if scorecard gains distinct metric/card structure | Color-only `scorecard`; non-before/after comparisons | When comparison has more than two sides, weighted criteria, scores, or matrix rows. |
| FitCheckSection | `two-column`; `decision-cards` only if it changes grouping or decision hierarchy | Cosmetic decision-card label with identical columns | When fit logic becomes quiz-like, multi-path, or scored. |
| GridCardsSection | `diagnostic-grid`, `feature-grid`, `signal-board` when badge/status data is structurally used | `signal-board` without badge/status requirements; arbitrary content grids | When cards need row grouping, filters, nested evidence, or timeline behavior. |
| HeroSplitSection | `operations`, `visibility` as data-shaped hero panels | Visual-only hero variants with identical structure and no distinct data contract | When hero visual becomes map-first, calculator, media-led, or multi-action. |
| ImageStorySection | `operational-photo`; `visual-panel`/`split-evidence` only with validated structural requirements | Variant names that only change image treatment; using `reverse` as page uniqueness | When visual is not an image/story pair, such as evidence grid, diagram, or dashboard panel. |
| LayerStackSection | `interactive-stack`, `signal-map` when ordered layers are the page's mental model | Cosmetic signal-map usage with no signal-specific data | When layers become interactive tabs, collapsible groups, or graph/map visualization. |
| PrimaryCTASection | `soft-panel`; `split-card` only if supports/actions occupy a structurally separate region | CTA variants with only shell tone changes | When CTA needs multi-action comparison, form capture, pricing, or scheduling UI. |
| ProcessStepsSection | `timeline`; `cycle` only with circular/looping structure | Linear `cycle` with same ordered list | When process is branching, cyclical, or phase-grouped. |
| ProofStorySection | `before-change-after`; `metric-story` only with metric-led hierarchy | Metric-story without required metrics or changed hierarchy | When proof is case-study narrative, testimonial, logo wall, or metric dashboard. |
| RelatedContentSection | `progression` | Any unrelated card grid or manual recommendation list | When related content needs grouped journeys, filters, or graph visualization. |
| ScopeSection | `layered-list`; `service-map` only with grouped service-map semantics | Single-card feature grids better handled by GridCardsSection | When scope becomes pricing/table/matrix or nested taxonomy. |
| SectionShell | `tone`, `density`, `align`, `bare` as layout controls | Page-specific custom wrappers or custom widths | When shell needs a different container contract, e.g. full-bleed media shell. |

## 8. Final Architecture

### Folder Structure

```text
src/components/sections/
	layout/
		SectionShell.tsx
	content/
		GridCardsSection.tsx
		ImageStorySection.tsx
		ScopeSection.tsx
	comparison/
		BeforeAfterSection.tsx
		FitCheckSection.tsx
	narrative/
		ProofStorySection.tsx
	process/
		ProcessStepsSection.tsx
		LayerStackSection.tsx
	supporting/
		AccordionFAQSection.tsx
		PrimaryCTASection.tsx
		RelatedContentSection.tsx
	shared/
		icons.ts
		types.ts
	index.ts
```

### Naming System

- `*Section` remains the production page-section suffix.
- Variant names must describe structure or data shape.
- Shared contracts remain under `shared` or flat files until physical movement is worth the churn.
- Renderer mapping should name data by section purpose, not visual component name.

### Component Mental Model

- SectionShell owns outer section mechanics: tone, density, container, heading, and animation opt-in.
- Section components own one semantic job and one primary data shape.
- Renderers translate domain data into section props and own page sequence.
- Data files own content; UI components own deterministic presentation.
- Variants are structural promises; if the promise is not visible in JSX or required data shape, the variant should be removed or promoted into a real structural branch.

## 9. ⚡ Unique Component Strategy

### Controlled Uniqueness Rule

- Keep 50-70% of Tier-1 page sections reusable.
- Every Tier-1 page must include one unique component or one unique structural variant.
- The unique component/variant must appear in Section 2, Section 3, or Section 4.
- Uniqueness cannot be color-only, spacing-only, or typography-only.

### Smart Website Unique Variant

- Base component: GridCardsSection.
- Variant name: `diagnostic-leak-map`.
- Placement: Section 2.
- Purpose: Show where website opportunities leak across enquiry paths before presenting the before/after comparison.
- Structural differences: layout becomes grouped by leakage stage instead of equal peer cards; hierarchy adds stage label, primary risk, and evidence rows; grouping requires each item to carry a `stage`, `risk`, and `evidence` list.
- Why page-specific: Smart Website is about operational leakage between website visit and business outcome, so the second section should diagnose leakage pathways rather than present generic value cards.
- Why existing components fail: GridCardsSection `diagnostic-grid` presents peer cards only; LayerStackSection implies ordered layers; ProcessStepsSection implies a forward process, not leakage diagnosis.
- JSX structural difference required: `<ol>` or grouped `<div>` of leak stages, each stage containing a heading row and nested evidence list, not a flat `<ul>` of cards.
- Layout difference: grouped stage flow, likely 2-3 grouped clusters using rd grid primitives; not custom widths.
- Data mapping: `sections.value.items` can map to stages only if service data gains stable stage/evidence fields; otherwise this requires a new `sections.leakMap` data contract.

### Local SEO Unique Variant

- Base component: LayerStackSection.
- Variant name: `authority-signal-map`.
- Placement: Section 3.
- Purpose: Explain why website, location, trust, and repetition signals need to work together before comparison appears.
- Structural differences: layout groups layers into signal families instead of a simple ordered stack; hierarchy includes signal family, visible evidence, and compounding effect; grouping requires each layer to carry `family`, `evidence`, and `effect` fields.
- Why page-specific: Local SEO is about authority signals compounding across website and local discovery; the page needs a signal map rather than a generic layer stack.
- Why existing components fail: Current LayerStackSection `signal-map` renders the same card sequence as `interactive-stack`; GridCardsSection cannot show ordered compounding; ProcessStepsSection makes it feel like execution steps.
- JSX structural difference required: grouped signal-family sections with nested evidence/effect rows, not one flat ordered list of cards.
- Layout difference: signal-family grouping with ordered cards inside groups; no custom widths, no inline styles.
- Data mapping: `sections.why.features` can seed the map only if enriched with family/evidence/effect; otherwise introduce `sections.authoritySignalMap`.

### Reusable Ratio Check

- Smart Website currently has 15 visible positions; one unique structural variant in Section 2 keeps reusable sections at roughly 93% for this page, which exceeds the stated reusable band but satisfies the minimum uniqueness rule.
- Local SEO currently has 11 visible positions; one unique structural variant in Section 3 keeps reusable sections at roughly 91% for this page, which exceeds the stated reusable band but satisfies the minimum uniqueness rule.
- To reach 50-70% reusable across Tier-1 pages, future migration should add at most one more structurally unique section per Tier-1 page and keep terminal FAQ/CTA/process/proof patterns shared.

## 10. 🧪 Dev Visualizer Plan

### Route

- `/dev/component-system`
- Implementation file: `/src/app/dev/component-system/page.tsx`.
- Status: implemented as a dev-gated route using Smart Website and Local SEO data only.

### Purpose

- Visual registry for all production section components.
- QA surface for component variants and data-shape failures.
- Debugging surface for renderer-to-component mapping.
- Future design playground with controlled data and flat DOM.

### Data Rule

- Use only Smart Website data and Local SEO data.
- Reuse anchor data repeatedly when a component needs examples.
- Do not introduce new marketing copy in the page; labels may be mechanical registry labels only.

### Render Rule

- Each component appears as a named group.
- Each variant appears as a separate section.
- Each rendered section must display `[ComponentName - VariantName]` immediately before the component instance.
- Keep DOM flat: registry label then component, repeated in sequence.

### Components and Variants to Display

| Component | Variants to Render | Data Source |
| --- | --- | --- |
| HeroSplitSection | `operations`, `visibility` | Smart Website `hero`, Local SEO `hero` |
| GridCardsSection | `diagnostic-grid`, `signal-board`, `feature-grid` | Smart Website `value`/`included`, Local SEO `misconceptions` |
| BeforeAfterSection | `split-panel`, `scorecard` | Smart Website `comparison`, Local SEO `comparison` |
| FitCheckSection | `two-column`, `decision-cards` | Smart Website `qualification`, Local SEO `qualification` |
| ImageStorySection | `operational-photo`, `visual-panel`, `split-evidence` | Smart Website `visibilityFoundations` reused across variants |
| LayerStackSection | `interactive-stack`, `signal-map` | Smart Website `coreLayer`, Local SEO `why` or `integrations` |
| PrimaryCTASection | `soft-panel`, `split-card` | Smart Website `cta`, Local SEO `cta` |
| ProcessStepsSection | `timeline`, `cycle` | Smart Website `process`, Local SEO `processSection` |
| ProofStorySection | `before-change-after`, `metric-story` | Smart Website `proof`, Local SEO `proof` |
| AccordionFAQSection | `single-column` | Smart Website `faq`, Local SEO `faqSection` |
| RelatedContentSection | `progression` | Anchor-derived local links only if graph candidates are available before render; otherwise omit until real graph data is provided |
| ScopeSection | `layered-list`, `service-map` | Local SEO `scopeSection` mapped into grouped scope data |

### Performance Rules

- Lazy load heavy visual groups with dynamic imports where the route implementation permits it; current implementation keeps imports static because the section family is server-rendered except for the FAQ accordion, and preserving type-safe deterministic render was preferred over introducing a client registry wrapper.
- Keep the registry page out of production navigation and indexing.
- Avoid nested registry cards; labels should be simple text bands using existing rd classes.
- Reuse SectionShell and rd-* primitives; no inline style, custom width, or ad-hoc layout logic.

### Implementation Notes

- The page should live under the app route that maps to `/dev/component-system`.
- Data adapters should sit inside the dev page file or a colocated dev-only helper.
- Each adapter must fail loudly if required anchor data is missing.
- The route should be validated by build/system checks after creation.
