import { SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

const BLOCK = 'blog-takeaways-section';

export interface BlogTakeawaysSectionProps {
  heading?: string;
  content?: string | string[];
  items: string[];
  className?: string;
}

export function BlogTakeawaysSection({
  heading = 'Key Takeaways',
  content,
  items,
  className = '',
}: BlogTakeawaysSectionProps) {
  const paragraphs = content === undefined ? [] : typeof content === 'string' ? [content] : content;

  return (
    <SectionWrapper
      padding='none'
      container='none'
      className={cn('blog-post__section', BLOCK, className)}
    >
      {heading && <SectionIntro title={heading} cssPrefix='blog-takeaways' alignment='left' />}
      {paragraphs.length > 0 && (
        <div className={`${BLOCK}__content`}>
          {paragraphs.map(p => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}

      <Card className={`${BLOCK}__card`}>
        <ul className={`${BLOCK}__list`} aria-label={heading ? `${heading} list` : 'Key takeaways'}>
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
