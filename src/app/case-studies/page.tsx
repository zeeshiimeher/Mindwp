import { CaseStudiesPage as CaseStudiesLanding } from '@/domains/case-studies/pages';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/case-studies', type: 'case-study-index', slug: 'case-studies' });
}

export default async function CaseStudiesPage() {
  await ensureGraphInitialized();

  return <CaseStudiesLanding />;
}
