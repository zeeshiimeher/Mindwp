import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRoofingWebsiteRebuildWithCrm(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Allerton Roofing covers Manchester and the towns north of the city. The website looked tidy.
      Photos of recent jobs, a list of services, a contact form, a phone number across the top. From
      a homeowner\u2019s point of view it looked like a perfectly reasonable roofer. From the
      office\u2019s point of view it was almost completely silent.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The website looked fine. The work still wasn\u2019t flowing',
    problemDescription: [
      'Traffic was actually decent. People were searching for a roofer, finding the site, looking around for a minute and leaving without doing anything. The phone occasionally rang, the form occasionally pinged, but the volume did not match the number of visitors.',
      'There was nothing obviously wrong with the site. There was just nothing on it that helped a worried homeowner work out whether to call this roofer or the next one in the search results. The pages described the work; they did not help anyone make a decision.',
    ],
    painPoints: [
      'Visitors landed, scrolled, and left without making contact',
      'The contact form felt like a generic ask with no context',
      'Service pages described what was offered but not how the company worked',
      'No clear next step on any of the pages a homeowner actually landed on',
      'Enquiries that did come in had no proper home behind the scenes',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The site started doing a job, not just sitting there looking right',
    solutionDescription:
      'Instead of treating the website as a brochure, it was rebuilt around the questions a worried homeowner actually asks before they pick up the phone, and the answers were carried into a tidy place behind the scenes.',
    whatWeDid: [
      {
        title: 'Pages built around the homeowner\u2019s question',
        description:
          'Each main page started with the situation the homeowner was probably in (a leak, a missing tile, an old roof) instead of the company\u2019s history.',
        icon: 'FileText',
      },
      {
        title: 'A clear next step on every page',
        description:
          'Visitors never had to scroll back up to work out what to do. Each page made the next move obvious, whether that was a call, a survey request, or a question form.',
        icon: 'ArrowRight',
      },
      {
        title: 'Forms that asked the right things',
        description:
          'The contact form asked just enough to make the first reply useful, instead of being a single empty box.',
        icon: 'ListChecks',
      },
      {
        title: 'A proper home for new enquiries',
        description:
          'Once a form was filled in, the lead landed somewhere the team actually looked at, with the context already attached.',
        icon: 'Inbox',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'The same traffic started turning into actual enquiries',
        improvement:
          'A clear lift in calls and forms from a website that was visited by the same kind of homeowner as before',
        description:
          'Nothing changed about who was finding the site. What changed was what happened once they were there. The pages started giving a worried homeowner enough to act on instead of leaving them to interpret.',
      },
      {
        title: 'Enquiries felt warmer when they arrived',
        improvement: 'Less back-and-forth before the first useful conversation',
        description:
          'Because the form asked the right things, the team was no longer chasing basics. The first phone call could be about the actual job instead of trying to extract the postcode and the kind of property.',
      },
      {
        title: 'Nothing got lost behind the scenes anymore',
        improvement: 'Every enquiry had a home, every reply had a record',
        description:
          'The website was finally connected to the way the business actually worked. The owner could see what had come in, what had been replied to, and what was still waiting on a response.',
      },
    ],
  };

  const faqSection: CaseStudyTemplateSection = {
    type: 'faq',
    title: 'A few questions the owner asked us along the way',
    items: [
      {
        question: 'Will this drop us in the search results while you\u2019re changing things?',
        answer:
          'There was a short, normal dip the week of launch. Within a couple of weeks the rebuilt pages were ranking at least as well as the old ones, and most of the service pages climbed because they were now actually answering search questions properly.',
      },
      {
        question: 'Do we have to learn a whole new piece of software?',
        answer:
          'No. The new enquiry inbox uses the same email account the office already checks. The only new thing is a short list view that shows what is open and what has been replied to. Most of the team picked it up in an afternoon.',
      },
      {
        question: 'What happens if a homeowner phones instead of using the form?',
        answer:
          'Phone calls are still phone calls. We just made sure the team can quickly add the call to the same enquiry list afterwards, so a phoned-in lead is treated the same as a form-filled one and does not get forgotten.',
      },
      {
        question: 'How will I know it\u2019s actually working?',
        answer:
          'There is a small monthly summary that shows how many enquiries came in, how many got a reply, and how many turned into surveys. No vanity metrics. Just enough to see whether the website is pulling its weight.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Website looks fine but the phone still doesn\u2019t ring?',
    body: 'Book a free 20-minute call. We can look at what your website is actually doing for you and where good visitors are quietly leaving without acting.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    faqSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Roofing website case study: more enquiries from the same traffic',
      description:
        'How a Manchester roofing company turned a tidy but quiet website into one that actually helped homeowners make a decision and pick up the phone.',
      canonical: '/case-studies/roofing-website-looked-fine-work-not-flowing',
      openGraph: {
        title: 'Roofing website case study: more enquiries from the same traffic',
        description:
          'How a Manchester roofing company turned a tidy but quiet website into one that actually helped homeowners make a decision.',
      },
    },
    slug: 'roofing-website-looked-fine-work-not-flowing',
    title: 'The website looked fine. The work still wasn\u2019t flowing',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['smart-website-systems'],
    topics: ['conversion-optimization', 'lead-capture', 'crm-enabled-websites'],
    publishDate: '2026-01-30',
    client: 'Allerton Roofing',
    location: 'Manchester, UK',
    business: 'Allerton Roofing',
    duration: '12 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'The website looked fine. The work still wasn\u2019t flowing',
    keyMetrics: [],
    tags: ['Roofing', 'Website Rebuild', 'Lead Capture', 'Trade Business'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Website Conversion' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the website did a real job',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for trade businesses' },
        ],
      },
    },
  };
}

export const roofingWebsiteRebuildWithCrm: CaseStudyData = buildRoofingWebsiteRebuildWithCrm();
