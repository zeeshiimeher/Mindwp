'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  items: readonly FaqItem[];
}

export default function SWSFaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className='sws-accordion' role='list'>
      {items.map(item => {
        const isOpen = openId === item.id;
        const buttonId = `sws-faq-trigger-${item.id}`;
        const panelId = `sws-faq-panel-${item.id}`;
        return (
          <div
            key={item.id}
            className='sws-accordion__item'
            data-state={isOpen ? 'open' : 'closed'}
            role='listitem'
          >
            <button
              id={buttonId}
              className='sws-accordion__trigger'
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              type='button'
            >
              <span>{item.question}</span>
              <ChevronDown className='sws-accordion__icon' aria-hidden={true} size={20} />
            </button>
            <div
              id={panelId}
              className='sws-accordion__content'
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
