import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildCrmPipelineVisibilityTransformation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Greenway Property Maintenance is a multi-service property company in Southampton offering
      landscaping, cleaning, and handyman services to residential and commercial clients. The
      business had grown to 12 staff across three service teams, each managed by a team leader.
      Despite steady enquiry volumes — around 60 per week — the owner had no visibility into how
      many of those enquiries became quotes, how many quotes converted to jobs, or which service
      lines were most profitable. Leads were tracked in a mix of text messages, email threads, and
      handwritten notes. The owner described running the business as &quot;flying blind.&quot;
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Pipeline Visibility',
      value: '0% → 100%',
      icon: 'BarChart3',
      color: 'case-study-accent--success',
    },
    {
      label: 'Close Rate',
      value: '21% → 34%',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Revenue Clarity',
      value: '£18k found',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Follow-Up Rate',
      value: '23% → 91%',
      icon: 'MailCheck',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: No Visibility Into the Sales Pipeline',
    problemDescription: [
      'Greenway Property Maintenance had no centralised system for tracking leads, quotes, or conversions. Each team leader managed their own enquiries via personal phone messages and notes. When the owner asked about pipeline health — how many active quotes were outstanding, which clients hadn\u2019t been followed up, or what the conversion rate was by service line — nobody could answer.',
      'Quotes were sent by email from individual team leaders with no logging or tracking. Follow-up was inconsistent: some quotes received a call back within a day, others were never chased. The owner estimated that the business was leaving £15,000\u2013£20,000 per month in unconverted quotes, but had no data to verify or address the problem. Revenue forecasting was impossible, and staffing decisions were made on gut feeling rather than demand data.',
    ],
    painPoints: [
      'Zero visibility into active leads, outstanding quotes, or conversion rates',
      'Leads tracked in text messages, emails, and handwritten notes across 3 teams',
      'No centralised quote logging — quotes sent from individual email accounts',
      'Follow-up rate estimated at 23% — most quotes never chased',
      'Estimated £15k\u2013£20k/month in unconverted quotes',
      'Revenue forecasting impossible without pipeline data',
      'Staffing and resource decisions based on gut feeling, not demand',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: Centralised CRM Pipeline With Stage Tracking and Follow-Up Automation',
    solutionDescription:
      'The solution built a single source of truth for every lead, quote, and job across all three service lines — giving the owner real-time pipeline visibility and ensuring every quote received structured follow-up.',
    whatWeDid: [
      {
        title: 'Unified Lead Intake',
        description:
          'Consolidated all enquiry channels (website, phone, Google Business Profile) into GoHighLevel CRM so every lead was captured in one place with source and service type tagging.',
        icon: 'Layers',
      },
      {
        title: 'Pipeline Stage Tracking',
        description:
          'Built a 6-stage pipeline — New Lead, Qualified, Quote Sent, Follow-Up Due, Job Won, Job Lost — visible to all team leaders and the business owner in real time.',
        icon: 'GitBranch',
      },
      {
        title: 'Automated Quote Follow-Up',
        description:
          'Configured automated follow-up sequences triggered when quotes moved to "Follow-Up Due" stage: a check-in at 48 hours, a value-add message at 5 days, and a final prompt at 10 days.',
        icon: 'Mail',
      },
      {
        title: 'Pipeline Reporting Dashboard',
        description:
          'Created weekly and monthly reports showing leads by source, quotes by service line, conversion rates by stage, and revenue pipeline value.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Pipeline Visibility',
        before: 'Zero — leads tracked across text messages, emails, and notes',
        after: '100% of leads, quotes, and jobs visible in a single pipeline',
        improvement: 'Complete visibility achieved',
        description:
          'For the first time, the owner could see every active opportunity across all three service lines, with stage progression and follow-up status visible in real time.',
      },
      {
        metric: 'Quote Close Rate',
        before: '21% — most quotes sent without follow-up',
        after: '34% — automated follow-up converted previously-lost quotes',
        improvement: '+62% relative increase',
        description:
          'The 3-step automated follow-up sequence re-engaged prospects at the critical decision points. Many clients who hadn\u2019t responded simply needed a prompt.',
      },
      {
        metric: 'Revenue Identified',
        before: 'Unknown pipeline value — no quote tracking',
        after: '£18,000/month in recoverable pipeline value identified in the first quarter',
        improvement: '£18k/month pipeline visibility',
        description:
          'Once all quotes were logged and tracked, the system revealed the actual scale of the unconverted pipeline — £18,000/month in outstanding quotes that had previously been invisible.',
      },
      {
        metric: 'Quote Follow-Up Rate',
        before: '23% — most quotes never received a follow-up',
        after: '91% — automated sequences ensured consistent multi-touch follow-up',
        improvement: '+68 percentage points',
        description:
          'Removing follow-up from manual team-leader workflows and automating it meant almost every quote received the full 3-step follow-up sequence.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Running Your Business Without Pipeline Visibility?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a CRM pipeline could give you real-time visibility into every lead, quote, and job across your business.',
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
    slug: 'crm-pipeline-visibility-transformation',
    title: 'CRM Pipeline Visibility Transformation',
    metaTitle:
      'Why Service Businesses Can\u2019t See Their Own Pipeline (And the CRM System That Fixes It)',
    metaDescription:
      'How a Southampton property maintenance company went from zero pipeline visibility to tracking every lead and quote, increasing close rate from 21% to 34% and identifying £18,000/month in recoverable revenue.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['revenue-growth'],
    topics: ['crm-pipeline', 'lead-management', 'revenue-tracking', 'crm-visibility'],
    publishDate: '2026-06-01',
    client: 'Greenway Property Maintenance',
    location: 'Southampton, UK',
    business: 'Greenway Property Maintenance',
    duration: '12 weeks',
    completedDate: 'June 2026',
    heroHeadline:
      'How a Property Maintenance Company Went From Zero Pipeline Visibility to Tracking Every Lead',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'CRM Pipeline',
      'Pipeline Visibility',
      'Quote Follow-Up',
      'Revenue Recovery',
      'System Implementation',
    ],
    seo: {
      canonical: '/case-study/crm-pipeline-visibility-transformation',
      openGraph: {
        title: 'Why Service Businesses Can\u2019t See Their Pipeline | MindWP Case Study',
        description:
          'How a property maintenance company went from zero pipeline visibility to 34% close rate with CRM.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Visibility Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Pipeline Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Works for any service business' },
        ],
      },
    },
  };
}

export const crmPipelineVisibilityTransformation: CaseStudyData =
  buildCrmPipelineVisibilityTransformation();
