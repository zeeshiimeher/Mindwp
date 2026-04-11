import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Globe,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const smartWebsitesFaqItems = [
  {
    question: 'What makes this different from a regular website?',
    answer:
      'A regular website displays information. This captures enquiries, routes them to the right person, and follows up automatically. The difference is between a brochure and a system that brings in work.',
  },
  {
    question: 'We already have a website. Can you improve it?',
    answer:
      'If the foundation is sound, we rebuild the enquiry flow, connect it to your CRM, and set up follow-up. If the site is beyond repair, we tell you upfront and recommend starting fresh.',
  },
  {
    question: 'Do we need a specific CRM?',
    answer:
      'No. We connect to whatever you use — or set up something simple if you have nothing. The point is that every enquiry lands somewhere your team can act on it immediately.',
  },
  {
    question: 'Will this help us show up on Google?',
    answer:
      'Yes. Each service gets its own page with titles and descriptions matching what people actually search. Google can read and index your services properly, which means you start appearing for local searches.',
  },
  {
    question: 'Do I need to know anything technical?',
    answer:
      'No. We handle everything technical. After launch, updating text or images is straightforward. Your team gets a walkthrough before handover.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'You get documentation and training. Your team manages pages, checks enquiries, and updates content independently. Some businesses prefer ongoing support — that option is available too.',
  },
  {
    question: 'How long does the build take?',
    answer:
      'Four to six weeks for most businesses. Complex setups with multiple locations, booking, or payment connections can take eight to twelve weeks. You get a realistic timeline before anything starts.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on service count, integrations, and content scope. No mystery pricing — you get a clear number before we begin.',
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
    title: 'Smart Website Systems for Service Businesses | MindWP',
    description:
      'Websites that capture every enquiry, route it to the right person, and follow up automatically. Built for service businesses losing leads to broken websites.',
    schemaName: 'Smart website systems for service businesses',
    schemaDescription:
      'A website system that turns visitors into tracked enquiries — with dedicated service pages, CRM integration, automated follow-up, and measurable conversion paths.',
  }),
  hero: {
    badge: 'Smart Website Systems',
      title: 'Smart Websites That Capture Route and Follow Up',
    description:
      'Visitors land on your site, look around, and leave — because nothing tells them what to do next. When someone does get in touch, their details sit in an inbox nobody checks. This is not a design problem. Your website was never built to bring in business.',
    list: [
        'Service Pages',
        'Lead Routing',
        'Auto Follow-up',
    ],
  },
  sections: {
    value: {
      header: {
        title: 'What a broken website costs you every week',
        description:
          'Your website costs money to build and money to maintain — but it does not bring in work. Here is what that looks like in practice.',
      },
      items: [
        {
          icon: AlertTriangle,
          title: 'Enquiries disappear before anyone sees them',
          description:
            'Someone fills in your form. The email lands in a shared inbox. Nobody is sure who should reply. By the time someone checks, the customer has already called a competitor.',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Google cannot tell what you do',
          description:
            'All your services sit on one page with no clear title or description. When someone searches for what you offer nearby, Google has no reason to show your business.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Half your visitors see a broken layout on their phone',
          description:
            'Buttons overlap, text is too small, and the contact form takes three attempts to fill in. Half of your traffic gives up before doing anything.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'Nobody follows up after first contact',
          description:
            'A lead comes in on a busy day. Your team means to reply but forgets. A week later the opportunity is cold and gone — and you never knew it existed.',
          iconType: 'primary' as const,
        },
        {
          icon: BarChart3,
          title: 'You cannot measure what is working',
          description:
            'You do not know how many people visited, which pages they looked at, or where they left. You spend money on marketing with no way to see what comes back.',
          iconType: 'primary' as const,
        },
        {
          icon: Users,
          title: 'You lose customers you already attracted',
          description:
            'People find you and they are interested — but your website does not help them take the next step. They leave, and you never know they were there.',
          iconType: 'primary' as const,
        },
      ],
    },
    comparison: {
      header: {
        title: 'A typical website vs one built to bring in work',
        description:
          'The question is not whether you have a website. It is whether yours is costing you business every day.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'What most businesses are running',
          items: [
            'One generic services page — visitors cannot find the specific thing they need',
            'Contact form goes to a shared inbox nobody checks consistently',
            'No way to know how many visitors you get, where they come from, or what they look at',
            'No connection between the website and any CRM, calendar, or booking tool',
            'The site has not been touched since it was built',
          ],
        },
        {
          type: 'after' as const,
          title: 'What a smart website does instead',
          items: [
            'Each service has its own page — visitors find what they need and know what to do next',
            'Enquiry details go straight to the right person with name, number, and context',
            'You see which pages get visits, where visitors leave, and what drives enquiries',
            'Forms, CRM, booking, and follow-up are connected — nothing slips through',
            'The site is maintained, backed up, and kept working every day',
          ],
        },
      ],
    },
    included: {
      header: {
        title: 'What your website includes — scope and delivery',
        description: 'Every build follows the same standard. These are not add-ons. This is the baseline.',
      },
      items: [
        'WordPress website built around your services and how customers find you',
        'Enquiry forms that route details to the right person with full context',
        'CRM or booking tool connected so every lead is captured automatically',
        'Automated confirmations, reminders, and follow-up emails',
        'Tracking so you know where visitors come from and what they do',
        'SSL, daily backups, and security configured from day one',
        'Tested and working properly on phones, tablets, and desktops',
        'Pages written so Google can index and show your services locally',
        'Documentation and team training so you manage it independently',
      ],
    },
    types: {
      header: {
        title: 'Built for businesses where every enquiry counts',
        description:
          'If your revenue depends on people contacting you, booking a time, or placing an order — your website needs to earn that action.',
      },
      items: [
        {
          icon: Briefcase,
          title: 'Service businesses',
          description: 'Plumbers, accountants, consultants — each service listed clearly, contact obvious, every enquiry captured and routed.',
          keywords: 'Clear services • Easy contact • Enquiries captured',
          iconType: 'primary' as const,
        },
        {
          icon: Store,
          title: 'Online shops',
          description: 'Products, checkout, orders, and delivery managed through WooCommerce. Customers browse, buy, and pay in one place.',
          keywords: 'Products • Checkout • Order management',
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Appointment-based businesses',
          description: 'Salons, clinics, trainers — booking built into the website. Customers pick a time without calling. Reminders go out automatically.',
          keywords: 'Online booking • Reminders • Availability',
          iconType: 'primary' as const,
        },
        {
          icon: Building2,
          title: 'Focused landing pages',
          description: 'One page. One offer. One next step. Built for specific campaigns or services that need to drive a measurable action.',
          keywords: 'One offer • Clear action • Measurable result',
          iconType: 'primary' as const,
        },
      ],
    },
    coreLayer: {
      header: {
        title: 'How it works — from visitor to enquiry to follow-up',
        description:
          'This is one connected system. A visitor arrives, sees what you offer, takes action, and your team picks it up — without anything falling through the cracks.',
      },
      cards: [
        {
          title: 'Every service gets its own page — visitors find what they need',
          description: 'Someone lands on your site looking for a specific service. They see it immediately, read what you do, and know how to get in touch. No scrolling through a long list.',
          points: [
            'Each service listed clearly with its own dedicated page',
            'Every page has a form, phone number, or booking button',
            'Pages written for your customers, not your team',
          ],
          featured: true,
        },
        {
          title: 'Google sees your services and shows you in local searches',
          description:
            'Each page has a title and description matching what customers actually type into Google. When someone nearby searches for your services, Google has a reason to show your business.',
          points: [
            'Each service has its own page with a specific title',
            'Titles and descriptions match the words your customers search for',
            'Pages link to each other so Google sees the full range of what you offer',
          ],
        },
        {
          title: 'Enquiries go straight into your CRM with full context',
          description: 'Someone fills in a form, books a call, or sends a message. Their name, number, and what they need land in your CRM instantly — no copying from emails, no re-typing into spreadsheets.',
          points: [
            'Forms send details to the right person automatically',
            'Booking calendar shows availability without manual updates',
            'Every enquiry tracked — nothing gets lost',
          ],
        },
        {
          title: 'Follow-up happens without your team lifting a finger',
          description:
            'Someone books a call — they get a confirmation. No reply yet — a reminder goes out. Your team focuses on the work instead of chasing replies.',
          points: [
            'New enquiries get an automated reply within minutes — even outside hours',
            'Appointment reminders sent the day before, every time',
            'Follow-up sequences run until the customer responds',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A roofing company came to us with a website that looked fine but was not bringing in work. Here is what was happening — and what changed after the rebuild.',
      },
      cards: [
        {
          title: 'Before: professional-looking website, no enquiries',
          description: 'The roofing company had a decent website. All services listed on one page, the contact form went to a shared email, and nobody could tell where leads came from or where they went.',
          points: [
            'All services crammed onto a single page',
            'Enquiries landed in a shared inbox — missed for days',
            'No CRM, no follow-up, no tracking',
          ],
        },
        {
          title: 'What we built: website connected to CRM and follow-up',
          description: 'We rebuilt the site with a dedicated page for each roofing service, connected forms to a CRM, set up automated follow-up, and added tracking so the business could see where every enquiry came from.',
          points: [
            'Each roofing service given its own optimised page',
            'Enquiry forms connected directly to CRM pipeline',
            'Automated confirmation emails and follow-up reminders configured',
          ],
          featured: true,
        },
        {
          title: 'After: more enquiries, faster response, nothing missed',
          description: 'Within two months, enquiry volume exceeded the previous six months combined. Every lead was captured, followed up, and tracked. Google started showing the business for local roofing searches.',
          points: [
            'Enquiry volume increased significantly within two months',
            'Response time dropped from days to minutes',
            'Every lead tracked from first visit to booked appointment',
          ],
        },
      ],
    },
    visibilityFoundations: {
      header: {
        title: 'What changes for your business when the website works',
        description:
          'This is not about a nicer site. It is about what happens in your business when the website starts doing its job — bringing in real work, consistently.',
      },
      tagline: 'Fix the website. Everything else starts working.',
      narrativeTitle: 'Why ads, SEO, and social media only work when your website does',
      narrativeParagraphs: [
        'You spend on Google ads. You post on social media. You are listed on directories. People click — but the phone does not ring. That is not a marketing problem. It is a website problem. Visitors arrive and do not know what to do.',
        'When your site shows each service clearly, puts a form on every page, and sends enquiry details straight to your team with automated follow-up — the same traffic you already pay for starts turning into real work. Every pound you spend on marketing goes further.',
      ],
      items: [
        {
          icon: TrendingUp,
          title: 'Marketing spend starts paying back',
          description:
            'The traffic you already pay for starts converting. Visitors find what they need, get in touch, and your team follows up before the opportunity goes cold.',
          keywords: 'More return • Less waste • Measurable results',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Your team spends less time chasing and more time delivering',
          description: 'Enquiries arrive with full context. Follow-up runs on its own. Your team handles the work instead of checking inboxes and sending reminders.',
          keywords: 'Less admin • Faster response • Better focus',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Google sends you customers without paying for every click',
          description: 'Service pages with clear titles and descriptions mean Google can understand what you offer and show you when people nearby are searching.',
          keywords: 'Organic visibility • Local search • Long-term traffic',
          iconType: 'primary' as const,
        },
      ],
    },
    qualification: {
      header: {
        title: 'Is this the right fit for your business?',
        description: 'This service is built for a specific type of business. Here is how to tell whether it fits — or whether something else makes more sense.',
      },
      strongFitTitle: 'This is a strong fit if',
      notForTitle: 'This probably is not for you if',
      strongFit: [
        {
          title: 'Your website gets visitors but does not generate enquiries',
          description: 'People find your site but do not contact you. The website needs to guide them toward action, not just display information.',
        },
        {
          title: 'Enquiries get lost or take too long to follow up',
          description: 'Leads go to a shared inbox and slip through the cracks. You need forms connected to a CRM with automated follow-up.',
        },
        {
          title: 'You spend on ads but cannot see what is working',
          description: 'Traffic comes in but you have no way to measure which pages convert, where visitors leave, or what drives actual business.',
        },
        {
          title: 'Your services do not show up when people search nearby',
          description: 'You offer real services in a real area but Google does not show your business because the site does not give it enough to work with.',
        },
      ],
      notFor: [
        {
          title: 'You need a simple one-page site with no integrations',
          description: 'If you do not need a CRM, booking system, or follow-up — a simpler build is a better fit.',
        },
        {
          title: 'Your current enquiry volume is already where you need it',
          description: 'If your website already brings in the work you need and nothing gets missed, this level of rebuild may not be necessary.',
        },
        {
          title: 'You need an e-commerce store, not a service website',
          description: 'If your primary need is product-based selling, our e-commerce implementation is a better starting point.',
        },
      ],
    },
    process: {
      header: {
        badge: 'How it works',
        title: 'From conversation to a website that brings in work',
        description: 'We do not start with design. We learn how your business works, where enquiries fall apart, and what the website needs to do. Then we build it.',
      },
      steps: [
        {
          number: '1',
          title: 'We learn how your business runs',
          description:
            'We ask about your services, how customers find you, where enquiries drop off, and what tools you use. This shapes everything we build.',
        },
        {
          number: '2',
          title: 'We plan the site around your services and customers',
          description:
            'Before anything is designed, we map out which pages you need, what each one should say, and how visitors go from landing on your site to getting in touch.',
        },
        {
          number: '3',
          title: 'We build and connect everything',
          description:
            'Your site goes live on WordPress. Forms send enquiry details into your CRM, follow-up emails go out automatically, and you can see where every visitor comes from.',
        },
        {
          number: '4',
          title: 'We hand over, train your team, and confirm it works',
          description:
            'Everything is tested and live. Your team gets documentation and a walkthrough so they can manage the site, check enquiries, and update content independently.',
        },
      ],
    },
    faq: {
      header: {
        title: 'Common questions before getting started',
        description: 'Straight answers to what business owners ask most before committing.',
      },
      items: smartWebsitesFaqItems,
    },
  },
  cta: {
    title: 'Send us your website — we will tell you what is costing you enquiries',
    description:
      'Share your website link and a few details about your business. We review it and come back with a clear breakdown of what is working, what is losing you leads, and what it would take to fix it.',
  },
  inlineCta: {
    title: 'Not sure how many enquiries your website is losing?',
    description:
      'Send us your site. We will give you an honest assessment of where visitors are dropping off, what is missing, and what you could change to start getting more enquiries.',
  },
} satisfies ServicePageData;
