import React from 'react';
import {
  BarChart3,
  Code,
  Database,
  FileText,
  Gauge,
  Globe,
  LayoutDashboard,
  Link2,
  Search,
  Settings,
  Shield,
  Smartphone,
} from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

interface AuditArea {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  checks: string[];
  iconType: 'primary' | 'secondary' | 'accent';
}

export const growthRevenueSystemsPage = {
  slug: 'growth-revenue-systems',
  systems: ['revenue-growth'],
  topics: ['conversion-optimization', 'pipeline-visibility', 'revenue-tracking'],
  keywords: [
    'revenue growth system for service business',
    'lead to revenue optimization system',
    'conversion and follow-up system',
    'customer lifecycle automation system',
    'service business growth system',
  ],
  badge: 'Revenue Growth Systems',
  category: 'Growth Systems',
  seo: {
    title: 'Revenue Growth Systems | Find and fix the places where leads and follow-up break down',
    description:
      'Revenue Growth Systems help service businesses identify where leads stall, follow-up breaks down, and conversion leaks happen across the website, CRM, and workflow.',
    canonical: '/services/growth-revenue-systems',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Revenue Growth Systems for service businesses',
        description:
          'A structured growth-system review for service businesses that need clearer lead handling, follow-up, conversion flow, and operational visibility.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/growth-revenue-systems',
      },
    },
  },
  hero: {
    badge: 'Revenue Growth Systems',
    title: 'Growth slows when leads come in but nothing moves them forward reliably',
    description:
      'Most revenue problems are not demand problems. They come from weak follow-up, unclear routing, or a website that generates interest without a clear next step. This service finds where momentum is being lost and helps fix it in the right order.',
    primaryAction: {
      label: 'Check Where Revenue Slows Down',
      href: buildContactHref({
        system: 'revenue-growth',
        sourceType: 'service',
        slug: 'growth-revenue-systems',
      }),
    },
    cssPrefix: 'technical-audit-hero',
    list: [
      'Find where enquiries leak or stall after first contact',
      'See where follow-up and handoff lose momentum',
      'Fix the weak points before adding more pressure',
    ],
  },
  sections: {
    foundation: {
      badge: 'Why revenue feels inconsistent',
      title: 'What looks like a demand problem is usually a structure problem',
      description:
        'More activity is not always the answer. Often the better move is to find where the current system is already slowing things down — and fix that first.',
      painPoints: [
        {
          before: 'More leads come in, but results still feel inconsistent.',
          after:
            'The review identifies where conversion slows after first contact, so improvements are based on evidence rather than guesswork.',
        },
        {
          before: 'Teams assume the website, CRM, or follow-up process is good enough.',
          after:
            'The review shows where handoff, routing, or follow-up are creating friction that nobody has looked at properly.',
        },
        {
          before: 'The business keeps adding activity without fixing the weak points underneath.',
          after:
            'The system focuses on the bottlenecks first, so future traffic or sales effort has a stronger base to work from.',
        },
      ],
    },
    auditAreas: {
      header: {
        badge: 'Revenue leak review',
        title: 'Where we look first when growth feels inconsistent',
        description:
          'Most growth problems come from a small number of repeat areas: unclear page structure, slow follow-up, poor pipeline visibility, or weak handoff between tools and people.',
        cssPrefix: 'technical-audit-areas-header',
      },
      items: [
        {
          icon: Code,
          title: 'Website structure and page clarity',
          description:
            'We review whether the website makes the right offers clear, supports the right next step, and removes unnecessary decision friction.',
          checks: [
            'Service-page clarity',
            'Offer and CTA logic',
            'Form and enquiry path review',
            'Conversion friction points',
            'Message-to-action consistency',
          ],
          iconType: 'primary',
        },
        {
          icon: Gauge,
          title: 'Response speed and first-contact handling',
          description:
            'We check how quickly the business responds, what happens to missed opportunities, and where the first-contact experience breaks down.',
          checks: [
            'Missed-call handling',
            'After-hours response gaps',
            'Form-to-team speed',
            'First-response consistency',
            'Booking or consultation friction',
          ],
          iconType: 'accent',
        },
        {
          icon: Search,
          title: 'Visibility and enquiry quality',
          description:
            'We review whether visibility is bringing the right people to the right pages and whether the traffic can convert into useful enquiries.',
          checks: [
            'Service-intent alignment',
            'Page relevance to real enquiries',
            'Local visibility support',
            'Internal linking clarity',
            'Traffic-to-enquiry relevance',
          ],
          iconType: 'secondary',
        },
        {
          icon: Smartphone,
          title: 'Mobile and user-experience friction',
          description:
            'We review how easily people can move through the site and complete the right action on real devices.',
          checks: [
            'Mobile CTA clarity',
            'Mobile form usability',
            'Navigation friction',
            'Readability and scanning',
            'User flow breakpoints',
          ],
          iconType: 'primary',
        },
        {
          icon: Shield,
          title: 'Trust and decision confidence',
          description:
            'We review whether the site and follow-up flow create confidence or make people hesitate before enquiring.',
          checks: [
            'Credibility signals',
            'Review and proof placement',
            'Offer confidence gaps',
            'Trust barriers before enquiry',
            'Consistency across public touchpoints',
          ],
          iconType: 'accent',
        },
        {
          icon: Link2,
          title: 'Routing and internal handoff',
          description:
            'We review what happens after someone gets in touch and whether leads move through the right people and systems cleanly.',
          checks: [
            'Lead routing logic',
            'Ownership after form submission',
            'Notification and handoff flow',
            'Internal communication gaps',
            'Sales-process continuity',
          ],
          iconType: 'secondary',
        },
        {
          icon: Database,
          title: 'CRM and pipeline visibility',
          description:
            'We review whether the business can see what happens to leads after first contact and where momentum gets lost.',
          checks: [
            'CRM adoption gaps',
            'Pipeline stage clarity',
            'Follow-up visibility',
            'Lost-opportunity blind spots',
            'Reporting gaps',
          ],
          iconType: 'primary',
        },
        {
          icon: LayoutDashboard,
          title: 'Growth-system priorities',
          description:
            'We look at which problems should be fixed first and which changes will have the most practical effect.',
          checks: [
            'Priority sequence',
            'Quick-win vs structural fixes',
            'Dependencies between changes',
            'Implementation readiness',
            'Next-step clarity',
          ],
          iconType: 'accent',
        },
      ] as AuditArea[],
    },
    wordpressContext: {
      header: {
        badge: 'Why growth work often stalls',
        title: 'Revenue problems are usually system problems, not marketing problems',
        description:
          'The weak point is rarely one thing. It is the gap between website clarity, response handling, CRM use, and visibility into what actually happens after someone gets in touch.',
        cssPrefix: 'technical-audit-wordpress-header',
        alignment: 'left' as const,
      },
      listItems: [
        'Website structure reviewed in context, not in isolation',
        'Follow-up steps checked after the first enquiry',
        'CRM and routing reviewed where they affect conversion',
        'Offer clarity and page flow reviewed together',
        'Visibility issues reviewed only where they affect real enquiry quality',
        'Implementation priorities organised before more activity is added',
      ],
      issuesTitle: 'Common growth-system issues we find:',
      issues: [
        {
          title: 'Follow-up breaks after first contact',
          description:
            'Enquiries come in, but there is no clear follow-up path, ownership, or timing discipline.',
        },
        {
          title: 'The website generates interest but not clear action',
          description:
            'People visit the site, but the next step is weak, unclear, or too easy to ignore.',
        },
        {
          title: 'CRM data exists but nobody uses it properly',
          description:
            'The system records leads, but the business still cannot see where momentum is being lost.',
        },
        {
          title: 'More activity is added before the weak points are fixed',
          description:
            'Traffic, automation, or sales effort increases pressure on a system that is already inconsistent underneath.',
        },
      ],
    },
    deliverables: {
      header: {
        badge: 'What you get',
        title: 'What the review produces once the diagnosis is clear',
        description:
          'The goal is not a pile of observations. It is a structured view of what is slowing growth down and a practical plan for fixing it.',
        cssPrefix: 'technical-audit-deliverables-header',
      },
      items: [
        {
          title: 'Clear findings',
          description:
            'You get a structured view of where leads, follow-up, or conversion are losing momentum.',
          icon: FileText,
          iconType: 'accent' as const,
        },
        {
          title: 'Prioritised next steps',
          description:
            'You see what matters first, what depends on other work, and what can wait until later.',
          icon: BarChart3,
          iconType: 'secondary' as const,
        },
        {
          title: 'System-level recommendations',
          description:
            'Recommendations are tied to website structure, CRM use, routing, follow-up, or visibility where those affect growth.',
          icon: Settings,
          iconType: 'primary' as const,
        },
        {
          title: 'A clearer growth picture',
          description:
            'You get a better picture of what is slowing enquiries, response quality, and conversion instead of relying on assumptions.',
          icon: LayoutDashboard,
          iconType: 'secondary' as const,
        },
        {
          title: 'Decision support',
          description:
            'We walk through the findings and help you decide whether the next step is refinement, rebuild, automation, or visibility work.',
          icon: Globe,
          iconType: 'primary' as const,
        },
        {
          title: 'Optional implementation support',
          description:
            'If needed, the next stage can be implemented with the right structure instead of leaving the plan as theory only.',
          icon: Code,
          iconType: 'accent' as const,
        },
      ],
    },
    process: {
      badge: 'Our Approach',
      title: 'How the review works',
      description:
        'The review follows a clear sequence: understand the current setup, find the weak points, organise priorities, and decide the right next step.',
      steps: [
        {
          number: '1',
          title: 'Understand the current setup',
          description:
            'We look at the website, lead flow, follow-up process, and the systems involved in first contact and conversion.',
        },
        {
          number: '2',
          title: 'Find where momentum is lost',
          description:
            'We identify where the business is losing leads, missing context, or relying on weak handoff between tools and people.',
        },
        {
          number: '3',
          title: 'Organise the priorities',
          description:
            'Findings are turned into a practical sequence so the most important fixes are visible first.',
        },
        {
          number: '4',
          title: 'Decide the right next step',
          description:
            'Whether the next move is a rebuild, follow-up improvement, CRM work, or better search and discovery — the decision is based on what the review found.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'technical-audit-process',
      backgroundColor: 'bg-alt' as const,
    },
    bridge: {
      badge: 'Before adding more pressure',
      title: 'Fix the weak points before adding more traffic or automation',
      description:
        'Many businesses try to fix revenue by doing more. But doing more through a broken system just creates more inconsistency. This review helps you find and fix the structural problems first.',
      tagline: 'Clarity before more activity',
      narrativeTitle: 'The right fix depends on where momentum is actually being lost',
      narrativeParagraphs: [
        'Sometimes the issue is the website. Sometimes it is follow-up. Sometimes it is routing, trust, or pipeline visibility. The right answer depends on where the leakage is really happening.',
        'That is why this service is structured as a growth-system review, not a generic performance audit. The aim is to find the real weak points so the next move is based on evidence, not assumption.',
      ],
      features: [
        {
          icon: Search,
          title: 'Diagnose before scaling',
          description:
            'Find where leads and conversion lose momentum before adding more traffic or automation.',
        },
        {
          icon: Settings,
          title: 'Fix the right layer',
          description:
            'Decide the next step based on whether the issue is structural, technical, operational, or follow-up related.',
        },
        {
          icon: BarChart3,
          title: 'Prioritise clearly',
          description:
            'Focus on the parts of the system that affect growth most, instead of trying to fix everything at once.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This review works best for businesses that want to understand what is slowing revenue down before committing to the wrong kind of fix.',
      strongFitTitle: 'Strong fit',
      strongFitItems: [
        {
          title: 'You already have lead flow of some kind',
          description:
            'The business is already getting enquiries, but revenue feels less consistent than it should.',
        },
        {
          title: 'You are unsure where the weak point is',
          description:
            'You do not want to guess whether the issue is the website, CRM, follow-up process, or conversion flow.',
        },
        {
          title: 'You want a prioritised plan',
          description:
            'You want to know what matters first, what can wait, and what should not be changed blindly.',
        },
        {
          title: 'You prefer diagnosis before pressure',
          description:
            'You value a structured review before more spend, more tools, or more activity is added.',
        },
      ],
      notDesignedTitle: 'Not designed for',
      notDesignedItems: [
        {
          title: 'Brand new businesses with no current system',
          description:
            'If there is nothing established yet, another implementation page is usually a better starting point.',
        },
        {
          title: 'Quick fixes only',
          description:
            'This is not the right fit if the goal is a fast patch without review or prioritisation.',
        },
        {
          title: 'Traffic promises or fixed outcome commitments',
          description:
            'The service is about diagnosing and improving the system, not making unrealistic growth claims.',
        },
        {
          title: 'Very low-complexity brochure sites',
          description:
            'If the business has little operational depth, a full growth-system review may be unnecessary.',
        },
      ],
    },
    faqSection: {
      badge: 'Revenue Growth Questions',
      title: 'Common Questions',
      description:
        'Questions we hear most about the review process, what it covers, and what happens once the findings are clear.',
      faqs: [
        {
          question: 'Is this the same as a technical SEO audit?',
          answer:
            'No. Technical SEO may be one part of the review, but this service looks more broadly at website structure, follow-up, routing, CRM visibility, and where revenue momentum is being lost.',
        },
        {
          question: 'Do I need a WordPress website for this to be useful?',
          answer:
            'No, but the service is most useful when there is already a real website, real enquiry flow, and some operational structure to review. The current page still fits best when there is an existing setup to diagnose.',
        },
        {
          question: 'What if the main problem turns out not to be the website?',
          answer:
            'That is still useful. The point of the review is to find the real weak point, whether that is follow-up, CRM use, routing, trust, or something else in the system.',
        },
        {
          question: 'What happens after the review?',
          answer:
            'After the review, the next step may be a rebuild, CRM work, follow-up improvement, search and discovery work, or another structural fix. The point is to choose the next step with more confidence.',
        },
        {
          question: 'Is this only for businesses already spending on marketing?',
          answer:
            'No, but it is most useful when there is already enough activity, lead flow, or operational complexity for the weak points to be visible.',
        },
        {
          question: 'Can this help if revenue feels inconsistent month to month?',
          answer:
            'Yes. That is one of the clearest reasons to use this kind of review. Inconsistent revenue often points to weak handoff, poor follow-up, unclear offers, or broken visibility between stages of the system.',
        },
      ],
    },
  },
  cta: {
    title: 'Find out what is slowing growth down',
    description:
      'Tell us how leads move from first contact to follow-up. We will show you where momentum drops and what needs fixing first.',
    buttonText: 'Find Your Revenue Leaks',
    buttonHref: buildContactHref({
      system: 'revenue-growth',
      sourceType: 'service',
      slug: 'growth-revenue-systems',
    }),
  },
} satisfies ServicePageData;
