import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['website-redesign-system-rebuild'];
  slug: string;
}

export function WebsiteRedesignSystemRebuildRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { decisionProblem, comparison, rebuildTriggers, boundaries, nextStep } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[website-redesign-system-rebuild] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='redesign-page'>
      <HeroFrame
        className='redesign-hero'
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
        className='redesign-decisionProblem'
        ariaLabel={decisionProblem.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={comparison.header}
        tone='mist'
        className='redesign-comparison'
        ariaLabel={comparison.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={rebuildTriggers.header}
        tone='gradient-mist'
        className='redesign-rebuildTriggers'
        ariaLabel={rebuildTriggers.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={boundaries.header}
        tone='white'
        className='redesign-boundaries'
        ariaLabel={boundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={nextStep.header}
        tone='mist'
        className='redesign-nextStep'
        ariaLabel={nextStep.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <DecisionPanel
        className='redesign-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
