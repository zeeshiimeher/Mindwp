import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { roofingExtras } from '@/domains/industries/pages/home-services/RoofingCompanies';
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
const BENCH_STATE_LABEL: Record<string, string> = {
  'in-place': 'In place',
  planned: 'To put in place',
  optional: 'Optional',
};

export function RoofingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const { funnel, projectStages } = roofingExtras;
  const leaks = data.industryPattern.leaks ?? [];
  const timeline = data.leakTimeline.timeline ?? [];
  const bench = data.workbench.workbench ?? [];
  const starts = data.startingPoints.startingPoints ?? [];
  const scenario = data.scenario.scenario;

  // Funnel SVG geometry — wide top narrowing through stages
  const FW = 960;
  const FH = 280;
  const padX = 40;
  const stageCount = funnel.stages.length;
  const stageW = (FW - padX * 2) / stageCount;
  const maxCount = Math.max(...funnel.stages.map(s => s.count));

  return (
    <main className='industry-detail-page industry-detail-page--home idp-roofing'>
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
          kicker: 'The storm-week path',
          title: 'Storm → calls → inspections → quotes → crews',
          description:
            'A real four-step view of the post-storm week. The numbers are illustrative — the shape is what matters. The office and the field both look at the same picture.',
        }}
        tone='white'
      >
        <div className='rf-funnel'>
          <svg
            viewBox={`0 0 ${FW} ${FH}`}
            preserveAspectRatio='none'
            role='img'
            aria-label='Storm-week funnel: inspections, quotes, approvals, won.'
            className='rf-funnel__svg'
          >
            {funnel.stages.map((stage, i) => {
              const x = padX + i * stageW;
              const ratio = maxCount === 0 ? 0 : stage.count / maxCount;
              const h = 60 + ratio * (FH - 120);
              const y = (FH - h) / 2;
              return (
                <g key={stage.id} className={`rf-funnel__stage rf-funnel__stage--${stage.id}`}>
                  <rect
                    x={x + 8}
                    y={y}
                    width={stageW - 16}
                    height={h}
                    rx={8}
                    className='rf-funnel__bar'
                  />
                  <text
                    x={x + stageW / 2}
                    y={y + h / 2 - 4}
                    textAnchor='middle'
                    className='rf-funnel__count'
                  >
                    {stage.count}
                  </text>
                  <text
                    x={x + stageW / 2}
                    y={y + h / 2 + 18}
                    textAnchor='middle'
                    className='rf-funnel__label'
                  >
                    {stage.label}
                  </text>
                </g>
              );
            })}
          </svg>
          <ul className='rf-funnel__captions'>
            {funnel.stages.map(stage => (
              <li key={stage.id} className='rf-funnel__caption'>
                <span className='rf-funnel__caption-label'>{stage.label}</span>
                <span className='rf-funnel__caption-detail'>{stage.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'Five jobs, five stages',
          title: 'Every job has a clear stage and a clear next step',
          description:
            'Nothing sits without an owner. Nothing depends on anyone in the office trying to remember whose roof is at what stage.',
        }}
        tone='mist'
      >
        <ol className='rf-board'>
          {projectStages.stages.map(stage => (
            <li key={stage.id} className={`rf-board__col rf-board__col--${stage.id}`}>
              <div className='rf-board__head'>
                <span className='rf-board__label'>{stage.label}</span>
                <span className='rf-board__count'>{stage.jobs.length}</span>
              </div>
              <ul className='rf-board__jobs'>
                {stage.jobs.map(j => (
                  <li key={j.ref} className='rf-board__job'>
                    <span className='rf-board__ref'>{j.ref}</span>
                    <span className='rf-board__addr'>{j.address}</span>
                    <span className='rf-board__note'>{j.note}</span>
                  </li>
                ))}
              </ul>
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

      {bench.length ? (
        <SectionFrame
          heading={{
            kicker: data.workbench.header.kicker,
            title: data.workbench.header.title,
            description: data.workbench.header.description,
          }}
          tone='mist'
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
          tone='white'
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
          tone='mist'
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
