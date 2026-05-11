import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { landscapingExtras } from '@/domains/industries/pages/home-services/LandscapingCompanies';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const LEAK_STATE_LABEL: Record<string, string> = {
  silent: 'Silent leak',
  slow: 'Slow leak',
  lost: 'Lost work',
  risk: 'At risk',
  attention: 'Needs attention',
  healthy: 'Healthy',
};
const BENCH_STATE_LABEL: Record<string, string> = {
  'in-place': 'In place',
  planned: 'To put in place',
  optional: 'Optional',
};

const ARC_W = 960;
const ARC_H = 280;
const ARC_PAD_X = 56;
const ARC_PAD_TOP = 48;
const ARC_PAD_BOT = 64;

function buildArcPath(loads: number[]): {
  line: string;
  area: string;
  points: { x: number; y: number }[];
} {
  const stepX = (ARC_W - ARC_PAD_X * 2) / (loads.length - 1);
  const innerH = ARC_H - ARC_PAD_TOP - ARC_PAD_BOT;
  const points = loads.map((load, i) => ({
    x: ARC_PAD_X + stepX * i,
    y: ARC_PAD_TOP + innerH - (load / 100) * innerH,
  }));
  const line = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cx1 = prev.x + stepX / 2;
      const cx2 = p.x - stepX / 2;
      return `C ${cx1} ${prev.y}, ${cx2} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(' ');
  const baselineY = ARC_PAD_TOP + innerH;
  const first = points[0];
  const last = points[points.length - 1];
  const area = `M ${first.x} ${baselineY} L ${first.x} ${first.y} ${line.slice(line.indexOf(' ') + 1).replace(/^M [^ ]+ [^ ]+ /, '')} L ${last.x} ${baselineY} Z`;
  return { line, area, points };
}

export function LandscapingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const { kanban, yearArc, reactivation, whatChanges } = landscapingExtras;
  const leaks = data.industryPattern.leaks ?? [];
  const bench = data.workbench.workbench ?? [];
  const starts = data.startingPoints.startingPoints ?? [];
  const scenario = data.scenario.scenario;

  const loads = yearArc.months.map(m => m.load);
  const arc = buildArcPath(loads);
  const stepX = (ARC_W - ARC_PAD_X * 2) / (loads.length - 1);

  return (
    <main className='industry-detail-page industry-detail-page--home idp-landscaping'>
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
            kicker: data.industryPattern.header.kicker,
            title: data.industryPattern.header.title,
            description: data.industryPattern.header.description,
          }}
          tone='mist'
        >
          <ul className='id-canon id-canon__leaks'>
            {leaks.map((l, i) => (
              <li key={l.id} className={`id-canon__leak id-canon__leak--${l.state}`}>
                <span className='id-canon__num'>{String(i + 1).padStart(2, '0')}</span>
                <h3 className='id-canon__leak-title'>{l.leak}</h3>
                <p className='id-canon__leak-observed'>{l.observed}</p>
                <span className={`id-canon__pill id-canon__pill--${l.state}`}>
                  {LEAK_STATE_LABEL[l.state] ?? l.state}
                </span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Open quotes today',
          title: 'A simple view of every quote the crew is waiting on',
          description:
            'Five real-feeling enquiries grouped by where they are. Not a CRM. Just the open work, in one view, before the truck gets back.',
        }}
        tone='white'
      >
        <div className='ls-kanban'>
          <div className='ls-kanban__bar'>
            <span className='ls-kanban__title'>Live quote board</span>
            <span className='ls-kanban__as-of'>As of {kanban.asOf}</span>
          </div>
          <div className='ls-kanban__cols'>
            {kanban.columns.map(col => (
              <section key={col.id} className={`ls-kanban__col ls-kanban__col--${col.id}`}>
                <header className='ls-kanban__col-head'>
                  <span className='ls-kanban__col-label'>{col.label}</span>
                  <span className='ls-kanban__col-count'>{col.cards.length}</span>
                </header>
                <ul className='ls-kanban__cards'>
                  {col.cards.map(card => (
                    <li key={card.id} className='ls-kanban__card'>
                      <span className='ls-kanban__card-name'>{card.homeowner}</span>
                      <span className='ls-kanban__card-job'>{card.job}</span>
                      <div className='ls-kanban__card-foot'>
                        <span className='ls-kanban__card-age'>In: {card.age}</span>
                        <span className='ls-kanban__card-next'>{card.next}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'A landscaping year, not a flat calendar',
          title: 'Spring calls. Summer cuts. Autumn wind-down. Winter quoting.',
          description:
            'The shape of a real year. The follow-up that turns last spring’s hedge cut into next spring’s booking only happens if the system already knows what month it is.',
        }}
        tone='dark'
      >
        <figure className='ls-arc' aria-label='Landscaping load across a year'>
          <svg
            className='ls-arc__svg'
            viewBox={`0 0 ${ARC_W} ${ARC_H}`}
            role='img'
            preserveAspectRatio='xMidYMid meet'
          >
            <defs>
              <linearGradient id='ls-arc-fill' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' className='ls-arc__grad-top' />
                <stop offset='100%' className='ls-arc__grad-bot' />
              </linearGradient>
            </defs>

            {/* baseline */}
            <line
              className='ls-arc__base'
              x1={ARC_PAD_X}
              x2={ARC_W - ARC_PAD_X}
              y1={ARC_H - ARC_PAD_BOT}
              y2={ARC_H - ARC_PAD_BOT}
            />

            {/* fill area + line */}
            <path className='ls-arc__area' d={arc.area} />
            <path className='ls-arc__line' d={arc.line} />

            {/* month dots + labels */}
            {arc.points.map((p, i) => {
              const m = yearArc.months[i];
              return (
                <g key={i} className={`ls-arc__node ${m.cue ? 'ls-arc__node--cued' : ''}`}>
                  <circle className='ls-arc__dot' cx={p.x} cy={p.y} r={5} />
                  <text
                    className='ls-arc__label'
                    x={p.x}
                    y={ARC_H - ARC_PAD_BOT + 22}
                    textAnchor='middle'
                  >
                    {m.short}
                  </text>
                  {m.cue ? (
                    <text className='ls-arc__cue' x={p.x} y={p.y - 14} textAnchor='middle'>
                      {m.cue}
                    </text>
                  ) : null}
                </g>
              );
            })}

            {/* season bands */}
            {yearArc.bands.map(b => {
              const x1 = ARC_PAD_X + stepX * b.start;
              const x2 = ARC_PAD_X + stepX * b.end;
              return (
                <g key={b.id} className='ls-arc__band'>
                  <line
                    className='ls-arc__band-tick'
                    x1={x1}
                    x2={x2}
                    y1={ARC_H - 18}
                    y2={ARC_H - 18}
                  />
                  <text
                    className='ls-arc__band-label'
                    x={(x1 + x2) / 2}
                    y={ARC_H - 4}
                    textAnchor='middle'
                  >
                    {b.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <figcaption className='ls-arc__caption'>
            <span>Calls climb</span>
            <span>Maintenance carries</span>
            <span>Cuts wind down</span>
            <span>Quoting begins again</span>
          </figcaption>
        </figure>

        <div className='ls-reactivate'>
          <header className='ls-reactivate__head'>
            <span className='ls-reactivate__kicker'>{reactivation.eyebrow}</span>
            <h3 className='ls-reactivate__title'>{reactivation.title}</h3>
          </header>
          <ol className='ls-reactivate__steps'>
            {reactivation.steps.map((s, i) => (
              <li key={s.id} className='ls-reactivate__step'>
                <span className='ls-reactivate__num'>{String(i + 1).padStart(2, '0')}</span>
                <span className='ls-reactivate__label'>{s.label}</span>
                <span className='ls-reactivate__detail'>{s.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'What changes',
          title: 'Same crew. Same season. A calmer week.',
          description:
            'No new headcount. The week stops depending on whoever happens to be near the phone or the notebook.',
        }}
        tone='white'
      >
        <ul className='ls-change'>
          {whatChanges.rows.map(row => (
            <li key={row.id} className='ls-change__row'>
              <div className='ls-change__col ls-change__col--before'>
                <span className='ls-change__tag'>Before</span>
                <p className='ls-change__text'>{row.before}</p>
              </div>
              <span className='ls-change__arrow' aria-hidden='true'>
                →
              </span>
              <div className='ls-change__col ls-change__col--after'>
                <span className='ls-change__tag'>After</span>
                <p className='ls-change__text'>{row.after}</p>
              </div>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {bench.length ? (
        <SectionFrame
          heading={{
            kicker: data.workbench.header.kicker,
            title: data.workbench.header.title,
            description: data.workbench.header.description,
          }}
          tone='white'
        >
          <ul className='id-canon id-canon__bench'>
            {bench.map(item => (
              <li
                key={item.id}
                className={`id-canon__bench-item id-canon__bench-item--${item.state}`}
              >
                <div className='id-canon__bench-head'>
                  <span className='id-canon__bench-piece'>{item.piece}</span>
                  <span className={`id-canon__pill id-canon__pill--${item.state}`}>
                    {BENCH_STATE_LABEL[item.state] ?? item.state}
                  </span>
                </div>
                <div className='id-canon__bench-meta'>
                  <span className='id-canon__bench-owner'>Owner · {item.owner}</span>
                  {item.note ? <span className='id-canon__bench-note'>{item.note}</span> : null}
                </div>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {starts.length ? (
        <SectionFrame
          heading={{
            kicker: data.startingPoints.header.kicker,
            title: data.startingPoints.header.title,
            description: data.startingPoints.header.description,
          }}
          tone='mist'
        >
          <ul className='id-canon id-canon__starts'>
            {starts.map((sp, i) => (
              <li key={sp.id} className='id-canon__start'>
                <span className='id-canon__num'>{String(i + 1).padStart(2, '0')}</span>
                <p className='id-canon__start-signal'>{sp.signalIfYou}</p>
                <p className='id-canon__start-fix'>{sp.fix}</p>
                <span className='id-canon__start-system'>Starts with · {sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: data.scenario.header.kicker,
            title: data.scenario.header.title,
            description: data.scenario.header.description,
          }}
          tone='white'
        >
          <article className='id-canon id-canon__scene'>
            <span className='id-canon__scene-label'>{scenario.label}</span>
            <p className='id-canon__scene-body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='id-canon__scene-change'>{scenario.observedChange}</p>
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
