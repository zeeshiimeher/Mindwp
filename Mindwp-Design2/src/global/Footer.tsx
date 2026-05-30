import Link from 'next/link';

import { FOOTER_COLUMNS } from '@/config/navigation';
import { ROUTES } from '@/config/routes';

/** Dark site footer: brand column + link columns + operational status. */
export function Footer() {
  return (
    <footer className='bg-[#061323] pb-10 pt-20'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-8 border-b border-white/8 pb-14'>
          <div className='col-span-12 lg:col-span-4'>
            <Link href={ROUTES.home} className='mb-5 flex items-center gap-2'>
              <span className='relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#0e2740] to-[#103e5a]'>
                <span className='h-1.5 w-1.5 rounded-full bg-[#35c7d8] shadow-[0_0_8px_#35c7d8]' />
              </span>
              <span className='tracking-tight text-white' style={{ fontSize: '17px', fontWeight: 700 }}>
                MindWP
              </span>
            </Link>
            <p className='max-w-[380px] text-white/60' style={{ fontSize: '14px', lineHeight: 1.65 }}>
              For service businesses and specialist clinics where calls get missed, follow-ups slip,
              and local visibility disappears.
            </p>
          </div>

          {FOOTER_COLUMNS.map(column => (
            <div key={column.label} className='col-span-6 lg:col-span-2'>
              <div
                className='mb-5 uppercase tracking-[0.14em] text-white/45'
                style={{ fontSize: '10.5px', fontWeight: 600 }}
              >
                {column.label}
              </div>
              <ul className='space-y-3'>
                {column.items.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='text-white/75 transition-colors hover:text-white'
                      style={{ fontSize: '13.5px' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className='flex items-center justify-between pt-7 text-white/45'
          style={{ fontSize: '12px' }}
        >
          <span>© {new Date().getFullYear()} MindWP. Connected systems for service businesses.</span>
          <span className='inline-flex items-center gap-1.5'>
            <span className='h-1.5 w-1.5 rounded-full bg-[#35c7d8] shadow-[0_0_6px_#35c7d8]' />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
