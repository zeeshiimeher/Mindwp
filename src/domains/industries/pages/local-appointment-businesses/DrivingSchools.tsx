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
            'Most driving school enquiries do not vanish in a flash. They drift. The learner asks, gets a price, says they will think about it, and the diary never hears from them again.',
        list: ['Saved-not-booked', 'Quiet drift', 'Compared quotes', 'No follow-up'],
        cssPrefix: 'driving-schools-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Learners Hesitate',
        title: 'It is rarely a no. It is a soft maybe that nobody nudges.',
        benefits: [
            {
                icon: Car,
                title: 'They ask, then go quiet',
                description: 'A learner DMs about a first lesson. You reply. They read it. Two weeks pass.',
                iconType: 'primary' as const,
            },
            {
                icon: CalendarClock,
                title: '"I\'ll book next week" never lands',
                description: 'They mean it. Then work, college, life. The intent fades and nobody reminds them.',
                iconType: 'secondary' as const,
            },
            {
                icon: HandCoins,
                title: 'They are quietly comparing three schools',
                description: 'You are one of three tabs open. Whoever stays present wins, not whoever is cheapest.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'Why The Diary Stays Patchy',
        title: 'A learner who hesitates is not a learner who said no',
        description: 'The gap between an enquiry and a first lesson is where most schools quietly leak income.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'Without follow-up',
                items: [
                    'Enquiry comes in Tuesday. You reply. Silence.',
                    'Nobody knows whether they booked elsewhere or just paused.',
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
        description: 'You stay focused on lessons. The follow-up keeps running underneath.',
        featureCategories: [
            {
                title: 'Hold every enquiry from the first message',
                description: 'Web forms, DMs, and missed calls land in one place with the learner and the request noted.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back inside a minute',
                    'Enquiries captured with name, area, goal',
                    'You can see who is new and who is warming up',
                ],
            },
            {
                title: 'Bring the soft maybes back',
                description: 'Short, written-like-you nudges over a couple of weeks so hesitant learners do not just drift.',
                icon: Workflow,
                features: [
                    'Day 2 and day 7 follow-ups out of the box',
                    'Stops the moment they reply or book',
                    'Different tone for first lesson vs intensive',
                ],
            },
            {
                title: 'Make booking the easy bit',
                description: 'A link beats text tag. They pick a slot and a reminder fires the day before.',
                icon: Calendar,
                features: [
                    'Self-serve slot picking',
                    'Confirmations and day-before reminders',
                    'You see the week at a glance',
                ],
            },
            {
                title: 'Turn passes into proof',
                description: 'A review ask at the right moment so the work shows up on Google.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered after a pass',
                    'Asked when the learner is happiest',
                    'Reviews stack where local learners search',
                ],
            },
            {
                title: 'Show up when local learners look',
                description: 'Pages and Google profile lined up so you appear for area and lesson type.',
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
        description: 'Honest answers about how this fits into a busy instructor diary.',
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
                'If enquiries come in fine but never seem to turn into a first lesson, walk us through how a typical week runs and we will show you the first thing worth fixing.',
        },
    };
}

export const drivingSchoolsIndustryPageData: IndustryPageData = buildDrivingSchoolsIndustryPageData();
