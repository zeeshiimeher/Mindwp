// Service section exports.
// Re-exports core sections to keep service-page import paths stable.

export {
  ChecklistCardsSection,
  ComparisonSection,
  ContentCardsGridSection,
  ExploreCardsSection,
  FeatureChecklistCardsSection,
  GenericCardsSection,
  IconBenefitCardsSection,
  IconInfoCardsSection,
  OperationalShiftCardsSection,
  OptionComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
  RelatedCardsSection,
  ScenarioCardsSection,
  TechnologyCardsSection,
} from '../core';

// Service-specific aliases (kept for page composition readability)
export { IconTextCard } from '../../single/IconTextCard';
export { LinkCard } from '../../single/LinkCard';
export { SectionIntro } from '../../single/SectionIntro';
export { WorkflowStepCard } from '../../single/WorkflowStepCard';
export { ServiceHeroSection } from './ServiceHeroSection';

// Types
export type { ServiceBenefitItem } from '../../single/IconBenefitCard';
