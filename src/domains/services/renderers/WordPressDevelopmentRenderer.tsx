import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['wordpress-development'];
  slug: string;
}

export function WordPressDevelopmentRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { fitContext, buildPath, operatingBoundaries, handoffIntoSystems, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[wordpress-development] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='wp-page'>
      <HeroFrame
        className='wp-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={fitContext.header}
        tone='white'
        className='wp-fitContext'
        ariaLabel={fitContext.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={buildPath.header}
        tone='mist'
        className='wp-buildPath'
        ariaLabel={buildPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={operatingBoundaries.header}
        tone='gradient-mist'
        className='wp-operatingBoundaries'
        ariaLabel={operatingBoundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handoffIntoSystems.header}
        tone='white'
        className='wp-handoffIntoSystems'
        ariaLabel={handoffIntoSystems.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='wp-fitBoundaries'
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
        className='wp-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='wp-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
