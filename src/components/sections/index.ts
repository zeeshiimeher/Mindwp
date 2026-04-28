/**
 * Production section component family.
 *
 * Single barrel export for renderers and page wrappers. All components
 * are data-driven (no hardcoded marketing copy) and use the new design
 * system in src/styles/{foundation,framework,primitives,components}.css.
 *
 * See docs/Planning/audit7.md PHASE 3.
 */

export * from './AccordionFAQSection';
export * from './BeforeAfterSection';
export * from './CTASection';
export * from './FitCheckSection';
export * from './GridCardsSection';
export * from './HeroSplitSection';
export type { SectionIconKey } from './icons';
export { resolveSectionIcon, SECTION_ICONS } from './icons';
export * from './ImageStorySection';
export * from './LayerStackSection';
export * from './ProcessStepsSection';
export * from './ProofStorySection';
export * from './RelatedContentSection';
export * from './ScopeSection';
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
