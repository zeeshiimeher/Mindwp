import { SectionIntro } from '@/components/reusable/single';
import { CaseStudyCard } from '@/components/reusable/single';
import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';

const DEFAULT_CONTENT = {
  title: 'Related Case Studies',
  buttonText: 'View All Case Studies',
  buttonHref: '/case-studies',
} as const;

export interface CaseStudyMoreSectionProps {}

export function CaseStudyMoreSection({ excludeSlug }: { excludeSlug?: string } = {}) {
  const studies = getCaseStudiesTemplateMetadata()
    .filter(s => (excludeSlug ? s.slug !== excludeSlug : true))
    .slice(0, 3);

  return (
    <section className='l-section case-study-more-section'>
      <div className='l-container'>
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
      </div>
    </section>
  );
}
