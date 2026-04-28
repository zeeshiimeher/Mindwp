import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/global/Footer';
import { Header } from '@/global/Header';
import { RevealMotion } from '@/global/RevealMotion';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { registerGlobalErrorHandlers } from '@/lib/system/logger';

import '@/index.css';

registerGlobalErrorHandlers();

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

export async function generateMetadata() {
  return resolveSEO({ path: '/', type: 'static', slug: 'home' });
}

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
        <RevealMotion />
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
