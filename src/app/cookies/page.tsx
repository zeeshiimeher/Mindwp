import { resolveSEO } from '@/lib/seo/seoResolver';
import CookiePolicy from '@/screens/CookiePolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/cookies', type: 'static', slug: 'cookies' });
}

export default function Page() {
  return <CookiePolicy />;
}
