import {
  AlertCircle,
  CloudRain,
  Droplets,
  FileText,
  Home,
  MapPinned,
  MessageSquare,
  PhoneOff,
  Search,
  Shovel,
  Snowflake,
  Star,
  Timer,
  Users,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHomeServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Home Service Trades',
    title: 'Water’s On The Floor. They’re Dialling The Next Number While Yours Rings Out.',
    description:
      'Plumbers, electricians, roofers, HVAC, landscapers — the calls that pay best are the ones nobody can wait on. A pipe burst at 7pm. No heat on the coldest night of the year. A storm took half a roof off on Friday. Whoever picks up inside two minutes gets the job and probably the next ten years of repeat work. We put the system in place that catches them before they reach the next number on the list.',
    list: ['Burst pipes', 'No heat', 'Storm damage', 'Power down'],
    cssPrefix: 'home-services-hero',
  };

  const imageStripData = {
    badge: 'When Trade Calls Actually Land',
    title: 'They’re not browsing. Something is broken right now and getting worse by the minute.',
    description:
      'A boiler that won’t fire on the first cold morning. A leak coming through a ceiling. Lights out across half the house. The clock is running on damage, comfort, or a job site standing idle. Whoever answers first wins — and usually wins the warranty work, the upgrade quote, and the neighbours.',
    items: [
      {
        title: '7pm burst pipe, water across a kitchen floor',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing an after-hours plumbing emergency',
      },
      {
        title: 'No heat on the first sub-zero morning',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing a winter HVAC breakdown',
      },
      {
        title: 'Storm overnight, three slates on the lawn',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing storm-damage roofing enquiries',
      },
      {
        title: 'Half the house dark, the other half flickering',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing an electrical emergency callout',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Trade Work Bleeds Out',
    title: 'The work is fine. The first two minutes after the call rings out is what costs you.',
    description:
      'Different trades, same shape of leak. The damage is happening in real time, the customer is on a list of five numbers, and the office is empty.',
    benefits: [
      {
        icon: PhoneOff,
        title: 'Two minutes of voicemail and they’ve already moved on',
        description:
          'They were watching water spread or shivering in a coat. They didn’t leave a message. They went down the list.',
        iconType: 'primary' as const,
      },
      {
        icon: Wallet,
        title: 'A £6,000 quote went cold on a Tuesday',
        description:
          'Boiler swap, full re-roof, EV charger and consumer unit. One nudge a week later would have closed it. Nobody had a free hand.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'Half the diary is the wrong side of town',
        description:
          'Forty-minute drives to twenty-minute jobs. The site brings in whoever finds you, not the postcodes that pay.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Insurance and warranty paperwork lives in three threads',
        description:
          'Photos on a phone. Invoice in an inbox. Schedule of works on a clipboard in the van. The claim drags. The customer goes quiet.',
        iconType: 'primary' as const,
      },
      {
        icon: CloudRain,
        title: 'A storm hits and the inbox doesn’t survive Monday',
        description:
          'Forty messages, fifteen photos, six callbacks promised. Some get done, some don’t, nobody is sure which.',
        iconType: 'secondary' as const,
      },
      {
        icon: Star,
        title: 'A thousand jobs a year, twenty-two reviews online',
        description:
          'The work earns the reviews. The asking never happens. The shop down the road with worse work has triple the count.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs the leak isn’t marketing — it’s what happens after the phone rings',
    description:
      'If most of these land, more leads will only make it louder. The bottleneck is the handling, not the demand.',
    items: [
      'On a typical day, two or three calls go to voicemail and most don’t leave a message',
      'A storm or a cold snap turns the inbox into a triage problem nobody owns',
      'Big-ticket quotes — boilers, roofs, EV chargers, full rewires — go quiet for a fortnight before anyone chases',
      'Half the new enquiries are postcodes that aren’t worth the drive',
      'Insurance work and warranty claims sit across an inbox, a phone, and a van',
      'Reviews online don’t come close to the volume of jobs the team actually finishes',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-decision-checklist',
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'Catch the panic call. Close the big-ticket quote. Stop driving to postcodes that don’t pay.',
    description:
      'Each piece does one job. Together they keep the work moving while the team stays on the tools.',
    featureCategories: [
      {
        title: 'Catch the call inside two minutes — even mid-job',
        description:
          'Missed call lands a text within seconds. “Working on a job, what’s happening, can be on the line in 20.” Most stop dialling.',
        icon: MessageSquare,
        features: [
          'Instant text-back on every missed call',
          'Captures the urgency and the postcode up front',
          'Holds the panic call until you can pick up properly',
        ],
      },
      {
        title: 'Triage the storm-day inbox without losing anyone',
        description:
          'Calls, forms, WhatsApp, and Facebook messages land in one queue, sorted by urgency and area instead of who shouted last.',
        icon: AlertCircle,
        features: [
          'One queue across every channel',
          'Urgency tag the moment it lands',
          'Nobody falls behind a wall of forty messages',
        ],
      },
      {
        title: 'Follow up the £6k quotes nobody had time to chase',
        description:
          'Quote sent Monday. Polite check-in Friday. A second one ten days later. The big-ticket close rate climbs without anyone nagging.',
        icon: Timer,
        features: [
          'Auto follow-up at the right intervals',
          'Pending quotes visible in one list',
          'Boiler, roof, EV, rewire — none go quiet',
        ],
      },
      {
        title: 'Show up first for the postcodes you actually want',
        description:
          'Service pages, Google profile, and local search lined up so the right town finds you before the wrong one does.',
        icon: Search,
        features: [
          'Pages for the trades and areas worth driving to',
          'Found on Maps when neighbours search',
          'Less time wasted on the long drives',
        ],
      },
      {
        title: 'Keep insurance and warranty work in one place',
        description:
          'Photos, scope, invoice, claim number — all attached to the customer, not scattered across three apps.',
        icon: FileText,
        features: [
          'Job folder per customer, not per channel',
          'Faster claims, fewer chasers',
          'No more “who has the photos?”',
        ],
      },
      {
        title: 'Ask for the review the day the heat comes back on',
        description:
          'Polite request the day after, when the kitchen is dry, the lights are working, or the boiler is humming. The reviews finally catch up.',
        icon: Star,
        features: [
          'Request goes out at the moment of relief',
          'Asked when the customer is happiest',
          'Online count starts to match the workload',
        ],
      },
    ],
    columns: 3 as const,
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Run',
    title: 'A solo van, an office-and-vans crew, and a multi-trade outfit don’t leak in the same place',
    description:
      'Different setups, different bottlenecks. The fix that helps a one-van plumber doesn’t move the needle for a six-van HVAC business.',
    features: [
      {
        title: 'Solo or owner-led van',
        description:
          'You’re hands-on, one job at a time. The phone going during a job is the single biggest leak — everything else is downstream of that.',
        icon: Home,
      },
      {
        title: 'Office and field crew',
        description:
          'More hands, more handoffs. Quotes get sent and forgotten. Nobody is sure who was meant to ring the customer back.',
        icon: Users,
      },
      {
        title: 'Multi-trade local company',
        description:
          'More services, more areas. The daily mess is routing the right job to the right team without it being a phone call every time.',
        icon: Wrench,
      },
    ],
    tagline: 'Same trade category, different bottlenecks',
    narrativeTitle: 'We start with the shape of the business, not a generic checklist',
    narrativeParagraphs: [
      'Before anything is changed, we look at how calls and forms actually arrive, who picks them up, and where they currently slip. That’s usually clear inside one short call.',
      'From there, the right first move — text-back, quote follow-up, review collection, area targeting — becomes obvious instead of guessed at.',
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-service-environments',
  };

  const processData = {
    badge: 'How A Conversation Usually Goes',
    title: 'From “we’re losing work” to “we’ve stopped losing work” — without rebuilding the business',
    description:
      'Nothing dramatic. We map how the work currently flows, then put the missing pieces in the order that helps most.',
    steps: [
      {
        number: '01',
        title: 'We watch how a typical week of enquiries actually lands',
        description:
          'Calls, forms, WhatsApps, missed calls, walk-ins. Where they go. Who sees them. Who replies first.',
      },
      {
        number: '02',
        title: 'We put a number on the leak',
        description:
          'A short, honest list of what’s slipping and what it’s probably costing. No deck.',
      },
      {
        number: '03',
        title: 'The biggest leak gets fixed first',
        description:
          'Missed calls, cold quotes, missing reviews, wrong postcodes — whichever is bleeding the most work goes first.',
      },
      {
        number: '04',
        title: 'It runs while the team stays on the tools',
        description:
          'Replies, reminders, reviews, follow-up — going on their own while the trade does the trade.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-process',
  };

  const detailRoutesData = {
    badge: 'By Trade',
    title: 'Pick the trade closest to how you run',
    description:
      'Same category, different trigger moments. These pages get into the specifics for each trade.',
    items: [
      {
        title: 'Roofing',
        description:
          'For roofers losing the storm-week surge and big-ticket re-roof quotes that go quiet for a fortnight.',
        href: '/industries/home-services/roofing-companies',
        icon: Home,
      },
      {
        title: 'HVAC',
        description:
          'For HVAC where the first cold morning overflows the line and last year’s installs never get a service nudge.',
        href: '/industries/home-services/hvac-companies',
        icon: Snowflake,
      },
      {
        title: 'Plumbing',
        description:
          'For plumbers whose 7pm burst-pipe calls go to whoever picked up first, not whoever does the better work.',
        href: '/industries/home-services/plumbing-companies',
        icon: Droplets,
      },
      {
        title: 'Electrical',
        description:
          'For sparkies losing fault calls and EV charger or consumer-unit quotes that go quiet by the weekend.',
        href: '/industries/home-services/electrical-companies',
        icon: Zap,
      },
      {
        title: 'Landscaping',
        description:
          'For landscapers whose spring quote requests pile up faster than anyone can write them and reviews never get asked for.',
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
      title: 'Home Services Trades — Catch The Emergency Call & Close The Big Quote | MindWP',
      description:
        'For plumbers, electricians, roofers, HVAC, and landscapers. Burst-pipe calls go to whoever picked up first. £6k quotes go quiet for a fortnight. We put the system in place that catches the panic call and closes the big-ticket job.',
      keywords: [
        'home services lead handling',
        'trade business missed call recovery',
        'plumbing hvac quote follow up',
        'roofing storm enquiry system',
        'local trade visibility system',
      ],
      canonical: '/industries/home-services',
    },
    hero: heroData,
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
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
      title: 'Tell us where the work is bleeding out',
      description:
        'If panic calls go to voicemail, if a £6k quote went quiet last week, or if the review count doesn’t match the job count — walk us through how a normal week runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const homeServicesIndustryPageData: IndustryPageData = buildHomeServicesIndustryPageData();
