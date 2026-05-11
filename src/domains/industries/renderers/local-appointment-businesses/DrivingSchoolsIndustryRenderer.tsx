import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * DrivingSchoolsIndustryRenderer — page-owned composition.
 *
 * Lesson-led page. Signature visual: instructor lesson calendar across a
 * working week, with a small legend showing booked / missed / block-end.
 * Sections (8): hero · leaks · lesson calendar · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const;

type CalendarCell = {
  state: 'idle' | 'booked' | 'missed' | 'block';
  time?: string;
  note?: string;
};

const INSTRUCTOR_GRID: { instructor: string; cells: CalendarCell[] }[] = [
  {
    instructor: 'Instructor A',
    cells: [
      { state: 'booked', time: '08:00', note: 'Lesson 4 of 10' },
      { state: 'booked', time: '11:00', note: 'Lesson 7 of 10' },
      { state: 'missed', time: '15:00', note: 'Call missed' },
      { state: 'booked', time: '17:00', note: 'School-finish' },
      { state: 'block', time: '19:00', note: 'Block ends' },
    ],
  },
  {
    instructor: 'Instructor B',
    cells: [
      { state: 'booked', time: '09:00', note: 'Lesson 2 of 10' },
      { state: 'block', time: '11:00', note: 'Block ends · rebook' },
      { state: 'booked', time: '14:00', note: 'Lesson 5 of 10' },
      { state: 'idle' },
      { state: 'booked', time: '17:30', note: 'Test prep · 7d' },
    ],
  },
  {
    instructor: 'Instructor C',
    cells: [
      { state: 'idle' },
      { state: 'missed', time: '10:30', note: 'Voicemail · enquiry' },
      { state: 'booked', time: '13:00', note: 'Lesson 1 · new' },
      { state: 'booked', time: '16:00', note: 'Lesson 8 of 10' },
      { state: 'block', time: '18:30', note: 'Block ends · rebook' },
    ],
  },
];

export function DrivingSchoolsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='appt-detail-page appt-detail-page--driving-schools'>
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
            kicker: 'Phones and instructors run on different clocks',
            title: 'Lesson enquiries arrive while instructors are on the road',
            description: 'Most schools see at least two of these.',
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
          kicker: 'Enquiry · instructor · slot · reminder',
          title: 'A working week across three instructors',
          description:
            'Booked lessons, missed calls, and block-end rebooks shown together on one diary view.',
        }}
        tone='dark'
      >
        <div className='driving-school-lesson-calendar'>
          <div className='driving-school-lesson-calendar__header'>
            <span className='driving-school-lesson-calendar__week'>
              Week view · illustrative diary
            </span>
            <ul className='driving-school-lesson-calendar__legend'>
              <li className='driving-school-lesson-calendar__legend-item'>
                <span
                  className='driving-school-lesson-calendar__legend-dot driving-school-lesson-calendar__legend-dot--booked'
                  aria-hidden='true'
                />
                Booked
              </li>
              <li className='driving-school-lesson-calendar__legend-item'>
                <span
                  className='driving-school-lesson-calendar__legend-dot driving-school-lesson-calendar__legend-dot--missed'
                  aria-hidden='true'
                />
                Missed call
              </li>
              <li className='driving-school-lesson-calendar__legend-item'>
                <span
                  className='driving-school-lesson-calendar__legend-dot driving-school-lesson-calendar__legend-dot--block'
                  aria-hidden='true'
                />
                Block ends
              </li>
            </ul>
          </div>

          <div className='driving-school-lesson-calendar__grid'>
            <span className='driving-school-lesson-calendar__row-label' aria-hidden='true' />
            {DAYS.map(d => (
              <span key={d} className='driving-school-lesson-calendar__day'>
                {d}
              </span>
            ))}
            {INSTRUCTOR_GRID.map(row => (
              <RowFragment key={row.instructor} row={row} />
            ))}
          </div>

          <p className='driving-school-lesson-calendar__caption'>
            Missed cells are calls that landed mid-lesson. Block cells are blocks ending without a
            rebook prompt. The layer turns those into instant text-backs and queued reminders.
          </p>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Cancellations and test dates need follow-up',
            title: 'The school, before and after',
            description: 'Same instructors. A different layer behind the phone.',
          }}
          tone='mist'
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
          tone='white'
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
            kicker: 'A realistic lesson-week scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='mist'
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

function RowFragment({ row }: { row: { instructor: string; cells: CalendarCell[] } }) {
  return (
    <>
      <span className='driving-school-lesson-calendar__row-label'>{row.instructor}</span>
      {row.cells.map((cell, i) => (
        <div
          key={`${row.instructor}-${i}`}
          className={`driving-school-lesson-calendar__cell driving-school-lesson-calendar__cell--${cell.state}`}
        >
          {cell.time ? (
            <span className='driving-school-lesson-calendar__cell-time'>{cell.time}</span>
          ) : null}
          {cell.note ? (
            <span className='driving-school-lesson-calendar__cell-note'>{cell.note}</span>
          ) : null}
        </div>
      ))}
    </>
  );
}
