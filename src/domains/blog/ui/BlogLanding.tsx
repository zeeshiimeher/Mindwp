/* Blog landing hub for categories and latest posts.
  Uses registry metadata; routing and slug resolution stay in app routes. */

import { ArrowRight, Folder } from 'lucide-react';

import { SectionShell } from '@/components/layout/SectionShell';
import {
  BLOG_CATEGORIES,
  blogPosts,
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
    <main>
      <SectionShell
        ariaLabel='Blog landing hero'
        tone='mist'
        heading={{
          eyebrow: `${blogPosts.length} articles`,
          title: 'Insights for Smarter Growth',
          description:
            'Practical thinking on website clarity, local visibility, response, follow-up, and proof — written for service businesses.',
        }}
      >
        <a className='mw-btn mw-btn--primary' href='#latest-articles'>
          Latest articles
        </a>
      </SectionShell>

      {categories.length > 0 ? (
        <SectionShell
          ariaLabel='Blog categories'
          tone='white'
          heading={{
            eyebrow: 'Categories',
            title: 'Browse by Category',
            description:
              'Start with the operating problem you are trying to understand, then read the articles that sit under that theme.',
          }}
        >
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {categories.map(({ category, slug, count }) => {
              const categoryMeta = getCategoryMetadata(category);

              return (
                <a
                  key={category}
                  href={`/blog/category/${slug}`}
                  className='group flex h-full flex-col mw-surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--mw-shadow-md)]'
                >
                  <div className='mb-5 flex items-center justify-between gap-4'>
                    <span className='grid size-10 place-items-center rounded-full border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] text-[var(--mw-signal-cyan)]'>
                      <Folder className='size-5' aria-hidden='true' />
                    </span>
                    <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                      {count} posts
                    </span>
                  </div>

                  <h3>{categoryMeta?.name ?? category}</h3>
                  <p>{categoryMeta?.description ?? 'Articles in this category.'}</p>

                  <span className='mt-auto inline-flex items-center gap-2 pt-5 mw-text-body-sm mw-text-signal-cyan'>
                    Browse posts
                    <ArrowRight size={14} aria-hidden='true' />
                  </span>
                </a>
              );
            })}
          </div>
        </SectionShell>
      ) : null}

      <SectionShell
        id='latest-articles'
        ariaLabel='Latest blog articles'
        tone='mist'
        heading={{
          eyebrow: 'Latest articles',
          title: 'Latest Articles',
          description:
            'A working library for service businesses improving visibility, enquiry handling, follow-up, reputation, and growth systems.',
        }}
      >
        <BlogPostsListIsland posts={sortedPosts} postsPerPage={POSTS_PER_PAGE} />
      </SectionShell>
    </main>
  );
}
