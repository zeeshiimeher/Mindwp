import type { ResourcePageTemplateSection } from '@/domains/resources/templates/types';
import {
  resolveGlobalPrimaryCtaAction,
  resolveGlobalPrimaryCtaLinks,
} from '@/lib/cta/primaryAction';

type ProblemSection = Extract<ResourcePageTemplateSection, { type: 'problem' }>;
type TakeawaysSection = Extract<ResourcePageTemplateSection, { type: 'takeaways' }>;
type BusinessCostsSection = Extract<ResourcePageTemplateSection, { type: 'business-costs' }>;
type DiySection = Extract<ResourcePageTemplateSection, { type: 'diy' }>;
type SolutionsSection = Extract<ResourcePageTemplateSection, { type: 'solution-cards' }>;
type CaseSection = Extract<ResourcePageTemplateSection, { type: 'case' }>;
type ComparisonSection = Extract<ResourcePageTemplateSection, { type: 'comparison' }>;
type TemplatesSection = Extract<ResourcePageTemplateSection, { type: 'templates' }>;
type ChecklistCardsSection = Extract<ResourcePageTemplateSection, { type: 'checklist' }>;
type FaqSection = Extract<ResourcePageTemplateSection, { type: 'faq' }>;
type RelatedResourcesSection = Extract<ResourcePageTemplateSection, { type: 'related-resources' }>;

// Types

export interface HeroContent {
  heading: string;
  subtitle: string;
  problem: string;
  promise: string;
}

export interface ProblemContent {
  heading?: string;
  description: string[];
  causes: string[];
  causesHeading: string;
}

export interface TakeawaysContent {
  heading?: string;
  description: string[];
  items: string[];
}

export interface BusinessCostsContent {
  heading?: string;
  subheading: string;
  items: string[];
}

export interface DIYContent {
  heading?: string;
  subheading: string;
  proTip: string;
  timeToComplete: string;
  steps: NonNullable<DiySection['steps']>;
  proTipHeading: string;
}

export interface AutomationContent {
  heading?: string;
  benefit: string;
  differenceHeading: string;
  differenceContent: string;
  solutions: NonNullable<SolutionsSection['solutions']>;
}

export interface CaseContent {
  heading?: string;
  subheading: string;
  caseExample?: CaseSection['caseExample'];
  challengeHeading: string;
  solutionHeading: string;
  resultHeading: string;
}

export interface ComparisonContent {
  heading?: string;
  description: string[];
  before?: NonNullable<ComparisonSection['before']>;
  after?: NonNullable<ComparisonSection['after']>;
}

export interface TemplatesContent {
  heading?: string;
  description: string[];
  items: Array<{ title: string; description?: string; template: string }>;
}

export interface ChecklistContent {
  heading?: string;
  description: string[];
  items: string[];
  columns: 1 | 2;
}

export interface FAQContent {
  heading?: string;
  subheading: string;
  items: NonNullable<FaqSection['items']>;
}

export interface CTAContent {
  heading: string;
  content: string;
  primaryAction: string;
  secondaryAction: string;
  features: Array<{
    text: string;
    icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
  }>;
  finalButtonText: string;
  finalButtonUrl: string;
  secondaryActionUrl: string;
}

export interface RelatedResourcesContent {
  badge?: string;
  heading: string;
  subheading: string;
  buttonText: string;
  resources: NonNullable<RelatedResourcesSection['resources']>;
}

export interface SidebarCTAContent {
  heading: string;
  content: string;
  primaryAction: string;
  secondaryAction: string;
  features: Array<{
    text: string;
    icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
  }>;
}

// Constants

const CONTENT_INDEX = {
  PRIMARY: 0,
  SECONDARY: 1,
  TERTIARY: 2,
} as const;

const DEFAULT_GLOBAL_PRIMARY_CTA = resolveGlobalPrimaryCtaAction();
const DEFAULT_GLOBAL_PRIMARY_CTA_LINKS = resolveGlobalPrimaryCtaLinks();

const DEFAULTS = {
  CTA_HEADING: 'Ready to Get Started?',
  CTA_CONTENT: 'Transform your business with our proven solutions. Get expert help today.',
  CTA_PRIMARY_BUTTON: DEFAULT_GLOBAL_PRIMARY_CTA.label,
  CTA_SECONDARY_BUTTON: 'Discuss Your Project',
  CTA_FEATURES: [
    { text: 'Call us anytime', icon: 'phone' as const },
    { text: '100% Money-Back Guarantee', icon: 'shield' as const },
    { text: 'Trusted by 500+ businesses', icon: 'award' as const },
  ] as Array<{
    text: string;
    icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
  }>,
  SIDEBAR_CTA_HEADING: 'Ready to Transform Your Business?',
  SIDEBAR_CTA_CONTENT: 'Get expert help implementing these solutions today.',
  PROBLEM_CAUSES_HEADING: 'Common Causes:',
  TAKEAWAYS_HEADING: 'Key Takeaways',
  CHECKLIST_HEADING: 'Implementation Checklist',
  TEMPLATES_HEADING: 'Copy & Paste Templates',
  COMPARISON_HEADING: 'Before vs After',
  DIY_PRO_TIP_HEADING: '💡 Pro Tip:',
  CASE_CHALLENGE_HEADING: 'The Challenge',
  CASE_SOLUTION_HEADING: 'The Solution',
  CASE_RESULT_HEADING: 'The Result',
  CTA_BUTTON_URL: DEFAULT_GLOBAL_PRIMARY_CTA_LINKS.primaryAction.href,
  CTA_SECONDARY_BUTTON_URL: DEFAULT_GLOBAL_PRIMARY_CTA_LINKS.contactHref,
} as const;

// Helpers

/**
 * Finds a section by type from sections array or single section
 */
function findSection<T extends ResourcePageTemplateSection>(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection,
  sectionType: T['type']
): T | null {
  return Array.isArray(sections)
    ? (sections.find(s => s.type === sectionType) as T) || null
    : sections.type === sectionType
      ? (sections as T)
      : null;
}

/**
 * Safely extracts content from a section, handling both string and array formats
 */
function extractContent(section: ResourcePageTemplateSection | null): string[] {
  if (!section?.content) return [];

  return Array.isArray(section.content) ? section.content : [section.content];
}

/**
 * Safely gets content at a specific index with fallback
 */
function getContentAtIndex(content: string[], index: number, fallback: string = ''): string {
  return content[index] || fallback;
}

// Extraction utilities

/**
 * Extracts hero section content with fallbacks
 */
export function extractHeroContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection,
  defaultTitle: string,
  defaultDescription: string
): HeroContent {
  const heroSection = findSection(sections, 'hero');
  const content = extractContent(heroSection);

  return {
    heading: heroSection?.heading || defaultTitle,
    subtitle: getContentAtIndex(content, CONTENT_INDEX.PRIMARY, defaultDescription),
    problem: getContentAtIndex(content, CONTENT_INDEX.SECONDARY),
    promise: getContentAtIndex(content, CONTENT_INDEX.TERTIARY),
  };
}

/**
 * Extracts problem section content with fallbacks
 */
export function extractProblemContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): ProblemContent {
  const problemSection = findSection(sections, 'problem') as ProblemSection | null;
  const content = extractContent(problemSection);

  return {
    ...(problemSection?.heading && { heading: problemSection.heading }),
    description: content.length > 0 ? content : [],
    causes: problemSection?.items ?? [],
    causesHeading: problemSection?.causesHeading || DEFAULTS.PROBLEM_CAUSES_HEADING,
  };
}

/**
 * Extracts takeaways section content
 */
export function extractTakeawaysContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): TakeawaysContent {
  const takeawaysSection = findSection(sections, 'takeaways') as TakeawaysSection | null;
  const content = extractContent(takeawaysSection);

  return {
    heading: takeawaysSection?.heading || DEFAULTS.TAKEAWAYS_HEADING,
    description: content,
    items: takeawaysSection?.items ?? [],
  };
}

/**
 * Extracts business costs section content
 */
export function extractBusinessCostsContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): BusinessCostsContent {
  const businessCostsSection = findSection(
    sections,
    'business-costs'
  ) as BusinessCostsSection | null;
  const content = extractContent(businessCostsSection);

  return {
    ...(businessCostsSection?.heading && { heading: businessCostsSection.heading }),
    subheading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    items: businessCostsSection?.items ?? [],
  };
}

/**
 * Extracts DIY section content with fallbacks
 */
export function extractDIYContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): DIYContent {
  const diySection = findSection(sections, 'diy') as DiySection | null;
  const content = extractContent(diySection);

  return {
    ...(diySection?.heading && { heading: diySection.heading }),
    subheading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    proTip: getContentAtIndex(content, CONTENT_INDEX.SECONDARY),
    timeToComplete: diySection?.timeToComplete || '',
    steps: diySection?.steps ?? [],
    proTipHeading: diySection?.proTipHeading || DEFAULTS.DIY_PRO_TIP_HEADING,
  };
}

/**
 * Extracts solutions section content
 */
export function extractAutomationContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): AutomationContent {
  const automationSection = findSection(sections, 'solution-cards') as SolutionsSection | null;
  const content = extractContent(automationSection);

  return {
    ...(automationSection?.heading && { heading: automationSection.heading }),
    benefit: automationSection?.benefit || '',
    differenceHeading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    differenceContent: getContentAtIndex(content, CONTENT_INDEX.SECONDARY),
    solutions: automationSection?.solutions ?? [],
  };
}

/**
 * Extracts case study section content with fallbacks
 */
export function extractCaseContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): CaseContent {
  const caseSection = findSection(sections, 'case') as CaseSection | null;
  const content = extractContent(caseSection);

  return {
    ...(caseSection?.heading && { heading: caseSection.heading }),
    subheading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    ...(caseSection?.caseExample && { caseExample: caseSection.caseExample }),
    challengeHeading: caseSection?.challengeHeading || DEFAULTS.CASE_CHALLENGE_HEADING,
    solutionHeading: caseSection?.solutionHeading || DEFAULTS.CASE_SOLUTION_HEADING,
    resultHeading: caseSection?.resultHeading || DEFAULTS.CASE_RESULT_HEADING,
  };
}

/**
 * Extracts comparison section content
 */
export function extractComparisonContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): ComparisonContent {
  const comparisonSection = findSection(sections, 'comparison') as ComparisonSection | null;
  const content = extractContent(comparisonSection);

  const before = comparisonSection?.before;
  const after = comparisonSection?.after;

  const isValidColumn = (value: unknown): value is { title: string; items: string[] } => {
    if (!value || typeof value !== 'object') return false;
    const v = value as { title?: unknown; items?: unknown };
    return typeof v.title === 'string' && Array.isArray(v.items);
  };

  return {
    heading: comparisonSection?.heading || DEFAULTS.COMPARISON_HEADING,
    description: content,
    ...(isValidColumn(before) && { before }),
    ...(isValidColumn(after) && { after }),
  };
}

/**
 * Extracts templates section content
 */
export function extractTemplatesContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): TemplatesContent {
  const templatesSection = findSection(sections, 'templates') as TemplatesSection | null;
  const content = extractContent(templatesSection);

  const safeItems: Array<{ title: string; description?: string; template: string }> = [];
  for (const item of templatesSection?.items ?? []) {
    if (
      Boolean(item) &&
      typeof item === 'object' &&
      typeof (item as { title?: unknown }).title === 'string' &&
      typeof (item as { template?: unknown }).template === 'string'
    ) {
      safeItems.push({
        title: item.title,
        ...(item.description !== undefined && { description: item.description }),
        template: item.template,
      });
    }
  }

  return {
    heading: templatesSection?.heading || DEFAULTS.TEMPLATES_HEADING,
    description: content,
    items: safeItems,
  };
}

/**
 * Extracts checklist section content
 */
export function extractChecklistContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): ChecklistContent {
  const checklistSection = findSection(sections, 'checklist') as ChecklistCardsSection | null;
  const content = extractContent(checklistSection);

  const rawColumns = checklistSection?.columns;
  const columns: 1 | 2 = rawColumns === 2 ? 2 : 1;

  return {
    heading: checklistSection?.heading || DEFAULTS.CHECKLIST_HEADING,
    description: content,
    items: checklistSection?.items ?? [],
    columns,
  };
}

/**
 * Extracts FAQ section content
 */
export function extractFAQContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): FAQContent {
  const faqSection = findSection(sections, 'faq') as FaqSection | null;
  const content = extractContent(faqSection);

  return {
    ...(faqSection?.heading && { heading: faqSection.heading }),
    subheading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    items: faqSection?.items ?? [],
  };
}

/**
 * Extracts CTA section content with fallbacks
 */
export function extractCTAContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): CTAContent {
  const ctaSection = findSection(sections, 'cta') as
    | (ResourcePageTemplateSection & { type: 'cta' })
    | null;
  const content = extractContent(ctaSection);

  return {
    heading: ctaSection?.heading || DEFAULTS.CTA_HEADING,
    content: getContentAtIndex(content, CONTENT_INDEX.PRIMARY, DEFAULTS.CTA_CONTENT),
    primaryAction: getContentAtIndex(content, CONTENT_INDEX.SECONDARY, DEFAULTS.CTA_PRIMARY_BUTTON),
    secondaryAction: getContentAtIndex(
      content,
      CONTENT_INDEX.TERTIARY,
      DEFAULTS.CTA_SECONDARY_BUTTON
    ),
    features: ctaSection?.features || DEFAULTS.CTA_FEATURES,
    finalButtonText: ctaSection?.button?.text || DEFAULTS.CTA_PRIMARY_BUTTON,
    finalButtonUrl: ctaSection?.button?.url || DEFAULTS.CTA_BUTTON_URL,
    secondaryActionUrl: DEFAULTS.CTA_SECONDARY_BUTTON_URL,
  };
}

/**
 * Extracts related resources section content
 */
export function extractRelatedResourcesContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): RelatedResourcesContent {
  const relatedResourcesSection = findSection(
    sections,
    'related-resources'
  ) as RelatedResourcesSection | null;
  const content = extractContent(relatedResourcesSection);

  return {
    ...(relatedResourcesSection?.heading && { badge: relatedResourcesSection.heading }),
    heading: getContentAtIndex(content, CONTENT_INDEX.PRIMARY),
    subheading: getContentAtIndex(content, CONTENT_INDEX.SECONDARY),
    buttonText: getContentAtIndex(content, CONTENT_INDEX.TERTIARY),
    resources: relatedResourcesSection?.resources ?? [],
  };
}

/**
 * Extracts sidebar CTA section content with fallbacks
 */
export function extractSidebarCTAContent(
  sections: ResourcePageTemplateSection[] | ResourcePageTemplateSection
): SidebarCTAContent {
  const sidebarSection = findSection(sections, 'sidebar-cta') as
    | (ResourcePageTemplateSection & { type: 'sidebar-cta' })
    | null;
  const content = extractContent(sidebarSection);

  return {
    heading: sidebarSection?.heading || DEFAULTS.SIDEBAR_CTA_HEADING,
    content: getContentAtIndex(content, CONTENT_INDEX.PRIMARY, DEFAULTS.SIDEBAR_CTA_CONTENT),
    primaryAction: getContentAtIndex(content, CONTENT_INDEX.SECONDARY, DEFAULTS.CTA_PRIMARY_BUTTON),
    secondaryAction: getContentAtIndex(
      content,
      CONTENT_INDEX.TERTIARY,
      DEFAULTS.CTA_SECONDARY_BUTTON
    ),
    features: sidebarSection?.features || DEFAULTS.CTA_FEATURES,
  };
}
