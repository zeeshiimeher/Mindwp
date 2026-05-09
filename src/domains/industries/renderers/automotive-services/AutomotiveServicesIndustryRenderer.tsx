import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function AutomotiveServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[automotive-services] Missing primary industry system.');
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  return (
    <main className='industry-category-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
        className='industry-category-page__hero'
      />

      <SectionFrame
        heading={data.categoryLeaks.header}
        className='industry-category-page__section industry-category-page__section--category-leaks'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.sharedPattern.header}
        className='industry-category-page__section industry-category-page__section--shared-pattern'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.breakpoints.header}
        className='industry-category-page__section industry-category-page__section--breakpoints'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.operatingModels.header}
        className='industry-category-page__section industry-category-page__section--operating-models'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.pathwayMap.header}
        className='industry-category-page__section industry-category-page__section--pathway-map'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.startingSystems.header}
        className='industry-category-page__section industry-category-page__section--starting-systems'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.detailRoutes.header}
        className='industry-category-page__section industry-category-page__section--detail-routes'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.handledState.header}
        className='industry-category-page__section industry-category-page__section--handled-state'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.scenarioStrip.header}
        className='industry-category-page__section industry-category-page__section--scenario-strip'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        variant='split'
        className='industry-category-page__faq'
      />

      <DecisionPanel
        heading={data.cta.heading}
        actions={actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
        className='industry-category-page__decision'
      />
    </main>
  );
}
