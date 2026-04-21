import { NextRequest, NextResponse } from 'next/server';

import { getIsSystemEnabled } from '@/system/isSystemEnabled';

const PROTECTED_PREFIXES = ['/dev/'];
const PROTECTED_EXACT_PATHS = new Set(['/dashboard', '/system-dashboard', '/image-dashboard', '/components']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedPrefix = PROTECTED_PREFIXES.some(
    prefix => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)
  );
  const isProtected = isProtectedPrefix || PROTECTED_EXACT_PATHS.has(pathname);

  if (!isProtected) return NextResponse.next();

  if (!getIsSystemEnabled()) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/system-dashboard', '/image-dashboard', '/components', '/dev/:path*'],
};
