import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { getIndustryDataByPath, renderIndustryPageByPath } from '@/domains/industries/config';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getIndustryMetadata } from '@/lib/seo/pageMetadata';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

function isSchemaRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

const toLabelFromSlug = (value: string) =>
  value
    .replace(/[-/]+/g, ' ')
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());

const getContentGraphNodes = async () => {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../../lib/content-graph/registry');
  const graph = getContentGraph();
  const categoryNodes = Object.values(graph)
    .filter(node => node.type === 'industry-category')
    .sort((a, b) => a.path.localeCompare(b.path));
  const detailNodes = Object.values(graph)
    .filter(node => node.type === 'industry-detail')
    .sort((a, b) => a.path.localeCompare(b.path));
  const categoryBySlug = new Map(categoryNodes.map(node => [node.slug, node]));

  return { categoryNodes, detailNodes, categoryBySlug };
};

async function resolveIndustryNode(slugParts?: string[]): Promise<ContentGraphNode | null> {
  const { detailNodes, categoryBySlug } = await getContentGraphNodes();

  if (!slugParts || (slugParts.length !== 1 && slugParts.length !== 2)) return null;

  if (slugParts.length === 1) {
    const [categorySlug] = slugParts;
    if (!categorySlug) return null;
    const categoryNode = categoryBySlug.get(categorySlug);
    return categoryNode ?? null;
  }

  const [categorySlug, detailSlug] = slugParts;
  if (!categorySlug || !detailSlug) return null;

  const detailNode = detailNodes.find(
    node => node.slug === detailSlug && node.parent === categorySlug
  );

  return detailNode ?? null;
}

async function resolveIndustry(slugParts?: string[]) {
  const node = await resolveIndustryNode(slugParts);
  if (!node) return null;

  const industry = getIndustryDataByPath(node.path);
  if (!industry) return null;

  return { node, industry };
}

export function generateStaticParams() {
  const getParams = async () => {
    const { categoryNodes, detailNodes } = await getContentGraphNodes();

    const categoryParams = categoryNodes.map(node => ({ slug: [node.slug] }));
    const detailParams = detailNodes
      .filter(node => typeof node.parent === 'string' && node.parent.length > 0)
      .map(node => ({ slug: [node.parent as string, node.slug] }));

    return [...categoryParams, ...detailParams];
  };

  return getParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveIndustry(slug);
  if (!resolved) return {};
  const { node } = resolved;

  return getIndustryMetadata(node.path);
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const { categoryBySlug } = await getContentGraphNodes();
  const resolved = await resolveIndustry(slug);
  if (!resolved) notFound();

  const { node, industry } = resolved;

  if (industry.type === 'detail') {
    if (!node.parent || !categoryBySlug.has(node.parent)) notFound();
  }

  const categorySlug = industry.type === 'category' ? industry.category : industry.parentSlug;
  const categoryData = getIndustryDataByPath(`/industries/${categorySlug}`);
  const categoryName = categoryData?.hero?.badge ?? toLabelFromSlug(categorySlug);
  const detailName =
    industry.type === 'detail'
      ? (industry.hero?.badge ?? toLabelFromSlug(industry.slug))
      : undefined;

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    {
      name: categoryName,
      path: categoryBySlug.get(categorySlug)?.path ?? `/industries/${categorySlug}`,
    },
    ...(industry.type === 'detail' ? [{ name: detailName ?? categoryName, path: node.path }] : []),
  ];

  const fallbackBreadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
  const schemaFromSeo = industry.seo.schema?.breadcrumb;
  const breadcrumbSchema = isSchemaRecord(schemaFromSeo) ? schemaFromSeo : fallbackBreadcrumbSchema;

  return (
    <>
      <JsonLd id='industries-breadcrumb-jsonld' schema={breadcrumbSchema} />
      {renderIndustryPageByPath(node.path)}
    </>
  );
}
