import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection with the existing case-study CTA prop shape.
 * Keeps case-study page composition naming consistent.
 */
export type CaseStudyPrimaryCTASectionProps = Pick<
  PrimaryCTASectionProps,
  | 'title'
  | 'description'
  | 'metaItems'
  | 'cssPrefix'
  | 'backgroundColor'
  | 'headingLevel'
  | 'wrapper'
  | 'includeContainer'
>;

export function CaseStudyPrimaryCTASection(props: CaseStudyPrimaryCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
