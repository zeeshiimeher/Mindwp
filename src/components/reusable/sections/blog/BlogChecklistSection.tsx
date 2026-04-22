import { SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

const BLOCK = 'blog-checklist-section';

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
  const paragraphs = content === undefined ? [] : typeof content === 'string' ? [content] : content;

  return (
    <SectionWrapper
      padding='none'
      container='none'
      className={cn('blog-post__section', BLOCK, className)}
    >
      {heading && <SectionIntro title={heading} cssPrefix='blog-checklist' alignment='left' />}
      {paragraphs.length > 0 && (
        <div className={`${BLOCK}__content`}>
          {paragraphs.map(p => (
            <p key={p}>{p}</p>
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
          {items.map(item => (
            <ChecklistRow key={item} variant='check' color='text-primary'>
              {item}
            </ChecklistRow>
          ))}
        </ul>
      </Card>
    </SectionWrapper>
  );
}
