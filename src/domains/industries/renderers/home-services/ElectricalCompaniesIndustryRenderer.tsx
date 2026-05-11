import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const STREAMS = [
  {
    key: 'commercial',
    tint: 'cyan',
    label: 'Commercial',
    title: 'Repeat sites and managing agents',
    items: [
      'Same-day visits to fix faults on running sites',
      'Maintenance windows booked weeks ahead',
      'Invoicing through agent portals, not the customer',
    ],
    footer: 'Slow office reply costs the contract',
  },
  {
    key: 'residential',
    tint: 'teal',
    label: 'Residential',
    title: 'Quotes and small jobs from homeowners',
    items: [
      'Switchboard upgrades and rewires',
      'Lighting refits and EV chargers',
      'Quote first, schedule second, follow up third',
    ],
    footer: 'Slow follow-up costs the job',
  },
  {
    key: 'parts',
    tint: 'amber',
    label: 'Parts',
    title: 'Suppliers, deliveries, returns',
    items: [
      'Stock waiting at the wholesaler counter',
      'Special orders chased on the back of the truck',
      'Delivery slips not yet logged against the job',
    ],
    footer: 'Slow updates stop the field',
  },
];

const STUCK_POINTS = [
  {
    title: 'Site visit confirmed, then forgotten',
    where: 'Office \u2194 Field',
    body: 'A commercial agent confirms by email. Nobody adds it to the field calendar.',
  },
  {
    title: 'Quote sent, no follow-up booked',
    where: 'Office \u2194 Customer',
    body: 'Residential quote goes out at 6pm. The next nudge depends on someone remembering.',
  },
  {
    title: 'Parts arrived, nobody told the crew',
    where: 'Supplier \u2194 Field',
    body: 'Counter calls to confirm pickup. The message lives in a sticky note for two days.',
  },
];

const WEEK_ROWS = [
  {
    stream: 'commercial',
    tint: 'cyan',
    label: 'Commercial',
    days: [
      'Site fault · Box Hill',
      'Maint window · Camberwell',
      'Inspection · Hawthorn',
      '—',
      'Quoted upgrade · Kew',
    ],
  },
  {
    stream: 'residential',
    tint: 'teal',
    label: 'Residential',
    days: [
      'Quote · Glen Iris',
      'Switchboard · Toorak',
      'EV charger · Brighton',
      'Quote · Malvern',
      'Lighting · Hampton',
    ],
  },
  {
    stream: 'parts',
    tint: 'amber',
    label: 'Parts',
    days: [
      'Pickup · supplier A',
      'Special order placed',
      'Wait',
      'Delivery · supplier B',
      'Returns',
    ],
  },
];

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
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* 1 — Three streams recognition */}
      <SectionFrame
        heading={{
          kicker: 'Three streams of work',
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
      </SectionFrame>

      {/* 2 — DOMINANT: 3-stream column board */}
      <SectionFrame
        heading={{
          kicker: 'The streams as columns',
          title: 'Three streams, three columns &mdash; [[muted:not three rows in one inbox.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {STREAMS.map(s => (
            <article
              key={s.key}
              className={`hs-surface-dark hs-tint-${s.tint} flex flex-col gap-5 rounded-3xl border p-7 lg:p-8`}
            >
              <header className='flex flex-col gap-2 border-b pb-4 hs-divider-dark'>
                <span className={`hs-mono-eyebrow hs-accent-${s.tint}`}>{s.label}</span>
                <h3 className='hs-text-on-dark-strong text-xl font-semibold tracking-tight'>
                  {s.title}
                </h3>
              </header>
              <ul className='hs-text-on-dark flex flex-col gap-2 text-sm leading-relaxed'>
                {s.items.map(it => (
                  <li key={it} className='flex gap-2'>
                    <span className={`hs-accent-${s.tint}`}>—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <footer className='hs-mono hs-text-on-dark-dim mt-auto border-t pt-3 hs-divider-dark'>
                {s.footer}
              </footer>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 3 — Where handoff gets stuck */}
      <SectionFrame
        heading={{
          kicker: 'The friction points',
          title: 'Three places electrical work [[muted:stalls between streams.]]',
        }}
        tone='mist'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {STUCK_POINTS.map(p => (
            <article
              key={p.title}
              className='hs-surface hs-shadow-card hs-rule-top-amber flex flex-col gap-3 rounded-2xl border p-7'
            >
              <span className='hs-mono hs-accent-amber'>{p.where}</span>
              <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>{p.title}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{p.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 4 — Site visit & parts follow-up */}
      <SectionFrame
        heading={{
          kicker: 'Field-day follow-up',
          title: 'Pre-checks decide [[muted:whether the site visit is one trip or two.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Most second trips happen because of one missing pre-check.
            </p>
            <p>
              Confirming access. Confirming the part is on the truck. Confirming the meter board
              hasn&rsquo;t changed since the last quote.
            </p>
            <p>None of this is technical work. It&rsquo;s timing.</p>
          </div>

          <ol className='hs-surface hs-shadow-soft flex flex-col gap-3 rounded-2xl border p-7 lg:col-span-7'>
            {[
              { when: 'Day -3', what: 'Confirm access window with the agent or homeowner' },
              { when: 'Day -2', what: 'Confirm parts are at the wholesaler counter' },
              { when: 'Day -1', what: 'Confirm the field tech has the job card' },
              { when: 'Day 0 · 07:00', what: 'Pickup and route confirmed before driving' },
              { when: 'Day 0 · 17:00', what: 'Job notes and photos attached on site' },
            ].map(row => (
              <li
                key={row.when}
                className='hs-grid-when-lg grid items-baseline gap-4 border-b pb-3 last:border-b-0 last:pb-0 hs-divider-soft'
              >
                <span className='hs-mono hs-accent-cyan'>{row.when}</span>
                <span className='hs-text-secondary text-sm leading-relaxed'>{row.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionFrame>

      {/* 5 — Week with separate paths */}
      <SectionFrame
        heading={{
          kicker: 'A week with three calendars',
          title: 'Each stream gets [[muted:its own week, not a shared inbox.]]',
        }}
        tone='gradient-mist'
      >
        <div className='hs-surface flex flex-col gap-4 rounded-3xl border p-6 lg:p-8'>
          <ol className='hs-text-subtle hs-grid-lane grid grid-cols-5 gap-2 pl-24 text-xs font-mono uppercase tracking-wider'>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
              <li key={d}>{d}</li>
            ))}
          </ol>
          {WEEK_ROWS.map(row => (
            <div
              key={row.stream}
              className='hs-grid-lane grid items-stretch gap-4 border-t pt-4 hs-divider-soft'
            >
              <span className={`hs-mono hs-accent-${row.tint}`}>{row.label}</span>
              <ul className='grid grid-cols-5 gap-2'>
                {row.days.map((d, i) => (
                  <li
                    key={i}
                    className={`hs-tint-${row.tint} flex items-center rounded-md border px-3 py-2 text-xs hs-text-primary`}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionFrame>

      {/* 6 — Job notes / review handling */}
      <SectionFrame
        heading={{
          kicker: 'After the work',
          title: 'Job notes are proof, [[muted:not paperwork.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              tag: 'Photos',
              title: 'Attached on site, not later',
              body: 'Same camera, same crew. Photos sit on the job card the moment they\u2019re taken.',
              tint: 'cyan',
            },
            {
              tag: 'Notes',
              title: 'Voice in, written out',
              body: 'A short voice note becomes a job entry the office can read without ringing the field.',
              tint: 'teal',
            },
            {
              tag: 'Review',
              title: 'Asked once, the right way',
              body: 'Residential customers asked after sign-off. Commercial agents not asked at all unless invited.',
              tint: 'amber',
            },
          ].map(card => (
            <article
              key={card.tag}
              className={`hs-surface hs-shadow-soft hs-rule-top-${card.tint} flex flex-col gap-3 rounded-2xl border p-7`}
            >
              <span className={`hs-mono hs-accent-${card.tint}`}>{card.tag}</span>
              <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>{card.title}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{card.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 7 — System bridge */}
      <SectionFrame
        heading={{
          kicker: 'The systems behind it',
          title: 'Three systems hold three streams [[muted:without one office juggling them.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              system: 'AI Lead Handling',
              role: 'Commercial site faults and residential quote calls answered separately, every time.',
            },
            {
              system: 'CRM & Automation',
              role: 'Each stream gets its own follow-up rhythm &mdash; quotes, agents, suppliers don\u2019t share a queue.',
            },
            {
              system: 'Reputation & Reviews',
              role: 'Residential customers asked after sign-off. Commercial work stays out of the review loop.',
            },
          ].map(card => (
            <article
              key={card.system}
              className='hs-surface-dark flex flex-col gap-3 rounded-2xl border p-7'
            >
              <h3 className='hs-text-on-dark-strong text-xl font-semibold tracking-tight'>
                {card.system}
              </h3>
              <p className='hs-text-on-dark-muted leading-relaxed'>{card.role}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        tone='white'
      />

      <DecisionPanel
        heading={{
          kicker: data.cta.heading.kicker,
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
