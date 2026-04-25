import NextImage from 'next/image';

import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-image-accordion-strip-section';
const Image = (
  'default' in NextImage ? NextImage.default : NextImage
) as typeof import('next/image').default;

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
  backgroundColor = '',
  cssPrefix = '',
}: ImageAccordionStripSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__track`}>
        {items.map((item, index) => (
          <Card key={`${item.image}-${item.title}-${index}`} className={`${BLOCK}__item`}>
            <Image
              src={item.image}
              alt={item.alt}
              width={800}
              height={600}
              className={`${BLOCK}__image`}
            />
            <div className={`${BLOCK}__overlay`} aria-hidden='true' />
            <p className={`${BLOCK}__label`}>{item.title}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
