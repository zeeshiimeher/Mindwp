import Link from 'next/link';

import { ROUTES } from '@/config/routes';

/** Brand logo: gradient mark + cyan signal dot + wordmark. */
export function Logo() {
  return (
    <Link href={ROUTES.home} className='flex items-center gap-2.5'>
      <span className='relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-[#061323] to-[#103e5a]'>
        <span className='absolute inset-0 bg-gradient-to-br from-[#35c7d8]/40 to-transparent' />
        <span className='relative z-10 h-1.5 w-1.5 rounded-full bg-[#35c7d8] shadow-[0_0_8px_#35c7d8]' />
      </span>
      <span className='tracking-tight text-[#08111f]' style={{ fontWeight: 700, fontSize: '17px' }}>
        MindWP
      </span>
    </Link>
  );
}
