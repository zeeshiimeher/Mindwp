'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { SITE } from '@/config/site';
import { HEADER_GROUPS, type NavGroup } from '@/config/navigation';
import { Logo } from '@/global/Logo';
import { MobileMenu } from '@/global/MobileMenu';

function Dropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isActive = group.items.some(item => item.href === pathname);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen(v => !v)}
        className={`inline-flex items-center gap-1.5 transition-colors ${
          isActive ? 'text-[#08111f]' : 'text-[#4c5e6f] hover:text-[#08111f]'
        }`}
        style={{ fontSize: '13.5px', fontWeight: isActive ? 600 : 500 }}
      >
        {group.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className='absolute left-1/2 top-full z-50 mt-3 w-[260px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#e6eef3] bg-white shadow-[0_16px_48px_rgba(8,17,31,0.10)]'>
          <div className='border-b border-[#f0f5f8] px-4 py-3'>
            <span
              className='uppercase tracking-[0.16em] text-[#6f8190]'
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              {group.label}
            </span>
          </div>
          <div className='py-1.5'>
            {group.items.map(item => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[#f6fafc] ${
                    active ? 'bg-[#f6fafc]' : ''
                  }`}
                >
                  <span
                    className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full'
                    style={{
                      background: active ? '#35c7d8' : '#d0dde6',
                      boxShadow: active ? '0 0 6px #35c7d8' : 'none',
                    }}
                  />
                  <span>
                    <span
                      className='block text-[#08111f]'
                      style={{ fontSize: '13.5px', fontWeight: active ? 600 : 500 }}
                    >
                      {item.label}
                    </span>
                    {item.note && (
                      <span
                        className='block text-[#6f8190]'
                        style={{ fontSize: '11.5px', lineHeight: 1.4 }}
                      >
                        {item.note}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[#e6eef3] bg-white/85 backdrop-blur-md'>
      <div className='container flex h-[76px] items-center justify-between'>
        <Logo />

        <nav className='hidden items-center gap-7 md:flex'>
          {HEADER_GROUPS.map(group => (
            <Dropdown key={group.label} group={group} pathname={pathname} />
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <Link
            href={SITE.cta.href}
            className='hidden items-center gap-2 rounded-full bg-[#061323] px-5 py-2.5 text-white transition-colors hover:bg-[#0e2740] sm:inline-flex'
            style={{ fontSize: '13.5px', fontWeight: 500 }}
          >
            {SITE.cta.label}
            <span className='h-1.5 w-1.5 rounded-full bg-[#35c7d8] shadow-[0_0_6px_#35c7d8]' />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
