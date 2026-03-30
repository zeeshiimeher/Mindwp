import { notFound } from 'next/navigation';

import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Components',
  description: 'Internal component preview route.',
  path: '/components',
  noindex: true,
  nofollow: true,
});

export default async function Page() {
  const isExplicitlyEnabled = process.env.COMPONENT_LIBRARY_ENABLED === 'true';

  if (process.env.NODE_ENV !== 'development' && !isExplicitlyEnabled) {
    notFound();
  }

  const { default: ComponentsClientPage } = await import('./components-client-page');
  return <ComponentsClientPage />;
}
