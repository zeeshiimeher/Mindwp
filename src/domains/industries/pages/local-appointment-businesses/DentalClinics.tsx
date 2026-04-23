import {
    Bell,
    CalendarX,
    ClipboardList,
    HeartPulse,
    MessageSquare,
    Search,
    ShieldCheck,
    Stethoscope,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDentalClinicsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Dental Clinics',
        title: 'The Treatment Plan Was Agreed In April. The Chair Has Been Empty Since.',
        description:
            'Most dental clinics do not lose growth at the front door. They lose it in the middle. Recalls go out and get ignored. Treatment plans get postponed. The patients who need you most are the ones who quietly avoid the next appointment.',
        list: ['Missed recalls', 'Treatment drop-off', 'Avoidance', 'Postponed plans'],
        cssPrefix: 'dental-clinics-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Treatment Drops Off',
        title: 'The recall list is long. The reasons for ignoring it are personal.',
        benefits: [
            {
                icon: CalendarX,
                title: 'The recall went out and got buried',
                description: 'A single email six months later is easy to ignore. Especially by the patients who least want to come.',
                iconType: 'primary' as const,
            },
            {
                icon: ClipboardList,
                title: 'Agreed treatment quietly stalls',
                description: 'They said yes in the chair. Life happened. Nobody followed up gently.',
                iconType: 'secondary' as const,
            },
            {
                icon: HeartPulse,
                title: 'Avoidance gets confused with disinterest',
                description: 'The patients you most need to see are the ones most likely to delay. Cold reminders push them further away.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'A Recall Cycle, Two Ways',
        title: 'Same patient list. Two very different outcomes.',
        description: 'The difference is not effort. It is whether the messages meet the patient where they actually are.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'How recall usually runs',
                items: [
                    'One email six months later. Marked unread. Forgotten.',
                    'Treatment plan postponed in May, never mentioned again.',
                    'Anxious patients put it off and get put in the "lapsed" bucket.',
                    'Reception spends afternoons chasing the same names with the same script.',
                ],
            },
            {
                type: 'after' as const,
                title: 'How recall runs after',
                items: [
                    'A short, warm reminder, then a follow-up if there is silence.',
                    'Treatment plans get a gentle nudge at sensible intervals.',
                    'Anxious patients get a softer tone, with a small first step on offer.',
                    'Reception sees who is warm, who has booked, and who needs a human call.',
                ],
            },
        ],
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Recall and treatment follow-up that actually meets patients where they are',
        description: 'The clinical work is yours. The bit that decides whether the chair fills next month stops depending on memory.',
        featureCategories: [
            {
                title: 'Make recall something patients actually open',
                description: 'Short, warm, written like a real person. Then a gentle second nudge if needed.',
                icon: Bell,
                features: [
                    'Two-touch recall, not one-and-done',
                    'Tone tuned for anxious patients',
                    'Stops the moment they book',
                ],
            },
            {
                title: 'Hold the treatment plan that paused',
                description: 'A polite check-in at sensible intervals so agreed work does not just disappear.',
                icon: ClipboardList,
                features: [
                    'Plan-specific follow-up cadence',
                    'Reception sees stalled plans in one place',
                    'Easy way for the patient to take a smaller next step',
                ],
            },
            {
                title: 'Catch the new patient enquiry warmly',
                description: 'A first reply that reassures, captures the reason, and leads to a short consult.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back',
                    'Enquiries captured with reason and urgency',
                    'Triage notes ready for the clinician',
                ],
            },
            {
                title: 'Build the trust the brochure cannot',
                description: 'A steady flow of recent reviews so Google looks the way the clinic actually feels.',
                icon: ShieldCheck,
                features: [
                    'Review request at the right moment',
                    'Replies handled with the right tone',
                    'Reviews stack where local patients look',
                ],
            },
            {
                title: 'Show up when local patients search',
                description: 'Pages and Google profile lined up for treatment + area, not generic dentistry.',
                icon: Search,
                features: [
                    'Found on Maps for treatment + area',
                    'Pages that match real patient questions',
                    'Clinician profiles that build confidence',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for dental clinics.',
        cards: [
            {
                icon: Bell,
                title: 'CRM & Recall Automation',
                description: 'Two-touch recall and treatment follow-up that runs itself.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Stethoscope,
                title: 'Smart Website Systems',
                description: 'Pages and replies that read warm, not clinical-cold.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'A steady flow of recent reviews patients actually read.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Show up for treatment + area, not generic dentistry.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things dental clinics usually ask',
        description: 'Honest answers about how this fits a careful, clinical setting.',
        faqs: [
            {
                question: 'How is this different from the recall our practice software already does?',
                answer:
                    'Most practice software sends one reminder and stops. This adds a gentle second touch and a plan-specific cadence, in a tone patients actually open.',
            },
            {
                question: 'We have anxious patients. Will more messages make it worse?',
                answer:
                    'Used carefully, no. The tone is softer for nervous patients, and the second nudge offers a smaller first step rather than a full appointment.',
            },
            {
                question: 'Does it integrate with our practice management system?',
                answer:
                    'It can sit alongside it. Recall lists feed in, bookings feed back. Clinical records stay where they belong.',
            },
            {
                question: 'How long until the chair starts to fill?',
                answer:
                    'Recall and stalled-plan follow-up tend to bring patients back inside the first month, because most had simply put it off.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. We start with the recall and treatment-plan gap, because that is where most clinics quietly lose growth.',
            },
        ],
    };

    return {
        slug: 'dental-clinics',
        industries: ['dental-clinic'],
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'review-generation', 'booking-systems'],
        type: 'detail',
        parentSlug: 'local-appointment-businesses',
        seo: {
            title: 'Dental Clinics — Fix Recall And Treatment Drop-Off, Not Just New Patients | MindWP',
            description:
                'For dental clinics where the recall list is long and treatment plans quietly stall. We put two-touch recall, plan follow-up, and warmer first replies in place so the chair fills from the patients you already have.',
            keywords: [
                'dental clinic recall system',
                'dental clinic treatment follow-up',
                'dental clinic crm',
                'dental clinic reputation management',
                'dental clinic local seo',
            ],
            canonical: '/industries/local-appointment-businesses/dental-clinics',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        comparison: comparisonData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where treatment is dropping off',
            description:
                'If recall goes out but the chair stays empty, or agreed treatment quietly stalls, walk us through how the month runs and we will show you the first thing worth fixing.',
        },
    };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
