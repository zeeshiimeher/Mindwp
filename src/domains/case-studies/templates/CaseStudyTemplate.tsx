// Case-study template renderer only (props in, JSX out).
// No routing, fetching, or data lookups.
import React from 'react';
import { ArrowLeft } from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { SectionShell } from '@/components/layout/SectionShell';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyMetadata } from './types';

export type CaseStudyTemplateSection =
  | {
      type: 'hero';
      introHtml: React.ReactNode;
    }
  | {
      type: 'metrics';
      keyMetrics: Array<{ value: string; label: string; color?: string }>;
    }
  | {
      type: 'problem';
      problemHeading?: string;
      problemDescription?: string[];
      painPoints?: string[];
    }
  | {
      type: 'solution';
      solutionHeading?: string;
      solutionDescription?: string;
      whatWeDid?: {
        title: string;
        description: string;
        icon: string;
      }[];
    }
  | {
      type: 'process';
      howWeDidIt?: {
        phase: string;
        title: string;
        description: string;
        duration: string;
      }[];
    }
  | {
      type: 'features';
      featuresUsed?: {
        category: string;
        features: string[];
      }[];
    }
  | {
      type: 'results';
      results: {
        metric?: string;
        before?: string;
        after?: string;
        improvement?: string;
        title?: string;
        description: string;
      }[];
    }
  | {
      type: 'testimonial';
      testimonial?: {
        quote: string;
        author: string;
        role: string;
      };
    }
  | {
      type: 'investment';
      investment?: {
        setup: string;
        monthly: string;
        roi?: string;
      };
    }
  | {
      type: 'business-impact';
      badge?: string;
      title: string;
      description?: string;
      impacts: string[];
    }
  | {
      type: 'deliverables';
      badge?: string;
      title: string;
      description?: string;
      items: string[];
      columns?: 2 | 3 | 4;
    }
  | {
      type: 'workflows';
      badge?: string;
      title: string;
      description?: string;
      workflows: Array<{ trigger: string; actions: string[] }>;
    }
  | {
      type: 'faq';
      badge?: string;
      title?: string;
      description?: string;
      items: Array<{ question: string; answer: string }>;
    }
  | {
      type: 'cta';
      heading: string;
      body: string;
      metaItems?: { text: string }[];
    };

const renderableCaseStudySectionTypes = new Set<CaseStudyTemplateSection['type']>([
  'hero',
  'metrics',
  'problem',
  'solution',
  'process',
  'features',
  'results',
  'testimonial',
  'investment',
  'business-impact',
  'deliverables',
  'workflows',
  'faq',
  'cta',
]);

function isSectionArray(value: unknown) {
  return Array.isArray(value) && value.length > 0;
}

function validateRenderableSection(section: CaseStudyTemplateSection) {
  if (!renderableCaseStudySectionTypes.has(section.type)) return false;

  switch (section.type) {
    case 'hero':
    case 'metrics':
    case 'testimonial':
    case 'business-impact':
    case 'deliverables':
    case 'cta':
      return true;
    case 'problem':
      return Boolean(
        section.problemHeading && section.problemDescription?.length && section.painPoints?.length
      );
    case 'solution':
      return Boolean(
        section.solutionHeading && section.solutionDescription && section.whatWeDid?.length
      );
    case 'process':
      return isSectionArray(section.howWeDidIt);
    case 'features':
      return isSectionArray(section.featuresUsed);
    case 'results':
      return isSectionArray(section.results);
    case 'investment':
      return Boolean(section.investment);
    case 'workflows':
      return isSectionArray(section.workflows);
    case 'faq':
      return isSectionArray(section.items);
    default:
      return false;
  }
}

export function getCaseStudyRenderedSectionTypes(sections: CaseStudyTemplateSection[]) {
  return sections.filter(validateRenderableSection).map(section => section.type);
}

export function CaseStudyTemplate({
  pageId,
  metadata,
  sections,
}: {
  pageId: string;
  metadata: CaseStudyMetadata;
  sections?: CaseStudyTemplateSection[];
  featuredImage?: string | null;
  hero?: {
    scenarioBadgeLabel?: string;
  };
  metrics?: {
    resultsSectionTitle?: string;
  };
  problem?: {
    challengeBadgeLabel?: string;
  };
  solution?: {
    solutionBadgeLabel?: string;
  };
  process?: {
    implementationBadgeLabel?: string;
    implementationSectionTitle?: string;
    implementationSectionSubtitle?: string;
  };
  features?: {
    techStackBadgeLabel?: string;
    techStackSectionTitle?: string;
    techStackSectionSubtitle?: string;
  };
  results?: {
    detailedResultsBadgeLabel?: string;
    detailedResultsSectionTitle?: string;
  };
  testimonial?: {
    testimonialSectionAriaLabel?: string;
  };
  investment?: {
    investmentBadgeLabel?: string;
    investmentSectionTitle?: string;
    investmentFooterNoteHtml?: React.ReactNode;
  };
  cta?: {
    primaryButtonLabel?: string;
    metaItems?: { text: string }[];
  };
}) {
  const resolvedSections = sections ?? [];
  const renderedSections = resolvedSections.filter(validateRenderableSection);
  const primarySystem = metadata.primarySystem ?? 'smart-website-systems';
  const ctaSection = renderedSections.find(section => section.type === 'cta');

  return (
    <CTARegistryProvider pageId={pageId} pageType='case-study' primarySystem={primarySystem}>
      <main>
        <SectionShell
          ariaLabel={`${metadata.business} case study`}
          tone='mist'
          heading={{
            eyebrow: metadata.industryLabel,
            title: metadata.heroHeadline,
            description: `${metadata.business}${metadata.location ? ` · ${metadata.location}` : ''}`,
          }}
        >
          <div className='flex flex-wrap items-center gap-3'>
            <a className='mw-btn mw-btn--secondary' href='/case-studies'>
              <ArrowLeft size={14} aria-hidden='true' />
              <span>Back to Case Studies</span>
            </a>
            {metadata.duration ? (
              <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                {metadata.duration}
              </span>
            ) : null}
            {metadata.completedDate ? (
              <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                {metadata.completedDate}
              </span>
            ) : null}
          </div>
        </SectionShell>

        {renderedSections.length > 0 ? (
          <SectionShell
            ariaLabel='Case study breakdown'
            tone='white'
            heading={{
              eyebrow: 'Breakdown',
              title: 'What changed in the system',
              description:
                'This clean case-study renderer keeps the case content visible while the final case-study design is rebuilt.',
            }}
          >
            <div className='grid gap-5'>
              {renderedSections
                .filter(section => section.type !== 'cta')
                .map((section, index) => (
                  <CaseStudySectionBlock
                    key={`${section.type}-${index}`}
                    section={section}
                    index={index}
                  />
                ))}
            </div>
          </SectionShell>
        ) : null}

        <DecisionPanel
          heading={{
            eyebrow: 'Next step',
            title:
              ctaSection?.type === 'cta'
                ? ctaSection.heading
                : 'See where this pattern applies to your business.',
            description:
              ctaSection?.type === 'cta'
                ? ctaSection.body
                : 'If this case study looks familiar, the next step is to find which system change would remove the same friction in your business.',
          }}
          actions={[
            {
              label: 'Start a Conversation',
              href: buildContactHref({
                system: primarySystem,
                sourceType: 'case-study',
                slug: metadata.slug,
              }),
            },
          ]}
          expectations={
            ctaSection?.type === 'cta' && ctaSection.metaItems?.length
              ? ctaSection.metaItems.map((item, index) => ({
                  num: String(index + 1).padStart(2, '0'),
                  text: item.text,
                }))
              : [
                  { num: '01', text: 'What changed in the case study' },
                  { num: '02', text: 'Where your current handoff breaks' },
                  { num: '03', text: 'What should be fixed first' },
                ]
          }
          reassurance={{ noSell: 'No hard sell.', tone: 'Practical review' }}
        />
      </main>
    </CTARegistryProvider>
  );
}

function CaseStudySectionBlock({
  section,
  index,
}: {
  section: CaseStudyTemplateSection;
  index: number;
}) {
  switch (section.type) {
    case 'hero':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Scenario</p>
          <h3>Starting point</h3>
          <div>{section.introHtml}</div>
        </article>
      );

    case 'metrics':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Metrics</p>
          <h3>The visible result markers</h3>
          <div className='grid gap-3 md:grid-cols-3'>
            {section.keyMetrics.map(metric => (
              <div key={`${metric.value}-${metric.label}`} className='mw-surface-panel p-4'>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </article>
      );

    case 'problem':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Problem</p>
          <h3>{section.problemHeading}</h3>
          <div className='grid gap-3'>
            {section.problemDescription?.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.painPoints?.length ? (
            <ul className='mt-4 grid gap-3'>
              {section.painPoints.map(point => (
                <li key={point} className='mw-surface-panel p-4'>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      );

    case 'solution':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Solution</p>
          <h3>{section.solutionHeading}</h3>
          {section.solutionDescription ? <p>{section.solutionDescription}</p> : null}
          {section.whatWeDid?.length ? (
            <div className='mt-4 grid gap-3 md:grid-cols-3'>
              {section.whatWeDid.map(item => (
                <div key={item.title} className='mw-surface-panel p-4'>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ) : null}
        </article>
      );

    case 'process':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Process</p>
          <h3>How the change was implemented</h3>
          <div className='grid gap-3'>
            {section.howWeDidIt?.map(phase => (
              <div key={`${phase.phase}-${phase.title}`} className='mw-surface-panel p-4'>
                <p className='mw-text-eyebrow mw-text-signal-cyan'>{phase.phase}</p>
                <strong>{phase.title}</strong>
                <p>{phase.description}</p>
                <p className='mw-text-body-sm mw-text-secondary'>{phase.duration}</p>
              </div>
            ))}
          </div>
        </article>
      );

    case 'features':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>System pieces</p>
          <h3>Features and tools used</h3>
          <div className='grid gap-3 md:grid-cols-2'>
            {section.featuresUsed?.map(group => (
              <div key={group.category} className='mw-surface-panel p-4'>
                <strong>{group.category}</strong>
                <ul className='mt-3 grid gap-2'>
                  {group.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      );

    case 'results':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Results</p>
          <h3>Before and after</h3>
          <div className='grid gap-3 md:grid-cols-2'>
            {section.results.map(result => (
              <div
                key={`${result.title ?? result.metric ?? result.description}-${index}`}
                className='mw-surface-panel p-4'
              >
                {result.metric ? (
                  <p className='mw-text-eyebrow mw-text-signal-cyan'>{result.metric}</p>
                ) : null}
                {result.title ? <strong>{result.title}</strong> : null}
                {result.before || result.after ? (
                  <p>
                    {result.before ? `Before: ${result.before}` : ''}
                    {result.before && result.after ? ' · ' : ''}
                    {result.after ? `After: ${result.after}` : ''}
                  </p>
                ) : null}
                {result.improvement ? <p>{result.improvement}</p> : null}
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        </article>
      );

    case 'testimonial':
      if (!section.testimonial) return null;
      return (
        <blockquote className='mw-surface-card-soft p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Testimonial</p>
          <p>{section.testimonial.quote}</p>
          <footer className='mw-text-secondary'>
            — {section.testimonial.author}, {section.testimonial.role}
          </footer>
        </blockquote>
      );

    case 'investment':
      if (!section.investment) return null;
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Investment</p>
          <h3>What it cost and returned</h3>
          <div className='grid gap-3 md:grid-cols-3'>
            <MetricCard label='Setup' value={section.investment.setup} />
            <MetricCard label='Monthly' value={section.investment.monthly} />
            {section.investment.roi ? (
              <MetricCard label='ROI' value={section.investment.roi} />
            ) : null}
          </div>
        </article>
      );

    case 'business-impact':
      return (
        <ListSection
          eyebrow={section.badge ?? 'Business impact'}
          title={section.title}
          description={section.description}
          items={section.impacts}
        />
      );

    case 'deliverables':
      return (
        <ListSection
          eyebrow={section.badge ?? 'Deliverables'}
          title={section.title}
          description={section.description}
          items={section.items}
        />
      );

    case 'workflows':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>{section.badge ?? 'Workflows'}</p>
          <h3>{section.title}</h3>
          {section.description ? <p>{section.description}</p> : null}
          <div className='mt-4 grid gap-3'>
            {section.workflows.map(workflow => (
              <div key={workflow.trigger} className='mw-surface-panel p-4'>
                <strong>{workflow.trigger}</strong>
                <ul className='mt-3 grid gap-2'>
                  {workflow.actions.map(action => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      );

    case 'faq':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>{section.badge ?? 'FAQ'}</p>
          <h3>{section.title ?? 'Frequently asked questions'}</h3>
          {section.description ? <p>{section.description}</p> : null}
          <dl className='mt-4 grid gap-4'>
            {section.items.map(item => (
              <div key={item.question}>
                <dt>
                  <strong>{item.question}</strong>
                </dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </article>
      );

    case 'cta':
      return null;

    default:
      return null;
  }
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className='mw-surface-panel p-4'>
      <p className='mw-text-eyebrow mw-text-signal-cyan'>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function ListSection({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: string[];
}) {
  return (
    <article className='mw-surface-card p-6'>
      <p className='mw-text-eyebrow mw-text-signal-cyan'>{eyebrow}</p>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      <ul className='mt-4 grid gap-3'>
        {items.map(item => (
          <li key={item} className='mw-surface-panel p-4'>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
