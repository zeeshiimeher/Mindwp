import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { hvacExtras } from '@/domains/industries/pages/home-services/HvacCompanies';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const RISK_LABEL: Record<string, string> = {
  high: 'high risk',
  medium: 'watch',
  low: 'steady',
};
const LEAK_STATE_LABEL: Record<string, string> = {
  silent: 'Silent leak',
  slow: 'Slow leak',
  lost: 'Lost work',
  risk: 'At risk',
  attention: 'Needs attention',
  healthy: 'Healthy',
};
const SYSTEM_ROLE_LABEL: Record<string, string> = {
  lead: 'Leads',
  support: 'Supports',
  optional: 'Optional',
};

const ARC_W = 960;
const ARC_H = 280;

function buildArcPath(loads: number[]) {
  const n = loads.length;
  if (n === 0) return { line: '', area: '', points: [] as { x: number; y: number }[] };
  const padX = 40;
  const padTop = 24;
  const padBottom = 40;
  const innerW = ARC_W - padX * 2;
  const innerH = ARC_H - padTop - padBottom;
  const points = loads.map((load, i) => {
    const x = padX + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
    const y = padTop + innerH - (Math.max(0, Math.min(100, load)) / 100) * innerH;
    return { x, y };
  });
  let line = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const cx = (p0.x + p1.x) / 2;
    line += ` C ${cx} ${p0.y} ${cx} ${p1.y} ${p1.x} ${p1.y}`;
  }
  const area = `${line} L ${points[n - 1].x} ${padTop + innerH} L ${points[0].x} ${padTop + innerH} Z`;
  return { line, area, points };
}

export function HvacCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const { surge, planLoop } = hvacExtras;
  const arc = buildArcPath(surge.bars.map(b => b.load));
  const leaks = data.industryPattern.leaks ?? [];
  const timeline = data.leakTimeline.timeline ?? [];
  const before = data.beforeAfter.before;
  const after = data.beforeAfter.after;
  const systems = data.relevantSystems.relevantSystems ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='industry-detail-page industry-detail-page--home idp-hvac'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='warn'
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
          kicker: 'Two seasons that decide the year',
          title: 'Surge weeks. Quiet months. Both have to be planned for.',
          description:
            'Two surge windows where the inbox runs four times deeper. Eight quieter weeks where the next visit is what keeps the office in work. Each one needs the other.',
        }}
        tone='dark'
      >
        <div className='hv-arc'>
          <svg
            viewBox={`0 0 ${ARC_W} ${ARC_H}`}
            preserveAspectRatio='none'
            role='img'
            aria-label='Illustrative HVAC year — call volume by month'
            className='hv-arc__svg'
          >
            <defs>
              <linearGradient id='hv-arc-fill' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' className='hv-arc__grad-top' />
                <stop offset='100%' className='hv-arc__grad-bottom' />
              </linearGradient>
            </defs>
            <path d={arc.area} fill='url(#hv-arc-fill)' />
            <path d={arc.line} className='hv-arc__line' fill='none' />
            {arc.points.map((p, i) => {
              const bar = surge.bars[i];
              const cls =
                bar.state === 'surge'
                  ? 'hv-arc__node hv-arc__node--surge'
                  : bar.state === 'quiet'
                    ? 'hv-arc__node hv-arc__node--quiet'
                    : 'hv-arc__node';
              return (
                <g key={bar.label} className={cls}>
                  <circle cx={p.x} cy={p.y} r={5} className='hv-arc__dot' />
                  <text x={p.x} y={ARC_H - 14} className='hv-arc__label' textAnchor='middle'>
                    {bar.label}
                  </text>
                  {bar.note ? (
                    <text x={p.x} y={p.y - 14} className='hv-arc__cue' textAnchor='middle'>
                      {bar.note}
                    </text>
                  ) : null}
                </g>
              );
            })}
          </svg>
          <p className='hv-arc__note'>{surge.note}</p>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'Quiet-month follow-up',
          title: 'A finished install becomes a calm reason to come back',
          description:
            'Helpful recall, not a sales pitch. The next service visit is already on the page before the customer thinks to look for it.',
        }}
        tone='mist'
      >
        <ol className='hv-loop'>
          {planLoop.steps.map((s, i) => (
            <li key={s.id} className='hv-loop__step'>
              <span className='hv-loop__num'>{String(i + 1).padStart(2, '0')}</span>
              <span className='hv-loop__label'>{s.label}</span>
              <span className='hv-loop__detail'>{s.detail}</span>
            </li>
          ))}
        </ol>
      </SectionFrame>

      {timeline.length ? (
        <SectionFrame
          heading={{
            kicker: data.leakTimeline.header.kicker,
            title: data.leakTimeline.header.title,
            description: data.leakTimeline.header.description,
          }}
          tone='white'
        >
          <ol className='id-canon id-canon__timeline'>
            {timeline.map(step => (
              <li key={step.id} className={`id-canon__step id-canon__step--risk-${step.leakRisk}`}>
                <span className='id-canon__step-time'>{step.time}</span>
                <div className='id-canon__step-body'>
                  <span className='id-canon__step-event'>{step.event}</span>
                  {step.detail ? <p className='id-canon__step-detail'>{step.detail}</p> : null}
                  <div className='id-canon__step-foot'>
                    {step.owner ? <span className='id-canon__step-owner'>{step.owner}</span> : null}
                    <span className={`id-canon__pill id-canon__pill--risk-${step.leakRisk}`}>
                      {RISK_LABEL[step.leakRisk] ?? step.leakRisk}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </SectionFrame>
      ) : null}

      {before && after ? (
        <SectionFrame
          heading={{
            kicker: data.beforeAfter.header.kicker,
            title: data.beforeAfter.header.title,
            description: data.beforeAfter.header.description,
          }}
          tone='mist'
        >
          <div className='id-canon id-canon__ba'>
            <article className='id-canon__ba-col id-canon__ba-col--before'>
              <span className='id-canon__ba-tag'>{before.label}</span>
              <ul className='id-canon__ba-list'>
                {before.items.map((item, i) => (
                  <li key={`b-${i}`} className='id-canon__ba-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className='id-canon__ba-col id-canon__ba-col--after'>
              <span className='id-canon__ba-tag'>{after.label}</span>
              <ul className='id-canon__ba-list'>
                {after.items.map((item, i) => (
                  <li key={`a-${i}`} className='id-canon__ba-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </SectionFrame>
      ) : null}

      {systems.length ? (
        <SectionFrame
          heading={{
            kicker: data.relevantSystems.header.kicker,
            title: data.relevantSystems.header.title,
            description: data.relevantSystems.header.description,
          }}
          tone='dark'
        >
          <ul className='id-canon id-canon__systems'>
            {systems.map(s => (
              <li key={s.id} className={`id-canon__system id-canon__system--${s.role}`}>
                <div className='id-canon__system-head'>
                  <span className='id-canon__system-name'>{s.name}</span>
                  <span className={`id-canon__pill id-canon__pill--${s.role}`}>
                    {SYSTEM_ROLE_LABEL[s.role] ?? s.role}
                  </span>
                </div>
                <p className='id-canon__system-why'>{s.why}</p>
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
