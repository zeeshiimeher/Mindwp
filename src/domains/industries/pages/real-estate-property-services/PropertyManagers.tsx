import {
  Building2,
  ClipboardList,
  Inbox,
  KeyRound,
  Mail,
  MessageCircle,
  Search,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPropertyManagersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Property Managers',
    title:
      'A Landlord With Eight Doors Emailed Three Agencies On Sunday Night. By Monday Lunchtime, Two Had Replied.',
    description:
      'Landlords usually compare agencies quietly before they move a portfolio, and they notice speed immediately. A slow reply, no update on a tenant issue, or another month of hearing nothing can do more damage than one big mistake because it makes the whole relationship feel unattended.',
    list: ['Late replies', 'No updates', 'Quiet exits'],
    cssPrefix: 'property-managers-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Doors Quietly Walk',
    title: 'Portfolios are not lost in a single moment. They erode in unanswered messages.',
    description:
      'Most landlords do not announce that they are losing confidence. They compare, wait for replies, and keep score on the small communication moments that make a portfolio feel steady or neglected.',
    benefits: [
      {
        icon: Inbox,
        title: 'The landlord enquiry sat all weekend',
        description:
          'They emailed on Sunday night after another week of frustration and started comparing by Monday morning. By the time you saw it in the afternoon, they had already booked a call with the agency that replied first and sounded more present.',
        iconType: 'primary' as const,
      },
      {
        icon: Wrench,
        title: 'A tenant issue went two days without an update',
        description:
          "The issue was on someone's list and a contractor was being chased, but the tenant heard nothing in the meantime. Two days without an update feels like nobody owns it, and that trust is hard to rebuild once it slips.",
        iconType: 'secondary' as const,
      },
      {
        icon: ClipboardList,
        title: 'The landlord never hears unless something is wrong',
        description:
          "Quiet months do not always feel calm to a landlord. They often feel like neglect unless somebody says otherwise, and that is exactly when another agency's tidy monthly update can start looking more reassuring.",
        iconType: 'accent' as const,
      },
      {
        icon: KeyRound,
        title: 'A renewal slipped past the window',
        description:
          'The renewal conversation should have started before notice was even on the table, but it did not. By the time the tenant served notice, the avoidable void already felt like something the agency had simply not stayed ahead of.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'Two Months In The Same Portfolio',
    title: 'Same doors. Same tenants. Two completely different landlord experiences.',
    description:
      'The underlying work may be similar in both cases, but the experience is not. What changes is whether the landlord has to chase for certainty and whether the tenant is left wondering what is actually happening.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it feels now',
        items: [
          'New landlord enquiries get a reply when someone has time, not by Monday morning.',
          'Tenants log issues and then sit with no update for days.',
          'Landlords only hear from you when there is bad news.',
          'Renewals get noticed when the notice arrives, not before.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it feels with the basics held',
        items: [
          'Every new landlord enquiry is acknowledged the same hour, by name.',
          'Tenants get an automatic update the moment a contractor is booked.',
          'Landlords get a short, scheduled portfolio note even in quiet months.',
          'Renewal windows are flagged early, with a script for the conversation.',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Reliability the landlord can feel, without growing the team',
    description:
      'You keep running the portfolio itself. The communication moments that decide whether a landlord stays, whether a tenant trusts you, and whether a renewal gets rescued stop relying on whoever happened to notice the inbox first.',
    featureCategories: [
      {
        title: 'Acknowledge new landlord enquiries the same hour',
        description:
          'A warm, named reply goes back inside the hour, even on a Sunday evening enquiry. That matters because landlords comparing agencies are often still waiting to see who takes them seriously first.',
        icon: MessageCircle,
        features: [
          'Same-hour acknowledgement',
          'Portfolio size and intent captured up front',
          'Routed to the right portfolio manager',
        ],
      },
      {
        title: 'Keep tenants in the loop without extra calls',
        description:
          'Status updates go out automatically as a maintenance ticket moves, so the tenant is not left waiting in silence. That removes a lot of the frustration that usually gets blamed on the team even when the work itself is in hand.',
        icon: Wrench,
        features: [
          'Auto-update when a contractor is booked',
          'Auto-update when work is completed',
          'Tenant satisfaction tracked, not assumed',
        ],
      },
      {
        title: 'Send the landlord update they never had to ask for',
        description:
          'A short, scheduled portfolio note goes out even when nothing dramatic has happened. That stops the relationship from drifting into one where the landlord only hears from you when something has already gone wrong.',
        icon: Mail,
        features: [
          'Monthly or quarterly cadence per landlord',
          'Standard template, personalised content',
          'Quiet months feel held, not forgotten',
        ],
      },
      {
        title: 'See the renewal before the notice',
        description:
          'Renewal windows get surfaced early enough for the right conversation to happen before notice appears. That makes voids less likely to arrive as an avoidable surprise everyone saw too late.',
        icon: ShieldCheck,
        features: [
          'Renewal flag at the right point',
          'Tenant and landlord conversation tracked',
          'Voids reduced because nobody forgot',
        ],
      },
      {
        title: 'Be findable for the right kind of landlord',
        description:
          'Pages and search visibility line up around portfolio size, area, and property type instead of generic letting language. That helps the right kind of landlord find you at the point they have started comparing alternatives.',
        icon: Search,
        features: [
          'Found for area + portfolio profile',
          'Pages that read as a specialist',
          'Fewer enquiries that are not a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once a property manager sees how much trust is being won or lost through communication. They reinforce replies, updates, proof, and landlord visibility from different sides.',
    cards: [
      {
        icon: Users,
        title: 'CRM & Tenant Communication',
        description:
          'Keeps tenant updates moving so people stop chasing for basic information and the review picture stops being dragged down by silence.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Building2,
        title: 'Smart Website Systems',
        description:
          'Helps you catch landlord enquiries the same hour, even at the weekend, before they finish comparing the next agency on the list.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: ShieldCheck,
        title: 'Reputation & Review Systems',
        description:
          'Builds a review base that more accurately reflects how the portfolio runs when communication is handled properly and people are not left chasing.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps you show up as the agency landlords find for the area and portfolio type you actually want to manage, not just as another generic local listing.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things property managers usually ask',
    description:
      'These are the practical questions that usually come up in a busy lettings or block management team where landlords expect certainty and tenants expect updates. Straight answers, written around that pressure.',
    faqs: [
      {
        question: 'Will tenants feel they are getting robotic messages?',
        answer:
          'No. Updates are short, named, and only fire when something has actually happened — a contractor booked, work completed, an inspection scheduled. The tone is human, not portal.',
      },
      {
        question: 'How does this work with our property management software?',
        answer:
          'It sits alongside it. Maintenance tickets, renewals, and tenant comms feed in. The system of record stays where it is.',
      },
      {
        question: 'Will landlords actually open scheduled updates?',
        answer:
          'They open them more than you think — because they are short, relevant, and arrive in quiet months when most agencies say nothing.',
      },
      {
        question: 'Can it handle portfolios of different sizes?',
        answer:
          'Yes. Cadence and content can flex per landlord. A single-door owner does not get the same note as a thirty-door portfolio.',
      },
      {
        question: 'Do we need a new website?',
        answer:
          'Usually not. The biggest lift is in landlord acknowledgement and tenant updates, not in the homepage.',
      },
    ],
  };

  return {
    seo: {
      title: 'Property Managers — Stop Losing Doors To Slow Replies And Silent Months | MindWP',
      description:
        'For property managers where landlords leave because they got tired of chasing and tenants leave because nobody updated them. We put landlord acknowledgement, tenant updates, and renewal visibility in place so the portfolio stops eroding quietly.',
      canonical: '/industries/real-estate-property-services/property-managers',
    },
    slug: 'property-managers',
    industries: ['property-management'],
    systems: [
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['follow-up', 'lead-qualification', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us where the portfolio is leaking',
        description:
          'If landlords keep chasing for certainty or tenants are left waiting with no update, walk us through a normal month and we will show you which gap is costing the most doors.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const propertyManagersIndustryPageData: IndustryPageData =
  buildPropertyManagersIndustryPageData();
