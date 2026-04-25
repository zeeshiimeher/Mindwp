import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildBeautySalonManchesterAllSections(): CaseStudyData {
  const heroIntroHtml = (
    <>
      The Glow Room is a small independent beauty salon in Manchester city centre. The business had
      a loyal client base built through word of mouth but was difficult to find through Google
      search or Maps when people searched for local beauty services. All appointments were managed
      by phone during opening hours. Phone calls interrupted treatments throughout the day, and
      enquiries that arrived outside business hours were lost entirely. The salon had no online
      booking capability, no automated appointment reminders, and a limited Google review profile
      compared to nearby competitors. The owner handled most administrative tasks personally,
      including rebooking reminders, confirmation calls, and manually tracking client appointment
      history in a spreadsheet.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Local Visibility',
      value: 'Improved',
      icon: 'MapPin',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Booking Consistency',
      value: 'More stable',
      icon: 'TrendingUp',
      color: 'case-study-accent--success',
    },
    {
      label: 'Missed Appointments',
      value: 'Reduced',
      icon: 'CheckCircle2',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Client Feedback',
      value: 'More recent',
      icon: 'Star',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Low Online Visibility, Phone-Only Booking, and No Review Process',
    problemDescription: [
      'The Glow Room operated without a structured online presence. The Google Business Profile had outdated service categories, inconsistent business details across directories, and fewer than 10 reviews \u2014 well behind competitors in the same area who had 40 to 80 reviews with recent activity. Local search queries for beauty services in central Manchester returned the salon below multiple competitors.',
      'All bookings required a phone call during opening hours. The owner answered calls between treatments, creating interruptions that extended appointment times and reduced the quality of the client experience. Enquiries that arrived evenings or weekends went unanswered. No-shows were a recurring problem because the salon had no automated reminders \u2014 confirmation was done by manual text message when the owner remembered. Client history was tracked in a personal spreadsheet with no connection to booking or communications.',
    ],
    painPoints: [
      'Low visibility in Google Maps for local beauty searches',
      'Fewer than 10 reviews compared to competitors with 40\u201380',
      'Phone calls interrupting treatments throughout the day',
      'Enquiries outside opening hours lost entirely \u2014 no booking alternative',
      'Regular no-shows due to no automated reminder system',
      'Owner manually sending confirmation texts between appointments',
      'Client history tracked in a disconnected spreadsheet',
      'Inconsistent business details across online directories',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Local Presence, Online Booking, Reminders, and Review Automation',
    solutionDescription:
      'The implementation addressed four connected problems: local search visibility, booking accessibility, no-show rates, and review collection. Each component was configured within the existing WordPress website and GoHighLevel CRM rather than requiring new platforms.',
    whatWeDid: [
      {
        title: 'Google Business Profile Correction',
        description:
          'Updated the Google Business Profile with accurate service categories, treatment descriptions, photos, opening hours, and a direct booking link. Corrected inconsistent business details across key local directories.',
        icon: 'MapPin',
      },
      {
        title: 'Local Search Content Foundations',
        description:
          'Made targeted improvements to on-site content and local signals so search engines could better associate the salon with beauty service queries in the Manchester city centre area.',
        icon: 'Globe',
      },
      {
        title: 'Online Booking Calendar',
        description:
          'Added an online booking calendar connected to the owner\u2019s schedule, allowing clients to view available slots and book directly from the website or Google Business Profile without calling.',
        icon: 'Calendar',
      },
      {
        title: 'Automated Appointment Reminders',
        description:
          'Configured automated SMS reminders sent at booking confirmation, 24 hours before, and 2 hours before each appointment \u2014 replacing the owner\u2019s manual text messages.',
        icon: 'MessageSquare',
      },
      {
        title: 'Post-Appointment Review Requests',
        description:
          'Set up automated review request messages sent after each completed appointment with a direct link to the Google review page, building the review profile without manual effort.',
        icon: 'Star',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Local Search Visibility',
        before: 'Limited presence for key local beauty searches',
        after: 'Regular visibility for relevant local queries in Maps and Search',
        improvement: 'Improved discoverability',
        description:
          'The salon became easier to find for nearby customers searching for beauty services in central Manchester. GBP impressions and direction requests increased.',
      },
      {
        metric: 'Appointment Volume',
        before: 'Inconsistent booking flow \u2014 dependent on phone availability',
        after: 'More consistent monthly bookings with after-hours scheduling',
        improvement: 'Steadier booking flow',
        description:
          'Online booking made it easier for clients to schedule without calling, particularly outside opening hours when phone enquiries were previously lost.',
      },
      {
        metric: 'Missed Appointments',
        before: 'Frequent no-shows \u2014 manual reminders sent inconsistently',
        after: 'Fewer missed bookings \u2014 automated 3-stage reminder sequence',
        improvement: 'Noticeable reduction',
        description:
          'The automated reminder sequence at confirmation, 24 hours, and 2 hours before each appointment reduced forgotten bookings without requiring any manual effort.',
      },
      {
        metric: 'After-Hours Enquiries',
        before: 'Phone-only booking \u2014 evening and weekend enquiries lost',
        after: 'Online bookings placed outside opening hours',
        improvement: 'Improved accessibility',
        description:
          'Clients could book at times that suited them without waiting for the salon to open, capturing demand that previously went unserved.',
      },
      {
        metric: 'Client Feedback',
        before: 'Fewer than 10 reviews \u2014 profile dormant for months',
        after: 'Steady increase in recent reviews from automated requests',
        improvement: 'More current feedback',
        description:
          'Automated post-appointment review requests built a more accurate and up-to-date public review profile without adding tasks for the owner or staff.',
      },
      {
        metric: 'Owner Admin Time',
        before: 'Manual confirmation texts, spreadsheet tracking, phone interruptions',
        after: 'Automated confirmations, CRM client records, online booking',
        improvement: 'Reduced manual work',
        description:
          'The owner spent less time on phone calls, manual reminders, and spreadsheet updates. That time was redirected to client treatments and business operations.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Want Results Like The Glow Room Beauty Salon?',
    body: 'Book a free 20-minute call to discuss how local search visibility, online booking, and automated systems could reduce admin and capture enquiries you\u2019re currently missing.',
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
    seo: {
      title: 'Beauty Salon Case Study (All Sections Demo) | Manchester',
      description:
        'Demonstration case study showing every supported section type, including workflows, deliverables, business impact, and pinned FAQ layouts.',
      canonical: '/case-studies/beauty-salon-online-booking-local-seo-manchester-all-sections',
      openGraph: {
        title: 'Beauty Salon Case Study (All Sections Demo) | Manchester',
        description:
          'Demonstration case study that includes every supported case study section type, including optional sections like workflows, deliverables, business impact, and pinned FAQ.',
      },
    },
    slug: 'beauty-salon-online-booking-local-seo-manchester-all-sections',
    title: 'Beauty Salon Case Study - All Sections Demo',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['local-seo-authority', 'smart-website-systems', 'reputation-review'],
    topics: ['booking-automation', 'review-generation'],
    publishDate: '2024-12-01',
    client: 'The Glow Room Beauty Salon (All Sections Demo)',
    location: 'Manchester, UK',
    business: 'The Glow Room Beauty Salon',
    duration: '3 months',
    completedDate: 'December 2024',
    heroHeadline: 'Beauty Salon Case Study - All Sections Demo',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Local SEO', 'Online Booking', 'Beauty Salon', 'Manchester', 'All Sections Demo'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Full Template Scenario' },
      problem: { challengeBadgeLabel: 'The Challenge' },
      solution: { solutionBadgeLabel: 'The Solution' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After Performance',
      },
      cta: {
        metaItems: [
          { text: '20-minute discovery call' },
          { text: 'Actionable system roadmap' },
          { text: 'No long-term contract required' },
        ],
      },
    },
  };
}

export const beautySalonManchesterAllSections: CaseStudyData =
  buildBeautySalonManchesterAllSections();
