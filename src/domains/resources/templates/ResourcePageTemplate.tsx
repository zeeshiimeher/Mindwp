// @ts-nocheck
import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Award, CheckCircle2, Heart, Phone, Shield, Star } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
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
  extractRelatedResourcesContent,
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
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { ActionButtons } from '@/components/system/ActionButtons';
import { HeroActions } from '@/components/system/HeroActions';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
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
import { buildContactHref } from '@/lib/contact/contactHref';
import { systemDevelopmentWarning } from '@/lib/system/runtimeWarnings';

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
  featuredImage?: string | null;
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

function validateRequiredSections(sections: ResourcePageTemplateSection[]) {
  return sections;
}

export function validateRenderableResourceSection(section: ResourcePageTemplateSection) {
  switch (section.type) {
    case 'hero':
      return true;
    case 'takeaways':
    case 'checklist':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'problem':
    case 'business-costs':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'diy':
      return Array.isArray(section.steps) && section.steps.length > 0;
    case 'solution-cards':
      return Array.isArray(section.solutions) && section.solutions.length > 0;
    case 'comparison':
      return Boolean(section.before && section.after);
    case 'templates':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'faq':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'cta':
      return Boolean(section.heading && section.content);
    case 'related-resources':
      return Array.isArray(section.resources) && section.resources.length > 0;
    case 'sidebar-cta':
      return Boolean(section.heading && section.content);
    case 'case':
      return Boolean(section.caseExample?.businessType);
    default:
      return false;
  }
}

export function getResourceRenderedSectionTypes(sections: ResourcePageTemplateSection[]) {
  const renderedTypes: string[] = [];

  if (sections.some(section => section.type === 'hero')) {
    renderedTypes.push('hero');
  }

  return renderedTypes.concat(
    sections
      .filter(section => section.type !== 'hero' && section.type !== 'sidebar-cta')
      .filter(validateRenderableResourceSection)
      .map(section => section.type)
  );
}

export default function ResourcePageTemplate(props: ResourcePageTemplateProps) {
  // Validate required sections
  validateRequiredSections(props.sections);

  // Derive category label from category prop
  const categoryMeta = categories.find(cat => cat.id === props.category);
  const categoryLabel = categoryMeta?.label || props.category;
  const categorySlug = categoryMeta?.slug || String(props.category);

  const lastChanged = props.updatedAt ?? props.publishedAt;
  const isUpdated = Boolean(props.updatedAt);
  const freshnessBadge = isRecentIsoDate(lastChanged, 60) ? (isUpdated ? 'Updated' : 'New') : null;
  const dateLabel = isUpdated ? 'Updated' : 'Published';
  const currentSlug = props.currentSlug;
  const primarySystem = props.systems?.[0];
  const resolvedPrimarySystem = primarySystem ?? 'smart-website-systems';

  function renderParagraph(paragraph: string, index: number, className: string) {
    const key = `${currentSlug}-inline-${index}`;

    return (
      <p key={key} className={className}>
        {paragraph}
      </p>
    );
  }

  const heroData = extractHeroContent(props.sections, props.title, props.description);
  const sidebarCTAData = extractSidebarCTAContent(props.sections);

  if (props.sections.length < 5 && process.env.NODE_ENV === 'development') {
    systemDevelopmentWarning(
      `ResourcePageTemplate: ${currentSlug} has fewer than 5 authored sections.`
    );
  }

  function renderSection(section: ResourcePageTemplateSection, index: number) {
    switch (section.type) {
      case 'takeaways': {
        const takeawaysData = extractTakeawaysContent(section);
        if (!takeawaysData.heading || takeawaysData.items.length === 0) {
          return null;
        }

        return (
          <div key={`takeaways-${index}`} id='resource-takeaways'>
            <ResourceTakeawaysSection
              heading={takeawaysData.heading}
              content={takeawaysData.description}
              items={takeawaysData.items}
            />
          </div>
        );
      }

      case 'problem': {
        const problemData = extractProblemContent(section);
        if (!problemData.heading || problemData.description.length === 0) {
          return null;
        }

        return (
          <div key={`problem-${index}`} id='resource-problem'>
            <ResourceProblemSection
              heading={problemData.heading}
              description={problemData.description}
              causes={problemData.causes}
              causesHeading={problemData.causesHeading}
              renderParagraph={renderParagraph}
            />
          </div>
        );
      }

      case 'business-costs': {
        const businessCostsData = extractBusinessCostsContent(section);
        if (!businessCostsData.heading || businessCostsData.items.length === 0) {
          return null;
        }

        return (
          <div key={`business-costs-${index}`} id='resource-business-costs'>
            <ResourceBusinessCostsSection
              heading={businessCostsData.heading}
              subheading={businessCostsData.subheading}
              items={businessCostsData.items}
            />
          </div>
        );
      }

      case 'diy': {
        const diyData = extractDIYContent(section);
        if (!diyData.heading || diyData.steps.length === 0) {
          return null;
        }

        return (
          <div key={`diy-${index}`} id='resource-diy'>
            <ResourceDIYSection
              heading={diyData.heading}
              subheading={diyData.subheading}
              timeToComplete={diyData.timeToComplete}
              steps={diyData.steps}
              proTip={diyData.proTip}
            />
          </div>
        );
      }

      case 'solution-cards': {
        const automationData = extractAutomationContent(section);
        if (!automationData.heading || automationData.solutions.length === 0) {
          return null;
        }

        return (
          <div key={`solution-cards-${index}`} id='resource-solution-cards'>
            <ResourceSolutionsSection
              heading={automationData.heading}
              subheading={automationData.benefit}
              solutions={automationData.solutions}
              differenceHeading={automationData.differenceHeading}
              differenceContent={automationData.differenceContent}
            />
          </div>
        );
      }

      case 'case': {
        const caseData = extractCaseContent(section);
        if (!caseData.heading || !caseData.caseExample?.businessType) {
          return null;
        }

        return (
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
        );
      }

      case 'comparison': {
        const comparisonData = extractComparisonContent(section);
        if (!comparisonData.heading || !comparisonData.before || !comparisonData.after) {
          return null;
        }

        return (
          <div key={`comparison-${index}`} id='resource-comparison'>
            <ResourceComparisonSection
              heading={comparisonData.heading}
              content={comparisonData.description}
              before={comparisonData.before}
              after={comparisonData.after}
              renderParagraph={renderParagraph}
            />
          </div>
        );
      }

      case 'templates': {
        const templatesData = extractTemplatesContent(section);
        if (!templatesData.heading || templatesData.items.length === 0) {
          return null;
        }

        return (
          <div key={`templates-${index}`} id='resource-templates'>
            <ResourceTemplatesSection
              heading={templatesData.heading}
              content={templatesData.description}
              items={templatesData.items}
            />
          </div>
        );
      }

      case 'checklist': {
        const checklistData = extractChecklistContent(section);
        if (!checklistData.heading || checklistData.items.length === 0) {
          return null;
        }

        return (
          <div key={`checklist-${index}`} id='resource-checklist'>
            <ResourceChecklistSection
              heading={checklistData.heading}
              content={checklistData.description}
              items={checklistData.items}
              columns={checklistData.columns}
            />
          </div>
        );
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
        if (!faqData.heading || faqs.length === 0) {
          return null;
        }

        return (
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
        );
      }

      case 'cta': {
        const ctaData = extractCTAContent(section);
        return (
          <div key={`cta-${index}`} className='resource-page__cta'>
            <div className='l-container'>
              <div className='text-sm text-muted-foreground l-max-w-3xl pb-3'>
                If this resource has already named the leak, the next step is to turn that into a
                clear priority, scope, and first system move instead of guessing which fix matters
                most.
              </div>
            </div>
            <PrimaryCTASection
              heading={{ title: ctaData.heading, description: ctaData.content }}
              actions={[
                {
                  label: 'Get Started',
                  href: buildContactHref({
                    system: 'resource',
                    sourceType: 'resource',
                    slug: 'resource-footer',
                  }),
                  primary: true,
                },
              ]}
            />
          </div>
        );
      }

      case 'related-resources': {
        const relatedData = extractRelatedResourcesContent(section);
        if (!relatedData.heading || relatedData.resources.length === 0) {
          return null;
        }

        return (
          <RelatedCardsSection
            key={`related-resources-${index}`}
            badge={relatedData.badge}
            title={relatedData.heading}
            description={relatedData.subheading}
            items={relatedData.resources.map(resource => ({
              title: resource.title,
              description: resource.description,
              href: resource.url,
            }))}
            cssPrefix='resource-related-resources'
          />
        );
      }

      default:
        return null;
    }
  }

  const mainSections = props.sections.filter(
    section => section.type !== 'hero' && section.type !== 'sidebar-cta'
  );

  return (
    <CTARegistryProvider
      pageId={props.pageId}
      pageType='resource'
      primarySystem={resolvedPrimarySystem}
    >
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
                <HeroActions allowSecondaryAction />
              </div>
            </div>
          </SectionWrapper>

          {/* Main Content with Optional Sidebar */}
          <div className='l-container l-section resource-page__body'>
            <div className='resource-page__layout'>
              {/* Main Content Column */}
              <div className='resource-page__stack'>
                {/* Render sections dynamically in the order they appear, excluding full-width sections */}
                {mainSections.map((section, index) => {
                  if (!validateRenderableResourceSection(section)) {
                    return null;
                  }

                  return renderSection(section, index);
                })}
              </div>

              {/* Sidebar (always on for canonical template to match the standard layout) */}
              <aside className='resource-page__sidebar'>
                <Card className='resource-page__sidebar-card'>
                  <h3 className='resource-page__sidebar-title'>{sidebarCTAData.heading}</h3>
                  <p className='resource-page__sidebar-text'>{sidebarCTAData.content}</p>

                  <div className='resource-page__sidebar-actions'>
                    <ActionButtons
                      allowSecondaryAction
                      primaryButtonCssPrefix='btn-block'
                      className='resource-page__sidebar-actions'
                    />
                  </div>

                  <div className='resource-page__sidebar-features'>
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
                          <div key={feature.text} className='resource-page__sidebar-feature'>
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
          <div className='l-container'>
            <div className='text-sm text-muted-foreground l-max-w-3xl pt-4'>
              If you are not ready to act yet, compare the adjacent bottlenecks here so you can
              separate the primary leak from the secondary ones before you commit to a build.
            </div>
          </div>
        </main>
      </div>
    </CTARegistryProvider>
  );
}
