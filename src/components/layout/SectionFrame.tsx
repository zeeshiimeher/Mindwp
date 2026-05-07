// -- Types --------------------------------------------------------------------

type SectionFrameHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type SectionFrameProps = {
  heading: SectionFrameHeading;
  className?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * SectionFrame — shared section header block.
 *
 * Replaces inline sws-head/sws-kicker/sws-h2/sws-lead (SWS) and
 * lsa-section__header/eyebrow/heading/description (LSA) patterns.
 *
 * Renders only the header block — not the outer <section> or mw-container.
 * Place inside the page section's mw-container alongside section content.
 *
 * Rules:
 * - No page-specific classes.
 * - No hardcoded colours or values.
 * - No rd-* or old SectionShell imports.
 */
export function SectionFrame({ heading, className }: SectionFrameProps) {
  if (!heading.title) {
    throw new Error('[SectionFrame] requires heading.title');
  }

  return (
    <header className={`mw-section-frame__header mw-animate-up${className ? ` ${className}` : ''}`}>
      {heading.kicker && (
        <div className='mw-section-frame__eyebrow'>
          <span className='mw-section-frame__eyebrow-dot' aria-hidden='true' />
          <span>{heading.kicker}</span>
        </div>
      )}
      <h2 className='mw-section-frame__heading'>{heading.title}</h2>
      {heading.description && (
        <p className='mw-section-frame__description'>{heading.description}</p>
      )}
    </header>
  );
}
