import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
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
import { SmartCTA } from '@/components/system/SmartCTA';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface ConversionLayerRendererProps {
  data: ServicePageDataBySlug[
  | 'conversion-layer'
  | 'conversion-funnel-system-vs-landing-page-development'];
  slug: string;
}

export function ConversionLayerRenderer({ data, slug }: ConversionLayerRendererProps) {
  const { hero, sections, cta, inlineCta } = data;
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
  const inlineCtaTitle =
    inlineCta?.title ?? 'Want to see where your conversion path is leaking first?';
  const inlineCtaDescription =
    inlineCta?.description ??
    'We can map the biggest drop-off points in your pages, enquiries, and handoff flow before you commit to a full rebuild.';

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
              {funnelBreakpoints.items.map(item => (
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

          <SectionWrapper className='conversion-funnel-metrics'>
            <SectionIntro
              badge={comparisonMetrics.badge}
              title={comparisonMetrics.title}
              description={comparisonMetrics.description}
              cssPrefix='conversion-funnel-metrics-header'
            />
            <div className='l-grid l-gap-6'>
              {comparisonMetrics.items.map(item => (
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
              {funnelLevers.items.map(item => (
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

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            intent='diagnostic'
            position='mid'
            title={inlineCtaTitle}
            description={inlineCtaDescription}
            primaryActionVariant='primary'
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
