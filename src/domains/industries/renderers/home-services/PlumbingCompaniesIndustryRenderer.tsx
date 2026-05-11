import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { plumbingExtras } from '@/domains/industries/pages/home-services/PlumbingCompanies';
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

export function PlumbingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const { route, dispatch } = plumbingExtras;
  const leaks = data.industryPattern.leaks ?? [];
  const timeline = data.leakTimeline.timeline ?? [];
  const starts = data.startingPoints.startingPoints ?? [];
  const systems = data.relevantSystems.relevantSystems ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='industry-detail-page industry-detail-page--home idp-plumbing'>
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

      {/* SIGNATURE: Route diagram */}
      <SectionFrame
        heading={{
          kicker: 'The first five minutes',
          title: 'The first five minutes decide the job',
          description:
            'Five steps between the phone ringing and a tech on the way — and not one of them depends on someone happening to be near the desk.',
        }}
        tone='dark'
      >
        <div className='pl-route'>
          <ol className='pl-route__nodes'>
            {route.nodes.map((node, i) => (
              <li key={node.id} className={`pl-route__node pl-route__node--${node.id}`}>
                <span className='pl-route__time'>{node.time ?? `step ${i + 1}`}</span>
                <span className='pl-route__num'>{String(i + 1).padStart(2, '0')}</span>
                <span className='pl-route__label'>{node.label}</span>
                <span className='pl-route__detail'>{node.detail}</span>
                {i < route.nodes.length - 1 ? (
                  <span className='pl-route__arrow' aria-hidden='true'>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className='pl-route__branches'>
            <span className='pl-route__branches-tag'>At triage</span>
            <ul className='pl-route__branches-list'>
              {route.branches.map(b => (
                <li
                  key={b.label}
                  className={`pl-route__branch pl-route__branch--${b.label.toLowerCase()}`}
                >
                  <span className='pl-route__branch-label'>{b.label}</span>
                  <span className='pl-route__branch-detail'>{b.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionFrame>

      {/* Dispatch */}
      <SectionFrame
        heading={{
          kicker: 'Who picks up next',
          title: 'The nearest free van. Confirmed in one tap.',
          description:
            'Three techs, three live states, one auto-suggestion. The decision moves from a memory test to a signal the dispatcher can confirm in a second.',
        }}
        tone='mist'
      >
        <div className='pl-dispatch'>
          <header className='pl-dispatch__bar'>
            <span className='pl-dispatch__title'>Crew board</span>
            <span className='pl-dispatch__as-of'>As of {dispatch.asOf}</span>
          </header>
          <ul className='pl-dispatch__techs'>
            {dispatch.techs.map(t => (
              <li
                key={t.id}
                className={`pl-dispatch__tech pl-dispatch__tech--${t.status} ${
                  t.tech === dispatch.pick.tech ? 'pl-dispatch__tech--picked' : ''
                }`}
              >
                <span className='pl-dispatch__tech-status'>{t.status.replace('-', ' ')}</span>
                <span className='pl-dispatch__tech-name'>{t.tech}</span>
                <span className='pl-dispatch__tech-area'>{t.area}</span>
                <span className='pl-dispatch__tech-detail'>{t.detail}</span>
                {t.tech === dispatch.pick.tech ? (
                  <span className='pl-dispatch__pick-badge'>Auto-pick</span>
                ) : null}
              </li>
            ))}
          </ul>
          <div className='pl-dispatch__pick'>
            <span className='pl-dispatch__pick-tag'>Suggested send</span>
            <span className='pl-dispatch__pick-name'>{dispatch.pick.tech}</span>
            <span className='pl-dispatch__pick-reason'>{dispatch.pick.reason}</span>
          </div>
        </div>
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
