import {
  Clock,
  Database,
  FileSearch,
  Mail,
  MessageSquare,
  RefreshCcw,
  Search,
  Users,
  Workflow,
} from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'lead-reactivation-system';

export const leadReactivationSystemPage = {
    slug,
    seo: buildServiceSeo({
    slug,
    title: 'Lead Reactivation System for Service Businesses | MindWP',
    description:
      'Old enquiries, stalled quotes, and past customers sitting in your CRM doing nothing. Structured reactivation that turns forgotten contacts into recovered revenue.',
  }),
    systems: ['revenue-growth'],
    topics: ['client-reactivation', 'follow-up'],
    badge: 'Lead Reactivation System',
    category: 'Lifecycle Recovery Systems',
    hero: {
    badge: 'Lead Reactivation System',
    title: 'They Enquired Once. Nobody Followed Up.',
    description:
      "Hundreds of old contacts. Stalled quotes. Past customers who never heard from you again. The leads are there. Nobody's working them.",
    list: ["Forgotten", "Unworked", "Stalled revenue"],
    cssPrefix: 'lead-reactivation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
    sections: {
    foundation: {
      badge: 'The neglected asset',
      title: "You don't need more leads. You need to work the ones you had.",
      description:
        "Real opportunities sitting in old enquiries and stalled quotes. Nobody works them because there's no prompt and no message ready to go.",
      painPoints: [
        {
          before: 'Old enquiries in the CRM. Untouched. Nobody knows which are worth revisiting.',
          after:
            'Reactivation rules give a reason, a message, and a time to follow up. Old leads get worked.',
        },
        {
          before:
            'Someone remembers a stalled quote when things slow down. The rest get forgotten.',
          after: 'Defined sequence. Happens consistently. Not just when someone feels like it.',
        },
        {
          before:
            'Past customers, cold prospects, dead quotes — all in the same inbox. No segmentation.',
          after:
            'Each group gets its own timing, message, and next step. Outreach feels relevant, and any reply moves straight into live follow-up.',
        },
      ],
    },
    reactivationScenarios: {
      badge: 'Three types of dormant lead',
      title: 'Different contacts need different follow-up',
      description:
        "A stalled quote isn't the same as a cold enquiry. A past customer isn't the same as either. Each group needs its own message, timing, and next step.",
      scenarioLabel: 'Dormant opportunity',
      solutionLabel: 'Reactivation approach',
      items: [
        {
          icon: FileSearch,
          title: 'Quotes that stalled',
          scenario:
            'A quote went out. The prospect went quiet. Nobody chased it. The opportunity is probably still there — just unworked.',
          solution:
            'Segment stalled quotes by age and value. Set a timed follow-up path with a specific prompt to restart the conversation.',
          result:
            'Stalled quote value gets revisited before it expires completely, with a clear reason to restart the conversation instead of another generic nudge.',
        },
        {
          icon: MessageSquare,
          title: 'Enquiries that drifted',
          scenario:
            'Someone reached out. The conversation started. Then it faded because follow-up was slow, vague, or nobody owned it.',
          solution:
            'Re-engagement sequence with clearer triggers, relevant messaging, and a defined handoff when the contact responds.',
          result:
            'Warm conversations restart before they go fully cold, and the team knows exactly who owns the next step when they do respond.',
        },
        {
          icon: Users,
          title: 'Past customers who could return',
          scenario:
            "They bought once. Liked the work. Never heard from you again. They'd come back if prompted. Nobody prompted them.",
          solution:
            'Lifecycle-based follow-up timed around when repeat demand is naturally likely — not when the business needs revenue.',
          result:
            'Existing relationships become a repeat-revenue source with prompts timed to real return windows instead of random outreach.',
        },
      ],
      alternatingItems: [
        {
          title: 'Stalled quote recovery',
          description:
            'A quote went out, then the prospect went quiet. Nobody followed it up, even though the opportunity may still be recoverable with the right prompt.',
          points: [
            'Segment stalled quotes by age and value',
            'Restart with timed, relevant prompts',
            'Recover pipeline value before it decays',
          ],
        },
        {
          title: 'Drifted enquiry re-engagement',
          description:
            'The conversation started, but follow-up was slow, vague, or unowned. A warmer lead turned cold because nobody carried it forward properly.',
          points: [
            'Trigger re-engagement with context',
            'Clarify the message and next step',
            'Restart warm conversations early',
          ],
        },
        {
          title: 'Past customer reactivation',
          description:
            'They bought once, the work went well, and then the relationship went quiet. A well-timed reason to return can bring that revenue back into play.',
          points: [
            'Time follow-up to natural repeat windows',
            'Send relevant return prompts',
            'Turn past relationships into repeat revenue',
          ],
        },
      ],
    },
    auditAreas: {
      badge: 'Three layers that matter',
      title: 'Segmentation, message logic, and ownership',
      description:
        'Without all three, re-engagement is just noise. The difference is whether old leads actually come back.',
      items: [
        {
          icon: Database,
          title: 'Segment dormant contacts',
          description: 'Separate old contacts into groups that actually make sense for follow-up.',
          checks: [
            'Old enquiries vs stalled quotes',
            'Past customers vs cold prospects',
            'Lead age and lifecycle grouping',
            'Priority contacts worth pursuing first',
          ],
          iconType: 'primary' as const,
        },
        {
          icon: Mail,
          title: 'Build the re-engagement logic',
          description:
            'Define the message, timing, and channel for each group. Make follow-up deliberate.',
          checks: [
            'Channel choice by contact type',
            'Timing rules and follow-up spacing',
            'Message angle for each segment',
            'Defined next step when someone responds',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Workflow,
          title: 'Route replies into action',
          description:
            'Make sure responses move into a visible queue with a named owner, not back into the void.',
          checks: [
            'Assigned owner for every reactivated lead',
            'Pipeline or CRM visibility',
            'Task creation or callback handoff',
            'Simple reporting on recovered outcomes',
          ],
          iconType: 'secondary' as const,
        },
      ],
    },
    processSection: {
      badge: 'How the work runs',
      title: 'Four steps from dormant to active',
      description:
        'Details change by business, but the sequence stays the same. Segment, message, route, refine.',
      steps: [
        {
          number: '1',
          title: 'Identify dormant groups',
          description:
            "Separate old enquiries, stalled quotes, past customers, and dead deals into useful segments. Start with who's worth contacting.",
        },
        {
          number: '2',
          title: 'Set message and timing rules',
          description:
            'Define how and when each group hears from you. Relevant and controlled. Not a mass blast from a desperate month.',
        },
        {
          number: '3',
          title: 'Route responses into action',
          description:
            'Every reply creates a visible next step. Revived leads move forward instead of landing in an unmonitored inbox.',
        },
        {
          number: '4',
          title: 'Refine around what works',
          description:
            'Track which sequences actually reopen conversations. Adjust based on evidence.',
        },
      ],
    },
    entryPoints: {
      badge: 'Where reactivation touches the business',
      title: 'Sales follow-up, CRM hygiene, and lifecycle timing',
      description:
        'Not a generic email campaign. Reactivation sits across several parts of the business, targeting where old value is sitting and nobody is working it.',
      columns: [
        {
          title: 'Old enquiries and stalled quotes',
          icon: Search,
          features: [
            {
              icon: Clock,
              name: 'Timed follow-up windows',
              detail:
                'Revisit opportunities based on how long they have been sitting idle. Older contacts are not always dead.',
            },
            {
              icon: MessageSquare,
              name: 'Context-aware prompts',
              detail:
                'Messages that reference what the person originally asked about. Not a cold intro — a warm restart.',
            },
            {
              icon: Workflow,
              name: 'Response routing',
              detail: 'Move revived leads into a named owner and stage. No replies left floating.',
            },
          ],
        },
        {
          title: 'Dormant pipeline and CRM stages',
          icon: RefreshCcw,
          features: [
            {
              icon: Database,
              name: 'Segment cleanup',
              detail: 'Separate genuinely dead contacts from leads that warrant one more attempt.',
            },
            {
              icon: FileSearch,
              name: 'Opportunity review',
              detail:
                'Identify which stalled quotes, proposals, or deals are worth re-opening first.',
            },
            {
              icon: Mail,
              name: 'Follow-up sequence',
              detail:
                'Deliberate re-engagement instead of one-off messages sent when someone remembers.',
            },
          ],
        },
        {
          title: 'Past customers and repeat service',
          icon: Users,
          features: [
            {
              icon: Clock,
              name: 'Lifecycle timing',
              detail:
                'Reconnect when repeat demand is naturally likely, not when the business needs a revenue boost.',
            },
            {
              icon: MessageSquare,
              name: 'Relevant return prompts',
              detail:
                'Frame the contact around maintenance, repeat work, or the next likely need — not a generic check-in.',
            },
            {
              icon: Search,
              name: 'Revenue visibility',
              detail:
                'See whether past-customer reactivation is actually producing repeat revenue, not just activity.',
            },
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit?',
      description:
        "Best for businesses where recoverable opportunities already exist in old enquiries, stalled quotes, or past-customer records — but nobody's working them.",
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Dormant leads are sitting untouched in your records',
          description:
            'There is visible value in old enquiries, stalled quotes, or past customers sitting in your CRM, spreadsheet, or inbox history. Some of those contacts are still recoverable. Nobody is reaching out.',
        },
        {
          title: 'Follow-up depends on memory, not process',
          description:
            'Re-engagement only happens when someone remembers or when work dries up. Most recoverable contacts never get a second attempt.',
        },
        {
          title: 'Past customers could return if prompted',
          description:
            "Existing customers liked the work. They'd come back for maintenance, repeat service, or referrals. But there's no prompt, so they don't.",
        },
      ],
      notDesignedItems: [
        {
          title: 'The real issue is lead quality, not follow-up',
          description:
            'If the traffic is wrong or the enquiries are poor-fit, reactivation recycles bad leads. Fix the source first.',
        },
        {
          title: 'You want a one-off blast, not a repeatable process',
          description:
            'A single email to the whole list produces a brief spike and nothing after. This works as ongoing reactivation, not a one-time push.',
        },
        {
          title: 'Response speed is the bigger leak',
          description:
            'If new leads are dying to slow replies or missed calls, the gap between new and old is the wrong place to focus. Fix the front door first.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Sporadic re-engagement vs structured reactivation',
        description:
          "Most businesses treat dormant leads as a forgotten backlog. Here's what that costs compared to working them properly.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Sporadic re-engagement',
          items: [
            'Old leads sit in the CRM with no prompt. Value depreciates silently every month.',
            'Someone sends a batch email when things slow down. Nothing after. No sequence. No ownership.',
            'Past customers, stalled quotes, and cold leads all get the same message. Response rates stay low because nothing feels relevant.',
            'Nobody owns the responses that do come back. Replies create confusion instead of moving deals forward.',
            'Recoverable revenue sitting there. The business keeps paying for new leads when existing value is right there.',
          ],
        },
        {
          type: 'after' as const,
          title: 'Reactivation that runs',
          items: [
            'Dormant contacts segmented by type, age, and likely intent. Each group gets the right message at the right time.',
            'Follow-up timing and messaging tailored to each segment. Outreach feels relevant, not random or desperate.',
            'Past customers get lifecycle-based prompts. Cold leads get a different approach. The message matches the relationship.',
            'Every response routes to a named owner with a clear next step. Revived leads move forward immediately.',
            'Reactivation becomes a measurable source of recovered revenue. Justifies itself in the numbers.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'A physiotherapy clinic that recovered revenue from its own database',
        description:
          "Two practitioners. Five years of patient records. Hundreds of past patients who completed treatment and never came back — not because they didn't need to, but because nobody reached out.",
      },
      cards: [
        {
          title: 'Before: years of records, no follow-up',
          description:
            'Over 400 past patients in their booking system. Some finished treatment. Others cancelled mid-way. A handful called but never booked. Sitting there.',
          points: [
            'Past patients who finished treatment were never contacted again. Recurring conditions. Nobody prompted them.',
            'Cancelled patients sat in the system. Some stopped because of scheduling, not need.',
          ],
        },
        {
          title: 'What changed: three segments, three sequences',
          description:
            "Past patients were split into three groups: completed-treatment patients likely to need repeat care, lapsed patients who'd stopped mid-course, and old enquiries who'd never booked. Each group got a different message, different timing, and a direct booking link.",
          points: [
            'Completed-treatment patients received a check-in message timed to when their condition was likely to need attention again. Relevant and specific, not a generic newsletter.',
            "Lapsed patients got a short follow-up acknowledging they'd stopped and offering a quick rebook. No pressure. Just a clear next step.",
            'Old enquiries received a brief message referencing their original call, with availability and a booking link. Simple context restart.',
          ],
          featured: true,
        },
        {
          title: 'After: 28 rebookings in six weeks',
          description:
            'No advertising. No acquisition. Twenty-eight rebookings from people already in the system.',
          points: [
            "Completed-treatment patients made up the biggest share. Most said they'd been meaning to come back.",
            'Seven lapsed patients rebooked. Two had gone to competitors but came back because the clinic reached out first.',
            'Three old enquiries booked. Small. But zero cost.',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about lead reactivation',
      description:
        'Honest answers from businesses that realised recoverable revenue was sitting in their own records.',
      faqs: [
        {
          question: 'Can this work if our leads are spread across spreadsheets or basic tools?',
          answer:
            'Yes. A stronger CRM helps, but it is not the starting requirement. The first step is still clear segmentation, timed follow-up, and named ownership using the tools you already have today.',
        },
        {
          question: 'Is this the same as email marketing?',
          answer:
            "No. Email marketing is broader communication. This is targeted commercial follow-up aimed at specific stalled opportunities, old enquiries, and past customers where there's a recoverable outcome.",
        },
        {
          question: 'How does this relate to the Revenue Growth review?',
          answer:
            'Revenue Growth looks at the broader commercial picture. Lead reactivation is a narrower piece — recovering value from contacts the business has already touched but failed to convert or retain.',
        },
        {
          question: 'How soon can we expect results?',
          answer:
            'Most businesses see re-engaged conversations within weeks. Stalled quotes and past customers tend to respond fastest because the relationship already exists.',
        },
      ],
      cssPrefix: 'lead-reactivation-faq',
    },
  },
    inlineCta: {
    title: 'What are you sitting on?',
    description: "Old leads, stalled quotes, past customers. What's worth pursuing. What isn't.",
  },
    cta: {
    title: "Find out what's recoverable in your own records",
    description: "Your old enquiries and past customers. What's still warm. How to work it.",
  }
} satisfies ServicePageData;
