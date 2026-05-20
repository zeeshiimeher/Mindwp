import { NextRequest, NextResponse } from 'next/server';

import { getIsDevDashboardEnabled } from '@/system/isDevDashboardEnabled';

const PROTECTED_PREFIXES = ['/dev/'];
const PROTECTED_EXACT_PATHS = new Set(['/image-dashboard']);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedPrefix = PROTECTED_PREFIXES.some(
    prefix => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)
  );
  const isProtected = isProtectedPrefix || PROTECTED_EXACT_PATHS.has(pathname);

  if (!isProtected) return NextResponse.next();

  if (!getIsDevDashboardEnabled()) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/image-dashboard', '/dev/:path*'],
};
