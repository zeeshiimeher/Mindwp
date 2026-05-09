import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['missed-call-recovery-system'];
  slug: string;
}

export function MissedCallRecoverySystemRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { missedCallMoment, recoveryPath, routingBoundary, fitSignals, handoffBack, faq } =
    sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[missed-call-recovery-system] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='missed-call-page'>
      <HeroFrame
        className='missed-call-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      <SectionFrame
        heading={missedCallMoment.header}
        tone='white'
        className='missed-call-missedCallMoment'
        ariaLabel={missedCallMoment.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={recoveryPath.header}
        tone='mist'
        className='missed-call-recoveryPath'
        ariaLabel={recoveryPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={routingBoundary.header}
        tone='gradient-mist'
        className='missed-call-routingBoundary'
        ariaLabel={routingBoundary.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitSignals.header}
        tone='white'
        className='missed-call-fitSignals'
        ariaLabel={fitSignals.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handoffBack.header}
        tone='mist'
        className='missed-call-handoffBack'
        ariaLabel={handoffBack.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='white'
        className='missed-call-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='missed-call-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
