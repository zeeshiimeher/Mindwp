import {
  Bell,
  Calculator,
  ClipboardCheck,
  Eye,
  FileText,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAccountingFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Accounting Firms',
    title: 'The Proposal Was Sent Three Weeks Ago. Nobody Has Opened It Since.',
    description:
      'Most accounting firms do not lose business owners on the call itself. They lose them after the proposal lands, gets parked for later, and sits there while the owner quietly compares two or three firms and hears back from someone else first.',
    list: ['Proposal parked', 'No follow-up', 'Decision drift'],
    cssPrefix: 'accounting-firms-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Proposals Die',
    title: 'It is rarely a no. It is a maybe that nobody followed up.',
    description:
      'Most proposals do not get rejected clearly. They just sit in the inbox while the prospect weighs up other firms, gets distracted by the week, and never gets a follow-up strong enough to bring the decision back to the surface.',
    benefits: [
      {
        icon: FileText,
        title: 'Sent on Tuesday. Forgotten by Friday.',
        description:
          'Proposal sent Monday. By Friday, no reply and nobody followed up. The owner meant to read it properly, then payroll landed, a supplier issue flared up, and the document slipped down the inbox behind everything else.',
        iconType: 'primary' as const,
      },
      {
        icon: Eye,
        title: 'Two other firms sent something too',
        description:
          'They are rarely looking at your proposal in isolation. They are comparing two or three firms at once, and the one that stays visible without feeling pushy often starts to look like the safer choice.',
        iconType: 'secondary' as const,
      },
      {
        icon: Bell,
        title: 'Nobody chased, because nobody had time',
        description:
          'A polite check-in a week later would rescue more of these than most firms realise. It almost never gets sent because everyone assumes they will remember once the deadline pressure drops, and they usually do not.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'A Proposal, Two Outcomes',
    title: 'Same firm. Same proposal. Two completely different close rates.',
    description:
      'The service itself does not change between these two versions. What changes is whether the prospect feels forgotten after the proposal is sent or feels like the firm is still calmly present while they decide.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How proposals usually go',
        items: [
          'Discovery call on Monday. Proposal sent Tuesday.',
          'No reply by Friday. Nobody chases.',
          'Two weeks later, the prospect signs with someone else.',
          'You never find out which firm. Or why.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How they go with a quiet follow-up',
        items: [
          'A short check-in lands the next week. Friendly, not pushy.',
          'A second nudge a week later if it stays quiet.',
          'You can see who has opened it, who is warm, who has gone cold.',
          'More signed engagements from the same number of proposals.',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'The points where a proposal usually decides itself',
    description:
      'These are the small handoffs that usually decide whether a proposal stays alive or quietly disappears. Most firms already know these moments matter, but they still rely on somebody remembering them at exactly the right time.',
    workflows: [
      {
        trigger: 'A proposal has been sitting unopened for five days.',
        actions: [
          'A polite, written-like-you check-in goes out',
          'It references the call, not the document',
          'It opens the door without pressure',
        ],
      },
      {
        trigger: 'The owner replied with a question and then went quiet.',
        actions: [
          'The thread is held in one place, not lost in inboxes',
          'A second short nudge goes out the following week',
          'The partner sees who is warm before the next call block',
        ],
      },
      {
        trigger: 'The proposal stays quiet for a month.',
        actions: [
          'A graceful close-out message goes out',
          'It leaves the door open for next year-end',
          'The lead is parked, not lost',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'accounting-firms-workflow-examples',
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Quiet, scheduled follow-up so good prospects stop drifting after the proposal lands',
    description:
      'You stay in client meetings and on deadline work. The follow-up runs underneath in a tone that feels measured and professional, so the firm stays present while the prospect keeps weighing the decision up.',
    featureCategories: [
      {
        title: 'See every open proposal in one place',
        description:
          'No more "did anyone follow up with that property developer?" or "who last spoke to that retailer?" Every open proposal stays visible so it does not depend on one partner remembering it existed.',
        icon: ClipboardCheck,
        features: [
          'Open proposals visible at a glance',
          'Status tracked without spreadsheets',
          'Handoff between partners stops slipping',
        ],
      },
      {
        title: 'Nudge without nagging',
        description:
          'Two short, friendly check-ins go out across a couple of weeks and sound like a sensible professional follow-up, not a sales chase. The moment they reply or decide, the follow-up stops.',
        icon: Bell,
        features: [
          'Day 5 and day 12 follow-ups out of the box',
          'Tone matched to a professional firm',
          'Stops on reply or signature',
        ],
      },
      {
        title: 'Catch the enquiry before another firm does',
        description:
          'A same-hour acknowledgement helps hold the enquiry before the owner keeps contacting other firms for the same work. That matters most when they are still deciding who feels most responsive before a proposal is even discussed.',
        icon: MessageCircle,
        features: [
          'Instant acknowledgement on every enquiry',
          'Service area and need captured up front',
          'Holds the lead until a partner can call back',
        ],
      },
      {
        title: 'Turn signed clients into proof',
        description:
          'A review request goes out after the first quarter, when the relief of switching accountants is still fresh and the business owner can still describe why they moved. That makes the proof feel more grounded and current.',
        icon: ShieldCheck,
        features: [
          'Review request at the right moment',
          'Asked once, never again',
          'Reviews start to match the workload',
        ],
      },
      {
        title: 'Be findable for the work you actually want',
        description:
          'Your pages and Google profile line up around niche, sector, and area instead of generic accountancy language. That makes it easier for the right prospect to recognise the fit before they start comparing firms in earnest.',
        icon: Search,
        features: [
          'Pages for the work you want more of',
          'Found for sector + area searches',
          'Less time on enquiries that are not a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once an accounting firm sees how much business is being lost after the first conversation. Each one supports response speed, follow-up, proof, or visibility from a different angle.',
    cards: [
      {
        icon: Calculator,
        title: 'CRM & Proposal Follow-up',
        description:
          'Keeps open proposals visible, sends the next nudge at the right time, and stops good prospects from quietly fading out after the quote lands.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: MessageCircle,
        title: 'Smart Website Systems',
        description:
          'Helps enquiries get acknowledged quickly so prospects do not keep emailing other firms while waiting to see who replies first.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Builds the review base the firm has already earned so trust shows up before the proposal stage, not just after a prospect asks around.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps the firm show up for the niche, sector, and type of business owner it actually wants more of, not just broad accountancy searches.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things accounting firms usually ask',
    description:
      'These are the practical questions that usually come up in a professional, deadline-driven firm where the service is serious and the follow-up still needs to happen. Straight answers, without sales language.',
    faqs: [
      {
        question: 'Will the follow-up feel pushy or salesy?',
        answer:
          'No. Two short, polite check-ins across a couple of weeks. The tone is calm and partner-like, not marketing. The moment they reply, the follow-up stops.',
      },
      {
        question: 'Will partners see what is going out under the firm name?',
        answer:
          'Yes. The templates are agreed first and adjusted to fit the voice of the firm. Nothing goes out that the partners would not be comfortable signing.',
      },
      {
        question: 'How is this different from what our practice management tool does?',
        answer:
          'Practice management is built for the work after the engagement is signed. This sits in front of it, on the bit between proposal and signature.',
      },
      {
        question: 'What about prospects who never had a proposal sent?',
        answer:
          'Same logic. Enquiries get acknowledged the same hour and held until a partner can call. Most of the leak is in the gap, not the call itself.',
      },
      {
        question: 'Do we need a new website?',
        answer:
          'Usually not. We start with proposal follow-up and enquiry response, because that is where the closed-won numbers actually move.',
      },
    ],
  };

  return {
    seo: {
      title:
        'Accounting Firms — Stop Losing Owners In The Gap Between Proposal And Signature | MindWP',
      description:
        'For accounting firms where proposals get sent and then go quiet. We put quiet, scheduled follow-up, faster enquiry acknowledgement, and review prompts in place so good prospects stop drifting to whoever stayed in front of them.',
      canonical: '/industries/legal-professional-services/accounting-firms',
    },
    slug: 'accounting-firms',
    industries: ['accounting'],
    systems: [
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['follow-up', 'lead-qualification', 'review-generation'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    workflowExamples: workflowExamplesData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us where the proposals are dying',
        description:
          'If discovery calls go well but proposals sit in inboxes and never come back, walk us through the last few and we will show you where the decision is actually slipping away.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const accountingFirmsIndustryPageData: IndustryPageData =
  buildAccountingFirmsIndustryPageData();
