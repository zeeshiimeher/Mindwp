import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Check,
  ClipboardList,
  Clock,
  Crosshair,
  Eye,
  EyeOff,
  FileText,
  GitBranch,
  Globe,
  Hammer,
  Inbox,
  LayoutGrid,
  MapPin,
  Minus,
  PhoneIncoming,
  PhoneOff,
  Quote,
  Repeat,
  Route,
  ScanSearch,
  Scissors,
  Search,
  Star,
  TrendingDown,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { Accordion } from '@/components/primitives/Accordion';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import type { HomeIconKey } from '@/domains/home/data/homepage';
import { homepageData } from '@/domains/home/data/homepage';

// Semantic icon map — keyed by HomeIconKey, replaces fragile index-based arrays
const HOME_ICON_MAP: Record<HomeIconKey, LucideIcon> = {
  // Signal surface
  'local-search': Search,
  'service-page': FileText,
  'form-enquiry': Inbox,
  'missed-call': PhoneOff,
  quote: ClipboardList,
  'review-opportunity': Star,
  'follow-up-due': Clock,
  // Flow stages (leak diagnosis)
  visibility: Search,
  website: FileText,
  enquiry: Inbox,
  response: Clock,
  'follow-up': Repeat,
  proof: Star,
  'repeat-loop': Repeat,
  // Foundation layers
  capture: Inbox,
  routing: GitBranch,
  tracking: BarChart3,
  // Put in place zones
  inspect: ScanSearch,
  locate: Crosshair,
  fix: Wrench,
  keep: Activity,
  // Client shift
  handoff: GitBranch,
  schedule: Clock,
  // Pressure points
  'local-seo': EyeOff,
  'service-clarity': FileText,
  'scatter-enquiry': Inbox,
  'follow-up-memory': Clock,
  'revenue-trace': TrendingDown,
  // Structure layers
  'visibility-layer': Eye,
  'capture-layer': Inbox,
  'response-layer': Zap,
  'follow-up-layer': Repeat,
  'proof-layer': Star,
  'improvement-layer': TrendingUp,
  // Industries
  trades: Hammer,
  beauty: Scissors,
  professional: Briefcase,
  appointment: MapPin,
  'multi-service': Building2,
  // System stack cards
  'system-website': Globe,
  'system-local-seo': MapPin,
  'system-ai': Zap,
  'system-crm': Route,
  'system-review': Star,
  'system-revenue': TrendingUp,
  // Implementation patterns
  'missed-call-recovery': PhoneIncoming,
  'follow-up-sequence': Repeat,
  'service-page-structure': LayoutGrid,
  'review-flow': Star,
  'crm-routing': Route,
};

export default function Homepage() {
  return (
    <CTARegistryProvider pageId='page:home' pageType='page' primarySystem='smart-website-systems'>
      <div className='home-page'>
        <HeroSection />
        <LeakDiagnosisSection />
        <FoundationSection />
        <SystemStackSection />
        <PutInPlaceSection />
        <FitFoundationsSection />
        <ClientShiftSection />
        <PressurePointsSection />
        <StructureLayersSection />
        <IndustriesSection />
        <AlignmentSection />
        <ProofStorySection />
        <ImplementationExamplesSection />
        <FAQSection />
        <CTASection />
      </div>
    </CTARegistryProvider>
  );
}

// ============================================================
// HERO
// ============================================================

function HeroSection() {
  const { hero } = homepageData;

  return (
    <section className='home-hero' id='hero'>
      <div className='home-hero__texture' aria-hidden='true' />
      <div className='home-hero__inner mw-container'>
        <div className='home-hero__copy'>
          <div className='home-hero__eyebrow'>
            <span className='home-hero__eyebrow-dot' aria-hidden='true' />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className='home-hero__heading'>
            {hero.heading}
            <br />
            <span className='home-hero__heading--muted'>{hero.headingMuted}</span>
          </h1>

          <p className='home-hero__description'>{hero.description}</p>

          <div className='home-hero__actions'>
            <a href={hero.primaryAction.href} className='mw-btn mw-btn--white'>
              {hero.primaryAction.label}
              <ArrowRight size={16} aria-hidden='true' />
            </a>
            <a href={hero.secondaryAction.href} className='home-hero__secondary-action'>
              {hero.secondaryAction.label}
              <ArrowRight size={14} aria-hidden='true' />
            </a>
          </div>

          <div className='home-hero__chips'>
            {hero.chips.map(chip => (
              <span key={chip.label} className='home-hero__chip' data-accent={chip.accent}>
                <span className='home-hero__chip-dot' aria-hidden='true' />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className='home-hero__signal'>
          <SignalSurface />
        </div>
      </div>
    </section>
  );
}

function SignalSurface() {
  const { hero } = homepageData;

  return (
    <div className='home-signal'>
      <div className='home-signal__header'>
        <div>
          <div className='home-signal__label'>Signal Surface</div>
          <div className='home-signal__subtitle'>What your business looks like today</div>
        </div>
        <div className='home-signal__count'>
          <div className='home-signal__count-label'>{hero.signalCountLabel}</div>
          <div className='home-signal__count-value'>07</div>
        </div>
      </div>

      <div className='home-signal__rows'>
        {hero.signals.map((signal, i) => {
          const Icon = HOME_ICON_MAP[signal.iconKey];
          return (
            <div key={signal.label} className='home-signal__row' data-status={signal.status}>
              <span className='home-signal__row-index'>{String(i + 1).padStart(2, '0')}</span>
              <span className='home-signal__row-icon' aria-hidden='true'>
                <Icon size={14} />
              </span>
              <span className='home-signal__row-copy'>
                <span className='home-signal__row-label'>{signal.label}</span>
                <span className='home-signal__row-note'>{signal.note}</span>
              </span>
              <span className='home-signal__row-badge'>
                <span className='home-signal__row-badge-dot' aria-hidden='true' />
                {signal.status.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>

      <div className='home-signal__footer'>
        <span className='home-signal__footer-leak'>{hero.signalSummary.leaking}</span>
        <span className='home-signal__footer-unowned'>{hero.signalSummary.unowned}</span>
        <span className='home-signal__footer-pull'>
          <span className='home-signal__footer-pull-dot' aria-hidden='true' />
          {hero.signalSummary.pulling}
        </span>
      </div>
    </div>
  );
}

// ============================================================
// LEAK DIAGNOSIS
// ============================================================

function LeakDiagnosisSection() {
  const { leakDiagnosis } = homepageData;

  return (
    <section className='home-leak' id='leak'>
      <div className='home-leak__inner mw-container'>
        <div className='home-leak__header mw-animate-up'>
          <div className='home-leak__intro'>
            <div className='home-eyebrow'>{leakDiagnosis.eyebrow}</div>
            <h2 className='home-h2'>
              {leakDiagnosis.heading}
              <br />
              <span className='home-h2__muted'>{leakDiagnosis.headingMuted}</span>
            </h2>
          </div>
          <p className='home-leak__description'>{leakDiagnosis.description}</p>
        </div>

        <div className='home-leak__path mw-animate-stagger'>
          {leakDiagnosis.flowStages.map(item => {
            const Icon = HOME_ICON_MAP[item.iconKey];
            return (
              <div key={item.stage} className='home-leak__step'>
                <div className='home-leak__step-icon' aria-hidden='true'>
                  <Icon size={16} />
                </div>
                <div className='home-leak__step-copy'>
                  <div className='home-leak__step-stage'>{item.stage}</div>
                  <div className='home-leak__step-title'>{item.title}</div>
                  <div className='home-leak__step-note'>{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOUNDATION
// ============================================================

function FoundationSection() {
  const { foundation } = homepageData;

  return (
    <section className='home-foundation'>
      <div className='home-foundation__inner mw-container'>
        <div className='home-foundation__copy mw-animate-up'>
          <div className='home-eyebrow home-eyebrow--teal'>{foundation.eyebrow}</div>
          <h2 className='home-h2'>
            {foundation.heading}
            <br />
            <span className='home-h2__muted'>{foundation.headingMuted}</span>
          </h2>
          <p className='home-foundation__description'>{foundation.description}</p>
        </div>

        <div className='home-foundation__visual mw-animate-panel'>
          <div className='home-foundation__diagram'>
            {/* Surface card */}
            <div className='home-foundation__surface'>
              <div className='home-foundation__surface-icon' aria-hidden='true'>
                {(() => {
                  const SurfaceIcon = HOME_ICON_MAP[foundation.surfaceIconKey];
                  return <SurfaceIcon size={18} />;
                })()}
              </div>
              <div className='home-foundation__surface-body'>
                <div className='home-foundation__surface-label'>SURFACE</div>
                <div className='home-foundation__surface-title'>{foundation.surfaceTitle}</div>
              </div>
              <div className='home-foundation__surface-note'>{foundation.surfaceNote}</div>
            </div>

            <div className='home-foundation__connector' aria-hidden='true' />

            {/* Under panel */}
            <div className='home-foundation__under'>
              <div className='home-foundation__under-label'>WHAT RUNS UNDERNEATH</div>
              <div className='home-foundation__layers'>
                {foundation.middleLayers.map(layer => {
                  const Icon = HOME_ICON_MAP[layer.iconKey];
                  return (
                    <div key={layer.label} className='home-foundation__layer'>
                      <div className='home-foundation__layer-icon' aria-hidden='true'>
                        <Icon size={14} />
                      </div>
                      <span>{layer.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='home-foundation__connector' aria-hidden='true' />

            {/* Foundation base card */}
            <div className='home-foundation__base'>
              <div className='home-foundation__base-dot' aria-hidden='true' />
              <div className='home-foundation__base-body'>
                <div className='home-foundation__base-label'>FOUNDATION</div>
                <div className='home-foundation__base-title'>{foundation.foundationTitle}</div>
              </div>
              <div className='home-foundation__base-note'>{foundation.foundationNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SIX SYSTEM STACK
// ============================================================

function SystemStackSection() {
  const { systemStack } = homepageData;

  return (
    <section className='home-system-stack'>
      <div className='home-system-stack__inner mw-container'>
        <div className='home-system-stack__header mw-animate-up'>
          <div className='home-system-stack__intro'>
            <div className='home-eyebrow'>{systemStack.eyebrow}</div>
            <h2 className='home-h2'>
              {systemStack.heading}
              <br />
              <span className='home-h2__muted'>{systemStack.headingMuted}</span>
            </h2>
          </div>
          <p className='home-system-stack__description'>{systemStack.description}</p>
        </div>

        <div className='home-system-stack__grid mw-animate-stagger'>
          {systemStack.systems.map((system, i) => {
            const SystemIcon = HOME_ICON_MAP[system.iconKey];
            return (
              <a
                key={system.name}
                href={system.href}
                className='home-system-card'
                data-accent={system.accent}
              >
                <div className='home-system-card__top'>
                  <div className='home-system-card__icon' aria-hidden='true'>
                    <SystemIcon size={18} />
                  </div>
                  <span className='home-system-card__index'>0{i + 1}</span>
                </div>
                <div className='home-system-card__name'>{system.name}</div>
                <div className='home-system-card__role'>
                  {system.role}
                  {' · '}
                  <span className='home-system-card__role-note'>{system.roleNote}</span>
                </div>
                <div className='home-system-card__divider' aria-hidden='true' />
                <div className='home-system-card__handles-label'>What it handles</div>
                <div className='home-system-card__handles'>{system.handles}</div>
                <div className='home-system-card__line' aria-hidden='true' />
              </a>
            );
          })}
        </div>

        <div className='home-system-stack__footer'>
          <p className='home-system-stack__footer-note'>{systemStack.footerNote}</p>
          <a href={systemStack.footerAction.href} className='home-system-stack__footer-action'>
            {systemStack.footerAction.label}
            <ArrowRight size={14} aria-hidden='true' />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PUT IN PLACE
// ============================================================

function PutInPlaceSection() {
  const { putInPlace } = homepageData;

  return (
    <section className='home-workbench'>
      <div className='home-workbench__inner mw-container'>
        <div className='home-workbench__intro mw-animate-up'>
          <div className='home-eyebrow'>{putInPlace.eyebrow}</div>
          <h2 className='home-h2'>{putInPlace.heading}</h2>
          <p className='home-workbench__description'>{putInPlace.description}</p>
        </div>

        <div className='home-workbench__card mw-animate-panel'>
          <div className='home-workbench__card-header'>
            <div className='home-workbench__card-dots' aria-hidden='true'>
              <span />
              <span />
              <span />
            </div>
            <span className='home-workbench__card-title'>How it gets put in place</span>
          </div>

          <div className='home-workbench__steps'>
            {putInPlace.zones.map(step => {
              const Icon = HOME_ICON_MAP[step.iconKey];
              return (
                <div key={step.title} className='home-workbench__step'>
                  <div className='home-workbench__step-icon' aria-hidden='true'>
                    <Icon size={16} />
                  </div>
                  <div className='home-workbench__step-copy'>
                    <div className='home-workbench__step-title'>{step.title}</div>
                    <div className='home-workbench__step-body'>{step.body}</div>
                  </div>
                  <div className='home-workbench__step-state'>{step.state}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FIT FOUNDATIONS
// ============================================================

function FitFoundationsSection() {
  const { fitFoundations } = homepageData;

  return (
    <section className='home-fit'>
      <div className='home-fit__inner mw-container'>
        <div className='home-fit__intro mw-animate-up'>
          <h2 className='home-h2'>{fitFoundations.heading}</h2>
          <p className='home-fit__description'>{fitFoundations.description}</p>
        </div>

        <div className='home-fit__cards mw-animate-stagger'>
          <div className='home-fit__card home-fit__card--yes'>
            <div className='home-fit__card-badge home-fit__card-badge--yes'>
              <span className='home-fit__card-badge-icon' aria-hidden='true'>
                <Check size={13} />
              </span>
              <span>Strong fit</span>
            </div>
            <ul className='home-fit__list'>
              {fitFoundations.strongFit.map(item => (
                <li key={item} className='home-fit__item home-fit__item--yes'>
                  <span className='home-fit__item-dot' aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='home-fit__card home-fit__card--no'>
            <div className='home-fit__card-badge home-fit__card-badge--no'>
              <span className='home-fit__card-badge-icon' aria-hidden='true'>
                <Minus size={13} />
              </span>
              <span>Probably not right</span>
            </div>
            <ul className='home-fit__list'>
              {fitFoundations.poorFit.map(item => (
                <li key={item} className='home-fit__item home-fit__item--no'>
                  <span className='home-fit__item-dot' aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CLIENT SHIFT
// ============================================================

function ClientShiftSection() {
  const { clientShift } = homepageData;

  return (
    <section className='home-shift'>
      <div className='home-shift__inner mw-container'>
        <div className='home-shift__intro mw-animate-up'>
          <h2 className='home-h2 home-h2--on-dark'>{clientShift.heading}</h2>
          <p className='home-shift__description'>{clientShift.description}</p>
        </div>

        <div className='home-shift__layout'>
          {/* BEFORE — scattered items panel */}
          <div className='home-shift__before'>
            <div className='home-shift__panel-header'>
              <span className='home-shift__panel-label home-shift__panel-label--before'>
                {clientShift.before.label}
              </span>
              <span className='home-shift__panel-badge home-shift__panel-badge--before'>
                <span className='home-shift__panel-badge-dot' aria-hidden='true' />
                {clientShift.before.stateLabel}
              </span>
            </div>
            <div className='home-shift__scatter' aria-hidden='true'>
              {clientShift.scatterItems.map(item => (
                <span key={item} className='home-shift__scatter-item'>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* SYSTEM connector */}
          <div className='home-shift__system' aria-hidden='true'>
            <span className='home-shift__system-label'>SYSTEM</span>
          </div>

          {/* AFTER — structured rows */}
          <div className='home-shift__after'>
            <div className='home-shift__panel-header'>
              <span className='home-shift__panel-label home-shift__panel-label--after'>
                {clientShift.after.label}
              </span>
              <span className='home-shift__panel-badge home-shift__panel-badge--after'>
                <span className='home-shift__panel-badge-dot' aria-hidden='true' />
                {clientShift.after.stateLabel}
              </span>
            </div>
            <div className='home-shift__rows mw-animate-stagger'>
              {clientShift.shifts.map(shift => {
                const Icon = HOME_ICON_MAP[shift.iconKey];
                return (
                  <div key={shift.title} className='home-shift__row'>
                    <div className='home-shift__row-icon' aria-hidden='true'>
                      <Icon size={16} />
                    </div>
                    <div className='home-shift__row-copy'>
                      <div className='home-shift__row-title'>{shift.title}</div>
                      <div className='home-shift__row-compare'>
                        <span className='home-shift__row-before'>{shift.before}</span>
                        <ArrowRight
                          size={12}
                          className='home-shift__row-arrow'
                          aria-hidden='true'
                        />
                        <span className='home-shift__row-after'>{shift.after}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PRESSURE POINTS / CAPABILITIES
// ============================================================

function PressurePointsSection() {
  const { pressurePoints } = homepageData;

  return (
    <section className='home-pressure'>
      <div className='home-pressure__inner mw-container'>
        <div className='home-pressure__intro mw-animate-up'>
          <div className='home-eyebrow home-eyebrow--on-dark'>{pressurePoints.eyebrow}</div>
          <h2 className='home-h2 home-h2--on-dark'>{pressurePoints.heading}</h2>
          <p className='home-pressure__description'>{pressurePoints.description}</p>
        </div>

        <div className='home-pressure__grid mw-animate-stagger'>
          {pressurePoints.points.map(point => {
            const Icon = HOME_ICON_MAP[point.iconKey];
            return (
              <div key={point.title} className='home-pressure__point' data-accent={point.accent}>
                <div className='home-pressure__point-icon' aria-hidden='true'>
                  <Icon size={18} />
                </div>
                <h3 className='home-pressure__point-title'>{point.title}</h3>
                <p className='home-pressure__point-flow'>{point.flow}</p>
                <div className='home-pressure__point-handled'>
                  <span className='home-pressure__point-handled-label'>Handled by</span>
                  <span className='home-pressure__point-handled-value'>{point.handledBy}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// STRUCTURE LAYERS / INFRASTRUCTURE
// ============================================================

function StructureLayersSection() {
  const { structureLayers } = homepageData;

  return (
    <section className='home-structure'>
      <div className='home-structure__inner mw-container'>
        <div className='home-structure__copy mw-animate-up'>
          <h2 className='home-h2'>
            {structureLayers.heading}
            <br />
            <span className='home-h2__muted'>{structureLayers.headingMuted}</span>
          </h2>
          <p className='home-structure__description'>{structureLayers.description}</p>
        </div>

        <div className='home-structure__layers mw-animate-stagger'>
          {structureLayers.layers.map((layer, i) => {
            const Icon = HOME_ICON_MAP[layer.iconKey];
            return (
              <div key={layer.title} className='home-structure__layer' data-accent={layer.accent}>
                <div className='home-structure__layer-icon' aria-hidden='true'>
                  <Icon size={16} />
                </div>
                <div className='home-structure__layer-copy'>
                  <div className='home-structure__layer-title'>
                    <span className='home-structure__layer-index'>L{i + 1}</span>
                    {layer.title}
                  </div>
                  <div className='home-structure__layer-note'>{layer.note}</div>
                </div>
                <div className='home-structure__layer-status'>
                  <span className='home-structure__layer-status-dot' aria-hidden='true' />
                  {structureLayers.layerStatus}
                </div>
              </div>
            );
          })}

          {/* Foundation anchor card */}
          <div className='home-structure__foundation'>
            <div className='home-structure__foundation-dot' aria-hidden='true' />
            <div className='home-structure__foundation-copy'>
              <div className='home-structure__foundation-label'>FOUNDATION</div>
              <div className='home-structure__foundation-title'>
                {structureLayers.foundation.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// INDUSTRIES
// ============================================================

function IndustriesSection() {
  const { industries } = homepageData;

  return (
    <section className='home-industries'>
      <div className='home-industries__inner mw-container'>
        <div className='home-industries__header mw-animate-up'>
          <div className='home-industries__intro'>
            <div className='home-eyebrow'>{industries.eyebrow}</div>
            <h2 className='home-h2'>
              {industries.heading}
              <br />
              <span className='home-h2__muted'>{industries.headingMuted}</span>
            </h2>
          </div>
          <p className='home-industries__description'>{industries.description}</p>
        </div>

        <div className='home-industries__grid mw-animate-stagger'>
          {industries.scenarios.map((scenario, i) => {
            const Icon = HOME_ICON_MAP[scenario.iconKey];
            return (
              <a
                key={scenario.name}
                href={scenario.href}
                className='home-industry-card'
                data-accent={scenario.accent}
                data-wide={i === industries.scenarios.length - 1 ? 'true' : undefined}
              >
                <div className='home-industry-card__top'>
                  <div className='home-industry-card__icon-wrap'>
                    <div className='home-industry-card__icon' aria-hidden='true'>
                      <Icon size={18} />
                    </div>
                    <span className='home-industry-card__name'>{scenario.name}</span>
                  </div>
                  <span className='home-industry-card__index'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className='home-industry-card__body'>
                  <div className='home-industry-card__leak-label'>Where it leaks</div>
                  <p className='home-industry-card__leak'>{scenario.leak}</p>
                </div>

                <div className='home-industry-card__needs'>
                  <div className='home-industry-card__needs-label'>What it needs</div>
                  <div className='home-industry-card__tags'>
                    {scenario.needs.map(need => (
                      <span
                        key={need}
                        className='home-industry-card__tag'
                        data-accent={scenario.accent}
                      >
                        <span className='home-industry-card__tag-dot' aria-hidden='true' />
                        {need}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ALIGNMENT / VISIBILITY COMPOUNDING
// ============================================================

function AlignmentSection() {
  const { alignment } = homepageData;

  return (
    <section className='home-alignment'>
      <div className='home-alignment__inner mw-container'>
        <div className='home-alignment__intro mw-animate-up'>
          <div className='home-eyebrow'>{alignment.eyebrow}</div>
          <h2 className='home-h2'>
            {alignment.heading}
            <br />
            <span className='home-h2__muted'>{alignment.headingMuted}</span>
          </h2>
          <p className='home-alignment__description'>{alignment.description}</p>
        </div>

        <div className='home-alignment__arc-card mw-animate-panel'>
          <svg
            className='home-alignment__arc-svg'
            viewBox='0 0 1200 480'
            preserveAspectRatio='none'
            fill='none'
            aria-hidden='true'
          >
            <defs>
              <linearGradient id='mw-arc-stroke' x1='0' x2='1' y1='0' y2='0'>
                <stop offset='0%' stopColor='var(--mw-signal-red)' stopOpacity='0.5' />
                <stop offset='40%' stopColor='var(--mw-signal-amber)' stopOpacity='0.5' />
                <stop offset='80%' stopColor='var(--mw-signal-cyan)' stopOpacity='0.7' />
                <stop offset='100%' stopColor='var(--mw-signal-teal)' stopOpacity='0.9' />
              </linearGradient>
              <linearGradient id='mw-arc-fill' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor='var(--mw-signal-cyan)' stopOpacity='0.18' />
                <stop offset='100%' stopColor='var(--mw-signal-cyan)' stopOpacity='0' />
              </linearGradient>
            </defs>
            <path
              d='M 60 380 C 280 360, 400 320, 600 240 S 1000 80, 1140 60 L 1140 460 L 60 460 Z'
              fill='url(#mw-arc-fill)'
            />
            <path
              d='M 60 380 C 280 360, 400 320, 600 240 S 1000 80, 1140 60'
              stroke='url(#mw-arc-stroke)'
              strokeWidth='2.5'
            />
          </svg>

          <div className='home-alignment__stages'>
            {alignment.stages.map((stage, _i) => (
              <div key={stage.num} className='home-alignment__stage'>
                <div className='home-alignment__stage-card'>
                  <div className='home-alignment__stage-top'>
                    <span className='home-alignment__stage-num'>{stage.num}</span>
                    <span className='home-alignment__stage-weight'>{stage.weight}%</span>
                  </div>
                  <div className='home-alignment__stage-title'>{stage.title}</div>
                  <div className='home-alignment__stage-note'>{stage.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROOF STORY / CASE STUDY
// ============================================================

function ProofStorySection() {
  const { proofStory } = homepageData;

  return (
    <section className='home-proof'>
      <div className='home-proof__inner mw-container'>
        <div className='home-proof__intro mw-animate-up'>
          <h2 className='home-h2'>
            {proofStory.heading}
            <br />
            <span className='home-h2__muted'>{proofStory.headingMuted}</span>
          </h2>
          <p className='home-proof__description'>{proofStory.description}</p>
        </div>

        <div className='home-proof__cards mw-animate-stagger'>
          <div className='home-proof__card home-proof__card--before'>
            <span className='home-proof__card-label home-proof__card-label--before'>
              {proofStory.before.label}
            </span>
            <div className='home-proof__card-title'>{proofStory.before.title}</div>
            <ul className='home-proof__bullets'>
              {proofStory.before.bullets.map(bullet => (
                <li key={bullet} className='home-proof__bullet home-proof__bullet--before'>
                  <span className='home-proof__bullet-dot' aria-hidden='true' />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className='home-proof__card home-proof__card--change'>
            <span className='home-proof__card-label home-proof__card-label--change'>
              {proofStory.change.label}
            </span>
            <div className='home-proof__card-title'>{proofStory.change.title}</div>
            <ul className='home-proof__bullets'>
              {proofStory.change.bullets.map(bullet => (
                <li key={bullet} className='home-proof__bullet home-proof__bullet--change'>
                  <span className='home-proof__bullet-dot' aria-hidden='true' />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className='home-proof__card home-proof__card--after'>
            <span className='home-proof__card-label home-proof__card-label--after'>
              {proofStory.after.label}
            </span>
            <div className='home-proof__card-title'>{proofStory.after.title}</div>
            <ul className='home-proof__bullets'>
              {proofStory.after.bullets.map(bullet => (
                <li key={bullet} className='home-proof__bullet home-proof__bullet--after'>
                  <span className='home-proof__bullet-dot' aria-hidden='true' />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='home-proof__quote-block'>
          <div className='home-proof__quote-icon' aria-hidden='true'>
            <Quote size={20} />
          </div>
          <div>
            <p className='home-proof__quote-text'>&ldquo;{proofStory.quote}&rdquo;</p>
            <div className='home-proof__quote-attribution'>
              <span className='home-proof__quote-avatar' aria-hidden='true' />
              {proofStory.quoteAttribution}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// IMPLEMENTATION EXAMPLES
// ============================================================

function ImplementationExamplesSection() {
  const { implementationExamples } = homepageData;

  return (
    <section className='home-examples'>
      <div className='home-examples__inner mw-container'>
        <div className='home-examples__intro mw-animate-up'>
          <div className='home-eyebrow'>{implementationExamples.eyebrow}</div>
          <h2 className='home-h2'>{implementationExamples.heading}</h2>
          <p className='home-examples__description'>{implementationExamples.description}</p>
        </div>

        <div className='home-examples__board mw-animate-panel'>
          <div className='home-examples__board-header'>
            <div className='home-examples__board-header-left'>
              <span className='home-examples__board-dot' aria-hidden='true' />
              <span className='home-examples__board-label'>
                {implementationExamples.boardLabel}
              </span>
            </div>
            <span className='home-examples__board-count'>
              {implementationExamples.implementationPatterns.length} patterns shown
            </span>
          </div>

          <div className='home-examples__grid mw-animate-stagger'>
            {implementationExamples.implementationPatterns.map((pattern, i) => {
              const Icon = HOME_ICON_MAP[pattern.iconKey];
              const isLast = i === implementationExamples.implementationPatterns.length - 1;
              return (
                <div
                  key={pattern.title}
                  className='home-example-cell'
                  data-wide={isLast ? 'true' : undefined}
                >
                  <div className='home-example-cell__top'>
                    <div className='home-example-cell__icon-wrap'>
                      <div className='home-example-cell__icon' aria-hidden='true'>
                        <Icon size={18} />
                      </div>
                      <span className='home-example-cell__index'>Pattern 0{i + 1}</span>
                    </div>
                  </div>
                  <div className='home-example-cell__title'>{pattern.title}</div>
                  <p className='home-example-cell__desc'>{pattern.desc}</p>
                  <div className='home-example-cell__flow'>
                    {pattern.flow.map((step, j) => (
                      <span key={step} className='home-example-cell__flow-items'>
                        <span
                          className='home-example-cell__flow-step'
                          data-last={j === pattern.flow.length - 1 ? 'true' : undefined}
                        >
                          {step}
                        </span>
                        {j < pattern.flow.length - 1 && (
                          <span className='home-example-cell__flow-arrow' aria-hidden='true'>
                            →
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ — uses <details>/<summary> for zero-JS accordion
// ============================================================

function FAQSection() {
  const { faq } = homepageData;
  const faqItems = faq.items.map((item: { question: string; answer: string }, i: number) => ({
    id: `home-faq-${i}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section className='home-faq'>
      <div className='home-faq__inner mw-container'>
        <div className='home-faq__heading-col mw-animate-up'>
          <h2 className='home-h2'>{faq.heading}</h2>
          <p className='home-faq__description'>{faq.description}</p>
        </div>
        <div className='home-faq__items'>
          <Accordion items={faqItems} initialOpenId='home-faq-0' className='mw-animate-list' />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA
// ============================================================

function CTASection() {
  const { cta } = homepageData;

  return (
    <DecisionPanel
      heading={{
        kicker: cta.eyebrow,
        title: cta.heading.title,
        subtitle: cta.heading.muted,
        description: cta.heading.description,
      }}
      actions={cta.actions}
      expectations={cta.expectations}
      reassurance={cta.footer}
    />
  );
}
