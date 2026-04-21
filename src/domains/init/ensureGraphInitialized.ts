import {
  DOMAIN_GRAPH_SOURCES,
  RESOLVER_DEPENDENCY_SOURCES,
  RESOLVER_INDEX_SOURCES,
} from '@/domains/contentModel';
import { env } from '@/env';
import { createResolver } from '@/lib/authority/resolver';
import {
  getContentGraph,
  getStructuredContentGraph,
  initContentGraph,
} from '@/lib/content-graph/registry';
import { getResolverIndexes, initResolverIndexes } from '@/lib/content-graph/resolverIndexes';

import { setInitMetrics } from './metrics';

const shouldProfile = env.PROFILE_GRAPH === 'true' || process.env.SYSTEM_LOGGING_MODE === 'debug';

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

    initContentGraph(DOMAIN_GRAPH_SOURCES);

    const t1 = performance.now();

    initResolverIndexes(
      getStructuredContentGraph(),
      RESOLVER_INDEX_SOURCES.blogPosts,
      RESOLVER_INDEX_SOURCES.resources
    );

    const t2 = performance.now();

    _resolver = wrapResolverWithMetrics(
      createResolver(
        {
          caseStudies: RESOLVER_DEPENDENCY_SOURCES.caseStudies,
          features: RESOLVER_DEPENDENCY_SOURCES.features,
          industries: RESOLVER_DEPENDENCY_SOURCES.industries,
          getServiceBySlug: (slug: string) => {
            const s = RESOLVER_DEPENDENCY_SOURCES.services[slug];
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

export async function getInitializedContentGraph() {
  await ensureGraphInitialized();
  return getContentGraph();
}

export function getResolver() {
  if (!_resolver) throw new Error('Resolver not initialized. Call ensureGraphInitialized() first.');
  return _resolver;
}

export async function getInitializedResolver() {
  await ensureGraphInitialized();
  return getResolver();
}
