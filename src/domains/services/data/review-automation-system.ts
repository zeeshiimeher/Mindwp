import { Clock, GitBranch, MessageSquare, Search, ShieldCheck, Star } from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'review-automation-system';

export const reviewAutomationSystemPage = {
  slug,
  systems: ['reputation-review'],
  topics: ['review-automation', 'review-generation', 'negative-review-response'],
  keywords: [
    'review automation system',
    'google review request automation',
    'review generation workflow',
    'customer feedback automation',
    'how to automate google review requests',
  ],
  badge: 'Review Automation System',
  category: 'Trust Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Get More Google Reviews on Autopilot | For Service Businesses',
    description:
      'Stop chasing customers for reviews. We set things up so happy customers get asked at the right time, bad experiences are caught early, and your review count keeps climbing.',
    schemaName: 'Automated review collection for service businesses',
    schemaDescription:
      'A done-for-you setup that sends review requests after every job, catches unhappy customers before they post publicly, and keeps fresh Google reviews coming in without anyone chasing.',
  }),
  hero: {
    badge: 'Reviews on Autopilot',
    title:
      'Get more 5-star reviews without asking every customer yourself',
    description:
      'Your team does great work — but happy customers walk away without leaving a review. We set things up so they get asked right after a good experience, when they\'re most likely to say yes.',
    primaryAction: {
      label: CTA_LABELS.REVIEW_SYSTEMS,
      href: buildServiceContactHref({
        system: 'reputation-review',
        slug: 'review-automation-system',
      }),
    },
    list: [
      'Happy customers get a friendly ask right after the job is done',
      'If someone\'s unhappy, they tell you privately — not Google',
      'Your review count goes up every month without your team lifting a finger',
    ],
    cssPrefix: 'review-automation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'The real problem',
      title: 'You do great work — but your reviews don\'t show it',
      description:
        'Most businesses lose reviews because nobody remembers to ask. Here\'s what actually happens — and what changes when you stop relying on memory.',
      painPoints: [
        {
          before: 'Your team finishes a job, the customer says thanks, and everyone moves on. A week later, nobody\'s asked for a review and the moment\'s gone.',
          after:
            'The customer gets a short, friendly message the same day — while they still remember how good the job was.',
        },
        {
          before:
            'Every customer gets the same generic email, whether they loved the work or had a complaint.',
          after:
            'Happy customers get pointed toward Google. Someone who had a problem gets a private message so you can sort it out first.',
        },
        {
          before: 'A frustrated customer posts a one-star review on Google before you even know there was an issue.',
          after:
            'If someone\'s unhappy, they\'re asked to share their feedback with you directly — giving you a chance to fix it before it goes public.',
        },
      ],
    },
    workflowLayer: {
      badge: 'How it works',
      title: 'Three things that keep your reviews growing on their own',
      description:
        'Once this is set up, your team doesn\'t need to remember anything. The right people get asked, the reminders go out, and complaints are caught early.',
      cards: [
        {
          title: 'Ask while they\'re still smiling',
          description:
            'The review request goes out right after the job is done — when the customer is happiest and most likely to write something nice.',
          points: ['Sent the same day the job is finished', 'Timed so it lands while the experience is still fresh', 'Only goes to customers who had a good experience'],
          featured: true,
        },
        {
          title: 'A gentle nudge, then it stops',
          description:
            'If they don\'t respond the first time, one or two friendly reminders go out. After that, it stops. Nobody gets pestered.',
          points: [
            'One or two friendly nudges',
            'Sent through the channel they prefer',
            'Stops automatically so you never over-ask',
          ],
        },
        {
          title: 'Catch complaints before they hit Google',
          description:
            'If a customer had a bad experience, they\'re asked to share it with you directly instead of posting it publicly. You see it, you fix it, and it stays between you.',
          points: [
            'Unhappy customers reach your team first',
            'You see the issue and can act fast',
            'Problems get fixed before they become bad reviews',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Why it matters',
      title: 'More reviews means more trust. More trust means more customers.',
      description:
        'People check your reviews before they call. When your reviews are fresh, frequent, and genuine — they pick you over the competition.',
      tagline: 'More reviews. Less chasing. Stronger reputation.',
      narrativeTitle:
        'Your work is already good — your reviews just don\'t show it yet',
      narrativeParagraphs: [
        'Most of the businesses we work with already get compliments from customers. The problem is none of that makes it to Google — because asking for reviews is the kind of thing that always gets pushed to tomorrow.',
        'Once the asks start going out after every job, your review count climbs and Google starts paying attention. More recent reviews means you show up higher in local search. And when people see a business with 50 fresh reviews versus one with 8 from three years ago — they pick the one that looks active.',
      ],
      features: [
        {
          title: 'Reviews keep coming in, month after month',
          description:
            'You\'re not relying on memory or one-off campaigns. Every job triggers an ask, so the reviews stack up over time.',
          icon: Star,
        },
        {
          title: 'Bad experiences stay between you and the customer',
          description:
            'If someone\'s unhappy, they share it with you directly — not in a one-star review that everyone can see. You get a chance to put it right.',
          icon: GitBranch,
        },
        {
          title: 'Show up higher in local search',
          description:
            'Google notices when you have recent, genuine reviews. The more you have, the more likely people nearby will see your business when they search.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'Step by step',
      title: 'How we set it up for your business',
      description:
        'Every business is different, but the steps are straightforward. Here\'s what happens once we get started.',
      steps: [
        {
          number: '1',
          title: 'We figure out when to ask',
          description:
            'We look at when your customers are happiest — right after a job, after a delivery, after an appointment — and that\'s when the ask goes out.',
        },
        {
          number: '2',
          title: 'We write the messages',
          description:
            'Short, friendly messages that sound like they came from you. Sent by text, email, or both — whatever works for your customers.',
        },
        {
          number: '3',
          title: 'We build a safety net for complaints',
          description:
            'If someone\'s not happy, they\'re guided to contact you directly. Your team sees the issue and can act before it ends up on Google.',
        },
        {
          number: '4',
          title: 'We keep improving it',
          description:
            'We check what\'s getting responses and what isn\'t, then adjust the timing, the wording, and the follow-ups to keep results climbing.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What\'s included',
      title: 'Everything that goes into your review setup',
      description:
        'We handle the full setup so you don\'t need to piece things together yourself. Here\'s what a typical review automation package looks like.',
      services: [
        {
          title: 'Smart timing',
          icon: Clock,
          items: [
            'Review requests go out the same day the job is finished',
            'Different services can have different timing',
            'Reminders stop on their own — nobody gets pestered',
            'Only customers who had a good experience get asked',
          ],
        },
        {
          title: 'Messages that actually get replies',
          icon: MessageSquare,
          items: [
            'Sent by text, email, or both — whatever suits your customers',
            'Written in your voice, not a corporate template',
            'Short follow-ups that feel friendly, not nagging',
            'Every customer gets asked — nobody slips through the cracks',
          ],
        },
        {
          title: 'Complaint catching',
          icon: ShieldCheck,
          items: [
            'Unhappy customers are asked to share feedback with you directly',
            'Your team sees the issue straight away',
            'Clear next steps so nothing sits there ignored',
            'We review what\'s working and adjust regularly',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'This is for businesses that want more Google reviews coming in without chasing every customer yourself. If you need a bigger reputation overhaul — monitoring, responding to reviews, managing your online image across multiple platforms — our full Reputation & Review service might be a better starting point.',
      strongFitTitle: 'Great fit if',
      notDesignedTitle: 'Probably not the right fit if',
      strongFitItems: [
        {
          title: 'You do solid work but Google doesn\'t show it',
          description:
            'Customers tell you how great the job was — then walk away without leaving a review. Your Google profile doesn\'t reflect the work you actually do.',
        },
        {
          title: 'You want reviews to come in on their own',
          description:
            'You don\'t want a massive reputation project. You just want happy customers to actually leave reviews without you having to chase every one.',
        },
        {
          title: 'People check your reviews before they call',
          description:
            'In your industry, the business with more recent, genuine reviews gets the call. You want to be that business.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Your main problem is that people can\'t find you',
          description:
            'If the issue is visibility — not enough people landing on your site — then Local SEO or improving your website will help more than review collection.',
        },
        {
          title: 'Your customer experience has gaps',
          description:
            'Asking for reviews only works when the work is already good. If customers regularly have problems, fixing the experience comes first.',
        },
        {
          title: 'You need full reputation management across platforms',
          description:
            'If you also need help monitoring what people say about you online, responding to reviews publicly, and managing your image across multiple sites — our broader reputation service covers that.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about getting more reviews',
      description:
        'Straight answers to what people want to know before we start.',
      faqs: [
        {
          question: 'Do I need to change anything about how I run my business?',
          answer:
            'No. Everything runs around how you already work. Your team finishes a job the same way they always do — the review request goes out on its own after that.',
        },
        {
          question: 'Will this actually help me get more Google reviews?',
          answer:
            'Yes. Most businesses see a noticeable jump because customers are being asked right after a good experience — when they\'re happy and it only takes a minute to respond.',
        },
        {
          question: 'How is this different from your full reputation service?',
          answer:
            'This focuses purely on getting more reviews coming in. If you also need help with monitoring what people say about you, responding to reviews, and managing your overall online reputation, our broader service covers all of that.',
        },
      ],
      cssPrefix: 'review-automation-faq',
    },
  },
  cta: {
    title: 'Want more reviews without the chasing?',
    description:
      'If your customers are happy but your Google reviews don\'t show it, let\'s sort that out. We\'ll set things up so the asks go out on their own and the reviews start rolling in.',
  },
} satisfies ServicePageData;
