import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

// =============================================================================
// AI Lead Handling — page data (skeleton)
//
// Approved section order:
//   1. Hero
//   2. responseGap      — first-contact gap as operational incident
//   3. channelBreakdown — dispatch board: three channels, same gap
//   4. responsePath     — convergence: channels → AI junction → outputs
//   5. aiBoundary       — scope: what this covers vs what it does not touch
//   6. scenarioStudy    — scenario study with before/change/after narrative
//   7. fitFilter        — qualification: strong fit vs poor fit
//   8. faq
//   9. cta
//
// Removed:
//   connectedVsIsolated (merged into responsePath description)
//   channelStates       (replaced by channelBreakdown)
//   handlingPath        (replaced by responsePath)
//   handoffMap          (replaced by aiBoundary)
//   realMoments         (log moments will move into scenarioStudy.change later)
//   scopeGroups         (removed entirely)
//
// Data strategy:
//   Normal sections carry header-only data now.
//   Custom visual data will be added section-by-section during design execution.
//   Do not add arrays/nested fields until the section visual requires them.
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

  // ---------------------------------------------------------------------------
  // Hero
  // Visual: First-Contact Control Surface panel — channel rows with state
  // HeroFrame visual slot will be designed in hero execution pass
  // ---------------------------------------------------------------------------
  hero: {
    badge: 'AI Lead Handling',
    title: 'The Enquiry Came In After Hours. Nobody Picked It Up.',
    description:
      'Someone calls after the team has finished. A form lands at 9pm. A chat message sits there until morning. By the time anyone responds, the conversation has moved somewhere faster.',
    list: ['Missed calls', 'After-hours forms', 'Unanswered messages'],
    visual: {
      label: 'Incoming — current state',
      subtitle: 'First contact surface',
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
    // ── 2. RESPONSE GAP ──────────────────────────────────────────────────────
    // DESIGN INTENT:
    //   Show the first-contact gap as an operational incident — not a feature list.
    //   One dominant primary-gap panel + two smaller supporting gap cards.
    //   Dark tone feels like flagged case notes.
    // VISUAL DIRECTION:
    //   Primary gap: large block, amber left-border, situation → cost → handled state.
    //   Secondary gaps: compact rows beside or below, teal dot on handled-state line.
    // BOUNDARY: AI owns first reply and context capture, not CRM lifecycle.
    // DO NOT: Use equal-weight feature cards. Turn into bullet list. Add timeline.
    responseGap: {
      header: {
        kicker: 'The real problem',
        title:
          'The gap is not the technology. [[muted:It is what happens before anyone can respond.]]',
        description:
          'Most enquiries do not die because the business is uninterested. They die in the gap between arriving and being answered. AI can close that gap — but only if there is something clear on the other side.',
      },
      primaryGap: {
        label: 'Primary gap',
        title: 'The enquiry arrives when nobody can answer',
        situation:
          'A call comes in after hours. A form lands at 9pm. A chat message sits open until the next morning. The team does not see it until the working day starts again.',
        cost: 'By then, the buyer has usually moved on. The window to respond was hours ago.',
        handledState:
          'AI replies within seconds. Captures the name, service need, and preferred callback time. The contact is held, not lost.',
      },
      gaps: [
        {
          label: 'Missed call',
          title: 'Call rings out. No message. No reply.',
          situation:
            'Team is on a job. Call goes to voicemail. Nobody checks until the day is done.',
          handledState: 'AI sends a reply message. Captures contact details. Routes for callback.',
        },
        {
          label: 'Overnight form',
          title: 'Form submitted at 9pm. Sits unread until morning.',
          situation: 'Standard inbox. No automatic acknowledgment. No indication it arrived.',
          handledState: 'AI confirms receipt, answers the first question, and logs the contact.',
        },
      ],
    },

    // ── 3. CHANNEL BREAKDOWN ─────────────────────────────────────────────────
    // DESIGN INTENT:
    //   A single dispatch board — not three floating cards.
    //   One bordered panel containing rows: channel name | current state | handled state.
    //   Reader sees all three channels and both states as one status surface.
    // VISUAL DIRECTION:
    //   Board header: "Channels · Response state"
    //   Row columns: Channel | Current (amber) | Handled (teal)
    //   Rows share borders — they are part of one board, not separate cards.
    // DATA NEEDED LATER:
    //   rows[] { channel, currentState, handledState }
    // DO NOT: Three floating cards. Equal-weight grid. Repeat Section 2.
    channelBreakdown: {
      header: {
        kicker: 'Where it happens',
        title: 'Three channels. [[muted:The same gap in a different form.]]',
        description:
          'Different channels, same problem. The contact arrives. Nobody can respond in time.',
      },
    },

    // ── 4. RESPONSE PATH ─────────────────────────────────────────────────────
    // DESIGN INTENT:
    //   A convergence diagram: channels in → AI Lead Handling junction → outputs out.
    //   Also carries the connected-vs-isolated idea (replaces removed section):
    //   isolated AI replies into nothing; connected AI routes to booking/CRM/team.
    //   The junction block must dominate — it is the central argument.
    // VISUAL DIRECTION:
    //   Input list (left): 3 compact rows, amber-tinted border. Secondary.
    //   Junction (centre): large block, cyan glow, "AI Lead Handling" dominant label.
    //   Output list (right): 3 rows with destination + one-line note.
    //     Teal = booking. Cyan = CRM queue + context (NOT follow-up — CRM owns that).
    //     Neutral = team escalation with full conversation history.
    // DATA NEEDED LATER:
    //   inputs[] { label }
    //   junction { title, note }
    //   outputs[] { label, type: 'booking'|'crm'|'team', note }
    // BOUNDARY:
    //   CRM output label must say "CRM queue + context" NOT "CRM + follow-up".
    //   Follow-up sequences belong to CRM Automation, not AI Lead Handling.
    // DO NOT:
    //   Equal-weight inputs/junction/outputs. Comparison table. SaaS routing diagram.
    responsePath: {
      header: {
        kicker: 'How it works',
        title: 'Channels in. [[muted:One handled path out.]]',
        description:
          'Calls, forms, and messages arrive through separate channels. Isolated AI replies — and the conversation stalls. Connected AI routes each one to the next clear step.',
      },
    },

    // ── 5. AI BOUNDARY ───────────────────────────────────────────────────────
    // DESIGN INTENT:
    //   Two-column ownership panel. Left = what this covers. Right = what it does not touch.
    //   Not Fit Filter (that is about business fit). This is about system scope.
    //   Protects against CRM, SWS, LSA, and chatbot-SaaS drift.
    // VISUAL DIRECTION:
    //   Left column: "What this covers" — cyan heading, teal left-border list items.
    //   Right column: "What it does not touch" — muted heading, subtle list items.
    //   Items are short, specific action phrases — not prose.
    // DATA NEEDED LATER:
    //   owns[] { label }
    //   doesNotOwn[] { label }
    // BOUNDARY:
    //   "Does not own" must include: CRM follow-up sequences, website structure,
    //   local SEO, review generation, revenue reporting, replacing team judgement.
    // DO NOT:
    //   Card-per-item grid. Feature-checklist style. Imply CRM/SWS overlap.
    aiBoundary: {
      header: {
        kicker: 'System scope',
        title: 'What this covers. [[muted:What it does not touch.]]',
        description:
          'Knowing the boundary makes it more useful, not less. AI handles the first step. The team and connected systems handle everything after.',
      },
    },

    // ── 6. SCENARIO STUDY ────────────────────────────────────────────────────
    // DESIGN INTENT:
    //   Richest section. Shows the system in operational context without fake proof.
    //   Visible proof-type disclaimer (Scenario Study) — must be prominent.
    //   Three-part narrative: context → before → change → after.
    //   The change panel will later include a mini response log (2-3 moment rows).
    // VISUAL DIRECTION:
    //   Context block (amber): proof-type label, title, description, constraint italic.
    //   Before panel: amber-tinted dark card, 3 bullets — what was happening.
    //   Change panel: 3 bullets + mini log rows: trigger | AI response | outcome.
    //   After panel: teal-accented dark card, 3 bullets + directional metrics table.
    // DATA NEEDED LATER:
    //   proofType
    //   context { label, title, description, constraint }
    //   before { label, title, bullets[] }
    //   change { label, title, bullets[], moments[] { trigger, response, outcome } }
    //   after { label, title, bullets[], metrics[] { label, before, after } }
    // DO NOT:
    //   Present as real client work. Fabricate percentages. Use "we achieved X%".
    scenarioStudy: {
      header: {
        kicker: 'Scenario study',
        title: 'What this can look like for a trade business',
        description:
          'A service business was losing steady after-hours enquiries to slow response times. Here is the kind of handling problem the system addresses.',
      },
    },

    // ── 7. FIT FILTER ────────────────────────────────────────────────────────
    // DESIGN INTENT:
    //   Two-column qualification panel: strong fit vs poor fit.
    //   Content is mostly preserved from prior version — it is well-written and honest.
    //   Visual improvement: column label treatment, teal/muted accent, left-border items.
    // VISUAL DIRECTION:
    //   Column labels: eyebrow style, teal for strong / muted for poor.
    //   Items: left-border accent (teal strong / subtle poor), label + note.
    // DATA NEEDED LATER (carry existing data from this pass):
    //   strongFit { label, items[] { text, note } }
    //   poorFit { label, items[] { text, note } }
    // DO NOT: Sales hype on strong fit. Scare copy on poor fit. Icons everywhere.
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

    // ── 8. FAQ ───────────────────────────────────────────────────────────────
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
            'If you already have a CRM or booking setup, we connect to it. If not, we recommend the simplest place for captured conversations to land so your team can see what came in and what needs attention next.',
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

  // ---------------------------------------------------------------------------
  // CTA
  // ---------------------------------------------------------------------------
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
