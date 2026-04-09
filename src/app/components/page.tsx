import { notFound } from 'next/navigation';

import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/components');
}

export default async function Page() {
  const isExplicitlyEnabled = process.env.COMPONENT_LIBRARY_ENABLED === 'true';

  if (process.env.NODE_ENV !== 'development' && !isExplicitlyEnabled) {
    notFound();
  }

  const { default: ComponentsClientPage } = await import('./components-client-page');
  return <ComponentsClientPage />;
}
