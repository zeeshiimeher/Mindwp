// -- Types --------------------------------------------------------------------

type HeroFrameChipDotVariant = 'subtle' | 'warn' | 'risk' | 'neutral';

export type HeroFrameProps = {
  badge?: string;
  title: string;
  description: string;
  actions: React.ReactNode;
  chips?: readonly string[];
  chipDotVariant?: HeroFrameChipDotVariant;
  className?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * HeroFrame — shared hero copy-side block.
 *
 * Renders the left/copy side of a hero section: badge, h1, description,
 * action buttons, and optional chip list.
 *
 * Rules:
 * - No page-specific classes.
 * - No hardcoded contact URLs.
 * - No old SectionShell, rd-* imports.
 * - Right-side visual panels remain page-local — NOT passed as children.
 */
export function HeroFrame({
  badge,
  title,
  description,
  actions,
  chips,
  chipDotVariant = 'subtle',
  className,
}: HeroFrameProps) {
  if (!title) {
    throw new Error('[HeroFrame] requires title');
  }

  return (
    <div className={`mw-hero-frame mw-animate-up${className ? ` ${className}` : ''}`}>
      {badge && (
        <div className='mw-hero-frame__badge'>
          <span className='mw-hero-frame__badge-dot' aria-hidden='true' />
          <span className='mw-hero-frame__badge-label'>{badge}</span>
        </div>
      )}
      <h1 className='mw-hero-frame__heading'>{title}</h1>
      <p className='mw-hero-frame__description'>{description}</p>
      <div className='mw-hero-frame__actions'>{actions}</div>
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
  );
}
