import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

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
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* 1 — Booked day under pressure */}
      <SectionFrame
        heading={{
          kicker: 'A booked HVAC day',
          title:
            'The day&rsquo;s jobs are already booked [[muted:when the urgent call comes in.]]',
          description:
            'The dispatcher had the day mapped before the kettle boiled. Then the first plant room rings, the office line lights up, and the plan starts moving sideways.',
        }}
        tone='white'
      >
        <div className='hs-hvac-open'>
          <div className='hs-hvac-open__copy'>
            <p>
              Service jobs sit on the board next to install commissioning and a quoted retrofit.
              The crew already knows roughly what their day looks like.
            </p>
            <p>
              Then a hospitality kitchen calls about a chiller. A landlord calls about a tenant
              with no heat. The next two hours decide what gets bumped.
            </p>
          </div>
          <aside className='hs-hvac-open__board' aria-hidden='true'>
            <header>Dispatch · Wed 07:48</header>
            <ul>
              <li>
                <span>07:30</span>Service · 14 jobs booked
              </li>
              <li>
                <span>08:00</span>Install · commissioning, Albion site
              </li>
              <li>
                <span>09:15</span>Quoted retrofit · stage 2 walkthrough
              </li>
              <li className='is-urgent'>
                <span>07:46</span>Urgent · chiller down · Brunswick venue
              </li>
              <li className='is-urgent'>
                <span>07:51</span>Urgent · no heat · Footscray rental
              </li>
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {/* 2 — Dominant: dispatch-day path */}
      <SectionFrame
        heading={{
          kicker: 'Dispatch day',
          title:
            'A booked day, three urgent inserts, [[muted:and where the plan bends without breaking.]]',
        }}
        tone='dark'
      >
        <div className='hs-hvac-day'>
          <div className='hs-hvac-day__rail' aria-hidden='true'>
            <span>07:00</span>
            <span>09:00</span>
            <span>11:00</span>
            <span>13:00</span>
            <span>15:00</span>
            <span>17:00</span>
          </div>
          <div className='hs-hvac-day__lanes'>
            <div className='hs-hvac-day__lane' data-lane='service'>
              <span className='hs-hvac-day__lane-label'>Service</span>
              <div className='hs-hvac-day__blocks'>
                <span className='hs-hvac-day__block' data-pos='a'>
                  Boiler service · Northcote
                </span>
                <span className='hs-hvac-day__block' data-pos='b'>
                  Split tune · Carlton
                </span>
                <span className='hs-hvac-day__block' data-pos='c'>
                  Filter swap · Reservoir
                </span>
                <span className='hs-hvac-day__block' data-pos='d'>
                  Annual check · Coburg
                </span>
              </div>
            </div>
            <div className='hs-hvac-day__lane' data-lane='install'>
              <span className='hs-hvac-day__lane-label'>Install</span>
              <div className='hs-hvac-day__blocks'>
                <span className='hs-hvac-day__block' data-pos='wide-a'>
                  Albion site · commissioning
                </span>
                <span className='hs-hvac-day__block' data-pos='c'>
                  Snag list · Brunswick
                </span>
              </div>
            </div>
            <div className='hs-hvac-day__lane' data-lane='urgent'>
              <span className='hs-hvac-day__lane-label'>Urgent</span>
              <div className='hs-hvac-day__blocks'>
                <span className='hs-hvac-day__block hs-hvac-day__block--urgent' data-pos='b'>
                  Chiller down · venue
                </span>
                <span className='hs-hvac-day__block hs-hvac-day__block--urgent' data-pos='d'>
                  No heat · rental
                </span>
                <span className='hs-hvac-day__block hs-hvac-day__block--urgent' data-pos='e'>
                  Refrigerant alarm · cool room
                </span>
              </div>
            </div>
          </div>
          <p className='hs-hvac-day__note'>
            Each urgent insert moves a service job and a follow-up call. The office holds the new
            shape so the customer who waited yesterday doesn&rsquo;t wait again today.
          </p>
        </div>
      </SectionFrame>

      {/* 3 — Surge season vs normal week */}
      <SectionFrame
        heading={{
          kicker: 'First hot week. First cold week.',
          title: 'Two weeks the calendar treats the same. [[muted:The phones do not.]]',
        }}
        tone='mist'
      >
        <div className='hs-hvac-season'>
          <article className='hs-hvac-season__card hs-hvac-season__card--shoulder'>
            <header>
              <span className='hs-hvac-season__tag'>Shoulder week</span>
              <h3>Predictable service rhythm</h3>
            </header>
            <ul>
              <li>Service-led day, two follow-ups, one quote</li>
              <li>Crew finishes inside dispatch window</li>
              <li>Office returns calls inside the hour</li>
            </ul>
          </article>
          <article className='hs-hvac-season__card hs-hvac-season__card--surge'>
            <header>
              <span className='hs-hvac-season__tag'>Heat-wave week</span>
              <h3>Every other call is urgent</h3>
            </header>
            <ul>
              <li>Service jobs bumped twice in a day</li>
              <li>Quoted installs slip a week, then two</li>
              <li>Voicemail builds while the dispatcher is on the radio</li>
            </ul>
          </article>
          <ol className='hs-hvac-season__bars' aria-label='Indicative weekly call volume'>
            <li>
              <span className='hs-hvac-season__bar' data-load='base' />
              <em>Mon</em>
            </li>
            <li>
              <span className='hs-hvac-season__bar' data-load='base' />
              <em>Tue</em>
            </li>
            <li>
              <span className='hs-hvac-season__bar' data-load='surge' />
              <em>Wed</em>
            </li>
            <li>
              <span className='hs-hvac-season__bar' data-load='surge' />
              <em>Thu</em>
            </li>
            <li>
              <span className='hs-hvac-season__bar' data-load='peak' />
              <em>Fri</em>
            </li>
          </ol>
        </div>
      </SectionFrame>

      {/* 4 — Service / urgent / install handoff */}
      <SectionFrame
        heading={{
          kicker: 'Three kinds of HVAC day',
          title:
            'Service, urgent and install [[muted:should not all live in the same inbox.]]',
        }}
        tone='white'
      >
        <div className='hs-hvac-streams'>
          <article>
            <span className='hs-hvac-streams__num'>01</span>
            <h3>Service</h3>
            <p>
              Booked work. Recurring customers. Predictable parts. Lives on the dispatch board and
              the maintenance schedule.
            </p>
            <span className='hs-hvac-streams__owner'>owns: dispatcher</span>
          </article>
          <article>
            <span className='hs-hvac-streams__num'>02</span>
            <h3>Urgent</h3>
            <p>
              Plant down. No heat. Refrigerant alarm. Needs an ETA in minutes and a tech rerouted
              without losing the rest of the day.
            </p>
            <span className='hs-hvac-streams__owner'>owns: on-call lead</span>
          </article>
          <article>
            <span className='hs-hvac-streams__num'>03</span>
            <h3>Install</h3>
            <p>
              Quoted work. Stage payments. Commissioning. Belongs to a project view, not a
              voicemail.
            </p>
            <span className='hs-hvac-streams__owner'>owns: project lead</span>
          </article>
        </div>
      </SectionFrame>

      {/* 5 — Office holding the day */}
      <SectionFrame
        heading={{
          kicker: 'The office holds the day',
          title:
            'Six channels meet one desk. [[muted:They do not have to argue for attention.]]',
        }}
        tone='gradient-mist'
        layout='split'
        ratio='40-60'
      >
        <div className='hs-hvac-desk'>
          <ul className='hs-hvac-desk__streams'>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='cyan' />
              Inbound calls
            </li>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='teal' />
              Service requests
            </li>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='amber' />
              Urgent line
            </li>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='green' />
              Quote follow-ups
            </li>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='purple' />
              Service-plan renewals
            </li>
            <li>
              <span className='hs-hvac-desk__dot' data-tone='red' />
              Supplier callbacks
            </li>
          </ul>
          <div className='hs-hvac-desk__copy'>
            <p>
              Each channel has its own job and its own next step. The dispatcher doesn&rsquo;t hear
              about a quote follow-up the same way they hear about a chiller alarm.
            </p>
            <p>
              That&rsquo;s the difference between a busy day and a day that runs the office
              instead of the office running it.
            </p>
          </div>
        </div>
      </SectionFrame>

      {/* 6 — Service follow-up loop */}
      <SectionFrame
        heading={{
          kicker: 'Service-plan loop',
          title: 'The customer who serviced last spring [[muted:hears from you this spring.]]',
        }}
        tone='white'
      >
        <div className='hs-hvac-loop'>
          <ol>
            <li>
              <span className='hs-hvac-loop__when'>0&nbsp;months</span>
              <h3>Service complete</h3>
              <p>Job notes filed. Service-plan eligibility flagged on the job card.</p>
            </li>
            <li>
              <span className='hs-hvac-loop__when'>3&nbsp;months</span>
              <h3>Light touch</h3>
              <p>Seasonal tip or maintenance reminder. Nothing pushy, nothing automated-feeling.</p>
            </li>
            <li>
              <span className='hs-hvac-loop__when'>10&nbsp;months</span>
              <h3>Pre-season nudge</h3>
              <p>SMS before the first heat-wave or cold snap. Booking link, not a phone tag game.</p>
            </li>
            <li>
              <span className='hs-hvac-loop__when'>12&nbsp;months</span>
              <h3>Service rebooked</h3>
              <p>The customer comes back as a known job, not a fresh enquiry.</p>
            </li>
          </ol>
        </div>
      </SectionFrame>

      {/* 7 — System bridge */}
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'The systems that hold the day. [[muted:HVAC stays HVAC.]]',
        }}
        tone='dark'
      >
        <div className='hs-hvac-bridge'>
          <article>
            <h3>AI Lead Handling</h3>
            <p>
              Every urgent line acknowledged in seconds. The dispatcher only sees the ones that
              actually need a tech.
            </p>
          </article>
          <article>
            <h3>CRM &amp; Automation</h3>
            <p>
              Service, urgent and install live in three views, not one. The board reflects the day
              the customer is actually having.
            </p>
          </article>
          <article>
            <h3>Reputation &amp; Reviews</h3>
            <p>
              Review asks land after a job feels good — not three weeks later when the kit is
              already noisy again.
            </p>
          </article>
        </div>
      </SectionFrame>

      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        variant='split'
      />
      <DecisionPanel
        heading={data.cta.heading}
        actions={actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
      />
    </main>
  );
}
