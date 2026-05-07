'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// -- Types --------------------------------------------------------------------

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

export type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * Accordion — generic FAQ accordion primitive.
 *
 * Rules:
 * - No page-specific classes.
 * - No sws-* or lsa-* imports.
 * - Uses mw-accordion* CSS from primitives.css.
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`mw-accordion${className ? ` ${className}` : ''}`} role='list'>
      {items.map(item => {
        const isOpen = openId === item.id;
        const buttonId = `mw-accordion-trigger-${item.id}`;
        const panelId = `mw-accordion-panel-${item.id}`;
        return (
          <div
            key={item.id}
            className='mw-accordion__item'
            data-state={isOpen ? 'open' : 'closed'}
            role='listitem'
          >
            <button
              id={buttonId}
              className='mw-accordion__trigger'
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              type='button'
            >
              <span>{item.question}</span>
              <ChevronDown className='mw-accordion__icon' aria-hidden={true} size={20} />
            </button>
            <div
              id={panelId}
              className='mw-accordion__content'
              role='region'
              aria-labelledby={buttonId}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
