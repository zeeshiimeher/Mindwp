import {
  Code,
  Eye,
  Layers,
  Layout,
  Search,
  Settings,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'elementor';

export const elementorPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  badge: 'Elementor',
  category: 'Implementation Services',
  seo: buildServiceSeo({
    slug,
    title: 'Elementor WordPress Development | MindWP',
    description:
      "Elementor gives you visual control and flexible editing. But pixel-perfect pages don't bring in work on their own. Here's what most Elementor sites are missing.",
  }),
  hero: {
    badge: 'Elementor',
    title: "The Design Looks Great. The Phone Doesn't Ring.",
    description:
      'Elementor gives you visual control, flexible editing, polished layouts. The site looks exactly how you wanted. Visitors arrive, scroll through it, and leave without reaching out.',
    list: ['Polished design', 'Low enquiries', 'No follow-up'],
    cssPrefix: 'elementor-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: "We build with Elementor. But the builder isn't what's holding you back.",
      description1:
        'Visual accuracy, flexible editing, strong community support. If your team needs to update content without breaking the design, Elementor is a solid choice. We use it regularly.',
      description2:
        "But a better-looking site doesn't fix a site that isn't converting visitors into enquiries. That problem sits deeper than any builder can reach. The full picture starts with Smart Websites.",
    },
    benefitsSection: {
      badge: 'What Actually Drives Results',
      title: 'Design polish is table stakes. What happens after someone visits is what counts.',
      benefits: [
        {
          icon: Layout,
          title: 'Pixel-perfect pages keep things professional',
          description:
            'Elementor delivers visual fidelity. The site looks trustworthy. But looking trustworthy and earning enquiries are different things.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Responsive layouts work on every screen',
          description:
            "The site adapts to phones, tablets, desktops. Someone can browse it anywhere. That doesn't mean they'll get in touch.",
          iconType: 'accent' as const,
        },
        {
          icon: Code,
          title: 'Clean builds make future changes safer',
          description:
            "Organised templates and governed editing mean updates don't break things. Useful. But it won't generate a single lead.",
          iconType: 'secondary' as const,
        },
        {
          icon: Zap,
          title: 'The gap is between the visit and the phone call',
          description:
            "Someone finds your site. Can they see the specific service they need? Is the next step obvious? Does anyone know they visited? That's what changes results.",
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: "Search-ready structure only helps if there's somewhere to land",
          description:
            'Good markup helps Google find you. But ranking for a page with no clear action just sends more people to a dead end.',
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: "Editor-friendly sites stay consistent — they don't grow the business",
          description:
            "Your team can update content without calling a developer. That saves time. It doesn't bring in work.",
          iconType: 'secondary' as const,
        },
      ],
      cssPrefix: 'elementor-benefits',
      backgroundColor: 'bg-base' as const,
    },
    whySection: {
      badge: 'The real question',
      title: 'Is the builder holding you back — or is the website just not doing enough?',
      description:
        "Elementor gives you visual control and flexible editing. Most Elementor sites we see are well built. They're just not converting visitors because the site itself doesn't handle what comes in.",
      items: [
        {
          title: 'Elementor handles the design well',
          description:
            'Visual accuracy, drag-and-drop editing, strong ecosystem. The tool does its job.',
        },
        {
          title: 'But visitors still leave without acting',
          description:
            "Services are lumped together. The next step isn't obvious. Someone looking for one thing can't find it quickly enough.",
        },
        {
          title: 'Enquiries get lost between arrival and response',
          description:
            'A form goes to a generic inbox. Nobody sees it until end of day. The visitor has already rung someone else.',
        },
        {
          title: 'No follow-up after first contact',
          description:
            'Someone fills in a form and hears nothing for two days. No confirmation, no reminder, no next step.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'elementor-why',
      backgroundColor: '',
      iconType: 'checkmark' as const,
    },
    processSection: {
      badge: 'How We Work',
      title: 'We start with your business — the builder comes after',
      description:
        'Before picking a builder, we figure out what your site actually needs to do. Sometimes Elementor is the right tool. Sometimes the problem has nothing to do with the build.',
      steps: [
        {
          number: '1',
          title: "Understand what's not working",
          description:
            'Where are visitors dropping off? What happens when someone enquires? We start with the reality, not a wish list.',
          icon: Eye,
        },
        {
          number: '2',
          title: 'Map the visitor-to-enquiry path',
          description:
            'Which services need their own presence, how people get in touch, and what happens after they do.',
          icon: Layers,
        },
        {
          number: '3',
          title: 'Build with the right approach',
          description:
            'If Elementor fits, we use it. Clean layouts, governed editing, responsive work that holds up.',
          icon: Layout,
        },
        {
          number: '4',
          title: 'Connect forms, CRM, and follow-up',
          description:
            'Enquiries reach the right person. Confirmations go out straight away. Follow-up runs without anyone chasing.',
          icon: Smartphone,
        },
        {
          number: '5',
          title: 'Test the full journey',
          description:
            'Not just visual checks. We make sure someone can find what they need, reach out, and get handled properly.',
          icon: Code,
        },
        {
          number: '6',
          title: 'Hand over with documentation',
          description:
            'Your team gets a walkthrough and clear docs. They manage content and check enquiries from there.',
          icon: Settings,
        },
      ],
      columns: 3 as const,
      cssPrefix: 'elementor-process',
      backgroundColor: 'bg-alt' as const,
    },
    featureSection: {
      badge: 'What The Build Covers',
      title: 'What an Elementor build looks like as part of something bigger',
      categories: [
        {
          title: 'Visual Quality',
          description: 'The design foundation Elementor handles well',
          icon: Layout,
          features: [
            'Faithful design conversion',
            'Consistent spacing and typography',
            'Responsive across devices',
            'Governed editing paths',
            'Clean template structure',
            'Performance-conscious output',
          ],
        },
        {
          title: 'Enquiry Handling',
          description: 'What turns visitors into leads your team can act on',
          icon: Code,
          features: [
            'Forms that capture the right details',
            'Routing to the right person',
            'Immediate confirmations',
            'Follow-up that runs on its own',
            'Missed enquiry notifications',
            'Every lead logged and tracked',
          ],
        },
        {
          title: 'Service Clarity',
          description: 'What visitors need before they reach out',
          icon: Smartphone,
          features: [
            'Each service on its own page',
            'Clear next steps everywhere',
            'Written how people search for help',
            'Mobile-friendly contact paths',
            'Area and availability visible',
            'Real content that answers questions',
          ],
        },
        {
          title: 'Connected Foundations',
          description: 'What the build plugs into',
          icon: Sparkles,
          features: [
            'CRM connected from day one',
            'Booking tools wired in',
            'Tracking shows where visitors come from',
            'Review and reputation ready',
            'Local SEO foundations in place',
            'Your team manages content independently',
          ],
        },
      ],
      cssPrefix: 'elementor-features',
    },
  },
  cta: {
    title: 'Not sure if the design is your actual problem?',
    description:
      "Tell us what's happening — or not happening — when people visit your site. We'll figure out whether it's a build issue or something deeper.",
  },
} satisfies ServicePageData;
