import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * BodyShopsIndustryRenderer — page-owned composition.
 *
 * Stage-led collision work. Signature visual: repair-stage path
 * (estimate → approval → parts → repair → paint/detail → pickup).
 * Sections (8): hero · leaks · stage map · before/after · starting points ·
 * scenario · FAQ · CTA.
 */

const STAGE_PATH = [
  {
    id: 'estimate',
    name: 'Estimate',
    hint: 'Photo or in-person quote drafted; first reply confirms receipt.',
    risk: 'risk' as const,
  },
  {
    id: 'approval',
    name: 'Approval',
    hint: 'Customer review with timestamp; the office is not waiting on memory.',
    risk: 'hold' as const,
  },
  {
    id: 'parts',
    name: 'Parts',
    hint: 'Order placed and tracked; customer told if a delay shifts the timeline.',
    risk: 'hold' as const,
  },
  {
    id: 'repair',
    name: 'Repair',
    hint: 'Stage update goes out so the customer is not chasing.',
    risk: 'hold' as const,
  },
  {
    id: 'paint',
    name: 'Paint / detail',
    hint: 'Final stage; pickup window prepared.',
    risk: 'ok' as const,
  },
  {
    id: 'pickup',
    name: 'Pickup',
    hint: 'Ready notification sent; review request follows sign-off.',
    risk: 'ok' as const,
  },
];

export function BodyShopsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='auto-detail-page auto-detail-page--body-shops'>
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
          kicker: 'How a job moves',
          title: 'Estimate, approval, parts, repair, pickup',
          description:
            'Six stages on one path. Each one has a place to sit so the customer is not chasing.',
        }}
        tone='dark'
      >
        <div className='body-shop-stage-map'>
          <ol className='body-shop-stage-map__rail'>
            {STAGE_PATH.map((stage, i) => (
              <li
                key={stage.id}
                className={`body-shop-stage-map__stage body-shop-stage-map__stage--${stage.risk}`}
              >
                <span className='body-shop-stage-map__num'>{i + 1}</span>
                <p className='body-shop-stage-map__name'>{stage.name}</p>
                <p className='body-shop-stage-map__hint'>{stage.hint}</p>
              </li>
            ))}
          </ol>
          <p className='body-shop-stage-map__caption'>
            The shop owns the work. The layer owns the visibility — internal status, customer
            updates, and pickup confirmation.
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
