'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type AccordionFAQVariant = 'single-column';

export interface AccordionFAQItem {
  /** Stable id used for keys + aria. */
  id: string;
  question: string;
  answer: string;
}

export interface AccordionFAQSectionProps {
  variant?: AccordionFAQVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  items: readonly AccordionFAQItem[];
  /** Id of the item that should start open. Defaults to none open. */
  defaultOpenId?: string;
}

/**
 * AccordionFAQSection — controlled FAQ accordion.
 *
 * Replaces prototype `PrototypeFAQ`. Strict contract: ONE item open at
 * a time, closed content fully hidden (display:none from rd-accordion).
 */
export function AccordionFAQSection({
  variant = 'single-column',
  tone = 'light',
  density = 'default',
  heading,
  items,
  defaultOpenId,
}: AccordionFAQSectionProps) {
  if (items.length === 0) {
    throw new Error('[AccordionFAQSection] Invalid data');
  }

  for (const item of items) {
    if (
      item.id.trim().length === 0 ||
      item.question.trim().length === 0 ||
      item.answer.trim().length === 0
    ) {
      throw new Error('[AccordionFAQSection] Invalid data');
    }
  }

  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName={`accordion-faq accordion-faq--${variant}`}
    >
      <div className='accordion-faq__inner'>
        <div className='accordion-faq__list'>
          <div className='rd-accordion'>
            {items.map(item => {
              const isOpen = openId === item.id;
              const buttonId = `faq-trigger-${item.id}`;
              const panelId = `faq-panel-${item.id}`;
              return (
                <div
                  key={item.id}
                  className='rd-accordion__item'
                  data-state={isOpen ? 'open' : 'closed'}
                >
                  <h3>
                    <button
                      type='button'
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className='rd-accordion__trigger'
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <ChevronDown size={18} aria-hidden='true' className='rd-accordion__icon' />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role='region'
                    aria-labelledby={buttonId}
                    className='rd-accordion__content'
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
