import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const ZONES = [
  {
    zone: 'field',
    tint: 'cyan',
    label: 'Field',
    title: 'On the road, on a roof, on a customer site',
    body: 'The crew is making the money. They\u2019re also the people who can\u2019t answer the phone.',
    rows: [
      { tag: '07:30', what: 'Crew briefing, route loaded' },
      { tag: '09:14', what: 'On site, photos taken' },
      { tag: '11:40', what: 'Job done, voice note left' },
      { tag: '15:20', what: 'Next site started' },
    ],
  },
  {
    zone: 'office',
    tint: 'teal',
    label: 'Office',
    title: 'One desk, three lines, every channel at once',
    body: 'Calls, forms, supplier confirmations, customer chase-ups. The office is doing five jobs at once.',
    rows: [
      { tag: 'CALL', what: 'New enquiry, dispatch decision' },
      { tag: 'FORM', what: 'Web form acknowledgement' },
      { tag: 'QUOTE', what: 'Quote drafted, sent, chased' },
      { tag: 'BOOK', what: 'Tomorrow\u2019s schedule confirmed' },
    ],
  },
  {
    zone: 'after',
    tint: 'amber',
    label: 'After-hours',
    title: 'When the office is closed but the calls are not',
    body: 'Emergencies cluster after dinner and before breakfast. The line either rings out or wakes the on-call.',
    rows: [
      { tag: '19:40', what: 'Burst pipe call' },
      { tag: '21:15', what: 'No-cool HVAC call' },
      { tag: '06:45', what: 'Storm inspection request' },
      { tag: '07:10', what: 'Quote follow-up reply' },
    ],
  },
];

const TRADES = [
  {
    slug: 'roofing-companies',
    label: 'Roofing',
    title: 'Storm weeks, inspections, insurance work',
    body: 'After-storm intake, photo handoff, quote follow-up and insurer bundles &mdash; all in one thread.',
    tint: 'amber',
  },
  {
    slug: 'hvac-companies',
    label: 'HVAC',
    title: 'Surge weeks, dispatch, service plans',
    body: 'Booked service days, urgent calls, install threads, and seasonal reactivation held together.',
    tint: 'red',
  },
  {
    slug: 'plumbing-companies',
    label: 'Plumbing',
    title: 'Emergency vs quoted, separate lanes',
    body: 'Two-lane handling so urgent calls and bathroom quotes don\u2019t share the same calendar.',
    tint: 'cyan',
  },
  {
    slug: 'electrical-companies',
    label: 'Electrical',
    title: 'Three streams, three calendars',
    body: 'Commercial, residential and parts streams running side by side without one inbox swallowing the others.',
    tint: 'teal',
  },
  {
    slug: 'landscaping-companies',
    label: 'Landscaping',
    title: 'Seasonal year, recurring rhythm',
    body: 'Spring spike, summer maintenance, autumn cleanup, winter reactivation &mdash; off the owner\u2019s memory.',
    tint: 'green',
    wide: true,
  },
];

export function HomeServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  return (
    <main className='industry-category-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* 1 — Category recognition */}
      <SectionFrame
        heading={{
          kicker: 'The category shape',
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
      </SectionFrame>

      {/* 2 — DOMINANT: field/office/after-hours map */}
      <SectionFrame
        heading={{
          kicker: 'Three zones, one operator',
          title: 'Field, office, after-hours &mdash; [[muted:the three places work happens.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {ZONES.map(z => (
            <article
              key={z.zone}
              className={`hs-surface-dark hs-tint-${z.tint} flex flex-col gap-5 rounded-3xl border p-7 lg:p-8`}
            >
              <header className='flex flex-col gap-2 border-b pb-4 hs-divider-dark'>
                <span className={`hs-mono-eyebrow hs-accent-${z.tint}`}>{z.label}</span>
                <h3 className='hs-text-on-dark-strong text-xl font-semibold tracking-tight'>
                  {z.title}
                </h3>
                <p className='hs-text-on-dark text-sm leading-relaxed'>{z.body}</p>
              </header>
              <ul className='flex flex-col gap-2 border-t pt-4 hs-divider-dark'>
                {z.rows.map(r => (
                  <li
                    key={r.tag}
                    className='hs-text-on-dark-muted hs-grid-when grid items-baseline gap-3 text-xs'
                  >
                    <span className={`hs-mono hs-accent-${z.tint}`}>{r.tag}</span>
                    <span>{r.what}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 3 — Five ways the week breaks */}
      <SectionFrame
        heading={{
          kicker: 'Five common breaks',
          title: 'Where home-services weeks [[muted:lose work without anyone noticing.]]',
        }}
        tone='mist'
      >
        <ol className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
          {[
            {
              num: '01',
              what: 'The missed first ring',
              body: 'Caller hangs up at three rings. No SMS, no callback queue.',
            },
            {
              num: '02',
              what: 'The voicemail nobody returns',
              body: 'The voicemail icon lights up at 11am. Office is on another call.',
            },
            {
              num: '03',
              what: 'The quote with no follow-up',
              body: 'Quote sent at 9pm. No reminder scheduled. The job goes quiet.',
            },
            {
              num: '04',
              what: 'The job notes that never landed',
              body: 'Crew finishes, photos sit on a phone, customer doesn\u2019t see the proof.',
            },
            {
              num: '05',
              what: 'The customer that never got asked',
              body: 'A great job ends. No review request. The next enquiry has nothing to read.',
            },
          ].map(b => (
            <li
              key={b.num}
              className='hs-surface hs-shadow-card flex flex-col gap-3 rounded-2xl border p-6'
            >
              <span className='hs-mono hs-accent-red text-2xl font-semibold tracking-tight'>
                {b.num}
              </span>
              <h3 className='hs-text-primary text-lg font-semibold tracking-tight'>{b.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{b.body}</p>
            </li>
          ))}
        </ol>
      </SectionFrame>

      {/* 4 — Shared slip surface */}
      <SectionFrame
        heading={{
          kicker: 'The shared slip',
          title: 'Different trades, [[muted:same handful of slips that quietly cost the month.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              The slips look the same across every trade.
            </p>
            <p>
              A roofer, a plumber and an electrician all lose work the same way: the call
              doesn&rsquo;t get acknowledged inside the first ring, the quote doesn&rsquo;t get
              followed up, the finished job doesn&rsquo;t turn into a review.
            </p>
            <p>The tools differ. The leaks don&rsquo;t.</p>
          </div>

          <ul className='hs-surface hs-shadow-card flex flex-col gap-3 rounded-2xl border p-6 lg:col-span-7'>
            {[
              {
                label: 'Acknowledgement',
                tint: 'cyan',
                what: 'First-ring SMS so the caller knows the office saw the call.',
              },
              {
                label: 'Routing',
                tint: 'teal',
                what: 'Right person, right calendar &mdash; without ringing the field.',
              },
              {
                label: 'Follow-up',
                tint: 'amber',
                what: 'Quote nudges that don\u2019t depend on the office remembering.',
              },
              {
                label: 'Review',
                tint: 'green',
                what: 'One ask after sign-off, the right voice, the right day.',
              },
            ].map(row => (
              <li
                key={row.label}
                className='hs-grid-row-auto grid items-center gap-4 border-b pb-3 last:border-b-0 last:pb-0 hs-divider-soft'
              >
                <span className='hs-text-primary'>{row.what}</span>
                <span className={`hs-mono hs-accent-${row.tint}`}>{row.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* 5 — Recognition selector into detail pages */}
      <SectionFrame
        heading={{
          kicker: 'Find your trade',
          title: 'Pick the trade [[muted:that looks most like your week.]]',
        }}
        tone='gradient-mist'
      >
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {TRADES.map(t => (
            <InternalLink
              key={t.slug}
              href={`/industries/home-services/${t.slug}`}
              className={`hs-surface hs-shadow-card hs-rule-top-${t.tint} hs-trade-card group flex flex-col gap-3 rounded-2xl border p-7 no-underline ${t.wide ? 'lg:col-span-3' : ''}`}
            >
              <span className={`hs-mono hs-accent-${t.tint}`}>{t.label}</span>
              <h3 className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
                {t.title}
              </h3>
              <p className='hs-text-secondary leading-relaxed'>{t.body}</p>
              <span className={`hs-mono hs-accent-${t.tint} mt-3 border-t pt-3 hs-divider-dashed`}>
                Read the {t.label.toLowerCase()} page &rarr;
              </span>
            </InternalLink>
          ))}
        </div>
      </SectionFrame>

      {/* 6 — Calls/forms/reviews ownership */}
      <SectionFrame
        heading={{
          kicker: 'Three things every operator owns',
          title: 'Calls, forms and reviews [[muted:should not be three open browser tabs.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              num: '01',
              title: 'Calls',
              body: 'Every ring acknowledged. Every voicemail returned. Nothing on a sticky note.',
              tint: 'cyan',
            },
            {
              num: '02',
              title: 'Forms',
              body: 'Web forms, quote forms and referrals all land in one queue with one owner.',
              tint: 'teal',
            },
            {
              num: '03',
              title: 'Reviews',
              body: 'Asked once, after sign-off, in the right voice for the job. No scattered links.',
              tint: 'green',
            },
          ].map(c => (
            <article
              key={c.num}
              className='hs-surface-mist flex flex-col gap-4 rounded-2xl border p-7'
            >
              <span className={`hs-mono hs-accent-${c.tint} text-3xl font-semibold tracking-tight`}>
                {c.num}
              </span>
              <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>{c.title}</h3>
              <p className='hs-text-secondary leading-relaxed'>{c.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 7 — A handled week across the category */}
      <SectionFrame
        heading={{
          kicker: 'A category week, handled',
          title: 'Five days [[muted:where nothing gets held in someone&rsquo;s head.]]',
        }}
        tone='mist'
      >
        <ol className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
          {[
            { day: 'Mon', what: 'Inbound surge held inside first ring', load: 'heavy' },
            { day: 'Tue', what: 'Quote queue follow-up nudges sent', load: 'steady' },
            { day: 'Wed', what: 'Field photos attached to job cards', load: 'steady' },
            { day: 'Thu', what: 'Past clients warmed back up', load: 'light' },
            { day: 'Fri', what: 'Reviews requested on signed-off jobs', load: 'steady' },
          ].map(d => (
            <li
              key={d.day}
              className='hs-surface hs-shadow-soft flex flex-col gap-3 rounded-2xl border p-6'
            >
              <div className='hs-grid-row-auto grid items-baseline gap-2'>
                <span className='hs-mono hs-accent-cyan'>{d.day}</span>
                <span className='hs-mono hs-text-subtle'>load · {d.load}</span>
              </div>
              <p className='hs-text-primary text-base font-semibold leading-snug tracking-tight'>
                {d.what}
              </p>
              <span
                className='hs-tint-cyan hs-bar mt-auto block w-full rounded-md border'
                data-load={d.load}
              />
            </li>
          ))}
        </ol>
      </SectionFrame>

      {/* 8 — What changes when the day has a place */}
      <SectionFrame
        heading={{
          kicker: 'What changes',
          title: 'When the day has a place to live, [[muted:four things stop slipping.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              what: 'Missed-call recovery',
              body: 'Every dropped call gets an SMS and a callback slot inside the first hour.',
            },
            {
              what: 'Quote conversion',
              body: 'Quotes get follow-up nudges scheduled the moment they\u2019re sent.',
            },
            {
              what: 'Job visibility',
              body: 'The office knows the state of every job without ringing the crew.',
            },
            {
              what: 'Review trust',
              body: 'New reviews accumulate steadily because the ask happens on the right day.',
            },
          ].map(c => (
            <article
              key={c.what}
              className='hs-surface-mist flex flex-col gap-3 rounded-2xl border p-6'
            >
              <h3 className='hs-text-primary text-lg font-semibold tracking-tight'>{c.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{c.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 9 — System bridge */}
      <SectionFrame
        heading={{
          kicker: 'The systems that hold it',
          title: 'Five systems behind the home-services day. [[muted:Each one earns its place.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              system: 'AI Lead Handling',
              role: 'First-ring acknowledgement and after-hours capture, every day of the week.',
            },
            {
              system: 'CRM & Automation',
              role: 'Holds the thread between intake, quote, job, follow-up and reactivation.',
            },
            {
              system: 'Smart Website Systems',
              role: 'The site converts intent into a structured intake the office can actually use.',
            },
            {
              system: 'Reputation & Reviews',
              role: 'Asked once after sign-off, never on a maintenance visit, never on a sensitive job.',
            },
            {
              system: 'Local SEO Authority',
              role: 'Local visibility that brings the next enquiry, on top of a system ready to hold it.',
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
