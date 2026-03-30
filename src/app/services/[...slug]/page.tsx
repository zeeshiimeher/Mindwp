import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import {
  getServiceDataBySlug,
  isServiceSlug,
  renderServicePageBySlug,
} from '@/domains/services/config';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';
import { buildMetadata } from '@/lib/seo/metadata';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';

import { getContentGraph } from '../../../lib/content-graph/registry';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

function getServiceGraphNodes() {
  return Object.values(getContentGraph())
    .filter(node => node.type === 'service')
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function getServiceNodeBySlug(slug: string) {
  return getServiceGraphNodes().find(node => node.slug === slug) ?? null;
}

type FaqItemInput = {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
};

function getServiceFaqs(sections: unknown): FaqItemInput[] | undefined {
  if (!sections || typeof sections !== 'object') return undefined;

  const serviceSections = sections as {
    faqSection?: { faqs?: FaqItemInput[] };
    faq?: { items?: FaqItemInput[] };
  };

  return serviceSections.faqSection?.faqs ?? serviceSections.faq?.items;
}

function resolveService(slugParts?: string[]) {
  if (!slugParts || slugParts.length !== 1) return null;
  const slug = slugParts?.[0];
  if (!slug) return null;
  if (!isServiceSlug(slug)) return null;
  const serviceNode = getServiceNodeBySlug(slug);
  if (!serviceNode) return null;
  const serviceData = getServiceDataBySlug(slug);
  if (!serviceData) return null;
  return { slug, serviceNode, serviceData };
}

export async function generateStaticParams() {
  await ensureGraphInitialized();
  return getServiceGraphNodes().map(node => ({ slug: [node.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  await ensureGraphInitialized();
  const { slug } = await params;
  const resolved = resolveService(slug);
  if (!resolved) return {};
  const seo = resolved.serviceData.seo;
  const canonicalPath = seo.canonical;

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: canonicalPath,
    type: 'website',
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  await ensureGraphInitialized();
  const { slug } = await params;
  const resolved = resolveService(slug);
  if (!resolved) {
    notFound();
  }

  const data = getServiceDataBySlug(resolved.slug);
  const canonicalPath = data.seo.canonical;

  if (resolved.serviceNode.path !== canonicalPath) {
    permanentRedirect(canonicalPath);
  }

  const schema = data.seo.schema;
  const serviceSeoSchema = schema.service;
  const faqSeoSchema = buildFaqSchema(getServiceFaqs(data.sections));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: resolved.serviceData.badge, path: canonicalPath },
  ]);

  const schemaEntries: Array<{ id: string; schema: Record<string, unknown> }> = [
    { id: 'service-jsonld', schema: serviceSeoSchema },
    ...(faqSeoSchema ? [{ id: 'service-faq-jsonld', schema: faqSeoSchema }] : []),
    { id: 'service-breadcrumb-jsonld', schema: breadcrumbSchema },
  ];

  return (
    <>
      {schemaEntries.map(entry => (
        <JsonLd key={entry.id} id={entry.id} schema={entry.schema} />
      ))}
      {renderServicePageBySlug(resolved.slug)}
    </>
  );
}
