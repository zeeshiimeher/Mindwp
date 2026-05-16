import type { IndustryDetailPageData } from '@/domains/industries/types';

export const aestheticCosmeticClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Aesthetic & Cosmetic Clinics — Enquiry, Consultation, and Recall Systems',
    description:
      'How established aesthetic and cosmetic clinics handle enquiries, qualify consultations, and run treatment recall reliably.',
    canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
    openGraph: {
      title: 'Aesthetic & Cosmetic Clinics — Enquiry, Consultation, and Recall Systems',
      description: 'A considered enquiry layer for clinics that take their reputation seriously.',
    },
  },
  slug: 'aesthetic-cosmetic-clinics',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Aesthetic Clinic',
    title: 'A long-form enquiry. [[muted:Then nothing for two days.]]',
    description:
      'Aesthetic enquiries are considered. The reader is comparing clinics, reading reviews, and looking for a clear, qualified next step. Slow first-touch quietly hands the consultation to a competitor.',
    list: [
      'Enquiries acknowledged within minutes with a clear next step',
      'Consultations held on a single calendar with reminders',
      'Treatment recalls run at the right interval per service',
    ],
  },
  industries: ['aesthetic-clinic'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'lead-response-handling',
    'reputation-review-systems',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What clinic owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'compliance',
        question: 'How does this work alongside our compliance and consent processes?',
        answer:
          'It does not replace your compliance tools. It links to your existing record system so the operating board can see status without duplicating data.',
      },
      {
        id: 'tools',
        question: 'We use a clinic-management platform. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'tone',
        question: 'Will the messaging match our brand tone?',
        answer: 'Yes. Templates are written in your voice, not generic.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'Per build, not per feature. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the clinic actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries and recalls sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an aesthetic clinic with considered enquiries.',
    },
  },
};
