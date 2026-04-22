import { resolveSEO } from '@/lib/seo/seoResolver';
import TermsConditions from '@/screens/TermsConditions';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/terms', type: 'static', slug: 'terms' });
}

export default function Page() {
  return <TermsConditions />;
}
