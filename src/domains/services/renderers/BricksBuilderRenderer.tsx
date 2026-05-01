import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface BricksBuilderRendererProps {
  data: ServicePageDataBySlug['bricks-builder'];
  slug: string;
}

export function BricksBuilderRenderer({ data, slug: _slug }: BricksBuilderRendererProps) {
  const { hero, sections, cta } = data;
  const { conversionSection, benefitsSection, whySection, processSection, featureSection } =
    sections;

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
          <SectionWrapper className='bricks-conversion'>
            <h2 className='mb-4'>{conversionSection.title}</h2>
            <p className='text-muted-foreground'>{conversionSection.description1}</p>
            <p className='text-muted-foreground mt-4'>{conversionSection.description2}</p>
          </SectionWrapper>

          {/* Benefits */}
          <IconBenefitCardsSection
            badge={benefitsSection.badge}
            title={benefitsSection.title}
            benefits={benefitsSection.items}
            cssPrefix={benefitsSection.cssPrefix}
            backgroundColor='bg-base'
          />

          {/* Why Bricks */}
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
            backgroundColor='bg-alt'
          />

          {/* Features */}
          <FeatureChecklistCardsSection
            badge={featureSection.badge}
            title={featureSection.title}
            featureCategories={featureSection.categories}
            cssPrefix={featureSection.cssPrefix}
          />

          <PrimaryCTASection heading={cta.heading} actions={cta.actions} />
        </main>
      </ErrorBoundary>
    </>
  );
}
