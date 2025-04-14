import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'canto'],
  localeDetection: false,
  defaultLocale: 'en'
});
