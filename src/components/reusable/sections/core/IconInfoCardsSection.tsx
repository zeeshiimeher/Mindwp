import React from 'react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-icon-info-cards-section';

/**
 * IconInfoCardsSection - Card grid with icons
 *
 * Displays items in a responsive card grid with icons.
 */
interface IconCardItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface IconCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: IconCardItem[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
}

export function IconInfoCardsSection({
  badge,
  title,
  description,
  items,
  columns = 3,
  backgroundColor = '',
  cssPrefix = '',
}: IconCardsSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <CardGrid columns={columns} mode='controlled'>
        {items.map(item => (
          <Card key={item.title} className={cn(`${BLOCK}__card`, 'card-base')}>
            <item.icon className={`${BLOCK}__icon`} />
            <h3 className={`${BLOCK}__title`}>{item.title}</h3>
            <p className={`${BLOCK}__description`}>{item.description}</p>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
