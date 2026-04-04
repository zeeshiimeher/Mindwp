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
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface LocalSeoAuthorityRendererProps {
  data: typeof localSeoAuthorityPage;
  slug: string;
}

export function LocalSeoAuthorityRenderer({ data, slug }: LocalSeoAuthorityRendererProps) {
  const { hero, sections, cta } = data;
  const {
    misconceptions,
    why,
    integrations,
    processSection,
    scopeSection,
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
          {/* Hero Section */}
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={hero.primaryAction}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
            list={hero.list}
          />

          {misconceptions && (
            <ProblemCardsSection
              badge={misconceptions.badge}
              title={misconceptions.title}
              description={misconceptions.description}
              painPoints={misconceptions.painPoints}
              currentStateLabel={misconceptions.currentStateLabel}
              structuredStateLabel={misconceptions.structuredStateLabel}
              backgroundColor='bg-section-surface'
              cssPrefix='website-seo-misconceptions'
            />
          )}

          {why && (
            <StackedFeatureListSection
              badge={why.badge}
              title={why.title}
              description={why.description}
              features={why.features}
              tagline={why.tagline}
              narrativeTitle={why.narrativeTitle}
              narrativeParagraphs={why.narrativeParagraphs}
              backgroundColor='bg-section-base'
              cssPrefix='website-seo-why'
            />
          )}

          {integrations && (
            <ServiceSpectrumCardsSection
              badge={integrations.badge}
              title={integrations.title}
              description={integrations.description}
              cards={integrations.cards}
              backgroundColor='bg-section-muted'
              cssPrefix='website-seo-integrations'
            />
          )}

          {processSection && (
            <ProcessStepsSection
              badge={processSection.badge}
              title={processSection.title}
              description={processSection.description}
              steps={processSection.steps}
              columns={4}
              backgroundColor='bg-section-surface'
              cssPrefix='website-seo-process'
            />
          )}

          {scopeSection && (
            <FeatureChecklistCardsSection
              badge={scopeSection.badge}
              title={scopeSection.title}
              description={scopeSection.description}
              featureCategories={scopeSection.services.map(service => ({
                title: service.title,
                icon: service.icon,
                features: service.items,
              }))}
              columns={3}
              backgroundColor='bg-section-base'
              cssPrefix='website-seo-services'
            />
          )}

          {qualification && (
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
              cssPrefix='website-seo-qualification'
            />
          )}

          {/* FAQ Section */}
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

export default LocalSeoAuthorityRenderer;
