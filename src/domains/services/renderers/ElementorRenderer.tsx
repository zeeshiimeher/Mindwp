import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface ElementorRendererProps {
  data: ServicePageDataBySlug['elementor'];
  slug: string;
}

export function ElementorRenderer({ data, slug: _slug }: ElementorRendererProps) {
  const { hero, sections, cta } = data;
  const { conversionSection, benefitsSection, whySection, processSection, featureSection } =
    sections;
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
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          {/* Design File Conversion */}
          <SectionWrapper className='elementor-conversion'>
            <h2 className='mb-4'>{conversionSection.title}</h2>
            <p className='text-muted-foreground'>{conversionSection.description1}</p>
            <p className='text-muted-foreground mt-4'>{conversionSection.description2}</p>
          </SectionWrapper>

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
