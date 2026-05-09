import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['website-crm-integration-vs-manual-lead-handling'];
  slug: string;
}

export function CRMDecisionSupportRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { decisionProblem, comparison, chooseCRM, boundaries, nextStep } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[website-crm-integration-vs-manual-lead-handling] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='crm-decision-page'>
      <HeroFrame
        className='crm-decision-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={decisionProblem.header}
        tone='white'
        className='crm-decision-decisionProblem'
        ariaLabel={decisionProblem.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={comparison.header}
        tone='mist'
        className='crm-decision-comparison'
        ariaLabel={comparison.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={chooseCRM.header}
        tone='white'
        className='crm-decision-chooseCRM'
        ariaLabel={chooseCRM.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={boundaries.header}
        tone='mist'
        className='crm-decision-boundaries'
        ariaLabel={boundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={nextStep.header}
        tone='white'
        className='crm-decision-nextStep'
        ariaLabel={nextStep.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <DecisionPanel
        className='crm-decision-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
