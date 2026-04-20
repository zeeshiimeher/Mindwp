// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import { BLOG_POSTS } from '@/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/generatedRegistry';
import { SERVICE_REGISTRY } from '@/domains/services/registry';

import { getGraphNodes, initRuntime } from './runtime';

describe('system invariant: graph and registries stay aligned', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('graph node count matches the publishable registry count', () => {
    const expectedCount =
      Object.keys(SERVICE_REGISTRY).length +
      FEATURE_REGISTRY.length +
      Object.keys(BLOG_POSTS).length +
      Object.keys(RESOURCE_REGISTRY).length +
      Object.keys(CASE_STUDY_REGISTRY).length +
      Object.keys(INDUSTRY_REGISTRY).length;

    expect(getGraphNodes()).toHaveLength(expectedCount);
  });

  test('every service registry entry resolves to one service graph node', () => {
    const serviceNodes = getGraphNodes('service');
    expect(serviceNodes).toHaveLength(Object.keys(SERVICE_REGISTRY).length);

    for (const service of Object.values(SERVICE_REGISTRY)) {
      const node = serviceNodes.find(candidate => candidate.slug === service.slug);
      expect(node, `Missing graph node for service "${service.slug}"`).toBeDefined();
      expect(node?.path).toBe(service.path);
      expect(node?.type).toBe('service');
    }
  });

  test('every feature registry entry resolves to one feature graph node', () => {
    const featureNodes = getGraphNodes('feature');
    expect(featureNodes).toHaveLength(FEATURE_REGISTRY.length);

    for (const feature of FEATURE_REGISTRY) {
      const node = featureNodes.find(candidate => candidate.slug === feature.slug);
      expect(node, `Missing graph node for feature "${feature.slug}"`).toBeDefined();
      expect(node?.path).toBe(feature.path);
      expect(node?.type).toBe('feature');
    }
  });

  test('every blog, resource, and case study entry resolves to one graph node with the canonical path', () => {
    const blogNodes = getGraphNodes('blog');
    const resourceNodes = getGraphNodes('resource');
    const caseStudyNodes = getGraphNodes('case-study');

    expect(blogNodes).toHaveLength(Object.keys(BLOG_POSTS).length);
    expect(resourceNodes).toHaveLength(Object.keys(RESOURCE_REGISTRY).length);
    expect(caseStudyNodes).toHaveLength(Object.keys(CASE_STUDY_REGISTRY).length);

    for (const post of Object.values(BLOG_POSTS)) {
      const node = blogNodes.find(candidate => candidate.slug === post.slug);
      expect(node, `Missing graph node for blog "${post.slug}"`).toBeDefined();
      expect(node?.path).toBe(`/blog/${post.slug}`);
    }

    for (const resource of Object.values(RESOURCE_REGISTRY)) {
      const node = resourceNodes.find(candidate => candidate.slug === resource.slug);
      expect(node, `Missing graph node for resource "${resource.slug}"`).toBeDefined();
      expect(node?.path).toBe(resource.seo.canonical);
    }

    for (const caseStudy of Object.values(CASE_STUDY_REGISTRY)) {
      const node = caseStudyNodes.find(candidate => candidate.slug === caseStudy.slug);
      expect(node, `Missing graph node for case study "${caseStudy.slug}"`).toBeDefined();
      expect(node?.path).toBe(`/case-studies/${caseStudy.slug}`);
    }
  });

  test('every industry registry entry resolves to one graph node with the correct parent relationship', () => {
    const industryNodes = [
      ...getGraphNodes('industry-category'),
      ...getGraphNodes('industry-detail'),
    ];

    expect(industryNodes).toHaveLength(Object.keys(INDUSTRY_REGISTRY).length);

    for (const industry of Object.values(INDUSTRY_REGISTRY)) {
      const node = industryNodes.find(candidate => candidate.path === industry.seo.canonical);
      expect(node, `Missing graph node for industry path "${industry.seo.canonical}"`).toBeDefined();
      expect(node?.slug).toBe(industry.slug);

      if (industry.type === 'category') {
        expect(node?.type).toBe('industry-category');
        expect(node?.parent).toBeUndefined();
      } else {
        expect(node?.type).toBe('industry-detail');
        expect(node?.parent).toBe(industry.parentSlug);
      }
    }
  });
});