import type React from 'react';

import { InlineText } from '@/components/primitives/InlineText';

// -- Types --------------------------------------------------------------------

type HeroFrameChipDotVariant = 'subtle' | 'warn' | 'risk' | 'neutral';

type HeroFrameTone =
  | 'gradient-hero'
  | 'gradient-dark'
  | 'gradient-teal'
  | 'dark'
  | 'mist'
  | 'white'
  | 'none';

/** Rich chip with a per-chip accent colour, or a plain string (uses chipDotVariant). */
export type HeroFrameChip = string | { label: string; accent?: string };

export type HeroFrameAction = {
  label: string;
  href: string;
  variant?: 'white' | 'primary' | 'ghost';
  icon?: React.ReactNode;
};

export type HeroFrameProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions: readonly HeroFrameAction[];
  chips?: readonly HeroFrameChip[];
  chipDotVariant?: HeroFrameChipDotVariant;
  /** Background tone for the hero section. Defaults to 'gradient-hero'. */
  tone?: HeroFrameTone;
  /** Hero layout. 'split' = copy + visual columns. 'center' = single centered column (no visual). Defaults to 'split'. */
  layout?: 'split' | 'center';
  /** Right-side visual panel — page-local content, rendered in mw-hero-frame__visual slot. */
  visual?: React.ReactNode;
  /** Optional absolute-positioned texture/overlay rendered before the container. */
  texture?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * HeroFrame — full hero section wrapper.
 *
 * Owns: <section>, mw-container, hero split layout, eyebrow, h1, description,
 * action buttons, chip list, and optional right-side visual slot.
 *
 * Rules:
 * - No page-specific classes.
 * - No hardcoded contact URLs.
 * - Right-side visual content is page-local — passed via visual prop.
 * - Texture overlays (e.g. grid patterns) are passed via texture prop.
 * - Use [[muted:...]] inline syntax in title for muted segments.
 */
export function HeroFrame({
  eyebrow,
  title,
  description,
  actions,
  chips,
  chipDotVariant = 'subtle',
  tone = 'gradient-hero',
  layout = 'split',
  visual,
  texture,
  ariaLabel,
  className,
}: HeroFrameProps) {
  if (!title) {
    throw new Error('[HeroFrame] requires title');
  }

  const toneClass = tone === 'none' ? '' : ` mw-hero-frame--${tone}`;
  const layoutClass = ` mw-hero-frame--layout-${layout}`;

  // Auto-build a default signal panel from chips when split layout has no visual.
  const renderDefaultVisual = layout === 'split' && !visual && chips && chips.length > 0;
  const defaultChips = renderDefaultVisual ? chips : null;

  return (
    <section
      className={`mw-hero-frame${toneClass}${layoutClass}${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      {texture}
      <div className='mw-container'>
        <div className='mw-hero-frame__inner'>
          <div className='mw-hero-frame mw-animate-up'>
            {eyebrow && (
              <div className='mw-hero-frame__eyebrow'>
                <span className='mw-hero-frame__eyebrow-dot' aria-hidden='true' />
                <span className='mw-hero-frame__eyebrow-label'>{eyebrow}</span>
              </div>
            )}
            <h1 className='mw-hero-frame__heading'>
              <InlineText value={title} />
            </h1>
            <p className='mw-hero-frame__description'>{description}</p>
            <div className='mw-hero-frame__actions'>
              {actions.map(action => (
                <a
                  key={action.href}
                  href={action.href}
                  className={`mw-btn mw-btn--${action.variant ?? 'primary'}`}
                >
                  {action.label}
                  {action.icon}
                </a>
              ))}
            </div>
            {chips && chips.length > 0 && (
              <div className='mw-hero-frame__chips'>
                {chips.map((chip, i) => {
                  const label = typeof chip === 'string' ? chip : chip.label;
                  const variant =
                    typeof chip === 'string' ? chipDotVariant : (chip.accent ?? chipDotVariant);
                  return (
                    <div
                      key={label + String(i)}
                      className={`mw-hero-frame__chip mw-hero-frame__chip--${variant}`}
                    >
                      <span className='mw-hero-frame__chip-dot' aria-hidden='true' />
                      <span className='mw-hero-frame__chip-label'>{label}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {layout === 'split' && visual && <div className='mw-hero-frame__visual'>{visual}</div>}
          {renderDefaultVisual && defaultChips && (
            <div className='mw-hero-frame__visual'>
              <div className='mw-hero-frame__default-visual mw-animate-panel' aria-hidden='true'>
                <div className='mw-hero-frame__panel'>
                  <div className='mw-hero-frame__panel-header'>
                    <span className='mw-hero-frame__panel-label'>{eyebrow ?? 'System status'}</span>
                    <span className='mw-hero-frame__panel-live'>
                      <span className='mw-hero-frame__panel-live-dot' aria-hidden='true' />
                      <span>Live</span>
                    </span>
                  </div>
                  <ul className='mw-hero-frame__panel-list'>
                    {defaultChips.map((chip, i) => {
                      const label = typeof chip === 'string' ? chip : chip.label;
                      const variant =
                        typeof chip === 'string' ? chipDotVariant : (chip.accent ?? chipDotVariant);
                      return (
                        <li
                          key={`dv-${label}-${i}`}
                          className={`mw-hero-frame__panel-row mw-hero-frame__panel-row--${variant}`}
                        >
                          <span className='mw-hero-frame__panel-dot' aria-hidden='true' />
                          <span className='mw-hero-frame__panel-row-label'>{label}</span>
                          <span className='mw-hero-frame__panel-row-state'>Connected</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className='mw-hero-frame__panel-footer'>
                    <span>Connected systems</span>
                    <span>Operating</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
