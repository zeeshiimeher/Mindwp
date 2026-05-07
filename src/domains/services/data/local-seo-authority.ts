import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'local-seo-authority';

export const localSeoAuthorityPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Local SEO for Service Businesses | Show Up When Customers Search',
    description:
      'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
  }),
  systems: ['local-seo-authority'],
  topics: [
    'local-seo',
    'local-visibility',
    'google-business-profile',
    'local-authority',
    'authority-signals',
    'local-service-pages',
  ],
  badge: 'Local SEO Authority',
  category: 'Visibility Systems',

  hero: {
    badge: 'Get Found Locally',
    title: 'People Search Nearby. You Still Miss The Click.',
    description:
      'Someone nearby needs the service you offer right now. Google shows three businesses. Yours is missing, incomplete, or inconsistent enough that Google does not trust what it sees.',
    list: ['Scattered details', 'Incomplete profile', 'Hidden services'],
    presenceSurface: {
      title: 'Local Presence',
      area: 'Postcode N6 — within 3 mi',
      overallState: 'weak' as const,
      mapPack: {
        label: 'Map pack visibility',
        overallState: 'missing' as const,
        competitors: ['Competitor A', 'Competitor B', 'Competitor C'],
        youLabel: 'You — not in pack',
      },
      signals: [
        { label: 'Services indexed', value: '2 of 7', state: 'warn' as const },
        { label: 'Citations match', value: '62%', state: 'warn' as const },
        { label: 'Reviews this month', value: '0', state: 'risk' as const },
        { label: 'Rank stable', value: '-3 \u2193', state: 'risk' as const },
      ],
    },
  },

  sections: {
    authorityDecision: {
      header: {
        kicker: 'Authority decision board',
        title: 'Package SEO vs local authority system',
        description:
          'Most SEO sells activity. Local authority builds trust signals Google can verify.',
      },
      leftSide: {
        label: 'Package SEO',
        note: 'Sells activity. Reports the work done.',
      },
      rightSide: {
        label: 'Local authority system',
        note: 'Builds signals Google can verify.',
      },
      criteria: [
        {
          name: 'Scope of work',
          left: 'Tasks billed each month',
          right: 'Trust signals being built',
        },
        {
          name: 'Starting point',
          left: 'Templated audit',
          right: 'What Google currently believes',
        },
        { name: 'Results timeline', left: 'Promised in weeks', right: 'Earned over months' },
        {
          name: 'What it measures',
          left: 'Activity reports',
          right: 'Visibility, intent, conversion',
        },
        {
          name: 'What happens after setup',
          left: 'Repeat tasks',
          right: 'Maintained signal layer',
        },
      ],
    },

    signalAudit: {
      header: {
        kicker: 'Local presence board',
        title: 'Where your local visibility stands right now',
        description:
          'Google needs several signals to agree before it can confidently show your business for nearby searches.',
      },
      centerLabel: 'Local search',
      families: [
        {
          id: 'website-foundation',
          iconKey: 'globe' as const,
          name: 'Website foundation',
          overallState: 'weak' as const,
          checks: [
            { label: 'Service pages', state: 'weak' as const },
            { label: 'Schema markup', state: 'missing' as const },
            { label: 'Local content', state: 'weak' as const },
          ],
        },
        {
          id: 'google-profile',
          iconKey: 'building' as const,
          name: 'Google Business Profile',
          overallState: 'weak' as const,
          checks: [
            { label: 'Categories', state: 'weak' as const },
            { label: 'Services list', state: 'missing' as const },
            { label: 'Posts', state: 'missing' as const },
          ],
        },
        {
          id: 'citations',
          iconKey: 'file-text' as const,
          name: 'Citations and directories',
          overallState: 'active' as const,
          checks: [
            { label: 'NAP consistency', state: 'weak' as const },
            { label: 'Industry directories', state: 'active' as const },
            { label: 'Aggregators', state: 'active' as const },
          ],
        },
        {
          id: 'content-coverage',
          iconKey: 'search' as const,
          name: 'Content coverage',
          overallState: 'missing' as const,
          checks: [
            { label: 'Service areas', state: 'missing' as const },
            { label: 'Service detail', state: 'weak' as const },
            { label: 'Local context', state: 'missing' as const },
          ],
        },
      ],
    },

    structuredComparison: {
      header: {
        kicker: 'Scorecard',
        title: 'Off-the-shelf SEO vs local visibility that holds',
        description:
          'Most SEO focuses on rankings alone. We connect your website, Google profile, and listings into something Google can actually trust.',
      },
      disconnectedSide: {
        label: 'Off-the-shelf SEO',
        note: 'Disconnected \u00B7 Activity-driven',
        title: 'Keyword activity. Reports. Disconnected work.',
        items: [
          "Keywords crammed across a few generic sections. Google can't match anything specific to what someone's actually searching for.",
          'Google Business Profile created once, never touched again. Losing eligibility for local pack results month by month.',
          "Business name and phone number wrong or different in every directory. Google can't confirm you're a real business.",
          "Monthly reports loaded with jargon. No visible change in actual enquiries. You're paying for activity with nothing to show.",
          'SEO work completely disconnected from the website itself. Higher rankings still send people to a confusing experience.',
        ],
      },
      connectedSide: {
        label: 'Structured local',
        note: 'Connected \u00B7 Compounding',
        title: 'Pages, profile, citations, content, reviews \u2014 connected.',
        items: [
          'Each service has its own listing Google can rank for specific searches in your area.',
          'Google Business Profile actively maintained. Your business stays eligible for the local pack where most clicks happen.',
          'Details corrected and matched across every directory. Google sees one consistent business.',
          'Monthly work tied to visible changes \u2014 updated content, stronger profiles, growing local presence.',
          'SEO connected to website clarity. Better rankings also mean better conversion when people actually arrive.',
        ],
      },
    },

    assumptions: {
      header: {
        kicker: 'Why SEO has not worked before',
        title: 'Three assumptions that keep you invisible',
        description:
          "Most businesses we talk to have spent money on SEO before. It didn't work because the starting point was wrong.",
      },
      myths: [
        {
          myth: '\u201CMore traffic will fix everything.\u201D',
          reality:
            'Traffic without structure just moves the leak. Visitors arrive and bounce against unclear pages.',
        },
        {
          myth: '\u201CSEO can work around a messy website.\u201D',
          reality:
            "Google's trust starts with what is on your site. Mess on the surface caps how much authority can compound.",
        },
        {
          myth: '\u201CWe should be ranking by next month.\u201D',
          reality:
            'Local authority is earned over months as Google verifies signals. The fast version is usually paid placement.',
        },
      ],
    },

    coverageMap: {
      header: {
        kicker: 'What is included',
        title: 'What we handle for your local visibility',
        description:
          "The exact scope depends on where your business is starting from. Here's what we cover.",
      },
      centerLabel: 'Service area',
      centerNote: 'Authority radius',
      zonesNote: '08 zones \u00B7 single owned system',
      zones: [
        { iconKey: 'globe' as const, label: 'Website structure' },
        { iconKey: 'file-text' as const, label: 'Service pages' },
        { iconKey: 'building' as const, label: 'Google Business Profile' },
        { iconKey: 'map-pin' as const, label: 'Citations and directories' },
        { iconKey: 'star' as const, label: 'Reviews and reputation' },
        { iconKey: 'search' as const, label: 'Local content' },
        { iconKey: 'file-text' as const, label: 'Reporting' },
        { iconKey: 'refresh-cw' as const, label: 'Ongoing improvement' },
      ],
    },

    visibilityCycle: {
      header: {
        kicker: 'After we start',
        title: 'What happens after we start',
        description:
          'A repeating cycle: check, clarify, build, adjust. Each loop adds signal. The compounding does the work.',
      },
      cycleLabel: 'Monthly visibility cycle',
      centerLabel: 'Compounding',
      centerNote: 'cycle',
      phases: [
        { name: 'Check', note: 'What does Google currently see?' },
        { name: 'Clarify', note: 'Fix details, services, structure.' },
        { name: 'Build', note: 'Pages, citations, content, reviews.' },
        { name: 'Adjust', note: 'Read the signal. Refine. Repeat.' },
      ],
    },

    proofStory: {
      header: {
        kicker: 'Scenario study',
        title: 'What this looked like for a real business',
        description:
          "A dental practice was paying for ads but invisible in organic search. Here's what was going on and what shifted.",
      },
      context: {
        label: 'Context',
        title: 'Dental practice paying for ads. Invisible in organic search.',
        description:
          'Services were separated, Google profile completed, directory details fixed, and organic visibility started growing. No ranking promises \u2014 measured signal, earned over months.',
        metrics: [
          { label: 'Services indexed', before: '2 of 9', after: '9 of 9' },
          { label: 'Profile complete', before: '48%', after: '100%' },
          { label: 'Citation match', before: '55%', after: '94%' },
        ],
      },
      changes: {
        label: 'What changed',
        title: 'Clearer service visibility. Less dependence on paid clicks for every enquiry.',
        items: [
          {
            iconKey: 'file-text' as const,
            label: 'Service pages',
            note: 'Treatments separated, intent matched',
          },
          {
            iconKey: 'building' as const,
            label: 'Google profile',
            note: 'Categories, services, posts complete',
          },
          { iconKey: 'map-pin' as const, label: 'Citations', note: 'Directory details aligned' },
          { iconKey: 'search' as const, label: 'Local content', note: 'Area context published' },
        ],
      },
      constraint: 'Story illustrative. No ranking guarantee.',
    },

    fitFilter: {
      header: {
        kicker: 'Fit check',
        title: 'Is this right for your business?',
        description:
          'Built for established service businesses that want local customers finding them online \u2014 and are willing to commit to the time it takes.',
      },
      strongFit: {
        label: 'Strong fit',
        items: [
          {
            text: 'You run real services locally',
            note: "Defined services. Specific area. The people nearby who need what you do are searching for it. They're finding competitors instead.",
          },
          {
            text: 'You want lasting visibility, not a spike',
            note: "Showing up on Google takes steady monthly work. Not a one-off fix. You're prepared for that.",
          },
          {
            text: 'Your details are wrong or missing online',
            note: 'Information scattered or inaccurate across the web. You want one correct presence everywhere Google looks.',
          },
          {
            text: "You're ready for a long-term approach",
            note: "Not a switch. Three to six months minimum to see results compound. If that's too long, this isn't the right fit.",
          },
        ],
      },
      poorFit: {
        label: 'Probably not the right fit',
        items: [
          {
            text: 'You expect a guaranteed ranking by a set date',
            note: "Nobody controls Google's algorithm. Anyone promising a specific position by a specific date is either guessing or using tactics that won't last.",
          },
          {
            text: "You need immediate traffic and aren't thinking long-term",
            note: 'Paid ads deliver fast traffic. This builds organic visibility over months. If you need leads this week, start with ads.',
          },
          {
            text: "Your website has fundamental problems you won't address",
            note: "SEO layered on a broken site produces nothing. If the site needs fixing and you're not ready to do it, the investment won't return.",
          },
          {
            text: 'You want a one-off audit, not ongoing work',
            note: "An audit shows you what's wrong. It doesn't fix it. This is monthly work where we make the changes \u2014 not hand you a list and walk away.",
          },
        ],
      },
    },

    faq: {
      header: {
        kicker: 'Common questions',
        title: 'What business owners ask about local SEO',
      },
      items: [
        {
          id: 'lsa-faq-1',
          question: "What's the difference between ongoing SEO and a one-time audit?",
          answer:
            'An audit gives you a snapshot and a list of problems. Ongoing SEO means we fix them \u2014 and keep fixing them. We update content, manage your Google profile, and adapt as things change.',
        },
        {
          id: 'lsa-faq-2',
          question: "Can you guarantee we'll rank higher?",
          answer:
            'No. Anyone promising that is being dishonest. What we can promise is that your website and local presence will be consistently well-maintained. That gives Google the best reasons to show your business.',
        },
        {
          id: 'lsa-faq-3',
          question: 'How long before we see results?',
          answer:
            'Some technical fixes show improvement within weeks. Broader gains \u2014 like ranking for competitive local terms \u2014 typically develop over three to six months of steady work.',
        },
        {
          id: 'lsa-faq-4',
          question: 'We already have an SEO agency. Can you still help?',
          answer:
            'We can work alongside them or take over. Our focus \u2014 making your website, Google profile, and directory listings genuinely right \u2014 fills gaps that campaign-focused SEO often misses.',
        },
        {
          id: 'lsa-faq-5',
          question: 'Do you manage Google Ads?',
          answer:
            'No. We focus on getting you found in organic search results \u2014 the ones people see without clicking on an ad.',
        },
        {
          id: 'lsa-faq-6',
          question: 'Which types of businesses do you work with?',
          answer:
            "Mostly established service businesses \u2014 trades, beauty, health, automotive, professional services. The approach works across industries because it's built around your real services and where you operate.",
        },
        {
          id: 'lsa-faq-7',
          question: 'How do you work out pricing?',
          answer:
            'It depends on the state of your website, how many services and locations you cover, and the amount of ongoing work needed. We scope it clearly before we start.',
        },
        {
          id: 'lsa-faq-8',
          question: 'What happens when Google changes its algorithm?',
          answer:
            'It happens often. Because we build around clear service content, solid technical basics, and accurate business information, your site holds up much better than one relying on tricks.',
        },
        {
          id: 'lsa-faq-9',
          question: 'Can our team learn to handle some of it?',
          answer:
            'Yes. We can include training so your team understands the key decisions and keeps things consistent as the business grows.',
        },
        {
          id: 'lsa-faq-10',
          question: "How do we know if it's working?",
          answer:
            'We track things you can understand: do your services show up in search, are your details right across the web, is the site technically healthy. And is traffic growing.',
        },
        {
          id: 'lsa-faq-11',
          question: 'What if our website needs rebuilding first?',
          answer:
            "We'll tell you. Sometimes the smartest first step is fixing the website before layering SEO on top. We can handle that directly or guide your team on what to prioritise.",
        },
      ],
    },
  },

  cta: {
    heading: {
      kicker: 'Final step',
      title: 'See why nearby customers are finding other businesses first',
      description:
        'Send your business name and service area. We check your website, Google profile, and listings to show where trust is breaking and what needs fixing first.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildServiceContactHref({
          system: 'local-seo-authority',
          slug: 'local-seo-authority',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Signal audit \u2014 what Google currently sees' },
      { num: '02', text: 'Trust gaps \u2014 what it cannot verify' },
      { num: '03', text: 'Priority fixes \u2014 in order of return' },
    ],
  },
} satisfies ServicePageData;
