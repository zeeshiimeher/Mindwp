import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ClusterPageLayout } from '@/components/system/ClusterPageLayout';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { CANONICAL_SYSTEMS } from '@/lib/content-graph/canonical';
import { getSystemMetadata } from '@/lib/seo/pageMetadata';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return CANONICAL_SYSTEMS.map(system => ({ slug: system }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(CANONICAL_SYSTEMS as readonly string[]).includes(slug)) return {};

  return getSystemMetadata(`/systems/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  await ensureGraphInitialized();
  const { slug } = await params;

  if (!(CANONICAL_SYSTEMS as readonly string[]).includes(slug)) {
    notFound();
  }

  return <ClusterPageLayout clusterType='system' identifier={slug} />;
}
