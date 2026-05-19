import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function OrthodonticClinicsIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const contactHref = buildIndustryContactHref({ system: data.primarySystem, slug: data.slug });

  return (
    <main>
      <HeroFrame
        ariaLabel={data.slug + ' industry page hero'}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description='This approved industry page is reset to a clean rebuild base. Future page work can rebuild the story from the actual enquiry, booking, consultation, trust, follow-up, reviews, and proof path.'
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        tone='gradient-hero'
        layout='center'
      />
      <SectionShell
        ariaLabel={data.slug + ' industry page rebuild base'}
        tone='mist'
        heading={{
          eyebrow: 'Rebuild base',
          title: 'This industry page is approved and ready for a focused rebuild.',
          description:
            'The route, data, renderer, metadata, graph entry, and sitemap source are aligned. The page content is intentionally not final.',
        }}
      >
        <div className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Industry reset</p>
          <h3>{data.hero.eyebrow}</h3>
          <p>
            Ready for a future rebuild around the industry-specific website front door and connected
            handling path.
          </p>
        </div>
      </SectionShell>
      <DecisionPanel
        heading={data.decisionPanel.heading}
        actions={data.decisionPanel.actions}
        expectations={data.decisionPanel.expectations}
        reassurance={data.decisionPanel.footer}
      />
    </main>
  );
}
