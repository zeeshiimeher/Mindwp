# DESIGN SYSTEM ARCHITECTURE
STATUS: CONSOLIDATED

## 1. Component Philosophy

### Reusability rules

- Reusable UI is governed by:
  - `src/global/` (site chrome)
  - `src/components/reusable/` (components + sections)
- For page chunks (hero, benefits, steps, FAQ, CTA), use `src/components/reusable/sections/*` first.
- For reusable building blocks (card, header, accordion, hero), use `src/components/reusable/single/*` first.
- Prefer data-driven composition (arrays/props) over hardcoded JSX.
- Reusable sections default to server-first unless true interactivity is required.
- Interactive behavior (tabs, accordions, menus, retry buttons) must be isolated to micro client islands.
- Reusable BEM blocks are prefixed (for example `c-*`) to avoid collisions with page-specific blocks.

### Composition model

- Preferred composition path:
  1. Build reusable component in `single/*`.
  2. Wrap as reusable section in `sections/<domain>/*`.
- Controlled variation is allowed by section mix, order, density, and hero type (`SimpleHero` vs `EnhancedHero`).
- Route files (`app/**/page.tsx`) must remain Server Components.
- No domain section may introduce route-level `use client`.

### Domain-bound components

- Domain-level sections (`service/*`, `features/*`, `industries/*`) are domain-friendly contracts for readability and stable composition.
- Domain-level sections must remain thin wrappers/re-exports over core or single components.
- Stable domain naming is preserved even when underlying core components are refactored.
- Domain wrappers exist to prevent ad-hoc component selection drift.

## 2. Section-Level Architecture

### Page section hierarchy

- Site chrome layer:
  - `src/global/Header.tsx`
  - `src/global/Footer.tsx`
  - `src/global/Logo.tsx`
- Building block layer:
  - `src/components/reusable/single/*`
- Section layer:
  - `src/components/reusable/sections/core/*` (domain-neutral)
  - `src/components/reusable/sections/service/*`
  - `src/components/reusable/sections/features/*`
  - `src/components/reusable/sections/industries/*`
  - `src/components/reusable/sections/resources/*`
  - `src/components/reusable/sections/blog/*`
  - `src/components/reusable/sections/case-studies/*`

### Smart Website dominance alignment

- Section composition must preserve page-level strategic hierarchy from locked architecture docs.
- Section wrappers are contracts to avoid flattening hierarchy into generic brochure composition.
- Domain wrappers enforce default section choices so pages remain structurally consistent.

### Section composition constraints

- Sections root exports are centralized in `src/components/reusable/sections/index.ts`.
- Core sections are the default implementation layer; domain sections wrap/alias core where possible.
- Homepage sections domain currently has no exports (`src/components/reusable/sections/homepage/index.ts`).
- Resources use structured section rendering patterns and content extraction helpers where defined.
- Do not move domain logic into shared site chrome.

## 3. Component Catalog

Generated inventory source: `global-components-catalog.md`.

### Core components

From `src/components/reusable/single/index.ts`:
- `Badge`
- `BulletList`
- `BusinessUseCaseCard`
- `Button`
- `Callout`
- `CaseStudyCard`
- `CenteredIconCard`
- `ChecklistItem`
- `ChecklistSimple`
- `CTASection`
- `DIYStepCard`
- `EnhancedHero`
- `ErrorBoundary`
- `ErrorCard`
- `FAQSection`
- `FeatureCard`
- `FeatureListCard`
- `HowItWorksStepCard`
- `IconCard`
- `LinkCard`
- `PainPointCard`
- `ProblemSolutionCard`
- `ResultsComparisonCard`
- `SectionHeader`
- `SimpleHero`
- `StepCard`
- `TestimonialCard`
- `UseCaseCard`
- `WorkflowCard`

From `src/components/reusable/sections/core/index.ts`:
- `BenefitsSection`
- `CardsSection`
- `CaseStudyCardsSection`
- `ChecklistSection`
- `ComparisonSection`
- `ContentGridSection`
- `ExploreCardsSection`
- `FeatureCategoriesSection`
- `IconCardsSection`
- `LinkedIconCardsSection`
- `PackagesSection`
- `PainPointsSection`
- `PlatformComparisonSection`
- `ProcessStepsSection`
- `RelatedCardsSection`
- `SimpleFAQSection`
- `TechnologiesSection`
- `UseCasesSection`

### Layout components

Site chrome (`src/global/*`):
- `Header`
- `Footer`
- `Logo`

Domain section catalogs:

Blog (`src/components/reusable/sections/blog/index.ts`):
- `BlogChecklistSection`
- `BlogImageSection`
- `BlogQuoteSection`
- `BlogStepsSection`
- `BlogTakeawaysSection`

Case studies (`src/components/reusable/sections/case-studies/index.ts`):
- `CaseStudyCTASection`
- `CaseStudyFAQSection`
- `CaseStudyHeroSection`
- `CaseStudyMoreSection`

Features (`src/components/reusable/sections/features/index.ts`):
- `FeatureHeroSection`
- `FeatureBenefitsSection`
- `FeatureCapabilitiesSection`
- `FeatureProcessStepsSection`
- `FeatureUseCasesSection`
- `FeatureExploreSection`
- `FeatureCTASection`
- `FeatureIconCardsSection`
- `FeaturePainPointsSection`

Industries (`src/components/reusable/sections/industries/index.ts`):
- `IndustryHeroSection`
- `IndustryChallengesSection`
- `IndustrySolutionsSection`
- `IndustryComparisonSection`
- `IndustryPackagesSection`
- `IndustryExploreSection`
- `IndustryCaseStudiesSection`
- `IndustryFAQSection`
- `IndustryCTASection`

Resources (`src/components/reusable/sections/resources/index.ts`):
- `ResourceBusinessCostsSection`
- `ResourceCaseSection`
- `ResourceChecklistSection`
- `ResourceDIYSection`
- `ResourceProblemSection`
- `ResourceSectionHeader`
- `ResourceSolutionsSection`
- `ResourceTakeawaysSection`
- `ResourceTemplatesSection`

Service (`src/components/reusable/sections/service/index.ts`):
- `ServiceCTASection`
- `ServiceHeroSection`

### Utility components

Shared utility/runtime components used in reusable architecture:
- `ErrorBoundary`
- `ErrorCard`
- `Callout`
- `ChecklistItem`
- `SectionHeader`

Site-wide utility layer:
- `src/global/site-wide/` for system-level script injection helpers, runtime helpers, and required system-level client islands.

## 4. Naming & File Structure Rules

- Component files use PascalCase TypeScript component files (`<Component>.tsx`).
- Domain page wrappers/sections keep domain-prefixed naming (`Service*`, `Feature*`, `Industry*`, `Resource*`, `Blog*`, `CaseStudy*`).
- Reusable section exports are controlled by domain index barrels under `src/components/reusable/sections/*/index.ts`.
- Building blocks belong in `src/components/reusable/single/`.
- Section assemblies belong in `src/components/reusable/sections/`.
- Site chrome belongs in `src/global/`.
- Styling for reusable UI stays semantic/BEM in centralized stylesheets (`src/styles/components.css` + layered styles).
- Do not hand-edit generated inventory blocks in `global-components-catalog.md`.

## 5. Expansion Constraints

- Do not introduce route-level `use client` through reusable sections.
- Keep route files server-first; isolate interactivity to micro-islands only.
- Keep domain sections thin wrappers over core/single components.
- Do not duplicate component logic across domains when a core/single component exists.
- Prefer extending data-driven section composition over one-off hardcoded page fragments.
- When adding exports or reusable components/sections, run `npm run validate:docs`.
- Refresh generated inventory using `npm run -s generate:global-inventory`.
- Maintain canonical references instead of duplicating guidance:
  - `GLOBAL-COMPONENTS-AND-SECTIONS.md`
  - `global-components-catalog.md`
## Auto-generated inventory

The section below is generated from the actual export barrels under `src/global/`.
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
| `CTASection` | `src/components/reusable/single/CTASection.tsx` |
| `DetailedStepCard` | `src/components/reusable/single/DetailedStepCard.tsx` |
| `ErrorBoundary` | `src/components/reusable/single/ErrorBoundary.tsx` |
| `FAQSection` | `src/components/reusable/single/FAQSection.tsx` |
| `FeatureChecklistCard` | `src/components/reusable/single/FeatureChecklistCard.tsx` |
| `IconBenefitCard` | `src/components/reusable/single/IconBenefitCard.tsx` |
| `IconListCard` | `src/components/reusable/single/IconListCard.tsx` |
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
| `CTASection` | `src/components/reusable/single/CTASection.tsx` |

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
| `CaseStudyCTASection` | `src/components/reusable/sections/case-studies/CaseStudyCTASection.tsx` |
| `CaseStudyFAQSection` | `src/components/reusable/sections/case-studies/CaseStudyFAQSection.tsx` |
| `CaseStudyHeroSection` | `src/components/reusable/sections/case-studies/CaseStudyHeroSection.tsx` |
| `CaseStudyMoreSection` | `src/components/reusable/sections/case-studies/CaseStudyMoreSection.tsx` |

### Sections domain: `core` (from `src/components/reusable/sections/core/index.ts`)
| Export | Source |
|---|---|
| `AutoRelatedContentCardsSection` | `src/components/reusable/sections/core/AutoRelatedContentCardsSection.tsx` |
| `CaseStudyCardsSection` | `src/components/reusable/sections/core/CaseStudyCardsSection.tsx` |
| `ChecklistCardsSection` | `src/components/reusable/sections/core/ChecklistCardsSection.tsx` |
| `ComparisonSection` | `src/components/reusable/sections/core/ComparisonSection.tsx` |
| `ContentCardsGridSection` | `src/components/reusable/sections/core/ContentCardsGridSection.tsx` |
| `DarkSplitShowcaseSection` | `src/components/reusable/sections/core/DarkSplitShowcaseSection.tsx` |
| `DualFeatureCardsSection` | `src/components/reusable/sections/core/DualFeatureCardsSection.tsx` |
| `DualToneChecklistComparisonSection` | `src/components/reusable/sections/core/DualToneChecklistComparisonSection.tsx` |
| `ExploreCardsSection` | `src/components/reusable/sections/core/ExploreCardsSection.tsx` |
| `FaqAccordionSection` | `src/components/reusable/sections/core/FaqAccordionSection.tsx` |
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
| `ProblemCardsSection` | `src/components/reusable/sections/core/ProblemCardsSection.tsx` |
| `ProcessStepsSection` | `src/components/reusable/sections/core/ProcessStepsSection.tsx` |
| `RelatedCardsSection` | `src/components/reusable/sections/core/RelatedCardsSection.tsx` |
| `ScenarioCardsSection` | `src/components/reusable/sections/core/ScenarioCardsSection.tsx` |
| `ServiceSpectrumCardsSection` | `src/components/reusable/sections/core/ServiceSpectrumCardsSection.tsx` |
| `StackedFeatureListSection` | `src/components/reusable/sections/core/StackedFeatureListSection.tsx` |
| `StepCardsSplitSection` | `src/components/reusable/sections/core/StepCardsSplitSection.tsx` |
| `TabbedFeatureCardsSection` | `src/components/reusable/sections/core/TabbedFeatureCardsSection.tsx` |
| `TechnologyCardsSection` | `src/components/reusable/sections/core/TechnologyCardsSection.tsx` |
| `TestimonialSpotlightSplitSection` | `src/components/reusable/sections/core/TestimonialSpotlightSplitSection.tsx` |
| `TierCardsSection` | `src/components/reusable/sections/core/TierCardsSection.tsx` |

### Sections domain: `features` (from `src/components/reusable/sections/features/index.ts`)
| Export | Source |
|---|---|
| `*` | `src/components/reusable/sections/features/FeatureBenefitsSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureCapabilitiesSection.tsx` |
| `*` | `src/components/reusable/sections/features/FeatureCTASection.tsx` |
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
| `*` | `src/components/reusable/sections/industries/IndustryCTASection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryExploreSection.tsx` |
| `*` | `src/components/reusable/sections/industries/IndustryFAQSection.tsx` |
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
| `ResourceSolutionsSection` | `src/components/reusable/sections/resources/ResourceSolutionsSection.tsx` |
| `ResourceTakeawaysSection` | `src/components/reusable/sections/resources/ResourceTakeawaysSection.tsx` |
| `ResourceTemplatesSection` | `src/components/reusable/sections/resources/ResourceTemplatesSection.tsx` |

### Sections domain: `service` (from `src/components/reusable/sections/service/index.ts`)
| Export | Source |
|---|---|
| `IconTextCard` | `src/components/reusable/single/IconTextCard.tsx` |
| `LinkCard` | `src/components/reusable/single/LinkCard.tsx` |
| `SectionIntro` | `src/components/reusable/single/SectionIntro.tsx` |
| `ServiceCTASection` | `src/components/reusable/sections/service/ServiceCTASection.tsx` |
| `ServiceHeroSection` | `src/components/reusable/sections/service/ServiceHeroSection.tsx` |
| `WorkflowStepCard` | `src/components/reusable/single/WorkflowStepCard.tsx` |
<!-- AUTO-GENERATED:GLOBAL-INVENTORY:END -->
