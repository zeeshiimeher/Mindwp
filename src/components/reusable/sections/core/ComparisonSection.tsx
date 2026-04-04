import { Check, X } from 'lucide-react';

import { ChecklistRow, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-comparison-section';

interface ComparisonItem {
  type: 'before' | 'after';
  title: string;
  items: string[];
}

interface ComparisonSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  comparisons: ComparisonItem[];
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  backgroundColor?: string;
}

export function ComparisonSection({
  badge,
  title,
  description,
  comparisons = [],
  cssPrefix = '',
  backgroundColor = '',
}: ComparisonSectionProps) {
  const safeComparisons = Array.isArray(comparisons) ? comparisons : [];

  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className={`${BLOCK}__container l-container`}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}
        <div className={`${BLOCK}__grid`}>
          {safeComparisons.map((comparison, index) => {
            const isBefore = comparison?.type === 'before';
            const comparisonTitle = comparison?.title ?? '';
            const items = Array.isArray(comparison?.items) ? comparison.items : [];
            return (
              <Card
                key={index}
                className={cn(
                  `${BLOCK}__card`,
                  isBefore ? `${BLOCK}__card--before` : `${BLOCK}__card--after`
                )}
              >
                <div className={`${BLOCK}__content`}>
                  <div className={`${BLOCK}__row`}>
                    <div
                      className={cn(
                        `${BLOCK}__icon-wrap`,
                        isBefore ? `${BLOCK}__icon-wrap--before` : `${BLOCK}__icon-wrap--after`
                      )}
                    >
                      {isBefore ? (
                        <X
                          className={cn(`${BLOCK}__icon`, `${BLOCK}__icon--before`)}
                          aria-hidden='true'
                        />
                      ) : (
                        <Check
                          className={cn(`${BLOCK}__icon`, `${BLOCK}__icon--after`)}
                          aria-hidden='true'
                        />
                      )}
                    </div>
                    <h3
                      className={cn(
                        `${BLOCK}__title`,
                        isBefore ? `${BLOCK}__title--before` : `${BLOCK}__title--after`
                      )}
                    >
                      {comparisonTitle}
                    </h3>
                  </div>
                  <ul className={`${BLOCK}__list`}>
                    {items.map((item, itemIndex) => (
                      <ChecklistRow
                        key={itemIndex}
                        variant={isBefore ? 'cross' : 'check'}
                        color={
                          isBefore
                            ? `${BLOCK}__item-icon ${BLOCK}__item-icon--before`
                            : `${BLOCK}__item-icon ${BLOCK}__item-icon--after`
                        }
                        iconSize={`${BLOCK}__item-icon-size`}
                      >
                        {item}
                      </ChecklistRow>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
