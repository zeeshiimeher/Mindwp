import React from 'react';

import { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import {
  IndustryCaseStudiesSection,
  IndustryChallengesSection,
  IndustryComparisonSection,
  IndustryCTASection,
  IndustryFAQSection,
  IndustryHeroSection,
  IndustryOperatingPatternsSection,
  IndustryPackagesSection,
  IndustryPathwaysSection,
  IndustrySolutionsSection,
  IndustryWorkflowExamplesSection,
} from '@/components/reusable/sections/industries';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import {
  resolveIndustryDetailExplore,
  resolveIndustryPathwaySection,
} from '@/lib/cta/industryPresentation';
import { buildContactHref } from '@/lib/contact/contactHref';

import { IndustryExploreSection } from '../components/IndustryExploreSection';

export type IndustryDetailPageTemplateProps = {
  slug: string;
  system: string;
  hero: React.ComponentProps<typeof IndustryHeroSection>;
  challenges?: React.ComponentProps<typeof IndustryChallengesSection>;
  operatingPatterns?: React.ComponentProps<typeof IndustryOperatingPatternsSection>;
  imageStrip?: React.ComponentProps<typeof ImageAccordionStripSection>;
  solutions?: React.ComponentProps<typeof IndustrySolutionsSection>;
  systemLayers?: React.ComponentProps<typeof IndustrySolutionsSection>;

  comparison?: React.ComponentProps<typeof IndustryComparisonSection>;
  packages?: React.ComponentProps<typeof IndustryPackagesSection>;
  pathways?: React.ComponentProps<typeof IndustryPathwaysSection>;
  workflowExamples?: React.ComponentProps<typeof IndustryWorkflowExamplesSection>;

  caseStudies?: React.ComponentProps<typeof IndustryCaseStudiesSection>;
  explore?: Omit<React.ComponentProps<typeof IndustryExploreSection>, 'title'>;

  faq: React.ComponentProps<typeof IndustryFAQSection>;
  cta: React.ComponentProps<typeof IndustryCTASection>;
};

export function IndustryDetailPageTemplate({
  slug,
  system,
  hero,
  challenges,
  operatingPatterns,
  imageStrip,
  solutions,
  systemLayers,
  comparison,
  packages,
  pathways,
  workflowExamples,
  caseStudies: _caseStudies,
  explore,
  faq,
  cta,
}: IndustryDetailPageTemplateProps) {
  const challengeSection = operatingPatterns ?? challenges;
  const solutionSection = systemLayers ?? solutions;
  const pathwaySection = pathways ?? packages;
  const resolvedPathwaySection = resolveIndustryPathwaySection(pathwaySection, system, slug);
  const resolvedExplore = resolveIndustryDetailExplore(explore);
  const resolvedCta = cta.primaryAction?.href
    ? {
        ...cta,
        primaryAction: {
          ...cta.primaryAction,
          href: buildContactHref(cta.primaryAction.href, {
            system,
            sourceType: 'industry',
            slug,
          }),
        },
      }
    : cta;

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <main role='main'>
          <IndustryHeroSection {...hero} />

          {imageStrip && <ImageAccordionStripSection {...imageStrip} />}

          {challengeSection && <IndustryOperatingPatternsSection {...challengeSection} />}

          {comparison && <IndustryComparisonSection {...comparison} />}
          {resolvedPathwaySection && <IndustryPathwaysSection {...resolvedPathwaySection} />}
          {workflowExamples && <IndustryWorkflowExamplesSection {...workflowExamples} />}
          {solutionSection && <IndustrySolutionsSection {...solutionSection} />}
          {resolvedExplore && <IndustryExploreSection title='Relevant Modules' {...resolvedExplore} />}
          <IndustryFAQSection {...faq} />
          <IndustryCTASection {...resolvedCta} />
          <SmartRelatedSection slug={slug} type='industry-detail' />
        </main>
      </ErrorBoundary>
    </>
  );
}
