import React from 'react';

import type { SmartCTAProps } from '@/components/system/SmartCTA';
import { SmartCTA } from '@/components/system/SmartCTA';

/**
 * Domain wrapper for SmartCTA that keeps service page composition naming consistent.
 */
export type ServiceCTASectionProps = Pick<
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
  | 'primaryActionVariant'
> & {
  system: string;
  slug: string;
};

export function ServiceCTASection({
  system,
  slug,
  title,
  description,
  secondaryAction,
  metaItems,
  cssPrefix,
  backgroundColor,
  headingLevel,
  wrapper,
  includeContainer,
}: ServiceCTASectionProps) {
  return (
    <SmartCTA
      system={system}
      sourceType='service'
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
      primaryActionVariant={primaryActionVariant}
    />
  );
}
