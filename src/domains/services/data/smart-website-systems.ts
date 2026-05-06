import { Briefcase, Building2, Calendar, Store } from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

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
    comparison: {
      header: {
        badge: 'Broken vs fixed',
        title: 'The difference between a site that exists and one that earns',
        description:
          "Having something online isn't the bar. The question is whether anything happens after someone shows up.",
      },
      beforeLabel: 'Today',
      afterLabel: 'Connected',
      items: [
        {
          type: 'before' as const,
          title: 'How it runs right now',
          items: [
            'Different services are crammed onto one page. Someone looking for one specific thing has to dig through everything else first.',
            'Contact form feeds into an email account. Whoever remembers to check it, replies. Could be hours. Could be days.',
            'No visibility into who visited, what they looked at, or where they dropped off. Marketing spend is a guess.',
            'Enquiries live in one place. Customer details in another. When it gets busy, things get missed between the two.',
            "Content hasn't been touched since launch. Outdated information. Broken links. Nobody's checking.",
          ],
        },
        {
          type: 'after' as const,
          title: "How it runs when it's connected",
          items: [
            'Each service has its own clear page. Visitors recognise what they need and act faster.',
            "Enquiries arrive with name, number, and what they're after. The right person picks it up in minutes.",
            'You can see where people come from, what they do, and which spend brings real work.',
            'The form goes straight into your CRM and follow-up starts without anyone copying details by hand.',
            'Backed up. Monitored. Updated. Issues flagged before customers notice them.',
          ],
        },
      ],
    },
    included: {
      header: {
        badge: "What's in scope",
        title: "What's in the build — scope and delivery",
        description: 'Not a pick-and-choose list. Everything here is standard.',
      },
      items: [
        'WordPress build shaped around what you actually do and how customers look for it',
        'Enquiry forms that capture name, number, and what they need — routed to the right person',
        'CRM or booking tool connected from day one. Every lead logged the moment it lands.',
        'Automated confirmations, reminders, and follow-up running without anyone on your team lifting a finger',
        'Follow-up automation configured around your real enquiry flow, not bolted on after launch',
        'Every enquiry path tested before launch so forms, buttons, calls, and bookings all work end to end',
        'Tracking showing where visitors come from and what they do before they leave or get in touch',
        'SSL, daily backups, and security monitoring from the start',
        'Tested across phones, tablets, and desktops — working properly on each',
        'Service pages written clearly enough for Google to match them to the searches people nearby actually make',
        'Documentation and a proper walkthrough. Your team runs it independently from there.',
      ],
    },
    types: {
      header: {
        badge: 'Built for',
        title: 'Built for businesses where the first contact matters',
        description:
          'If your work starts when someone calls, books, or fills in a form — that moment has to go right. Everything after depends on it.',
      },
      items: [
        {
          icon: Briefcase,
          title: 'Service businesses',
          description:
            'Tradespeople, consultants, agencies — services listed individually, contact paths clear, every enquiry captured and routed.',
          points: ['Listed services', 'Direct contact', 'Tracked leads'],
          iconType: 'primary' as const,
        },
        {
          icon: Store,
          title: 'Online shops',
          description:
            'Products shown, checkout functioning, orders logged. Find it, buy it, done.',
          points: ['Products', 'Checkout', 'Orders'],
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Appointment-based businesses',
          description:
            'Salons, clinics, coaches — customers book a slot without calling. Reminders go out automatically. No-shows drop.',
          points: ['Booking', 'Reminders', 'Availability'],
          iconType: 'primary' as const,
        },
        {
          icon: Building2,
          title: 'Single-offer campaigns',
          description:
            'One service. One action. One number to track. Built for a specific offer that needs a direct outcome.',
          points: ['Single offer', 'Clear action', 'Tracked result'],
          iconType: 'primary' as const,
        },
      ],
    },
    coreLayer: {
      header: {
        badge: 'System layers',
        title: 'From visitor to handled enquiry',
        description:
          'Someone arrives. Sees what they need. Reaches out. Your team has it. Nothing drops between.',
      },
      cards: [
        {
          title: 'Someone looking for one thing can find it and act',
          description:
            "They land looking for one specific service. It's right there. What it involves, how to reach you. No scrolling through everything else.",
          points: [
            'They find what they came for. Not buried under ten other things.',
            'Clear next step on every service — form, call, or booking',
            'Written the way people ask for help, not the way you file it internally',
          ],
          featured: true,
        },
        {
          title: 'Your services are structured so Google can match them',
          description:
            'Each service listed separately. Written the way people look for help. When the site is structured right, the rest of your visibility — search, ads, directories — has something to land on.',
          points: [
            'The words on your site match what people actually type into Google.',
            'Each service has its own page. Google reads the full picture.',
            'Everything else you do to get found feeds back here.',
          ],
        },
        {
          title: 'The right person on your team gets it immediately',
          description:
            "Someone reaches out. Their name, number, what they want — it hits your CRM in seconds. Nobody's copying between inboxes. Nobody's retyping into a spreadsheet.",
          points: [
            'Goes to the right person. Not a shared inbox nobody checks.',
            'Booking shows real availability. They pick a time without phoning.',
            'Tracked from the moment it arrives. Nothing disappears between form and follow-up.',
          ],
        },
        {
          title: 'Nobody on your team has to remember to chase',
          description:
            'They reach out. Confirmation goes straight away. No reply? Reminder goes out. Your team does the work. Chasing runs on its own.',
          points: [
            'First response in minutes. Even at midnight.',
            'Reminders the day before an appointment. No-shows drop.',
            'Keeps going until they respond. Nothing goes cold quietly.',
          ],
        },
      ],
    },
    proof: {
      header: {
        badge: 'Real outcome',
        title: 'What changed for a real business',
        description:
          "A veterinary clinic had a decent-looking site and regular traffic. Barely any of it converted into actual bookings. Here's what we found.",
      },
      beforeLabel: 'Before',
      changeLabel: 'What changed',
      afterLabel: 'After',
      cards: [
        {
          title: 'Before: visitors coming in, almost nothing coming out',
          description:
            'Everything on one long scroll. Contact form going to an email nobody really owned. Enquiries dying in a queue.',
          points: [
            "Vaccinations, dental, emergency — all jammed together. A pet owner looking for one thing had to wade through the rest. Most didn't.",
            "The contact form went somewhere. Reception sometimes checked it. Sometimes didn't. Two-day response was a good week.",
            'Nobody knew how many people enquired. Or what happened after. The vet had a feeling things were slipping — but no numbers to prove it.',
          ],
        },
        {
          title: 'What changed: services separated, handling connected',
          description:
            'Vaccinations in one place. Dental in another. Emergency in its own spot. Forms going straight to the booking tool. Follow-up running on its own.',
          points: [
            'Each service pulled apart — its own content, its own booking option. Pet owners land where they need to be. No hunting.',
            'Forms hit the practice management tool directly. Staff saw enquiries the second they arrived.',
            'Confirmations and reminders ran automatically. Reception stopped having to remember who to chase.',
          ],
          featured: true,
        },
        {
          title: 'After: same traffic, completely different outcome',
          description:
            'Six weeks in, bookings picked up. Not a trickle — actual appointments from people who found what they needed.',
          points: [
            'Went from a handful of bookings a month to over forty. Same visitors. Just — people could finally find what they were looking for.',
            'Response time collapsed. Days became minutes. Enquiries arrived with a notification, not buried in an inbox.',
            "First time the practice could see which channels actually brought appointments in. Cut the ones that didn't.",
          ],
        },
      ],
    },
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
      signals: [
        {
          title: 'Ad spend pays for itself',
          before: 'Traffic clicks through. Nothing gets captured. The spend continues without evidence of return.',
          after: 'People find what they came for and get in touch. Follow-up runs before it goes cold. Spend that works is visible.',
        },
        {
          title: 'Less chasing, more delivering',
          before: 'Enquiries live in an inbox. Your team checks it when they remember. Leads go cold between jobs.',
          after: 'Enquiries arrive with context attached. Follow-up is handled. Your team focuses on the actual work.',
        },
        {
          title: 'Search traffic has somewhere to land',
          before: 'One page covers everything. Nobody searching for a specific service finds a specific answer.',
          after: 'Each service has its own page. Google can match it to the search. The site becomes where everything else points.',
        },
        {
          title: 'Your team can see what happened',
          before: 'No record of who enquired, which channel sent them, or what happened after. Gut feeling is all you have.',
          after: 'Every enquiry tracked from source to outcome. Channels that produce real work are visible. Ones that do not are too.',
        },
      ],
      summary: {
        before: 'Visits disappear into separate places — email, social messages, missed calls — with nothing connecting them.',
        after: 'Every enquiry has a source, an owner, and a next step. Your team sees it the moment it arrives.',
      },
    },
    operatingBuild: {
      header: {
        kicker: 'How it works',
        title: 'From first conversation to a site pulling its weight',
        description:
          "We start with how your business runs — not with colours or layouts. The build follows what we learn.",
      },
      inputs: [
        'Incoming calls and missed calls',
        'Contact forms and booking requests',
        'Existing pages and service listings',
        'CRM and follow-up gaps',
        'Channels you already use to get found',
      ],
      stages: [
        {
          title: 'Map how leads arrive',
          description: 'We trace every path an enquiry takes — from where people find you to where the message ends up. We identify what is leaking before anything is built.',
          outputs: ['Enquiry flow mapped', 'Leak points identified', 'CRM gaps flagged'],
        },
        {
          title: 'Structure pages around real services',
          description: 'Each service gets its own page, written the way people search for it. The architecture follows the business, not a template.',
          outputs: ['Service pages planned', 'Content aligned to search intent', 'Clear next actions on every page'],
        },
        {
          title: 'Connect enquiry handling',
          description: 'Forms feed directly into your CRM. Confirmations go out automatically. The right person is notified the moment an enquiry arrives.',
          outputs: ['CRM connected', 'Auto-confirmation live', 'Routing configured'],
        },
        {
          title: 'Hand over to your team',
          description: 'Everything tested end to end. Your team gets documentation and a walkthrough. They run it independently from there.',
          outputs: ['Full documentation', 'Team walkthrough', 'Independent from day one'],
        },
      ],
      finalState: {
        title: 'What is working after the build',
        items: [
          'Clear service pages — visitors find what they came for',
          'Every enquiry captured with name, number, and service',
          'Leads assigned and confirmed automatically',
          'Follow-up running without anyone having to remember',
          'Tracking showing which channels produce real work',
        ],
      },
    },
    qualification: {
      header: {
        badge: 'Fit check',
        title: 'Is this the right fit?',
        description: "This solves a specific kind of problem. Here's how to tell if yours matches.",
      },
      strongFitLabel: 'Strong fit',
      notForLabelText: 'Probably not for you',
      strongFitTitle: 'This is a strong fit if',
      notForTitle: "This probably isn't for you if",
      strongFit: [
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
      notFor: [
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
    faq: {
      header: {
        badge: 'FAQ',
        title: 'What business owners ask before getting started',
        description: 'Direct answers. No jargon.',
      },
      items: smartWebsitesFaqItems,
    },
    leakBoard: {
      header: {
        kicker: 'Where it breaks',
        title: 'Where enquiries leak out of your business',
        description:
          'Five points where leads disappear — before your team ever has a chance to respond.',
      },
      primaryLeak: {
        label: 'Response',
        title: 'Hours pass before anyone replies',
        situation:
          'A form lands in a shared inbox. Nobody owns it. Whoever checks it that day replies — if they remember. By then the caller has already rung someone else.',
        cost: 'The business that responds first usually gets the work. A slow reply does not lose the enquiry in your mind — it was already gone before you noticed.',
        handledState:
          'An automated confirmation goes out immediately. The enquiry is logged with a notification to the right person. Your team picks it up in minutes, not hours.',
      },
      leaks: [
        {
          label: 'Discovery',
          title: 'They cannot find the one thing they need',
          situation:
            'All services are grouped under one heading. A visitor looking for a specific thing has to sift through everything else. Most do not.',
          cost: 'Visitors leave without enquiring because they cannot quickly identify what they came for.',
          handledState:
            'Each service has its own page, written the way people search for it. The right visitor lands directly.',
        },
        {
          label: 'Capture',
          title: 'The message goes to the wrong place',
          situation:
            'Forms feed into a shared email. On mobile, buttons are too small and forms break. Enquiries pile up unread.',
          cost: 'Visitors on phones abandon the form before completing it. The lead never arrives.',
          handledState:
            'Enquiry routes directly to the right person with name, number, and service already attached.',
        },
        {
          label: 'Follow-up',
          title: 'Nobody chases — so the lead goes cold',
          situation:
            'No follow-up sequence. Your team is mid-job. Checking back on outstanding enquiries depends on memory.',
          cost: 'Warm leads go cold without a reply. Work that was available disappears without your team knowing.',
          handledState:
            'Follow-up runs automatically until there is a response. Your team delivers the work — the system handles the chasing.',
        },
        {
          label: 'Visibility',
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
    serviceBridge: {
      header: {
        kicker: 'Connected systems',
        title: 'What the website hands off — and to what',
        description:
          'A Smart Website captures the enquiry. What happens after depends on the systems connected to it.',
      },
      bridges: [
        {
          id: 'lead-handling',
          from: 'Smart Website Systems',
          to: 'AI Lead Handling',
          handoff:
            'The website captures the enquiry and routes it. AI Lead Handling takes the first response — confirming receipt, qualifying intent, and keeping the conversation moving before your team picks it up.',
          boundary:
            'Smart Website Systems owns the capture and routing. AI Lead Handling owns the initial response and conversation logic that follows.',
        },
        {
          id: 'crm-automation',
          from: 'Smart Website Systems',
          to: 'CRM Automation',
          handoff:
            'Every enquiry that enters through the website goes straight into the CRM with name, number, service, and source attached. CRM Automation owns the workflow, assignment, follow-up sequence, and reporting from that point.',
          boundary:
            'Smart Website Systems owns the entry point. CRM Automation owns the pipeline, task management, and ongoing communication.',
        },
        {
          id: 'local-seo',
          from: 'Smart Website Systems',
          to: 'Local SEO Authority',
          handoff:
            'The service pages built into the Smart Website System give Local SEO Authority a structured foundation to work from — individual pages, clear service intent, and the content signals that local search depends on.',
          boundary:
            'Smart Website Systems owns the page structure and on-page content. Local SEO Authority owns the citation, profile, and authority-building work that makes those pages discoverable.',
        },
      ],
    },
    scopeGroupsHeading: {
      kicker: 'What is included',
      title: 'Everything in scope from day one',
      description: 'Not a pick-and-choose list. Every project covers all of this.',
    },
    scopeGroups: [
      {
        label: 'Build',
        description: 'What is built as part of the initial project',
        iconKey: 'database' as const,
        items: [
          'WordPress build shaped around your services and how customers search for them',
          'Individual service pages written for the searches people nearby actually make',
          'Enquiry forms capturing name, number, and service — routed to the right person',
          'Mobile tested and working across phones, tablets, and desktops',
          'SSL, daily backups, and security monitoring from day one',
        ],
      },
      {
        label: 'Connected',
        description: 'Systems connected during the build',
        iconKey: 'workflow' as const,
        items: [
          'CRM or booking tool connected from day one — every lead logged on arrival',
          'Automated confirmation sent immediately when an enquiry lands',
          'Follow-up sequence running without anyone on your team having to remember',
          'Tracking showing where visitors come from and what they do',
          'Every enquiry path tested end to end before launch',
        ],
      },
      {
        label: 'Handover',
        description: 'What you receive at the end of the project',
        iconKey: 'clipboard' as const,
        items: [
          'Full documentation for content, CRM, and follow-up management',
          'Hands-on walkthrough for your team',
          'Your team manages content, checks leads, and handles updates independently from there',
        ],
      },
    ],
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
