import React from 'react';
import { ArrowRight } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-explore-cards-section';

interface ExploreCardItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  /** Preferred: a named variant (e.g. "blue", "purple"). */
  gradient: string;
  /** Preferred: a named variant (e.g. "blue", "purple"). */
  iconBg: string;
}

interface ExploreCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  cards: ExploreCardItem[];
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  ctaLabel?: string;
  columns?: 1 | 2 | 3;
}

export function ExploreCardsSection({
  badge,
  title,
  description,
  cards = [],
  backgroundColor = '',
  cssPrefix = '',
  ctaLabel = 'Learn More',
  columns = 3,
}: ExploreCardsSectionProps) {
  const normalizeVariant = (value: string | undefined) => (value || '').toLowerCase().trim();

  const getGradientVariant = (gradient: string) => {
    const normalized = normalizeVariant(gradient);
    if (normalized === 'blue' || normalized.includes('blue')) return 'blue';
    if (normalized === 'teal' || normalized.includes('teal')) return 'teal';
    if (normalized === 'purple' || normalized.includes('purple')) return 'purple';
    if (normalized === 'amber' || normalized.includes('amber') || normalized.includes('yellow'))
      return 'amber';
    return 'default';
  };

  const getIconVariant = (iconBg: string) => {
    const normalized = normalizeVariant(iconBg);
    if (normalized === 'blue' || normalized.includes('blue')) return 'blue';
    if (normalized === 'teal' || normalized.includes('teal')) return 'teal';
    if (normalized === 'purple' || normalized.includes('purple')) return 'purple';
    if (normalized === 'amber' || normalized.includes('amber') || normalized.includes('yellow'))
      return 'amber';
    return 'primary';
  };

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <CardGrid
        columns={columns}
        gap={6}
        mode='controlled'
      >
        {cards.map((card, index) => {
          const gradientVariant = getGradientVariant(card.gradient);
          const iconVariant = getIconVariant(card.iconBg);

          const cardGradientClass = `${BLOCK}__card--gradient-${gradientVariant}`;
          const iconToneClass = `${BLOCK}__icon--${iconVariant}`;

          return (
            <Card key={`${card.href}-${index}`} className={cn(`${BLOCK}__card`, cardGradientClass)}>
              <div className={cn(`${BLOCK}__icon`, iconToneClass)}>
                <card.icon className={`${BLOCK}__icon-svg`} />
              </div>

              <h4 className={`${BLOCK}__title`}>{card.title}</h4>

              <p className={`${BLOCK}__description`}>{card.description}</p>

              <Button
                href={card.href}
                variant='outline'
                label={ctaLabel}
                icon={ArrowRight}
                cssPrefix={cn(`${BLOCK}__cta`, 'btn-block')}
                iconClassName={`${BLOCK}__cta-icon`}
              />
            </Card>
          );
        })}
      </CardGrid>
    </SectionWrapper>
  );
}
