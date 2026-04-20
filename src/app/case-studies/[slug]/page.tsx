import type { Metadata } from 'next';

import {
  CaseStudyDetailPage,
  generateCaseStudyMetadata,
  generateCaseStudyStaticParams,
} from './caseStudyPage';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return generateCaseStudyStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return generateCaseStudyMetadata({ params });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  return CaseStudyDetailPage(props);
}
