import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * NailSalonsIndustryRenderer — page-owned composition.
 *
 * Appointment-led nail-salon page. Signature visual: Friday appointment
 * grid paired with a refill / repeat-visit loop sidecar.
 * Sections (8): hero · leaks · appointment grid + loop · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

type Slot = {
  id: string;
  time: string;
  what: string;
  state: 'booked' | 'walkin' | 'gap' | 'refill';
  label: string;
};

const FRIDAY_GRID: Slot[] = [
  { id: 's1', time: '09:30', what: 'Gel manicure', state: 'booked', label: 'Booked' },
  { id: 's2', time: '10:30', what: 'Walk-in · file & polish', state: 'walkin', label: 'Walk-in' },
  { id: 's3', time: '11:30', what: '— open slot', state: 'gap', label: 'No-show risk' },
  { id: 's4', time: '13:00', what: 'Refill · 2-week gel', state: 'refill', label: 'Refill' },
  { id: 's5', time: '14:00', what: 'Pedicure', state: 'booked', label: 'Booked' },
  { id: 's6', time: '15:30', what: 'Refill · BIAB regulars', state: 'refill', label: 'Refill' },
];

const REFILL_LOOP = [
  { id: 'l1', text: 'Slot booked or walked in.' },
  { id: 'l2', text: 'Service confirmed at the desk.' },
  { id: 'l3', text: 'Visit happens.' },
  { id: 'l4', text: 'Refill reminder goes out at the right interval — gel, BIAB, or pedicure.' },
  { id: 'l5', text: 'Review prompt sent shortly after sign-off.' },
];

export function NailSalonsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='beauty-detail-page beauty-detail-page--nail-salons'>
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
            kicker: 'Empty chairs cost more than they look',
            title: 'Three places nail-salon work usually slips',
            description: 'These are the gaps that quietly erode the week.',
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
          kicker: 'Booking · visit · refill · review',
          title: 'Booking, visit, refill, review on one rhythm',
          description: 'Same desk, same techs. The week is held by the system, not by the diary.',
        }}
        tone='mist'
      >
        <div className='nail-salon-repeat-visit-loop'>
          <div>
            <span className='nail-salon-repeat-visit-loop__grid-label'>
              Friday appointment grid · illustrative
            </span>
            <ul className='nail-salon-repeat-visit-loop__grid'>
              {FRIDAY_GRID.map(s => (
                <li
                  key={s.id}
                  className={`nail-salon-repeat-visit-loop__slot nail-salon-repeat-visit-loop__slot--${s.state}`}
                >
                  <span className='nail-salon-repeat-visit-loop__slot-time'>{s.time}</span>
                  <p className='nail-salon-repeat-visit-loop__slot-what'>{s.what}</p>
                  <span className='nail-salon-repeat-visit-loop__slot-state'>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside
            className='nail-salon-repeat-visit-loop__sidecar'
            aria-label='Refill and repeat-visit loop'
          >
            <span className='nail-salon-repeat-visit-loop__sidecar-label'>
              Refill / repeat-visit loop
            </span>
            <ol className='nail-salon-repeat-visit-loop__loop'>
              {REFILL_LOOP.map((step, i) => (
                <li key={step.id} className='nail-salon-repeat-visit-loop__loop-item'>
                  <span className='nail-salon-repeat-visit-loop__loop-num'>{i + 1}.</span>
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
            kicker: 'Repeat appointments should not wait for the client to remember',
            title: 'The desk, before and after',
            description: 'Same chairs. Same regulars. The reminders no longer live in the diary.',
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
            kicker: 'A realistic Friday appointment scenario',
            title: 'A Friday with the layer in place',
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
