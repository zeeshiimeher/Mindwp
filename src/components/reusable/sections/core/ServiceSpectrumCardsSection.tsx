import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-service-spectrum-cards-section';

interface ServiceSpectrumCard {
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
}

export interface ServiceSpectrumCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryAction?: ButtonProps;
  cards: ServiceSpectrumCard[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function ServiceSpectrumCardsSection({
  badge,
  title,
  description,
  primaryAction,
  cards,
  backgroundColor = '',
  cssPrefix = '',
}: ServiceSpectrumCardsSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      {primaryAction && (
        <div className={`${BLOCK}__actions`}>
          <Button variant='secondary' {...primaryAction} />
        </div>
      )}

      <CardGrid columns={4} gap={6} mode='controlled' className={`${BLOCK}__grid`}>
        {cards.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            className={cn(`${BLOCK}__card`, card.featured && `${BLOCK}__card--featured`)}
          >
            <h3 className={`${BLOCK}__card-title`}>{card.title}</h3>
            <p className={`${BLOCK}__card-description`}>{card.description}</p>
            <ul className={`${BLOCK}__points`}>
              {card.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
