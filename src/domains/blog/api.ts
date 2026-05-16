import { BLOG_CATEGORY_REGISTRY } from '@/domains/blog/categoryRegistry';
import { BLOG_POSTS } from '@/domains/blog/registry';
import {
  getAllTopicSlugs,
  getSectionForCategory,
  getTopicMetadata,
  SECTION_LABELS,
  SECTION_ORDER,
  type TopicHubSection,
  type TopicMetadata,
} from '@/domains/blog/topicRegistry';
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

/* ------------------------------------------------------------------ */
/*  Topic Hub Utilities                                               */
/* ------------------------------------------------------------------ */

export type TopicHubSectionData = {
  key: TopicHubSection;
  label: string;
  posts: BlogPostListItem[];
};

export function getTopicBySlug(slug: string): TopicMetadata | undefined {
  return getTopicMetadata(slug);
}

export function getallTopicSlugs(): string[] {
  return getAllTopicSlugs();
}

export function getTopicPathAllowlist(): string[] {
  return getAllTopicSlugs().map(slug => `/blog/topic/${slug}`);
}

/** Returns posts matching a topic, sorted newest-first. */
export function getPostsForTopic(topic: string): BlogPostListItem[] {
  return blogPosts
    .filter(post => post.topics.includes(topic))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

/**
 * Groups posts for a topic into ordered sections based on each post's category.
 * Empty sections are omitted.
 */
export function getTopicHubSections(topic: string): TopicHubSectionData[] {
  const posts = getPostsForTopic(topic);

  const buckets = new Map<TopicHubSection, BlogPostListItem[]>();
  for (const post of posts) {
    const section = getSectionForCategory(post.category);
    const list = buckets.get(section) ?? [];
    list.push(post);
    buckets.set(section, list);
  }

  return SECTION_ORDER.filter(key => buckets.has(key)).map(key => ({
    key,
    label: SECTION_LABELS[key],
    posts: buckets.get(key) as BlogPostListItem[],
  }));
}
