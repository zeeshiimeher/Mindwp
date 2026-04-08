import { Clock, GitBranch, MessageSquare, Search, ShieldCheck, Star } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

export const reviewAutomationSystemPage = {
  slug: 'review-automation-system',
  systems: ['reputation-review', 'smart-website-systems'],
  topics: ['review-automation', 'review-generation'],
  keywords: [
    'review automation system',
    'google review request automation',
    'review generation workflow',
    'customer feedback automation',
    'how to automate google review requests',
  ],
  badge: 'Review Automation System',
  category: 'Trust Systems',
  seo: {
    title: 'Review Automation System | Consistent review requests for service businesses',
    description:
      'Review automation for service businesses that need more consistent review requests, clearer feedback routing, and better trust signals without relying on manual follow-up.',
    canonical: '/services/review-automation-system',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Review automation system for service businesses',
        description:
          'A structured review automation system covering request timing, customer feedback flows, negative feedback routing, and consistent review generation.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/review-automation-system',
      },
    },
  },
  hero: {
    badge: 'Trust Workflow Layer',
    title:
      'Review automation works when timing and routing are part of the process, not an afterthought',
    description:
      'This service focuses on the review-request workflow itself. It helps service businesses ask more consistently, route unhappy feedback more intelligently, and improve review velocity without depending on manual chasing.',
    primaryAction: {
      label: 'Start a Conversation',
      href: buildContactHref({
        system: 'reputation-review',
        sourceType: 'service',
        slug: 'review-automation-system',
      }),
    },
    list: [
      'Consistent review requests at the right time',
      'Cleaner handling of negative feedback before it goes public',
      'Stronger review velocity without over-messaging customers',
    ],
    cssPrefix: 'review-automation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why manual review requests fail',
      title: 'Most review requests fail because the timing and follow-up are inconsistent',
      description:
        'Review automation improves results by creating clearer timing, channel choice, and internal handling — not by simply sending more requests.',
      painPoints: [
        {
          before: 'Staff ask for reviews only when they remember, so good moments are missed.',
          after:
            'Request timing is tied to the right delivery stage so more good-fit customers are asked consistently.',
        },
        {
          before:
            'Everyone gets the same message regardless of channel, service type, or experience.',
          after:
            'The workflow adapts to customer context so requests feel more natural and relevant.',
        },
        {
          before: 'Unhappy customers are pushed into the same public review path as happy ones.',
          after:
            'Negative feedback can be routed internally first so issues are handled earlier and more carefully.',
        },
      ],
    },
    workflowLayer: {
      badge: 'What the system covers',
      title: 'The review automation layer usually includes three practical parts',
      description:
        'This is the operational workflow beneath the wider reputation strategy. It focuses on request timing, follow-up logic, and issue routing.',
      cards: [
        {
          title: 'Request timing rules',
          description:
            'Define when a customer should be asked based on service completion, satisfaction point, or delivery milestone.',
          points: ['Post-service timing logic', 'Stage-based triggers', 'Customer-fit filtering'],
          featured: true,
        },
        {
          title: 'Follow-up sequences',
          description:
            'Use reminders carefully so requests stay consistent without making the business feel repetitive or pushy.',
          points: [
            'Controlled reminder cadence',
            'Channel-aware follow-up',
            'Stop rules to avoid over-messaging',
          ],
        },
        {
          title: 'Feedback routing',
          description:
            'Direct unhappy feedback into the right internal path before it becomes unmanaged public damage.',
          points: [
            'Internal escalation routes',
            'Ownership and visibility',
            'Issue-handling before review fallout',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Why this matters',
      title: 'Review automation is not about volume alone. It is about controlled trust-building.',
      description:
        'A review workflow should create more consistency, not more noise. The goal is stronger review velocity, cleaner issue handling, and trust signals that support the wider business.',
      tagline: 'Ask more consistently. Route better. Protect trust.',
      narrativeTitle:
        'A focused review workflow can improve trust quickly when the business already delivers well',
      narrativeParagraphs: [
        'This is especially useful for businesses that already do solid work but fail to capture that trust publicly because follow-up is weak or inconsistent.',
        'It also supports Local SEO and the wider Reputation & Review Systems page — because review recency, volume, and response quality often shape how prospects judge the business before they get in touch.',
      ],
      features: [
        {
          title: 'Better review velocity',
          description:
            'More of the right customers are asked in a repeatable way instead of relying on memory.',
          icon: Star,
        },
        {
          title: 'Less public trust leakage',
          description:
            'Unhappy experiences are more likely to be routed internally before they become public friction.',
          icon: GitBranch,
        },
        {
          title: 'Clearer support for local trust',
          description:
            'The workflow helps maintain fresher, more consistent review signals that support local credibility.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'Workflow sequence',
      title: 'How the review automation system is set up',
      description:
        'The details vary by business, but the logic follows a clear sequence so requests and feedback do not happen randomly.',
      steps: [
        {
          number: '1',
          title: 'Define the review moments',
          description:
            'Identify the stages where customers are most likely to respond positively and meaningfully.',
        },
        {
          number: '2',
          title: 'Set the request path',
          description:
            'Choose the message flow, channel, and timing so the request process stays consistent.',
        },
        {
          number: '3',
          title: 'Create feedback routing rules',
          description:
            'Separate review requests from issue handling so unhappy responses can be handled properly.',
        },
        {
          number: '4',
          title: 'Refine based on results',
          description:
            'Watch response rates, review quality, and friction points, then adjust the workflow over time.',
        },
      ],
    },
    capabilitySection: {
      badge: 'Common workflow components',
      title: 'What can sit inside a review automation setup',
      description:
        'This page stays focused on the request workflow itself, but the implementation can still include several supporting layers depending on the business model.',
      services: [
        {
          title: 'Request logic and sequencing',
          icon: Clock,
          items: [
            'Stage-based review triggers',
            'Timing rules by service type',
            'Reminder logic with stop conditions',
            'Customer segmentation for review requests',
          ],
        },
        {
          title: 'Message and channel handling',
          icon: MessageSquare,
          items: [
            'SMS or email request pathways',
            'Channel-specific wording',
            'Simple follow-up message sequences',
            'Consistent request delivery',
          ],
        },
        {
          title: 'Feedback protection and governance',
          icon: ShieldCheck,
          items: [
            'Negative feedback routing',
            'Escalation visibility',
            'Owner-based follow-up tasks',
            'Review workflow reporting and refinement',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best for businesses that need a cleaner review-request workflow specifically. It is narrower than the wider Reputation & Review Systems page.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses with inconsistent review follow-up',
          description:
            'A strong fit when good customer experiences are happening but the business is not capturing them consistently.',
        },
        {
          title: 'Teams that need a focused trust workflow first',
          description:
            'Useful when the review-request process is the obvious bottleneck and a broader reputation system can come later.',
        },
        {
          title: 'Businesses where local trust matters commercially',
          description:
            'A practical fit when review quality and recency influence whether prospects choose to enquire.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses looking only for more traffic',
          description:
            'If the main issue is discovery rather than trust, Local SEO or website clarity may be the stronger first move.',
        },
        {
          title: 'Teams that want review volume without service accountability',
          description:
            'Automation helps consistency, but it cannot hide poor service delivery or unresolved customer issues.',
        },
        {
          title: 'Businesses needing the full reputation stack immediately',
          description:
            'If monitoring, response strategy, and reputation oversight are all weak, the broader Reputation & Review Systems page may be the better primary fit.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about review automation',
      description:
        'Questions that come up when businesses want more reviews without relying on manual chasing.',
      faqs: [
        {
          question: 'Can this be added without changing everything else?',
          answer:
            'Often yes. Review automation can be introduced as a focused workflow layer first, especially when the service delivery is already solid and the missing piece is consistent follow-up.',
        },
        {
          question: 'Will this improve Google reviews specifically?',
          answer:
            'It often can, because Google review requests are a common use case. But the bigger goal is a repeatable system that improves trust capture and feedback routing in a controlled way.',
        },
        {
          question: 'How is this different from the main reputation page?',
          answer:
            'This page focuses specifically on the review-request workflow. The broader Reputation & Review Systems page covers the larger trust layer, including monitoring, response discipline, and reputation management more broadly.',
        },
      ],
      cssPrefix: 'review-automation-faq',
    },
  },
  related: {
    variant: 'domain-only',
    title: 'Related trust and visibility pages',
    description:
      'Review automation usually supports wider reputation, local trust, and conversion systems.',
  },
  cta: {
    title: 'Make review requests part of the process',
    description:
      'If reviews are being left to memory and manual follow-up, we can help structure a cleaner review automation workflow.',
    buttonText: 'Start a Conversation',
    buttonHref: buildContactHref({
      system: 'reputation-review',
      sourceType: 'service',
      slug: 'review-automation-system',
    }),
  },
} satisfies ServicePageData;
