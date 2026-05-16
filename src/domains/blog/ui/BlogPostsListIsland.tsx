'use client';

import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

import { type BlogPostListItem, getCategoryMetadata } from '@/domains/blog/api';

type BlogPostsListIslandProps = {
  posts: BlogPostListItem[];
  postsPerPage: number;
};

export function BlogPostsListIsland({ posts, postsPerPage }: BlogPostsListIslandProps) {
  const [visibleCount, setVisibleCount] = useState(postsPerPage);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  if (visiblePosts.length === 0) {
    return <p className='text-center mw-text-secondary'>No articles published yet.</p>;
  }

  return (
    <>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {visiblePosts.map(post => (
          <article key={post.slug} className='flex h-full flex-col mw-surface-card p-6'>
            <p className='mw-text-eyebrow mw-text-signal-cyan'>
              {getCategoryMetadata(post.category)?.name ?? post.category}
            </p>

            <h3>{post.title}</h3>
            <p>{post.seo.description}</p>

            <div className='mt-4 flex items-center gap-2 mw-text-body-sm mw-text-secondary'>
              <Calendar size={14} aria-hidden='true' />
              <span>{post.publishDate}</span>
            </div>

            <div className='mt-auto pt-5'>
              <a href={post.url} className='mw-btn mw-btn--secondary'>
                <span>Read article</span>
                <ArrowRight size={14} aria-hidden='true' />
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className='mt-8 flex justify-center'>
          <button
            type='button'
            className='mw-btn mw-btn--secondary'
            onClick={() => setVisibleCount(prev => prev + postsPerPage)}
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  );
}
