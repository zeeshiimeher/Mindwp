import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */
export type IndustryPrimaryCTASectionProps = Pick<
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

export function IndustryPrimaryCTASection(props: IndustryPrimaryCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
