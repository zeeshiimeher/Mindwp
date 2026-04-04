import { notFound } from 'next/navigation';

import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-dynamic';

export const metadata = buildMetadata({
  title: 'Execution Visibility Layer',
  description: 'Internal execution control center for scripts, reports, and system state.',
  path: '/dev-dashboard',
  noindex: true,
  nofollow: true,
});

export default async function DevDashboardPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  const { default: Dashboard } = await import('./dashboard');

  return <Dashboard />;
}
