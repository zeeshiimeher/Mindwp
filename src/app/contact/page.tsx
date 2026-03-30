import { buildMetadata } from '@/lib/seo/metadata';

import ContactClientPage from './contact-client-page';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch to discuss systems-first website implementation.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClientPage />;
}
