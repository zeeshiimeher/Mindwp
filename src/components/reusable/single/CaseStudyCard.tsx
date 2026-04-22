import { ArrowRight, Clock, MapPin, Tag } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';
import type { CaseStudyMetricPreview } from '@/domains/case-studies/types';

const BLOCK = 'case-study-card';

export type CaseStudyCardVariant = 'detailed' | 'compact';

export interface CaseStudyCardProps {
  slug: string;
  industry: string;

  /** Main heading in the card (e.g. business/client name) */
  title: string;

  location: string;

  /** Short summary line in the card (e.g. heroHeadline or metaDescription) */
  description: string;

  /** Optional duration (renders with a clock icon in the header row) */
  duration?: string;

  /** Optional publish date (renders as plain text in the header row) */
  publishDate?: string;

  /** Optional key metrics preview (first 2 shown) */
  keyMetrics?: CaseStudyMetricPreview[];

  /** Optional tags preview (first 3 shown) */
  tags?: string[];

  /** Visual layout variant */
  variant?: CaseStudyCardVariant;

  buttonText?: string;
  buttonVariant?: 'primary' | 'outline';

  /** Optional extra classes for the wrapper Card */
  className?: string;

  /** Optional extra classes for the CTA link */
  ctaClassName?: string;
}

export function CaseStudyCard({
  slug,
  industry,
  title,
  location,
  description,
  duration,
  publishDate,
  keyMetrics,
  tags,
  variant = 'detailed',
  buttonText = 'Read Full Case Study',
  buttonVariant,
  className = '',
  ctaClassName = '',
}: CaseStudyCardProps) {
  const href = `/case-studies/${slug}`;

  if (variant === 'compact') {
    return (
      <Card className={cn(BLOCK, `${BLOCK}--compact`, className)}>
        <div className={`${BLOCK}__inner`}>
          <div className={`${BLOCK}__header ${BLOCK}__header--compact`}>
            <Badge variant='outline' size='sm' context='meta'>
              {industry}
            </Badge>
            {publishDate && <span className={`${BLOCK}__meta`}>{publishDate}</span>}
          </div>

          <h3 className={`${BLOCK}__title`}>{title}</h3>

          <p className={`${BLOCK}__location`}>
            <MapPin className={`${BLOCK}__meta-icon`} />
            {location}
          </p>

          <p className={`${BLOCK}__quote`}>&ldquo;{description}&rdquo;</p>

          <div className={`${BLOCK}__cta-row`}>
            <Button
              href={href}
              variant={(buttonVariant ?? 'outline') === 'outline' ? 'outline' : 'primary'}
              label={buttonText}
              icon={ArrowRight}
              showDefaultIcon
              cssPrefix={cn('btn-block', ctaClassName)}
            />
          </div>
        </div>
      </Card>
    );
  }

  const headerMetaText = duration ?? publishDate;
  const isDuration = Boolean(duration);
  const resolvedButtonVariant = buttonVariant ?? 'primary';

  return (
    <Card className={cn(BLOCK, `${BLOCK}--detailed`, className)}>
      <div className={`${BLOCK}__body`}>
        <div className={`${BLOCK}__header ${BLOCK}__header--detailed`}>
          <Badge variant='outline' size='sm' context='meta'>
            {industry}
          </Badge>

          {headerMetaText && (
            <span className={`${BLOCK}__meta ${BLOCK}__meta-row`}>
              {isDuration && <Clock className={`${BLOCK}__meta-icon`} />}
              {headerMetaText}
            </span>
          )}
        </div>

        <div>
          <h3 className={`${BLOCK}__title`}>{title}</h3>
          <p className={`${BLOCK}__location`}>
            <MapPin className={`${BLOCK}__meta-icon`} />
            {location}
          </p>
        </div>

        <p className={`${BLOCK}__desc`}>{description}</p>

        {Array.isArray(keyMetrics) && keyMetrics.length > 0 && (
          <div className={`${BLOCK}__metrics`}>
            {keyMetrics.map((metric, index) => {
              if (index >= 2) return null;
              return (
                <div key={`${metric.label}-${metric.value}`} className={`${BLOCK}__metric`}>
                  <div className={cn(`${BLOCK}__metric-value`, metric.color)}>{metric.value}</div>
                  <div className={`${BLOCK}__metric-label`}>{metric.label}</div>
                </div>
              );
            })}
          </div>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className={`${BLOCK}__tags`}>
            {tags.map((tag, index) => {
              if (index >= 3) return null;
              return (
                <span key={tag} className={`${BLOCK}__tag`}>
                  <Tag className={`${BLOCK}__meta-icon`} />
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </div>

      <Button
        href={href}
        variant={resolvedButtonVariant === 'outline' ? 'outline' : 'primary'}
        label={buttonText}
        icon={ArrowRight}
        showDefaultIcon
        cssPrefix={cn('btn-block', ctaClassName)}
      />
    </Card>
  );
}
