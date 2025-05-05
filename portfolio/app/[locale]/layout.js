// app/[locale]/layout.js
import '../globals.css';
import { Inter } from 'next/font/google';
import {NextIntlClientProvider, hasLocale, getMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';


const inter = Inter({ subsets: ['latin'] });


export async function generateMetadata({ params }){
  //console.log("✅ generateMetadata called with:", params);
  const {locale} = await params;

  const messages = (await import(`../../locales/${locale}.json`)).default;
  //console.log("title: ", messages.appName);

  return  {
    title: messages.appName,
    description: messages.appDesp,
    keywords: ['Next.js', 'React', 'JavaScript','Bozyu'],
    authors: [{ name: 'Bozyu' }, { name: 'Lulu'},{name:'Loki'},{name:'Luna'}],
    creator: 'Bozyu',
    publisher: 'Bozyu',
    icons: {
      icon: "./images/projects/bozyu.png?v=2", // Use absolute path from /public folder
    },
    openGraph: {
      title: messages.appName,
      description: messages.appDesp,
      type: 'website',
      url: 'https://loki-pup.github.io/react-portfolio/en',
      images: [
        {
          url: "https://loki-pup.github.io/react-portfolio/images/projects/7.jpg",
          width: 1200,
          height: 630,
          alt: "Bozyu",
        },
      ],
    },
  
  };
}

// Static Params for dynamic locale route
export function generateStaticParams() {
  // Return a list of all possible locale values
  return [
    { locale: 'en' },
    { locale: 'canto' }, // Add any other locales you support here
  ];
}


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  //console.log("Locale from URL:", locale);

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
