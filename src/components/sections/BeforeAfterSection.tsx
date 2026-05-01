import { Check, Minus } from 'lucide-react';

import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading } from './types';

export type BeforeAfterVariant = 'split-panel' | 'scorecard';

export interface BeforeAfterColumn {
  label: string;
  title: string;
  items: readonly string[];
}

export interface BeforeAfterSectionProps {
  variant?: BeforeAfterVariant;
  density?: SectionDensity;
  heading: SectionHeading;
  before: BeforeAfterColumn;
  after: BeforeAfterColumn;
}

/**
 * BeforeAfterSection — dark split-panel comparison.
 */
export function BeforeAfterSection({
  variant = 'split-panel',
  density = 'default',
  heading,
  before,
  after,
}: BeforeAfterSectionProps) {
  if (
    before.label.trim().length === 0 ||
    before.title.trim().length === 0 ||
    before.items.length === 0 ||
    after.label.trim().length === 0 ||
    after.title.trim().length === 0 ||
    after.items.length === 0
  ) {
    throw new Error('[BeforeAfterSection] Invalid data');
  }

  if (
    before.items.some(item => item.trim().length === 0) ||
    after.items.some(item => item.trim().length === 0)
  ) {
    throw new Error('[BeforeAfterSection] Invalid data');
  }

  return (
    <SectionShell
      tone='gradient-blue'
      density={density}
      heading={heading}
      align='center'
      sectionClassName={`before-after before-after--${variant}`}
    >
      <div className='before-after__inner'>
        <article className='before-after__column before-after__column--before rd-animate-up'>
          <header className='before-after__head'>
            <span className='before-after__label before-after__label--risk'>{before.label}</span>
            <h3 className='before-after__title'>{before.title}</h3>
          </header>
          <ul className='before-after__list rd-animate-stagger'>
            {before.items.map(item => (
              <li key={item} className='before-after__item before-after__item--risk'>
                <span className='before-after__item-icon' aria-hidden='true'>
                  <Minus size={14} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className='before-after__column before-after__column--after rd-animate-up'>
          <header className='before-after__head'>
            <span className='before-after__label before-after__label--good'>{after.label}</span>
            <h3 className='before-after__title'>{after.title}</h3>
          </header>
          <ul className='before-after__list rd-animate-stagger'>
            {after.items.map(item => (
              <li key={item} className='before-after__item before-after__item--good'>
                <span className='before-after__item-icon' aria-hidden='true'>
                  <Check size={14} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
