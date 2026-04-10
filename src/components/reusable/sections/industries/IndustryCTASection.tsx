import React from 'react';

import type { ButtonProps } from '@/components/reusable/single/Button';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for SmartCTA with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */
export type IndustryCTASectionProps = Pick<
  SmartCTAProps,
  | 'system'
  | 'pageType'
  | 'slug'
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
  primaryAction?: Pick<ButtonProps, 'variant'>;
};

export function IndustryCTASection({
  system,
  pageType,
  slug,
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
  return (
    <SmartCTA
      system={system}
      pageType={pageType}
      slug={slug}
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
