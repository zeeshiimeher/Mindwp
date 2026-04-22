import {
  Calendar,
  Clock3,
  HeartPulse,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallPrivateClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Small Private Clinics',
    title: 'She’s Been On The NHS Waiting List Six Months. Tonight She’ll Pay To Be Seen This Week. Whoever Replies First Gets Her.',
    description:
      'GP, dermatology, physio, women’s health — patients waiting on the NHS reach a tipping point and decide to go private at 9pm. They enquire with three clinics. Whoever replies first with a slot and a price gets the appointment. We put the system in place that catches those enquiries, books the consultation, and stops the deposit-to-book process from leaking patients.',
    list: [
      'NHS-to-private enquiries that came in after hours',
      'Consultations that took ten emails to confirm',
      'Deposits that never quite got paid',
      'Reviews from grateful patients you never asked for',
    ],
    cssPrefix: 'small-private-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Private Enquiries Actually Land',
    title: 'They’ve been waiting six months on the NHS. They want a slot this week. Whoever replied first wins.',
    description:
      'It’s evenings and Sunday nights. The pain or the worry got too much. They enquired with three clinics. The decision is happening fast.',
    items: [
      {
        title: 'Appointment and treatment-fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing private clinic enquiries',
      },
      {
        title: 'Booking and timing coordination',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing clinic appointment booking',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing clinic preparation guidance',
      },
      {
        title: 'Reviews and trust proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing private clinic reviews and trust proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-private-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Go Elsewhere',
    title: 'Reception is in clinic. Three NHS-to-private enquiries came in last night. Two booked elsewhere by morning.',
    description: 'Same handful of leaks across nearly every small private clinic. None of them are about the clinical care.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'Three Sunday-night enquiries went unanswered until Monday afternoon',
        description:
          'Two had booked elsewhere by 11am. The third was already lukewarm.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A consultation took ten emails to confirm',
        description:
          '“What times?” “How much?” “Which consultant?” Each reply waited until reception was off the phone.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Two deposit invoices sat unpaid for a week',
        description:
          'Nobody had time to chase. The slot stayed empty when somebody else would have taken it.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'The clinic on the high street has 400 reviews. You have 38.',
        description:
          'Your consultants are better. Online you look smaller because nobody asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the after-hours enquiries and convert the deposits',
    description:
      'Each piece does one job. Together they keep consultations booked while the clinical team stays focused on patients.',
    featureCategories: [
      {
        title: 'Reply to after-hours enquiries automatically',
        description:
          'Sunday-night enquiry lands. Instant reply with consultant fees, next available slots, and a calendar link. Most stop enquiring with the next clinic.',
        icon: MessageSquare,
        features: [
          'Instant acknowledgement on every enquiry',
          'Consultant fees and next slots up front',
          'Holds the patient until reception is back',
        ],
      },
      {
        title: 'Take the consultation booking online',
        description:
          'Patient picks a slot themselves. Deposit paid online to confirm. The ten-email confirmation thread stops.',
        icon: Calendar,
        features: [
          'Self-serve consultation booking',
          'Deposit-to-confirm built in',
          'Reminders the day before',
        ],
      },
      {
        title: 'Convert the patients sitting in the maybe pile',
        description:
          'Enquired but didn’t book? Polite check-in goes out at the right interval with reassurance and a slot.',
        icon: Workflow,
        features: [
          'Follow-up at sensible intervals',
          'Pending enquiries visible in one place',
          'Conversion goes up without anybody chasing',
        ],
      },
      {
        title: 'Send pre-appointment information without phoning',
        description:
          'Forms, parking, what to bring — sent automatically before the appointment. Patients arrive prepared.',
        icon: ShieldCheck,
        features: [
          'Pre-appointment information automatically',
          'Forms completed before arrival',
          'Less time on the phone explaining',
        ],
      },
      {
        title: 'Turn finished consultations into reviews',
        description:
          'A polite review request goes out the day after the appointment, when the relief is freshest.',
        icon: Star,
        features: [
          'Review requests after every visit',
          'Asked when patients are most grateful',
          'Reviews catch up to the standard of care',
        ],
      },
      {
        title: 'Show up first when local people search private',
        description:
          'Service pages and Google profile lined up so people in the right area find you first — not the chain hospital.',
        icon: Search,
        features: [
          'Pages for the conditions and treatments you handle',
          'Found on Maps for private appointment searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The clinical care stays personal. The admin friction goes.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Three Sunday-night enquiries went unanswered until Monday afternoon. Two booked elsewhere.',
          'A consultation took ten emails to confirm.',
          'Two deposit invoices sat unpaid for a week. Slots stayed empty.',
          '“Meant to ask for a Google review” — said about every grateful patient.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'After-hours enquiries get an instant reply with fees and a slot.',
          'Consultations booked online with deposit paid up front.',
          'Pending enquiries followed up at sensible intervals.',
          'Reviews get asked for the day after every appointment.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages — most clinics feel one of them more than the others',
    description: 'Pick whichever costs you the most consultations right now.',
    packages: [
      {
        name: 'Stop losing the after-hours enquiries',
        description: 'For when Sunday-night enquiries go unanswered until Monday afternoon.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant reply with consultant fees and next slot',
          'Holds the patient until reception is back',
          'Most stop enquiring with the next clinic',
        ],
      },
      {
        name: 'Take the booking and the deposit without phoning',
        description: 'For when consultations take ten emails and deposits sit unpaid for a week.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and deposits are the leak',
        features: [
          'Self-serve consultation booking',
          'Deposit-to-confirm built in',
          'Reminders the day before',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof and convert the maybes',
        description: 'For when consultants are excellent but the clinic looks small online.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and pending enquiries are the weak spot',
        features: [
          'Follow-up sequences for pending enquiries',
          'Review requests after every visit',
          'Pages for the conditions and treatments you handle',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments at reception where things used to slip through.',
    workflows: [
      {
        trigger: 'A new patient enquires Sunday night about a private dermatology consultation.',
        actions: [
          'Instant reply goes out with fees and the next available slot',
          'Calendar link lets them book on the spot',
          'They stop enquiring with the next clinic',
        ],
      },
      {
        trigger: 'A consultation booking needs a deposit to confirm.',
        actions: [
          'Deposit link goes out automatically',
          'Reminder a few days later if unpaid',
          'Slot doesn’t sit empty waiting',
        ],
      },
      {
        trigger: 'A patient enquired two weeks ago but never booked.',
        actions: [
          'A polite check-in goes out at the right interval',
          'Reassurance plus a current available slot',
          'A meaningful share quietly book back in',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-private-clinics-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for small private clinics.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds clinic enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support appointments, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Strengthen area visibility, local credibility, and appointment-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed visits into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things clinic managers usually ask',
    description: 'Straight answers about how this fits a small private clinic.',
    faqs: [
      {
        question: 'Reception is already overwhelmed. Will this need more admin?',
        answer:
          'No — the whole point is that it relieves reception. After-hours replies, online booking, deposit handling, pre-appointment forms — all automatic. Reception focuses on the patients in front of them.',
      },
      {
        question: 'Will it work alongside our practice management system?',
        answer:
          'Yes. Whatever you use — Cliniko, Heydoc, semble — stays. The system improves the bit between the patient enquiry and the appointment landing in the diary.',
      },
      {
        question: 'How does the after-hours enquiry handling work?',
        answer:
          'A patient enquires Sunday night. Within seconds they get a reply with consultant fees, the next available slots, and a calendar link. Most book then and there. Reception sees the result on Monday morning.',
      },
      {
        question: 'Is patient data handled safely?',
        answer:
          'Yes. Forms and deposits go through compliant providers. Sensitive medical detail isn’t exposed to the website — it lives in your practice management system as it always has.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after the appointment, when the relief is freshest. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry and the appointment landing in the diary — not the site itself.',
      },
    ],
  };

  return {
    slug: 'small-private-clinics',
    industries: ['private-clinic'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Small Private Clinics — Stop Losing After-Hours Enquiries, Consultations & Deposits | MindWP',
      description:
        'For private clinics where NHS-to-private enquiries arrive Sunday night and book elsewhere by Monday, where consultations take ten emails to confirm, and where deposits sit unpaid for a week. We put the system in place that catches them.',
      keywords: [
        'private clinic website design',
        'clinic booking workflow',
        'private clinic lead handling system',
        'private clinic seo services',
        'clinic review system',
      ],
      canonical: '/industries/local-appointment-businesses/small-private-clinics',
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
      title: 'Tell us where the diary is leaking',
      description:
        'If after-hours enquiries go unanswered, if consultations take ten emails to confirm, or if deposits sit unpaid — walk us through how the clinic runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const smallPrivateClinicsIndustryPageData: IndustryPageData =
  buildSmallPrivateClinicsIndustryPageData();
