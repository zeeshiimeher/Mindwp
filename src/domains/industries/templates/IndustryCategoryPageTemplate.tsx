import React from 'react';

import { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import {
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
import { SmartCTA } from '@/components/system/SmartCTA';
import type { IndustryCategory } from '@/domains/industries/catalog';
import { IndustrySubIndustriesSection } from '@/domains/industries/components';
import {
  resolveIndustryCategoryDetailRoutes,
  resolveIndustryPathwaySection,
} from '@/lib/cta/industryPresentation';

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
  detailRoutes?: React.ComponentProps<typeof RelatedCardsSection>;
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
  cta: React.ComponentProps<typeof IndustryCTASection>;
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
  detailRoutes,
  sectionControls,
  cta,
}: IndustryCategoryPageTemplateProps) {
  const challengeSection = operatingPatterns ?? challenges;
  const solutionSection = systemLayers ?? solutions;
  const pathwaySection = pathways ?? packages;
  const resolvedPathwaySection = resolveIndustryPathwaySection(pathwaySection, system, slug);
  const showSubIndustries = sectionControls?.subIndustries?.enabled !== false && !detailRoutes;
  const resolvedDetailRoutes = resolveIndustryCategoryDetailRoutes(detailRoutes, category);

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <main role='main'>
          <IndustryHeroSection {...hero} />

          {imageStrip && <ImageAccordionStripSection {...imageStrip} />}

          {challengeSection && <IndustryOperatingPatternsSection {...challengeSection} />}

          {spectrum && <IndustrySpectrumSection {...spectrum} />}

          {serviceEnvironments && <IndustryServiceEnvironmentsSection {...serviceEnvironments} />}

          {decisionChecklist && <IndustryChecklistSection {...decisionChecklist} />}

          {solutionSection && <IndustrySolutionsSection {...solutionSection} />}

          {resolvedDetailRoutes ? (
            <RelatedCardsSection {...resolvedDetailRoutes} />
          ) : showSubIndustries ? (
            <IndustrySubIndustriesSection
              category={category}
              description={sectionControls?.subIndustries?.description}
              cssPrefix={sectionControls?.subIndustries?.cssPrefix}
            />
          ) : null}

          {process && <IndustryProcessSection {...process} />}

          {comparison && <IndustryComparisonSection {...comparison} />}

          {resolvedPathwaySection && <IndustryPathwaysSection {...resolvedPathwaySection} />}
          <SmartCTA
            system={system}
            pageType='industry'
            slug={slug}
            title={cta.title}
            description={cta.description}
            secondaryAction={cta.secondaryAction}
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
