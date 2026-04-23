import {
    Calendar,
    Car,
    CalendarClock,
    HandCoins,
    MessageSquare,
    Search,
    ShieldCheck,
    Star,
    Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDrivingSchoolsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Driving Schools',
        title: 'Tuesday Enquiry. "I\'ll Book Next Week." Six Weeks Later, Nothing.',
        description:
            'Most driving school enquiries do not disappear dramatically. A learner asks if you have a slot this week or before their test date, the reply comes later than they hoped, and the diary never hears back because they booked wherever availability looked clearer.',
        list: ['Test dates', 'Late replies', 'No follow-up'],
        cssPrefix: 'driving-schools-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Learners Hesitate',
        title: 'It is rarely a no. It is a soft maybe that nobody nudges.',
        description:
            'Most learners do not reject a driving school outright. They ask about lessons, compare availability, think about test timing, and then drift if nobody gives them a clear next step while the intent is still there.',
        benefits: [
            {
                icon: Car,
                title: 'They ask, then go quiet',
                description: 'A learner DMs about a first lesson or asks if you have anything this week. You reply later that evening or the next day, they read it, and then the conversation slows because another instructor already offered a clearer slot.',
                iconType: 'primary' as const,
            },
            {
                icon: CalendarClock,
                title: '"I\'ll book next week" never lands',
                description: 'They usually mean it when they say they will book next week, especially if a test date is coming up. Then work, college, life, and nerves take over, and the intent fades because nobody nudged them while it still mattered.',
                iconType: 'secondary' as const,
            },
            {
                icon: HandCoins,
                title: 'They are quietly comparing three schools',
                description: 'You are one of three tabs open while they compare lesson prices, instructor feel, and who can actually fit them in before their test. The booking usually goes to the school that stayed present and made availability easiest to understand.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'Why The Diary Stays Patchy',
        title: 'A learner who hesitates is not a learner who said no',
        description:
            'The gap between the first enquiry and the first lesson is where most driving schools quietly lose bookings. It is usually not about price alone. It is about timing, clarity, and whether anyone followed up after the first message.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'Without follow-up',
                items: [
                    'Enquiry comes in Tuesday. You reply. Silence.',
                    'Nobody knows whether they took another slot or just paused.',
                    'Past learners who stopped at lesson five are never nudged.',
                    'Test-pass moments come and go without a review ask.',
                ],
            },
            {
                type: 'after' as const,
                title: 'With gentle, scheduled nudges',
                items: [
                    'A short follow-up lands two days later. Then a week later. Polite, not pushy.',
                    'You can see who is warm, who has gone cold, who is ready to book.',
                    'Past learners get a nudge before the next test cycle.',
                    'A pass triggers a review request when the learner is happiest.',
                ],
            },
        ],
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Quiet, repeatable nudges so the soft maybes turn into booked lessons',
        description:
            'You stay focused on lessons, test prep, and the diary you already have. The follow-up and booking clarity keep running underneath so interested learners do not drift just because you were teaching when they asked.',
        featureCategories: [
            {
                title: 'Hold every enquiry from the first message',
                description: 'Web forms, DMs, and missed calls land in one place with the learner, their area, and what they are asking for noted straight away. That matters most when the question is really about availability this week or before a test date.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back inside a minute',
                    'Enquiries captured with name, area, goal',
                    'You can see who is new and who is warming up',
                ],
            },
            {
                title: 'Bring the soft maybes back',
                description: 'Short nudges written like you would actually send them go out over a couple of weeks so hesitant learners do not just drift. That is especially useful for people waiting to sort money, confidence, or the right test timing.',
                icon: Workflow,
                features: [
                    'Day 2 and day 7 follow-ups out of the box',
                    'Stops the moment they reply or book',
                    'Different tone for first lesson vs intensive',
                ],
            },
            {
                title: 'Make booking the easy bit',
                description: 'A real booking link beats three rounds of "what times do you have?" every time. They can pick a slot, see what is actually available, and get the reminder before the lesson is forgotten or double-booked.',
                icon: Calendar,
                features: [
                    'Self-serve slot picking',
                    'Confirmations and day-before reminders',
                    'You see the week at a glance',
                ],
            },
            {
                title: 'Turn passes into proof',
                description: 'A review ask goes out at the right moment after a pass so the work actually shows up on Google. That matters because new learners often compare local schools by proof before they ever send the first message.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered after a pass',
                    'Asked when the learner is happiest',
                    'Reviews stack where local learners search',
                ],
            },
            {
                title: 'Show up when local learners look',
                description: 'Your pages and Google profile line up around the area, lesson type, and instructor intent people actually search for. That makes it easier to get found by learners who are already checking who has space soon.',
                icon: Search,
                features: [
                    'Found on Maps for the work you do',
                    'Pages that match real searches',
                    'Local area coverage that is visible',
                ],
            },
        ],
        columns: 3 as const,
    };

    const faqData = {
        title: 'Things driving schools usually ask',
        description:
            'These are the practical questions that usually come up in a busy instructor diary where availability changes fast and the booking can go quiet just as fast. Straight answers, written around that reality.',
        faqs: [
            {
                question: 'Is this just chasing learners until they get annoyed?',
                answer:
                    'No. Two short, polite nudges spread over a couple of weeks. The moment they reply or book, the follow-up stops.',
            },
            {
                question: 'Will the messages feel automated?',
                answer:
                    'They are written like you would actually text someone. Short. First-name. No marketing voice.',
            },
            {
                question: 'I am in the car all day. Who runs this?',
                answer:
                    'It runs itself. You see who is warm and who has booked. You only step in when you want to.',
            },
            {
                question: 'What about learners who stopped at lesson five?',
                answer:
                    'They get a quiet nudge before the next test cycle. Most schools find a real chunk of their diary refills from this alone.',
            },
            {
                question: 'Do I need a new website for this?',
                answer:
                    'Usually not. The leak is almost always in what happens after the form, not the form itself.',
            },
        ],
    };

    return {
        slug: 'driving-schools',
        industries: ['driving-school'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'local-seo-authority',
            'reputation-review',
        ],
        topics: ['follow-up', 'booking-systems', 'review-generation'],
        type: 'detail',
        parentSlug: 'local-appointment-businesses',
        seo: {
            title: 'Driving Schools — Turn "I\'ll Book Next Week" Into Booked Lessons | MindWP',
            description:
                'For driving schools where enquiries drift instead of booking. We put gentle, scheduled follow-up, easy booking, and review prompts in place so the soft maybes land.',
            keywords: [
                'driving school enquiry follow-up',
                'driving school booking system',
                'driving school lead nurture',
                'driving school local seo',
                'driving school reputation system',
            ],
            canonical: '/industries/local-appointment-businesses/driving-schools',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        comparison: comparisonData,
        systemLayers: systemLayersData,
        faq: faqData,
        cta: {
            title: 'Tell us where the diary leaks',
            description:
                'If learners ask about slots or test-date lessons but never seem to turn into a first booking, walk us through how a typical week runs and we will show you the first thing worth fixing.',
        },
    };
}

export const drivingSchoolsIndustryPageData: IndustryPageData = buildDrivingSchoolsIndustryPageData();
