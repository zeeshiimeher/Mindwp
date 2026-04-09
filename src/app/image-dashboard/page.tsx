import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/image-dashboard');
}

export default async function Page() {
  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
