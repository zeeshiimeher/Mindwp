import { resolveSEO } from '@/lib/seo/seoResolver';

import ContactClientPage from './contact-client-page';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/contact', type: 'static', slug: 'contact' });
}

export default function ContactPage() {
  return <ContactClientPage />;
}
