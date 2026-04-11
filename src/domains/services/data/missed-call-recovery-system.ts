import { Clock, Phone, Search } from 'lucide-react';


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
    title: 'Missed Call Recovery System for Service Businesses | MindWP',
    description:
      'Stop losing leads after missed calls. Immediate text-back, enquiry capture, and follow-up routing so missed calls turn into recovered opportunities.',
    schemaName: 'Missed call recovery system for service businesses',
    schemaDescription:
      'Structured missed call recovery covering immediate response, text-back workflows, enquiry capture, and follow-up handoff for service businesses.',
  }),
  hero: {
    badge: 'Missed Call Recovery System',
      title: 'Recover Missed Calls Before They Become Lost Leads',
    description:
      'Missing the call is one problem. Losing the enquiry afterwards is the bigger one. This service catches missed calls, responds immediately, captures the opportunity, and routes it into the right next step before the lead disappears.',
    list: [
        'Instant Textback',
        'Lead Capture',
        'Next Step',
    ],
    cssPrefix: 'missed-call-recovery-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where leads leak',
      title: 'You are not just losing calls. You are losing the follow-up moment after the call.',
      description:
        'Missed call recovery matters when high-intent enquiries arrive by phone but the response window closes before anyone gets back to the caller.',
      painPoints: [
        {
          before: 'A missed caller gets silence, so they call the next provider on the list.',
          after: 'An immediate acknowledgement creates a second chance before the enquiry goes cold.',
        },
        {
          before:
            'The team sees a missed call later but has no idea what the person needed.',
          after:
            'The system captures intent and routes enough context to make the follow-up useful.',
        },
        {
          before: 'Busy periods, after-hours gaps, and field work create repeated lead leakage.',
          after:
            'Recovery logic catches those missed opportunities without relying on memory or luck.',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best where unanswered calls are a real source of lead leakage and the response gap is costing you business.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Phone enquiries are a major source of new business',
          description:
            'Calls still carry high intent and each missed one could represent a quote, booking, or urgent service request.',
        },
        {
          title: 'Your team regularly misses calls during real work',
          description:
            'Staff are on-site, with customers, or otherwise unable to answer consistently during busy periods.',
        },
        {
          title: 'You want a focused lead-protection layer first',
          description:
            'Missed calls are the obvious leak and you want that fixed before tackling wider AI, CRM, or visibility work.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Calls are not a meaningful lead source for your business',
          description:
            'If enquiries come primarily through forms or messages, another service may be a better starting point.',
        },
        {
          title: 'You think a text-back alone will solve everything',
          description:
            'The text-back is one part. The real value comes from capture, routing, and follow-up continuity.',
        },
        {
          title: 'Trust or visibility is the bigger gap',
          description:
            'If the business is not being found or trusted in the first place, website, reputation, or local visibility may need to lead.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'No recovery system vs structured missed call handling',
        description:
          'Most businesses treat missed calls as an unavoidable loss. Here is what that costs compared to catching and recovering those opportunities.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'No recovery system',
          items: [
            'Missed callers get silence and move to the next provider',
            'After-hours enquiries disappear before the next working day',
            'No record of what the caller wanted or how urgent it was',
            'Team sees missed calls later but has no context to follow up',
            'Lead leakage is invisible \u2014 nobody knows how much is being lost',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured missed call recovery',
          items: [
            'Immediate text-back acknowledges the caller and keeps the conversation alive',
            'After-hours enquiries are captured and queued for morning follow-up',
            'Caller intent and details are recorded for useful next-step action',
            'Team gets context and notification so follow-up is informed and timely',
            'Recovery rates are visible so you can see how many leads are being saved',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A local service business was missing calls regularly during busy periods and after hours. Each missed call was a potential job worth hundreds of pounds.',
      },
      cards: [
        {
          title: 'Before: missed calls going straight to competitors',
          description: 'The business was missing 15-20 calls per week during on-site work and after hours. Callers who got no answer simply called the next provider. There was no way to know how much revenue was being lost.',
          points: [
            'No response to missed calls \u2014 callers moved on immediately',
            'After-hours enquiries disappeared before morning',
            'No visibility into how many opportunities were being missed',
          ],
        },
        {
          title: 'What we built: immediate text-back with capture and routing',
          description: 'We configured an immediate text-back response for every missed call, collected key details from the caller, and routed the enquiry into the team follow-up queue with full context.',
          points: [
            'Automatic text-back within seconds of a missed call',
            'Caller intent and details captured for useful follow-up',
            'Enquiries routed to the team with context and priority flags',
          ],
          featured: true,
        },
        {
          title: 'After: recovered leads that would have been lost',
          description: 'Within the first month, the business recovered multiple jobs from callers who would have gone to competitors. The team could see every missed call, what the person needed, and follow up with full context.',
          points: [
            'Multiple jobs recovered from previously lost calls each month',
            'After-hours enquiries captured and followed up next morning',
            'Team visibility into missed call volume and recovery rates',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about missed call recovery',
      description:
        'Practical questions from businesses that realise missed calls are costing them real opportunities.',
      faqs: [
        {
          question: 'Can this work without a full AI phone assistant?',
          answer:
            'Yes. This is specifically about the recovery layer after a missed call. It can stand alone or connect into a wider AI lead-handling setup.',
        },
        {
          question: 'Is this mainly for urgent local services?',
          answer:
            'That is one strong use case, but it helps any business where calls carry high intent and a missed response window means a lost opportunity.',
        },
        {
          question: 'How is this different from Booking & Scheduling?',
          answer:
            'Booking & Scheduling focuses on appointment flow once someone is moving toward a slot. Missed Call Recovery focuses earlier \u2014 protecting the opportunity immediately after a call is missed.',
        },
        {
          question: 'What happens if the caller replies to the text-back?',
          answer:
            'The conversation continues into the follow-up system. The reply is captured, the team is notified, and the enquiry stays visible until resolved.',
        },
      ],
      cssPrefix: 'missed-call-recovery-faq',
    },
  },
  inlineCta: {
    title: 'How many leads are you losing to missed calls?',
    description:
      'Tell us how missed calls are handled now. We will show you where opportunities are being lost and what a recovery system would change.',
  },
  cta: {
    title: 'Stop losing leads after missed calls',
    description:
      'Tell us how your team handles missed calls today. We will show you where enquiries are disappearing and set up a recovery system that catches them.',
  },
} satisfies ServicePageData;
