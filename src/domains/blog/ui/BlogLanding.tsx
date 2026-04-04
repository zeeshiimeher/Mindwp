/* Blog landing hub for categories and latest posts.
  Uses registry metadata; routing and slug resolution stay in app routes. */

import { ArrowRight, Folder } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Card } from '@/components/ui/card';
import {
  BLOG_CATEGORIES,
  blogPosts,
  getCategoryColors,
  getCategoryMetadata,
  getCategoryPathAllowlist,
} from '@/domains/blog/api';

import { BlogPostsListIsland } from './BlogPostsListIsland';

// Config
const POSTS_PER_PAGE = 10;

export function BlogLanding() {
  // Sort posts by publish date (latest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Build category list from metadata + post counts.
  const categoryPathAllowlist = getCategoryPathAllowlist();

  const allCategories = BLOG_CATEGORIES.map(catData => ({
    category: catData.category,
    slug: catData.slug,
    count: 0,
  }));

  blogPosts.forEach(post => {
    const categoryEntry = allCategories.find(cat => cat.category === post.category);
    if (categoryEntry) {
      categoryEntry.count++;
    }
  });

  const categories = allCategories
    .filter(cat => cat.count > 0)
    .filter(cat => categoryPathAllowlist.includes(`/blog/category/${cat.slug}`));

  return (
    <div className='min-h-screen'>
      <main>
        {/* HERO */}
        <section className='l-section blog-hero'>
          <div className='l-container l-stack l-stack--loose blog-landing__hero'>
            <Badge variant='secondary' context='hero'>
              {blogPosts.length} articles
            </Badge>

            <h1>Insights for Smarter Growth</h1>

            <p className='blog-landing__lead'>
              Practical thinking on SEO, automation, AI, and digital strategy — written for service
              businesses.
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        {categories.length > 0 && (
          <section className='l-section'>
            <div className='l-container'>
              <h2 className='blog-section__title blog-section__title--center'>
                Browse by Category
              </h2>

              <div className='blog-landing__grid blog-landing__grid--categories'>
                {categories.map(({ category, slug, count }) => {
                  const colors = getCategoryColors(category);
                  return (
                    <Card key={category} className='blog-landing__card'>
                      <a
                        href={`/blog/category/${slug}`}
                        className='link-primary blog-landing__card-link'
                      >
                        <div className='blog-landing__card-top'>
                          <div className={`icon-container-md ${colors.bg}`}>
                            <Folder className={`blog-landing__icon ${colors.text}`} />
                          </div>
                          <Badge variant='outline' size='sm' context='meta'>
                            {count} posts
                          </Badge>
                        </div>

                        <div>
                          <h3 className='blog-landing__card-title'>
                            {getCategoryMetadata(category)?.name ?? category}
                          </h3>
                          <p className='blog-landing__card-description'>
                            {getCategoryMetadata(category)?.description ??
                              'Articles in this category.'}
                          </p>
                        </div>

                        <span className='blog-landing__card-cta'>
                          Browse posts <ArrowRight aria-hidden='true' />
                        </span>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* POSTS */}
        <section className='l-section blog-surface--muted'>
          <div className='l-container'>
            <h2 className='blog-section__title'>Latest Articles</h2>
            <BlogPostsListIsland posts={sortedPosts} postsPerPage={POSTS_PER_PAGE} />
          </div>
        </section>
      </main>
    </div>
  );
}
