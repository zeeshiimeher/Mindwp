import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { BeforeAfterMetricCard } from '@/components/reusable/single/BeforeAfterMetricCard';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { ProblemSolutionSplitCard } from '@/components/reusable/single/ProblemSolutionSplitCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { conversionFunnelSystemPage } from '@/domains/services/data/conversion-funnel-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface ConversionFunnelSystemRendererProps {
  data: typeof conversionFunnelSystemPage;
  slug: string;
}

export function ConversionFunnelSystemRenderer({
  data,
  slug,
}: ConversionFunnelSystemRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    funnelBreakpoints,
    comparisonMetrics,
    processSection,
    funnelLevers,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            smartCta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              pageType: 'service',
              slug,
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
              {funnelBreakpoints.items.map((item, index) => (
                <ProblemSolutionSplitCard
                  key={index}
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

          <SectionWrapper className='conversion-funnel-metrics'>
            <SectionIntro
              badge={comparisonMetrics.badge}
              title={comparisonMetrics.title}
              description={comparisonMetrics.description}
              cssPrefix='conversion-funnel-metrics-header'
            />
            <div className='l-grid l-gap-6'>
              {comparisonMetrics.items.map((item, index) => (
                <BeforeAfterMetricCard
                  key={index}
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

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
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
              {funnelLevers.items.map((item, index) => (
                <CenteredFeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cssPrefix='conversion-funnel-lever'
                />
              ))}
            </div>
          </SectionWrapper>

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

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
