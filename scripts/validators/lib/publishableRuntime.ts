import { renderToStaticMarkup } from 'react-dom/server';

import blogPage from '@/app/blog/[slug]/page';
import caseStudyPage from '@/app/case-studies/[slug]/page';
import featurePage from '@/app/features/[...slug]/page';
import industryPage from '@/app/industries/[...slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';
import { resetPageEnforcementSnapshots } from '@/components/system/PageEnforcement';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';

let initialized = false;

export async function initPublishableRuntime() {
  if (initialized) {
    return;
  }

  await ensureGraphInitialized();
  initialized = true;
}

export function getPublishableGraphNodes(type?: ContentNodeType): ContentGraphNode[] {
  const nodes = Object.values(getContentGraph())
    .filter(node =>
      [
        'service',
        'feature',
        'industry-category',
        'industry-detail',
        'blog',
        'resource',
        'case-study',
      ].includes(node.type)
    )
    .sort((left, right) => left.path.localeCompare(right.path));

  return type ? nodes.filter(node => node.type === type) : nodes;
}

function toCatchAllParam(path: string, prefix: string): string[] {
  return path
    .replace(prefix, '')
    .split('/')
    .filter(Boolean);
}

export async function renderPublishableNode(node: ContentGraphNode) {
  resetPageEnforcementSnapshots();

  switch (node.type) {
    case 'service':
      return renderToStaticMarkup(
        await servicePage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/services/') }) })
      );
    case 'feature':
      return renderToStaticMarkup(
        await featurePage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/features/') }) })
      );
    case 'industry-category':
    case 'industry-detail':
      return renderToStaticMarkup(
        await industryPage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/industries/') }) })
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