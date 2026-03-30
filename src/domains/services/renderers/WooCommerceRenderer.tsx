import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { woocommercePage } from '@/domains/services/data/woocommerce';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface WooCommerceRendererProps {
  data: typeof woocommercePage;
  slug: string;
}

export function WooCommerceRenderer({ data, slug }: WooCommerceRendererProps) {
  const { hero, sections, cta } = data;
  const { benefitsSection, bridge, whySection, featureSection } = sections;
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
          />

          {/* Benefits */}
          <IconBenefitCardsSection
            badge={benefitsSection.badge}
            title={benefitsSection.title}
            description={benefitsSection.description}
            benefits={benefitsSection.items}
            backgroundColor={benefitsSection.backgroundColor}
            cssPrefix={benefitsSection.cssPrefix}
          />

          <section className='woocommerce-bridge l-section bg-section-light'>
            <div className='l-container'>
              <h2 className='mb-4'>{bridge.title}</h2>
              <p className='text-muted-foreground'>{bridge.description}</p>
            </div>
          </section>

          {/* Why structured WordPress commerce fits here */}
          <ContentCardsGridSection
            badge={whySection.badge}
            title={whySection.title}
            description={whySection.description}
            items={whySection.items.map(item => ({
              title: item.title,
              desc: item.description,
            }))}
            columns={whySection.columns}
            backgroundColor={whySection.backgroundColor}
            cssPrefix={whySection.cssPrefix}
          />

          {/* Complete Features */}
          <FeatureChecklistCardsSection
            badge={featureSection.badge}
            title={featureSection.title}
            featureCategories={featureSection.categories}
            columns={featureSection.columns}
            backgroundColor={featureSection.backgroundColor}
            cssPrefix={featureSection.cssPrefix}
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
