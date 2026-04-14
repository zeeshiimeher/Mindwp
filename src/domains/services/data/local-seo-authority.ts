import { Code, FileText, Globe, Layers, LineChart, Link2, Settings, Workflow } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'local-seo-authority';

export const localSeoAuthorityPage = {
  slug,
  systems: ['local-seo-authority'],
  topics: [
    'local-seo',
    'local-visibility',
    'google-business-profile',
    'local-authority',
    'authority-signals',
    'local-service-pages',
  ],
  keywords: [
    'local seo for service businesses',
    'local seo system for contractors',
    'google business profile optimization service',
    'local visibility system',
    'seo for home service companies',
  ],
  badge: 'Local SEO for Service Businesses',
  category: 'Visibility Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Local SEO for Service Businesses | Show Up When Customers Search | MindWP',
    description:
      'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
    schemaName: 'Local SEO services for service businesses',
    schemaDescription:
      'Ongoing local SEO that keeps your business appearing in local search — through website improvements, Google Business Profile management, and consistent local presence.',
  }),
  hero: {
    badge: 'Get Found Locally',
    title: 'Your Competitors Show Up. You Don\'t.',
    description:
      'Someone five minutes away needs exactly what you do. Searches. Three businesses come up. Not yours. Details different in every directory. Google can\'t tell what\'s real.',
    cssPrefix: 'website-seo-hero',
    backgroundColor: 'bg-gradient-surface-muted',
    list: [
      'Scattered details',
      'Incomplete profile',
      'Hidden services',
    ],
  },
  sections: {
    misconceptions: {
      badge: 'Why SEO has not worked before',
      title: 'Three assumptions that keep you invisible',
      description:
        'Most businesses we talk to have spent money on SEO before. It didn\'t work because the starting point was wrong.',
      currentStateLabel: 'What most businesses think',
      structuredStateLabel: 'What actually needs to happen',
      painPoints: [
        {
          before: '\u201CMore traffic will fix everything.\u201D',
          after:
            'Traffic to a confusing site burns money. If visitors can\'t tell what you do, where you work, or how to reach you — they leave. You paid for nothing.',
        },
        {
          before: '\u201CSEO can work around a messy website.\u201D',
          after:
            'Google shows results that answer the question someone typed. If your site doesn\'t clearly do that, spending on SEO won\'t compensate.',
        },
        {
          before: '\u201CWe should be ranking by next month.\u201D',
          after:
            'Shortcuts get penalised when Google updates. Businesses that relied on them lose everything overnight. Steady monthly work compounds. Survives algorithm changes.',
        },
      ],
    },

    why: {
      badge: 'Our approach',
      title: 'We start with your website, then build outward',
      description:
        'Local SEO isn\'t a one-off project. It\'s regular work on your website and how your business shows up. Customers keep finding you because the foundations hold.',
      tagline: 'Your website comes first',
      narrativeTitle: 'Why the website has to be right before anything else',
      narrativeParagraphs: [
        'If your website doesn\'t clearly explain what you offer, where you operate, and how to get in touch — driving more people to it just wastes money. They\'ll leave.',
        'We fix that first. Services clearly laid out, mobile working properly, Google profile matching the site. Then we keep pushing it forward month after month.',
      ],
      features: [
        {
          icon: Settings,
          title: 'Sort out the website foundations',
          description:
            'How your site loads, how it works on mobile, how Google reads it — all reviewed and corrected. The basics have to be right first.',
        },
        {
          icon: Globe,
          title: 'Get your details right everywhere',
          description:
            'Name, address, phone, and services matched across Google, directories, and your website. Google treats your business as one verified entity.',
        },
        {
          icon: Workflow,
          title: 'Keep building month after month',
          description:
            'Every month we review what\'s working, fix what isn\'t, and push your business higher. Visibility compounds instead of stalling.',
        },
      ],
    },
    integrations: {
      badge: 'How it all fits together',
      title: 'What actually changes when local SEO is working',
      description:
        'Showing up on Google isn\'t about stuffing keywords. Your website has to be clear, your Google profile accurate, your details the same everywhere. When those line up, Google trusts you enough to show your business.',
      cards: [
        {
          title: 'Your website answers the question someone just typed',
          description:
            'They search for what you do. They land on your site. In seconds they can tell what you offer, where, and how to reach you.',
          points: [
            'Each service on its own listing. Google indexes and ranks them individually.',
            'Contact details right there — nobody has to hunt for a phone number',
            'Works on mobile. That\'s where most local searchers are.',
          ],
          featured: true,
        },
        {
          title: 'What Google finds about you actually matches reality',
          description:
            'Profile, directories, reviews — all saying the same thing. Accurate. Current. Matching what\'s on your website.',
          points: [
            'Google Business Profile complete and actively managed. Eligible for local pack results.',
            'Same details in every directory. Google can verify you\'re real.',
            'Services and areas listed clearly. Google matches you to the right searches.',
          ],
        },
        {
          title: 'Every listing leads somewhere useful',
          description:
            'Showing up means nothing if the page behind it is vague. Each result leads to a clear, relevant listing with a way to act.',
          points: [
            'Each service page answers the search that triggered it',
            'Contact details right there — no hunting required',
            'The visit makes sense. The next step is obvious.',
          ],
        },
      ],
    },
    comparison: {
      header: {
        title: 'Off-the-shelf SEO vs local visibility that holds',
        description:
          'Most SEO focuses on rankings alone. We connect your website, Google profile, and listings into something Google can actually trust.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'What typical SEO looks like',
          items: [
            'Keywords crammed across a few generic sections. Google can\'t match anything specific to what someone\'s actually searching for.',
            'Google Business Profile created once, never touched again. Losing eligibility for local pack results month by month.',
            'Business name and phone number wrong or different in every directory. Google can\'t confirm you\'re a real business.',
            'Monthly reports loaded with jargon. No visible change in actual enquiries. You\'re paying for activity with nothing to show.',
            'SEO work completely disconnected from the website itself. Higher rankings still send people to a confusing experience.',
          ],
        },
        {
          type: 'after' as const,
          title: 'What structured local work does instead',
          items: [
            'Each service has its own listing Google can rank for specific searches in your area.',
            'Google Business Profile actively maintained. Your business stays eligible for the local pack where most clicks happen.',
            'Details corrected and matched across every directory. Google sees one consistent business.',
            'Monthly work tied to visible changes — updated content, stronger profiles, growing local presence.',
            'SEO connected to website clarity. Better rankings also mean better conversion when people actually arrive.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looked like for a real business',
        description:
          'A dental practice was paying for ads but invisible in organic search. Here\'s what was going on and what shifted.',
      },
      cards: [
        {
          title: 'Before: paying for every click, invisible otherwise',
          description: 'Everything on one listing. Google had nothing specific to rank. Details wrong in half the directories.',
          points: [
            'Cleanings, implants, emergency — all on one long listing. Someone searching for a specific treatment found the competitors who\'d listed it separately.',
            'Google Business Profile half-done. The practice wasn\'t showing up in the local pack for any of their core services.',
            'Phone number different on three directories. Address slightly wrong on two others. Google couldn\'t tell which was right.',
          ],
        },
        {
          title: 'What we did: gave each treatment its own presence',
          description: 'Separated every dental service out. Corrected the details everywhere. Got the Google profile finished and actively managed.',
          points: [
            'Each treatment on its own — cleanings, implants, emergency — written around how patients actually search for them.',
            'Google Business Profile completed. Accurate hours, services, photos. The practice became eligible for local pack results.',
            'Details fixed across every directory. Google started treating them as one verified business.',
          ],
          featured: true,
        },
        {
          title: 'After: organic search doing what ads used to',
          description: 'Four months in, showing up for targeted dental terms. Organic enquiries growing. Ad spend dropping.',
          points: [
            'Individual treatments started ranking. Patients found what they needed without the practice paying for that click.',
            'Organic volume climbed each month as more content indexed. Compounded. No extra spend.',
            'Ad budget came down by a third. Organic was bringing in qualified patients who already knew what they wanted.',
          ],
        },
      ],
    },
    processSection: {
      badge: 'How we work',
      title: 'What happens after we start',
      description:
        'A repeating cycle: check what\'s working, fix what isn\'t, keep your local presence strong, and adjust as things change.',
      steps: [
        {
          number: '1',
          title: 'See where you stand right now',
          description:
            'We look at your website, Google profile, and listings. First round of work targets whatever\'s costing you the most visibility.',
        },
        {
          number: '2',
          title: 'Make your services and location clear online',
          description:
            'Content updated, metadata corrected, local details matched everywhere. Google gets clear signals about what you do and where you do it.',
        },
        {
          number: '3',
          title: 'Build on it every month',
          description:
            'Content kept current, reviews monitored, listings maintained. Visibility grows instead of fading.',
        },
        {
          number: '4',
          title: 'Adjust when things shift',
          description:
            'New services, new areas, algorithm changes — everything gets updated. Visibility holds through change.',
        },
      ],
    },
    scopeSection: {
      badge: 'What is included',
      title: 'What we handle for your local visibility',
      description:
        'The exact scope depends on where your business is starting from. Here\'s what we cover.',
      services: [
        {
          icon: Code,
          title: 'Getting Your Website Right for Google',
          items: [
            'Organising your site so Google can read and index it properly',
            'Making sure it loads quickly and works on mobile',
            'Adding the technical tags Google looks for behind the scenes',
            'Setting up sitemaps and making sure indexing is correct',
            'Keeping the site secure and stable',
          ],
        },
        {
          icon: FileText,
          title: 'Making Each Listing Clear and Useful',
          items: [
            'Writing content for each service that explains what you do and where you do it',
            'Titles and descriptions matching what people search for',
            'Easy to scan. Easy to act on.',
            'Related services linking to each other so visitors stay longer',
            'Making sure images load fast and are labelled correctly',
          ],
        },
        {
          icon: Link2,
          title: 'Building Your Local Reputation Online',
          items: [
            'Setting up and managing your Google Business Profile',
            'Matching your details across all directories',
            'Helping you collect more reviews and respond to them',
            'Getting your business referenced on local and relevant sites',
            'Building mentions where they matter for your area',
          ],
        },
        {
          icon: Layers,
          title: 'Planning Content That Brings Customers In',
          items: [
            'Creating a listing for each service and location you cover',
            'Writing FAQs and supporting content around real searches',
            'Planning topics based on what customers actually look for',
            'Keeping everything current as your business changes',
          ],
        },
        {
          icon: LineChart,
          title: 'Reporting in Plain English',
          items: [
            'Monitoring your Google Search Console results',
            'Tracking how your visibility shifts over time',
            'Watching what competitors are doing locally',
            'Giving you updates you can actually understand',
          ],
        },
        {
          icon: Settings,
          title: 'Continuous Improvement',
          items: [
            'Regular reviews of content and technical health',
            'Adapting when Google changes how it ranks local businesses',
            'Updating when your services or priorities change',
            'Small improvements that compound over months',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'Built for established service businesses that want local customers finding them online — and are willing to commit to the time it takes.',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        {
          title: 'You run real services and want local people to find them',
          description:
            'Defined services. Specific area. The people nearby who need what you do are searching for it. They\'re finding competitors instead.',
        },
        {
          title: 'You want lasting results, not a spike',
          description:
            'Showing up on Google takes steady monthly work. Not a one-off fix. You\'re prepared for that.',
        },
        {
          title: 'Your business details are wrong or missing online',
          description:
            'Information scattered or inaccurate across the web. You want one correct presence everywhere Google looks.',
        },
        {
          title: 'You\'re ready for a long-term approach',
          description:
            'Not a switch. Three to six months minimum to see results compound. If that\'s too long, this isn\'t the right fit.',
        },
      ],
      notDesignedTitle: 'Probably not the right fit if',
      notDesignedItems: [
        {
          title: 'You expect a guaranteed ranking by a set date',
          description:
            'Nobody controls Google\'s algorithm. Anyone promising a specific position by a specific date is either guessing or using tactics that won\'t last.',
        },
        {
          title: 'You need immediate traffic and aren\'t thinking long-term',
          description:
            'Paid ads deliver fast traffic. This builds organic visibility over months. If you need leads this week, start with ads.',
        },
        {
          title: 'Your website has fundamental problems you won\'t address',
          description:
            'SEO layered on a broken site produces nothing. If the site needs fixing and you\'re not ready to do it, the investment won\'t return.',
        },
        {
          title: 'You want a one-off audit, not ongoing work',
          description:
            'An audit shows you what\'s wrong. It doesn\'t fix it. This is monthly work where we make the changes — not hand you a list and walk away.',
        },
      ],
    },
    faqSection: {
      badge: 'Common questions',
      title: 'What business owners ask about local SEO',
      description:
        'Direct answers to the things you\'re probably wondering about.',
      cssPrefix: 'seo-growth-faq',
      faqs: [
        {
          question: 'What\'s the difference between ongoing SEO and a one-time audit?',
          answer:
            'An audit gives you a snapshot and a list of problems. Ongoing SEO means we fix them — and keep fixing them. We update content, manage your Google profile, and adapt as things change.',
        },
        {
          question: 'Can you guarantee we\'ll rank higher?',
          answer:
            'No. Anyone promising that is being dishonest. What we can promise is that your website and local presence will be consistently well-maintained. That gives Google the best reasons to show your business.',
        },
        {
          question: 'How long before we see results?',
          answer:
            'Some technical fixes show improvement within weeks. Broader gains — like ranking for competitive local terms — typically develop over three to six months of steady work.',
        },
        {
          question: 'We already have an SEO agency. Can you still help?',
          answer:
            'We can work alongside them or take over. Our focus — making your website, Google profile, and directory listings genuinely right — fills gaps that campaign-focused SEO often misses.',
        },
        {
          question: 'Do you manage Google Ads?',
          answer:
            'No. We focus on getting you found in organic search results — the ones people see without clicking on an ad.',
        },
        {
          question: 'Which types of businesses do you work with?',
          answer:
            'Mostly established service businesses — trades, beauty, health, automotive, professional services. The approach works across industries because it\'s built around your real services and where you operate.',
        },
        {
          question: 'How do you work out pricing?',
          answer:
            'It depends on the state of your website, how many services and locations you cover, and the amount of ongoing work needed. We scope it clearly before we start.',
        },
        {
          question: 'What happens when Google changes its algorithm?',
          answer:
            'It happens often. Because we build around clear service content, solid technical basics, and accurate business information, your site holds up much better than one relying on tricks.',
        },
        {
          question: 'Can our team learn to handle some of it?',
          answer:
            'Yes. We can include training so your team understands the key decisions and keeps things consistent as the business grows.',
        },
        {
          question: 'How do we know if it\'s working?',
          answer:
            'We track things you can understand: do your services show up in search, are your details right across the web, is the site technically healthy. And is traffic growing.',
        },
        {
          question: 'What if our website needs rebuilding first?',
          answer:
            'We\'ll tell you. Sometimes the smartest first step is fixing the website before layering SEO on top. We can handle that directly or guide your team on what to prioritise.',
        },
      ],
    },
  },
  inlineCta: {
    title: 'Why am I not showing up?',
    description:
      'Drop your business name and postcode. We check how you appear on Google right now and what\'s holding you back.',
  },
  cta: {
    title: 'Find out why they show up and you don\'t',
    description:
      'Your business name and area. We look at how Google sees you and come back with what\'s off.',
  },
} satisfies ServicePageData;
