import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['crm-infrastructure-implementation'];
  slug: string;
}

export function CRMAutomationRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    ownershipGap,
    leadOwnershipBoard,
    followUpPath,
    statusVisibility,
    handoffBoundaries,
    readinessFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[crm-infrastructure-implementation] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='crm-page'>
      <HeroFrame
        className='crm-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={ownershipGap.header}
        tone='white'
        className='crm-ownershipGap'
        ariaLabel={ownershipGap.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={leadOwnershipBoard.header}
        tone='mist'
        className='crm-leadOwnershipBoard'
        ariaLabel={leadOwnershipBoard.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={followUpPath.header}
        tone='gradient-dark'
        className='crm-followUpPath'
        ariaLabel={followUpPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={statusVisibility.header}
        tone='white'
        className='crm-statusVisibility'
        ariaLabel={statusVisibility.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handoffBoundaries.header}
        tone='mist'
        className='crm-handoffBoundaries'
        ariaLabel={handoffBoundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={readinessFilter.header}
        tone='white'
        className='crm-readinessFilter'
        ariaLabel={readinessFilter.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='mist'
        variant='split'
        className='crm-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='crm-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
