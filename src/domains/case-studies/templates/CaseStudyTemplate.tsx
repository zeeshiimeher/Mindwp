// Case-study template renderer only (props in, JSX out).
// No routing, fetching, or data lookups.

import React from 'react';

import {
  CaseStudyBusinessImpactSection,
  CaseStudyCTASection,
  CaseStudyDeliverablesSection,
  CaseStudyFAQSection,
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
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { primaryCta } from '@/config/primaryCta';

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
      primaryActionLabel?: string;
      primaryActionHref?: string;
      metaItems?: { text: string }[];
    };

type SectionOfType<T extends CaseStudyTemplateSection['type']> =
  CaseStudyTemplateSection extends infer S ? (S extends { type: T } ? S : never) : never;

function validateRequiredSections(sections: CaseStudyTemplateSection[]) {
  const requiredTypes: CaseStudyTemplateSection['type'][] = ['hero', 'cta'];

  const missing = requiredTypes.filter(type => !sections.some(s => s.type === type));
  if (missing.length > 0 && process.env.NODE_ENV === 'development') {
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
    primaryButtonHref?: string;
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
  const resolvedCtaPrimaryButtonLabel = cta?.primaryButtonLabel ?? primaryCta.label;
  const resolvedCtaPrimaryButtonHref = cta?.primaryButtonHref ?? primaryCta.href;
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
            primaryActionLabel: resolvedCtaPrimaryButtonLabel,
            primaryActionHref: resolvedCtaPrimaryButtonHref,
            metaItems: resolvedCtaMetaItems,
          },
        ];
      })();

  const missingSections = validateRequiredSections(resolvedSections);
  const heroSection = findSection(resolvedSections, 'hero');
  const ctaSection = findSection(resolvedSections, 'cta');

  if (missingSections.length > 0 && process.env.NODE_ENV === 'development') {
    return (
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
          <CaseStudyResultsSection
            key={`results-${index}`}
            detailedResultsBadgeLabel={resolvedDetailedResultsBadgeLabel}
            detailedResultsSectionTitle={resolvedDetailedResultsSectionTitle}
            results={section.results}
          />
        );

      case 'testimonial':
        if (!section.testimonial) return null;
        return (
          <section
            key={`testimonial-${index}`}
            className='case-study-detail-testimonial l-section bg-gradient-dark text-background'
            aria-label={resolvedTestimonialSectionAriaLabel}
          >
            <div className='l-container'>
              <TestimonialCard
                quote={section.testimonial.quote}
                author={section.testimonial.author}
                business={section.testimonial.role}
                rating={5}
                className='case-study-detail-testimonial__card'
              />
            </div>
          </section>
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
          <CaseStudyFAQSection
            key={`faq-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            {...(section.title !== undefined && { title: section.title })}
            {...(section.description !== undefined && { description: section.description })}
            items={section.items}
          />
        );

      default:
        return null;
    }
  }

  const inFlowSections = resolvedSections
    .filter(
      section =>
        section.type !== 'hero' &&
        section.type !== 'cta' &&
        section.type !== 'more' &&
        section.type !== 'faq'
    )
    .sort((a, b) => (SECTION_ORDER[a.type] ?? 99) - (SECTION_ORDER[b.type] ?? 99));

  const pinnedFaqSections = resolvedSections.filter(
    (section): section is SectionOfType<'faq'> => section.type === 'faq'
  );

  return (
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

      <SmartRelatedSection slug={metadata.slug} type='case-study' />

      {ctaSection && (
        <CaseStudyCTASection
          title={ctaSection.heading}
          description={ctaSection.body}
          primaryAction={{
            label: ctaSection.primaryActionLabel ?? resolvedCtaPrimaryButtonLabel,
            href: ctaSection.primaryActionHref ?? resolvedCtaPrimaryButtonHref,
          }}
          metaItems={ctaSection.metaItems ?? resolvedCtaMetaItems}
          backgroundColor='bg-gradient-primary'
        />
      )}
    </div>
  );
}
