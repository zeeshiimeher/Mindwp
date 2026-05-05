import { Check, X } from 'lucide-react';

import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type QualificationVariant = 'fit-filter';

export interface QualificationItem {
  text: string;
  /** Optional short follow-up note rendered under the line. */
  note?: string;
}

export interface QualificationColumn {
  label: string;
  title: string;
  items: readonly QualificationItem[];
}

export interface QualificationSectionProps {
  variant?: QualificationVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  good: QualificationColumn;
  not: QualificationColumn;
}

/**
 * QualificationSection — fit / not-fit decision cards.
 *
 * Preserves the visual direction of prototype `FitCheckPanel`: two
 * balanced columns, "good" left and "not" right, marker icons on every
 * row.
 */
export function QualificationSection({
  variant = 'fit-filter',
  tone = 'soft',
  density = 'default',
  heading,
  good,
  not,
}: QualificationSectionProps) {
  const columns = [good, not];

  for (const column of columns) {
    if (column.label.trim().length === 0 || column.title.trim().length === 0) {
      throw new Error('[QualificationSection] Invalid data');
    }

    if (column.items.length === 0 || column.items.some(item => item.text.trim().length === 0)) {
      throw new Error('[QualificationSection] Invalid data');
    }

    if (column.items.some(item => item.note !== undefined && item.note.trim().length === 0)) {
      throw new Error('[QualificationSection] Invalid data');
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      align='center'
      sectionClassName={`fit-check fit-check--${variant}`}
    >
      <div className='fit-check__inner'>
        <FitColumn column={good} kind='good' />
        <FitColumn column={not} kind='not' />
      </div>
    </SectionShell>
  );
}

function FitColumn({ column, kind }: { column: QualificationColumn; kind: 'good' | 'not' }) {
  const Icon = kind === 'good' ? Check : X;
  return (
    <article className={`fit-check__column fit-check__column--${kind} rd-animate-up`}>
      <header className='fit-check__head'>
        <span className={`fit-check__label fit-check__label--${kind}`}>{column.label}</span>
        <h3 className='fit-check__title'>{column.title}</h3>
      </header>
      <ul className='fit-check__list rd-animate-stagger'>
        {column.items.map(item => (
          <li key={item.text} className={`fit-check__item fit-check__item--${kind}`}>
            <span className='fit-check__item-icon' aria-hidden='true'>
              <Icon size={14} strokeWidth={3} />
            </span>
            <span className='fit-check__item-body'>
              <span className='fit-check__item-text'>{item.text}</span>
              {item.note ? <span className='fit-check__item-note'>{item.note}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
