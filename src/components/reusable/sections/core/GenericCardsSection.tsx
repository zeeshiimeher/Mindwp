import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-generic-cards-section';

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
  backgroundColor = '',
  cssPrefix = '',
  variant = 'default',
}: CardsSectionProps) {
  const cardVariantClass =
    variant === 'bordered' ? `${BLOCK}__card--bordered` : `${BLOCK}__card--default`;

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <CardGrid columns={columns} mode='controlled'>
        {items.map((item, index) => (
          <Card key={index} className={cn(`${BLOCK}__card`, cardVariantClass)}>
            <h4 className={`${BLOCK}__item-title`}>{item.title}</h4>
            <p className={`${BLOCK}__item-description`}>{item.description}</p>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
