import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { bookingSchedulingSystemPage } from '@/domains/services/data/booking-scheduling-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface BookingSchedulingSystemRendererProps {
  data: typeof bookingSchedulingSystemPage;
  slug: string;
}

export function BookingSchedulingSystemRenderer({
  data,
  slug,
}: BookingSchedulingSystemRendererProps) {
  const { hero, sections, cta, inlineCta } = data;
  const {
    foundation,
    bookingLayer,
    positioning,
    processSection,
    capabilitySection,
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
            currentStateLabel={foundation.currentStateLabel}
            structuredStateLabel={foundation.structuredStateLabel}
            cssPrefix='booking-scheduling-foundation'
          />

          <ServiceSpectrumCardsSection
            badge={bookingLayer.badge}
            title={bookingLayer.title}
            description={bookingLayer.description}
            cards={bookingLayer.cards}
            cssPrefix='booking-scheduling-layer'
            backgroundColor='bg-alt'
          />

          <StackedFeatureListSection
            badge={positioning.badge}
            title={positioning.title}
            description={positioning.description}
            features={positioning.features}
            tagline={positioning.tagline}
            narrativeTitle={positioning.narrativeTitle}
            narrativeParagraphs={positioning.narrativeParagraphs}
            cssPrefix='booking-scheduling-positioning'
          />

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='booking-scheduling-comparison'
              backgroundColor='bg-alt'
            />
          )}

          {proof && (
            <ServiceSpectrumCardsSection
              badge='Proof'
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='booking-scheduling-proof'
              backgroundColor='bg-base'
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

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='booking-scheduling-process'
            backgroundColor='bg-base'
          />

          <FeatureChecklistCardsSection
            badge={capabilitySection.badge}
            title={capabilitySection.title}
            description={capabilitySection.description}
            featureCategories={capabilitySection.services.map(service => ({
              title: service.title,
              icon: service.icon,
              features: service.items,
            }))}
            columns={3}
            cssPrefix='booking-scheduling-capabilities'
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
            cssPrefix='booking-scheduling-qualification'
            backgroundColor='bg-base'
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
