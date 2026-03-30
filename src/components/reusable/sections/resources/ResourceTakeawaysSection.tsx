import { ListChecks } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { ChecklistItem } from '@/components/reusable/single/ChecklistItem';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

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
  const BLOCK = 'resource-takeaways-section';

  if (!heading || items.length === 0) return null;

  return (
    <section className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={ListChecks}
        title={heading}
        variant='takeaways'
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
        <ul className={`${BLOCK}__list`}>
          {items.map((item, index) => (
            <ChecklistItem key={index} className={`${BLOCK}__item`}>
              {item}
            </ChecklistItem>
          ))}
        </ul>
      </Card>
    </section>
  );
}
