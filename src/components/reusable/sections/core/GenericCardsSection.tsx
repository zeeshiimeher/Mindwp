import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-generic-cards-section';

/**
 * GenericCardsSection - Card-based content display component
 *
 * Displays content items in a responsive card grid (2-4 columns).
 * Each card shows a title and description with clean, bordered styling.
 * Supports both default and bordered card variants for different visual emphasis.
 */
interface CardItem {
  title: string;
  description: string;
}

interface CardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  variant?: 'default' | 'bordered';
}

export function GenericCardsSection({
  badge,
  title,
  description,
  items,
  columns = 3,
  backgroundColor = 'white',
  cssPrefix = '',
  variant = 'default',
}: CardsSectionProps) {
  const mutedBackgrounds = ['muted', 'bg-muted', 'bg-muted/30', 'bg-muted/50'] as const;

  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'white' || backgroundColor === 'bg-white'
        ? `${BLOCK}--bg-white`
        : mutedBackgrounds.includes(backgroundColor as (typeof mutedBackgrounds)[number])
          ? `${BLOCK}--bg-muted`
          : backgroundColor;

  const columnsClass =
    columns === 2
      ? `${BLOCK}__grid--cols-2`
      : columns === 3
        ? `${BLOCK}__grid--cols-3`
        : `${BLOCK}__grid--cols-4`;

  const cardVariantClass =
    variant === 'bordered' ? `${BLOCK}__card--bordered` : `${BLOCK}__card--default`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={cn(`${BLOCK}__grid`, columnsClass)}>
          {items.map((item, index) => (
            <Card key={index} className={cn(`${BLOCK}__card`, cardVariantClass)}>
              <h4 className={`${BLOCK}__item-title`}>{item.title}</h4>
              <p className={`${BLOCK}__item-description`}>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
