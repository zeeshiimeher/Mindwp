import {
  ContentCardsGridSection,
  FeatureChecklistCardsSection,
  IconBenefitCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { bricksBuilderPage } from '@/domains/services/data/bricks-builder';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildContactHref } from '@/lib/contact/contactHref';

interface BricksBuilderRendererProps {
  data: typeof bricksBuilderPage;
  slug: string;
}

export function BricksBuilderRenderer({ data, slug }: BricksBuilderRendererProps) {
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
          <section className='bricks-conversion l-section'>
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
