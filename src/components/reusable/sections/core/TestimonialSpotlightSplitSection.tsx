import Image from 'next/image';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-testimonial-spotlight-split-section';

interface TestimonialAvatar {
  src: string;
  alt: string;
}

interface TestimonialContent {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  avatars?: TestimonialAvatar[];
}

export interface TestimonialSpotlightSplitSectionProps {
  badge?: string;
  title: string;
  description?: string;
  narrativeTitle: string;
  narrativeParagraphs: string[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  testimonial: TestimonialContent;
  backgroundColor?: string;
  cssPrefix?: string;
}

export function TestimonialSpotlightSplitSection({
  badge,
  title,
  description,
  narrativeTitle,
  narrativeParagraphs,
  primaryAction,
  secondaryAction,
  testimonial,
  backgroundColor = '',
  cssPrefix = '',
}: TestimonialSpotlightSplitSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <Card className={`${BLOCK}__panel`}>
        <div className={`${BLOCK}__layout`}>
          <Card className={`${BLOCK}__testimonial`}>
            {testimonial.avatars && testimonial.avatars.length > 0 && (
              <div className={`${BLOCK}__avatars`}>
                {testimonial.avatars.map((avatar, index) => (
                  <Image
                    key={`${avatar.src}-${index}`}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={52}
                    height={52}
                    className={`${BLOCK}__avatar`}
                  />
                ))}
              </div>
            )}

            <p className={`${BLOCK}__quote`}>{testimonial.quote}</p>

            <p className={`${BLOCK}__rating`}>
              {'★'.repeat(Math.min(Math.max(testimonial.rating ?? 5, 1), 5))}
            </p>
            <p className={`${BLOCK}__name`}>{testimonial.name}</p>
            <p className={`${BLOCK}__role`}>{testimonial.role}</p>
          </Card>

          <div className={`${BLOCK}__content`}>
            <SectionIntro
              {...(badge !== undefined && { badge })}
              title={title}
              {...(description !== undefined && { description })}
              className={`${BLOCK}__header`}
            />

            <h3 className={`${BLOCK}__narrative-title`}>{narrativeTitle}</h3>
            <div className={`${BLOCK}__narrative`}>
              {narrativeParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {(primaryAction || secondaryAction) && (
              <div className={`${BLOCK}__actions`}>
                {primaryAction && <Button variant='primary' {...primaryAction} />}
                {secondaryAction && <Button variant='secondary' {...secondaryAction} />}
              </div>
            )}
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
