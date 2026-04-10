import { Clock, Phone, Search } from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'missed-call-recovery-system';

export const missedCallRecoverySystemPage = {
  slug,
  systems: ['ai-lead-handling'],
  topics: ['missed-calls', 'lead-response-time'],
  keywords: [
    'missed call recovery system',
    'missed call text back system',
    'missed enquiry capture system',
    'after-hours lead response system',
    'automatic text back for missed calls',
  ],
  badge: 'Missed Call Recovery System',
  category: 'Lead Protection Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Missed Call Recovery | Lead Protection for Businesses',
    description:
      'Missed call recovery for service businesses that need faster first response, better capture of missed enquiries, reduced lead leakage, and clearer follow-up handoff.',
    schemaName: 'Missed call recovery system for service businesses',
    schemaDescription:
      'A structured missed call recovery system covering immediate response, text-back workflows, enquiry capture, and follow-up handoff for service businesses.',
  }),
  hero: {
    badge: 'Lead-Protection Workflow',
    title: 'Missing the call is one problem. Losing the enquiry afterwards is the bigger one.',
    description:
      'This service focuses on what happens after a call is missed. It helps service businesses respond faster, capture the enquiry more cleanly, and move the conversation into the right next step before the lead disappears.',
    primaryAction: {
      label: CTA_LABELS.AI_LEAD_HANDLING,
      href: buildServiceContactHref({
        system: 'ai-lead-handling',
        slug: 'missed-call-recovery-system',
      }),
    },
    list: [
      'Immediate response after a missed call',
      'Cleaner capture of caller intent and details',
      'Stronger handoff into follow-up, booking, or team action',
    ],
    cssPrefix: 'missed-call-recovery-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where leads leak',
      title:
        'Most businesses do not just lose calls. They lose the follow-up moment after the call.',
      description:
        'Missed call recovery matters when high-intent enquiries still arrive by phone but the response window is too easy to lose during busy periods or after hours.',
      painPoints: [
        {
          before: 'A missed caller gets no response, so they simply move to the next provider.',
          after: 'A quick acknowledgement creates a second chance before the enquiry goes cold.',
        },
        {
          before:
            'The team sees a missed call later but has no context for what the person needed.',
          after:
            'The system captures intent and routes enough context to make the next step clearer.',
        },
        {
          before: 'Busy periods, after-hours gaps, and field work create repeated lead leakage.',
          after:
            'Recovery logic catches more of those missed opportunities without relying on memory alone.',
        },
      ],
    },
    signalSection: {
      badge: 'Where it usually hurts',
      title: 'The strongest fit is where calls still carry high intent',
      description:
        'These patterns usually show that missed call recovery can create immediate operational value without needing a full system rebuild first.',
    },
    signalCards: [
      {
        icon: Phone,
        title: 'Busy periods and on-site work',
        description:
          'Useful where the team regularly misses calls because they are already serving customers or working on-site.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock,
        title: 'After-hours enquiries',
        description:
          'Useful when good calls come in outside business hours and disappear before the next morning.',
        iconType: 'accent' as const,
      },
      {
        icon: Search,
        title: 'High-value local intent',
        description:
          'Useful where each missed call could represent a nearby quote request, booking, or urgent service enquiry.',
        iconType: 'secondary' as const,
      },
    ],
    workflowExamples: {
      badge: 'Recovery examples',
      title: 'A missed call recovery workflow should feel immediate and simple',
      description:
        'The goal is not complexity. It is to acknowledge the caller, capture the opportunity, and move it into a clear next action.',
      items: [
        {
          trigger: 'A potential customer calls after business hours and nobody answers.',
          actions: [
            'Send an immediate acknowledgement text',
            'Offer a simple next step or callback expectation',
            'Capture the enquiry into the right follow-up path',
            'Flag the team for next-day action',
          ],
        },
        {
          trigger: 'A busy team misses several calls during a high-demand period.',
          actions: [
            'Acknowledge each missed caller quickly',
            'Separate urgent from routine enquiries',
            'Route the calls into a clear callback queue',
            'Reduce the chance of good leads going cold',
          ],
        },
        {
          trigger: 'A missed caller is ready to book but cannot reach the team immediately.',
          actions: [
            'Send a clear text-back response',
            'Collect the key booking details',
            'Route into the next booking or scheduling step',
            'Keep context ready for whoever follows up',
          ],
        },
      ],
    },
    processSection: {
      badge: 'Recovery flow',
      title: 'How missed call recovery works',
      description:
        'The flow needs to be simple enough to run consistently, and clear enough that the team knows what happens next.',
      steps: [
        {
          number: '1',
          title: 'Detect the missed call event',
          description:
            'Define what should count as a recoverable missed call and what the first automated action should be.',
        },
        {
          number: '2',
          title: 'Send the immediate response',
          description:
            'A quick text-back or acknowledgement creates a new chance to keep the lead engaged.',
        },
        {
          number: '3',
          title: 'Capture and route the enquiry',
          description:
            'The caller intent, timing, and contact details move into the right follow-up or booking path.',
        },
        {
          number: '4',
          title: 'Close the handoff gap',
          description:
            'The right person or system gets the context needed to follow up instead of starting from zero later.',
        },
      ],
    },
    recoveryLayer: {
      badge: 'What the system covers',
      title: 'The recovery layer usually includes three working parts',
      description:
        'This stays focused on the recovery workflow itself, not the full phone-answering stack.',
      cards: [
        {
          title: 'Immediate acknowledgement',
          description:
            'A fast response so the caller knows the enquiry has not disappeared into silence.',
          points: [
            'Text-back acknowledgement',
            'Basic expectation-setting',
            'Faster first response',
          ],
          featured: true,
        },
        {
          title: 'Enquiry capture and triage',
          description:
            'A way to separate urgent, routine, and booking-led calls so the next step is more useful.',
          points: ['Caller intent capture', 'Priority handling rules', 'Cleaner follow-up queue'],
        },
        {
          title: 'Handoff into the wider system',
          description:
            'Missed call recovery should feed the right next layer instead of stopping at the text-back message.',
          points: [
            'Booking or callback routing',
            'CRM or task visibility',
            'Operational continuity',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where unanswered calls are a real source of lead leakage and the response gap is commercially important.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Call-heavy local service businesses',
          description:
            'A strong fit where phone enquiries still represent a major part of new business or urgent demand.',
        },
        {
          title: 'Teams that miss calls during real work',
          description:
            'Useful when staff are often on-site, with customers, or otherwise unable to answer consistently.',
        },
        {
          title: 'Businesses that need a focused lead-protection layer first',
          description:
            'A valid entry point when missed calls are the obvious leak even before wider AI or CRM work is in place.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses with low call dependence',
          description:
            'If calls are not a meaningful lead source, another page may be a better fit than a missed call recovery workflow.',
        },
        {
          title: 'Teams expecting the text-back alone to solve everything',
          description:
            'The text-back is only one part. The real value comes from capture, routing, and follow-up continuity.',
        },
        {
          title: 'Cases where trust or visibility is the larger issue',
          description:
            'If the business is not being found or trusted in the first place, website, reputation, or local visibility may need to lead.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about missed call recovery',
      description:
        'Questions that come up when businesses realise missed calls are costing real opportunities.',
      faqs: [
        {
          question: 'Can this work without a full AI phone assistant?',
          answer:
            'Yes. This page is about the recovery layer after a missed call, not necessarily a full call-answering system. It can stand alone or connect into a wider AI lead-handling setup later.',
        },
        {
          question: 'Is this mainly for urgent local services?',
          answer:
            'That is one strong use case, but it also helps any business where calls still carry high intent and missed response windows cause real lead leakage.',
        },
        {
          question: 'How is this different from Booking & Scheduling?',
          answer:
            'Booking & Scheduling focuses on appointment flow once someone is moving toward a slot or consultation. Missed Call Recovery focuses earlier on protecting the opportunity immediately after a call is missed.',
        },
      ],
      cssPrefix: 'missed-call-recovery-faq',
    },
  },
  cta: {
    title: 'Stop losing leads after missed calls',
    description:
      'If missed calls are creating avoidable lead leakage, we can help structure a clearer recovery workflow.',
  },
} satisfies ServicePageData;
