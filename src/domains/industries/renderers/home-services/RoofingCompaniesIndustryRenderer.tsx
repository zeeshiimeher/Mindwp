import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const STORM_FEED = [
  { time: '06:11', source: 'Inbound', detail: '14 Marlow Cres', tone: 'cyan' },
  { time: '06:24', source: 'Web form', detail: '8 Hampton St', tone: 'cyan' },
  { time: '06:33', source: 'Referral', detail: '22 Roseberry Ave', tone: 'teal' },
  { time: '06:38', source: 'Inbound', detail: '47 Sydney Rd \u00b7 tarp', tone: 'amber' },
  { time: '06:42', source: 'Voicemail', detail: 'no callback in 38 min', tone: 'red' },
];

const ROUTE_NODES = [
  {
    num: '01',
    title: 'Intake',
    body: 'Calls, forms, referrals and insurer notes land inside the first hour.',
    pos: 'up' as const,
    tint: 'cyan',
  },
  {
    num: '02',
    title: 'Triage',
    body: 'Tarp now, inspect tomorrow, quote later. Sorting still done by ear.',
    pos: 'down' as const,
    tint: 'teal',
  },
  {
    num: '03',
    title: 'Inspection',
    body: 'Crew on a roof, twelve photos, a voice note. The next address waits.',
    pos: 'up' as const,
    tint: 'amber',
    pin: 'STALL',
  },
  {
    num: '04',
    title: 'Quote',
    body: 'Written tonight, sent tomorrow, chased Friday. Insurer bundle pending.',
    pos: 'down' as const,
    tint: 'red',
    pin: 'STALL',
    pinTone: 'red' as const,
  },
  {
    num: '05',
    title: 'Update',
    body: 'Homeowner sees where the quote sits before they think to ring.',
    pos: 'up' as const,
    tint: 'cyan',
  },
];

const STORM_WEEK = [
  { day: 'Mon', label: 'Storm front', body: 'Crew rerouted to tarp the worst three roofs.' },
  { day: 'Tue', label: 'Inspection wave', body: 'Eleven inspections booked and walked.' },
  { day: 'Wed', label: 'Photos & quotes', body: 'Photos pulled into job cards as they happen.' },
  { day: 'Thu', label: 'Insurer bundles', body: 'Reports and photos sent in one thread.' },
  { day: 'Fri', label: 'Owner update', body: 'Where each quote sits \u2014 sent before they ask.' },
];

export function RoofingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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

      {/* S1 — Storm intake recognition */}
      <SectionFrame
        heading={{
          eyebrow: 'After a storm',
          title:
            'The first 72 hours after a storm [[muted:decide the month for a roofing office.]]',
          description:
            'Inspection requests come in by phone, web form, referral and insurer at the same time. The crew is already on a roof somewhere across town.',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          <div className='hs-text-secondary flex flex-col gap-6 leading-relaxed lg:col-span-5'>
            <p className='hs-text-primary text-3xl font-semibold leading-tight tracking-tight md:text-4xl'>
              Inspection calls arrive faster than most roofing teams can sort them.
            </p>
            <p>
              The line is full by breakfast. The form inbox is stacking. Someone in the office is
              triaging by ear &mdash; deciding which roof gets a tarp before the next band of rain.
            </p>
            <p className='hs-text-primary'>Nothing slows the rain down.</p>
          </div>

          <div className='lg:col-span-7'>
            <div className='rf-radial-dark relative flex flex-col gap-6 overflow-hidden rounded-3xl border p-8 hs-divider-dark lg:p-10'>
              <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-3'>
                  <span className='rf-pulse-dot' aria-hidden='true' />
                  <span className='hs-mono-eyebrow hs-accent-amber'>Storm front · live</span>
                </div>
                <span className='flex items-baseline gap-2'>
                  <strong className='hs-text-on-dark-strong text-4xl font-semibold tracking-tight'>
                    47
                  </strong>
                  <em className='hs-text-on-dark-muted text-xs not-italic'>events / 12h</em>
                </span>
              </div>

              <ul className='rf-overlap-stack mt-3 flex flex-col'>
                {STORM_FEED.map(row => (
                  <li
                    key={row.time}
                    className={`hs-surface-dark hs-tint-${row.tone} flex items-center gap-4 rounded-xl border px-5 py-4`}
                  >
                    <span className={`hs-mono hs-accent-${row.tone}`}>{row.time}</span>
                    <span className='hs-text-on-dark-muted text-xs uppercase tracking-wide'>
                      {row.source}
                    </span>
                    <span className='hs-text-on-dark-strong ml-auto truncate text-sm'>
                      {row.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <p className='hs-text-on-dark-muted mt-2 text-xs italic'>
                Same hour. Five owners. One office.
              </p>
            </div>
          </div>
        </div>
      </SectionFrame>

      {/* S2 — DOMINANT storm-to-inspection map */}
      <SectionFrame
        heading={{
          eyebrow: 'Storm \u2192 inspection \u2192 quote',
          title:
            'The route every job has to travel &mdash; [[muted:and the two stops where it always stalls.]]',
        }}
        tone='mist'
      >
        <div className='rf-route-stage relative overflow-hidden rounded-3xl border p-6 md:p-10 lg:p-14'>
          <svg
            className='rf-route-svg hidden lg:block'
            viewBox='0 0 1200 320'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <path
              d='M 40 110 C 240 110, 280 250, 480 250 S 760 110, 960 110 S 1160 250, 1180 250'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray='6 8'
              strokeLinecap='round'
            />
          </svg>

          <ol className='relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6'>
            {ROUTE_NODES.map(node => (
              <li
                key={node.num}
                className={`hs-surface hs-shadow-card relative flex flex-col gap-3 rounded-2xl border p-6 hs-rule-top-${node.tint} ${
                  node.pos === 'down' ? 'rf-node-down' : 'rf-node-up'
                }`}
              >
                {node.pin ? (
                  <span
                    className={`rf-node-pin ${node.pinTone === 'red' ? 'rf-node-pin-red' : ''}`}
                  >
                    {node.pin}
                  </span>
                ) : null}
                <div className='flex items-center justify-between'>
                  <span className={`hs-mono-eyebrow hs-accent-${node.tint}`}>Stop {node.num}</span>
                </div>
                <h3 className='hs-text-primary text-xl font-semibold tracking-tight'>
                  {node.title}
                </h3>
                <p className='hs-text-secondary text-sm leading-relaxed'>{node.body}</p>
              </li>
            ))}
          </ol>

          <p className='hs-text-secondary relative mx-auto mt-12 max-w-2xl text-center text-sm italic'>
            The route doesn&rsquo;t fail at intake. It fails between inspection and quote &mdash;
            always the same two stops.
          </p>
        </div>
      </SectionFrame>

      {/* S3 — Photo / detail handoff */}
      <SectionFrame
        heading={{
          eyebrow: 'On the roof',
          title: 'Twelve photos in a phone [[muted:are not a job card yet.]]',
        }}
        tone='white'
      >
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16'>
          <div className='relative lg:col-span-5'>
            <div className='rf-phone-frame mx-auto w-56 p-3 sm:w-64'>
              <div className='rf-phone-screen flex h-full flex-col gap-3 p-4'>
                <div className='flex items-center justify-between'>
                  <span className='hs-mono hs-accent-amber'>Gallery</span>
                  <span className='hs-mono hs-text-on-dark-dim'>12 photos</span>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-amber' />
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-teal' />
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-amber' />
                </div>
                <p className='hs-text-on-dark-muted mt-auto text-xs italic'>
                  Sent to office &mdash; tonight, maybe.
                </p>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <div className='rf-job-frame'>
              <div className='rf-job-stripe flex items-center justify-between gap-4 px-7 py-4'>
                <div className='flex flex-col'>
                  <span className='hs-mono hs-accent-cyan'>Job · RF-2014</span>
                  <span className='hs-text-primary text-base font-semibold tracking-tight'>
                    14 Marlow Cres &middot; storm inspection
                  </span>
                </div>
                <span className='rf-status-pill'>Photos in</span>
              </div>
              <div className='flex flex-col gap-5 p-7'>
                <div className='grid grid-cols-6 gap-2'>
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-amber' />
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-teal' />
                  <div className='rf-thumb' />
                  <div className='rf-thumb rf-thumb-amber' />
                </div>
                <div className='rf-side-rule flex flex-col gap-2 border-l pl-5'>
                  <span className='hs-mono hs-text-subtle'>Field note</span>
                  <p className='hs-text-secondary text-sm leading-relaxed'>
                    Two cracked tiles above the kitchen window. Flashing lifted on the western
                    valley. Roof still wet, voice note attached.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-3 border-t pt-4 hs-divider-soft'>
                  <span className='hs-mono hs-accent-cyan'>Quote drafted · tonight</span>
                  <span className='hs-mono hs-text-subtle'>Owner notified · auto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionFrame>

      {/* S4 — Quote silence */}
      <SectionFrame
        heading={{
          eyebrow: 'After the quote goes out',
          title: 'Most lost roofing jobs [[muted:are lost in the silence after the quote.]]',
        }}
        tone='gradient-mist'
      >
        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16'>
          <div className='lg:col-span-6'>
            <span className='rf-bigtype block'>07</span>
            <span className='hs-mono hs-accent-amber mt-2 block'>days of silence</span>
          </div>

          <div className='rf-rule-vert-amber flex flex-col gap-6 border-l pl-8 lg:col-span-6'>
            <p className='hs-text-primary text-2xl font-semibold leading-snug tracking-tight'>
              The quote was good. Nobody followed it up.
            </p>
            <p className='hs-text-secondary leading-relaxed'>
              Without a follow-up rhythm, the quote sits unowned. The office moves on. The homeowner
              accepts the next quote because that one had a callback.
            </p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-baseline gap-4'>
                <span className='rf-tick-dot rf-tick-dot-cyan mt-1' aria-hidden='true' />
                <div className='flex flex-col'>
                  <span className='hs-mono hs-accent-cyan'>Day 0</span>
                  <span className='hs-text-secondary text-sm'>
                    Quote sent at 9pm. PDF attached.
                  </span>
                </div>
              </li>
              <li className='flex items-baseline gap-4'>
                <span className='rf-tick-dot mt-1' aria-hidden='true' />
                <div className='flex flex-col'>
                  <span className='hs-mono hs-accent-amber'>Day 3</span>
                  <span className='hs-text-secondary text-sm'>
                    Silent window. No nudge scheduled.
                  </span>
                </div>
              </li>
              <li className='flex items-baseline gap-4'>
                <span className='rf-tick-dot rf-tick-dot-red mt-1' aria-hidden='true' />
                <div className='flex flex-col'>
                  <span className='hs-mono hs-accent-red'>Day 7</span>
                  <span className='hs-text-secondary text-sm'>
                    Job lost quietly. Nobody flagged it inside the office.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionFrame>

      {/* S5 — Handled storm week (ribbon) */}
      <SectionFrame
        heading={{
          eyebrow: 'A handled storm week',
          title: 'Five days, [[muted:five visible movements.]]',
          description:
            'Same volume of work. Different shape of week. Nothing dropped, nothing held in a head.',
        }}
        tone='white'
      >
        <div className='rf-ribbon-stage relative px-2 py-12 lg:py-20'>
          <span className='rf-ribbon-bar hidden lg:block' aria-hidden='true' />

          <ol className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4'>
            {STORM_WEEK.map((step, i) => {
              const above = i % 2 === 0;
              return (
                <li key={step.day} className='flex flex-col items-center gap-3 lg:relative'>
                  {above ? (
                    <article className='hs-surface hs-shadow-card flex w-full flex-col gap-2 rounded-2xl border p-5 lg:order-1'>
                      <span className='hs-mono hs-accent-cyan'>{step.day}</span>
                      <h3 className='hs-text-primary text-base font-semibold tracking-tight'>
                        {step.label}
                      </h3>
                      <p className='hs-text-secondary text-sm leading-relaxed'>{step.body}</p>
                    </article>
                  ) : null}

                  <span className='rf-ribbon-node-dot lg:order-2' aria-hidden='true' />

                  {!above ? (
                    <article className='hs-surface hs-shadow-card flex w-full flex-col gap-2 rounded-2xl border p-5 lg:order-3'>
                      <span className='hs-mono hs-accent-teal'>{step.day}</span>
                      <h3 className='hs-text-primary text-base font-semibold tracking-tight'>
                        {step.label}
                      </h3>
                      <p className='hs-text-secondary text-sm leading-relaxed'>{step.body}</p>
                    </article>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </SectionFrame>

      {/* S6 — Review timing (asymmetric editorial) */}
      <SectionFrame
        heading={{
          eyebrow: 'After the install',
          title: 'A review request [[muted:that doesn&rsquo;t feel automated.]]',
        }}
        tone='mist'
      >
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16'>
          <div className='rf-quote-glyph lg:col-span-7'>
            <p className='hs-text-primary text-3xl font-semibold leading-snug tracking-tight md:text-4xl'>
              The right ask, on the right day, in the right voice.
            </p>
            <p className='hs-text-secondary mt-5 leading-relaxed'>
              Insurance jobs can opt out completely. Repair jobs ask once, two days after sign-off,
              in plain language. Re-roofs ask after the homeowner has had a week to look at it. If
              they don&rsquo;t reply, no chase.
            </p>
          </div>

          <ol className='rf-side-rule flex flex-col gap-5 border-l pl-7 lg:col-span-5'>
            {[
              { when: 'Day 0', what: 'Sign-off', detail: 'Job marked complete in the field.' },
              {
                when: 'Day +2',
                what: 'Review request',
                detail: 'One short message, named to the homeowner.',
              },
              {
                when: 'Day +14',
                what: 'Maintenance note',
                detail: 'Soft check-in, photos attached, no upsell.',
              },
            ].map(row => (
              <li key={row.when} className='flex flex-col gap-1'>
                <span className='hs-mono hs-accent-cyan'>
                  {row.when} · {row.what}
                </span>
                <span className='hs-text-secondary text-sm leading-relaxed'>{row.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionFrame>

      {/* S7 — Compact system bridge */}
      <SectionFrame
        heading={{
          eyebrow: 'The systems behind it',
          title: 'Three systems carry the storm week.',
        }}
        tone='dark'
      >
        <div className='hs-surface-dark mx-auto flex max-w-5xl flex-col items-stretch gap-6 rounded-3xl border p-8 md:flex-row md:items-center md:gap-0 md:p-10'>
          {[
            { name: 'AI Lead Handling', role: 'Catches the surge inside the first ring.' },
            {
              name: 'CRM & Automation',
              role: 'Owns inspection \u2192 quote \u2192 install in one thread.',
            },
            {
              name: 'Reputation & Reviews',
              role: 'Asks once, in the right voice, on the right day.',
            },
          ].map((item, i) => (
            <div
              key={item.name}
              className={`flex flex-1 flex-col gap-1 px-2 md:px-7 ${i > 0 ? 'rf-bridge-divider md:border-l' : ''}`}
            >
              <span className='hs-mono-eyebrow hs-accent-cyan'>System 0{i + 1}</span>
              <h3 className='hs-text-on-dark-strong text-lg font-semibold tracking-tight'>
                {item.name}
              </h3>
              <p className='hs-text-on-dark-muted text-sm leading-relaxed'>{item.role}</p>
            </div>
          ))}
        </div>
      </SectionFrame>

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
