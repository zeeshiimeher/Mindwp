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
            'Dental clinics usually carry two kinds of booking pressure at once: the person calling with pain who needs an answer quickly, and the routine patient or treatment-plan patient who keeps putting the next appointment off. Both get lost when the reply, booking step, or follow-up is too slow.',
        list: ['Pain calls', 'Missed recalls', 'Stalled plans'],
        cssPrefix: 'dental-clinics-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Treatment Drops Off',
        title: 'The recall list is long. The reasons for ignoring it are personal.',
        description:
            'Dental clinics usually deal with two very different behaviours at once. Pain enquiries need a quick answer because the person wants certainty today, while routine and agreed treatment often slip because the next booking feels easy to postpone.',
        benefits: [
            {
                icon: CalendarX,
                title: 'The recall went out and got buried',
                description: 'A single email six months later is easy to ignore, especially for the people who already do not love coming in. One reminder without any follow-up is rarely enough to turn intention into an actual booking.',
                iconType: 'primary' as const,
            },
            {
                icon: ClipboardList,
                title: 'Agreed treatment quietly stalls',
                description: 'They said yes in the chair, then life got busy, the cost needed thinking about, or they wanted to wait until after a holiday. Nobody followed up gently while the decision was still sitting there unfinished.',
                iconType: 'secondary' as const,
            },
            {
                icon: HeartPulse,
                title: 'Avoidance gets confused with disinterest',
                description: 'The people you most need to see are often the ones most likely to delay, especially if there is anxiety or discomfort involved. Cold reminders or slow booking replies usually push them further away instead of bringing them closer.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'A Recall Cycle, Two Ways',
        title: 'Same patient list. Two very different outcomes.',
        description:
            'The difference is not effort alone. It is whether the messages and booking steps match the way patients actually behave when they are in pain, anxious, busy, or quietly putting treatment off for another month.',
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
        description:
            'The clinical work stays entirely yours. What changes is that pain enquiries get answered more cleanly, routine booking gets easier, and follow-up on recalls or paused treatment stops depending on memory alone.',
        featureCategories: [
            {
                title: 'Make recall something patients actually open',
                description: 'Recall messages stay short, warm, and written like a real person instead of a generic reminder feed. Then a gentle second nudge goes out if needed, because one message alone rarely catches the people who keep postponing.',
                icon: Bell,
                features: [
                    'Two-touch recall, not one-and-done',
                    'Tone tuned for anxious patients',
                    'Stops the moment they book',
                ],
            },
            {
                title: 'Hold the treatment plan that paused',
                description: 'A polite check-in goes out at sensible intervals so agreed work does not simply disappear after the chair conversation. That matters most when the patient intended to book but needed more time and then went quiet.',
                icon: ClipboardList,
                features: [
                    'Plan-specific follow-up cadence',
                    'Reception sees stalled plans in one place',
                    'Easy way for the patient to take a smaller next step',
                ],
            },
            {
                title: 'Catch the new patient enquiry warmly',
                description: 'A first reply reassures, captures the reason for the enquiry, and makes the next step clear quickly enough for both pain cases and routine patients. That helps pain callers feel answered and routine enquiries feel easy to book without a long delay.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back',
                    'Enquiries captured with reason and urgency',
                    'Triage notes ready for the clinician',
                ],
            },
            {
                title: 'Build the trust the brochure cannot',
                description: 'A steady flow of recent reviews helps Google look the way the clinic actually feels when someone visits or calls. That matters for both the person in pain checking quickly and the routine patient taking longer to decide.',
                icon: ShieldCheck,
                features: [
                    'Review request at the right moment',
                    'Replies handled with the right tone',
                    'Reviews stack where local patients look',
                ],
            },
            {
                title: 'Show up when local patients search',
                description: 'Your pages and Google profile line up around treatment and area instead of generic dentistry alone. That makes it easier to show up for both urgent pain searches and slower treatment research without blurring the two together.',
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
        description:
            'These are the supporting services that come up most often once a clinic sees how much pain calls, recalls, and treatment plans all depend on better response and steadier follow-up. Each one strengthens a different part of that gap.',
        cards: [
            {
                icon: Bell,
                title: 'CRM & Recall Automation',
                description: 'Keeps two-touch recall and treatment follow-up moving so the chair is not left relying on one reminder and crossed fingers.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Stethoscope,
                title: 'Smart Website Systems',
                description: 'Helps pages and first replies read warm and clear, so pain enquiries and routine questions both feel handled properly from the start.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Builds a steady flow of recent reviews that patients actually read while deciding whether this clinic feels trustworthy enough to book.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps you show up for treatment and area searches with clearer intent, whether someone is looking for urgent help or planning a routine visit.',
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
        description:
            'These are the practical questions that usually come up in a careful clinical setting where pain calls, recalls, and treatment plans all behave differently. Straight answers, written for that mix.',
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
            seo: {
                title: 'Dental Clinics — Fix Recall And Treatment Drop-Off, Not Just New Patients | MindWP',
                description:
                    'For dental clinics where the recall list is long and treatment plans quietly stall. We put two-touch recall, plan follow-up, and warmer first replies in place so the chair fills from the patients you already have.',
                canonical: '/industries/local-appointment-businesses/dental-clinics',
            },
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
                    'If pain calls are being answered too slowly or routine treatment and recall keep slipping after the first conversation, walk us through how the month runs and we will show you the first thing worth fixing.',
            }
        };
}

export const dentalClinicsIndustryPageData: IndustryPageData = buildDentalClinicsIndustryPageData();
