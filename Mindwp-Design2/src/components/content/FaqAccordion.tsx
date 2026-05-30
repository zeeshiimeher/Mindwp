'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/cn';

export type FaqItem = { q: string; a: string };

/** Native (no-dependency) accordion for FAQ blocks. */
export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-[#e6eef3] rounded-2xl border border-[#e6eef3] bg-white', className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type='button'
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left'
            >
              <span className='text-[#08111f]' style={{ fontSize: '15.5px', fontWeight: 600 }}>
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={cn('shrink-0 text-[#6f8190] transition-transform', open && 'rotate-180')}
              />
            </button>
            {open && (
              <div className='px-5 pb-5 text-[#4c5e6f]' style={{ fontSize: '14.5px', lineHeight: 1.7 }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
