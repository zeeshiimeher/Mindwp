import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { AccordionFAQSection, HeroSplitSection, PrimaryCTASection } from '@/components/sections';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// SmartWebsiteSystemsRenderer — custom flagship renderer
// Sections: hero · leakMap · comparison · handoffBoard · coverageLedger ·
//           environmentRoster · handledPath · proofStory · compoundingSignals ·
//           buildBoard · fitFilter · faq · cta
// =============================================================================

interface Props {
  data: ServicePageDataBySlug[
  | 'smart-website-systems'
  | 'service-pages-vs-one-generic-services-page'];
  slug: string;
}

const LEAK_MAP_HANDLED_LABEL_DOT = 'Handled state';
const LEAK_MAP_SITUATION_LABEL_DOT = 'Situation';
const LEAK_MAP_COST_LABEL_DOT = 'Cost';
const HANDOFF_SOURCE_LABEL_DOT = 'Entry point';
const HANDOFF_CONNECTED_LABEL_DOT = 'Connected system';
const HANDOFF_HANDOFF_DOT = 'Handoff';
const HANDOFF_BOUNDARY_DOT = 'Boundary';
const COVERAGE_INCLUDED_LABEL_DOT = 'Included';
const PROOF_CONTEXT_LABEL_DOT = 'Business context';
const PROOF_CONSTRAINT_LABEL_DOT = 'Constraint';
const PROOF_TYPE_PREFIX_DOT = 'Proof type';
const PROOF_BEFORE_LABEL_DOT = 'Before';
const PROOF_CHANGE_LABEL_DOT = 'What changed';
const PROOF_AFTER_LABEL_DOT = 'After';
const BUILD_INPUTS_LABEL_DOT = 'Project inputs';
const BUILD_OUTPUTS_LABEL_DOT = 'Outputs';
const BUILD_FINAL_LABEL_DOT = 'Working state';
const COMPOUNDING_BEFORE_LABEL_DOT = 'Before';
const COMPOUNDING_AFTER_LABEL_DOT = 'After';
const ROSTER_COL_ENV_DOT = 'Environment';
const ROSTER_COL_TRIGGERS_DOT = 'How enquiries start';
const ROSTER_COL_NEED_DOT = 'What the site must handle';
const ROSTER_COL_SIGNALS_DOT = 'Signal tags';

// aria-label DOT constants
const ARIA_LEAK_MAP_DOT = 'Journey leak map';
const ARIA_LEAK_MAP_STAGES_DOT = 'Enquiry journey stages';
const ARIA_COMPARISON_DOT = 'Comparison';
const ARIA_HANDOFF_DOT = 'System handoff board';
const ARIA_COVERAGE_LEDGER_DOT = 'Operating coverage ledger';
const ARIA_COVERAGE_LEGEND_DOT = 'Coverage legend';
const ARIA_ENVIRONMENT_ROSTER_DOT = 'Operating environment roster';
const ARIA_ENVIRONMENT_TABLE_DOT = 'Business environments';
const ARIA_HANDLED_PATH_DOT = 'Handled enquiry path';
const ARIA_PROOF_STORY_DOT = 'Proof story';
const ARIA_COMPOUNDING_DOT = 'Compounding signals';
const ARIA_BUILD_BOARD_DOT = 'Operating build board';
const ARIA_FIT_FILTER_DOT = 'Fit filter';

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }
  return description;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionsMap = Record<string, any>;

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
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>

          {/* 1. Hero */}
          <HeroSplitSection
            visualType='system-feed'
            kicker={hero.badge}
            heading={{ title: hero.title, description: hero.description }}
            chips={hero.list}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
            visual={hero.visual}
          />

          {/* 2. Journey Leak Map */}
          {leakMap && (() => {
            if (!leakMap.primaryLeak || !Array.isArray(leakMap.leaks)) {
              throw new Error('[leak map section] Invalid data');
            }
            const desc = requireHeadingDescription(leakMap.header?.description, 'leak map section');
            return (
              <section className='rd-section sws-leak-map' aria-label={ARIA_LEAK_MAP_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {leakMap.header?.kicker && (
                      <p className='rd-kicker'>{leakMap.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{leakMap.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  {Array.isArray(leakMap.stages) && leakMap.stages.length > 0 && (
                    <div className='sws-leak-map__spine' aria-label={ARIA_LEAK_MAP_STAGES_DOT}>
                      {leakMap.stages.map((stage: string) => (
                        <div key={stage} className='sws-leak-map__spine-step'>
                          <span className='sws-leak-map__spine-label'>{stage}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className='sws-leak-map__primary'>
                    <p className='sws-leak-map__leak-stage'>{leakMap.primaryLeak.stage}</p>
                    <h3 className='sws-leak-map__primary-title'>{leakMap.primaryLeak.title}</h3>
                    <div className='sws-leak-map__primary-zones'>
                      <div className='sws-leak-map__primary-zone sws-leak-map__primary-zone--leak'>
                        <p className='sws-leak-map__zone-label'>{LEAK_MAP_SITUATION_LABEL_DOT}</p>
                        <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.situation}</p>
                      </div>
                      <div className='sws-leak-map__primary-zone sws-leak-map__primary-zone--cost'>
                        <p className='sws-leak-map__zone-label'>{LEAK_MAP_COST_LABEL_DOT}</p>
                        <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.cost}</p>
                      </div>
                      <div className='sws-leak-map__primary-zone sws-leak-map__primary-zone--handled'>
                        <p className='sws-leak-map__zone-label sws-leak-map__zone-label--handled'>
                          {LEAK_MAP_HANDLED_LABEL_DOT}
                        </p>
                        <p className='sws-leak-map__zone-text'>{leakMap.primaryLeak.handledState}</p>
                      </div>
                    </div>
                  </div>
                  <ul className='sws-leak-map__leaks'>
                    {leakMap.leaks.map(
                      (leak: { stage: string; title: string; situation: string; cost: string; handledState: string }) => (
                        <li key={leak.stage} className='sws-leak-map__leak'>
                          <p className='sws-leak-map__leak-stage-label'>{leak.stage}</p>
                          <h4 className='sws-leak-map__leak-title'>{leak.title}</h4>
                          <p className='sws-leak-map__leak-situation'>{leak.situation}</p>
                          <p className='sws-leak-map__leak-handled'>{leak.handledState}</p>
                        </li>
                      )
                    )}
                  </ul>
                  {leakMap.summary && (
                    <p className='sws-leak-map__summary'>{leakMap.summary}</p>
                  )}
                </div>
              </section>
            );
          })()}

          {/* 3. Comparison */}
          {comparison && (() => {
            if (!comparison.leftState || !comparison.rightState) {
              throw new Error('[comparison section] Invalid data');
            }
            const desc = requireHeadingDescription(comparison.header?.description, 'comparison section');
            return (
              <section className='rd-section sws-comparison' aria-label={ARIA_COMPARISON_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {comparison.header?.kicker && (
                      <p className='rd-kicker'>{comparison.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{comparison.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-comparison__panels'>
                    <div className='sws-comparison__panel sws-comparison__panel--left'>
                      <p className='sws-comparison__state-label'>{comparison.leftState.label}</p>
                      <h3 className='sws-comparison__state-title'>{comparison.leftState.title}</h3>
                      <dl className='sws-comparison__groups'>
                        {(comparison.leftState.groups as { label: string; text: string }[]).map(g => (
                          <div key={g.label} className='sws-comparison__group'>
                            <dt className='sws-comparison__group-label'>{g.label}</dt>
                            <dd className='sws-comparison__group-text'>{g.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className='sws-comparison__panel sws-comparison__panel--right'>
                      <p className='sws-comparison__state-label sws-comparison__state-label--active'>
                        {comparison.rightState.label}
                      </p>
                      <h3 className='sws-comparison__state-title'>{comparison.rightState.title}</h3>
                      <dl className='sws-comparison__groups'>
                        {(comparison.rightState.groups as { label: string; text: string }[]).map(g => (
                          <div key={g.label} className='sws-comparison__group'>
                            <dt className='sws-comparison__group-label'>{g.label}</dt>
                            <dd className='sws-comparison__group-text'>{g.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  {comparison.takeaway && (
                    <p className='sws-comparison__takeaway'>{comparison.takeaway}</p>
                  )}
                </div>
              </section>
            );
          })()}

          {/* 4. System Handoff Board */}
          {handoffBoard && (() => {
            const desc = requireHeadingDescription(handoffBoard.header?.description, 'handoff board section');
            return (
              <section className='rd-section sws-handoff' aria-label={ARIA_HANDOFF_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {handoffBoard.header?.kicker && (
                      <p className='rd-kicker'>{handoffBoard.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{handoffBoard.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-handoff__board'>
                    <aside className='sws-handoff__source'>
                      <p className='sws-handoff__source-label'>{HANDOFF_SOURCE_LABEL_DOT}</p>
                      <h3 className='sws-handoff__source-title'>{handoffBoard.source?.title}</h3>
                      {Array.isArray(handoffBoard.source?.responsibilities) && (
                        <ul className='sws-handoff__source-responsibilities'>
                          {(handoffBoard.source.responsibilities as string[]).map(r => (
                            <li key={r} className='sws-handoff__source-item'>{r}</li>
                          ))}
                        </ul>
                      )}
                      {Array.isArray(handoffBoard.source?.statusLines) && (
                        <ul className='sws-handoff__source-status'>
                          {(handoffBoard.source.statusLines as string[]).map(s => (
                            <li key={s} className='sws-handoff__source-status-line'>{s}</li>
                          ))}
                        </ul>
                      )}
                    </aside>
                    <div className='sws-handoff__rail' aria-hidden='true' />
                    <ul className='sws-handoff__connections'>
                      {(handoffBoard.connections as { targetSystem: string; handoff: string; boundary: string }[]).map(conn => (
                        <li key={conn.targetSystem} className='sws-handoff__module'>
                          <p className='sws-handoff__module-label'>{HANDOFF_CONNECTED_LABEL_DOT}</p>
                          <h4 className='sws-handoff__module-name'>{conn.targetSystem}</h4>
                          <div className='sws-handoff__module-zones'>
                            <div className='sws-handoff__zone'>
                              <span className='sws-handoff__zone-chip sws-handoff__zone-chip--handoff'>{HANDOFF_HANDOFF_DOT}</span>
                              <p className='sws-handoff__zone-text'>{conn.handoff}</p>
                            </div>
                            <div className='sws-handoff__zone sws-handoff__zone--boundary'>
                              <span className='sws-handoff__zone-chip sws-handoff__zone-chip--boundary'>{HANDOFF_BOUNDARY_DOT}</span>
                              <p className='sws-handoff__zone-text'>{conn.boundary}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {handoffBoard.note && (
                    <p className='sws-handoff__note'>{handoffBoard.note}</p>
                  )}
                </div>
              </section>
            );
          })()}

          {/* 5. Operating Coverage Ledger */}
          {coverageLedger && (() => {
            const desc = requireHeadingDescription(coverageLedger.header?.description, 'coverage ledger section');
            return (
              <section className='rd-section sws-coverage-ledger' aria-label={ARIA_COVERAGE_LEDGER_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {coverageLedger.header?.kicker && (
                      <p className='rd-kicker'>{coverageLedger.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{coverageLedger.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-coverage-ledger__layout'>
                    {Array.isArray(coverageLedger.legend) && coverageLedger.legend.length > 0 && (
                      <aside className='sws-coverage-ledger__legend' aria-label={ARIA_COVERAGE_LEGEND_DOT}>
                        <ul className='sws-coverage-ledger__legend-list'>
                          {(coverageLedger.legend as string[]).map(item => (
                            <li key={item} className='sws-coverage-ledger__legend-item'>{item}</li>
                          ))}
                        </ul>
                      </aside>
                    )}
                    <div className='sws-coverage-ledger__bands'>
                      {(coverageLedger.bands as { name: string; purpose: string; includedItems: string[]; note?: string }[]).map(band => (
                        <div key={band.name} className='sws-coverage-ledger__band'>
                          <div className='sws-coverage-ledger__band-head'>
                            <h3 className='sws-coverage-ledger__band-name'>{band.name}</h3>
                            <p className='sws-coverage-ledger__band-purpose'>{band.purpose}</p>
                          </div>
                          <ul className='sws-coverage-ledger__band-items'>
                            <li className='sws-coverage-ledger__band-item-label' aria-hidden='true'>
                              {COVERAGE_INCLUDED_LABEL_DOT}
                            </li>
                            {band.includedItems.map(item => (
                              <li key={item} className='sws-coverage-ledger__band-item'>
                                <span className='rd-dot rd-dot--info' aria-hidden='true' />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {band.note && (
                            <p className='sws-coverage-ledger__band-note'>{band.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {coverageLedger.closingStatement && (
                    <p className='sws-coverage-ledger__closing'>{coverageLedger.closingStatement}</p>
                  )}
                </div>
              </section>
            );
          })()}

          {/* 6. Operating Environment Roster */}
          {environmentRoster && (() => {
            const desc = requireHeadingDescription(environmentRoster.header?.description, 'environment roster section');
            return (
              <section className='rd-section sws-environment-roster' aria-label={ARIA_ENVIRONMENT_ROSTER_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {environmentRoster.header?.kicker && (
                      <p className='rd-kicker'>{environmentRoster.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{environmentRoster.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-environment-roster__table' role='table' aria-label={ARIA_ENVIRONMENT_TABLE_DOT}>
                    <div className='sws-environment-roster__header' role='row'>
                      <span className='sws-environment-roster__col-head' role='columnheader'>{ROSTER_COL_ENV_DOT}</span>
                      <span className='sws-environment-roster__col-head' role='columnheader'>{ROSTER_COL_TRIGGERS_DOT}</span>
                      <span className='sws-environment-roster__col-head' role='columnheader'>{ROSTER_COL_NEED_DOT}</span>
                      <span className='sws-environment-roster__col-head' role='columnheader'>{ROSTER_COL_SIGNALS_DOT}</span>
                    </div>
                    {(environmentRoster.rows as { name: string; enquiryTriggers: string; operationalNeed: string; outcomeSignals: string[]; scenario?: string }[]).map((row, index) => (
                      <div key={row.name} className='sws-environment-roster__row' role='row'>
                        <div className='sws-environment-roster__cell sws-environment-roster__cell--env' role='cell'>
                          <span className='sws-environment-roster__index' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
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
                              <li key={signal} className='sws-environment-roster__tag'>{signal}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })()}

          {/* 7. Handled Enquiry Path */}
          {handledPath && (() => {
            const desc = requireHeadingDescription(handledPath.header?.description, 'handled path section');
            return (
              <section className='rd-section sws-handled-path' aria-label={ARIA_HANDLED_PATH_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {handledPath.header?.kicker && (
                      <p className='rd-kicker'>{handledPath.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{handledPath.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <ol className='sws-handled-path__stages'>
                    {(handledPath.stages as { name: string; title: string; description: string; proofPoints: string[]; stateLabel: string; emphasis?: boolean }[]).map((stage, index) => (
                      <li key={stage.name} className={`sws-handled-path__stage${stage.emphasis ? ' sws-handled-path__stage--lead' : ''}`}>
                        <div className='sws-handled-path__stage-head'>
                          <span className='sws-handled-path__index' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
                          <p className='sws-handled-path__state-label'>{stage.stateLabel}</p>
                        </div>
                        <div className='sws-handled-path__content'>
                          <h3 className='sws-handled-path__name'>{stage.name}</h3>
                          <p className='sws-handled-path__title'>{stage.title}</p>
                          <p className='sws-handled-path__desc'>{stage.description}</p>
                          {Array.isArray(stage.proofPoints) && stage.proofPoints.length > 0 && (
                            <ul className='sws-handled-path__proof'>
                              {stage.proofPoints.map(point => (
                                <li key={point} className='sws-handled-path__proof-item'>
                                  <span className='rd-dot rd-dot--info' aria-hidden='true' />
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
                </div>
              </section>
            );
          })()}

          {/* 8. Proof Story */}
          {proofStory && (() => {
            const before = proofStory.before;
            const change = proofStory.change;
            const after = proofStory.after;
            if (!before || !change || !after) {
              throw new Error('[proof section] Invalid data');
            }
            const desc = requireHeadingDescription(proofStory.header?.description, 'proof section');
            return (
              <section className='rd-section sws-proof-story' aria-label={ARIA_PROOF_STORY_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {proofStory.header?.kicker && (
                      <p className='rd-kicker'>{proofStory.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{proofStory.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-proof-story__layout'>
                    <aside className='sws-proof-story__context'>
                      <p className='sws-proof-story__context-label'>{PROOF_CONTEXT_LABEL_DOT}</p>
                      <p className='sws-proof-story__context-business'>{proofStory.context?.business}</p>
                      <p className='sws-proof-story__context-situation'>{proofStory.context?.situation}</p>
                      {proofStory.context?.constraint && (
                        <div className='sws-proof-story__context-constraint'>
                          <p className='sws-proof-story__constraint-label'>{PROOF_CONSTRAINT_LABEL_DOT}</p>
                          <p className='sws-proof-story__constraint-text'>{proofStory.context.constraint}</p>
                        </div>
                      )}
                      {proofStory.proofType && (
                        <div className='sws-proof-story__proof-type'>
                          <p className='sws-proof-story__proof-type-label'>{PROOF_TYPE_PREFIX_DOT}</p>
                          <p className='sws-proof-story__proof-type-value'>{proofStory.proofType}</p>
                        </div>
                      )}
                    </aside>
                    <div className='sws-proof-story__acts'>
                      <div className='sws-proof-story__act sws-proof-story__act--before'>
                        <p className='sws-proof-story__act-label'>{PROOF_BEFORE_LABEL_DOT}</p>
                        <h3 className='sws-proof-story__act-title'>{before.title}</h3>
                        <p className='sws-proof-story__act-body'>{before.body}</p>
                        {Array.isArray(before.bullets) && before.bullets.length > 0 && (
                          <ul className='sws-proof-story__act-bullets'>
                            {(before.bullets as string[]).map(b => (
                              <li key={b} className='sws-proof-story__act-bullet'>
                                <span className='rd-dot rd-dot--info' aria-hidden='true' />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className='sws-proof-story__act sws-proof-story__act--change'>
                        <p className='sws-proof-story__act-label'>{PROOF_CHANGE_LABEL_DOT}</p>
                        <h3 className='sws-proof-story__act-title'>{change.title}</h3>
                        <p className='sws-proof-story__act-body'>{change.body}</p>
                        {Array.isArray(change.bullets) && change.bullets.length > 0 && (
                          <ul className='sws-proof-story__act-bullets'>
                            {(change.bullets as string[]).map(b => (
                              <li key={b} className='sws-proof-story__act-bullet'>
                                <span className='rd-dot rd-dot--info' aria-hidden='true' />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className='sws-proof-story__act sws-proof-story__act--after'>
                        <p className='sws-proof-story__act-label'>{PROOF_AFTER_LABEL_DOT}</p>
                        <h3 className='sws-proof-story__act-title'>{after.title}</h3>
                        <p className='sws-proof-story__act-body'>{after.body}</p>
                        {Array.isArray(after.bullets) && after.bullets.length > 0 && (
                          <ul className='sws-proof-story__act-bullets'>
                            {(after.bullets as string[]).map(b => (
                              <li key={b} className='sws-proof-story__act-bullet'>
                                <span className='rd-dot rd-dot--info' aria-hidden='true' />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })()}

          {/* 9. Compounding Signals */}
          {compoundingSignals && (() => {
            const desc = requireHeadingDescription(compoundingSignals.header?.description, 'compounding signals section');
            return (
              <section className='rd-section sws-compounding' aria-label={ARIA_COMPOUNDING_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {compoundingSignals.header?.kicker && (
                      <p className='rd-kicker'>{compoundingSignals.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{compoundingSignals.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-compounding__board'>
                    {compoundingSignals.liveSignal && (
                      <div className='sws-compounding__live'>
                        <div className='sws-compounding__receipt'>
                          <p className='sws-compounding__receipt-title'>{compoundingSignals.liveSignal.title}</p>
                          <ul className='sws-compounding__receipt-rows'>
                            {(compoundingSignals.liveSignal.rows as { label: string; value: string; status: string }[]).map(row => (
                              <li key={row.label} className='sws-compounding__receipt-row'>
                                <span className={`rd-dot rd-dot--${row.status}`} aria-hidden='true' />
                                <span className='sws-compounding__receipt-label'>{row.label}</span>
                                <span className='sws-compounding__receipt-value'>{row.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    <ul className='sws-compounding__effects'>
                      {(compoundingSignals.effects as { title: string; before: string; after: string }[]).map((effect, index) => (
                        <li key={effect.title} className='sws-compounding__effect'>
                          <span className='sws-compounding__effect-index' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
                          <div className='sws-compounding__effect-body'>
                            <h4 className='sws-compounding__effect-title'>{effect.title}</h4>
                            <div className='sws-compounding__effect-states'>
                              <div className='sws-compounding__effect-state sws-compounding__effect-state--before'>
                                <span className='sws-compounding__state-label'>{COMPOUNDING_BEFORE_LABEL_DOT}</span>
                                <p className='sws-compounding__state-text'>{effect.before}</p>
                              </div>
                              <div className='sws-compounding__effect-state sws-compounding__effect-state--after'>
                                <span className='sws-compounding__state-label'>{COMPOUNDING_AFTER_LABEL_DOT}</span>
                                <p className='sws-compounding__state-text'>{effect.after}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {compoundingSignals.summary && (
                    <p className='sws-compounding__summary'>{compoundingSignals.summary}</p>
                  )}
                </div>
              </section>
            );
          })()}

          {/* 10. Operating Build Board */}
          {buildBoard && (() => {
            const desc = requireHeadingDescription(buildBoard.header?.description, 'build board section');
            return (
              <section className='rd-section sws-build-board' aria-label={ARIA_BUILD_BOARD_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {buildBoard.header?.kicker && (
                      <p className='rd-kicker'>{buildBoard.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{buildBoard.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-build-board__layout'>
                    {Array.isArray(buildBoard.projectInputs) && (
                      <div className='sws-build-board__inputs'>
                        <p className='sws-build-board__strip-label'>{BUILD_INPUTS_LABEL_DOT}</p>
                        <ul className='sws-build-board__input-list'>
                          {(buildBoard.projectInputs as string[]).map(input => (
                            <li key={input} className='sws-build-board__input-item'>{input}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className='sws-build-board__stages'>
                      {(buildBoard.stages as { title: string; description: string; outputs: string[] }[]).map((stage, index) => (
                        <div key={stage.title} className='sws-build-board__stage'>
                          <span className='sws-build-board__stage-index' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
                          <div className='sws-build-board__stage-body'>
                            <h4 className='sws-build-board__stage-title'>{stage.title}</h4>
                            <p className='sws-build-board__stage-desc'>{stage.description}</p>
                            {Array.isArray(stage.outputs) && stage.outputs.length > 0 && (
                              <div className='sws-build-board__outputs-wrap'>
                                <p className='sws-build-board__outputs-label' aria-hidden='true'>{BUILD_OUTPUTS_LABEL_DOT}</p>
                                <ul className='sws-build-board__outputs'>
                                  {stage.outputs.map(output => (
                                    <li key={output} className='sws-build-board__output'>
                                      <span className='rd-dot rd-dot--info' aria-hidden='true' />
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
                        <p className='sws-build-board__strip-label'>{BUILD_FINAL_LABEL_DOT}</p>
                        <h3 className='sws-build-board__final-title'>{buildBoard.finalState.title}</h3>
                        {Array.isArray(buildBoard.finalState.workingOutcomes) && (
                          <ul className='sws-build-board__final-items'>
                            {(buildBoard.finalState.workingOutcomes as string[]).map(outcome => (
                              <li key={outcome} className='sws-build-board__final-item'>
                                <span className='rd-dot rd-dot--good' aria-hidden='true' />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })()}

          {/* 11. Fit Filter */}
          {fitFilter && (() => {
            const desc = requireHeadingDescription(fitFilter.header?.description, 'fit filter section');
            return (
              <section className='rd-section sws-fit-filter' aria-label={ARIA_FIT_FILTER_DOT}>
                <div className='rd-container'>
                  <header className='rd-section-head'>
                    {fitFilter.header?.kicker && (
                      <p className='rd-kicker'>{fitFilter.header.kicker}</p>
                    )}
                    <h2 className='rd-heading-2'>{fitFilter.header?.title}</h2>
                    <p className='rd-lead'>{desc}</p>
                  </header>
                  <div className='sws-fit-filter__panels'>
                    <div className='sws-fit-filter__panel sws-fit-filter__panel--strong'>
                      <p className='sws-fit-filter__panel-label'>{fitFilter.strongFit?.label}</p>
                      <h3 className='sws-fit-filter__panel-title'>{fitFilter.strongFit?.title}</h3>
                      <ul className='sws-fit-filter__scenarios'>
                        {(fitFilter.strongFit?.scenarios as { title: string; description: string }[])?.map(s => (
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
                        {(fitFilter.notFit?.scenarios as { title: string; description: string }[])?.map(s => (
                          <li key={s.title} className='sws-fit-filter__scenario'>
                            <h4 className='sws-fit-filter__scenario-title'>{s.title}</h4>
                            <p className='sws-fit-filter__scenario-desc'>{s.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })()}

          {/* 12. FAQ */}
          {faq && (
            <AccordionFAQSection
              variant='single-column'
              tone='soft'
              heading={{
                kicker: faq.header.badge,
                title: faq.header.title,
                description: requireHeadingDescription(faq.header.description, 'faq section'),
              }}
              items={faq.items.map(
                (item: { question: string; answer: string }, index: number) => ({
                  id: `smart-websites-faq-${index}`,
                  question: item.question,
                  answer: item.answer,
                })
              )}
            />
          )}

          {/* 13. Primary CTA */}
          <PrimaryCTASection
            variant='soft-panel'
            heading={data.cta.heading}
            actions={data.cta.actions}
          />

        </main>
      </ErrorBoundary>
    </>
  );
}
