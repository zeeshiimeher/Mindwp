'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from './utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type?: 'single' | 'multiple';
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
}

function Accordion({
  type = 'single',
  defaultValue,
  collapsible: _collapsible,
  className,
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems(prev => {
        if (type === 'single') {
          return prev.includes(value) ? [] : [value];
        } else {
          return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        }
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div data-slot='accordion' className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

function AccordionItem({ className, value, children, ...props }: AccordionItemProps) {
  return (
    <div
      data-slot='accordion-item'
      data-value={value}
      className={cn('border-b last:border-b-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordion();
  const itemElement = React.useContext(AccordionItemContext);

  if (!itemElement) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  const isOpen = openItems.includes(itemElement);

  return (
    <div className='flex'>
      <button
        type='button'
        data-slot='accordion-trigger'
        data-state={isOpen ? 'open' : 'closed'}
        onClick={() => toggleItem(itemElement)}
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
    </div>
  );
}

const AccordionItemContext = React.createContext<string | undefined>(undefined);

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { openItems } = useAccordion();
  const itemElement = React.useContext(AccordionItemContext);

  if (!itemElement) {
    throw new Error('AccordionContent must be used within AccordionItem');
  }

  const isOpen = openItems.includes(itemElement);

  return (
    <div
      data-slot='accordion-content'
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'overflow-hidden text-sm transition-all',
        isOpen ? 'animate-accordion-down' : 'animate-accordion-up hidden'
      )}
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </div>
  );
}

// Wrapper to provide context to AccordionItem children
const OriginalAccordionItem = AccordionItem;

function AccordionItemWrapper({ value, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <OriginalAccordionItem value={value} {...props} />
    </AccordionItemContext.Provider>
  );
}

export { Accordion, AccordionItemWrapper as AccordionItem, AccordionTrigger, AccordionContent };
