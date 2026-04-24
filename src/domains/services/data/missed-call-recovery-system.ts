import { Clock, Phone, Search } from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'missed-call-recovery-system';

export const missedCallRecoverySystemPage = {
    slug,
    seo: buildServiceSeo({
    slug,
    title: 'Missed Call Recovery for Service Businesses | MindWP',
    description:
      'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
  }),
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'lead-response-time'],
    badge: "Missed Call Recovery",
    category: 'Lead Protection Systems',
    hero: {
    badge: 'Missed Call Recovery',
    title: 'The Phone Rang. Nobody Was Free.',
    description:
      'Mid-job. On another call. Driving. The person calling needed something done. Got voicemail. Tried the next name on Google. That one picked up.',
    list: ["Gone", "No record", "No callback"],
    cssPrefix: 'missed-call-recovery-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
    sections: {
    foundation: {
      badge: 'What actually happens',
      title: "A missed call isn't a missed call. It's a job that went somewhere else.",
      description: 'They called. Silence. Gone.',
      painPoints: [
        {
          before: 'Voicemail. Ten minutes. Next business on the list.',
          after:
            'Text back within seconds. They know someone noticed. Enough time for a proper follow-up.',
        },
        {
          before: 'End of the day. Missed call on the screen. No name. No idea what they wanted.',
          after:
            'Name, reason, time \u2014 captured at the point of the miss. Callback starts with context.',
        },
        {
          before:
            'Friday evening. Burst pipe. They called. You were done for the week. Gone by Monday.',
          after: 'After-hours calls caught and queued. Monday starts with a list, not a blank.',
        },
      ],
    },
    signalSection: {
      badge: 'Where this hits hardest',
      title: 'Businesses where a phone call means real money',
      description:
        "If your customers call before they buy, every missed one is a job you'll never know about.",
    },
    signalCards: [
      {
        icon: Phone,
        title: 'On-site or mid-job',
        description:
          "The team can't answer because they're doing the work. Calls stack up. By the time anyone checks, the caller hired someone else.",
        iconType: 'primary' as const,
      },
      {
        icon: Clock,
        title: 'Evenings and weekends',
        description:
          "People search and call outside office hours. If nobody responds until Monday, Friday night's urgent job is long gone.",
        iconType: 'accent' as const,
      },
      {
        icon: Search,
        title: 'Local, high-intent callers',
        description:
          'Someone nearby needs a job done now. They call three businesses. The one that answers gets the work.',
        iconType: 'secondary' as const,
      },
    ],
    workflowExamples: {
      badge: 'What recovery looks like',
      title: 'Three situations. What happens when calls get caught.',
      description: 'Not complicated. Text goes out. Details captured. The right person follows up.',
      items: [
        {
          trigger: 'Someone calls at 8pm on a Wednesday. Nobody in the office.',
          actions: [
            "Text goes back — thanks for calling, we'll be in touch first thing",
            'Caller details and reason captured',
            'Queued as first follow-up for Thursday morning',
            'Team sees it with context before they pick up the phone',
          ],
        },
        {
          trigger: 'Three calls missed in an hour because the team is on a job.',
          actions: [
            'Each caller gets a text within seconds',
            'Urgent ones flagged separately from general enquiries',
            'All three queued with details attached',
            'Team works through them in priority order when free',
          ],
        },
        {
          trigger: "A caller wants to book something but can't get through.",
          actions: [
            'Text back with a link to book or leave details',
            'Key information collected without a live conversation',
            'Booking request handed to whoever manages the calendar',
            'Caller gets confirmation instead of silence',
          ],
        },
      ],
    },
    processSection: {
      badge: 'How it runs',
      title: 'What happens between the missed call and the follow-up',
      description: 'Four steps. No waiting for someone to notice.',
      steps: [
        {
          number: '1',
          title: 'Call comes in, nobody picks up',
          description:
            "The miss is detected. Doesn't matter if it was after hours, mid-job, or on another line. Recovery starts immediately.",
        },
        {
          number: '2',
          title: 'Text goes back to the caller',
          description:
            'Within seconds. Not generic. They know they called a real business and someone noticed.',
        },
        {
          number: '3',
          title: 'Details captured and queued',
          description: 'Who called, when, what they need. Visible to the team before the callback.',
        },
        {
          number: '4',
          title: 'The right person follows up',
          description:
            'With context. Not "I think you called us?" Picks up where the caller left off.',
        },
      ],
    },
    recoveryLayer: {
      badge: 'What it covers',
      title: 'Three things that happen after a miss',
      description:
        'Not a phone-answering setup. Just the part between "nobody picked up" and "someone followed up."',
      cards: [
        {
          title: 'The caller hears back immediately',
          description: "Phone rings. Nobody picks up. Text lands. They know someone's there.",
          points: [
            'Text fires within seconds of the miss',
            'Buys time for someone real to follow up',
          ],
          featured: true,
        },
        {
          title: 'Caller replies. Details land somewhere useful.',
          description:
            'They text back: blocked drain, free after 3pm. That goes into a follow-up list. Urgent ones surface first.',
          points: ['Name and job type pulled from the reply', 'Emergencies flagged separately'],
        },
        {
          title: 'It reaches someone who can act',
          description:
            'Routed to whoever handles that type of job. Details attached. Connects into booking or CRM if those exist.',
          points: ['Right person or booking path', 'Keeps moving until someone owns it'],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        "If unanswered calls are costing you jobs, this fixes that. If they're not, start somewhere else.",
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Most of your work starts with a phone call',
          description:
            'Customers still call before they book. Each unanswered call can be a real job, but your team cannot always get to the phone in time.',
        },
        {
          title: 'Your team is often unavailable during working hours',
          description:
            "On-site, with a customer, between appointments. Good calls come in while everyone's busy. Those callers don't wait.",
        },
        {
          title: 'You want to fix the most obvious leak first',
          description:
            "Before anything else — the unanswered calls. That's the clearest money walking out the door.",
        },
      ],
      notDesignedItems: [
        {
          title: "Your customers don't really call",
          description:
            "If everything comes through forms or messages, missed calls aren't the problem. Start with the channel your customers actually use.",
        },
        {
          title: 'You think the text alone does it',
          description:
            "The text buys a minute. What matters is capturing what they need and getting someone real back to them. Without that, it's a dead end.",
        },
        {
          title: "People aren't finding you yet",
          description:
            "If call volume is low because nobody knows you exist, recovering the few that come in won't change much. Get visible first.",
        },
      ],
    },
    comparison: {
      header: {
        title: 'What happens without recovery vs with it',
        description:
          'Most businesses treat missed calls as bad luck. The difference is whether those callers come back or not.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'No recovery in place',
          items: [
            'Caller gets silence. Rings the next one. Gone before anyone knows they tried.',
            'After-hours calls vanish. Monday morning — nothing. No names, no numbers.',
            'Callbacks happen when someone remembers. Hours later. Sometimes days. Cold by then.',
            'No way to know how many calls were missed or what they were worth.',
          ],
        },
        {
          type: 'after' as const,
          title: 'Recovery running',
          items: [
            'Text goes out within seconds. Caller knows they were heard.',
            'After-hours calls caught and queued. First job next morning.',
            'Name, number, what they need — captured. Callback starts warm.',
            "Every missed call tracked. You see what came back and what didn't.",
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What changed for a plumbing company',
        description:
          'Three-man operation. Busy. Phone ringing constantly. Nobody free to pick it up half the time.',
      },
      cards: [
        {
          title: 'Before: ringing out, every day',
          description:
            'Fifteen to twenty missed calls a week. All three on jobs. Phone ringing in the van, on the counter, in a pocket nobody could reach.',
          points: [
            "Voicemail. Most didn't leave a message. Tried the next plumber.",
            'Weekend emergencies — burst pipes, boilers — gone before Monday. Someone else already there.',
            "The owner knew he was losing work. Couldn't say how much. Just a feeling.",
          ],
        },
        {
          title: 'What we set up: text-back with detail capture',
          description:
            'Every missed call triggered a text within seconds. Caller could reply with what they needed. Details landed in a queue the team checked between jobs.',
          points: [
            'Missed call fires a text. Caller knows the business exists.',
            'Reply captures the job — leak, boiler, blocked drain — and urgency. Queue fills itself.',
            'Team sees the callback queue in priority order instead of working from memory.',
          ],
          featured: true,
        },
        {
          title: "After: jobs recovered that would've gone elsewhere",
          description:
            "First month, eleven jobs came back that would've gone. Three were emergencies. Rest were quotes that converted within a week.",
          points: [
            'Eleven jobs. Three emergencies. The rest were quote requests that actually closed.',
            'Weekends stopped being a black hole. Monday had a list.',
            'Owner could finally see what was coming in, what was missed, and what happened after. First time he had that.',
          ],
        },
        {
          title: 'What changed operationally after that first month',
          description:
            'The team stopped treating missed calls like bad luck and started working from a visible queue with urgency and callback context attached.',
          points: [
            'Callback priority became obvious instead of whoever remembered first.',
            'Urgent work surfaced separately from routine quote requests.',
            'Recovered call value became measurable instead of a guess.',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about missed call recovery',
      description: 'What business owners ask before deciding.',
      faqs: [
        {
          question: 'Does this need AI or a full phone answering setup?',
          answer:
            'No. Handles what happens after the miss — the text, the capture, the handoff. Works alone or next to something bigger.',
        },
        {
          question: 'Is this only for emergency-type businesses?',
          answer:
            "Helps most where calls carry real intent. Trades, clinics, professional services — anywhere a missed call could be a job that won't wait.",
        },
        {
          question: "How's this different from booking or scheduling?",
          answer:
            "Booking handles people already trying to pick a time. This catches people who couldn't get through at all. Earlier in the chain.",
        },
        {
          question: 'What if the caller texts back?',
          answer:
            'Their reply gets captured and added to the follow-up queue. Team sees it and picks it up. Nothing lost between the text and the callback.',
        },
      ],
      cssPrefix: 'missed-call-recovery-faq',
    },
  },
    inlineCta: {
    title: 'Want to see where missed-call leakage is actually happening first?',
    description:
      'We look at when calls are missed, what callers hear back, and which enquiries are most likely to disappear before someone follows up so you can see where recovery needs to start.',
  },
    cta: {
    title: 'Get a clear missed-call recovery priority before you change the stack',
    description:
      'We review current call handling, response delay, and after-hours gaps so you leave with the highest-risk missed-call points, the first recovery fixes to make, and whether a larger communication system is actually needed.',
  }
} satisfies ServicePageData;
