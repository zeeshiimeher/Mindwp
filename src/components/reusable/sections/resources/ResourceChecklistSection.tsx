import { ClipboardList } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { ChecklistItem } from '@/components/reusable/single/ChecklistItem';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

export interface ResourceChecklistSectionProps {
  heading: string;
  content?: string[];
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

export function ResourceChecklistSection({
  heading,
  content,
  items,
  columns = 1,
  className = '',
}: ResourceChecklistSectionProps) {
  const BLOCK = 'resource-checklist-section';

  if (!heading || items.length === 0) return null;

  const columnsClass = columns === 2 ? `${BLOCK}__list--cols-2` : `${BLOCK}__list--cols-1`;

  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={ClipboardList}
        title={heading}
        variant='checklist'
        {...(content && content.length > 0 && { subtitle: content[0] })}
      />

      {content && content.length > 1 && (
        <div className={`${BLOCK}__description`}>
          {content.slice(1).map((paragraph, index) => (
            <p key={index} className={`${BLOCK}__paragraph`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <Card className={`${BLOCK}__card`}>
        <ul className={cn(`${BLOCK}__list`, columnsClass)}>
          {items.map((item, index) => (
            <ChecklistItem key={index} className={`${BLOCK}__item`}>
              {item}
            </ChecklistItem>
          ))}
        </ul>
      </Card>
    </SectionWrapper>
  );
}
