import { buildContactHref } from '@/lib/contact/contactHref';
import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';
import type { AccentKey } from '@/types/ui';

export type { AccentKey };

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
    eyebrow: 'Service Businesses & Specialist Clinics',
    heading: 'Work Comes In. [[muted:Too Much Slips Away.]]',
    description:
      'People find you online. They call, fill in forms, request quotes or consultations, check reviews, and compare what you do. Some of it turns into work. Too much disappears between the first click and the next step.',
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
  },

  faq: {
    heading: 'Straight answers',
    description: 'Practical questions, answered without spin.',
    items: [
      {
        question: 'What do you build?',
        answer:
          'Conversion-focused website systems and the connected handling around them — for established service businesses and specialist clinics. The website carries the decision path. The handling around it makes sure calls, forms, quotes, and consultation requests are answered, routed, owned, followed up, and turned into proof. The point is that the work coming in actually turns into work won, not that another tool gets added to the stack.',
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
          'Local visibility and trust are part of how the website system works, not a separate package. The website, the local profile, the service or treatment pages, and the proof have to tell the same story to nearby customers — that is what we build. We do not chase rankings as a goal in themselves.',
      },
      {
        question: 'What about missed calls and follow-up?',
        answer:
          'Missed call recovery sits with Lead Response & Handling — instant reply, enquiry logged. Sequenced follow-up sits with Follow-Up & CRM — quotes chased, reminders sent. Both connect into the same capture point as every other enquiry.',
      },
      {
        question: 'What kind of businesses is this for?',
        answer:
          'Established service businesses and specialist clinics where work already comes in, jobs or appointments are worth real money, and handling between moments has visible gaps.',
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
      { num: '04', text: 'What changes when the path is connected' },
    ],
    footer: {
      noSell: 'No hard sell.',
      tone: 'Calm conversation',
    },
  },
};
