/**
 * Quarantined section components.
 *
 * Only PrimaryCTASection remains while unrebuilt pages still import it.
 * RelatedContentSection and SmartRelatedSection* replaced by RelatedSection
 * (src/components/navigation/RelatedSection.tsx) in Milestone 6F.
 * See docs/Planning/Legacy-dependency-map.md for deletion gates.
 *
 * Do NOT import from this module in rebuilt/new-system files.
 */

export * from './PrimaryCTASection';
export type {
  MediaSource,
  SectionAlign,
  SectionDensity,
  SectionFootnote,
  SectionHeading,
  SectionLink,
  SectionTone,
} from './types';
