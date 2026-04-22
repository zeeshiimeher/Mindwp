// Case-study template renderer only (props in, JSX out).
// No routing, fetching, or data lookups.

import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  CaseStudyBusinessImpactSection,
  CaseStudyDeliverablesSection,
  CaseStudyFeaturesSection,
  CaseStudyHeroSection,
  CaseStudyInvestmentSection,
  CaseStudyMetricsSection,
  CaseStudyProblemSection,
  CaseStudyProcessSection,
  CaseStudyResultsSection,
  CaseStudySolutionSection,
  CaseStudyWorkflowsSection,
} from '@/components/reusable/sections/case-studies';
import { TestimonialCard } from '@/components/reusable/single';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartCTA } from '@/components/system/SmartCTA';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { env } from '@/env';

import type { CaseStudyContent, CaseStudyMetadata } from './types';

const SECTION_ORDER: Record<string, number> = {
  metrics: 0,
  problem: 1,
  'business-impact': 2,
  solution: 3,
  deliverables: 4,
  workflows: 5,
  process: 6,
  features: 7,
  results: 8,
  testimonial: 9,
  investment: 10,
};

export type CaseStudyTemplateSection =
  | {
      type: 'hero';
      introHtml: React.ReactNode;
    }
  | {
      type: 'metrics';
      keyMetrics: CaseStudyContent['keyMetrics'];
    }
  | {
      type: 'problem';
      problemHeading: CaseStudyContent['problemHeading'];
      problemDescription: CaseStudyContent['problemDescription'];
      painPoints: CaseStudyContent['painPoints'];
    }
  | {
      type: 'solution';
      solutionHeading: CaseStudyContent['solutionHeading'];
      solutionDescription: CaseStudyContent['solutionDescription'];
      whatWeDid: CaseStudyContent['whatWeDid'];
    }
  | {
      type: 'process';
      howWeDidIt: CaseStudyContent['howWeDidIt'];
    }
  | {
      type: 'features';
      featuresUsed: CaseStudyContent['featuresUsed'];
    }
  | {
      type: 'results';
      results: CaseStudyContent['results'];
    }
  | {
      type: 'testimonial';
      testimonial: CaseStudyContent['testimonial'];
    }
  | {
      type: 'investment';
      investment: CaseStudyContent['investment'];
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
      type: 'more';
    }
  | {
      type: 'cta';
      heading: string;
      body: string;
      metaItems?: { text: string }[];
    };

type SectionOfType<T extends CaseStudyTemplateSection['type']> =
  CaseStudyTemplateSection extends infer S ? (S extends { type: T } ? S : never) : never;

function validateRequiredSections(sections: CaseStudyTemplateSection[]) {
  const requiredTypes: CaseStudyTemplateSection['type'][] = ['hero', 'cta'];
  const missing: CaseStudyTemplateSection['type'][] = [];

  for (const type of requiredTypes) {
    let found = false;
    for (const section of sections) {
      if (section.type === type) {
        found = true;
        break;
      }
    }

    if (!found) {
      missing.push(type);
    }
  }

  if (missing.length > 0 && env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(`CaseStudyTemplate: Missing required sections: ${missing.join(', ')}`);
  }
  return missing;
}

function findSection<T extends CaseStudyTemplateSection['type']>(
  sections: CaseStudyTemplateSection[],
  type: T
): SectionOfType<T> | null {
  const section = sections.find((entry): entry is SectionOfType<T> => entry.type === type);
  return section ?? null;
}

export function CaseStudyTemplate({
  pageId,
  metadata,
  content,
  sections,
  heroIntroHtml,
  ctaHeading,
  ctaBody,
  featuredImage,
  hero,
  metrics,
  problem,
  solution,
  process: processOverrides,
  features,
  results,
  testimonial,
  investment,
  cta,
}: {
  pageId: string;
  metadata: CaseStudyMetadata;
  content?: CaseStudyContent;
  sections?: CaseStudyTemplateSection[];
  heroIntroHtml?: React.ReactNode;
  ctaHeading?: string;
  ctaBody?: string;
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
  const backToCaseStudiesLabel = 'Back to Case Studies';
  const resolvedResultsSectionTitle = metrics?.resultsSectionTitle ?? 'The Results';
  const resolvedChallengeBadgeLabel = problem?.challengeBadgeLabel ?? 'The Challenge';
  const resolvedSolutionBadgeLabel = solution?.solutionBadgeLabel ?? 'The Solution';
  const resolvedImplementationBadgeLabel =
    processOverrides?.implementationBadgeLabel ?? 'Implementation';
  const resolvedImplementationSectionTitle =
    processOverrides?.implementationSectionTitle ?? 'How We Did It';
  const resolvedImplementationSectionSubtitle =
    processOverrides?.implementationSectionSubtitle ?? 'Our step-by-step process over 3 months';
  const resolvedTechStackBadgeLabel = features?.techStackBadgeLabel ?? 'Technology Stack';
  const resolvedTechStackSectionTitle =
    features?.techStackSectionTitle ?? 'Features & Tools We Used';
  const resolvedTechStackSectionSubtitle =
    features?.techStackSectionSubtitle ?? 'WordPress + GoHighLevel CRM + Integrations';
  const resolvedDetailedResultsBadgeLabel =
    results?.detailedResultsBadgeLabel ?? 'Detailed Results';
  const resolvedDetailedResultsSectionTitle =
    results?.detailedResultsSectionTitle ?? 'Before & After: The Complete Picture';
  const resolvedScenarioBadgeLabel = hero?.scenarioBadgeLabel ?? 'Implementation Scenario';
  const resolvedTestimonialSectionAriaLabel =
    testimonial?.testimonialSectionAriaLabel ?? 'Testimonial';
  const resolvedInvestmentBadgeLabel = investment?.investmentBadgeLabel ?? 'Investment & ROI';
  const resolvedInvestmentSectionTitle =
    investment?.investmentSectionTitle ?? 'What It Cost & What It Returned';
  const resolvedInvestmentFooterNoteHtml = investment?.investmentFooterNoteHtml ?? (
    <>
      <strong>Note:</strong> We work with small businesses on realistic budgets. Contact us for
      current pricing and available packages.
    </>
  );
  const resolvedCtaMetaItems = cta?.metaItems ?? [
    { text: 'Real implementation details' },
    { text: 'System-level results' },
    { text: 'Built for local businesses' },
  ];

  const resolvedSections: CaseStudyTemplateSection[] = sections
    ? sections
    : (() => {
        if (!content || !heroIntroHtml || !ctaHeading || !ctaBody) return [];
        return [
          { type: 'hero', introHtml: heroIntroHtml },
          { type: 'metrics', keyMetrics: content.keyMetrics },
          {
            type: 'problem',
            problemHeading: content.problemHeading,
            problemDescription: content.problemDescription,
            painPoints: content.painPoints,
          },
          {
            type: 'solution',
            solutionHeading: content.solutionHeading,
            solutionDescription: content.solutionDescription,
            whatWeDid: content.whatWeDid,
          },
          { type: 'process', howWeDidIt: content.howWeDidIt },
          { type: 'features', featuresUsed: content.featuresUsed },
          { type: 'results', results: content.results },
          { type: 'testimonial', testimonial: content.testimonial },
          { type: 'investment', investment: content.investment },
          { type: 'more' },
          {
            type: 'cta',
            heading: ctaHeading,
            body: ctaBody,
            metaItems: resolvedCtaMetaItems,
          },
        ];
      })();

  const missingSections = validateRequiredSections(resolvedSections);
  const heroSection = findSection(resolvedSections, 'hero');
  const ctaSection = findSection(resolvedSections, 'cta');

  if (missingSections.length > 0 && env.NODE_ENV === 'development') {
    return (
      <CTARegistryProvider pageId={pageId} pageType='case-study'>
        <div className='case-study-detail'>
          <main className='l-section'>
            <div className='l-container'>
              <div className='resource-page__dev-error'>
                <h2 className='resource-page__dev-error-title'>
                  Case Study Template Configuration Error
                </h2>
                <p className='resource-page__dev-error-text'>
                  This case study is missing required sections. Please add:
                </p>
                <ul className='resource-page__dev-error-list'>
                  {missingSections.map(section => (
                    <li key={section} className='capitalize'>
                      {section.replace('-', ' ')} section
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </CTARegistryProvider>
    );
  }

  function renderSection(section: CaseStudyTemplateSection, index: number) {
    switch (section.type) {
      case 'metrics':
        return (
          <CaseStudyMetricsSection
            key={`metrics-${index}`}
            resultsSectionTitle={resolvedResultsSectionTitle}
            keyMetrics={section.keyMetrics}
          />
        );

      case 'problem':
        return (
          <CaseStudyProblemSection
            key={`problem-${index}`}
            challengeBadgeLabel={resolvedChallengeBadgeLabel}
            problemHeading={section.problemHeading}
            problemDescription={section.problemDescription}
            painPoints={section.painPoints}
          />
        );

      case 'solution':
        return (
          <CaseStudySolutionSection
            key={`solution-${index}`}
            solutionBadgeLabel={resolvedSolutionBadgeLabel}
            solutionHeading={section.solutionHeading}
            solutionDescription={section.solutionDescription}
            whatWeDid={section.whatWeDid}
          />
        );

      case 'process':
        return (
          <CaseStudyProcessSection
            key={`process-${index}`}
            implementationBadgeLabel={resolvedImplementationBadgeLabel}
            implementationSectionTitle={resolvedImplementationSectionTitle}
            implementationSectionSubtitle={resolvedImplementationSectionSubtitle}
            howWeDidIt={section.howWeDidIt}
          />
        );

      case 'features':
        return (
          <CaseStudyFeaturesSection
            key={`features-${index}`}
            techStackBadgeLabel={resolvedTechStackBadgeLabel}
            techStackSectionTitle={resolvedTechStackSectionTitle}
            techStackSectionSubtitle={resolvedTechStackSectionSubtitle}
            featuresUsed={section.featuresUsed}
          />
        );

      case 'results':
        return (
          <React.Fragment key={`results-${index}`}>
            <CaseStudyResultsSection
              detailedResultsBadgeLabel={resolvedDetailedResultsBadgeLabel}
              detailedResultsSectionTitle={resolvedDetailedResultsSectionTitle}
              results={section.results}
            />
            <div className='l-container'>
              <div className='text-sm text-muted-foreground l-max-w-3xl pt-2 pb-3'>
                These gains came from fixing the workflow underneath the result, not just making the
                page look better. The next step is to test whether the same handoff, response, or
                routing issue is still slowing down your business and which system change would
                remove it first.
              </div>
            </div>
            <SmartCTA
              system={metadata.systems[0] ?? 'smart-website-systems'}
              pageType='case-study'
              slug={metadata.slug}
              intent='diagnostic'
              position='mid'
              title='Want to see which handoff fix would create the biggest lift in your business?'
              description='We can map which part of your enquiry, routing, or follow-up flow matches the breakdown this case study fixed so you leave with a clearer first priority before committing to implementation.'
              primaryActionVariant='primary'
              backgroundColor='bg-base'
            />
          </React.Fragment>
        );

      case 'testimonial':
        if (!section.testimonial) return null;
        return (
          <SectionWrapper
            key={`testimonial-${index}`}
            className='case-study-detail-testimonial text-background'
            background='bg-gradient-dark'
            aria-label={resolvedTestimonialSectionAriaLabel}
          >
            <TestimonialCard
              quote={section.testimonial.quote}
              author={section.testimonial.author}
              business={section.testimonial.role}
              rating={5}
              className='case-study-detail-testimonial__card'
            />
          </SectionWrapper>
        );

      case 'investment':
        return (
          <CaseStudyInvestmentSection
            key={`investment-${index}`}
            investmentBadgeLabel={resolvedInvestmentBadgeLabel}
            investmentSectionTitle={resolvedInvestmentSectionTitle}
            investmentFooterNoteHtml={resolvedInvestmentFooterNoteHtml}
            investment={section.investment}
          />
        );

      case 'business-impact':
        return (
          <CaseStudyBusinessImpactSection
            key={`business-impact-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            title={section.title}
            {...(section.description !== undefined && { description: section.description })}
            impacts={section.impacts}
          />
        );

      case 'deliverables':
        return (
          <CaseStudyDeliverablesSection
            key={`deliverables-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            title={section.title}
            {...(section.description !== undefined && { description: section.description })}
            items={section.items}
            {...(section.columns !== undefined && { columns: section.columns })}
          />
        );

      case 'workflows':
        return (
          <CaseStudyWorkflowsSection
            key={`workflows-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            title={section.title}
            {...(section.description !== undefined && { description: section.description })}
            workflows={section.workflows}
          />
        );

      case 'faq':
        return (
          <FAQSection
            key={`faq-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            {...(section.title !== undefined && { title: section.title })}
            {...(section.description !== undefined && { description: section.description })}
            faqs={section.items}
            cssPrefix='case-study-detail-faq'
            displayMode='accordion'
          />
        );

      default:
        return null;
    }
  }

  const inFlowSections: CaseStudyTemplateSection[] = [];
  const pinnedFaqSections: Array<SectionOfType<'faq'>> = [];

  for (const section of resolvedSections) {
    if (section.type === 'faq') {
      pinnedFaqSections.push(section);
      continue;
    }

    if (section.type === 'hero' || section.type === 'cta' || section.type === 'more') {
      continue;
    }

    const targetOrder = SECTION_ORDER[section.type] ?? 99;
    let insertAt = inFlowSections.length;
    for (let index = 0; index < inFlowSections.length; index += 1) {
      const existingOrder = SECTION_ORDER[inFlowSections[index].type] ?? 99;
      if (targetOrder < existingOrder) {
        insertAt = index;
        break;
      }
    }
    inFlowSections.splice(insertAt, 0, section);
  }

  return (
    <CTARegistryProvider pageId={pageId} pageType='case-study'>
      <div className='case-study-detail'>
        {featuredImage ? (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${featuredImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <CaseStudyHeroSection
              backToCaseStudiesLabel={backToCaseStudiesLabel}
              industry={metadata.industryLabel}
              duration={metadata.duration}
              heroHeadline={metadata.heroHeadline}
              scenarioBadge={resolvedScenarioBadgeLabel}
              heroIntroHtml={heroSection?.introHtml}
              business={metadata.business}
              location={metadata.location}
              completedDate={metadata.completedDate}
              backgroundColor=''
            />
          </div>
        ) : (
          <CaseStudyHeroSection
            backToCaseStudiesLabel={backToCaseStudiesLabel}
            industry={metadata.industryLabel}
            duration={metadata.duration}
            heroHeadline={metadata.heroHeadline}
            scenarioBadge={resolvedScenarioBadgeLabel}
            heroIntroHtml={heroSection?.introHtml}
            business={metadata.business}
            location={metadata.location}
            completedDate={metadata.completedDate}
          />
        )}

        {inFlowSections.map((section, index) => renderSection(section, index))}

        {pinnedFaqSections.map((section, index) => renderSection(section, index))}
        {ctaSection && (
          <SmartCTA
            system={metadata.systems[0] ?? 'smart-website-systems'}
            pageType='case-study'
            slug={metadata.slug}
            intent='conversion'
            position='footer'
            title={ctaSection.heading}
            description={ctaSection.body}
            metaItems={ctaSection.metaItems ?? resolvedCtaMetaItems}
            backgroundColor='bg-gradient-primary'
          />
        )}
        <SmartRelatedSection
          pageId={`case-study:${metadata.slug}`}
          pageType='case-study'
          slug={metadata.slug}
        />
      </div>
    </CTARegistryProvider>
  );
}
