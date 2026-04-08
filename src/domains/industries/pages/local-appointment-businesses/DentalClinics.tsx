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
import { buildContactHref } from '@/lib/contact/contactHref';

function buildDentalClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Dental Clinics',
    description:
      'A dental clinic website should support appointment qualification, treatment-path clarity, booking readiness, trust-building, and follow-up — without making every patient decision depend on manual back-and-forth.',
    list: [
      'Clearer appointment qualification',
      'Better booking readiness',
      'Stronger treatment trust signals',
      'Consistent follow-up',
    ],
    cssPrefix: 'dental-clinics-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Dental demand depends on trust, clarity, and next-step confidence before the appointment happens',
    description:
      'New patient enquiries, treatment-fit questions, appointment timing, preparation steps, review signals, and post-visit follow-up all shape whether someone books. When those steps stay loose, the booking path becomes harder to trust and harder to manage.',
    items: [
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
    badge: 'Operating Patterns',
    title: 'Where dental clinics lose clarity, time, or booking momentum',
    description:
      'The gap is between first enquiry, treatment-fit qualification, appointment timing, and the trust people need before they commit to a visit.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'Different treatment enquiries land without enough routing context',
        description:
          'Urgent appointments, hygiene visits, cosmetic enquiries, and long-term treatment questions enter through one loose path — first-response quality suffers.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking friction when readiness and treatment path are unclear',
        description:
          'Availability, appointment length, preparation, and next steps do not move through one clean path — the booking flow slows down early.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending enquiries depend on manual follow-up',
        description:
          'Some patients are not ready immediately, but follow-up becomes inconsistent when the front desk and practitioners are handling live appointments.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, practitioner credibility, and treatment clarity all exist but do not work together to support a confident booking decision.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier dental enquiry and booking pipeline',
    description:
      'The system supports demand before bookings, during appointment qualification, and after first contact when the decision takes time.',
    featureCategories: [
      {
        title: 'Appointment qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right treatment and timing details reach the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Treatment qualification', 'Cleaner first response'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves consultations and appointments into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Appointment scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Preparation layer',
        description:
          'Gives patients a clearer path around what to expect or prepare before the appointment happens.',
        icon: Workflow,
        features: ['Preparation guidance', 'Expectation setting', 'Booking visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, practitioner proof, and clinic clarity to the booking decision before the appointment happens.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-care support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns area pages and search visibility to reinforce the locations and appointment types the clinic wants.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Local authority support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive dental enquiries to a steadier booking and follow-up flow',
    description:
      'The clinical care stays. The repeatable friction around qualification, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Booking depends on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early contact',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right booking or nurture path faster',
          'Scheduling and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, practitioner proof, and page structure support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to booking and follow-up',
    description:
      'Each stage moves dental enquiries through a specific part of the journey — from first contact into the right appointment path, then into consistent follow-up.',
    packages: [
      {
        name: 'Qualification and treatment-fit capture',
        description:
          'Routes new patient, treatment, and appointment enquiries into the right path with enough context for a clear next step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Treatment and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'dental-clinics',
        }),
      },
      {
        name: 'Booking and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and preparation guidance so appointments move forward without friction.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and preparation handling create friction',
        features: ['Appointment scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'dental-clinics',
        }),
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and treatment trust moving through a reliable follow-up path.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Trust reinforcement'],
        buttonText: 'Request Details',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'dental-clinics',
        }),
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the dental enquiry, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the practice feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the clinic needs to determine appointment fit, treatment path, and timing before booking.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right booking or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An appointment is requested and timing, preparation, and next-step readiness need confirming.',
        actions: [
          'Move the lead into a booked appointment window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and booking handling',
        ],
      },
      {
        trigger:
          'The first interaction is complete and the clinic wants to keep the opportunity moving without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and treatment proof if needed',
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
    badge: 'Explore',
    description:
      'Relevant service layers for dental clinics that want cleaner bookings, steadier follow-up, and stronger local trust support.',
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
        description: 'Support appointments, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
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
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about dental clinic systems',
    description: 'Common questions about MindWP for dental clinics',
    faqs: [
      {
        question: 'How can a dental clinic get more qualified enquiries from a website?',
        answer:
          'Make treatment paths and first-step guidance clearer, then simplify the first contact step with better qualification prompts and next-step guidance. Qualified enquiries improve when the site reduces uncertainty early.',
      },
      {
        question: 'Should dental clinics offer online appointment requests?',
        answer:
          'Yes. A clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing treatment need, timing, and readiness early.',
      },
      {
        question: 'How do dental clinics reduce slow follow-up on undecided enquiries?',
        answer:
          'A better enquiry system separates ready-now patients from nurture-stage opportunities, then supports measured follow-up over time. The aim is clarity, consistency, and less manual chasing.',
      },
      {
        question: 'Do dental clinics need separate pages for different treatment types?',
        answer:
          'Yes, as long as the pages reflect real treatment paths and useful information rather than thin copy. Good service-page structure helps local visibility and reassures prospects that the clinic handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for dental clinics?',
        answer:
          'Reviews that reinforce trust, clarity, and the feeling that the clinic handled the process professionally and calmly. A consistent review-request process after completed visits builds that proof over time.',
      },
      {
        question: 'Can a Smart Website system help a clinic without replacing practice software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, booking, readiness guidance, and follow-up more consistent. It does not require replacing the tools you already use.',
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
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Dental Clinics — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for dental clinics that need clearer booking flow, appointment qualification, and stronger trust support.',
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
      primaryAction: {
        label: 'Reduce Missed Appointments',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'dental-clinics',
        }),
      },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
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
      title: 'Build a steadier dental booking system',
      description:
        'If unclear enquiry quality, loose booking flow, inconsistent follow-up, or weak trust proof are slowing things down, we can map a practical system around how the patient pipeline actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Reduce Missed Appointments',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'dental-clinics',
        }),
      },
      secondaryAction: {
        label: 'See Local Appointment Businesses',
        href: '/industries/local-appointment-businesses',
      },
    },
  };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
