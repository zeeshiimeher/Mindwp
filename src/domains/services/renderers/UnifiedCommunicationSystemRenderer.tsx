import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['unified-communication-system'];
  slug: string;
}

const ARIA_HERO_DOT = 'Unified Communication -- page hero';
const ARIA_BOARD_DOT = 'Channel scatter';
const ARIA_PATH_DOT = 'Routing path';
const ARIA_RULES_DOT = 'Routing rules';
const ARIA_BRIDGE_DOT = 'System bridge';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const SOURCE_DOT = 'Channel';
const AGE_DOT = 'Cadence';
const STATE_WORKABLE_DOT = 'Unify';
const STATE_CAUTION_DOT = 'Light touch';
const STATE_LEAVE_DOT = 'Drop';
const TIMING_DOT = 'Stage';
const GOOD_DOT = 'Right path';
const BAD_DOT = 'Wrong path';
const FIT_LABEL_DOT = 'Fit';
const NOT_FIT_LABEL_DOT = 'Not a fit';
const RULE_DOT = 'Rule';
const BRIDGE_UNI_DOT = 'Unified Comm owns';
const BRIDGE_PARENT_DOT = 'CRM & Automation owns';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}
function stateLabel(state: 'workable' | 'caution' | 'leave') {
  if (state === 'workable') return STATE_WORKABLE_DOT;
  if (state === 'caution') return STATE_CAUTION_DOT;
  return STATE_LEAVE_DOT;
}

export function UnifiedCommunicationSystemRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { channelScatter, routingPath, handoffRules, ownershipBridge, fitBoundaries, faq } =
    sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[unified-communication-system] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  const uniRows = ownershipBridge.rows.filter(r => r.belongsTo === 'unified');
  const parentRows = ownershipBridge.rows.filter(r => r.belongsTo === 'parent');

  return (
    <div className='unified-page feat-page'>
      <HeroFrame
        className='unified-hero feat-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={channelScatter.header}
        tone='white'
        className='feat-board'
        ariaLabel={ARIA_BOARD_DOT}
      >
        {(() => {
          requireHeadingTitle(channelScatter.header.title, 'channelScatter');
          return (
            <div className='feat-board__panel'>
              <header className='feat-board__head'>
                <span className='feat-board__title'>{channelScatter.label}</span>
              </header>
              <div className='feat-board__columns'>
                <span>{SOURCE_DOT}</span>
                <span>{AGE_DOT}</span>
                <span>Signal</span>
                <span>State</span>
              </div>
              <ul className='feat-board__list'>
                {channelScatter.sources.map(s => (
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
              <p className='feat-board__closing'>{channelScatter.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={routingPath.header}
        tone='mist'
        className='feat-path'
        ariaLabel={ARIA_PATH_DOT}
      >
        {(() => {
          requireHeadingTitle(routingPath.header.title, 'routingPath');
          return (
            <div className='feat-path__wrap'>
              <ol className='feat-path__steps'>
                {routingPath.steps.map(s => (
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
              <p className='feat-path__closing'>{routingPath.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={handoffRules.header}
        tone='gradient-dark'
        className='feat-ready'
        ariaLabel={ARIA_RULES_DOT}
      >
        {(() => {
          requireHeadingTitle(handoffRules.header.title, 'handoffRules');
          return (
            <div className='feat-ready__wrap'>
              <ul className='feat-ready__list'>
                {handoffRules.rows.map(r => (
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
              <p className='feat-ready__closing'>{handoffRules.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={ownershipBridge.header}
        tone='white'
        className='feat-bridge'
        ariaLabel={ARIA_BRIDGE_DOT}
      >
        {(() => {
          requireHeadingTitle(ownershipBridge.header.title, 'ownershipBridge');
          return (
            <div className='feat-bridge__wrap'>
              <div className='feat-bridge__columns'>
                <article className='feat-bridge__col feat-bridge__col--a'>
                  <header className='feat-bridge__head'>
                    <span className='feat-bridge__label'>{BRIDGE_UNI_DOT}</span>
                  </header>
                  <ul className='feat-bridge__items'>
                    {uniRows.map(r => (
                      <li key={r.id}>
                        <span className='feat-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className='feat-bridge__col feat-bridge__col--b'>
                  <header className='feat-bridge__head'>
                    <span className='feat-bridge__label'>{BRIDGE_PARENT_DOT}</span>
                  </header>
                  <ul className='feat-bridge__items'>
                    {parentRows.map(r => (
                      <li key={r.id}>
                        <span className='feat-bridge__bullet' aria-hidden='true' />
                        {r.point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <p className='feat-bridge__rule'>
                <strong>{RULE_DOT}.</strong> {ownershipBridge.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

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
        className='unified-cta feat-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
