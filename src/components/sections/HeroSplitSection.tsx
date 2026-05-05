import type { LucideIcon } from 'lucide-react';

import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

/**
 * Approved visual type for HeroSplitSection.
 * - system-feed: operational enquiry feed (Smart Website Systems)
 * - signal-grid: authority signal grid (Local SEO Authority)
 */
export type HeroVisualType = 'system-feed' | 'signal-grid';

export interface HeroSplitMetric {
  label: string;
  value: string;
  iconKey?: SectionIconKey;
  status?: 'good' | 'risk' | 'warn' | 'info';
}

export interface HeroSplitVisual {
  /** Optional title bar (e.g. brand / dashboard label). */
  brand?: string;
  /** Title displayed inside the visual panel. */
  title: string;
  subtitle: string;
  rows: ReadonlyArray<HeroSplitMetric>;
  footerPrimary?: string;
  footerSecondary?: string;
}

export interface HeroSplitAction {
  label: string;
  href: string;
  primary: true;
}

export interface HeroSplitSectionProps {
  /** Approved visual type. Determines right-column visual rendering intent. */
  visualType?: HeroVisualType;
  tone?: SectionTone;
  density?: SectionDensity;
  /** Pinned eyebrow chip above the H1. */
  kicker?: string;
  heading: SectionHeading;
  /** Inline status chips below the description. */
  chips?: readonly string[];
  /** Single primary action only. */
  actions: [HeroSplitAction];
  /** Right-column visual data (operational status mockup). */
  visual: HeroSplitVisual;
}

const STATUS_DOT: Record<NonNullable<HeroSplitMetric['status']>, string> = {
  good: 'rd-dot rd-dot--good',
  risk: 'rd-dot rd-dot--risk',
  warn: 'rd-dot rd-dot--warn',
  info: 'rd-dot rd-dot--info',
};

/**
 * HeroSplitSection — production hero with two-column operational layout.
 *
 * Replaces prototype `ServiceHeroOperational`. Visual content is
 * data-driven; decorative glow is a CSS pseudo-element.
 */
export function HeroSplitSection({
  visualType = 'system-feed',
  tone = 'gradient-blue',
  density = 'spacious',
  kicker,
  heading,
  chips,
  actions,
  visual,
}: HeroSplitSectionProps) {
  if (heading.title.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (heading.description.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (actions.length !== 1 || actions[0].primary !== true) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (actions[0].label.trim().length === 0 || actions[0].href.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (visual.title.trim().length === 0 || visual.subtitle.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (visual.brand !== undefined && visual.brand.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (visual.rows.length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  for (const row of visual.rows) {
    if (row.label.trim().length === 0 || row.value.trim().length === 0) {
      throw new Error('[HeroSplitSection] Invalid data');
    }
  }

  if (visual.footerPrimary !== undefined && visual.footerPrimary.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  if (visual.footerSecondary !== undefined && visual.footerSecondary.trim().length === 0) {
    throw new Error('[HeroSplitSection] Invalid data');
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      sectionClassName={`hero-split hero-split--${visualType}`}
      bare
    >
      <div className='hero-split__inner'>
        <div className='hero-split__content rd-animate-up'>
          {kicker ? <span className='rd-section-kicker'>{kicker}</span> : null}
          <h1 className='hero-split__title'>{heading.title}</h1>
          <p className='hero-split__description'>{heading.description}</p>

          {chips && chips.length > 0 ? (
            <ul className='hero-split__chips rd-animate-stagger'>
              {chips.map(chip => (
                <li key={chip} className='hero-split__chip rd-dot--info'>
                  <span>{chip}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className='hero-split__actions'>
            {actions.map(action => (
              <a key={action.label} href={action.href} className='rd-btn rd-btn--white'>
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <div className='hero-split__visual rd-animate-panel'>
          <div className='hero-split__panel' aria-hidden='true'>
            {visual.brand ? (
              <div className='hero-split__panel-bar'>
                <span className='hero-split__panel-dots'>
                  <span />
                  <span />
                  <span />
                </span>
                <span>{visual.brand}</span>
              </div>
            ) : null}

            <div className='hero-split__panel-title'>{visual.title}</div>
            <div className='hero-split__panel-subtitle'>{visual.subtitle}</div>

            <ul className='hero-split__panel-list rd-animate-stagger'>
              {visual.rows.map(row => {
                const Icon: LucideIcon | null = resolveSectionIcon(row.iconKey);
                return (
                  <li key={row.label} className='hero-split__panel-row'>
                    <span className='hero-split__panel-row-left'>
                      {Icon ? (
                        <span className='rd-icon-tile rd-icon-tile--sm'>
                          <Icon size={14} aria-hidden='true' />
                        </span>
                      ) : (
                        <span
                          className={row.status ? STATUS_DOT[row.status] : 'rd-dot rd-dot--info'}
                          aria-hidden='true'
                        />
                      )}
                      <span className='hero-split__panel-row-label'>{row.label}</span>
                    </span>
                    <span className='hero-split__panel-row-value'>{row.value}</span>
                  </li>
                );
              })}
            </ul>

            {visual.footerPrimary !== undefined || visual.footerSecondary !== undefined ? (
              <div className='hero-split__panel-footer'>
                {visual.footerPrimary ? <span>{visual.footerPrimary}</span> : null}
                {visual.footerSecondary ? <span>{visual.footerSecondary}</span> : null}
              </div>
            ) : null}
          </div>

          <span className='hero-split__glow rd-animate-glow' aria-hidden='true' />
        </div>
      </div>
    </SectionShell>
  );
}
