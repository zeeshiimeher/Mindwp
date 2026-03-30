import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/global/Footer';
import { Header } from '@/global/Header';
import { getMetadataBase, SITE_NAME, TITLE_TEMPLATE } from '@/lib/seo/config';

import '@/index.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: SITE_NAME,
    template: TITLE_TEMPLATE,
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${inter.variable} ${robotoMono.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XXXX'
          strategy='afterInteractive'
        />
        <Script id='ga' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
