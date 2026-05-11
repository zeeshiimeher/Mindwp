import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { homeServicesExtras } from '@/domains/industries/pages/home-services';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function HomeServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.categoryLeaks.leaks ?? [];
  const models = data.operatingModels.models ?? [];
  const handled = data.handledState.handled ?? [];
  const branches = data.pathwayMap.branches ?? [];
  const routes = data.detailRoutes.routeEntries ?? [];
  const stripScenario = data.scenarioStrip.scenario;

  const { dayStrip, shapes } = homeServicesExtras;

  return (
    <main className='industry-category-page industry-category-page--home'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {/* SIGNATURE: field/office operating map */}
      <SectionFrame
        heading={{
          kicker: 'A regular Tuesday',
          title: 'The crews are out. The office line is the one thing left at the desk.',
          description:
            'Six moments in a working day where the gap between vans on the road and one phone in the office decides whether the next call gets the job.',
        }}
        tone='dark'
      >
        <div className='hs-map'>
          <svg
            viewBox='0 0 960 320'
            preserveAspectRatio='none'
            role='img'
            aria-label='Field crew on the road; office line exposed'
            className='hs-map__svg'
          >
            {/* Road (left half) */}
            <path d='M 30 260 C 200 240, 320 220, 460 200' className='hs-map__road' fill='none' />
            <text x='30' y='40' className='hs-map__label hs-map__label--field'>
              FIELD · crew on the road
            </text>
            <circle cx='110' cy='250' r='8' className='hs-map__crew' />
            <circle cx='220' cy='235' r='8' className='hs-map__crew' />
            <circle cx='340' cy='220' r='8' className='hs-map__crew' />
            {/* Office (right) */}
            <rect x='600' y='80' width='320' height='180' rx='10' className='hs-map__office' />
            <text x='760' y='60' className='hs-map__label hs-map__label--office'>
              OFFICE · 1–2 staff deep
            </text>
            <text x='760' y='180' className='hs-map__office-text' textAnchor='middle'>
              one phone line
            </text>
            {/* Exposed gap arrows from field → office */}
            <path
              d='M 460 200 L 600 170'
              className='hs-map__gap'
              fill='none'
              markerEnd='url(#hs-map-arrow)'
            />
            <text x='480' y='160' className='hs-map__gap-label'>
              missed call
            </text>
            <defs>
              <marker
                id='hs-map-arrow'
                viewBox='0 0 10 10'
                refX='8'
                refY='5'
                markerWidth='8'
                markerHeight='8'
                orient='auto-start-reverse'
              >
                <path d='M 0 0 L 10 5 L 0 10 z' className='hs-map__arrowhead' />
              </marker>
            </defs>
          </svg>

          <ol className='hs-day'>
            {dayStrip.moments.map(m => (
              <li
                key={m.id}
                className={`hs-day__moment hs-day__moment--field-${m.field} hs-day__moment--risk-${m.risk}`}
              >
                <span className='hs-day__time'>{m.time}</span>
                <span className='hs-day__field'>{m.field.replace('-', ' ')}</span>
                <p className='hs-day__scene'>{m.scene}</p>
                <span className={`hs-day__risk hs-day__risk--${m.risk}`}>{m.risk} risk</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'Pick the closest week',
          title: 'Which one looks like your week?',
          description:
            'Five trades. Five different weeks. Open the one that reads closest to how the calls and quotes actually arrive at your office.',
        }}
        tone='white'
      >
        <ul className='hs-shapes'>
          {shapes.rows.map(row => (
            <li key={row.id} className={`hs-shapes__row hs-shapes__row--${row.signal}`}>
              <a className='hs-shapes__link' href={row.detailHref}>
                <div className='hs-shapes__head'>
                  <span className='hs-shapes__trade'>{row.trade}</span>
                  <span className={`hs-shapes__signal hs-shapes__signal--${row.signal}`}>
                    {row.signal.replace('-', ' ')}
                  </span>
                </div>
                <p className='hs-shapes__shape'>{row.shape}</p>
                <div className='hs-shapes__foot'>
                  <span className='hs-shapes__cue'>{row.cue}</span>
                  <span className='hs-shapes__arrow' aria-hidden='true'>
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {leaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Where the work walks out',
            title: 'Four moments most home-services owners recognise on sight',
            description:
              'Not generic problems. Specific moments — the call mid-job, the quote that goes cold, the review nobody asked for.',
          }}
          tone='mist'
        >
          <ul className='hs-leaks'>
            {leaks.map((l, i) => (
              <li key={l.id} className={`hs-leaks__card hs-leaks__card--${l.state}`}>
                <span className='hs-leaks__num'>{String(i + 1).padStart(2, '0')}</span>
                <h3 className='hs-leaks__title'>{l.leak}</h3>
                <p className='hs-leaks__observed'>{l.observed}</p>
                <span className={`hs-leaks__state hs-leaks__state--${l.state}`}>{l.state}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {models.length ? (
        <SectionFrame
          heading={{
            kicker: 'Two ways the work arrives',
            title: 'Fast calls need a response. Project work needs a place to live.',
            description:
              'Most home-services trades tilt one way or the other. The fix that helps the day starts from there.',
          }}
          tone='white'
        >
          <div className='hs-models'>
            {models.map(m => (
              <article key={m.id} className={`hs-models__card hs-models__card--${m.id}`}>
                <span className='hs-models__label'>{m.label}</span>
                <ul className='hs-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`t-${i}`} className='hs-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className='hs-models__diff'>{m.differentiator}</p>
              </article>
            ))}
          </div>
        </SectionFrame>
      ) : null}

      {handled.length ? (
        <SectionFrame
          heading={{
            kicker: 'What changes',
            title: 'What the day looks like when it holds itself',
            description:
              'Same crews. Same season. The office stops chasing what the day can carry on its own.',
          }}
          tone='dark'
        >
          <ul className='hs-handled'>
            {handled.map(h => (
              <li key={h.id} className='hs-handled__item'>
                <span className='hs-handled__label'>{h.label}</span>
                <p className='hs-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {branches.length ? (
        <SectionFrame
          heading={{
            kicker: data.pathwayMap.header.kicker,
            title: data.pathwayMap.header.title,
            description: data.pathwayMap.header.description,
          }}
          tone='white'
        >
          <ul className='id-canon id-canon__branches'>
            {branches.map(b => (
              <li key={b.id} className='id-canon__branch'>
                <a className='id-canon__branch-link' href={b.detailHref}>
                  <div className='id-canon__branch-head'>
                    <span className='id-canon__branch-segment'>{b.segment}</span>
                    <span className='id-canon__branch-system'>Leads · {b.leadingSystem}</span>
                  </div>
                  <p className='id-canon__branch-recognition'>{b.recognition}</p>
                  <span className='id-canon__branch-arrow' aria-hidden='true'>
                    {b.detailLabel} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame
          heading={{
            kicker: data.detailRoutes.header.kicker,
            title: data.detailRoutes.header.title,
            description: data.detailRoutes.header.description,
          }}
          tone='mist'
        >
          <ul className='id-canon id-canon__routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='id-canon__route'>
                <a className='id-canon__route-link' href={r.detailHref}>
                  <div className='id-canon__route-head'>
                    <span className='id-canon__route-label'>{r.label}</span>
                    <span className='id-canon__route-system'>Leads · {r.leadingSystem}</span>
                  </div>
                  <p className='id-canon__route-one'>{r.oneLine}</p>
                  <span className='id-canon__route-arrow' aria-hidden='true'>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {stripScenario ? (
        <SectionFrame
          heading={{
            kicker: data.scenarioStrip.header.kicker,
            title: data.scenarioStrip.header.title,
            description: data.scenarioStrip.header.description,
          }}
          tone='white'
        >
          <article className='id-canon id-canon__scene'>
            <span className='id-canon__scene-label'>{stripScenario.label}</span>
            <p className='id-canon__scene-body'>{stripScenario.body}</p>
            {stripScenario.observedChange ? (
              <p className='id-canon__scene-change'>{stripScenario.observedChange}</p>
            ) : null}
          </article>
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
