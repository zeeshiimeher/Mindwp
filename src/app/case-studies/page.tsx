import { CaseStudiesPage as CaseStudiesLanding } from '@/domains/case-studies/pages';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/case-studies');
}

export default async function CaseStudiesPage() {
  await ensureGraphInitialized();

  return <CaseStudiesLanding />;
}
