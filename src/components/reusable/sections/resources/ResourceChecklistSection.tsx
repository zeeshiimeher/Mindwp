import { ClipboardList } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { ChecklistItem } from '@/components/reusable/single/ChecklistItem';
import { cn } from '@/components/ui/utils';

import { ResourceSectionShell } from './ResourceSectionShell';

const BLOCK = 'resource-checklist-section';

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
  if (!heading || items.length === 0) return null;

  const columnsClass = columns === 2 ? `${BLOCK}__list--cols-2` : `${BLOCK}__list--cols-1`;

  return (
    <ResourceSectionShell
      block={BLOCK}
      className={className}
      content={content}
      icon={ClipboardList}
      title={heading}
      variant='checklist'
    >
      <Card className={`${BLOCK}__card`}>
        <ul className={cn(`${BLOCK}__list`, columnsClass)}>
          {items.map(item => (
            <ChecklistItem key={item} className={`${BLOCK}__item`}>
              {item}
            </ChecklistItem>
          ))}
        </ul>
      </Card>
    </ResourceSectionShell>
  );
}
