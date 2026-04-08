export type ContentNodeType =
  | 'service'
  | 'industry-category'
  | 'industry-detail'
  | 'feature'
  | 'blog'
  | 'resource'
  | 'case-study';

export type Vertical = 'roofing-hvac' | 'aesthetic-clinic';

export type ConversionGoal = 'lead' | 'consultation' | 'demo' | 'email-capture' | 'none';

export type RelationshipSource = 'manual' | 'derived';

export interface AttributedEdge {
  id: string;
  source: RelationshipSource;
}

export interface ContentGraphNode {
  id: string;
  slug: string;
  type: ContentNodeType;
  path: string;
  parent?: string;
  vertical?: Vertical;
  coreFramework?: boolean;
  industries?: string[];
  systems?: string[];
  topics?: string[];
  relatesTo?: AttributedEdge[];
  supports?: AttributedEdge[];
  validates?: AttributedEdge[];
  components?: string[];
  conversionGoal?: ConversionGoal;
  conversionPriority?: number;
}

export interface ContentGraphIndexes {
  industries: Map<string, ContentGraphNode[]>;
  systems: Map<string, ContentGraphNode[]>;
  topics: Map<string, ContentGraphNode[]>;
  slugIndex: Record<string, ContentGraphNode>;
}

export interface ContentGraph {
  nodes: ContentGraphNode[];
  indexes?: ContentGraphIndexes;
}

// ─── Graph Registry Input ────────────────────────────────────────────────────

export type MetadataCarrier = {
  industries?: string[];
  systems?: string[];
  topics?: string[];
};

export interface GraphRegistryInput {
  blogPosts: Record<string, MetadataCarrier & { slug: string }>;
  caseStudies: Record<string, MetadataCarrier & { slug: string }>;
  features: Array<{ slug: string } & MetadataCarrier>;
  industries: Record<
    string,
    { slug: string; type?: string; parentSlug?: string } & MetadataCarrier
  >;
  resources: Record<string, MetadataCarrier & { slug: string }>;
  services: Record<string, { slug: string; path: string } & MetadataCarrier>;
}

// ─── Resolver Index Types ────────────────────────────────────────────────────

export interface IndexableBlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  topics: string[];
  systems: string[];
  industries: string[];
  category: string;
}

export interface IndexableResource {
  slug: string;
  title: string;
  description: string;
  category: string;
  topics?: string[];
  systems?: string[];
  industries?: string[];
  seo: { canonical: string; description?: string };
}

export interface ResolverIndexes {
  blogPostsList: IndexableBlogPost[];
  resourceList: IndexableResource[];
  graphNodes: ContentGraphNode[];
  blogSlugIndex: Map<string, IndexableBlogPost>;
  blogTopicIndex: Map<string, IndexableBlogPost[]>;
  blogSystemIndex: Map<string, IndexableBlogPost[]>;
  blogIndustryIndex: Map<string, IndexableBlogPost[]>;
  resourceSlugIndex: Map<string, IndexableResource>;
  resourceTopicIndex: Map<string, IndexableResource[]>;
  resourceSystemIndex: Map<string, IndexableResource[]>;
  resourceIndustryIndex: Map<string, IndexableResource[]>;
  resourceUrlIndex: Map<string, IndexableResource>;
  resourceCategoryIndex: Map<string, IndexableResource[]>;
  nodeSlugIndex: Map<string, ContentGraphNode>;
  nodeIdIndex: Map<string, ContentGraphNode>;
  nodeTypeBuckets: Map<ContentNodeType, ContentGraphNode[]>;
  nodeTypeSlugIndex: Map<ContentNodeType, Map<string, ContentGraphNode>>;
  reverseRelationIndex: Map<string, ContentGraphNode[]>;
  nodeTokenIndex: Map<string, Set<string>>;
  nodeOrderIndex: Map<string, number>;
}

// ─── Resolver Dependency Types ───────────────────────────────────────────────

export interface ResolverDependencies {
  caseStudies: Record<
    string,
    { slug: string; title: string; metaDescription?: string; industries?: string[] }
  >;
  features: Array<{ slug: string; title: string; description?: string; systems?: string[] }>;
  industries: Record<
    string,
    {
      slug: string;
      type?: string;
      parentSlug?: string;
      hero?: { title?: string; description?: string };
      seo?: { description?: string };
    }
  >;
  getServiceBySlug: (
    slug: string
  ) => { slug: string; badge?: string; title: string; description?: string } | undefined;
}
