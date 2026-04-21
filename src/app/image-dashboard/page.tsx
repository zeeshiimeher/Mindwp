import { notFound } from 'next/navigation';

import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

export const dynamic = 'force-dynamic';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/image-dashboard', type: 'static', slug: 'image-dashboard' });
}

export default async function Page() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
