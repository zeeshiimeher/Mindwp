import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
} from '@/components/reusable/sections';
import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { woocommercePage } from '@/domains/services/data/woocommerce';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildContactHref } from '@/lib/contact/contactHref';

interface WooCommerceRendererProps {
  data: typeof woocommercePage;
  slug: string;
}

export function WooCommerceRenderer({ data, slug }: WooCommerceRendererProps) {
  const { hero, sections, cta } = data;
  const { benefitsSection, bridge, whySection, featureSection } = sections;
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
          />

          {/* Benefits */}
          <IconBenefitCardsSection
            badge={benefitsSection.badge}
            title={benefitsSection.title}
            description={benefitsSection.description}
            benefits={benefitsSection.items}
            cssPrefix={benefitsSection.cssPrefix}
          />

          <SectionWrapper className='woocommerce-bridge' background='bg-base'>
              <h2 className='mb-4'>{bridge.title}</h2>
              <p className='text-muted-foreground'>{bridge.description}</p>
          </SectionWrapper>

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
            cssPrefix={whySection.cssPrefix}
          />

          {/* Complete Features */}
          <FeatureChecklistCardsSection
            badge={featureSection.badge}
            title={featureSection.title}
            featureCategories={featureSection.categories}
            columns={featureSection.columns}
            cssPrefix={featureSection.cssPrefix}
            backgroundColor='bg-alt'
          />

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ href: buildContactHref({ system: data.systems?.[0] ?? 'smart-website-systems', sourceType: 'service', slug }), variant: 'white' }}
          />

        </main>
      </ErrorBoundary>
    </>
  );
}
