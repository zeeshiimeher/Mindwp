import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// AiLeadHandlingRenderer
// Sections: hero · responseGap · channelSurface · handledPath · aiBoundary ·
//           scenarioReadiness · fitFilter · faq · cta
// CSS: src/styles/services.css (aih-* classes)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['ai-lead-handling'];
  slug: string;
}

// ── Label constants (end in _DOT) ────────────────────────────────────────────
const ARIA_HERO_DOT = 'AI Lead Handling -- page hero';
const ARIA_RESPONSE_GAP_DOT = 'Response gap';
const ARIA_CHANNEL_SURFACE_DOT = 'Channel surface';
const ARIA_HANDLED_PATH_DOT = 'Handled path';
const ARIA_AI_BOUNDARY_DOT = 'AI boundary';
const ARIA_SCENARIO_DOT = 'Scenario readiness';
const ARIA_FIT_FILTER_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const QUEUE_HEADING_DOT = 'Live first-contact queue';
const QUEUE_CHANNEL_COL_DOT = 'Channel';
const QUEUE_TIME_COL_DOT = 'Arrived';
const QUEUE_PREVIEW_COL_DOT = 'Preview';
const QUEUE_STATE_COL_DOT = 'State';
const QUEUE_AGE_COL_DOT = 'Waiting';
const DECAY_HEADING_DOT = 'Cost of silence over time';

const CHANNEL_HEADING_DOT = 'Single handling surface';
const CHANNEL_COL_CHANNEL_DOT = 'Channel';
const CHANNEL_COL_ORIGIN_DOT = 'Origin';
const CHANNEL_COL_DETAIL_DOT = 'How it is handled';
const CHANNEL_COL_ROUTE_DOT = 'Routed to';
const SUMMARY_HEADING_DOT = 'Coverage rules';

const PATH_HEADING_DOT = 'From received to routed';
const PATH_NOTE_LABEL_DOT = 'Boundary';

const BOUNDARY_RULE_LABEL_DOT = 'Rule';
const BOUNDARY_GUARD_LABEL_DOT = 'Guard';

const SCENARIO_CONTEXT_DOT = 'Context';
const SCENARIO_BEFORE_DOT = 'Before — typical week';
const SCENARIO_AFTER_DOT = 'After — same week, handled';
const SCENARIO_CONSTRAINT_DOT = 'Constraint';
const SCENARIO_NOTE_DOT = 'Note';

const FIT_LABEL_DOT = 'Fit';
const FIT_NOT_LABEL_DOT = 'Not yet';

// ── Validator-required helpers ───────────────────────────────────────────────
function requireHeadingTitle(title: string | undefined, section: string) {
  if (!title || title.trim().length === 0) {
    throw new Error(`[${section}] Missing heading title`);
  }
  return title;
}

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Missing heading description`);
  }
  return description;
}

export function AiLeadHandlingRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    responseGap,
    channelSurface,
    handledPath,
    aiBoundary,
    scenarioReadiness,
    fitFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error('[ai-lead-handling] Missing service system');
  }
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='aih-page'>
      <HeroFrame
        className='aih-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      {/* ── Response Gap ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={responseGap.header}
        tone='white'
        className='aih-responseGap'
        ariaLabel={ARIA_RESPONSE_GAP_DOT}
      >
        {(() => {
          requireHeadingTitle(responseGap.header.title, 'responseGap');
          return (
            <div className='aih-gap'>
              <div className='aih-queue' aria-label={QUEUE_HEADING_DOT}>
                <header className='aih-queue__header'>
                  <span className='aih-queue__title'>{QUEUE_HEADING_DOT}</span>
                  <span className='aih-queue__note'>{responseGap.queueNote}</span>
                </header>
                <div className='aih-queue__columns'>
                  <span>{QUEUE_CHANNEL_COL_DOT}</span>
                  <span>{QUEUE_TIME_COL_DOT}</span>
                  <span>{QUEUE_PREVIEW_COL_DOT}</span>
                  <span>{QUEUE_STATE_COL_DOT}</span>
                  <span>{QUEUE_AGE_COL_DOT}</span>
                </div>
                <ul className='aih-queue__list'>
                  {responseGap.queue.map(row => (
                    <li key={row.id} className={`aih-queue__row aih-queue__row--${row.state}`}>
                      <span className='aih-queue__channel'>{row.channel}</span>
                      <span className='aih-queue__time'>{row.arrived}</span>
                      <span className='aih-queue__preview'>
                        {row.preview}
                        {row.ownerNote ? (
                          <em className='aih-queue__owner'>{row.ownerNote}</em>
                        ) : null}
                      </span>
                      <span className={`aih-state aih-state--${row.state}`}>
                        <span className='aih-state__dot' aria-hidden='true' />
                        {row.state}
                      </span>
                      <span className='aih-queue__age'>{row.ageMinutes}m</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='aih-decay' aria-label={DECAY_HEADING_DOT}>
                <header className='aih-decay__header'>
                  <span className='aih-decay__title'>{DECAY_HEADING_DOT}</span>
                  <span className='aih-decay__caption'>{responseGap.decayCaption}</span>
                </header>
                <ol className='aih-decay__bars'>
                  {responseGap.decay.map(seg => (
                    <li key={seg.id} className={`aih-decay__bar aih-decay__bar--${seg.intensity}`}>
                      <div className='aih-decay__meta'>
                        <span className='aih-decay__range'>{seg.range}</span>
                        <span className='aih-decay__label'>{seg.label}</span>
                      </div>
                      <span className='aih-decay__outcome'>{seg.outcome}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Channel Surface ────────────────────────────────────────────── */}
      <SectionFrame
        heading={channelSurface.header}
        tone='mist'
        className='aih-channelSurface'
        ariaLabel={ARIA_CHANNEL_SURFACE_DOT}
      >
        {(() => {
          requireHeadingDescription(channelSurface.header.description, 'channelSurface');
          return (
            <div className='aih-channels'>
              <header className='aih-channels__header'>
                <span className='aih-channels__title'>{CHANNEL_HEADING_DOT}</span>
              </header>
              <div className='aih-channels__columns'>
                <span>{CHANNEL_COL_CHANNEL_DOT}</span>
                <span>{CHANNEL_COL_ORIGIN_DOT}</span>
                <span>{CHANNEL_COL_DETAIL_DOT}</span>
                <span>{CHANNEL_COL_ROUTE_DOT}</span>
              </div>
              <ul className='aih-channels__list'>
                {channelSurface.rows.map(row => (
                  <li key={row.id} className={`aih-channels__row aih-channels__row--${row.signal}`}>
                    <span className='aih-channels__channel'>
                      <span className={`aih-signal aih-signal--${row.signal}`} aria-hidden='true' />
                      {row.channel}
                    </span>
                    <span className='aih-channels__origin'>{row.origin}</span>
                    <span className='aih-channels__detail'>{row.detail}</span>
                    <span className='aih-channels__route'>{row.routedTo ?? '—'}</span>
                  </li>
                ))}
              </ul>
              <div className='aih-summary' aria-label={SUMMARY_HEADING_DOT}>
                {channelSurface.summary.map(s => (
                  <div key={s.label} className={`aih-summary__item aih-summary__item--${s.tone}`}>
                    <span className='aih-summary__label'>{s.label}</span>
                    <span className='aih-summary__value'>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Handled Path ──────────────────────────────────────────────── */}
      <SectionFrame
        heading={handledPath.header}
        tone='gradient-dark'
        className='aih-handledPath'
        ariaLabel={ARIA_HANDLED_PATH_DOT}
      >
        {(() => {
          requireHeadingTitle(handledPath.header.title, 'handledPath');
          return (
            <div className='aih-path'>
              <header className='aih-path__header'>
                <span className='aih-path__title'>{PATH_HEADING_DOT}</span>
              </header>
              <ol className='aih-path__steps'>
                {handledPath.steps.map(step => (
                  <li key={step.id} className='aih-path__step'>
                    <span className='aih-path__index'>{step.index}</span>
                    <div className='aih-path__body'>
                      <span className='aih-path__step-title'>{step.title}</span>
                      <span className='aih-path__detail'>{step.detail}</span>
                      <span className='aih-path__signal'>
                        <span className='aih-path__dot' aria-hidden='true' />
                        {step.signal}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className='aih-path__note'>
                <strong>{PATH_NOTE_LABEL_DOT}.</strong> {handledPath.boundaryNote}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── AI Boundary ───────────────────────────────────────────────── */}
      <SectionFrame
        heading={aiBoundary.header}
        tone='white'
        className='aih-aiBoundary'
        ariaLabel={ARIA_AI_BOUNDARY_DOT}
      >
        {(() => {
          requireHeadingDescription(aiBoundary.header.description, 'aiBoundary');
          return (
            <div className='aih-boundary'>
              <div className='aih-boundary__columns'>
                {aiBoundary.columns.map(col => (
                  <article
                    key={col.id}
                    className={`aih-boundary__col aih-boundary__col--${col.scope}`}
                  >
                    <header className='aih-boundary__head'>
                      <span className='aih-boundary__label'>{col.label}</span>
                      <h3 className='aih-boundary__title'>{col.title}</h3>
                    </header>
                    <ul className='aih-boundary__items'>
                      {col.items.map((item, i) => (
                        <li key={`${col.id}-${i}`} className='aih-boundary__item'>
                          <span className='aih-boundary__bullet' aria-hidden='true' />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className='aih-boundary__guard'>
                      <strong>{BOUNDARY_GUARD_LABEL_DOT}.</strong> {col.guard}
                    </p>
                  </article>
                ))}
              </div>
              <p className='aih-boundary__rule'>
                <strong>{BOUNDARY_RULE_LABEL_DOT}.</strong> {aiBoundary.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Scenario / Readiness ──────────────────────────────────────── */}
      <SectionFrame
        heading={scenarioReadiness.header}
        tone='gradient-mist'
        className='aih-scenarioReadiness'
        ariaLabel={ARIA_SCENARIO_DOT}
      >
        {(() => {
          const p = scenarioReadiness.panel;
          return (
            <article className='aih-scenario'>
              <header className='aih-scenario__head'>
                <span className='aih-scenario__label'>{SCENARIO_CONTEXT_DOT}</span>
                <p className='aih-scenario__context'>{p.context}</p>
              </header>
              <div className='aih-scenario__split'>
                <section className='aih-scenario__col aih-scenario__col--before'>
                  <span className='aih-scenario__col-label'>{SCENARIO_BEFORE_DOT}</span>
                  <ul className='aih-scenario__list'>
                    {p.before.map((b, i) => (
                      <li key={`b-${i}`}>{b}</li>
                    ))}
                  </ul>
                </section>
                <section className='aih-scenario__col aih-scenario__col--after'>
                  <span className='aih-scenario__col-label'>{SCENARIO_AFTER_DOT}</span>
                  <ul className='aih-scenario__list'>
                    {p.after.map((a, i) => (
                      <li key={`a-${i}`}>{a}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <footer className='aih-scenario__footer'>
                <p className='aih-scenario__constraint'>
                  <strong>{SCENARIO_CONSTRAINT_DOT}.</strong> {p.constraint}
                </p>
                <p className='aih-scenario__note'>
                  <strong>{SCENARIO_NOTE_DOT}.</strong> {p.note}
                </p>
              </footer>
            </article>
          );
        })()}
      </SectionFrame>

      {/* ── Fit Filter ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={fitFilter.header}
        tone='mist'
        className='aih-fitFilter'
        ariaLabel={ARIA_FIT_FILTER_DOT}
      >
        {(() => {
          requireHeadingTitle(fitFilter.header.title, 'fitFilter');
          return (
            <div className='aih-fit'>
              <div className='aih-fit__columns'>
                {fitFilter.columns.map(col => (
                  <article key={col.id} className={`aih-fit__col aih-fit__col--${col.variant}`}>
                    <header className='aih-fit__head'>
                      <span className='aih-fit__label'>
                        {col.variant === 'fit' ? FIT_LABEL_DOT : FIT_NOT_LABEL_DOT}
                      </span>
                      <h3 className='aih-fit__title'>{col.title}</h3>
                    </header>
                    <ul className='aih-fit__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`} className='aih-fit__item'>
                          <span className='aih-fit__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='aih-fit__closing'>{fitFilter.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='white'
        variant='split'
        className='aih-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='aih-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
