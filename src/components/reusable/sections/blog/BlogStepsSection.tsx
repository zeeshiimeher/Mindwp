import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

export type BlogStep = {
  label: string;
  description?: string;
};

export interface BlogStepsSectionProps {
  heading?: string;
  content?: string | string[];
  steps: BlogStep[];
  className?: string;
}

export function BlogStepsSection({
  heading = 'Steps',
  content,
  steps,
  className = '',
}: BlogStepsSectionProps) {
  const BLOCK = 'blog-steps-section';

  const paragraphs = content === undefined ? [] : typeof content === 'string' ? [content] : content;

  return (
    <section className={cn('blog-post__section', BLOCK, className)}>
      {heading && <SectionIntro title={heading} cssPrefix='blog-steps' alignment='left' />}
      {paragraphs.length > 0 && (
        <div className={`${BLOCK}__content`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <Card className={`${BLOCK}__card`}>
        <ol className={`${BLOCK}__list`}>
          {steps.map((step, index) => (
            <li key={index} className={`${BLOCK}__item`}>
              <div className={`${BLOCK}__num`} aria-hidden='true'>
                {index + 1}
              </div>
              <div className={`${BLOCK}__body`}>
                <p className={`${BLOCK}__title`}>{step.label}</p>
                {step.description && <p className={`${BLOCK}__desc`}>{step.description}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
