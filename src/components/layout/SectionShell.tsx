import { InlineText } from '@/components/primitives/InlineText';

// -- Types --------------------------------------------------------------------

type SectionShellTone =
  | 'mist'
  | 'white'
  | 'dark'
  | 'gradient-dark'
  | 'gradient-mist'
  | 'gradient-teal';

type SectionShellLayout = 'stack' | 'split';

type SectionShellRatio = '50-50' | '40-60' | '60-40';

type SectionShellHeading = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type SectionShellProps = {
  id?: string;
  heading: SectionShellHeading;
  tone?: SectionShellTone;
  layout?: SectionShellLayout;
  ratio?: SectionShellRatio;
  contentClassName?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
};

// -- Component ----------------------------------------------------------------

/**
 * SectionShell — standard section wrapper.
 *
 * Owns: <section>, mw-container, heading block (eyebrow, h2, description), tone/background,
 * section padding, and optional split layout.
 * Use [[muted:...]] inline syntax in heading.title for muted segments.
 * Default layout='stack'. Use layout='split' for side-by-side heading + content columns.
 */
export function SectionShell({
  id,
  heading,
  tone,
  layout,
  ratio,
  contentClassName,
  ariaLabel,
  className,
  children,
}: SectionShellProps) {
  if (!heading.title) {
    throw new Error('[SectionShell] requires heading.title');
  }

  const isSplit = layout === 'split';

  const sectionClass = [
    'mw-section-shell',
    tone ? `mw-section-shell--${tone}` : null,
    isSplit ? 'mw-section-shell--layout-split' : 'mw-section-shell--layout-stack',
    isSplit && ratio ? `mw-section-shell--ratio-${ratio}` : null,
    className ?? null,
  ]
    .filter(Boolean)
    .join(' ');

  const header = (
    <div className='mw-section-shell__header mw-animate-up'>
      {heading.eyebrow && (
        <div className='mw-section-shell__eyebrow'>
          <span className='mw-section-shell__eyebrow-dot' aria-hidden={true} />
          <span>{heading.eyebrow}</span>
        </div>
      )}
      <h2 className='mw-section-shell__heading'>
        <InlineText value={heading.title} />
      </h2>
      {heading.description && (
        <p className='mw-section-shell__description'>{heading.description}</p>
      )}
    </div>
  );

  return (
    <section id={id} className={sectionClass} aria-label={ariaLabel}>
      <div className='mw-container'>
        {isSplit ? (
          <div className='mw-section-shell__inner'>
            {header}
            <div
              className={['mw-section-shell__content', contentClassName].filter(Boolean).join(' ')}
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
