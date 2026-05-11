import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// RevenueGrowthRenderer
// Shared .feat-* CSS pattern + .rev-page accent.
// Sections: hero · revenueLeakMap · recoveryPath · systemBridges ·
//           fitBoundaries · faq · cta
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['revenue-growth'];
  slug: string;
}

const ARIA_HERO_DOT = 'Revenue Growth -- page hero';
const ARIA_BOARD_DOT = 'Revenue leak map';
const ARIA_PATH_DOT = 'Recovery rhythm';
const ARIA_BRIDGE_DOT = 'System bridges';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const SOURCE_DOT = 'Source';
const SIGNAL_DOT = 'Signal';
const EXPOSURE_DOT = 'Exposure';
const STATE_DOT = 'State';
const STATE_WORKABLE_DOT = 'Workable';
const STATE_CAUTION_DOT = 'Caution';
const STATE_LEAVE_DOT = 'Leave alone';
const TIMING_DOT = 'Stage';
const FIT_LABEL_DOT = 'Fit';
const NOT_FIT_LABEL_DOT = 'Not a fit';
const RULE_DOT = 'Rule';
const BRIDGE_REV_DOT = 'Revenue Growth owns';
const BRIDGE_OTHER_DOT = 'Other systems own';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}

function stateLabel(state: 'workable' | 'caution' | 'leave') {
  if (state === 'workable') return STATE_WORKABLE_DOT;
  if (state === 'caution') return STATE_CAUTION_DOT;
  return STATE_LEAVE_DOT;
}

export function RevenueGrowthRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { revenueLeakMap, recoveryPath, systemBridges, fitBoundaries, faq } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[revenue-growth] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  const revRows = systemBridges.rows.filter(r => r.belongsTo === 'revenue-growth');
  const otherRows = systemBridges.rows.filter(r => r.belongsTo === 'other-systems');

  return (
    <div className='rev-page feat-page'>
      <HeroFrame
        className='rev-hero feat-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      {/* ── Revenue leak map ── */}
      <SectionFrame
        heading={revenueLeakMap.header}
        tone='white'
        className='feat-board'
        ariaLabel={ARIA_BOARD_DOT}
      >
        {(() => {
          requireHeadingTitle(revenueLeakMap.header.title, 'revenueLeakMap');
          return (
            <div className='feat-board__panel'>
              <header className='feat-board__head'>
                <span className='feat-board__title'>{revenueLeakMap.label}</span>
              </header>
              <div className='feat-board__columns'>
                <span>{SOURCE_DOT}</span>
                <span>{SIGNAL_DOT}</span>
                <span>{EXPOSURE_DOT}</span>
                <span>{STATE_DOT}</span>
              </div>
              <ul className='feat-board__list'>
                {revenueLeakMap.rows.map(r => (
                  <li key={r.id} className={`feat-board__row feat-board__row--${r.state}`}>
                    <span className='feat-board__source'>
                      <span
                        className={`feat-board__dot feat-board__dot--${r.state}`}
                        aria-hidden='true'
                      />
                      {r.origin}
                    </span>
                    <span className='feat-board__age'>{r.signal}</span>
                    <span className='feat-board__signal'>{r.exposure}</span>
                    <span className={`feat-board__state feat-board__state--${r.state}`}>
                      {stateLabel(r.state)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='feat-board__closing'>{revenueLeakMap.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Recovery rhythm ── */}
      <SectionFrame
        heading={recoveryPath.header}
        tone='mist'
        className='feat-path'
        ariaLabel={ARIA_PATH_DOT}
      >
        {(() => {
          requireHeadingTitle(recoveryPath.header.title, 'recoveryPath');
          return (
            <div className='feat-path__wrap'>
              <ol className='feat-path__steps'>
                {recoveryPath.steps.map(s => (
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
              <p className='feat-path__closing'>{recoveryPath.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── System bridges ── */}
      <SectionFrame
        heading={systemBridges.header}
        tone='white'
        className='rev-coord'
        ariaLabel={ARIA_BRIDGE_DOT}
      >
        {(() => {
          requireHeadingTitle(systemBridges.header.title, 'systemBridges');
          return (
            <div className='rev-coord__wrap'>
              <article className='rev-coord__hub'>
                <span className='rev-coord__hub-tag'>{BRIDGE_REV_DOT}</span>
                <h3 className='rev-coord__hub-title'>Coordinates the recovery loop</h3>
                <ul className='rev-coord__hub-list'>
                  {revRows.map(r => (
                    <li key={r.id} className='rev-coord__hub-item'>
                      <span className='rev-coord__hub-mark' aria-hidden='true'>
                        +
                      </span>
                      {r.point}
                    </li>
                  ))}
                </ul>
              </article>
              <div className='rev-coord__satellites'>
                <span className='rev-coord__satellites-label'>{BRIDGE_OTHER_DOT}</span>
                <ul className='rev-coord__sat-list'>
                  {otherRows.map(r => (
                    <li key={r.id} className='rev-coord__sat'>
                      <span className='rev-coord__sat-arrow' aria-hidden='true'>
                        →
                      </span>
                      <span className='rev-coord__sat-system'>{r.systemTag ?? ''}</span>
                      <span className='rev-coord__sat-role'>{r.point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='rev-coord__rule'>
                <strong>{RULE_DOT}.</strong> {systemBridges.rule}
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
        className='rev-cta feat-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
