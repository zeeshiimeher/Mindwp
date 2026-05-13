// Case-study template renderer only (props in, JSX out).
// No routing, fetching, or data lookups.
import React from 'react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
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
import { env } from '@/env';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';
import { systemDevelopmentWarning } from '@/lib/system/runtimeWarnings';

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
  if (!renderableCaseStudySectionTypes.has(section.type)) {
    return false;
  }

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

function validateSectionQuality(sections: CaseStudyTemplateSection[]) {
  return sections;
}

export function CaseStudyTemplate({
  pageId,
  metadata,
  sections,
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
  cta: _cta,
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
    features?.techStackSectionSubtitle ?? 'WordPress + CRM workflows + integrations';
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

  validateSectionQuality(resolvedSections);

  if (resolvedSections.length < 4 && env.NODE_ENV === 'development') {
    systemDevelopmentWarning(
      `CaseStudyTemplate: ${metadata.slug} has fewer than 4 authored sections.`
    );
  }

  function renderSection(section: CaseStudyTemplateSection, index: number) {
    switch (section.type) {
      case 'hero':
        if (featuredImage) {
          return (
            <div
              key={`hero-${index}`}
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
                heroIntroHtml={section.introHtml}
                business={metadata.business}
                location={metadata.location}
                completedDate={metadata.completedDate}
                backgroundColor=''
              />
            </div>
          );
        }

        return (
          <CaseStudyHeroSection
            key={`hero-${index}`}
            backToCaseStudiesLabel={backToCaseStudiesLabel}
            industry={metadata.industryLabel}
            duration={metadata.duration}
            heroHeadline={metadata.heroHeadline}
            scenarioBadge={resolvedScenarioBadgeLabel}
            heroIntroHtml={section.introHtml}
            business={metadata.business}
            location={metadata.location}
            completedDate={metadata.completedDate}
          />
        );

      case 'metrics':
        return (
          <CaseStudyMetricsSection
            key={`metrics-${index}`}
            resultsSectionTitle={resolvedResultsSectionTitle}
            keyMetrics={section.keyMetrics.map(metric => ({
              ...metric,
              icon: 'BarChart3',
            }))}
          />
        );

      case 'problem':
        if (!section.problemHeading || !section.problemDescription || !section.painPoints) {
          return null;
        }

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
        if (!section.solutionHeading || !section.solutionDescription || !section.whatWeDid) {
          return null;
        }

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
        if (!section.howWeDidIt) {
          return null;
        }

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
        if (!section.featuresUsed) {
          return null;
        }

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
        if (!section.testimonial) {
          return null;
        }

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
        if (!section.investment) {
          return null;
        }

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
        if (!section.description) {
          return null;
        }

        return (
          <CaseStudyBusinessImpactSection
            key={`business-impact-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            title={section.title}
            description={section.description}
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
        if (!section.description) {
          return null;
        }

        return (
          <CaseStudyWorkflowsSection
            key={`workflows-${index}`}
            {...(section.badge !== undefined && { badge: section.badge })}
            title={section.title}
            description={section.description}
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

      case 'cta':
        return (
          <DecisionPanel
            key={`cta-${index}`}
            heading={{
              title: section.heading,
              description: section.body,
            }}
            actions={[
              {
                label: PRIMARY_CTA_LABEL,
                href: buildContactHref({
                  system: metadata.systems?.[0] ?? 'smart-website-systems',
                  sourceType: 'case-study',
                  slug: metadata.slug,
                }),
                variant: 'primary',
              },
            ]}
          />
        );

      default:
        return null;
    }
  }

  return (
    <CTARegistryProvider
      pageId={pageId}
      pageType='case-study'
      primarySystem={metadata.systems?.[0] ?? 'smart-website-systems'}
    >
      <div className='case-study-detail'>
        {resolvedSections.map((section, index) => renderSection(section, index))}
      </div>
    </CTARegistryProvider>
  );
}
