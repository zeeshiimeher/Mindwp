import { ChecklistItem, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-checklist-cards-section';

/**
 * ChecklistCardsSection - Simple checklist component
 *
 * Displays a list of items in a responsive card layout with checkmark icons.
 */
interface ChecklistSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  items: string[];
  columns?: 2 | 3 | 4;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  /** Background variant or additive class string (prefer variants). */
  backgroundColor?: string;
  /** Additive Card classes (avoid Tailwind utilities in new usage). */
  cardClassName?: string;
}

export function ChecklistCardsSection({
  badge,
  title,
  description,
  items,
  columns = 2,
  cssPrefix = '',
  backgroundColor = 'muted',
  cardClassName = '',
}: ChecklistSectionProps) {
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
      ? `${BLOCK}__list--cols-2`
      : columns === 3
        ? `${BLOCK}__list--cols-3`
        : `${BLOCK}__list--cols-4`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}
        <Card className={cn(`${BLOCK}__card`, cardClassName)}>
          <ul className={cn(`${BLOCK}__list`, columnsClass)}>
            {items.map((item, index) => (
              <ChecklistItem key={index} className={`${BLOCK}__item`}>
                {item}
              </ChecklistItem>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
