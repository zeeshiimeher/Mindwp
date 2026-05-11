import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * AutoRepairIndustryRenderer — page-owned composition.
 *
 * Counter-led repair shop. Signature visual: counter-to-bay flow.
 * Sections (8): hero · leaks · counter-to-bay map · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const COUNTER_LANE = [
  {
    id: 'call',
    step: '1 · Call lands',
    title: 'Phone rings while the writer is with a customer',
    owner: 'AI catches it',
    risk: 'risk' as const,
  },
  {
    id: 'counter',
    step: '2 · Counter note',
    title: 'Vehicle, symptom, and contact captured on one card',
    owner: 'Service writer',
    risk: 'hold' as const,
  },
  {
    id: 'bay',
    step: '3 · Bay diagnosis',
    title: 'Tech reviews, posts findings to the same card',
    owner: 'Tech',
    risk: 'hold' as const,
  },
  {
    id: 'approval',
    step: '4 · Estimate approval',
    title: 'Approval link with timestamp; reminders set',
    owner: 'CRM board',
    risk: 'hold' as const,
  },
  {
    id: 'pickup',
    step: '5 · Pickup',
    title: 'Ready message sent; collection window confirmed',
    owner: 'CRM board',
    risk: 'ok' as const,
  },
  {
    id: 'return',
    step: '6 · Return reminder',
    title: 'Service-due reminder lands at the right interval',
    owner: 'CRM board',
    risk: 'ok' as const,
  },
];

export function AutoRepairIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='auto-detail-page auto-detail-page--auto-repair'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {leaks.length ? (
        <SectionFrame heading={data.industryPattern.header} tone='white'>
          <ul className='auto-leakboard'>
            {leaks.map(l => (
              <li key={l.id} className={`auto-leakboard__tile auto-leakboard__tile--${l.state}`}>
                <div className='auto-leakboard__head'>
                  <p className='auto-leakboard__leak'>{l.leak}</p>
                  <span className={`auto-pill auto-pill--${l.state}`}>
                    <span className={`auto-dot auto-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='auto-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'How a repair moves',
          title: 'Counter, bay, approval, pickup — on one card',
          description:
            'The same card moves with the vehicle. Leak points become handoffs the system owns.',
        }}
        tone='dark'
      >
        <div className='auto-repair-counter-board'>
          <div className='auto-repair-counter-board__lane'>
            <span className='auto-repair-counter-board__lane-label'>
              Call → counter → bay → approval → pickup → return
            </span>
            <ol className='auto-repair-counter-board__flow'>
              {COUNTER_LANE.map(node => (
                <li
                  key={node.id}
                  className={`auto-repair-counter-board__node auto-repair-counter-board__node--${node.risk}`}
                >
                  <span className='auto-repair-counter-board__step'>{node.step}</span>
                  <p className='auto-repair-counter-board__title'>{node.title}</p>
                  <span className='auto-repair-counter-board__owner'>{node.owner}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className='auto-repair-counter-board__caption'>
            Red marks where the day usually leaks. Amber marks where status normally lives in
            someone’s memory. Green marks moments the layer can fully own.
          </p>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame heading={data.beforeAfter.header} tone='mist'>
          <div className='auto-state-grid'>
            {before ? (
              <div className='auto-state-grid__col auto-state-grid__col--before'>
                <span className='auto-state-grid__label'>{before.label}</span>
                <ul className='auto-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='auto-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='auto-state-grid__col auto-state-grid__col--after'>
                <span className='auto-state-grid__label'>{after.label}</span>
                <ul className='auto-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='auto-state-grid__item'>
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
        <SectionFrame heading={data.startingPoints.header} tone='white'>
          <ul className='auto-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='auto-starts__option'>
                <span className='auto-starts__signal'>If you</span>
                <p className='auto-starts__when'>{sp.signalIfYou}</p>
                <p className='auto-starts__fix'>{sp.fix}</p>
                <span className='auto-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame heading={data.scenario.header} tone='mist'>
          <div className='auto-scenario'>
            <span className='auto-scenario__label'>{scenario.label}</span>
            <p className='auto-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='auto-scenario__change'>{scenario.observedChange}</p>
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
