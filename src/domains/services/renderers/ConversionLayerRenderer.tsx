import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['conversion-layer'];
  slug: string;
}

export function ConversionLayerRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { leakagePattern, decisionSurface, improvementPath, parentHandoff, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[conversion-layer] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='cvl-page'>
      <HeroFrame
        className='cvl-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={leakagePattern.header}
        tone='white'
        className='cvl-leakagePattern'
        ariaLabel={leakagePattern.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={decisionSurface.header}
        tone='mist'
        className='cvl-decisionSurface'
        ariaLabel={decisionSurface.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={improvementPath.header}
        tone='gradient-mist'
        className='cvl-improvementPath'
        ariaLabel={improvementPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={parentHandoff.header}
        tone='white'
        className='cvl-parentHandoff'
        ariaLabel={parentHandoff.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='cvl-fitBoundaries'
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
        className='cvl-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='cvl-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
