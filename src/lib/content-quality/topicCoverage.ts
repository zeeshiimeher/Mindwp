import { CANONICAL_TOPICS } from '@/lib/content-graph/canonical';
import type { ContentGraphNode } from '@/lib/content-graph/types';

export interface TopicCoverageSnapshot {
  topic: string;
  nodes: ContentGraphNode[];
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  supportTypes: string[];
  hasSupportingPost: boolean;
  hasInternalLinkPath: boolean;
  isOrphan: boolean;
}

export function slugLabel(slug: string): string {
  return slug.replace(/-/g, ' ');
}

export function buildTopicCoverageSnapshots(
  nodes: ContentGraphNode[],
  topics: readonly string[] = CANONICAL_TOPICS
): TopicCoverageSnapshot[] {
  return topics.map(topic => {
    const topicNodes = nodes.filter(node => (node.topics ?? []).includes(topic));
    const blogCount = topicNodes.filter(node => node.type === 'blog').length;
    const resourceCount = topicNodes.filter(node => node.type === 'resource').length;
    const serviceCount = topicNodes.filter(node => node.type === 'service').length;
    const featureCount = topicNodes.filter(node => node.type === 'feature').length;
    const industryCount = topicNodes.filter(
      node => node.type === 'industry-category' || node.type === 'industry-detail'
    ).length;
    const caseStudyCount = topicNodes.filter(node => node.type === 'case-study').length;
    const supportCount =
      resourceCount + serviceCount + featureCount + industryCount + caseStudyCount;

    const supportTypes = [
      ...(resourceCount > 0 ? ['resource'] : []),
      ...(serviceCount > 0 ? ['service'] : []),
      ...(featureCount > 0 ? ['feature'] : []),
      ...(industryCount > 0 ? ['industry'] : []),
      ...(caseStudyCount > 0 ? ['case-study'] : []),
    ];

    return {
      topic,
      nodes: topicNodes,
      blogCount,
      resourceCount,
      serviceCount,
      featureCount,
      industryCount,
      caseStudyCount,
      supportCount,
      supportTypes,
      hasSupportingPost: blogCount > 0,
      hasInternalLinkPath: supportCount > 0,
      isOrphan: topicNodes.length === 0 || blogCount === 0 || supportCount === 0,
    };
  });
}
