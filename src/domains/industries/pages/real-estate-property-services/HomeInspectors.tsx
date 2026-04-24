import {
    CalendarRange,
    ClipboardCheck,
    FileCheck2,
    Hammer,
    HardHat,
    MessageSquare,
    PhoneCall,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHomeInspectorsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Home Inspectors',
        title: 'The Agent Needed Someone Booked For Thursday. You Replied Friday Morning. Thursday Was Already Inspected.',
        description:
            'Inspections live inside somebody else\'s deadline, not yours. The agent needs someone booked this week, the buyer needs the report before the next step in the purchase, and the inspector who confirms today usually gets the work before tomorrow even has a chance.',
        list: ['Missed deadlines', 'Slow replies', 'Lost slots'],
        cssPrefix: 'home-inspectors-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Inspections Get Lost',
        title: 'You are not competing on price. You are competing on calendar.',
        description:
            'Most inspection work is decided inside a short booking window. If you cannot confirm quickly, the buyer and agent usually move on fast because the rest of the transaction is already waiting behind them.',
        benefits: [
            {
                icon: CalendarRange,
                title: 'The booking window was three days. The reply took four.',
                description: 'They needed the inspection booked before the end of the week so the deal could keep moving. By the time you came back with availability, the agent had already used someone else who replied the same morning and gave them a clear slot.',
                iconType: 'primary' as const,
            },
            {
                icon: PhoneCall,
                title: 'The agent rang. You were on a roof.',
                description: 'You could not pick up because you were on site and could not safely stop. They kept working down their list because they needed an answer now, and by the time you came down at 3pm the booking had already gone.',
                iconType: 'secondary' as const,
            },
            {
                icon: FileCheck2,
                title: 'The report went out. The agent never got an update.',
                description: 'They were already coordinating the buyer, lender, and vendor and needed to know where things stood. Silence from you after the report made the whole process feel harder than it needed to be, and that is when repeat referrals start slipping away.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The handoffs between agent, buyer, and inspector that decide repeat work',
        description: 'These are the small coordination steps between agent, buyer, and inspector that decide whether you stay in the agent\'s rotation. When they are handled well, a one-off booking is much more likely to turn into repeat work.',
        workflows: [
            {
                trigger: 'An agent asks for a slot inside this week.',
                actions: [
                    'They get a confirmed availability inside the hour',
                    'A booking link offers two specific slots, not "let me check"',
                    'The agent stops working down their list',
                ],
            },
            {
                trigger: 'You are mid-inspection and a new enquiry rings.',
                actions: [
                    'A short SMS goes back automatically — "in an inspection, calling at 4"',
                    'The lead is held instead of going cold',
                    'You see context before you ring back',
                ],
            },
            {
                trigger: 'A report has just been sent to the buyer.',
                actions: [
                    'The agent gets a short status note the same day',
                    'Any major findings are flagged plainly',
                    'The agent has what they need before the buyer rings them',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'home-inspectors-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Be the inspector who confirmed first, and the one the agent calls again next time',
        description: 'You stay focused on doing the inspection properly. The booking window, the on-site missed call, and the follow-up that keeps the agent informed stop depending on you being near the phone at exactly the right moment.',
        featureCategories: [
            {
                title: 'Confirm availability inside the hour',
                description: 'Agent enquiries get specific slot offers instead of "let me get back to you" because that delay is usually where the booking disappears. A clear slot inside the hour helps hold the job before they move down their list.',
                icon: CalendarRange,
                features: [
                    'Same-hour availability response',
                    'Two named slots offered, not vague',
                    'Booking confirmed without a second email',
                ],
            },
            {
                title: 'Hold the call when you are on site',
                description: 'Missed calls during an inspection get a short, named auto-reply with a callback time, so the agent knows they have actually reached someone. The lead does not go cold just because you were on site when it came in.',
                icon: PhoneCall,
                features: [
                    'Missed-call text-back during inspections',
                    'Named callback window',
                    'Context captured before you ring back',
                ],
            },
            {
                title: 'Keep the agent in the loop',
                description: 'Status updates go out automatically when the booking, inspection, and report each move forward. That helps the agent coordinate the buyer and the rest of the chain without having to keep chasing you for basic visibility.',
                icon: ClipboardCheck,
                features: [
                    'Auto-update on booking confirmed',
                    'Auto-update on inspection complete',
                    'Auto-update on report delivered',
                ],
            },
            {
                title: 'Turn finished reports into reviews',
                description: 'A review request goes out after the report lands, when the buyer or agent is most relieved that the deadline has been met and the report is in hand. That makes the review ask feel more natural and timely.',
                icon: ShieldCheck,
                features: [
                    'Review request after report delivery',
                    'Asked once, at the right moment',
                    'Reviews where local agents actually look',
                ],
            },
            {
                title: 'Be findable for the area you actually cover',
                description: 'Your pages and Google profile line up around postcode and inspection type so urgent agents and buyers find you quickly for the exact work you cover. That reduces time lost on generic enquiries and makes the right bookings easier to win.',
                icon: Search,
                features: [
                    'Found for area + inspection type',
                    'Pages that read as a specialist',
                    'Less time on enquiries outside your area',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'These are the supporting services that come up most often once an inspector sees how much hinges on calendar speed and clean coordination. They reinforce booking response, visibility, proof, and follow-up from different sides.',
        cards: [
            {
                icon: HardHat,
                title: 'Smart Website Systems',
                description: 'Helps you confirm availability the same hour, even when you are on site and cannot stop to manage the booking manually.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ClipboardCheck,
                title: 'CRM & Coordination Automation',
                description: 'Keeps agents and buyers in the loop without extra calls so the whole chain has clearer visibility around the booking and report.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Gets reviews from delivered reports in the places referring agents and future buyers actually check when choosing who to trust.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps you show up as the inspector for the area and job type, not just another name on a list when time is already tight.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things home inspectors usually ask',
        description: 'These are the practical questions that usually come up in a calendar-driven, on-site week where deadlines are tight and coordination matters. Straight answers based on that reality.',
        faqs: [
            {
                question: 'I am on inspections all day. Who is replying inside the hour?',
                answer:
                    'You are not. A short, personal-feeling reply goes out automatically with a booking link offering two specific slots. The agent gets confirmation without you stopping work.',
            },
            {
                question: 'Will agents feel they are getting an automated response?',
                answer:
                    'No. The first message is short, named, and confirms a callback time. The aim is to hold the booking, not to seem clever.',
            },
            {
                question: 'Can it handle different inspection types and durations?',
                answer:
                    'Yes. Slot length and pricing can flex by inspection type so the agent gets the right window from the start.',
            },
            {
                question: 'What about agents who used me once and never again?',
                answer:
                    'Most of those went quiet because they got no status updates. Adding the auto-updates on booking, inspection, and delivery usually brings them back.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The leak is in the booking window and the silence after the report, not the homepage.',
            },
        ],
    };

    return {
        slug: 'home-inspectors',
        industries: ['home-inspection'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-response-time', 'booking-systems', 'follow-up'],
        type: 'detail',
        parentSlug: 'real-estate-property-services',
        seo: {
            title: 'Home Inspectors — Win The Booking Window, Keep The Referring Agent | MindWP',
            description:
                'For home inspectors where the booking window is short, agents need confirmation today, and silence after the report costs the next referral. We put same-hour availability, on-site missed-call handling, and status updates in place.',
            canonical: '/industries/real-estate-property-services/home-inspectors',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        workflowExamples: workflowExamplesData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the booking window is closing on you',
            description:
                'If agent enquiries are slipping before you can confirm a slot, or repeat agents are quietly calling somebody else next time, walk us through the last few weeks and we will show you where the calendar is actually slipping.',
        },
    };
}

export const homeInspectorsIndustryPageData: IndustryPageData = buildHomeInspectorsIndustryPageData();
