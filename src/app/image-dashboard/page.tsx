import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/image-dashboard', type: 'static', slug: 'image-dashboard' });
}

export default async function Page() {
  const { default: Dashboard } = await import('./dashboard');
  return <Dashboard />;
}
