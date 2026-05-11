import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// CRMAutomationRenderer
// Sections: hero · ownershipGap · leadOwnershipBoard · followUpPath ·
//           statusVisibility · handoffBoundaries · assumptionsPanel ·
//           readinessFilter · faq · cta
// CSS: src/styles/services.css (crm-* classes)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['crm-infrastructure-implementation'];
  slug: string;
}

const ARIA_HERO_DOT = 'CRM and Automation -- page hero';
const ARIA_OWNERSHIP_GAP_DOT = 'Ownership gap';
const ARIA_BOARD_DOT = 'Lead ownership board';
const ARIA_FOLLOWUP_DOT = 'Follow-up path';
const ARIA_STATUS_DOT = 'Status visibility';
const ARIA_BOUNDARY_DOT = 'CRM boundaries';
const ARIA_ASSUMPTIONS_DOT = 'Existing tool assumptions';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const LEAK_NAME_DOT = 'Lead';
const LEAK_ARRIVED_DOT = 'Arrived';
const LEAK_CHANNEL_DOT = 'Channel';
const LEAK_STATE_DOT = 'State';
const LEAK_AGE_DOT = 'Idle';

const BOARD_RULE_LABEL_DOT = 'Rule';
const BOARD_OWNER_LABEL_DOT = 'Owner';
const BOARD_OPEN_LABEL_DOT = 'Open';

const PATH_TRIGGER_DOT = 'Trigger';
const PATH_ACTION_DOT = 'What happens';
const PATH_OWNER_DOT = 'Owner sees';
const PATH_BOUNDARY_DOT = 'Boundary';

const STATUS_TRIGGER_DOT = 'Triggers';

const BOUNDARY_GUARD_DOT = 'Guard';
const BOUNDARY_RULE_DOT = 'Rule';

const ASSUMPTION_SITUATION_DOT = 'You already have';
const ASSUMPTION_READING_DOT = 'How we read it';
const ASSUMPTION_NEXT_DOT = 'What we do next';

const FIT_LABEL_DOT = 'Fit';
const FIT_NOT_LABEL_DOT = 'Not yet';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}
function requireHeadingDescription(d: string | undefined, s: string) {
  if (!d || !d.trim()) throw new Error(`[${s}] Missing heading description`);
  return d;
}

export function CRMAutomationRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const {
    ownershipGap,
    leadOwnershipBoard,
    followUpPath,
    statusVisibility,
    handoffBoundaries,
    assumptionsPanel,
    readinessFilter,
    faq,
  } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[crm-infrastructure-implementation] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='crm-page'>
      <HeroFrame
        className='crm-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      {/* ── Ownership gap ────────────────────────────────────────────── */}
      <SectionFrame
        heading={ownershipGap.header}
        tone='white'
        className='crm-ownershipGap'
        ariaLabel={ARIA_OWNERSHIP_GAP_DOT}
      >
        {(() => {
          requireHeadingTitle(ownershipGap.header.title, 'ownershipGap');
          return (
            <div className='crm-leak'>
              <header className='crm-leak__header'>
                <span className='crm-leak__title'>{ownershipGap.leakLabel}</span>
                <span className='crm-leak__note'>{ownershipGap.leakNote}</span>
              </header>
              <div className='crm-leak__columns'>
                <span>{LEAK_NAME_DOT}</span>
                <span>{LEAK_ARRIVED_DOT}</span>
                <span>{LEAK_CHANNEL_DOT}</span>
                <span>{LEAK_STATE_DOT}</span>
                <span>{LEAK_AGE_DOT}</span>
              </div>
              <ul className='crm-leak__list'>
                {ownershipGap.rows.map(r => (
                  <li key={r.id} className={`crm-leak__row crm-leak__row--${r.state}`}>
                    <span className='crm-leak__name'>
                      {r.name}
                      <em className='crm-leak__note-line'>{r.ownerNote}</em>
                    </span>
                    <span className='crm-leak__arrived'>{r.arrived}</span>
                    <span className='crm-leak__channel'>{r.channel}</span>
                    <span className={`crm-leak__state crm-leak__state--${r.state}`}>
                      <span className='crm-leak__dot' aria-hidden='true' />
                      {r.state.replace(/-/g, ' ')}
                    </span>
                    <span className='crm-leak__age'>{r.ageDays}d</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Ownership board ──────────────────────────────────────────── */}
      <SectionFrame
        heading={leadOwnershipBoard.header}
        tone='mist'
        className='crm-leadOwnershipBoard'
        ariaLabel={ARIA_BOARD_DOT}
      >
        {(() => {
          requireHeadingDescription(leadOwnershipBoard.header.description, 'leadOwnershipBoard');
          return (
            <div className='crm-board'>
              <header className='crm-board__header'>
                <span className='crm-board__title'>{leadOwnershipBoard.boardLabel}</span>
                <span className='crm-board__note'>{leadOwnershipBoard.boardNote}</span>
              </header>
              <div className='crm-board__grid'>
                {leadOwnershipBoard.columns.map(col => (
                  <article key={col.id} className={`crm-board__col crm-board__col--${col.status}`}>
                    <header className='crm-board__col-head'>
                      <span className={`crm-board__col-label crm-board__col-label--${col.status}`}>
                        {col.label}
                      </span>
                      <span className='crm-board__count'>
                        <span className='crm-board__count-label'>{BOARD_OPEN_LABEL_DOT}</span>
                        <span className='crm-board__count-value'>{col.count}</span>
                      </span>
                    </header>
                    <p className='crm-board__desc'>{col.description}</p>
                    <p className='crm-board__owner'>
                      <span className='crm-board__owner-label'>{BOARD_OWNER_LABEL_DOT}</span>
                      <span className='crm-board__owner-value'>{col.ownerExample}</span>
                    </p>
                  </article>
                ))}
              </div>
              <p className='crm-board__rule'>
                <strong>{BOARD_RULE_LABEL_DOT}.</strong> {leadOwnershipBoard.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Follow-up path ───────────────────────────────────────────── */}
      <SectionFrame
        heading={followUpPath.header}
        tone='gradient-dark'
        className='crm-followUpPath'
        ariaLabel={ARIA_FOLLOWUP_DOT}
      >
        {(() => {
          requireHeadingTitle(followUpPath.header.title, 'followUpPath');
          return (
            <div className='crm-fu'>
              <ol className='crm-fu__steps'>
                {followUpPath.steps.map(s => (
                  <li key={s.id} className='crm-fu__step'>
                    <span className='crm-fu__index'>{s.index}</span>
                    <div className='crm-fu__body'>
                      <div className='crm-fu__row'>
                        <span className='crm-fu__label'>{PATH_TRIGGER_DOT}</span>
                        <span className='crm-fu__trigger'>{s.trigger}</span>
                      </div>
                      <div className='crm-fu__row'>
                        <span className='crm-fu__label'>{PATH_ACTION_DOT}</span>
                        <span className='crm-fu__action'>{s.action}</span>
                      </div>
                      <div className='crm-fu__row'>
                        <span className='crm-fu__label'>{PATH_OWNER_DOT}</span>
                        <span className='crm-fu__owner'>{s.ownerHint}</span>
                      </div>
                      <span className='crm-fu__signal'>
                        <span className='crm-fu__signal-dot' aria-hidden='true' />
                        {s.signal}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className='crm-fu__boundary'>
                <strong>{PATH_BOUNDARY_DOT}.</strong> {followUpPath.boundaryNote}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Status visibility ────────────────────────────────────────── */}
      <SectionFrame
        heading={statusVisibility.header}
        tone='white'
        className='crm-statusVisibility'
        ariaLabel={ARIA_STATUS_DOT}
      >
        {(() => {
          requireHeadingDescription(statusVisibility.header.description, 'statusVisibility');
          return (
            <div className='crm-status'>
              <ul className='crm-status-rail'>
                {statusVisibility.definitions.map(d => (
                  <li
                    key={d.id}
                    className={`crm-status-rail__item crm-status-rail__item--${d.signal}`}
                  >
                    <span className={`crm-status-rail__pill crm-status-rail__pill--${d.signal}`}>
                      <span
                        className={`crm-status__dot crm-status__dot--${d.signal}`}
                        aria-hidden='true'
                      />
                      {d.status}
                    </span>
                    <p className='crm-status-rail__meaning'>{d.meaning}</p>
                    <span className='crm-status-rail__trigger-label'>{STATUS_TRIGGER_DOT}</span>
                    <span className='crm-status-rail__trigger'>{d.triggers}</span>
                  </li>
                ))}
              </ul>
              <p className='crm-status__closing'>{statusVisibility.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Handoff boundaries ───────────────────────────────────────── */}
      <SectionFrame
        heading={handoffBoundaries.header}
        tone='mist'
        className='crm-handoffBoundaries'
        ariaLabel={ARIA_BOUNDARY_DOT}
      >
        {(() => {
          requireHeadingTitle(handoffBoundaries.header.title, 'handoffBoundaries');
          return (
            <div className='crm-boundary'>
              <div className='crm-lane'>
                {handoffBoundaries.columns.map(col => (
                  <article key={col.id} className={`crm-lane__col crm-lane__col--${col.scope}`}>
                    <header className='crm-lane__head'>
                      <span className='crm-lane__label'>{col.label}</span>
                      <h3 className='crm-lane__title'>{col.title}</h3>
                    </header>
                    <ul className='crm-lane__items'>
                      {col.items.map((it, i) => (
                        <li key={`${col.id}-${i}`} className='crm-lane__item'>
                          <span aria-hidden='true' className='crm-lane__mark'>
                            {col.scope === 'crm' ? '+' : '−'}
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <p className='crm-lane__guard'>
                      <strong>{BOUNDARY_GUARD_DOT}.</strong> {col.guard}
                    </p>
                  </article>
                ))}
              </div>
              <p className='crm-boundary__rule'>
                <strong>{BOUNDARY_RULE_DOT}.</strong> {handoffBoundaries.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Assumptions panel ────────────────────────────────────────── */}
      <SectionFrame
        heading={assumptionsPanel.header}
        tone='white'
        className='crm-assumptionsPanel'
        ariaLabel={ARIA_ASSUMPTIONS_DOT}
      >
        {(() => {
          requireHeadingDescription(assumptionsPanel.header.description, 'assumptionsPanel');
          return (
            <div className='crm-assume'>
              <div className='crm-assume__grid'>
                {assumptionsPanel.cards.map(c => (
                  <article key={c.id} className={`crm-assume__card crm-assume__card--${c.outcome}`}>
                    <div className='crm-assume__row'>
                      <span className='crm-assume__label'>{ASSUMPTION_SITUATION_DOT}</span>
                      <p className='crm-assume__situation'>{c.situation}</p>
                    </div>
                    <div className='crm-assume__row'>
                      <span className='crm-assume__label'>{ASSUMPTION_READING_DOT}</span>
                      <p className='crm-assume__reading'>{c.reading}</p>
                    </div>
                    <div className='crm-assume__row'>
                      <span className='crm-assume__label'>{ASSUMPTION_NEXT_DOT}</span>
                      <p className='crm-assume__next'>{c.next}</p>
                    </div>
                    <span className={`crm-assume__tag crm-assume__tag--${c.outcome}`}>
                      {c.outcome}
                    </span>
                  </article>
                ))}
              </div>
              <p className='crm-assume__closing'>{assumptionsPanel.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      {/* ── Readiness ────────────────────────────────────────────────── */}
      <SectionFrame
        heading={readinessFilter.header}
        tone='mist'
        className='crm-readinessFilter'
        ariaLabel={ARIA_FIT_DOT}
      >
        {(() => {
          requireHeadingTitle(readinessFilter.header.title, 'readinessFilter');
          return (
            <div className='crm-fit'>
              <div className='crm-fit__columns'>
                {readinessFilter.columns.map(col => (
                  <article key={col.id} className={`crm-fit__col crm-fit__col--${col.variant}`}>
                    <header className='crm-fit__head'>
                      <span className='crm-fit__label'>
                        {col.variant === 'fit' ? FIT_LABEL_DOT : FIT_NOT_LABEL_DOT}
                      </span>
                      <h3 className='crm-fit__title'>{col.title}</h3>
                    </header>
                    <ul className='crm-fit__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='crm-fit__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='crm-fit__closing'>{readinessFilter.closing}</p>
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
        className='crm-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='crm-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
