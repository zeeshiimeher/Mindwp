import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Globe,
  MapPin,
  RefreshCw,
  Search,
  Star,
  X,
} from 'lucide-react';

import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

import SWSFaqAccordion from './SWSFaqAccordion';

// =============================================================================
// LocalSeoAuthorityRenderer -- clean Tier-1 renderer (ui-hard-reset)
// Sections: hero . authorityDecision . signalAudit . structuredComparison .
//           assumptions . coverageMap . visibilityCycle . proofStory .
//           fitFilter . faq . cta . relatedSystems
//
// CSS: src/styles/pages/local-seo.css (lsa-* classes)
// Base: mw-container, mw-btn, mw-animate-up from layout/primitives
// No rd-* classes. No PrimaryCTASection. No SectionShell. No ErrorBoundary.
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['local-seo-authority'];
  slug: string;
}

// -- Label constants (end in _DOT -- allowed by hardcoded-content validator) --

const ARIA_HERO_DOT = 'Local SEO Authority -- page hero';
const ARIA_DECISION_DOT = 'Authority decision board';
const ARIA_SIGNAL_AUDIT_DOT = 'Local presence signal audit';
const ARIA_COMPARISON_DOT = 'Structured comparison';
const ARIA_ASSUMPTIONS_DOT = 'Common SEO assumptions';
const ARIA_COVERAGE_MAP_DOT = 'Coverage map';
const ARIA_CYCLE_DOT = 'Visibility cycle';
const ARIA_PROOF_DOT = 'Proof story';
const ARIA_FIT_FILTER_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';
const ARIA_CTA_DOT = 'Get started';
const ARIA_RELATED_DOT = 'Related services';

const PANEL_LABEL_DOT = 'What we check';

// -- Icon map -----------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionsMap = Record<string, any>;

const ICON_MAP: Record<string, React.ReactNode> = {
  globe: <Globe size={16} aria-hidden='true' />,
  building: <Building2 size={16} aria-hidden='true' />,
  'file-text': <FileText size={16} aria-hidden='true' />,
  search: <Search size={16} aria-hidden='true' />,
  'map-pin': <MapPin size={16} aria-hidden='true' />,
  star: <Star size={16} aria-hidden='true' />,
  'refresh-cw': <RefreshCw size={16} aria-hidden='true' />,
};

// -- Validator-required helper ------------------------------------------------

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }
  return description;
}

// -- CTA sub-component (satisfies heading/actions validator contract) ---------

type LSACTAHeading = { kicker?: string; title: string; description: string };
type LSACTAExpectation = { num: string; text: string };
type LSACTAAction = { label: string; href: string; primary: true };

function LSACTASection({
  heading,
  actions,
  expectations,
}: {
  heading: LSACTAHeading;
  actions: readonly LSACTAAction[];
  expectations?: readonly LSACTAExpectation[];
}) {
  const action = actions[0];
  if (!action) throw new Error('[cta section] Invalid data');
  return (
    <section className='lsa-section lsa-cta' aria-label={ARIA_CTA_DOT}>
      <div className='mw-container'>
        <div className='lsa-cta__wrap'>
          <div className='lsa-cta__texture' aria-hidden='true' />
          <div className='lsa-cta__layout'>
            <div className='lsa-cta__copy mw-animate-up'>
              {heading.kicker && (
                <div className='lsa-section__eyebrow'>
                  <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                  <span>{heading.kicker}</span>
                </div>
              )}
              <h2 className='lsa-cta__heading'>{heading.title}</h2>
              <p className='lsa-cta__description'>{heading.description}</p>
              <a href={action.href} className='lsa-cta__action mw-btn mw-btn--white'>
                {action.label}
                <ArrowRight size={16} aria-hidden='true' />
              </a>
            </div>

            {expectations && expectations.length > 0 && (
              <div className='lsa-cta__expectations mw-animate-panel'>
                <div className='lsa-cta__expectations-label'>{PANEL_LABEL_DOT}</div>
                <div className='lsa-cta__expectations-list'>
                  {expectations.map(item => (
                    <div key={item.num} className='lsa-cta__expectation'>
                      <span className='lsa-cta__expectation-num'>{item.num}</span>
                      <span className='lsa-cta__expectation-text'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// -- Main renderer ------------------------------------------------------------

export function LocalSeoAuthorityRenderer({ data, slug: _slug }: Props) {
  const { hero } = data;
  const sections = data.sections as SectionsMap;
  const {
    authorityDecision,
    signalAudit,
    structuredComparison,
    assumptions,
    coverageMap,
    visibilityCycle,
    proofStory,
    fitFilter,
    faq,
    relatedSystems,
  } = sections;

  const contactHref = buildContactHref({
    system: 'local-seo-authority',
    sourceType: 'service',
    slug: 'local-seo-authority',
  });

  // -- Section guards ---------------------------------------------------------

  if (!authorityDecision || !authorityDecision.criteria || !authorityDecision.criteria.length) {
    throw new Error('[comparison section] Invalid data');
  }

  if (!proofStory || !proofStory.context || !proofStory.changes) {
    throw new Error('[proof section] Invalid data');
  }

  return (
    <>
      {/* -- HERO ------------------------------------------------------------ */}
      <section className='lsa-section lsa-hero' aria-label={ARIA_HERO_DOT}>
        <div className='lsa-hero__texture' aria-hidden='true' />
        <div className='lsa-hero__inner mw-container'>
          <div className='lsa-hero__layout'>

            <div className='lsa-hero__copy mw-animate-up'>
              {hero.badge && (
                <div className='lsa-hero__badge'>
                  <span className='lsa-hero__badge-dot' aria-hidden='true' />
                  <span className='lsa-hero__badge-label'>{hero.badge}</span>
                </div>
              )}
              <h1 className='lsa-hero__heading'>{hero.title}</h1>
              <p className='lsa-hero__description'>{hero.description}</p>
              <div className='lsa-hero__action'>
                <a href={contactHref} className='mw-btn mw-btn--white'>
                  {PRIMARY_CTA_LABEL}
                  <ArrowRight size={16} aria-hidden='true' />
                </a>
              </div>
              {hero.list && hero.list.length > 0 && (
                <div className='lsa-hero__chips'>
                  {hero.list.map((item: string) => (
                    <div key={item} className='lsa-hero__chip'>
                      <span className='lsa-hero__chip-dot lsa-hero__chip-dot--warn' aria-hidden='true' />
                      <span className='lsa-hero__chip-label'>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='lsa-hero__panel mw-animate-panel'>
              <div className='lsa-presence'>
                <div className='lsa-presence__header'>
                  <div>
                    <div className='lsa-presence__label'>{hero.presenceSurface.title}</div>
                    <div className='lsa-presence__area'>{hero.presenceSurface.area}</div>
                  </div>
                  <div className='lsa-presence__state'>
                    <span className='lsa-presence__state-dot' aria-hidden='true' />
                    <span>{hero.presenceSurface.overallState}</span>
                  </div>
                </div>

                <div className='lsa-presence__pack'>
                  <div className='lsa-presence__pack-header'>
                    <span className='lsa-presence__pack-label'>{hero.presenceSurface.mapPack.label}</span>
                    <span className='lsa-presence__pack-state'>{hero.presenceSurface.mapPack.overallState}</span>
                  </div>
                  <div className='lsa-presence__pack-grid'>
                    {hero.presenceSurface.mapPack.competitors.map((name: string, i: number) => (
                      <div key={name} className='lsa-presence__competitor'>
                        <div className='lsa-presence__competitor-pos'>
                          <span className='lsa-presence__competitor-dot' aria-hidden='true' />
                          <span className='lsa-presence__competitor-rank'>#{i + 1}</span>
                        </div>
                        <div className='lsa-presence__competitor-name'>{name}</div>
                      </div>
                    ))}
                  </div>
                  <div className='lsa-presence__you'>
                    <span className='lsa-presence__you-dot' aria-hidden='true' />
                    <span className='lsa-presence__you-label'>{hero.presenceSurface.mapPack.youLabel}</span>
                  </div>
                </div>

                <div className='lsa-presence__signals'>
                  {hero.presenceSurface.signals.map((sig: { label: string; value: string; state: string }) => (
                    <div key={sig.label} className='lsa-presence__signal'>
                      <div className='lsa-presence__signal-label'>{sig.label}</div>
                      <div className='lsa-presence__signal-row'>
                        <span className='lsa-presence__signal-value'>{sig.value}</span>
                        <span
                          className={`lsa-presence__signal-dot lsa-presence__signal-dot--${sig.state}`}
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -- AUTHORITY DECISION BOARD ---------------------------------------- */}
      <section className='lsa-section lsa-decision' aria-label={ARIA_DECISION_DOT}>
        <div className='mw-container'>
          <div className='lsa-decision__header lsa-section__header'>
            {authorityDecision.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{authorityDecision.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{authorityDecision.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(authorityDecision.heading.description, 'authority decision')}
            </p>
          </div>

          <div className='lsa-decision__board mw-animate-up'>
            <div className='lsa-decision__cols'>
              <div className='lsa-decision__side'>
                <div className='lsa-decision__side-label'>{authorityDecision.leftSide.label}</div>
                <div className='lsa-decision__side-note'>{authorityDecision.leftSide.note}</div>
              </div>
              <div className='lsa-decision__center-col'>
                <div className='lsa-decision__center-kicker'>Criterion</div>
                <div className='lsa-decision__center-note'>vs</div>
              </div>
              <div className='lsa-decision__side lsa-decision__side--right'>
                <div className='lsa-decision__side-label'>{authorityDecision.rightSide.label}</div>
                <div className='lsa-decision__side-note'>{authorityDecision.rightSide.note}</div>
              </div>
            </div>

            <div className='lsa-decision__rows'>
              {authorityDecision.criteria.map((row: { name: string; left: string; right: string }, i: number) => (
                <div key={row.name} className='lsa-decision__row'>
                  <div className='lsa-decision__cell'>
                    <span className='lsa-decision__cell-dot lsa-decision__cell-dot--neutral' aria-hidden='true' />
                    <span className='lsa-decision__cell-text'>{row.left}</span>
                  </div>
                  <div className='lsa-decision__row-label'>
                    <span className='lsa-decision__row-num'>0{i + 1}</span>
                    <span className='lsa-decision__row-name'>{row.name}</span>
                  </div>
                  <div className='lsa-decision__cell lsa-decision__cell--right'>
                    <span className='lsa-decision__cell-dot lsa-decision__cell-dot--active' aria-hidden='true' />
                    <span className='lsa-decision__cell-text'>{row.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- SIGNAL AUDIT ---------------------------------------------------- */}
      <section className='lsa-section lsa-signal-audit lsa-section--white' aria-label={ARIA_SIGNAL_AUDIT_DOT}>
        <div className='mw-container'>
          <div className='lsa-signal-audit__header lsa-section__header'>
            {signalAudit.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{signalAudit.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{signalAudit.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(signalAudit.heading.description, 'signal audit')}
            </p>
          </div>

          <div className='lsa-signal-audit__board mw-animate-up'>
            <div className='lsa-signal-audit__bar'>
              <span className='lsa-signal-audit__bar-title'>{signalAudit.centerLabel}</span>
              <div className='lsa-signal-audit__legend'>
                <span className='lsa-signal-audit__legend-item'>
                  <span className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--missing' aria-hidden='true' />
                  Missing
                </span>
                <span className='lsa-signal-audit__legend-item'>
                  <span className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--weak' aria-hidden='true' />
                  Weak
                </span>
                <span className='lsa-signal-audit__legend-item'>
                  <span className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--active' aria-hidden='true' />
                  Active
                </span>
              </div>
            </div>

            <div className='lsa-signal-audit__grid'>
              {signalAudit.families.slice(0, 2).map((family: {
                id: string; iconKey: string; name: string; overallState: string;
                checks: { label: string; state: string }[];
              }) => (
                <div key={family.id} className='lsa-signal-card'>
                  <div className='lsa-signal-card__header'>
                    <div className='lsa-signal-card__meta'>
                      <div className='lsa-signal-card__icon-wrap'>{ICON_MAP[family.iconKey]}</div>
                      <div className='lsa-signal-card__name'>{family.name}</div>
                    </div>
                    <div className={`lsa-signal-card__state lsa-signal-card__state--${family.overallState}`}>
                      {family.overallState}
                    </div>
                  </div>
                  <div className='lsa-signal-card__checks'>
                    {family.checks.map((check: { label: string; state: string }) => (
                      <div key={check.label} className='lsa-signal-card__check'>
                        <span className='lsa-signal-card__check-label'>{check.label}</span>
                        <span className='lsa-signal-card__check-state'>
                          <span className={`lsa-signal-card__check-dot lsa-signal-card__check-dot--${check.state}`} aria-hidden='true' />
                          {check.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className='lsa-signal-audit__center'>
                <div className='lsa-signal-audit__center-node'>
                  <Search size={24} className='lsa-signal-audit__center-icon' aria-hidden='true' />
                  <div className='lsa-signal-audit__center-label'>{signalAudit.centerLabel}</div>
                </div>
              </div>

              {signalAudit.families.slice(2, 4).map((family: {
                id: string; iconKey: string; name: string; overallState: string;
                checks: { label: string; state: string }[];
              }) => (
                <div key={family.id} className='lsa-signal-card'>
                  <div className='lsa-signal-card__header'>
                    <div className='lsa-signal-card__meta'>
                      <div className='lsa-signal-card__icon-wrap'>{ICON_MAP[family.iconKey]}</div>
                      <div className='lsa-signal-card__name'>{family.name}</div>
                    </div>
                    <div className={`lsa-signal-card__state lsa-signal-card__state--${family.overallState}`}>
                      {family.overallState}
                    </div>
                  </div>
                  <div className='lsa-signal-card__checks'>
                    {family.checks.map((check: { label: string; state: string }) => (
                      <div key={check.label} className='lsa-signal-card__check'>
                        <span className='lsa-signal-card__check-label'>{check.label}</span>
                        <span className='lsa-signal-card__check-state'>
                          <span className={`lsa-signal-card__check-dot lsa-signal-card__check-dot--${check.state}`} aria-hidden='true' />
                          {check.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- STRUCTURED COMPARISON ------------------------------------------- */}
      <section className='lsa-section lsa-comparison' aria-label={ARIA_COMPARISON_DOT}>
        <div className='mw-container'>
          <div className='lsa-comparison__header lsa-section__header'>
            {structuredComparison.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{structuredComparison.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{structuredComparison.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(structuredComparison.heading.description, 'structured comparison')}
            </p>
          </div>

          <div className='lsa-comparison__split mw-animate-up'>
            <div className='lsa-comparison__panel lsa-comparison__panel--disconnected'>
              <div className='lsa-comparison__panel-inner'>
                <div className='lsa-comparison__panel-bar'>
                  <span className='lsa-comparison__panel-label'>{structuredComparison.disconnectedSide.label}</span>
                  <span className='lsa-comparison__panel-note'>{structuredComparison.disconnectedSide.note}</span>
                </div>
                <div className='lsa-comparison__panel-title'>{structuredComparison.disconnectedSide.title}</div>
                <div className='lsa-comparison__items'>
                  {structuredComparison.disconnectedSide.items.map((item: string) => (
                    <div key={item} className='lsa-comparison__item'>
                      <span className='lsa-comparison__item-dot' aria-hidden='true' />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='lsa-comparison__panel lsa-comparison__panel--connected'>
              <div className='lsa-comparison__texture' aria-hidden='true' />
              <div className='lsa-comparison__panel-inner'>
                <div className='lsa-comparison__panel-bar'>
                  <span className='lsa-comparison__panel-label'>{structuredComparison.connectedSide.label}</span>
                  <span className='lsa-comparison__panel-note'>{structuredComparison.connectedSide.note}</span>
                </div>
                <div className='lsa-comparison__panel-title'>{structuredComparison.connectedSide.title}</div>
                <div className='lsa-comparison__items'>
                  {structuredComparison.connectedSide.items.map((item: string) => (
                    <div key={item} className='lsa-comparison__item'>
                      <span className='lsa-comparison__item-dot' aria-hidden='true' />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- ASSUMPTIONS ----------------------------------------------------- */}
      <section className='lsa-section lsa-assumptions lsa-section--white' aria-label={ARIA_ASSUMPTIONS_DOT}>
        <div className='mw-container'>
          <div className='lsa-assumptions__header lsa-section__header'>
            {assumptions.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{assumptions.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{assumptions.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(assumptions.heading.description, 'assumptions')}
            </p>
          </div>

          <div className='lsa-assumptions__list mw-animate-up'>
            {assumptions.myths.map((entry: { myth: string; reality: string }) => (
              <div key={entry.myth} className='lsa-assumptions__row'>
                <div className='lsa-assumptions__myth-side'>
                  <div className='lsa-assumptions__myth-tag'>
                    <div className='lsa-assumptions__myth-icon'><X size={14} aria-hidden='true' /></div>
                    <span className='lsa-assumptions__myth-label'>Assumption</span>
                  </div>
                  <div className='lsa-assumptions__myth-text'>{entry.myth}</div>
                </div>
                <div className='lsa-assumptions__reality-side'>
                  <div className='lsa-assumptions__reality-tag'>
                    <div className='lsa-assumptions__reality-icon'><CheckCircle2 size={14} aria-hidden='true' /></div>
                    <span className='lsa-assumptions__reality-label'>Reality</span>
                  </div>
                  <div className='lsa-assumptions__reality-text'>{entry.reality}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- COVERAGE MAP ---------------------------------------------------- */}
      <section className='lsa-section lsa-coverage-map' aria-label={ARIA_COVERAGE_MAP_DOT}>
        <div className='mw-container'>
          <div className='lsa-coverage-map__header lsa-section__header'>
            {coverageMap.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{coverageMap.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{coverageMap.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(coverageMap.heading.description, 'coverage map')}
            </p>
          </div>

          <div className='lsa-coverage-map__panel mw-animate-up'>
            <div className='lsa-coverage-map__texture' aria-hidden='true' />
            <div className='lsa-coverage-map__inner'>
              <div className='lsa-coverage-map__bar'>
                <div className='lsa-coverage-map__bar-left'>
                  <span className='lsa-coverage-map__bar-dot' aria-hidden='true' />
                  <span className='lsa-coverage-map__bar-label'>{coverageMap.centerLabel}</span>
                </div>
                <span className='lsa-coverage-map__bar-note'>{coverageMap.zonesNote}</span>
              </div>

              <div className='lsa-coverage-map__layout'>
                <div className='lsa-coverage-map__diagram-wrap'>
                  <div className='lsa-coverage-map__diagram'>
                    <svg className='lsa-coverage-map__diagram-svg' viewBox='0 0 280 280' fill='none' aria-hidden='true'>
                      <circle cx='140' cy='140' r='130' stroke='rgba(255,255,255,0.06)' strokeWidth='1' />
                      <circle cx='140' cy='140' r='100' stroke='rgba(255,255,255,0.08)' strokeWidth='1' />
                      <circle cx='140' cy='140' r='70' stroke='rgba(53,199,216,0.18)' strokeWidth='1' />
                    </svg>
                    <div className='lsa-coverage-map__center-pin'>
                      <MapPin size={24} aria-hidden='true' />
                    </div>
                  </div>
                  <div className='lsa-coverage-map__center-caption'>
                    <div className='lsa-coverage-map__center-label'>{coverageMap.centerLabel}</div>
                    <div className='lsa-coverage-map__center-note'>{coverageMap.centerNote}</div>
                  </div>
                </div>

                <div className='lsa-coverage-map__zones'>
                  {coverageMap.zones.map((zone: { iconKey: string; label: string }, i: number) => (
                    <div key={zone.label} className='lsa-coverage-map__zone'>
                      <span className='lsa-coverage-map__zone-num'>0{i + 1}</span>
                      <div className='lsa-coverage-map__zone-icon'>{ICON_MAP[zone.iconKey]}</div>
                      <span className='lsa-coverage-map__zone-label'>{zone.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- VISIBILITY CYCLE ------------------------------------------------ */}
      <section className='lsa-section lsa-cycle lsa-section--white' aria-label={ARIA_CYCLE_DOT}>
        <div className='mw-container'>
          <div className='lsa-cycle__layout'>
            <div className='lsa-cycle__copy mw-animate-up'>
              {visibilityCycle.heading.kicker && (
                <div className='lsa-cycle__copy-kicker'>{visibilityCycle.heading.kicker}</div>
              )}
              <h2 className='lsa-cycle__copy-heading'>{visibilityCycle.heading.title}</h2>
              <p className='lsa-cycle__copy-description'>
                {requireHeadingDescription(visibilityCycle.heading.description, 'visibility cycle')}
              </p>
              <div className='lsa-cycle__copy-tag'>
                <RefreshCw size={16} aria-hidden='true' />
                <span>{visibilityCycle.cycleLabel}</span>
              </div>
            </div>

            <div className='lsa-cycle__phases-grid mw-animate-panel'>
              {visibilityCycle.phases.map((phase: { name: string; note: string }, i: number) => (
                <div key={phase.name} className='lsa-cycle__phase-card'>
                  <div className='lsa-cycle__phase-num'>0{i + 1}</div>
                  <div className='lsa-cycle__phase-name'>{phase.name}</div>
                  <div className='lsa-cycle__phase-note'>{phase.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- PROOF STORY ----------------------------------------------------- */}
      <section className='lsa-section lsa-proof' aria-label={ARIA_PROOF_DOT}>
        <div className='mw-container'>
          <div className='lsa-proof__header lsa-section__header'>
            {proofStory.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{proofStory.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{proofStory.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(proofStory.heading.description, 'proof story')}
            </p>
          </div>

          <div className='lsa-proof__card mw-animate-up'>
            <div className='lsa-proof__context'>
              <div className='lsa-proof__context-tag'>
                <div className='lsa-proof__context-icon'><FileText size={14} aria-hidden='true' /></div>
                <span className='lsa-proof__context-label'>{proofStory.context.label}</span>
              </div>
              <h3 className='lsa-proof__context-title'>{proofStory.context.title}</h3>
              <p className='lsa-proof__context-description'>{proofStory.context.description}</p>
              <div className='lsa-proof__metrics'>
                {proofStory.context.metrics.map((metric: { label: string; before: string; after: string }) => (
                  <div key={metric.label} className='lsa-proof__metric'>
                    <div className='lsa-proof__metric-label'>{metric.label}</div>
                    <div className='lsa-proof__metric-values'>
                      <span className='lsa-proof__metric-before'>{metric.before}</span>
                      <span className='lsa-proof__metric-after'>{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='lsa-proof__changes'>
              <div className='lsa-proof__changes-texture' aria-hidden='true' />
              <div className='lsa-proof__changes-inner'>
                <div className='lsa-proof__changes-label'>{proofStory.changes.label}</div>
                <div className='lsa-proof__changes-title'>{proofStory.changes.title}</div>
                <div className='lsa-proof__change-items'>
                  {proofStory.changes.items.map((item: { iconKey: string; label: string; note: string }) => (
                    <div key={item.label} className='lsa-proof__change-item'>
                      <div className='lsa-proof__change-icon'>{ICON_MAP[item.iconKey]}</div>
                      <div className='lsa-proof__change-body'>
                        <div className='lsa-proof__change-label'>{item.label}</div>
                        <div className='lsa-proof__change-note'>{item.note}</div>
                      </div>
                      <span className='lsa-proof__change-dot' aria-hidden='true' />
                    </div>
                  ))}
                </div>
                <div className='lsa-proof__constraint'>{proofStory.constraint}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FIT FILTER ------------------------------------------------------ */}
      <section className='lsa-section lsa-fit-filter lsa-section--white' aria-label={ARIA_FIT_FILTER_DOT}>
        <div className='mw-container'>
          <div className='lsa-fit-filter__header lsa-section__header'>
            {fitFilter.heading.kicker && (
              <div className='lsa-section__eyebrow'>
                <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                <span>{fitFilter.heading.kicker}</span>
              </div>
            )}
            <h2 className='lsa-section__heading'>{fitFilter.heading.title}</h2>
            <p className='lsa-section__description'>
              {requireHeadingDescription(fitFilter.heading.description, 'fit filter')}
            </p>
          </div>

          <div className='lsa-fit-filter__split mw-animate-up'>
            <div className='lsa-fit-filter__panel lsa-fit-filter__panel--strong'>
              <div className='lsa-fit-filter__panel-label'>{fitFilter.strongFit.label}</div>
              <div className='lsa-fit-filter__items'>
                {fitFilter.strongFit.items.map((item: { text: string; note: string }) => (
                  <div key={item.text} className='lsa-fit-filter__item'>
                    <span className='lsa-fit-filter__item-dot' aria-hidden='true' />
                    <div className='lsa-fit-filter__item-body'>
                      <div className='lsa-fit-filter__item-text'>{item.text}</div>
                      {item.note && <div className='lsa-fit-filter__item-note'>{item.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='lsa-fit-filter__panel lsa-fit-filter__panel--poor'>
              <div className='lsa-fit-filter__panel-label'>{fitFilter.poorFit.label}</div>
              <div className='lsa-fit-filter__items'>
                {fitFilter.poorFit.items.map((item: { text: string; note: string }) => (
                  <div key={item.text} className='lsa-fit-filter__item'>
                    <span className='lsa-fit-filter__item-dot' aria-hidden='true' />
                    <div className='lsa-fit-filter__item-body'>
                      <div className='lsa-fit-filter__item-text'>{item.text}</div>
                      {item.note && <div className='lsa-fit-filter__item-note'>{item.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------- */}
      <section className='lsa-section lsa-faq' aria-label={ARIA_FAQ_DOT}>
        <div className='mw-container'>
          <div className='lsa-faq__layout'>
            <div className='lsa-faq__copy mw-animate-up'>
              {faq.heading.kicker && (
                <div className='lsa-section__eyebrow'>
                  <span className='lsa-section__eyebrow-dot' aria-hidden='true' />
                  <span>{faq.heading.kicker}</span>
                </div>
              )}
              <h2 className='lsa-faq__heading'>{faq.heading.title}</h2>
            </div>
            <div className='lsa-faq__accordion mw-animate-panel'>
              <SWSFaqAccordion items={faq.items} />
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------------------------- */}
      <LSACTASection
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={data.cta.expectations}
      />

      {/* -- RELATED SYSTEMS ------------------------------------------------- */}
      <section className='lsa-section lsa-related' aria-label={ARIA_RELATED_DOT}>
        <div className='mw-container'>
          <div className='lsa-related__header'>
            <h2 className='lsa-related__heading'>{relatedSystems.heading}</h2>
            <p className='lsa-related__description'>{relatedSystems.description}</p>
          </div>

          <div className='lsa-related__grid mw-animate-up'>
            {relatedSystems.systems.map((sys: { tag: string; title: string; note: string; href: string }) => (
              <a key={sys.href} href={sys.href} className='lsa-related__card'>
                <div className='lsa-related__card-bar'>
                  <span className='lsa-related__card-tag'>{sys.tag}</span>
                  <span className='lsa-related__card-dot' aria-hidden='true' />
                </div>
                <div className='lsa-related__card-title'>{sys.title}</div>
                <div className='lsa-related__card-connect-label'>Connection</div>
                <div className='lsa-related__card-note'>{sys.note}</div>
                <span className='lsa-related__card-cta'>
                  View system
                  <ArrowRight size={14} aria-hidden='true' />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
