import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function LandscapingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[landscaping-companies] Missing primary industry system.');
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  return (
    <main className='industry-detail-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
        className='industry-detail-page__hero'
      />

      <SectionFrame
        heading={data.industryPattern.header}
        className='industry-detail-page__section industry-detail-page__section--industry-pattern'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.leakTimeline.header}
        className='industry-detail-page__section industry-detail-page__section--leak-timeline'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.beforeAfter.header}
        className='industry-detail-page__section industry-detail-page__section--before-after'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.workbench.header}
        className='industry-detail-page__section industry-detail-page__section--workbench'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.startingPoints.header}
        className='industry-detail-page__section industry-detail-page__section--starting-points'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.workflowExamples.header}
        className='industry-detail-page__section industry-detail-page__section--workflow-examples'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.relevantSystems.header}
        className='industry-detail-page__section industry-detail-page__section--relevant-systems'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={data.scenario.header}
        className='industry-detail-page__section industry-detail-page__section--scenario'
      >
        {/* Opus rebuild placeholder: design this section from approved industry-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        variant='split'
        className='industry-detail-page__faq'
      />

      <DecisionPanel
        heading={data.cta.heading}
        actions={actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
        className='industry-detail-page__decision'
      />
    </main>
  );
}
