'use client';

import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
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
    return <p className='text-center text-muted-foreground'>No articles published yet.</p>;
  }

  return (
    <>
      <div className='blog-landing__grid blog-landing__grid--posts'>
        {visiblePosts.map(post => (
          <Card key={post.slug} className='blog-landing__card'>
            <div className='l-stack'>
              <Badge variant='outline' size='sm' cssPrefix='badge--meta'>
                {getCategoryMetadata(post.category)?.name ?? post.category}
              </Badge>

              <h3 className='blog-landing__card-title'>{post.title}</h3>

              <p className='blog-landing__card-description'>{post.metaDescription}</p>

              <div className='blog-landing__card-meta'>
                <Calendar className='w-3 h-3' aria-hidden='true' />
                {post.publishDate}
              </div>

              <a href={post.url} className='link-primary blog-landing__card-cta'>
                Read article <ArrowRight className='w-3 h-3' />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {hasMore && (
        <div className='blog-landing__load-more'>
          <Button
            variant='outline'
            label='Load more articles'
            onClick={() => setVisibleCount(prev => prev + postsPerPage)}
          />
        </div>
      )}
    </>
  );
}
