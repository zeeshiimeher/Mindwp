import { FeaturesLanding } from '@/domains/features/pages';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/features');
}

export default function FeaturesPage() {
  return <FeaturesLanding />;
}
