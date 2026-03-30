/* Shared blog-category layout.
  Filters canonical post metadata by category; no routing or content resolution here. */

import { useMemo } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { blogPosts, getCategoryColors, getCategoryMetadata } from '@/domains/blog/api';
import { BlogCategory } from '@/domains/blog/types';

export type BlogCategoryTemplateProps = {
  category: BlogCategory;
};
function getCategoryDescription(_category: BlogCategory): string {
  // Prefer a single centralized description source if/when introduced.
  // For now we intentionally mirror the existing blog category description behavior.
  return 'Articles in this category.';
}
export function BlogCategoryTemplate({ category }: BlogCategoryTemplateProps) {
  const postsInCategory = useMemo(
    () => blogPosts.filter(post => post.category === category),
    [category]
  );
  const meta = getCategoryMetadata(category);
  const title = meta?.name ?? category;
  const description = meta?.description ?? getCategoryDescription(category);
  return (
    <div className='min-h-screen'>
      <main>
        {/* HERO */}
        <section className='l-section blog-hero'>
          <div className='l-container l-stack l-stack--loose blog-category__hero'>
            <span
              className={`badge badge--hero ${getCategoryColors(category).bg} ${getCategoryColors(category).text}`}
            >
              {postsInCategory.length} articles
            </span>

            <h1>{title}</h1>

            <p className='blog-category__lead'>{description}</p>
          </div>
        </section>
        {/* POSTS */}
        <section className='l-section blog-surface--muted'>
          <div className='l-container'>
            <h2 className='blog-section__title'>Latest Articles</h2>
            {postsInCategory.length === 0 ? (
              <p className='text-center text-muted-foreground'>No articles published yet.</p>
            ) : (
              <div className='blog-category__grid'>
                {postsInCategory.map(post => (
                  <Card key={post.slug} className='blog-category__card'>
                    <div className='l-stack'>
                      <span
                        className={`badge badge--meta ${getCategoryColors(post.category).bg} ${getCategoryColors(post.category).text}`}
                      >
                        {post.category}
                      </span>

                      <h3 className='blog-category__card-title'>{post.title}</h3>

                      <p className='blog-category__card-description'>{post.metaDescription}</p>

                      <div className='blog-category__card-meta'>
                        <Calendar className='w-3 h-3' aria-hidden='true' />
                        {post.publishDate}
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className='link-primary blog-landing__card-cta'
                      >
                        Read article <ArrowRight className='w-3 h-3' />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
