import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function AutomotiveServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const contactHref = buildIndustryContactHref({ system: data.primarySystem, slug: data.slug });

  return (
    <main>
      <HeroFrame
        ariaLabel='Automotive services hero'
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description='This category is reset to a clean rebuild base so the next pass can be shaped from buyer reality, section by section.'
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        tone='gradient-hero'
        layout='center'
      />
      <SectionShell
        ariaLabel='Automotive services rebuild base'
        tone='mist'
        heading={{
          eyebrow: 'Rebuild base',
          title: 'This category is back on a clean rebuild base.',
          description:
            'The page now holds only the core frame: hero, one section shell, and one decision point.',
        }}
      >
        <div className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Category reset</p>
          <h3>Ready for a fresh category rebuild.</h3>
          <p>The old long-form sections are removed so the next rebuild can start clean.</p>
        </div>
      </SectionShell>
      <DecisionPanel
        heading={{
          eyebrow: data.decisionPanel.heading.eyebrow,
          title: data.decisionPanel.heading.title,
          subtitle: data.decisionPanel.heading.subtitle,
          description: data.decisionPanel.heading.description,
        }}
        actions={data.decisionPanel.actions}
        expectations={data.decisionPanel.expectations}
        reassurance={data.decisionPanel.footer}
      />
    </main>
  );
}
