import { Clock, TrendingUp } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { CaseStudyCard } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';

import { buildContactHref } from '../../../lib/contact/contactHref';

export function CaseStudiesPage() {
  const studies = getCaseStudiesTemplateMetadata();

  return (
    <CTARegistryProvider
      pageId='page:case-studies'
      pageType='page'
      primarySystem='smart-website-systems'
    >
      <div className='min-h-screen'>
        <main>
          {/* Hero */}
          <SectionWrapper background='bg-gradient-surface-muted'>
            <div className='text-center l-stack l-stack--loose'>
              <Badge variant='outline'>Customer Success Stories</Badge>

              <h1>Real Before-And-After System Changes</h1>

              <p className='text-muted-foreground l-max-w-3xl l-mx-auto'>
                These case studies show what changed when the website layer, routing, follow-up,
                visibility, and proof systems were rebuilt around how the business actually runs.
              </p>

              <div className='l-row l-items-center l-row-center l-gap-8 pt-4 text-sm text-muted-foreground'>
                <div className='l-row l-items-center l-gap-2'>
                  <TrendingUp className='case-studies-page__hero-icon case-study-accent--success' />
                  <span>Proven growth-focused strategies</span>
                </div>
                <div className='l-row l-items-center l-gap-2'>
                  <Clock className='case-studies-page__hero-icon case-study-accent--primary' />
                  <span>Clear, practical execution</span>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Case Studies Grid */}
          <SectionWrapper background='bg-background'>
            <div className='l-grid l-gap-8 md:l-grid-2 lg:l-grid-3 c-case-study-cards-section__grid'>
              {studies.map(study => (
                <CaseStudyCard
                  key={study.slug}
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

            {studies.length === 0 && (
              <div className='text-center py-12'>
                <p className='text-muted-foreground'>Case studies will appear here soon.</p>
              </div>
            )}
          </SectionWrapper>

          {/* Stats Section (UNCHANGED DESIGN) */}
          <SectionWrapper background='bg-muted'>
            <div className='text-center mb-12'>
              <h2 className='mb-4'>What Our Clients Typically Achieve</h2>
              <p className='text-muted-foreground'>
                Results vary by business, but our focus is always sustainable growth.
              </p>
            </div>

            <div className='l-grid l-gap-6 case-studies-page__stats-grid'>
              <div className='case-studies-page__stat-card'>
                <div className='case-studies-page__stat-title case-study-accent--success'>
                  Improved visibility
                </div>
                <div className='text-sm text-muted-foreground'>Across local search & websites</div>
              </div>

              <div className='case-studies-page__stat-card'>
                <div className='case-studies-page__stat-title case-study-accent--primary'>
                  More enquiries
                </div>
                <div className='text-sm text-muted-foreground'>From qualified local traffic</div>
              </div>

              <div className='case-studies-page__stat-card'>
                <div className='case-studies-page__stat-title case-study-accent--purple'>
                  Clear processes
                </div>
                <div className='text-sm text-muted-foreground'>Automation that saves time</div>
              </div>

              <div className='case-studies-page__stat-card'>
                <div className='case-studies-page__stat-title case-study-accent--success'>
                  Sustainable growth
                </div>
                <div className='text-sm text-muted-foreground'>Without bloated marketing spend</div>
              </div>
            </div>
          </SectionWrapper>

          {/* CTA */}
          <div className='text-sm text-muted-foreground text-center l-max-w-2xl l-mx-auto pt-6 pb-3'>
            If the before-and-after pattern in one of these examples feels familiar, the next step
            is to test whether the same system change would remove the friction in your business.
          </div>
          <PrimaryCTASection
            heading={{
              title: 'Want to know which system change would produce this kind of lift for you?',
              description:
                "Book a free 20-minute call and we'll map the workflow, handoff, and conversion changes most likely to create the same kind of measurable shift in your business.",
            }}
            actions={[
              {
                label: 'Get Started',
                href: buildContactHref({
                  system: 'smart-website-systems',
                  sourceType: 'case-study',
                  slug: 'case-study-help',
                }),
                primary: true,
              },
            ]}
          />
        </main>
      </div>
    </CTARegistryProvider>
  );
}
