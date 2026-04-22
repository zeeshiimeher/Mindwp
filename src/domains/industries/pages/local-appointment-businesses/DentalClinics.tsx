import {
  Calendar,
  Clock3,
  HeartPulse,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Stethoscope,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDentalClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Dental Clinics',
    title: 'A New Patient Rang at Lunchtime. Reception Was Busy. They Booked Elsewhere.',
    description:
      'Most dental clinics lose new patients in the gap between an enquiry and a confirmed booking. Calls miss reception. Forms sit unread. Treatment plans go quiet. The clinic that responds first usually gets the patient.',
    list: ['Missed calls', 'Slow callbacks', 'Lost consultations', 'Few reviews'],
    cssPrefix: 'dental-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Patients Come In',
    title: 'A new patient is choosing between a few clinics',
    description:
      'A toothache, a check-up, a treatment they have been putting off. They want to know if you can see them, what it might cost, and that the clinic feels in control.',
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
        title: 'Reviews and recalls',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing dental reviews and recalls',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'dental-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Slip',
    title: 'The clinic is full but the new patients are not all landing',
    description: 'Same handful of gaps for nearly every dental clinic.',
    benefits: [
      {
        icon: Stethoscope,
        title: 'New patient calls miss reception',
        description: 'Reception is with someone in the chair. The new patient does not leave a voicemail. They ring the next clinic.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into messages back and forth',
        description: 'A simple appointment takes too many texts and calls before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Treatment plans go quiet',
        description: 'A plan is discussed in the chair, sent home with the patient, and rarely chased.',
        iconType: 'accent' as const,
      },
      {
        icon: HeartPulse,
        title: 'Reviews do not match the work',
        description: 'You change people’s smiles every day. Online there are barely a few reviews to show for it.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, booking, and follow-up',
    description: 'Each piece does one job. Together they keep new patients from falling through the gaps.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the patient and the reason captured.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries land with reception',
          'Patient and reason noted up front',
        ],
      },
      {
        title: 'Get the appointment booked without the back-and-forth',
        description: 'A clear way to offer a slot, confirm it, and remind the patient the day before.',
        icon: Calendar,
        features: [
          'Slots patients can pick themselves',
          'Confirmations and reminders sent automatically',
          'Reception sees who is coming in and why',
        ],
      },
      {
        title: 'Stop treatment plans going quiet',
        description: 'Every plan gets a follow-up on a schedule, even when the chair is full.',
        icon: Workflow,
        features: [
          'Plans followed up automatically',
          'Open plans in one place',
          'Older patients gently nudged back in',
        ],
      },
      {
        title: 'Turn happy patients into reviews',
        description: 'A review request goes out at the right moment so the work you do shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after appointments',
          'Asked when the patient is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs a dentist.',
        icon: Search,
        features: [
          'Found on Maps for the work you do',
          'Service pages that match real searches',
          'Local area coverage that is visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'You still do the dentistry. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Lunchtime call. Reception is busy. New patient hangs up. Lost.',
          'A patient wants to book. Three messages later, still no slot.',
          'Treatment plan sent home last week. Nobody followed up.',
          'You did beautiful work last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know reception will ring back.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The plan gets a polite follow-up. You can see who is still deciding.',
          'A review request goes out after the visit. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages, most clinics feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most patients.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when reception is busy and new patient calls do not get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web enquiries',
          'Patient and reason captured before the conversation',
        ],
      },
      {
        name: 'Get the appointment booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming an appointment.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots patients can pick themselves',
          'Reminders the day before so chairs stay full',
          'Reception sees the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Keep treatment plans moving and turn visits into reviews',
        description: 'For when the diary is fine but plans go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Treatment plans followed up automatically',
          'Past patients nudged back in',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on reception remembering.',
    workflows: [
      {
        trigger: 'Reception is busy and a new patient call rings out.',
        actions: [
          'They get a text inside a minute saying reception will ring back',
          'The text captures the patient and the reason',
          'The lead is held instead of going to the next clinic',
        ],
      },
      {
        trigger: 'A patient wants an appointment this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Reception sees who is coming in and why',
        ],
      },
      {
        trigger: 'A treatment plan was discussed last week and has not been booked.',
        actions: [
          'A polite follow-up goes out automatically',
          'You can see all the open plans in one place',
          'If they say yes, the booking happens without another five messages',
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
        description: 'Support appointment booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen clinic visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn appointments into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things dental clinics usually ask',
    description: 'Straight answers about how this fits into a busy clinic.',
    faqs: [
      {
        question: 'Reception is already stretched. Will this make more work for them?',
        answer:
          'It does the opposite. Missed calls get answered by text on their own. Reminders fire by themselves. Reception sees a clearer day at a glance.',
      },
      {
        question: 'Will patients feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like reception would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'Can it handle treatment plans that need to be discussed in the chair?',
        answer:
          'Yes. The first reply confirms an appointment and the plan follows after the consultation.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the visit, when the patient is happiest.',
      },
      {
        question: 'What about plans sitting in old emails?',
        answer:
          'Those get worked in too. Many clinics find that reactivating older plans brings in real treatment value before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'dental-clinics',
    industries: ['dental-clinic'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Dental Clinics — Stop Losing New Patients to Missed Calls and Stalled Plans | MindWP',
      description:
        'For dental clinics where new patient calls miss reception, treatment plans go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'dental clinic website design',
        'dental booking system',
        'dental lead handling system',
        'dental seo services',
        'dental reputation management system',
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
      title: 'Tell us where patients are slipping',
      description:
        'If new patient calls miss reception, treatment plans go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
