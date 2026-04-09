import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import type { RelatedContentBlock } from '@/components/system/RelatedContentSection';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { CaseStudyTemplate } from '@/domains/case-studies/templates';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getRelatedContent, type RelatedContent } from '@/lib/graph/query';
import { getImage } from '@/lib/image-system/resolver';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';
import { getCaseStudyMetadata } from '@/lib/seo/pageMetadata';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/schema';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

const getCaseStudyGraphNodes = async (): Promise<ContentGraphNode[]> => {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../../lib/content-graph/registry');
  return Object.values(getContentGraph())
    .filter(node => node.type === 'case-study')
    .sort((a, b) => a.slug.localeCompare(b.slug));
};

const getCaseStudyNodeBySlug = async (slug: string): Promise<ContentGraphNode | null> => {
  const nodes = await getCaseStudyGraphNodes();
  return nodes.find(node => node.slug === slug) ?? null;
};

async function resolveCaseStudy(slug: string) {
  const node = await getCaseStudyNodeBySlug(slug);
  if (!node) return null;

  const caseStudy = CASE_STUDY_REGISTRY[slug] ?? null;
  if (!caseStudy) return null;

  return { node, caseStudy };
}

function getCaseStudyFaqs(sections: CaseStudyTemplateSection[]) {
  return sections.flatMap(section => (section.type === 'faq' ? section.items : []));
}

function buildRelatedBlocks(slug: string): RelatedContentBlock[] {
  const related = getRelatedContent(slug, 'case-study');
  const labels = RELATED_SECTION_LABELS['case-study'] ?? {};
  const slotKeys = Object.keys(labels) as Array<keyof RelatedContent>;
  const blocks: RelatedContentBlock[] = [];

  for (const key of slotKeys) {
    const items = related[key];
    const label = labels[key];
    if (!label || !items || items.length === 0) {
      continue;
    }

    blocks.push({
      title: label.title,
      description: label.description,
      items: items.slice(0, 3).map(item => ({
        title: item.title,
        desc: item.description,
        href: item.path,
      })),
    });

    if (blocks.length === 2) {
      break;
    }
  }

  return blocks;
}

export async function generateStaticParams() {
  const nodes = await getCaseStudyGraphNodes();
  return nodes.map(node => ({ slug: node.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveCaseStudy(slug);
  if (!resolved) return {};

  return getCaseStudyMetadata(resolved.node.path);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resolved = await resolveCaseStudy(slug);
  if (!resolved) {
    notFound();
  }

  const { node, caseStudy } = resolved;

  const canonicalPath = node.path;

  const articleSchema = buildArticleSchema({
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    path: canonicalPath,
    datePublished: caseStudy.publishDate,
    dateModified: caseStudy.publishDate,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: caseStudy.title, path: canonicalPath },
  ]);
  const faqSchema = buildFaqSchema(getCaseStudyFaqs(caseStudy.sections));
  const schemaEntries: Array<{ id: string; schema: Record<string, unknown> }> = [
    { id: 'case-study-article-jsonld', schema: articleSchema },
    ...(faqSchema ? [{ id: 'case-study-faq-jsonld', schema: faqSchema }] : []),
    { id: 'case-study-breadcrumb-jsonld', schema: breadcrumbSchema },
  ];

  const relatedBlocks = buildRelatedBlocks(slug);

  return (
    <>
      {schemaEntries.map(entry => (
        <JsonLd key={entry.id} id={entry.id} schema={entry.schema} />
      ))}
      <CaseStudyTemplate
        metadata={caseStudy}
        sections={caseStudy.sections}
        featuredImage={getImage(slug, 'case-studies', 'featured-clean')}
        {...(caseStudy.templateOverrides ?? {})}
      />
      {relatedBlocks.length > 0 ? <SmartRelatedSection blocks={relatedBlocks} /> : null}
    </>
  );
}
