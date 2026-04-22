import {
  AlertCircle,
  BriefcaseBusiness,
  Calculator,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Scale,
  Search,
  Shield,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLegalProfessionalServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Legal & Professional Practices',
    title: 'They Sent The Same Enquiry To Three Firms On Tuesday. By Thursday, Whoever Replied First Was Instructed.',
    description:
      'Solicitors, accountants, consultants — different work, same leaks. Enquiries that took two days to reply to. Consultations stuck in email tennis. Proposals and quotes that went quiet. We put the system in place that catches the right enquiries before they go to the firm down the road.',
    list: [
      'Enquiries that took two days to acknowledge',
      'Consultations lost in email tennis',
      'Quotes and proposals that went quiet',
      'Reviews from happy clients you never asked',
    ],
    cssPrefix: 'legal-professional-services-hero',
  };

  const imageStripData = {
    badge: 'How Advisory Enquiries Actually Land',
    title: 'It’s rarely “who’s the best” — it’s “who replied first and made the next step obvious”',
    description:
      'A founder needs an accountant. A homeowner needs a solicitor. A scale-up needs a consultant. They contact three firms, and the one that replied first with a clear next step usually wins.',
    items: [
      {
        title: 'Qualification and fit enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing professional services qualification enquiries',
      },
      {
        title: 'Consultation booking pressure',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing consultation booking pressure',
      },
      {
        title: 'Documents and next-step clarity',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing document-readiness and next-step guidance',
      },
      {
        title: 'Proof and follow-up trust',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing professional services trust and follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re heads-down with current clients. The new enquiry waits. They instructed somebody else.',
    description: 'Same handful of leaks across legal, accounting, and consulting. None of them are about the actual advisory work.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'A serious enquiry sat unread for two days',
        description:
          'You were in court, on year-end, or delivering a workshop. By the time you replied, they’d already chosen.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Five emails to land one consultation',
        description:
          '“Tuesday at 2?” “Can’t do Tuesday.” The good ones don’t stick around for that.',
        iconType: 'secondary' as const,
      },
      {
        icon: Shield,
        title: 'A quote or proposal went quiet for weeks',
        description:
          'One nudge would have closed half of these. Nobody had time to send it.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'The firm down the road has hundreds of reviews. You have a handful.',
        description:
          'Your retention is better. Online you look smaller because nobody was ever asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle enquiries, book consultations, and turn finished work into reviews',
    description:
      'Each piece does one job. Together they keep the intake moving while you do the actual advisory work.',
    featureCategories: [
      {
        title: 'Reply to enquiries the same hour, even mid-matter',
        description:
          'Form lands, an instant acknowledgement goes out with what to expect next. Most enquirers stop messaging other firms.',
        icon: MessageSquare,
        features: [
          'Same-hour acknowledgement on every enquiry',
          'Service type and urgency captured up front',
          'Holds the lead until you can call back',
        ],
      },
      {
        title: 'Book the consultation without the email tennis',
        description:
          'Clients pick a slot themselves. “When are you free?” gets replaced with a calendar link.',
        icon: Calendar,
        features: [
          'Self-serve consultation booking',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'See where every enquiry is in one place',
        description:
          'Quote sent, consultation booked, matter open, review asked. Nothing slips because nobody had time to write it down.',
        icon: FileText,
        features: [
          'Pipeline visible in one place',
          'Document-readiness context',
          'Better handoff between fee earners',
        ],
      },
      {
        title: 'Turn finished matters into reviews you can show',
        description:
          'A polite review request goes out the week after completion, when the relief or result is freshest.',
        icon: Star,
        features: [
          'Review requests at the right moment',
          'Asked once, never again',
          'Reviews catch up to the workload',
        ],
      },
      {
        title: 'Show up for the right kind of client locally and online',
        description:
          'Service pages and authority content lined up so the right matter, niche, or area finds you first.',
        icon: Search,
        features: [
          'Pages for the work and clients you want',
          'Found on the searches that bring real briefs',
          'Less time on enquiries that aren’t a fit',
        ],
      },
      {
        title: 'Follow up the quotes and proposals that go quiet',
        description:
          'Sent Monday, polite check-in a week later, another the week after. Quietly closes more.',
        icon: Shield,
        features: [
          'Follow-up at the right intervals',
          'Pending matters visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Different Practices, Same Leaks',
    title: 'A solo solicitor, a high-street firm, and a six-person consultancy don’t look alike — but the gaps usually are',
    description:
      'Different setups, similar friction. Once you place yours, the right next step gets obvious.',
    cards: [
      {
        title: 'Owner-led specialist firms',
        description:
          'You’re the fee earner and the intake desk. Anything that drops between the two costs work.',
        points: [
          'Enquiries missed during client meetings',
          'Consultations booked late at night',
          'Reviews never asked for',
        ],
      },
      {
        title: 'Team-based practices',
        description:
          'More hands, more handoffs. Things slip in the gap between reception, fee earner, and follow-up.',
        points: [
          'Quotes that nobody owned',
          'Consultations nobody confirmed',
          '“Who was supposed to ring them?”',
        ],
        featured: true,
      },
      {
        title: 'Relationship-led consultants',
        description:
          'Longer sales cycles. Buying committees, board sign-offs, summer holidays. Proposals drift if nobody nudges.',
        points: [
          'Proposals quiet for weeks',
          'Past clients who would refer if asked',
          'Pipeline that depends on memory',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'legal-professional-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs this is worth looking at properly',
    description: 'If most of these ring true, the leak is bigger than another marketing tweak will fix.',
    items: [
      'Enquiries take a day or more to be acknowledged, even the urgent ones',
      'Consultations or discovery calls take five emails to book',
      'Quotes and proposals go quiet for weeks before anybody chases them',
      'Reviews online don’t reflect how good the work actually is',
      'Pipeline visibility lives in someone’s head, not in a system',
      'More work just makes the office feel worse, not better',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Work',
    title: 'A high-street firm, a recurring-fee accountancy, and a project-led consultant break in different places',
    description:
      'Different setups, different leaks. The bit that costs you the most work isn’t the same in a small law firm as in an independent consultancy.',
    features: [
      {
        title: 'Matter-led legal practice',
        description:
          'Urgent enquiries arrive when fee earners are in court or with clients. Speed of acknowledgement is everything.',
        icon: Scale,
      },
      {
        title: 'Recurring advisory practice',
        description:
          'New enquiries land while the team is heads-down on year-ends or VAT. Same-hour acknowledgement makes the difference.',
        icon: Calculator,
      },
      {
        title: 'Project-led consulting',
        description:
          'Longer sales cycles, buying committees, summer holidays. Proposals drift unless somebody nudges at the right moment.',
        icon: BriefcaseBusiness,
      },
    ],
    tagline: 'Same category, different bottlenecks',
    narrativeTitle: 'Why we look at the shape of the practice first',
    narrativeParagraphs: [
      'Before any change is made, we look at how enquiries actually arrive, who handles them, and where they currently slip. That’s usually obvious within a short conversation.',
      'From there, the right next step — instant acknowledgement, consultation booking, proposal follow-up, review collection — becomes obvious instead of generic.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'legal-professional-services-service-environments',
  };

  const processData = {
    badge: 'How We Get Started',
    title: 'How a typical conversation moves from “we’re losing work” to “we’ve stopped losing work”',
    description:
      'Nothing fancy. We look at how the practice actually runs, then put the missing pieces in place in the order that helps most.',
    steps: [
      {
        number: '01',
        title: 'We look at how enquiries arrive now',
        description: 'Calls, forms, referrals, walk-ins. Where they go, who sees them, who replies.',
      },
      {
        number: '02',
        title: 'We map where the matters are slipping',
        description: 'No pitch deck. A short, honest list of what’s breaking and what it’s costing.',
      },
      {
        number: '03',
        title: 'The biggest leak gets fixed first',
        description:
          'Slow acknowledgement, consultation booking, proposal follow-up, missing reviews — whichever is bleeding the most work.',
      },
      {
        number: '04',
        title: 'It runs while the team is on matters',
        description:
          'Replies, reminders, reviews, follow-up. Going on their own while the fee earners do the law.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-process',
  };

  const detailRoutesData = {
    badge: 'By Practice Type',
    title: 'Pick the one closest to how you run',
    description:
      'Same category, different bottlenecks. These pages get into the specifics for each kind of practice.',
    items: [
      {
        title: 'Small Law Firms',
        description:
          'For high-street firms losing Friday-evening enquiries and conveyancing quotes that go quiet.',
        href: '/industries/legal-professional-services/small-law-firms',
        icon: Scale,
      },
      {
        title: 'Accounting Firms',
        description:
          'For small practices where founders email three accountants and pick whoever replied first.',
        href: '/industries/legal-professional-services/accounting-firms',
        icon: Calculator,
      },
      {
        title: 'Consultants',
        description:
          'For independent consultants where proposals go quiet for a month and testimonials never get asked for.',
        href: '/industries/legal-professional-services/consultants',
        icon: BriefcaseBusiness,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'legal-professional-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'legal-professional-services',
    type: 'category',
    category: 'legal-professional-services',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: [
      'lead-qualification',
      'crm-integration',
      'reputation-monitoring',
      'pipeline-visibility',
    ],
    industries: ['accounting', 'consulting', 'law-firm'],
    seo: {
      title: 'Legal, Accounting & Consulting Practices — Stop Losing Enquiries, Consultations & Proposals | MindWP',
      description:
        'For solicitors, accountants, and consultants where enquiries go to whoever replied first, consultations take five emails to book, and proposals go quiet for weeks. We put the system in place that catches the right work.',
      keywords: [
        'legal professional services website systems',
        'law firm consultation booking system',
        'professional services lead handling',
        'consultation follow up system',
        'local advisory business infrastructure',
      ],
      canonical: '/industries/legal-professional-services',
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
      title: 'Tell us where the work is leaking',
      description:
        'If new enquiries take days to acknowledge, if consultations take a week of emails, or if proposals and quotes go quiet — walk us through how the practice runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const legalProfessionalServicesIndustryPageData: IndustryPageData =
  buildLegalProfessionalServicesIndustryPageData();
