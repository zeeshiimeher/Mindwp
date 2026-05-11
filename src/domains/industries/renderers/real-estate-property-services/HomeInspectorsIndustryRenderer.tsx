import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * HomeInspectorsIndustryRenderer — page-owned composition.
 *
 * Report-led page. Signature visual: 6-step inspection-to-report path
 * paired with a report-delivery card.
 * Sections (8): hero · leaks · report handoff · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const REPORT_PATH = [
  {
    id: 'request',
    title: 'Booking request',
    hint: 'Agent or buyer asks for a slot — captured without phone tag.',
  },
  {
    id: 'schedule',
    title: 'Schedule confirmed',
    hint: 'Window booked with calendar invite — buyer and agent on the same note.',
  },
  {
    id: 'inspection',
    title: 'Inspection on site',
    hint: 'Phone routed while the inspector is on a roof.',
  },
  {
    id: 'report',
    title: 'Report delivered',
    hint: 'Sent with a clear summary and a next step.',
  },
  {
    id: 'follow',
    title: 'Question / follow-up',
    hint: 'Agent or buyer reply handled — no thread lost.',
  },
  {
    id: 'review',
    title: 'Review and referral',
    hint: 'Review prompt at the right moment — past agents stay on cadence.',
  },
];

const REPORT_DELIVERY = [
  { id: 'summary', text: 'Summary block above the full report — key items first.' },
  { id: 'next', text: 'Clear next step for the buyer and the agent.' },
  { id: 'questions', text: 'Reply path that does not depend on the inspector being on the phone.' },
  { id: 'cadence', text: 'Past-agent nurture starts the moment the report lands.' },
];

export function HomeInspectorsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='property-detail-page property-detail-page--home-inspectors'>
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
            kicker: 'On a roof while the phone rings',
            title: 'Inspection requests arrive while yesterday’s report is still open',
            description: 'Most inspectors will see at least two of these.',
          }}
          tone='white'
        >
          <ul className='property-leakboard'>
            {leaks.map(l => (
              <li
                key={l.id}
                className={`property-leakboard__tile property-leakboard__tile--${l.state}`}
              >
                <div className='property-leakboard__head'>
                  <p className='property-leakboard__leak'>{l.leak}</p>
                  <span className={`property-pill property-pill--${l.state}`}>
                    <span className={`property-dot property-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='property-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Booking · inspection · report · follow-up',
          title: 'Reports should land with a clear next step',
          description:
            'Same inspector, same hours. The booking, the report, and the follow-up sit on one path.',
        }}
        tone='mist'
      >
        <div className='home-inspector-report-handoff'>
          <ol className='home-inspector-report-handoff__path'>
            {REPORT_PATH.map((step, i) => (
              <li key={step.id} className='home-inspector-report-handoff__step'>
                <span className='home-inspector-report-handoff__num'>Step {i + 1}</span>
                <p className='home-inspector-report-handoff__title'>{step.title}</p>
                <p className='home-inspector-report-handoff__hint'>{step.hint}</p>
              </li>
            ))}
          </ol>
          <aside className='home-inspector-report-handoff__delivery' aria-label='Report delivery'>
            <span className='home-inspector-report-handoff__delivery-label'>
              Report delivery · what lands with it
            </span>
            <p className='home-inspector-report-handoff__delivery-title'>
              The report is the moment trust lands or leaks.
            </p>
            <ul className='home-inspector-report-handoff__delivery-list'>
              {REPORT_DELIVERY.map(d => (
                <li key={d.id} className='home-inspector-report-handoff__delivery-item'>
                  <span className='home-inspector-report-handoff__delivery-bullet'>·</span>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'When the layer holds',
            title: 'The schedule, before and after',
            description: 'Same inspector. A different layer behind the phone.',
          }}
          tone='white'
        >
          <div className='property-state-grid'>
            {before ? (
              <div className='property-state-grid__col property-state-grid__col--before'>
                <span className='property-state-grid__label'>{before.label}</span>
                <ul className='property-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='property-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='property-state-grid__col property-state-grid__col--after'>
                <span className='property-state-grid__label'>{after.label}</span>
                <ul className='property-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='property-state-grid__item'>
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
          <ul className='property-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='property-starts__option'>
                <span className='property-starts__signal'>If you</span>
                <p className='property-starts__when'>{sp.signalIfYou}</p>
                <p className='property-starts__fix'>{sp.fix}</p>
                <span className='property-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic inspection-day scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='white'
        >
          <div className='property-scenario'>
            <span className='property-scenario__label'>{scenario.label}</span>
            <p className='property-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='property-scenario__change'>{scenario.observedChange}</p>
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
