/* Topic hub template.
   Groups posts matching a canonical topic into structured sections. */

import { ArrowRight, Calendar } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { Card } from '@/components/ui/card';
import {
  getCategoryColors,
  getCategoryMetadata,
  type TopicHubSectionData,
} from '@/domains/blog/api';
import type { TopicMetadata } from '@/domains/blog/topicRegistry';

export type BlogTopicTemplateProps = {
  topic: TopicMetadata;
  sections: TopicHubSectionData[];
  totalPosts: number;
};

export function BlogTopicTemplate({ topic, sections, totalPosts }: BlogTopicTemplateProps) {
  return (
    <div className='min-h-screen'>
      <main>
        {/* HERO */}
        <SectionWrapper className='blog-hero'>
          <div className='l-stack l-stack--loose blog-category__hero'>
            <span className='badge badge--hero blog-category-bg--seo blog-category-text--seo'>
              {totalPosts} {totalPosts === 1 ? 'article' : 'articles'}
            </span>

            <h1>{topic.name}</h1>

            <p className='blog-category__lead'>{topic.description}</p>
          </div>
        </SectionWrapper>

        {/* SECTIONS */}
        {sections.length === 0 ? (
          <SectionWrapper className='blog-surface--muted'>
              <p className='text-center text-muted-foreground'>
                No articles published for this topic yet.
              </p>
          </SectionWrapper>
        ) : (
          sections.map(section => (
            <SectionWrapper key={section.key} className='blog-surface--muted'>
                <h2 className='blog-section__title'>{section.label}</h2>
                <div className='blog-category__grid'>
                  {section.posts.map(post => {
                    const colors = getCategoryColors(post.category);
                    const catMeta = getCategoryMetadata(post.category);
                    return (
                      <Card key={post.slug} className='blog-category__card'>
                        <div className='l-stack'>
                          <span className={`badge badge--meta ${colors.bg} ${colors.text}`}>
                            {catMeta?.name ?? post.category}
                          </span>

                          <h3 className='blog-category__card-title'>{post.title}</h3>

                          <p className='blog-category__card-description'>{post.metaDescription}</p>

                          <div className='blog-category__card-meta'>
                            <Calendar aria-hidden='true' />
                            {post.publishDate}
                          </div>

                          <a
                            href={`/blog/${post.slug}`}
                            className='link-primary blog-landing__card-cta'
                          >
                            Read article <ArrowRight aria-hidden='true' />
                          </a>
                        </div>
                      </Card>
                    );
                  })}
                </div>
            </SectionWrapper>
          ))
        )}
      </main>
    </div>
  );
}
