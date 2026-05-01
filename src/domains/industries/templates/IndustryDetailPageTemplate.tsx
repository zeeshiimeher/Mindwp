import React from 'react';

import { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import { ServiceSpectrumCardsSection } from '@/components/reusable/sections/core/ServiceSpectrumCardsSection';
import {
  IndustryCaseStudiesSection,
  IndustryChallengesSection,
  IndustryChecklistSection,
  IndustryComparisonSection,
  IndustryHeroSection,
  IndustryOperatingPatternsSection,
  IndustryPackagesSection,
  IndustryPathwaysSection,
  IndustrySolutionsSection,
  IndustryWorkflowExamplesSection,
} from '@/components/reusable/sections/industries';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { IndustryExploreSection } from '@/domains/industries/components/IndustryExploreSection';
import { resolveIndustryPathwaySection } from '@/domains/industries/utils/industryPresentation';

import type { IndustryExploreSectionProps } from '../components/IndustryExploreSection';

export type IndustryDetailPageTemplateProps = {
  slug: string;
  system: string;
  hero: React.ComponentProps<typeof IndustryHeroSection>;
  challenges?: React.ComponentProps<typeof IndustryChallengesSection>;
  operatingPatterns?: React.ComponentProps<typeof IndustryOperatingPatternsSection>;
  imageStrip?: React.ComponentProps<typeof ImageAccordionStripSection>;
  decisionChecklist?: React.ComponentProps<typeof IndustryChecklistSection>;
  solutions?: React.ComponentProps<typeof IndustrySolutionsSection>;
  systemLayers?: React.ComponentProps<typeof IndustrySolutionsSection>;

  comparison?: React.ComponentProps<typeof IndustryComparisonSection>;
  packages?: React.ComponentProps<typeof IndustryPackagesSection>;
  pathways?: React.ComponentProps<typeof IndustryPathwaysSection>;
  workflowExamples?: React.ComponentProps<typeof IndustryWorkflowExamplesSection>;

  caseStudies?: React.ComponentProps<typeof IndustryCaseStudiesSection>;
  explore?: Omit<IndustryExploreSectionProps, 'title'>;

  faq: React.ComponentProps<typeof FAQSection>;
  cta: {
    heading: {
      title: string;
      description: string;
      kicker?: string;
    };
    actions: [{ label: string; href: string; primary: true }];
  };
};

export function IndustryDetailPageTemplate({
  slug,
  system,
  hero,
  challenges,
  operatingPatterns,
  imageStrip,
  decisionChecklist,
  solutions,
  systemLayers,
  comparison,
  packages,
  pathways,
  workflowExamples,
  caseStudies,
  explore,
  faq,
  cta,
}: IndustryDetailPageTemplateProps) {
  const challengeSection = operatingPatterns ?? challenges;
  const solutionSection = systemLayers ?? solutions;
  const pathwaySection = pathways ?? packages;
  const resolvedPathwaySection = resolveIndustryPathwaySection(
    pathwaySection,
    system,
    slug,
    'industry-detail'
  );

  if (resolvedPathwaySection && !resolvedPathwaySection.title) {
    throw new Error(
      'IndustryDetailPageTemplate requires pathways.title when pathways are provided.'
    );
  }

  let resolvedDetailJourneySection:
    | React.ComponentProps<typeof ServiceSpectrumCardsSection>
    | undefined;

  if (resolvedPathwaySection) {
    const resolvedPathwayTitle = resolvedPathwaySection.title;

    if (!resolvedPathwayTitle) {
      throw new Error(
        'IndustryDetailPageTemplate requires pathways.title when pathways are provided.'
      );
    }

    resolvedDetailJourneySection = {
      badge: resolvedPathwaySection.badge,
      title: resolvedPathwayTitle,
      description: resolvedPathwaySection.description,
      backgroundColor: resolvedPathwaySection.backgroundColor,
      cssPrefix: resolvedPathwaySection.cssPrefix,
      cards: resolvedPathwaySection.packages.map(pkg => ({
        title: pkg.name,
        description: `${pkg.price} — ${pkg.description}`,
        points: pkg.priceDetail ? [pkg.priceDetail, ...pkg.features] : pkg.features,
        featured: pkg.popular,
      })),
    };
  }

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <main role='main'>
          <IndustryHeroSection
            {...hero}
            heroActions={{
              primaryActionVariant: 'primary',
            }}
          />

          {imageStrip && <ImageAccordionStripSection {...imageStrip} />}

          {challengeSection && <IndustryOperatingPatternsSection {...challengeSection} />}

          {comparison && <IndustryComparisonSection {...comparison} />}
          {decisionChecklist && <IndustryChecklistSection {...decisionChecklist} />}
          {resolvedDetailJourneySection && (
            <ServiceSpectrumCardsSection {...resolvedDetailJourneySection} />
          )}
          {workflowExamples && <IndustryWorkflowExamplesSection {...workflowExamples} />}
          {solutionSection && <IndustrySolutionsSection {...solutionSection} />}
          {explore && <IndustryExploreSection title='Explore Related Systems' {...explore} />}
          {caseStudies && <IndustryCaseStudiesSection {...caseStudies} />}
          <FAQSection {...faq} />
          <PrimaryCTASection heading={cta.heading} actions={cta.actions} />
        </main>
      </ErrorBoundary>
    </>
  );
}
