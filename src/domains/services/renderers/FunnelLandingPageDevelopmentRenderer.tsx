import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { AlertCard, FAQSection, LinkCard, SectionIntro } from '@/components/reusable/single';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { funnelLandingPageDevelopmentPage } from '@/domains/services/data/funnel-landing-page-development';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

interface FunnelLandingPageDevelopmentRendererProps {
  data: typeof funnelLandingPageDevelopmentPage;
  slug: string;
}

export function FunnelLandingPageDevelopmentRenderer({
  data,
  slug,
}: FunnelLandingPageDevelopmentRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    pageTypes,
    implementationAlerts,
    implementationPaths,
    processSection,
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
            primaryAction={hero.primaryAction}
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

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{
              href: buildServiceContactHref({
                system: data.systems?.[0] ?? 'smart-website-systems',
                slug,
              }),
              variant: 'white',
            }}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
