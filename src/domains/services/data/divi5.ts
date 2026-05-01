import { Code, Eye, Layers, Search, Settings, Smartphone, Sparkles, Zap } from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'divi5';

export const divi5Page = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Divi WordPress Development | MindWP',
    description:
      "Divi gives your team flexible editing and visual control. But editing freedom doesn't fix a website that isn't bringing in work. Here's what to look at first.",
  }),
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  badge: 'Divi Builder',
  category: 'Implementation Services',
  hero: {
    badge: 'Divi Builder',
    title: "Your Team Can Edit Everything. Enquiries Still Don't Come.",
    description:
      "Divi gives your team the freedom to update anything on the site without calling a developer. The problem is nobody's calling you either. Visitors land, browse, and move on.",
    list: ['Easy editing', 'Low enquiries', 'No follow-up'],
    cssPrefix: 'divi5-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: "We build with Divi. But the builder isn't what needs fixing.",
      description1:
        'Flexible editing, visual control, strong community. If your team needs to make updates without developer help, Divi is a sensible choice. We use it when the project fits.',
      description2:
        "But giving your team easier editing doesn't fix a site that isn't converting visitors into work. Enquiry handling, follow-up, and routing — that's where most sites fall apart. The full picture starts with Smart Websites.",
    },
    benefitsSection: {
      badge: 'What Actually Drives Results',
      title: 'Editing freedom is useful. What happens when someone visits is what matters.',
      cssPrefix: 'divi5-benefits',
      backgroundColor: 'bg-base' as const,
      items: [
        {
          icon: Zap,
          title: 'Divi keeps your team independent',
          description:
            "Content updates, page tweaks, visual changes — your team handles them. That saves time and money. It doesn't bring in more work.",
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Responsive layouts work across devices',
          description:
            'The site adapts to phones, tablets, desktops. People can find you anywhere. Finding you and reaching out are different things.',
          iconType: 'accent' as const,
        },
        {
          icon: Code,
          title: 'Clean templates keep things consistent',
          description:
            "Organised sections and governed editing mean the site doesn't drift. That's good housekeeping. Not lead generation.",
          iconType: 'secondary' as const,
        },
        {
          icon: Layers,
          title: 'The gap is between the visit and the phone call',
          description:
            'Someone finds your site on their phone. Can they see the exact service they need? Is the next step obvious? Does your team know they visited?',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Search-ready pages need somewhere useful to send people',
          description:
            'Good markup helps Google index the site. Ranking for a page with no clear call to action just sends traffic to a dead end.',
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: "A governed build stays tidy — it doesn't grow revenue",
          description:
            "Your site stays consistent and easy to manage. That protects the investment. It doesn't create new business.",
          iconType: 'secondary' as const,
        },
      ],
    },
    featureSection: {
      badge: 'What The Build Covers',
      title: 'What a Divi build looks like as part of something bigger',
      cssPrefix: 'divi5-features',
      columns: 3 as const,
      categories: [
        {
          title: 'Visual Quality',
          description: 'The design foundation Divi handles well',
          icon: Eye,
          features: [
            'Faithful design conversion',
            'Consistent spacing and type',
            'Responsive across breakpoints',
            'Team-friendly editing',
            'Reusable template structure',
            'Style governance built in',
          ],
        },
        {
          title: 'Enquiry Handling',
          description: 'What turns visitors into real leads',
          icon: Code,
          features: [
            'Forms that capture the right details',
            'Routing to the right person',
            'Immediate visitor confirmation',
            'Automated follow-up sequences',
            'Missed enquiry alerts',
            'Every lead logged and visible',
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
            'Location and coverage visible',
            'Real answers, not filler',
          ],
        },
        {
          title: 'Connected Foundations',
          description: 'What the build plugs into',
          icon: Sparkles,
          features: [
            'CRM connected from day one',
            'Booking tools wired in',
            'Tracking shows where people come from',
            'Review and reputation ready',
            'Local SEO foundations in place',
            'Team manages content independently',
          ],
        },
        {
          title: 'Content Management',
          description: 'What your team can handle on their own',
          icon: Layers,
          features: [
            'Update pages without a developer',
            'Reusable sections and layouts',
            'Global styles stay consistent',
            'New pages follow the same structure',
            'Media and images managed cleanly',
            'Version-friendly workflow',
          ],
        },
        {
          title: 'Performance Basics',
          description: 'What keeps the site quick and stable',
          icon: Zap,
          features: [
            'Optimised images and assets',
            'Lazy loading where it helps',
            'Minimal plugin overhead',
            'Fast page loads',
            'Clean output for search engines',
            'Core Web Vitals considered',
          ],
        },
      ],
    },
    whySection: {
      badge: 'The real question',
      title: 'Is the builder your problem — or is the site just not converting?',
      description:
        "Divi gives you editing power and visual control. Most Divi sites we see work perfectly well as websites. They just don't bring in work because nothing handles what arrives.",
      columns: 3 as const,
      cssPrefix: 'divi5-why',
      backgroundColor: 'bg-base' as const,
      variant: 'bordered' as const,
      items: [
        {
          title: 'The editing experience is fine',
          description:
            'Your team can update content, swap images, adjust layouts. The tool works as advertised.',
        },
        {
          title: 'Visitors still leave without acting',
          description:
            'All your services sit on one page. Someone looking for one thing scrolls past everything and gives up.',
        },
        {
          title: 'Enquiries go to the wrong place',
          description:
            'Forms submit to a generic email. Whoever checks it first responds. Could be hours. Could be days.',
        },
        {
          title: 'Nobody follows up',
          description:
            'A lead gets in touch Monday morning. Your team is flat out. By Wednesday, that person hired someone else.',
        },
        {
          title: 'The site looks good on every device',
          description:
            "Responsive layouts, clean fonts, proper spacing. None of that matters if there's no clear next step.",
        },
        {
          title: 'Nothing connects underneath',
          description:
            'No CRM. No tracking. No automated anything. Every lead depends on someone remembering.',
        },
      ],
    },
    processSection: {
      badge: 'How We Work',
      title: 'We start with the business — Divi comes in when it fits',
      description:
        'Before choosing a builder, we figure out what your site actually needs to achieve. Sometimes Divi is ideal. Sometimes the builder choice is irrelevant to the problem.',
      columns: 3 as const,
      cssPrefix: 'divi5-process',
      backgroundColor: 'bg-alt' as const,
      steps: [
        {
          number: '1',
          title: "Figure out what's not working",
          description:
            'Is it the design? The structure? The way enquiries are handled? We diagnose before recommending anything.',
          icon: Eye,
        },
        {
          number: '2',
          title: 'Map how visitors should become customers',
          description:
            'Which services need their own presence, what happens when someone gets in touch, where things drop off now.',
          icon: Layers,
        },
        {
          number: '3',
          title: 'Build with the right approach',
          description:
            'If Divi fits your team and project, we use it. Clean templates, governed editing, responsive layouts.',
          icon: Zap,
        },
        {
          number: '4',
          title: 'Connect enquiry handling and follow-up',
          description:
            'Forms, CRM, routing, confirmations, and reminders all wired in. Your team handles the work. The site handles the chasing.',
          icon: Smartphone,
        },
        {
          number: '5',
          title: 'Test the full visitor journey',
          description:
            'Not just visual checks. We verify someone can find a service, reach out, and get handled properly.',
          icon: Code,
        },
        {
          number: '6',
          title: 'Handover with documentation',
          description:
            'Your team knows how to update content, check enquiries, and manage the site without us.',
          icon: Settings,
        },
      ],
    },
  },
  cta: {
    heading: {
      title: "Not sure if the builder is what's holding you back?",
      description:
        "Tell us what your site isn't doing. We'll work out whether it's a build problem or something the builder can't solve.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
