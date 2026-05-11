import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * DentalClinicsIndustryRenderer — page-owned composition.
 *
 * Considered-led clinic page. Signature visual: chair-day schedule paired
 * with the booking → confirmation → visit → recall flow.
 * Sections (8): hero · leaks · chair schedule · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const CHAIR_SLOTS = [
  {
    id: '0900',
    time: '09:00',
    what: 'Hygiene · returning patient',
    state: 'booked' as const,
    label: 'Booked',
  },
  {
    id: '0945',
    time: '09:45',
    what: 'Check-up · slot empty after a no-show',
    state: 'noshow' as const,
    label: 'No-show',
  },
  {
    id: '1030',
    time: '10:30',
    what: 'Filling · confirmed yesterday',
    state: 'booked' as const,
    label: 'Booked',
  },
  {
    id: '1130',
    time: '11:30',
    what: 'Recall due · last visit eight months ago',
    state: 'recall' as const,
    label: 'Recall',
  },
  {
    id: '1330',
    time: '13:30',
    what: 'New patient · enquired at 8pm',
    state: 'booked' as const,
    label: 'Booked',
  },
  {
    id: '1500',
    time: '15:00',
    what: 'Recall reminder unsent · book before 4pm',
    state: 'recall' as const,
    label: 'Recall',
  },
];

const APPT_FLOW = [
  { id: 'call', text: 'Call or form lands — acknowledged inside two minutes' },
  { id: 'request', text: 'Appointment request matched to chair availability' },
  { id: 'confirm', text: 'Confirmation sent · 48h and 24h reminders queued' },
  { id: 'visit', text: 'Visit notes returned to the operating board' },
  { id: 'recall', text: 'Recall scheduled at the right interval — review prompt set' },
];

export function DentalClinicsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='appt-detail-page appt-detail-page--dental-clinics'>
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
            kicker: 'The chair runs · the rest is unmanaged',
            title: 'The chair is full while the next appointment waits',
            description: 'Most clinics will see at least two of these.',
          }}
          tone='white'
        >
          <ul className='appt-leakboard'>
            {leaks.map(l => (
              <li key={l.id} className={`appt-leakboard__tile appt-leakboard__tile--${l.state}`}>
                <div className='appt-leakboard__head'>
                  <p className='appt-leakboard__leak'>{l.leak}</p>
                  <span className={`appt-pill appt-pill--${l.state}`}>
                    <span className={`appt-dot appt-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='appt-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Booking · confirmation · reschedule · recall',
          title: 'A chair-day with the gaps owned',
          description:
            'Same chair, same hours. The phone, the inbox, and the recall list sit on one board.',
        }}
        tone='mist'
      >
        <div className='dental-clinic-chair-schedule'>
          <div className='dental-clinic-chair-schedule__chair'>
            <span className='dental-clinic-chair-schedule__chair-label'>
              Chair · today (illustrative)
            </span>
            <ul className='dental-clinic-chair-schedule__slots'>
              {CHAIR_SLOTS.map(slot => (
                <li
                  key={slot.id}
                  className={`dental-clinic-chair-schedule__slot dental-clinic-chair-schedule__slot--${slot.state}`}
                >
                  <span className='dental-clinic-chair-schedule__time'>{slot.time}</span>
                  <p className='dental-clinic-chair-schedule__what'>{slot.what}</p>
                  <span className='dental-clinic-chair-schedule__state'>{slot.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className='dental-clinic-chair-schedule__flow' aria-label='Appointment flow'>
            <span className='dental-clinic-chair-schedule__flow-label'>
              Call → request → confirmation → visit → recall
            </span>
            <ol className='dental-clinic-chair-schedule__flow-list'>
              {APPT_FLOW.map((step, i) => (
                <li key={step.id} className='dental-clinic-chair-schedule__flow-item'>
                  <span className='dental-clinic-chair-schedule__flow-num'>{i + 1}</span>
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
            kicker: 'No-shows and cancellations need a visible route',
            title: 'The clinic, before and after',
            description: 'Same practitioners. A different layer behind reception.',
          }}
          tone='white'
        >
          <div className='appt-state-grid'>
            {before ? (
              <div className='appt-state-grid__col appt-state-grid__col--before'>
                <span className='appt-state-grid__label'>{before.label}</span>
                <ul className='appt-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='appt-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='appt-state-grid__col appt-state-grid__col--after'>
                <span className='appt-state-grid__label'>{after.label}</span>
                <ul className='appt-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='appt-state-grid__item'>
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
          <ul className='appt-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='appt-starts__option'>
                <span className='appt-starts__signal'>If you</span>
                <p className='appt-starts__when'>{sp.signalIfYou}</p>
                <p className='appt-starts__fix'>{sp.fix}</p>
                <span className='appt-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic clinic-day scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated patient. No promised outcome.',
          }}
          tone='white'
        >
          <div className='appt-scenario'>
            <span className='appt-scenario__label'>{scenario.label}</span>
            <p className='appt-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='appt-scenario__change'>{scenario.observedChange}</p>
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
