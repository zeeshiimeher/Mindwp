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
      title: 'Local SEO That Brings Nearby Customers In',
    description:
      'People in your area search for what you do every day. If your website does not clearly explain your services, your Google profile is incomplete, or your business details are wrong across the web — Google has no reason to show you. We fix that.',
    cssPrefix: 'website-seo-hero',
    backgroundColor: 'bg-gradient-surface-muted',
    list: [
        'Search Visibility',
        'Google Profile',
        'Local Trust',
    ],
  },
  sections: {
    misconceptions: {
      badge: 'Why SEO has not worked before',
      title: 'Three mistakes that keep businesses invisible on Google',
      description:
        'Most businesses that come to us have tried SEO before and been disappointed. Usually the starting point was wrong.',
      currentStateLabel: 'What most businesses think',
      structuredStateLabel: 'What actually needs to happen',
      painPoints: [
        {
          before: '\u201CWe just need more website traffic and rankings will follow.\u201D',
          after:
            'Traffic only turns into customers when your website clearly shows what you do, where you do it, and how to get in touch.',
        },
        {
          before: '\u201CSEO should work even if our website is unclear.\u201D',
          after:
            'If visitors land on your site and cannot figure out what you offer, more traffic just means more people leaving.',
        },
        {
          before: '\u201CWe want to be on page one by next month.\u201D',
          after:
            'Real local SEO builds over time. Quick fixes do not last. What works is steady improvements to your site, Google profile, and local presence.',
        },
      ],
    },

    why: {
      badge: 'Our approach',
      title: 'We fix your website first, then build your local presence around it',
      description:
        'Local SEO is not a one-time project. It is regular, ongoing work on your website and how your business appears online — so the right people keep finding you.',
      tagline: 'Your website comes first',
      narrativeTitle: 'Why we always start with your website',
      narrativeParagraphs: [
        'If your website does not clearly explain what you do, where you work, and how to contact you — sending more people to it will not help. They will just leave.',
        'That is why we start there. We make sure your services are clearly presented, everything works on mobile, and your Google profile matches your site. Then we keep improving it month after month.',
      ],
      features: [
        {
          icon: Settings,
          title: 'Fix your website foundations first',
          description:
            'We check how your site is organised, whether it works on phones, and whether the basics are set up correctly for Google.',
        },
        {
          icon: Globe,
          title: 'Keep your local details accurate everywhere',
          description:
            'Your name, address, phone number, and services need to match across Google, directories, and your website. We make sure they do.',
        },
        {
          icon: Workflow,
          title: 'Keep improving month after month',
          description:
            'We do not disappear after the first round. Every month we review what is working, fix what is not, and keep pushing your business higher in search results.',
        },
      ],
    },
    integrations: {
      badge: 'How it all fits together',
      title: 'What changes for your business when local SEO is working',
      description:
        'Showing up on Google is not about keywords. It is about your website being clear, your Google profile being accurate, and your details being the same everywhere. When those three things align, Google trusts your business enough to show it.',
      cards: [
        {
          title: 'A website that makes sense to Google and to customers',
          description:
            'Your service pages clearly explain what you do and where. Visitors know in seconds how to take the next step.',
          points: [
            'Services explained in plain language on dedicated pages',
            'Easy to find how to get in touch',
            'Works properly on phones and tablets',
          ],
          featured: true,
        },
        {
          title: 'A Google presence people trust',
          description:
            'Your Google Business Profile, directory listings, and reviews are accurate, up to date, and matching your website.',
          points: [
            'Google Business Profile fully set up and maintained',
            'Business details consistent everywhere online',
            'Services and areas you cover clearly listed',
          ],
        },
        {
          title: 'Enquiries that actually reach your team',
          description:
            'Showing up on Google only matters if people can reach you. Forms work, calls go to the right person, and someone responds.',
          points: [
            'Contact forms and calls reach your team reliably',
            'Follow-up happens promptly, not days later',
            'People who find you online turn into real conversations',
          ],
        },
      ],
    },
    comparison: {
      header: {
        title: 'Generic SEO agencies vs a local visibility system',
        description:
          'Most SEO work focuses on rankings in isolation. We build local visibility that connects your website, Google profile, and business listings into one working system.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'What generic SEO looks like',
          items: [
            'Keyword stuffing across a handful of pages with no clear service structure',
            'Google Business Profile set up once and never maintained',
            'Business details wrong or inconsistent across directories',
            'Monthly reports full of jargon but no visible change in enquiries',
            'No connection between SEO work and your actual website experience',
          ],
        },
        {
          type: 'after' as const,
          title: 'What structured local SEO does instead',
          items: [
            'Each service gets its own page written for customers and for Google',
            'Google Business Profile actively maintained and kept accurate',
            'Business details checked and corrected across all listings',
            'Monthly work that you can see — updated pages, better profiles, more visibility',
            'SEO improvements tied directly to website clarity and enquiry flow',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is working',
        description:
          'A roofing company was spending on ads but invisible in local search results. Here is what we found and what changed.',
      },
      cards: [
        {
          title: 'Before: invisible in local search despite running ads',
          description: 'The roofing company had all services on one page, no dedicated service pages for Google to index, and business details were inconsistent across directories.',
          points: [
            'All services crammed onto a single page with no individual titles',
            'Google Business Profile incomplete and not matching the website',
            'Business name and phone number different across directories',
          ],
        },
        {
          title: 'What we did: rebuilt the local visibility layer',
          description: 'We created dedicated pages for each roofing service, corrected business details across directories, and set up and maintained the Google Business Profile properly.',
          points: [
            'Each roofing service given its own page with clear titles',
            'Google Business Profile completed and actively maintained',
            'Business details corrected and made consistent across all listings',
          ],
          featured: true,
        },
        {
          title: 'After: appearing in local searches and getting enquiries',
          description: 'Within three months, the business started appearing in local search results for roofing services. Organic enquiries grew steadily without increasing ad spend.',
          points: [
            'Started appearing in Google local results for targeted roofing terms',
            'Organic enquiry volume grew month over month',
            'Reduced dependence on paid ads for lead generation',
          ],
        },
      ],
    },
    processSection: {
      badge: 'How we work',
      title: 'What happens once we start',
      description:
        'We follow a repeating cycle: check what is working, fix what is not, keep your local presence strong, and adjust as your business changes.',
      steps: [
        {
          number: '1',
          title: 'See where you stand right now',
          description:
            'We review your website, Google profile, and local listings to find what is helping, what is hurting, and what is missing.',
        },
        {
          number: '2',
          title: 'Make your services and location clear online',
          description:
            'We update your pages, fix your metadata, and make sure your local details match everywhere — website, Google, and directories.',
        },
        {
          number: '3',
          title: 'Keep building your local presence',
          description:
            'We maintain your content, monitor your reviews, update business listings, and make sure nothing goes stale.',
        },
        {
          number: '4',
          title: 'Adapt when things change',
          description:
            'When you add new services, cover new areas, or Google changes how it ranks businesses — we update everything to keep you visible.',
        },
      ],
    },
    scopeSection: {
      badge: 'What is included',
      title: 'Everything we handle for your local visibility',
      description:
        'The exact work depends on where your business is starting from. Here is what we typically take care of.',
      services: [
        {
          icon: Code,
          title: 'Making Your Website Work for Google',
          items: [
            'Organising your site so Google can read it properly',
            'Making sure it loads fast and works on mobile',
            'Adding the right behind-the-scenes tags Google looks for',
            'Setting up sitemaps and indexing correctly',
            'Keeping your site secure and reliable',
          ],
        },
        {
          icon: FileText,
          title: 'Making Your Pages Clear and Useful',
          items: [
            'Writing service pages that explain what you do and where',
            'Getting page titles and descriptions right for search',
            'Making content easy to skim and understand',
            'Linking related pages together so visitors find more',
            'Making sure images are optimised and labelled',
          ],
        },
        {
          icon: Link2,
          title: 'Building Your Local Reputation Online',
          items: [
            'Setting up and managing your Google Business Profile',
            'Making sure your details match across all directories',
            'Helping you get more reviews and respond to them',
            'Building references to your business in local and relevant sites',
            'Getting your business mentioned where it matters locally',
          ],
        },
        {
          icon: Layers,
          title: 'Planning Content That Attracts Customers',
          items: [
            'Creating pages for each service and location you cover',
            'Writing helpful FAQs and supporting content',
            'Planning topics based on what real customers search for',
            'Keeping content fresh and up to date',
          ],
        },
        {
          icon: LineChart,
          title: 'Tracking Progress in Plain English',
          items: [
            'Monitoring your Google Search Console results',
            'Tracking how your visibility changes over time',
            'Keeping watch on what competitors are doing',
            'Giving you clear, jargon-free updates',
          ],
        },
        {
          icon: Settings,
          title: 'Continuously Improving',
          items: [
            'Regular check-ups on your content and technical setup',
            'Adapting when Google changes how it ranks businesses',
            'Updating when your services or priorities shift',
            'Making small improvements that add up over time',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'This works for established service businesses that want more local customers finding them online — and are willing to commit to the time it takes for results to build.',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        {
          title: 'You have real services and want more local customers to find them',
          description:
            'You run a real business with real services. You need more of the right people in your area to discover you online.',
        },
        {
          title: 'You want results that last, not a quick spike',
          description:
            'You understand that showing up on Google takes consistent work — and you want something that builds over time.',
        },
        {
          title: 'Your business details need to be right everywhere online',
          description:
            'You want your Google profile, directory listings, and website to all say the same thing — and stay that way.',
        },
        {
          title: 'You are ready for a steady, long-term approach',
          description:
            'You know local SEO is not a switch you flip. It is something you maintain. You are ready for that.',
        },
      ],
      notDesignedTitle: 'Probably not the right fit if',
      notDesignedItems: [
        {
          title: 'You want a guarantee of ranking number one by a specific date',
          description:
            'Nobody can honestly promise that. We focus on doing the right things consistently — rankings follow from that.',
        },
        {
          title: 'You need a rush of traffic and do not care about long-term',
          description:
            'If you need quick volume right now, paid ads are a better option. This is about building lasting visibility.',
        },
        {
          title: 'Your website has serious problems you are not ready to fix',
          description:
            'If the site itself is broken or unclear and there is no willingness to address that, SEO work will not deliver.',
        },
        {
          title: 'You want a one-time checklist, not ongoing work',
          description:
            'A single audit on its own does not change your rankings. This is a monthly service where we do the work, not just tell you what to do.',
        },
      ],
    },
    faqSection: {
      badge: 'Common questions',
      title: 'Questions business owners ask about local SEO',
      description:
        'Straight answers to what you are probably wondering before getting started.',
      cssPrefix: 'seo-growth-faq',
      faqs: [
        {
          question: 'How is ongoing SEO different from a one-time audit?',
          answer:
            'An audit gives you a snapshot and a to-do list. Ongoing SEO means we do the work — and keep doing it. We monitor your site, update content, maintain your Google profile, and adapt as things change.',
        },
        {
          question: 'Can you guarantee higher rankings?',
          answer:
            'No — and anyone who promises that is being dishonest. What we can promise is that your website and local presence will be consistently well-maintained, which gives Google the best reasons to show your business.',
        },
        {
          question: 'How long before results appear?',
          answer:
            'Some technical fixes show results within weeks. Broader improvements — like ranking for competitive local terms — usually develop over three to six months of steady work.',
        },
        {
          question: 'What if we already work with an SEO agency?',
          answer:
            'We can work alongside them or take over entirely. Our focus — your website, Google profile, and directory listings being right — often fills the gaps that campaign-focused SEO misses.',
        },
        {
          question: 'Do you run Google Ads?',
          answer:
            'No. We focus entirely on getting you found in normal search results — the ones people see without clicking on an ad.',
        },
        {
          question: 'What types of businesses do you work with?',
          answer:
            'Mainly established service businesses — home services, beauty, automotive, professional services, and similar. The approach works across industries because it is built around your real services and where you operate.',
        },
        {
          question: 'How do you decide what to charge?',
          answer:
            'Pricing depends on the current state of your website, how many services and locations you cover, and how much ongoing work is needed. We scope everything clearly before starting.',
        },
        {
          question: 'What happens when Google changes how it ranks businesses?',
          answer:
            'It happens often. Because we build around clear service pages, solid technical basics, and real business information, your site holds up much better than one relying on shortcuts.',
        },
        {
          question: 'Can you teach our team to handle some of this?',
          answer:
            'Yes. We can include training so your team understands the key decisions and can keep things consistent as your business grows.',
        },
        {
          question: 'How will we know if it is working?',
          answer:
            'We track things you can understand: whether your pages show up in search results, whether your business details are correct across the web, whether your site is technically healthy, and whether traffic is growing.',
        },
        {
          question: 'What if our website needs a complete overhaul first?',
          answer:
            'We will tell you. Sometimes the smartest first step is fixing the website before layering SEO on top. We can help with that directly or guide your team on what to prioritise.',
        },
      ],
    },
  },
  inlineCta: {
    title: 'Not sure why your competitors show up on Google and you do not?',
    description:
      'Tell us what you do and where you operate. We will review how your business appears on Google right now and show you what is holding you back.',
  },
  cta: {
    title: 'Want to know why your competitors are showing up and you are not?',
    description:
      'Tell us what you do and where you work. We take a look at how your business appears on Google right now and tell you what is missing.',
  },
} satisfies ServicePageData;
