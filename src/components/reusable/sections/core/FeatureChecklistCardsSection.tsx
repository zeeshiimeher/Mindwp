import React from 'react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { FeatureChecklistCard, SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';
import type { VariantType } from '@/lib/ui/variantStyles';

const BLOCK = 'c-feature-checklist-cards-section';

type FeatureIcon = React.ComponentType<{ className?: string }>;

type FeatureCategory = {
  title: string;
  description?: string;
  icon?: FeatureIcon;
  features: string[];
  label?: string;
  iconType?: VariantType;
};

export interface FeatureChecklistCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  featureCategories: FeatureCategory[];
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'stacked';
  align?: 'left' | 'center';
  layout?: 'grid' | 'segmented' | 'split';
}

export function FeatureChecklistCardsSection({
  badge,
  title,
  description,
  featureCategories = [],
  backgroundColor = '',
  cssPrefix = '',
  columns = 4,
  variant = 'default',
  align = 'left',
  layout,
}: FeatureChecklistCardsSectionProps) {
  const layoutMode = layout ?? 'grid';
  const isSplitLayout = layoutMode === 'segmented' || layoutMode === 'split';

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />
      {layoutMode === 'grid' ? (
        <CardGrid
          columns={columns === 3 ? 1 : columns}
          mode='controlled'
          className={columns === 3 ? 'md:l-grid-2 lg:l-grid-3' : undefined}
        >
          {featureCategories.map((feature, index) => (
            <FeatureChecklistCard
              key={`${feature.title}-${index}`}
              title={feature.title}
              {...(feature.description !== undefined && { description: feature.description })}
              {...(feature.icon !== undefined && { icon: feature.icon })}
              features={feature.features}
              {...(feature.label !== undefined && { label: feature.label })}
              {...(feature.iconType !== undefined && { iconType: feature.iconType })}
              variant={variant}
              align={align}
            />
          ))}
        </CardGrid>
      ) : isSplitLayout ? (
        <div className={`${BLOCK}__segments l-stack l-gap-8`}>
          {featureCategories.map((feature, index) => (
            <section key={`${feature.title}-${index}`} className={`${BLOCK}__segment`}>
              <h3 className={`${BLOCK}__segment-title`}>{feature.title}</h3>
              {feature.description && (
                <p className={`${BLOCK}__segment-description`}>{feature.description}</p>
              )}
              <FeatureChecklistCard
                title={feature.title}
                {...(feature.description !== undefined && { description: feature.description })}
                {...(feature.icon !== undefined && { icon: feature.icon })}
                features={feature.features}
                {...(feature.label !== undefined && { label: feature.label })}
                {...(feature.iconType !== undefined && { iconType: feature.iconType })}
                variant={variant}
                align={align}
                cssPrefix={`${BLOCK}__segment-card`}
              />
            </section>
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}
