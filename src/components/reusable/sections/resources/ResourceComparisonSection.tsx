import { type ReactNode } from 'react';
import { Repeat } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { cn } from '@/components/ui/utils';

import { ResourceSectionShell } from './ResourceSectionShell';

const BLOCK = 'resource-comparison-section';

export interface ResourceComparisonColumn {
  title: string;
  items: string[];
}

export interface ResourceComparisonSectionProps {
  heading: string;
  content?: string[];
  before: ResourceComparisonColumn;
  after: ResourceComparisonColumn;
  className?: string;
  renderParagraph?: (paragraph: string, index: number, className: string) => ReactNode;
}

export function ResourceComparisonSection({
  heading,
  content,
  before,
  after,
  className = '',
  renderParagraph,
}: ResourceComparisonSectionProps) {
  const safeBeforeItems = Array.isArray(before?.items) ? before.items : [];
  const safeAfterItems = Array.isArray(after?.items) ? after.items : [];
  const safeBeforeTitle = before?.title ?? '';
  const safeAfterTitle = after?.title ?? '';

  if (!heading || safeBeforeItems.length === 0 || safeAfterItems.length === 0) return null;

  return (
    <ResourceSectionShell
      block={BLOCK}
      className={className}
      content={content}
      icon={Repeat}
      title={heading}
      variant='comparison'
      renderParagraph={renderParagraph}
    >
      <div className={`${BLOCK}__grid`}>
        <Card className={cn(`${BLOCK}__card`, `${BLOCK}__card--before`)}>
          <div className={`${BLOCK}__card-inner`}>
            <h3 className={`${BLOCK}__title ${BLOCK}__title--before`}>{safeBeforeTitle}</h3>
            <ul className={`${BLOCK}__list`}>
              {safeBeforeItems.map(item => (
                <ChecklistRow key={item} variant='cross'>
                  {item}
                </ChecklistRow>
              ))}
            </ul>
          </div>
        </Card>

        <Card className={cn(`${BLOCK}__card`, `${BLOCK}__card--after`)}>
          <div className={`${BLOCK}__card-inner`}>
            <h3 className={`${BLOCK}__title ${BLOCK}__title--after`}>{safeAfterTitle}</h3>
            <ul className={`${BLOCK}__list`}>
              {safeAfterItems.map(item => (
                <ChecklistRow key={item} variant='check'>
                  {item}
                </ChecklistRow>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </ResourceSectionShell>
  );
}
