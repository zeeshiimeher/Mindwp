import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * MobileMechanicsIndustryRenderer — page-owned composition.
 *
 * Route-led solo or two-person operation. Signature visual: a route map
 * with stops showing how a call turns into a job (call → location → issue
 * → route slot → ETA → job note).
 * Sections (8): hero · leaks · route map · before/after · starting points ·
 * scenario · FAQ · CTA.
 */

const ROUTE_STOPS = [
  { id: 'call', x: 36, y: 220, num: 1, label: 'Call lands', meta: 'Van on the road' },
  { id: 'loc', x: 156, y: 130, num: 2, label: 'Location', meta: 'Address + access' },
  { id: 'issue', x: 282, y: 200, num: 3, label: 'Issue', meta: 'Vehicle + symptom' },
  { id: 'slot', x: 408, y: 90, num: 4, label: 'Route slot', meta: 'Best time on the run' },
  { id: 'eta', x: 524, y: 180, num: 5, label: 'ETA sent', meta: 'Customer knows when' },
  { id: 'note', x: 644, y: 110, num: 6, label: 'Job note', meta: 'Follow-up captured' },
];

const ROUTE_PATH = ROUTE_STOPS.map((s, i) => `${i === 0 ? 'M' : 'L'}${s.x} ${s.y}`).join(' ');

export function MobileMechanicsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='auto-detail-page auto-detail-page--mobile-mechanics'>
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
          kicker: 'How a call becomes a job',
          title: 'Location, issue, route, ETA — captured before arrival',
          description:
            'No front desk. The layer holds the details so the van shows up with what the job needs.',
        }}
        tone='dark'
      >
        <div className='mobile-mechanic-route-map'>
          <svg
            className='mobile-mechanic-route-map__svg'
            viewBox='0 0 720 280'
            role='img'
            aria-label='Route map showing six stops: call, location, issue, route slot, ETA, job note.'
          >
            <path d={ROUTE_PATH} className='mobile-mechanic-route-map__svg-line' />
            {ROUTE_STOPS.map(stop => (
              <g key={stop.id}>
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r={10}
                  className='mobile-mechanic-route-map__svg-stop'
                />
                <text
                  x={stop.x}
                  y={stop.y - 20}
                  textAnchor='middle'
                  className='mobile-mechanic-route-map__svg-label'
                >
                  {stop.num} · {stop.label}
                </text>
                <text
                  x={stop.x}
                  y={stop.y + 28}
                  textAnchor='middle'
                  className='mobile-mechanic-route-map__svg-meta'
                >
                  {stop.meta}
                </text>
              </g>
            ))}
          </svg>
          <ol className='mobile-mechanic-route-map__steps'>
            {ROUTE_STOPS.map(stop => (
              <li key={stop.id} className='mobile-mechanic-route-map__step'>
                <span className='mobile-mechanic-route-map__step-num'>{stop.num}</span>
                <div>
                  <p className='mobile-mechanic-route-map__step-title'>{stop.label}</p>
                  <p className='mobile-mechanic-route-map__step-detail'>{stop.meta}</p>
                </div>
              </li>
            ))}
          </ol>
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
