import {
  Code,
  Database,
  Eye,
  Layers,
  Palette,
  Search,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'bricks-builder';

export const bricksBuilderPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Bricks Builder WordPress Development | MindWP',
    description:
      "Bricks Builder produces fast, clean WordPress sites. But clean code alone doesn't convert visitors into enquiries. Here's what to get right first.",
  }),
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  badge: 'Bricks Builder',
  category: 'Implementation Services',
  hero: {
    badge: 'Bricks Builder',
    title: 'Your Site Loads Fast. Nobody Gets In Touch.',
    description:
      "Bricks gives you clean code and quick pages. Visitors land, browse, leave. The builder did its job. The website didn't do anything with the attention.",
    list: ['Fast pages', 'Low enquiries', 'No follow-up'],
    cssPrefix: 'bricks-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: 'We build with Bricks. The builder was never the real problem.',
      description1:
        "Clean markup, fast output, genuine developer control. If you're comparing builders, Bricks is a strong choice. We use it on projects where performance and code quality matter.",
      description2:
        "But a faster site doesn't fix a site that isn't doing anything with visitors. Enquiries, follow-up, lead handling — that's where most websites actually fall apart. The full picture starts with Smart Websites.",
    },
    benefitsSection: {
      badge: 'What Actually Changes Results',
      title: 'Speed and clean code are table stakes. What happens next is what counts.',
      cssPrefix: 'bricks-benefits',
      backgroundColor: 'bg-base' as const,
      items: [
        {
          icon: Zap,
          title: 'Fast pages keep people around longer',
          description:
            "Bricks output is genuinely quick. Visitors don't bounce from slow loads. But staying longer doesn't mean getting in touch.",
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Responsive builds work on every device',
          description:
            'Intentional breakpoints mean the site looks right on phones, tablets, desktops. Looking right and converting visitors are different problems.',
          iconType: 'accent' as const,
        },
        {
          icon: Code,
          title: 'Clean code makes future changes easier',
          description:
            "Semantic markup and minimal bloat mean updates don't break things. That protects the build. It doesn't bring in work.",
          iconType: 'secondary' as const,
        },
        {
          icon: Database,
          title: 'The real gap is between the visit and the enquiry',
          description:
            "Someone finds your site. Do they see the right service? Can they reach the right person? Does anyone follow up? That's where results live.",
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Search-ready structure needs somewhere useful to land',
          description:
            'Clean HTML helps Google read the site. But traffic to a page with no clear next step just means more people leaving.',
          iconType: 'accent' as const,
        },
        {
          icon: Shield,
          title: 'Maintainability keeps things stable — not growing',
          description:
            "A well-organised build stays manageable over time. Good. But it doesn't generate enquiries, route them, or follow up.",
          iconType: 'secondary' as const,
        },
      ],
    },
    whySection: {
      badge: 'The real question',
      title: 'Is the builder your problem — or what happens after someone visits?',
      description:
        "Bricks produces excellent output. But most sites we see have a capable builder underneath and still lose leads. The site doesn't route enquiries, follow up, or track what happens. Those aren't builder problems.",
      items: [
        {
          title: 'The build quality is fine',
          description:
            'Clean output, fast pages, developer-friendly configuration. Bricks does what it should.',
        },
        {
          title: 'Visitors still leave quietly',
          description:
            "Someone arrives, scrolls around, can't find the specific service they need. They try the next business.",
        },
        {
          title: 'Enquiries reach the wrong place',
          description:
            "A form submission lands in an inbox nobody checks until evening. By then they've called someone else.",
        },
        {
          title: 'Nothing happens after first contact',
          description:
            'No confirmation. No reminder. No follow-up sequence. The lead goes cold while your team works.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'bricks-why',
      backgroundColor: '',
      iconType: 'checkmark' as const,
    },
    processSection: {
      badge: 'How We Work',
      title: 'We start with what the site needs to do — then pick the right builder',
      description:
        "Builder choice comes after we understand your services, how people reach you, and where things drop off. Sometimes that's Bricks. Sometimes the build isn't the problem at all.",
      steps: [
        {
          number: '1',
          title: "Understand what's actually broken",
          description:
            'Load speed? Page structure? Enquiry handling? Follow-up? We figure out the real problem before recommending a build.',
          icon: Eye,
        },
        {
          number: '2',
          title: 'Map how visitors become enquiries',
          description:
            'Which services need their own pages, how someone moves from browsing to contact, what happens after they reach out.',
          icon: Layers,
        },
        {
          number: '3',
          title: 'Build with the right tools',
          description:
            'If Bricks fits, we use it. Clean layouts, fast output, proper responsive work. The builder serves the plan.',
          icon: Zap,
        },
        {
          number: '4',
          title: 'Connect forms, CRM, and follow-up',
          description:
            'Enquiries go to the right person. Confirmations go out immediately. Follow-up runs without your team remembering.',
          icon: Smartphone,
        },
        {
          number: '5',
          title: 'Test the full journey',
          description:
            'We check that someone can find a service, reach out, and get handled properly. Not just that the site loads fast.',
          icon: Code,
        },
        {
          number: '6',
          title: 'Handover with documentation',
          description:
            'Your team gets a walkthrough, documentation, and a site they can manage without us.',
          icon: Shield,
        },
      ],
      columns: 3 as const,
      cssPrefix: 'bricks-process',
      backgroundColor: 'bg-alt' as const,
    },
    featureSection: {
      badge: 'What The Build Covers',
      title: 'What a Bricks build looks like as part of something bigger',
      cssPrefix: 'bricks-features',
      categories: [
        {
          title: 'Clean Build Quality',
          description: 'The technical foundation Bricks does well',
          icon: Zap,
          features: [
            'Fast, clean page output',
            'Intentional responsive breakpoints',
            'Proper spacing and typography',
            'Minimal plugin reliance',
            'Semantic markup for search',
            'Organised component structure',
          ],
        },
        {
          title: 'Enquiry Handling',
          description: 'What makes the site actually produce results',
          icon: Code,
          features: [
            'Forms that capture the right details',
            'Routing to the right person on your team',
            'Immediate confirmations to the visitor',
            'Follow-up that runs on its own',
            'Missed-call handling and notifications',
            'Every enquiry logged and tracked',
          ],
        },
        {
          title: 'Service Clarity',
          description: 'What visitors need before they reach out',
          icon: Database,
          features: [
            'Each service on its own page',
            'Clear next steps on every page',
            'Written how people search for help',
            'Mobile-friendly contact paths',
            'Area coverage visible',
            'Real content, not placeholder blocks',
          ],
        },
        {
          title: 'Connected Foundations',
          description: 'What the build plugs into',
          icon: Palette,
          features: [
            'CRM receives every lead automatically',
            'Booking tools connected from day one',
            'Tracking shows where visitors come from',
            'Review and reputation ready',
            'Local SEO foundations built in',
            'Your team manages content independently',
          ],
        },
      ],
    },
  },
  cta: {
    heading: {
      title: 'Not sure if the builder is your actual problem?',
      description:
        "Tell us what's happening with your website visitors — or what isn't. We'll tell you whether it's a build issue or something the site itself can't fix.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
