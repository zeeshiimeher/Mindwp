import { CaseStudiesPage as CaseStudiesLanding } from '@/domains/case-studies/pages';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Customer success stories and implementation examples.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return <CaseStudiesLanding />;
}
