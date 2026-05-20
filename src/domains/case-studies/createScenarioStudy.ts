import type { CaseStudyData } from '@/domains/case-studies/types';

export function createScenarioStudy(input: {
  slug: string;
  title: string;
  industryCategory: string;
  industryLabel: string;
  industries: string[];
  primarySystem: CaseStudyData['primarySystem'];
  supportingSystems?: CaseStudyData['supportingSystems'];
  topics: string[];
  summary: string;
  problem: string;
  change: string;
  nextStep: string;
}): CaseStudyData {
  return {
    slug: input.slug,
    title: input.title,
    industryCategory: input.industryCategory,
    industryLabel: input.industryLabel,
    industries: input.industries,
    primarySystem: input.primarySystem,
    supportingSystems: input.supportingSystems,
    topics: input.topics,
    publishDate: '2026-01-20',
    client: 'Scenario study',
    location: '',
    business: 'Illustrative scenario',
    duration: '',
    completedDate: '',
    heroHeadline: input.title,
    keyMetrics: [],
    tags: ['Scenario Study', input.industryLabel],
    seo: {
      title: input.title + ' | Scenario Study',
      description: input.summary,
      canonical: '/case-studies/' + input.slug,
    },
    sections: [
      { type: 'hero', introHtml: input.summary },
      {
        type: 'problem',
        problemHeading: 'Before / clearer path',
        problemDescription: [input.problem],
        painPoints: ['Illustrative scenario only. No client result or metric is implied.'],
      },
      {
        type: 'business-impact',
        badge: 'What became clearer',
        title: 'Operating change',
        impacts: [input.change],
      },
      {
        type: 'cta',
        heading: 'Review a similar weak point',
        body: input.nextStep,
      },
    ],
  };
}
