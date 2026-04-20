import { ListChecks } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { ChecklistItem } from '@/components/reusable/single/ChecklistItem';

import { ResourceSectionShell } from './ResourceSectionShell';

const BLOCK = 'resource-takeaways-section';

export interface ResourceTakeawaysSectionProps {
  heading: string;
  content?: string[];
  items: string[];
  className?: string;
}

export function ResourceTakeawaysSection({
  heading,
  content,
  items,
  className = '',
}: ResourceTakeawaysSectionProps) {
  if (!heading || items.length === 0) return null;

  return (
    <ResourceSectionShell
      block={BLOCK}
      className={className}
      content={content}
      icon={ListChecks}
      title={heading}
      variant='takeaways'
    >
      <Card className={`${BLOCK}__card`}>
        <ul className={`${BLOCK}__list`}>
          {items.map((item, index) => (
            <ChecklistItem key={index} className={`${BLOCK}__item`}>
              {item}
            </ChecklistItem>
          ))}
        </ul>
      </Card>
    </ResourceSectionShell>
  );
}
