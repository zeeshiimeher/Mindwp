/* eslint-disable @typescript-eslint/no-explicit-any */

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ServiceSpectrumCardsSection,
  StepCardsSplitSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { BeforeAfterMetricCard } from '@/components/reusable/single/BeforeAfterMetricCard';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { ProblemSolutionSplitCard } from '@/components/reusable/single/ProblemSolutionSplitCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import type { ServicePageData } from '@/domains/services/types';

type ConversionLayerSections = {
  foundation: any;
  funnelBreakpoints: any;
  comparison?: any;
  comparisonMetrics: any;
  processSection: any;
  funnelLevers: any;
  proof?: any;
  qualification: any;
  faqSection: any;
};

interface ConversionLayerRendererProps {
  data: ServicePageData;
  slug: string;
}

export function ConversionLayerRenderer({ data, slug: _slug }: ConversionLayerRendererProps) {
  const { hero, cta, inlineCta } = data;
  const sections = data.sections as ConversionLayerSections;
  const {
    foundation,
    funnelBreakpoints,
    comparison,
    comparisonMetrics,
    processSection,
    funnelLevers,
    proof,
    qualification,
    faqSection,
  } = sections;
  if (!inlineCta) {
    throw new Error('ConversionLayerRenderer requires inlineCta content.');
  }

  const ctaTitle = cta.title;
  const ctaDescription = cta.description;
  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            heroActions={{
              primaryActionVariant: 'primary',
            }}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            cssPrefix='conversion-funnel-foundation'
          />

          <SectionWrapper className='conversion-funnel-breakpoints' background='bg-base'>
            <SectionIntro
              badge={funnelBreakpoints.badge}
              title={funnelBreakpoints.title}
              description={funnelBreakpoints.description}
              cssPrefix='conversion-funnel-breakpoints-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {funnelBreakpoints.items.map((item: (typeof funnelBreakpoints.items)[number]) => (
                <ProblemSolutionSplitCard
                  key={item.title}
                  icon={item.icon}
                  badge={item.badge}
                  title={item.title}
                  description={item.description}
                  solution={item.solution}
                  cssPrefix='conversion-funnel-breakpoint'
                />
              ))}
            </div>
          </SectionWrapper>

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='conversion-funnel-comparison'
            />
          )}

          <SectionWrapper className='conversion-funnel-metrics'>
            <SectionIntro
              badge={comparisonMetrics.badge}
              title={comparisonMetrics.title}
              description={comparisonMetrics.description}
              cssPrefix='conversion-funnel-metrics-header'
            />
            <div className='l-grid l-gap-6'>
              {comparisonMetrics.items.map((item: (typeof comparisonMetrics.items)[number]) => (
                <BeforeAfterMetricCard
                  key={`${item.metric}-${item.improvement}`}
                  metric={item.metric}
                  before={item.before}
                  after={item.after}
                  improvement={item.improvement}
                  description={item.description}
                  metricLabel={comparisonMetrics.metricLabel}
                  beforeLabel={comparisonMetrics.beforeLabel}
                  afterLabel={comparisonMetrics.afterLabel}
                  improvementLabel={comparisonMetrics.improvementLabel}
                  cssPrefix='conversion-funnel-metric'
                />
              ))}
            </div>
          </SectionWrapper>

          <StepCardsSplitSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            cssPrefix='conversion-funnel-process'
            backgroundColor='bg-base'
          />

          <SectionWrapper className='conversion-funnel-levers'>
            <SectionIntro
              badge={funnelLevers.badge}
              title={funnelLevers.title}
              description={funnelLevers.description}
              cssPrefix='conversion-funnel-levers-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-3'>
              {funnelLevers.items.map((item: (typeof funnelLevers.items)[number]) => (
                <CenteredFeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cssPrefix='conversion-funnel-lever'
                />
              ))}
            </div>
          </SectionWrapper>

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='conversion-funnel-proof'
              backgroundColor='bg-base'
            />
          )}

          <DualToneChecklistComparisonSection
            title={qualification.title}
            description={qualification.description}
            leftColumn={{
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems,
            }}
            rightColumn={{
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems,
            }}
            cssPrefix='conversion-funnel-qualification'
            backgroundColor='bg-alt'
          />
          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <PrimaryCTASection
            heading={{ title: ctaTitle, description: ctaDescription }}
            actions={[{ label: 'Get Started', href: '/contact' }]}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
