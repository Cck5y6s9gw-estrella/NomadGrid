import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  const response = NextResponse.next();

  // Detect language from the client's IP (Vercel geolocation header) and
  // store it as a cookie so the client can default to English outside Spain
  // without waiting on browser language settings.
  if (!req.cookies.get('roavio_geo_lang')) {
    const country = req.headers.get('x-vercel-ip-country') || '';
    const lang = country && country !== 'ES' ? 'en' : 'es';
    response.cookies.set('roavio_geo_lang', lang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/(.*)',
  ],
};
