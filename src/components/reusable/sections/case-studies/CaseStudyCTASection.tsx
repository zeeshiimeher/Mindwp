import React from 'react';

import type { ButtonProps } from '@/components/reusable/single/Button';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for SmartCTA with the existing case-study CTA prop shape.
 * Keeps case-study page composition naming consistent.
 */
export type CaseStudyCTASectionProps = Pick<
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

export function CaseStudyCTASection({
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
}: CaseStudyCTASectionProps) {
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
