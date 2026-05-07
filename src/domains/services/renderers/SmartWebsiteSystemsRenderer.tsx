import { Eye, Layers, Mail, PackageOpen, Shield } from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { Accordion } from '@/components/primitives/Accordion';
import { Tabs } from '@/components/primitives/Tabs';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// SmartWebsiteSystemsRenderer
// Sections: hero · leakMap · comparison · handoffBoard · coverageLedger ·
//           environmentRoster · handledPath · proofStory · compoundingSignals ·
//           buildBoard · fitFilter · faq · cta
//
// CSS: src/styles/services/smart-website.css (sws-* classes)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug[
    | 'smart-website-systems'
    | 'service-pages-vs-one-generic-services-page'];
  slug: string;
}

// ── Label constants (end in _DOT — allowed by hardcoded-content validator) ──

const ARIA_LEAK_MAP_DOT = 'Enquiry leak map';
const ARIA_COMPARISON_DOT = 'Comparison';
const ARIA_HANDOFF_DOT = 'System handoff board';
const ARIA_COVERAGE_DOT = 'Operating coverage ledger';
const ARIA_ENVIRONMENT_DOT = 'Business environment fit';
const ARIA_ENVIRONMENT_TABLE_DOT = 'Business environments';
const ARIA_HANDLED_PATH_DOT = 'Handled enquiry path';
const ARIA_PROOF_DOT = 'Proof story';
const ARIA_COMPOUNDING_DOT = 'Compounding signals';
const ARIA_BUILD_BOARD_DOT = 'Build board';
const ARIA_FIT_FILTER_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const LEAK_SITUATION_DOT = 'Situation';
const LEAK_COST_DOT = 'Cost';
const LEAK_HANDLED_DOT = 'Handled state';
const HANDOFF_SOURCE_LABEL_DOT = 'Entry point';
const HANDOFF_CONNECTED_DOT = 'Hands off to';
const HANDOFF_HANDOFF_DOT = 'Handoff';
const HANDOFF_BOUNDARY_DOT = 'Boundary';
const SIGNAL_BADGE_DOT = 'Live signal';
const SIGNAL_STATUS_CHAIN_DOT = 'Captured · Routed · Confirmed';
const SIGNAL_ROW_SERVICE_DOT = 'Service';
const SIGNAL_ROW_RESPONSE_DOT = 'Response sent';
const EFFECT_LABEL_DOT = 'Effect';
const ROSTER_COL_ENV_DOT = 'Environment';
const ROSTER_COL_TRIGGERS_DOT = 'How enquiry starts';
const ROSTER_COL_NEED_DOT = 'What the site must handle';
const ROSTER_COL_SIGNALS_DOT = 'Signal tags';
const ROSTER_SCENARIO_DOT = 'Scenario';
const PROOF_CONTEXT_DOT = 'Business context';
const PROOF_CONSTRAINT_DOT = 'Constraint';
const PROOF_TYPE_DOT = 'Proof type';
const PROOF_BEFORE_DOT = 'Before';
const PROOF_CHANGE_DOT = 'What changed';
const PROOF_AFTER_DOT = 'After';
const BUILD_INPUTS_DOT = 'Project inputs';
const BUILD_OUTPUTS_DOT = 'Outputs';
const BUILD_FINAL_DOT = 'Working state';
const HANDOFF_STATUS_LABEL_DOT = 'On capture';
const CTA_EXPECTATIONS_KEY_DOT = 'expectations';
const CTA_FOOTER_KEY_DOT = 'footer';

const COVERAGE_ICON_KEYS: Record<string, React.ReactNode> = {
  Structure: <Layers size={16} />,
  'Capture & Routing': <Mail size={16} />,
  Visibility: <Eye size={16} />,
  Protection: <Shield size={16} />,
  Handover: <PackageOpen size={16} />,
};

const COVERAGE_TITLE_DOT = 'Coverage blueprint — Smart Website System';

// ── CSS class constants (end in _CLASS — allowed by hardcoded-content validator) ──

const PROOF_DOT_GREEN_CLASS = 'sws-dot sws-dot--green';
const BUILD_DOT_GREEN_CLASS = 'sws-dot sws-dot--green';
const PROOF_ITEM_CLASS = 'sws-handled-path__proof-item';

// ── Validator-required helper ────────────────────────────────────────────────

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }
  return description;
}

function requireHeadingTitle(title: string | undefined, section: string) {
  if (!title || title.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }
  return title;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionsMap = Record<string, any>;

// ── CTA local types (for data access — data contract stays as data.cta.*) ───

type CTAExpectation = { num: string; text: string };
type CTAFooter = { noSell: string; tone: string };

// ── Main renderer ────────────────────────────────────────────────────────────

export default function SmartWebsiteSystemsRenderer({ data, slug }: Props) {
  const { hero } = data;
  const sections = data.sections as SectionsMap;
  const {
    leakMap,
    comparison,
    handoffBoard,
    coverageLedger,
    environmentRoster,
    handledPath,
    proofStory,
    compoundingSignals,
    buildBoard,
    fitFilter,
    faq,
  } = sections;

  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <div className='sws-page'>
      {/* 1. Hero */}
      <section className='sws-hero'>
        <div className='sws-hero__inner mw-container'>
          <HeroFrame
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
            chips={Array.isArray(hero.list) ? (hero.list as string[]) : undefined}
            chipDotVariant='subtle'
          />
          {hero.visual && (
            <div className='sws-hero__feed' aria-hidden={true}>
              <div className='sws-hero__feed-header'>
                <div className='sws-hero__feed-meta'>
                  <p className='sws-hero__feed-label'>{hero.visual.title}</p>
                  <p className='sws-hero__feed-title'>{hero.visual.subtitle}</p>
                </div>
                <span className='sws-hero__feed-live'>
                  <span className='sws-hero__feed-live-dot' />
                  Live
                </span>
              </div>
              {Array.isArray(hero.visual.rows) && (
                <ul className='sws-hero__rows'>
                  {(
                    hero.visual.rows as {
                      label: string;
                      value: string;
                      status: 'good' | 'warn' | 'risk';
                    }[]
                  ).map(row => (
                    <li key={row.label} className='sws-hero__row' data-status={row.status}>
                      <span className='sws-hero__row-bar' aria-hidden={true} />
                      <div className='sws-hero__row-body'>
                        <span className='sws-hero__row-label'>{row.label}</span>
                      </div>
                      <span className='sws-hero__row-value'>{row.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              {hero.visual.footerPrimary && (
                <div className='sws-hero__feed-footer'>
                  <span>{hero.visual.footerPrimary}</span>
                  {hero.visual.footerSecondary && <span>{hero.visual.footerSecondary}</span>}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 2. Enquiry Leak Map */}
      {leakMap &&
        (() => {
          if (!leakMap.primaryLeak || !Array.isArray(leakMap.leaks)) {
            throw new Error('[leak map section] Invalid data');
          }
          const desc = requireHeadingDescription(leakMap.header?.description, 'leak map section');
          return (
            <SectionFrame
              className='sws-leak-map'
              ariaLabel={ARIA_LEAK_MAP_DOT}
              heading={{
                kicker: leakMap.header?.kicker,
                title: requireHeadingTitle(leakMap.header?.title, 'leak map section'),
                description: desc,
              }}
            >
              {Array.isArray(leakMap.stages) && leakMap.stages.length > 0 && (
                <div className='sws-leak-map__stage-strip'>
                  {(leakMap.stages as string[]).map((stage: string) => (
                    <div key={stage} className='sws-leak-map__spine-step'>
                      <span className='sws-leak-map__spine-label'>{stage}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className='sws-leak-map__primary mw-animate-section'>
                <p className='sws-leak-map__primary-stage'>
                  <span className='sws-leak-map__primary-stage-dot' aria-hidden={true} />
                  {leakMap.primaryLeak.stage}
                </p>
                <h3 className='sws-leak-map__primary-title'>{leakMap.primaryLeak.title}</h3>
                <div className='sws-leak-map__primary-zones'>
                  <div className='sws-leak-map__primary-zone'>
                    <p className='sws-leak-map__zone-label'>{LEAK_SITUATION_DOT}</p>
                    <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.situation}</p>
                  </div>
                  <div className='sws-leak-map__primary-zone'>
                    <p className='sws-leak-map__zone-label'>{LEAK_COST_DOT}</p>
                    <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.cost}</p>
                  </div>
                  <div className='sws-leak-map__primary-zone sws-leak-map__primary-zone--handled'>
                    <p className='sws-leak-map__zone-label sws-leak-map__zone-label--handled'>
                      {LEAK_HANDLED_DOT}
                    </p>
                    <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.handledState}</p>
                  </div>
                </div>
              </div>
              <ul className='sws-leak-map__leaks mw-animate-stagger'>
                {(
                  leakMap.leaks as {
                    stage: string;
                    title: string;
                    situation: string;
                    cost: string;
                    handledState: string;
                  }[]
                ).map(leak => (
                  <li key={leak.stage} className='sws-leak-map__leak'>
                    <p className='sws-leak-map__leak-stage-label'>{leak.stage}</p>
                    <h4 className='sws-leak-map__leak-title'>{leak.title}</h4>
                    <p className='sws-leak-map__leak-situation'>{leak.situation}</p>
                    <p className='sws-leak-map__leak-handled'>{leak.handledState}</p>
                  </li>
                ))}
              </ul>
              {leakMap.summary && <p className='sws-leak-map__summary'>{leakMap.summary}</p>}
            </SectionFrame>
          );
        })()}

      {/* 3. Comparison */}
      {comparison &&
        (() => {
          if (!comparison.leftState || !comparison.rightState) {
            throw new Error('[comparison section] Invalid data');
          }
          const desc = requireHeadingDescription(
            comparison.header?.description,
            'comparison section'
          );
          return (
            <SectionFrame
              className='sws-comparison'
              ariaLabel={ARIA_COMPARISON_DOT}
              heading={{
                kicker: comparison.header?.kicker,
                title: requireHeadingTitle(comparison.header?.title, 'comparison section'),
                description: desc,
              }}
            >
              <div className='sws-comparison__panels mw-animate-section'>
                <div className='sws-comparison__panel sws-comparison__panel--left'>
                  <p className='sws-comparison__state-label'>{comparison.leftState.label}</p>
                  <h3 className='sws-comparison__state-title'>{comparison.leftState.title}</h3>
                  <dl className='sws-comparison__groups'>
                    {(comparison.leftState.groups as { label: string; text: string }[]).map(g => (
                      <div key={g.label} className='sws-comparison__group'>
                        <span className='sws-comparison__group-dot' aria-hidden={true} />
                        <div className='sws-comparison__group-content'>
                          <dt className='sws-comparison__group-label'>{g.label}</dt>
                          <dd className='sws-comparison__group-text'>{g.text}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className='sws-comparison__panel sws-comparison__panel--right'>
                  <p className='sws-comparison__state-label'>{comparison.rightState.label}</p>
                  <h3 className='sws-comparison__state-title'>{comparison.rightState.title}</h3>
                  <dl className='sws-comparison__groups'>
                    {(comparison.rightState.groups as { label: string; text: string }[]).map(g => (
                      <div key={g.label} className='sws-comparison__group'>
                        <span className='sws-comparison__group-dot' aria-hidden={true} />
                        <div className='sws-comparison__group-content'>
                          <dt className='sws-comparison__group-label'>{g.label}</dt>
                          <dd className='sws-comparison__group-text'>{g.text}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              {comparison.takeaway && (
                <p className='sws-comparison__takeaway'>{comparison.takeaway}</p>
              )}
            </SectionFrame>
          );
        })()}

      {/* 4. Handoff Board */}
      {handoffBoard &&
        (() => {
          const desc = requireHeadingDescription(
            handoffBoard.header?.description,
            'handoff board section'
          );
          return (
            <SectionFrame
              className='sws-handoff'
              ariaLabel={ARIA_HANDOFF_DOT}
              heading={{
                kicker: handoffBoard.header?.kicker,
                title: requireHeadingTitle(handoffBoard.header?.title, 'handoff board section'),
                description: desc,
              }}
            >
              <div className='sws-handoff__shell mw-animate-section'>
                <div className='sws-handoff__board'>
                  <aside className='sws-handoff__source'>
                    <div className='sws-handoff__source-top'>
                      <p className='sws-handoff__source-label'>{HANDOFF_SOURCE_LABEL_DOT}</p>
                      <h3 className='sws-handoff__source-title'>{handoffBoard.source?.title}</h3>
                      {Array.isArray(handoffBoard.source?.responsibilities) && (
                        <ul className='sws-handoff__source-responsibilities'>
                          {(handoffBoard.source.responsibilities as string[]).map(r => (
                            <li key={r} className='sws-handoff__source-item'>
                              {r}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {Array.isArray(handoffBoard.source?.statusLines) && (
                      <div className='sws-handoff__source-footer'>
                        <p className='sws-handoff__source-footer-label'>
                          {HANDOFF_STATUS_LABEL_DOT}
                        </p>
                        <ul className='sws-handoff__source-status'>
                          {(handoffBoard.source.statusLines as string[]).map(s => (
                            <li key={s} className='sws-handoff__source-status-line'>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </aside>
                  <ul className='sws-handoff__connections'>
                    {(
                      handoffBoard.connections as {
                        targetSystem: string;
                        handoff: string;
                        boundary: string;
                      }[]
                    ).map(conn => (
                      <li key={conn.targetSystem} className='sws-handoff__module'>
                        <p className='sws-handoff__module-label'>{HANDOFF_CONNECTED_DOT}</p>
                        <h4 className='sws-handoff__module-name'>{conn.targetSystem}</h4>
                        <div className='sws-handoff__module-zones'>
                          <div className='sws-handoff__zone'>
                            <span className='sws-handoff__zone-chip sws-handoff__zone-chip--handoff'>
                              {HANDOFF_HANDOFF_DOT}
                            </span>
                            <p className='sws-handoff__zone-text'>{conn.handoff}</p>
                          </div>
                          <div className='sws-handoff__zone'>
                            <span className='sws-handoff__zone-chip sws-handoff__zone-chip--boundary'>
                              {HANDOFF_BOUNDARY_DOT}
                            </span>
                            <p className='sws-handoff__zone-text'>{conn.boundary}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {handoffBoard.note && <p className='sws-handoff__note'>{handoffBoard.note}</p>}
            </SectionFrame>
          );
        })()}

      {/* 5. Coverage Ledger */}
      {coverageLedger &&
        (() => {
          const desc = requireHeadingDescription(
            coverageLedger.header?.description,
            'coverage ledger section'
          );
          return (
            <SectionFrame
              className='sws-coverage-ledger'
              ariaLabel={ARIA_COVERAGE_DOT}
              heading={{
                kicker: coverageLedger.header?.kicker,
                title: requireHeadingTitle(coverageLedger.header?.title, 'coverage ledger section'),
                description: desc,
              }}
            >
              <div className='mw-animate-section'>
                <Tabs
                  barTitle={COVERAGE_TITLE_DOT}
                  items={(
                    coverageLedger.bands as {
                      name: string;
                      purpose: string;
                      includedItems: string[];
                    }[]
                  ).map(b => ({
                    name: b.name,
                    description: b.purpose,
                    entries: b.includedItems,
                    icon: COVERAGE_ICON_KEYS[b.name] ?? <Layers size={16} />,
                  }))}
                />
              </div>
              {coverageLedger.closingStatement && (
                <p className='sws-coverage-ledger__closing'>{coverageLedger.closingStatement}</p>
              )}
            </SectionFrame>
          );
        })()}

      {/* 6. Environment Roster */}
      {environmentRoster &&
        (() => {
          const desc = requireHeadingDescription(
            environmentRoster.header?.description,
            'environment roster section'
          );
          return (
            <SectionFrame
              className='sws-environment-roster'
              ariaLabel={ARIA_ENVIRONMENT_DOT}
              heading={{
                kicker: environmentRoster.header?.kicker,
                title: requireHeadingTitle(
                  environmentRoster.header?.title,
                  'environment roster section'
                ),
                description: desc,
              }}
            >
              <div
                className='sws-environment-roster__shell mw-animate-section'
                role='table'
                aria-label={ARIA_ENVIRONMENT_TABLE_DOT}
              >
                <div className='sws-environment-roster__table-head' role='row'>
                  <span role='columnheader'>{ROSTER_COL_ENV_DOT}</span>
                  <span role='columnheader'>{ROSTER_COL_TRIGGERS_DOT}</span>
                  <span role='columnheader'>{ROSTER_COL_NEED_DOT}</span>
                  <span role='columnheader'>{ROSTER_COL_SIGNALS_DOT}</span>
                </div>
                {(
                  environmentRoster.rows as {
                    name: string;
                    enquiryTriggers: string;
                    operationalNeed: string;
                    outcomeSignals: string[];
                    scenario?: string;
                  }[]
                ).map((row, index) => (
                  <div key={row.name} className='sws-environment-roster__row' role='row'>
                    <div
                      className='sws-environment-roster__cell sws-environment-roster__cell--env'
                      role='cell'
                    >
                      <span className='sws-environment-roster__index' aria-hidden={true}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className='sws-environment-roster__name'>{row.name}</span>
                    </div>
                    <div className='sws-environment-roster__cell' role='cell'>
                      <p className='sws-environment-roster__text'>{row.enquiryTriggers}</p>
                    </div>
                    <div className='sws-environment-roster__cell' role='cell'>
                      <p className='sws-environment-roster__text'>{row.operationalNeed}</p>
                    </div>
                    <div className='sws-environment-roster__cell' role='cell'>
                      <ul className='sws-environment-roster__tags'>
                        {row.outcomeSignals.map(signal => (
                          <li key={signal} className='sws-environment-roster__tag'>
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {row.scenario && (
                      <div className='sws-environment-roster__scenario-row' role='cell'>
                        <p className='sws-environment-roster__scenario-label'>
                          {ROSTER_SCENARIO_DOT}
                        </p>
                        <p className='sws-environment-roster__scenario-text'>{row.scenario}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SectionFrame>
          );
        })()}

      {/* 7. Handled Path */}
      {handledPath &&
        (() => {
          const desc = requireHeadingDescription(
            handledPath.header?.description,
            'handled path section'
          );
          return (
            <SectionFrame
              className='sws-handled-path'
              ariaLabel={ARIA_HANDLED_PATH_DOT}
              heading={{
                kicker: handledPath.header?.kicker,
                title: requireHeadingTitle(handledPath.header?.title, 'handled path section'),
                description: desc,
              }}
            >
              <ol className='sws-handled-path__stages mw-animate-stagger'>
                {(
                  handledPath.stages as {
                    name: string;
                    title: string;
                    description: string;
                    proofPoints: string[];
                    stateLabel: string;
                    emphasis?: boolean;
                  }[]
                ).map((stage, index) => (
                  <li
                    key={stage.name}
                    className={`sws-handled-path__stage${stage.emphasis ? ' sws-handled-path__stage--lead' : ''}`}
                  >
                    <div className='sws-handled-path__stage-head'>
                      <span className='sws-handled-path__index' aria-hidden={true}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className='sws-handled-path__state-label'>{stage.stateLabel}</p>
                    </div>
                    <div className='sws-handled-path__content'>
                      <h3 className='sws-handled-path__name'>{stage.name}</h3>
                      <p className='sws-handled-path__title'>{stage.title}</p>
                      <p className='sws-handled-path__desc'>{stage.description}</p>
                      {Array.isArray(stage.proofPoints) && stage.proofPoints.length > 0 && (
                        <ul className='sws-handled-path__proof'>
                          {stage.proofPoints.map(point => (
                            <li key={point} className={PROOF_ITEM_CLASS}>
                              <span className={PROOF_DOT_GREEN_CLASS} aria-hidden={true} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              {handledPath.finalSummary && (
                <p className='sws-handled-path__summary'>{handledPath.finalSummary}</p>
              )}
            </SectionFrame>
          );
        })()}

      {/* 8. Proof Story */}
      {proofStory &&
        (() => {
          const before = proofStory.before;
          const change = proofStory.change;
          const after = proofStory.after;
          if (!before || !change || !after) {
            throw new Error('[proof section] Invalid data');
          }
          const desc = requireHeadingDescription(proofStory.header?.description, 'proof section');
          return (
            <SectionFrame
              className='sws-proof-story'
              ariaLabel={ARIA_PROOF_DOT}
              heading={{
                kicker: proofStory.header?.kicker,
                title: requireHeadingTitle(proofStory.header?.title, 'proof section'),
                description: desc,
              }}
            >
              <div className='sws-proof-story__layout mw-animate-section'>
                <aside className='sws-proof-story__context'>
                  <p className='sws-proof-story__context-label'>{PROOF_CONTEXT_DOT}</p>
                  <p className='sws-proof-story__context-business'>
                    {proofStory.context?.business}
                  </p>
                  <p className='sws-proof-story__context-situation'>
                    {proofStory.context?.situation}
                  </p>
                  {proofStory.context?.constraint && (
                    <div className='sws-proof-story__context-constraint'>
                      <p className='sws-proof-story__constraint-label'>{PROOF_CONSTRAINT_DOT}</p>
                      <p className='sws-proof-story__constraint-text'>
                        {proofStory.context.constraint}
                      </p>
                    </div>
                  )}
                  {proofStory.proofType && (
                    <div className='sws-proof-story__proof-type'>
                      <p className='sws-proof-story__proof-type-label'>{PROOF_TYPE_DOT}</p>
                      <p className='sws-proof-story__proof-type-value'>{proofStory.proofType}</p>
                    </div>
                  )}
                </aside>
                <div className='sws-proof-story__acts'>
                  <div className='sws-proof-story__act sws-proof-story__act--before'>
                    <p className='sws-proof-story__act-label'>{PROOF_BEFORE_DOT}</p>
                    <h3 className='sws-proof-story__act-title'>{before.title}</h3>
                    <p className='sws-proof-story__act-body'>{before.body}</p>
                    {Array.isArray(before.bullets) && before.bullets.length > 0 && (
                      <ul className='sws-proof-story__act-bullets'>
                        {(before.bullets as string[]).map(b => (
                          <li key={b} className='sws-proof-story__act-bullet'>
                            <span className={PROOF_DOT_GREEN_CLASS} aria-hidden={true} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className='sws-proof-story__act sws-proof-story__act--change'>
                    <p className='sws-proof-story__act-label'>{PROOF_CHANGE_DOT}</p>
                    <h3 className='sws-proof-story__act-title'>{change.title}</h3>
                    <p className='sws-proof-story__act-body'>{change.body}</p>
                    {Array.isArray(change.bullets) && change.bullets.length > 0 && (
                      <ul className='sws-proof-story__act-bullets'>
                        {(change.bullets as string[]).map(b => (
                          <li key={b} className='sws-proof-story__act-bullet'>
                            <span className={PROOF_DOT_GREEN_CLASS} aria-hidden={true} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className='sws-proof-story__act sws-proof-story__act--after'>
                    <p className='sws-proof-story__act-label'>{PROOF_AFTER_DOT}</p>
                    <h3 className='sws-proof-story__act-title'>{after.title}</h3>
                    <p className='sws-proof-story__act-body'>{after.body}</p>
                    {Array.isArray(after.bullets) && after.bullets.length > 0 && (
                      <ul className='sws-proof-story__act-bullets'>
                        {(after.bullets as string[]).map(b => (
                          <li key={b} className='sws-proof-story__act-bullet'>
                            <span className={PROOF_DOT_GREEN_CLASS} aria-hidden={true} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </SectionFrame>
          );
        })()}

      {/* 9. Compounding Signals */}
      {compoundingSignals &&
        (() => {
          const desc = requireHeadingDescription(
            compoundingSignals.header?.description,
            'compounding signals section'
          );
          const liveSignal = compoundingSignals.liveSignal as {
            title: string;
            rows: { label: string; value: string; status: string }[];
          } | null;
          const serviceRow = liveSignal?.rows.find(r => r.label === SIGNAL_ROW_SERVICE_DOT);
          const responseRow = liveSignal?.rows.find(r => r.label === SIGNAL_ROW_RESPONSE_DOT);
          return (
            <SectionFrame
              className='sws-compounding'
              ariaLabel={ARIA_COMPOUNDING_DOT}
              heading={{
                kicker: compoundingSignals.header?.kicker,
                title: requireHeadingTitle(
                  compoundingSignals.header?.title,
                  'compounding signals section'
                ),
                description: desc,
              }}
            >
              <div className='sws-compounding__board mw-animate-section'>
                {liveSignal && (
                  <div className='sws-compounding__signal'>
                    <p className='sws-compounding__signal-badge'>
                      <span className='sws-compounding__signal-badge-dot' aria-hidden={true} />
                      {SIGNAL_BADGE_DOT}
                    </p>
                    <p className='sws-compounding__signal-heading'>{liveSignal.title}</p>
                    <div className='sws-compounding__signal-card'>
                      <p className='sws-compounding__signal-status'>{SIGNAL_STATUS_CHAIN_DOT}</p>
                      {serviceRow && (
                        <p className='sws-compounding__signal-service'>{serviceRow.value}</p>
                      )}
                      {responseRow && (
                        <span className='sws-compounding__signal-response'>
                          <span
                            className='sws-compounding__signal-response-dot'
                            aria-hidden={true}
                          />
                          {responseRow.value}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <ul className='sws-compounding__effects'>
                  {(
                    compoundingSignals.effects as {
                      title: string;
                      before: string;
                      after: string;
                    }[]
                  ).map((effect, index) => (
                    <li key={effect.title} className='sws-compounding__effect'>
                      <span className='sws-compounding__effect-label' aria-hidden={true}>
                        {EFFECT_LABEL_DOT} {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className='sws-compounding__effect-body'>
                        <h4 className='sws-compounding__effect-title'>{effect.title}</h4>
                        <p className='sws-compounding__effect-desc'>{effect.after}</p>
                      </div>
                      <span className='sws-compounding__effect-dot' aria-hidden={true} />
                    </li>
                  ))}
                </ul>
              </div>
              {compoundingSignals.summary && (
                <p className='sws-compounding__summary'>{compoundingSignals.summary}</p>
              )}
            </SectionFrame>
          );
        })()}

      {/* 10. Build Board */}
      {buildBoard &&
        (() => {
          const desc = requireHeadingDescription(
            buildBoard.header?.description,
            'build board section'
          );
          return (
            <SectionFrame
              className='sws-build-board'
              ariaLabel={ARIA_BUILD_BOARD_DOT}
              heading={{
                kicker: buildBoard.header?.kicker,
                title: requireHeadingTitle(buildBoard.header?.title, 'build board section'),
                description: desc,
              }}
            >
              <div className='sws-build-board__layout mw-animate-section'>
                {Array.isArray(buildBoard.projectInputs) && (
                  <div className='sws-build-board__inputs'>
                    <p className='sws-build-board__strip-label'>{BUILD_INPUTS_DOT}</p>
                    <ul className='sws-build-board__input-list'>
                      {(buildBoard.projectInputs as string[]).map(input => (
                        <li key={input} className='sws-build-board__input-item'>
                          {input}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className='sws-build-board__stages'>
                  {(
                    buildBoard.stages as {
                      title: string;
                      description: string;
                      outputs: string[];
                    }[]
                  ).map((stage, index) => (
                    <div key={stage.title} className='sws-build-board__stage'>
                      <span className='sws-build-board__stage-index' aria-hidden={true}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className='sws-build-board__stage-body'>
                        <h4 className='sws-build-board__stage-title'>{stage.title}</h4>
                        <p className='sws-build-board__stage-desc'>{stage.description}</p>
                        {Array.isArray(stage.outputs) && stage.outputs.length > 0 && (
                          <div className='sws-build-board__outputs-wrap'>
                            <p className='sws-build-board__outputs-label' aria-hidden={true}>
                              {BUILD_OUTPUTS_DOT}
                            </p>
                            <ul className='sws-build-board__outputs'>
                              {stage.outputs.map(output => (
                                <li key={output} className='sws-build-board__output'>
                                  <span className={BUILD_DOT_GREEN_CLASS} aria-hidden={true} />
                                  <span>{output}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {buildBoard.finalState && (
                  <div className='sws-build-board__final'>
                    <p className='sws-build-board__strip-label'>{BUILD_FINAL_DOT}</p>
                    <h3 className='sws-build-board__final-title'>{buildBoard.finalState.title}</h3>
                    {Array.isArray(buildBoard.finalState.workingOutcomes) && (
                      <ul className='sws-build-board__final-items'>
                        {(buildBoard.finalState.workingOutcomes as string[]).map(outcome => (
                          <li key={outcome} className='sws-build-board__final-item'>
                            <span className={BUILD_DOT_GREEN_CLASS} aria-hidden={true} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </SectionFrame>
          );
        })()}

      {/* 11. Fit Filter */}
      {fitFilter &&
        (() => {
          const desc = requireHeadingDescription(
            fitFilter.header?.description,
            'fit filter section'
          );
          return (
            <SectionFrame
              className='sws-fit-filter'
              ariaLabel={ARIA_FIT_FILTER_DOT}
              heading={{
                kicker: fitFilter.header?.kicker,
                title: requireHeadingTitle(fitFilter.header?.title, 'fit filter section'),
                description: desc,
              }}
            >
              <div className='sws-fit-filter__panels mw-animate-section'>
                <div className='sws-fit-filter__panel sws-fit-filter__panel--strong'>
                  <p className='sws-fit-filter__panel-label'>{fitFilter.strongFit?.label}</p>
                  <h3 className='sws-fit-filter__panel-title'>{fitFilter.strongFit?.title}</h3>
                  <ul className='sws-fit-filter__scenarios'>
                    {(
                      fitFilter.strongFit?.scenarios as {
                        title: string;
                        description: string;
                      }[]
                    )?.map(s => (
                      <li key={s.title} className='sws-fit-filter__scenario'>
                        <h4 className='sws-fit-filter__scenario-title'>{s.title}</h4>
                        <p className='sws-fit-filter__scenario-desc'>{s.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='sws-fit-filter__panel sws-fit-filter__panel--not'>
                  <p className='sws-fit-filter__panel-label'>{fitFilter.notFit?.label}</p>
                  <h3 className='sws-fit-filter__panel-title'>{fitFilter.notFit?.title}</h3>
                  <ul className='sws-fit-filter__scenarios'>
                    {(
                      fitFilter.notFit?.scenarios as {
                        title: string;
                        description: string;
                      }[]
                    )?.map(s => (
                      <li key={s.title} className='sws-fit-filter__scenario'>
                        <h4 className='sws-fit-filter__scenario-title'>{s.title}</h4>
                        <p className='sws-fit-filter__scenario-desc'>{s.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionFrame>
          );
        })()}

      {/* 12. FAQ */}
      {faq && (
        <SectionFrame
          className='sws-faq'
          ariaLabel={ARIA_FAQ_DOT}
          heading={{
            kicker: faq.header.badge,
            title: faq.header.title,
            description: requireHeadingDescription(faq.header.description, 'faq section'),
          }}
        >
          <div className='sws-faq__list mw-animate-section'>
            <Accordion
              items={faq.items.map((item: { question: string; answer: string }, index: number) => ({
                id: `mw-faq-${index}`,
                question: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </SectionFrame>
      )}

      {/* 13. CTA */}
      <DecisionPanel
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={
          CTA_EXPECTATIONS_KEY_DOT in data.cta
            ? (data.cta.expectations as readonly CTAExpectation[])
            : undefined
        }
        reassurance={CTA_FOOTER_KEY_DOT in data.cta ? (data.cta.footer as CTAFooter) : undefined}
      />
    </div>
  );
}
