import { resolveSEO } from '@/lib/seo/seoResolver';

import ContactClientPage from './contact-client-page';

type ContactPageProps = {
  searchParams: Promise<{
    system?: string;
    source?: string;
  }>;
};

export async function generateMetadata() {
  return resolveSEO({ path: '/contact', type: 'static', slug: 'contact' });
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <ContactClientPage
      initialSystem={resolvedSearchParams.system}
      initialSource={resolvedSearchParams.source}
    />
  );
}
