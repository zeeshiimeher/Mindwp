import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { electricalExtras } from '@/domains/industries/pages/home-services/ElectricalCompanies';
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

export function ElectricalCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const { channels, trust } = electricalExtras;
  const leaks = data.industryPattern.leaks ?? [];
  const timeline = data.leakTimeline.timeline ?? [];
  const before = data.beforeAfter.before;
  const after = data.beforeAfter.after;
  const workflow = data.workflowExamples.workflow ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='industry-detail-page industry-detail-page--home idp-electrical'>
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
          kicker: 'Two paths through one office',
          title: 'Fast calls need a response. Project work needs a place to live.',
          description:
            'A no-power call needs a tech today. A switchboard upgrade needs a quote and a quiet follow-up. Both arrive on the same number, on different clocks.',
        }}
        tone='dark'
      >
        <div className='el-channels'>
          <div className='el-channels__bar'>
            <span className='el-channels__title'>A regular Tuesday</span>
            <span className='el-channels__as-of'>{channels.asOf}</span>
          </div>

          {/* Split-path SVG: fault lane (top) and project lane (bottom) converge into 'one office' */}
          <svg
            viewBox='0 0 960 200'
            preserveAspectRatio='none'
            role='img'
            aria-label='Two paths through one office: fault lane and project lane.'
            className='el-channels__svg'
          >
            <path
              d='M 30 50 C 280 50, 480 50, 720 100'
              className='el-channels__path el-channels__path--fault'
              fill='none'
            />
            <path
              d='M 30 150 C 280 150, 480 150, 720 100'
              className='el-channels__path el-channels__path--project'
              fill='none'
            />
            <circle cx='720' cy='100' r='10' className='el-channels__hub' />
            <text x='30' y='38' className='el-channels__lane-label el-channels__lane-label--fault'>
              FAULTS · same-day
            </text>
            <text
              x='30'
              y='180'
              className='el-channels__lane-label el-channels__lane-label--project'
            >
              PROJECTS · quote + follow-up
            </text>
            <text x='735' y='105' className='el-channels__hub-label'>
              one office
            </text>
          </svg>

          <div className='el-channels__lanes'>
            <div className='el-channels__lane el-channels__lane--fault'>
              <div className='el-channels__lane-head'>
                <span className='el-channels__lane-name'>{channels.fault.label}</span>
                <span className='el-channels__lane-tag'>{channels.fault.tag}</span>
              </div>
              <ul className='el-channels__rows'>
                {channels.fault.rows.map(row => (
                  <li key={row.id} className='el-channels__row'>
                    <span className='el-channels__time'>{row.arrived}</span>
                    <span className='el-channels__addr'>{row.caller}</span>
                    <span className='el-channels__job'>{row.job}</span>
                    <span className='el-channels__next'>{row.next}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='el-channels__lane el-channels__lane--project'>
              <div className='el-channels__lane-head'>
                <span className='el-channels__lane-name'>{channels.project.label}</span>
                <span className='el-channels__lane-tag'>{channels.project.tag}</span>
              </div>
              <ul className='el-channels__rows'>
                {channels.project.rows.map(row => (
                  <li key={row.id} className='el-channels__row'>
                    <span className='el-channels__time'>{row.arrived}</span>
                    <span className='el-channels__addr'>{row.caller}</span>
                    <span className='el-channels__job'>{row.job}</span>
                    <span className='el-channels__next'>{row.next}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'Trust, attached to the job',
          title: 'The paperwork shows up where the work is, not in a brochure',
          description:
            'Test certificates, safety checks, and the review request all attach to the actual job — quietly, after sign-off, never before.',
        }}
        tone='mist'
      >
        <ul className='el-trust'>
          {trust.cards.map((card, i) => (
            <li key={card.id} className='el-trust__card'>
              <span className='el-trust__num'>{String(i + 1).padStart(2, '0')}</span>
              <h3 className='el-trust__label'>{card.label}</h3>
              <p className='el-trust__detail'>{card.detail}</p>
            </li>
          ))}
        </ul>
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

      {workflow.length ? (
        <SectionFrame
          heading={{
            kicker: data.workflowExamples.header.kicker,
            title: data.workflowExamples.header.title,
            description: data.workflowExamples.header.description,
          }}
          tone='white'
        >
          <ul className='id-canon id-canon__flow'>
            {workflow.map(row => (
              <li key={row.id} className='id-canon__flow-row'>
                <div className='id-canon__flow-trigger'>
                  <span className='id-canon__flow-tag'>When</span>
                  <span className='id-canon__flow-text'>{row.trigger}</span>
                  {row.channel ? (
                    <span className='id-canon__flow-channel'>via {row.channel}</span>
                  ) : null}
                </div>
                <span className='id-canon__flow-arrow' aria-hidden='true'>
                  →
                </span>
                <div className='id-canon__flow-action'>
                  <span className='id-canon__flow-tag'>Then</span>
                  <span className='id-canon__flow-text'>{row.action}</span>
                  <span className='id-canon__flow-owner'>{row.owner}</span>
                </div>
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
