import type { PrimaryCTASectionProps } from '@/components/sections/PrimaryCTASection';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';

/**
 * Domain wrapper for PrimaryCTASection that keeps service page composition naming consistent.
 */
export type ServicePrimaryCTASectionProps = Pick<
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

export function ServicePrimaryCTASection(props: ServicePrimaryCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
