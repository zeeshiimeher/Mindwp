import { notFound } from 'next/navigation';

import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsDevDashboardEnabled } from '@/system/isDevDashboardEnabled';

export const dynamic = 'force-dynamic';
export const revalidate = false;

export async function generateMetadata() {
  if (!getIsDevDashboardEnabled()) {
    return {};
  }

  return resolveSEO({ path: '/image-dashboard', type: 'static', slug: 'image-dashboard' });
}

export default async function Page() {
  if (!getIsDevDashboardEnabled()) {
    notFound();
  }

  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
