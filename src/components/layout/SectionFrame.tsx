import { InlineText } from '@/components/primitives/InlineText';

// -- Types --------------------------------------------------------------------

type SectionFrameTone = 'mist' | 'white' | 'dark';

/**
 * 'narrow' constrains the heading block to a readable max-width (56ch).
 * Default leaves the header width unconstrained.
 */
type SectionFrameHeaderWidth = 'default' | 'narrow';

/**
 * 'relaxed' increases the gap between the heading block and body content.
 * Default uses the standard content gap.
 */
type SectionFrameGap = 'default' | 'relaxed';

type SectionFrameHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type SectionFrameProps = {
  heading: SectionFrameHeading;
  tone?: SectionFrameTone;
  headerWidth?: SectionFrameHeaderWidth;
  gap?: SectionFrameGap;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
};

// -- Component ----------------------------------------------------------------

/**
 * SectionFrame — standard section wrapper.
 *
 * Owns: <section>, mw-container, heading block (kicker, h2, description), tone,
 * header width, and header–body gap.
 * Use [[muted:...]] inline syntax in heading.title for muted segments.
 */
export function SectionFrame({
  heading,
  tone,
  headerWidth,
  gap,
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
    headerWidth === 'narrow' ? 'mw-section-frame--header-narrow' : null,
    gap === 'relaxed' ? 'mw-section-frame--gap-relaxed' : null,
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
            <InlineText value={heading.title} />
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
