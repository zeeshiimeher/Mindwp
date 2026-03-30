import { BLOG_POSTS } from '@/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { createResolver } from '@/lib/authority/resolver';
import { getStructuredContentGraph, initContentGraph } from '@/lib/content-graph/registry';
import { getResolverIndexes, initResolverIndexes } from '@/lib/content-graph/resolverIndexes';

import { setInitMetrics } from './metrics';

const isDev = process.env.NODE_ENV === 'development';
const shouldProfile = isDev || process.env.PROFILE_GRAPH === 'true';

let initialized = false;
let initPromise: Promise<void> | null = null;
let _resolver: ReturnType<typeof createResolver> | null = null;

function wrapResolverWithMetrics(
  resolver: ReturnType<typeof createResolver>
): ReturnType<typeof createResolver> {
  if (!shouldProfile) return resolver;

  return new Proxy(resolver, {
    get(target, prop, receiver) {
      const original = Reflect.get(target, prop, receiver);
      if (typeof original !== 'function') return original;

      return (...args: unknown[]) => {
        const start = performance.now();
        const result = (original as Function).apply(target, args);
        const end = performance.now();

        // eslint-disable-next-line no-console
        console.debug(`[resolver:${String(prop)}]`, (end - start).toFixed(2), 'ms');
        return result;
      };
    },
  });
}

export async function ensureGraphInitialized(): Promise<void> {
  if (initialized) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const t0 = performance.now();

    initContentGraph({
      blogPosts: BLOG_POSTS,
      caseStudies: CASE_STUDY_REGISTRY,
      features: FEATURE_REGISTRY,
      industries: INDUSTRY_REGISTRY,
      resources: RESOURCE_REGISTRY,
      services: SERVICE_REGISTRY,
    });

    const t1 = performance.now();

    initResolverIndexes(getStructuredContentGraph(), BLOG_POSTS, RESOURCE_REGISTRY);

    const t2 = performance.now();

    _resolver = wrapResolverWithMetrics(
      createResolver(
        {
          caseStudies: CASE_STUDY_REGISTRY,
          features: FEATURE_REGISTRY,
          industries: INDUSTRY_REGISTRY,
          getServiceBySlug: (slug: string) => {
            const s = SERVICE_REGISTRY[slug];
            if (!s) return undefined;
            return { slug: s.slug, badge: s.badge, title: s.title, description: s.description };
          },
        },
        getResolverIndexes()
      )
    );

    const t3 = performance.now();

    if (shouldProfile) {
      const metrics = {
        totalTime: t3 - t0,
        contentGraphTime: t1 - t0,
        resolverIndexesTime: t2 - t1,
        resolverCreationTime: t3 - t2,
      };

      setInitMetrics(metrics);

      // eslint-disable-next-line no-console
      console.debug('[graph:init]', metrics);
    }

    initialized = true;
  })();

  return initPromise;
}

export function getResolver() {
  if (!_resolver) throw new Error('Resolver not initialized. Call ensureGraphInitialized() first.');
  return _resolver;
}
