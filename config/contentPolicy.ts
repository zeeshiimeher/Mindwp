import type { ContentNodeType, ConversionGoal } from '@/lib/content-graph/types';
import type { IndexingClassification } from './indexingPolicy';

export type ContentPolicyEntry = {
    routeOwner: 'content-graph';
    visibility: 'public';
    canonicalRule: 'self';
    authorityWeight: number;
    conversionGoal: ConversionGoal;
    conversionPriority: number;
    indexingClassification: IndexingClassification;
};

export const CONTENT_POLICY: Record<ContentNodeType, ContentPolicyEntry> = {
    service: {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 10,
        conversionGoal: 'consultation',
        conversionPriority: 100,
        indexingClassification: 'services',
    },
    feature: {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 8,
        conversionGoal: 'demo',
        conversionPriority: 80,
        indexingClassification: 'features',
    },
    'industry-category': {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 4,
        conversionGoal: 'lead',
        conversionPriority: 60,
        indexingClassification: 'industries',
    },
    'industry-detail': {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 6,
        conversionGoal: 'lead',
        conversionPriority: 90,
        indexingClassification: 'industries',
    },
    'case-study': {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 5,
        conversionGoal: 'consultation',
        conversionPriority: 70,
        indexingClassification: 'caseStudies',
    },
    blog: {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 2,
        conversionGoal: 'email-capture',
        conversionPriority: 40,
        indexingClassification: 'blog',
    },
    resource: {
        routeOwner: 'content-graph',
        visibility: 'public',
        canonicalRule: 'self',
        authorityWeight: 3,
        conversionGoal: 'email-capture',
        conversionPriority: 50,
        indexingClassification: 'resources',
    },
};

export function getContentPolicy(type: ContentNodeType): ContentPolicyEntry {
    return CONTENT_POLICY[type];
}