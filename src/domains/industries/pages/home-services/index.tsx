import {
  AlertCircle,
  Calendar,
  Clock3,
  Droplets,
  Home,
  MapPinned,
  MessageSquare,
  Phone,
  Search,
  Shovel,
  Star,
  Truck,
  Users,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHomeServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Home Service Businesses',
    title: 'You’re On a Job. The Phone’s Ringing. They’ll Call The Next Trade On The List.',
    description:
      'Plumbers, electricians, roofers, HVAC, landscapers — different trades, same leaks. Calls missed mid-job. Quotes that went quiet. Reviews nobody asked for. Postcodes you never wanted to drive to. We put the system in place that catches the work before it walks past you.',
    list: [
      'Calls missed while you’re on the tools',
      'Quotes nobody chased',
      'Reviews nobody asked for',
      'Postcodes you never wanted to drive to',
    ],
    cssPrefix: 'home-services-hero',
  };

  const imageStripData = {
    badge: 'How Trade Calls Actually Land',
    title: 'The work is on the tools. The leak is everything around it.',
    description:
      'A burst pipe at 7pm. A storm Friday night. A boiler in January. People panic and dial. Whoever answers first wins the job — and often the next ten years of repeat work.',
    items: [
      {
        title: 'Emergency and urgent enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing urgent home service enquiries',
      },
      {
        title: 'Estimate and inspection booking',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing estimate and inspection scheduling',
      },
      {
        title: 'Field team coordination',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing field team coordination',
      },
      {
        title: 'Review and referral follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing review and referral follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'Same handful of leaks in nearly every trade business',
    description: 'Different trades, similar gaps. Once you see them, you can’t unsee them.',
    benefits: [
      {
        icon: Phone,
        title: 'Three urgent calls missed during a single job',
        description:
          'You were under a sink, on a roof, up a ladder. They didn’t leave a message — they rang the next trade.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'A bigger quote went quiet for two weeks',
        description:
          'Boiler swap, EV charger, full replacement. One follow-up text would have closed it. Nobody had time to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'Half your callouts are 40 minutes away',
        description:
          'Not the postcodes you actually want. The site brings in whoever finds you, not the right area.',
        iconType: 'accent' as const,
      },
      {
        icon: AlertCircle,
        title: 'Reviews don’t reflect the actual workload',
        description:
          'Hundreds of jobs done well. Twenty-something reviews online. Nobody was asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch every call, close every quote, and turn every job into proof',
    description:
      'Each piece does one job. Together they keep the work moving while the team is on the tools.',
    featureCategories: [
      {
        title: 'Catch every call, even when you’re mid-job',
        description:
          'Missed call gets an instant text — “on a job, what’s happening, can call back in 20.” Most stop dialling the next trade.',
        icon: MessageSquare,
        features: [
          'Missed-call text-back automatically',
          'Urgency captured up front',
          'Holds the lead until you’re free',
        ],
      },
      {
        title: 'Take the booking without the back-and-forth',
        description:
          'For non-urgent work, customers pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for inspections and routine work',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'See where every job is in one place',
        description:
          'Quote sent, visit booked, job done, review asked. Nothing slips because nobody had time to write it down.',
        icon: Truck,
        features: [
          'Pipeline visible in one place',
          'Lead stage and area context',
          'Better handoff between office and field',
        ],
      },
      {
        title: 'Turn finished jobs into reviews you can show',
        description:
          'A polite review request goes out the day after, when the kitchen, lights, or heating is back on.',
        icon: Star,
        features: [
          'Review requests after every job',
          'Asked when customers are happiest',
          'Reviews catch up to the workload',
        ],
      },
      {
        title: 'Show up for the postcodes you actually want',
        description:
          'Service pages, Google profile, and local search lined up so the right area finds you first.',
        icon: Search,
        features: [
          'Pages for the services and areas you want',
          'Found on Maps for local searches',
          'Less time driving to the wrong postcodes',
        ],
      },
      {
        title: 'Follow up the quotes nobody has time to chase',
        description:
          'Quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
        icon: Workflow,
        features: [
          'Quote follow-up at the right intervals',
          'Pending jobs visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Different Trades, Same Leaks',
    title: 'A solo operator, a crew, and a multi-trade outfit don’t look alike — but the gaps usually are',
    description:
      'Different setups, similar friction. Once you place yours, the right next step gets obvious.',
    cards: [
      {
        title: 'Owner-led trades',
        description:
          'You’re on the tools. The phone going during a job is the single biggest leak.',
        points: [
          'Calls missed while you’re working',
          'Quotes typed late at night',
          'Reviews never asked for',
        ],
      },
      {
        title: 'Office and field teams',
        description:
          'More hands, more handoffs. Things slip in the gap between front desk, dispatcher, and the van.',
        points: [
          'Quotes that nobody owned',
          'Visits nobody confirmed',
          '“Who was supposed to ring them?”',
        ],
        featured: true,
      },
      {
        title: 'Multi-trade local companies',
        description:
          'More services, more areas. Routing different jobs to the right team without confusion is the daily problem.',
        points: [
          'Wrong job types to wrong teams',
          'Postcodes nobody wanted to cover',
          'Trust spread thin across services',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs this is worth looking at properly',
    description: 'If most of these ring true, the leak is bigger than another marketing tweak will fix.',
    items: [
      'Calls go to voicemail during jobs and most callers don’t leave a message',
      'Quoted bigger jobs go quiet for two weeks before anybody chases them',
      'Reviews online don’t reflect how busy the business actually is',
      'Half the new enquiries are postcodes you don’t want to drive to',
      'Insurance and warranty work sits in three different threads',
      'More work just makes the office feel worse, not better',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Work',
    title: 'A solo van, an office and field team, and a multi-trade outfit each break in different places',
    description:
      'Different setups, different leaks. The bit that costs you the most work isn’t the same in a one-van trade as in a six-van outfit.',
    features: [
      {
        title: 'Solo or owner-led van',
        description:
          'You’re hands-on with one job at a time. The phone goes, nobody picks up, the lead’s gone.',
        icon: Home,
      },
      {
        title: 'Office and field team',
        description:
          'More hands, more handoffs. Things slip between the booker, the dispatcher, and the van.',
        icon: Users,
      },
      {
        title: 'Multi-trade local company',
        description:
          'More services, more areas. Routing the right job to the right team without confusion is the daily problem.',
        icon: Wrench,
      },
    ],
    tagline: 'Same category, different bottlenecks',
    narrativeTitle: 'Why we look at the shape of the business first',
    narrativeParagraphs: [
      'Before any change is made, we look at how enquiries actually arrive, who handles them, and where they currently slip. That’s usually obvious within a short conversation.',
      'From there, the right next step — missed-call text-back, quote follow-up, review collection, area targeting — becomes obvious instead of generic.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-service-environments',
  };

  const processData = {
    badge: 'How We Get Started',
    title: 'How a typical conversation moves from “we’re losing work” to “we’ve stopped losing work”',
    description:
      'Nothing fancy. We look at how the business actually runs, then put the missing pieces in place in the order that helps most.',
    steps: [
      {
        number: '01',
        title: 'We look at how enquiries arrive now',
        description: 'Calls, forms, missed calls, walk-ins. Where they go, who sees them, who replies.',
      },
      {
        number: '02',
        title: 'We map where the jobs are slipping',
        description: 'No pitch deck. A short, honest list of what’s breaking and what it’s costing.',
      },
      {
        number: '03',
        title: 'The biggest leak gets fixed first',
        description:
          'Missed calls, quote follow-ups, missing reviews, wrong postcodes — whichever is bleeding the most work.',
      },
      {
        number: '04',
        title: 'It runs while the team is on the tools',
        description:
          'Replies, reminders, reviews, follow-up. Going on their own while the trade does the trade.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-process',
  };

  const detailRoutesData = {
    badge: 'By Trade',
    title: 'Pick the one closest to how you run',
    description:
      'Same category, different bottlenecks. These pages get into the specifics for each trade.',
    items: [
      {
        title: 'Roofing',
        description:
          'For roofers losing storm calls and replacement quotes that go quiet for weeks.',
        href: '/industries/home-services/roofing-companies',
        icon: Home,
      },
      {
        title: 'HVAC',
        description:
          'For HVAC where heatwave calls overflow and last year’s installs never get their service nudge.',
        href: '/industries/home-services/hvac-companies',
        icon: Workflow,
      },
      {
        title: 'Plumbing',
        description:
          'For plumbers whose urgent calls go to whoever picked up first.',
        href: '/industries/home-services/plumbing-companies',
        icon: Droplets,
      },
      {
        title: 'Electrical',
        description:
          'For sparkies losing fault calls and EV charger quotes that go quiet.',
        href: '/industries/home-services/electrical-companies',
        icon: Zap,
      },
      {
        title: 'Landscaping',
        description:
          'For landscapers where spring quote requests pile up faster than anyone can reply.',
        href: '/industries/home-services/landscaping-companies',
        icon: Shovel,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'home-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'home-services',
    type: 'category',
    category: 'home-services',
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
    industries: ['roofing', 'hvac', 'plumbing', 'electrical', 'landscaping'],
    seo: {
      title: 'Home Service Trades — Stop Losing Calls, Quotes & Reviews | MindWP',
      description:
        'For plumbers, electricians, roofers, HVAC, and landscapers where urgent calls go to whoever picked up first, quoted jobs go quiet for weeks, and reviews don’t reflect the workload. We put the system in place that catches every job.',
      keywords: [
        'home services website systems',
        'roofing hvac booking systems',
        'home services lead handling',
        'estimate follow up system',
        'local service business infrastructure',
      ],
      canonical: '/industries/home-services',
    },
    hero: heroData,
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    spectrum: spectrumData,
    decisionChecklist: decisionChecklistData,
    serviceEnvironments: serviceEnvironmentsData,
    systemLayers: systemLayersData,
    process: processData,
    detailRoutes: detailRoutesData,
    sectionControls: {
      subIndustries: {
        enabled: false,
      },
      caseStudies: {
        enabled: false,
      },
    },
    cta: {
      title: 'Tell us where the work is leaking',
      description:
        'If urgent calls go to voicemail, if quoted jobs go quiet, or if reviews never get asked for — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const homeServicesIndustryPageData: IndustryPageData = buildHomeServicesIndustryPageData();
