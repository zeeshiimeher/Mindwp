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
    badge: 'For Appointment-Based Local Businesses',
    title: 'They Enquired With Three Of You On Sunday Night. Whoever Replied First With A Slot Got The Booking.',
    description:
      'Dental practices, private clinics, driving schools, repair shops, tattoo studios — the customer’s decision happens in 24 hours and on whoever replied first. We put the system in place that catches enquiries while you’re with a patient, learner, or client, takes the deposit so the slot doesn’t sit empty, and stops no-shows from killing the day.',
    list: [
      'Sunday-night enquiries that went unanswered until Monday',
      'Bookings that took ten messages to confirm',
      'No-shows on slots where no deposit was taken',
      'Reviews from finished work you never asked for',
    ],
    cssPrefix: 'local-appointment-businesses-hero',
  };

  const imageStripData = {
    badge: 'How Booking Decisions Happen',
    title: 'You’re mid-appointment. Three enquiries piled up. Two booked elsewhere by the time you looked.',
    description:
      'Evenings, Sunday nights, school holidays. The customer wants a price and a slot. Whoever sent both first wins the booking.',
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
    title: 'You’re with a patient, a learner, or a client. The phone’s ringing. They’re booking somebody else.',
    description: 'Same handful of leaks across nearly every appointment-based business. None of them are about the actual work.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Three enquiries came in while you were heads-down',
        description:
          'Dental call, learner DM, repair quote, tattoo enquiry — you couldn’t answer. Two booked with the next business on the list.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'A booking took ten messages back and forth',
        description:
          '“What times?” “How much?” “Who with?” Each reply waited until you were free. Half lost patience.',
        iconType: 'secondary' as const,
      },
      {
        icon: Shield,
        title: 'A Saturday no-show cost the day rate',
        description:
          'Tattoo session, hygiene block, two-hour driving lesson — no deposit taken, slot stayed empty.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'The business down the road has 600 reviews. You have 41.',
        description:
          'Your work is better. Online you look smaller because nobody asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the enquiries and stop the slots sitting empty',
    description:
      'Each piece does one job. Together they keep the diary booked while you stay focused on the work.',
    featureCategories: [
      {
        title: 'Reply to enquiries while you’re with a customer',
        description:
          'Call, DM, or form lands. Instant reply with price band and a calendar link. Most stop enquiring with the next business.',
        icon: MessageSquare,
        features: [
          'Instant acknowledgement on every enquiry',
          'Price band and slot up front',
          'Holds the customer until you can reply properly',
        ],
      },
      {
        title: 'Take the booking and the deposit online',
        description:
          'Customer picks a slot themselves. Optional deposit-to-confirm. The ten-message back-and-forth stops.',
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
          'Cancellation triggers a waitlist text. Reminders reduce no-shows. Slots stop staying empty.',
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
          'A polite request goes out the day after the appointment, when satisfaction is freshest.',
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
          'Service pages and Google profile lined up so people in the right area find you first.',
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
          'Enquired but didn’t book? Polite check-in goes out at sensible intervals. A meaningful share book back in.',
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
      'A tattoo studio, a driving school, a dental practice, a repair shop — the diary leaks differently. The fix is the same: catch the enquiry, take the deposit, follow up the maybe pile.',
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
          'Repair shops, GP-style private clinics, smaller practices — the customer wants a price and a wait time, fast.',
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
      'If two or three of these sound familiar, the leak is bigger than “we just need a new website.”',
    items: [
      'You’ve missed enquiries this week because you were with a patient, learner, or client',
      'A booking recently took ten messages to confirm and the customer half-disappeared',
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
      'A tattoo studio, a driving school, a dental practice, and a repair shop don’t lose bookings in the same way. Pick the one that sounds most like yours.',
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
      'No big-bang website rebuild. We map the leaks, fix the worst ones first, and let the diary settle.',
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
      'Each one goes deeper into the exact moments where bookings used to slip through — the late-night DMs, the missed pain calls, the no-show Saturdays, the recalls that fell off the diary.',
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
    seo: {
      title: 'Appointment-Based Local Businesses — Stop Losing Enquiries, Bookings & Deposits | MindWP',
      description:
        'For dental practices, private clinics, driving schools, repair shops, and tattoo studios where enquiries go unanswered, bookings take ten messages, and no-shows kill the day rate. We put the system in place that catches them.',
      keywords: [
        'local appointment business website systems',
        'appointment booking system',
        'local service lead handling',
        'booking follow up system',
        'local appointment business infrastructure',
      ],
      canonical: '/industries/local-appointment-businesses',
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
      title: 'Tell us where the diary is leaking',
      description:
        'If enquiries go unanswered while you’re with a customer, if bookings take ten messages to confirm, or if no-shows keep killing the day rate — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const localAppointmentBusinessesIndustryPageData: IndustryPageData =
  buildLocalAppointmentBusinessesIndustryPageData();
