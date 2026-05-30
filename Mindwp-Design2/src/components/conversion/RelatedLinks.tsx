import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/cn';

export type RelatedLink = { label: string; href: string; note?: string };

/** Light internal-linking block. Data-fed, no heavy related-content engine. */
export function RelatedLinks({
  title = 'Related',
  links,
  className,
}: {
  title?: string;
  links: RelatedLink[];
  className?: string;
}) {
  return (
    <div className={cn('section-stack-sm', className)}>
      <div className='section-kicker text-[#6f8190]'>{title}</div>
      <ul className='grid gap-3 sm:grid-cols-2'>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='group flex items-center justify-between gap-4 rounded-xl border border-[#e6eef3] bg-white px-4 py-3.5 transition-colors hover:bg-[#f6fafc]'
            >
              <span>
                <span className='block text-[#08111f]' style={{ fontSize: '14.5px', fontWeight: 600 }}>
                  {link.label}
                </span>
                {link.note && (
                  <span className='block text-[#6f8190]' style={{ fontSize: '12.5px' }}>
                    {link.note}
                  </span>
                )}
              </span>
              <ArrowRight
                size={16}
                className='shrink-0 text-[#6f8190] transition-transform group-hover:translate-x-0.5'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
