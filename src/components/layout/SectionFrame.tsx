// -- Types --------------------------------------------------------------------

type SectionFrameTone = 'mist' | 'white' | 'dark';

type SectionFrameHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type SectionFrameProps = {
  heading: SectionFrameHeading;
  /** Optional muted sub-line rendered on a new line inside the h2. */
  titleMuted?: string;
  tone?: SectionFrameTone;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
};

// -- Component ----------------------------------------------------------------

export function SectionFrame({
  heading,
  titleMuted,
  tone,
  ariaLabel,
  className,
  children,
}: SectionFrameProps) {
  if (!heading.title) {
    throw new Error('[SectionFrame] requires heading.title');
  }

  const sectionClass = [
    'mw-section-frame',
    tone ? `mw-section-frame--${tone}` : null,
    className ?? null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass} aria-label={ariaLabel}>
      <div className='mw-container'>
        <div className='mw-section-frame__header mw-animate-up'>
          {heading.kicker && (
            <div className='mw-section-frame__eyebrow'>
              <span className='mw-section-frame__eyebrow-dot' aria-hidden={true} />
              <span>{heading.kicker}</span>
            </div>
          )}
          <h2 className='mw-section-frame__heading'>
            {heading.title}
            {titleMuted && (
              <>
                <br />
                <span className='mw-section-frame__heading-muted'>{titleMuted}</span>
              </>
            )}
          </h2>
          {heading.description && (
            <p className='mw-section-frame__description'>{heading.description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
