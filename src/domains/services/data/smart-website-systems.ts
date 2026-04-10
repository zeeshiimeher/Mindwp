import {
  Briefcase,
  Building2,
  Calendar,
  Globe,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Store,
  Zap,
} from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const smartWebsitesFaqItems = [
  {
    question: 'What makes this different from a regular website?',
    answer:
      'A regular website shows what you do. This goes further — it makes sure visitors actually get in touch, their details are saved somewhere useful, and someone follows up. Think of it as the difference between a shop window and a shop with a counter, a till, and staff who greet you.',
  },
  {
    question: 'We already have a website. Can you just improve it?',
    answer:
      'Often, yes. If the bones are decent, we can rework it so it does a better job of turning visitors into enquiries. If the site is causing more problems than it solves, we\'ll be upfront and suggest starting fresh. We\'ll always tell you which makes more sense.',
  },
  {
    question: 'Do we need to use a specific CRM?',
    answer:
      'No. We connect the website to whatever you already use — or help you pick something simple if you don\'t have anything yet. The point is that when someone gets in touch, their details land somewhere you can actually act on them.',
  },
  {
    question: 'Will this help us show up on Google?',
    answer:
      'Yes. Each of your services gets its own page, titles and descriptions are written to match what people actually search for, and the whole site is built so Google can read and index it properly. That means Google can start showing your services to people nearby. If you want ongoing SEO work after that, the website is ready for it.',
  },
  {
    question: 'Do I need to know anything technical?',
    answer:
      'No. We deal with all of that. Once the site is live, things like changing a photo or updating text will be simple. We show your team how everything works before we hand it over.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'You get documentation, a walkthrough, and training so your team knows how to update pages, check enquiries, and manage the site day to day. Some businesses take it from there. Others prefer us to handle updates, monitoring, and changes on an ongoing basis. Either way works.',
  },
  {
    question: 'How long does it take to build?',
    answer:
      'Usually four to six weeks. If your business has a lot of services, multiple locations, or needs extra connections (like booking or payment), it can stretch to eight or twelve weeks. We\'ll give you a realistic timeline upfront.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on your situation — how many services you have, what connections you need, and how much of the content we\'re writing. We don\'t do mystery pricing. You\'ll get a clear number before anything starts.',
  },
];

export const smartWebsiteSystemsPage = {
  slug: 'smart-website-systems',
  systems: ['smart-website-systems'],
  topics: [
    'website-infrastructure',
    'lead-capture',
    'conversion-optimization',
    'crm-enabled-websites',
    'service-pages',
  ],
  keywords: [
    'smart website systems',
    'wordpress business website',
    'organised business website',
    'service business website',
    'website with crm integration',
  ],
  badge: 'Smart Websites',
  category: 'Website That Works',
  seo: buildServiceSeo({
    slug: 'smart-website-systems',
    title: 'A Website That Actually Brings In Enquiries',
    description:
      'Most business websites look fine but don\'t bring in enquiries. We build ones that do — clear pages, forms that go somewhere useful, and follow-up that actually happens.',
    schemaName: 'Smart website builds for service businesses',
    schemaDescription:
      'Business websites that turn visitors into enquiries — with clear service pages, enquiry forms that land in the right place, and nothing falling through the cracks.',
  }),
  hero: {
    badge: 'Is Your Website Actually Working?',
    title: 'Your website probably looks fine. The problem is what happens after someone visits.',
    description:
      'People land on your site. They look around. And then they leave — without calling, without emailing, without filling in a form. It\'s not because the design is bad. It\'s because the site doesn\'t tell them what to do next, and if they do get in touch, nobody gets notified.',
    primaryAction: {
      label: CTA_LABELS.SMART_WEBSITE_CONVERSION,
      href: buildServiceContactHref({
        system: 'smart-website-systems',
        slug: 'smart-website-systems',
      }),
    },
    list: [
      'Every page tells visitors exactly what to do next',
      'When someone fills in a form, you see it straight away — name, number, what they need',
      'Follow-up emails go out even if your team is busy or forgets',
    ],
  },
  sections: {
    value: {
      header: {
        title: 'What\'s actually missing from most business websites',
        description:
          'It\'s usually not the design. It\'s that the website was never set up to do anything beyond sit there. Here\'s what\'s different when your website is built to bring in enquiries and help you act on them.',
      },
      items: [
        {
          icon: Globe,
          title: 'Built on WordPress — you own it',
          description:
            'You\'re not locked into our tools or anyone else\'s platform. It\'s WordPress, it\'s yours, and your team can update it without calling us every time.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'Forms, CRM, and booking — all joined up',
          description:
            'When someone fills in a form, their name, number, and message go straight into your CRM or booking tool. No more copying details out of emails into spreadsheets.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Looks right on every screen',
          description:
            'Half your visitors are on their phone. The site works properly on mobile, tablet, and desktop — not just "sort of works."',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Google can actually understand it',
          description:
            'Each service has its own page. Titles make sense. The whole thing is set up so that when someone searches for what you do nearby, Google has a reason to show you.',
          iconType: 'primary' as const,
        },
        {
          icon: Shield,
          title: 'Security, backups, and updates — sorted',
          description:
            'SSL is on. Backups run every day. Updates don\'t break anything. If something goes wrong, we can roll it back in minutes.',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Enquiries reach the right person',
          description:
            'When someone contacts you, it doesn\'t vanish into a shared inbox nobody checks. It goes to the person who can actually deal with it.',
          iconType: 'primary' as const,
        },
      ],
    },
    comparison: {
      header: {
        title: 'What\'s different about how we build websites',
        description:
          'Most websites are built around a template and some nice photos. That\'s fine for looking good — but it doesn\'t help you win business. Here\'s how the two compare.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'A typical business website',
          items: [
            'Pages are arranged by the template — not by what you actually offer',
            'There\'s a contact form, but nobody\'s sure where the emails end up',
            'You have no idea how many people visit or what they do on the site',
            'Someone mentioned SEO once, but nothing was really done about it',
            'It\'s been the same since it was built and nobody\'s touched it',
          ],
        },
        {
          type: 'after' as const,
          title: 'A website built to bring in enquiries',
          items: [
            'Pages match your real services — visitors find what they\'re looking for',
            'When someone gets in touch, you know about it and can follow up properly',
            'You can see where visitors come from and what they\'re interested in',
            'Google can find your services because the site is set up properly',
          ],
        },
      ],
    },
    included: {
      header: {
        title: 'What you get with every website we build',
        description: 'These things come as standard. They\'re not add-ons and they\'re not optional — they\'re the whole point.',
      },
      items: [
        'A WordPress website built around your actual services — not a template',
        'Enquiry forms that send details to the right person, not a black hole',
        'Connected to your CRM or booking tool so nothing gets lost',
        'Basic tracking so you know what visitors are doing on your site',
        'Security, SSL, and backups handled properly from day one',
        'Works on phones, tablets, and desktops without breaking',
        'Set up so Google can read and show your services',
        'A proper backup plan so nothing is ever truly lost',
        'Documentation and training so your team can manage it day to day',
      ],
    },
    types: {
      header: {
        title: 'This works for all kinds of businesses',
        description:
          'Whether you sell your time, your products, or appointments — your website should show visitors exactly what you offer and give them a simple way to get in touch.',
      },
      items: [
        {
          icon: Briefcase,
          title: 'Service businesses',
          description: 'Plumbers, accountants, agencies, consultants — if people hire you for what you know, your website needs to make that obvious.',
          keywords: 'Services listed clearly • Easy to contact • Enquiries saved',
          iconType: 'primary' as const,
        },
        {
          icon: Store,
          title: 'Online shops',
          description: 'We build your shop on WooCommerce so customers can browse, buy, and check out — all in one place.',
          keywords: 'Products • Checkout • Orders',
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Appointment-based businesses',
          description: 'Salons, clinics, personal trainers — if your diary runs your business, we build booking right into the site.',
          keywords: 'Booking • Availability • Reminders',
          iconType: 'primary' as const,
        },
        {
          icon: Building2,
          title: 'Focused landing pages',
          description: 'Sometimes you just need one page that does one job: explain what you offer and get someone to take the next step.',
          keywords: 'One offer • Clear message • Simple next step',
          iconType: 'primary' as const,
        },
      ],
    },
    coreLayer: {
      header: {
        title: 'One website. Everything runs through it.',
        description:
          'Your CRM or booking tool, your email, your calendar — they all plug into one place. When someone fills in a form on your site, their details show up where your team already works. No copying, no re-typing, no missed messages.',
      },
      cards: [
        {
          title: 'Visitors see what you do and how to reach you — instantly',
          description: 'Someone lands on your site for the first time. Within five seconds they can see what services you offer, where you\'re based, and how to get in touch.',
          points: [
            'Your services are listed plainly — no guessing what you actually do',
            'Every page has a button, a form, or a phone number',
            'The menu is written for your customers, not your team',
          ],
          featured: true,
        },
        {
          title: 'When someone searches for what you do, Google shows you',
          description:
            'Each service has its own page with a clear title and description. Google reads that and knows exactly what to show when someone nearby searches for it.',
          points: [
            'Each service has its own dedicated page — not buried in a dropdown',
            'Pages link to each other so Google sees the full range of what you offer',
            'Titles and descriptions match the words your customers actually type into Google',
          ],
        },
        {
          title: 'Enquiries go straight into your CRM or booking tool',
          description: 'Someone fills in a form, books a call, or sends an enquiry — and it lands in your CRM or booking tool without anyone having to type it in again.',
          points: [
            'Forms send details to the right person automatically',
            'Your booking calendar shows availability without you updating it manually',
            'Follow-up emails and reminders go out without anyone pressing send',
          ],
        },
        {
          title: 'Confirmations, reminders, and follow-ups — handled',
          description:
            'Someone books a call? They get a confirmation email. Haven\'t heard back in two days? A reminder goes out. Your team doesn\'t touch any of it.',
          points: [
            'New enquiries get a reply within minutes — even outside office hours',
            'Appointment reminders go out the day before, every time',
            'Your team spends their day on the actual work, not chasing replies',
          ],
        },
      ],
    },
    visibilityFoundations: {
      header: {
        title: 'Sort your website out first — then everything else starts working',
        description:
          'Ads, SEO, social media — none of it works properly if people land on your site and don\'t know what to do. Get the website right and every pound you spend on marketing goes further.',
      },
      tagline: 'A clear website first — then ads, SEO, and the rest',
      narrativeTitle: 'Why nothing else works until your website does',
      narrativeParagraphs: [
        'You\'re paying for Google ads. You\'re posting on social media. You\'re listed on directories. But the phone isn\'t ringing. Usually it\'s not because nobody\'s clicking — it\'s because they land on your site and don\'t know what to do when they get there.',
        'When your website shows your services clearly, puts a form or phone number on every page, and sends enquiry details straight to your team — those same ads and posts suddenly start bringing in real business.',
      ],
      items: [
        {
          icon: Briefcase,
          title: 'Services people can actually find',
          description:
            'Each service gets its own page, written in plain English. Visitors know what you do in seconds — and so does Google.',
          keywords: 'One page per service • Easy to read • Easy to find',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'A clear way to get in touch on every page',
          description: 'No matter where someone is on your site, they always know what to do next — fill in a form, pick up the phone, or book a time.',
          keywords: 'Always a next step • No dead ends • Simple to act',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Set up so Google can show your business',
          description: 'Your pages, titles, and service descriptions are written so Google knows what you do and where you do it — and shows your business when people search nearby.',
          keywords: 'Google-ready • Local search • Service pages',
          iconType: 'primary' as const,
        },
      ],
    },
    process: {
      header: {
        badge: 'How it works',
        title: 'From a conversation to a website that actually does something',
        description: 'We don\'t jump straight into design. We learn how your business works first — what you offer, who your customers are, and how enquiries reach you today.',
      },
      steps: [
        {
          number: '1',
          title: 'We talk about your business',
          description:
            'We ask about your services, how people find you today, and where things fall apart. What you tell us decides which pages we build, what they say, and how your forms, CRM, and booking tools fit together.',
        },
        {
          number: '2',
          title: 'We plan what the site needs',
          description:
            'Before anyone starts designing, we figure out which pages you need, what each one should say, and how a visitor goes from landing on your site to getting in touch.',
        },
        {
          number: '3',
          title: 'We build it and connect everything up',
          description:
            'Your site goes live on WordPress. Forms send enquiries to the right person, your CRM or booking tool gets updated automatically, and you can see who\'s visiting and what they\'re looking at.',
        },
        {
          number: '4',
          title: 'We hand it over and make sure you\'re sorted',
          description:
            'Once everything is tested and live, we walk your team through it. You get clear documentation and training so you can manage it yourselves going forward.',
        },
      ],
    },
    faq: {
      header: {
        title: 'Things people ask before we start',
        description: 'Straight answers to the questions that come up most often.',
      },
      items: smartWebsitesFaqItems,
    },
  },
  cta: {
    title: 'Want to know what your website is actually missing?',
    description:
      'Send us your website link and tell us a bit about your business. We\'ll look through it and come back with an honest breakdown — what\'s working, what\'s not, and what you could do about it.',
  },
  inlineCta: {
    title: 'Not sure if your website is holding you back?',
    description:
      'No pressure, no commitment. We\'ll take a quick look at your site and give you an honest opinion on what\'s working and what isn\'t.',
  },
} satisfies ServicePageData;
