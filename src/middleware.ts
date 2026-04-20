import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env';

const PROTECTED_PREFIXES = ['/dev/'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some(
    prefix => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)
  );

  if (!isProtected) return NextResponse.next();

  const isProduction = env.NODE_ENV === 'production';
  const dashboardEnabled = env.ENABLE_DEV_DASHBOARD === 'true';

  if (isProduction && !dashboardEnabled) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dev/:path*'],
};
