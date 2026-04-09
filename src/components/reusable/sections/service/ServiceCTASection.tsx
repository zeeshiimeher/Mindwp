import React from 'react';

import type { CTASectionProps } from '@/components/reusable/single/CTASection';
import { deriveSmartCtaContextFromHref, SmartCTA } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps service page composition naming consistent.
 */
export type ServiceCTASectionProps = CTASectionProps;

export function ServiceCTASection({
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
}: ServiceCTASectionProps) {
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
