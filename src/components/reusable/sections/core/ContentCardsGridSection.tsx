import { CheckCircle2, X } from 'lucide-react';

import { SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-content-cards-grid-section';

/**
 * ContentCardsGridSection - Flexible grid layout component
 *
 * Displays items in a responsive grid (2-4 columns) with optional icons.
 */
interface ContentGridSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  items: Array<{
    title: string;
    desc: string;
  }>;
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  iconType?: 'checkmark' | 'cross' | 'none';
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
}

export function ContentCardsGridSection({
  badge,
  title,
  description,
  items,
  columns = 4,
  backgroundColor = 'bg-white',
  iconType = 'checkmark',
  cssPrefix = '',
}: ContentGridSectionProps) {
  const backgroundClassName =
    backgroundColor === 'bg-white'
      ? `${BLOCK}--bg-white`
      : backgroundColor === 'bg-muted/30'
        ? `${BLOCK}--bg-muted`
        : backgroundColor;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        {(badge || title) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}

        <div className={cn(`${BLOCK}__grid`, `${BLOCK}__grid--${columns}`)}>
          {items.map((item, index) => {
            const renderIcon = () => {
              if (iconType === 'none') return null;

              const IconComponent = iconType === 'cross' ? X : CheckCircle2;
              const iconColor = iconType === 'cross' ? 'icon-text-destructive' : 'icon-text-accent';

              return (
                <div className={`${BLOCK}__icon icon-bg-accent`}>
                  <IconComponent className={cn(`${BLOCK}__icon-svg`, iconColor)} />
                </div>
              );
            };

            return (
              <div key={index} className={`${BLOCK}__item`}>
                {renderIcon()}
                <h4 className={`${BLOCK}__title`}>{item.title}</h4>
                <p className={`${BLOCK}__desc`}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
