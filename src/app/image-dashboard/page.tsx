import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Image System Dashboard',
  description:
    'Internal image-system dashboard for generation scores, operational issues, and image learning memory.',
  path: '/image-dashboard',
  noindex: true,
  nofollow: true,
});

export default async function Page() {
  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
