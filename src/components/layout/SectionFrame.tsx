import { InlineText } from '@/components/primitives/InlineText';

// -- Types --------------------------------------------------------------------

type SectionFrameTone =
  | 'mist'
  | 'white'
  | 'dark'
  | 'gradient-dark'
  | 'gradient-mist'
  | 'gradient-teal';

type SectionFrameLayout = 'stack' | 'split';

type SectionFrameRatio = '50-50' | '40-60' | '60-40';

type SectionFrameHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type SectionFrameProps = {
  heading: SectionFrameHeading;
  tone?: SectionFrameTone;
  layout?: SectionFrameLayout;
  ratio?: SectionFrameRatio;
  contentClassName?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
};

// -- Component ----------------------------------------------------------------

/**
 * SectionFrame — standard section wrapper.
 *
 * Owns: <section>, mw-container, heading block (kicker, h2, description), tone/background,
 * section padding, and optional split layout.
 * Use [[muted:...]] inline syntax in heading.title for muted segments.
 * Default layout='stack'. Use layout='split' for side-by-side heading + content columns.
 */
export function SectionFrame({
  heading,
  tone,
  layout,
  ratio,
  contentClassName,
  ariaLabel,
  className,
  children,
}: SectionFrameProps) {
  if (!heading.title) {
    throw new Error('[SectionFrame] requires heading.title');
  }

  const isSplit = layout === 'split';

  const sectionClass = [
    'mw-section-frame',
    tone ? `mw-section-frame--${tone}` : null,
    isSplit ? 'mw-section-frame--layout-split' : 'mw-section-frame--layout-stack',
    isSplit && ratio ? `mw-section-frame--ratio-${ratio}` : null,
    className ?? null,
  ]
    .filter(Boolean)
    .join(' ');

  const header = (
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
  );

  return (
    <section className={sectionClass} aria-label={ariaLabel}>
      <div className='mw-container'>
        {isSplit ? (
          <div className='mw-section-frame__inner'>
            {header}
            <div
              className={['mw-section-frame__content', contentClassName].filter(Boolean).join(' ')}
            >
              {children}
            </div>
          </div>
        ) : (
          <>
            {header}
            {children}
          </>
        )}
      </div>
    </section>
  );
}
