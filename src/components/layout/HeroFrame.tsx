import type React from 'react';

// -- Types --------------------------------------------------------------------

type HeroFrameChipDotVariant = 'subtle' | 'warn' | 'risk' | 'neutral';

export type HeroFrameAction = {
  label: string;
  href: string;
  variant?: 'white' | 'primary' | 'ghost';
  icon?: React.ReactNode;
};

export type HeroFrameProps = {
  badge?: string;
  title: string;
  description: string;
  actions: readonly HeroFrameAction[];
  chips?: readonly string[];
  chipDotVariant?: HeroFrameChipDotVariant;
  /** Right-side visual panel — page-local content, rendered in mw-hero-section__visual slot. */
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
 * Owns: <section>, mw-container, hero split layout, badge, h1, description,
 * action buttons, chip list, and optional right-side visual slot.
 *
 * Rules:
 * - No page-specific classes.
 * - No hardcoded contact URLs.
 * - Right-side visual content is page-local — passed via visual prop.
 * - Texture overlays (e.g. grid patterns) are passed via texture prop.
 */
export function HeroFrame({
  badge,
  title,
  description,
  actions,
  chips,
  chipDotVariant = 'subtle',
  visual,
  texture,
  ariaLabel,
  className,
}: HeroFrameProps) {
  if (!title) {
    throw new Error('[HeroFrame] requires title');
  }

  return (
    <section
      className={`mw-hero-section${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      {texture}
      <div className='mw-container'>
        <div className='mw-hero-section__inner'>
          <div className='mw-hero-frame mw-animate-up'>
            {badge && (
              <div className='mw-hero-frame__badge'>
                <span className='mw-hero-frame__badge-dot' aria-hidden='true' />
                <span className='mw-hero-frame__badge-label'>{badge}</span>
              </div>
            )}
            <h1 className='mw-hero-frame__heading'>{title}</h1>
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
                {chips.map(chip => (
                  <div
                    key={chip}
                    className={`mw-hero-frame__chip mw-hero-frame__chip--${chipDotVariant}`}
                  >
                    <span className='mw-hero-frame__chip-dot' aria-hidden='true' />
                    <span className='mw-hero-frame__chip-label'>{chip}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {visual && <div className='mw-hero-section__visual'>{visual}</div>}
        </div>
      </div>
    </section>
  );
}
