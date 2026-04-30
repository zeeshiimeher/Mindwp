import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface WooCommerceRendererProps {
  data: ServicePageDataBySlug['ecommerce'];
  slug: string;
}

export function WooCommerceRenderer({ data, slug: _slug }: WooCommerceRendererProps) {
  const { hero, sections, cta } = data;
  const { benefitsSection, bridge, whySection, featureSection } = sections;
  const ctaTitle = cta.title;
  const ctaDescription = cta.description;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            heroActions={{
              primaryActionVariant: 'primary',
            }}
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

          <PrimaryCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
