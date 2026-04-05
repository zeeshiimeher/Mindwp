import {
  FeatureChecklistCardsSection,
  GenericCardsSection,
  IconBenefitCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { divi5Page } from '@/domains/services/data/divi5';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface Divi5RendererProps {
  data: typeof divi5Page;
  slug: string;
}

export function Divi5Renderer({ data, slug }: Divi5RendererProps) {
  const { hero, sections, cta } = data;
  const { conversionSection, benefitsSection, featureSection, whySection, processSection } =
    sections;
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
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          {/* Design File Conversion */}
          <section className='divi5-conversion l-section'>
            <div className='l-container'>
              <h2 className='mb-4'>{conversionSection.title}</h2>
              <p className='text-muted-foreground'>{conversionSection.description1}</p>
              <p className='text-muted-foreground mt-4'>{conversionSection.description2}</p>
            </div>
          </section>

          {/* Benefits */}
          <IconBenefitCardsSection
            badge={benefitsSection.badge}
            title={benefitsSection.title}
            benefits={benefitsSection.items}
            cssPrefix={benefitsSection.cssPrefix}
            backgroundColor='bg-base'
          />

          {/* Features */}
          <FeatureChecklistCardsSection
            badge={featureSection.badge}
            title={featureSection.title}
            featureCategories={featureSection.categories}
            cssPrefix={featureSection.cssPrefix}
            columns={featureSection.columns}
          />

          {/* Why Choose Divi */}
          <GenericCardsSection
            badge={whySection.badge}
            title={whySection.title}
            description={whySection.description}
            items={whySection.items}
            columns={whySection.columns}
            cssPrefix={whySection.cssPrefix}
            variant={whySection.variant}
            backgroundColor='bg-alt'
          />

          {/* Conversion Process */}
          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={processSection.columns}
            cssPrefix={processSection.cssPrefix}
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
