import React from 'react';

import { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import { ServiceSpectrumCardsSection } from '@/components/reusable/sections/core/ServiceSpectrumCardsSection';
import {
  IndustryCaseStudiesSection,
  IndustryChallengesSection,
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
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';
import { resolveIndustryPathwaySection } from '@/lib/cta/industryPresentation';

import type { IndustryExploreSectionProps } from '../components/IndustryExploreSection';

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
  explore?: Omit<IndustryExploreSectionProps, 'title'>;

  faq: React.ComponentProps<typeof FAQSection>;
  cta: Pick<
    SmartCTAProps,
    | 'title'
    | 'description'
    | 'metaItems'
    | 'cssPrefix'
    | 'backgroundColor'
    | 'headingLevel'
    | 'wrapper'
    | 'includeContainer'
  > & {
    primaryAction?: { variant?: SmartCTAProps['primaryActionVariant'] };
  };
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
  explore: _explore,
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
  const resolvedDetailJourneySection = resolvedPathwaySection
    ? {
        badge: resolvedPathwaySection.badge,
        title: resolvedPathwaySection.title ?? '',
        description: resolvedPathwaySection.description,
        backgroundColor: resolvedPathwaySection.backgroundColor,
        cssPrefix: resolvedPathwaySection.cssPrefix,
        cards: resolvedPathwaySection.packages.map(pkg => ({
          title: pkg.name,
          description: `${pkg.price} — ${pkg.description}`,
          points: pkg.priceDetail ? [pkg.priceDetail, ...pkg.features] : pkg.features,
          featured: pkg.popular,
        })),
      }
    : undefined;

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <main role='main'>
          <IndustryHeroSection
            {...hero}
            smartCta={{
              system,
              pageType: 'industry-detail',
              slug,
              primaryActionVariant: 'primary',
            }}
          />

          {imageStrip && <ImageAccordionStripSection {...imageStrip} />}

          {challengeSection && <IndustryOperatingPatternsSection {...challengeSection} />}

          {comparison && <IndustryComparisonSection {...comparison} />}
          {resolvedDetailJourneySection && (
            <ServiceSpectrumCardsSection {...resolvedDetailJourneySection} />
          )}
          {workflowExamples && <IndustryWorkflowExamplesSection {...workflowExamples} />}
          {solutionSection && <IndustrySolutionsSection {...solutionSection} />}
          <FAQSection {...faq} />
          <SmartCTA
            system={system}
            pageType='industry-detail'
            slug={slug}
            title={cta.title}
            description={cta.description}
            metaItems={cta.metaItems}
            cssPrefix={cta.cssPrefix}
            backgroundColor={cta.backgroundColor}
            headingLevel={cta.headingLevel}
            wrapper={cta.wrapper}
            includeContainer={cta.includeContainer}
            primaryActionVariant={cta.primaryAction?.variant}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
