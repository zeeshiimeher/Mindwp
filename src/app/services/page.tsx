import { ServicesLanding } from '@/domains/services/pages';
import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/services', type: 'service-index', slug: 'services' });
}

export default function ServicesPage() {
  return <ServicesLanding />;
}
