import { CANONICAL_TOPICS } from '@/lib/content-graph/canonical';
import type { AttributedEdge, ContentGraphNode } from '@/lib/content-graph/types';

import { slugLabel } from './topicCoverage';

export type TopicClassification = 'core' | 'conceptual';
export type ValidationRequirement = 'case-study' | 'resource';
export type ValidationStatus = 'validated' | 'partial' | 'missing' | 'not-required';

export interface TopicValidationCandidate {
  id: string;
  slug: string;
  title: string;
  path: string;
  type: 'case-study' | 'resource' | 'service';
}

export interface TopicValidationSnapshot {
  topic: string;
  classification: TopicClassification;
  validatingCaseStudyCount: number;
  validatingResourceCount: number;
  validatesCount: number;
  requiredValidation: ValidationRequirement[];
  missingValidation: ValidationRequirement[];
  validationStatus: ValidationStatus;
  serviceTargets: TopicValidationCandidate[];
  suggestedCaseStudy: TopicValidationCandidate | null;
  suggestedResource: TopicValidationCandidate | null;
  suggestedFixes: string[];
}

export interface ServiceValidationSnapshot {
  serviceSlug: string;
  serviceTitle: string;
  caseStudyValidationCount: number;
  validatingCaseStudySlugs: string[];
}

const CONCEPTUAL_TOPICS = new Set<string>([
  'authority-signals',
  'crm-enabled-websites',
  'service-page-architecture',
  'systems-first-websites',
  'website-infrastructure',
]);

function getNodeTitle(node: ContentGraphNode): string {
  return node.title?.trim() || slugLabel(node.slug);
}

function overlapsCount(left: readonly string[] | undefined, right: readonly string[] | undefined): number {
  if (!left?.length || !right?.length) return 0;
  const rightSet = new Set(right);
  return left.reduce((count, value) => count + (rightSet.has(value) ? 1 : 0), 0);
}

function toCandidate(node: ContentGraphNode): TopicValidationCandidate {
  return {
    id: node.id,
    slug: node.slug,
    title: getNodeTitle(node),
    path: node.path,
    type: node.type as 'case-study' | 'resource',
  };
}

function buildFixLabel(topic: string): string {
  return slugLabel(topic);
}

function getTopicClassification(topic: string): TopicClassification {
  return CONCEPTUAL_TOPICS.has(topic) ? 'conceptual' : 'core';
}

function getRequiredValidation(classification: TopicClassification): ValidationRequirement[] {
  return classification === 'core' ? ['case-study', 'resource'] : [];
}

function buildTargetSystems(topicNodes: ContentGraphNode[]): string[] {
  return Array.from(new Set(topicNodes.flatMap(node => node.systems ?? [])));
}

function buildTargetIndustries(topicNodes: ContentGraphNode[]): string[] {
  return Array.from(new Set(topicNodes.flatMap(node => node.industries ?? [])));
}

function buildServiceTargets(topicNodes: ContentGraphNode[]): TopicValidationCandidate[] {
  return topicNodes
    .filter(node => node.type === 'service')
    .map(node => ({
      id: node.id,
      slug: node.slug,
      title: getNodeTitle(node),
      path: node.path,
      type: 'service',
    }));
}

function pickSuggestedCandidate(
  nodes: ContentGraphNode[],
  topic: string,
  targetType: 'case-study' | 'resource',
  topicNodes: ContentGraphNode[],
): TopicValidationCandidate | null {
  const topicSystems = buildTargetSystems(topicNodes);
  const topicIndustries = buildTargetIndustries(topicNodes);

  const candidates = nodes
    .filter(node => node.type === targetType)
    .filter(node => !(node.topics ?? []).includes(topic))
    .map(node => {
      const systemScore = overlapsCount(node.systems, topicSystems) * 3;
      const industryScore = overlapsCount(node.industries, topicIndustries) * 2;
      const topicScore = overlapsCount(node.topics, topicNodes.flatMap(topicNode => topicNode.topics ?? []));
      return {
        node,
        score: systemScore + industryScore + topicScore,
      };
    })
    .filter(candidate => candidate.score > 0)
    .sort((left, right) => right.score - left.score || left.node.slug.localeCompare(right.node.slug));

  return candidates[0] ? toCandidate(candidates[0].node) : null;
}

function buildSuggestedFixes(snapshot: Omit<TopicValidationSnapshot, 'suggestedFixes'>): string[] {
  if (snapshot.classification === 'conceptual') {
    return [];
  }

  const topicLabel = buildFixLabel(snapshot.topic);
  const primaryService = snapshot.serviceTargets[0]?.title;
  const serviceContext = primaryService ? ` anchored to ${primaryService}` : '';
  const fixes: string[] = [];

  if (snapshot.missingValidation.includes('case-study')) {
    if (snapshot.suggestedCaseStudy) {
      fixes.push(
        `Retag ${snapshot.suggestedCaseStudy.title} to ${topicLabel} if the implementation demonstrates that outcome in a live workflow.`
      );
    } else {
      fixes.push(`Add one case study for ${topicLabel}${serviceContext} so the topic has primary proof.`);
    }
  }

  if (snapshot.missingValidation.includes('resource')) {
    if (snapshot.suggestedResource) {
      fixes.push(
        `Retag ${snapshot.suggestedResource.title} to ${topicLabel} and include one concrete example so the topic has secondary validation.`
      );
    } else {
      fixes.push(`Add one example-led resource for ${topicLabel}${serviceContext} so the topic has secondary validation.`);
    }
  }

  return fixes;
}

function getValidationStatus(
  classification: TopicClassification,
  missingValidation: ValidationRequirement[],
): ValidationStatus {
  if (classification === 'conceptual') return 'not-required';
  if (missingValidation.length === 0) return 'validated';
  if (missingValidation.length === 1) return 'partial';
  return 'missing';
}

export function buildTopicValidationSnapshots(
  nodes: ContentGraphNode[],
  topics: readonly string[] = CANONICAL_TOPICS,
): TopicValidationSnapshot[] {
  return topics.map(topic => {
    const topicNodes = nodes.filter(node => (node.topics ?? []).includes(topic));
    const classification = getTopicClassification(topic);
    const requiredValidation = getRequiredValidation(classification);
    const validatingCaseStudyCount = topicNodes.filter(node => node.type === 'case-study').length;
    const validatingResourceCount = topicNodes.filter(node => node.type === 'resource').length;
    const missingValidation = requiredValidation.filter(requirement => {
      if (requirement === 'case-study') return validatingCaseStudyCount === 0;
      if (requirement === 'resource') return validatingResourceCount === 0;
      return false;
    });

    const serviceTargets = buildServiceTargets(topicNodes);
    const suggestedCaseStudy = pickSuggestedCandidate(nodes, topic, 'case-study', topicNodes);
    const suggestedResource = pickSuggestedCandidate(nodes, topic, 'resource', topicNodes);
    const validationStatus = getValidationStatus(classification, missingValidation);

    const snapshotBase = {
      topic,
      classification,
      validatingCaseStudyCount,
      validatingResourceCount,
      validatesCount: validatingCaseStudyCount + validatingResourceCount,
      requiredValidation,
      missingValidation,
      validationStatus,
      serviceTargets,
      suggestedCaseStudy,
      suggestedResource,
    };

    return {
      ...snapshotBase,
      suggestedFixes: buildSuggestedFixes(snapshotBase),
    };
  });
}

export function buildServiceValidationSnapshots(nodes: ContentGraphNode[]): ServiceValidationSnapshot[] {
  const caseStudies = nodes.filter(node => node.type === 'case-study');
  const services = nodes.filter(node => node.type === 'service');

  return services.map(service => {
    const validatingCaseStudies = caseStudies.filter(caseStudy =>
      (caseStudy.validates ?? []).some((edge: AttributedEdge) => edge.id === service.id)
    );

    return {
      serviceSlug: service.slug,
      serviceTitle: getNodeTitle(service),
      caseStudyValidationCount: validatingCaseStudies.length,
      validatingCaseStudySlugs: validatingCaseStudies.map(caseStudy => caseStudy.slug).sort(),
    };
  });
}

export function isCoreTopic(topic: string): boolean {
  return getTopicClassification(topic) === 'core';
}

export function getTopicClassificationLabel(topic: string): TopicClassification {
  return getTopicClassification(topic);
}