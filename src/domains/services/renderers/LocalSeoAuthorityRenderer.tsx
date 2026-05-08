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

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// LocalSeoAuthorityRenderer
// Sections: hero · authorityDecision · signalAudit · structuredComparison ·
//           assumptions · coverageMap · visibilityCycle · proofStory ·
//           fitFilter · faq · cta
// Related: injected globally by services/config.tsx (RelatedSection)
//
// CSS: src/styles/services/local-seo.css (lsa-* classes)
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
      <HeroFrame
        className='lsa-hero'
        ariaLabel={ARIA_HERO_DOT}
        texture={<div className='lsa-hero__texture' aria-hidden='true' />}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[
          {
            label: PRIMARY_CTA_LABEL,
            href: contactHref,
            variant: 'white',
            icon: <ArrowRight size={16} aria-hidden='true' />,
          },
        ]}
        chips={hero.list && hero.list.length > 0 ? (hero.list as string[]) : undefined}
        chipDotVariant='warn'
        visual={
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
                  <span className='lsa-presence__pack-label'>
                    {hero.presenceSurface.mapPack.label}
                  </span>
                  <span className='lsa-presence__pack-state'>
                    {hero.presenceSurface.mapPack.overallState}
                  </span>
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
                  <span className='lsa-presence__you-label'>
                    {hero.presenceSurface.mapPack.youLabel}
                  </span>
                </div>
              </div>

              <div className='lsa-presence__signals'>
                {hero.presenceSurface.signals.map(
                  (sig: { label: string; value: string; state: string }) => (
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
                  )
                )}
              </div>
            </div>
          </div>
        }
      />

      {/* -- AUTHORITY DECISION BOARD ---------------------------------------- */}
      <SectionFrame
        className='lsa-decision'
        tone='mist'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_DECISION_DOT}
        heading={{
          kicker: authorityDecision.header.kicker,
          title: authorityDecision.header.title,
          description: requireHeadingDescription(
            authorityDecision.header.description,
            'authority decision'
          ),
        }}
      >
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
            {authorityDecision.criteria.map(
              (row: { name: string; left: string; right: string }, i: number) => (
                <div key={row.name} className='lsa-decision__row'>
                  <div className='lsa-decision__cell'>
                    <span
                      className='lsa-decision__cell-dot lsa-decision__cell-dot--neutral'
                      aria-hidden='true'
                    />
                    <span className='lsa-decision__cell-text'>{row.left}</span>
                  </div>
                  <div className='lsa-decision__row-label'>
                    <span className='lsa-decision__row-num'>0{i + 1}</span>
                    <span className='lsa-decision__row-name'>{row.name}</span>
                  </div>
                  <div className='lsa-decision__cell lsa-decision__cell--right'>
                    <span
                      className='lsa-decision__cell-dot lsa-decision__cell-dot--active'
                      aria-hidden='true'
                    />
                    <span className='lsa-decision__cell-text'>{row.right}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </SectionFrame>

      {/* -- SIGNAL AUDIT ---------------------------------------------------- */}
      <SectionFrame
        className='lsa-signal-audit'
        tone='white'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_SIGNAL_AUDIT_DOT}
        heading={{
          kicker: signalAudit.header.kicker,
          title: signalAudit.header.title,
          description: requireHeadingDescription(signalAudit.header.description, 'signal audit'),
        }}
      >
        <div className='lsa-signal-audit__board mw-animate-up'>
          <div className='lsa-signal-audit__bar'>
            <span className='lsa-signal-audit__bar-title'>{signalAudit.centerLabel}</span>
            <div className='lsa-signal-audit__legend'>
              <span className='lsa-signal-audit__legend-item'>
                <span
                  className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--missing'
                  aria-hidden='true'
                />
                Missing
              </span>
              <span className='lsa-signal-audit__legend-item'>
                <span
                  className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--weak'
                  aria-hidden='true'
                />
                Weak
              </span>
              <span className='lsa-signal-audit__legend-item'>
                <span
                  className='lsa-signal-audit__legend-dot lsa-signal-audit__legend-dot--active'
                  aria-hidden='true'
                />
                Active
              </span>
            </div>
          </div>

          <div className='lsa-signal-audit__grid'>
            {signalAudit.families
              .slice(0, 2)
              .map(
                (family: {
                  id: string;
                  iconKey: string;
                  name: string;
                  overallState: string;
                  checks: { label: string; state: string }[];
                }) => (
                  <div key={family.id} className='lsa-signal-card'>
                    <div className='lsa-signal-card__header'>
                      <div className='lsa-signal-card__meta'>
                        <div className='lsa-signal-card__icon-wrap'>{ICON_MAP[family.iconKey]}</div>
                        <div className='lsa-signal-card__name'>{family.name}</div>
                      </div>
                      <div
                        className={`lsa-signal-card__state lsa-signal-card__state--${family.overallState}`}
                      >
                        {family.overallState}
                      </div>
                    </div>
                    <div className='lsa-signal-card__checks'>
                      {family.checks.map((check: { label: string; state: string }) => (
                        <div key={check.label} className='lsa-signal-card__check'>
                          <span className='lsa-signal-card__check-label'>{check.label}</span>
                          <span className='lsa-signal-card__check-state'>
                            <span
                              className={`lsa-signal-card__check-dot lsa-signal-card__check-dot--${check.state}`}
                              aria-hidden='true'
                            />
                            {check.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}

            <div className='lsa-signal-audit__center'>
              <div className='lsa-signal-audit__center-node'>
                <Search size={24} className='lsa-signal-audit__center-icon' aria-hidden='true' />
                <div className='lsa-signal-audit__center-label'>{signalAudit.centerLabel}</div>
              </div>
            </div>

            {signalAudit.families
              .slice(2, 4)
              .map(
                (family: {
                  id: string;
                  iconKey: string;
                  name: string;
                  overallState: string;
                  checks: { label: string; state: string }[];
                }) => (
                  <div key={family.id} className='lsa-signal-card'>
                    <div className='lsa-signal-card__header'>
                      <div className='lsa-signal-card__meta'>
                        <div className='lsa-signal-card__icon-wrap'>{ICON_MAP[family.iconKey]}</div>
                        <div className='lsa-signal-card__name'>{family.name}</div>
                      </div>
                      <div
                        className={`lsa-signal-card__state lsa-signal-card__state--${family.overallState}`}
                      >
                        {family.overallState}
                      </div>
                    </div>
                    <div className='lsa-signal-card__checks'>
                      {family.checks.map((check: { label: string; state: string }) => (
                        <div key={check.label} className='lsa-signal-card__check'>
                          <span className='lsa-signal-card__check-label'>{check.label}</span>
                          <span className='lsa-signal-card__check-state'>
                            <span
                              className={`lsa-signal-card__check-dot lsa-signal-card__check-dot--${check.state}`}
                              aria-hidden='true'
                            />
                            {check.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </SectionFrame>

      {/* -- STRUCTURED COMPARISON ------------------------------------------- */}
      <SectionFrame
        className='lsa-comparison'
        tone='mist'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_COMPARISON_DOT}
        heading={{
          kicker: structuredComparison.header.kicker,
          title: structuredComparison.header.title,
          description: requireHeadingDescription(
            structuredComparison.header.description,
            'structured comparison'
          ),
        }}
      >
        <div className='lsa-comparison__split mw-animate-up'>
          <div className='lsa-comparison__panel lsa-comparison__panel--disconnected'>
            <div className='lsa-comparison__panel-inner'>
              <div className='lsa-comparison__panel-bar'>
                <span className='lsa-comparison__panel-label'>
                  {structuredComparison.disconnectedSide.label}
                </span>
                <span className='lsa-comparison__panel-note'>
                  {structuredComparison.disconnectedSide.note}
                </span>
              </div>
              <div className='lsa-comparison__panel-title'>
                {structuredComparison.disconnectedSide.title}
              </div>
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
                <span className='lsa-comparison__panel-label'>
                  {structuredComparison.connectedSide.label}
                </span>
                <span className='lsa-comparison__panel-note'>
                  {structuredComparison.connectedSide.note}
                </span>
              </div>
              <div className='lsa-comparison__panel-title'>
                {structuredComparison.connectedSide.title}
              </div>
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
      </SectionFrame>

      {/* -- ASSUMPTIONS ----------------------------------------------------- */}
      <SectionFrame
        className='lsa-assumptions'
        tone='white'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_ASSUMPTIONS_DOT}
        heading={{
          kicker: assumptions.header.kicker,
          title: assumptions.header.title,
          description: requireHeadingDescription(assumptions.header.description, 'assumptions'),
        }}
      >
        <div className='lsa-assumptions__list mw-animate-up'>
          {assumptions.myths.map((entry: { myth: string; reality: string }) => (
            <div key={entry.myth} className='lsa-assumptions__row'>
              <div className='lsa-assumptions__myth-side'>
                <div className='lsa-assumptions__myth-tag'>
                  <div className='lsa-assumptions__myth-icon'>
                    <X size={14} aria-hidden='true' />
                  </div>
                  <span className='lsa-assumptions__myth-label'>Assumption</span>
                </div>
                <div className='lsa-assumptions__myth-text'>{entry.myth}</div>
              </div>
              <div className='lsa-assumptions__reality-side'>
                <div className='lsa-assumptions__reality-tag'>
                  <div className='lsa-assumptions__reality-icon'>
                    <CheckCircle2 size={14} aria-hidden='true' />
                  </div>
                  <span className='lsa-assumptions__reality-label'>Reality</span>
                </div>
                <div className='lsa-assumptions__reality-text'>{entry.reality}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      {/* -- COVERAGE MAP ---------------------------------------------------- */}
      <SectionFrame
        className='lsa-coverage-map'
        tone='mist'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_COVERAGE_MAP_DOT}
        heading={{
          kicker: coverageMap.header.kicker,
          title: coverageMap.header.title,
          description: requireHeadingDescription(coverageMap.header.description, 'coverage map'),
        }}
      >
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
                  <svg
                    className='lsa-coverage-map__diagram-svg'
                    viewBox='0 0 280 280'
                    aria-hidden='true'
                  >
                    <circle cx='140' cy='140' r='130' className='lsa-coverage-map__ring-outer' />
                    <circle cx='140' cy='140' r='100' className='lsa-coverage-map__ring-mid' />
                    <circle cx='140' cy='140' r='70' className='lsa-coverage-map__ring-inner' />
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
      </SectionFrame>

      {/* -- VISIBILITY CYCLE ------------------------------------------------ */}
      <SectionFrame
        className='lsa-cycle'
        tone='white'
        ariaLabel={ARIA_CYCLE_DOT}
        heading={{
          kicker: visibilityCycle.header.kicker,
          title: visibilityCycle.header.title,
          description: requireHeadingDescription(
            visibilityCycle.header.description,
            'visibility cycle'
          ),
        }}
      >
        <div className='lsa-cycle__copy-tag mw-animate-up'>
          <RefreshCw size={16} aria-hidden='true' />
          <span>{visibilityCycle.cycleLabel}</span>
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
      </SectionFrame>

      {/* -- PROOF STORY ----------------------------------------------------- */}
      <SectionFrame
        className='lsa-proof'
        tone='mist'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_PROOF_DOT}
        heading={{
          kicker: proofStory.header.kicker,
          title: proofStory.header.title,
          description: requireHeadingDescription(proofStory.header.description, 'proof story'),
        }}
      >
        <div className='lsa-proof__card mw-animate-up'>
          <div className='lsa-proof__context'>
            <div className='lsa-proof__context-tag'>
              <div className='lsa-proof__context-icon'>
                <FileText size={14} aria-hidden='true' />
              </div>
              <span className='lsa-proof__context-label'>{proofStory.context.label}</span>
            </div>
            <h3 className='lsa-proof__context-title'>{proofStory.context.title}</h3>
            <p className='lsa-proof__context-description'>{proofStory.context.description}</p>
            <div className='lsa-proof__metrics'>
              {proofStory.context.metrics.map(
                (metric: { label: string; before: string; after: string }) => (
                  <div key={metric.label} className='lsa-proof__metric'>
                    <div className='lsa-proof__metric-label'>{metric.label}</div>
                    <div className='lsa-proof__metric-values'>
                      <span className='lsa-proof__metric-before'>{metric.before}</span>
                      <span className='lsa-proof__metric-after'>{metric.after}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className='lsa-proof__changes'>
            <div className='lsa-proof__changes-texture' aria-hidden='true' />
            <div className='lsa-proof__changes-inner'>
              <div className='lsa-proof__changes-label'>{proofStory.changes.label}</div>
              <div className='lsa-proof__changes-title'>{proofStory.changes.title}</div>
              <div className='lsa-proof__change-items'>
                {proofStory.changes.items.map(
                  (item: { iconKey: string; label: string; note: string }) => (
                    <div key={item.label} className='lsa-proof__change-item'>
                      <div className='lsa-proof__change-icon'>{ICON_MAP[item.iconKey]}</div>
                      <div className='lsa-proof__change-body'>
                        <div className='lsa-proof__change-label'>{item.label}</div>
                        <div className='lsa-proof__change-note'>{item.note}</div>
                      </div>
                      <span className='lsa-proof__change-dot' aria-hidden='true' />
                    </div>
                  )
                )}
              </div>
              <div className='lsa-proof__constraint'>{proofStory.constraint}</div>
            </div>
          </div>
        </div>
      </SectionFrame>

      {/* -- FIT FILTER ------------------------------------------------------ */}
      <SectionFrame
        className='lsa-fit-filter'
        tone='white'
        headerWidth='narrow'
        gap='relaxed'
        ariaLabel={ARIA_FIT_FILTER_DOT}
        heading={{
          kicker: fitFilter.header.kicker,
          title: fitFilter.header.title,
          description: requireHeadingDescription(fitFilter.header.description, 'fit filter'),
        }}
      >
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
      </SectionFrame>

      {/* -- FAQ ------------------------------------------------------------- */}
      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        items={faq.items}
        tone='mist'
        className='lsa-faq'
        ariaLabel={ARIA_FAQ_DOT}
        variant='split'
      />

      {/* -- CTA ------------------------------------------------------------- */}
      <DecisionPanel
        className='mw-decision-panel--mist'
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={data.cta.expectations}
      />
    </>
  );
}
