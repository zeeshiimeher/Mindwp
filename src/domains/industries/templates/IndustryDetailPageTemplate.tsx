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
import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/system/PrimaryCTASection';
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
  cta: Pick<
    PrimaryCTASectionProps,
    | 'title'
    | 'description'
    | 'metaItems'
    | 'cssPrefix'
    | 'backgroundColor'
    | 'headingLevel'
    | 'wrapper'
    | 'includeContainer'
  > & {
    primaryAction?: { variant?: PrimaryCTASectionProps['primaryActionVariant'] };
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
          <PrimaryCTASection
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
