import { Quote } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

export interface BlogQuoteSectionProps {
  heading?: string;
  quote: string;
  attribution?: string;
  className?: string;
}

export function BlogQuoteSection({
  heading,
  quote,
  attribution,
  className = '',
}: BlogQuoteSectionProps) {
  const BLOCK = 'blog-quote-section';

  return (
    <section className={cn('blog-post__section', BLOCK, className)}>
      {heading && <SectionIntro title={heading} cssPrefix='blog-quote' alignment='left' />}

      <Card className={`${BLOCK}__card`}>
        <div className={`${BLOCK}__icon`} aria-hidden='true'>
          <Quote />
        </div>
        <blockquote className={`${BLOCK}__quote`}>{quote}</blockquote>
        {attribution && <p className={`${BLOCK}__attr`}>— {attribution}</p>}
      </Card>
    </section>
  );
}
