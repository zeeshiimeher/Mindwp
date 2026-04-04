import { CheckCircle2 } from 'lucide-react';

import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-dual-tone-checklist-comparison-section';

interface ComparisonChecklistItem {
  title: string;
  description: string;
}

interface ComparisonChecklistColumn {
  title: string;
  items: ComparisonChecklistItem[];
}

export interface DualToneChecklistComparisonSectionProps {
  badge?: string;
  title: string;
  description?: string;
  leftColumn: ComparisonChecklistColumn;
  rightColumn: ComparisonChecklistColumn;
  backgroundColor?: string;
  cssPrefix?: string;
}

export function DualToneChecklistComparisonSection({
  badge,
  title,
  description,
  leftColumn,
  rightColumn,
  backgroundColor = '',
  cssPrefix = '',
}: DualToneChecklistComparisonSectionProps) {

  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <Card className={`${BLOCK}__panel`}>
          <div className={`${BLOCK}__grid`}>
            <div className={`${BLOCK}__column`}>
              <h3 className={`${BLOCK}__column-title`}>{leftColumn.title}</h3>
              <ul className={`${BLOCK}__items`}>
                {leftColumn.items.map((item, index) => (
                  <li key={`${item.title}-${index}`} className={`${BLOCK}__item`}>
                    <CheckCircle2 className={`${BLOCK}__item-icon`} aria-hidden='true' />
                    <div>
                      <p className={`${BLOCK}__item-title`}>{item.title}</p>
                      <p className={`${BLOCK}__item-description`}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(`${BLOCK}__column`, `${BLOCK}__column--dark`)}>
              <h3 className={`${BLOCK}__column-title`}>{rightColumn.title}</h3>
              <ul className={`${BLOCK}__items`}>
                {rightColumn.items.map((item, index) => (
                  <li key={`${item.title}-${index}`} className={`${BLOCK}__item`}>
                    <CheckCircle2 className={`${BLOCK}__item-icon`} aria-hidden='true' />
                    <div>
                      <p className={`${BLOCK}__item-title`}>{item.title}</p>
                      <p className={`${BLOCK}__item-description`}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
