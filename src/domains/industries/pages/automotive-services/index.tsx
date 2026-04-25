import {
  Building2,
  ClipboardList,
  Clock3,
  Headset,
  MapPinned,
  PhoneMissed,
  Receipt,
  Star,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAutomotiveServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Automotive Services',
    title: 'The Bays Stay Booked. The Front Desk Is What Loses Work.',
    description:
      'In most automotive businesses, the workmanship is not the problem. The leak shows up around the job: a phone ringing while everyone is busy, an estimate still sitting there the next morning, a driver giving the work to the shop that replied first.',
    list: ['Missed calls', 'Slow quotes', 'Desk drag'],
    cssPrefix: 'automotive-services-hero',
  };

  const operatingPatternsData = {
    badge: 'The Same Few Leaks',
    title:
      'Across repair shops, body shops, detailers and mobile vans, the same handful of moments keep losing work',
    description:
      'Different setups. Different tools. Same pressure points. Someone tries to get through, waits longer than they expected, then gives the job to whoever made the next step easier.',
    benefits: [
      {
        icon: PhoneMissed,
        title: 'Calls land while everyone is on the tools',
        description:
          'Three rings. Voicemail. Nobody hears the message until the bay is clear, by which point the driver has rung the next two shops on the list.',
        iconType: 'primary' as const,
      },
      {
        icon: Receipt,
        title: 'Estimates sit half-written in someone\u2019s inbox',
        description:
          'The number was nearly ready before lunch on Tuesday. By Thursday afternoon the driver has stopped expecting it, and the repair has gone to the shop that kept the conversation moving.',
        iconType: 'secondary' as const,
      },
      {
        icon: Star,
        title: 'A wall of good work, almost no proof of it online',
        description:
          'You finished thirty jobs last month. Two reviews showed up. The garage on the next street has eighty and worse mechanics.',
        iconType: 'accent' as const,
      },
      {
        icon: ClipboardList,
        title: 'More demand makes the office feel worse, not better',
        description:
          'Marketing turns the dial up. The inbox fills. The team works longer. Nothing actually catches more of it.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const spectrumData = {
    badge: 'Different Shapes Of Shop',
    title: 'A workshop, a body shop, a detailer and a van do not bleed work in the same place',
    description:
      'Same category, different geometry. Each shape has its own first leak. The fix has to start where the leak actually is.',
    cards: [
      {
        title: 'Owner-led repair shops',
        description:
          'Two or three pairs of hands. Whoever is closest to the desk answers when they can. Quotes get drafted between jobs and rarely chased.',
        points: ['Mid-job phone calls', 'Half-written estimates', 'No follow-up window'],
      },
      {
        title: 'Body shops with insurance work',
        description:
          'Photos arrive after a bump. The first reply usually wins the job. The shop that opens the email Tuesday afternoon has already lost it.',
        points: ['Photo response time', 'Insurer back-and-forth', 'Quote chase delay'],
        featured: true,
      },
      {
        title: 'Detailers and appearance specialists',
        description:
          'Most enquiries arrive on phones over the weekend. DMs, web forms, late texts. The bay is where you live, the inbox is where the booking dies.',
        points: ['Weekend DM gap', 'Slot back-and-forth', 'Regulars drifting'],
      },
      {
        title: 'Mobile and van-based mechanics',
        description:
          'No shopfront. The phone in the glovebox is the front desk. Half of every wasted hour is driving to a postcode that did not need to be quoted by phone.',
        points: ['Roadside calls', 'Postcode waste', 'Trust before arrival'],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-spectrum',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Run',
    title: 'The fix is shaped by the shop, not the other way around',
    description:
      'Before we touch anything, we look at how work actually reaches you, who is supposed to pick it up, and where it goes thin in a normal week. The answer is different in a workshop, a body shop, a detailing bay, and a van.',
    features: [
      {
        title: 'A shop with bays and a counter',
        description:
          'The desk is the bottleneck. Calls, walk-ins, and quote requests all queue behind whoever is also writing the next invoice.',
        icon: Building2,
      },
      {
        title: 'A team split between front and workshop',
        description:
          'Handoffs happen on yellow notes and verbal reminders. The slip is usually in the gap between who took the call and who was meant to ring back.',
        icon: Users,
      },
      {
        title: 'A van and a phone',
        description:
          'The day runs from the seat. There is no buffer between the job and the next call. Whatever does not get answered in the moment usually does not get answered at all.',
        icon: Truck,
      },
    ],
    tagline: 'Same trade, different friction',
    narrativeTitle: 'We start with the shape, not the software',
    narrativeParagraphs: [
      'A short conversation usually shows where the leak actually lives. Sometimes it is the phone. Sometimes it is the estimate that goes out and never gets nudged. Sometimes it is the regulars who quietly stopped coming back.',
      'Once the leak is named, the order of work is obvious. Nothing gets bolted on for the sake of looking busy.',
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-service-environments',
  };

  const decisionChecklistData = {
    badge: 'Worth A Look If',
    title: 'A few honest signs the leak is bigger than another marketing tweak will fix',
    description:
      'Tick most of these and the problem is not visibility on its own. More clicks or more calls will only add pressure to the same weak spots.',
    items: [
      'You have lost count of how many calls hit voicemail in a normal week',
      '"Did anyone ring them back?" gets asked more than once a day',
      'Estimates go out, then nobody really knows which ones got chased',
      'The competitor up the road has triple your reviews and you know your work is better',
      'Last time you spent on ads, the inbox got worse, not the diary',
      'New drivers find you fine. Past drivers vanish without a trace',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-decision-checklist',
  };

  const processData = {
    badge: 'How A Conversation Goes',
    title: 'From "we keep losing work" to "we stopped losing it" without a rebuild',
    description:
      'No big presentation, no inflated scope. We look at the exact point where work is escaping now and start with the leak that costs you the most in a normal week.',
    steps: [
      {
        number: '01',
        title: 'Walk through a normal week',
        description:
          'How calls land, who answers them, where forms go, what happens to a quote after it leaves the inbox.',
      },
      {
        number: '02',
        title: 'Name the biggest leak',
        description:
          'Usually one of: missed calls, dead estimates, no-shows, missing reviews. Whichever is bleeding the most work is what we touch first.',
      },
      {
        number: '03',
        title: 'Plug the leak',
        description:
          'Small, specific change in the place that hurts. Not a rebuild. Not a re-platforming.',
      },
      {
        number: '04',
        title: 'Move to the next leak',
        description:
          'Once the first one is steady, the next one is obvious. The shop carries on running while it gets quieter at the desk.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-process',
  };

  const detailRoutesData = {
    badge: 'By Shape Of Shop',
    title: 'Pick the page that sounds like your week',
    description:
      'Same category, different weak spots. Each page stays broad enough to scan quickly, but specific enough to sound like the kind of week your team actually has.',
    items: [
      {
        title: 'Auto Repair',
        description:
          'For shops where the phone goes during a brake job, voicemail piles up before lunch, and Tuesday’s estimate is still sitting there when the bay finally clears.',
        href: '/industries/automotive-services/auto-repair',
        icon: Wrench,
      },
      {
        title: 'Body Shops',
        description:
          'For shops where a damage photo lands from a car park, the first useful reply wins trust fast, and a slow estimate makes the whole shop feel harder to deal with.',
        href: '/industries/automotive-services/body-shops',
        icon: Headset,
      },
      {
        title: 'Car Detailing',
        description:
          'For detailers whose Saturday DMs stack up while they are in the bay, and whose old regulars drift a season at a time because nobody nudged them back in.',
        href: '/industries/automotive-services/car-detailing',
        icon: Clock3,
      },
      {
        title: 'Mobile Mechanics',
        description:
          'For van-based mechanics working from driveways and roadside callouts, where missed calls, bad postcodes, and slow follow-up waste time before the spanners even come out.',
        href: '/industries/automotive-services/mobile-mechanics',
        icon: MapPinned,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'automotive-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    seo: {
      title: 'Automotive Service Shops \u2014 Stop Losing Work At The Front Desk | MindWP',
      description:
        'For repair shops, body shops, detailers and mobile mechanics where the bays stay booked but the front desk loses calls, estimates, and reviews. Plug the leak that is actually costing you work.',
      canonical: '/industries/automotive-services',
    },
    slug: 'automotive-services',
    type: 'category',
    category: 'automotive-services',
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'missed-calls', 'review-generation', 'booking-systems'],
    industries: ['auto-repair', 'body-shop', 'car-detailing', 'mobile-mechanic'],
    hero: heroData,
    operatingPatterns: operatingPatternsData,
    spectrum: spectrumData,
    serviceEnvironments: serviceEnvironmentsData,
    decisionChecklist: decisionChecklistData,
    process: processData,
    detailRoutes: detailRoutesData,
    sectionControls: {
      subIndustries: { enabled: false },
      caseStudies: { enabled: false },
    },
    cta: {
      title: 'Show us where the work is leaving',
      description:
        'Walk us through a normal week at the shop. We will tell you the one leak worth fixing first and what it would take to plug it.',
    },
  };
}

export const automotiveServicesIndustryPageData: IndustryPageData =
  buildAutomotiveServicesIndustryPageData();
