import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSalonBookingAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Velvet Hair Studio is a four-stylist independent hair salon in Liverpool with a part-time
      receptionist covering front desk three days per week. All appointments were booked by phone
      during opening hours or in person at the counter. The appointment record was a paper diary
      kept at the reception desk {'\u2014'} the only copy. Thursday and Friday were peak booking
      days as clients scheduled ahead for the weekend. During those two days, the receptionist
      handled walk-in payments, check-ins, product queries, and an average of 35 incoming calls.
      Between 8 and 12 of those calls went unanswered each day. There was no voicemail system, no
      online booking page, and no way for clients to schedule outside opening hours.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Online Bookings',
      value: '68%',
      icon: 'Calendar',
      color: 'case-study-accent--success',
    },
    {
      label: 'Phone Booking Time',
      value: '-74%',
      icon: 'PhoneOff',
      color: 'case-study-accent--primary',
    },
    {
      label: 'After-Hours Bookings',
      value: '31%',
      icon: 'Moon',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Weekly Appointments',
      value: '+22%',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: A Phone-Only Booking System That Could Not Handle Peak Volume',
    problemDescription: [
      'Every appointment at Velvet Hair Studio required a phone call during business hours. The part-time receptionist worked Tuesday through Saturday and split her time between answering phones, greeting walk-ins, processing card payments, and updating the paper diary. On Thursday and Friday \u2014 the two busiest booking days \u2014 she fielded 30 to 40 calls while simultaneously managing in-salon traffic.',
      'Call tracking over a four-week period showed 8 to 12 unanswered calls per day on peak days. Clients who could not get through had no alternative path to book. There was no online booking page, no after-hours option, and no voicemail. The paper diary created a second problem: double bookings occurred 2 to 3 times per week when the receptionist updated the diary between interruptions. Stylists discovered conflicts when the client arrived.',
    ],
    painPoints: [
      '8\u201312 booking calls missed per day on Thursdays and Fridays',
      'No online booking \u2014 100% phone-dependent during business hours',
      'Paper diary accessible only at the front desk \u2014 single copy',
      'Receptionist split between phone, walk-ins, and payments simultaneously',
      'No after-hours booking option for evening or weekend scheduling',
      'Double bookings 2\u20133 times per week from delayed diary updates',
      'No automated confirmation \u2014 clients occasionally forgot appointments',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Website-Integrated Booking With CRM and Real-Time Availability',
    solutionDescription:
      'The paper diary was replaced with an online booking calendar embedded in the salon\u2019s WordPress website and linked from the Google Business Profile. The calendar displayed each service with duration and price, connected to individual stylist schedules so availability updated in real time.',
    whatWeDid: [
      {
        title: 'Service-Specific Booking Calendar',
        description:
          'Built an online calendar listing each service (cut, colour, treatment) with duration, price, and stylist selection. Clients chose their preferred stylist and time slot directly.',
        icon: 'Calendar',
      },
      {
        title: 'Website and Google Business Profile Integration',
        description:
          'Embedded the booking calendar on the WordPress site and added a direct booking link to the Google Business Profile, creating two clear ways to book online.',
        icon: 'Globe',
      },
      {
        title: 'CRM Client Records',
        description:
          'Every completed booking created a client record in GoHighLevel CRM with appointment history, service preferences, and contact details \u2014 replacing the paper diary with a searchable digital system.',
        icon: 'Database',
      },
      {
        title: 'Automated Booking Confirmation',
        description:
          'Configured instant SMS and email confirmation on booking, removing the need for manual confirmations and reducing forgotten appointments.',
        icon: 'CheckCircle',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Online Booking Adoption',
        before: '0% \u2014 all bookings by phone or walk-in',
        after: '68% of all appointments booked online within 8 weeks',
        improvement: 'Dominant booking channel shift',
        description:
          'Clients adopted online booking rapidly, particularly for advance weekend appointments that previously required phone calls during peak hours.',
      },
      {
        metric: 'Phone Booking Time',
        before: 'Receptionist spent 3\u20134 hours daily on booking calls',
        after: 'Under 1 hour daily on phone bookings',
        improvement: '74% reduction',
        description:
          'The majority of bookings moved online. The receptionist redirected freed time to in-salon client experience and payment processing.',
      },
      {
        metric: 'After-Hours Bookings',
        before: '0% \u2014 no booking available outside opening hours',
        after: '31% of online bookings placed between 7 PM and 9 AM',
        improvement: 'New booking window unlocked',
        description:
          'Clients booked at times convenient for them \u2014 evenings and early mornings \u2014 a demand window that did not exist before the system was implemented.',
      },
      {
        metric: 'Weekly Appointment Volume',
        before: 'Average 72 appointments per week',
        after: 'Average 88 appointments per week',
        improvement: '+22% increase',
        description:
          'Easier booking access and after-hours availability increased total appointment volume without adding staff or extending opening hours.',
      },
      {
        metric: 'Double Bookings',
        before: '2\u20133 double bookings per week from diary errors',
        after: 'Zero double bookings \u2014 real-time availability prevents conflicts',
        improvement: 'Eliminated',
        description:
          'The digital calendar enforced availability rules automatically, removing the manual errors that caused scheduling conflicts with the paper diary.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Still Taking All Bookings by Phone?',
    body: 'Book a free 20-minute call to discuss how a booking system integrated with your website and CRM could reduce admin time and capture appointments you\u2019re currently missing.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'salon-booking-automation',
    title: 'Salon Booking Automation',
    metaTitle: 'Salon Booking Automation | 68% Online Booking Adoption',
    metaDescription:
      'How a Liverpool salon moved from phone-only bookings to 68% online adoption in 8 weeks, unlocking after-hours appointments and 22% more volume.',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['smart-website-systems'],
    topics: ['booking-automation', 'booking-systems'],
    publishDate: '2025-12-15',
    client: 'Velvet Hair Studio',
    location: 'Liverpool, UK',
    business: 'Velvet Hair Studio',
    duration: '4 weeks',
    completedDate: 'December 2025',
    heroHeadline:
      'How a Hair Salon Shifted to 68% Online Booking and Unlocked After-Hours Appointments',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Booking Automation',
      'Hair Salon',
      'Online Booking',
      'CRM Integration',
      'Beauty & Personal Care',
    ],
    seo: {
      canonical: '/case-studies/salon-booking-automation',
      openGraph: {
        title: 'Why Salon Booking Systems Break Down | MindWP Case Study',
        description:
          'How a Liverpool hair salon moved from phone-only bookings to 68% online booking adoption in 8 weeks.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Booking Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Booking Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for salons' },
        ],
      },
    },
  };
}

export const salonBookingAutomation: CaseStudyData = buildSalonBookingAutomation();
