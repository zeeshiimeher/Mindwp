import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildFitnessStudioTrialDropOff(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Pulse Studio is a small group-fitness space in Bristol. Strength classes, HIIT, mobility, and
      a tight community of regulars. The trial week was meant to be the front door for new members.
      Plenty of people walked through it. Most of them never came back for week two.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'People signed up for trials. Most never came back',
    problemDescription: [
      'A new face would book a free trial. They would do a couple of classes. Sometimes one. Then the week would end and the studio would never hear from them again. Nobody on the team knew if it had been the timing, the format, or simply life getting in the way.',
      'The trial sign-up process was great. The bit afterwards barely existed. Trials walked in, the studio said hello, and that was where the conversation effectively stopped.',
    ],
    painPoints: [
      'New trials disappeared after one or two classes',
      'Nobody followed up after the first session to see how it had gone',
      'No clear next step was offered before the trial week ended',
      'The studio could not see which trial classes were actually converting',
      'Membership growth depended on whoever happened to ask',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They put a calm, friendly nudge into the trial week itself',
    solutionDescription:
      'The studio stopped treating the trial as a single event and started treating it as a short, warm conversation. Each touch was small and respectful, never pushy.',
    whatWeDid: [
      {
        title: 'A welcome message before the first class',
        description:
          'New trials got a short, friendly note before they showed up, telling them what to expect, what to bring, and who to look for at the door.',
        icon: 'Smile',
      },
      {
        title: 'A check-in after the first session',
        description:
          'A day after the first class, a casual message asked how it went and offered a couple of suggested classes for the rest of the week.',
        icon: 'MessageSquare',
      },
      {
        title: 'A clear next step before the trial ended',
        description:
          'Before the trial week was up, trialists were given a simple, no-pressure way to keep going on a paid plan, with the option to ask any questions first.',
        icon: 'ArrowRight',
      },
      {
        title: 'A real picture of which trials were converting',
        description:
          'The studio could finally see which classes the converting trialists were attending and which ones were quietly losing people. Programming decisions stopped being guesswork.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Trials started becoming members',
        improvement: 'A clear lift in the trial-to-member conversion rate',
        description:
          'The same number of new faces walked in. More of them stayed. Most converters mentioned the friendly check-in after class one as the moment they decided this might actually be their gym.',
      },
      {
        title: 'The trial week stopped feeling like a black hole',
        improvement: 'The studio knew which trials were leaning in and which were drifting',
        description:
          'Before the trial ended, the team knew which people were close to joining and which were politely backing out. That meant less wasted energy and more honest conversations.',
      },
      {
        title: 'Programming got better because the data finally existed',
        improvement: 'Class formats that converted got more slots, the rest got rethought',
        description:
          'The numbers around which trial classes actually turned into members ended a lot of the in-team debate. The schedule shifted to lean into what was working.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Trials walking in but not staying?',
    body: 'Book a free 20-minute call. We can look at where your trial week is leaking and how to keep more of those people on board.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Fitness studio case study: more trials becoming actual members',
      description:
        'How a Bristol group-fitness studio stopped letting trial weeks fade out and started turning more new faces into long-term members.',
      canonical: '/case-studies/fitness-trial-signups-not-coming-back',
      openGraph: {
        title: 'Fitness studio case study: more trials becoming actual members',
        description: 'How a Bristol group-fitness studio stopped letting trial weeks fade out.',
      },
    },
    slug: 'fitness-trial-signups-not-coming-back',
    title: 'People signed up for trials. Most never came back',
    industryCategory: 'fitness-wellness',
    industryLabel: 'Fitness & Wellness',
    industries: ['hair-salon'],
    systems: ['revenue-growth'],
    topics: ['conversion-optimization', 'follow-up', 'customer-lifetime-value'],
    publishDate: '2026-02-18',
    client: 'Pulse Studio',
    location: 'Bristol, UK',
    business: 'Pulse Studio',
    duration: '5 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'People signed up for trials. Most never came back',
    keyMetrics: [],
    tags: ['Fitness', 'Studio', 'Trials', 'Member Conversion'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Trial Conversion' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the trial became a real conversation',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for fitness studios' },
        ],
      },
    },
  };
}

export const fitnessStudioTrialDropOff: CaseStudyData = buildFitnessStudioTrialDropOff();
