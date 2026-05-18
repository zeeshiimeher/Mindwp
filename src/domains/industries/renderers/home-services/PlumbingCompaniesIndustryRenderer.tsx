import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function PlumbingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const contactHref = buildIndustryContactHref({ system: data.primarySystem, slug: data.slug });

  return (
    <main>
      <HeroFrame
        ariaLabel='Plumbing companies hero'
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description='This page is reset to a clean rebuild base so the next pass can rebuild the industry story from the real operating pressure.'
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        tone='gradient-hero'
        layout='center'
      />
      <SectionShell
        ariaLabel='Plumbing companies rebuild base'
        tone='mist'
        heading={{
          eyebrow: 'Rebuild base',
          title: 'This industry page is back on a clean rebuild base.',
          description:
            'The page now holds only the core frame: hero, one section shell, and one decision point.',
        }}
      >
        <div className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Industry reset</p>
          <h3>Ready for a fresh industry rebuild.</h3>
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
