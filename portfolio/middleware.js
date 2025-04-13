import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip static files, API, or already-localized paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico') || // Make sure favicon is excluded
    pathname.match(/^\/(en|zh)(\/|$)/) // Skip if path already includes 'en' or 'zh'
  ) {
    return NextResponse.next(); // Continue the request if conditions are met
  }

  const acceptLang = request.headers.get('accept-language') || '';
  const normalized = acceptLang.toLowerCase();
  const preferredLocale = normalized.startsWith('zh') ? 'zh' : 'en';

  // Redirect to the preferred locale
  return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|images|api|favicon.ico).*)'], // Matcher now excludes favicon.ico
};



