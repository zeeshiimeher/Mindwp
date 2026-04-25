import type { PrimaryCTASectionProps } from '@/components/system/PrimaryCTASection';
import { PrimaryCTASection } from '@/components/system/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection that keeps service page composition naming consistent.
 */
export type ServiceCTASectionProps = Pick<
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

export function ServiceCTASection(props: ServiceCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
