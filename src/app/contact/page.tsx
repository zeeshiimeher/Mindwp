import { getInventoryMetadata } from '@/lib/content-quality/inventory';

import ContactClientPage from './contact-client-page';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/contact');
}

export default function ContactPage() {
  return <ContactClientPage />;
}
