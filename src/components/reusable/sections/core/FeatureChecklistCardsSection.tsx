import React from 'react';

import { FeatureChecklistCard, SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-feature-checklist-cards-section';

type FeatureIcon = React.ComponentType<{ className?: string }>;

type FeatureCategory = {
  title: string;
  description?: string;
  icon?: FeatureIcon;
  features: string[];
  label?: string;
  iconType?: 'primary' | 'secondary' | 'accent' | 'purple' | 'teal' | 'amber' | 'dark';
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
  const columnsClass =
    columns === 2
      ? `${BLOCK}__grid--cols-2`
      : columns === 3
        ? `${BLOCK}__grid--cols-3`
        : `${BLOCK}__grid--cols-4`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />
        <div className={cn(`${BLOCK}__grid`, columnsClass)}>
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
        </div>
      </div>
    </section>
  );
}
