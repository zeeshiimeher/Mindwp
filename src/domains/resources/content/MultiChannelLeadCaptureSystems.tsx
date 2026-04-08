import { Globe, MessageSquare, Phone } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'multi-channel-lead-capture-systems';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Multi-channel lead capture means every way a prospect contacts you — phone, web form, chat, social media, email — routes to a single CRM pipeline with consistent data. Most service businesses capture leads on 3-5 channels but only systematically track 1 or 2.',
  problem:
    'Leads arrive on multiple channels but only some are tracked in your CRM, meaning you have no single view of all enquiries and some leads are never followed up',
  promise:
    'You will understand how to build a multi-channel capture system that routes every lead to one pipeline with source tracking, service tagging, and automated follow-up regardless of channel',
};

const takeaways = [
  'Every capture channel must route to one CRM pipeline with consistent data structure',
  'Phone, web, chat, and social leads all need the same follow-up treatment',
  'Source tracking per channel shows which channels produce valuable leads, not just volume',
  'Untracked channels create invisible lead loss that compounds over time',
];

const problem = {
  description: [
    'Service businesses receive leads from multiple sources: phone calls, website forms, Google Business Profile, social media messages, email enquiries, and sometimes walk-ins. Most businesses systematically track 1-2 of these channels. The rest exist in separate inboxes, notification feeds, and voicemail boxes.',
    'The hidden cost is lead loss on untracked channels. A Facebook message that nobody checks for 2 days. A Google Business Profile enquiry buried in a notification tab. A voicemail that gets listened to but not followed up. Each channel that does not route to CRM creates a leak in your lead pipeline.',
  ],
  causes: [
    'Phone calls not tracked or logged in CRM',
    'Social media messages checked manually and inconsistently',
    'Google Business Profile enquiries treated separately from website leads',
    'Chat widget leads stored in chat platform, not CRM',
    'No unified view showing leads from all channels',
    'Follow-up automation only covers web form leads',
  ],
};

const comparison = {
  before: {
    title: 'Fragmented Capture',
    items: [
      'Website forms go to CRM',
      'Phone calls tracked on paper or not at all',
      'Social messages checked when someone remembers',
      'Chat leads stay in chat platform',
      'Email enquiries live in inbox',
      'No way to see total lead volume across channels',
    ],
  },
  after: {
    title: 'Unified Multi-Channel Capture',
    items: [
      'All channels route to single CRM pipeline',
      'Phone calls logged with recording and source tracking',
      'Social messages auto-create CRM records',
      'Chat conversations sync to CRM with full transcript',
      'Email enquiries parsed and entered as CRM contacts',
      'Dashboard shows total leads by channel with conversion data',
    ],
  },
};

const solutions = [
  {
    title: 'Unified Phone Capture',
    description:
      'Phone calls route through tracking numbers that log call data in CRM: caller ID, call duration, recording, and source tracking number. Missed calls trigger immediate SMS follow-up. Every phone interaction becomes a trackable CRM event.',
    icon: Phone,
  },
  {
    title: 'Social and Chat Integration',
    description:
      'Facebook messages, Instagram DMs, Google Business Profile messages, and website chat all feed into the CRM conversation view. Team members respond from one interface. Each conversation creates a CRM contact with channel source tracking.',
    icon: MessageSquare,
  },
  {
    title: 'Cross-Channel Source Reporting',
    description:
      'With all channels in one pipeline, you can compare: which channel produces the most leads, which produces the highest-value leads, and which has the best conversion rate. This data drives marketing investment decisions based on revenue, not just lead volume.',
    icon: Globe,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Capture Channels',
      action:
        'List every way a lead can contact you: website forms, phone, email, Facebook, Instagram, Google Business Profile, chat, walk-in, referral. For each channel, answer: does this create a CRM record? Is there automated follow-up? Can you measure conversion from this channel?',
      expectedResult:
        'A complete map of your lead channels showing which are tracked in CRM and which operate as blind spots.',
    },
    {
      step: 2,
      title: 'Connect Your Highest-Volume Untracked Channel',
      action:
        'Take the highest-volume channel that does not currently feed your CRM and connect it. For phone: set up call tracking with CRM integration. For social: connect Facebook/Instagram messaging to your CRM inbox. For chat: ensure chat transcripts sync to CRM contacts.',
      expectedResult:
        'Your biggest lead leak is closed. Leads from this channel now appear in CRM with follow-up automation.',
    },
    {
      step: 3,
      title: 'Standardise Data Across Channels',
      action:
        'Ensure every channel captures the same core data in CRM: contact name, contact method, service interest, source channel, and timestamp. Some channels provide this automatically. Others need configuration. The goal is consistent records regardless of how the lead arrived.',
      expectedResult:
        'Every lead in CRM has the same data structure regardless of source channel, enabling consistent follow-up and accurate reporting.',
    },
  ],
};

const caseExample = {
  businessType: 'Pest Control Company (Glasgow)',
  problem:
    'A pest control company received leads from 5 channels: phone (40%), website form (25%), Google Business Profile (15%), Facebook (10%), and email (10%). Only website form leads went to CRM. Phone leads were on paper. The other channels were checked manually. The company believed they had 25 leads per week — the actual number was 42.',
  solution:
    'We unified all channels into one CRM pipeline: call tracking numbers for phone, GBP message integration, Facebook Messenger connection, email parsing, and website forms already connected. Each channel was tagged for source reporting. Automated follow-up triggered on all channels.',
  result:
    'Visible lead volume increased from 25 to 42 per week. The 17 previously invisible leads converted at 29% once they received systematic follow-up. Monthly revenue increased by £3,400 from leads that were already arriving but not being tracked.',
  stat: '68% increase in visible lead volume through multi-channel capture',
};

const faqs = [
  {
    question: 'Do I need to respond on the same channel the lead used?',
    answer:
      'Ideally, yes — at least for the first response. Someone who messages on Facebook expects a Facebook reply. After initial contact, you can move the conversation to phone or email. The CRM should support responding on the original channel.',
  },
  {
    question: 'How do I handle walk-in leads?',
    answer:
      'Train your front desk or field team to enter walk-in leads into CRM immediately. Some businesses use a tablet at reception with a quick-entry form. The key is that walk-ins enter the same pipeline as digital leads so they receive the same follow-up process.',
  },
  {
    question: 'Is it worth tracking low-volume channels?',
    answer:
      'Yes, if those channels exist. Even 2-3 leads per week from a channel add up to 100-150 per year. More importantly, you cannot measure a channel value until it is tracked. Some businesses discover their lowest-volume channel produces their highest-value leads.',
  },
  {
    question: 'What data should every channel capture at minimum?',
    answer:
      'At minimum, capture contact details, source channel, timestamp, service intent, and ownership of the next step. Without those fields, leads cannot be routed, reported on, or followed up consistently. Richer channels can capture more, but every channel needs the same minimum operational dataset.',
  },
];

const finalCta = {
  title: 'Capture Every Lead From Every Channel',
  description:
    'Our AI Lead Handling system unifies phone, web, chat, and social leads into one CRM pipeline with automated follow-up on every channel. No lead falls through the cracks.',
};

export const multiChannelLeadCaptureSystems: ResourceData = {
  slug,
  title: 'Multi-Channel Lead Capture Systems',
  description:
    'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-20',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['lead-capture'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Multi-Channel Lead Capture Systems',
    description:
      'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Multi-Channel Lead Capture Systems',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Hidden Cost of Fragmented Lead Capture',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs of Fragmented Capture:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Principles of effective multi-channel lead capture:'],
      items: takeaways,
    },
    {
      type: 'solution-cards',
      heading: 'Multi-Channel Capture Architecture',
      content: [
        'One Pipeline, Every Channel',
        'A unified capture system ensures every lead enters the same pipeline regardless of how they reached you:',
      ],
      benefit:
        'When all channels feed one pipeline, you see your true lead volume and can measure which channels produce the most valuable customers.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'Fragmented vs Unified Lead Capture',
      content: ['The difference between tracking some channels and tracking all channels:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How unified multi-channel capture revealed hidden lead volume:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Unify Your Lead Capture Channels',
      content: ['Start closing your capture gaps with these steps:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about multi-channel lead capture:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/ai-lead-handling',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('ai-lead-handling'),
      content: getRelatedResourcesContent('ai-lead-handling'),
      resources: getRelatedResources('ai-lead-handling', canonical),
    },
  ],
};
