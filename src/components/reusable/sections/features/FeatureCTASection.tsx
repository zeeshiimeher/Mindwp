import type { ButtonProps } from '@/components/reusable/single/Button';
import {
  deriveSmartCtaContextFromHref,
  SmartCTA,
  type SmartCTAProps,
} from '@/components/system/SmartCTA';

/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through SmartCTA.
 */
export type FeatureCTASectionProps = Pick<
  SmartCTAProps,
  | 'title'
  | 'description'
  | 'secondaryAction'
  | 'metaItems'
  | 'cssPrefix'
  | 'backgroundColor'
  | 'headingLevel'
  | 'wrapper'
  | 'includeContainer'
> & {
  primaryAction?: Pick<ButtonProps, 'href' | 'variant'>;
};

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
      sourceType={context.sourceType}
      slug={context.slug}
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
