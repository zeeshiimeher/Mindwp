import type { CTASectionProps } from '@/components/reusable/single/CTASection';
import { deriveSmartCtaContextFromHref, SmartCTA } from '@/components/system/SmartCTA';

/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through SmartCTA.
 */
export type FeatureCTASectionProps = CTASectionProps;

export function FeatureCTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  metaItems,
  cssPrefix,
  backgroundColor,
  headingLevel,
  wrapper,
  includeContainer,
}: FeatureCTASectionProps) {
  const context = deriveSmartCtaContextFromHref(primaryAction?.href);

  return (
    <SmartCTA
      system={context.system}
      source={context.source}
      title={title}
      description={description}
      secondaryAction={secondaryAction}
      metaItems={metaItems}
      cssPrefix={cssPrefix}
      backgroundColor={backgroundColor}
      headingLevel={headingLevel}
      wrapper={wrapper}
      includeContainer={includeContainer}
      primaryActionVariant={primaryAction?.variant}
    />
  );
}
