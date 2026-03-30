import {
  ChecklistCardsSection,
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
  TechnologyCardsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { CTASection } from '@/components/reusable/single/CTASection';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { IconBenefitCard } from '@/components/reusable/single/IconBenefitCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import type { ServicePageSections } from '@/domains/services/types';

interface Props {
  data: typeof smartWebsiteSystemsPage;
  slug: string;
}

export default function SmartWebsiteSystemsRenderer({ data, slug }: Props) {
  const optionalSections = data.sections as ServicePageSections;
  const ctaTitle = data.cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = data.cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const ctaButtonText = data.cta?.buttonText ?? SERVICE_RENDERER_DEFAULTS.ctaButtonText;
  const ctaButtonHref = data.cta?.buttonHref ?? SERVICE_RENDERER_DEFAULTS.ctaButtonHref;
  const inlineCtaTitle = data.inlineCta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const inlineCtaDescription = data.inlineCta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const inlineCtaButtonText = data.inlineCta?.buttonText ?? SERVICE_RENDERER_DEFAULTS.ctaButtonText;
  const inlineCtaButtonHref = data.inlineCta?.buttonHref ?? SERVICE_RENDERER_DEFAULTS.ctaButtonHref;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          {/* Hero Section */}
          <ServiceHeroSection
            badge={data.hero.badge}
            title={data.hero.title}
            description={data.hero.description}
            primaryAction={data.hero.primaryAction}
            list={data.hero.list}
            cssPrefix='smart-websites-hero'
          />

          {/* Value Blocks */}
          {data.sections.value && (
            <section className='smart-websites-value l-section'>
              <div className='l-container'>
                <SectionIntro
                  title={data.sections.value.header.title}
                  description={data.sections.value.header.description}
                  cssPrefix='smart-websites-value-header'
                />
                <div className='l-grid l-gap-6 md:l-grid-2 lg:l-grid-3'>
                  {data.sections.value.items.map((block, index) => (
                    <IconBenefitCard
                      key={index}
                      icon={block.icon}
                      title={block.title}
                      description={block.description}
                      iconType={block.iconType}
                      cssPrefix='smart-websites-value-card'
                    />
                  ))}
                </div>
              </div>
            </section>
          )}{/* Before/After Comparison */}
          {data.sections.comparison && (
            <ComparisonSection
              title={data.sections.comparison.header.title}
              description={data.sections.comparison.header.description}
              comparisons={data.sections.comparison.items}
              cssPrefix='smart-websites-comparison bg-background'
            />
          )}
           {/* What's Included */}
          {data.sections.included && (
            <ChecklistCardsSection
              title={data.sections.included.header.title}
              description={data.sections.included.header.description}
              items={data.sections.included.items}
              columns={2}
              cssPrefix='smart-websites-included'
            />
          )}

          {/* Implementation Types */}
          {data.sections.types && (
            <section className='smart-websites-types l-section bg-background '>
              <div className='l-container'>
                <SectionIntro
                  title={data.sections.types.header.title}
                  description={data.sections.types.header.description}
                  cssPrefix='smart-websites-types-header'
                />
                <div className='l-grid l-gap-6 md:l-grid-2 lg:l-grid-4'>
                  {data.sections.types.items.map((type, index) => (
                    <IconBenefitCard
                      key={index}
                      icon={type.icon}
                      title={type.title}
                      description={type.description}
                      keywords={type.keywords}
                      iconType={type.iconType}
                      cssPrefix='smart-websites-type-card'
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
          <CTASection
            title={inlineCtaTitle}
            description={inlineCtaDescription}
            primaryAction={{ label: inlineCtaButtonText, href: inlineCtaButtonHref, variant: 'white' }}
            cssPrefix='smart-websites-cta bg-background'
          />
          {data.sections.coreLayer && (
            <ServiceSpectrumCardsSection
              title={data.sections.coreLayer.header.title}
              description={data.sections.coreLayer.header.description}
              cards={data.sections.coreLayer.cards}
              backgroundColor=''
              cssPrefix='smart-websites-core-layer'
            />
          )}
          {/* Strategic Bridge */}
          {data.sections.visibilityFoundations && (
            <StackedFeatureListSection
              title={data.sections.visibilityFoundations.header.title}
              description={data.sections.visibilityFoundations.header.description}
              tagline={data.sections.visibilityFoundations.tagline}
              narrativeTitle={data.sections.visibilityFoundations.narrativeTitle}
              narrativeParagraphs={data.sections.visibilityFoundations.narrativeParagraphs}
              features={data.sections.visibilityFoundations.items.map(item => ({
                icon: item.icon,
                title: item.title,
                description: item.description,
              }))}
              backgroundColor='bg-background'
              cssPrefix='smart-websites-visibility-foundations'
            />
          )}

          {/* NEW: Benefits by Business Size */}
          {optionalSections.businessSizes && (
            <section className='smart-websites-business-size l-section bg-background'>
              <div className='l-container '>
                <SectionIntro
                  title={optionalSections.businessSizes.header.title}
                  description={optionalSections.businessSizes.header.description}
                  cssPrefix='smart-websites-business-size-header'
                />
                <div className='l-grid l-gap-6 md:l-grid-3'>
                  {optionalSections.businessSizes.items.map((size, index) => (
                    <IconBenefitCard
                      key={index}
                      icon={size.icon}
                      title={size.title}
                      benefit={size.benefit}
                      description={size.description}
                      iconType={size.iconType}
                      cssPrefix='smart-websites-size-card'
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* How It Works */}
          {data.sections.process && (
            <ProcessStepsSection
              badge={data.sections.process.header.badge}
              title={data.sections.process.header.title}
              description={data.sections.process.header.description}
              steps={data.sections.process.steps}
              columns={4}
              cssPrefix='smart-websites-process'
            />
          )}

          {/* NEW: Common Concerns Addressed */}
          {optionalSections.concerns && (
            <section className='smart-websites-concerns l-section bg-background'>
              <div className='l-container'>
                <SectionIntro
                  title={optionalSections.concerns.header.title}
                  description={optionalSections.concerns.header.description}
                  cssPrefix='smart-websites-concerns-header'
                />
                <div className='l-grid l-gap-6'>
                  {optionalSections.concerns.items.map((item, index) => (
                    <IconBenefitCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      iconType={item.iconType}
                      variant='left'
                      cssPrefix='smart-websites-concern-card'
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Technologies Used */}
          {optionalSections.technologies && (
            <TechnologyCardsSection
              title={optionalSections.technologies.header.title}
              description={optionalSections.technologies.header.description}
              technologies={optionalSections.technologies.items}
              columns={3}
              cssPrefix='smart-websites-tech'
            />
          )}

          {/* Qualification Section */}
          {optionalSections.qualification && (
            <DualToneChecklistComparisonSection
              title={optionalSections.qualification.header.title}
              description={optionalSections.qualification.header.description}
              leftColumn={{
                title: optionalSections.qualification.strongFitTitle,
                items: optionalSections.qualification.strongFit,
              }}
              rightColumn={{
                title: optionalSections.qualification.notForTitle,
                items: optionalSections.qualification.notFor,
              }}
              backgroundColor='bg-muted/30'
              cssPrefix='smart-websites-qualification'
            />
          )}

          {/* FAQ Section */}
          {data.sections.faq && (
            <FAQSection
              title={data.sections.faq.header.title}
              description={data.sections.faq.header.description}
              faqs={data.sections.faq.items}
              cssPrefix='smart-websites-faq'
            />
          )}

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ label: ctaButtonText, href: ctaButtonHref, variant: 'white' }}
            cssPrefix='smart-websites-cta bg-background'
          />

          <ServiceRelatedServicesSection serviceSlug={slug} cssPrefix='bg-white' />
        </main>
      </ErrorBoundary>
    </>
  );
}
