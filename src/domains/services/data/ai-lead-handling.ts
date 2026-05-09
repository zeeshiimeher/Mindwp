import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

// =============================================================================
// AI Lead Handling — page data
// Sections: responseGap · connectedVsIsolated · channelStates · handlingPath ·
//           realMoments · handoffMap · scenarioStudy · scopeGroups · fitFilter · faq
// =============================================================================

const slug = 'ai-lead-handling';

export const aiLeadHandlingPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'AI Lead Handling for Service Businesses',
    description:
      'Enquiries arrive after hours, during jobs, and across multiple channels. AI handles the first response — answering, capturing details, and handing off before interest drops.',
  }),
  systems: ['ai-lead-handling'],
  topics: ['lead-response-time', 'missed-calls', 'lead-capture'],
  badge: 'AI Lead Handling',
  category: 'AI Response Systems',
  hero: {
    badge: 'AI Lead Handling',
    title: 'The Enquiry Came In After Hours. Nobody Picked It Up.',
    description:
      'Someone calls after the team has finished. A form lands at 9pm. A chat message sits there until morning. By the time anyone responds, the conversation has moved somewhere faster.',
    list: ['Missed calls', 'After-hours forms', 'Unanswered messages'],
    visual: {
      label: 'Response Surface',
      subtitle: 'Incoming channels — current state',
      channels: [
        { label: 'Missed call', note: 'After hours — no callback', state: 'unhandled' },
        { label: 'Website form', note: 'Sat 21:14 — unread', state: 'unhandled' },
        { label: 'Chat message', note: 'Pricing question — open', state: 'unhandled' },
        { label: 'After-hours call', note: 'AI replied in 12s', state: 'covered' },
      ],
      footerUnhandled: '3 unhandled',
      footerCovered: '1 covered',
    },
  },
  sections: {
    responseGap: {
      header: {
        kicker: 'The real problem',
        title:
          'The gap is not the technology. [[muted:It is what happens before anyone can respond.]]',
        description:
          'Most enquiries do not die because the business is uninterested. They die in the gap between arriving and being answered. AI can close that gap — but only if there is something clear on the other side.',
      },
      primaryGap: {
        title: 'First response is too slow',
        situation:
          'An enquiry arrives while the team is on a job, in a meeting, or finished for the day. Nobody sees it until later. The person who sent it has already tried the next result.',
        cost: 'Response speed is often the only variable in who gets the work. A slow first response does not delay the decision — it loses it.',
        handledState:
          'AI replies within seconds. Enough to acknowledge, collect context, and keep the conversation alive until a person picks it up.',
      },
      gaps: [
        {
          title: 'After-hours enquiries vanish',
          situation:
            'Forms, messages, and voicemails that arrive outside business hours wait until morning. By then the conversation is cold or gone.',
          handledState:
            'After-hours contacts get an immediate response. Details captured and queued for the team with context already attached.',
        },
        {
          title: 'Missed calls stay missed',
          situation:
            'A call goes unanswered. The caller may leave a voicemail. Most do not. The number sits in a call log nobody checks quickly enough.',
          handledState:
            'Missed calls trigger an immediate text acknowledgement. The caller gets a response. The team gets the callback queued with context.',
        },
        {
          title: 'AI added to a broken path makes things worse',
          situation:
            'AI installed on top of unclear enquiry paths just speeds up the confusion. It answers faster into a dead end.',
          handledState:
            'AI sits inside a path that goes somewhere: acknowledgement, detail capture, routing to booking, CRM, or a named person.',
        },
      ],
    },

    connectedVsIsolated: {
      header: {
        kicker: 'Isolated vs connected',
        title:
          'The difference is not whether AI replies. [[muted:It is whether the reply leads anywhere.]]',
        description:
          'Most businesses that tried AI before and found it unhelpful added it on top of an unclear process. The technology was not the problem.',
      },
      leftSide: {
        label: 'Isolated AI',
        note: 'Bolted on · No path after first reply',
      },
      rightSide: {
        label: 'Connected AI',
        note: 'Integrated · Every reply routes forward',
      },
      criteria: [
        {
          name: 'First response',
          left: 'AI replies. Then the conversation stalls — no clear next step.',
          right: 'AI replies, captures details, and routes the conversation to the next action.',
        },
        {
          name: 'Channel consistency',
          left: 'Website chat, missed calls, and messages each behave differently. The customer restarts every time.',
          right: 'All channels follow one handling path. One conversation, one record.',
        },
        {
          name: 'Team context',
          left: 'Your team picks up the lead cold. No context on what was already discussed.',
          right: 'Your team receives the conversation with details already captured.',
        },
        {
          name: 'Escalation',
          left: 'Escalation rules are vague. AI either overreaches or throws everything back.',
          right: 'Clear rules: AI handles the repeatable front end, people handle judgement calls.',
        },
        {
          name: 'Outcome visibility',
          left: 'Reports show chat volume. Nobody can see how many enquiries were actually recovered.',
          right: 'Which contacts were handled, what was routed, what reached the team.',
        },
      ],
    },

    channelStates: {
      header: {
        kicker: 'Where it happens',
        title: 'Three channels where the gap costs you work',
        description:
          'Different enquiry types arrive through different channels. Each has the same problem in a different form.',
      },
      channels: [
        {
          name: 'Phone and missed calls',
          state: 'unhandled',
          currentNote:
            'Calls go unanswered during jobs. Voicemails sit unchecked. Callbacks happen when someone remembers.',
          handledNote:
            'Missed calls trigger an immediate text. Details captured. Team has context before calling back.',
        },
        {
          name: 'Website chat and forms',
          state: 'unhandled',
          currentNote:
            'Forms land in a shared inbox. Chat sits open overnight. First reply depends on who checks and when.',
          handledNote:
            'Chat answered immediately. Forms acknowledged on receipt. Both logged with the context the team needs.',
        },
        {
          name: 'After-hours messages and DMs',
          state: 'unhandled',
          currentNote:
            'WhatsApp, DMs, and out-of-hours messages wait until morning. The window where interest was highest has closed.',
          handledNote:
            'After-hours messages get an immediate response. The conversation stays alive until the team is available.',
        },
      ],
    },

    handlingPath: {
      header: {
        kicker: 'How it works',
        title: 'Channels in. [[muted:One handled path out.]]',
        description:
          'Calls, forms, and messages arrive through separate channels. AI handles the first step across all of them and routes each one to the right next action.',
      },
      inputs: [
        { label: 'Phone call or missed call' },
        { label: 'Website chat or form' },
        { label: 'After-hours message or DM' },
      ],
      junction: {
        title: 'AI first step',
        note: 'Acknowledges, answers common questions, captures details, checks fit',
      },
      outputs: [
        {
          label: 'Booking confirmed',
          type: 'booking',
          note: 'Direct path for ready-to-book contacts',
        },
        {
          label: 'CRM entry + follow-up',
          type: 'crm',
          note: 'Logged with context for the follow-up sequence',
        },
        {
          label: 'Team escalation',
          type: 'team',
          note: 'Conversation handed to a person with full history',
        },
      ],
    },

    realMoments: {
      header: {
        kicker: 'In practice',
        title: 'What this looks like during a normal week',
        description: 'Not theory. Specific moments where the gap closes instead of costing work.',
      },
      examples: [
        {
          trigger: 'A call comes in after hours from someone needing a quote.',
          steps: [
            'Immediate text acknowledgement sent',
            'What they need and when they are free — captured',
            'Queued for first thing next morning',
            'Team has full context before calling back',
          ],
        },
        {
          trigger: 'Someone on the website asks about booking a consultation.',
          steps: [
            'Question answered immediately',
            'Booking path offered',
            'Name, number, and reason collected',
            'Follow-up queued if they do not complete',
          ],
        },
        {
          trigger: 'Someone calls with a pricing question before committing.',
          steps: [
            'Standard answer provided',
            'Fit checked based on what they need',
            'Complex questions routed to a person',
            'Conversation recorded for continuity',
          ],
        },
        {
          trigger: 'A lead starts a chat but drops off halfway through.',
          steps: [
            'Partial details saved',
            'Moved into follow-up queue',
            'Context preserved for whoever picks it up',
            'Better chance of restarting the conversation',
          ],
        },
      ],
    },

    handoffMap: {
      header: {
        kicker: 'System boundaries',
        title: 'What AI hands off — and to what',
        description:
          'AI Lead Handling owns the first step. What happens next belongs to the connected system.',
      },
      source: {
        label: 'AI Lead Handling',
        responsibilities: [
          'Instant first response',
          'Common question handling',
          'Contact detail capture',
          'Basic fit check',
          'Escalation to team when needed',
        ],
        statusLines: ['First contact handled', 'Context captured', 'Path clear'],
      },
      connections: [
        {
          targetSystem: 'CRM & Automation',
          handoff:
            'Every handled conversation goes into the CRM with contact details, what was discussed, and the routing decision already attached. CRM Automation owns the follow-up sequence from that point.',
          boundary:
            'AI Lead Handling owns the first exchange and context capture. CRM Automation owns the lead lifecycle, follow-up scheduling, and visibility from handoff forward.',
        },
        {
          targetSystem: 'Your team',
          handoff:
            'Conversations that need judgement — complex scope, sensitive situations, or high-value enquiries — are escalated to the right person with the full conversation history attached.',
          boundary:
            'AI handles the repeatable front end. People handle the calls that require real context, relationship, or decision-making.',
        },
        {
          targetSystem: 'Smart Website Systems',
          handoff:
            'The website captures the first enquiry signal — form submissions, chat initiations, call triggers. AI Lead Handling takes the response from that point.',
          boundary:
            'Smart Website owns the capture and routing structure. AI Lead Handling owns what happens in the response gap after capture.',
        },
      ],
    },

    scenarioStudy: {
      header: {
        kicker: 'Scenario study',
        title: 'What this can look like for a trade business',
        description:
          'A service business was losing steady after-hours enquiries to slow response times. Here is the kind of handling problem the system addresses.',
      },
      proofType: 'Scenario Study',
      context: {
        label: 'Context',
        title: 'Busy trade business. Steady evening enquiries. Team unavailable after 6pm.',
        description:
          'Calls, forms, and messages arriving after hours were waiting until the next morning. Some came back. Most had already found someone who replied first.',
        constraint: 'Illustrative scenario. Not attributed client work. No outcome guarantee.',
      },
      before: {
        label: 'Before',
        title: 'Enquiries arrived when nobody could respond',
        bullets: [
          'Missed calls showed up in the call log the next morning. No acknowledgement had been sent.',
          'Website forms landed in an inbox nobody checked until the day started. Often eight to twelve hours later.',
          'The team had no way to know which missed contact was the most urgent or most recent.',
        ],
      },
      change: {
        label: 'What changed',
        title: 'AI handled the first step. The team handled the rest.',
        bullets: [
          'Missed calls triggered an immediate text. The caller knew they had been seen.',
          'After-hours forms received an acknowledgement within seconds. Key details captured.',
          'The team started each morning with a clear queue — who contacted them, what they needed, and when.',
        ],
      },
      after: {
        label: 'After',
        title: 'Fewer enquiries disappeared before the team could respond',
        bullets: [
          'More after-hours contacts stayed in the conversation instead of going cold.',
          'The team handled the real conversations. AI handled the gap.',
          'Response speed became consistent across all hours, not just working hours.',
        ],
        metrics: [
          { label: 'After-hours response', before: 'Next morning', after: 'Within seconds' },
          { label: 'Team context on arrival', before: 'None', after: 'Full conversation' },
          {
            label: 'Missed call recovery',
            before: 'Manual, delayed',
            after: 'Immediate text-back',
          },
        ],
      },
    },

    fitFilter: {
      header: {
        kicker: 'Fit check',
        title: 'Is this right for your business?',
        description:
          'Works when response speed matters, first questions repeat, and a clear next step exists after the first reply.',
      },
      strongFit: {
        label: 'Strong fit',
        items: [
          {
            text: 'Enquiries arrive across more than one channel',
            note: 'Chat, phone, forms. Enough volume that handling every first contact manually is costing time or losing work.',
          },
          {
            text: 'Slow replies are losing you jobs',
            note: 'Customers have said it, or your team sees missed calls after the fact. Speed is the issue.',
          },
          {
            text: 'You want AI connected to how you work',
            note: 'Not a chatbot floating on the website. Something that feeds into your CRM, booking, or team routing.',
          },
          {
            text: 'You want practical, not experimental',
            note: 'Faster responses, better capture, cleaner handoff. Not a robot for the sake of having one.',
          },
        ],
      },
      poorFit: {
        label: 'Probably not the right fit',
        items: [
          {
            text: 'Enquiry volume is very low',
            note: 'If a handful of leads arrive each week, the investment does not return. Get more enquiries coming in first.',
          },
          {
            text: 'You want to remove people entirely',
            note: 'AI handles the repeatable front end. Sensitive conversations, complex scope, real relationships — those still need your team.',
          },
          {
            text: 'You want a standalone bot with no connection to anything',
            note: 'A chatbot that does not route, book, or update your CRM is a dead end. Not what this is.',
          },
          {
            text: 'Enquiry paths are not defined',
            note: 'AI amplifies what is already there. If the path underneath is unclear, build that first.',
          },
        ],
      },
    },

    faq: {
      header: {
        kicker: 'Common questions',
        title: 'Questions about AI lead handling',
        description: 'Straight answers about what AI does and does not do.',
      },
      items: [
        {
          id: 'aih-faq-setup',
          question: 'What does the setup involve?',
          answer:
            'Channel setup: AI trained on your services, knowledge base connected, tone matched to your business, chat or voice integration placed and tested. Response configuration: conversation flows designed, missed call recovery, after-hours handling rules, booking integration if relevant. Handoff rules: escalation triggers, CRM connection, fallback handling. Ongoing: conversation reporting and refinement as your enquiry patterns become clear.',
        },
        {
          id: 'aih-faq-receptionist',
          question: 'Is this replacing my receptionist or team?',
          answer:
            'No. AI handles the repeatable first step — acknowledging contact, answering common questions, capturing details. Anything that needs context, sensitivity, or real judgement still goes to a person.',
        },
        {
          id: 'aih-faq-channels',
          question: 'Can it handle both website chat and phone calls?',
          answer:
            'Yes. Setup covers chat, missed call recovery, voice handling, booking support — or a combination. Depends on how your enquiries come in.',
        },
        {
          id: 'aih-faq-crm',
          question: 'Do we need a CRM?',
          answer:
            'If you already have a CRM or booking setup, we connect to it. If not, we can recommend the simplest setup that keeps conversations, follow-up, and reporting visible in one place.',
        },
        {
          id: 'aih-faq-wrong-answer',
          question: 'What if the AI gives a wrong answer?',
          answer:
            'Managed through training, defined boundaries, and handoff rules. It answers what it is trained to answer. Anything outside that scope goes to your team.',
        },
        {
          id: 'aih-faq-business-size',
          question: 'Is this only for large businesses?',
          answer:
            'No. Useful for smaller businesses too — especially when missed calls, slow replies, or the same first questions come up repeatedly.',
        },
        {
          id: 'aih-faq-prerequisites',
          question: 'What needs to be in place first?',
          answer:
            'Clear services, clear enquiry paths, and a sensible follow-up plan. If those are missing, build them first. The same as missed calls or routing — the basics need to work before you add speed.',
        },
      ],
    },
  },

  cta: {
    heading: {
      kicker: 'Final step',
      title: 'Where is first contact costing you work?',
      description:
        'Tell us how enquiries arrive and where responses slow down. We come back with where the gap is and what to cover first.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildServiceContactHref({
          system: 'ai-lead-handling',
          slug: 'ai-lead-handling',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'How enquiries currently arrive and where they go' },
      { num: '02', text: 'Where the response gap is biggest' },
      { num: '03', text: 'What would close it first' },
    ],
  },
} satisfies ServicePageData;
