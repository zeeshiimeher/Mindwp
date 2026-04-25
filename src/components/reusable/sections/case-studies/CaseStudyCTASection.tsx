import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/system/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection with the existing case-study CTA prop shape.
 * Keeps case-study page composition naming consistent.
 */
export type CaseStudyCTASectionProps = Pick<
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

export function CaseStudyCTASection(props: CaseStudyCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
