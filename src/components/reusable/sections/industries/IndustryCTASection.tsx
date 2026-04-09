import React from 'react';

import type { CTASectionProps } from '@/components/reusable/single/CTASection';
import { deriveSmartCtaContextFromHref, SmartCTA } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps industry page composition naming consistent.
 */
export type IndustryCTASectionProps = CTASectionProps;

export function IndustryCTASection({
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
}: IndustryCTASectionProps) {
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
