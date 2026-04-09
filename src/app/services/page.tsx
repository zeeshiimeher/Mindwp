import { ServicesLanding } from '@/domains/services/pages';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/services');
}

export default function ServicesPage() {
  return <ServicesLanding />;
}
