'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { SITE } from '@/config/site';
import { HEADER_GROUPS } from '@/config/navigation';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className='md:hidden'>
      <button
        type='button'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className='inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#08111f] transition-colors hover:bg-[#f6fafc]'
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className='fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto border-t border-[#e6eef3] bg-white'>
          <div className='container py-8'>
            <div className='space-y-8'>
              {HEADER_GROUPS.map(group => (
                <div key={group.label}>
                  <div
                    className='mb-3 uppercase tracking-[0.16em] text-[#6f8190]'
                    style={{ fontSize: '10px', fontWeight: 700 }}
                  >
                    {group.label}
                  </div>
                  <ul className='space-y-1'>
                    {group.items.map(item => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#f6fafc] ${
                              active ? 'bg-[#f6fafc] text-[#08111f]' : 'text-[#4c5e6f]'
                            }`}
                            style={{ fontSize: '15px', fontWeight: active ? 600 : 500 }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <Link
              href={SITE.cta.href}
              className='mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#061323] px-5 py-3 text-white transition-colors hover:bg-[#0e2740]'
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {SITE.cta.label}
              <span className='h-1.5 w-1.5 rounded-full bg-[#35c7d8] shadow-[0_0_6px_#35c7d8]' />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
