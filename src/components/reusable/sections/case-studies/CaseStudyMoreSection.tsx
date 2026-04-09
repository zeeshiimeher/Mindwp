import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { CaseStudyCard } from '@/components/reusable/single';
import type { CaseStudyTemplateMetadata } from '@/domains/case-studies/types';

const DEFAULT_CONTENT = {
  title: 'Related Case Studies',
  buttonText: 'View All Case Studies',
  buttonHref: '/case-studies',
} as const;

export interface CaseStudyMoreSectionProps {
  studies: CaseStudyTemplateMetadata[];
}

export function CaseStudyMoreSection({ studies }: CaseStudyMoreSectionProps) {
  if (studies.length === 0) return null;

  return (
    <SectionWrapper className='case-study-more-section'>
      <SectionIntro
        title={DEFAULT_CONTENT.title}
        primaryAction={{
          label: DEFAULT_CONTENT.buttonText,
          href: DEFAULT_CONTENT.buttonHref,
        }}
        cssPrefix='case-study-detail-more-header'
      />

      {studies.length > 0 && (
        <div className='c-case-study-cards-section__grid case-study-more-section__grid'>
          {studies.map(study => (
            <CaseStudyCard
              key={study.slug}
              variant='compact'
              slug={study.slug}
              industry={study.industryLabel}
              title={study.business}
              location={study.location}
              description={study.heroHeadline}
              duration={study.duration}
              keyMetrics={study.keyMetrics}
              tags={study.tags}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
