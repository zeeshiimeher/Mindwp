import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';
import { buildContactHref } from '@/lib/contact/contactHref';

export function CaseStudiesPage() {
  const studies = getCaseStudiesTemplateMetadata();

  return (
    <CTARegistryProvider
      pageId='page:case-studies'
      pageType='page'
      primarySystem='smart-website-systems'
    >
      <main>
        <SectionFrame
          ariaLabel='Case studies hero'
          tone='mist'
          heading={{
            eyebrow: 'Customer Success Stories',
            title: 'Real Before-And-After System Changes',
            description:
              'These case studies show what changed when the website layer, routing, follow-up, visibility, and proof systems were rebuilt around how the business actually runs.',
          }}
        >
          <div className='flex flex-wrap items-center gap-3'>
            <span className='inline-flex items-center gap-2 rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
              <TrendingUp size={14} aria-hidden='true' />
              <span>Growth-focused strategies</span>
            </span>
            <span className='inline-flex items-center gap-2 rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
              <Clock size={14} aria-hidden='true' />
              <span>Clear, practical execution</span>
            </span>
          </div>
        </SectionFrame>

        <SectionFrame
          ariaLabel='Case study library'
          tone='white'
          heading={{
            eyebrow: 'Case studies',
            title: 'See the operating change behind the result',
            description:
              'Each example focuses on the before state, the system change, and the clearer path created after implementation.',
          }}
        >
          {studies.length === 0 ? (
            <p className='text-center mw-text-secondary'>Case studies will appear here soon.</p>
          ) : (
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {studies.map(study => (
                <article
                  key={study.slug}
                  className='flex h-full flex-col rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'
                >
                  <p className='mw-text-eyebrow mw-text-signal-cyan'>{study.industryLabel}</p>
                  <h3>{study.business}</h3>
                  <p>{study.heroHeadline}</p>

                  <div className='mt-4 grid gap-2 mw-text-body-sm mw-text-secondary'>
                    {study.location ? <span>{study.location}</span> : null}
                    {study.duration ? <span>{study.duration}</span> : null}
                  </div>

                  {study.keyMetrics?.length ? (
                    <ul className='mt-4 grid gap-2'>
                      {study.keyMetrics.slice(0, 3).map(metric => (
                        <li
                          key={`${metric.value}-${metric.label}`}
                          className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] px-3 py-2 mw-text-body-sm'
                        >
                          <strong>{metric.value}</strong>
                          <span> {metric.label}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {study.tags?.length ? (
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {study.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className='mt-auto pt-5'>
                    <a className='mw-btn mw-btn--secondary' href={`/case-studies/${study.slug}`}>
                      <span>Read case study</span>
                      <ArrowRight size={14} aria-hidden='true' />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </SectionFrame>

        <SectionFrame
          ariaLabel='Case study patterns'
          tone='mist'
          heading={{
            eyebrow: 'Patterns',
            title: 'What strong system changes usually create',
            description:
              'Results vary by business. The common pattern is clearer visibility, cleaner handoffs, better follow-up, and less work depending on memory.',
          }}
        >
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
              <p className='mw-text-eyebrow mw-text-signal-cyan'>Visibility</p>
              <h3>Improved visibility</h3>
              <p>Across local search, service pages, and proof surfaces.</p>
            </article>
            <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
              <p className='mw-text-eyebrow mw-text-signal-cyan'>Enquiries</p>
              <h3>More qualified enquiries</h3>
              <p>From clearer paths and better intent capture.</p>
            </article>
            <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
              <p className='mw-text-eyebrow mw-text-signal-cyan'>Process</p>
              <h3>Cleaner processes</h3>
              <p>Less manual chasing and fewer loose handoffs.</p>
            </article>
            <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
              <p className='mw-text-eyebrow mw-text-signal-cyan'>Growth</p>
              <h3>Sustainable growth</h3>
              <p>Built around the way the business actually operates.</p>
            </article>
          </div>
        </SectionFrame>

        <DecisionPanel
          heading={{
            eyebrow: 'Next step',
            title: 'Want to know which system change would matter most for you?',
            description:
              'If one of these before-and-after patterns feels familiar, the next step is to test whether the same kind of system change would remove friction in your business.',
          }}
          actions={[
            {
              label: 'Start a Conversation',
              href: buildContactHref({
                system: 'smart-website-systems',
                sourceType: 'case-study',
                slug: 'case-study-help',
              }),
            },
          ]}
          expectations={[
            { num: '01', text: 'What pattern matches your business' },
            { num: '02', text: 'Where the current handoff breaks' },
            { num: '03', text: 'Which system change should come first' },
          ]}
          reassurance={{ noSell: 'No hard sell.', tone: 'Practical review' }}
        />
      </main>
    </CTARegistryProvider>
  );
}
