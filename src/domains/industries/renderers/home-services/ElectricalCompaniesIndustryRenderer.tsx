import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function ElectricalCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  return (
    <main className='industry-detail-page'>
      <HeroFrame
        eyebrow={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* 1 — Three streams recognition */}
      <SectionShell
        heading={{
          eyebrow: 'Three streams of work',
          title:
            'Commercial visits, residential quotes and parts follow-up [[muted:all want different attention.]]',
          description:
            'They come from different people, into the same office, on the same line. The handoffs between them are where electrical operators lose hours each week.',
        }}
        tone='white'
      >
        <div className='hs-text-secondary mx-auto flex max-w-3xl flex-col gap-5 leading-relaxed'>
          <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
            Three streams. One office. Three calendars that have to stay separate.
          </p>
          <p>
            A commercial customer wants a fast answer about a site fault. A residential customer
            wants a thoughtful quote next week. A supplier wants someone to pick up the order today.
          </p>
          <p>
            Mixing them &mdash; handling them in arrival order &mdash; is how each stream loses its
            best work to whichever stream is loudest.
          </p>
        </div>
      </SectionShell>

      <FAQSection
        eyebrow={data.faq.header.eyebrow}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        tone='white'
      />

      <DecisionPanel
        heading={{
          eyebrow: data.cta.heading.eyebrow,
          title: data.cta.heading.title,
          description: data.cta.heading.description,
        }}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'primary' }]}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
      />
    </main>
  );
}
