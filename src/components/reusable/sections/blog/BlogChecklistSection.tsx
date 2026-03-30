import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

export interface BlogChecklistSectionProps {
  heading?: string;
  content?: string | string[];
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

export function BlogChecklistSection({
  heading = 'Checklist',
  content,
  items,
  columns = 1,
  className = '',
}: BlogChecklistSectionProps) {
  const BLOCK = 'blog-checklist-section';

  const paragraphs = content === undefined ? [] : typeof content === 'string' ? [content] : content;

  return (
    <section className={cn('blog-post__section', BLOCK, className)}>
      {heading && <SectionIntro title={heading} cssPrefix='blog-checklist' alignment='left' />}
      {paragraphs.length > 0 && (
        <div className={`${BLOCK}__content`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <Card className={`${BLOCK}__card`}>
        <ul
          className={cn(
            `${BLOCK}__list`,
            columns === 2 ? `${BLOCK}__list--cols-2` : `${BLOCK}__list--cols-1`
          )}
        >
          {items.map((item, index) => (
            <ChecklistRow key={index} variant='check' iconSize='w-4 h-4' color='text-primary'>
              {item}
            </ChecklistRow>
          ))}
        </ul>
      </Card>
    </section>
  );
}
