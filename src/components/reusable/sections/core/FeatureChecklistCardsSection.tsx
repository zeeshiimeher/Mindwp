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

interface FeatureCategoriesSectionProps {
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
}: FeatureCategoriesSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />
      <CardGrid
        columns={columns === 3 ? 1 : columns}
        mode='controlled'
        className={cn(
          `${BLOCK}__grid`,
          `${BLOCK}__grid--cols-${columns}`,
          columns === 3 && 'md:l-grid-2 lg:l-grid-3'
        )}
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
    </SectionWrapper>
  );
}
