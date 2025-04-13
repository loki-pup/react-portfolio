// app/[locale]/layout.js
import '../globals.css';
import { Inter } from 'next/font/google';
import {NextIntlClientProvider, hasLocale, getMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: "Bozyu's Playground 🐾",
  description: "Play with doggies! Meet Loki, Bozyu, Luna, Fifi, Pipi and Happy. Proudly made by Bozyu",
  icons: {
    icon: "./images/projects/bozyu.png?v=2", // Use absolute path from /public folder
  },

};


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  console.log("Locale from URL:", locale);

  //const messages = await getMessages();

  const messages = (await import(`../../locales/${locale}.json`)).default;


  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
