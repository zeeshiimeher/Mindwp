import { BLOG_CATEGORY_REGISTRY } from '@/domains/blog/categoryRegistry';
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
  icon?: string;
};

export const BLOG_AUTHORS: Record<string, Author> = {
  DEFAULT: {
    key: 'DEFAULT',
    name: 'Editorial Team',
    role: 'MindWP',
    initials: 'MW',
  },
  EDITORIAL: {
    key: 'EDITORIAL',
    name: 'Editorial Team',
    role: 'MindWP',
    initials: 'MW',
  },
  TECHNICAL: {
    key: 'TECHNICAL',
    name: 'Editorial Team',
    role: 'MindWP',
    initials: 'MW',
  },
  INDUSTRY: {
    key: 'INDUSTRY',
    name: 'Editorial Team',
    role: 'MindWP',
    initials: 'MW',
  },
};

export const BLOG_CATEGORIES: BlogCategoryMetadata[] = Object.values(BLOG_CATEGORY_REGISTRY).map(
  category => ({
    category: category.id,
    slug: category.slug,
    name: category.label,
    description: category.description,
    icon: 'file-text',
  })
);

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
