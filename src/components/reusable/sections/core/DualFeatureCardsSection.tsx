import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-dual-feature-cards-section';

interface DualFeatureCardItem {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: ButtonProps;
}

export interface DualFeatureCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  cards: DualFeatureCardItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function DualFeatureCardsSection({
  badge,
  title,
  description,
  cards,
  backgroundColor = '',
  cssPrefix = '',
}: DualFeatureCardsSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <CardGrid columns={2} gap={6} className={`${BLOCK}__grid`}>
        {cards.map((card, index) => (
          <Card key={`${card.title}-${index}`} className={`${BLOCK}__card`}>
            {card.eyebrow && <p className={`${BLOCK}__eyebrow`}>{card.eyebrow}</p>}
            <h3 className={`${BLOCK}__title`}>{card.title}</h3>
            <p className={`${BLOCK}__description`}>{card.description}</p>
            <div className={`${BLOCK}__actions`}>
              <Button variant='secondary' size='sm' {...card.primaryAction} />
            </div>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
