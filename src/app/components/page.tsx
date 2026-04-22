import { notFound } from 'next/navigation';

import { env } from '@/env';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

export const dynamic = 'force-dynamic';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/components', type: 'static', slug: 'components' });
}

export default async function Page() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  const isExplicitlyEnabled = env.COMPONENT_LIBRARY_ENABLED === 'true';

  if (env.NODE_ENV !== 'development' && !isExplicitlyEnabled) {
    notFound();
  }

  const { default: ComponentsClientPage } = await import('./components-client-page');
  return <ComponentsClientPage />;
}
