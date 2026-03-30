import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ClusterPageLayout } from '@/components/system/ClusterPageLayout';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { CANONICAL_TOPICS } from '@/lib/content-graph/canonical';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

function slugLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export async function generateStaticParams() {
  return CANONICAL_TOPICS.map(topic => ({ slug: topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(CANONICAL_TOPICS as readonly string[]).includes(slug)) return {};

  return buildMetadata({
    title: `${slugLabel(slug)} — Topic Hub`,
    description: `Everything about ${slugLabel(slug)}: services, insights, case studies, and resources.`,
    path: `/topics/${slug}`,
    type: 'website',
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  await ensureGraphInitialized();
  const { slug } = await params;

  if (!(CANONICAL_TOPICS as readonly string[]).includes(slug)) {
    notFound();
  }

  return <ClusterPageLayout clusterType='topic' identifier={slug} />;
}
