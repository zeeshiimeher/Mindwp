export const BLOG_LANDING_SEO = {
  title: 'Blog',
  description: 'Articles, notes, and system-focused takeaways.',
  path: '/blog',
} as const;

export const BLOG_CATEGORY_NOT_FOUND_SEO = {
  title: 'Category Not Found',
  description: "The blog category you're looking for doesn't exist.",
  path: '/blog',
  noindex: true,
  nofollow: true,
} as const;
