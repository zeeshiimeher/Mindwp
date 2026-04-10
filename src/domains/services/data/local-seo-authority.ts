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
    title: 'Local SEO | Get Found by Customers in Your Area',
    description:
      'Show up when local customers search for your services. We handle your website, Google profile, and local listings so the right people find you and get in touch.',
    schemaName: 'Local SEO services for service businesses',
    schemaDescription:
      'Ongoing local SEO that keeps your business showing up in local search — through website improvements, Google Business Profile management, and making sure your details are right across the web.',
  }),
  hero: {
    badge: 'Get Found Locally',
    title: 'Show up on Google when nearby customers search for what you do',
    description:
      'People in your area are searching for your services right now. If they\'re finding your competitors instead of you, that\'s business you\'re losing every single day. We make sure your website is clear, your Google profile is accurate, and your business details match everywhere — so when someone nearby searches, you\'re the one who shows up.',
    cssPrefix: 'website-seo-hero',
    backgroundColor: 'bg-gradient-surface-muted',
    list: [
      'Your business shows up when someone nearby searches for what you do',
      'Your Google profile, website, and directory listings all match',
      'More local people find you, call you, and book',
    ],
  },
  sections: {
    misconceptions: {
      badge: 'Why SEO hasn\'t worked before',
      title: 'Three mistakes that keep businesses invisible on Google',
      description:
        'Most businesses that come to us have tried SEO before and been disappointed. Usually it\'s not because SEO doesn\'t work — it\'s because the starting point was wrong.',
      currentStateLabel: 'What most businesses think',
      structuredStateLabel: 'What actually needs to happen',
      painPoints: [
        {
          before: '\u201CWe just need more website traffic and rankings will follow.\u201D',
          after:
            'Traffic only turns into customers when your website clearly shows what you do, where you do it, and how to get in touch.',
        },
        {
          before: '\u201CSEO should work even if our website is a mess.\u201D',
          after:
            'If people land on your site and can\'t figure out what you offer, more visitors just means more people leaving confused.',
        },
        {
          before: '\u201CWe want to be on page one by next month.\u201D',
          after:
            'Real local SEO builds over time. Quick fixes don\'t last. What works is steady improvements to your site, your Google profile, and your local presence.',
        },
      ],
    },

    why: {
      badge: 'Our approach',
      title: 'We don\'t just "do SEO" — we make sure your business makes sense online first',
      description:
        'Local SEO isn\'t a one-time project. It\'s regular, ongoing care for your website and how your business appears online — so the right people keep finding you month after month.',
      tagline: 'Your website comes first',
      narrativeTitle: 'Why we always start with your website',
      narrativeParagraphs: [
        'If your website doesn\'t clearly explain what you do, where you work, and how to contact you — sending more people to it won\'t help. They\'ll just leave.',
        'That\'s why we start there. We make sure your services are clearly presented, everything works on mobile, and your Google profile matches what\'s on your site. Then we keep improving it month after month.',
      ],
      features: [
        {
          icon: Settings,
          title: 'Fix your website foundations first',
          description:
            'We check how your site is organised, whether it works properly on phones, and whether the basics are set up correctly for Google.',
        },
        {
          icon: Globe,
          title: 'Keep your local details accurate everywhere',
          description:
            'Your name, address, phone number, and services need to match across Google, directories, and your own website. We make sure they do.',
        },
        {
          icon: Workflow,
          title: 'Keep improving, month after month',
          description:
            'We don\'t disappear after the first round. Every month we review what\'s working, fix what\'s not, and keep pushing your business higher in search results.',
        },
      ],
    },
    integrations: {
      badge: 'How it all fits together',
      title: 'Local SEO works when your website, Google profile, and business details all line up',
      description:
        'Showing up on Google isn\'t just about keywords. It\'s about your website being clear, your Google profile being accurate, and your contact details being the same everywhere. When those three things match, Google trusts your business enough to show it.',
      cards: [
        {
          title: 'A website that makes sense',
          description:
            'Your service pages need to clearly explain what you do and where you do it. If someone lands on your site, they should know in seconds how to take the next step.',
          points: [
            'Services explained in plain language',
            'Easy to find how to get in touch',
            'Works well on phones and tablets',
          ],
          featured: true,
        },
        {
          title: 'A Google presence people trust',
          description:
            'Your Google Business Profile, directory listings, and reviews all affect whether Google shows your business. We keep everything accurate, up to date, and matching what\'s on your website.',
          points: [
            'Google Business Profile fully set up and maintained',
            'Your details are the same everywhere online',
            'Services and areas you cover are clearly listed',
          ],
        },
        {
          title: 'A business that\'s easy to reach',
          description:
            'Showing up on Google only matters if people can actually reach you. We make sure your forms work, calls go to the right person, and somebody responds.',
          points: [
            'Contact forms and calls actually reach your team',
            'Someone follows up — not tomorrow, not next week',
            'The people finding you online turn into real conversations',
          ],
        },
      ],
    },
    processSection: {
      badge: 'How we work',
      title: 'What happens once we start working together',
      description:
        'We follow a repeating cycle: check what\'s working, fix what\'s not, keep your local presence strong, and adjust as your business changes.',
      steps: [
        {
          number: '1',
          title: 'See where you stand right now',
          description:
            'We review your website, Google profile, and local listings to find what\'s helping, what\'s hurting, and what\'s missing.',
        },
        {
          number: '2',
          title: 'Make your services and location clear online',
          description:
            'We update your pages, fix your metadata, and make sure your local details match everywhere — your site, Google, and directories.',
        },
        {
          number: '3',
          title: 'Keep building your local presence',
          description:
            'We maintain your content, keep an eye on your reviews, update your business listings, and make sure nothing goes stale.',
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
      badge: 'What\'s included',
      title: 'Everything we take care of for your local visibility',
      description:
        'The exact work depends on where your business is starting from, but here\'s what we typically handle.',
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
            'Writing service pages that actually explain what you do',
            'Getting your page titles and descriptions right',
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
            'Building up references to your business in local directories and relevant sites',
            'Getting your business mentioned on sites that matter in your area',
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
            'Keeping an eye on what competitors are doing',
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
        'This works for established service businesses that want more local customers finding them online — and are willing to stick with it long enough for the results to build.',
      strongFitTitle: 'Great fit if',
      strongFitItems: [
        {
          title: 'You have real services and want more local customers to find them',
          description:
            'You\'re running a real business with real services. You just need more of the right people in your area to discover you online.',
        },
        {
          title: 'You want results that last, not a quick spike',
          description:
            'You understand that showing up on Google takes consistent work — and you\'re looking for something that builds over time.',
        },
        {
          title: 'Your business details need to be right everywhere online',
          description:
            'You want your Google profile, your directory listings, and your website to all say the same thing — and stay that way.',
        },
        {
          title: 'You\'re okay with a steady, long-term approach',
          description:
            'You know local SEO isn\'t a switch you flip. It\'s something you maintain — and you\'re ready for that.',
        },
      ],
      notDesignedTitle: 'Probably not the right fit if',
      notDesignedItems: [
        {
          title: 'You want a guarantee you\'ll rank #1 by a specific date',
          description:
            'No one can honestly promise that. We focus on doing the right things consistently — rankings follow from that.',
        },
        {
          title: 'You need a rush of traffic and aren\'t worried about long-term',
          description:
            'If you need quick volume right now, paid ads are a better bet. This is about building lasting visibility.',
        },
        {
          title: 'Your website has serious problems you\'re not ready to fix',
          description:
            'If the site itself is broken or unclear and there\'s no willingness to address that, SEO work won\'t deliver.',
        },
        {
          title: 'You want a one-time checklist, not ongoing work',
          description:
            'A single audit on its own doesn\'t change your rankings. This is a monthly service where we do the work, not just tell you what to do.',
        },
      ],
    },
    faqSection: {
      badge: 'Common questions',
      title: 'Questions business owners ask about local SEO',
      description:
        'Straight answers to the things you\'re probably wondering before getting started.',
      cssPrefix: 'seo-growth-faq',
      faqs: [
        {
          question: 'How is ongoing SEO different from a one-time SEO audit?',
          answer:
            'An audit gives you a snapshot and a to-do list. Ongoing SEO means we actually do the work — and keep doing it. We monitor your site, update your content, maintain your Google profile, and adapt as things change.',
        },
        {
          question: 'Can you guarantee I\'ll rank higher?',
          answer:
            'No — and anyone who promises that is being dishonest. What we can promise is that your website and local presence will be consistently well-maintained, which gives Google the best reasons to show your business.',
        },
        {
          question: 'How long before I see results?',
          answer:
            'Some technical fixes can show results within weeks. Broader improvements — like ranking for competitive local terms — usually develop over three to six months of steady work.',
        },
        {
          question: 'What if I already work with an SEO agency?',
          answer:
            'We can work alongside them or take over entirely. What we focus on — your website, your Google profile, and your directory listings being right — often fills the gaps that campaign-focused SEO misses.',
        },
        {
          question: 'Do you run Google Ads too?',
          answer:
            'No. We focus entirely on getting you found in normal search results — the ones people see without clicking on an ad. Paid advertising is a separate thing.',
        },
        {
          question: 'What types of businesses do you work with?',
          answer:
            'Mainly established service businesses — home services, beauty, automotive, professional services, and similar. The approach works across industries because it\'s built around your real services and where you operate.',
        },
        {
          question: 'How do you decide what to charge?',
          answer:
            'Pricing depends on the current state of your website, how many services and locations you cover, and how much ongoing work is needed. We scope everything clearly before starting — no mystery packages.',
        },
        {
          question: 'What happens when Google changes how it ranks businesses?',
          answer:
            'It happens often. Because we build around clear service pages, solid technical basics, and real business information, your site holds up much better than one relying on shortcuts or tricks.',
        },
        {
          question: 'Can you teach our team to handle some of this?',
          answer:
            'Yes. We can include training so your team understands the key decisions and can keep things consistent as your business grows.',
        },
        {
          question: 'How will I know if it\'s working?',
          answer:
            'We track things you can actually understand: whether your pages are showing up in search results, whether your business details are correct across the web, whether your site is technically healthy, and whether traffic is growing in line with the work we\'re doing.',
        },
        {
          question: 'What if our website needs a complete overhaul first?',
          answer:
            'We\'ll tell you. Sometimes the smartest first step is fixing the website before layering SEO on top. We can help with that directly or guide your team on what to prioritise.',
        },
      ],
    },
  },
  cta: {
    title: 'Want to know why your competitors are showing up and you\'re not?',
    description:
      'Tell us what you do and where you work. We\'ll take a look at how your business appears on Google right now and tell you what\'s missing.',
  },
} satisfies ServicePageData;
