import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/system/PrimaryCTASection';

/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through PrimaryCTASection.
 */
export type FeatureCTASectionProps = Pick<
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

export function FeatureCTASection(props: FeatureCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
