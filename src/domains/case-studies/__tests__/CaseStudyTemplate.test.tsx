import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CaseStudyTemplate } from '@/domains/case-studies/templates/CaseStudyTemplate';

vi.mock('@/components/reusable/sections/case-studies', () => ({
  CaseStudyBusinessImpactSection: () => <div>business-impact</div>,
  CaseStudyDeliverablesSection: () => <div>deliverables</div>,
  CaseStudyFeaturesSection: () => <div>features</div>,
  CaseStudyHeroSection: () => <div>hero-section</div>,
  CaseStudyInvestmentSection: () => <div>investment</div>,
  CaseStudyMetricsSection: () => <div>metrics</div>,
  CaseStudyProblemSection: () => <div>problem-section</div>,
  CaseStudyProcessSection: () => <div>process</div>,
  CaseStudyResultsSection: () => <div>results-section</div>,
  CaseStudySolutionSection: () => <div>solution</div>,
  CaseStudyWorkflowsSection: () => <div>workflows</div>,
}));

vi.mock('@/components/reusable/single', () => ({
  TestimonialCard: () => <div>testimonial</div>,
}));

vi.mock('@/components/reusable/single/FAQSection', () => ({
  FAQSection: () => <div>faq</div>,
}));

vi.mock('@/components/system/PageEnforcement', () => ({
  CTARegistryProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/components/system/PrimaryCTASection', () => ({
  PrimaryCTASection: ({ title }: { title: string }) => <div data-testid='smart-cta'>{title}</div>,
}));

vi.mock('@/components/system/SmartRelatedSection', () => ({
  SmartRelatedSection: () => <div>related-section</div>,
}));

describe('CaseStudyTemplate', () => {
  it('preserves declared section order and renders only the footer CTA', () => {
    render(
      <CaseStudyTemplate
        pageId='case-study:test'
        metadata={{
          slug: 'test-case-study',
          seo: {
            title: 'Test case study',
            description: 'Test description',
            canonical: '/case-studies/test-case-study',
          },
          industryCategory: 'home-services',
          industryLabel: 'Home Services',
          systems: ['smart-website-systems'],
          publishDate: '2026-01-01',
          client: 'Client',
          location: 'Leeds, UK',
          business: 'Business',
          duration: '6 weeks',
          completedDate: 'January 2026',
          heroHeadline: 'Headline',
          keyMetrics: [],
          tags: [],
        }}
        sections={[
          { type: 'hero', introHtml: <>Intro</> },
          {
            type: 'results',
            results: [
              {
                metric: 'Replies',
                before: 'Low',
                after: 'Higher',
                improvement: 'Up',
                description: 'Desc',
              },
            ],
          },
          {
            type: 'problem',
            problemHeading: 'Problem',
            problemDescription: ['Problem description'],
            painPoints: ['Pain point'],
          },
          { type: 'cta', heading: 'Footer CTA', body: 'Footer body' },
        ]}
      />
    );

    const bodyText = document.body.textContent ?? '';
    expect(bodyText.indexOf('results-section')).toBeLessThan(bodyText.indexOf('problem-section'));

    const ctas = screen.getAllByTestId('smart-cta');
    expect(ctas).toHaveLength(1);
    expect(ctas[0]).toHaveTextContent('Footer CTA');
  });

  it('warns and skips invalid section shapes without crashing', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    render(
      <CaseStudyTemplate
        pageId='case-study:test'
        metadata={{
          slug: 'test-case-study',
          seo: {
            title: 'Test case study',
            description: 'Test description',
            canonical: '/case-studies/test-case-study',
          },
          industryCategory: 'home-services',
          industryLabel: 'Home Services',
          systems: ['smart-website-systems'],
          publishDate: '2026-01-01',
          client: 'Client',
          location: 'Leeds, UK',
          business: 'Business',
          duration: '6 weeks',
          completedDate: 'January 2026',
          heroHeadline: 'Headline',
          keyMetrics: [],
          tags: [],
        }}
        sections={[
          { type: 'hero', introHtml: <>Intro</> },
          { type: 'problem', problemHeading: 'Problem' } as never,
          { type: 'cta', heading: 'Footer CTA', body: 'Footer body' },
        ]}
      />
    );

    expect(screen.getAllByTestId('smart-cta')).toHaveLength(1);
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});
