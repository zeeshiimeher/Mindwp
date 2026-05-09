import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// ReputationReviewSystemsRenderer
// Sections: hero · trustGap · reviewTiming · feedbackRoute · monitoringBoard ·
//           localTrustHandoff · fitFilter · faq · cta
// CSS: src/styles/services.css (rep-* classes)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['reputation-review-systems'];
  slug: string;
}

const ARIA_HERO_DOT = 'Reputation and Reviews -- page hero';
const ARIA_TRUST_GAP_DOT = 'Trust gap';
const ARIA_TIMING_DOT = 'Review timing';
const ARIA_ROUTE_DOT = 'Feedback routing';
const ARIA_BOARD_DOT = 'Trust signal board';
const ARIA_BRIDGE_DOT = 'Local trust handoff';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const SJ_JOB_DOT = 'Job';
const SJ_FINISHED_DOT = 'Finished';
const SJ_OUTCOME_DOT = 'Outcome';
const SJ_PROOF_DOT = 'Proof state';

const TIMING_FIT_BEST_DOT = 'Best';
const TIMING_FIT_GOOD_DOT = 'Good';
const TIMING_FIT_AVOID_DOT = 'Avoid';

const ROUTE_RULE_DOT = 'Rule';
const ROUTE_TRIGGER_DOT = 'Trigger';
const ROUTE_STEPS_DOT = 'Path';

const BOARD_CHANNEL_DOT = 'Channel';
const BOARD_SCOPE_DOT = 'Scope';
const BOARD_RECENT_DOT = 'Recent';
const BOARD_RULE_DOT = 'Rule';

const BRIDGE_REVIEWS_DOT = 'Reviews own';
const BRIDGE_LSA_DOT = 'Local SEO owns';
const BRIDGE_RULE_DOT = 'Rule';

const FIT_LABEL_DOT = 'Fit';
const FIT_NOT_LABEL_DOT = 'Not a fit';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}
function requireHeadingDescription(d: string | undefined, s: string) {
  if (!d || !d.trim()) throw new Error(`[${s}] Missing heading description`);
  return d;
}

export function ReputationReviewSystemsRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    trustGap,
    reviewTiming,
    feedbackRoute,
    monitoringBoard,
    localTrustHandoff,
    fitFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[reputation-review-systems] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  const reviewsRows = localTrustHandoff.rows.filter(r => r.belongsTo === 'reviews');
  const lsaRows = localTrustHandoff.rows.filter(r => r.belongsTo === 'lsa');

  return (
    <div className='rep-page'>
      <HeroFrame
        className='rep-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      {/* ── Trust gap ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={trustGap.header}
        tone='white'
        className='rep-trustGap'
        ariaLabel={ARIA_TRUST_GAP_DOT}
      >
        {(() => {
          requireHeadingTitle(trustGap.header.title, 'trustGap');
          return (
            <div className='rep-jobs'>
              <header className='rep-jobs__header'>
                <span className='rep-jobs__title'>{trustGap.label}</span>
                <span className='rep-jobs__note'>{trustGap.note}</span>
              </header>
              <div className='rep-jobs__columns'>
                <span>{SJ_JOB_DOT}</span>
                <span>{SJ_FINISHED_DOT}</span>
                <span>{SJ_OUTCOME_DOT}</span>
                <span>{SJ_PROOF_DOT}</span>
              </div>
              <ul className='rep-jobs__list'>
                {trustGap.jobs.map(j => (
                  <li key={j.id} className={`rep-jobs__row rep-jobs__row--${j.proofState}`}>
                    <span className='rep-jobs__job'>
                      {j.job}
                      <em className='rep-jobs__note-line'>{j.note}</em>
                    </span>
                    <span className='rep-jobs__finished'>{j.finishedOn}</span>
                    <span className='rep-jobs__outcome'>{j.outcome}</span>
                    <span className={`rep-jobs__state rep-jobs__state--${j.proofState}`}>
                      <span className='rep-jobs__dot' aria-hidden='true' />
                      {j.proofState.replace(/-/g, ' ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Review timing ─────────────────────────────────────────────── */}
      <SectionFrame
        heading={reviewTiming.header}
        tone='mist'
        className='rep-reviewTiming'
        ariaLabel={ARIA_TIMING_DOT}
      >
        {(() => {
          requireHeadingDescription(reviewTiming.header.description, 'reviewTiming');
          return (
            <div className='rep-timing'>
              <ol className='rep-timing__line'>
                {reviewTiming.moments.map(m => (
                  <li key={m.id} className={`rep-timing__step rep-timing__step--${m.fit}`}>
                    <span className='rep-timing__stage'>{m.stage}</span>
                    <span className='rep-timing__title'>{m.title}</span>
                    <span className='rep-timing__detail'>{m.detail}</span>
                    <span className={`rep-timing__fit rep-timing__fit--${m.fit}`}>
                      <span className='rep-timing__fit-dot' aria-hidden='true' />
                      {m.fit === 'best'
                        ? TIMING_FIT_BEST_DOT
                        : m.fit === 'good'
                          ? TIMING_FIT_GOOD_DOT
                          : TIMING_FIT_AVOID_DOT}
                    </span>
                  </li>
                ))}
              </ol>
              <p className='rep-timing__closing'>{reviewTiming.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Feedback route (split paths) ──────────────────────────────── */}
      <SectionFrame
        heading={feedbackRoute.header}
        tone='gradient-dark'
        className='rep-feedbackRoute'
        ariaLabel={ARIA_ROUTE_DOT}
      >
        {(() => {
          requireHeadingTitle(feedbackRoute.header.title, 'feedbackRoute');
          return (
            <div className='rep-route'>
              <div className='rep-route__paths'>
                {feedbackRoute.paths.map(p => (
                  <article key={p.id} className={`rep-route__path rep-route__path--${p.variant}`}>
                    <header className='rep-route__head'>
                      <span className='rep-route__label'>{p.label}</span>
                      <h3 className='rep-route__title'>{p.title}</h3>
                    </header>
                    <p className='rep-route__trigger'>
                      <strong>{ROUTE_TRIGGER_DOT}.</strong> {p.trigger}
                    </p>
                    <div className='rep-route__steps-block'>
                      <span className='rep-route__steps-label'>{ROUTE_STEPS_DOT}</span>
                      <ol className='rep-route__steps'>
                        {p.steps.map((s, i) => (
                          <li key={`${p.id}-${i}`}>{s}</li>
                        ))}
                      </ol>
                    </div>
                    <p className='rep-route__closing'>{p.closing}</p>
                  </article>
                ))}
              </div>
              <p className='rep-route__rule'>
                <strong>{ROUTE_RULE_DOT}.</strong> {feedbackRoute.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Monitoring board ──────────────────────────────────────────── */}
      <SectionFrame
        heading={monitoringBoard.header}
        tone='white'
        className='rep-monitoringBoard'
        ariaLabel={ARIA_BOARD_DOT}
      >
        {(() => {
          requireHeadingDescription(monitoringBoard.header.description, 'monitoringBoard');
          return (
            <div className='rep-board'>
              <header className='rep-board__header'>
                <span className='rep-board__title'>{monitoringBoard.label}</span>
              </header>
              <div className='rep-board__columns'>
                <span>{BOARD_CHANNEL_DOT}</span>
                <span>{BOARD_SCOPE_DOT}</span>
                <span>{BOARD_RECENT_DOT}</span>
                <span>State</span>
              </div>
              <ul className='rep-board__list'>
                {monitoringBoard.rows.map(r => (
                  <li key={r.id} className={`rep-board__row rep-board__row--${r.state}`}>
                    <span className='rep-board__channel'>
                      <span
                        className={`rep-board__dot rep-board__dot--${r.state}`}
                        aria-hidden='true'
                      />
                      {r.channel}
                    </span>
                    <span className='rep-board__scope'>{r.scope}</span>
                    <span className='rep-board__recent'>
                      {r.recent}
                      <em className='rep-board__detail'>{r.detail}</em>
                    </span>
                    <span className={`rep-board__state rep-board__state--${r.state}`}>
                      {r.state}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='rep-board__rule'>
                <strong>{BOARD_RULE_DOT}.</strong> {monitoringBoard.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── LSA bridge ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={localTrustHandoff.header}
        tone='mist'
        className='rep-localTrustHandoff'
        ariaLabel={ARIA_BRIDGE_DOT}
      >
        {(() => {
          requireHeadingTitle(localTrustHandoff.header.title, 'localTrustHandoff');
          return (
            <div className='rep-bridge'>
              <div className='rep-bridge__columns'>
                <article className='rep-bridge__col rep-bridge__col--reviews'>
                  <header className='rep-bridge__head'>
                    <span className='rep-bridge__label'>{BRIDGE_REVIEWS_DOT}</span>
                  </header>
                  <ul className='rep-bridge__items'>
                    {reviewsRows.map(r => (
                      <li key={r.id}>
                        <span className='rep-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className='rep-bridge__col rep-bridge__col--lsa'>
                  <header className='rep-bridge__head'>
                    <span className='rep-bridge__label'>{BRIDGE_LSA_DOT}</span>
                  </header>
                  <ul className='rep-bridge__items'>
                    {lsaRows.map(r => (
                      <li key={r.id}>
                        <span className='rep-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <p className='rep-bridge__rule'>
                <strong>{BRIDGE_RULE_DOT}.</strong> {localTrustHandoff.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Fit filter ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={fitFilter.header}
        tone='white'
        className='rep-fitFilter'
        ariaLabel={ARIA_FIT_DOT}
      >
        {(() => {
          requireHeadingTitle(fitFilter.header.title, 'fitFilter');
          return (
            <div className='rep-fit'>
              <div className='rep-fit__columns'>
                {fitFilter.columns.map(col => (
                  <article key={col.id} className={`rep-fit__col rep-fit__col--${col.variant}`}>
                    <header className='rep-fit__head'>
                      <span className='rep-fit__label'>
                        {col.variant === 'fit' ? FIT_LABEL_DOT : FIT_NOT_LABEL_DOT}
                      </span>
                      <h3 className='rep-fit__title'>{col.title}</h3>
                    </header>
                    <ul className='rep-fit__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='rep-fit__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='rep-fit__closing'>{fitFilter.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='mist'
        variant='split'
        className='rep-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='rep-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
