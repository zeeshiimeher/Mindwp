import type { HTMLAttributes, ReactNode } from 'react';

import type { SectionAlign, SectionDensity, SectionHeading, SectionTone } from './types';

interface SectionShellProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  tone?: SectionTone;
  density?: SectionDensity;
  align?: SectionAlign;
  heading?: SectionHeading;
  /** Additional class for the outer <section>. */
  sectionClassName?: string;
  /** Additional class for the rd-container. */
  containerClassName?: string;
  /** Additional content rendered inside the section head, after the description. */
  headingTrailing?: ReactNode;
  /** When true, omit the rd-section-inner wrapper. */
  bare?: boolean;
  children: ReactNode;
}

const TONE_CLASS: Record<SectionTone, string> = {
  light: 'bg-body',
  soft: 'bg-surface-soft',
  dark: 'bg-dark',
  'gradient-blue': 'bg-gradient-blue',
  'gradient-cta': 'bg-gradient-cta',
};

const DENSITY_CLASS: Record<SectionDensity, string> = {
  default: '',
  compact: 'rd-section--compact',
  spacious: 'rd-section--spacious',
};

const ALIGN_CLASS: Record<SectionAlign, string> = {
  left: 'rd-section-head--left',
  center: 'rd-section-head--center',
  split: 'rd-section-head--split',
};

/**
 * SectionShell — shared wrapper for production section components.
 *
 * Owns: <section>, container, optional section-head with kicker/title/desc,
 * tone/density/align variants, and the `rd-animate-section` opt-in for
 * the in-view reveal mechanism.
 */
export function SectionShell({
  tone = 'light',
  density = 'default',
  align = 'left',
  heading,
  sectionClassName,
  containerClassName,
  headingTrailing,
  bare = false,
  className,
  children,
  ...rest
}: SectionShellProps) {
  const sectionClasses = [
    'rd-section',
    DENSITY_CLASS[density],
    TONE_CLASS[tone],
    'rd-animate-section',
    sectionClassName,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerClasses = ['rd-container', containerClassName].filter(Boolean).join(' ');

  const headBlock = heading ? (
    <div className={`rd-section-head ${ALIGN_CLASS[align]}`}>
      {heading.kicker ? <span className='rd-section-kicker'>{heading.kicker}</span> : null}
      <h2 className='rd-section-title'>{heading.title}</h2>
      {heading.description ? <p className='rd-section-description'>{heading.description}</p> : null}
      {headingTrailing}
    </div>
  ) : null;

  return (
    <section className={sectionClasses} {...rest}>
      <div className={containerClasses}>
        {bare ? (
          <>
            {headBlock}
            {children}
          </>
        ) : (
          <div className='rd-section-inner'>
            {headBlock}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
