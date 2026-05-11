import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const HOURS = [
  { h: '06', load: 'light' },
  { h: '08', load: 'steady' },
  { h: '10', load: 'heavy' },
  { h: '12', load: 'steady' },
  { h: '14', load: 'heavy' },
  { h: '16', load: 'heavy' },
  { h: '18', load: 'steady' },
  { h: '20', load: 'light' },
];

export function PlumbingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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

      {/* 1 — Two paths recognition */}
      <SectionFrame
        heading={{
          kicker: 'Two calls, two paths',
          title:
            'An emergency leak and a bathroom quote [[muted:should not land in the same holding pattern.]]',
          description:
            'They share a phone line. They want different things. Mixing them is how both jobs slip.',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
          <article className='hs-surface hs-shadow-card hs-rule-top-red flex flex-col gap-4 rounded-3xl border p-8'>
            <span className='hs-mono hs-accent-red'>Urgent · 14:32</span>
            <h3 className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Burst under the kitchen
            </h3>
            <p className='hs-text-secondary leading-relaxed'>
              Water on the floor. Mains shut off. Caller wants someone on the way inside the hour.
            </p>
            <p className='hs-mono hs-text-subtle border-t pt-4 hs-divider-dashed'>
              Wants speed &middot; not a quote
            </p>
          </article>
          <article className='hs-surface hs-shadow-card hs-rule-top-teal flex flex-col gap-4 rounded-3xl border p-8'>
            <span className='hs-mono hs-accent-teal'>Quoted · 14:34</span>
            <h3 className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Bathroom renovation
            </h3>
            <p className='hs-text-secondary leading-relaxed'>
              Architect drawings attached. Looking at three trades. Wants a thoughtful response, not
              a same-day visit.
            </p>
            <p className='hs-mono hs-text-subtle border-t pt-4 hs-divider-dashed'>
              Wants clarity &middot; not urgency
            </p>
          </article>
        </div>
      </SectionFrame>

      {/* 2 — DOMINANT: emergency vs quoted lanes */}
      <SectionFrame
        heading={{
          kicker: 'Two-lane handling',
          title: 'One office, two lanes &mdash; [[muted:running at the same time.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {[
            {
              tint: 'red',
              label: 'URGENT LANE',
              title: 'Acknowledge, dispatch, on the way',
              steps: [
                { when: '< 1 min', what: 'SMS acknowledgement to the caller' },
                { when: '< 3 min', what: 'Routed to the nearest on-call plumber' },
                { when: '< 10 min', what: 'ETA confirmed back to customer' },
                { when: '< 90 min', what: 'On site, mains made safe' },
                { when: '+ 24 hrs', what: 'Repair quote, attached to the same thread' },
              ],
            },
            {
              tint: 'teal',
              label: 'QUOTED LANE',
              title: 'Site visit, drawings, considered quote',
              steps: [
                { when: 'Day 0', what: 'Auto-reply with intake questions' },
                { when: 'Day 1', what: 'Site visit booked into the calendar' },
                { when: 'Day 3', what: 'Quote drafted from photos and drawings' },
                { when: 'Day 5', what: 'Quote sent with a walkthrough video' },
                { when: 'Day 9', what: 'Follow-up if no reply, plain language' },
              ],
            },
          ].map(lane => (
            <article
              key={lane.tint}
              className={`hs-surface-dark hs-tint-${lane.tint} flex flex-col gap-5 rounded-3xl border p-7 lg:p-8`}
            >
              <header className='flex flex-col gap-2 border-b pb-4 hs-divider-dark'>
                <span className={`hs-mono-eyebrow hs-accent-${lane.tint}`}>{lane.label}</span>
                <h3 className='hs-text-on-dark-strong text-2xl font-semibold tracking-tight'>
                  {lane.title}
                </h3>
              </header>
              <ol className='flex flex-col gap-3'>
                {lane.steps.map(s => (
                  <li
                    key={s.when}
                    className='hs-text-on-dark hs-grid-when grid items-baseline gap-4 text-sm'
                  >
                    <span className={`hs-mono hs-accent-${lane.tint}`}>{s.when}</span>
                    <span>{s.what}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <p className='hs-text-on-dark-muted mx-auto mt-8 max-w-2xl text-center text-sm italic'>
          Same line. Same office. Two completely different calendars.
        </p>
      </SectionFrame>

      {/* 3 — After-hours pressure */}
      <SectionFrame
        heading={{
          kicker: 'After hours',
          title: 'The day the office closes [[muted:is the day leaks happen.]]',
        }}
        tone='mist'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Calls don&rsquo;t check the trading hours.
            </p>
            <p>
              Emergency calls cluster around dinner, bedtime, and the first hour after waking. Two
              of the three are after-hours for most plumbing offices.
            </p>
            <p>
              The line either rings out, or the on-call plumber is asleep with the phone face down.
            </p>
          </div>

          <aside className='hs-surface hs-shadow-card flex flex-col gap-4 rounded-3xl border p-7 lg:col-span-7'>
            <div className='flex items-center justify-between'>
              <span className='hs-mono hs-accent-amber'>Urgent calls · weekday distribution</span>
              <span className='hs-mono hs-text-subtle'>06:00 → 20:00</span>
            </div>
            <ul className='hs-bar-row flex h-44 items-end justify-between gap-2'>
              {HOURS.map(hr => (
                <li key={hr.h} className='flex flex-1 flex-col items-center gap-2'>
                  <span
                    className='hs-tint-red hs-bar w-full rounded-md border'
                    data-load={hr.load}
                  />
                  <span className='hs-mono hs-text-subtle'>{hr.h}</span>
                </li>
              ))}
            </ul>
            <p className='hs-text-secondary text-sm'>
              The peaks fall outside the office. The line has to keep working without anyone there.
            </p>
          </aside>
        </div>
      </SectionFrame>

      {/* 4 — Quote follow-up not losing to urgent */}
      <SectionFrame
        heading={{
          kicker: 'The quoted queue',
          title: 'Quotes don&rsquo;t lose to other plumbers. [[muted:They lose to urgent calls.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <ul className='hs-surface hs-shadow-soft flex flex-col gap-2 rounded-2xl border p-6 lg:col-span-6'>
            {[
              { age: '6 days', what: 'Bathroom · Hawthorn · awaiting drawings', stuck: false },
              { age: '8 days', what: 'Hot water · Caulfield · quote sent · no read', stuck: true },
              { age: '11 days', what: 'Renovation · Brighton · site visit booked', stuck: false },
              { age: '12 days', what: 'Pipe relining · Glen Iris · awaiting reply', stuck: true },
              { age: '14 days', what: 'New build · Mont Albert · awaiting builder', stuck: false },
            ].map(row => (
              <li
                key={row.age}
                className={`hs-grid-when grid items-center gap-4 rounded-lg border px-4 py-3 ${row.stuck ? 'hs-tint-amber' : 'hs-surface'}`}
              >
                <span className={`hs-mono ${row.stuck ? 'hs-accent-amber' : 'hs-text-subtle'}`}>
                  {row.age}
                </span>
                <span className={row.stuck ? 'hs-text-primary' : 'hs-text-secondary'}>
                  {row.what}
                </span>
              </li>
            ))}
          </ul>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-6'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              Two of these don&rsquo;t need a chase &mdash; three of them do.
            </p>
            <p>
              Without a system, the office can&rsquo;t see the difference. Every quote feels like
              it&rsquo;s waiting on the customer when half are waiting on the office.
            </p>
            <p>
              Quoted-lane follow-up runs on its own clock. Urgent calls don&rsquo;t reset the quote
              calendar.
            </p>
          </div>
        </div>
      </SectionFrame>

      {/* 5 — Same-day-different-paths timeline */}
      <SectionFrame
        heading={{
          kicker: 'A real Tuesday',
          title: 'Same day, [[muted:two completely different shapes.]]',
        }}
        tone='gradient-mist'
      >
        <div className='hs-surface flex flex-col gap-5 rounded-3xl border p-7 lg:p-9'>
          <ol className='hs-text-subtle hs-grid-row-auto grid grid-cols-6 gap-2 text-xs font-mono uppercase tracking-wider'>
            {['07', '09', '11', '13', '15', '17'].map(h => (
              <li key={h}>{h}:00</li>
            ))}
          </ol>
          {[
            {
              label: 'Urgent',
              tint: 'red',
              events: [
                { time: '08:10', what: 'Burst · Carnegie', span: '1' },
                { time: '11:40', what: 'Hot water · Bentleigh', span: '1' },
                { time: '15:20', what: 'Blockage · Murrumbeena', span: '2' },
              ],
            },
            {
              label: 'Quoted',
              tint: 'teal',
              events: [
                { time: '09:00', what: 'Site visit · Brighton bathroom', span: '2' },
                { time: '13:30', what: 'Quote drafted · Glen Iris', span: '1' },
                { time: '16:00', what: 'Follow-up · Hawthorn renovation', span: '1' },
              ],
            },
          ].map(row => (
            <div
              key={row.label}
              className='hs-grid-lane grid items-center gap-4 border-t pt-4 hs-divider-soft'
            >
              <span className={`hs-mono hs-accent-${row.tint}`}>{row.label}</span>
              <ul className='grid grid-cols-6 gap-2'>
                {row.events.map((e, i) => (
                  <li
                    key={i}
                    className={`hs-tint-${row.tint} hs-dispatch-block flex flex-col gap-0.5 rounded-md border px-3 py-2 text-xs`}
                    data-span={e.span}
                  >
                    <span className={`hs-mono hs-accent-${row.tint}`}>{e.time}</span>
                    <span className='hs-text-primary'>{e.what}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionFrame>

      {/* 6 — Customer update + review loop */}
      <SectionFrame
        heading={{
          kicker: 'After the job',
          title: 'A review request [[muted:that respects which job it was.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              when: 'Same day',
              what: 'Job complete update',
              body: 'Plumber finishes, the customer gets a clear note: what was done, what to watch.',
            },
            {
              when: 'Day +2',
              what: 'Review ask',
              body: 'One short message. Right voice for the job type. Insurance and emergency jobs can opt out.',
            },
            {
              when: 'Day +30',
              what: 'Quiet check-in',
              body: 'Soft note for renovation jobs &mdash; everything still running the way you wanted? No upsell.',
            },
          ].map(card => (
            <article
              key={card.when}
              className='hs-surface hs-shadow-soft flex flex-col gap-3 rounded-2xl border p-7'
            >
              <span className='hs-mono hs-accent-cyan'>{card.when}</span>
              <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>{card.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{card.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* 7 — System bridge */}
      <SectionFrame
        heading={{
          kicker: 'The systems behind it',
          title: 'Three systems separate the lanes [[muted:without doubling the office.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              system: 'AI Lead Handling',
              role: 'Picks up urgent calls inside the first ring, after hours and on the day off.',
            },
            {
              system: 'CRM & Automation',
              role: 'Quoted lane runs on its own follow-up clock without the office holding it.',
            },
            {
              system: 'Reputation & Reviews',
              role: 'Review requests sent on the right day, in the right voice, for the right job type.',
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
