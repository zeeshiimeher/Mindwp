# Component Audit

## Scope

This audit covers:

- all reusable components under `src/components/**`
- emphasis on `src/components/reusable/sections/**`
- emphasis on `src/components/reusable/single/**`
- emphasis on `src/components/system/**`
- all service renderers under `src/domains/services/renderers/**`
- the component preview system implemented through:
  - `src/app/components/components-client-page.tsx`
  - `src/screens/ComponentLibrary.tsx`
  - `src/lib/devtools/componentScanner.ts`
  - `src/utils/componentDocs.generated.ts`

This is an analysis document only. No refactor or redesign decisions are included here.

## System Summary

- The system is composition-first at the page layer and building-block-first at the component layer.
- The preview system is scanner-driven, not manually curated.
- Real service renderer composition depends on a relatively small core subset of components.
- The broader reusable library is much larger than the subset currently exercised by service pages.
- Repetition is caused less by individual component quality and more by repeated renderer sequencing around the same component families.

---

## 1. Core Component Library

## 1.1 Primitives

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `SectionWrapper` | `src/components/reusable/primitives/SectionWrapper.tsx` | layout | outer `section` or `div`; optional internal container wrapper; stacked shell | `as`, `padding`, `container`, `background`, `className`, `children` | universal section shell and spacing controller | used indirectly everywhere; all section components and many custom renderer blocks rely on it |
| `CardGrid` | `src/components/reusable/primitives/CardGrid.tsx` | layout | responsive grid wrapper with 2/3/4/6 column modes | `columns`, `gap`, `mode`, `className`, `children` | grid layout controller for mapped cards | used by many section components; service renderers usually consume it through section wrappers |

## 1.2 System Components

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `SmartCTA` | `src/components/system/SmartCTA.tsx` | CTA | actions-only mode or full CTA panel; optional `SectionWrapper`; optional meta row | `system`, `pageType`, `slug`, `mode`, `title`, `description`, `badge`, `metaItems`, button styling props | context-aware CTA and contact routing layer | direct in 14+ service renderers; typically mid-page and footer |
| `GenericErrorFallback` | `src/components/system/GenericErrorFallback.tsx` | utility | static fallback block | fallback-only props | renderer error fallback UI | paired with `ErrorBoundary` in all service renderers |
| `RelatedContentSection` | `src/components/system/RelatedContentSection.tsx` | section | related content grid | content arrays and headings | related-content block | not used by current service renderers |
| `SmartRelatedSection` | `src/components/system/SmartRelatedSection.tsx` | section | wrapper around related content logic | page context props | graph-aware related content block | not used in current service renderer bodies |
| `ClusterPageLayout` | `src/components/system/ClusterPageLayout.tsx` | layout | page shell layout | page-level props | cluster/topic page layout | not used in service renderers |
| `GraphAwareSidebar` | `src/components/system/GraphAwareSidebar.tsx` | layout | sidebar | graph and navigation props | graph/navigation support | not used in service renderers |
| `RetryButtonIsland` | `src/components/system/RetryButtonIsland.tsx` | utility | small interactive control | retry props | retry interaction | not used in service renderers |
| `JsonLd` | `src/components/system/JsonLd.tsx` | utility | schema output | schema payload props | SEO/schema utility | used in route layer, not renderer body composition |

## 1.3 Reusable Single Components

### High-Impact Single Components

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `SectionIntro` | `src/components/reusable/single/SectionIntro.tsx` | utility | static header block; optional badge and actions; centered or left-aligned | `badge`, `title`, `description`, `headingLevel`, `alignment`, optional actions | section intro / hierarchy control | heavy indirect and direct use; top of many custom `SectionWrapper` sections; mostly top and mid |
| `SimpleHero` | `src/components/reusable/single/SimpleHero.tsx` | hero | `SectionWrapper` + centered stack + `SectionIntro` + optional `SmartCTA` + bullet list | `badge`, `title`, `description`, `smartCta`, `list`, `backgroundColor`, `cssPrefix` | base hero for service pages | consumed through `ServiceHeroSection`; top of every service page |
| `FAQSection` | `src/components/reusable/single/FAQSection.tsx` | section | FAQ wrapper plus mapped accordion items | `badge`, `title`, `description`, `faqs`, `cssPrefix` | FAQ / objection handling | appears in bottom section of most service pages |
| `Badge` | `src/components/reusable/single/Badge.tsx` | utility | inline badge | text/style props | label / section marker | indirect throughout |
| `Button` | `src/components/reusable/single/Button.tsx` | CTA | standalone button | label, href, variant, icon and behavior props | primitive CTA control | indirect everywhere via `SmartCTA` and `SectionIntro` |
| `BulletList` | `src/components/reusable/single/BulletList.tsx` | utility | mapped list | `items` | compact supporting bullets | hero bullet lists and some CTA/meta contexts |
| `Card` | `src/components/reusable/single/Card.tsx` | layout/card | generic container | class and children props | card surface primitive | indirect via many card sections |

### Card and Item Components Used in Service Pages

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `IconBenefitCard` | `src/components/reusable/single/IconBenefitCard.tsx` | card | static card; icon + title + description + optional keywords/benefit | icon, title, description, `iconType`, optional `keywords`, optional `benefit` | benefit/value/proof card | frequent in Smart Website and custom renderer grids; top and mid |
| `FeatureChecklistCard` | `src/components/reusable/single/FeatureChecklistCard.tsx` | card | static card with mapped feature list | title, icon, features | capability card | indirect via `FeatureChecklistCardsSection`; mid |
| `ChecklistRow` | `src/components/reusable/single/ChecklistRow.tsx` | utility | single row item | row text + variant props | list item inside comparison/checklist cards | indirect |
| `ProcessStepCard` | `src/components/reusable/single/ProcessStepCard.tsx` | card | static process card | number, title, description, optional icon | process step display | indirect via `ProcessStepsSection`; mid |
| `AuditChecklistCard` | `src/components/reusable/single/AuditChecklistCard.tsx` | card | static card with mapped checks | title, description, checks, icon | audit coverage card | appears in growth/reactivation-style custom sections |
| `ScenarioSolutionCard` | `src/components/reusable/single/ScenarioSolutionCard.tsx` | card | split scenario/solution/result card | title, scenario, solution, result, icon | scenario-to-solution compare | low-frequency service use |
| `IconListCard` | `src/components/reusable/single/IconListCard.tsx` | card | icon + title + mapped features list | title, icon, features | list-style capability card | low-frequency service use |
| `IconTextCard` | `src/components/reusable/single/IconTextCard.tsx` | card | icon + title + description | icon, title, description | compact category/value block | low-frequency service use |
| `WorkflowStepCard` | `src/components/reusable/single/WorkflowStepCard.tsx` | card | structured workflow step | trigger, actions or detail props | workflow explanation | low-frequency service use |
| `BeforeAfterMetricCard` | `src/components/reusable/single/BeforeAfterMetricCard.tsx` | card | before/after metric split | metric and label props | outcome/proof card | niche service use |
| `AlertCard` | `src/components/reusable/single/AlertCard.tsx` | card | alert block | title, description, tone props | warning/implementation risk | niche service use |
| `LinkCard` | `src/components/reusable/single/LinkCard.tsx` | card | linked card | title, description, href | navigation/action card | niche service use |
| `CenteredFeatureCard` | `src/components/reusable/single/CenteredFeatureCard.tsx` | card | centered icon/title/description | centered feature props | centered value card | niche service use |
| `RiskListCard` | `src/components/reusable/single/RiskListCard.tsx` | card | title + mapped issue list | title, issues | risk framing | niche service use |
| `ProblemSolutionSplitCard` | `src/components/reusable/single/ProblemSolutionSplitCard.tsx` | card | before/after split | problem/solution props | problem framing | niche service use |

### Single Components Present But Not Meaningfully Used by Service Renderers

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `SplitHeroSection` | `src/components/reusable/single/SplitHeroSection.tsx` | hero | split hero with visual panel | hero copy plus `visualContent`, stats, actions | feature-style hero | not used in current service renderers |
| `TestimonialCard` | `src/components/reusable/single/TestimonialCard.tsx` | card | testimonial card | quote, name, role, rating | proof/testimonial | not directly used in current service renderers |
| `CaseStudyCard` | `src/components/reusable/single/CaseStudyCard.tsx` | card | case-study card | case-study preview props | proof/navigation | not used in service renderers |
| `DetailedStepCard` | `src/components/reusable/single/DetailedStepCard.tsx` | card | detailed step item | step, action, result props | detailed process explanation | not used in service renderers |
| `ActionStepCard`, `ChecklistItem`, `Callout`, `HighlightCard`, `ProblemCard`, `CostRoiCard`, `SolutionDetailCard`, `RelatedSectionCTA`, `AlertList` | various | card/utility | specialized static or mapped patterns | specialized props | niche domain support | not materially used in current service renderers |

## 1.4 Reusable Core Sections

### Core Sections Used Repeatedly in Service Renderers

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `ProblemCardsSection` | `src/components/reusable/sections/core/ProblemCardsSection.tsx` | section | `SectionWrapper` + `SectionIntro` + mapped cards | badge/title/description + `painPoints` arrays and labels | foundation/problem framing | high frequency; mostly immediately below hero |
| `ProcessStepsSection` | `src/components/reusable/sections/core/ProcessStepsSection.tsx` | section | `SectionWrapper` + `SectionIntro` + `CardGrid` of mapped `ProcessStepCard`s | badge/title/description + `steps`, `columns` | process / implementation flow | high frequency; mid-page |
| `ServiceSpectrumCardsSection` | `src/components/reusable/sections/core/ServiceSpectrumCardsSection.tsx` | section | `SectionWrapper` + `SectionIntro` + mapped cards | title, description, `cards` | capability/proof/spectrum display | high frequency; mid-page and proof |
| `StackedFeatureListSection` | `src/components/reusable/sections/core/StackedFeatureListSection.tsx` | section | split stacked layout; mapped feature rail plus narrative column | heading props + `features`, `tagline`, `narrativeTitle`, `narrativeParagraphs` | positioning / bridge / narrative support | high frequency; mid-page |
| `ComparisonSection` | `src/components/reusable/sections/core/ComparisonSection.tsx` | section | `SectionWrapper` + optional `SectionIntro` + 2-column mapped cards | title, description, `comparisons` | before/after comparison | common mid-page or qualification-prep |
| `DualToneChecklistComparisonSection` | `src/components/reusable/sections/core/DualToneChecklistComparisonSection.tsx` | section | dual-column split comparison | title/description + `leftColumn` and `rightColumn` | qualification / fit-vs-not-fit | common bottom-third section |
| `FeatureChecklistCardsSection` | `src/components/reusable/sections/core/FeatureChecklistCardsSection.tsx` | section | `SectionWrapper` + intro + mapped feature cards | headings + `featureCategories`, `columns` | capability cluster | mid-page |
| `ChecklistCardsSection` | `src/components/reusable/sections/core/ChecklistCardsSection.tsx` | section | intro + mapped checklist cards | headings + `items`, `columns` | included items / deliverables | mid-page |
| `TechnologyCardsSection` | `src/components/reusable/sections/core/TechnologyCardsSection.tsx` | section | intro + mapped technology cards | headings + `cards` or items | technology stack / stack proof | low but recurring |
| `OperationalShiftCardsSection` | `src/components/reusable/sections/core/OperationalShiftCardsSection.tsx` | section | mapped before/after or shift cards | shift items and headings | operational contrast / problem framing | used by CRM and related operational pages |
| `IconBenefitCardsSection` | `src/components/reusable/sections/core/IconBenefitCardsSection.tsx` | section | intro + mapped benefit cards grid | headings + `items` | benefit grid | low-frequency service use |

### Core Sections Available but Rare or Unused in Service Renderers

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `TierCardsSection` | `src/components/reusable/sections/core/TierCardsSection.tsx` | section | intro + mapped pricing/offer tiers | title, description, `packages`, optional `smartCta` | tier/package display | not used in current service renderers |
| `GenericCardsSection` | `src/components/reusable/sections/core/GenericCardsSection.tsx` | section | general card grid | headings + generic items | flexible card grid | not materially used |
| `ScenarioCardsSection` | `src/components/reusable/sections/core/ScenarioCardsSection.tsx` | section | mapped scenarios | scenario arrays | scenario grid | not materially used |
| `NarrativeStatsSection` | `src/components/reusable/sections/core/NarrativeStatsSection.tsx` | section | split narrative + stats | narrative plus stats arrays | narrative-led proof | not used in service renderers |
| `DarkSplitShowcaseSection` | `src/components/reusable/sections/core/DarkSplitShowcaseSection.tsx` | section | dark split showcase with two fixed panels | intro, actions, `panels` | high-contrast showcase | not used in service renderers |
| `TabbedFeatureCardsSection` | `src/components/reusable/sections/core/TabbedFeatureCardsSection.tsx` | section | tabs + mapped cards | tab labels and card arrays | tabbed exploration | not used in service renderers |
| `ImageAccordionStripSection` | `src/components/reusable/sections/core/ImageAccordionStripSection.tsx` | section | accordion strip with images | accordion item arrays | interactive showcase | not used in service renderers |
| `TestimonialSpotlightSplitSection` | `src/components/reusable/sections/core/TestimonialSpotlightSplitSection.tsx` | section | split testimonial narrative | testimonial and narrative props | testimonial-led proof | not used in service renderers |
| `OptionComparisonSection`, `RelatedCardsSection`, `CaseStudyCardsSection`, `LinkedIconCardsSection`, `ContentCardsGridSection`, `IconInfoCardsSection`, `DualFeatureCardsSection`, `FeatureStatsMockupSection`, `StepCardsSplitSection`, `ImageStatsServicesSection`, `AutoRelatedContentCardsSection`, `ExploreCardsSection`, `FaqAccordionSection` | various | section | specialized grid, split, or accordion structures | specialized arrays and headings | specialized showcase/content blocks | absent from current service renderer layer |

## 1.5 Service Sections

| Name | File Path | Category | JSX Structure | Props Structure | Visual Role | Service Renderer Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `ServiceHeroSection` | `src/components/reusable/sections/service/ServiceHeroSection.tsx` | section | thin wrapper over `SimpleHero` | mirrors `SimpleHero` props | service hero abstraction | every service renderer; top |
| `ServiceCTASection` | `src/components/reusable/sections/service/ServiceCTASection.tsx` | CTA | service CTA wrapper | title, description, actions | footer CTA abstraction | not the dominant CTA pattern in current service renderers because `SmartCTA` is usually called directly |

## 1.6 Feature Sections

These are scanner-registered and previewed, but they are not part of the service renderer composition layer.

| Components |
| --- |
| `FeatureHeroSection`, `FeatureBenefitsSection`, `FeatureCapabilitiesSection`, `FeatureUseCasesSection`, `FeaturePainPointsSection`, `FeatureIconCardsSection`, `FeatureProcessStepsSection`, `FeatureCTASection` |

Structural notes:

- all are section-level wrappers over stable heading + mapped-card or mapped-step patterns
- most follow the same `SectionWrapper` plus `SectionIntro` plus mapped-content structure as the service-core sections
- service renderer usage: none directly

## 1.7 Industry Sections

These are scanner-registered and previewed, but not used inside service renderers.

| Components |
| --- |
| `IndustryHeroSection`, `IndustryChallengesSection`, `IndustryComparisonSection`, `IndustryChecklistSection`, `IndustryPathwaysSection`, `IndustryPackagesSection`, `IndustryProcessSection`, `IndustrySpectrumSection`, `IndustryCaseStudiesSection`, `IndustryExploreSection`, `IndustryFAQSection`, `IndustryCTASection`, `IndustryOperatingPatternsSection`, `IndustryWorkflowExamplesSection`, `IndustryServiceEnvironmentsSection`, `IndustrySolutionsSection` |

Structural notes:

- these extend the same card-grid, comparison, FAQ, and process archetypes into industry-specific wrappers
- service renderer usage: none directly

## 1.8 Resource Sections

| Components |
| --- |
| `ResourceBusinessCostsSection`, `ResourceCaseSection`, `ResourceChecklistSection`, `ResourceComparisonSection`, `ResourceDIYSection`, `ResourceFAQSection`, `ResourceProblemSection`, `ResourceSectionHeader`, `ResourceSolutionsSection`, `ResourceTakeawaysSection`, `ResourceTemplatesSection` |

Structural notes:

- resource sections are more content-rich and article-oriented than service renderers
- they still rely on the same stable building blocks: intros, mapped lists, comparisons, checklists, cases
- service renderer usage: none directly

## 1.9 Blog Sections

| Components |
| --- |
| `BlogChecklistSection`, `BlogImageSection`, `BlogQuoteSection`, `BlogStepsSection`, `BlogTakeawaysSection` |

Structural notes:

- blog sections are content-first and simpler than service sections
- service renderer usage: none directly

## 1.10 Case-Study Sections

| Components |
| --- |
| `CaseStudyHeroSection`, `CaseStudyProblemSection`, `CaseStudySolutionSection`, `CaseStudyMetricsSection`, `CaseStudyResultsSection`, `CaseStudyFeaturesSection`, `CaseStudyProcessSection`, `CaseStudyDeliverablesSection`, `CaseStudyBusinessImpactSection`, `CaseStudyInvestmentSection`, `CaseStudyWorkflowsSection`, `CaseStudyFAQSection`, `CaseStudyCTASection`, `CaseStudyMoreSection` |

Structural notes:

- case-study sections are more proof-oriented and outcome-led
- they rely on the same mapped-card and section-intro vocabulary but are not currently part of service renderer composition

---

## 2. Layout Patterns

## 2.1 Stable Structural Archetypes

### Pattern A: Intro + Grid

Canonical shape:

`SectionWrapper` -> `SectionIntro` -> mapped cards/grid

Typical component realizations:

- `ProblemCardsSection`
- `FeatureChecklistCardsSection`
- `ChecklistCardsSection`
- `ServiceSpectrumCardsSection`
- `IconBenefitCardsSection`
- custom renderer sections using `SectionWrapper` + `SectionIntro` + `IconBenefitCard` / `WorkflowStepCard` / `IconListCard`

Role:

- the dominant section pattern across the system
- used for benefits, use cases, proof, included scope, concerns, technology, workflows, and audit areas

### Pattern B: Intro + Two-Column Comparison

Canonical shape:

`SectionWrapper` -> `SectionIntro` -> two mapped columns/cards

Typical component realizations:

- `ComparisonSection`
- `DualToneChecklistComparisonSection`

Role:

- before/after framing
- qualification framing
- fit-vs-not-fit framing

### Pattern C: Hero + CTA + Bullet Support

Canonical shape:

`SectionWrapper` -> centered stack -> `SectionIntro` -> `SmartCTA` -> optional bullet list

Typical component realization:

- `SimpleHero`
- `ServiceHeroSection`

Role:

- BOFU service-page entry point

### Pattern D: Split Narrative + Structured Features

Canonical shape:

section shell -> mapped feature rail or cards on one side + narrative title/paragraphs on the other

Typical component realization:

- `StackedFeatureListSection`

Role:

- bridge from feature list to strategic narrative
- positioning or “what changes” section

### Pattern E: Process Grid

Canonical shape:

`SectionWrapper` -> `SectionIntro` -> mapped numbered cards

Typical component realization:

- `ProcessStepsSection`

Role:

- implementation sequence
- workflow sequence

## 2.2 Real Renderer Layout Vocabulary

The service renderers are not using the full component inventory evenly. Their active vocabulary is mostly:

- `ServiceHeroSection`
- `ProblemCardsSection`
- `ServiceSpectrumCardsSection`
- `StackedFeatureListSection`
- `ProcessStepsSection`
- `FeatureChecklistCardsSection`
- `ComparisonSection`
- `DualToneChecklistComparisonSection`
- `FAQSection`
- `SmartCTA`
- custom `SectionWrapper` + `SectionIntro` + mapped single-card blocks

This means the effective service-page system is narrower than the total reusable library.

---

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
- `MarketingAutomationSetupRenderer`
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
- `MarketingAutomationSetupRenderer`
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