import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

import { CardsSectionShell } from './CardsSectionShell';

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
    <CardsSectionShell
      block={BLOCK}
      badge={badge}
      title={title}
      description={description}
      backgroundColor={backgroundColor}
      cssPrefix={cn(cssPrefix)}
      columns={columns}
    >
      {items.map((item, index) => (
        <Card key={index} className={cn(`${BLOCK}__card`, cardVariantClass)}>
          <h4 className={`${BLOCK}__item-title`}>{item.title}</h4>
          <p className={`${BLOCK}__item-description`}>{item.description}</p>
        </Card>
      ))}
    </CardsSectionShell>
  );
}
