/* Blog-post UI template.
  Renders from provided props only; routing, slug lookup, and registries stay outside this file. */

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Mail,
  Phone,
  Shield,
  Star,
  User,
} from 'lucide-react';

import {
  BlogChecklistSection,
  BlogImageSection,
  BlogQuoteSection,
  BlogStepsSection,
  BlogTakeawaysSection,
} from '@/components/reusable/sections/blog';
import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Callout } from '@/components/reusable/single/Callout';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import { primaryCta } from '@/config/primaryCta';
import {
  type Author,
  BLOG_AUTHORS,
  getCategoryColors,
  getCategoryMetadata,
} from '@/domains/blog/api';
import type { BlogCategory, BlogPostSection } from '@/domains/blog/types';
import { BlogFooterCTA } from '@/domains/blog/ui/BlogFooterCTA';
import { BlogPostShareIsland } from '@/domains/blog/ui/BlogPostShareIsland';
import { buildContactHref } from '@/lib/contact/contactHref';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';

export interface BlogPostTemplateProps {
  // Meta
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  supportingKeywords: string[];
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

export function BlogPostTemplate({
  title,
  slug,
  metaTitle: _metaTitle,
  metaDescription: _metaDescription,
  category,
  publishDate,
  readTime,
  author,
  sections,
  tags = [],
  systems = [],
  featuredImage,
}: BlogPostTemplateProps) {
  // Calculate read time from content
  const effectiveReadTime = readTime || estimateReadTimeFromContent(sections);

  // Get author info
  const effectiveAuthor = author || getAuthorForCategory(category);

  const faqItems: Array<{ question: string; answer: string }> = [];
  let ctaSection: Extract<BlogPostSection, { type: 'cta' }> | undefined;
  const articleSections: BlogPostSection[] = [];

  for (const section of sections) {
    if (section.type === 'faq') {
      faqItems.push(...section.items);
      articleSections.push(section);
      continue;
    }

    if (section.type === 'cta') {
      ctaSection = section;
      continue;
    }

    articleSections.push(section);
  }

  const faqSchema = buildFaqSchema(faqItems);

  const sidebarCTAData = {
    heading: 'See How This System Works',
    content: 'Understand how this fits into a complete website system.',
    secondaryAction: 'Contact Us',
    features: [
      { text: 'System-level integration', icon: 'check' as const },
      { text: 'Transparent process', icon: 'shield' as const },
      { text: 'Built for real businesses', icon: 'award' as const },
    ],
  };

  // Build contact href with context
  const primarySystem = systems[0] ?? 'smart-website-systems';
  const contactHref = buildContactHref({
    system: primarySystem,
    sourceType: 'blog',
    slug,
  });

  // Function to render a section based on its type
  function renderSection(section: BlogPostSection, index: number) {
    switch (section.type) {
      case 'introduction':
        return section.content && section.content.length > 0 ? (
          <div key={`introduction-${index}`} className='blog-post__intro'>
            {section.content.map((para, i) => (
              <p key={`intro-${i}`}>{para}</p>
            ))}
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
              (typeof section.content === 'string' ? (
                <p>{section.content}</p>
              ) : (
                section.content.map((p, j) => (
                  <p key={`content-${index}-${j}`}>{p}</p>
                ))
              ))}

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
        return null;

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

  return (
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
                {articleSections.map((section, index) => renderSection(section, index))}

                {tags.length > 0 && (
                  <div className='blog-post__tags'>
                    {tags.map((tag, i) => (
                      <Badge key={i} variant='outline' size='sm' context='meta'>
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

                  <div className='blog-post__sidebar-actions'>
                    <Button
                      href={contactHref}
                      size='sm'
                      label={primaryCta.label}
                      icon={ArrowRight}
                      showDefaultIcon
                      cssPrefix='btn-block'
                    />
                    <Button
                      href={contactHref}
                      variant='outline'
                      size='sm'
                      label={sidebarCTAData.secondaryAction}
                      icon={Mail}
                      showDefaultIcon
                      cssPrefix='btn-block'
                    />
                  </div>

                  <div className='blog-post__sidebar-features'>
                    {sidebarCTAData.features.map(
                      (
                        feature: {
                          text: string;
                          icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
                        },
                        index: number
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
                          <div key={index} className='blog-post__sidebar-feature'>
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
        {ctaSection ? (
          <SmartCTA
            system={systems?.[0] ?? 'smart-website-systems'}
            source={`blog/${slug}`}
            title={ctaSection.heading}
            description={ctaSection.content}
            cssPrefix='blog-cta'
            backgroundColor='blog-surface--muted'
          />
        ) : (
          <BlogFooterCTA buttonUrl={contactHref} />
        )}

        {faqSchema && (
          <script
            id='faq-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </main>
    </div>
  );
}
