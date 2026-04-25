/* Blog-post UI template.
  Renders from provided props only; routing, slug lookup, and registries stay outside this file. */

import { Fragment, type ReactNode } from 'react';
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Phone,
  Shield,
  Star,
  User,
} from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  BlogChecklistSection,
  BlogImageSection,
  BlogQuoteSection,
  BlogStepsSection,
  BlogTakeawaysSection,
} from '@/components/reusable/sections/blog';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Callout } from '@/components/reusable/single/Callout';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { ActionButtons } from '@/components/system/ActionButtons';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { PrimaryCTASection } from '@/components/system/PrimaryCTASection';
import { Card } from '@/components/ui/card';
import {
  type Author,
  BLOG_AUTHORS,
  getCategoryColors,
  getCategoryMetadata,
} from '@/domains/blog/api';
import type { BlogCategory, BlogPostSection } from '@/domains/blog/types';
import { BlogPostShareIsland } from '@/domains/blog/ui/BlogPostShareIsland';
import { createInlineLinkTracker, extractInternalLinks } from '@/domains/seo/inlineLinking';
import { env } from '@/env';
import { enforceInlineLinkUsage } from '@/lib/page/inlineLinkEnforcement';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';
import { systemDevelopmentWarning } from '@/lib/system/runtimeWarnings';

export interface BlogPostTemplateProps {
  pageId: string;
  // Meta
  title: string;
  slug: string;
  category: BlogCategory;
  publishDate: string;
  readTime?: string;
  author?: {
    name: string;
    role: string;
    initials: string;
  };
  // Content - Flexible sections array
  sections: BlogPostSection[];
  tags?: string[];
  /** System keys for CTA routing context */
  systems?: string[];
  /** Resolved featured image path from image system */
  featuredImage?: string | null;
}

type AuthorInfo = NonNullable<BlogPostTemplateProps['author']>;

const RENDERABLE_BLOG_SECTION_TYPES = new Set<BlogPostSection['type']>([
  'introduction',
  'content',
  'cta',
  'callout',
  'takeaways',
  'quote',
  'steps',
  'checklist',
  'image',
  'faq',
]);

const AUTHOR_KEYS_BY_CATEGORY: Record<BlogCategory, Array<keyof typeof BLOG_AUTHORS>> = {
  'smart-website-systems': ['TECHNICAL'],
  'ai-lead-handling': ['TECHNICAL'],
  'local-authority-seo': ['EDITORIAL'],
  'crm-automation': ['TECHNICAL'],
  'reputation-review': ['EDITORIAL'],
  'home-services-industry': ['INDUSTRY'],
  'beauty-personal-care-industry': ['INDUSTRY'],
  'future-local-business-tech': ['EDITORIAL'],
};

function getAuthorForCategory(category: BlogCategory): AuthorInfo | undefined {
  const candidateKeys = AUTHOR_KEYS_BY_CATEGORY[category];
  const firstKey = candidateKeys?.[0];
  const selected: Author | undefined = firstKey ? BLOG_AUTHORS[firstKey] : undefined;

  if (!selected) return undefined;

  return {
    name: selected.name,
    role: selected.role,
    initials: selected.initials,
  };
}

function normalizeCalloutText(text: string): string {
  return text
    .replace(/^\s*💡\s*/u, '')
    .replace(/^\s*pro\s*tip\s*:\s*/i, '')
    .trim();
}

/*
Defaults (do not hardcode in JSX):
- `author`: if prop is provided, it is used unchanged; otherwise derived from category using the canonical `authors.ts` registry.
- `readTime`: if prop is provided, it is used unchanged; otherwise estimated from introduction + sections (≈200 words/min, rounded).
*/
function estimateReadTimeFromContent(sections: BlogPostSection[]): string {
  const wordsFromText = (text: string) => (text.match(/[\p{L}\p{N}']+/gu) ?? []).length;

  let text = '';

  // Extract text from sections
  sections.forEach(section => {
    switch (section.type) {
      case 'introduction':
        text += (section.content ?? []).join(' ') + ' ';
        break;

      case 'content': {
        if (typeof section.content === 'string') {
          text += section.content + ' ';
        } else if (Array.isArray(section.content)) {
          text += section.content.join(' ') + ' ';
        }
        if (section.list) text += section.list.join(' ') + ' ';
        if (section.callout) text += section.callout + ' ';
        break;
      }

      case 'takeaways': {
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text += (section.items ?? []).join(' ') + ' ';
        break;
      }

      case 'quote':
        text += section.quote + ' ';
        if (section.attribution) text += section.attribution + ' ';
        break;

      case 'steps': {
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text += (section.steps ?? []).map(s => `${s.label} ${s.description ?? ''}`).join(' ') + ' ';
        break;
      }

      case 'checklist':
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text += (section.items ?? []).join(' ') + ' ';
        break;

      case 'image':
        if (section.caption) text += section.caption + ' ';
        break;

      case 'faq':
        text += (section.items ?? []).map(item => `${item.question} ${item.answer}`).join(' ');
        text += ' ';
        break;

      case 'cta':
      case 'callout':
        // Keep read time based on editorial content; CTA/callout are short.
        if (section.type === 'callout') text += section.callout + ' ';
        break;

      default:
        break;
    }
  });

  const totalWords = wordsFromText(text);
  const minutes = Math.max(1, Math.round(totalWords / 200));
  return `${minutes} min read`;
}

function getBlogSectionType(section: unknown) {
  if (!section || typeof section !== 'object' || !('type' in section)) {
    return null;
  }

  return typeof section.type === 'string' ? section.type : null;
}

export function validateRenderableBlogSection(section: BlogPostSection) {
  if (!RENDERABLE_BLOG_SECTION_TYPES.has(section.type)) {
    return false;
  }

  switch (section.type) {
    case 'introduction':
      return Array.isArray(section.content) && section.content.length > 0;
    case 'content':
      return Boolean(
        section.heading &&
        (typeof section.content === 'string' ||
          (Array.isArray(section.content) && section.content.length > 0))
      );
    case 'callout':
      return Boolean(section.callout);
    case 'takeaways':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'quote':
      return Boolean(section.quote);
    case 'steps':
      return Array.isArray(section.steps) && section.steps.length > 0;
    case 'checklist':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'image':
      return Boolean(section.src && section.alt);
    case 'faq':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'cta':
      return Boolean(section.heading && section.content);
    default:
      return false;
  }
}

export function getBlogRenderedSectionTypes(sections: BlogPostSection[]) {
  return sections.filter(validateRenderableBlogSection).map(section => section.type);
}

export function BlogPostTemplate({
  pageId,
  title,
  slug,
  category,
  publishDate,
  readTime,
  author,
  sections,
  tags = [],
  systems,
  featuredImage,
}: BlogPostTemplateProps) {
  // Calculate read time from content
  const effectiveReadTime = readTime || estimateReadTimeFromContent(sections);

  // Get author info
  const effectiveAuthor = author || getAuthorForCategory(category);

  const faqItems: Array<{ question: string; answer: string }> = [];
  const articleSections: BlogPostSection[] = [];

  for (const section of sections) {
    if (section.type === 'faq') {
      faqItems.push(...section.items);
      articleSections.push(section);
      continue;
    }

    articleSections.push(section);
  }

  if (sections.length < 5 && env.NODE_ENV === 'development') {
    systemDevelopmentWarning(`BlogPostTemplate: ${slug} has fewer than 5 authored sections.`);
  }

  const faqSchema = buildFaqSchema(faqItems);

  const sidebarCTAData = {
    heading: 'See where this breakdown sits in the wider system',
    content:
      'Use this article as the diagnosis, then trace the service path, handoff, and operating layer that actually fixes it.',
    features: [
      { text: 'System-level context', icon: 'check' as const },
      { text: 'Commercial next steps', icon: 'shield' as const },
      { text: 'Built for operating teams', icon: 'award' as const },
    ],
  };

  const currentPath = `/blog/${slug}`;
  const inlineLinkTracker = createInlineLinkTracker({
    pagePath: currentPath,
    debug: env.NEXT_PUBLIC_DEBUG_INLINE_LINKS === '1',
  });
  let remainingInlineLinks = 5;

  enforceInlineLinkUsage({ pageId, pageType: 'blog' }, 'blog');

  function renderLinkedParagraph(text: string, key: string, className?: string): ReactNode {
    const segments =
      remainingInlineLinks > 0
        ? extractInternalLinks(text, {
            excludePaths: [currentPath],
            sourcePath: currentPath,
            tracker: inlineLinkTracker,
          })
        : [{ type: 'text' as const, value: text }];

    let linkedInParagraph = false;

    return (
      <p key={key} className={className}>
        {segments.map((segment, segmentIndex) => {
          if (segment.type === 'text') {
            return <Fragment key={`${key}-text-${segmentIndex}`}>{segment.value}</Fragment>;
          }

          if (linkedInParagraph || remainingInlineLinks <= 0) {
            return <Fragment key={`${key}-plain-${segmentIndex}`}>{segment.value}</Fragment>;
          }

          linkedInParagraph = true;
          remainingInlineLinks -= 1;

          return (
            <a
              key={`${key}-link-${segmentIndex}`}
              href={segment.href}
              className='link-primary'
              title={segment.title}
            >
              {segment.value}
            </a>
          );
        })}
      </p>
    );
  }

  function safeRenderSection(section: unknown, index: number) {
    const type = getBlogSectionType(section);
    if (!type) {
      systemDevelopmentWarning(
        `BlogPostTemplate: skipping section at index ${index} because type is invalid.`
      );
      return null;
    }

    if (!validateRenderableBlogSection(section as BlogPostSection)) {
      systemDevelopmentWarning(
        `BlogPostTemplate: skipping ${type} section at index ${index} because its shape is invalid.`
      );
      return null;
    }

    try {
      return renderSection(section as BlogPostSection, index);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      systemDevelopmentWarning(
        `BlogPostTemplate: skipping ${type} section at index ${index} because rendering failed: ${message}`
      );
      return null;
    }
  }

  // Function to render a section based on its type
  function renderSection(section: BlogPostSection, index: number) {
    switch (section.type) {
      case 'introduction':
        return section.content && section.content.length > 0 ? (
          <div key={`introduction-${index}`} className='blog-post__intro'>
            {section.content.map((para, i) => renderLinkedParagraph(para, `intro-${i}`))}
          </div>
        ) : null;

      case 'content':
        return (
          <SectionWrapper
            key={`content-${index}`}
            padding='none'
            container='none'
            className='blog-post__section l-stack'
            id={`section-${index}`}
          >
            {section.heading && (
              <SectionIntro
                title={section.heading}
                cssPrefix='blog-content-section'
                alignment='left'
              />
            )}

            {section.content &&
              (typeof section.content === 'string'
                ? renderLinkedParagraph(section.content, `content-${index}`)
                : section.content.map((p, j) => renderLinkedParagraph(p, `content-${index}-${j}`)))}

            {section.list && section.list.length > 0 && (
              <ul className='blog-post__list'>
                {section.list.map((item, k) => (
                  <li key={`list-${index}-${k}`} className='blog-post__list-item'>
                    <span className='blog-post__bullet' aria-hidden='true' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.callout && (
              <Callout type='info' className='blog-post__callout'>
                <p>
                  <strong>Pro Tip:</strong> {normalizeCalloutText(section.callout)}
                </p>
              </Callout>
            )}
          </SectionWrapper>
        );

      case 'callout':
        return (
          <Callout key={`callout-${index}`} type='info' className='blog-post__callout'>
            <p>
              <strong>Pro Tip:</strong> {normalizeCalloutText(section.callout)}
            </p>
          </Callout>
        );

      case 'cta':
        return (
          <PrimaryCTASection
            key={`cta-${index}`}
            title={section.heading}
            description={section.content}
            cssPrefix='blog-cta'
            backgroundColor='blog-surface--muted'
          />
        );

      case 'takeaways':
        return section.items && section.items.length > 0 ? (
          <BlogTakeawaysSection
            key={`takeaways-${index}`}
            heading={section.heading}
            content={section.content}
            items={section.items}
          />
        ) : null;

      case 'quote':
        return section.quote ? (
          <BlogQuoteSection
            key={`quote-${index}`}
            heading={section.heading}
            quote={section.quote}
            attribution={section.attribution}
          />
        ) : null;

      case 'steps':
        return section.steps && section.steps.length > 0 ? (
          <BlogStepsSection
            key={`steps-${index}`}
            heading={section.heading}
            content={section.content}
            steps={section.steps}
          />
        ) : null;

      case 'checklist':
        return section.items && section.items.length > 0 ? (
          <BlogChecklistSection
            key={`checklist-${index}`}
            heading={section.heading}
            content={section.content}
            items={section.items}
            columns={section.columns}
          />
        ) : null;

      case 'image':
        return section.src && section.alt ? (
          <BlogImageSection
            key={`image-${index}`}
            heading={section.heading}
            src={section.src}
            alt={section.alt}
            caption={section.caption}
          />
        ) : null;

      case 'faq':
        return section.items && section.items.length > 0 ? (
          <FAQSection
            key={`faq-${index}`}
            title='Frequently Asked Questions'
            faqs={section.items}
            cssPrefix='blog-post__faq'
            variant='compact'
          />
        ) : null;

      default:
        return null;
    }
  }
  const categoryMeta = getCategoryMetadata(category);
  const categoryColors = getCategoryColors(category);
  const categoryLabel = categoryMeta?.name ?? category;
  const primarySystem = systems?.[0] ?? 'smart-website-systems';

  return (
    <CTARegistryProvider pageId={pageId} pageType='blog' primarySystem={primarySystem}>
      <div className='min-h-screen'>
        <main>
          {/* HERO */}
          <SectionWrapper
            className='blog-hero'
            {...(featuredImage
              ? {
                  style: {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${featuredImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  },
                }
              : {})}
          >
            <div className='l-stack l-stack--loose blog-post__hero'>
              <span className={`badge badge--hero ${categoryColors.bg} ${categoryColors.text}`}>
                {categoryLabel}
              </span>

              <SectionIntro
                title={title}
                headingLevel='h1'
                cssPrefix='blog-hero'
                alignment='center'
                className='l-max-w-4xl l-mx-auto'
              />

              <div className='blog-post__meta'>
                <div className='blog-post__meta-item'>
                  <Calendar aria-hidden='true' />
                  <span>{publishDate}</span>
                </div>
                {effectiveReadTime && (
                  <div className='blog-post__meta-item'>
                    <Clock aria-hidden='true' />
                    <span>{effectiveReadTime}</span>
                  </div>
                )}
                {effectiveAuthor && (
                  <div className='blog-post__meta-item'>
                    <User aria-hidden='true' />
                    <span>{effectiveAuthor.name}</span>
                  </div>
                )}
              </div>

              <div className='l-row l-justify-center l-gap-4'>
                <Button
                  href='/blog'
                  variant='secondary'
                  size='sm'
                  label='Back to Blog'
                  icon={ArrowLeft}
                  iconPosition='left'
                  showDefaultIcon
                />
              </div>
            </div>
          </SectionWrapper>

          {/* CONTENT WITH SIDEBAR */}
          <SectionWrapper background='bg-background'>
            <div className='blog-post__layout'>
              {/* Main Content Column */}
              <div className='blog-post__stack'>
                {/* Render sections dynamically */}
                {articleSections.map((section, index) => safeRenderSection(section, index))}

                {tags.length > 0 && (
                  <div className='blog-post__tags'>
                    {tags.map(tag => (
                      <Badge key={tag} variant='outline' size='sm' context='meta'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <BlogPostShareIsland title={title} />
              </div>

              {/* Sidebar */}
              <aside>
                <Card className='blog-post__sidebar-card'>
                  <h3 className='blog-post__sidebar-title'>{sidebarCTAData.heading}</h3>
                  <p className='blog-post__sidebar-text'>{sidebarCTAData.content}</p>

                  <ActionButtons
                    allowSecondaryAction
                    primaryButtonCssPrefix='btn-block'
                    className='blog-post__sidebar-actions'
                  />

                  <div className='blog-post__sidebar-features'>
                    {sidebarCTAData.features.map(
                      (
                        feature: {
                          text: string;
                          icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
                        },
                        _index: number
                      ) => {
                        const getIcon = (iconType?: string) => {
                          switch (iconType) {
                            case 'phone':
                              return <Phone className='blog-post__sidebar-feature-icon' />;
                            case 'shield':
                              return <Shield className='blog-post__sidebar-feature-icon' />;
                            case 'award':
                              return <Award className='blog-post__sidebar-feature-icon' />;
                            case 'star':
                              return <Star className='blog-post__sidebar-feature-icon' />;
                            case 'check':
                              return <CheckCircle2 className='blog-post__sidebar-feature-icon' />;
                            case 'heart':
                              return <Heart className='blog-post__sidebar-feature-icon' />;
                            default:
                              return <CheckCircle2 className='blog-post__sidebar-feature-icon' />;
                          }
                        };

                        return (
                          <div key={feature.text} className='blog-post__sidebar-feature'>
                            {getIcon(feature.icon)}
                            <span className='blog-post__sidebar-feature-text'>{feature.text}</span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </Card>
              </aside>
            </div>
          </SectionWrapper>
          <SectionWrapper padding='none' background='bg-background'>
            <div className='l-container'>
              <div className='text-sm text-muted-foreground l-max-w-3xl'>
                If the pattern in this article already feels expensive, move next into a resource
                that shows how the same issue gets handled in an operating system before you commit
                to a service decision.
              </div>
            </div>
          </SectionWrapper>
          {faqSchema && (
            <script
              id='faq-jsonld'
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          )}
        </main>
      </div>
    </CTARegistryProvider>
  );
}
