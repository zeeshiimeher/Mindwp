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
  backgroundColor = 'bg-muted/30',
  cssPrefix = '',
}: DualFeatureCardsSectionProps) {
  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'bg-white'
        ? `${BLOCK}--bg-white`
        : `${BLOCK}--bg-muted`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__grid`}>
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
        </div>
      </div>
    </section>
  );
}
