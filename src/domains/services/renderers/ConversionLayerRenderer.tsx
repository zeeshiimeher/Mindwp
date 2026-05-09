import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// ConversionLayerRenderer
// Sections: hero · leakagePattern · decisionSurface · improvementPath ·
//           parentHandoff · fitBoundaries · faq · cta
// CSS: src/styles/services.css (cvl-* classes)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['conversion-layer'];
  slug: string;
}

const ARIA_HERO_DOT = 'Conversion Layer -- page hero';
const ARIA_LEAK_DOT = 'Stall pattern';
const ARIA_DECIDE_DOT = 'Decision surface';
const ARIA_FIX_DOT = 'Improvement path';
const ARIA_BRIDGE_DOT = 'System bridge';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const STAGE_DOT = 'Stage';
const LOSS_LABEL_DOT = 'Loss';
const FIT_LABEL_DOT = 'Fit';
const NOT_FIT_LABEL_DOT = 'Not a fit';
const BEFORE_DOT = 'Before';
const AFTER_DOT = 'After';
const RULE_DOT = 'Rule';
const BRIDGE_CONV_DOT = 'Conversion layer owns';
const BRIDGE_RG_DOT = 'Revenue Growth owns';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}

export function ConversionLayerRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { leakagePattern, decisionSurface, improvementPath, parentHandoff, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[conversion-layer] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  const convRows = parentHandoff.rows.filter(r => r.belongsTo === 'conversion');
  const rgRows = parentHandoff.rows.filter(r => r.belongsTo === 'revenue-growth');

  return (
    <div className='cvl-page'>
      <HeroFrame
        className='cvl-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='warn'
      />

      {/* ── Leak pattern ── */}
      <SectionFrame
        heading={leakagePattern.header}
        tone='white'
        className='cvl-leak'
        ariaLabel={ARIA_LEAK_DOT}
      >
        {(() => {
          requireHeadingTitle(leakagePattern.header.title, 'leakagePattern');
          return (
            <div className='cvl-leak__panel'>
              <header className='cvl-leak__head'>
                <span className='cvl-leak__title'>{leakagePattern.label}</span>
              </header>
              <ol className='cvl-leak__list'>
                {leakagePattern.stalls.map((s, i) => (
                  <li key={s.id} className={`cvl-leak__row cvl-leak__row--${s.loss}`}>
                    <span className='cvl-leak__num'>{String(i + 1).padStart(2, '0')}</span>
                    <span className='cvl-leak__stage'>
                      <span className='cvl-leak__pill'>{STAGE_DOT}</span>
                      {s.stage}
                    </span>
                    <span className='cvl-leak__body'>
                      <span className='cvl-leak__title-line'>{s.title}</span>
                      <span className='cvl-leak__detail'>{s.detail}</span>
                    </span>
                    <span className={`cvl-leak__loss cvl-leak__loss--${s.loss}`}>
                      <span className='cvl-leak__dot' aria-hidden='true' />
                      {LOSS_LABEL_DOT}: {s.loss}
                    </span>
                  </li>
                ))}
              </ol>
              <p className='cvl-leak__closing'>{leakagePattern.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Decision surface ── */}
      <SectionFrame
        heading={decisionSurface.header}
        tone='mist'
        className='cvl-decide'
        ariaLabel={ARIA_DECIDE_DOT}
      >
        {(() => {
          requireHeadingTitle(decisionSurface.header.title, 'decisionSurface');
          return (
            <div className='cvl-decide__wrap'>
              <ol className='cvl-decide__grid'>
                {decisionSurface.questions.map(q => (
                  <li key={q.id} className='cvl-decide__card'>
                    <span className='cvl-decide__num'>{q.num}</span>
                    <h3 className='cvl-decide__q'>{q.question}</h3>
                    <p className='cvl-decide__detail'>{q.detail}</p>
                  </li>
                ))}
              </ol>
              <p className='cvl-decide__closing'>{decisionSurface.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Improvement path (before/after) ── */}
      <SectionFrame
        heading={improvementPath.header}
        tone='gradient-dark'
        className='cvl-fix'
        ariaLabel={ARIA_FIX_DOT}
      >
        {(() => {
          requireHeadingTitle(improvementPath.header.title, 'improvementPath');
          return (
            <div className='cvl-fix__wrap'>
              <header className='cvl-fix__head'>
                <span className='cvl-fix__title'>{improvementPath.label}</span>
              </header>
              <ul className='cvl-fix__list'>
                {improvementPath.fixes.map(f => (
                  <li key={f.id} className='cvl-fix__row'>
                    <span className='cvl-fix__area'>{f.area}</span>
                    <span className='cvl-fix__before'>
                      <span className='cvl-fix__pill cvl-fix__pill--before'>{BEFORE_DOT}</span>
                      {f.before}
                    </span>
                    <span className='cvl-fix__arrow' aria-hidden='true'>
                      →
                    </span>
                    <span className='cvl-fix__after'>
                      <span className='cvl-fix__pill cvl-fix__pill--after'>{AFTER_DOT}</span>
                      {f.after}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='cvl-fix__closing'>{improvementPath.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Parent handoff bridge ── */}
      <SectionFrame
        heading={parentHandoff.header}
        tone='white'
        className='cvl-bridge'
        ariaLabel={ARIA_BRIDGE_DOT}
      >
        {(() => {
          requireHeadingTitle(parentHandoff.header.title, 'parentHandoff');
          return (
            <div className='cvl-bridge__wrap'>
              <div className='cvl-bridge__columns'>
                <article className='cvl-bridge__col cvl-bridge__col--conv'>
                  <header className='cvl-bridge__head'>
                    <span className='cvl-bridge__label'>{BRIDGE_CONV_DOT}</span>
                  </header>
                  <ul className='cvl-bridge__items'>
                    {convRows.map(r => (
                      <li key={r.id}>
                        <span className='cvl-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className='cvl-bridge__col cvl-bridge__col--rg'>
                  <header className='cvl-bridge__head'>
                    <span className='cvl-bridge__label'>{BRIDGE_RG_DOT}</span>
                  </header>
                  <ul className='cvl-bridge__items'>
                    {rgRows.map(r => (
                      <li key={r.id}>
                        <span className='cvl-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <p className='cvl-bridge__rule'>
                <strong>{RULE_DOT}.</strong> {parentHandoff.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Fit ── */}
      <SectionFrame
        heading={fitBoundaries.header}
        tone='mist'
        className='cvl-fit'
        ariaLabel={ARIA_FIT_DOT}
      >
        {(() => {
          requireHeadingTitle(fitBoundaries.header.title, 'fitBoundaries');
          return (
            <div className='cvl-fit__wrap'>
              <div className='cvl-fit__columns'>
                {fitBoundaries.columns.map(col => (
                  <article key={col.id} className={`cvl-fit__col cvl-fit__col--${col.variant}`}>
                    <header className='cvl-fit__head'>
                      <span className='cvl-fit__label'>
                        {col.variant === 'fit' ? FIT_LABEL_DOT : NOT_FIT_LABEL_DOT}
                      </span>
                      <h3 className='cvl-fit__title'>{col.title}</h3>
                    </header>
                    <ul className='cvl-fit__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='cvl-fit__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='cvl-fit__closing'>{fitBoundaries.closing}</p>
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
        className='cvl-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='cvl-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
