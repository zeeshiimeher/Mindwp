import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { elementorPage } from '@/domains/services/data/elementor';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildContactHref } from '@/lib/contact/contactHref';

interface ElementorRendererProps {
  data: typeof elementorPage;
  slug: string;
}

export function ElementorRenderer({ data, slug }: ElementorRendererProps) {
  const { hero, sections, cta } = data;
  const { conversionSection, benefitsSection, whySection, processSection, featureSection } =
    sections;
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
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          {/* Design File Conversion */}
          <section className='elementor-conversion l-section'>
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
            benefits={benefitsSection.benefits}
            cssPrefix={benefitsSection.cssPrefix}
            backgroundColor='bg-alt'
          />

          {/* Why Elementor */}
          <ContentCardsGridSection
            badge={whySection.badge}
            title={whySection.title}
            description={whySection.description}
            items={whySection.items.map(item => ({
              title: item.title,
              desc: item.description,
            }))}
            columns={whySection.columns}
            cssPrefix={whySection.cssPrefix}
            iconType={whySection.iconType}
          />

          {/* Conversion Process */}
          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={processSection.columns}
            cssPrefix={processSection.cssPrefix}
            backgroundColor='bg-base'
          />

          {/* Features */}
          <FeatureChecklistCardsSection
            badge={featureSection.badge}
            title={featureSection.title}
            featureCategories={featureSection.categories}
            cssPrefix={featureSection.cssPrefix}
          />

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ href: buildContactHref({ system: data.systems?.[0] ?? 'smart-website-systems', sourceType: 'service', slug }), variant: 'white' }}
          />

          <ServiceRelatedServicesSection serviceSlug={slug} />
        </main>
      </ErrorBoundary>
    </>
  );
}
