import { buildContactHref } from '@/lib/contact/contactHref';
import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';
import type { AccentKey, StatusTone } from '@/types/ui';

export type { AccentKey };

export type HomeIconKey =
  | 'local-search'
  | 'service-page'
  | 'form-enquiry'
  | 'missed-call'
  | 'follow-up-due';

export type HomepageData = {
  seo: {
    schema: {
      organization: Record<string, unknown>;
    };
  };

  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
    chips: Array<{ label: string; accent: AccentKey }>;
    signals: Array<{
      label: string;
      note: string;
      status: Extract<StatusTone, 'unowned' | 'leaking'>;
      iconKey: HomeIconKey;
    }>;
    signalSummary: { leaking: string; unowned: string; pulling: string };
    signalCountLabel: string;
  };

  faq: {
    heading: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };

  cta: {
    eyebrow: string;
    heading: {
      title: string;
      muted: string;
      description: string;
    };
    actions: Array<{ label: string; href: string; primary: true }>;
    expectations: Array<{ num: string; text: string }>;
    footer: { noSell: string; tone: string };
  };
};

export const homepageData: HomepageData = {
  seo: {
    schema: {
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: toAbsoluteUrl('/images/logo.png'),
      },
    },
  },

  hero: {
    eyebrow: 'For Service Businesses',
    heading: 'Work Comes In. [[muted:Too Much Slips Away.]]',
    description:
      'People find you online. They call, fill in forms, ask for quotes, check reviews, and compare your services. Some of that turns into work. Too much disappears between the first click and the next step.',
    primaryAction: {
      label: 'Request a System Review',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'global',
        slug: 'home',
      }),
    },
    secondaryAction: {
      label: 'See where work is slipping',
      href: '#recognition',
    },
    chips: [
      { label: 'Visibility', accent: 'cyan' },
      { label: 'Enquiries', accent: 'teal' },
      { label: 'Follow-up', accent: 'amber' },
      { label: 'Proof', accent: 'green' },
    ],
    signals: [
      {
        label: 'Local search',
        note: 'Found, but not clearly answered',
        status: 'unowned',
        iconKey: 'local-search',
      },
      {
        label: 'Service page visit',
        note: 'Interest without enough direction',
        status: 'unowned',
        iconKey: 'service-page',
      },
      {
        label: 'Form enquiry',
        note: 'Arrives without ownership',
        status: 'unowned',
        iconKey: 'form-enquiry',
      },
      {
        label: 'Missed call',
        note: 'No response path after the ring',
        status: 'leaking',
        iconKey: 'missed-call',
      },
      {
        label: 'Follow-up due',
        note: 'The next step depends on memory',
        status: 'leaking',
        iconKey: 'follow-up-due',
      },
    ],
    signalSummary: {
      leaking: '2 leaking',
      unowned: '3 unowned',
      pulling: 'Ready to be handled',
    },
    signalCountLabel: 'SIGNALS',
  },

  faq: {
    heading: 'Straight answers',
    description: 'Practical questions, answered without spin.',
    items: [
      {
        question: 'What do you build?',
        answer:
          'Smart Website Systems, Local SEO Authority Systems, Lead Response & Handling Systems, Follow-Up & CRM Systems, and Reputation & Review Systems, built as connected parts for service businesses.',
      },
      {
        question: 'How is this different from getting a new website?',
        answer:
          'A website shows the business. What we build makes sure enquiries get captured, routed to the right person, followed up, and tracked. The site is the visible part. The rest makes sure the enquiry is handled properly.',
      },
      {
        question: 'We already have a website. Can you work with that?',
        answer:
          'Often yes. We start by inspecting what exists, locate where it leaks, and put the missing handling in place around it.',
      },
      {
        question: 'Is SEO included?',
        answer:
          'Local SEO Authority Systems handle local visibility and trust — getting your services found and verified nearby. It is part of the active model, not a rankings add-on.',
      },
      {
        question: 'What about missed calls and follow-up?',
        answer:
          'Missed call recovery sits with Lead Response & Handling — instant reply, enquiry logged. Sequenced follow-up sits with Follow-Up & CRM — quotes chased, reminders sent. Both connect into the same capture point as every other enquiry.',
      },
      {
        question: 'What kind of businesses is this for?',
        answer:
          'Established service businesses, or serious new setups, where jobs are worth real money and demand already exists.',
      },
      {
        question: 'Do I need to have systems in place already?',
        answer:
          'No. Most businesses we start with have a basic website, disconnected tools, and nothing properly connected yet. Some use spreadsheets. Some have a half-set-up CRM. Some have nothing joined up at all. That is normal. We start with what exists and put the handling in place around it.',
      },
      {
        question: 'How long before we see results?',
        answer:
          'Stop the bleeding in weeks. Groundwork in months. Compounding takes longer — that is the point.',
      },
      {
        question: 'Do you do ongoing work?',
        answer:
          'Yes. Connected systems need maintenance, observation, and tuning. We can run it or hand it over.',
      },
      {
        question: 'How do we start?',
        answer:
          'Start a conversation. We map where work is leaking and what to put in place first.',
      },
    ],
  },

  cta: {
    eyebrow: 'Start Here',
    heading: {
      title: 'Something here hit close.',
      muted: 'Find where it is breaking.',
      description:
        'We can map what needs fixing first — whether you are patching years of workarounds or starting clean.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'page',
          slug: 'home',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where work is coming in today' },
      { num: '02', text: 'What is being held — and what is not' },
      { num: '03', text: 'What to fix first' },
      { num: '04', text: 'What it would mean for revenue' },
    ],
    footer: {
      noSell: 'No hard sell.',
      tone: 'Calm conversation',
    },
  },
};
