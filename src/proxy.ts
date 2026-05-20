import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PREFIXES = ['/dev/'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedPrefix = PROTECTED_PREFIXES.some(
    prefix => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)
  );
  const isProtected = isProtectedPrefix;

  if (!isProtected) return NextResponse.next();

  return NextResponse.rewrite(new URL('/not-found', request.url));
}

export const config = {
  matcher: ['/dev/:path*'],
};
