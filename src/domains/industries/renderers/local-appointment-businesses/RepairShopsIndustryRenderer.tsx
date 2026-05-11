import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * RepairShopsIndustryRenderer — page-owned composition.
 *
 * Counter-led repair shop (broader than auto). Signature visual: the
 * call → booking → diagnosis → parts wait → pickup → review/return path.
 * Sections (8): hero · leaks · booking counter · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const COUNTER_FLOW = [
  {
    id: 'call',
    step: '1 · Call',
    title: 'Phone rings while the counter is with a customer',
    owner: 'AI catches it',
    state: 'silent' as const,
  },
  {
    id: 'booking',
    step: '2 · Booking slot',
    title: 'Drop-off slot offered with ticket and contact captured',
    owner: 'Counter',
    state: 'watch' as const,
  },
  {
    id: 'diagnosis',
    step: '3 · Diagnosis',
    title: 'Tech posts findings to the same ticket on the board',
    owner: 'Tech',
    state: 'watch' as const,
  },
  {
    id: 'parts',
    step: '4 · Parts wait',
    title: 'Status updates sent automatically while parts are on order',
    owner: 'CRM board',
    state: 'watch' as const,
  },
  {
    id: 'pickup',
    step: '5 · Pickup',
    title: 'Ready message sent the moment the job closes',
    owner: 'CRM board',
    state: 'ok' as const,
  },
  {
    id: 'review',
    step: '6 · Review · return',
    title: 'Review prompt next morning, repeat-service reminder later',
    owner: 'CRM board',
    state: 'ok' as const,
  },
];

export function RepairShopsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='appt-detail-page appt-detail-page--repair-shops'>
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
            kicker: 'Where the counter loses repairs',
            title: 'The counter is busy while the next repair call waits',
            description: 'Most shops see at least two of these.',
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
          kicker: 'Booking · diagnosis · parts · pickup',
          title: 'A repair on the same ticket from call to review',
          description:
            'Status visible to the customer without another phone call. Pickups stop sitting on the shelf.',
        }}
        tone='dark'
      >
        <div className='repair-shop-booking-counter'>
          <span className='repair-shop-booking-counter__lane-label'>
            Call → booking → diagnosis → parts → pickup → review
          </span>
          <ol className='repair-shop-booking-counter__flow'>
            {COUNTER_FLOW.map(node => (
              <li
                key={node.id}
                className={`repair-shop-booking-counter__node repair-shop-booking-counter__node--${node.state}`}
              >
                <span className='repair-shop-booking-counter__step'>{node.step}</span>
                <p className='repair-shop-booking-counter__title'>{node.title}</p>
                <span className='repair-shop-booking-counter__owner'>{node.owner}</span>
              </li>
            ))}
          </ol>
          <p className='repair-shop-booking-counter__caption'>
            Red marks where the day usually leaks. Amber marks where status normally lives in
            someone’s memory. Green marks moments the layer can fully own.
          </p>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Customer status should not depend on another phone call',
            title: 'The shop, before and after',
            description: 'Same bench. A different layer behind the counter.',
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
            kicker: 'A realistic repair-day scenario',
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
