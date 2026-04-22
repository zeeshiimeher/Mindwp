import { BLOG_POSTS } from '@/domains/blog/registry';
import type { BlogCategory, BlogPostData } from '@/domains/blog/types';

export type Author = {
  key: string;
  name: string;
  role: string;
  initials: string;
};

export type BlogPostListItem = BlogPostData & {
  url: string;
};

export type BlogCategoryMetadata = {
  category: BlogCategory;
  slug: string;
  name: string;
  description: string;
  colors: {
    bg: string;
    text: string;
  };
  icon?: string;
};

export const BLOG_AUTHORS: Record<string, Author> = {
  DEFAULT: {
    key: 'DEFAULT',
    name: 'MindWP Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  EDITORIAL: {
    key: 'EDITORIAL',
    name: 'MindWP Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  TECHNICAL: {
    key: 'TECHNICAL',
    name: 'MindWP Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  INDUSTRY: {
    key: 'INDUSTRY',
    name: 'MindWP Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
};

export const BLOG_CATEGORIES: BlogCategoryMetadata[] = [
  {
    category: 'smart-website-systems',
    slug: 'smart-website-systems',
    name: 'Smart Website Systems',
    description:
      'Articles about system-first website architecture, conversion structure, and infrastructure-led web strategy.',
    colors: {
      bg: 'blog-category-bg--seo',
      text: 'blog-category-text--seo',
    },
    icon: 'search',
  },
  {
    category: 'ai-lead-handling',
    slug: 'ai-lead-handling',
    name: 'AI Lead Handling',
    description:
      'Articles about lead response automation, missed-call recovery, qualification systems, and AI-assisted communication.',
    colors: {
      bg: 'blog-category-bg--ai',
      text: 'blog-category-text--ai',
    },
    icon: 'cpu',
  },
  {
    category: 'local-authority-seo',
    slug: 'local-authority-seo',
    name: 'Local Authority SEO',
    description:
      'Articles about local visibility, authority signals, search positioning, and search ecosystem changes.',
    colors: {
      bg: 'blog-category-bg--technical-seo',
      text: 'blog-category-text--technical-seo',
    },
    icon: 'map-pin',
  },
  {
    category: 'crm-automation',
    slug: 'crm-automation',
    name: 'CRM Automation',
    description:
      'Articles about CRM workflows, automation systems, lifecycle tracking, and operational visibility.',
    colors: {
      bg: 'blog-category-bg--marketing',
      text: 'blog-category-text--marketing',
    },
    icon: 'settings',
  },
  {
    category: 'reputation-review',
    slug: 'reputation-review',
    name: 'Reputation Review',
    description:
      'Articles about review systems, trust signals, reputation workflows, and review-driven authority.',
    colors: {
      bg: 'blog-category-bg--content-marketing',
      text: 'blog-category-text--content-marketing',
    },
    icon: 'star',
  },
  {
    category: 'home-services-industry',
    slug: 'home-services-industry',
    name: 'Home Services Industry',
    description:
      'Industry-specific blog posts for roofing, HVAC, plumbing, and related home service businesses.',
    colors: {
      bg: 'blog-category-bg--industry',
      text: 'blog-category-text--industry',
    },
    icon: 'briefcase',
  },
  {
    category: 'beauty-personal-care-industry',
    slug: 'beauty-personal-care-industry',
    name: 'Beauty Personal Care Industry',
    description:
      'Industry-specific blog posts for salons, clinics, med spas, and beauty-led appointment businesses.',
    colors: {
      bg: 'blog-category-bg--local-seo',
      text: 'blog-category-text--local-seo',
    },
    icon: 'heart',
  },
  {
    category: 'future-local-business-tech',
    slug: 'future-local-business-tech',
    name: 'Future Local Business Tech',
    description:
      'Articles about emerging operational technology, AI shifts, and the future infrastructure of local business growth.',
    colors: {
      bg: 'blog-category-bg--industry',
      text: 'blog-category-text--industry',
    },
    icon: 'file-text',
  },
];

export const blogPosts: BlogPostListItem[] = Object.values(BLOG_POSTS).map(post => ({
  ...post,
  url: `/blog/${post.slug}`,
}));

export function getCategoryMetadata(category: BlogCategory): BlogCategoryMetadata | undefined {
  return BLOG_CATEGORIES.find(cat => cat.category === category);
}

export function getCategoryBySlug(slug: string): BlogCategoryMetadata | undefined {
  return BLOG_CATEGORIES.find(cat => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return BLOG_CATEGORIES.map(category => category.slug);
}

export function getCategoryPathAllowlist(): string[] {
  return BLOG_CATEGORIES.map(category => `/blog/category/${category.slug}`);
}

export function getCategoryColors(category: BlogCategory) {
  const metadata = getCategoryMetadata(category);
  return (
    metadata?.colors || {
      bg: 'blog-category-bg--industry',
      text: 'blog-category-text--industry',
    }
  );
}
