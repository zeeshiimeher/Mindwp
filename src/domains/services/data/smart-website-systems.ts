import {
  AlertTriangle,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  MessageSquare,
  Search,
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
      'No, but we usually recommend building this around GoHighLevel because it keeps enquiries, follow-up, and reporting in one place. If you already have a setup that works, we can connect that instead.',
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
    value: {
      header: {
        badge: 'Where it leaks',
        title: 'What slips through every week',
        description:
          'People reach out. Messages land in the wrong place. Your team misses some of them completely, and the rest get answered later than they should.',
      },
      items: [
        {
          icon: AlertTriangle,
          title: 'Messages pile up where nobody looks',
          description:
            "A lead comes through on Thursday afternoon. It sits in a shared inbox over the weekend. Monday rolls around and they've already hired someone else.",
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: "People searching for one thing can't find it",
          description:
            "All your services sit under a single heading. Someone who needs one specific thing has to sift through everything. They won't. They'll try the next business that makes it obvious.",
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Mobile visitors hit a wall',
          description:
            'Buttons too small to tap. Forms that reload halfway through. The majority of people trying to reach you are on their phone. Most of them quit.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'New enquiries disappear on busy days',
          description:
            "Your team is mid-job. A lead arrives. Someone says they'll get to it. Nobody does. That person already called the next number on their list.",
          iconType: 'primary' as const,
        },
        {
          icon: BarChart3,
          title: "You're spending money but can't see what works",
          description:
            "Ads running in one place. Social posts in another. A directory listing somewhere. You can't point to which one brought in a single real enquiry last month.",
          iconType: 'primary' as const,
        },
        {
          icon: Users,
          title: 'Ready buyers vanish quietly',
          description:
            'Wanted what you offer. Arrived, looked around, left. Nobody on your team ever knew they existed.',
          iconType: 'primary' as const,
        },
      ],
    },
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
    visibilityFoundations: {
      header: {
        badge: 'Compounding effect',
        title: 'What changes when the site actually works',
        description:
          'Not about how it looks. About what happens when every interested person can reach you and your team sees it straight away.',
      },
      tagline: 'Get the site right. Everything after it starts working.',
      narrativeTitle: "Why your ads and social media aren't paying off yet",
      body: "You're running ads. Posting on social. Listed in a couple of directories. People click through — nothing happens. Not a traffic problem. The site isn't catching what arrives.",
      narrativeParagraphs: [
        "You're running ads. Posting on social. Listed in a couple of directories. People click through — nothing happens. Not a traffic problem. The site isn't catching what arrives.",
        "When services are clear and contact is obvious, those same visitors turn into work. Follow-up runs itself. What you're already spending starts earning back.",
      ],
      bullets: [
        'Ad spend starts paying for itself',
        'Your team stops chasing and starts delivering',
        'Search traffic has somewhere to land',
      ],
      highlights: [
        { label: 'Ad spend pays for itself', value: 'Less waste' },
        { label: 'Less chasing, more delivering', value: 'Less admin' },
        { label: 'Search picks up', value: 'Organic traffic' },
      ],
      image: {
        src: '/images/services/smart-website-systems.webp',
        alt: 'Operations dashboard view of a smart website system',
        width: 960,
        height: 720,
      },
      items: [
        {
          icon: TrendingUp,
          title: 'Ad spend starts paying for itself',
          description:
            'Traffic you already pay for starts converting. People find what they came for and get in touch. Follow-up runs before it goes cold.',
          points: ['Less waste', 'Real return', 'Measurable'],
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Your team stops chasing and starts delivering',
          description:
            'Enquiries show up with context attached. Follow-up is handled. Your team focuses on the actual work — not on checking inboxes.',
          points: ['Less admin', 'Quicker response', 'Better focus'],
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Search traffic has somewhere to land',
          description:
            'When what you offer is listed properly, Google can match you to people looking for it. The site becomes the thing every other channel points to.',
          points: ['Organic traffic', 'Local search', 'Foundation'],
          iconType: 'primary' as const,
        },
      ],
      alternatingItems: [
        {
          title: 'Ad spend pays for itself',
          description:
            'Traffic you already pay for starts converting. People find what they came for and get in touch. Follow-up runs before it goes cold.',
          points: ['Less waste', 'Real return', 'Measurable'],
        },
        {
          title: 'Less chasing, more delivering',
          description:
            'Enquiries arrive with context. Follow-up is handled. Your team spends time on real work, not inbox checking.',
          points: ['Less admin', 'Quicker response', 'Better focus'],
        },
        {
          title: 'Search picks up',
          description:
            'When what you offer is listed properly, Google can match you to local queries. The site becomes the thing everything else points to.',
          points: ['Organic traffic', 'Local search', 'Foundation'],
        },
      ],
    },
    process: {
      header: {
        badge: 'How it works',
        title: 'From first conversation to a site pulling its weight',
        description:
          "We don't begin with visuals. We start with how your business runs, where enquiries fall apart, and what the site actually needs to handle.",
      },
      steps: [
        {
          number: '1',
          title: 'We learn how your business runs',
          description:
            'What you offer, how people find you, where things drop off, which tools you already use. Everything after this follows from what we learn here.',
        },
        {
          number: '2',
          title: 'We plan around your services and customers',
          description:
            'Which services need their own listing, what each one says, how someone moves from arriving to getting in touch. The build follows the business, not the other way round.',
        },
        {
          number: '3',
          title: 'We build it and connect everything',
          description:
            'Live on WordPress. Forms feed into your CRM. Follow-up runs automatically. You can see where people come from and what they do.',
        },
        {
          number: '4',
          title: 'Handover and training',
          description:
            'Everything tested. Running. Your team gets documentation and a walkthrough. They handle content, check enquiries, manage updates from there.',
        },
      ],
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
