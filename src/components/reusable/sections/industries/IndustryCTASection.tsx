import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/system/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */
export type IndustryCTASectionProps = Pick<
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

export function IndustryCTASection(props: IndustryCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
