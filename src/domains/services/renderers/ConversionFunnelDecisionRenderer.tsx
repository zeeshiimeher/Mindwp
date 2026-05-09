import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['conversion-funnel-system-vs-landing-page-development'];
  slug: string;
}

export function ConversionFunnelDecisionRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { decisionProblem, comparison, chooseStructured, boundaries, nextStep } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error(
      '[conversion-funnel-system-vs-landing-page-development] Missing service system'
    );
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='funnel-decision-page'>
      <HeroFrame
        className='funnel-decision-hero'
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
        className='funnel-decision-decisionProblem'
        ariaLabel={decisionProblem.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={comparison.header}
        tone='mist'
        className='funnel-decision-comparison'
        ariaLabel={comparison.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={chooseStructured.header}
        tone='white'
        className='funnel-decision-chooseStructured'
        ariaLabel={chooseStructured.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={boundaries.header}
        tone='mist'
        className='funnel-decision-boundaries'
        ariaLabel={boundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={nextStep.header}
        tone='white'
        className='funnel-decision-nextStep'
        ariaLabel={nextStep.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <DecisionPanel
        className='funnel-decision-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
