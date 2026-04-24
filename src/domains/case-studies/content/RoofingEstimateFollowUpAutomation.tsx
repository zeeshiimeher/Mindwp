import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRoofingEstimateFollowUpAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Summit Roofing Solutions in Leeds was sending plenty of quotes. That was not the hard part.
      The problem started after that. Some homeowners opened the quote and went quiet. Some meant to
      call back and never did. Some were still thinking it over while the team had already moved on
      to the next job. Too much of the quote book was being left to chance.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Quotes properly followed up',
      value: 'Most of them',
      icon: 'Receipt',
      color: 'case-study-accent--success',
    },
    {
      label: 'First follow-up timing',
      value: 'A lot sooner',
      icon: 'CheckCircle2',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Recovered work',
      value: 'Around GBP7k-GBP9k a month',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Quote visibility',
      value: 'Much clearer',
      icon: 'BarChart3',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Roofing quotes kept going quiet after they were sent out',
    problemDescription: [
      'Quotes were being sent, but the next step depended too much on who remembered to call and when they happened to get around to it.',
      'Some homeowners needed a nudge. Some needed a second explanation. Some insurance jobs moved on a different rhythm entirely. Instead, too many quotes sat there until they were cold.',
    ],
    painPoints: [
      'Too many quotes had no proper follow-up at all',
      'The first call often happened later than it should have',
      'Different quote types were being treated the same way',
      'Nobody had a clear view of what was still live and what had already gone',
      'The team was relying on memory, notes, and good intentions',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'How It Ran',
    title: 'Follow-up stopped depending on who remembered',
    description:
      'The aim was not to flood people with messages. It was to stop good quotes from being forgotten.',
    workflows: [
      {
        trigger: 'A new quote went out',
        actions: [
          'The quote was marked properly instead of disappearing into the week',
          'A first check-in was lined up much earlier than before',
          'The team could see what still needed attention without hunting through notes',
        ],
      },
      {
        trigger: 'The homeowner stayed quiet',
        actions: [
          'A later nudge went out instead of leaving the quote untouched',
          'Insurance jobs could be handled a bit differently where needed',
          'Some quotes still needed a manual call because not every job followed the same pattern',
        ],
      },
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They gave every quote a clearer next step',
    solutionDescription:
      'The team put a cleaner handoff in place after a quote was sent. That meant earlier follow-up, clearer status, and less guesswork about what still had a chance of turning into a job.',
    whatWeDid: [
      {
        title: 'Quotes were tracked properly',
        description:
          'Each quote had a clear status instead of being left in somebody\'s inbox or notebook.',
        icon: 'GitBranch',
      },
      {
        title: 'The first follow-up happened sooner',
        description:
          'The team did not wait nearly as long to check back in, which kept more homeowners engaged while the quote was still being considered.',
        icon: 'Timer',
      },
      {
        title: 'Different quote types were treated differently',
        description:
          'Insurance work and standard roofing jobs were no longer forced into one identical follow-up pattern.',
        icon: 'Tags',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'A lot more quotes got proper attention before they went stale',
        improvement: 'Most quotes were no longer being left alone after day one',
        description:
          'The main win was consistency. People were hearing back while they were still comparing options instead of a week later when the moment had passed.',
      },
      {
        title: 'Earlier follow-up helped more quotes turn into real conversations',
        improvement: 'Enough to make the close rate move properly',
        description:
          'Not every homeowner replied to the first nudge. Some still needed a manual call. But the team was seeing more replies, more back-and-forth, and more jobs that would have gone quiet before.',
      },
      {
        title: 'The recovered work was meaningful without being perfectly neat',
        improvement: 'Around GBP7k-GBP9k a month stayed in reach',
        description:
          'It was not the same every month and it was not down to one message. Some categories still needed a different touch. Even so, the change was clear enough in the jobs won and in the quotes that stopped drifting out of view.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Do too many quotes go quiet after they are sent?',
    body: 'Book a free 20-minute call and we can look at where your quote follow-up is slipping and what would make it easier to keep more of those jobs alive.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    workflowsSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
      seo: {
        title: 'Roofing quote follow-up case study: more estimates turning into jobs',
        description:
        'How a Leeds roofing company stopped leaving so many quotes untouched and recovered around GBP7k-GBP9k a month in work that had been drifting away.',
        canonical: '/case-studies/roofing-quotes-not-being-followed-up',
        openGraph: {
          title: 'Roofing quote follow-up case study: more estimates turning into jobs',
          description:
            'How a Leeds roofing company stopped leaving so many quotes untouched and kept more of that work alive.',
        },
      },
      slug: 'roofing-quotes-not-being-followed-up',
      title: 'Roofing quotes kept going quiet after they were sent out',
      industryCategory: 'home-services',
      industryLabel: 'Home Services',
      industries: ['roofing'],
      systems: ['revenue-growth'],
      topics: ['follow-up', 'crm-pipeline', 'lead-management'],
      publishDate: '2025-10-01',
      client: 'Summit Roofing Solutions',
      location: 'Leeds, UK',
      business: 'Summit Roofing Solutions',
      duration: '6 weeks',
      completedDate: 'October 2025',
      heroHeadline: 'Roofing quotes kept going quiet after they were sent out',
      keyMetrics: keyMetrics.map(metric => ({
        value: metric.value,
        label: metric.label,
        ...(metric.color ? { color: metric.color } : {}),
      })),
      tags: ['Estimate Follow-Up', 'CRM Pipeline', 'Roofing', 'Revenue Recovery', 'Automation'],
      sections,
      templateOverrides: {
        hero: { scenarioBadgeLabel: 'Quote Follow-Up' },
        problem: { challengeBadgeLabel: 'What Was Happening' },
        workflows: { workflowsBadgeLabel: 'How It Ran' },
        solution: { solutionBadgeLabel: 'What They Changed' },
        results: {
          detailedResultsBadgeLabel: 'What Improved',
          detailedResultsSectionTitle: 'What Changed Once Quotes Stopped Being Left Alone',
        },
        cta: {
          metaItems: [
            { text: 'Free 20-minute call' },
            { text: 'No pressure' },
            { text: 'Useful for quote-heavy trades' },
          ],
        },
      }
  };
}

export const roofingEstimateFollowUpAutomation: CaseStudyData =
  buildRoofingEstimateFollowUpAutomation();
