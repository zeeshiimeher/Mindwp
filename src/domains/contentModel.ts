import { BLOG_POSTS } from '@/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import type { ContentNodeType, GraphRegistryInput } from '@/lib/content-graph/types';

export const GRAPH_CONTENT_NODE_TYPES = [
  'service',
  'industry-category',
  'industry-detail',
  'feature',
  'blog',
  'resource',
  'case-study',
] as const satisfies readonly ContentNodeType[];

export const DOMAIN_GRAPH_SOURCES: GraphRegistryInput = {
  blogPosts: BLOG_POSTS,
  caseStudies: CASE_STUDY_REGISTRY,
  features: FEATURE_REGISTRY,
  industries: INDUSTRY_REGISTRY,
  resources: RESOURCE_REGISTRY,
  services: SERVICE_REGISTRY,
};

export const RESOLVER_INDEX_SOURCES = {
  blogPosts: BLOG_POSTS,
  resources: RESOURCE_REGISTRY,
} as const;

export const RESOLVER_DEPENDENCY_SOURCES = {
  caseStudies: CASE_STUDY_REGISTRY,
  features: FEATURE_REGISTRY,
  industries: INDUSTRY_REGISTRY,
  services: SERVICE_REGISTRY,
} as const;

export const CONTENT_MODEL_BOUNDARIES = {
  graphNodeTypes: GRAPH_CONTENT_NODE_TYPES,
  graphSources: ['blogPosts', 'caseStudies', 'features', 'industries', 'resources', 'services'],
} as const;
