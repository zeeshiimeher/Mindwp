import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * HairSalonsIndustryRenderer — page-owned composition.
 *
 * Chair-led salon page. Signature visual: a Saturday chair-day calendar
 * paired with a chair-to-rebooking flow.
 * Sections (8): hero · leaks · chair calendar + flow · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

type Slot = {
  id: string;
  time: string;
  what: string;
  state: 'booked' | 'rebook' | 'gap';
  label: string;
};

const CHAIR_A: Slot[] = [
  { id: 'a1', time: '09:30', what: 'Cut & blow dry', state: 'booked', label: 'Booked' },
  { id: 'a2', time: '11:00', what: 'Colour · refresh', state: 'booked', label: 'Booked' },
  { id: 'a3', time: '13:30', what: '— open slot', state: 'gap', label: 'Open' },
  { id: 'a4', time: '15:00', what: 'Rebook · 6 wk colour', state: 'rebook', label: 'Rebook' },
];

const CHAIR_B: Slot[] = [
  { id: 'b1', time: '09:00', what: 'Trim', state: 'booked', label: 'Booked' },
  { id: 'b2', time: '10:30', what: 'Balayage · long', state: 'booked', label: 'Booked' },
  { id: 'b3', time: '14:00', what: 'Rebook · root touch-up', state: 'rebook', label: 'Rebook' },
  { id: 'b4', time: '16:00', what: 'New client · consult', state: 'booked', label: 'Booked' },
];

const REBOOK_FLOW = [
  { id: 'r1', text: 'DM or call lands during a service.' },
  { id: 'r2', text: 'Service type confirmed without the desk.' },
  { id: 'r3', text: 'Stylist and time offered from the chair board.' },
  { id: 'r4', text: 'Booking confirmed instantly.' },
  {
    id: 'r5',
    text: 'After the visit — review prompt, then rebook reminder at the right interval.',
  },
];

export function HairSalonsIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.industryPattern.leaks ?? [];
  const before = data.beforeAfter.before;
  const after = data.beforeAfter.after;
  const startingPoints = data.startingPoints.startingPoints ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='beauty-detail-page beauty-detail-page--hair-salons'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {leaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'The chair is full while the next booking waits',
            title: 'Three places hair-salon work usually slips',
            description: 'Most salons see at least two of these.',
          }}
          tone='white'
        >
          <ul className='beauty-leakboard'>
            {leaks.map(l => (
              <li
                key={l.id}
                className={`beauty-leakboard__tile beauty-leakboard__tile--${l.state}`}
              >
                <div className='beauty-leakboard__head'>
                  <p className='beauty-leakboard__leak'>{l.leak}</p>
                  <span className={`beauty-pill beauty-pill--${l.state}`}>
                    <span className={`beauty-dot beauty-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='beauty-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Booking · service · rebook',
          title: 'Booking requests, consultation notes, and rebook reminders need one path',
          description:
            'Same chairs, same stylists. The desk no longer has to remember what to send when.',
        }}
        tone='mist'
      >
        <div className='hair-salon-chair-calendar'>
          <div className='hair-salon-chair-calendar__chairs'>
            <span className='hair-salon-chair-calendar__chairs-label'>
              Saturday chair board · illustrative
            </span>

            <div className='hair-salon-chair-calendar__chair'>
              <p className='hair-salon-chair-calendar__chair-name'>Chair · Stylist A</p>
              <ul className='hair-salon-chair-calendar__slots'>
                {CHAIR_A.map(s => (
                  <li
                    key={s.id}
                    className={`hair-salon-chair-calendar__slot hair-salon-chair-calendar__slot--${s.state}`}
                  >
                    <span className='hair-salon-chair-calendar__slot-time'>{s.time}</span>
                    <p className='hair-salon-chair-calendar__slot-what'>{s.what}</p>
                    <span className='hair-salon-chair-calendar__slot-state'>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='hair-salon-chair-calendar__chair'>
              <p className='hair-salon-chair-calendar__chair-name'>Chair · Stylist B</p>
              <ul className='hair-salon-chair-calendar__slots'>
                {CHAIR_B.map(s => (
                  <li
                    key={s.id}
                    className={`hair-salon-chair-calendar__slot hair-salon-chair-calendar__slot--${s.state}`}
                  >
                    <span className='hair-salon-chair-calendar__slot-time'>{s.time}</span>
                    <p className='hair-salon-chair-calendar__slot-what'>{s.what}</p>
                    <span className='hair-salon-chair-calendar__slot-state'>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className='hair-salon-chair-calendar__flow' aria-label='Chair to rebooking flow'>
            <span className='hair-salon-chair-calendar__flow-label'>Chair → rebooking flow</span>
            <ol className='hair-salon-chair-calendar__flow-list'>
              {REBOOK_FLOW.map((step, i) => (
                <li key={step.id} className='hair-salon-chair-calendar__flow-item'>
                  <span className='hair-salon-chair-calendar__flow-num'>{i + 1}.</span>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Repeat clients should not rely on memory',
            title: 'The chair, before and after',
            description:
              'Same stylists, same product. A different layer between desk and calendar.',
          }}
          tone='white'
        >
          <div className='beauty-state-grid'>
            {before ? (
              <div className='beauty-state-grid__col beauty-state-grid__col--before'>
                <span className='beauty-state-grid__label'>{before.label}</span>
                <ul className='beauty-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='beauty-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='beauty-state-grid__col beauty-state-grid__col--after'>
                <span className='beauty-state-grid__label'>{after.label}</span>
                <ul className='beauty-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='beauty-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </SectionFrame>
      ) : null}

      {startingPoints.length ? (
        <SectionFrame
          heading={{
            kicker: 'Which system starts first',
            title: 'Three signals, three different first systems',
            description: 'The leak you actually have decides the first move.',
          }}
          tone='mist'
        >
          <ul className='beauty-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='beauty-starts__option'>
                <span className='beauty-starts__signal'>If you</span>
                <p className='beauty-starts__when'>{sp.signalIfYou}</p>
                <p className='beauty-starts__fix'>{sp.fix}</p>
                <span className='beauty-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic Saturday salon scenario',
            title: 'A Saturday with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='white'
        >
          <div className='beauty-scenario'>
            <span className='beauty-scenario__label'>{scenario.label}</span>
            <p className='beauty-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='beauty-scenario__change'>{scenario.observedChange}</p>
            ) : null}
          </div>
        </SectionFrame>
      ) : null}

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
