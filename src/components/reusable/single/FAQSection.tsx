'use client';

import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

import { SectionIntro } from './SectionIntro';

const BLOCK = 'faq';

/**
 * FAQSection - Reusable FAQ accordion component
 *
 * Displays a list of frequently asked questions with flexible display modes.
 * - displayMode="accordion" (interactive) vs displayMode="expanded" (all open)
 * - allowMultiple (accordion mode only)
 * - variant="default" vs variant="compact" (container width)
 */
export interface FAQItem {
  question: string;
  answer: string;
  q?: string;
  a?: string;
}

export interface FAQSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  faqs: FAQItem[];

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`faq`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  backgroundColor?: string;
  displayMode?: 'accordion' | 'expanded';
  showIcon?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  allowMultiple?: boolean;
  variant?: 'default' | 'compact';
}

export function FAQSection({
  badge,
  title,
  description,
  faqs,
  cssPrefix = '',
  backgroundColor = '',
  displayMode = 'accordion',
  showIcon = true,
  icon: IconComponent = AlertCircle,
  allowMultiple = false,
  variant = 'default',
}: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    displayMode === 'expanded' ? new Set(faqs.map((_, i) => i)) : new Set([0])
  );

  const toggleFAQ = (index: number) => {
    if (displayMode === 'expanded') return;

    setOpenIndexes(prev => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
        return newSet;
      }

      if (!allowMultiple) newSet.clear();
      newSet.add(index);
      return newSet;
    });
  };

  const isOpen = (index: number) => openIndexes.has(index);

  const containerClasses = variant === 'compact' ? 'l-max-w-3xl' : '';
  const cardSpacing = 'l-stack';

  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className={`${BLOCK}-container l-container ${containerClasses}`}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}

        <div className={`${BLOCK}-list ${cardSpacing}`}>
          {faqs.map((faq, index) => {
            const faqIsOpen = isOpen(index);
            const question = faq.question ?? faq.q ?? '';
            const answer = faq.answer ?? faq.a ?? '';

            return (
              <Card key={index} className={`${BLOCK}__card`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={cn(
                    `${BLOCK}__question-btn`,
                    displayMode === 'expanded' && `${BLOCK}__question-btn--static`
                  )}
                  aria-expanded={faqIsOpen}
                  aria-controls={`faq-answer-${index}`}
                  disabled={displayMode === 'expanded'}
                >
                  <div className={`${BLOCK}__question-row`}>
                    {showIcon && <IconComponent className={`${BLOCK}__q-icon`} />}
                    <h4 className={`${BLOCK}__q`}>{question}</h4>
                  </div>

                  {displayMode === 'accordion' && (
                    <div className={`${BLOCK}__chev-wrap`}>
                      {faqIsOpen ? (
                        <ChevronUp className={`${BLOCK}__chev`} />
                      ) : (
                        <ChevronDown className={`${BLOCK}__chev`} />
                      )}
                    </div>
                  )}
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`${BLOCK}__answer`}
                  data-open={faqIsOpen ? 'true' : 'false'}
                >
                  <div className={`${BLOCK}__answer-content`}>{answer}</div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
