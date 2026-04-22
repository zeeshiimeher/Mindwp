import { ArrowRight, Calendar } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { Card } from '@/components/ui/card';
import type { BlogPostListItem } from '@/domains/blog/api';

export type BlogCategoryTemplateProps = {
  title: string;
  description: string;
  badgeClassName: string;
  articleCount: number;
  posts: BlogPostListItem[];
};

export function BlogCategoryTemplate({
  title,
  description,
  badgeClassName,
  articleCount,
  posts,
}: BlogCategoryTemplateProps) {
  return (
    <div className='min-h-screen'>
      <main>
        {/* HERO */}
        <SectionWrapper className='blog-hero'>
          <div className='l-stack l-stack--loose blog-category__hero'>
            <span className={`badge badge--hero ${badgeClassName}`}>{articleCount} articles</span>

            <h1>{title}</h1>

            <p className='blog-category__lead'>{description}</p>
          </div>
        </SectionWrapper>
        {/* POSTS */}
        <SectionWrapper className='blog-surface--muted'>
          <h2 className='blog-section__title'>Latest Articles</h2>
          {posts.length === 0 ? (
            <p className='text-center text-muted-foreground'>No articles published yet.</p>
          ) : (
            <div className='blog-category__grid'>
              {posts.map(post => (
                <Card key={post.slug} className='blog-category__card'>
                  <div className='l-stack'>
                    <h3 className='blog-category__card-title'>{post.title}</h3>

                    <p className='blog-category__card-description'>{post.metaDescription}</p>

                    <div className='blog-category__card-meta'>
                      <Calendar aria-hidden='true' />
                      {post.publishDate}
                    </div>

                    <a href={`/blog/${post.slug}`} className='link-primary blog-landing__card-cta'>
                      Read article <ArrowRight aria-hidden='true' />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </SectionWrapper>
      </main>
    </div>
  );
}
