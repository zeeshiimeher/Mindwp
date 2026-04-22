import { FeaturesLanding } from '@/domains/features/pages';
import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/features', type: 'feature-index', slug: 'features' });
}

export default function FeaturesPage() {
  return <FeaturesLanding />;
}
