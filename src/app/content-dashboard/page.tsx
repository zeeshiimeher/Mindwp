import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Content Intelligence',
  description: 'Content intelligence dashboard — topic authority and content gaps.',
  path: '/content-dashboard',
  noindex: true,
  nofollow: true,
});

export default async function Page() {
  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
