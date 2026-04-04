import { Card } from '@/components/reusable/single/Card';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

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
  const BLOCK = 'blog-takeaways-section';

  const paragraphs = content === undefined ? [] : typeof content === 'string' ? [content] : content;

  return (
    <section className={cn('blog-post__section', BLOCK, className)}>
      {heading && <SectionIntro title={heading} cssPrefix='blog-takeaways' alignment='left' />}
      {paragraphs.length > 0 && (
        <div className={`${BLOCK}__content`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <Card className={`${BLOCK}__card`}>
        <ul className={`${BLOCK}__list`} aria-label={heading ? `${heading} list` : 'Key takeaways'}>
          {items.map((item, index) => (
            <ChecklistRow key={index} variant='check' color='text-primary'>
              {item}
            </ChecklistRow>
          ))}
        </ul>
      </Card>
    </section>
  );
}
