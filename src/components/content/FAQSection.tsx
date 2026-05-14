import { SectionFrame } from '@/components/layout/SectionFrame';
import { Accordion } from '@/components/primitives/Accordion';

// -- Types --------------------------------------------------------------------

export type FAQSectionItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSectionTone = 'default' | 'mist' | 'white' | 'dark' | 'none';

export type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly FAQSectionItem[];
  initialOpenId?: string;
  defaultOpenFirst?: boolean;
  tone?: FAQSectionTone;
  /** Layout variant. 'split' = heading left, accordion right (2-col). Default = stacked. */
  variant?: 'stacked' | 'split';
  ariaLabel?: string;
  className?: string;
  accordionClassName?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * FAQSection — canonical FAQ section component.
 *
 * Wraps SectionFrame + Accordion. Owns full section structure.
 * No page-specific class names. Use className to add page-scope modifier.
 *
 * Split variant: heading on left, accordion on right.
 * Stacked variant (default): heading above, accordion below.
 */
export function FAQSection({
  eyebrow,
  title,
  description,
  items,
  initialOpenId,
  defaultOpenFirst = true,
  tone,
  variant = 'stacked',
  ariaLabel,
  className,
  accordionClassName,
}: FAQSectionProps) {
  const resolvedTone = tone === 'default' || tone === 'none' ? undefined : tone;
  const resolvedInitialOpenId = initialOpenId ?? (defaultOpenFirst ? items[0]?.id : undefined);

  if (variant === 'split') {
    // Split layout: SectionFrame renders heading block; FAQ body is 2-col via modifier
    return (
      <SectionFrame
        heading={{ eyebrow: eyebrow, title, description }}
        tone={resolvedTone}
        ariaLabel={ariaLabel}
        className={['mw-faq-section', 'mw-faq-section--split', className].filter(Boolean).join(' ')}
      >
        <div
          className={['mw-faq-section__accordion', accordionClassName].filter(Boolean).join(' ')}
        >
          <Accordion items={items} initialOpenId={resolvedInitialOpenId} />
        </div>
      </SectionFrame>
    );
  }

  return (
    <SectionFrame
      heading={{ eyebrow: eyebrow, title, description }}
      tone={resolvedTone}
      ariaLabel={ariaLabel}
      className={['mw-faq-section', className].filter(Boolean).join(' ')}
    >
      <div className={['mw-faq-section__accordion', accordionClassName].filter(Boolean).join(' ')}>
        <Accordion items={items} initialOpenId={resolvedInitialOpenId} />
      </div>
    </SectionFrame>
  );
}
