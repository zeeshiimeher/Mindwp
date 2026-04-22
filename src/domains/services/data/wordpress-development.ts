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
  badge: 'WordPress Development',
  category: 'Implementation Services',
  seo: buildServiceSeo({
    slug,
    title: 'WordPress Development for Service Businesses | MindWP',
    description:
      "A properly built WordPress site is a good start. But the build alone doesn't bring in work. What matters is what happens when someone visits and tries to get in touch.",
    schemaName: 'WordPress website development for service businesses',
    schemaDescription:
      'WordPress implementation focused on turning visitors into handled enquiries — with clear service pages, proper routing, and automated follow-up.',
  }),
  hero: {
    badge: 'WordPress Development',
    title: 'The Build Is Solid. The Leads Still Disappear.',
    description:
      "You invested in a proper WordPress site. Clean code, decent structure, looks professional. Someone visits, fills in the form, and... nothing. Nobody picks it up in time. No follow-up goes out. The build was fine. The website just doesn't handle what arrives.",
    list: ['Solid build', 'Lost enquiries', 'No follow-up'],
    cssPrefix: 'wordpress-development-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where the real problem sits',
      title: "Most WordPress sites are built well enough. They just don't do enough.",
      description:
        "The issue is rarely the code or the theme. It's that the site was built to look right, not to handle enquiries, route them to the right person, or follow up when your team is busy.",
      painPoints: [
        {
          before:
            "Visitors land on a decent-looking homepage but can't find the specific service they need.",
          after:
            'Each service gets its own page, written the way people search. Visitors find what they came for and act.',
        },
        {
          before:
            'The contact form feeds into an inbox nobody checks until end of day. Warm leads go cold.',
          after:
            'Enquiries reach the right person in minutes with name, number, and what they need.',
        },
        {
          before:
            'No confirmation email, no reminder, no follow-up sequence. Every lead depends on someone remembering.',
          after:
            'Confirmation goes out immediately. Follow-up runs on its own. Nothing depends on memory.',
        },
      ],
    },
    implementationScope: {
      badge: 'What we actually build',
      title: 'WordPress development that connects the visit to the outcome',
      description:
        "We build WordPress sites. But we don't stop at pages and templates. The build includes everything between someone arriving and your team having their details in hand.",
      cards: [
        {
          title: 'Service pages that match what people search for',
          description:
            'Your services listed individually, written the way customers look for help. Each page has a clear next step — form, call, or booking.',
          points: [
            'Each service on its own page',
            'Written for how people search',
            'Clear action on every page',
          ],
          featured: true,
        },
        {
          title: 'Enquiry handling built into the site',
          description:
            'Forms that capture what you need, routing that gets it to the right person, and confirmations that go out before your team even sees the enquiry.',
          points: [
            'Forms → CRM → the right person',
            'Automatic confirmations',
            'Follow-up runs without manual effort',
          ],
        },
        {
          title: 'A foundation that supports what comes next',
          description:
            'CRM, local SEO, reviews, automation — they all need a structured site underneath. We build WordPress so everything connects cleanly later.',
          points: [
            'CRM-ready from day one',
            'SEO-supportive page structure',
            'Room to grow without rework',
          ],
        },
      ],
    },
    principles: {
      badge: 'What changes results',
      title: 'A well-built site is the start. What it does with visitors is what matters.',
      description:
        'Code quality, page speed, clean templates — all important. But none of them generate enquiries on their own. What changes results is how the site handles the people who show up.',
      tagline: 'Build for the business, not just the handover.',
      narrativeTitle: "Why a properly built site still doesn't bring in work",
      narrativeParagraphs: [
        "The WordPress build is solid. Theme is clean. Plugins are up to date. But the form goes to an inbox nobody really owns. Services are all on one page. There's no follow-up, no tracking, no routing. The build was good. It just wasn't connected to anything.",
        "When the site is structured around services, and enquiries reach the right person with context, and follow-up runs automatically — that's when a WordPress build starts earning its investment back.",
      ],
      features: [
        {
          title: 'Services listed individually',
          description:
            'Each service gets its own page. Visitors find what they need. Google can match you to what people search for.',
          icon: LayoutTemplate,
        },
        {
          title: 'Enquiries reach the right person',
          description:
            'Forms capture name, number, and what they need. Details go to your CRM. The right team member picks it up.',
          icon: Blocks,
        },
        {
          title: 'Follow-up runs on its own',
          description:
            'Confirmation out immediately. Reminder before the appointment. Check-in after the job. Nobody has to remember.',
          icon: Search,
        },
        {
          title: 'Everything connects',
          description:
            'CRM, booking, reviews, local SEO — they all plug into the same foundation instead of floating separately.',
          icon: Workflow,
        },
      ],
    },
    processSection: {
      badge: 'How we work',
      title: 'We start with your business — the build follows',
      description:
        "WordPress is the tool. But we don't start with WordPress. We start with how your business works, where enquiries come from, and what happens when someone gets in touch.",
      steps: [
        {
          number: '1',
          title: "Understand what's actually happening",
          description:
            'How do people find you? What happens when they enquire? Where do things drop off? We learn the reality before planning the build.',
        },
        {
          number: '2',
          title: 'Plan around services and customer behaviour',
          description:
            'Which services need their own page, how visitors move from arriving to getting in touch, what happens after first contact.',
        },
        {
          number: '3',
          title: 'Build and connect everything',
          description:
            'WordPress site live. Forms feeding into CRM. Follow-up running. Tracking showing where visitors come from and what they do.',
        },
        {
          number: '4',
          title: 'Handover so your team runs it',
          description:
            'Documentation, walkthrough, and a site your team can manage. Content updates, enquiry checks, and day-to-day running handled internally.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What the build includes',
      title: 'Not just pages and templates — everything between the visit and the outcome',
      description:
        'Every project is different. But the build always covers how visitors find you, how they get in touch, and what happens after.',
      categories: [
        {
          title: 'Service pages and site structure',
          description: 'What visitors see and how they navigate.',
          icon: LayoutTemplate,
          features: [
            'Each service on its own page',
            'Navigation that makes sense to visitors',
            'Clear calls to action on every page',
            'Content written for how people search',
            'Mobile-friendly throughout',
          ],
        },
        {
          title: 'Enquiry handling and routing',
          description: 'What happens when someone reaches out.',
          icon: Cog,
          features: [
            'Forms → CRM → the right person',
            'Immediate confirmation to the visitor',
            'Follow-up sequences that run automatically',
            'Missed call and voicemail handling',
            'Every enquiry logged and trackable',
          ],
        },
        {
          title: 'Foundations for what comes next',
          description: 'What the site needs to connect to later.',
          icon: Link2,
          features: [
            'CRM-ready from day one',
            'Local SEO-supportive structure',
            'Review and reputation foundations',
            'Booking and calendar connections',
            'Tracking and reporting wired in',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit?',
      description:
        'This works for businesses that want a WordPress site connected to how they actually operate — not just a set of pages.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: "People visit your site but don't get in touch",
          description:
            'Traffic is there. The build looks fine. But enquiries are thin, and the ones that come through take too long to handle.',
        },
        {
          title: "Your services aren't listed the way people search",
          description:
            "Everything is bundled. Someone looking for one specific thing can't find it. They leave and try the next business.",
        },
        {
          title: 'You want CRM, SEO, and automation to connect',
          description:
            'Future systems need something structured underneath. A site built for integration saves rebuilding later.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You just need a template swapped out',
          description:
            "If the goal is a fresh theme and nothing else, this approach adds structure you don't need.",
        },
        {
          title: "Enquiries are steady and nothing's being missed",
          description:
            "If the current site converts well and leads are handled, a rebuild won't change much.",
        },
        {
          title: 'You need custom software, not a business website',
          description:
            'This is for service businesses that need a site working for them. Not SaaS or app development.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about WordPress development',
      description: 'What business owners ask before committing to a WordPress build.',
      faqs: [
        {
          question: 'We already have a WordPress site. Do we need a new one?',
          answer:
            "Not always. Sometimes the structure is fine and it just needs connecting to CRM, follow-up, and proper routing. We'll tell you which.",
        },
        {
          question: 'Does the builder or theme matter?',
          answer:
            'Less than people think. What matters is whether the site handles enquiries properly. The builder choice follows from the project, not the other way around.',
        },
        {
          question: 'Will this help us show up on Google?',
          answer:
            "A well-structured site with individual service pages gives search engines something useful to index. That's the foundation local SEO builds on.",
        },
        {
          question: 'What happens after launch?',
          answer:
            "Your team runs it. Documentation, walkthrough, and a site built so you don't need us to make changes.",
        },
      ],
      cssPrefix: 'wordpress-development-faq',
    },
    comparison: {
      header: {
        title: 'Pages-first build vs enquiry-first build',
        description:
          "Most WordPress projects focus on pages, templates, and launch day. Here's what that costs compared to building around how the business actually gets work.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Pages-first build',
          items: [
            'Services lumped together on one page. Someone looking for one thing scrolls past everything else and leaves.',
            'Contact form goes to a shared inbox. Whoever remembers to check it responds. Could be hours later.',
            'No follow-up after someone enquires. The lead goes cold while the team handles other work.',
            'No visibility into where visitors come from or what they do. Marketing spend is blind.',
            "CRM, SEO, and automation need a complete rework because the build wasn't designed for them.",
          ],
        },
        {
          type: 'after' as const,
          title: 'Enquiry-first build',
          items: [
            'Each service on its own page. Visitors find what they need and act.',
            'Enquiries arrive with context. The right person picks up in minutes.',
            'Follow-up goes out automatically. Confirmations, reminders, check-ins — without manual effort.',
            'Tracking shows which channels bring real enquiries. Spend goes where it works.',
            'CRM, local SEO, and reviews connect cleanly because the foundation was built for it.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What changed for a real business',
        description:
          "A trades company had a professional WordPress site. Traffic was decent. Enquiries were thin. The build wasn't the problem — but the site wasn't doing anything with the visitors it had.",
      },
      cards: [
        {
          title: 'Before: good site, quiet phone',
          description:
            'Clean WordPress build. Responsive. Fast. But all services on one page, form going to a generic inbox, and no follow-up at all.',
          points: [
            "All services bundled together. Visitors looking for one thing couldn't find it quickly and left.",
            'Form submissions sat unread for hours. By the time someone replied, the customer had moved on.',
            'No tracking. No idea which channels were bringing visitors or whether they converted.',
          ],
        },
        {
          title: 'What we changed: same WordPress, different outcome',
          description:
            'Services split into their own pages. Forms routed to the right person with context. Follow-up automated. CRM connected.',
          points: [
            'Each service got its own page written around what people actually search for.',
            'Enquiries hit the CRM with name, number, and service interest. The right team member picked it up.',
            'Confirmation went out in seconds. Follow-up ran on its own. Nothing depended on someone remembering.',
          ],
          featured: true,
        },
        {
          title: 'After: same traffic, actual work coming through',
          description:
            'Enquiries went up without extra marketing spend. The team stopped losing leads to slow responses and started converting the visitors who were already there.',
          points: [
            'Enquiry volume doubled from the same traffic. People could find the right service and act.',
            'Response time dropped from hours to minutes. Automated routing beat manual inbox checking.',
            "First time the business could see which channels produced real enquiries — and cut the ones that didn't.",
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Not sure if the build is the real problem?',
    description:
      "Send us your URL. We'll show you where visitors are dropping off and whether it's a build issue or something deeper.",
  },
  cta: {
    title: "Show us what's not working",
    description:
      "Tell us about your site and how enquiries come in. We'll tell you what's costing you leads and what to fix first.",
  },
} satisfies ServicePageData;
