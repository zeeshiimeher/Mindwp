import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Award, CheckCircle2, Heart, Phone, Shield, Star } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  extractAutomationContent,
  extractBusinessCostsContent,
  extractCaseContent,
  extractChecklistContent,
  extractComparisonContent,
  extractCTAContent,
  extractDIYContent,
  extractFAQContent,
  extractHeroContent,
  extractProblemContent,
  extractSidebarCTAContent,
  extractTakeawaysContent,
  extractTemplatesContent,
} from '@/components/reusable/sections/resources/contentExtraction';
import { ResourceBusinessCostsSection } from '@/components/reusable/sections/resources/ResourceBusinessCostsSection';
import { ResourceCaseSection } from '@/components/reusable/sections/resources/ResourceCaseSection';
import { ResourceChecklistSection } from '@/components/reusable/sections/resources/ResourceChecklistSection';
import { ResourceComparisonSection } from '@/components/reusable/sections/resources/ResourceComparisonSection';
import { ResourceDIYSection } from '@/components/reusable/sections/resources/ResourceDIYSection';
import { ResourceProblemSection } from '@/components/reusable/sections/resources/ResourceProblemSection';
import { ResourceSolutionsSection } from '@/components/reusable/sections/resources/ResourceSolutionsSection';
import { ResourceTakeawaysSection } from '@/components/reusable/sections/resources/ResourceTakeawaysSection';
import { ResourceTemplatesSection } from '@/components/reusable/sections/resources/ResourceTemplatesSection';
import { Badge } from '@/components/reusable/single/Badge';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartCTA } from '@/components/system/SmartCTA';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import { categories } from '@/domains/resources/api';
import type { ResourceCategory } from '@/domains/resources/types';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';
import { createInlineLinkTracker, extractInternalLinks } from '@/domains/seo/inlineLinking';
import { env } from '@/env';
import { enforceInlineLinkUsage } from '@/lib/page/inlineLinkEnforcement';

import type { ResourcePageTemplateSection } from './types';
export type { ResourcePageTemplateSection } from './types';

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

function InternalLink({ href, children, className, ...props }: InternalLinkProps) {
  return (
    <a href={href} className={className ? `link-primary ${className}` : 'link-primary'} {...props}>
      {children}
    </a>
  );
}

/* Canonical resource-page template.
  Preserve AutoReplyFunnel structure and sections-based props. */

export type ResourcePageTemplateProps = {
  pageId: string;
  url: string;
  title: string;
  description: string;
  category: ResourceCategory;
  publishedAt: string;
  updatedAt?: string;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    noindex?: boolean;
    nofollow?: boolean;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  schema?: {
    type: 'Article' | 'Guide' | 'HowTo';
    headline?: string;
    description?: string;
  };
  sections: ResourcePageTemplateSection[];
  /** System keys for CTA routing context */
  systems?: string[];
  currentSlug: string;
};

// Validation function for required sections
function validateRequiredSections(sections: ResourcePageTemplateSection[]) {
  const requiredTypes = ['hero', 'problem', 'diy', 'cta', 'related-resources'];
  const missingSections: string[] = [];

  for (const type of requiredTypes) {
    let found = false;
    for (const section of sections) {
      if (section.type === type) {
        found = true;
        break;
      }
    }

    if (!found) {
      missingSections.push(type);
    }
  }

  if (missingSections.length > 0) {
    if (env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        `ResourcePageTemplate: Missing required sections: ${missingSections.join(', ')}`
      );
    }
    // In production, we'll render with what we have but warn in dev
    return missingSections;
  }
  return [];
}

export default function ResourcePageTemplate(props: ResourcePageTemplateProps) {
  // Validate required sections
  const missingSections = validateRequiredSections(props.sections);

  // Derive category label from category prop
  const categoryMeta = categories.find(cat => cat.id === props.category);
  const categoryLabel = categoryMeta?.label || props.category;
  const categorySlug = categoryMeta?.slug || String(props.category);

  const lastChanged = props.updatedAt ?? props.publishedAt;
  const isUpdated = Boolean(props.updatedAt);
  const freshnessBadge = isRecentIsoDate(lastChanged, 60) ? (isUpdated ? 'Updated' : 'New') : null;
  const dateLabel = isUpdated ? 'Updated' : 'Published';
  const currentSlug = props.currentSlug;

  const primarySystem = props.systems?.[0] ?? 'smart-website-systems';
  const currentPath = props.url;
  const inlineLinkTracker = createInlineLinkTracker({
    pagePath: currentPath,
    debug: env.NEXT_PUBLIC_DEBUG_INLINE_LINKS === '1',
  });
  let remainingInlineLinks = 5;

  enforceInlineLinkUsage({ pageId: props.pageId, pageType: 'resource' }, 'resource');

  function renderLinkedParagraph(paragraph: string, index: number, className: string) {
    const key = `${currentSlug}-inline-${index}`;
    const segments =
      remainingInlineLinks > 0
        ? extractInternalLinks(paragraph, {
            excludePaths: [currentPath],
            sourcePath: currentPath,
            tracker: inlineLinkTracker,
          })
        : [{ type: 'text' as const, value: paragraph }];

    let linkedInParagraph = false;

    return (
      <p key={key} className={className}>
        {segments.map((segment, segmentIndex) => {
          if (segment.type === 'text') {
            return <span key={`${key}-text-${segmentIndex}`}>{segment.value}</span>;
          }

          if (linkedInParagraph || remainingInlineLinks <= 0) {
            return <span key={`${key}-plain-${segmentIndex}`}>{segment.value}</span>;
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

  // Extract content from sections for rendering using organized utilities
  const heroData = extractHeroContent(props.sections, props.title, props.description);
  const sidebarCTAData = extractSidebarCTAContent(props.sections);

  // Show error message for missing sections in development
  if (missingSections.length > 0 && env.NODE_ENV === 'development') {
    return (
      <CTARegistryProvider pageId={props.pageId} pageType='resource'>
        <div className='resource-page'>
          <main className='resource-page__main l-section'>
            <div className='l-container'>
              <div className='resource-page__dev-error'>
                <h2 className='resource-page__dev-error-title'>
                  Resource Template Configuration Error
                </h2>
                <p className='resource-page__dev-error-text'>
                  This resource page is missing required sections. Please add the following sections
                  to make it complete:
                </p>
                <ul className='resource-page__dev-error-list'>
                  {missingSections.map(section => (
                    <li key={section} className='capitalize'>
                      {section.replace('-', ' ')} section
                    </li>
                  ))}
                </ul>
                <div className='resource-page__dev-error-note'>
                  <p className='resource-page__dev-error-note-text'>
                    <strong>Note:</strong> This error is only shown in development mode. In
                    production, the page will render with available sections.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </CTARegistryProvider>
    );
  }

  // Function to render a section based on its type
  function renderSection(section: ResourcePageTemplateSection, index: number) {
    switch (section.type) {
      case 'takeaways': {
        const takeawaysData = extractTakeawaysContent(section);
        return takeawaysData.heading && takeawaysData.items.length > 0 ? (
          <div key={`takeaways-${index}`} id='resource-takeaways'>
            <ResourceTakeawaysSection
              heading={takeawaysData.heading}
              content={takeawaysData.description}
              items={takeawaysData.items}
            />
          </div>
        ) : null;
      }

      case 'problem': {
        const problemData = extractProblemContent(section);
        return problemData.heading && problemData.description.length > 0 ? (
          <div key={`problem-${index}`} id='resource-problem'>
            <ResourceProblemSection
              heading={problemData.heading}
              description={problemData.description}
              causes={problemData.causes}
              causesHeading={problemData.causesHeading}
              renderParagraph={renderLinkedParagraph}
            />
          </div>
        ) : null;
      }

      case 'business-costs': {
        const businessCostsData = extractBusinessCostsContent(section);
        return businessCostsData.heading && businessCostsData.items.length > 0 ? (
          <div key={`business-costs-${index}`} id='resource-business-costs'>
            <ResourceBusinessCostsSection
              heading={businessCostsData.heading}
              subheading={businessCostsData.subheading}
              items={businessCostsData.items}
            />
          </div>
        ) : null;
      }

      case 'diy': {
        const diyData = extractDIYContent(section);
        return diyData.heading && diyData.steps.length > 0 ? (
          <div key={`diy-${index}`} id='resource-diy'>
            <ResourceDIYSection
              heading={diyData.heading}
              subheading={diyData.subheading}
              timeToComplete={diyData.timeToComplete}
              steps={diyData.steps}
              proTip={diyData.proTip}
            />
          </div>
        ) : null;
      }

      case 'solution-cards': {
        const automationData = extractAutomationContent(section);
        return automationData.heading && automationData.solutions.length > 0 ? (
          <div key={`solution-cards-${index}`} id='resource-solution-cards'>
            <ResourceSolutionsSection
              heading={automationData.heading}
              subheading={automationData.benefit}
              solutions={automationData.solutions}
              differenceHeading={automationData.differenceHeading}
              differenceContent={automationData.differenceContent}
            />
          </div>
        ) : null;
      }

      case 'case': {
        const caseData = extractCaseContent(section);
        return caseData.heading && caseData.caseExample?.businessType ? (
          <div key={`case-${index}`} id='resource-case'>
            <ResourceCaseSection
              heading={caseData.heading}
              subheading={caseData.subheading}
              caseExample={caseData.caseExample}
              challengeHeading={caseData.challengeHeading}
              solutionHeading={caseData.solutionHeading}
              resultHeading={caseData.resultHeading}
            />
          </div>
        ) : null;
      }

      case 'comparison': {
        const comparisonData = extractComparisonContent(section);
        return comparisonData.heading && comparisonData.before && comparisonData.after ? (
          <div key={`comparison-${index}`} id='resource-comparison'>
            <ResourceComparisonSection
              heading={comparisonData.heading}
              content={comparisonData.description}
              before={comparisonData.before}
              after={comparisonData.after}
              renderParagraph={renderLinkedParagraph}
            />
          </div>
        ) : null;
      }

      case 'templates': {
        const templatesData = extractTemplatesContent(section);
        return templatesData.heading && templatesData.items.length > 0 ? (
          <div key={`templates-${index}`} id='resource-templates'>
            <ResourceTemplatesSection
              heading={templatesData.heading}
              content={templatesData.description}
              items={templatesData.items}
            />
          </div>
        ) : null;
      }

      case 'checklist': {
        const checklistData = extractChecklistContent(section);
        return checklistData.heading && checklistData.items.length > 0 ? (
          <div key={`checklist-${index}`} id='resource-checklist'>
            <ResourceChecklistSection
              heading={checklistData.heading}
              content={checklistData.description}
              items={checklistData.items}
              columns={checklistData.columns}
            />
          </div>
        ) : null;
      }

      case 'faq': {
        const faqData = extractFAQContent(section);
        const faqs: Array<{ question: string; answer: string }> = [];
        for (const item of faqData.items) {
          if (
            typeof item === 'object' &&
            item !== null &&
            typeof (item as { question?: unknown }).question === 'string' &&
            typeof (item as { answer?: unknown }).answer === 'string'
          ) {
            faqs.push({
              question: (item as { question: string }).question,
              answer: (item as { answer: string }).answer,
            });
          }
        }
        return faqData.heading && faqs.length > 0 ? (
          <div key={`faq-${index}`} id='resource-faq'>
            <FAQSection
              title={faqData.heading}
              description={faqData.subheading}
              faqs={faqs}
              cssPrefix='resource-faq'
              backgroundColor='bg-base'
              displayMode='accordion'
            />
          </div>
        ) : null;
      }

      case 'related-resources':
        return null;

      default:
        return null;
    }
  }

  const contentSections: ResourcePageTemplateSection[] = [];
  const mainSections: ResourcePageTemplateSection[] = [];
  const ctaSections: Extract<ResourcePageTemplateSection, { type: 'cta' }>[] = [];

  for (const section of props.sections) {
    if (section.type === 'hero') {
      continue;
    }

    contentSections.push(section);

    if (section.type === 'cta') {
      ctaSections.push(section);
      continue;
    }

    if (section.type !== 'related-resources') {
      mainSections.push(section);
    }
  }

  return (
    <CTARegistryProvider pageId={props.pageId} pageType='resource'>
      <div className='resource-page'>
        <main className='resource-page__main'>
          {/* 1. HERO SECTION */}
          <SectionWrapper className='resource-page__hero' background='bg-gradient-surface-muted'>
            <Breadcrumb className='resource-page__breadcrumb'>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <InternalLink href='/resources'>Resources</InternalLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <InternalLink href={`/resources/category/${categorySlug}`}>
                      {categoryLabel}
                    </InternalLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{props.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className='resource-page__hero-content'>
              <div className='resource-page__badges'>
                <Badge variant='secondary' context='hero'>
                  {categoryLabel}
                </Badge>
                {freshnessBadge && (
                  <Badge variant='secondary' size='sm' context='meta'>
                    {freshnessBadge}
                  </Badge>
                )}
              </div>
              <p className='resource-page__date'>
                {dateLabel}: {formatIsoDate(lastChanged)}
              </p>
              <h1 className='resource-page__title'>{heroData.heading}</h1>

              <div className='resource-page__intro'>
                <p className='resource-page__subtitle'>{heroData.subtitle}</p>
                {heroData.problem && heroData.promise && (
                  <div className='resource-page__callout'>
                    <p className='resource-page__callout-line'>
                      <span className='resource-page__callout-line--error'>
                        ❌ {heroData.problem}
                      </span>
                    </p>
                    <p className='resource-page__callout-line'>
                      <span className='resource-page__callout-line--success'>
                        ✅ {heroData.promise}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              <div className='resource-page__hero-cta'>
                <SmartCTA
                  system={primarySystem}
                  pageType='resource'
                  slug={currentSlug}
                  intent='entry'
                  position='hero'
                  mode='actions-only'
                />
              </div>
            </div>
          </SectionWrapper>

          {/* Main Content with Optional Sidebar */}
          <div className='l-container l-section resource-page__body'>
            <div className='resource-page__layout'>
              {/* Main Content Column */}
              <div className='resource-page__stack'>
                {/* Render sections dynamically in the order they appear, excluding full-width sections */}
                {mainSections.map((section, index) => renderSection(section, index))}
              </div>

              {/* Sidebar (always on for canonical template to match the standard layout) */}
              <aside className='resource-page__sidebar'>
                <Card className='resource-page__sidebar-card'>
                  <h3 className='resource-page__sidebar-title'>{sidebarCTAData.heading}</h3>
                  <p className='resource-page__sidebar-text'>{sidebarCTAData.content}</p>

                  <div className='resource-page__sidebar-actions'>
                    <SmartCTA
                      system={primarySystem}
                      pageType='resource'
                      slug={currentSlug}
                      intent='diagnostic'
                      position='sidebar'
                      mode='actions-only'
                      primaryButtonCssPrefix='btn-block'
                      actionClassName='resource-page__sidebar-actions'
                    />
                  </div>

                  <div className='resource-page__sidebar-features'>
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
                              return <Phone className='resource-page__sidebar-feature-icon' />;
                            case 'shield':
                              return <Shield className='resource-page__sidebar-feature-icon' />;
                            case 'award':
                              return <Award className='resource-page__sidebar-feature-icon' />;
                            case 'star':
                              return <Star className='resource-page__sidebar-feature-icon' />;
                            case 'check':
                              return (
                                <CheckCircle2 className='resource-page__sidebar-feature-icon' />
                              );
                            case 'heart':
                              return <Heart className='resource-page__sidebar-feature-icon' />;
                            default:
                              return (
                                <CheckCircle2 className='resource-page__sidebar-feature-icon' />
                              );
                          }
                        };

                        return (
                          <div key={index} className='resource-page__sidebar-feature'>
                            {getIcon(feature.icon)}
                            <span className='resource-page__sidebar-feature-text'>
                              {feature.text}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </Card>
              </aside>
            </div>
          </div>
          {/* CTA section - full width outside container */}
          <div className='resource-page__cta'>
            <div className='l-container'>
              <div className='text-sm text-muted-foreground l-max-w-3xl pb-3'>
                If this resource has already named the leak, the next step is to turn that into a
                clear priority, scope, and first system move instead of guessing which fix matters
                most.
              </div>
            </div>
            {ctaSections.map((section, index) => {
              const ctaData = extractCTAContent(section);
              return ctaData.heading ? (
                <SmartCTA
                  key={`cta-${index}`}
                  system={primarySystem}
                  pageType='resource'
                  slug={currentSlug}
                  intent='conversion'
                  position='footer'
                  title={ctaData.heading}
                  description={ctaData.content}
                  metaItems={ctaData.features?.map(f => ({ text: f.text }))}
                />
              ) : null;
            })}
          </div>
          <div className='l-container'>
            <div className='text-sm text-muted-foreground l-max-w-3xl pt-4'>
              If you are not ready to act yet, compare the adjacent bottlenecks here so you can
              separate the primary leak from the secondary ones before you commit to a build.
            </div>
          </div>
          <SmartRelatedSection pageId={`resource:${currentSlug}`} pageType='resource' slug={currentSlug} />
        </main>
      </div>
    </CTARegistryProvider>
  );
}
