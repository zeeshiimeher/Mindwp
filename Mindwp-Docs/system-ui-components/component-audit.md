# COMPONENT SYSTEM OVERVIEW

> Reference map for the live component system.
> This file describes the current structure, the highest-value building blocks, and the rules for reasoning about component reuse.

---

## USE THIS DOC

Use this file when you need a fast mental model of how the component system is organized and which components matter most in the live page and renderer layer.

---

## SYSTEM SUMMARY

- The runtime is composition-first at the page and renderer layer.
- The reusable library is larger than the subset currently used heavily by service renderers.
- Service pages repeat a small, stable family of section and card patterns.
- The component preview system is scanner-driven rather than manually curated.
- Most drift comes from repeating renderer sequences, not from missing primitives.

---

## PRIMARY LAYERS

### Primitives

These are the lowest reusable layout controls.

- `SectionWrapper`: section shell, spacing, and container control
- `CardGrid`: responsive grid wrapper for mapped card layouts

### System Components

These own cross-page behavior rather than just presentation.

- `SmartCTA`: page-level CTA rendering and contextual contact routing
- `PageEnforcement` surfaces: page identity, CTA registry, related-content enforcement
- `SmartRelatedSection`: graph-aware related-content output
- `JsonLd`: schema output at the route layer

### Reusable Single Components

These are the most important high-frequency single components in live service composition:

- `SectionIntro`
- `SimpleHero`
- `FAQSection`
- `Badge`
- `Button`
- `Card`
- `IconBenefitCard`
- `FeatureChecklistCard`
- `ProcessStepCard`
- `WorkflowStepCard`

### Reusable Section Families

The most important live section families are:

- `ProblemCardsSection`
- `ProcessStepsSection`
- `ServiceSpectrumCardsSection`
- `StackedFeatureListSection`
- `ComparisonSection`
- `DualToneChecklistComparisonSection`
- `FeatureChecklistCardsSection`
- `ChecklistCardsSection`
- `TechnologyCardsSection`
- `OperationalShiftCardsSection`

### Domain Wrappers

Domain wrappers keep page-specific composition thin.

- service wrappers such as `ServiceHeroSection`
- feature wrappers
- industry wrappers
- resource wrappers
- blog wrappers
- case-study wrappers

These wrappers should stay thin and should not reimplement shared core behavior.

---

## LIVE HIGH-FREQUENCY PATTERNS

### Hero Pattern

Canonical shape:

`SectionWrapper -> SectionIntro -> SmartCTA -> optional bullets`

Primary owners:

- `SimpleHero`
- `ServiceHeroSection`

### Intro Plus Grid Pattern

Canonical shape:

`SectionWrapper -> SectionIntro -> CardGrid -> mapped cards`

Used for:

- problems
- benefits
- included scope
- capabilities
- proof grids
- technology grids

### Comparison Pattern

Canonical shape:

`SectionWrapper -> SectionIntro -> two-column comparison or qualification split`

Primary owners:

- `ComparisonSection`
- `DualToneChecklistComparisonSection`

### Process Pattern

Canonical shape:

`SectionWrapper -> SectionIntro -> ordered steps`

Primary owner:

- `ProcessStepsSection`

### Narrative Bridge Pattern

Canonical shape:

`SectionWrapper -> narrative column + structured feature rail`

Primary owner:

- `StackedFeatureListSection`

---

## WHAT IS CENTRAL RIGHT NOW

The smallest useful mental model is:

1. `SectionWrapper` controls shell and spacing.
2. `SectionIntro` controls heading hierarchy.
3. `SmartCTA` controls CTA behavior.
4. A small set of section families control most service-page structure.
5. Domain wrappers assemble those sections into page-specific narratives.

If a change does not fit into one of those layers cleanly, it usually needs reevaluation before implementation.

---

## OWNERSHIP RULES

### Primitives Own Layout Mechanics

Primitives control spacing, containment, and grid behavior. They do not own page semantics.

### Section Components Own Repeated Semantic Patterns

Reusable sections should represent stable semantic jobs such as:

- problem framing
- process explanation
- capability grouping
- comparison
- qualification
- proof

### Domain Wrappers Own Page-Specific Composition

Service, feature, industry, resource, blog, and case-study wrappers may sequence sections differently, but they should not fork shared section logic without a strong reason.

### System Components Own Cross-Page Runtime Behavior

Anything involving CTA routing, page identity, related-content enforcement, or schema output belongs in the system layer rather than in presentational components.

---

## PREVIEW SYSTEM

The preview/library surface is scanner-driven.

Important surfaces:

- `src/app/components/components-client-page.tsx`
- `src/screens/ComponentLibrary.tsx`
- `src/lib/devtools/componentScanner.ts`
- `src/utils/componentDocs.generated.ts`

Preview data should come from the scanner and generated metadata rather than hand-maintained component catalogs.

---

## WHAT IS NOT ALLOWED

- Page-specific wrappers that silently duplicate a reusable section pattern.
- System behavior hidden inside presentational components.
- New components created for one page when an existing section or card family already fits.
- Treating preview/demo structures as runtime authority.

---

## RELATED REFERENCE FILES

- `component-mapping.md`: how to decide between keep, variant, or new component
- `component-evolution-proposals.md`: current rules for future section evolution
- `component-final-apis.md`: approved future API shapes for planned components

## 3. Repeated Structures

## 3.1 Dominant Repeated Sequences in Service Renderers

### Sequence 1: Hero -> Foundation -> Capability Grid

Pattern:

`ServiceHeroSection` -> `ProblemCardsSection` -> `ServiceSpectrumCardsSection` or `FeatureChecklistCardsSection`

Common in:

- `WordPressDevelopmentRenderer`
- `BookingSchedulingSystemRenderer`
- `ReviewAutomationSystemRenderer`
- `LeadReactivationSystemRenderer`
- `LocalSeoAuthorityRenderer`
- `MissedCallRecoverySystemRenderer`

Effect:

- pages feel structurally familiar very early
- “foundation” and “capability” sections are often visually interchangeable because both are card-based grids

### Sequence 2: Intro + Grid Repetition via Custom Sections

Pattern:

`SectionWrapper` -> `SectionIntro` -> mapped card grid
then another:
`SectionWrapper` -> `SectionIntro` -> mapped card grid

Common in:

- `SmartWebsiteSystemsRenderer`
- `CRMAutomationRenderer`
- `LeadReactivationSystemRenderer`
- `UnifiedCommunicationSystemRenderer`
- `WebsiteRedesignSystemRebuildRenderer`

Effect:

- even when card types change, the rendered rhythm stays the same
- this is the clearest source of “template feel” at JSX level

### Sequence 3: Comparison -> Proof -> Inline CTA

Pattern:

`ComparisonSection` -> `ServiceSpectrumCardsSection` or proof-style card block -> inline `SmartCTA`

Common in:

- `LocalSeoAuthorityRenderer`
- `WordPressDevelopmentRenderer`
- `ConversionFunnelSystemRenderer`
- `SystemMigrationPlatformConsolidationRenderer`
- `UnifiedCommunicationSystemRenderer`

Effect:

- many pages now use the same mid-page “decision support then action” ladder

### Sequence 4: Qualification -> FAQ -> Final CTA

Pattern:

`DualToneChecklistComparisonSection` or equivalent qualification block -> `FAQSection` -> final `SmartCTA`

Common in:

- most operational and implementation service pages

Effect:

- predictable bottom-third structure across the system

## 3.2 Renderer-Level Repeat Findings

### Smart Website Family Pattern

Observed in:

- `SmartWebsiteSystemsRenderer`
- `WordPressDevelopmentRenderer`
- `WebsiteRedesignSystemRebuildRenderer`
- `SystemMigrationPlatformConsolidationRenderer`

Shared structure:

- hero
- foundation/problem layer
- capability/proof layer
- process
- qualification
- FAQ
- final CTA

### Operational System Pattern

Observed in:

- `BookingSchedulingSystemRenderer`
- `MissedCallRecoverySystemRenderer`
- `UnifiedCommunicationSystemRenderer`
- `CRMAutomationRenderer`
- `LeadReactivationSystemRenderer`

Shared structure:

- hero
- operational pain or shift block
- workflow or capability block
- comparison/proof cluster
- inline CTA
- qualification
- FAQ
- final CTA

### Trust / Reputation Pattern

Observed in:

- `ReviewAutomationSystemRenderer`
- `ReputationReviewSystemsRenderer`

Shared structure:

- hero
- foundation
- workflow/system layer
- positioning
- comparison/proof
- process
- qualification
- FAQ
- final CTA

### Builder / Implementation Pattern

Observed in:

- `ElementorRenderer`
- `BricksBuilderRenderer`
- `Divi5Renderer`
- `WooCommerceRenderer`

Shared structure:

- hero
- manual or bespoke section wrappers
- implementation principles
- process/proof/CTA logic

Even where they differ in wording, the structure remains strongly parallel.

---

## 4. Component Gaps

## 4.1 Layout Gaps in the Active Service System

The library is broad, but the active service renderer layer underuses several layout archetypes.

### Missing or underrepresented in real service-page use

- narrative-first full-width sections with long-form prose and minimal card support
- true timeline-style process layouts
- tabbed or switchable comparison content
- showcase sections with stronger split asymmetry
- testimonial-led proof sections
- image-led sectional patterns in BOFU service pages
- mixed-layout sections where one side is mapped cards and the other side is a decision-support matrix

The components for some of these exist in the broader library, but they are not part of the service renderer vocabulary.

## 4.2 Section Type Gaps in the Active Service Renderer Layer

Missing as repeated standardized service-page section types:

- dedicated proof sections distinct from generic spectrum cards
- dedicated narrative bridge sections distinct from `StackedFeatureListSection`
- distinct pricing/offer architecture sections for service pages
- differentiated decision-stage objection sections beyond FAQ and qualification split

## 4.3 Coverage Gaps Between Library and Usage

The preview system exposes a much larger library than the service pages actually use.

Implication:

- the system has latent variation capacity
- but the service renderer layer is not drawing from that capacity consistently

This is not a component-availability problem. It is a renderer-composition concentration problem.

---

## 5. Preview System Quality

## 5.1 Preview Entry Point

Preview route:

- `src/app/components/components-client-page.tsx`

Rendered screen:

- `src/screens/ComponentLibrary.tsx`

Backing scanner and docs:

- `src/lib/devtools/componentScanner.ts`
- `src/utils/componentDocs.generated.ts`

## 5.2 What the Preview System Actually Covers

The preview system scans these namespaces:

- `@/components/reusable/single`
- `@/components/reusable/sections/core`
- `@/components/reusable/sections/features`
- `@/components/reusable/sections/resources`
- `@/components/reusable/sections/blog`
- `@/components/reusable/sections/case-studies`
- `@/components/reusable/sections/service`
- `@/components/reusable/sections/industries`

Preview status:

- reusable component namespaces: effectively complete
- system namespace: not covered
- primitives namespace: not covered
- renderer-level custom composition: not covered

## 5.3 Preview Strengths

- scanner registration is systematic rather than ad hoc
- generated mock props are structure-aware
- several complex components have usage-seeded presets rather than fully generic placeholders
- category grouping is explicit and durable

## 5.4 Preview Weaknesses

- `SmartCTA` is a major live component in service renderers but is not part of preview coverage
- `SectionWrapper` and `CardGrid` control much of the system’s actual layout behavior but are not previewed directly
- renderer-level custom sections built from `SectionWrapper` + `SectionIntro` + mapped cards are not represented as first-class preview artifacts
- preview shows component capability, not renderer sequencing
- preview fidelity is highest for scanner-registered components with presets and lower for components whose mock data is mostly inferred

## 5.5 Preview Alignment With Real Usage

Assessment:

- reusable-library coverage: strong
- service-renderer fidelity: partial

Reason:

- the preview accurately represents the individual scanner-registered components
- it does not fully represent the real service-page system because many service-page patterns are created in renderers by combining primitives and single components directly

Final preview-system judgment:

- complete as a reusable-component preview for registered namespaces
- incomplete as a representation of real service-page composition behavior

---

## 6. Deterministic Findings

After scanning the reusable library, the service renderers, and the preview system, the system can be described deterministically as follows:

1. The active service-page architecture runs on a small repeated subset of the broader component library.
2. The dominant live pattern is still `SectionWrapper` plus `SectionIntro` plus mapped cards.
3. Repetition is created at renderer sequence level more than inside individual components.
4. The preview system is strong for registered reusable components but incomplete for system components, primitives, and real renderer compositions.
5. The broader library already contains more layout diversity than the service renderers currently use.

That is the current structural state of the component system.