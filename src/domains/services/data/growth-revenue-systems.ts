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


import { buildServiceSeo } from '../seo';
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
  topics: [
    'conversion-optimization',
    'pipeline-visibility',
    'conversion-tracking',
    'customer-lifetime-value',
    'lifetime-value',
    'revenue-tracking',
    'revenue-visibility',
  ],
  keywords: [
    'revenue growth system for service business',
    'lead to revenue optimization system',
    'conversion and follow-up system',
    'customer lifecycle automation system',
    'service business growth system',
  ],
  badge: 'Revenue Growth Systems',
  category: 'Growth Systems',
  seo: buildServiceSeo({
    slug: 'growth-revenue-systems',
    title: 'Revenue Growth Systems for Service Businesses | MindWP',
    description:
      'Find where leads stall, follow-up breaks, and revenue leaks. Structured growth-system reviews that diagnose the real problem before adding more pressure.',
    schemaName: 'Revenue Growth Systems for service businesses',
    schemaDescription:
      'Structured growth-system reviews for service businesses — diagnosing lead handling, follow-up, conversion flow, and operational visibility gaps.',
  }),
  hero: {
    badge: 'Revenue Growth Systems',
      title: 'Find What Is Stalling Revenue After First Contact',
    description:
      'Most service businesses lose revenue between the enquiry and the close. Slow follow-up, unclear routing, weak handoff, and invisible pipeline gaps cost more than any marketing budget. This review finds exactly where momentum breaks down.',
    cssPrefix: 'technical-audit-hero',
    list: [
        'Leak Detection',
        'Handoff Gaps',
        'Revenue Recovery',
    ],
  },
  sections: {
    foundation: {
      badge: 'Why revenue feels inconsistent',
      title: 'The real reason revenue stays flat despite more leads',
      description:
        'Spending more on marketing when the conversion system is broken just creates expensive inconsistency. The problem is usually closer than you think.',
      painPoints: [
        {
          before: 'Leads come in but revenue still feels unpredictable month to month.',
          after:
            'The review pinpoints exactly where conversion breaks down after first contact — so you fix what matters instead of guessing.',
        },
        {
          before: 'The team assumes the website, CRM, and follow-up are working well enough.',
          after:
            'The review exposes handoff gaps, routing failures, and follow-up blind spots that nobody has examined properly.',
        },
        {
          before: 'More traffic, more tools, more activity — but the same inconsistent results.',
          after:
            'Bottlenecks get fixed first so that future spend and effort work through a stronger system.',
        },
      ],
    },
    auditAreas: {
      header: {
        badge: 'Where we look',
        title: 'The eight areas where revenue typically leaks',
        description:
          'Growth problems cluster around the same areas: unclear pages, slow response, poor handoff, invisible pipeline, and weak trust signals. We check all of them.',
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
        badge: 'Why growth work stalls',
        title: 'Revenue problems are system problems, not marketing problems',
        description:
          'The weak point is rarely one thing. It is the gap between website clarity, response handling, CRM use, and visibility into what happens after someone gets in touch.',
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
        title: 'What the review produces',
        description:
          'Not a pile of observations. A structured view of what is slowing growth and a practical plan for fixing it in the right order.',
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
      badge: 'How it works',
      title: 'How the growth-system review works',
      description:
        'Clear sequence: understand the current setup, find the weak points, prioritise fixes, decide the right next step.',
      steps: [
        {
          number: '1',
          title: 'Map the current setup',
          description:
            'We look at the website, lead flow, follow-up process, and the systems involved from first contact to close.',
        },
        {
          number: '2',
          title: 'Find where momentum breaks',
          description:
            'We identify where the business is losing leads, missing follow-up, or relying on weak handoff between tools and people.',
        },
        {
          number: '3',
          title: 'Prioritise the fixes',
          description:
            'Findings become a practical sequence so the highest-impact fixes happen first.',
        },
        {
          number: '4',
          title: 'Decide what to do next',
          description:
            'Whether the next move is a rebuild, follow-up improvement, CRM work, or visibility fix — the decision is based on what the review found.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'technical-audit-process',
      backgroundColor: 'bg-alt' as const,
    },
    bridge: {
      badge: 'What changes',
      title: 'What changes when you fix the system instead of adding more pressure',
      description:
        'Most businesses try to grow by doing more. But more activity through a broken system just multiplies the inconsistency. Fix the foundation and everything above it works harder.',
      tagline: 'Clarity before more activity',
      narrativeTitle: 'The right fix depends on where momentum is actually being lost',
      narrativeParagraphs: [
        'Sometimes the issue is the website. Sometimes it is follow-up speed. Sometimes it is CRM adoption or lead routing. The right answer depends on where the leakage is really happening.',
        'That is why this is structured as a growth-system review, not a generic audit. The aim is to find the real weak points so the next move is based on evidence.',
      ],
      features: [
        {
          icon: Search,
          title: 'Diagnose before scaling',
          description:
            'Find where leads and conversion lose momentum before spending more on traffic or automation.',
        },
        {
          icon: Settings,
          title: 'Fix the right layer',
          description:
            'The next step depends on whether the issue is structural, technical, operational, or follow-up related.',
        },
        {
          icon: BarChart3,
          title: 'Prioritise what matters most',
          description:
            'Focus on the parts of the system that affect revenue directly, instead of trying to fix everything at once.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Fixing symptoms vs diagnosing the system',
        description:
          'Most businesses react to revenue problems by adding more activity. Here is what that approach costs compared to diagnosing the system first.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Symptom-fixing approach',
          items: [
            'More traffic added through a website that does not convert clearly',
            'New tools purchased without fixing the handoff problems underneath',
            'Follow-up responsibility scattered with no clear ownership or timing',
            'Revenue feels inconsistent but nobody can pinpoint exactly why',
            'Decisions are based on assumptions instead of evidence',
          ],
        },
        {
          type: 'after' as const,
          title: 'System-diagnosis approach',
          items: [
            'Website, follow-up, and CRM reviewed together as one connected system',
            'Specific weak points identified before any new tools or spend are added',
            'Follow-up ownership and timing made visible and accountable',
            'Revenue leaks traced to exact stages so fixes are targeted',
            'Next steps prioritised based on what the review actually found',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like in practice',
        description:
          'A home services company was spending on ads and getting enquiries, but revenue stayed flat. The problem was not demand. It was what happened after first contact.',
      },
      cards: [
        {
          title: 'Before: leads coming in, revenue staying flat',
          description: 'The business was generating consistent enquiry volume through paid traffic and organic search. But close rates were low, follow-up was inconsistent, and the team could not see where deals were stalling.',
          points: [
            'Enquiries came in but many went cold within 48 hours',
            'No visibility into which leads were being followed up',
            'The CRM existed but pipeline stages were not used meaningfully',
          ],
        },
        {
          title: 'What we found: three layers of leakage',
          description: 'The growth-system review identified slow first-response times, unclear lead routing between team members, and a website that generated interest but gave no clear next step.',
          points: [
            'Average first response was over 6 hours for form enquiries',
            'Lead routing had no ownership rules — enquiries sat in a shared inbox',
            'Service pages described capabilities but had no clear conversion path',
          ],
          featured: true,
        },
        {
          title: 'After: targeted fixes, measurable improvement',
          description: 'By fixing response speed, routing ownership, and page conversion paths in the right order, close rates improved and revenue became more predictable without increasing ad spend.',
          points: [
            'First-response time reduced from hours to minutes',
            'Lead ownership clear at every stage of the pipeline',
            'Revenue improved without increasing marketing spend',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This review works best for businesses that already have lead flow but want to understand what is limiting conversion before committing to the wrong fix.',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        {
          title: 'You have leads but revenue feels inconsistent',
          description:
            'Enquiries are coming in but results vary month to month and nobody can explain why.',
        },
        {
          title: 'You are not sure where the weak point actually is',
          description:
            'It could be the website, follow-up, CRM use, or handoff between people and tools. You want clarity before committing.',
        },
        {
          title: 'You want priorities, not a generic checklist',
          description:
            'You need to know what matters first, what depends on other work, and what to leave alone for now.',
        },
        {
          title: 'You prefer diagnosis before adding more spend',
          description:
            'You want evidence that the system can handle growth before pouring more money into traffic or tools.',
        },
      ],
      notDesignedTitle: 'Not the right fit if',
      notDesignedItems: [
        {
          title: 'You are starting from zero with no current lead flow',
          description:
            'If nothing is established yet, a build-first approach is usually more appropriate.',
        },
        {
          title: 'You want a quick patch without diagnosis',
          description:
            'This is a structured review that identifies root causes. It is not a surface-level fix.',
        },
        {
          title: 'You expect guaranteed traffic or revenue numbers',
          description:
            'The service diagnoses and improves the system. It does not make unrealistic promises about outcomes.',
        },
        {
          title: 'Your business has very little operational complexity',
          description:
            'If the setup is a simple brochure site with minimal lead flow, a full growth-system review may be more than you need.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about growth-system reviews',
      description:
        'Practical questions from businesses trying to decide whether a system review is the right next step.',
      faqs: [
        {
          question: 'Is this the same as a technical SEO audit?',
          answer:
            'No. SEO may be one part of the review, but this looks more broadly at website conversion, follow-up speed, CRM visibility, lead routing, and where revenue momentum actually breaks down.',
        },
        {
          question: 'Do I need a WordPress website for this?',
          answer:
            'No. The review works with any platform. It is most useful when there is already a real website, real enquiry flow, and some operational depth to examine.',
        },
        {
          question: 'What if the main problem turns out not to be the website?',
          answer:
            'That is still a valuable finding. The point of the review is to find the real weak point \u2014 whether it is follow-up, CRM use, routing, trust, or something else entirely.',
        },
        {
          question: 'What happens after the review is complete?',
          answer:
            'You get structured findings, prioritised next steps, and a clear recommendation for whether the next move is a rebuild, follow-up improvement, CRM work, or visibility work.',
        },
        {
          question: 'Can this help if revenue varies a lot month to month?',
          answer:
            'Yes. Inconsistent revenue is one of the clearest signals that the system has weak handoff, poor follow-up, or broken visibility between stages.',
        },
      ],
    },
  },
  inlineCta: {
    title: 'Not sure where your revenue is leaking?',
    description:
      'Tell us how leads move from first contact to close. We will show you where momentum drops and what needs fixing first.',
  },
  cta: {
    title: 'Find out what is actually slowing your growth',
    description:
      'Tell us how leads, follow-up, and conversion work in your business today. We will show you where the system breaks and what to fix first.',
  },
} satisfies ServicePageData;
