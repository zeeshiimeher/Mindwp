import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['reputation-review-systems'];
  slug: string;
}

export function ReputationReviewSystemsRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    trustGap,
    reviewTiming,
    feedbackRoute,
    monitoringBoard,
    localTrustHandoff,
    fitFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[reputation-review-systems] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='rep-page'>
      <HeroFrame
        className='rep-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      <SectionFrame
        heading={trustGap.header}
        tone='white'
        className='rep-trustGap'
        ariaLabel={trustGap.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={reviewTiming.header}
        tone='mist'
        className='rep-reviewTiming'
        ariaLabel={reviewTiming.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={feedbackRoute.header}
        tone='gradient-dark'
        className='rep-feedbackRoute'
        ariaLabel={feedbackRoute.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={monitoringBoard.header}
        tone='white'
        className='rep-monitoringBoard'
        ariaLabel={monitoringBoard.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={localTrustHandoff.header}
        tone='mist'
        className='rep-localTrustHandoff'
        ariaLabel={localTrustHandoff.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitFilter.header}
        tone='white'
        className='rep-fitFilter'
        ariaLabel={fitFilter.header.title}
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
        className='rep-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='rep-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
