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
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Callout } from '@/components/reusable/single/Callout';
import { CTASection } from '@/components/reusable/single/CTASection';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { Card } from '@/components/ui/card';
import { primaryCta } from '@/config/primaryCta';
import { CTA_INTENT_OVERRIDES } from '@/config/ui-intelligence';
import {
  type Author,
  BLOG_AUTHORS,
  getCategoryColors,
  getCategoryMetadata,
} from '@/domains/blog/api';
import type { BlogCategory, BlogIntent, BlogPostSection } from '@/domains/blog/types';
import { BlogFooterCTA } from '@/domains/blog/ui/BlogFooterCTA';
import { BlogPostShareIsland } from '@/domains/blog/ui/BlogPostShareIsland';
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
  /** Blog intent classification */
  intent?: BlogIntent;
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
  intent,
  systems = [],
  featuredImage,
}: BlogPostTemplateProps) {
  // Calculate read time from content
  const effectiveReadTime = readTime || estimateReadTimeFromContent(sections);

  // Get author info
  const effectiveAuthor = author || getAuthorForCategory(category);

  const faqItems = sections
    .filter(
      (section): section is Extract<BlogPostSection, { type: 'faq' }> => section.type === 'faq'
    )
    .flatMap(section => section.items);
  const faqSchema = buildFaqSchema(faqItems);

  // Resolve intent-aware sidebar CTA
  const intentKey = intent ? `blog:${intent}` : undefined;
  const intentOverride = intentKey ? CTA_INTENT_OVERRIDES[intentKey] : undefined;

  const sidebarCTAData = {
    heading: intentOverride?.title ?? 'See How This System Works',
    content:
      intentOverride?.description ?? 'Understand how this fits into a complete website system.',
    secondaryAction: 'Contact Us',
    features: [
      { text: 'System-level integration', icon: 'check' as const },
      { text: 'Transparent process', icon: 'shield' as const },
      { text: 'Built for real businesses', icon: 'award' as const },
    ],
  };

  // Build contact href with context
  const primarySystem = systems[0] ?? '';
  const contactParams = new URLSearchParams();
  if (primarySystem) contactParams.set('system', primarySystem);
  contactParams.set('source', `blog/${slug}`);
  const contactHref = `/contact?${contactParams.toString()}`;

  // Function to render a section based on its type
  function renderSection(section: BlogPostSection, index: number) {
    switch (section.type) {
      case 'introduction':
        return section.content && section.content.length > 0 ? (
          <div key={`introduction-${index}`} className='blog-post__intro'>
            {section.content.map((para, i) => (
              <p key={`intro-${i}-${para.slice(0, 20)}`}>{para}</p>
            ))}
          </div>
        ) : null;

      case 'content':
        return (
          <section
            key={`content-${index}`}
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
                  <p key={`content-${index}-${j}-${p.slice(0, 20)}`}>{p}</p>
                ))
              ))}

            {section.list && section.list.length > 0 && (
              <ul className='blog-post__list'>
                {section.list.map((item, k) => (
                  <li
                    key={`list-${index}-${k}-${item.slice(0, 20)}`}
                    className='blog-post__list-item'
                  >
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
          </section>
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
  const ctaSection = sections.find(
    (section): section is Extract<BlogPostSection, { type: 'cta' }> => section.type === 'cta'
  );
  const articleSections = sections.filter(section => section.type !== 'cta');

  const categoryMeta = getCategoryMetadata(category);
  const categoryColors = getCategoryColors(category);
  const categoryLabel = categoryMeta?.name ?? category;

  return (
    <div className='min-h-screen'>
      <main>
        {/* HERO */}
        <section
          className='l-section blog-hero'
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
          <div className='l-container l-stack l-stack--loose blog-post__hero'>
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
        </section>

        {/* CONTENT WITH SIDEBAR */}
        <section className='l-section bg-background'>
          <div className='l-container'>
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
          </div>
        </section>

        <SmartRelatedSection slug={slug} type='blog' />

        {ctaSection ? (
          <CTASection
            title={ctaSection.heading}
            description={ctaSection.content}
            primaryAction={{
              label: ctaSection.buttonText,
              href: ctaSection.buttonUrl,
            }}
            cssPrefix='blog-cta'
            backgroundColor='blog-surface--muted'
          />
        ) : (
          <BlogFooterCTA
            title={intentOverride?.title}
            description={intentOverride?.description}
            buttonUrl={contactHref}
          />
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
