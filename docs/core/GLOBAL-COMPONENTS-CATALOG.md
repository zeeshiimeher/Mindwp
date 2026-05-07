# Global Components Catalog (Legacy Reusable Inventory — QUARANTINE)

> **⚠ QUARANTINE — Removed from active pipeline. Not live component authority.**
>
> Milestone 6K: `generate-global-inventory` has been removed from `predev`, `generate:dev`,
> `generate:all`, and `validate:docs`. This file is no longer auto-generated in the active pipeline.
> It exists as a forensic snapshot only.
>
> This file is a legacy inventory of `src/components/reusable` — a quarantine/delete-later folder.
> Components listed here are NOT approved architecture for new or rebuilt pages.
> They exist only to keep unrebuilt old pages rendering while the hard reset continues.
>
> For current component architecture, see:
> - [../Planning/System-hard-reset.md](../Planning/System-hard-reset.md) — active build rules and component strategy
> - [../Planning/Legacy-dependency-map.md](../Planning/Legacy-dependency-map.md) — live deletion map and delete gates
>
> **Current approved component folders:**
> - `src/components/layout/` — SectionFrame, HeroFrame
> - `src/components/primitives/` — Accordion, Tabs, InlineText, SignalDot, StatusBadge
> - `src/components/conversion/` — DecisionPanel
> - `src/components/navigation/` — RelatedSection
> - `src/components/content/` — FAQSection
> - `src/global/` — Header, Footer, Logo
>
> `src/components/reusable` and `src/components/sections` will be deleted when all consuming pages are rebuilt.

---

This file is a **generated export inventory** for legacy reusable UI components.

Do not hand-edit inside the `AUTO-GENERATED` block.

Run `npm run -s generate:global-inventory` to regenerate (reads quarantine folder — for tracking purposes only, not for new work reference).

---

## Auto-generated inventory

The section below is generated from the actual export barrels under `src/global/` and `src/components/reusable/`.
Run: `npm run -s generate:global-inventory`

<!-- AUTO-GENERATED:GLOBAL-INVENTORY:START -->
### Site chrome
| Export | Source |
|---|---|
| `Header` | `src/global/Header.tsx` |
| `Footer` | `src/global/Footer.tsx` |
| `Logo` | `src/global/Logo.tsx` |

### Components (from `src/components/reusable/single/index.ts`)
| Export | Source |
|---|---|
| `ActionStepCard` | `src/components/reusable/single/ActionStepCard.tsx` |
| `AlertCard` | `src/components/reusable/single/AlertCard.tsx` |
| `Badge` | `src/components/reusable/single/Badge.tsx` |
| `BeforeAfterMetricCard` | `src/components/reusable/single/BeforeAfterMetricCard.tsx` |
| `BulletList` | `src/components/reusable/single/BulletList.tsx` |
| `Button` | `src/components/reusable/single/Button.tsx` |
| `Callout` | `src/components/reusable/single/Callout.tsx` |
| `CaseStudyCard` | `src/components/reusable/single/CaseStudyCard.tsx` |
| `CenteredFeatureCard` | `src/components/reusable/single/CenteredFeatureCard.tsx` |
| `ChecklistItem` | `src/components/reusable/single/ChecklistItem.tsx` |
| `ChecklistRow` | `src/components/reusable/single/ChecklistRow.tsx` |
| `CostRoiCard` | `src/components/reusable/single/CostRoiCard.tsx` |
| `DetailedStepCard` | `src/components/reusable/single/DetailedStepCard.tsx` |
| `ErrorBoundary` | `src/components/reusable/single/ErrorBoundary.tsx` |
| `FAQSection` | `src/components/reusable/single/FAQSection.tsx` |
| `FeatureChecklistCard` | `src/components/reusable/single/FeatureChecklistCard.tsx` |
| `IconBenefitCard` | `src/components/reusable/single/IconBenefitCard.tsx` |
| `IconListCard` | `src/components/reusable/single/IconListCard.tsx` |
| `IconRow` | `src/components/reusable/single/IconRow.tsx` |
| `IconTextCard` | `src/components/reusable/single/IconTextCard.tsx` |
| `LinkCard` | `src/components/reusable/single/LinkCard.tsx` |
| `ProblemCard` | `src/components/reusable/single/ProblemCard.tsx` |
| `ProblemSolutionSplitCard` | `src/components/reusable/single/ProblemSolutionSplitCard.tsx` |
| `ProcessStepCard` | `src/components/reusable/single/ProcessStepCard.tsx` |
| `ScenarioSolutionCard` | `src/components/reusable/single/ScenarioSolutionCard.tsx` |
| `SectionIntro` | `src/components/reusable/single/SectionIntro.tsx` |
| `SimpleHero` | `src/components/reusable/single/SimpleHero.tsx` |
| `SplitHeroSection` | `src/components/reusable/single/SplitHeroSection.tsx` |
| `TestimonialCard` | `src/components/reusable/single/TestimonialCard.tsx` |
| `WorkflowStepCard` | `src/components/reusable/single/WorkflowStepCard.tsx` |

### Sections root (from `src/components/reusable/sections/index.ts`)
| Export | Source |
|---|---|
| `*` | `src/components/reusable/sections/core` |
| `*` | `src/components/reusable/sections/service` |
| `*` | `src/components/reusable/sections/resources` |
| `*` | `src/components/reusable/sections/features` |
| `*` | `src/components/reusable/sections/industries` |
| `*` | `src/components/reusable/sections/blog` |
| `*` | `src/components/reusable/sections/case-studies` |
| `*` | `src/components/reusable/sections/homepage` |
| `*` | `src/components/reusable/sections/resources/contentExtraction.ts` |
| `Callout` | `src/components/reusable/single/Callout.tsx` |

### Sections domain: `blog` (from `src/components/reusable/sections/blog/index.ts`)
| Export | Source |
|---|---|
| `BlogChecklistSection` | `src/components/reusable/sections/blog/BlogChecklistSection.tsx` |
| `BlogImageSection` | `src/components/reusable/sections/blog/BlogImageSection.tsx` |
| `BlogQuoteSection` | `src/components/reusable/sections/blog/BlogQuoteSection.tsx` |
| `BlogStepsSection` | `src/components/reusable/sections/blog/BlogStepsSection.tsx` |
| `BlogTakeawaysSection` | `src/components/reusable/sections/blog/BlogTakeawaysSection.tsx` |

### Sections domain: `case-studies` (from `src/components/reusable/sections/case-studies/index.ts`)
| Export | Source |
|---|---|
| `CaseStudyHeroSection` | `src/components/reusable/sections/case-studies/CaseStudyHeroSection.tsx` |
| `CaseStudyMoreSection` | `src/components/reusable/sections/case-studies/CaseStudyMoreSection.tsx` |

### Sections domain: `core` (from `src/components/reusable/sections/core/index.ts`)
| Export | Source |
|---|---|
| `AlternatingDetailRowsSection` | `src/components/reusable/sections/core/AlternatingDetailRowsSection.tsx` |
| `AutoRelatedContentCardsSection` | `src/components/reusable/sections/core/AutoRelatedContentCardsSection.tsx` |
| `CardsSectionShell` | `src/components/reusable/sections/core/CardsSectionShell.tsx` |
| `CaseStudyCardsSection` | `src/components/reusable/sections/core/CaseStudyCardsSection.tsx` |
| `ChecklistCardsSection` | `src/components/reusable/sections/core/ChecklistCardsSection.tsx` |
| `ComparisonEvidenceBand` | `src/components/reusable/sections/core/ComparisonEvidenceBand.tsx` |
| `ComparisonSection` | `src/components/reusable/sections/core/ComparisonSection.tsx` |
| `ContentCardsGridSection` | `src/components/reusable/sections/core/ContentCardsGridSection.tsx` |
| `DarkSplitShowcaseSection` | `src/components/reusable/sections/core/DarkSplitShowcaseSection.tsx` |
| `DecisionFitSection` | `src/components/reusable/sections/core/DecisionFitSection.tsx` |
| `DualFeatureCardsSection` | `src/components/reusable/sections/core/DualFeatureCardsSection.tsx` |
| `DualToneChecklistComparisonSection` | `src/components/reusable/sections/core/DualToneChecklistComparisonSection.tsx` |
| `ExploreCardsSection` | `src/components/reusable/sections/core/ExploreCardsSection.tsx` |
| `FeatureChecklistCardsSection` | `src/components/reusable/sections/core/FeatureChecklistCardsSection.tsx` |
| `FeatureStatsMockupSection` | `src/components/reusable/sections/core/FeatureStatsMockupSection.tsx` |
| `GenericCardsSection` | `src/components/reusable/sections/core/GenericCardsSection.tsx` |
| `IconBenefitCardsSection` | `src/components/reusable/sections/core/IconBenefitCardsSection.tsx` |
| `IconInfoCardsSection` | `src/components/reusable/sections/core/IconInfoCardsSection.tsx` |
| `ImageAccordionStripSection` | `src/components/reusable/sections/core/ImageAccordionStripSection.tsx` |
| `ImageStatsServicesSection` | `src/components/reusable/sections/core/ImageStatsServicesSection.tsx` |
| `LinkedIconCardsSection` | `src/components/reusable/sections/core/LinkedIconCardsSection.tsx` |
| `NarrativeStatsSection` | `src/components/reusable/sections/core/NarrativeStatsSection.tsx` |
| `OperationalShiftCardsSection` | `src/components/reusable/sections/core/OperationalShiftCardsSection.tsx` |
| `OptionComparisonSection` | `src/components/reusable/sections/core/OptionComparisonSection.tsx` |
| `OutcomeTimelineSection` | `src/components/reusable/sections/core/OutcomeTimelineSection.tsx` |
| `ProcessStepsSection` | `src/components/reusable/sections/core/ProcessStepsSection.tsx` |
| `RelatedCardsSection` | `src/components/reusable/sections/core/RelatedCardsSection.tsx` |
| `ScenarioCardsSection` | `src/components/reusable/sections/core/ScenarioCardsSection.tsx` |
| `ServiceSpectrumCardsSection` | `src/components/reusable/sections/core/ServiceSpectrumCardsSection.tsx` |
| `SignalResponseSection` | `src/components/reusable/sections/core/SignalResponseSection.tsx` |
| `StackedFeatureListSection` | `src/components/reusable/sections/core/StackedFeatureListSection.tsx` |
| `StepCardsSplitSection` | `src/components/reusable/sections/core/StepCardsSplitSection.tsx` |
| `TabbedFeatureCardsSection` | `src/components/reusable/sections/core/TabbedFeatureCardsSection.tsx` |
| `TechnologyCardsSection` | `src/components/reusable/sections/core/TechnologyCardsSection.tsx` |
| `TestimonialSpotlightSplitSection` | `src/components/reusable/sections/core/TestimonialSpotlightSplitSection.tsx` |
| `TierCardsSection` | `src/components/reusable/sections/core/TierCardsSection.tsx` |
| `TransformationProofSection` | `src/components/reusable/sections/core/TransformationProofSection.tsx` |

### Sections domain: `features` (from `src/components/reusable/sections/features/index.ts`)
| Export | Source |
|---|---|
| `*` | `src/components/reusable/sections/features/FeatureBenefitsSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureCapabilitiesSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureHeroSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureIconCardsSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeaturePainPointsSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureProcessStepsSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureUseCasesSection.tsx` |

### Sections domain: `homepage` (from `src/components/reusable/sections/homepage/index.ts`)
_No exports detected._

### Sections domain: `industries` (from `src/components/reusable/sections/industries/index.ts`)
| Export | Source |
|---|---|
| `*` | `src/components/reusable/sections/industries/IndustryCaseStudiesSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryChallengesSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryChecklistSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryComparisonSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryExploreSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryHeroSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryOperatingPatternsSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryPackagesSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryPathwaysSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryProcessSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryServiceEnvironmentsSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustrySolutionsSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustrySpectrumSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryWorkflowExamplesSection.tsx` |

### Sections domain: `resources` (from `src/components/reusable/sections/resources/index.ts`)
| Export | Source |
|---|---|
| `*` | `src/components/reusable/sections/resources/contentExtraction.ts` |
| `ResourceBusinessCostsSection` | `src/components/reusable/sections/resources/ResourceBusinessCostsSection.tsx` |
| `ResourceCaseSection` | `src/components/reusable/sections/resources/ResourceCaseSection.tsx` |
| `ResourceChecklistSection` | `src/components/reusable/sections/resources/ResourceChecklistSection.tsx` |
| `ResourceDIYSection` | `src/components/reusable/sections/resources/ResourceDIYSection.tsx` |
| `ResourceProblemSection` | `src/components/reusable/sections/resources/ResourceProblemSection.tsx` |
| `ResourceSectionHeader` | `src/components/reusable/sections/resources/ResourceSectionHeader.tsx` |
| `ResourceSectionShell` | `src/components/reusable/sections/resources/ResourceSectionShell.tsx` |
| `ResourceSolutionsSection` | `src/components/reusable/sections/resources/ResourceSolutionsSection.tsx` |
| `ResourceTakeawaysSection` | `src/components/reusable/sections/resources/ResourceTakeawaysSection.tsx` |
| `ResourceTemplatesSection` | `src/components/reusable/sections/resources/ResourceTemplatesSection.tsx` |

### Sections domain: `service` (from `src/components/reusable/sections/service/index.ts`)
| Export | Source |
|---|---|
| `IconTextCard` | `src/components/reusable/single/IconTextCard.tsx` |
| `LinkCard` | `src/components/reusable/single/LinkCard.tsx` |
| `SectionIntro` | `src/components/reusable/single/SectionIntro.tsx` |
| `ServiceHeroSection` | `src/components/reusable/sections/service/ServiceHeroSection.tsx` |
| `WorkflowStepCard` | `src/components/reusable/single/WorkflowStepCard.tsx` |
<!-- AUTO-GENERATED:GLOBAL-INVENTORY:END -->
