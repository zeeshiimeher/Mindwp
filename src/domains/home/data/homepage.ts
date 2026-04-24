import type { LucideIcon } from 'lucide-react';
import {
  Calendar,
  Check,
  Database,
  Globe,
  Layers,
  Scissors,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';
import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';

type IconTone = 'primary' | 'secondary' | 'accent';

type JourneyStep = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconType: IconTone;
};

type TitleDescriptionItem = {
  title: string;
  description: string;
};

type SectionCta = {
  title: string;
  description: string;
};

type VisualStat = {
  label: string;
  value: string;
};

type CapabilityVisual = {
  stats: VisualStat[];
  gradientFrom: string;
  gradientTo: string;
};

type InfrastructureProblem = {
  icon: LucideIcon;
  title: string;
  description: string;
  solution: string;
  impact: string;
};

type SystemCapabilityComponent = {
  id: string;
  visualId: string;
  icon: LucideIcon;
  title: string;
  subline?: string;
  description: string;
  outcome?: string;
  benefits: string[];
  visual: CapabilityVisual;
};

export type HomepageData = {
  seo: {
    title: string;
    description: string;
    canonical: string;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
    };
    schema: {
      organization: Record<string, unknown>;
      website?: Record<string, unknown>;
    };
  };

  hero: {
    badge: string;
    title: string;
    description: string;
    valueProps: [string, string, string];
    primaryAction: {
      label: string;
      href: string;
    };
  };

  infrastructureGaps: {
    badge: string;
    title: string;
    description: string;
    problems: InfrastructureProblem[];
  };

  smartWebsiteFramework: {
    badge: string;
    title: string;
    description: string;
    journeyTitle: string;
    principles: Array<{ icon: LucideIcon; title: string; description: string }>;
    journeySteps: JourneyStep[];
    journeyNote: string;
    cta: SectionCta;
  };

  implementationSection: {
    title: string;
    description: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };

  clientJourney: {
    badge: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      icon: LucideIcon;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
      iconType: IconTone;
    }>;
    cta: SectionCta;
  };

  systemCapabilities: {
    title: string;
    description: string;
    visualMetaLabel: string;
    tabsAriaLabel: string;
    defaultComponentId: string;
    components: SystemCapabilityComponent[];
  };

  infrastructureLayers: {
    title: string;
    description: string;
    trustFoundations: {
      title: string;
      description: string;
      strongFitBadge: string;
      strongFitTitle: string;
      strongFitItems: TitleDescriptionItem[];
      notDesignedBadge: string;
      notDesignedTitle: string;
      notDesignedItems: TitleDescriptionItem[];
    };
    foundation: {
      badge: string;
      title: string;
      description: string;
      checklist: string[];
    };
    layers: Array<{ title: string; description: string }>;
  };

  industries: {
    title: string;
    description: string;
    items: Array<{ icon: LucideIcon; title: string; description: string; href: string }>;
  };

  visibilityTimeline: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      phase: string;
      title: string;
      icon: LucideIcon;
      items: string[];
    }>;
    note: string;
  };

  caseStudies: {
    title: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };

  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };

  cta: {
    footer: {
      title: string;
      description: string;
      metaItems: Array<{ text: string }>;
    };
  };
};

export const homepageData: HomepageData = {
  seo: {
    title: 'MindWP — Stop Losing Enquiries. Catch Calls, Follow Up, Win More Work.',
    description:
      'For service businesses where calls get missed, enquiries sit unread, and good leads quietly disappear. MindWP puts the routing, follow-up, visibility, and proof in place so the work already coming in actually turns into work.',
    canonical: '/',
    schema: {
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: toAbsoluteUrl('/images/logo.png'),
      },
    },
  },
  hero: {
    badge: 'For Service Businesses',
    title: 'Leads Come In. Most of Them Never Turn Into Work.',
    description:
      'Calls go to voicemail. Enquiries sit in an inbox until tomorrow. Quotes get sent and never chased. The work is already there — most of it just slips through before anyone notices. We put the system in place that catches it.',
    valueProps: ['Missed calls', 'Dead enquiries', 'Invisible online'],
    primaryAction: {
      label: "What's actually going wrong?",
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'global',
        slug: 'home',
      }),
    },
  },
  infrastructureGaps: {
    badge: "What's Actually Happening",
    title: 'The business is working. The business is also leaking.',
    description:
      'Not a dramatic failure. Not a crisis. Just a steady drip of missed opportunities and invisible damage. Compounding every week.',
    problems: [
      {
        icon: Search,
        title: 'Nobody can find you when they need you',
        description:
          "Someone nearby needs exactly what you do. They search. You don't show up. The competitor with a worse service gets the call.",
        solution: 'Local visibility from day one. The right searches reach you.',
        impact: 'Invisible locally',
      },
      {
        icon: Workflow,
        title: "The phone rings. The team's on a job.",
        description:
          'Three missed calls by lunchtime. You find out when you check your phone at 6pm. Two already booked someone else.',
        solution: 'Every missed call caught, logged, and chased. Before they ring someone else.',
        impact: 'Calls lost daily',
      },
      {
        icon: SlidersHorizontal,
        title: 'Messages in five different places. Nobody tracking them.',
        description:
          "Facebook DMs, voicemails, form submissions, texts. Some get answered. Some don't. Nobody knows which is which.",
        solution: 'One place. Clear ownership. Follow-up.',
        impact: 'Scattered and slow',
      },
    ],
  },
  smartWebsiteFramework: {
    badge: 'Sound Familiar?',
    title: 'What the business looks like before the system is set up properly',
    description:
      'These are the recurring breakpoints that show up when the website, lead handling, follow-up, and proof layers were never designed to work together.',
    journeyTitle: 'Where it starts to break',
    principles: [
      {
        icon: Check,
        title: 'Tuesday. Four missed calls. Nobody knew.',
        description:
          'Busy morning. Calls stacked up. By the time someone looked, two were already gone.',
      },
      {
        icon: Search,
        title: 'Someone visits the site, scrolls, leaves',
        description:
          "Can't tell what you do. Can't figure out the next step. Interested and gone in thirty seconds.",
      },
      {
        icon: Database,
        title: 'Old enquiries. No follow-up. Just sitting there.',
        description: 'Quotes from months ago. Good customers who never heard from you again.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Happy customers. Twelve reviews. Competitor has eighty.',
        description: 'Good work. No asks. No proof.',
      },
      {
        icon: Wrench,
        title: 'Replies take hours. Sometimes a day.',
        description: 'Nobody dropped the ball. The message sat there.',
      },
    ],
    journeySteps: [
      { icon: Search, title: 'Invisible', subtitle: 'Locally', iconType: 'primary' },
      { icon: Globe, title: 'Site Visit', subtitle: 'Then Gone', iconType: 'accent' },
      { icon: Workflow, title: 'Missed Calls', subtitle: 'Every Week', iconType: 'secondary' },
      { icon: Database, title: 'Dead Leads', subtitle: 'In the CRM', iconType: 'primary' },
      { icon: Calendar, title: 'Slow Reply', subtitle: 'Too Late', iconType: 'secondary' },
      { icon: ShieldCheck, title: 'No Proof', subtitle: 'Online', iconType: 'accent' },
    ],
    journeyNote: "These aren't separate problems. They're connected.",
    cta: {
      title: 'Something here feel familiar?',
      description:
        "Tell us what keeps slipping: calls, enquiries, follow-up, visibility, or proof. We'll map the first breakpoints and show what needs fixing first.",
    },
  },
  implementationSection: {
    title: 'What gets put in place so enquiries stop slipping.',
    description:
      'We start with how the business actually runs, then put the routing, follow-up, visibility, and proof layers in place in the order that makes the whole thing usable on a busy day.',
    steps: [
      {
        number: '01',
        title: 'We look at what you have',
        description: 'How calls come in. Where leads go. What happens after. Obvious fast.',
      },
      {
        number: '02',
        title: 'We show you where it leaks',
        description: "No pitch deck. A short, honest rundown of what's falling apart.",
      },
      {
        number: '03',
        title: 'The leaks that cost money. Those get fixed first.',
        description:
          "Missed calls. Dead leads. Pages nobody finds. Damage that's already happening.",
      },
      {
        number: '04',
        title: 'It runs. You stop thinking about it.',
        description:
          "Not a project that needs managing. Enquiries, follow-up, visibility — keeps going while everyone's out on jobs.",
      },
    ],
  },
  clientJourney: {
    badge: 'The Shift',
    title: 'What changes when things stop slipping',
    description:
      "Not a sales pitch. The difference between a business that catches everything and one that doesn't.",
    steps: [
      {
        number: '01',
        icon: Layers,
        title: 'Enquiries arrive in one place',
        subtitle: 'Not scattered across five apps',
        description:
          'Calls, forms, messages. All captured. Nothing hidden. One place to check instead of hunting through inboxes.',
        highlights: [
          'Every channel feeding into one record',
          'Nothing missed because someone forgot to check',
          'Clear trail for every enquiry',
        ],
        iconType: 'primary',
      },
      {
        number: '02',
        icon: Database,
        title: 'Nothing gets lost in the handoff',
        subtitle: 'Assigned. Tracked. Followed up.',
        description: 'Leads go to the right person. You can see where things stand. No more limbo.',
        highlights: [
          'Routed to the right person without asking',
          'You can see where every lead stands',
          'No more guessing who handled what',
        ],
        iconType: 'secondary',
      },
      {
        number: '03',
        icon: Workflow,
        title: 'Follow-up happens on schedule',
        subtitle: 'Not when someone remembers',
        description:
          'Reminders fire. Responses go out. The gap between enquiry and reply shrinks from days to minutes.',
        highlights: [
          'Timed follow-up instead of manual chasing',
          "Replies that don't depend on who's working",
          'Leads that used to go cold get caught',
        ],
        iconType: 'accent',
      },
    ],
    cta: {
      title: 'Where are your enquiries dropping?',
      description:
        'Walk us through how leads arrive, where they stall, and what the team is juggling now. You will leave with a clearer picture of the gaps before any build starts.',
    },
  },
  systemCapabilities: {
    title: 'Where service businesses break',
    description:
      'Five pressure points. Each one leaks money quietly. Most businesses have at least three.',
    visualMetaLabel: 'Breakage point overview',
    tabsAriaLabel: 'Business pressure points',
    defaultComponentId: 'calls',
    components: [
      {
        id: 'calls',
        visualId: 'calls',
        icon: Layers,
        title: 'Missed Calls',
        subline: 'Ringing out during every job.',
        description:
          "The phone goes while everyone's on site. Four rings. Voicemail. By the time someone checks, they've called the next name on the list.",
        outcome: "Calls get caught. Logged. Chased. Even when nobody's free.",
        benefits: [
          'Answered or not, it gets logged',
          'Missed calls trigger a follow-up',
          'Team sees who called and when',
          'No more checking voicemail at 6pm',
        ],
        visual: {
          stats: [
            { label: 'Calls caught', value: 'All' },
            { label: 'Follow-up', value: 'Triggered' },
            { label: 'Response gap', value: 'Minutes' },
            { label: 'Visibility', value: 'Full' },
          ],
          gradientFrom: 'var(--gradient-accent-from)',
          gradientTo: 'var(--gradient-accent-to)',
        },
      },
      {
        id: 'leads',
        visualId: 'leads',
        icon: Database,
        title: 'Dead Leads',
        subline: 'Hundreds of names. Nothing happening.',
        description:
          "A hundred names sitting in a spreadsheet. Old quotes, past customers, half-finished conversations. Nobody's opened it in weeks.",
        outcome: 'Some of those old leads start replying. Past customers hear from you.',
        benefits: [
          'Dormant leads flagged and woken up',
          'Past customers contacted at the right time',
          'Old quotes get chased',
          'Revenue from work you already earned',
        ],
        visual: {
          stats: [
            { label: 'Lead status', value: 'Known' },
            { label: 'Re-engagement', value: 'Timed' },
            { label: 'Past customers', value: 'Active' },
            { label: 'Lead flow', value: 'Visible' },
          ],
          gradientFrom: 'var(--gradient-secondary-from)',
          gradientTo: 'var(--gradient-secondary-to)',
        },
      },
      {
        id: 'visibility',
        visualId: 'visibility',
        icon: Workflow,
        title: 'Invisible Online',
        subline: "They search. You don't show up.",
        description:
          "Someone types in exactly what you do. Three competitors come up. You're nowhere. Not because they're better. Because they showed up.",
        outcome: 'The right searches find you. Maps. Results. Locally.',
        benefits: [
          'Pages structured for the searches that matter',
          'Local presence set up. Not guessed at.',
          'Service areas showing up where they should',
          'Fewer calls going to your competitors',
        ],
        visual: {
          stats: [
            { label: 'Local reach', value: 'Visible' },
            { label: 'Search match', value: 'Aligned' },
            { label: 'Pages', value: 'Done right' },
            { label: 'Discovery', value: 'Active' },
          ],
          gradientFrom: 'var(--gradient-accent-from)',
          gradientTo: 'var(--gradient-accent-to)',
        },
      },
      {
        id: 'replies',
        visualId: 'replies',
        icon: Calendar,
        title: 'Slow Replies',
        subline: 'Six hours. Sometimes longer.',
        description:
          'An enquiry arrives at 10am. Someone sees it at 4pm. By then the customer has moved on. Not because anyone forgot. Because nothing flagged it.',
        outcome: 'Enquiries get a reply. Fast. Follow-up stops depending on memory.',
        benefits: [
          'Enquiries get a reply. Not six hours later.',
          'Right person gets the alert',
          'You see how long replies take',
          'That six-hour gap starts shrinking.',
        ],
        visual: {
          stats: [
            { label: 'First contact', value: 'Instant' },
            { label: 'Team alert', value: 'Immediate' },
            { label: 'Follow-up', value: 'Scheduled' },
            { label: 'Response gap', value: 'Shrinking' },
          ],
          gradientFrom: 'var(--color-accent-warning)',
          gradientTo: 'var(--color-accent-warning-90)',
        },
      },
      {
        id: 'proof',
        visualId: 'proof',
        icon: ShieldCheck,
        title: 'No Proof Online',
        subline: 'Five-star work. Barely any proof.',
        description:
          'Happy customers. But online? Nothing. They leave without saying a word. Competitors with worse service have five times the reviews.',
        outcome: 'Reviews start showing up. Without anyone chasing.',
        benefits: [
          'Review requests after every job',
          "Asked when they're happiest",
          'Proof visible where people search',
          'Reputation catching up to the work',
        ],
        visual: {
          stats: [
            { label: 'Review flow', value: 'Ongoing' },
            { label: 'Timing', value: 'Post-job' },
            { label: 'Visibility', value: 'Search' },
            { label: 'Growth', value: 'Steady' },
          ],
          gradientFrom: 'var(--gradient-secondary-from)',
          gradientTo: 'var(--gradient-secondary-to)',
        },
      },
    ],
  },
  infrastructureLayers: {
    title: "It's not a website project. It's infrastructure.",
    description:
      'The site is the surface. Underneath: what happens to enquiries, follow-up, visibility, proof collection, lead recovery. Connected. Running.',
    foundation: {
      badge: 'Foundation',
      title: 'Business Infrastructure',
      description:
        "Everything needed to catch and keep the work that's already coming in. Matched to how you run.",
      checklist: [
        'Calls caught and chased without asking',
        'Enquiries reaching the right person. First time.',
        'Past leads contacted on a schedule',
        'Reviews requested at the right moment',
        'Visibility where your customers search',
      ],
    },
    layers: [
      {
        title: 'Visibility Layer',
        description:
          'Local search, maps, service pages. People find you when they need what you do.',
      },
      {
        title: 'Capture Layer',
        description: 'Forms, calls, bookings. Caught and logged. Nothing lost between channels.',
      },
      {
        title: 'Follow-Up Layer',
        description:
          'Instant replies, team alerts, timed reminders. The gap between enquiry and reply closes on its own.',
      },
      {
        title: 'Proof Layer',
        description:
          'Review requests, reputation tracking. Evidence that shows up while everyone works.',
      },
    ],
    trustFoundations: {
      title: 'This works for established businesses and serious new setups.',
      description:
        'Best when there is real demand already, or when you want the website, CRM, routing, and follow-up set up properly from day one instead of patching it later.',
      strongFitBadge: 'Strong Fit',
      strongFitTitle: 'This works well when:',
      strongFitItems: [
        {
          title: 'Jobs are worth real money',
          description: 'Hundreds per job. Repeat work. Real customer value.',
        },
        {
          title: 'Enquiries come in but get lost',
          description: "The demand is there. What happens to them isn't.",
        },
        {
          title: 'Everyone is busy doing the actual work',
          description: 'No time to chase leads, check voicemails, or send review requests.',
        },
        {
          title: "You've tried marketing before",
          description: "Spent money on ads or SEO. Got traffic. Didn't convert enough of it.",
        },
        {
          title: 'You want something that runs, not another project',
          description: 'Set up once. Keeps going.',
        },
      ],
      notDesignedBadge: 'Not The Right Fit',
      notDesignedTitle: 'Probably not right if:',
      notDesignedItems: [
        {
          title: 'You need a quick visual refresh',
          description: 'A brochure redesign without operational change.',
        },
        {
          title: "You're comparing on price alone",
          description: 'Lowest cost matters more than what gets built.',
        },
        {
          title: 'You want a feature checklist',
          description: 'Tools for the sake of tools. Not connected to anything.',
        },
        {
          title: "You're testing short-term campaigns",
          description: 'Quick experiments rather than something built to last.',
        },
        {
          title: 'You are still testing the offer itself',
          description:
            'If the service, market, or delivery model is still undefined, the first step is clarifying the offer before building full infrastructure around it.',
        },
      ],
    },
  },
  industries: {
    title: 'Made for businesses that do the work',
    description:
      "Trades. Services. Professionals. Businesses where everyone's out doing the job. Enquiries pile up. Calls ring out. Customers slip away.",
    items: [
      {
        icon: Scissors,
        title: 'Beauty & Personal Care',
        description:
          'Bookings scattered across Instagram DMs and phone calls. No-shows nobody chased. Reviews that never got requested.',
        href: '/industries/beauty-personal-care',
      },
      {
        icon: Wrench,
        title: 'Trades & Home Services',
        description:
          "Van's out. Phone's ringing. Quotes sent last month still sitting there. Half the leads came from a Google listing that hasn't been touched in years.",
        href: '/industries/home-services',
      },
      {
        icon: Users,
        title: 'Professional Services',
        description:
          "Consultations booked by email chains. Follow-up that depends on someone remembering. A website that doesn't match the work.",
        href: '/industries/legal-professional-services',
      },
      {
        icon: Calendar,
        title: 'Local & Appointment-Based',
        description:
          "Clinics, repair shops, studios. Steady demand. Booking friction. Review counts that don't match the customer satisfaction.",
        href: '/industries/local-appointment-businesses',
      },
    ],
  },
  visibilityTimeline: {
    badge: 'What Changes Over Time',
    title: "It doesn't all happen at once. That's the point.",
    description: 'The urgent stuff gets fixed first. Then the rest catches up. Then it compounds.',
    items: [
      {
        phase: 'Week 1-2',
        title: 'Stop the bleeding',
        icon: Layers,
        items: [
          'Missed calls caught and followed up',
          'Enquiries going to the right person. Nothing in limbo.',
          'Obvious visibility problems fixed',
          'Leads visible in one place',
        ],
      },
      {
        phase: 'Month 1-2',
        title: 'Get the groundwork in',
        icon: Search,
        items: [
          'Service pages matched to searches people run',
          'Local presence sorted across maps and listings',
          'Review requests going out after completed jobs',
          'Follow-up running without reminders',
        ],
      },
      {
        phase: 'Month 3-6',
        title: 'Start compounding',
        icon: Workflow,
        items: [
          'Search visibility climbing for the terms that matter',
          'Review count growing steadily',
          'Old leads coming back and converting',
          'Response times down. Conversion rate up.',
        ],
      },
      {
        phase: 'Ongoing',
        title: 'Runs without you',
        icon: ShieldCheck,
        items: [
          'Monthly reviews instead of reactive scrambles',
          'Shifts when you do',
          'Proof building. Visibility climbing. Leads moving.',
          'Everyone does the work. The rest runs.',
        ],
      },
    ],
    note: "Every business starts somewhere different. We figure out what's leaking first and work from there.",
  },
  caseStudies: {
    title: 'One business. Before and after.',
    description: 'Not a portfolio. What changed when things stopped slipping through.',
    quote:
      'We moved from a basic website to something connected. Enquiries land in the right place, follow-up is clearer. The business runs easier now.',
    quoteAuthor: '\u2014 Lisa Chen, Pawfect Mobile Grooming, Birmingham',
  },
  faq: {
    title: 'Straight answers',
    items: [
      {
        question: 'What do you build?',
        answer:
          'What happens underneath a website. Enquiries. Follow-up. Visibility. Proof collection. Connected. For service businesses that already have the work.',
      },
      {
        question: 'How is this different from getting a new website?',
        answer:
          'A website is a page people land on. This catches calls, routes enquiries, chases follow-up, and gets you reviews. The website is one piece.',
      },
      {
        question: 'We already have a website. Can you work with that?',
        answer:
          'Usually. We look at what you have. Sometimes the site is fine and everything around it is broken.',
      },
      {
        question: 'Is SEO included?',
        answer: 'Baked into the site. Ongoing SEO when it makes sense.',
      },
      {
        question: 'What about missed calls and follow-up?',
        answer:
          'Missed calls get caught and chased. Enquiries get routed. Reminders fire on schedule. Nobody remembers. It runs.',
      },
      {
        question: 'What kind of businesses is this for?',
        answer:
          'Established service businesses are the main fit, but we also work with serious new businesses that want the website, CRM, routing, and follow-up set up properly from day one.',
      },
      {
        question: 'How long before we see results?',
        answer: 'Missed calls and follow-up? Weeks. Visibility and reviews? Months. It compounds.',
      },
      {
        question: 'Do you do ongoing work or is it a one-off?',
        answer:
          'Either way. Everything keeps running. Ongoing means we keep tightening as the business shifts.',
      },
      {
        question: 'How do we start?',
        answer:
          "We look at how enquiries come in right now. Where calls go. What happens to leads. Then come back with what's leaking.",
      },
    ],
  },
  cta: {
    footer: {
      title: "Something here hit close. Find where it's breaking.",
      description:
        'We can map what needs building first, whether you are fixing years of patchwork or setting the foundation properly from day one. Calls, follow-up, visibility, and proof all get reviewed together.',
      metaItems: [
        { text: 'Free diagnostic' },
        { text: 'No commitment' },
        { text: 'Honest assessment' },
      ],
    },
  },
};
