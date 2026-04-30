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
    badge: 'Home Services',
    title: 'Water’s On The Floor. They’re Dialling The Next Number While Yours Rings Out.',
    description:
      'In home services, the best enquiries usually land when something has already gone wrong and nobody is willing to wait around. The call gets missed, the callback comes too late, or the quote sits there untouched, and the job goes to the number that answered first.',
    list: ['Missed calls', 'Late callbacks', 'Cold quotes'],
    cssPrefix: 'home-services-hero',
  };

  const imageStripData = {
    badge: 'When Trade Calls Actually Land',
    title: 'They’re not browsing. Something is broken right now and getting worse by the minute.',
    description:
      'A boiler that will not fire, a leak spreading through a ceiling, lights out across half the house. The caller is not comparing brand language. They are calling numbers in order and sticking with the one that answers before the problem gets worse.',
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
      'Different trades, same shape of leak. The caller has a real problem, the phone is ringing more than one number, and the person who responds first usually controls what happens next.',
    benefits: [
      {
        icon: PhoneOff,
        title: 'Two minutes of voicemail and they’ve already moved on',
        description:
          'They were watching water spread, standing in a cold house, or trying to get the lights back on before bedtime. They did not leave a message. They called the next number while your voicemail was still playing.',
        iconType: 'primary' as const,
      },
      {
        icon: Wallet,
        title: 'A £6,000 quote went cold on a Tuesday',
        description:
          'Boiler swap, re-roof, EV charger, consumer unit, patio build. The quote was sent, then the week got away from everyone. One follow-up would have kept it moving, but nobody had a free hand to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'Half the diary is the wrong side of town',
        description:
          'Forty-minute drives for small jobs eat the day before it has started properly. The work coming in is based on whoever found you first, not on the areas that actually make the diary work.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Insurance and warranty paperwork lives in three threads',
        description:
          'Photos are on a phone, the invoice is in an inbox, and the schedule of works is still on a pad in the van. The claim drags out and the homeowner starts chasing because nobody can see the whole thing in one place.',
        iconType: 'primary' as const,
      },
      {
        icon: CloudRain,
        title: 'A storm hits and the inbox doesn’t survive Monday',
        description:
          'Forty messages come in, photos start landing, and six callbacks get promised before lunch. Some happen, some do not, and by the afternoon nobody is fully sure which callers are still waiting.',
        iconType: 'secondary' as const,
      },
      {
        icon: Star,
        title: 'A thousand jobs a year, twenty-two reviews online',
        description:
          'The work is good enough to earn the reviews, but the asking keeps slipping to the bottom of the list. The firm down the road looks busier online simply because somebody remembered to ask after the job.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs the leak isn’t marketing — it’s what happens after the phone rings',
    description:
      'If most of these feel familiar, more enquiries will not solve much on their own. The real issue is what happens once the call comes in, the quote goes out, or the callback gets delayed.',
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
    title:
      'Catch the panic call. Close the big-ticket quote. Stop driving to postcodes that don’t pay.',
    description:
      'Each piece handles one part of the leak. Together they help the work keep moving while the team stays on the tools instead of trying to remember who still needs a call back.',
    featureCategories: [
      {
        title: 'Catch the call inside two minutes — even mid-job',
        description:
          'A missed call gets a text back within seconds so the caller knows somebody has actually seen it. That is often enough to stop them dialling the next number while you finish the job you are already on.',
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
          'Calls, forms, WhatsApp, and Facebook messages land in one place and get sorted by urgency and area instead of by whoever shouted loudest first. That matters most on the days when everything arrives at once.',
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
          'Quote sent Monday, check-in on Friday, another one later if it still sits there. The bigger jobs stop going cold just because everyone got pulled back into site work and nobody had time to chase.',
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
          'Your service pages, Google profile, and local search line up around the towns and postcodes worth driving to. That helps the right kind of local work find you before the diary fills with the wrong journeys.',
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
          'Photos, scope, invoice, and claim number stay tied to the same homeowner instead of getting scattered across phones, inboxes, and notes. That cuts down the chasing once the job moves beyond the first call.',
        icon: FileText,
        features: [
          'Job folder per enquiry, not per channel',
          'Faster claims, fewer chasers',
          'No more “who has the photos?”',
        ],
      },
      {
        title: 'Ask for the review the day the heat comes back on',
        description:
          'A polite request goes out the day after, when the kitchen is dry again, the lights are back on, or the boiler is humming properly. That is when the homeowner is most likely to respond instead of forgetting about it entirely.',
        icon: Star,
        features: [
          'Request goes out at the moment of relief',
          'Asked when the homeowner is happiest',
          'Online count starts to match the workload',
        ],
      },
    ],
    columns: 3 as const,
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Run',
    title:
      'A solo van, an office-and-vans crew, and a multi-trade outfit don’t leak in the same place',
    description:
      'Different setups create different kinds of pressure once the calls start coming in. The thing that helps a one-van plumber is not usually the same thing that helps a busier office-and-field operation hold callbacks and quotes together.',
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
          'More hands, more handoffs. Quotes get sent and forgotten. Nobody is sure who was meant to ring the caller back.',
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
    title:
      'From “we’re losing work” to “we’ve stopped losing work” — without rebuilding the business',
    description:
      'Nothing dramatic and no big reset. We look at how calls, callbacks, quotes, and follow-up actually run now, then put the missing pieces in where they relieve the most pressure first.',
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
      'Same category, different trigger moments and different types of leak. These pages stay closer to what each trade actually deals with week to week.',
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
    seo: {
      title: 'Home Services Trades — Catch The Emergency Call & Close The Big Quote | MindWP',
      description:
        'For plumbers, electricians, roofers, HVAC, and landscapers. Burst-pipe calls go to whoever picked up first. £6k quotes go quiet for a fortnight. We put the system in place that catches the panic call and closes the big-ticket job.',
      canonical: '/industries/home-services',
    },
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
      heading: {
        title: 'Tell us where the work is bleeding out',
        description: 'If calls are being missed, callbacks are happening too late, or bigger quotes are sitting there with no follow-up, walk us through how a normal week runs and we’ll show you the first thing worth fixing.'
      }
    },
  };
}

export const homeServicesIndustryPageData: IndustryPageData = buildHomeServicesIndustryPageData();
