import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['system-migration-platform-consolidation'];
  slug: string;
}

export function SystemMigrationPlatformConsolidationRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { migrationSignals, consolidationPath, riskBoundaries, handoffPlan, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error('[system-migration-platform-consolidation] Missing service system');
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='migration-page'>
      <HeroFrame
        className='migration-hero'
        ariaLabel={hero.title}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={migrationSignals.header}
        tone='white'
        className='migration-migrationSignals'
        ariaLabel={migrationSignals.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={consolidationPath.header}
        tone='mist'
        className='migration-consolidationPath'
        ariaLabel={consolidationPath.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={riskBoundaries.header}
        tone='gradient-mist'
        className='migration-riskBoundaries'
        ariaLabel={riskBoundaries.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={handoffPlan.header}
        tone='white'
        className='migration-handoffPlan'
        ariaLabel={handoffPlan.header.title}
      >
        {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
      </SectionFrame>

      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='migration-fitBoundaries'
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
        className='migration-faq'
        ariaLabel={faq.header.title}
      />

      <DecisionPanel
        className='migration-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
