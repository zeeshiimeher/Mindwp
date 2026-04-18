import { type ReactNode } from 'react';
import { Repeat } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

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
  const BLOCK = 'resource-comparison-section';

  const safeBeforeItems = Array.isArray(before?.items) ? before.items : [];
  const safeAfterItems = Array.isArray(after?.items) ? after.items : [];
  const safeBeforeTitle = before?.title ?? '';
  const safeAfterTitle = after?.title ?? '';

  if (!heading || safeBeforeItems.length === 0 || safeAfterItems.length === 0) return null;

  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={Repeat}
        title={heading}
        variant='comparison'
        {...(content && content.length > 0 && { subtitle: content[0] })}
      />

      {content && content.length > 1 && (
        <div className={`${BLOCK}__description`}>
          {content.map((paragraph, index) => {
            if (index === 0) return null;
            return renderParagraph ? (
              renderParagraph(paragraph, index, `${BLOCK}__paragraph`)
            ) : (
              <p key={index} className={`${BLOCK}__paragraph`}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )}

      <div className={`${BLOCK}__grid`}>
        <Card className={cn(`${BLOCK}__card`, `${BLOCK}__card--before`)}>
          <div className={`${BLOCK}__card-inner`}>
            <h3 className={`${BLOCK}__title ${BLOCK}__title--before`}>{safeBeforeTitle}</h3>
            <ul className={`${BLOCK}__list`}>
              {safeBeforeItems.map((item, index) => (
                <ChecklistRow key={index} variant='cross'>
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
              {safeAfterItems.map((item, index) => (
                <ChecklistRow key={index} variant='check'>
                  {item}
                </ChecklistRow>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
