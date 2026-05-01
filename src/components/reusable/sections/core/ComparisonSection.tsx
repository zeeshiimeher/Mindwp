import { Check, X } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
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
  title: string;
  description: string;
  comparisons: ComparisonItem[];
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  backgroundColor?: string;
}

export function ComparisonSection({
  badge,
  title,
  description,
  comparisons,
  cssPrefix = '',
  backgroundColor = '',
}: ComparisonSectionProps) {
  if (title.trim().length === 0) {
    throw new Error('ComparisonSection requires a non-empty title.');
  }

  if (description.trim().length === 0) {
    throw new Error('ComparisonSection requires a non-empty description.');
  }

  if (!Array.isArray(comparisons) || comparisons.length === 0) {
    throw new Error('ComparisonSection requires at least one comparison item.');
  }

  return (
    <SectionWrapper container='none' background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__container l-container`}>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          description={description}
          className={`${BLOCK}__header`}
        />
        <CardGrid columns={2} gap={8} mode='controlled'>
          {comparisons.map(comparison => {
            const isBefore = comparison?.type === 'before';
            const comparisonTitle = comparison?.title;
            const items = comparison?.items;

            if (!comparisonTitle || comparisonTitle.trim().length === 0) {
              throw new Error('ComparisonSection requires each comparison item to have a title.');
            }

            if (!Array.isArray(items) || items.length === 0) {
              throw new Error('ComparisonSection requires each comparison item to have items.');
            }

            return (
              <Card
                key={comparisonTitle}
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
                    {items.map(item => (
                      <ChecklistRow
                        key={item}
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
        </CardGrid>
      </div>
    </SectionWrapper>
  );
}
