import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PREFIXES = ['/dev/', '/content-dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some(
    prefix => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)
  );

  if (!isProtected) return NextResponse.next();

  const isProduction = process.env.NODE_ENV === 'production';
  const dashboardEnabled = process.env.ENABLE_DEV_DASHBOARD === 'true';

  if (isProduction && !dashboardEnabled) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dev/:path*', '/content-dashboard'],
};
