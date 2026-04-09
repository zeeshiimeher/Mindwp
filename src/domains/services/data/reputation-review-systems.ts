import { AlertTriangle, Bell, GitBranch, MessageSquare, Search, Star } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

export const reputationReviewSystemsPage = {
  slug: 'reputation-review-systems',
  systems: ['reputation-review'],
  topics: [
    'review-generation',
    'review-automation',
    'reputation-monitoring',
    'customer-feedback',
    'negative-reviews',
    'feedback-loops',
  ],
  keywords: [
    'reputation management system for service businesses',
    'online review management for contractors',
    'automated review request system',
    'google review generation system',
    'customer feedback automation system',
  ],
  badge: 'Reputation & Review Systems',
  category: 'Trust Systems',
  seo: {
    title: 'Reputation & Review Systems | Structured trust-building for service businesses',
    description:
      'Structured reputation and review systems for service businesses that need consistent review requests, negative feedback routing, stronger trust signals, and clearer local credibility over time.',
    canonical: '/services/reputation-review-systems',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Reputation and review systems for service businesses',
        description:
          'Structured review-generation and reputation-management systems for service businesses, including request timing, negative feedback routing, monitoring logic, and trust-building workflows.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/reputation-review-systems',
      },
    },
  },
  hero: {
    badge: 'Trust-Building Infrastructure',
    title:
      'Reviews help more when they are part of a system, not something that happens by accident',
    description:
      'This service helps businesses build a clear review system around timing, feedback routing, response ownership, and trust signals. It works best when people are already finding the business but still hesitate to trust it.',
    primaryAction: {
      label: 'Review How Review Systems Work',
      href: buildContactHref({
        system: 'reputation-review',
        sourceType: 'service',
        slug: 'reputation-review-systems',
      }),
    },
    list: [
      'Consistent review requests without manual chasing',
      'Clear handling of negative feedback before it spreads',
      'Stronger trust signals that support enquiries and local credibility',
    ],
    cssPrefix: 'reputation-review-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why review efforts stall',
      title: 'Most businesses do not have a review problem. They have a review-system problem.',
      description:
        'The issue is rarely just asking more often. It is usually about timing, ownership, and having a clearer path for both good feedback and unhappy responses.',
      painPoints: [
        {
          before:
            'Reviews are requested only when someone remembers, so results stay inconsistent.',
          after:
            'Requests happen at the right moments with clearer timing, ownership, and follow-through.',
        },
        {
          before: 'Negative feedback appears too late because there is no internal routing path.',
          after:
            'Feedback can be captured, routed, and handled earlier — before it becomes a public trust problem.',
        },
        {
          before:
            'The business wants more trust online, but there is no logic behind the requests or responses.',
          after:
            'Reviews, responses, and monitoring work together as a system that supports credibility over time.',
        },
      ],
    },
    reviewSystem: {
      badge: 'Core system layers',
      title: 'The main parts of a reputation and review system',
      description:
        'The right setup depends on how customers interact with the business, when trust is earned, and how feedback should be handled internally before it becomes a public problem.',
      cards: [
        {
          title: 'Review request workflow',
          description:
            'A structured sequence for when and how customers are asked for feedback after the right stage of delivery.',
          points: [
            'Timing rules based on service completion',
            'Channel choice based on customer behaviour',
            'Follow-up logic without over-chasing',
          ],
          featured: true,
        },
        {
          title: 'Negative feedback routing',
          description:
            'A path for handling unhappy responses internally before they become unmanaged public trust issues.',
          points: [
            'Internal escalation paths',
            'Clear response ownership',
            'Consistency in how issues are handled',
          ],
        },
        {
          title: 'Monitoring and trust upkeep',
          description:
            'A regular process for watching review signals, spotting patterns, and maintaining credibility over time.',
          points: [
            'Review visibility tracking',
            'Response discipline',
            'Trust signals connected to wider marketing and local presence',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Positioning',
      title: 'Reputation management works best as an operating layer, not a marketing tactic',
      description:
        'This is not only about increasing star ratings. It is about making trust more consistent through better timing, better routing, and better response discipline.',
      tagline: 'Trust should be managed deliberately, not left to chance.',
      narrativeTitle: 'For many businesses, trust is the real conversion bottleneck',
      narrativeParagraphs: [
        'Some businesses mainly need a clear website and a reliable trust layer. If people already find the business but hesitate because reviews are weak, inconsistent, or unmanaged, reputation work can have immediate commercial value.',
        'It still works best inside a wider system. Review strength can support local SEO, conversion confidence, and repeat business — but only when it is tied to real operational moments and real customer journeys.',
      ],
      features: [
        {
          title: 'Better review velocity',
          description:
            'More good-fit customers are asked at the right time instead of relying on manual memory.',
          icon: Star,
        },
        {
          title: 'Cleaner issue handling',
          description:
            'Negative experiences are routed properly so the team can act before trust damage grows.',
          icon: AlertTriangle,
        },
        {
          title: 'Stronger local trust signals',
          description:
            'Review quality, recency, and response discipline reinforce credibility when prospects compare providers.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'How it works',
      title: 'How the reputation system is structured',
      description:
        'The workflow varies by business, but a useful reputation system follows a clear sequence so reviews and feedback do not feel random.',
      steps: [
        {
          number: '1',
          title: 'Identify the trust moments',
          description:
            'We define the right moments after service delivery, booking, purchase, or support where a request makes sense.',
        },
        {
          number: '2',
          title: 'Set request and routing logic',
          description:
            'The system decides what gets requested, what gets routed internally, and who needs to act next.',
        },
        {
          number: '3',
          title: 'Monitor and respond with ownership',
          description:
            'Review and feedback handling becomes clearer because responsibility is visible instead of scattered.',
        },
        {
          number: '4',
          title: 'Refine over time',
          description:
            'Patterns, response quality, and trust signals are reviewed so the process improves instead of staying static.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What can be included',
      title: 'Typical reputation-system components',
      description:
        'Not every business needs every component, but these are the main layers that usually matter when trust needs to be managed more deliberately.',
      services: [
        {
          title: 'Request and follow-up workflows',
          icon: Bell,
          items: [
            'Review request timing logic',
            'Channel-specific request flows',
            'Follow-up without over-messaging',
            'Segmentation by customer or service type',
          ],
        },
        {
          title: 'Feedback and escalation handling',
          icon: GitBranch,
          items: [
            'Negative feedback routing',
            'Escalation ownership',
            'Issue-handling steps before public fallout',
            'Internal visibility on trust risks',
          ],
        },
        {
          title: 'Reputation and response discipline',
          icon: MessageSquare,
          items: [
            'Review monitoring cadence',
            'Response-process standards',
            'Trust-signal upkeep',
            'Connection to wider local and conversion goals',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works well for businesses where trust, reviews, and customer perception are materially affecting enquiries.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Service businesses with weak or inconsistent reviews',
          description:
            'A good fit when the quality or frequency of reviews is clearly below the level the business should be generating.',
        },
        {
          title: 'Businesses where trust is the main blocker',
          description:
            'Useful when people are already finding the business but hesitating because social proof is thin, outdated, or unmanaged.',
        },
        {
          title: 'Owners who want a simpler first system',
          description:
            'A valid entry path when a business needs a clearer website and a reputation process before investing in broader system work.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses looking for fake or manipulative review tactics',
          description:
            'This is about structured trust-building, not shortcuts or artificial reputation inflation.',
        },
        {
          title: 'Teams unwilling to own customer experience issues',
          description:
            'A system can route and surface feedback, but it cannot replace operational accountability.',
        },
        {
          title: 'Cases where visibility is the bigger missing layer',
          description:
            'If the business is not being found in the first place, local visibility and website structure may need attention alongside or before reputation work.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about reputation systems',
      description:
        'Practical questions that come up when businesses realise trust is becoming a growth constraint.',
      faqs: [
        {
          question: 'Can this work without changing our whole website?',
          answer:
            'Yes, in some cases. A business can improve trust with a clearer reputation system even before larger website work happens, though the best results come when website clarity and reputation signals support each other.',
        },
        {
          question: 'Will this help us get more Google reviews?',
          answer:
            'Yes, that is often one outcome. But the better goal is a repeatable system that improves review consistency, issue handling, and public trust over time.',
        },
        {
          question: 'Do you also help with responses to reviews?',
          answer:
            'Yes. Response discipline is part of reputation management because public replies shape trust just as much as the rating itself.',
        },
        {
          question: 'Is this a standalone service or part of a wider system?',
          answer:
            'It can be either. Some businesses need this as a focused trust layer first, while others use it as part of a wider system that also includes local SEO, website improvements, or CRM follow-up.',
        },
      ],
      cssPrefix: 'reputation-review-faq',
    },
  },
  related: {
    variant: 'domain-only',
    title: 'Related trust, visibility, and growth pages',
    description:
      'Reputation systems often connect closely with visibility, website clarity, and follow-up systems.',
  },
  cta: {
    title: 'Make trust part of the system',
    description:
      'Tell us how reviews and feedback are handled now. We will show you how to collect more proof without extra manual chasing.',
  },
} satisfies ServicePageData;
