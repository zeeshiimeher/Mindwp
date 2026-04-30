import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';

/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through PrimaryCTASection.
 */
export type FeaturePrimaryCTASectionProps = Pick<
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

export function FeaturePrimaryCTASection(props: FeaturePrimaryCTASectionProps) {
  return <PrimaryCTASection {...props} />;
}
