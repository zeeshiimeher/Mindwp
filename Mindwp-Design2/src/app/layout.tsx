import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { SITE } from '@/config/site';
import { Header } from '@/global/Header';
import { Footer } from '@/global/Footer';
import { JsonLd } from '@/lib/JsonLd';
import { getMetadataBase } from '@/lib/seo/metadata';
import { organizationSchema, websiteSchema } from '@/lib/seo/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE.name} — Connected website systems for service businesses`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
