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
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  EDITORIAL: {
    key: 'EDITORIAL',
    name: 'Editorial Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  TECHNICAL: {
    key: 'TECHNICAL',
    name: 'Editorial Team',
    role: 'WordPress & AI Specialists',
    initials: 'MW',
  },
  INDUSTRY: {
    key: 'INDUSTRY',
    name: 'Editorial Team',
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
    icon: 'search',
  },
  {
    category: 'ai-lead-handling',
    slug: 'ai-lead-handling',
    name: 'AI Lead Handling',
    description:
      'Articles about lead response automation, missed-call recovery, qualification systems, and AI-assisted communication.',
    icon: 'cpu',
  },
  {
    category: 'local-authority-seo',
    slug: 'local-authority-seo',
    name: 'Local Authority SEO',
    description:
      'Articles about local visibility, authority signals, search positioning, and search ecosystem changes.',
    icon: 'map-pin',
  },
  {
    category: 'crm-automation',
    slug: 'crm-automation',
    name: 'CRM Automation',
    description:
      'Articles about CRM workflows, automation systems, lifecycle tracking, and operational visibility.',
    icon: 'settings',
  },
  {
    category: 'reputation-review',
    slug: 'reputation-review',
    name: 'Reputation Review',
    description:
      'Articles about review systems, trust signals, reputation workflows, and review-driven authority.',
    icon: 'star',
  },
  {
    category: 'home-services-industry',
    slug: 'home-services-industry',
    name: 'Home Services Industry',
    description:
      'Industry-specific blog posts for roofing, HVAC, plumbing, and related home service businesses.',
    icon: 'briefcase',
  },
  {
    category: 'beauty-personal-care-industry',
    slug: 'beauty-personal-care-industry',
    name: 'Beauty Personal Care Industry',
    description:
      'Industry-specific blog posts for salons, clinics, med spas, and beauty-led appointment businesses.',
    icon: 'heart',
  },
  {
    category: 'future-local-business-tech',
    slug: 'future-local-business-tech',
    name: 'Future Local Business Tech',
    description:
      'Articles about emerging operational technology, AI shifts, and the future infrastructure of local business growth.',
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
