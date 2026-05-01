import type { Metadata } from 'next';

import { extractSEOInput } from '@/lib/seo/resolveMetadata';
import { buildSEO } from '@/lib/seo/seo';

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

  return buildSEO(extractSEOInput(resolved.caseStudy, resolved.node.path), resolved.node.path);
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  return CaseStudyDetailPage(props);
}
