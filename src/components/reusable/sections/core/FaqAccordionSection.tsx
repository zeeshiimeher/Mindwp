import { SectionWrapper } from '@/components/reusable/primitives';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-faq-accordion-section';

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

export interface FaqAccordionSectionProps {
  title?: string;
  description?: string;
  faqs: FaqAccordionItem[];
  cssPrefix?: string;
}

export function FaqAccordionSection({
  title = 'Frequently Asked Questions',
  description,
  faqs = [],
  cssPrefix = '',
}: FaqAccordionSectionProps) {
  return (
    <SectionWrapper container='none' className={cn(BLOCK, cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        <div className={`${BLOCK}__header`}>
          <h2 className={`${BLOCK}__title`}>{title}</h2>
          {description && <p className={`${BLOCK}__description`}>{description}</p>}
        </div>
        <Accordion type='single' collapsible className={`${BLOCK}__accordion`}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className={`${BLOCK}__trigger`}>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className={`${BLOCK}__answer`}>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
