import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const MONTHS = [
  { m: 'Jan', load: 'mid', tag: 'Maint' },
  { m: 'Feb', load: 'mid', tag: 'Maint' },
  { m: 'Mar', load: 'high', tag: 'Quotes' },
  { m: 'Apr', load: 'peak', tag: 'Spring' },
  { m: 'May', load: 'high', tag: 'Build' },
  { m: 'Jun', load: 'mid', tag: 'Maint' },
  { m: 'Jul', load: 'low', tag: 'Quiet' },
  { m: 'Aug', load: 'low', tag: 'Quiet' },
  { m: 'Sep', load: 'high', tag: 'Reactivate' },
  { m: 'Oct', load: 'peak', tag: 'Cleanup' },
  { m: 'Nov', load: 'high', tag: 'Cleanup' },
  { m: 'Dec', load: 'mid', tag: 'Wrap' },
];

const FEED_ROWS = [
  { time: '07:42', what: 'Quote · Hampton · turf and edging', stale: false },
  { time: '08:15', what: 'Quote · Glen Iris · garden refresh', stale: true },
  { time: '08:58', what: 'Maintenance · Toorak · monthly', stale: false },
  { time: '09:33', what: 'Quote · Brighton · paving (3 days)', stale: true },
  { time: '10:11', what: 'Past client · St Kilda East · re-quote', stale: true },
  { time: '10:48', what: 'Maintenance · Caulfield · weekly', stale: false },
];

export function LandscapingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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

      {/* 1 — Seasonal recognition */}
      <SectionShell
        heading={{
          eyebrow: 'A landscaping year',
          title:
            'The work changes shape every quarter. [[muted:The office stays exactly the same.]]',
          description:
            'Spring quote spikes, summer maintenance, autumn cleanup, winter reactivation. Same business, four completely different rhythms.',
        }}
        tone='white'
      >
        <div className='hs-text-secondary mx-auto flex max-w-3xl flex-col gap-5 leading-relaxed'>
          <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
            The crew is on a site. The phone is in the ute. Spring quotes are still coming in.
          </p>
          <p>
            Most landscaping operators run the year by memory. Which clients haven&rsquo;t been
            quoted yet. Who&rsquo;s due for a hedge cut. Which past customer asked about pavers in
            September.
          </p>
          <p>The system is the inside of the owner&rsquo;s head. That&rsquo;s the leak.</p>
        </div>
      </SectionShell>

      {/* 2 — DOMINANT: 12-month year arc */}
      <SectionShell
        heading={{
          eyebrow: 'The year as one picture',
          title: 'Twelve months, [[muted:four shapes of work.]]',
        }}
        tone='dark'
      >
        <div className='hs-surface-dark flex flex-col gap-6 rounded-3xl border p-6 lg:p-8'>
          <ul className='hs-bar-row flex h-72 items-end justify-between gap-2'>
            {MONTHS.map(mo => (
              <li key={mo.m} className='flex flex-1 flex-col items-center gap-2'>
                <span
                  className={`hs-tint-${
                    mo.load === 'peak'
                      ? 'red'
                      : mo.load === 'high'
                        ? 'amber'
                        : mo.load === 'mid'
                          ? 'teal'
                          : 'cyan'
                  } hs-bar w-full rounded-md border`}
                  data-load={mo.load}
                />
                <span className='hs-mono hs-text-on-dark-muted'>{mo.m}</span>
              </li>
            ))}
          </ul>
          <ul className='hs-text-on-dark-dim flex justify-between text-xs font-mono'>
            {MONTHS.map(mo => (
              <li key={mo.m} className='hidden flex-1 text-center lg:block'>
                {mo.tag}
              </li>
            ))}
          </ul>
          <p className='hs-text-on-dark-muted text-center text-sm italic'>
            Two peaks. One quiet. The office handles all of it the same way.
          </p>
        </div>
      </SectionShell>

      {/* 3 — Quote requests while crew is out */}
      <SectionShell
        heading={{
          eyebrow: 'Spring quote spike',
          title: 'Quote requests arrive [[muted:while the crew is already on a site.]]',
        }}
        tone='mist'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <ul className='hs-surface hs-shadow-card flex flex-col gap-2 rounded-2xl border p-6 lg:col-span-7'>
            {FEED_ROWS.map(row => (
              <li
                key={row.time}
                className={`hs-grid-when grid items-center gap-4 rounded-lg border px-4 py-3 ${row.stale ? 'hs-tint-amber' : 'hs-surface'}`}
              >
                <span className={`hs-mono ${row.stale ? 'hs-accent-amber' : 'hs-text-subtle'}`}>
                  {row.time}
                </span>
                <span className={row.stale ? 'hs-text-primary' : 'hs-text-secondary'}>
                  {row.what}
                </span>
              </li>
            ))}
          </ul>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Three of those will be lost by tonight.
            </p>
            <p>
              Not because the price was wrong. Because nobody got back to them inside the same day,
              and the next landscaper did.
            </p>
            <p>
              Quote requests during peak months are time-sensitive in a way the rest of the year
              isn&rsquo;t.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* 4 — Maintenance / cleanup / winter rhythms */}
      <SectionShell
        heading={{
          eyebrow: 'Three rhythms inside the year',
          title: 'The recurring work [[muted:is what keeps the lights on.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              season: 'Maintenance',
              tint: 'green',
              title: 'Weekly and monthly visits',
              body: 'Recurring schedules booked once. The office doesn\u2019t have to remember who\u2019s next.',
            },
            {
              season: 'Cleanup',
              tint: 'amber',
              title: 'Autumn and end-of-season',
              body: 'A four-week wave. Same customers, same scope. Booked from last year\u2019s history, not from scratch.',
            },
            {
              season: 'Reactivation',
              tint: 'cyan',
              title: 'Late winter to early spring',
              body: 'Past clients warmed back up before they go shopping for someone new.',
            },
          ].map(card => (
            <article
              key={card.season}
              className={`hs-surface hs-shadow-card hs-rule-top-${card.tint} flex flex-col gap-3 rounded-2xl border p-7`}
            >
              <span className={`hs-mono hs-accent-${card.tint}`}>{card.season}</span>
              <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>{card.title}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{card.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* 5 — Past client loop */}
      <SectionShell
        heading={{
          eyebrow: 'The past client loop',
          title: 'Last year&rsquo;s customers [[muted:are this year&rsquo;s easiest jobs.]]',
        }}
        tone='gradient-mist'
      >
        <ol className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              when: 'Aug',
              what: 'Soft re-intro',
              body: 'Plain message before the spring rush. No offer. Just visible again.',
            },
            {
              when: 'Sep',
              what: 'Cleanup booking',
              body: 'Pre-fill the same scope as last spring. One reply books the visit.',
            },
            {
              when: 'Oct',
              what: 'New project nudge',
              body: 'Anything else they wanted done this year? Open question, no pressure.',
            },
            {
              when: 'Mar',
              what: 'Maintenance check-in',
              body: 'Pre-summer note. Hedge cut, irrigation check, bookable in one tap.',
            },
          ].map(step => (
            <li
              key={step.when}
              className='hs-surface hs-shadow-soft flex flex-col gap-3 rounded-2xl border p-6'
            >
              <span className='hs-mono hs-accent-teal'>{step.when}</span>
              <h3 className='hs-text-primary text-lg font-semibold tracking-tight'>{step.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{step.body}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* 6 — A year that doesn&rsquo;t depend on memory */}
      <SectionShell
        heading={{
          eyebrow: 'Off the owner&rsquo;s head',
          title: 'Four parts of the year [[muted:that no longer need to be remembered.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              what: 'Quote follow-up',
              body: 'Every spring quote nudged in three days, again at seven, then closed quietly.',
            },
            {
              what: 'Recurring schedules',
              body: 'Weekly and monthly visits booked once, run forever, paused with one tap.',
            },
            {
              what: 'Past-client window',
              body: 'August reactivation list pulled from last spring without anyone building it.',
            },
            {
              what: 'Review timing',
              body: 'Asked once after a finished project. Never on a maintenance visit.',
            },
          ].map(card => (
            <article
              key={card.what}
              className='hs-surface-mist flex flex-col gap-3 rounded-2xl border p-6'
            >
              <h3 className='hs-text-primary text-lg font-semibold tracking-tight'>{card.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{card.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* 7 — System bridge */}
      <SectionShell
        heading={{
          eyebrow: 'The systems behind it',
          title: 'Three systems hold the year [[muted:that the owner&rsquo;s head used to.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              system: 'AI Lead Handling',
              role: 'Spring quote calls and forms acknowledged the same day, while the crew is on site.',
            },
            {
              system: 'CRM & Automation',
              role: 'Recurring maintenance, cleanup waves and past-client loops &mdash; all running without memory.',
            },
            {
              system: 'Reputation & Reviews',
              role: 'A single, well-timed ask after finished projects. Never during maintenance.',
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
