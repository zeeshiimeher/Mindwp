import React from 'react';

import type { CTASectionProps } from '@/components/reusable/single/CTASection';
import { deriveSmartCtaContextFromHref, SmartCTA } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps case-study page composition naming consistent.
 */
export type CaseStudyCTASectionProps = CTASectionProps;

export function CaseStudyCTASection({
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
}: CaseStudyCTASectionProps) {
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
