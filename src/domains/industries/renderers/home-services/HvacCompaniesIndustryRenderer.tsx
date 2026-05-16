import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const DOT = '\u00b7';
const EM = '\u2014';

const DISPATCH_LANES = [
  {
    lane: 'Service',
    tint: 'cyan',
    blocks: [
      { time: '08:00', what: 'Annual service · Glen Iris', span: '2' },
      { time: '10:30', what: 'Filter set · Box Hill', span: '1' },
      { time: '13:00', what: 'Maintenance · Hawthorn', span: '2' },
    ],
  },
  {
    lane: 'Install',
    tint: 'teal',
    blocks: [
      { time: '07:30', what: 'Split system · Camberwell', span: '4' },
      { time: '14:30', what: 'Ducted commission · Surrey Hills', span: '2' },
    ],
  },
  {
    lane: 'Urgent',
    tint: 'red',
    blocks: [
      { time: '09:15', what: 'No cool · Balwyn', span: '1' },
      { time: '11:45', what: 'No cool · Kew', span: '1' },
      { time: '15:30', what: 'Compressor · Toorak', span: '2' },
    ],
  },
];

const SEASON_DAYS = [
  { day: 'Mon', shoulder: 'low', surge: 'mid' },
  { day: 'Tue', shoulder: 'low', surge: 'high' },
  { day: 'Wed', shoulder: 'mid', surge: 'peak' },
  { day: 'Thu', shoulder: 'mid', surge: 'peak' },
  { day: 'Fri', shoulder: 'low', surge: 'high' },
];

const DISPATCH_FEED = [
  { tag: 'URG', detail: 'Balwyn · no cool · baby room', tone: 'red' },
  { tag: 'SVC', detail: 'Glen Iris · service running 40m over', tone: 'amber' },
  { tag: 'INS', detail: 'Camberwell · install needs second tech', tone: 'teal' },
  { tag: 'CALL', detail: 'Kew · no cool · awaiting callback', tone: 'red' },
  { tag: 'QUOTE', detail: 'Surrey Hills · ducted, follow up tonight', tone: 'cyan' },
];

export function HvacCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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

      {/* 1 — Booked day under pressure */}
      <SectionShell
        heading={{
          eyebrow: 'A booked HVAC day',
          title:
            'The day&rsquo;s jobs are already on the board [[muted:when the urgent call comes in.]]',
          description:
            'Service visits, installs, and a no-cool emergency don\u2019t want the same response. The dispatch board doesn\u2019t know that yet.',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          <div className='hs-text-secondary flex flex-col gap-5 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              The day was planned at 7am. By 9:15 it has changed twice.
            </p>
            <p>
              An annual service is running long. A new install needs the second technician. And a
              no-cool call from a baby&rsquo;s room just landed.
            </p>
            <p>
              The booked day, the surge call, and the install crew all want the same office at the
              same time.
            </p>
          </div>

          <aside className='hs-surface-dark flex flex-col gap-4 rounded-3xl border p-6 lg:col-span-7 lg:p-8'>
            <span className='hs-mono-eyebrow hs-accent-amber'>Live dispatch {DOT} 09:14</span>
            <ul className='flex flex-col gap-2'>
              {DISPATCH_FEED.map(row => (
                <li
                  key={row.tag + row.detail}
                  className='hs-text-on-dark hs-grid-feed-2 grid items-center gap-3 rounded-lg border px-3 py-2.5 text-sm hs-divider-dark'
                >
                  <span className={`hs-mono hs-accent-${row.tone}`}>{row.tag}</span>
                  <span>{row.detail}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionShell>

      {/* 2 — Dominant: Dispatch-day path */}
      <SectionShell
        heading={{
          eyebrow: 'Dispatch-day path',
          title:
            'Three lanes, one office &mdash; [[muted:and the urgent call cutting across all of them.]]',
        }}
        tone='dark'
      >
        <div className='hs-surface-dark flex flex-col gap-6 rounded-3xl border p-6 lg:p-8'>
          <ol className='hs-text-on-dark-dim grid grid-cols-6 gap-2 pl-24 text-xs font-mono uppercase tracking-wider'>
            {['07', '09', '11', '13', '15', '17'].map(h => (
              <li key={h}>{h}:00</li>
            ))}
          </ol>
          <div className='flex flex-col gap-3'>
            {DISPATCH_LANES.map(lane => (
              <div
                key={lane.lane}
                className='hs-grid-lane grid items-center gap-4 border-t pt-3 hs-divider-dark first:border-t-0 first:pt-0'
              >
                <span className={`hs-mono hs-accent-${lane.tint}`}>{lane.lane}</span>
                <ul className='hs-dispatch-row grid grid-cols-6 gap-2'>
                  {lane.blocks.map((b, i) => (
                    <li
                      key={i}
                      className={`hs-tint-${lane.tint} hs-dispatch-block flex flex-col gap-0.5 rounded-md border px-3 py-2 text-xs`}
                      data-span={b.span}
                    >
                      <span className={`hs-mono hs-accent-${lane.tint}`}>{b.time}</span>
                      <span className='hs-text-on-dark'>{b.what}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className='hs-text-on-dark-muted text-sm italic'>
            Service runs over. Install needs the second tech. The urgent call lands in the middle.
            Same office holding all three.
          </p>
        </div>
      </SectionShell>

      {/* 3 — Surge season vs normal week */}
      <SectionShell
        heading={{
          eyebrow: 'The first hot week',
          title: 'Normal weeks and surge weeks [[muted:are not the same business.]]',
        }}
        tone='mist'
      >
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
          {[
            {
              title: 'Shoulder season',
              tint: 'teal',
              note: 'Maintenance and installs. The office can hold every call.',
              field: 'shoulder' as const,
            },
            {
              title: 'Surge week',
              tint: 'red',
              note: 'No-cool calls take the line. Maintenance slips. Installs queue.',
              field: 'surge' as const,
            },
          ].map(card => (
            <article
              key={card.title}
              className={`hs-surface hs-shadow-card hs-rule-top-${card.tint} flex flex-col gap-5 rounded-2xl border p-7`}
            >
              <div className='flex items-center justify-between'>
                <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>
                  {card.title}
                </h3>
                <span className={`hs-mono hs-accent-${card.tint}`}>Call volume</span>
              </div>
              <ul className='hs-bar-row flex h-40 items-end justify-between gap-2'>
                {SEASON_DAYS.map(d => (
                  <li key={d.day} className='flex flex-1 flex-col items-center gap-2'>
                    <span
                      className={`hs-tint-${card.tint} hs-bar w-full rounded-md border`}
                      data-load={d[card.field]}
                    />
                    <span className='hs-mono hs-text-subtle'>{d.day}</span>
                  </li>
                ))}
              </ul>
              <p className='hs-text-secondary text-sm leading-relaxed'>{card.note}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* 4 — Service / Urgent / Install handoff */}
      <SectionShell
        heading={{
          eyebrow: 'Three calls, three hands',
          title: 'Each call type [[muted:wants a different next step.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              tag: 'Service',
              tint: 'cyan',
              title: 'Confirm and schedule',
              body: 'Address, last visit, filter set. Office books from the system without ringing the crew.',
            },
            {
              tag: 'Urgent',
              tint: 'red',
              title: 'Acknowledge inside the first ring',
              body: 'Customer hears back inside one minute. Slotted into the day, not stacked on a notepad.',
            },
            {
              tag: 'Install',
              tint: 'teal',
              title: 'Quote thread, not a phone call',
              body: 'Site assessment booked, photos attached, quote drafted from the same thread.',
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
      </SectionShell>

      {/* 5 — Office holding the day */}
      <SectionShell
        heading={{
          eyebrow: 'The office side',
          title: 'One person at a desk [[muted:is not a dispatch system.]]',
        }}
        tone='gradient-mist'
      >
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
          <div className='hs-text-secondary flex flex-col gap-4 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              The office is doing five jobs at once.
            </p>
            <p>
              Booking the next service. Acknowledging the urgent call. Sending the install quote.
              Telling the crew the address has changed. Deciding which voicemail to ring back first.
            </p>
            <p>The system holds four of those. The office only has to do the fifth well.</p>
          </div>
          <ul className='hs-surface flex flex-col gap-3 rounded-2xl border p-7 lg:col-span-7'>
            {[
              { what: 'Inbound rings', who: 'AI Lead Handling', tint: 'cyan' },
              { what: 'Acknowledgement SMS', who: 'AI Lead Handling', tint: 'cyan' },
              { what: 'Job thread + photos', who: 'CRM & Automation', tint: 'teal' },
              { what: 'Quote follow-up', who: 'CRM & Automation', tint: 'teal' },
              { what: 'Service-plan reminder', who: 'CRM & Automation', tint: 'teal' },
              { what: 'Review request', who: 'Reputation & Reviews', tint: 'amber' },
            ].map(row => (
              <li
                key={row.what}
                className='hs-grid-row-auto grid items-center gap-4 border-b pb-3 last:border-b-0 last:pb-0 hs-divider-soft'
              >
                <span className='hs-text-primary'>{row.what}</span>
                <span className={`hs-mono hs-accent-${row.tint}`}>{row.who}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* 6 — Service follow-up loop */}
      <SectionShell
        heading={{
          eyebrow: 'The follow-up loop',
          title: 'A finished install [[muted:is the start of the next appointment.]]',
        }}
        tone='white'
      >
        <ol className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              when: 'Day +0',
              what: 'Sign-off',
              body: 'Job marked complete in the field. Customer sees the running system.',
            },
            {
              when: 'Day +14',
              what: 'Check-in',
              body: 'Plain message: anything not running the way you expected? No upsell.',
            },
            {
              when: 'Day +60',
              what: 'Service plan',
              body: 'Invitation to the maintenance plan. Off switch built in.',
            },
            {
              when: 'Day +180',
              what: 'Pre-season',
              body: 'Reminder before the first hot week. Filter check booked in one tap.',
            },
          ].map(step => (
            <li
              key={step.when}
              className='hs-surface hs-shadow-soft flex flex-col gap-3 rounded-2xl border p-6'
            >
              <span className='hs-mono hs-accent-cyan'>{step.when}</span>
              <h3 className='hs-text-primary text-lg font-semibold tracking-tight'>{step.what}</h3>
              <p className='hs-text-secondary text-sm leading-relaxed'>{step.body}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* 7 — System bridge */}
      <SectionShell
        heading={{
          eyebrow: 'The systems behind it',
          title: 'Three systems hold the surge week. [[muted:Each one earns its place.]]',
        }}
        tone='dark'
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {[
            {
              system: 'AI Lead Handling',
              role: 'No-cool calls get acknowledged inside the first ring, every ring, all week.',
            },
            {
              system: 'CRM & Automation',
              role: `Holds the install thread, the service plan, the next appointment ${EM} without anyone keeping it in a head.`,
            },
            {
              system: 'Reputation & Reviews',
              role: 'Asks once after sign-off, plainly written, with an off switch for sensitive jobs.',
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
