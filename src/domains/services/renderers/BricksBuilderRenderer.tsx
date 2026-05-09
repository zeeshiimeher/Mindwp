import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['bricks-builder'];
  slug: string;
}

export function BricksBuilderRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { capabilityFit, deliveryPath, proofContext, boundaries, nextStep } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[bricks-builder] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='bricks-page'>
      <HeroFrame
        className='bricks-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={capabilityFit.header}
        tone='white'
        className='bricks-capabilityFit'
        ariaLabel={capabilityFit.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={deliveryPath.header}
        tone='mist'
        className='bricks-deliveryPath'
        ariaLabel={deliveryPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={proofContext.header}
        tone='white'
        className='bricks-proofContext'
        ariaLabel={proofContext.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={boundaries.header}
        tone='mist'
        className='bricks-boundaries'
        ariaLabel={boundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={nextStep.header}
        tone='white'
        className='bricks-nextStep'
        ariaLabel={nextStep.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <DecisionPanel
        className='bricks-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
