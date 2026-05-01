import { renderToStaticMarkup } from 'react-dom/server';

import blogPage from '@/app/blog/[slug]/page';
import caseStudyPage from '@/app/case-studies/[slug]/page';
import featurePage from '@/app/features/[...slug]/page';
import industryPage from '@/app/industries/[...slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';
import { resetPageEnforcementSnapshots } from '@/components/system/PageEnforcement';

import type { ContentGraphNode, ContentNodeType, ValidatedPublishableNode } from './types';

export const PUBLISHABLE_NODE_TYPES = [
  'service',
  'feature',
  'industry-category',
  'industry-detail',
  'blog',
  'resource',
  'case-study',
] as const satisfies readonly ContentNodeType[];

export function isPublishableNodeType(type: ContentNodeType) {
  return PUBLISHABLE_NODE_TYPES.includes(type);
}

export function toCatchAllParam(path: string, prefix: string): string[] {
  return path.replace(prefix, '').split('/').filter(Boolean);
}

function assertPublishableNode(
  node: ContentGraphNode,
  markup: string
): asserts node is ValidatedPublishableNode {
  if (!node.title?.trim() || !node.description?.trim() || !node.canonical?.trim()) {
    throw new Error(`Publishable node missing SEO metadata for ${node.id}`);
  }

  if (!node.openGraph?.images || node.openGraph.images.length === 0) {
    throw new Error(`Publishable node missing Open Graph images for ${node.id}`);
  }

  if (!node.robots) {
    throw new Error(`Publishable node missing robots metadata for ${node.id}`);
  }

  const primaryCtaMatches = markup.match(/data-testid="smart-cta"/g) ?? [];

  if (primaryCtaMatches.length !== 1) {
    throw new Error(`Publishable node must register exactly one PrimaryCTASection for ${node.id}`);
  }

  if (markup.trim().length === 0) {
    throw new Error(`Publishable render returned empty markup for ${node.id}`);
  }
}

export async function renderPublishableNode(node: ContentGraphNode) {
  resetPageEnforcementSnapshots();

  let markup: string;

  switch (node.type) {
    case 'service':
      markup = renderToStaticMarkup(
        await servicePage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/services/') }),
        })
      );
      break;
    case 'feature':
      markup = renderToStaticMarkup(
        await featurePage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/features/') }),
        })
      );
      break;
    case 'industry-category':
    case 'industry-detail':
      markup = renderToStaticMarkup(
        await industryPage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/industries/') }),
        })
      );
      break;
    case 'blog':
      markup = renderToStaticMarkup(
        await blogPage({ params: Promise.resolve({ slug: node.slug }) })
      );
      break;
    case 'resource':
      markup = renderToStaticMarkup(
        await resourcePage({ params: Promise.resolve({ slug: node.slug }) })
      );
      break;
    case 'case-study':
      markup = renderToStaticMarkup(
        await caseStudyPage({ params: Promise.resolve({ slug: node.slug }) })
      );
      break;
  }

  assertPublishableNode(node, markup);
  return markup;
}
