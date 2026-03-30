import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-image-accordion-strip-section';

interface ImageAccordionItem {
  title: string;
  image: string;
  alt: string;
}

export interface ImageAccordionStripSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: ImageAccordionItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function ImageAccordionStripSection({
  badge,
  title,
  description,
  items,
  backgroundColor = 'bg-muted/30',
  cssPrefix = '',
}: ImageAccordionStripSectionProps) {
  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'bg-white'
        ? `${BLOCK}--bg-white`
        : `${BLOCK}--bg-muted`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__track`}>
          {items.map((item, index) => (
            <Card key={`${item.title}-${index}`} className={`${BLOCK}__item`}>
              <img src={item.image} alt={item.alt} loading='lazy' className={`${BLOCK}__image`} />
              <div className={`${BLOCK}__overlay`} aria-hidden='true' />
              <p className={`${BLOCK}__label`}>{item.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
