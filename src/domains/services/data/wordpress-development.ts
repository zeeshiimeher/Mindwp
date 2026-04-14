import { Blocks, Cog, LayoutTemplate, Link2, Search, Workflow } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'wordpress-development';

export const wordpressDevelopmentPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure', 'systems-first-websites'],
  keywords: [
    'wordpress website development for service business',
    'custom wordpress website implementation',
    'structured wordpress website',
    'business website development on wordpress',
    'web shop development on wordpress',
  ],
  badge: 'WordPress Website Development',
  category: 'Implementation Services',
  seo: buildServiceSeo({
    slug,
    title: 'WordPress Development for Service Businesses | MindWP',
    description:
      'WordPress website development built around how the business works. Clear service architecture, proper enquiry flow, and a foundation that stays manageable after launch.',
    schemaName: 'WordPress website development for service businesses',
    schemaDescription:
      'Structured WordPress implementation focused on clear service architecture, enquiry handling, maintainability, and future-ready foundations.',
  }),
  hero: {
    badge: 'WordPress Website Development',
      title: 'WordPress Builds That Support Services Enquiries and Growth',
    description:
      'For service businesses that need a proper WordPress foundation. Not pages thrown together quickly, but a site where services are clearly presented, enquiry paths make sense, and the whole thing stays manageable after launch.',
    list: [
        'Service-first page architecture',
        'Defined enquiry paths',
        'CRM-ready from day one',
    ],
    cssPrefix: 'wordpress-development-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why this matters',
      title: 'Most WordPress problems start before the build even begins',
      description:
        'Rarely WordPress itself. The problem starts when building begins before anyone has agreed on site purpose, service presentation, or enquiry flow.',
      painPoints: [
        {
          before: 'Pages are planned one by one with no overall logic holding them together.',
          after:
            'Implementation starts from service priorities, content logic, and enquiry flow — so every page has a clear job.',
        },
        {
          before:
            'Theme, builder, and plugin decisions are made too early and end up driving the project.',
          after: 'Technology choices support the business outcome instead of dictating it.',
        },
        {
          before:
            'The site launches looking fine but quickly becomes hard to update, inconsistent, or fragile.',
          after:
            'The build is organised so the site keeps improving without creating internal mess.',
        },
      ],
    },
    implementationScope: {
      badge: 'Implementation scope',
      title: 'What this pathway covers',
      description:
        'This covers the practical implementation work needed to build a clear WordPress foundation. Scope depends on the business, but it usually falls into a few groups.',
      cards: [
        {
          title: 'Service-business website implementation',
          description:
            'A WordPress build for businesses that need their services clearly presented, enquiry paths defined, and pages that work together.',
          points: [
            'Core page and navigation logic',
            'Service-page hierarchy',
            'Quote, booking, or contact pathways',
          ],
          featured: true,
        },
        {
          title: 'Brochure-style rebuilds with better logic',
          description:
            'For businesses whose current website feels dated, unclear, or disconnected from how the business actually operates now.',
          points: [
            'Content restructuring',
            'Cleaner navigation',
            'Reduced clutter and duplication',
          ],
        },
        {
          title: 'Commerce-ready WordPress implementations',
          description:
            'Where relevant, WordPress can also support e-commerce or web shop delivery using WooCommerce as a technology layer.',
          points: [
            'Catalog and product logic',
            'Checkout and fulfilment flow',
            'Commerce kept within the wider site system',
          ],
        },
      ],
    },
    principles: {
      badge: 'Implementation principles',
      title: 'What a good WordPress build should protect',
      description:
        'A strong WordPress build is not only about launch day. It should support operational clarity, future changes, and cleaner system expansion over time.',
      tagline: 'Build for the business, not just the handover.',
      narrativeTitle: 'The website should still make sense after the project ends',
      narrativeParagraphs: [
        'A WordPress website becomes more valuable when pages, content logic, and editing paths are easy to understand. That matters more than packing in features that only make sense during launch week.',
        'Implementation decisions centre on maintainability, message clarity, and future readiness. If later work includes CRM, local SEO, reviews, or automation, the website should already support it.',
      ],
      features: [
        {
          title: 'Clear page hierarchy',
          description:
            'Visitors and the internal team should both understand what each page is for and where it sits.',
          icon: LayoutTemplate,
        },
        {
          title: 'Maintainable editing model',
          description:
            'Templates, sections, and content patterns should be easy to manage without things drifting out of shape.',
          icon: Blocks,
        },
        {
          title: 'Search-ready foundations',
          description:
            'Content and page logic should support visibility work later rather than blocking it.',
          icon: Search,
        },
        {
          title: 'System-ready foundations',
          description:
            'Forms, calls to action, tracking, and routing should be ready to connect into future operational systems.',
          icon: Workflow,
        },
      ],
    },
    processSection: {
      badge: 'Implementation process',
      title: 'How WordPress projects move from brief to handover',
      description:
        'The exact path depends on the project, but the process follows a clear sequence so the build stays controlled.',
      steps: [
        {
          number: '1',
          title: 'Scope and priorities review',
          description:
            'Define what the website needs to do, which pages matter most, and what the real operational priorities are — so the build serves the business, not a template.',
        },
        {
          number: '2',
          title: 'Page planning and content logic',
          description:
            'Navigation, page hierarchy, service coverage, and conversion paths are mapped before any building starts — so implementation has a clear blueprint.',
        },
        {
          number: '3',
          title: 'Implementation setup',
          description:
            'Templates, build approach, integrations, and governance decisions are locked in — so the project stays stable instead of drifting on ad-hoc decisions.',
        },
        {
          number: '4',
          title: 'Build, refine, and handover',
          description:
            'The site is built, checked, refined, and prepared — so future updates stay manageable without depending on the original builder.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What can be included',
      title: 'Common layers inside a WordPress website project',
      description:
        'Not every project needs every layer. These are the types of work often included when building a solid WordPress foundation.',
      categories: [
        {
          title: 'Structure and page system',
          description: 'Core implementation decisions that shape the site itself.',
          icon: LayoutTemplate,
          features: [
            'Page and template architecture',
            'Navigation and internal hierarchy',
            'Service page structure',
            'Content blocks and reusable sections',
            'Clear CTA pathways',
          ],
        },
        {
          title: 'Technical and operational setup',
          description: 'The implementation layer that keeps the website stable and usable.',
          icon: Cog,
          features: [
            'Form setup and routing',
            'Analytics and tracking setup',
            'Core plugin governance',
            'Performance and stability basics',
            'Security and update hygiene',
          ],
        },
        {
          title: 'Expansion-ready foundations',
          description:
            'Support for what comes after launch when the business grows into more systems.',
          icon: Link2,
          features: [
            'CRM-ready form and enquiry pathways',
            'SEO-supportive structure',
            'Review and authority support pages',
            'Commerce-ready planning where needed',
            'Content scaling and future refinement',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'Works best for businesses that want a proper WordPress foundation — not just a quick launch.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Your website should reflect how the business actually operates',
          description:
            'The site needs to present services clearly, handle enquiries through defined paths, and support the systems behind it.',
        },
        {
          title: 'You are building toward CRM, SEO, or automation',
          description:
            'Future systems need a structured foundation — not a site that has to be rebuilt before anything else can connect.',
        },
        {
          title: 'You value maintainability over launch-day speed',
          description: 'Long-term clarity matters more than going live fast — because a rushed build costs more to fix than it saves.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You want a quick template swap with no planning',
          description:
            'If speed is the only priority and post-launch quality does not matter, this approach will feel too structured.',
        },
        {
          title: 'Your project starts with a plugin list',
          description: 'Builds that start from tools instead of business needs end up locked to technology that does not serve the outcome.',
        },
        {
          title: 'You need a large software product built',
          description:
            'This is for service-business website implementation — not SaaS product engineering or custom application development.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about WordPress development',
      description: 'Practical questions that come up before a WordPress project begins.',
      faqs: [
        {
          question: 'Can this include a redesign as well as a rebuild?',
          answer:
            'Yes. Some projects include a redesign or restructuring phase before implementation. The work is framed around clarity and usefulness — not visual change for its own sake.',
        },
        {
          question: 'Do you work with one specific builder or theme?',
          answer:
            'No. The builder or theme approach depends on what best supports the project. Those choices stay secondary to business needs and long-term maintainability.',
        },
        {
          question: 'Can you migrate an existing website into WordPress?',
          answer:
            'Yes, when that is the right move. Migration can be part of this pathway, or it can lead into a dedicated migration scope.',
        },
        {
          question: 'Will the website support SEO and CRM later?',
          answer:
            'That is one of the main reasons to approach WordPress development this way. A well-built foundation makes later SEO, CRM, review, and automation work much easier to add.',
        },
      ],
      cssPrefix: 'wordpress-development-faq',
    },
    comparison: {
      header: {
        title: 'Template-first build vs structured WordPress development',
        description:
          'Most WordPress projects start from a template or plugin list. Here is what that looks like compared to building around how the business actually works.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Template-first build',
          items: [
            'Pages built one by one with no overall content logic — so the site feels like a collection of pages, not a business tool',
            'Theme and plugins chosen first, business needs fitted around them — so the build locks around technology instead of outcomes',
            'Enquiry flow depends on whichever form plugin was installed — so leads follow a random path instead of a designed one',
            'No plan for how the site will evolve after launch — so every future system requires rework',
            'Editing becomes fragile because the build was not structured for change — so the team avoids updates instead of making them',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured WordPress development',
          items: [
            'Pages organised around service priorities and visitor intent — so the structure reflects the business, not a theme default',
            'Technology choices support the business outcome — so the build stays flexible instead of locked to one plugin',
            'Enquiry flow designed into the site architecture from the start — so leads follow a clear path to the right person',
            'CRM, SEO, and automation foundations built in from day one — so future systems connect cleanly',
            'Editing model stays clean because the structure was planned — so the team can update without breaking things',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is done properly',
        description:
          'A roofing company needed a WordPress website that reflected how the business actually worked — not just a brochure with a contact form.',
      },
      cards: [
        {
          title: 'Before: a template site that did not match the business',
          description: 'Generic template with no service-specific page logic. Enquiry form went to a shared inbox with no routing — so there was no foundation for the systems the business needed next.',
          points: [
            'Generic template with no service-specific page logic — so visitors bounced before finding the right service',
            'Enquiry form went to a shared inbox with no routing — so leads waited hours for whoever checked email first',
            'No foundation for SEO, CRM, or future systems — so every later improvement required rebuilding what already existed',
          ],
        },
        {
          title: 'What we built: structured WordPress foundation',
          description: 'Site rebuilt around the business structure — clear service pages, defined enquiry paths, CRM-ready forms, and a content model that could grow with the business.',
          points: [
            'Service pages structured around how the business operates — so each page served a clear commercial purpose',
            'Enquiry paths connected to CRM and routing logic — so leads reached the right person with context',
            'Content model built for future SEO and system expansion — so later work connected instead of requiring rebuilds',
          ],
          featured: true,
        },
        {
          title: 'After: a website that works as a business tool',
          description: 'The site became the operational foundation for local SEO, review management, lead handling, and CRM — each system connected cleanly because the WordPress build was structured to support it.',
          points: [
            'SEO, reviews, and CRM all connected to the site foundation — because the page structure and data model were designed for integration from the start',
            'Enquiry volume increased without more traffic — because clearer service pages and defined paths converted more of the existing visitors',
            'Site stayed maintainable as the business added services — because the content model scaled without creating technical debt',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Need a WordPress site that actually works for the business?',
    description:
      'Tell us about your services and how enquiries come in. We will outline what the build should cover and the best path forward.',
  },
  cta: {
    title: 'Build a WordPress site around how your business works',
    description:
      'Tell us about your services and how enquiries come in now. We will outline what the build should cover and the best implementation path forward.',
  },
} satisfies ServicePageData;
