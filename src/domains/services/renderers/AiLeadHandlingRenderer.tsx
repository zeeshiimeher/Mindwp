import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['ai-lead-handling'];
  slug: string;
}

export function AiLeadHandlingRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    responseGap,
    channelSurface,
    handledPath,
    aiBoundary,
    scenarioReadiness,
    fitFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[ai-lead-handling] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='aih-page'>
      <HeroFrame
        className='aih-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      <SectionFrame
        heading={responseGap.header}
        tone='white'
        className='aih-responseGap'
        ariaLabel={responseGap.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={channelSurface.header}
        tone='mist'
        className='aih-channelSurface'
        ariaLabel={channelSurface.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handledPath.header}
        tone='gradient-dark'
        className='aih-handledPath'
        ariaLabel={handledPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={aiBoundary.header}
        tone='white'
        className='aih-aiBoundary'
        ariaLabel={aiBoundary.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={scenarioReadiness.header}
        tone='gradient-mist'
        className='aih-scenarioReadiness'
        ariaLabel={scenarioReadiness.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitFilter.header}
        tone='mist'
        className='aih-fitFilter'
        ariaLabel={fitFilter.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='white'
        variant='split'
        className='aih-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='aih-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
