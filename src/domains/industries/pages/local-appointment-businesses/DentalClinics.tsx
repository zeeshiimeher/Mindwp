import {
  Bell,
  Calendar,
  Clock3,
  HeartPulse,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDentalClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Dental Clinics',
    title: 'A New Patient Rang at Lunchtime. Reception Was Busy. They Booked Elsewhere.',
    description:
      'Most dental enquiries come from people who already chose a clinic in their head. The one that picks up first or replies the same day usually keeps them. The rest end up at the next clinic on the list.',
    list: ['Missed calls', 'Slow callbacks', 'Lost consultations', 'Few reviews'],
    cssPrefix: 'dental-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Dental Patients Decide',
    title: 'A patient has a problem today and wants someone to help today',
    description:
      'Pain, a missing crown, a check-up overdue, a cosmetic question. They want to know if you can fit them in and whether it will be handled properly.',
    items: [
      {
        title: 'New patient enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing dental new patient enquiries',
      },
      {
        title: 'Booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing dental booking',
      },
      {
        title: 'Treatment plans and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing dental treatment plans',
      },
      {
        title: 'Reviews and trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing dental reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Slip',
    title: 'Clinical care is fine. The bit before and after is where it leaks.',
    description: 'Same handful of gaps in nearly every clinic.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'A new patient call rolled to voicemail',
        description: 'Reception was on another line. By the time anyone rang back, they had booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A consultation went well, then nothing',
        description: 'The treatment plan was agreed. Nobody followed up. The booking never happened.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Reminders and recalls go out when somebody remembers',
        description: 'Sometimes patients are reminded. Sometimes they are not.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The clinic across town has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to turn enquiries into long-term patients',
    description: 'Each piece does one job. Together they hold the trust from first call to next visit.',
    featureCategories: [
      {
        title: 'Reply to every enquiry the same hour',
        description: 'A warm, professional reply goes out within minutes. The next step is in the same message.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries handled professionally',
          'Booking link in the same reply',
        ],
      },
      {
        title: 'Move consultations into treatment',
        description: 'If a patient did not book on the day, a personal follow-up goes out within a couple of days.',
        icon: Calendar,
        features: [
          'Booking flow after consultation',
          'Personal follow-up if they did not commit',
          'Reminders and reschedule options',
        ],
      },
      {
        title: 'Keep recalls and reminders running on their own',
        description: 'Check-up recalls and treatment reminders go out at the right time, without anyone in reception chasing.',
        icon: Bell,
        features: [
          'Recall reminders sent automatically',
          'Treatment follow-up sent on time',
          'Lapsed patients gently re-engaged',
        ],
      },
      {
        title: 'Build the trust dental depends on',
        description: 'Reviews, treatment pages, and credentials lined up so patients feel safe before they call.',
        icon: ShieldCheck,
        features: [
          'Review requests after every visit',
          'Treatment pages that answer real questions',
          'Credentials in the right places',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Treatment pages and Google profile lined up so the right people find you first.',
        icon: Search,
        features: [
          'Pages for the treatments you offer',
          'Found on Maps for local searches',
          'Local visibility that compounds',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week at the clinic, before and after',
    description: 'Clinical care stays the same. The trust-building bits stop being patchy.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A new patient call rolled to voicemail. They booked elsewhere.',
          'A consultation went well. No follow-up. No treatment.',
          'Recalls meant to go out. Reminders meant to go out.',
          'Happy patients walk out. Reviews never get asked for.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls get a text back inside a minute with a booking link.',
          'A personal follow-up goes out if they did not book on the day.',
          'Recalls and reminders fire on their own.',
          'Every happy patient gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages, most clinics feel one more than the others',
    description: 'Pick whichever costs you the most patients right now.',
    packages: [
      {
        name: 'Catch every enquiry while reception is busy',
        description: 'For when calls go to voicemail and new patients book elsewhere.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the leak',
        features: [
          'Missed-call text-back with booking link',
          'Web enquiries handled professionally',
          'Booking link in the same reply',
        ],
      },
      {
        name: 'Turn consultations into treatment',
        description: 'For when consultations happen but bookings drag.',
        price: 'Stage 2',
        priceDetail: 'Start here if consultation-to-treatment is the leak',
        features: [
          'Booking flow after consultation',
          'Personal follow-up if they did not book',
          'Reminders sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Keep recalls and reviews running on their own',
        description: 'For when results are great but reviews and recalls depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if recalls and reviews are the weak spot',
        features: [
          'Recall reminders sent automatically',
          'Review requests after every visit',
          'Lapsed patients gently re-engaged',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs in the clinic where things used to slip.',
    workflows: [
      {
        trigger: 'A new patient calls at lunchtime and reception is busy.',
        actions: [
          'They get a text back inside a minute with a booking link',
          'The text captures the issue so the call back is faster',
          'A consultation lands on the books before the day is out',
        ],
      },
      {
        trigger: 'A patient had a consultation but did not book treatment.',
        actions: [
          'A personal follow-up goes out within a couple of days',
          'Any concerns get answered without pressure',
          'A booking link makes saying yes easy',
        ],
      },
      {
        trigger: 'A patient is overdue for a check-up.',
        actions: [
          'A friendly recall reminder goes out at the right interval',
          'A booking link is in the same message',
          'Reception does not have to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for dental clinics.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds enquiry, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminders, and recalls.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen treatment visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished visits into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things clinics usually ask',
    description: 'Straight answers about how this fits a clinic that is already busy.',
    faqs: [
      {
        question: 'Will automated replies feel cold or off-brand?',
        answer:
          'No. They are written warmly and they buy time to follow up personally. The alternative is silence while they book elsewhere.',
      },
      {
        question: 'How does this help convert consultations into treatment?',
        answer:
          'A personal follow-up goes out a couple of days later if they did not book on the day, with a booking link and a chance to ask anything else.',
      },
      {
        question: 'Can it handle recalls without reception remembering?',
        answer:
          'Yes. Recall reminders go out at the right interval with a booking link in the same message.',
      },
      {
        question: 'How do we get more reviews without it feeling pushy?',
        answer:
          'A polite request goes out a few days after the visit, when patients are happiest.',
      },
      {
        question: 'Can lapsed patients be brought back automatically?',
        answer:
          'Yes. A friendly nudge at the right interval brings regulars back without anyone in the clinic chasing.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally everything that happens after they enquire.',
      },
    ],
  };

  return {
    slug: 'dental-clinics',
    industries: ['dental-clinic'],
    systems: ['smart-website-systems', 'crm-automation', 'local-seo-authority', 'reputation-review'],
    topics: ['booking-systems', 'lead-qualification', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Dental Clinics — Stop Losing New Patients to a Slow Reply | MindWP',
      description:
        'For dental clinics where new patient calls go to voicemail, consultations do not convert, and recalls get sent when somebody remembers. We put the system in place that turns enquiries into long-term patients.',
      keywords: [
        'dental clinic website design',
        'dental clinic lead generation website',
        'dental clinic marketing system',
        'dental clinic booking automation system',
        'dental clinic reputation management system',
      ],
      canonical: '/industries/local-appointment-businesses/dental-clinics',
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
      title: 'Tell us where the trust is breaking',
      description:
        'If new patient calls go to voicemail, if consultations do not turn into treatment, or if reviews do not reflect the work, walk us through how the clinic runs and we will show you the first thing worth fixing.',
    },
  };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
import {
  Bell,
  Calendar,
  Clock3,
  HeartPulse,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDentalClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Dental Clinics',
    title: 'A New Patient Rang at Lunchtime. Reception Was Busy. They Booked Elsewhere.',
    description:
      'Most dental enquiries come from people who already chose a clinic in their head. The one that picks up first or replies the same day usually keeps them. The rest end up at the next clinic on the list.',
    list: ['Missed calls', 'Slow callbacks', 'Lost consultations', 'Few reviews'],
    cssPrefix: 'dental-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Dental Patients Decide',
    title: 'A patient has a problem today and wants someone to help today',
    description:
      'Pain, a missing crown, a check-up overdue, a cosmetic question. They want to know if you can fit them in and whether it will be handled properly.',
    items: [
      {
        title: 'New patient enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing dental new patient enquiries',
      },
      {
        title: 'Booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing dental booking',
      },
      {
        title: 'Treatment plans and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing dental treatment plans',
      },
      {
        title: 'Reviews and trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing dental reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Slip',
    title: 'Clinical care is fine. The bit before and after is where it leaks.',
    description: 'Same handful of gaps in nearly every clinic.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'A new patient call rolled to voicemail',
        description: 'Reception was on another line. By the time anyone rang back, they had booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A consultation went well, then nothing',
        description: 'The treatment plan was agreed. Nobody followed up. The booking never happened.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Reminders and recalls go out when somebody remembers',
        description: 'Sometimes patients are reminded. Sometimes they are not.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The clinic across town has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to turn enquiries into long-term patients',
    description: 'Each piece does one job. Together they hold the trust from first call to next visit.',
    featureCategories: [
      {
        title: 'Reply to every enquiry the same hour',
        description: 'A warm, professional reply goes out within minutes. The next step is in the same message.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries handled professionally',
          'Booking link in the same reply',
        ],
      },
      {
        title: 'Move consultations into treatment',
        description: 'If a patient did not book on the day, a personal follow-up goes out within a couple of days.',
        icon: Calendar,
        features: [
          'Booking flow after consultation',
          'Personal follow-up if they did not commit',
          'Reminders and reschedule options',
        ],
      },
      {
        title: 'Keep recalls and reminders running on their own',
        description: 'Check-up recalls and treatment reminders go out at the right time, without anyone in reception chasing.',
        icon: Bell,
        features: [
          'Recall reminders sent automatically',
          'Treatment follow-up sent on time',
          'Lapsed patients gently re-engaged',
        ],
      },
      {
        title: 'Build the trust dental depends on',
        description: 'Reviews, treatment pages, and credentials lined up so patients feel safe before they call.',
        icon: ShieldCheck,
        features: [
          'Review requests after every visit',
          'Treatment pages that answer real questions',
          'Credentials in the right places',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Treatment pages and Google profile lined up so the right people find you first.',
        icon: Search,
        features: [
          'Pages for the treatments you offer',
          'Found on Maps for local searches',
          'Local visibility that compounds',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week at the clinic, before and after',
    description: 'Clinical care stays the same. The trust-building bits stop being patchy.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A new patient call rolled to voicemail. They booked elsewhere.',
          'A consultation went well. No follow-up. No treatment.',
          'Recalls meant to go out. Reminders meant to go out.',
          'Happy patients walk out. Reviews never get asked for.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls get a text back inside a minute with a booking link.',
          'A personal follow-up goes out if they did not book on the day.',
          'Recalls and reminders fire on their own.',
          'Every happy patient gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages, most clinics feel one more than the others',
    description: 'Pick whichever costs you the most patients right now.',
    packages: [
      {
        name: 'Catch every enquiry while reception is busy',
        description: 'For when calls go to voicemail and new patients book elsewhere.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the leak',
        features: [
          'Missed-call text-back with booking link',
          'Web enquiries handled professionally',
          'Booking link in the same reply',
        ],
      },
      {
        name: 'Turn consultations into treatment',
        description: 'For when consultations happen but bookings drag.',
        price: 'Stage 2',
        priceDetail: 'Start here if consultation-to-treatment is the leak',
        features: [
          'Booking flow after consultation',
          'Personal follow-up if they did not book',
          'Reminders sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Keep recalls and reviews running on their own',
        description: 'For when results are great but reviews and recalls depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if recalls and reviews are the weak spot',
        features: [
          'Recall reminders sent automatically',
          'Review requests after every visit',
          'Lapsed patients gently re-engaged',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs in the clinic where things used to slip.',
    workflows: [
      {
        trigger: 'A new patient calls at lunchtime and reception is busy.',
        actions: [
          'They get a text back inside a minute with a booking link',
          'The text captures the issue so the call back is faster',
          'A consultation lands on the books before the day is out',
        ],
      },
      {
        trigger: 'A patient had a consultation but did not book treatment.',
        actions: [
          'A personal follow-up goes out within a couple of days',
          'Any concerns get answered without pressure',
          'A booking link makes saying yes easy',
        ],
      },
      {
        trigger: 'A patient is overdue for a check-up.',
        actions: [
          'A friendly recall reminder goes out at the right interval',
          'A booking link is in the same message',
          'Reception does not have to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for dental clinics.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds enquiry, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminders, and recalls.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen treatment visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished visits into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things clinics usually ask',
    description: 'Straight answers about how this fits a clinic that is already busy.',
    faqs: [
      {
        question: 'Will automated replies feel cold or off-brand?',
        answer:
          'No. They are written warmly and they buy time to follow up personally. The alternative is silence while they book elsewhere.',
      },
      {
        question: 'How does this help convert consultations into treatment?',
        answer:
          'A personal follow-up goes out a couple of days later if they did not book on the day, with a booking link and a chance to ask anything else.',
      },
      {
        question: 'Can it handle recalls without reception remembering?',
        answer:
          'Yes. Recall reminders go out at the right interval with a booking link in the same message.',
      },
      {
        question: 'How do we get more reviews without it feeling pushy?',
        answer:
          'A polite request goes out a few days after the visit, when patients are happiest.',
      },
      {
        question: 'Can lapsed patients be brought back automatically?',
        answer:
          'Yes. A friendly nudge at the right interval brings regulars back without anyone in the clinic chasing.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally everything that happens after they enquire.',
      },
    ],
  };

  return {
    slug: 'dental-clinics',
    industries: ['dental-clinic'],
    systems: ['smart-website-systems', 'crm-automation', 'local-seo-authority', 'reputation-review'],
    topics: ['booking-systems', 'lead-qualification', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Dental Clinics — Stop Losing New Patients to a Slow Reply | MindWP',
      description:
        'For dental clinics where new patient calls go to voicemail, consultations do not convert, and recalls get sent when somebody remembers. We put the system in place that turns enquiries into long-term patients.',
      keywords: [
        'dental clinic website design',
        'dental clinic lead generation website',
        'dental clinic marketing system',
        'dental clinic booking automation system',
        'dental clinic reputation management system',
      ],
      canonical: '/industries/local-appointment-businesses/dental-clinics',
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
      title: 'Tell us where the trust is breaking',
      description:
        'If new patient calls go to voicemail, if consultations do not turn into treatment, or if reviews do not reflect the work, walk us through how the clinic runs and we will show you the first thing worth fixing.',
    },
  };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
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

function buildDentalClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Dental Practices',
    title: 'A Patient In Pain Rang At 8.30am. Reception Was Already On Another Call. They Booked Down The Road.',
    description:
      'Toothache, cracked filling, broken implant — people don’t shop dentists carefully. They ring three practices on the way to work and book the first one that picks up. We put the system in place that catches the calls reception missed, books the easy ones online, and stops no-shows from eating the diary.',
    list: [
      'Calls reception couldn’t answer in time',
      'Hygiene appointments nobody booked back in',
      'No-shows nobody had time to chase',
      'Reviews from happy patients you never askedatients you never asked',
    ],
    cssPrefix: 'dental-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Dental Calls Actually Land',
    title: 'Reception is on a call. Two more come in. Two more practices got the bookings.',
    description:
      'Mondays after a long weekend. School-holiday weeks. Pain calls from 8am. Reception can’t hold three lines at once — and the patient who couldn’t get through doesn’t ring back
      {
    title: 'Treatment and appointment enquiries',
      image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing dental clinic enquiries',
      },
  {
    title: 'Booking and timing coordination',
      image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing dental appointment booking',
      },
  {
    title: 'Preparation and next-step guidance',
      image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing dental appointment preparation guidance',
      },
  {
    title: 'Reviews and treatment trust',
      image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing dental reviews and trust proof',
      },
    ],
  backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-image-strip',
  };

const operatingPatternsData = {
  badge: 'Where The Diary Slips',
  title: 'Where The Diary Slips',
  title: 'Reception is on the phone. Two more lines ring. Two more patients went elsewhere.',
  description: 'Same handful of leaks in nearly every busy practice. None of them are about clinical care.',
  benefits: [
    {
      icon: HeartPulse,
      title: 'Three pain calls came in at 8.30am. Reception caught one.',
      description:
        'The other two rang the next practice. By 9.15 they were booked elsewhere.',
      iconType: 'primary' as const,
    },
    {
      icon: Calendar,
      title: 'A six-month hygiene recall fell off the diary',
      description:
        'Nobody had time to text “you’re due.” The patient went a year, then drifted to another practice.',
      iconType: 'secondary' as const,
    },
    {
      icon: Clock3,
      title: 'Three implant consultations went quiet for a fortnight',
      description:
        '£4,200 of work each. One follow-up text would have closed at least one. Nobody had time to send it.',
      iconType: 'accent' as const,
    },
    {
      icon: Star,
      title: 'The dentist down the high street has 600 reviews. You have 41.',
      description:
        'Your clinical work is better. Online you look smaller because nobody asked at the right moment
    ],
  columns: 4 as const,
};

const systemLayersData = {
  badge: 'What Gets Put In Place',
  title: 'A steadier way to catch the calls reception missed and the recalls nobody chased',
  descriptWhat Gets Put In Place',
    title: 'A steadier way to catch the calls reception missed and the recalls nobody chased',
  description:
    'Each piece does one job. Together they keep the diary full while reception breathes again.',
  featureCategories: [
    {
      title: 'Catch the calls reception couldn’t pick up',
      description:
        'Missed call gets an instant text — “on another line, what’s going on, will call back in 10.” Most stop dialling the next practice.',
      icon: MessageSquare,
      features: [
        'Missed-call text-back automatically',
        'Pain vs routine triaged up front',
        'Holds the patient until reception is free',
      ],
    },
    {
      title: 'Take routine bookings without phone calls',
      description:
        'Hygiene, check-ups, and consults book themselves online. Reception focuses on the calls that actually need a human.',
      icon: Calendar,
      features: [
        'Online booking for routine appointments',
        'Reminders the day before',
        'Reschedule link instead of a no-show',
      ],
    },
    {
      title: 'Bring back the patients who drifted',
      description:
        'Six-month and twelve-month recalls go out automatically. Hygiene book stays full without anybody having to ring round.',
      icon: Workflow,
      features: [
        'Recall messages on the right schedule',
        'Hygiene diary stops emptying',
        'Lapsed patients gently reactivated',
      ],
    },
    {
      title: 'Follow up the implant and cosmetic consults',
      description:
        'Implant or Invisalign consult was Tuesday. Polite check-in goes out the following Tuesday. Quietly closes more.',
      icon: ShieldCheck,
      features: [
        'Treatment plan follow-up at the right intervals',
        'Pending high-value consults visible in one place',
        'Closing rate goes up without nagging',
      ],
    },
    {
      title: 'Turn finished treatments into reviews',
      description:
        'A polite review request goes out the day after the appointment, when the relief or the new smile is freshest.',
      icon: Star,
      features: [
        'Review requests after every visit',
        'Asked at the right moment',
        'Reviews catch up to the workload',
      ],
    },
    {
      title: 'Show up first when local people search for a dentist',
      description:
        'Service pages and Google profile lined up so people in the right area find you first — not the chain down the road.',
      icon: Search,
      features: [
        'Pages for the treatments and areas you want',
        'Found on Maps for local searches',
        'Less time on enquiries that aren’t a fit',

        'Implant or Invisalign consult was Tuesday. Polite check-in goes out the following Tuesday. Quietly closes more.',
        icon: ShieldCheck,
        features: [
          'Treatment plan follow-up at the right intervals',
          'Pending high-value consults visible in one place',
          'Closing rate goes up without nagging',
        ], What Actually Changes',
    title: 'A normal Monday morning, before and after',
        description: 'The clinical care stays. Reception stops drowning.',
        comparisons: [
          {
            type: 'before' as const,
            title: 'How it runs now',
            items: [
              'Three pain calls before 9am. Reception caught one. Two booked elsewhere.',
              'Six-month hygiene recalls fell off the diary because nobody had time.',
              'Three £4,200 implant consults went quiet for a fortnight.',
              '“We meant to ask for a review” — said about every smile makeover.',
            ],
          },
          {
            type: 'after' as const,
            title: 'How it runs after',
            items: [
              'Missed calls get an instant text. Most wait for reception.',
              'Hygiene recalls go out automatically. Diary stops emptying.',
              'High-value consults get followed up at the right interval.',
              'Reviews get asked for the day after every appointment.
      },
        ],
        columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Where Most Practices Start',
    title: 'Three stages — most practices feel one of them more than the others',
    description: 'Pick whichever costs you the most appointments right now.',
    packages: [
      {
        name: 'Stop missing the morning rush',
        description: 'For when reception can’t hold three lines at once and pain calls go to the next practice.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls is the biggest leak',
        features: [
          'Missed-call text-back the moment reception can’t answer',
          'Pain vs routine triaged automatically',
          'Most callers wait instead of dialling the next practice',
        ],
      },
      {
        name: 'Refill the diary without phoning round',
        description: 'For when hygiene recalls and routine bookings rely on someone remembering to ring.',
        price: 'Stage 2',
        priceDetail: 'Start here if recalls and routine bookings are the leak',
        features: [
          'Online booking for hygiene and check-ups',
          'Recall messages on the right schedule',
          'Reminders so no-shows actually drop',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof and close the high-value consults',
        description: 'For when implant, Invisalign, and cosmetic enquiries deserve more follow-up.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and consult conversion are the weak spot',
        features: [
          'Treatment plan follow-up at the right intervals',
          'Review requests after every appointment',
          'Pages for the treatments and areas you want',

          name: 'Stop missing the morning rush',
          description: 'For when reception can’t hold three lines at once and pain calls go to the next practice.',
          price: 'Stage 1',
          priceDetail: 'Start here if missed calls is the biggest leak',
          features: [
            'MReal Situations',
            title: 'A few moments where the difference shows up',
            description: 'Small moments at the front desk where things used to slip through.',
            workflows: [
              {
                trigger: 'A pain call comes in at 8.45am while reception is on another line.',
                actions: [
                  'Missed call gets an instant text within seconds',
                  'They’re told reception will call back in 10',
                  'Most wait. The truly urgent ones get flagged.',
                ],
              },
              {
                trigger: 'A patient is six months overdue for a hygiene visit.',
                actions: [
                  'A polite recall message goes out automatically',
                  'They book online without phoning',
                  'Hygiene diary stops emptying',
                ],
              },
              {
                trigger: 'An implant consultation went quiet a week ago.',
                actions: [
                  'A friendly check-in goes out at the right interval',
                  'Another a fortnight later if no reply',
                  'High-value consult conversion quietly improves

  const workflowExamplesData = {
                  badge: 'Real Situations',
                  title: 'A few moments where the difference shows up',
                  description: 'Small moments at the front desk where things used to slip through.',
                  workflows: [
                    {
                      trigger: 'A pain call comes in at 8.45am while reception is on another line.',
                      actions: [
                        'Missed call gets an instant text within seconds',
                        'They’re told reception will call back in 10',
                        'Most wait. The truly urgent ones get flagged.',
                      ],
                    },
                    {
                      trigger: 'A patient is six months overdue for a hygiene visit.',
                      actiRelated',
    description:
                      'The other parts of the system that come up most often for busy dental practices
          'Hygiene diary stops emptying',
        ],
                },
      {
                trigger: 'An implant consultation went quiet a week ago.',
                actions: [
                  'A friendly check-in goes out at the right interval',
                  'Another a fortnight later if no reply',
                  'High-value consult conversion quietly improves',
                ],
              },
            ],
            backgroundColor: 'bg-base',
            cssPrefix: 'dental-clinics-workflow-examples',
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
        'The other parts of the system that come up most often for busy dental practices.',
      cards: [
        {
          icon: Workflow,
          title: 'Smart Website Systems',
          description:
            'See the core system layer that holds dental enquiry, booking flow, and follow-up together.',
          href: '/services/smart-website-systems',
          gradient: 'purple',
          iconBg: 'purple',
        },
        {
          icon: Calendar,
          title: 'Booking & Scheduling System',
          descThings practice managers usually ask',
    description: 'Straight answers about how this fits a busy dental practice.',
          faqs: [
            {
              question: 'Reception is already overwhelmed. Will this need more admin?',
              answer:
                'No — the whole point is that it relieves reception. Missed-call text-back, online booking for routine work, and automatic recalls all run on their own. Reception focuses on the calls that actually need a human.',
            },
            {
              question: 'Will it work alongside our practice management software?',
              answer:
                'It sits in front of it. Whatever you use — Dentally, SOE, R4 — stays. The system improves the bit between the patient enquiry and the appointment landing in the diary.',
            },
            {
              question: 'How does the missed-call text-back work?',
              answer:
                'A pain call comes in while reception is on another line. It rings out. Within seconds the caller gets a text — “on another line, calling you back in 10, what’s going on?” Most stop dialling the next practice.',
            },
            {
              question: 'Can it really refill the hygiene diary?',
              answer:
                'Yes — recalls go out at the six- and twelve-month mark automatically. Patients book online without anybody having to ring round. The hygiene diary stops emptying.',
            },
            {
              question: 'How do I get more reviews without nagging?',
              answer:
                'A polite request goes out the day after the appointment, when the relief or new smile is freshest. People who would have meant to leave one actually do.',
            },
            {
              question: 'Do I need to scrap my current website?',
              answer:
                'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the appointment landing in the diary — not the site itself
        question: 'Reception is already overwhelmed. Will this need more admin?',
              answer:
                'No — the whole point is that it relieves reception. Missed-call text-back, online booking for routine work, and automatic recalls all run on their own. Reception focuses on the calls that actually need a human.',
            },
            {
              question: 'Will it work alongside our practice management software?',
              answer:
                'It sits in front of it. Whatever you use — Dentally, SOE, R4 — stays. The system improves the bit between the patient enquiry and the appointment landing in the diary.',
            },
            {
              question: 'How does the missed-call text-back work?',
              answer:
                'A pain call comes in while reception is on another line. It rings out. Within seconds the caller gets a text — “on another line, calling you back in 10, what’s going on?” Most stop dialling the next practice.',
            },
            {
              question: 'Can it really refill the hygiene diary?',
              answer:
                'Yes — recaPractices — Stop Losing Pain Calls, Hygiene Recalls & Implant Consults | MindWP',
              description:
                'For dental practices where pain calls go to whoever picked up first, hygiene recalls fall off the diary, and high-value consults go quiet. We put the system in place that catches the work reception couldn’
        question: 'How do I get more reviews without nagging?',
              answer:
                'A polite request goes out the day after the appointment, when the relief or new smile is freshest. People who would have meant to leave one actually do.',
            },
            {
              question: 'Do I need to scrap my current website?',
              answer:
                'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the appointment landing in the diary — not the site itself.',
            },
          ],
        };

      return {
        slug: 'dental-clinics',
        industries: ['dental-clinic'],
        systems: [
          'smart-website-systems',
          'crm-automation',
          'local-seo-authority',
          'reputation-review',
        ],
        topics: ['booking-systems', 'follow-up', 'review-generation'],
        type: 'detTell us where the diary is leaking',
        description:
          'If pain calls go to voicemail, if hygiene recalls fall off the diary, or if implant consults go quiet — walk us through how the practice runs and we’ll show you the first thing worth fixing
      title: 'Dental Practices — Stop Losing Pain Calls, Hygiene Recalls & Implant Consults | MindWP',
        description:
          'For dental practices where pain calls go to whoever picked up first, hygiene recalls fall off the diary, and high-value consults go quiet. We put the system in place that catches the work reception couldn’t.',
        keywords: [
          'dental clinic website design',
          'dental booking workflow',
          'dental lead handling system',
          'dental clinic seo services',
          'dental review system',
        ],
        canonical: '/industries/local-appointment-businesses/dental-clinics',
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
          'If pain calls go to voicemail, if hygiene recalls fall off the diary, or if implant consults go quiet — walk us through how the practice runs and we’ll show you the first thing worth fixing.',
      },
    };
  }

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
