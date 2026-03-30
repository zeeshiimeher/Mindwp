import { describe, expect, it, vi } from 'vitest';

vi.mock('@/domains/industries/templates/IndustryCategoryPageTemplate', () => ({
  IndustryCategoryPageTemplate: function IndustryCategoryPageTemplate() {
    return <div data-testid='industry-category-template' />;
  },
}));

vi.mock('@/domains/industries/templates/IndustryDetailPageTemplate', () => ({
  IndustryDetailPageTemplate: function IndustryDetailPageTemplate() {
    return <div data-testid='industry-detail-template' />;
  },
}));

import {
  clearIndustryRendererOverrides,
  getIndustryEntryByPath,
  registerIndustryCategoryRendererOverride,
  registerIndustryDetailRendererOverride,
  renderIndustryPageByPath,
} from '@/domains/industries/config';

describe('industries config resolution', () => {
  it('resolves category and detail entries by canonical path', () => {
    const categoryEntry = getIndustryEntryByPath('/industries/beauty-personal-care');
    const detailEntry = getIndustryEntryByPath(
      '/industries/beauty-personal-care/lash-lift-and-extensions'
    );

    expect(categoryEntry?.type).toBe('category');
    expect(detailEntry?.type).toBe('detail');
  });

  it('renders category page with default renderer when no override exists', () => {
    clearIndustryRendererOverrides();

    const rendered = renderIndustryPageByPath('/industries/beauty-personal-care');

    expect(rendered).not.toBeNull();
    expect((rendered as { type?: { name?: string } }).type?.name).toBe(
      'IndustryCategoryPageTemplate'
    );
  });

  it('applies registered category renderer override', () => {
    clearIndustryRendererOverrides();

    registerIndustryCategoryRendererOverride('beauty-personal-care', () => (
      <div data-testid='category-override' />
    ));

    const rendered = renderIndustryPageByPath('/industries/beauty-personal-care');

    expect(rendered).not.toBeNull();
    expect((rendered as { type?: string; props?: { ['data-testid']?: string } }).type).toBe('div');
    expect((rendered as { props?: { ['data-testid']?: string } }).props?.['data-testid']).toBe(
      'category-override'
    );

    clearIndustryRendererOverrides();
  });

  it('applies registered detail renderer override', () => {
    clearIndustryRendererOverrides();

    registerIndustryDetailRendererOverride(
      '/industries/beauty-personal-care/lash-lift-and-extensions',
      () => <div data-testid='detail-override' />
    );

    const rendered = renderIndustryPageByPath(
      '/industries/beauty-personal-care/lash-lift-and-extensions'
    );

    expect(rendered).not.toBeNull();
    expect((rendered as { type?: string; props?: { ['data-testid']?: string } }).type).toBe('div');
    expect((rendered as { props?: { ['data-testid']?: string } }).props?.['data-testid']).toBe(
      'detail-override'
    );

    clearIndustryRendererOverrides();
  });

  it('throws when registering override for unknown category slug', () => {
    clearIndustryRendererOverrides();

    expect(() =>
      registerIndustryCategoryRendererOverride('unknown-category', () => <div />)
    ).toThrowError(/Unknown category slug/);
  });

  it('throws when registering override for unknown detail path', () => {
    clearIndustryRendererOverrides();

    expect(() =>
      registerIndustryDetailRendererOverride('/industries/unknown/path', () => <div />)
    ).toThrowError(/Unknown detail path/);
  });
});
