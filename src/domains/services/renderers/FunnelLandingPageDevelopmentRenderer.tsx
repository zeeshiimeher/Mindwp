import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { AlertCard, FAQSection, LinkCard, SectionIntro } from '@/components/reusable/single';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { funnelLandingPageDevelopmentPage } from '@/domains/services/data/funnel-landing-page-development';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface FunnelLandingPageDevelopmentRendererProps {
  data: typeof funnelLandingPageDevelopmentPage;
  slug: string;
}

export function FunnelLandingPageDevelopmentRenderer({
  data,
  slug,
}: FunnelLandingPageDevelopmentRendererProps) {
  const { hero, sections, cta, inlineCta } = data;
  const {
    foundation,
    pageTypes,
    implementationAlerts,
    implementationPaths,
    processSection,
    qualification,
    faqSection,
    comparison,
    proof,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const inlineCtaTitle = inlineCta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const inlineCtaDescription = inlineCta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

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
            cssPrefix='funnel-landing-development-foundation'
          />

          <SectionWrapper className='funnel-landing-development-types' background='bg-base'>
            <SectionIntro
              badge={pageTypes.badge}
              title={pageTypes.title}
              description={pageTypes.description}
              cssPrefix='funnel-landing-development-types-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2'>
              {pageTypes.items.map((item, index) => (
                <LinkCard
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  showArrow={false}
                  cssPrefix='funnel-landing-development-type'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='funnel-landing-development-alerts'>
            <SectionIntro
              badge={implementationAlerts.badge}
              title={implementationAlerts.title}
              description={implementationAlerts.description}
              cssPrefix='funnel-landing-development-alerts-header'
            />
            <div className='l-grid l-gap-6'>
              {implementationAlerts.items.map((item, index) => (
                <AlertCard key={index} className='funnel-landing-development-alert'>
                  <p>{item}</p>
                </AlertCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='funnel-landing-development-paths' background='bg-base'>
            <SectionIntro
              badge={implementationPaths.badge}
              title={implementationPaths.title}
              description={implementationPaths.description}
              cssPrefix='funnel-landing-development-paths-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
              {implementationPaths.items.map((item, index) => (
                <CenteredFeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cssPrefix='funnel-landing-development-path'
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
            cssPrefix='funnel-landing-development-process'
          />

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='funnel-landing-development-comparison'
            />
          )}

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='funnel-landing-development-proof'
            />
          )}

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            title={inlineCtaTitle}
            description={inlineCtaDescription}
            primaryActionVariant='primary'
          />

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
            cssPrefix='funnel-landing-development-qualification'
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
