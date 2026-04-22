import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ChecklistCardsSection,
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
  TechnologyCardsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { IconBenefitCard } from '@/components/reusable/single/IconBenefitCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { renderAlternatingSection } from '@/domains/services/renderers/renderAlternatingSection';
import type { ServicePageSections } from '@/domains/services/types';

interface Props {
  data: ServicePageDataBySlug[
  | 'smart-website-systems'
  | 'service-pages-vs-one-generic-services-page'];
  slug: string;
}

export default function SmartWebsiteSystemsRenderer({ data, slug }: Props) {
  const optionalSections = data.sections as ServicePageSections;
  const ctaTitle = data.cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = data.cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const inlineCtaTitle = data.inlineCta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const inlineCtaDescription =
    data.inlineCta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          {/* Hero Section */}
          <ServiceHeroSection
            badge={data.hero.badge}
            title={data.hero.title}
            description={data.hero.description}
            smartCta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              pageType: 'service',
              slug,
              primaryActionVariant: 'primary',
            }}
            list={data.hero.list}
            cssPrefix='smart-websites-hero'
          />

          {/* Value Blocks */}
          {data.sections.value && (
            <SectionWrapper className='smart-websites-value' background='bg-alt'>
              <SectionIntro
                title={data.sections.value.header.title}
                description={data.sections.value.header.description}
                cssPrefix='smart-websites-value-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-2 lg:l-grid-3'>
                {data.sections.value.items.map(block => (
                  <IconBenefitCard
                    key={block.title}
                    icon={block.icon}
                    title={block.title}
                    description={block.description}
                    iconType={block.iconType}
                    cssPrefix='smart-websites-value-card'
                  />
                ))}
              </div>
            </SectionWrapper>
          )}
          {/* Before/After Comparison */}
          {data.sections.comparison && (
            <ComparisonSection
              title={data.sections.comparison.header.title}
              description={data.sections.comparison.header.description}
              comparisons={data.sections.comparison.items}
              cta={{
                system: data.systems?.[0] ?? 'smart-website-systems',
                slug,
                pageType: 'service',
                intent: 'diagnostic',
                position: 'mid',
                title: inlineCtaTitle,
                description: inlineCtaDescription,
                primaryActionVariant: 'white',
              }}
              cssPrefix='smart-websites-comparison'
              backgroundColor='bg-base'
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
            <SectionWrapper className='smart-websites-types' background='bg-alt'>
              <SectionIntro
                title={data.sections.types.header.title}
                description={data.sections.types.header.description}
                cssPrefix='smart-websites-types-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-2 lg:l-grid-4'>
                {data.sections.types.items.map(type => (
                  <IconBenefitCard
                    key={type.title}
                    icon={type.icon}
                    title={type.title}
                    description={type.description}
                    keywords={type.keywords}
                    iconType={type.iconType}
                    cssPrefix='smart-websites-type-card'
                  />
                ))}
              </div>
            </SectionWrapper>
          )}
          {data.sections.coreLayer && (
            <ServiceSpectrumCardsSection
              title={data.sections.coreLayer.header.title}
              description={data.sections.coreLayer.header.description}
              cards={data.sections.coreLayer.cards}
              cssPrefix='smart-websites-core-layer'
            />
          )}

          {/* Strategic Bridge */}
          {data.sections.visibilityFoundations &&
            renderAlternatingSection(
              {
                title: data.sections.visibilityFoundations.header.title,
                description: data.sections.visibilityFoundations.header.description,
                alternatingItems: data.sections.visibilityFoundations.alternatingItems,
                cssPrefix: 'smart-websites-visibility-foundations',
                backgroundColor: 'bg-base',
              },
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
                cssPrefix='smart-websites-visibility-foundations'
                backgroundColor='bg-base'
              />
            )}

          {/* NEW: Benefits by Business Size */}
          {optionalSections.businessSizes && (
            <SectionWrapper className='smart-websites-business-size' background='bg-base'>
              <SectionIntro
                title={optionalSections.businessSizes.header.title}
                description={optionalSections.businessSizes.header.description}
                cssPrefix='smart-websites-business-size-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-3'>
                {optionalSections.businessSizes.items.map(size => (
                  <IconBenefitCard
                    key={size.title}
                    icon={size.icon}
                    title={size.title}
                    benefit={size.benefit}
                    description={size.description}
                    iconType={size.iconType}
                    cssPrefix='smart-websites-size-card'
                  />
                ))}
              </div>
            </SectionWrapper>
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
              backgroundColor='bg-alt'
            />
          )}

          {/* NEW: Common Concerns Addressed */}
          {optionalSections.concerns && (
            <SectionWrapper className='smart-websites-concerns' background='bg-alt'>
              <SectionIntro
                title={optionalSections.concerns.header.title}
                description={optionalSections.concerns.header.description}
                cssPrefix='smart-websites-concerns-header'
              />
              <div className='l-grid l-gap-6'>
                {optionalSections.concerns.items.map(item => (
                  <IconBenefitCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    iconType={item.iconType}
                    variant='left'
                    cssPrefix='smart-websites-concern-card'
                  />
                ))}
              </div>
            </SectionWrapper>
          )}

          {/* Technologies Used */}
          {optionalSections.technologies && (
            <TechnologyCardsSection
              title={optionalSections.technologies.header.title}
              description={optionalSections.technologies.header.description}
              technologies={optionalSections.technologies.items}
              columns={3}
              cssPrefix='smart-websites-tech'
              backgroundColor='bg-base'
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
              backgroundColor='bg-base'
            />
          )}

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            intent='conversion'
            position='footer'
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
            cssPrefix='smart-websites-cta'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
