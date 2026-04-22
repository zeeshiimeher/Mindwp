import { resolveSEO } from '@/lib/seo/seoResolver';
import PrivacyPolicy from '@/screens/PrivacyPolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/privacy', type: 'static', slug: 'privacy' });
}

export default function Page() {
  return <PrivacyPolicy />;
}
