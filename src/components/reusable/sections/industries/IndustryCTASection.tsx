import React from 'react';

import type { ButtonProps } from '@/components/reusable/single/Button';
import {
  deriveSmartCtaContextFromHref,
  SmartCTA,
  type SmartCTAProps,
} from '@/components/system/SmartCTA';

/**
 * Domain wrapper for SmartCTA with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */
export type IndustryCTASectionProps = Pick<
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
