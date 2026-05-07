/**
 * Quarantined section components.
 *
 * Only PrimaryCTASection remains while unrebuilt pages still import it.
 * RelatedContentSection and SmartRelatedSection* replaced by RelatedSection
 * (src/components/navigation/RelatedSection.tsx) in Milestone 6F.
 * SectionShell and types.ts deleted in Milestone 6G (inlined into PrimaryCTASection).
 * See docs/Planning/Legacy-dependency-map.md for deletion gates.
 *
 * Do NOT import from this module in rebuilt/new-system files.
 */

export * from './PrimaryCTASection';
