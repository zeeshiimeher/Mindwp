import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildStormSeasonLeadHandlingSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Apex Roofing is a residential roofing contractor based in Birmingham, serving the wider West
      Midlands area. The business handles around 35–50 inbound calls per week during normal
      conditions, but during storm season that volume doubles. The existing phone setup relied on a
      single office line answered by one member of staff. When storms hit over weekends, Monday
      morning call surges overwhelmed the team — most calls went to voicemail or rang out entirely.
      Leads were being lost before anyone could respond.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Lead Recovery Rate',
      value: '89%',
      icon: 'PhoneIncoming',
      color: 'case-study-accent--success',
    },
    {
      label: 'Avg Response Time',
      value: '3 min',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Missed Calls / Day',
      value: '2',
      icon: 'PhoneMissed',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Conversion Rate',
      value: '34%',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Storm Season Overwhelmed a Single Phone Line',
    problemDescription: [
      'Apex Roofing operated with one office phone line and a part-time administrator. During calm periods, the setup was manageable. But after weekend storms, Monday morning brought 20–30 calls before midday — far more than one person could answer.',
      'Inspection requests spiked sharply on Monday mornings after weekend storms. Homeowners discovering damage would call first thing, and most expected a response within an hour. Calls that went unanswered were rarely followed up because there was no system tracking missed calls or logging caller information.',
    ],
    painPoints: [
      'Single phone line overwhelmed during storm-driven call surges',
      'No missed call tracking or automatic logging',
      'Monday morning inspection requests exceeded capacity by 3×',
      'Average response time during surge periods exceeded 38 minutes',
      'Homeowners moved to competitors after reaching voicemail',
      'No way to prioritise urgent storm-damage calls over routine enquiries',
      'Office staff spent entire mornings returning calls instead of scheduling inspections',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Missed Call Recovery With CRM Lead Routing',
    solutionDescription:
      'Rather than hiring additional phone staff, the solution focused on automating the response to missed calls and routing every inbound lead into a structured CRM pipeline where it could be tracked and followed up systematically.',
    whatWeDid: [
      {
        title: 'Missed Call Detection',
        description:
          'Configured the phone system to detect unanswered and abandoned calls in real time, logging the caller number and call timestamp.',
        icon: 'Phone',
      },
      {
        title: 'Automated SMS Response',
        description:
          'Triggered an instant SMS to every missed caller within 60 seconds, confirming receipt and offering to book an inspection online.',
        icon: 'MessageSquare',
      },
      {
        title: 'CRM Lead Creation',
        description:
          'Every missed call automatically created a new lead in the CRM pipeline with caller details, timestamp, and source tag for storm-season tracking.',
        icon: 'Database',
      },
      {
        title: 'Lead Priority Routing',
        description:
          'Storm-season leads were tagged and prioritised in the CRM so follow-up tasks appeared at the top of the queue for the next available team member.',
        icon: 'ArrowUpRight',
      },
      {
        title: 'Follow-Up Sequence',
        description:
          'Leads that did not respond to the initial SMS received a follow-up message after 2 hours and a final follow-up the next morning.',
        icon: 'RefreshCw',
      },
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'Automation Workflow',
    title: 'Missed Call Recovery Flow',
    description: 'The automated sequence from missed call to scheduled inspection.',
    workflows: [
      {
        trigger: 'Inbound call goes unanswered or reaches voicemail',
        actions: [
          'Caller number logged with timestamp',
          'SMS sent within 60 seconds with booking link',
          'CRM lead created with storm-season priority tag',
          'Follow-up task assigned to next available team member',
        ],
      },
      {
        trigger: 'Lead does not respond to initial SMS within 2 hours',
        actions: [
          'Second SMS sent with alternative contact options',
          'Lead status updated to "awaiting response" in CRM',
          'Final follow-up scheduled for next morning at 8:30 AM',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Lead Recovery Rate',
        before: '23% of missed calls returned',
        after: '89% of missed calls recovered via SMS + follow-up',
        improvement: '+66 percentage points',
        description:
          'The automated SMS response captured leads that previously disappeared entirely. Most homeowners booked an inspection directly from the text link.',
      },
      {
        metric: 'Average Response Time',
        before: '38 minutes during normal periods, 2+ hours during surges',
        after: '3 minutes average (automated SMS + CRM creation)',
        improvement: '92% faster',
        description:
          'Automated responses removed the dependency on staff availability. Leads received acknowledgement within a minute regardless of call volume.',
      },
      {
        metric: 'Daily Missed Calls',
        before: '11 per day during storm weeks',
        after: '2 per day (remaining calls handled by follow-up sequence)',
        improvement: '82% reduction in unrecovered calls',
        description:
          'The combination of faster SMS response and structured follow-up meant very few leads went completely cold.',
      },
      {
        metric: 'Conversion Rate',
        before: '19% of all inbound enquiries converted to booked inspections',
        after: '34% conversion rate across all lead sources',
        improvement: '+15 percentage points',
        description:
          'Faster response and structured follow-up improved the ratio of enquiries that converted into paid inspection visits.',
      },
      {
        metric: 'Monday Morning Call Handling',
        before: '3+ hours spent returning calls manually',
        after: '45 minutes reviewing pre-qualified CRM leads',
        improvement: '75% time reduction',
        description:
          'The administrator shifted from reactive call-returning to reviewing a prioritised CRM queue with pre-logged lead details.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Leads From Missed Calls?',
    body: 'Book a free 20-minute call and we\u2019ll walk through how a missed call recovery system could work for your roofing business — no pressure, no sales scripts.',
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
    slug: 'storm-season-lead-handling-system',
    title: 'Storm Season Lead Handling System',
    metaTitle:
      'Storm Season Lead Handling | 89% Missed Call Recovery',
    metaDescription:
      'How a Birmingham roofing contractor recovered 89% of missed calls during storm season using automated SMS response, CRM lead routing, and priority triage.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'lead-response-time', 'lead-capture'],
    publishDate: '2025-09-15',
    client: 'Apex Roofing',
    location: 'Birmingham, UK',
    business: 'Apex Roofing',
    duration: '5 weeks',
    completedDate: 'September 2025',
    heroHeadline:
      'How a Roofing Contractor Recovered 89% of Missed Storm-Season Leads With Automated Call Recovery',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Missed Call Recovery', 'Lead Handling', 'Roofing', 'Storm Season', 'CRM Automation'],
    seo: {
      canonical: '/case-study/storm-season-lead-handling-system',
      openGraph: {
        title: 'Why Roofing Companies Lose Leads During Storm Season | MindWP Case Study',
        description:
          'How a Birmingham roofing contractor recovered 89% of missed calls during storm season using automated SMS response and CRM lead routing.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The Operational Problem' },
      workflows: { workflowsBadgeLabel: 'Automation Workflow' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Storm Season Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for trades' },
        ],
      },
    },
  };
}

export const stormSeasonLeadHandlingSystem: CaseStudyData = buildStormSeasonLeadHandlingSystem();
