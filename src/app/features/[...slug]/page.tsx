import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import {
  getFeatureDataBySlug,
  isFeatureSlug,
  renderFeaturePageBySlug,
} from '@/domains/features/config';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';
import { buildMetadata } from '@/lib/seo/metadata';
import { buildBreadcrumbSchema, buildSoftwareApplicationSchema } from '@/lib/seo/schema';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

const getFeatureGraphNodes = async (): Promise<ContentGraphNode[]> => {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../../lib/content-graph/registry');
  return Object.values(getContentGraph())
    .filter(node => node.type === 'feature')
    .sort((a, b) => a.slug.localeCompare(b.slug));
};

const getFeatureNodeBySlug = async (slug: string): Promise<ContentGraphNode | null> => {
  const featureNodes = await getFeatureGraphNodes();
  return featureNodes.find(node => node.slug === slug) ?? null;
};

async function resolveFeature(slugParts?: string[]) {
  const slug = slugParts?.[0];
  if (!slug) return null;
  if (!isFeatureSlug(slug)) return null;

  const featureNode = await getFeatureNodeBySlug(slug);
  if (!featureNode) return null;

  return {
    slug,
    featureNode,
  };
}

export async function generateStaticParams() {
  const featureNodes = await getFeatureGraphNodes();
  return featureNodes.map(node => ({ slug: [node.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveFeature(slug);
  if (!resolved) return {};

  const featureSeo = getFeatureDataBySlug(resolved.slug).seo;
  const metadataTitle = featureSeo?.title ?? resolved.featureNode.slug;
  const metadataDescription = featureSeo?.description ?? '';
  const metadataPath = resolved.featureNode.path;

  return buildMetadata({
    title: metadataTitle,
    description: metadataDescription,
    path: metadataPath,
  });
}

const formatFeatureTitle = (slug: string) =>
  slug
    .replace(/[-/]+/g, ' ')
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const resolved = await resolveFeature(slug);
  if (!resolved) {
    notFound();
  }

  const featureSeo = getFeatureDataBySlug(resolved.slug).seo;
  const featureData = getFeatureDataBySlug(resolved.slug);

  const featureSchema =
    featureSeo?.schema?.primary ??
    buildSoftwareApplicationSchema({
      name: formatFeatureTitle(resolved.featureNode.slug),
      description: featureSeo?.description ?? '',
      path: resolved.featureNode.path,
    });
  const faqSchema = buildFaqSchema(featureData.sections?.faq?.items);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: formatFeatureTitle(resolved.featureNode.slug), path: resolved.featureNode.path },
  ]);

  const schemaEntries: Array<{ id: string; schema: Record<string, unknown> }> = [
    { id: 'feature-jsonld', schema: featureSchema },
    ...(faqSchema ? [{ id: 'feature-faq-jsonld', schema: faqSchema }] : []),
    { id: 'feature-breadcrumb-jsonld', schema: breadcrumbSchema },
  ];

  return (
    <>
      {schemaEntries.map(entry => (
        <JsonLd key={entry.id} id={entry.id} schema={entry.schema} />
      ))}
      {renderFeaturePageBySlug(resolved.slug)}
    </>
  );
}
