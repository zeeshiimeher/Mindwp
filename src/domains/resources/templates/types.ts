import type { CaseExample } from '@/components/reusable/sections/resources/ResourceCaseSection';
import type { ResourceComparisonColumn } from '@/components/reusable/sections/resources/ResourceComparisonSection';
import type { DIYStep } from '@/components/reusable/sections/resources/ResourceDIYSection';
import type { AutomatedSolution } from '@/components/reusable/sections/resources/ResourceSolutionsSection';
import type { ResourceTemplateItem } from '@/components/reusable/sections/resources/ResourceTemplatesSection';

export interface ResourceFAQItem {
  question: string;
  answer: string;
}

export type ResourcePageTemplateSection =
  | {
      type: 'hero';
      heading?: string;
      content?: string | string[];
    }
  | {
      type: 'takeaways';
      heading?: string;
      content?: string | string[];
      items?: string[];
    }
  | {
      type: 'problem';
      heading?: string;
      content?: string | string[];
      items?: string[];
      causesHeading?: string;
    }
  | {
      type: 'business-costs';
      heading?: string;
      content?: string | string[];
      items?: string[];
    }
  | {
      type: 'diy';
      heading?: string;
      content?: string | string[];
      timeToComplete?: string;
      steps?: DIYStep[];
      proTipHeading?: string;
    }
  | {
      type: 'solution-cards';
      heading?: string;
      content?: string | string[];
      benefit?: string;
      solutions?: AutomatedSolution[];
    }
  | {
      type: 'case';
      heading?: string;
      content?: string | string[];
      caseExample?: CaseExample;
      challengeHeading?: string;
      solutionHeading?: string;
      resultHeading?: string;
    }
  | {
      type: 'comparison';
      heading?: string;
      content?: string | string[];
      before?: ResourceComparisonColumn;
      after?: ResourceComparisonColumn;
    }
  | {
      type: 'templates';
      heading?: string;
      content?: string | string[];
      items?: ResourceTemplateItem[];
    }
  | {
      type: 'checklist';
      heading?: string;
      content?: string | string[];
      items?: string[];
      columns?: 1 | 2;
    }
  | {
      type: 'faq';
      heading?: string;
      content?: string | string[];
      items?: ResourceFAQItem[];
    }
  | {
      type: 'cta';
      heading?: string;
      content?: string | string[];
      features?: Array<{
        text: string;
        icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
      }>;
      button?: {
        text: string;
        url: string;
      };
      secondaryAction?: {
        text: string;
        url: string;
      };
    }
  | {
      type: 'related-resources';
      heading?: string;
      content?: string | string[];
      resources?: Array<{
        title: string;
        description: string;
        url: string;
        categoryLabel: string;
      }>;
    }
  | {
      type: 'sidebar-cta';
      heading?: string;
      content?: string | string[];
      features?: Array<{
        text: string;
        icon?: 'phone' | 'shield' | 'award' | 'star' | 'check' | 'heart';
      }>;
    };
