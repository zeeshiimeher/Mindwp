import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function HomeServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.primarySystem;
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  return (
    <main className='industry-category-page'>
      <HeroFrame
        eyebrow={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* 1 — Category recognition */}
      <SectionShell
        heading={{
          eyebrow: 'The category shape',
          title:
            'Field crews on the road, [[muted:office staff holding the day, calls arriving anyway.]]',
          description:
            'Plumbing, roofing, HVAC, electrical and landscaping share one operating shape: demand arrives by phone, the team is somewhere else, and the office is one or two people deep.',
        }}
        tone='white'
      >
        <div className='hs-text-secondary mx-auto flex max-w-3xl flex-col gap-5 leading-relaxed'>
          <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
            The leaks are predictable. The fix is a layer between the call and the crew.
          </p>
          <p>
            Most home-services operators don&rsquo;t need new tools. They need the existing day to
            stop relying on memory, missed calls, and one person at a desk holding everything.
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
