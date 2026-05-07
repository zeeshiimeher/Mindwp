/**
 * Quarantined section components.
 *
 * Only PrimaryCTASection and RelatedContentSection remain.
 * These are kept while unrebuilt pages still import them.
 * See docs/Planning/Legacy-dependency-map.md for deletion gates.
 *
 * Do NOT import from this module in rebuilt/new-system files.
 */

export * from './PrimaryCTASection';
export * from './RelatedContentSection';
export type {
  BulletItem,
  MediaSource,
  SectionAlign,
  SectionDensity,
  SectionFootnote,
  SectionHeading,
  SectionLink,
  SectionTone,
} from './types';
