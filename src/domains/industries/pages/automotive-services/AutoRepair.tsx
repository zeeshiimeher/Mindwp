import {
  Calendar,
  Car,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAutoRepairIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Auto Repair Shops',
    title: 'Calls Come In Mid-Job. Estimates Get Sent. Then Silence.',
    description:
      'A driver rings about a warning light while the bay is full. The call rolls to voicemail. An estimate goes out at 5pm and never gets chased. Most repair shops don’t lose work because of skill — they lose it in the gaps between enquiry, booking, and follow-up.',
    list: [
      'Calls missed during jobs',
      'Quotes that go quiet',
      'Slow callbacks',
      'Reviews that never get asked for',
    ],
    cssPrefix: 'auto-repair-hero',
  };

  const imageStripData = {
    badge: 'How Repair Work Actually Comes In',
    title:
      'A repair enquiry usually arrives stressed, half-informed, and wanting to know if you can help today',
    description:
      'Warning lights, sudden noises, an MOT failure, an insurance job. People want to know if you can fit them in, what it might cost, and whether they can trust the shop. If any of those answers take too long, they ring the next garage on the list.',
    items: [
      {
        title: 'Fault and repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing auto repair fault enquiries',
      },
      {
        title: 'Diagnostics and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing auto repair booking and diagnostics',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing auto repair estimates and approvals',
      },
      {
        title: 'Reviews and return visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing auto repair reviews and return visits',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'auto-repair-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The repair business is busy. The repair business is also leaking.',
    benefits: [
      {
        icon: Car,
        title: 'The phone rings while everyone’s under a bonnet',
        description:
          'Three missed calls before lunch. By the time someone checks voicemail, two of them have already booked the garage down the road.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking a diagnostic turns into a back-and-forth',
        description:
          'They want to know when they can drop the car. The team is busy. Texts go back and forth for half a day before a slot is agreed.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates go out and never get chased',
        description:
          'Quote sent Tuesday afternoon. No reply. Everyone’s back in the workshop and nobody picks it up again until Friday — if at all.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The shop down the road has eighty reviews. You have nine.',
        description:
          'Plenty of happy customers. Almost none of them ever wrote anything online. Locally, you look quieter than you actually are.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
    description:
      'It’s rarely one big problem. It’s a steady drip — a missed call here, an unchased quote there, a review never asked for. Compounding every week.',
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, from first ring to final review',
    description:
      'Each piece does one job. Together they make sure work doesn’t quietly fall on the floor while the team is mid-job.',
    featureCategories: [
      {
        title: 'Make sure every enquiry gets caught',
        description:
          'Calls, forms, web chat, missed calls — they all land in one place with the vehicle and the issue already noted. Nobody hunts through voicemails at 6pm.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the right person',
          'Vehicle and fault captured up front',
        ],
      },
      {
        title: 'Get the diagnostic booked without a back-and-forth',
        description:
          'A clear way to offer a slot, confirm it, and remind them the day before. Less phone tag, fewer no-shows.',
        icon: Calendar,
        features: [
          'Drop-off slots people can pick',
          'Confirmations and reminders that go out on their own',
          'Front desk knows what’s coming in',
        ],
      },
      {
        title: 'Stop quotes from going quiet',
        description:
          'Every estimate gets a follow-up on a schedule. The customer hears back even when the team is flat out.',
        icon: Workflow,
        features: [
          'Estimates chased automatically',
          'A clear list of jobs sitting on a yes/no',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished jobs into proof you can show',
        description:
          'Once the car’s back on the road, a review request goes out at the right moment. Reputation catches up to the actual work.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Asked when the customer is happiest',
          'More five-stars showing where people search',
        ],
      },
      {
        title: 'Show up when local drivers search',
        description:
          'The website, the Google profile, the service pages — lined up so the shop appears when someone nearby types in what they need.',
        icon: Search,
        features: [
          'Found on Maps for the work you actually do',
          'Service pages that match real searches',
          'Local area coverage that’s visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal Tuesday at the shop, before and after',
    description:
      'The workshop still runs the workshop. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings during a brake job. Goes to voicemail. Nobody listens to it until tonight.',
          'A customer wants a diagnostic slot. Three texts later, you’re still trying to confirm Wednesday.',
          'Sent an estimate Monday. It’s Friday. Nobody’s rung them back.',
          'You finished a great job last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. The customer knows you’ll ring them straight after this job.',
          'They pick a drop-off slot from the link you sent. Confirmed. Reminder fires the day before.',
          'The estimate gets a polite chase the next morning. You can see who’s waiting on a yes.',
          'A review request goes out the day they pick the car up. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'Three stages — most shops feel one of them more than the others',
    description:
      'You don’t have to fix everything at once. We start with whatever is leaking the most work right now.',
    packages: [
      {
        name: 'Stop the calls and enquiries from going missing',
        description:
          'If the phone rings out and web enquiries sit unread, this is the first thing to fix. Everything else gets easier once enquiries actually land somewhere.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls and slow first replies are costing the most work',
        features: [
          'Missed-call text-back so they know you’ll ring them',
          'One inbox for calls, forms, and web chat',
          'Vehicle and fault noted before the conversation starts',
        ],
      },
      {
        name: 'Get the diagnostic booked the same day',
        description:
          'Once enquiries are caught, this stage takes the friction out of confirming a slot and getting the car in.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where things slow down',
        features: [
          'Drop-off slots customers can pick themselves',
          'Reminders the day before so cars actually turn up',
          'Clear handover between front desk and workshop',
        ],
        popular: true,
      },
      {
        name: 'Keep estimates moving and turn jobs into reviews',
        description:
          'For shops where the work comes in fine but quotes go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Quotes chased automatically without sounding pushy',
          'Past customers nudged for return work',
          'Review requests that go out at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference actually shows up',
    description:
      'Nothing dramatic. Just the small handoffs that used to depend on someone remembering.',
    workflows: [
      {
        trigger:
          'It’s 10am. The bay is full. A customer rings about a warning light and the call goes to voicemail.',
        actions: [
          'They get a text inside a minute saying you’ll ring back after this job',
          'The text captures the car and the issue so the callback is faster',
          'The voicemail isn’t the only line keeping the lead alive',
        ],
      },
      {
        trigger:
          'Someone wants a diagnostic before the weekend and asks when they can drop the car.',
        actions: [
          'They pick a drop-off slot from a link — no more text tag',
          'A reminder goes out the day before so they actually show',
          'Front desk sees the booking with the car and the fault attached',
        ],
      },
      {
        trigger:
          'You sent a £640 estimate three days ago and haven’t heard back.',
        actions: [
          'A polite chase goes out automatically the next morning',
          'You can see all the open quotes in one place instead of scrolling email',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'auto-repair-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for repair shops trying to stop work slipping through.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, diagnosis, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support diagnostics, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen repair visibility, maps trust, and local service discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed work into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things repair shops usually ask',
    description: 'Straight answers about how this fits into a workshop that’s already busy.',
    faqs: [
      {
        question: 'We’re already flat out. How much extra work is this for the team?',
        answer:
          'Almost none after setup. Missed calls get answered with a text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves. The point is that the team stops being the bottleneck.',
      },
      {
        question: 'Will customers feel like they’re getting an automated response?',
        answer:
          'No — the messages are short, written like you’d actually text someone, and they always lead back to a real conversation. The aim is to hold the lead until you can ring them, not to replace the call.',
      },
      {
        question: 'We tried online booking before and it was more hassle than help. Why now?',
        answer:
          'Usually the booking tool wasn’t connected to anything else — the team still had to retype it. We set it up so the slot, the vehicle, and the issue all land in one place the front desk already uses.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the job’s done, when the customer is happiest. You’ll see them appear on Google without anyone sending another email.',
      },
      {
        question: 'What about all the old quotes sitting in the inbox?',
        answer:
          'Those get worked into the follow-up too. A lot of repair shops find that warming up old estimates brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website for this to work?',
        answer:
          'Usually not. We look at what you have first. Sometimes the site is fine and the gap is everything that happens after the form is submitted.',
      },
    ],
  };

  return {
    slug: 'auto-repair',
    industries: ['auto-repair'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Auto Repair Shops — Stop Losing Calls, Quotes, and Repeat Work | MindWP',
      description:
        'For auto repair shops where calls get missed during jobs, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place so the work already coming in actually books.',
      keywords: [
        'auto repair website design',
        'auto repair booking system',
        'mechanic lead handling system',
        'auto repair seo services',
        'auto repair reputation management system',
      ],
      canonical: '/industries/automotive-services/auto-repair',
    },
    hero: {
      ...heroData,
    },
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    comparison: comparisonData,
    pathways: pathwaysData,
    workflowExamples: workflowExamplesData,
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the work is slipping',
      description:
        'If calls go to voicemail mid-job, quotes go quiet, or reviews never get asked for — walk us through how the shop runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const autoRepairIndustryPageData: IndustryPageData = buildAutoRepairIndustryPageData();
