import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing.js';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = hasLocale(routing.locales, requestLocale)
    ? requestLocale
    : routing.defaultLocale;

   // console.log("Detected Locale:", locale); 

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
