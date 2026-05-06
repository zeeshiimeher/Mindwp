import { buildContactHref } from '@/lib/contact/contactHref';
import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';
import type { AccentKey } from '@/types/ui';

export type { AccentKey };

// Icon key type — semantic identifiers mapped to Lucide icons in the renderer
export type HomeIconKey =
  // Signal surface
  | 'local-search'
  | 'service-page'
  | 'form-enquiry'
  | 'missed-call'
  | 'quote'
  | 'review-opportunity'
  | 'follow-up-due'
  // Flow stages (leak diagnosis)
  | 'visibility'
  | 'website'
  | 'enquiry'
  | 'response'
  | 'follow-up'
  | 'proof'
  | 'repeat-loop'
  // Foundation layers
  | 'capture'
  | 'routing'
  | 'tracking'
  // Put in place zones
  | 'inspect'
  | 'locate'
  | 'fix'
  | 'keep'
  // Client shift
  | 'handoff'
  | 'schedule'
  // Pressure points
  | 'local-seo'
  | 'service-clarity'
  | 'scatter-enquiry'
  | 'follow-up-memory'
  | 'revenue-trace'
  // Structure layers
  | 'visibility-layer'
  | 'capture-layer'
  | 'response-layer'
  | 'follow-up-layer'
  | 'proof-layer'
  | 'improvement-layer'
  // Industries
  | 'trades'
  | 'beauty'
  | 'professional'
  | 'appointment'
  | 'multi-service'
  // Implementation patterns
  | 'missed-call-recovery'
  | 'follow-up-sequence'
  | 'service-page-structure'
  | 'review-flow'
  | 'crm-routing';

export type HomepageData = {
  seo: {
    title: string;
    description: string;
    canonical: string;
    schema: {
      organization: Record<string, unknown>;
      website?: Record<string, unknown>;
    };
  };

  hero: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
    chips: Array<{ label: string; accent: AccentKey }>;
    signals: Array<{
      label: string;
      note: string;
      status: 'unowned' | 'leaking';
      iconKey: HomeIconKey;
    }>;
    signalSummary: { leaking: string; unowned: string; pulling: string };
  };

  leakDiagnosis: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    flowStages: Array<{ stage: string; title: string; note: string; iconKey: HomeIconKey }>;
  };

  foundation: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    surfaceTitle: string;
    surfaceNote: string;
    middleLayers: Array<{ label: string; iconKey: HomeIconKey }>;
    foundationTitle: string;
    foundationNote: string;
    connectedNote: string;
  };

  systemStack: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    systems: Array<{
      name: string;
      role: string;
      roleNote: string;
      handles: string;
      accent: AccentKey;
      href: string;
    }>;
    footerNote: string;
    footerAction: { label: string; href: string };
  };

  putInPlace: {
    eyebrow: string;
    heading: string;
    description: string;
    zones: Array<{ title: string; body: string; state: string; iconKey: HomeIconKey }>;
  };

  fitFoundations: {
    heading: string;
    description: string;
    strongFit: string[];
    notFit: string[];
  };

  clientShift: {
    heading: string;
    description: string;
    before: { label: string; bullets: string[] };
    after: { label: string; bullets: string[] };
    scatterItems: string[];
    shifts: Array<{ title: string; before: string; after: string; iconKey: HomeIconKey }>;
  };

  pressurePoints: {
    eyebrow: string;
    heading: string;
    description: string;
    points: Array<{
      title: string;
      flow: string;
      handledBy: string;
      accent: AccentKey;
      iconKey: HomeIconKey;
    }>;
  };

  structureLayers: {
    heading: string;
    headingMuted: string;
    description: string;
    layers: Array<{ title: string; note: string; accent: AccentKey; iconKey: HomeIconKey }>;
    foundation: { title: string };
  };

  industries: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    scenarios: Array<{
      name: string;
      leak: string;
      needs: string[];
      href: string;
      accent: AccentKey;
      iconKey: HomeIconKey;
    }>;
  };

  alignment: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    description: string;
    stages: Array<{ num: string; title: string; note: string; weight: number }>;
  };

  proofStory: {
    heading: string;
    headingMuted: string;
    description: string;
    before: { label: string; title: string; bullets: string[] };
    change: { label: string; title: string; bullets: string[] };
    after: { label: string; title: string; bullets: string[] };
    quote: string;
    quoteAttribution: string;
  };

  implementationExamples: {
    eyebrow: string;
    heading: string;
    description: string;
    boardLabel: string;
    boardCount: string;
    implementationPatterns: Array<{
      title: string;
      desc: string;
      flow: string[];
      iconKey: HomeIconKey;
    }>;
  };

  faq: {
    heading: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };

  cta: {
    eyebrow: string;
    heading: {
      title: string;
      muted: string;
      description: string;
    };
    actions: Array<{ label: string; href: string; primary: true }>;
    expectations: Array<{ num: string; text: string }>;
    footer: { noSell: string; tone: string };
  };
};

export const homepageData: HomepageData = {
  seo: {
    title: 'Stop Losing Enquiries. Catch Calls, Follow Up, Win More Work.',
    description:
      'For service businesses where calls get missed, enquiries sit unread, and good leads quietly disappear. The routing, follow-up, visibility, and proof are put in place so the work already coming in actually turns into work.',
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
    eyebrow: 'For Service Businesses',
    heading: 'Work Comes In.',
    headingMuted: 'Too Much Slips Away.',
    description:
      'People find you online. They call, fill in forms, ask for quotes, check reviews, and compare your services. Some of that turns into work. Too much disappears between the first click and the next step.',
    primaryAction: {
      label: 'Start a Conversation',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'global',
        slug: 'home',
      }),
    },
    secondaryAction: {
      label: 'See where work is slipping',
      href: '#leak',
    },
    chips: [
      { label: 'Visibility', accent: 'cyan' },
      { label: 'Enquiries', accent: 'teal' },
      { label: 'Follow-up', accent: 'amber' },
      { label: 'Proof', accent: 'green' },
    ],
    signals: [
      {
        label: 'Local search',
        note: 'Postcode N6 — page 3',
        status: 'unowned',
        iconKey: 'local-search',
      },
      {
        label: 'Service page visit',
        note: 'Bathrooms — 02:14 dwell',
        status: 'unowned',
        iconKey: 'service-page',
      },
      {
        label: 'Form enquiry',
        note: 'Sat 09:14 — unread',
        status: 'unowned',
        iconKey: 'form-enquiry',
      },
      {
        label: 'Missed call',
        note: '11:42 — no callback',
        status: 'leaking',
        iconKey: 'missed-call',
      },
      { label: 'Quote request', note: '£4,200 — day 6', status: 'unowned', iconKey: 'quote' },
      {
        label: 'Review opportunity',
        note: 'Job done — not asked',
        status: 'unowned',
        iconKey: 'review-opportunity',
      },
      {
        label: 'Follow-up due',
        note: 'Today — nobody owns it',
        status: 'leaking',
        iconKey: 'follow-up-due',
      },
    ],
    signalSummary: {
      leaking: '2 leaking',
      unowned: '5 unowned',
      pulling: 'Pulled toward system',
    },
  },

  leakDiagnosis: {
    eyebrow: 'What is actually happening',
    heading: 'The business is working.',
    headingMuted: 'The system around it is leaking.',
    description:
      'Not a dramatic failure. A steady drip across the path from someone searching online to a job done and a review captured. Each step works on its own. The handoffs between them do not.',
    flowStages: [
      {
        stage: 'Visibility',
        title: 'Local visibility incomplete',
        note: 'Found by some, missed by many',
        iconKey: 'visibility',
      },
      {
        stage: 'Website',
        title: 'Service pages do not answer the right question',
        note: 'Visitor leaves before deciding',
        iconKey: 'website',
      },
      {
        stage: 'Enquiry',
        title: 'Enquiries land in the wrong place',
        note: 'Form, DM, voicemail, inbox',
        iconKey: 'enquiry',
      },
      {
        stage: 'Response',
        title: 'First response is slow',
        note: 'Lead cools before contact',
        iconKey: 'response',
      },
      {
        stage: 'Follow-up',
        title: 'Follow-up depends on memory',
        note: 'Old quotes go quiet',
        iconKey: 'follow-up',
      },
      {
        stage: 'Proof',
        title: 'Reviews not requested at the right time',
        note: 'Job done, proof never captured',
        iconKey: 'proof',
      },
      {
        stage: 'Repeat',
        title: 'Marketing spend hard to connect to real work',
        note: 'No loop back to revenue',
        iconKey: 'repeat-loop',
      },
    ],
  },

  foundation: {
    eyebrow: 'Foundation',
    heading: 'The website is the surface.',
    headingMuted: 'The structure underneath is what catches the work.',
    description:
      'A website alone does not fix missed calls, slow replies, scattered forms, or invisible follow-up. But it is often the first place those problems show up.',
    surfaceTitle: 'Visible website',
    surfaceNote: 'What the visitor sees',
    middleLayers: [
      { label: 'Capture', iconKey: 'capture' },
      { label: 'Routing', iconKey: 'routing' },
      { label: 'Follow-up', iconKey: 'follow-up' },
      { label: 'Tracking', iconKey: 'tracking' },
      { label: 'Proof', iconKey: 'proof' },
    ],
    foundationTitle: 'Smart Website Systems',
    foundationNote: 'The working business structure',
    connectedNote: "These aren't separate problems. They're connected.",
  },

  systemStack: {
    eyebrow: 'The handling system',
    heading: 'Six layers.',
    headingMuted: 'One connected flow.',
    description:
      'Each layer handles a part of the path. Together they hold the work from first search to repeat job. No layer depends on someone remembering.',
    systems: [
      {
        name: 'Smart Website System',
        role: 'The operating surface',
        roleNote: 'Where work lands and routes',
        handles: 'Visitors, service questions, enquiry capture',
        accent: 'cyan',
        href: '/systems/smart-website-systems',
      },
      {
        name: 'Local SEO Authority',
        role: 'Visibility layer',
        roleNote: 'Found across the area you serve',
        handles: 'Search presence, map coverage, signal trust',
        accent: 'teal',
        href: '/systems/local-seo-authority',
      },
      {
        name: 'AI Lead Handling',
        role: 'Response layer',
        roleNote: 'First contact, every time',
        handles: 'Calls, forms, DMs, after hours',
        accent: 'green',
        href: '/systems/ai-lead-handling',
      },
      {
        name: 'CRM & Automation',
        role: 'Memory layer',
        roleNote: 'Nothing depends on someone remembering',
        handles: 'Quotes, follow-up, ownership, status',
        accent: 'amber',
        href: '/systems/crm-automation',
      },
      {
        name: 'Reputation & Review',
        role: 'Proof layer',
        roleNote: 'Good work shows up in public',
        handles: 'Review requests, timing, response',
        accent: 'purple',
        href: '/systems/reputation-review',
      },
      {
        name: 'Revenue Growth',
        role: 'Improvement layer',
        roleNote: 'What works gets stronger',
        handles: 'Spend, return, repeat work, decisions',
        accent: 'cyan',
        href: '/systems/revenue-growth',
      },
    ],
    footerNote: 'Most businesses already have parts of this. The work is connecting them.',
    footerAction: {
      label: 'See where your stack is incomplete',
      href: buildContactHref({ system: 'smart-website-systems', sourceType: 'page', slug: 'home' }),
    },
  },

  putInPlace: {
    eyebrow: 'What we put in place',
    heading: 'The leaks that cost money get fixed first.',
    description:
      'We start with how the business actually runs. How calls come in. Where leads go. What happens after. Then routing, follow-up, visibility, and proof get put in place in the order that makes the business easier to run.',
    zones: [
      {
        title: 'Inspect what exists',
        body: 'How calls come in. Where leads go. What happens after.',
        state: 'Mapped',
        iconKey: 'inspect',
      },
      {
        title: 'Locate leakage',
        body: 'Where work escapes — in time, in inbox, in handoff.',
        state: 'Located',
        iconKey: 'locate',
      },
      {
        title: 'Fix money leaks first',
        body: 'Routing, follow-up, visibility, proof — in priority order.',
        state: 'Stabilising',
        iconKey: 'fix',
      },
      {
        title: 'Keep it running',
        body: 'Quietly. Without constant attention from the owner.',
        state: 'Live',
        iconKey: 'keep',
      },
    ],
  },

  fitFoundations: {
    heading: 'This works best when there is already real demand.',
    description:
      'Best for established service businesses — or serious new setups — where calls, enquiries, follow-up, visibility, and proof need to work together from day one.',
    strongFit: [
      'Jobs are worth real money',
      'Enquiries come in but get lost',
      'Everyone is busy doing the actual work',
      'Marketing has been tried before',
      'The business needs something that runs',
    ],
    notFit: [
      'Quick visual refresh',
      'Price-only comparison',
      'Feature checklist',
      'Short-term campaign experiment',
    ],
  },

  clientShift: {
    heading: 'What changes when things stop slipping',
    description:
      'Not a sales pitch. The difference between a business that catches everything and one that does not.',
    before: {
      label: 'Before',
      bullets: [
        '3 separate inboxes',
        'Missed calls, no record',
        'Quotes sent, never chased',
        'Reviews only by accident',
      ],
    },
    after: {
      label: 'After',
      bullets: [
        '1 capture surface',
        'Every call logged',
        'Follow-up on schedule',
        'Reviews consistently captured',
      ],
    },
    scatterItems: ['Voicemail', 'Form', 'DM', 'Email', 'Quote PDF', 'Spreadsheet'],
    shifts: [
      {
        title: 'Enquiries arrive in one place',
        before: '3 inboxes',
        after: '1 surface',
        iconKey: 'capture',
      },
      {
        title: 'Nothing gets lost in the handoff',
        before: 'Manual relay',
        after: 'Routed',
        iconKey: 'handoff',
      },
      {
        title: 'Follow-up happens on schedule',
        before: 'When remembered',
        after: 'On time',
        iconKey: 'schedule',
      },
    ],
  },

  pressurePoints: {
    eyebrow: 'Where it breaks',
    heading: 'Six ways work escapes.',
    description: 'Each one handled by a layer of the system.',
    points: [
      {
        title: 'Cannot be found locally',
        flow: 'Someone searches in the area. A competitor shows up first. The right business is on page two.',
        handledBy: 'Local SEO Authority',
        accent: 'teal',
        iconKey: 'local-seo',
      },
      {
        title: 'Website does not answer the right question',
        flow: 'Visitor lands. Reads a paragraph. Cannot tell if this is the right team. Closes the tab.',
        handledBy: 'Smart Website System',
        accent: 'cyan',
        iconKey: 'service-clarity',
      },
      {
        title: 'Enquiries land in scattered places',
        flow: 'Form to one inbox. Call to a phone. DM somewhere else. Nobody owns the full picture.',
        handledBy: 'AI Lead Handling',
        accent: 'green',
        iconKey: 'scatter-enquiry',
      },
      {
        title: 'Follow-up depends on memory',
        flow: 'Quote sent Tuesday. Nobody chases on Friday. Two weeks later it is gone.',
        handledBy: 'CRM & Automation',
        accent: 'amber',
        iconKey: 'follow-up-memory',
      },
      {
        title: 'Good work does not become proof',
        flow: 'Job done. Client happy. Review never requested. Competitor has eighty, you have twelve.',
        handledBy: 'Reputation & Review',
        accent: 'purple',
        iconKey: 'proof',
      },
      {
        title: 'Spend cannot be traced to real work',
        flow: 'Marketing running. Leads coming in. No clear line from spend to job to revenue.',
        handledBy: 'Revenue Growth',
        accent: 'cyan',
        iconKey: 'revenue-trace',
      },
    ],
  },

  structureLayers: {
    heading: 'It is not a website project.',
    headingMuted: 'It is what catches the work.',
    description:
      'The site is the surface. Underneath: what happens to enquiries, follow-up, visibility, proof collection, and lead recovery. Connected. Running.',
    foundation: { title: 'Smart Website / Business Infrastructure' },
    layers: [
      {
        title: 'Visibility Layer',
        note: 'Local search, map presence, structured service pages',
        accent: 'cyan',
        iconKey: 'visibility-layer',
      },
      {
        title: 'Capture Layer',
        note: 'Calls, forms, DMs — all into one surface',
        accent: 'teal',
        iconKey: 'capture-layer',
      },
      {
        title: 'Response Layer',
        note: 'First reply within minutes, every time',
        accent: 'green',
        iconKey: 'response-layer',
      },
      {
        title: 'Follow-Up Layer',
        note: 'Quote chasing, reminders, ownership',
        accent: 'amber',
        iconKey: 'follow-up-layer',
      },
      {
        title: 'Proof Layer',
        note: 'Reviews requested at the right moment',
        accent: 'purple',
        iconKey: 'proof-layer',
      },
      {
        title: 'Improvement Layer',
        note: 'What works gets reinforced. Spend tied to real work.',
        accent: 'cyan',
        iconKey: 'improvement-layer',
      },
    ],
  },

  industries: {
    eyebrow: 'Where this fits',
    heading: 'Five businesses.',
    headingMuted: 'Same shape of leak.',
    description:
      'The names change. The pattern does not. Work comes in. Some of it lands. Most of the rest depends on someone remembering — until a system holds it instead.',
    scenarios: [
      {
        name: 'Trades & Home Services',
        leak: 'Calls ring out while the team is on the tools. Quotes get sent and never chased.',
        needs: ['Response handling', 'Quote follow-up', 'Local visibility'],
        href: '/industries/home-services',
        accent: 'amber',
        iconKey: 'trades',
      },
      {
        name: 'Beauty & Personal Care',
        leak: 'Bookings collide with back-to-back appointments. No-shows go unrecovered. Reviews stay private.',
        needs: ['Booking capture', 'Reminder flow', 'Review capture'],
        href: '/industries/beauty-personal-care',
        accent: 'red',
        iconKey: 'beauty',
      },
      {
        name: 'Professional Services',
        leak: 'Consultation requests sit in an inbox. Decisions get delayed. The wrong fits take up the calendar.',
        needs: ['Enquiry triage', 'Sequenced follow-up', 'Authority signal'],
        href: '/industries/legal-professional-services',
        accent: 'cyan',
        iconKey: 'professional',
      },
      {
        name: 'Appointment-Based Local',
        leak: 'Local search position slips. Reviews are not asked at the right time. Repeat work depends on memory.',
        needs: ['Local SEO', 'Review timing', 'CRM memory'],
        href: '/industries/local-appointment-businesses',
        accent: 'teal',
        iconKey: 'appointment',
      },
      {
        name: 'Local Multi-Service Businesses',
        leak: 'Multiple services. One website. Visitors cannot tell which service fits them.',
        needs: ['Service architecture', 'Routing logic', 'Spend-to-work loop'],
        href: '/industries/automotive-services',
        accent: 'purple',
        iconKey: 'multi-service',
      },
    ],
  },

  alignment: {
    eyebrow: 'What changes over time',
    heading: 'It does not all happen at once.',
    headingMuted: 'That is the point.',
    description: 'The urgent stuff gets fixed first. Then the rest catches up. Then it compounds.',
    stages: [
      {
        num: '01',
        title: 'Stop the bleeding',
        note: 'Recover the obvious losses. Calls, replies, lost enquiries.',
        weight: 25,
      },
      {
        num: '02',
        title: 'Get the groundwork in',
        note: 'Routing, follow-up, capture surfaces, structured pages.',
        weight: 50,
      },
      {
        num: '03',
        title: 'Start compounding',
        note: 'Visibility, proof, repeat enquiries — building on each other.',
        weight: 78,
      },
      {
        num: '04',
        title: 'Runs without you',
        note: 'Runs quietly. Owner attention only when it matters.',
        weight: 100,
      },
    ],
  },

  proofStory: {
    heading: 'One business.',
    headingMuted: 'Before and after.',
    description: 'Not a portfolio. What changed when things stopped slipping through.',
    before: {
      label: 'Before',
      title: 'Basic website, scattered ops',
      bullets: [
        'Calls missed during the day',
        'Enquiries spread across 3 inboxes',
        'Quotes sent — never followed up',
        'Reviews collected by accident',
      ],
    },
    change: {
      label: 'System change',
      title: 'What changed',
      bullets: [
        'Single capture surface',
        'Routing + follow-up automation',
        'Local visibility groundwork',
        'Review request flow on completion',
      ],
    },
    after: {
      label: 'After',
      title: 'Runs without constant attention',
      bullets: [
        'Enquiries land in one place',
        'Routing handled automatically',
        'Follow-up happens on schedule',
        'Reviews coming in steadily',
      ],
    },
    quote:
      'We moved from a basic website to something connected. Enquiries land in the right place, follow-up is clearer. The business runs easier now.',
    quoteAttribution: 'Owner — established service business',
  },

  implementationExamples: {
    eyebrow: 'Architecture sample board',
    heading: 'What implementation can look like',
    description:
      'Not every business needs the same build. The system is shaped around where work is leaking.',
    boardLabel: 'Implementation patterns — selected',
    boardCount: '05 patterns shown',
    implementationPatterns: [
      {
        title: 'Missed call recovery flow',
        desc: 'Inbound voicemail triggers an SMS reply, logs the enquiry, and routes it into the queue.',
        flow: ['Voicemail', 'SMS reply', 'Enquiry log', 'Queue'],
        iconKey: 'missed-call-recovery',
      },
      {
        title: 'Lead follow-up sequence',
        desc: 'Quote sent → 24h check-in → 3d nudge → 7d close-out. On schedule, not by memory.',
        flow: ['Quote', '+24h', '+3d', '+7d'],
        iconKey: 'follow-up-sequence',
      },
      {
        title: 'Service page structure',
        desc: 'Service clarity, area coverage, structured capture surface — built so search and humans both understand.',
        flow: ['Clarity', 'Coverage', 'Capture'],
        iconKey: 'service-page-structure',
      },
      {
        title: 'Review request flow',
        desc: 'Job marked complete → review request → reminder → review surfaced where it earns trust.',
        flow: ['Done', 'Request', 'Remind', 'Display'],
        iconKey: 'review-flow',
      },
      {
        title: 'CRM routing',
        desc: 'All channels — call, form, DM, email — into one record. Owner sees the queue, not the chaos.',
        flow: ['Channel', 'Record', 'Queue'],
        iconKey: 'crm-routing',
      },
    ],
  },

  faq: {
    heading: 'Straight answers',
    description: 'Practical questions, answered without spin.',
    items: [
      {
        question: 'What do you build?',
        answer:
          'Connected business systems for service businesses — Smart Websites, Local SEO Authority, AI Lead Handling, CRM & Automation, Reputation, Revenue Growth. Connected, not standalone.',
      },
      {
        question: 'How is this different from getting a new website?',
        answer:
          'A website is a surface. We build the underlying capture, routing, follow-up, visibility, and proof layers — so the surface actually catches the work.',
      },
      {
        question: 'We already have a website. Can you work with that?',
        answer:
          'Often yes. We start by inspecting what exists, locate where it leaks, and put the missing layers in place around it.',
      },
      {
        question: 'Is SEO included?',
        answer:
          'Local SEO Authority is one of the systems. It is not a bolt-on — it is part of the visibility layer.',
      },
      {
        question: 'What about missed calls and follow-up?',
        answer:
          'Handled by the Capture and Follow-Up layers. Missed call recovery flows, routed enquiries, sequenced replies.',
      },
      {
        question: 'What kind of businesses is this for?',
        answer:
          'Established service businesses, or serious new setups, where jobs are worth real money and demand already exists.',
      },
      {
        question: 'How long before we see results?',
        answer:
          'Stop the bleeding in weeks. Groundwork in months. Compounding takes longer — that is the point.',
      },
      {
        question: 'Do you do ongoing work?',
        answer:
          'Yes. Infrastructure needs maintenance, observation, and tuning. We can run it or hand it over.',
      },
      {
        question: 'How do we start?',
        answer:
          'Start a conversation. We map where work is leaking and what to put in place first.',
      },
    ],
  },

  cta: {
    eyebrow: 'Start Here',
    heading: {
      title: 'Something here hit close.',
      muted: 'Find where it is breaking.',
      description:
        'We can map what needs building first, whether you are fixing years of patchwork or setting the foundation properly from day one.',
    },
    actions: [
      {
        label: 'Start a Conversation',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'page',
          slug: 'home',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where work is coming in today' },
      { num: '02', text: 'What is being held — and what is not' },
      { num: '03', text: 'What to fix first' },
      { num: '04', text: 'What it would mean for revenue' },
    ],
    footer: {
      noSell: 'No hard sell.',
      tone: 'Calm conversation',
    },
  },
};
