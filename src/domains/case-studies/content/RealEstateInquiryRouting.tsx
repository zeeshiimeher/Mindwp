import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildRealEstateInquiryRouting(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Pennington & Hart is a boutique estate agency in Brighton with four agents covering sales and
      lettings. The agency received property enquiries from multiple channels — Rightmove, Zoopla,
      the agency website, phone calls, and walk-ins. There was no system for routing enquiries to
      the right agent or ensuring timely follow-up. New leads arrived in a shared email inbox, and
      whichever agent happened to check it first would respond — if they weren\u2019t already with a
      client. During busy weeks, enquiries sat unanswered for 6\u201312 hours, and some were missed
      entirely.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Response Time',
      value: '8hr → 11min',
      icon: 'Clock',
      color: 'case-study-accent--success',
    },
    {
      label: 'Lead Capture',
      value: '62% → 94%',
      icon: 'UserPlus',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Viewings Booked',
      value: '+38%',
      icon: 'Home',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Lost Enquiries',
      value: '12/wk → 1/wk',
      icon: 'ShieldCheck',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Enquiries Lost in a Shared Inbox With No Routing',
    problemDescription: [
      'Pennington & Hart received an average of 45 property enquiries per week across all channels. These arrived in a single shared email inbox that all four agents had access to. There was no assignment logic, no routing by property type or location, and no escalation for unanswered enquiries. Agents checked the inbox between viewings and client meetings — creating unpredictable response gaps.',
      'Portal enquiries from Rightmove and Zoopla were particularly time-sensitive, as buyers and renters typically contacted 3\u20134 agencies simultaneously. The agency that responded first usually secured the viewing. Pennington & Hart\u2019s average response time was 8 hours — by which point most serious enquirers had already booked viewings elsewhere. An estimated 12 enquiries per week were either never responded to or responded to so late that the lead had moved on.',
    ],
    painPoints: [
      'Average 8-hour response time for property enquiries',
      '12 enquiries per week lost to delayed or no response',
      'Shared inbox with no assignment or routing logic',
      'Portal enquiries (Rightmove, Zoopla) sat alongside website and phone leads',
      'Agents checked inbox only between viewings — creating 2\u20134 hour gaps',
      'No escalation for unanswered enquiries after a set time',
      'Buyers contacting 3\u20134 agencies — first responder wins the viewing',
    ],
  };

  const deliverablesSection: CaseStudyTemplateSection = {
    type: 'deliverables',
    badge: 'Deliverables',
    title: 'What Was Built',
    description:
      'A multi-channel lead routing system that consolidated all enquiry sources, auto-assigned leads to the right agent, and enforced response time targets with escalation.',
    items: [
      'Multi-channel consolidation (Rightmove, Zoopla, website, phone) into GoHighLevel CRM',
      'Intelligent lead routing by property type, location area, and agent availability',
      'Automatic email and SMS acknowledgement within 2 minutes of enquiry',
      '15-minute escalation to backup agent for unactioned leads',
      '30-minute escalation to senior partner with push notification',
      'Lead source tracking and attribution for every enquiry',
      'Mobile push notifications for assigned leads',
      'Weekly response time and conversion reporting',
    ],
    columns: 2,
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Phase 1',
        title: 'Channel Audit & Mapping',
        description:
          'Documented all enquiry sources, mapped volume by channel, and identified which sources had the longest response gaps and highest loss rates.',
        duration: '1 week',
      },
      {
        phase: 'Phase 2',
        title: 'CRM & Routing Setup',
        description:
          'Configured GoHighLevel CRM with multi-channel ingestion, routing rules based on property type and agent territory, and automatic acknowledgement templates.',
        duration: '2 weeks',
      },
      {
        phase: 'Phase 3',
        title: 'Escalation & Training',
        description:
          'Built escalation workflows, trained agents on the CRM interface and mobile notifications, and set response time targets.',
        duration: '1 week',
      },
      {
        phase: 'Phase 4',
        title: 'Performance Monitoring',
        description:
          'Tracked response times, lead capture rates, and viewing bookings over an 8-week period. Adjusted routing rules based on agent performance data.',
        duration: '8 weeks',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Average Response Time',
        before: '8 hours — agents checked shared inbox between viewings',
        after: '11 minutes — automatic routing with escalation enforcement',
        improvement: '98% faster',
        description:
          'The combination of instant acknowledgement, direct agent routing, and escalation rules collapsed response time from hours to minutes.',
      },
      {
        metric: 'Lead Capture Rate',
        before: '62% — 12 of 45 weekly enquiries lost to delayed or no response',
        after: '94% — only 1 enquiry per week lost (typically a spam or misdirected submission)',
        improvement: '+32 percentage points',
        description:
          'Automatic routing and escalation ensured every genuine enquiry received a human response, eliminating the inbox-check lottery that had caused most lead loss.',
      },
      {
        metric: 'Viewings Booked',
        before: 'Average 19 viewings per week',
        after: 'Average 26 viewings per week',
        improvement: '+38% increase',
        description:
          'Faster response times meant the agency was often the first to reply to portal enquiries — securing viewings that previously went to faster-responding competitors.',
      },
      {
        metric: 'Lost Enquiries Per Week',
        before: '12 enquiries per week unresponded or responded too late',
        after: '1 enquiry per week (spam/misdirected)',
        improvement: '92% reduction in lead loss',
        description:
          'The escalation system acted as a safety net, ensuring no genuine enquiry could sit indefinitely without action.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Enquiries to Slow Response Times?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated lead routing system could ensure every enquiry reaches the right person within minutes.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    deliverablesSection,
    processSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'real-estate-inquiry-routing',
    title: 'Real Estate Inquiry Routing',
    metaTitle:
      'Why Estate Agents Lose Property Enquiries (And the Routing System That Captures Them)',
    metaDescription:
      'How a Brighton estate agency reduced response time from 8 hours to 11 minutes and increased viewings by 38% using automated multi-channel lead routing.',
    industryCategory: 'real-estate',
    industryLabel: 'Real Estate',
    industries: ['realtor'],
    systems: ['ai-lead-handling'],
    topics: ['lead-routing', 'lead-response-time', 'lead-capture'],
    publishDate: '2026-03-01',
    client: 'Pennington & Hart',
    location: 'Brighton, UK',
    business: 'Pennington & Hart',
    duration: '12 weeks',
    completedDate: 'March 2026',
    heroHeadline:
      'How an Estate Agency Cut Response Time From 8 Hours to 11 Minutes and Booked 38% More Viewings',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Lead Routing', 'Estate Agency', 'Property Enquiries', 'Response Time', 'Multi-Channel'],
    seo: {
      canonical: '/case-study/real-estate-inquiry-routing',
      openGraph: {
        title: 'Why Estate Agents Lose Property Enquiries | MindWP Case Study',
        description:
          'How a Brighton estate agency cut response time from 8 hours to 11 minutes using automated lead routing.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The Routing Problem' },
      deliverables: { deliverablesBadgeLabel: 'Deliverables' },
      process: {
        implementationBadgeLabel: 'Implementation',
        implementationSectionTitle: 'How the System Was Built',
        implementationSectionSubtitle: 'From shared inbox to intelligent routing in 12 weeks',
      },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Enquiry Handling',
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

export const realEstateInquiryRouting: CaseStudyData = buildRealEstateInquiryRouting();
