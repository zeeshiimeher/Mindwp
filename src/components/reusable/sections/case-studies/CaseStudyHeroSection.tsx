import { ArrowLeft, CheckCircle2, Clock, MapPin } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { cn } from '@/components/ui/utils';

const BLOCK = 'case-study-hero';

/**
 * Hero section for case-study detail pages.
 * Renders back navigation, key metadata, headline, and intro content.
 */
export interface CaseStudyHeroSectionProps {
  /** Back button text */
  backToCaseStudiesLabel: string;

  /** Back button href */
  backToCaseStudiesHref?: string;

  /** Industry badge text */
  industry: string;

  /** Duration badge text */
  duration: string;

  /** Main headline */
  heroHeadline: string;

  /** Optional scenario badge text */
  scenarioBadge?: string;

  /** Optional heading tag for headline semantics. @default 'h1' */
  headingTag?: 'h1' | 'h2' | 'h3';

  /** Description/intro content */
  heroIntroHtml: React.ReactNode;

  /** Client/business name */
  business: string;

  /** Location text */
  location: string;

  /** Completion date text */
  completedDate: string;

  /** CSS class prefix for custom styling */
  cssPrefix?: string;

  /** Background color/styling */
  backgroundColor?: string;
}

export function CaseStudyHeroSection({
  backToCaseStudiesLabel,
  backToCaseStudiesHref = '/case-studies',
  industry,
  duration,
  heroHeadline,
  scenarioBadge,
  headingTag = 'h1',
  heroIntroHtml,
  business,
  location,
  completedDate,
  cssPrefix = 'case-study-detail-hero',
  backgroundColor = 'bg-gradient-surface-muted',
}: CaseStudyHeroSectionProps) {
  const Heading = headingTag || 'h1';
  const isPlainTextIntro =
    typeof heroIntroHtml === 'string' || typeof heroIntroHtml === 'number' || heroIntroHtml == null;

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <a href={backToCaseStudiesHref} className='link case-study-hero__back-link'>
        <ArrowLeft className='cta__icon' />
        {backToCaseStudiesLabel}
      </a>

      <div className={`${BLOCK}__content`}>
        <div className={cn(`${BLOCK}__badges`, 'case-study-hero__badges')}>
          <Badge variant='outline' size='sm' context='meta'>
            {industry}
          </Badge>
          {scenarioBadge && (
            <Badge variant='outline' size='sm' context='meta'>
              {scenarioBadge}
            </Badge>
          )}
        </div>

        <Heading className={`${BLOCK}__heading`}>{heroHeadline}</Heading>

        {isPlainTextIntro ? (
          <p className={`${BLOCK}__intro case-study-hero__intro`}>{heroIntroHtml}</p>
        ) : (
          <div className={`${BLOCK}__intro case-study-hero__intro`}>{heroIntroHtml}</div>
        )}

        <div className={cn(`${BLOCK}__meta`, 'case-study-hero__meta')}>
          <div className={`${BLOCK}__meta-item`}>
            <strong>Client:</strong> {business}
          </div>
          <div className={`${BLOCK}__meta-item`}>
            <MapPin className='case-study-hero__meta-icon' />
            {location}
          </div>
          <div className={`${BLOCK}__meta-item`}>
            <Clock className='case-study-hero__meta-icon' />
            {duration}
          </div>
          <div className={`${BLOCK}__meta-item`}>
            <CheckCircle2 className='case-study-hero__meta-icon' />
            {completedDate}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
