import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildRealtorLeadFollowUpAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Ashford Residential is an independent estate agency in Bath with three negotiators handling
      sales across the city and surrounding villages. The agency generated a steady flow of buyer
      enquiries — around 50 per week — but had no structured follow-up process after the initial
      response. Negotiators responded to the first enquiry, sent property details, and then moved on
      to the next lead. Clients who didn&apos;t immediately book a viewing were rarely contacted
      again. There was no system for tracking which buyers were still active, which had gone cold,
      or which needed a second touch to convert.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Viewing Conversion',
      value: '22% → 41%',
      icon: 'Eye',
      color: 'case-study-accent--success',
    },
    {
      label: 'Follow-Up Rate',
      value: '18% → 96%',
      icon: 'MailCheck',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Revenue Recovered',
      value: '£14k/qtr',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Pipeline Visibility',
      value: '100%',
      icon: 'BarChart3',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: One-Touch Enquiry Handling With No Structured Follow-Up',
    problemDescription: [
      'Ashford Residential\u2019s negotiators each handled 15\u201318 active buyer enquiries at any time. After the initial response — typically sending property details and availability — follow-up depended entirely on the negotiator remembering to check back. In practice, only about 18% of enquiries received a second touchpoint.',
      'The agency had no CRM beyond a shared spreadsheet that was updated inconsistently. Buyers who needed a few days to discuss with a partner, arrange finances, or research the area received no further contact. Many of these buyers were still interested but hadn\u2019t yet committed to a viewing. Without follow-up, they drifted to competing agencies that maintained contact. The estimated commission lost to unconverted-but-interested leads was around £14,000 per quarter.',
    ],
    painPoints: [
      'Only 18% of buyer enquiries received any follow-up after initial response',
      'No CRM — leads tracked in a shared spreadsheet updated inconsistently',
      'Negotiators handled 15\u201318 leads each with no visibility into pipeline stage',
      'Interested buyers who needed time received no further contact',
      'Estimated £14,000/quarter lost in commission from unconverted leads',
      'No way to distinguish active leads from cold leads',
      'Follow-up depended entirely on individual negotiator memory',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: CRM Pipeline With Automated Follow-Up Sequences',
    solutionDescription:
      'The solution replaced the spreadsheet with a CRM pipeline that tracked every buyer through defined stages and triggered automated follow-up at each step — ensuring no interested lead dropped off without multiple touchpoints.',
    whatWeDid: [
      {
        title: 'Buyer Pipeline Stages',
        description:
          'Defined five pipeline stages — New Enquiry, Property Sent, Follow-Up Due, Viewing Booked, Offer Stage — so every lead had a visible status.',
        icon: 'Layers',
      },
      {
        title: 'Automated Follow-Up Sequences',
        description:
          'Built email and SMS sequences triggered at each stage transition: a check-in 48 hours after property details were sent, a viewing prompt at 5 days, and a re-engagement message at 10 days.',
        icon: 'Mail',
      },
      {
        title: 'Negotiator Task Queues',
        description:
          'Created daily task lists for each negotiator showing which leads needed personal follow-up, sorted by priority based on engagement signals (email opens, link clicks).',
        icon: 'ClipboardList',
      },
      {
        title: 'Pipeline Reporting',
        description:
          'Built weekly reports showing lead volume by stage, conversion rates between stages, and individual negotiator follow-up performance.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Enquiry-to-Viewing Conversion',
        before: '22% — most leads received one response and no follow-up',
        after: '41% — structured sequences maintained contact through the decision window',
        improvement: '+86% relative increase',
        description:
          'The automated follow-up sequences kept the agency present during the 3\u201310 day consideration period when buyers decided whether to book a viewing.',
      },
      {
        metric: 'Follow-Up Completion Rate',
        before: '18% — only 1 in 5 leads received a second touchpoint',
        after: '96% — automated sequences ensured consistent multi-touch follow-up',
        improvement: '+78 percentage points',
        description:
          'Removing follow-up from negotiator memory and automating the sequence meant almost every lead received the full 3-step follow-up.',
      },
      {
        metric: 'Quarterly Commission Recovered',
        before: 'Estimated £14,000/quarter lost from unconverted interested leads',
        after: '£14,200/quarter in additional commission from improved conversion',
        improvement: '~100% of lost commission recovered',
        description:
          'Leads that would previously have drifted away now converted at nearly double the rate, recovering commission revenue that had been quietly leaking.',
      },
      {
        metric: 'Pipeline Visibility',
        before: 'Shared spreadsheet — no stage tracking, no engagement data',
        after: '100% of leads visible in pipeline with stage, engagement, and follow-up status',
        improvement: 'Full visibility achieved',
        description:
          'The agency could now see exactly where every buyer was in their journey and which leads were most likely to convert.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Buyers After the First Response?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a CRM pipeline with automated follow-up could double your enquiry-to-viewing conversion rate.',
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
    slug: 'realtor-lead-follow-up-automation',
    title: 'Realtor Lead Follow-Up Automation',
    metaTitle:
      'Why Estate Agents Lose Buyers After the First Response (And the Follow-Up System That Converts Them)',
    metaDescription:
      'How a Bath estate agency increased enquiry-to-viewing conversion from 22% to 41% and recovered £14,000 per quarter using automated CRM follow-up sequences.',
    industryCategory: 'real-estate',
    industryLabel: 'Real Estate',
    industries: ['realtor'],
    systems: ['revenue-growth'],
    topics: ['follow-up', 'crm-pipeline', 'lead-management'],
    publishDate: '2026-03-15',
    client: 'Ashford Residential',
    location: 'Bath, UK',
    business: 'Ashford Residential',
    duration: '13 weeks',
    completedDate: 'March 2026',
    heroHeadline:
      'How an Estate Agency Nearly Doubled Viewing Bookings With Automated Follow-Up Sequences',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Lead Follow-Up', 'Estate Agency', 'CRM Pipeline', 'Revenue Recovery', 'Real Estate'],
    seo: {
      canonical: '/case-study/realtor-lead-follow-up-automation',
      openGraph: {
        title: 'Why Estate Agents Lose Buyers | MindWP Case Study',
        description:
          'How a Bath estate agency increased viewing conversion from 22% to 41% with automated CRM follow-up.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Revenue Recovery' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Follow-Up Gap' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Follow-Up Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for estate agents' },
        ],
      },
    },
  };
}

export const realtorLeadFollowUpAutomation: CaseStudyData = buildRealtorLeadFollowUpAutomation();
