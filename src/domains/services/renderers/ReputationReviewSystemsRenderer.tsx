import {
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface ReputationReviewSystemsRendererProps {
  data: typeof reputationReviewSystemsPage;
  slug: string;
}

export function ReputationReviewSystemsRenderer({
  data,
  slug,
}: ReputationReviewSystemsRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    reviewSystem,
    positioning,
    processSection,
    capabilitySection,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const ctaButtonText = cta?.buttonText ?? SERVICE_RENDERER_DEFAULTS.ctaButtonText;
  const ctaButtonHref = cta?.buttonHref ?? SERVICE_RENDERER_DEFAULTS.ctaButtonHref;

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
            backgroundColor='bg-section-surface'
            cssPrefix='reputation-review-foundation'
          />

          <ServiceSpectrumCardsSection
            badge={reviewSystem.badge}
            title={reviewSystem.title}
            description={reviewSystem.description}
            cards={reviewSystem.cards}
            backgroundColor='bg-section-muted'
            cssPrefix='reputation-review-system'
          />

          <StackedFeatureListSection
            badge={positioning.badge}
            title={positioning.title}
            description={positioning.description}
            features={positioning.features}
            tagline={positioning.tagline}
            narrativeTitle={positioning.narrativeTitle}
            narrativeParagraphs={positioning.narrativeParagraphs}
            backgroundColor='bg-section-base'
            cssPrefix='reputation-review-positioning'
          />

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            backgroundColor='bg-section-surface'
            cssPrefix='reputation-review-process'
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
            backgroundColor='bg-section-base'
            cssPrefix='reputation-review-capabilities'
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
            backgroundColor='bg-section-surface'
            cssPrefix='reputation-review-qualification'
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
            primaryAction={{ label: ctaButtonText, href: ctaButtonHref, variant: 'white' }}
          />

          <ServiceRelatedServicesSection serviceSlug={slug} />
        </main>
      </ErrorBoundary>
    </>
  );
}
