import Image from 'next/image';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';

export interface BlogImageSectionProps {
  heading?: string;
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function BlogImageSection({
  heading,
  src,
  alt,
  caption,
  className = '',
}: BlogImageSectionProps) {
  const BLOCK = 'blog-image-section';
  const isRemoteSrc = /^https?:\/\//i.test(src);

  return (
    <SectionWrapper
      padding='none'
      container='none'
      className={cn('blog-post__section', BLOCK, className)}
    >
      {heading && <SectionIntro title={heading} cssPrefix='blog-image' alignment='left' />}

      <Card className={`${BLOCK}__card`}>
        <div className={`${BLOCK}__media`}>
          <Image
            className={`${BLOCK}__img`}
            src={src}
            alt={alt}
            width={1600}
            height={900}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1100px'
            unoptimized={isRemoteSrc}
          />
        </div>
        {caption && <p className={`${BLOCK}__caption`}>{caption}</p>}
      </Card>
    </SectionWrapper>
  );
}
