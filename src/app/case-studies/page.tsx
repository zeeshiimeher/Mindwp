import { CaseStudiesPage as CaseStudiesLanding } from '@/domains/case-studies/pages';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/case-studies');
}

export default function CaseStudiesPage() {
  return <CaseStudiesLanding />;
}
