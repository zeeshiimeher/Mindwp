import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

import { CTASection } from '@/components/reusable/single';
import { CaseStudyCard } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';

export function CaseStudiesPage() {
  const studies = getCaseStudiesTemplateMetadata();

  return (
    <div className='min-h-screen'>
      <main>
        {/* Hero */}
        <section className='l-section bg-gradient-light'>
          <div className='l-container'>
            <div className='text-center l-stack l-stack--loose'>
              <Badge variant='outline'>Customer Success Stories</Badge>

              <h1>Real Results from Small Businesses Like Yours</h1>

              <p className='text-muted-foreground l-max-w-3xl l-mx-auto'>
                We work with small, local businesses—not giant enterprises. See how our WordPress
                websites, CRM automation, and local SEO help real owners get more leads, save time,
                and grow revenue without massive marketing budgets.
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
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className='l-section bg-background'>
          <div className='l-container '>
            <div className='l-grid l-gap-8 c-case-study-cards-section__grid'>
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
          </div>
        </section>

        {/* Stats Section (UNCHANGED DESIGN) */}
        <section className='l-section bg-muted'>
          <div className='l-container'>
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
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title='Want Results Like This for Your Business?'
          description="Book a free 20-minute call and we'll walk you through what would actually move the needle for your business—no pressure, no sales scripts."
          primaryAction={{
            variant: 'white',
            label: 'Start a Conversation',
            href: '/contact',
            icon: ArrowRight,
          }}
          metaItems={[
            { text: 'Honest advice' },
            { text: 'No long-term contracts' },
            { text: 'Built for small businesses' },
          ]}
          cssPrefix='case-studies-cta'
          backgroundColor='gradient-cta-1'
        />
      </main>
    </div>
  );
}
