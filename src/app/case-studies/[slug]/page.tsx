import type { Metadata } from 'next';

import { resolveSEO } from '@/lib/seo/seoResolver';

import {
  CaseStudyDetailPage,
  generateCaseStudyStaticParams,
  resolveCaseStudy,
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
  const { slug } = await params;
  const resolved = await resolveCaseStudy(slug);
  if (!resolved) return {};

  return resolveSEO({ path: resolved.node.path, type: 'case-study', slug });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  return CaseStudyDetailPage(props);
}
