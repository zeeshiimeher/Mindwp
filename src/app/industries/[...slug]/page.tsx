import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { IndustryCaseStudiesSection } from '@/components/reusable/sections/industries/IndustryCaseStudiesSection';
import JsonLd from '@/components/system/JsonLd';
import RelatedContentSection from '@/components/system/RelatedContentSection';
import { getCaseStudiesTemplateMetadataByIndustryCategory } from '@/domains/case-studies/data';
import { getIndustryDataByPath, renderIndustryPageByPath } from '@/domains/industries/config';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getRelatedContent } from '@/lib/graph/query';
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

  const relatedBlocks = (() => {
    if (industry.type !== 'detail' || industry.relatedContent?.enabled === false) return [];
    const slots = getRelatedContent(
      industry.slug,
      industry.type === 'detail' ? 'industry-detail' : 'industry-category'
    );
    const blocks: Array<{
      title: string;
      items: Array<{ title: string; desc: string; href: string }>;
    }> = [];
    if (slots.services.length > 0) {
      blocks.push({
        title: 'Services That Solve This Problem',
        items: slots.services.slice(0, 3).map(item => ({
          title: item.title,
          desc: 'Explore this related page',
          href: item.path,
        })),
      });
    }
    if (slots.caseStudies.length > 0) {
      blocks.push({
        title: 'Real Results in This Industry',
        items: slots.caseStudies.slice(0, 3).map(item => ({
          title: item.title,
          desc: 'Explore this related page',
          href: item.path,
        })),
      });
    }
    if (slots.resources.length > 0) {
      blocks.push({
        title: 'What You Need Next',
        items: slots.resources.slice(0, 3).map(item => ({
          title: item.title,
          desc: 'Explore this related page',
          href: item.path,
        })),
      });
    }
    return blocks;
  })();

  const categoryCaseStudies =
    industry.type === 'category' && industry.sectionControls?.caseStudies?.enabled === true
      ? getCaseStudiesTemplateMetadataByIndustryCategory(industry.category).map(study => ({
          slug: study.slug,
          industry: study.industryLabel,
          client: study.client,
          location: study.location,
          metaDescription: study.metaDescription,
          publishDate: study.publishDate,
        }))
      : [];

  return (
    <>
      <JsonLd id='industries-breadcrumb-jsonld' schema={breadcrumbSchema} />
      {renderIndustryPageByPath(node.path)}
      {categoryCaseStudies.length > 0 ? (
        <IndustryCaseStudiesSection studies={categoryCaseStudies} />
      ) : null}
      {relatedBlocks.length > 0 && <RelatedContentSection blocks={relatedBlocks} />}
    </>
  );
}
