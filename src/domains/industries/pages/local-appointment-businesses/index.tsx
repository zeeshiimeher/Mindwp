import {
  AlertCircle,
  Calendar,
  Car,
  Clock3,
  HeartPulse,
  MessageSquare,
  PenTool,
  Search,
  Shield,
  Star,
  Users,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLocalAppointmentBusinessesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Appointment Businesses',
    title:
      'They Enquired With Three Of You On Sunday Night. Whoever Replied First With A Slot Got The Booking.',
    description:
      'Dental practices, private clinics, driving schools, repair shops, and tattoo studios rarely lose bookings because of the work itself. They lose them when the reply comes late, the availability is not clear, the booking takes too long, or nobody follows up after the first enquiry goes quiet.',
    list: ['Late replies', 'Unclear slots', 'No follow-up'],
    cssPrefix: 'local-appointment-businesses-hero',
  };

  const imageStripData = {
    badge: 'How Booking Decisions Happen',
    title:
      'You’re mid-appointment. Three enquiries piled up. Two had already taken another slot by the time you looked.',
    description:
      'Evenings, Sunday nights, lunch breaks, school holidays. The person booking usually wants two things quickly: a rough price and a real slot. If either one stays vague for too long, the booking drifts before anyone notices.',
    items: [
      {
        title: 'New enquiry and fit questions',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing local appointment business enquiries',
      },
      {
        title: 'Booking and scheduling pressure',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing appointment booking pressure',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing preparation guidance and next-step clarity',
      },
      {
        title: 'Reviews and repeat-visit follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing reviews and repeat-visit follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'local-appointment-businesses-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Diary Slips',
    title:
      'You’re with a patient, a learner, or a client. The phone’s ringing. They’re booking somebody else.',
    description:
      'The same handful of leaks show up across nearly every appointment-based business. They usually happen before the appointment even exists properly in the diary.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Three enquiries came in while you were heads-down',
        description:
          'A dental call, learner DM, repair quote, or tattoo enquiry comes in while you are already busy with someone in front of you. By the time you look up, two of them have already had a faster reply from somewhere else.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'A booking took ten messages back and forth',
        description:
          '"What times?" "How much?" "Who with?" Each answer waits until you are free enough to send it. A lot of bookings do not fall apart dramatically here. They just slow down until the person books a simpler option.',
        iconType: 'secondary' as const,
      },
      {
        icon: Shield,
        title: 'A Saturday no-show cost the day rate',
        description:
          'A tattoo session, hygiene block, or two-hour driving lesson disappears from the diary and no deposit was taken to hold it. The slot stays empty because no one else had enough notice to take it.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'The business down the road has 600 reviews. You have 41.',
        description:
          'Your work may be better, but online you look smaller because nobody asked at the right moment after the visit. The difference on Maps is often just follow-up, not quality.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the enquiries and stop the slots sitting empty',
    description:
      'Each piece handles one part of the booking leak. Together they help the diary keep moving while you stay focused on the appointment in front of you.',
    featureCategories: [
      {
        title: 'Reply to enquiries while you’re with someone in front of you',
        description:
          'A call, DM, or form lands and gets a quick reply with a price band and a real next step while you are still with someone else. That usually holds the enquiry long enough for the proper reply to happen later the same day.',
        icon: MessageSquare,
        features: [
          'Instant acknowledgement on every enquiry',
          'Price band and slot up front',
          'Holds the enquiry until you can reply properly',
        ],
      },
      {
        title: 'Take the booking and the deposit online',
        description:
          'The person booking can pick a slot themselves and pay a deposit if the appointment needs holding properly. That removes the slow back-and-forth that makes too many bookings feel harder than they should.',
        icon: Calendar,
        features: [
          'Self-serve online booking',
          'Deposit-to-confirm for high-value slots',
          'Reminders the day before',
        ],
      },
      {
        title: 'Refill cancellations and stop no-shows',
        description:
          'A cancellation can trigger a waitlist text and the reminders go out before the appointment is forgotten. That means more slots get refilled instead of just sitting there empty after one change of plan.',
        icon: Users,
        features: [
          'Cancellation waitlist text-back',
          'Reminders the day before',
          'Slots stay earning',
        ],
      },
      {
        title: 'Turn finished work into reviews',
        description:
          'A polite request goes out the day after the appointment, when the result is still fresh and easy to talk about. That is usually the difference between meaning to leave a review and actually doing it.',
        icon: Star,
        features: [
          'Review requests after every appointment',
          'Asked at the right moment',
          'Reviews catch up to the standard of work',
        ],
      },
      {
        title: 'Show up first when local people search',
        description:
          'Your service pages and Google profile line up around the right services and the right local area. That helps more people checking availability find you before the diary decision is already made somewhere else.',
        icon: Search,
        features: [
          'Pages for the services and areas you actually want',
          'Found on Maps for local searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
      {
        title: 'Convert the people sitting in the maybe pile',
        description:
          'If someone enquired but did not book, a polite check-in can go out at sensible intervals while the decision is still open. A useful number of those quiet maybes book back in once the follow-up actually happens.',
        icon: Shield,
        features: [
          'Follow-up sequences for pending enquiries',
          'Pending opportunities visible in one place',
          'Conversion goes up without anybody chasing',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Different Diaries, Same Leak',
    title: 'Different appointment businesses, but the bookings get lost in the same places',
    description:
      'A tattoo studio, a driving school, a dental practice, and a repair shop do not all leak in the same way. The pattern underneath is still familiar though: hold the enquiry, make booking easier, and do not leave the maybe pile sitting untouched.',
    cards: [
      {
        title: 'High-value, deposit-led work',
        description:
          'Tattoos, cosmetic dentistry, private consultations — a single no-show kills a day rate. Deposit-to-confirm and reminder timing matter most.',
        points: [
          'No-shows cost £300–£400 a slot',
          'Late-night DMs go to whoever replied first',
          'Reviews from finished work go unasked',
        ],
      },
      {
        title: 'Repeat-session and recall-led work',
        description:
          'Driving lessons, hygienist appointments, physio courses — the diary lives or dies on rebooking and refilling cancellations.',
        points: [
          'Recalls fall off when nobody chases',
          'Cancellations leave half-day gaps',
          'Block bookings need calendar discipline',
        ],
        featured: true,
      },
      {
        title: 'Walk-in and quote-led work',
        description:
          'Repair shops, GP-style private clinics, smaller practices — the caller wants a price and a wait time, fast.',
        points: [
          '“How much?” calls go to whoever picks up',
          'Drop-offs that ghost cost the bench',
          'Local reviews decide the click on Maps',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'local-appointment-businesses-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When This Pays Back Quickest',
    title: 'Honest signs the diary is losing more bookings than it should',
    description:
      'If two or three of these sound familiar, the issue is usually bigger than "we just need a new website." The real gap is often in the response, the booking step, or what happens after the first enquiry goes quiet.',
    items: [
      'You’ve missed enquiries this week because you were with a patient, learner, or client',
      'A booking recently took ten messages to confirm and the caller half-disappeared',
      'You had a no-show on a high-value slot and no deposit was taken',
      'Hygiene recalls, lesson rebookings, or follow-up appointments slipped because nobody had time',
      'The business down the road has 5–10x your reviews despite worse work',
      'Sunday-night enquiries went unanswered until Monday afternoon',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'local-appointment-businesses-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Pick The One That Fits',
    title: 'The same fix — different ways the diary leaks',
    description:
      'A tattoo studio, a driving school, a dental practice, and a repair shop do not lose bookings in the same way. Pick the one that sounds most like your diary and the kind of delay that keeps showing up in it.',
    features: [
      {
        title: 'High-value session work (tattoo, cosmetic, consult)',
        description:
          'Late-night DMs, deposit-to-confirm, no-shows that kill the day rate. Catching the enquiry and taking the deposit matters most.',
        icon: PenTool,
      },
      {
        title: 'Recurring lesson or recall work (driving, dental, physio)',
        description:
          'Block bookings, six-month recalls, last-minute cancellations. Refilling the diary without phoning round matters most.',
        icon: Car,
      },
      {
        title: 'Quote-led service work (repair, private GP, smaller clinic)',
        description:
          'Walk-in pricing questions, drop-offs that ghost, local reviews deciding the Maps click. Instant quoting and follow-up matters most.',
        icon: HeartPulse,
      },
    ],
    tagline: 'Pick the shape closest to yours',
    narrativeTitle: 'Why the page is laid out this way',
    narrativeParagraphs: [
      'The leaks aren’t identical — a no-show on a tattoo Saturday hurts differently than a hygienist recall going cold. The detail pages below get specific.',
      'Pick whichever business sounds closest to yours. The detail page goes deeper into the exact moments where the bookings used to slip through.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'local-appointment-businesses-service-environments',
  };

  const processData = {
    badge: 'How This Actually Lands',
    title: 'How we put the system in place without disrupting the diary',
    description:
      'No big-bang rebuild and no long detour. We look at where the diary actually leaks now, fix the worst part first, and let the booking flow settle from there.',
    steps: [
      {
        number: '01',
        title: 'Walk through how the diary actually runs',
        description:
          'A 30-minute conversation. Where enquiries come in, where deposits get taken, where reviews don’t get asked.',
      },
      {
        number: '02',
        title: 'Fix the biggest leak first',
        description:
          'Usually it’s missed-call/DM text-back, or deposit-to-confirm on the high-value slots. The thing that pays itself back fastest.',
      },
      {
        number: '03',
        title: 'Layer in booking, recalls, and reviews',
        description:
          'Self-serve booking, recall messages, review requests after every appointment. The diary stops emptying.',
      },
      {
        number: '04',
        title: 'Tighten local visibility once the diary holds',
        description:
          'Pages for the services and areas you actually want. Less time on enquiries that aren’t a fit.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'local-appointment-businesses-process',
  };

  const detailRoutesData = {
    badge: 'Pick Yours',
    title: 'The detail page for your kind of business',
    description:
      'Each one goes deeper into the exact moments where bookings usually slip through in that kind of business. The patterns are similar, but the pressure points are not identical.',
    items: [
      {
        title: 'Tattoo Studios',
        description:
          'Late-night DMs, deposit-to-confirm on Saturday sessions, aftercare and review requests on autopilot.',
        href: '/industries/local-appointment-businesses/tattoo-studios',
        icon: PenTool,
      },
      {
        title: 'Driving Schools',
        description:
          'Evening enquiries, first lessons booked without ten DMs, cancellation waitlist text-back.',
        href: '/industries/local-appointment-businesses/driving-schools',
        icon: Car,
      },
      {
        title: 'Repair Shops',
        description:
          'Instant quotes on standard repairs, drop-off bookings, ready-to-collect notifications.',
        href: '/industries/local-appointment-businesses/repair-shops',
        icon: Wrench,
      },
      {
        title: 'Small Private Clinics',
        description:
          'NHS-to-private after-hours enquiries, deposit-to-confirm consultations, follow-up on the maybe pile.',
        href: '/industries/local-appointment-businesses/small-private-clinics',
        icon: HeartPulse,
      },
      {
        title: 'Dental Practices',
        description:
          'Missed-call text-back for pain calls, hygiene recalls on autopilot, implant consult follow-up.',
        href: '/industries/local-appointment-businesses/dental-clinics',
        icon: HeartPulse,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'local-appointment-businesses-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    seo: {
      title:
        'Appointment-Based Local Businesses — Stop Losing Enquiries, Bookings & Deposits | MindWP',
      description:
        'For dental practices, private clinics, driving schools, repair shops, and tattoo studios where enquiries go unanswered, bookings take ten messages, and no-shows kill the day rate. We put the system in place that catches them.',
      canonical: '/industries/local-appointment-businesses',
    },
    slug: 'local-appointment-businesses',
    type: 'category',
    category: 'local-appointment-businesses',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'follow-up', 'review-generation', 'lead-response-time'],
    industries: [
      'dental-clinic',
      'driving-school',
      'repair-shop',
      'private-clinic',
      'tattoo-studio',
    ],
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
      heading: {
        title: 'Tell us where the diary is leaking',
        description:
          'If enquiries are answered too late, booking takes too many messages, or follow-up on the maybe pile never really happens, walk us through how the business runs and we’ll show you the first thing worth fixing.',
      },
    },
  };
}

export const localAppointmentBusinessesIndustryPageData: IndustryPageData =
  buildLocalAppointmentBusinessesIndustryPageData();
