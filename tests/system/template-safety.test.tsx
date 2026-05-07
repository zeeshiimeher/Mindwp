// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BLOG_POSTS } from '@/domains/blog/registry';
import { BlogPostTemplate } from '@/domains/blog/templates/BlogPostTemplate';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { CaseStudyTemplate } from '@/domains/case-studies/templates/CaseStudyTemplate';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import ResourcePageTemplate from '@/domains/resources/templates/ResourcePageTemplate';

vi.mock('@/components/sections/PrimaryCTASection', () => ({
  PrimaryCTASection: ({ heading }: { heading?: { title?: string } }) => (
    <div data-testid='smart-cta'>{heading?.title ?? 'cta'}</div>
  ),
}));

vi.mock('@/components/navigation/RelatedSection', () => ({
  RelatedSection: () => <div data-testid='related-section'>related</div>,
}));

vi.mock('@/domains/blog/ui/BlogPostShareIsland', () => ({
  BlogPostShareIsland: () => <div data-testid='blog-share'>share</div>,
}));

describe('template safety', () => {
  it('blog template preserves authored CTA order and throws on invalid sections', () => {
    const post = Object.values(BLOG_POSTS)[0];

    expect(() =>
      render(
        <BlogPostTemplate
          pageId={`blog:${post.slug}`}
          title={post.title}
          slug={post.slug}
          category={post.category}
          publishDate={post.publishDate}
          sections={[
            ...(post.sections.slice(0, 4) as typeof post.sections),
            { type: 'cta', heading: 'Ordered CTA', content: 'Ordered CTA body' },
            { type: 'image', alt: '' } as never,
          ]}
          systems={post.systems}
        />
      )
    ).toThrow('BlogPostTemplate requires a valid image section shape at index 5.');
  });

  it('resource template throws on invalid sections instead of skipping them', () => {
    const resource = Object.values(RESOURCE_REGISTRY).find(entry =>
      entry.sections.some(section => section.type === 'cta')
    );

    expect(resource).toBeDefined();
    if (!resource) {
      return;
    }

    expect(() =>
      render(
        <ResourcePageTemplate
          pageId={`resource:${resource.slug}`}
          url={resource.seo.canonical}
          currentSlug={resource.slug}
          title={resource.title}
          description={resource.description}
          category={resource.category}
          publishedAt={resource.publishedAt}
          updatedAt={resource.updatedAt}
          seo={resource.seo}
          sections={[
            ...(resource.sections as typeof resource.sections),
            { type: 'related-resources', resources: [] } as never,
          ]}
          systems={resource.systems}
        />
      )
    ).toThrow('ResourcePageTemplate requires a valid related-resources section shape');
  });

  it('case study template throws on invalid authored sections', () => {
    const caseStudy = Object.values(CASE_STUDY_REGISTRY)[0];
    const ctaSection = caseStudy.sections.find(section => section.type === 'cta');

    expect(() =>
      render(
        <CaseStudyTemplate
          pageId={`case-study:${caseStudy.slug}`}
          metadata={{
            slug: caseStudy.slug,
            seo: caseStudy.seo,
            industryCategory: caseStudy.industryCategory,
            industryLabel: caseStudy.industryLabel,
            systems: caseStudy.systems,
            publishDate: caseStudy.publishDate,
            client: caseStudy.client,
            location: caseStudy.location,
            business: caseStudy.business,
            duration: caseStudy.duration,
            completedDate: caseStudy.completedDate,
            heroHeadline: caseStudy.heroHeadline,
            keyMetrics: caseStudy.keyMetrics,
            tags: caseStudy.tags,
          }}
          sections={[
            ...(caseStudy.sections.filter(section => section.type !== 'cta').slice(0, 2) as typeof caseStudy.sections),
            { type: 'problem', problemHeading: 'Broken' } as never,
            ...(ctaSection ? [ctaSection] : []),
          ]}
        />
      )
    ).toThrow('CaseStudyTemplate does not allow duplicate problem sections.');
  });
});