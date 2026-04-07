import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRoofingEstimateFollowUpAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Summit Roofing Solutions is a mid-sized residential roofing company based in Leeds. The
      business generates between 25 and 40 estimates per week across repairs, replacements, and
      insurance-related work. Despite consistent lead volume, the close rate had plateaued at around
      18%. The team sent estimates via email or handed them over in person — but beyond that,
      follow-up was inconsistent. Some estimates received a single phone call a few days later. Most
      received nothing at all.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Estimate Close Rate',
      value: '35%',
      icon: 'Receipt',
      color: 'case-study-accent--success',
    },
    {
      label: 'Follow-Up Completion',
      value: '94%',
      icon: 'CheckCircle2',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Revenue Recovered',
      value: '£8.2k/mo',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Pipeline Visibility',
      value: 'Full CRM',
      icon: 'BarChart3',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Estimates Sent, Then Forgotten',
    problemDescription: [
      'Summit Roofing sent an average of 32 estimates per week. The sales process ended at delivery — estimates were emailed or handed to the homeowner and then left to sit. Follow-up depended entirely on individual memory and willingness to make calls.',
      'Of the estimates that did receive follow-up, most came 5–7 days after delivery — well past the point where homeowners had already started comparing alternatives. Roughly 60% of estimates received no follow-up at all. There was no system tracking which estimates were open, pending, or lost.',
    ],
    painPoints: [
      'Average of 32 estimates sent per week with only 18% closing',
      '60% of estimates received zero follow-up after delivery',
      'Follow-up calls happened 5–7 days after delivery — too late for most homeowners',
      'No visibility into which estimates were pending, viewed, or lost',
      'Insurance-related estimates had different timelines but received the same treatment',
      'Sales team relied on memory rather than a tracking system',
      'Revenue leakage estimated at over £8,000 per month from unconverted estimates',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: CRM Pipeline With Automated Follow-Up Sequences',
    solutionDescription:
      'The implementation centred on building a structured CRM pipeline that tracked every estimate from delivery through to decision, with automated follow-up sequences triggered at the right intervals based on estimate type.',
    whatWeDid: [
      {
        title: 'Estimate Pipeline Setup',
        description:
          'Created a CRM pipeline with stages for Sent, Viewed, Follow-Up Due, Negotiation, Won, and Lost — giving the team a clear picture of every active estimate.',
        icon: 'GitBranch',
      },
      {
        title: 'Automated Follow-Up Sequences',
        description:
          'Built three follow-up sequences: a check-in at 48 hours, a comparison-help message at 5 days, and a final gentle close at 10 days. Each was adapted for estimate type.',
        icon: 'Timer',
      },
      {
        title: 'Estimate Type Segmentation',
        description:
          'Separated insurance-claim estimates from standard repair and replacement estimates so each followed a timeline appropriate to the homeowner\u2019s decision cycle.',
        icon: 'Tags',
      },
      {
        title: 'Team Notifications',
        description:
          'Configured CRM alerts so sales staff received a notification when a follow-up was due, removing the dependency on memory.',
        icon: 'Bell',
      },
      {
        title: 'Win/Loss Tracking',
        description:
          'Added outcome tracking so the team could report on close rates by estimate type, source, and follow-up stage — enabling continuous improvement.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Estimate Close Rate',
        before: '18% across all estimate types',
        after: '35% average close rate',
        improvement: '+17 percentage points',
        description:
          'Structured follow-up at the right intervals gave homeowners the information and nudge they needed to commit, rather than going silent.',
      },
      {
        metric: 'Follow-Up Completion',
        before: '40% of estimates received at least one follow-up call',
        after: '94% of estimates completed the full follow-up sequence',
        improvement: '+54 percentage points',
        description:
          'Automated sequences ensured every estimate received three follow-up touchpoints regardless of team workload.',
      },
      {
        metric: 'Monthly Revenue Recovered',
        before: 'Estimated £8,200/month lost from unconverted estimates',
        after: 'Revenue recovered through improved close rates',
        improvement: '£8,200/month captured',
        description:
          'The combination of faster follow-up and consistent sequences converted estimates that would have previously gone cold.',
      },
      {
        metric: 'Average Follow-Up Speed',
        before: '6.2 days after estimate delivery',
        after: '48 hours (first automated touchpoint)',
        improvement: '77% faster first contact',
        description:
          'The first follow-up now happens within 2 days instead of nearly a week, keeping Summit Roofing top-of-mind during the homeowner\u2019s decision window.',
      },
      {
        metric: 'Pipeline Visibility',
        before: 'No visibility — estimates tracked in spreadsheets or not at all',
        after: 'Full CRM pipeline with real-time status for every open estimate',
        improvement: 'Complete operational clarity',
        description:
          'The team could see exactly how many estimates were active, which stage each was in, and where bottlenecks were forming.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Estimates Going Unanswered?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a CRM follow-up system could recover lost revenue from your existing estimate pipeline.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    { type: 'metrics', keyMetrics },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'roofing-estimate-follow-up-automation',
    title: 'Roofing Estimate Follow-Up Automation',
    metaTitle: 'Why Roofing Estimates Go Unanswered (And the Follow-Up System That Fixed It)',
    metaDescription:
      'How a Leeds roofing company increased their estimate close rate from 18% to 35% using automated CRM follow-up sequences and pipeline visibility.',
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
    heroHeadline: 'How a Roofing Company Recovered £8,200/Month by Automating Estimate Follow-Up',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Estimate Follow-Up', 'CRM Pipeline', 'Roofing', 'Revenue Recovery', 'Automation'],
    seo: {
      canonical: '/case-study/roofing-estimate-follow-up-automation',
      openGraph: {
        title: 'Why Roofing Estimates Go Unanswered | MindWP Case Study',
        description:
          'How a Leeds roofing company increased their estimate close rate from 18% to 35% using automated CRM follow-up sequences and pipeline visibility.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Revenue Recovery' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Revenue Problem' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Estimate Pipeline Performance',
      },
      cta: {
        primaryButtonLabel: 'Close More Roofing Estimates',
        primaryButtonHref: '/contact',
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for trades' },
        ],
      },
    },
  };
}

export const roofingEstimateFollowUpAutomation: CaseStudyData =
  buildRoofingEstimateFollowUpAutomation();
