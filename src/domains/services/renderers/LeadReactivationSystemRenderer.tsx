import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// LeadReactivationSystemRenderer
// Shared .feat-* CSS pattern + .reactivate-page accent.
// Sections: hero · dormantLeadMap · reactivationPath · dataReadiness ·
//           handoffBack · fitBoundaries · faq · cta
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['lead-reactivation-system'];
  slug: string;
}

const ARIA_HERO_DOT = 'Lead Reactivation -- page hero';
const ARIA_BOARD_DOT = 'Dormant inventory';
const ARIA_PATH_DOT = 'Reactivation sequence';
const ARIA_READY_DOT = 'Readiness check';
const ARIA_BRIDGE_DOT = 'System bridge';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const SOURCE_DOT = 'Source';
const AGE_DOT = 'Age';
const STATE_WORKABLE_DOT = 'Workable';
const STATE_CAUTION_DOT = 'Caution';
const STATE_LEAVE_DOT = 'Leave alone';
const TIMING_DOT = 'Timing';
const GOOD_DOT = 'Good';
const BAD_DOT = 'Concern';
const FIT_LABEL_DOT = 'Fit';
const NOT_FIT_LABEL_DOT = 'Not a fit';
const RULE_DOT = 'Rule';
const BRIDGE_REACT_DOT = 'Reactivation owns';
const BRIDGE_CRM_DOT = 'CRM owns';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}

function stateLabel(state: 'workable' | 'caution' | 'leave') {
  if (state === 'workable') return STATE_WORKABLE_DOT;
  if (state === 'caution') return STATE_CAUTION_DOT;
  return STATE_LEAVE_DOT;
}

export function LeadReactivationSystemRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { dormantLeadMap, reactivationPath, dataReadiness, handoffBack, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[lead-reactivation-system] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  const reactRows = handoffBack.rows.filter(r => r.belongsTo === 'reactivation');
  const crmRows = handoffBack.rows.filter(r => r.belongsTo === 'crm');

  return (
    <div className='reactivate-page feat-page'>
      <HeroFrame
        className='reactivate-hero feat-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      {/* ── Dormant inventory ── */}
      <SectionFrame
        heading={dormantLeadMap.header}
        tone='white'
        className='feat-board'
        ariaLabel={ARIA_BOARD_DOT}
      >
        {(() => {
          requireHeadingTitle(dormantLeadMap.header.title, 'dormantLeadMap');
          return (
            <div className='feat-board__panel'>
              <header className='feat-board__head'>
                <span className='feat-board__title'>{dormantLeadMap.label}</span>
              </header>
              <div className='feat-board__columns'>
                <span>{SOURCE_DOT}</span>
                <span>{AGE_DOT}</span>
                <span>Signal</span>
                <span>State</span>
              </div>
              <ul className='feat-board__list'>
                {dormantLeadMap.sources.map(s => (
                  <li key={s.id} className={`feat-board__row feat-board__row--${s.state}`}>
                    <span className='feat-board__source'>
                      <span
                        className={`feat-board__dot feat-board__dot--${s.state}`}
                        aria-hidden='true'
                      />
                      {s.origin}
                    </span>
                    <span className='feat-board__age'>{s.ageBand}</span>
                    <span className='feat-board__signal'>{s.signal}</span>
                    <span className={`feat-board__state feat-board__state--${s.state}`}>
                      {stateLabel(s.state)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='feat-board__closing'>{dormantLeadMap.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Reactivation sequence ── */}
      <SectionFrame
        heading={reactivationPath.header}
        tone='mist'
        className='feat-path'
        ariaLabel={ARIA_PATH_DOT}
      >
        {(() => {
          requireHeadingTitle(reactivationPath.header.title, 'reactivationPath');
          return (
            <div className='feat-path__wrap'>
              <ol className='feat-path__steps'>
                {reactivationPath.steps.map(s => (
                  <li key={s.id} className='feat-path__step'>
                    <span className='feat-path__num'>{s.num}</span>
                    <span className='feat-path__timing'>
                      <span className='feat-path__pill'>{TIMING_DOT}</span>
                      {s.timing}
                    </span>
                    <span className='feat-path__title'>{s.title}</span>
                    <span className='feat-path__detail'>{s.detail}</span>
                  </li>
                ))}
              </ol>
              <p className='feat-path__closing'>{reactivationPath.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Readiness ── */}
      <SectionFrame
        heading={dataReadiness.header}
        tone='gradient-dark'
        className='feat-ready'
        ariaLabel={ARIA_READY_DOT}
      >
        {(() => {
          requireHeadingTitle(dataReadiness.header.title, 'dataReadiness');
          return (
            <div className='feat-ready__wrap'>
              <ul className='feat-ready__list'>
                {dataReadiness.rows.map(r => (
                  <li key={r.id} className='feat-ready__row'>
                    <span className='feat-ready__criterion'>{r.criterion}</span>
                    <span className='feat-ready__good'>
                      <span className='feat-ready__pill feat-ready__pill--good'>{GOOD_DOT}</span>
                      {r.good}
                    </span>
                    <span className='feat-ready__bad'>
                      <span className='feat-ready__pill feat-ready__pill--bad'>{BAD_DOT}</span>
                      {r.bad}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='feat-ready__closing'>{dataReadiness.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Bridge ── */}
      <SectionFrame
        heading={handoffBack.header}
        tone='white'
        className='feat-bridge'
        ariaLabel={ARIA_BRIDGE_DOT}
      >
        {(() => {
          requireHeadingTitle(handoffBack.header.title, 'handoffBack');
          return (
            <div className='feat-bridge__wrap'>
              <div className='feat-bridge__columns'>
                <article className='feat-bridge__col feat-bridge__col--a'>
                  <header className='feat-bridge__head'>
                    <span className='feat-bridge__label'>{BRIDGE_REACT_DOT}</span>
                  </header>
                  <ul className='feat-bridge__items'>
                    {reactRows.map(r => (
                      <li key={r.id}>
                        <span className='feat-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className='feat-bridge__col feat-bridge__col--b'>
                  <header className='feat-bridge__head'>
                    <span className='feat-bridge__label'>{BRIDGE_CRM_DOT}</span>
                  </header>
                  <ul className='feat-bridge__items'>
                    {crmRows.map(r => (
                      <li key={r.id}>
                        <span className='feat-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <p className='feat-bridge__rule'>
                <strong>{RULE_DOT}.</strong> {handoffBack.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Fit ── */}
      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='feat-fit'
        ariaLabel={ARIA_FIT_DOT}
      >
        {(() => {
          requireHeadingTitle(fitBoundaries.header.title, 'fitBoundaries');
          return (
            <div className='feat-fit__wrap'>
              <div className='feat-fit__columns'>
                {fitBoundaries.columns.map(col => (
                  <article key={col.id} className={`feat-fit__col feat-fit__col--${col.variant}`}>
                    <header className='feat-fit__head'>
                      <span className='feat-fit__label'>
                        {col.variant === 'fit' ? FIT_LABEL_DOT : NOT_FIT_LABEL_DOT}
                      </span>
                      <h3 className='feat-fit__title'>{col.title}</h3>
                    </header>
                    <ul className='feat-fit__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='feat-fit__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='feat-fit__closing'>{fitBoundaries.closing}</p>
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
        className='feat-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='reactivate-cta feat-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
