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
            'Inspections live inside someone else\'s deadline. The agent needs a slot before the survey window closes. The buyer needs the report before the lender pulls. The inspector who confirms today gets the booking. The one who replies tomorrow gets nothing.',
        list: ['Window missed', 'Slow reply', 'Cold agent', 'Lost slot'],
        cssPrefix: 'home-inspectors-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Inspections Get Lost',
        title: 'You are not competing on price. You are competing on calendar.',
        benefits: [
            {
                icon: CalendarRange,
                title: 'The booking window was three days. The reply took four.',
                description: 'By the time you came back with availability, the agent had already used somebody else who answered the same morning.',
                iconType: 'primary' as const,
            },
            {
                icon: PhoneCall,
                title: 'The agent rang. You were on a roof.',
                description: 'You could not pick up. They moved down their list. You found out when you came down at 3pm.',
                iconType: 'secondary' as const,
            },
            {
                icon: FileCheck2,
                title: 'The report went out. The agent never got an update.',
                description: 'They were chasing the lender, the buyer, and the vendor. Silence from you made them stop recommending you.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The handoffs between agent, buyer, and inspector that decide repeat work',
        description: 'Tiny coordination steps that, when handled, turn a one-off into a referring agent.',
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
        description: 'You stay focused on the inspection. The booking window and the agent relationship stop depending on you being near a phone.',
        featureCategories: [
            {
                title: 'Confirm availability inside the hour',
                description: 'Agent enquiries get specific slot offers, not "let me get back to you". The booking is held before they move down their list.',
                icon: CalendarRange,
                features: [
                    'Same-hour availability response',
                    'Two named slots offered, not vague',
                    'Booking confirmed without a second email',
                ],
            },
            {
                title: 'Hold the call when you are on site',
                description: 'Missed calls during an inspection get a short, named auto-reply with a callback time. The lead does not go cold while you are on a roof.',
                icon: PhoneCall,
                features: [
                    'Missed-call text-back during inspections',
                    'Named callback window',
                    'Context captured before you ring back',
                ],
            },
            {
                title: 'Keep the agent in the loop',
                description: 'Status updates fire automatically when the booking, inspection, and report each move. The referring agent stops chasing.',
                icon: ClipboardCheck,
                features: [
                    'Auto-update on booking confirmed',
                    'Auto-update on inspection complete',
                    'Auto-update on report delivered',
                ],
            },
            {
                title: 'Turn finished reports into reviews',
                description: 'A review request after the report lands, when the buyer or agent is most relieved.',
                icon: ShieldCheck,
                features: [
                    'Review request after report delivery',
                    'Asked once, at the right moment',
                    'Reviews where local agents actually look',
                ],
            },
            {
                title: 'Be findable for the area you actually cover',
                description: 'Pages and Google profile lined up for postcode and inspection type, so urgent agents find you first.',
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
        description: 'The other parts that come up most often for home inspectors.',
        cards: [
            {
                icon: HardHat,
                title: 'Smart Website Systems',
                description: 'Confirm availability the same hour, even when you are on site.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ClipboardCheck,
                title: 'CRM & Coordination Automation',
                description: 'Keep agents and buyers in the loop without extra calls.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from delivered reports, where referring agents look.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the inspector for the area, not just a name on a list.',
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
        description: 'Honest answers about how this fits a calendar-driven, on-site week.',
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
            keywords: [
                'home inspector booking system',
                'home inspector lead response',
                'home inspector crm',
                'home inspector reputation system',
                'home inspector local seo',
            ],
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
                'If agent enquiries cool off before you can confirm, or referring agents quietly stop calling, walk us through the last few weeks and we will show you where the calendar is actually slipping.',
        },
    };
}

export const homeInspectorsIndustryPageData: IndustryPageData = buildHomeInspectorsIndustryPageData();
