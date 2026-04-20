import { renderToStaticMarkup } from 'react-dom/server';

import blogPage from '@/app/blog/[slug]/page';
import caseStudyPage from '@/app/case-studies/[slug]/page';
import featurePage from '@/app/features/[...slug]/page';
import industryPage from '@/app/industries/[...slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';
import { resetPageEnforcementSnapshots } from '@/components/system/PageEnforcement';

import type { ContentGraphNode, ContentNodeType } from './types';

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

export async function renderPublishableNode(node: ContentGraphNode) {
  resetPageEnforcementSnapshots();

  switch (node.type) {
    case 'service':
      return renderToStaticMarkup(
        await servicePage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/services/') }),
        })
      );
    case 'feature':
      return renderToStaticMarkup(
        await featurePage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/features/') }),
        })
      );
    case 'industry-category':
    case 'industry-detail':
      return renderToStaticMarkup(
        await industryPage({
          params: Promise.resolve({ slug: toCatchAllParam(node.path, '/industries/') }),
        })
      );
    case 'blog':
      return renderToStaticMarkup(await blogPage({ params: Promise.resolve({ slug: node.slug }) }));
    case 'resource':
      return renderToStaticMarkup(
        await resourcePage({ params: Promise.resolve({ slug: node.slug }) })
      );
    case 'case-study':
      return renderToStaticMarkup(
        await caseStudyPage({ params: Promise.resolve({ slug: node.slug }) })
      );
  }
}
