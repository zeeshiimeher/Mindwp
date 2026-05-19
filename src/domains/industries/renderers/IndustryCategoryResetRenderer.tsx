import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function IndustryCategoryResetRenderer({ data }: IndustryCategoryRendererProps) {
  const contactHref = buildIndustryContactHref({ system: data.primarySystem, slug: data.slug });

  return (
    <main>
      <HeroFrame
        ariaLabel={data.slug + ' industry category hero'}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description='This approved industry category is reset to a clean rebuild base. Future page work can rebuild the category around the real business or clinic path.'
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        tone='gradient-hero'
        layout='center'
      />
      <SectionShell
        ariaLabel={data.slug + ' industry category rebuild base'}
        tone='mist'
        heading={{
          eyebrow: 'Rebuild base',
          title: 'This category is approved and ready for a focused rebuild.',
          description:
            'The route, data, renderer, metadata, graph entry, and sitemap source are aligned. The page content is intentionally not final.',
        }}
      >
        <div className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Category reset</p>
          <h3>{data.hero.eyebrow}</h3>
          <p>
            Ready for a future rebuild around website clarity, connected handling, trust, reviews,
            proof, and the approved lane.
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
