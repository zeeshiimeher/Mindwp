import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Award, CheckCircle2, Heart, Mail, Phone, Shield, Star } from 'lucide-react';

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
import { Button } from '@/components/reusable/single/Button';
import { CTASection } from '@/components/reusable/single/CTASection';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { JourneyNavigator } from '@/components/system/JourneyNavigator';
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
import { primaryCta } from '@/config/primaryCta';
import { categories } from '@/domains/resources/api';
import type { ResourceCategory } from '@/domains/resources/types';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';

import type { ResourcePageTemplateSection } from './types';
export type { ResourcePageTemplateSection } from './types';

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

function InternalLink({ href, children, className, ...props }: InternalLinkProps) {
  return (
    <a href={href} className={['link-primary', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  );
}

/* Canonical resource-page template.
  Preserve AutoReplyFunnel structure and sections-based props. */

export type ResourcePageTemplateProps = {
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
};

// Validation function for required sections
function validateRequiredSections(sections: ResourcePageTemplateSection[]) {
  const requiredTypes = ['hero', 'problem', 'diy', 'cta', 'related-resources'];
  const missingSections = requiredTypes.filter(type => !sections.find(s => s.type === type));

  if (missingSections.length > 0) {
    if (process.env.NODE_ENV === 'development') {
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
  const currentSlug = props.url.split('/').filter(Boolean).at(-1) ?? '';

  // Extract content from sections for rendering using organized utilities
  const heroData = extractHeroContent(props.sections, props.title, props.description);
  const sidebarCTAData = extractSidebarCTAContent(props.sections);

  // Show error message for missing sections in development
  if (missingSections.length > 0 && process.env.NODE_ENV === 'development') {
    return (
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
        // Convert items format to rich component format
        const faqs = faqData.items
          .filter(
            (item): item is { question: string; answer: string } =>
              typeof item === 'object' &&
              item !== null &&
              typeof (item as { question?: unknown }).question === 'string' &&
              typeof (item as { answer?: unknown }).answer === 'string'
          )
          .map(item => ({ question: item.question, answer: item.answer }));
        return faqData.heading && faqs.length > 0 ? (
          <div key={`faq-${index}`} id='resource-faq'>
            <FAQSection
              title={faqData.heading}
              description={faqData.subheading}
              faqs={faqs}
              cssPrefix='resource-faq'
              backgroundColor='bg-section-base'
              displayMode='accordion'
            />
          </div>
        ) : null;
      }

      case 'cta': {
        const ctaData = extractCTAContent(section);
        return ctaData.heading ? (
          <div key={`cta-${index}`} id='resource-cta'>
            <CTASection
              title={ctaData.heading}
              description={ctaData.content}
              primaryAction={{
                label: ctaData.finalButtonText,
                href: ctaData.finalButtonUrl,
              }}
              metaItems={ctaData.features?.map(f => ({ text: f.text }))}
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

  // Filter out hero section for dynamic rendering
  const contentSections = props.sections.filter(section => section.type !== 'hero');

  return (
    <div className='resource-page'>
      <main className='resource-page__main'>
        {/* 1. HERO SECTION */}
        <section className='resource-page__hero l-section bg-gradient-surface-muted'>
          <div className='l-container'>
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
                <Button
                  {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
                  size='sm'
                  label={primaryCta.label}
                  showDefaultIcon
                  {...(primaryCta.type === 'external'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Optional Sidebar */}
        <div className='l-container l-section resource-page__body'>
          <div className='resource-page__layout'>
            {/* Main Content Column */}
            <div className='resource-page__stack'>
              {/* Render sections dynamically in the order they appear, excluding full-width sections */}
              {contentSections
                .filter(section => section.type !== 'cta' && section.type !== 'related-resources')
                .map((section, index) => renderSection(section, index))}
            </div>

            {/* Sidebar (always on for canonical template to match the standard layout) */}
            <aside className='resource-page__sidebar'>
              <Card className='resource-page__sidebar-card'>
                <h3 className='resource-page__sidebar-title'>{sidebarCTAData.heading}</h3>
                <p className='resource-page__sidebar-text'>{sidebarCTAData.content}</p>

                <div className='resource-page__sidebar-actions'>
                  <Button
                    {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
                    size='sm'
                    label={primaryCta.label}
                    showDefaultIcon
                    cssPrefix='btn-block'
                    {...(primaryCta.type === 'external'
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
                  />
                  <Button
                    href='/contact'
                    variant='outline'
                    size='sm'
                    label={sidebarCTAData.secondaryAction}
                    icon={Mail}
                    showDefaultIcon
                    cssPrefix='btn-block'
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
                            return <CheckCircle2 className='resource-page__sidebar-feature-icon' />;
                          case 'heart':
                            return <Heart className='resource-page__sidebar-feature-icon' />;
                          default:
                            return <CheckCircle2 className='resource-page__sidebar-feature-icon' />;
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

        <SmartRelatedSection slug={currentSlug} type='resource' />
        <JourneyNavigator slug={currentSlug} type='resource' />

        {/* CTA section - full width outside container */}
        <div className='resource-page__cta'>
          {contentSections
            .filter(section => section.type === 'cta')
            .map((section, index) => {
              const ctaData = extractCTAContent(section);
              return ctaData.heading ? (
                <CTASection
                  key={`cta-${index}`}
                  title={ctaData.heading}
                  description={ctaData.content}
                  primaryAction={{
                    label: ctaData.finalButtonText,
                    href: ctaData.finalButtonUrl,
                  }}
                  metaItems={ctaData.features?.map(f => ({ text: f.text }))}
                />
              ) : null;
            })}
        </div>
      </main>
    </div>
  );
}
