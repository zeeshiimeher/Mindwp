import {
  BarChart3,
  Bell,
  CheckCircle2,
  Mail,
  MessageSquare,
  Shield,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { FeaturePageData } from '../types';

const reputationFaqItems = [
  {
    question: 'How does the negative feedback filter work?',
    answer:
      "When you send a review request, customers first rate their experience 1-5 stars privately. If they give 4-5 stars, they're directed to leave a public review on Google/Facebook. If 1-3 stars, they're sent to a private feedback form where you can address issues before they become public reviews.",
  },
  {
    question: 'Which review platforms are supported?',
    answer:
      'We support Google, Facebook, Yelp, Trustpilot, and more. You can customize which platforms to prioritize based on your industry. Most businesses focus on Google since it impacts local search rankings the most.',
  },
  {
    question: 'Will customers actually leave reviews?',
    answer:
      'Yes! Making it easy and asking at the right time dramatically increases review rates. Our clients typically see 10-20% of customers leave reviews when requested, versus 1-2% without automation.',
  },
  {
    question: 'Is this compliant with review platform policies?',
    answer:
      "Absolutely. We follow all platform guidelines. You're allowed to ask customers for reviews - you just can't incentivize them or only ask happy customers. Our system requests reviews from everyone and makes the process easier.",
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most businesses see their first automated reviews within 1-2 weeks. Full reputation improvement typically takes 2-3 months of consistent review collection.',
  },
  {
    question: 'Can I customize the review request messages?',
    answer:
      'Yes, you can fully customize email and SMS templates to match your brand voice and include specific instructions for different services.',
  },
  {
    question: 'What if a customer leaves a negative review?',
    answer:
      'Our system monitors all reviews and alerts you immediately. You can respond professionally and use the private feedback to improve your service.',
  },
  {
    question: 'How does this affect my online visibility?',
    answer:
      'Positive reviews improve your local search rankings, especially on Google. More reviews and higher ratings make your business more visible to potential customers.',
  },
  {
    question: 'Can I track review response times?',
    answer:
      'Yes, the dashboard shows response times and provides templates for quick, professional responses to all reviews.',
  },
  {
    question: 'Is there a limit to how many reviews I can collect?',
    answer:
      'No limits! You can collect unlimited reviews. We recommend sending requests after every service completion for maximum impact.',
  },
];

export const reputationData: FeaturePageData = {
  slug: 'reputation',
  systems: ['reputation-review', 'local-seo-authority'],
  topics: ['review-generation', 'negative-review-response'],
  seo: {
    title: 'Reputation | Structured Review Management Layer',
    description:
      'Structured review management for requesting, tracking, and responding to customer feedback across key platforms.',
    canonical: '/features/reputation',
    schema: {
      primary: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Reputation',
        description:
          'Structured review management for requesting, tracking, and responding to customer feedback across key platforms.',
        url: '/features/reputation',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        publisher: {
          '@type': 'Organization',
          name: 'MindWP',
          url: 'https://mindwp.com',
        },
      },
    },
  },
  hero: {
    badge: 'Reputation Management',
    title: 'Structured review management for consistent trust',
    description:
      'Systematically request reviews after completed services and manage feedback across key platforms. Designed to support visibility, credibility, and consistent follow-up.',
    primaryAction: {
      label: 'Understand How Review Automation Works',
      href: buildContactHref({
        system: 'reputation-review',
        sourceType: 'feature',
        slug: 'reputation',
      }),
    },
    stats: [
      { value: '10x', label: 'More Reviews' },
      { value: '4.8+', label: 'Avg. Star Rating' },
      { value: '95%', label: 'Response Rate' },
      { value: 'Auto', label: 'Review Requests' },
    ],
  },
  sections: {
    process: {
      badge: 'Simple Process',
      title: 'How structured review management works',
      description: 'A simple, repeatable flow from completed service to tracked feedback.',
      steps: [
        {
          icon: Users,
          number: '01',
          title: 'Service Completed',
          description: 'Customer completes appointment or receives service.',
          iconType: 'primary' as const,
        },
        {
          icon: Mail,
          number: '02',
          title: 'Review Request Sent',
          description: 'Automated email/SMS asks customers to leave a review.',
          iconType: 'secondary' as const,
        },
        {
          icon: Star,
          number: '03',
          title: 'Leave a Review',
          description: 'Customer clicks a link to leave a review on supported platforms.',
          iconType: 'primary' as const,
        },
        {
          icon: TrendingUp,
          number: '04',
          title: 'Reputation Updated',
          description: 'New reviews appear in your dashboard for tracking and response.',
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Key Advantages',
      title: 'What structured review management supports',
      description:
        'Clear feedback collection, stronger credibility, and improved local visibility over time.',
      items: [
        {
          icon: Star,
          title: 'Build Reputation',
          description: 'Request and collect reviews from customers automatically.',
          iconType: 'primary' as const,
        },
        {
          icon: Bell,
          title: 'Review Alerts',
          description: 'Get notified of new reviews and respond from your dashboard.',
          iconType: 'secondary' as const,
        },
        {
          icon: BarChart3,
          title: 'Track Reviews',
          description: 'Monitor your average rating and review trends.',
          iconType: 'primary' as const,
        },
        {
          icon: Shield,
          title: 'Feedback Management',
          description: 'Collect private feedback to address issues before they go public.',
          iconType: 'secondary' as const,
        },
        {
          icon: TrendingUp,
          title: 'Increase Visibility',
          description: 'More reviews improve your local search rankings and attract new customers.',
          iconType: 'primary' as const,
        },
        {
          icon: Users,
          title: 'Customer Insights',
          description: 'Gain valuable insights from customer feedback to improve your services.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'Feature in Practice',
      title: 'Where review systems make a difference',
      description: 'Examples of how structured review requests support daily operations.',
      solutionLabel: 'Review Solution',
      items: [
        {
          icon: Star,
          title: 'New Business Reviews',
          scenario: 'A new business needs to build credibility with reviews.',
          solution: 'Send review requests after each service to collect feedback.',
          result: 'Credibility established with consistent reviews.',
        },
        {
          icon: Shield,
          title: 'Reputation Protection',
          scenario: 'A customer has a negative experience.',
          solution: 'Direct negative feedback to a private form for resolution.',
          result: 'Issues resolved privately, reputation protected.',
        },
        {
          icon: TrendingUp,
          title: 'Consistent Growth',
          scenario: 'Business wants to increase review volume over time.',
          solution: 'Automated requests make it easy for customers to leave reviews.',
          result: 'Steady increase in reviews and trust.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'What is included',
      description: 'Core tools for requesting, tracking, and responding to reviews.',
      featureCategories: [
        {
          icon: Star,
          title: 'Review Generation',
          description: 'Automate review requests across multiple platforms with smart timing',
          features: [
            'Automated review requests',
            'Multi-platform (Google, Facebook, Yelp)',
            'Customizable email/SMS templates',
            'Smart timing optimization',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Shield,
          title: 'Reputation Protection',
          description: 'Protect your online reputation with private feedback and quick responses',
          features: [
            'Negative feedback filter',
            'Private feedback collection',
            'Review monitoring alerts',
            'Quick response tools',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: BarChart3,
          title: 'Analytics & Display',
          description: 'Track and showcase your reputation with comprehensive analytics',
          features: [
            'Reputation dashboard',
            'Review widgets for website',
            'Competitor comparison',
            'Sentiment analysis',
          ],
          iconType: 'primary' as const,
        },
      ],
    },
    faq: {
      badge: 'Common Questions',
      title: 'Review Management Questions',
      description: 'Clear answers about how review requests and feedback handling work.',
      items: reputationFaqItems,
    },
    explore: {
      badge: 'Explore Related Features',
      title: 'Connect review management to the wider system',
      description: 'Review management works best when connected to CRM, chat, and booking systems.',
      cards: [
        {
          icon: MessageSquare,
          title: 'AI Chat',
          description: 'Intelligent conversational AI for instant customer engagement',
          href: '/features/aichat',
        },
        {
          icon: Users,
          title: 'CRM',
          description: 'Centralized contact and communication management',
          href: '/features/crm',
        },
        {
          icon: CheckCircle2,
          title: 'Calendars',
          description: 'Smart scheduling and appointment management system',
          href: '/features/calendars',
        },
      ],
    },
    testimonials: {
      badge: 'Success Stories',
      title: 'What businesses notice after implementing a review system',
      description: 'Examples of how structured review requests improve consistency and visibility.',
      items: [
        {
          quote:
            'Since implementing automated review requests, our Google rating has jumped from 4.2 to 4.8 stars. The best part is how easy it is - we just focus on great service and the system handles the rest.',
          author: 'Sarah Johnson',
          business: 'Beautiful Hair Studio',
          rating: 5,
        },
        {
          quote:
            "The review management system has been a game-changer for our restaurant. We're getting 3x more reviews and our online reputation has never been stronger.",
          author: 'Mike Chen',
          business: 'Golden Dragon Restaurant',
          rating: 5,
        },
        {
          quote:
            'What I love most is how the system automatically follows up with customers. It takes the awkwardness out of asking for reviews and makes the whole process professional.',
          author: 'Dr. Emily Rodriguez',
          business: 'Rodriguez Dental',
          rating: 5,
        },
      ],
    },
  },
  cta: {
    title: 'Discuss structured review management',
    description:
      'We will review how reviews are requested, routed, and answered, then show you how to collect more proof with less manual chasing.',
    primaryAction: {
      label: 'Get More Reviews Consistently',
      href: buildContactHref({
        system: 'reputation-review',
        sourceType: 'feature',
        slug: 'reputation',
      }),
    },
  },
};
