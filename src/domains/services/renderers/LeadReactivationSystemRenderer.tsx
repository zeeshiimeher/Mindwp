import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['lead-reactivation-system'];
  slug: string;
}

export function LeadReactivationSystemRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { dormantLeadMap, reactivationPath, dataReadiness, handoffBack, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[lead-reactivation-system] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='reactivate-page'>
      <HeroFrame
        className='reactivate-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={dormantLeadMap.header}
        tone='white'
        className='reactivate-dormantLeadMap'
        ariaLabel={dormantLeadMap.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={reactivationPath.header}
        tone='mist'
        className='reactivate-reactivationPath'
        ariaLabel={reactivationPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={dataReadiness.header}
        tone='gradient-mist'
        className='reactivate-dataReadiness'
        ariaLabel={dataReadiness.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handoffBack.header}
        tone='white'
        className='reactivate-handoffBack'
        ariaLabel={handoffBack.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='reactivate-fitBoundaries'
        ariaLabel={fitBoundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='white'
        className='reactivate-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='reactivate-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
