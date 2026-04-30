import React from 'react';

import { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import {
  IndustryCaseStudiesSection,
  IndustryChallengesSection,
  IndustryChecklistSection,
  IndustryComparisonSection,
  IndustryExploreSection,
  IndustryHeroSection,
  IndustryOperatingPatternsSection,
  IndustryPackagesSection,
  IndustryPathwaysSection,
  IndustryProcessSection,
  IndustryServiceEnvironmentsSection,
  IndustrySolutionsSection,
  IndustrySpectrumSection,
} from '@/components/reusable/sections/industries';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';
import type { IndustryCategory } from '@/domains/industries/catalog';
import {
  resolveIndustryCategoryDetailRoutes,
  resolveIndustryPathwaySection,
} from '@/domains/industries/utils/industryPresentation';

export type IndustryCategoryPageTemplateProps = {
  slug: string;
  system: string;
  category: IndustryCategory;
  hero: React.ComponentProps<typeof IndustryHeroSection>;
  challenges?: React.ComponentProps<typeof IndustryChallengesSection>;
  operatingPatterns?: React.ComponentProps<typeof IndustryOperatingPatternsSection>;
  imageStrip?: React.ComponentProps<typeof ImageAccordionStripSection>;
  spectrum?: React.ComponentProps<typeof IndustrySpectrumSection>;
  decisionChecklist?: React.ComponentProps<typeof IndustryChecklistSection>;
  serviceEnvironments?: React.ComponentProps<typeof IndustryServiceEnvironmentsSection>;
  solutions?: React.ComponentProps<typeof IndustrySolutionsSection>;
  systemLayers?: React.ComponentProps<typeof IndustrySolutionsSection>;
  process?: React.ComponentProps<typeof IndustryProcessSection>;
  comparison?: React.ComponentProps<typeof IndustryComparisonSection>;
  packages?: React.ComponentProps<typeof IndustryPackagesSection>;
  pathways?: React.ComponentProps<typeof IndustryPathwaysSection>;
  explore?: Omit<React.ComponentProps<typeof IndustryExploreSection>, 'title'>;
  caseStudies?: React.ComponentProps<typeof IndustryCaseStudiesSection>;
  detailRoutes?: React.ComponentProps<typeof RelatedCardsSection>;
  faq?: React.ComponentProps<typeof FAQSection>;
  sectionControls?: {
    subIndustries?: {
      enabled?: boolean;
      description?: string;
      cssPrefix?: string;
    };
    caseStudies?: {
      enabled?: boolean;
    };
  };
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

export function IndustryCategoryPageTemplate({
  slug,
  system,
  category,
  hero,
  challenges,
  operatingPatterns,
  imageStrip,
  spectrum,
  decisionChecklist,
  serviceEnvironments,
  solutions,
  systemLayers,
  process,
  comparison,
  packages,
  pathways,
  explore,
  detailRoutes,
  faq,
  sectionControls: _sectionControls,
  caseStudies,
  cta,
}: IndustryCategoryPageTemplateProps) {
  const challengeSection = operatingPatterns ?? challenges;
  const solutionSection = systemLayers ?? solutions;
  const pathwaySection = pathways ?? packages;
  const resolvedPathwaySection = resolveIndustryPathwaySection(
    pathwaySection,
    system,
    slug,
    'industry-category'
  );
  const resolvedDetailRoutes = resolveIndustryCategoryDetailRoutes(detailRoutes, category);

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

          {spectrum && <IndustrySpectrumSection {...spectrum} />}

          {serviceEnvironments && <IndustryServiceEnvironmentsSection {...serviceEnvironments} />}

          {decisionChecklist && <IndustryChecklistSection {...decisionChecklist} />}

          {solutionSection && <IndustrySolutionsSection {...solutionSection} />}

          {resolvedDetailRoutes && <RelatedCardsSection {...resolvedDetailRoutes} />}

          {process && <IndustryProcessSection {...process} />}

          {comparison && <IndustryComparisonSection {...comparison} />}

          {resolvedPathwaySection && <IndustryPathwaysSection {...resolvedPathwaySection} />}

          {explore && <IndustryExploreSection title='Explore Related Systems' {...explore} />}

          {caseStudies && <IndustryCaseStudiesSection {...caseStudies} />}

          {faq && <FAQSection {...faq} />}

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
