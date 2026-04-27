'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface PrototypeFAQProps {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly FaqItem[];
}

export function PrototypeFAQ({ eyebrow, title, description, items }: PrototypeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='rd-section'>
      <div className='rd-container'>
        <div className='rd-section-inner'>
          <div className='rd-section-head rd-section-head--center'>
            <span className='rd-section-kicker'>
              <span className='rd-dot rd-dot--neutral' />
              {eyebrow}
            </span>
            <h2 className='rd-section-title'>{title}</h2>
            <p className='rd-section-description'>{description}</p>
          </div>

          <div className='rd-sws-faq rd-stagger'>
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `rd-sws-faq-panel-${index}`;
              const buttonId = `rd-sws-faq-btn-${index}`;
              return (
                <div
                  key={item.question}
                  className={
                    isOpen ? 'rd-sws-faq__item rd-sws-faq__item--open' : 'rd-sws-faq__item'
                  }
                >
                  <button
                    type='button'
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className='rd-sws-faq__summary'
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className='rd-sws-faq__icon' aria-hidden='true'>
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role='region'
                    aria-labelledby={buttonId}
                    className='rd-sws-faq__content'
                  >
                    <div className='rd-sws-faq__answer'>{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
