import { Clock, GitBranch, MessageSquare, Search, ShieldCheck, Star } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'review-automation-system';

export const reviewAutomationSystemPage = {
  slug,
  systems: ['reputation-review'],
  topics: ['review-automation', 'review-generation', 'negative-review-response'],
  keywords: [
    'review automation system',
    'google review request automation',
    'review generation workflow',
    'customer feedback automation',
    'how to automate google review requests',
  ],
  badge: 'Review Automation System',
  category: 'Trust Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Review Automation System for Service Businesses | MindWP',
    description:
      'Stop chasing customers for reviews. Automated review requests go out after every job, complaints get caught early, and your Google reviews grow without anyone remembering to ask.',
    schemaName: 'Automated review collection for service businesses',
    schemaDescription:
      'Done-for-you review automation that sends requests after every job, catches complaints before they go public, and keeps fresh Google reviews coming in consistently.',
  }),
  hero: {
    badge: 'Review Automation System',
      title: 'Get More Reviews Without Chasing Customers Manually',
    description:
      'Your team does great work but happy customers walk away without leaving proof. We set things up so they get asked right after a good experience, when they are most likely to say yes. Complaints get caught before they hit Google.',
    list: [
        'Timed Requests',
        'Complaint Routing',
        'Review Growth',
    ],
    cssPrefix: 'review-automation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'The real problem',
      title: 'You do great work. Your Google reviews do not show it.',
      description:
        'Reviews do not happen because nobody remembers to ask. Here is what that actually costs and what changes when the asking is automatic.',
      painPoints: [
        {
          before: 'The job finishes, the customer says thanks, and everyone moves on. A week later, nobody has asked for a review and the moment is gone.',
          after:
            'The customer gets a short, friendly message the same day while they still remember how good the job was.',
        },
        {
          before:
            'Every customer gets the same generic email, whether they loved the work or had a complaint.',
          after:
            'Happy customers get pointed toward Google. Someone who had a problem gets a private message so you can sort it out first.',
        },
        {
          before: 'A frustrated customer posts a one-star review on Google before you even know there was an issue.',
          after:
            'Unhappy customers are asked to share feedback with you directly, giving you a chance to fix it before it goes public.',
        },
      ],
    },
    workflowLayer: {
      badge: 'How it works',
      title: 'Three things that keep your reviews growing on their own',
      description:
        'Once this is set up, your team doesn\'t need to remember anything. The right people get asked, the reminders go out, and complaints are caught early.',
      cards: [
        {
          title: 'Ask while they\'re still smiling',
          description:
            'The review request goes out right after the job is done — when the customer is happiest and most likely to write something nice.',
          points: ['Sent the same day the job is finished', 'Timed so it lands while the experience is still fresh', 'Only goes to customers who had a good experience'],
          featured: true,
        },
        {
          title: 'A gentle nudge, then it stops',
          description:
            'If they don\'t respond the first time, one or two friendly reminders go out. After that, it stops. Nobody gets pestered.',
          points: [
            'One or two friendly nudges',
            'Sent through the channel they prefer',
            'Stops automatically so you never over-ask',
          ],
        },
        {
          title: 'Catch complaints before they hit Google',
          description:
            'If a customer had a bad experience, they\'re asked to share it with you directly instead of posting it publicly. You see it, you fix it, and it stays between you.',
          points: [
            'Unhappy customers reach your team first',
            'You see the issue and can act fast',
            'Problems get fixed before they become bad reviews',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Why it matters',
      title: 'More reviews means more trust. More trust means more customers.',
      description:
        'People check your reviews before they call. When your reviews are fresh, frequent, and genuine — they pick you over the competition.',
      tagline: 'More reviews. Less chasing. Stronger reputation.',
      narrativeTitle:
        'Your work is already good — your reviews just don\'t show it yet',
      narrativeParagraphs: [
        'Most of the businesses we work with already get compliments from customers. The problem is none of that makes it to Google — because asking for reviews is the kind of thing that always gets pushed to tomorrow.',
        'Once the asks start going out after every job, your review count climbs and Google starts paying attention. More recent reviews means you show up higher in local search. And when people see a business with 50 fresh reviews versus one with 8 from three years ago — they pick the one that looks active.',
      ],
      features: [
        {
          title: 'Reviews keep coming in, month after month',
          description:
            'You\'re not relying on memory or one-off campaigns. Every job triggers an ask, so the reviews stack up over time.',
          icon: Star,
        },
        {
          title: 'Bad experiences stay between you and the customer',
          description:
            'If someone\'s unhappy, they share it with you directly — not in a one-star review that everyone can see. You get a chance to put it right.',
          icon: GitBranch,
        },
        {
          title: 'Show up higher in local search',
          description:
            'Google notices when you have recent, genuine reviews. The more you have, the more likely people nearby will see your business when they search.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'Step by step',
      title: 'How we set it up for your business',
      description:
        'Every business is different, but the steps are straightforward. Here\'s what happens once we get started.',
      steps: [
        {
          number: '1',
          title: 'We figure out when to ask',
          description:
            'We look at when your customers are happiest — right after a job, after a delivery, after an appointment — and that\'s when the ask goes out.',
        },
        {
          number: '2',
          title: 'We write the messages',
          description:
            'Short, friendly messages that sound like they came from you. Sent by text, email, or both — whatever works for your customers.',
        },
        {
          number: '3',
          title: 'We build a safety net for complaints',
          description:
            'If someone\'s not happy, they\'re guided to contact you directly. Your team sees the issue and can act before it ends up on Google.',
        },
        {
          number: '4',
          title: 'We keep improving it',
          description:
            'We check what\'s getting responses and what isn\'t, then adjust the timing, the wording, and the follow-ups to keep results climbing.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What\'s included',
      title: 'Everything that goes into your review setup',
      description:
        'We handle the full setup so you don\'t need to piece things together yourself. Here\'s what a typical review automation package looks like.',
      services: [
        {
          title: 'Smart timing',
          icon: Clock,
          items: [
            'Review requests go out the same day the job is finished',
            'Different services can have different timing',
            'Reminders stop on their own — nobody gets pestered',
            'Only customers who had a good experience get asked',
          ],
        },
        {
          title: 'Messages that actually get replies',
          icon: MessageSquare,
          items: [
            'Sent by text, email, or both — whatever suits your customers',
            'Written in your voice, not a corporate template',
            'Short follow-ups that feel friendly, not nagging',
            'Every customer gets asked — nobody slips through the cracks',
          ],
        },
        {
          title: 'Complaint catching',
          icon: ShieldCheck,
          items: [
            'Unhappy customers are asked to share feedback with you directly',
            'Your team sees the issue straight away',
            'Clear next steps so nothing sits there ignored',
            'We review what\'s working and adjust regularly',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'This is for businesses that want more Google reviews coming in without chasing every customer. If you need broader reputation management across platforms, our full Reputation & Review service covers that.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You do solid work but Google does not show it',
          description:
            'Customers tell you how great the job was then walk away without leaving a review. Your profile does not reflect the work you do.',
        },
        {
          title: 'You want reviews coming in without manual effort',
          description:
            'You do not want a big reputation project. You want happy customers to leave reviews without anyone remembering to ask.',
        },
        {
          title: 'People check your reviews before they call',
          description:
            'In your industry, the business with more recent, genuine reviews gets the call. You want to be that business.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Your main problem is that people cannot find you',
          description:
            'If the issue is visibility rather than trust, Local SEO or website improvements will help more than review collection.',
        },
        {
          title: 'Your customer experience has gaps',
          description:
            'Asking for reviews only works when the work is already good. If customers regularly have problems, the experience needs fixing first.',
        },
        {
          title: 'You need full reputation management across platforms',
          description:
            'If you also need monitoring, public response management, and cross-platform image control, the broader reputation service covers that.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Manual review requests vs automated review collection',
        description:
          'Most businesses rely on memory and occasional asks. Here is what that costs compared to automated review collection.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Manual review requests',
          items: [
            'Reviews only happen when someone remembers to ask',
            'The timing is wrong \u2014 asks go out days or weeks after service',
            'No way to separate happy customers from unhappy ones',
            'Complaints appear on Google before you know there is a problem',
            'Review count stays flat while competitors grow theirs',
          ],
        },
        {
          type: 'after' as const,
          title: 'Automated review collection',
          items: [
            'Every completed job triggers a review request automatically',
            'Requests go out the same day while the experience is fresh',
            'Happy customers get directed to Google, unhappy ones reach you privately',
            'Complaints caught and routed internally before they go public',
            'Review count grows consistently month after month',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A local service business had high customer satisfaction but only a handful of Google reviews. Competitors with worse service ranked higher because they had more.',
      },
      cards: [
        {
          title: 'Before: happy customers, almost no reviews',
          description: 'The business completed hundreds of jobs per year with strong satisfaction. But nobody asked for reviews consistently. Their Google profile had fewer than 20 reviews while competitors had hundreds.',
          points: [
            'Fewer than 20 Google reviews after years in business',
            'No structured process for requesting feedback after jobs',
            'Competitors with worse service ranked higher due to review volume',
          ],
        },
        {
          title: 'What we built: automated requests with complaint routing',
          description: 'We set up automated review requests triggered after every completed job, routed unhappy customers to private feedback, and sent friendly reminders to those who did not respond the first time.',
          points: [
            'Review requests sent automatically after service completion',
            'Unhappy customers routed to internal feedback channel',
            'Follow-up reminders for non-responders with automatic stop',
          ],
          featured: true,
        },
        {
          title: 'After: consistent review growth and fewer public complaints',
          description: 'Within three months, review volume grew significantly. The business started appearing higher in local search as review signals strengthened. Complaints were caught earlier and resolved privately.',
          points: [
            'Review count grew consistently month over month',
            'Local search visibility improved as review signals strengthened',
            'Complaints caught earlier \u2014 fewer one-star public reviews',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about review automation',
      description:
        'Straight answers to what people want to know before getting started.',
      faqs: [
        {
          question: 'Do I need to change anything about how I run my business?',
          answer:
            'No. Everything runs around how you already work. Your team finishes a job the same way they always do and the review request goes out automatically after that.',
        },
        {
          question: 'Will this actually help me get more Google reviews?',
          answer:
            'Yes. Most businesses see a noticeable jump because customers are asked right after a good experience when they are happy and it only takes a minute.',
        },
        {
          question: 'How is this different from the full reputation service?',
          answer:
            'This focuses purely on getting more reviews coming in. If you also need monitoring, public response management, and cross-platform reputation control, the broader service covers all of that.',
        },
        {
          question: 'What if a customer has a complaint?',
          answer:
            'They are routed to a private feedback channel so you can address the issue before it becomes a public review. You see the complaint, you act on it, and it stays between you.',
        },
      ],
      cssPrefix: 'review-automation-faq',
    },
  },
  inlineCta: {
    title: 'How many reviews are you missing every month?',
    description:
      'Tell us how review requests work today. We will show you what is being left on the table and what automated collection would change.',
  },
  cta: {
    title: 'Get more reviews without the chasing',
    description:
      'Tell us about your current review situation. We will set things up so the asks go out after every job and the reviews start growing on their own.',
  },
} satisfies ServicePageData;
