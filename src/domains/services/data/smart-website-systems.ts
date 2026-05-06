import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

// =============================================================================
// Smart Website Systems — page data (blueprint-aligned)
// Sections: leakMap · comparison · handoffBoard · coverageLedger ·
//           environmentRoster · handledPath · proofStory · compoundingSignals ·
//           buildBoard · fitFilter · faq
// =============================================================================

const smartWebsitesFaqItems = [
  {
    question: 'How is this different from getting a new website built?',
    answer:
      'Most builds stop at how it looks. This connects every enquiry to a real person, logs it, and follows up automatically. The difference shows up in your inbox, not your homepage.',
  },
  {
    question: 'We already spent a lot on our current site. Do we start over?',
    answer:
      'Not always. If the current site is structurally sound, we can connect the enquiry handling, CRM, and follow-up into what you already have. If it cannot support that properly, we will say so clearly before recommending a rebuild.',
  },
  {
    question: 'Do we need a specific CRM?',
    answer:
      'No. We build this around whatever CRM platform fits your workflow — enquiries, follow-up, and reporting all in one place. If you already have a setup that works, we can connect that instead.',
  },
  {
    question: 'Will local people actually find us on Google?',
    answer:
      'Each service gets its own page with wording that matches how people actually search. That gives Google a clear page to show when someone nearby needs that exact service.',
  },
  {
    question: "How much upkeep is there once it's running?",
    answer:
      'Day-to-day is light — updating content, checking leads. Your team gets a proper walkthrough before we hand anything over.',
  },
  {
    question: 'What exactly do we walk away with?',
    answer:
      "Full documentation, hands-on training, and a team that can run it without us. If you want ongoing support after that, it's there.",
  },
  {
    question: 'How long does the whole thing take?',
    answer:
      "Four to six weeks for a straightforward build. Multiple locations or complex booking connections push it closer to eight to twelve. You'll know the timeline upfront.",
  },
  {
    question: 'What should we expect to pay?',
    answer:
      'It depends on how many services you run, what needs connecting, and how much content is involved. You get a clear number before anything starts.',
  },
];

export const smartWebsiteSystemsPage = {
  seo: buildServiceSeo({
    slug: 'smart-website-systems',
    title: 'Smart Website Systems for Service Businesses',
    description:
      'Websites that capture every enquiry, route it to the right person, and follow up automatically. Built for service businesses losing leads to broken websites.',
  }),
  slug: 'smart-website-systems',
  systems: ['smart-website-systems'],
  topics: [
    'website-infrastructure',
    'lead-capture',
    'conversion-optimization',
    'crm-enabled-websites',
    'service-pages',
  ],
  badge: 'Smart Websites',
  category: 'Website That Works',
  hero: {
    badge: 'Smart Websites',
    title: 'Enquiries Arrive. Nobody Picks Them Up.',
    description:
      "Somebody finds your business online. Ready to talk. They fill in a form. That message goes to an email nobody checks until the end of the day. They've already rung someone else.",
    list: ['Lost leads', 'No follow-up', 'No tracking'],
    visual: {
      brand: 'operations',
      title: 'Live enquiry feed',
      subtitle: 'Last 24 hours · auto-routed',
      rows: [
        { label: 'Roof repair · Mark T.', value: 'Assigned', status: 'good' as const },
        { label: 'Quote request · Sara P.', value: 'Follow-up', status: 'warn' as const },
        { label: 'Booking · Lina R.', value: 'Confirmed', status: 'good' as const },
        { label: 'Old enquiry · Tom W.', value: 'Lost', status: 'risk' as const },
      ],
      footerPrimary: 'auto-assigned · CRM logged',
      footerSecondary: 'uptime 99.98%',
    },
  },
  sections: {
    // ── leakMap ──────────────────────────────────────────────────────────────
    leakMap: {
      header: {
        kicker: 'Where it breaks',
        title: 'Where enquiries leak out of your business',
        description:
          'Five points where leads disappear — before your team ever has a chance to respond.',
      },
      stages: ['Discovery', 'Capture', 'Response', 'Follow-up', 'Visibility'] as const,
      primaryLeak: {
        stage: 'Response',
        title: 'Hours pass before anyone replies',
        situation:
          'A form lands in a shared inbox. Nobody owns it. Whoever checks it that day replies — if they remember. By then the caller has already rung someone else.',
        cost: 'The business that responds first usually gets the work. A slow reply does not lose the enquiry in your mind — it was already gone before you noticed.',
        handledState:
          'An automated confirmation goes out immediately. The enquiry is logged with a notification to the right person. Your team picks it up in minutes, not hours.',
      },
      leaks: [
        {
          stage: 'Discovery',
          title: 'They cannot find the one thing they need',
          situation:
            'All services are grouped under one heading. A visitor looking for a specific thing has to sift through everything else. Most do not.',
          cost: 'Visitors leave without enquiring because they cannot quickly identify what they came for.',
          handledState:
            'Each service has its own page, written the way people search for it. The right visitor lands directly.',
        },
        {
          stage: 'Capture',
          title: 'The message goes to the wrong place',
          situation:
            'Forms feed into a shared email. On mobile, buttons are too small and forms break. Enquiries pile up unread.',
          cost: 'Visitors on phones abandon the form before completing it. The lead never arrives.',
          handledState:
            'Enquiry routes directly to the right person with name, number, and service already attached.',
        },
        {
          stage: 'Follow-up',
          title: 'Nobody chases — so the lead goes cold',
          situation:
            'No follow-up sequence. Your team is mid-job. Checking back on outstanding enquiries depends on memory.',
          cost: 'Warm leads go cold without a reply. Work that was available disappears without your team knowing.',
          handledState:
            'Follow-up runs automatically until there is a response. Your team delivers the work — the system handles the chasing.',
        },
        {
          stage: 'Visibility',
          title: 'Marketing spend cannot be measured',
          situation:
            'Ads, social, and directories run separately. Nothing connects a click to an actual enquiry or a piece of work won.',
          cost: 'Spend continues without evidence of return. Channels that are not working are kept on.',
          handledState:
            'Tracking shows where each enquiry came from. Channels that produce real work are visible. Ones that do not are too.',
        },
      ],
      summary:
        'These are not design problems. They are handling problems. The fix is not a better-looking website — it is a website that holds what arrives.',
    },
    // ── comparison ───────────────────────────────────────────────────────────
    comparison: {
      header: {
        kicker: 'Broken vs fixed',
        title: 'The difference between a site that exists and one that earns',
        description:
          "Having something online isn't the bar. The question is whether anything happens after someone shows up.",
      },
      leftState: {
        label: 'Today',
        title: 'How it runs right now',
        groups: [
          {
            label: 'Discovery',
            text: 'Different services are crammed onto one page. Someone looking for one specific thing has to dig through everything else first.',
          },
          {
            label: 'Capture',
            text: 'Contact form feeds into an email account. Whoever remembers to check it, replies. Could be hours. Could be days.',
          },
          {
            label: 'Visibility',
            text: 'No visibility into who visited, what they looked at, or where they dropped off. Marketing spend is a guess.',
          },
          {
            label: 'Routing',
            text: 'Enquiries live in one place. Customer details in another. When it gets busy, things get missed between the two.',
          },
          {
            label: 'Upkeep',
            text: "Content hasn't been touched since launch. Outdated information. Broken links. Nobody's checking.",
          },
        ],
      },
      rightState: {
        label: 'Connected',
        title: "How it runs when it's connected",
        groups: [
          {
            label: 'Discovery',
            text: 'Each service has its own clear page. Visitors recognise what they need and act faster.',
          },
          {
            label: 'Capture',
            text: "Enquiries arrive with name, number, and what they're after. The right person picks it up in minutes.",
          },
          {
            label: 'Visibility',
            text: 'You can see where people come from, what they do, and which spend brings real work.',
          },
          {
            label: 'Routing',
            text: 'The form goes straight into your CRM and follow-up starts without anyone copying details by hand.',
          },
          {
            label: 'Upkeep',
            text: 'Backed up. Monitored. Updated. Issues flagged before customers notice them.',
          },
        ],
      },
      takeaway:
        "Having something online isn't the bar. The question is whether anything happens after someone shows up.",
    },
    // ── handoffBoard ─────────────────────────────────────────────────────────
    handoffBoard: {
      header: {
        kicker: 'Connected systems',
        title: 'What the website hands off — and to what',
        description:
          'A Smart Website captures the enquiry. What happens after depends on the systems connected to it.',
      },
      source: {
        label: 'Entry point',
        title: 'Smart Website Systems',
        responsibilities: [
          'Service page structure',
          'Enquiry capture',
          'Form routing',
          'Visibility setup',
        ],
        statusLines: ['Enquiry captured', 'Source attached', 'Next step visible'],
      },
      connections: [
        {
          targetSystem: 'AI Lead Handling',
          handoff:
            'The website captures the enquiry and routes it. AI Lead Handling takes the first response — confirming receipt, qualifying intent, and keeping the conversation moving before your team picks it up.',
          boundary:
            'Smart Website Systems owns the capture and routing. AI Lead Handling owns the initial response and conversation logic that follows.',
        },
        {
          targetSystem: 'CRM Automation',
          handoff:
            'Every enquiry that enters through the website goes straight into the CRM with name, number, service, and source attached. CRM Automation owns the workflow, assignment, follow-up sequence, and reporting from that point.',
          boundary:
            'Smart Website Systems owns the entry point. CRM Automation owns the pipeline, task management, and ongoing communication.',
        },
        {
          targetSystem: 'Local SEO Authority',
          handoff:
            'The service pages built into the Smart Website System give Local SEO Authority a structured foundation to work from — individual pages, clear service intent, and the content signals that local search depends on.',
          boundary:
            'Smart Website Systems owns the page structure and on-page content. Local SEO Authority owns the citation, profile, and authority-building work that makes those pages discoverable.',
        },
      ],
      note: 'The Smart Website owns the entry. Every system downstream depends on what it captures.',
    },
    // ── coverageLedger ───────────────────────────────────────────────────────
    coverageLedger: {
      header: {
        kicker: 'What is included',
        title: 'Everything in scope from day one',
        description: 'Not a pick-and-choose list. Every project covers all of this.',
      },
      legend: ['Structure', 'Capture', 'Routing', 'Visibility', 'Protection', 'Handover'],
      bands: [
        {
          name: 'Structure',
          purpose: 'What is built as part of the initial project',
          includedItems: [
            'WordPress build shaped around your services and how customers search for them',
            'Individual service pages written for the searches people nearby actually make',
            'Enquiry forms capturing name, number, and service — routed to the right person',
            'Mobile tested and working across phones, tablets, and desktops',
          ],
        },
        {
          name: 'Capture & Routing',
          purpose: 'Systems connected during the build',
          includedItems: [
            'CRM or booking tool connected from day one — every lead logged on arrival',
            'Automated confirmation sent immediately when an enquiry lands',
            'Follow-up sequence running without anyone on your team having to remember',
            'Every enquiry path tested end to end before launch',
          ],
        },
        {
          name: 'Visibility',
          purpose: 'Tracking and search setup included in the build',
          includedItems: [
            'Tracking showing where visitors come from and what they do',
            'Each service page written the way people search for it',
            'Clear structure for Google to read and match against service searches',
          ],
        },
        {
          name: 'Protection',
          purpose: 'Reliability and security from day one',
          includedItems: [
            'SSL, daily backups, and security monitoring from day one',
            'Issues flagged before customers notice them',
          ],
        },
        {
          name: 'Handover',
          purpose: 'What you receive at the end of the project',
          includedItems: [
            'Full documentation for content, CRM, and follow-up management',
            'Hands-on walkthrough for your team',
            'Your team manages content, checks leads, and handles updates independently from there',
          ],
        },
      ],
      closingStatement: 'Not a pick-and-choose list. Every project covers all of this.',
    },
    // ── environmentRoster ────────────────────────────────────────────────────
    environmentRoster: {
      header: {
        kicker: 'Built for',
        title: 'Built for businesses where the first contact matters',
        description:
          'If your work starts when someone calls, books, or fills in a form — that moment has to go right. Everything after depends on it.',
      },
      rows: [
        {
          name: 'Service businesses',
          enquiryTriggers: 'Phone calls, contact forms, quote requests',
          operationalNeed:
            'Individual service pages, clear contact paths, every enquiry captured and routed to the right person',
          outcomeSignals: ['Listed services', 'Direct contact', 'Tracked leads'],
          scenario:
            "A roofing company with five services jammed onto one page. A homeowner searching for emergency repairs can't tell from the listing whether they do it. They ring the next result.",
        },
        {
          name: 'Appointment-based businesses',
          enquiryTriggers: 'Online booking, phone calls, availability checks',
          operationalNeed:
            'Booking that shows real availability, automated reminders, no-shows drop without manual chasing',
          outcomeSignals: ['Online booking', 'Automated reminders', 'Availability visible'],
          scenario:
            'A dental clinic where patients check availability by ringing. Half the calls go to voicemail. The website has no booking. They go to the practice that let them book at midnight.',
        },
        {
          name: 'Multi-location businesses',
          enquiryTriggers: 'Location-based searches, area-specific contact forms',
          operationalNeed:
            'Each location has its own page, own contact path, and own CRM routing so leads do not land in the wrong inbox',
          outcomeSignals: ['Location pages', 'Local routing', 'Separate tracking'],
          scenario:
            'A cleaning company operating in three areas. One generic contact form. Enquiries land anywhere. The team in one area never sees requests from another.',
        },
        {
          name: 'Single-offer campaigns',
          enquiryTriggers: 'Paid traffic, single CTA, direct conversion path',
          operationalNeed:
            'One service. One action. One number to track. Built for a specific offer that needs a direct outcome',
          outcomeSignals: ['Single offer', 'Clear CTA', 'Tracked result'],
          scenario:
            'A kitchen fitter running ads for a seasonal promotion. Traffic hits the homepage, gets lost, leaves. The campaign burns money without a dedicated landing point.',
        },
      ],
    },
    // ── handledPath ──────────────────────────────────────────────────────────
    handledPath: {
      header: {
        kicker: 'System layers',
        title: 'From visitor to handled enquiry',
        description:
          'Someone arrives. Sees what they need. Reaches out. Your team has it. Nothing drops between.',
      },
      stages: [
        {
          name: 'Discovery',
          title: 'Someone looking for one thing can find it and act',
          description:
            "They land looking for one specific service. It's right there. What it involves, how to reach you. No scrolling through everything else.",
          proofPoints: [
            'They find what they came for. Not buried under ten other things.',
            'Clear next step on every service — form, call, or booking',
            'Written the way people ask for help, not the way you file it internally',
          ],
          stateLabel: 'Service found',
        },
        {
          name: 'Visibility',
          title: 'Your services are structured so Google can match them',
          description:
            'Each service listed separately. Written the way people look for help. When the site is structured right, the rest of your visibility — search, ads, directories — has something to land on.',
          proofPoints: [
            'The words on your site match what people actually type into Google.',
            'Each service has its own page. Google reads the full picture.',
            'Everything else you do to get found feeds back here.',
          ],
          stateLabel: 'Intent matched',
        },
        {
          name: 'Routing',
          title: 'The right person on your team gets it immediately',
          description:
            "Someone reaches out. Their name, number, what they want — it hits your CRM in seconds. Nobody's copying between inboxes. Nobody's retyping into a spreadsheet.",
          proofPoints: [
            'Goes to the right person. Not a shared inbox nobody checks.',
            'Booking shows real availability. They pick a time without phoning.',
            'Tracked from the moment it arrives. Nothing disappears between form and follow-up.',
          ],
          stateLabel: 'Enquiry owned',
          emphasis: true,
        },
        {
          name: 'Follow-up',
          title: 'Nobody on your team has to remember to chase',
          description:
            'They reach out. Confirmation goes straight away. No reply? Reminder goes out. Your team does the work. Chasing runs on its own.',
          proofPoints: [
            'First response in minutes. Even at midnight.',
            'Reminders the day before an appointment. No-shows drop.',
            'Keeps going until they respond. Nothing goes cold quietly.',
          ],
          stateLabel: 'Nothing cold',
        },
      ],
      finalSummary:
        'Someone arrives. Sees what they need. Reaches out. Your team has it. Nothing drops between.',
    },
    // ── proofStory ───────────────────────────────────────────────────────────
    proofStory: {
      header: {
        kicker: 'Real outcome',
        title: 'What changed for a real business',
        description:
          "A veterinary clinic had a decent-looking site and regular traffic. Barely any of it converted into actual bookings. Here's what we found.",
      },
      proofType: 'Scenario Study',
      context: {
        business: 'Veterinary clinic',
        situation:
          'Decent-looking site, regular traffic. Barely any of it was converting into bookings. Reception was handling everything manually.',
        constraint: 'No new traffic needed. Fixed existing handling.',
      },
      before: {
        title: 'Before: visitors coming in, almost nothing coming out',
        body: 'Everything on one long scroll. Contact form going to an email nobody really owned. Enquiries dying in a queue.',
        bullets: [
          "Vaccinations, dental, emergency — all jammed together. A pet owner looking for one thing had to wade through the rest. Most didn't.",
          "The contact form went somewhere. Reception sometimes checked it. Sometimes didn't. Two-day response was a good week.",
          'Nobody knew how many people enquired. Or what happened after. The vet had a feeling things were slipping — but no numbers to prove it.',
        ],
      },
      change: {
        title: 'What changed: services separated, handling connected',
        body: 'Vaccinations in one place. Dental in another. Emergency in its own spot. Forms going straight to the booking tool. Follow-up running on its own.',
        bullets: [
          'Each service pulled apart — its own content, its own booking option. Pet owners land where they need to be. No hunting.',
          'Forms hit the practice management tool directly. Staff saw enquiries the second they arrived.',
          'Confirmations and reminders ran automatically. Reception stopped having to remember who to chase.',
        ],
      },
      after: {
        title: 'After: same traffic, completely different outcome',
        body: 'Six weeks in, bookings picked up. Not a trickle — actual appointments from people who found what they needed.',
        bullets: [
          'Went from a handful of bookings a month to over forty. Same visitors. Just — people could finally find what they were looking for.',
          'Response time collapsed. Days became minutes. Enquiries arrived with a notification, not buried in an inbox.',
          "First time the practice could see which channels actually brought appointments in. Cut the ones that didn't.",
        ],
      },
    },
    // ── compoundingSignals ───────────────────────────────────────────────────
    compoundingSignals: {
      header: {
        kicker: 'Compounding effect',
        title: 'What changes when the site actually works',
        description:
          'Not about how it looks. About what happens when every interested person can reach you and your team sees it straight away.',
      },
      liveSignal: {
        title: 'Enquiry received — routed automatically',
        rows: [
          { label: 'Source', value: 'Google Search', status: 'active' as const },
          { label: 'Service', value: 'Roof repair', status: 'active' as const },
          { label: 'Assigned to', value: 'Mark T.', status: 'active' as const },
          { label: 'Follow-up', value: 'Scheduled', status: 'active' as const },
          { label: 'Response sent', value: '2 min ago', status: 'clear' as const },
        ],
      },
      effects: [
        {
          title: 'Ad spend pays for itself',
          before:
            'Traffic clicks through. Nothing gets captured. The spend continues without evidence of return.',
          after:
            'People find what they came for and get in touch. Follow-up runs before it goes cold. Spend that works is visible.',
        },
        {
          title: 'Less chasing, more delivering',
          before:
            'Enquiries live in an inbox. Your team checks it when they remember. Leads go cold between jobs.',
          after:
            'Enquiries arrive with context attached. Follow-up is handled. Your team focuses on the actual work.',
        },
        {
          title: 'Search traffic has somewhere to land',
          before:
            'One page covers everything. Nobody searching for a specific service finds a specific answer.',
          after:
            'Each service has its own page. Google can match it to the search. The site becomes where everything else points.',
        },
        {
          title: 'Your team can see what happened',
          before:
            'No record of who enquired, which channel sent them, or what happened after. Gut feeling is all you have.',
          after:
            'Every enquiry tracked from source to outcome. Channels that produce real work are visible. Ones that do not are too.',
        },
      ],
      summary:
        'Visits disappear into separate places — email, social messages, missed calls — with nothing connecting them. When the site works, every enquiry has a source, an owner, and a next step.',
    },
    // ── buildBoard ───────────────────────────────────────────────────────────
    buildBoard: {
      header: {
        kicker: 'How it works',
        title: 'From first conversation to a site pulling its weight',
        description:
          "We start with how your business runs — not with colours or layouts. The build follows what we learn.",
      },
      projectInputs: [
        'Incoming calls and missed calls',
        'Contact forms and booking requests',
        'Existing pages and service listings',
        'CRM and follow-up gaps',
        'Channels you already use to get found',
      ],
      stages: [
        {
          title: 'Map how leads arrive',
          description:
            'We trace every path an enquiry takes — from where people find you to where the message ends up. We identify what is leaking before anything is built.',
          outputs: ['Enquiry flow mapped', 'Leak points identified', 'CRM gaps flagged'],
        },
        {
          title: 'Structure pages around real services',
          description:
            'Each service gets its own page, written the way people search for it. The architecture follows the business, not a template.',
          outputs: [
            'Service pages planned',
            'Content aligned to search intent',
            'Clear next actions on every page',
          ],
        },
        {
          title: 'Connect enquiry handling',
          description:
            'Forms feed directly into your CRM. Confirmations go out automatically. The right person is notified the moment an enquiry arrives.',
          outputs: ['CRM connected', 'Auto-confirmation live', 'Routing configured'],
        },
        {
          title: 'Hand over to your team',
          description:
            'Everything tested end to end. Your team gets documentation and a walkthrough. They run it independently from there.',
          outputs: ['Full documentation', 'Team walkthrough', 'Independent from day one'],
        },
      ],
      finalState: {
        title: 'What is working after the build',
        workingOutcomes: [
          'Clear service pages — visitors find what they came for',
          'Every enquiry captured with name, number, and service',
          'Leads assigned and confirmed automatically',
          'Follow-up running without anyone having to remember',
          'Tracking showing which channels produce real work',
        ],
      },
    },
    // ── fitFilter ────────────────────────────────────────────────────────────
    fitFilter: {
      header: {
        kicker: 'Fit check',
        title: 'Is this the right fit?',
        description: "This solves a specific kind of problem. Here's how to tell if yours matches.",
      },
      strongFit: {
        label: 'Strong fit',
        title: 'This is a strong fit if',
        scenarios: [
          {
            title: 'Traffic comes in but nothing converts',
            description:
              "People visit. Browse. Leave. Attention isn't the problem. Nothing on the site gives them a reason to act.",
          },
          {
            title: 'Enquiries take days to get a response',
            description:
              "Messages sit in a shared inbox nobody owns. By the time someone replies, the customer's moved on to whoever answered first.",
          },
          {
            title: "You can't tell which marketing is working",
            description:
              "Money goes out across different channels. You've no idea which one produced the last real enquiry — or if any of them did.",
          },
          {
            title: "Local people can't find your individual services",
            description:
              "Everything's bundled into one listing. Someone searching for a specific thing you do doesn't find you. They find whoever listed it separately.",
          },
        ],
      },
      notFit: {
        label: 'Probably not for you',
        title: "This probably isn't for you if",
        scenarios: [
          {
            title: 'You need something basic with no connections',
            description:
              "If CRM, booking, and follow-up aren't needed, this is more than you need. A simpler build costs less and does the job.",
          },
          {
            title: "Enquiries are already steady and nothing's slipping",
            description:
              "If your current setup brings in enough work and nothing gets missed, a rebuild won't shift much.",
          },
          {
            title: 'You sell products, not services',
            description:
              'If you need checkout and inventory, our e-commerce build is a better starting point for that.',
          },
        ],
      },
    },
    // ── faq ──────────────────────────────────────────────────────────────────
    faq: {
      header: {
        badge: 'FAQ',
        title: 'What business owners ask before getting started',
        description: 'Direct answers. No jargon.',
      },
      items: smartWebsitesFaqItems,
    },
  },
  cta: {
    heading: {
      kicker: 'Final step',
      title: "Show me what's broken",
      description:
        "Drop your URL. We come back with what's working, what's leaking, and what to fix.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
