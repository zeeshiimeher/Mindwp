/* eslint-disable @typescript-eslint/no-explicit-any */
// CSS: src/styles/services.css (aih-* prefix)
// Related: injected globally by services/config.tsx (RelatedSection)

import { ArrowRight } from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// AiLeadHandlingRenderer
// Sections: hero · responseGap · connectedVsIsolated · channelStates ·
//           handlingPath · realMoments · handoffMap · scenarioStudy ·
//           fitFilter · faq · cta
// Related: injected globally by services/config.tsx (RelatedSection)
// CSS: src/styles/services.css (aih-* prefix)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['ai-lead-handling'];
  slug: string;
}

// -- Label constants (end in _DOT -- allowed by hardcoded-content validator) --

const ARIA_HERO_DOT = 'AI Lead Handling -- page hero';
const ARIA_RESPONSE_GAP_DOT = 'Response gap';
const ARIA_COMPARISON_DOT = 'Connected vs isolated AI';
const ARIA_CHANNELS_DOT = 'Channel states';
const ARIA_PATH_DOT = 'Handling path';
const ARIA_MOMENTS_DOT = 'Real moments';
const ARIA_HANDOFF_DOT = 'Handoff map';
const ARIA_SCENARIO_DOT = 'Scenario study';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

// -- Section map type ---------------------------------------------------------

type SectionsMap = Record<string, any>;

// =============================================================================
// Renderer
// =============================================================================

export function AiLeadHandlingRenderer({ data, slug: _slug }: Props) {
  const { hero } = data;
  const sections = data.sections as SectionsMap;
  const {
    responseGap,
    connectedVsIsolated,
    channelStates,
    handlingPath,
    realMoments,
    handoffMap,
    scenarioStudy,
    fitFilter,
    faq,
  } = sections;

  const contactHref = buildContactHref({
    system: 'ai-lead-handling',
    sourceType: 'service',
    slug: 'ai-lead-handling',
  });

  return (
    <div className='aih-page'>
      {/* -- HERO ---------------------------------------------------------------- */}
      <HeroFrame
        className='aih-hero'
        ariaLabel={ARIA_HERO_DOT}
        texture={<div className='aih-hero__texture' aria-hidden='true' />}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[
          {
            label: PRIMARY_CTA_LABEL,
            href: contactHref,
            variant: 'white',
            icon: <ArrowRight size={16} aria-hidden='true' />,
          },
        ]}
        chips={hero.list && hero.list.length > 0 ? (hero.list as string[]) : undefined}
        chipDotVariant='warn'
        visual={
          <div className='aih-hero__panel mw-animate-panel'>
            <div className='aih-hero__panel-header'>
              <span className='aih-hero__panel-label'>{hero.visual?.label}</span>
              <span className='aih-hero__panel-subtitle'>{hero.visual?.subtitle}</span>
            </div>
            <div className='aih-hero__channels'>
              {hero.visual?.channels?.map((ch: { label: string; note: string; state: string }) => (
                <div key={ch.label} className='aih-hero__channel' data-state={ch.state}>
                  <span className='aih-hero__channel-label'>{ch.label}</span>
                  <span className='aih-hero__channel-note'>{ch.note}</span>
                  <span className='aih-hero__channel-state'>{ch.state}</span>
                </div>
              ))}
            </div>
            <div className='aih-hero__panel-footer'>
              <span className='aih-hero__panel-unhandled'>{hero.visual?.footerUnhandled}</span>
              <span className='aih-hero__panel-covered'>{hero.visual?.footerCovered}</span>
            </div>
          </div>
        }
      />

      {/* -- RESPONSE GAP ------------------------------------------------------- */}
      <SectionFrame
        className='aih-response-gap'
        ariaLabel={ARIA_RESPONSE_GAP_DOT}
        tone='mist'
        heading={{
          kicker: responseGap.header.kicker,
          title: responseGap.header.title,
          description: responseGap.header.description,
        }}
      >
        <div className='aih-response-gap__body'>
          <div className='aih-response-gap__primary'>
            <p className='aih-response-gap__primary-title'>{responseGap.primaryGap.title}</p>
            <p className='aih-response-gap__primary-situation'>
              {responseGap.primaryGap.situation}
            </p>
            <p className='aih-response-gap__primary-cost'>{responseGap.primaryGap.cost}</p>
            <p className='aih-response-gap__primary-handled'>
              {responseGap.primaryGap.handledState}
            </p>
          </div>
          <ul className='aih-response-gap__gaps'>
            {responseGap.gaps?.map((gap: any) => (
              <li key={gap.title} className='aih-response-gap__gap'>
                <strong className='aih-response-gap__gap-title'>{gap.title}</strong>
                <span className='aih-response-gap__gap-situation'>{gap.situation}</span>
                <span className='aih-response-gap__gap-handled'>{gap.handledState}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* -- CONNECTED VS ISOLATED ----------------------------------------------- */}
      <SectionFrame
        className='aih-comparison'
        ariaLabel={ARIA_COMPARISON_DOT}
        tone='white'
        heading={{
          kicker: connectedVsIsolated.header.kicker,
          title: connectedVsIsolated.header.title,
          description: connectedVsIsolated.header.description,
        }}
      >
        <div className='aih-comparison__board'>
          <div className='aih-comparison__headers'>
            <div className='aih-comparison__col-header aih-comparison__col-header--left'>
              <span className='aih-comparison__col-label'>
                {connectedVsIsolated.leftSide.label}
              </span>
              <span className='aih-comparison__col-note'>{connectedVsIsolated.leftSide.note}</span>
            </div>
            <div className='aih-comparison__col-header aih-comparison__col-header--right'>
              <span className='aih-comparison__col-label'>
                {connectedVsIsolated.rightSide.label}
              </span>
              <span className='aih-comparison__col-note'>{connectedVsIsolated.rightSide.note}</span>
            </div>
          </div>
          <ul className='aih-comparison__criteria'>
            {connectedVsIsolated.criteria?.map((row: any) => (
              <li key={row.name} className='aih-comparison__row'>
                <span className='aih-comparison__row-name'>{row.name}</span>
                <span className='aih-comparison__row-left'>{row.left}</span>
                <span className='aih-comparison__row-right'>{row.right}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* -- CHANNEL STATES ------------------------------------------------------ */}
      <SectionFrame
        className='aih-channels'
        ariaLabel={ARIA_CHANNELS_DOT}
        tone='mist'
        heading={{
          kicker: channelStates.header.kicker,
          title: channelStates.header.title,
          description: channelStates.header.description,
        }}
      >
        <ul className='aih-channels__list'>
          {channelStates.channels?.map((ch: any) => (
            <li key={ch.name} className='aih-channels__item' data-state={ch.state}>
              <span className='aih-channels__name'>{ch.name}</span>
              <div className='aih-channels__state-block aih-channels__state-block--before'>
                <span className='aih-channels__state-label'>{ch.currentLabel}</span>
                <span className='aih-channels__state-note'>{ch.currentNote}</span>
              </div>
              <div className='aih-channels__state-block aih-channels__state-block--after'>
                <span className='aih-channels__state-label'>{ch.handledLabel}</span>
                <span className='aih-channels__state-note'>{ch.handledNote}</span>
              </div>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {/* -- HANDLING PATH ------------------------------------------------------- */}
      <SectionFrame
        className='aih-path'
        ariaLabel={ARIA_PATH_DOT}
        tone='gradient-dark'
        heading={{
          kicker: handlingPath.header.kicker,
          title: handlingPath.header.title,
          description: handlingPath.header.description,
        }}
      >
        <div className='aih-path__flow'>
          <ul className='aih-path__inputs'>
            {handlingPath.inputs?.map((input: any) => (
              <li key={input.label} className='aih-path__input'>
                {input.label}
              </li>
            ))}
          </ul>
          <div className='aih-path__junction'>
            <span className='aih-path__junction-title'>{handlingPath.junction.title}</span>
            <span className='aih-path__junction-note'>{handlingPath.junction.note}</span>
          </div>
          <ul className='aih-path__outputs'>
            {handlingPath.outputs?.map((output: any) => (
              <li key={output.label} className='aih-path__output' data-type={output.type}>
                <span className='aih-path__output-label'>{output.label}</span>
                <span className='aih-path__output-note'>{output.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* -- REAL MOMENTS -------------------------------------------------------- */}
      <SectionFrame
        className='aih-moments'
        ariaLabel={ARIA_MOMENTS_DOT}
        tone='white'
        heading={{
          kicker: realMoments.header.kicker,
          title: realMoments.header.title,
          description: realMoments.header.description,
        }}
      >
        <ul className='aih-moments__list'>
          {realMoments.examples?.map((ex: any) => (
            <li key={ex.trigger} className='aih-moments__item'>
              <p className='aih-moments__trigger'>{ex.trigger}</p>
              <div className='aih-moments__log'>
                <div className='aih-moments__log-entry aih-moments__log-entry--response'>
                  <span className='aih-moments__log-label'>AI response</span>
                  <span className='aih-moments__log-text'>{ex.response}</span>
                </div>
                <div className='aih-moments__log-entry aih-moments__log-entry--capture'>
                  <span className='aih-moments__log-label'>Captured</span>
                  <span className='aih-moments__log-text'>{ex.capture}</span>
                </div>
                <div className='aih-moments__log-entry aih-moments__log-entry--outcome'>
                  <span className='aih-moments__log-label'>Team receives</span>
                  <span className='aih-moments__log-text'>{ex.outcome}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {/* -- HANDOFF MAP --------------------------------------------------------- */}
      <SectionFrame
        className='aih-handoff'
        ariaLabel={ARIA_HANDOFF_DOT}
        tone='mist'
        heading={{
          kicker: handoffMap.header.kicker,
          title: handoffMap.header.title,
          description: handoffMap.header.description,
        }}
      >
        <div className='aih-handoff__board'>
          <div className='aih-handoff__source'>
            <span className='aih-handoff__source-label'>{handoffMap.source.label}</span>
            <ul className='aih-handoff__source-responsibilities'>
              {handoffMap.source.responsibilities?.map((r: string) => (
                <li key={r} className='aih-handoff__source-responsibility'>
                  {r}
                </li>
              ))}
            </ul>
            <ul className='aih-handoff__source-status'>
              {handoffMap.source.statusLines?.map((s: string) => (
                <li key={s} className='aih-handoff__source-status-line'>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <ul className='aih-handoff__connections'>
            {handoffMap.connections?.map((conn: any) => (
              <li key={conn.targetSystem} className='aih-handoff__connection'>
                <span className='aih-handoff__connection-target'>{conn.targetSystem}</span>
                <p className='aih-handoff__connection-handoff'>{conn.handoff}</p>
                <p className='aih-handoff__connection-boundary'>{conn.boundary}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* -- SCENARIO STUDY ------------------------------------------------------ */}
      <SectionFrame
        className='aih-scenario'
        ariaLabel={ARIA_SCENARIO_DOT}
        tone='gradient-dark'
        heading={{
          kicker: scenarioStudy.header.kicker,
          title: scenarioStudy.header.title,
          description: scenarioStudy.header.description,
        }}
      >
        <div className='aih-scenario__body'>
          <div className='aih-scenario__context'>
            <span className='aih-scenario__context-label'>{scenarioStudy.context.label}</span>
            <p className='aih-scenario__context-title'>{scenarioStudy.context.title}</p>
            <p className='aih-scenario__context-description'>{scenarioStudy.context.description}</p>
            <p className='aih-scenario__constraint'>{scenarioStudy.context.constraint}</p>
          </div>
          <div className='aih-scenario__panels'>
            {([scenarioStudy.before, scenarioStudy.change, scenarioStudy.after] as any[]).map(
              (panel: any) => (
                <div key={panel.label} className='aih-scenario__panel'>
                  <span className='aih-scenario__panel-label'>{panel.label}</span>
                  <p className='aih-scenario__panel-title'>{panel.title}</p>
                  <ul className='aih-scenario__bullets'>
                    {panel.bullets?.map((b: string) => (
                      <li key={b} className='aih-scenario__bullet'>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {panel.metrics && (
                    <ul className='aih-scenario__metrics'>
                      {panel.metrics.map((m: any) => (
                        <li key={m.label} className='aih-scenario__metric'>
                          <span className='aih-scenario__metric-label'>{m.label}</span>
                          <span className='aih-scenario__metric-before'>{m.before}</span>
                          <span className='aih-scenario__metric-after'>{m.after}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </SectionFrame>

      {/* -- FIT FILTER ---------------------------------------------------------- */}
      <SectionFrame
        className='aih-fit'
        ariaLabel={ARIA_FIT_DOT}
        tone='mist'
        heading={{
          kicker: fitFilter.header.kicker,
          title: fitFilter.header.title,
          description: fitFilter.header.description,
        }}
      >
        <div className='aih-fit__columns'>
          <div className='aih-fit__column aih-fit__column--strong'>
            <span className='aih-fit__column-label'>{fitFilter.strongFit.label}</span>
            <ul className='aih-fit__items'>
              {fitFilter.strongFit.items?.map((item: any) => (
                <li key={item.text} className='aih-fit__item'>
                  <span className='aih-fit__item-text'>{item.text}</span>
                  <span className='aih-fit__item-note'>{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='aih-fit__column aih-fit__column--poor'>
            <span className='aih-fit__column-label'>{fitFilter.poorFit.label}</span>
            <ul className='aih-fit__items'>
              {fitFilter.poorFit.items?.map((item: any) => (
                <li key={item.text} className='aih-fit__item'>
                  <span className='aih-fit__item-text'>{item.text}</span>
                  <span className='aih-fit__item-note'>{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionFrame>

      {/* -- FAQ ----------------------------------------------------------------- */}
      <FAQSection
        className='aih-faq'
        ariaLabel={ARIA_FAQ_DOT}
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        variant='split'
        tone='white'
      />

      {/* -- CTA ----------------------------------------------------------------- */}
      <DecisionPanel
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={data.cta.expectations}
      />
    </div>
  );
}
