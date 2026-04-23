import {
    Calendar,
    HeartPulse,
    Lock,
    MessageCircle,
    Search,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    UserCheck,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallPrivateClinicsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Small Private Clinics',
        title: 'They Sent The Enquiry. Read Your Reply Twice. Still Did Not Book.',
        description:
            'Most private clinic enquiries are not price problems. They are trust problems. The patient is quietly weighing risk, reading reviews, and waiting to feel safe enough to pick up the phone.',
        list: ['Quiet readers', 'Trust hesitation', 'Silent compare', 'Unbooked enquiries'],
        cssPrefix: 'small-private-clinics-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Patients Hold Back',
        title: 'They are not shopping price. They are checking whether you feel safe.',
        benefits: [
            {
                icon: HeartPulse,
                title: 'The first reply has to do reassurance, not just info',
                description: 'A clinical answer to a nervous question reads as cold. They quietly move on.',
                iconType: 'primary' as const,
            },
            {
                icon: Lock,
                title: 'Reviews are read more than the website',
                description: 'They look you up on Google before they ever ring. Thin reviews, thin trust.',
                iconType: 'secondary' as const,
            },
            {
                icon: UserCheck,
                title: 'They want to know who they will see',
                description: 'A name, a face, a tone. Anonymous brochure pages do not unlock the booking.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'Two Versions Of The Same Enquiry',
        title: 'Same patient. Two very different clinics. Only one gets booked.',
        description: 'The difference is rarely the treatment. It is what the patient feels in the gap between asking and booking.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'The hesitant journey',
                items: [
                    'Form sent. Generic reply 24 hours later. Tone reads as admin.',
                    'Reviews are sparse and old. They Google you and feel uncertain.',
                    'No clear next step. They are left to book themselves up to the courage.',
                    'No follow-up. The enquiry quietly dies inside a week.',
                ],
            },
            {
                type: 'after' as const,
                title: 'The reassured journey',
                items: [
                    'A short, warm reply lands quickly. It addresses the worry, not just the question.',
                    'Recent reviews are visible. The clinic feels lived-in and looked-after.',
                    'A clear way to book a short consultation, not a leap straight to treatment.',
                    'A gentle follow-up if they go quiet. No pressure. Just a door left open.',
                ],
            },
        ],
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Quiet trust signals from the first message to the booked consultation',
        description: 'The clinical work is yours. Everything around it stops feeling like admin.',
        featureCategories: [
            {
                title: 'Reply in a way that reassures',
                description: 'Templates that sound like a real person, not a portal.',
                icon: MessageCircle,
                features: [
                    'Warm first replies that address the worry',
                    'Captured details so reception is not asking twice',
                    'Triage notes in one place for the clinician',
                ],
            },
            {
                title: 'Make booking feel like a small step',
                description: 'A short consultation slot beats a treatment commitment for nervous patients.',
                icon: Calendar,
                features: [
                    'Self-serve consultation slots',
                    'Reminders so the appointment actually happens',
                    'You see the day at a glance',
                ],
            },
            {
                title: 'Build the trust the website cannot',
                description: 'A steady flow of recent reviews so Google looks the way the clinic actually feels.',
                icon: ShieldCheck,
                features: [
                    'Review request at the right moment',
                    'Replies handled with the right tone',
                    'Reviews stack where patients look',
                ],
            },
            {
                title: 'Hold the patient who went quiet',
                description: 'A short, polite follow-up if an enquiry stalls, then a graceful close.',
                icon: Sparkles,
                features: [
                    'Two gentle nudges, never more',
                    'Stops the moment they reply',
                    'Different tone for clinical vs cosmetic',
                ],
            },
            {
                title: 'Show up when local patients search',
                description: 'Pages and Google profile lined up for the treatments you actually offer.',
                icon: Search,
                features: [
                    'Found on Maps for treatment + area',
                    'Pages that match real questions',
                    'Clinician profiles that build confidence',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for small private clinics.',
        cards: [
            {
                icon: Stethoscope,
                title: 'Smart Website Systems',
                description: 'Pages and replies that read warm, not clinical-cold.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ShieldCheck,
                title: 'Reputation & Review Systems',
                description: 'A steady flow of recent reviews that match the clinic.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Calendar,
                title: 'Booking & Scheduling System',
                description: 'Make the first consultation a small, safe step.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Show up for treatment + area without paid noise.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things private clinics usually ask',
        description: 'Honest answers about how this fits a careful, clinical setting.',
        faqs: [
            {
                question: 'Will the messages feel too marketing?',
                answer:
                    'No. The tone is calm and human. The aim is to reassure a nervous patient, not to pitch.',
            },
            {
                question: 'Is automated follow-up appropriate for a clinical context?',
                answer:
                    'Used sparingly, yes. Two short, polite nudges if an enquiry goes quiet. The moment the patient replies, the follow-up stops.',
            },
            {
                question: 'How does this work alongside our practice software?',
                answer:
                    'It sits in front of it. Enquiries are caught, reassured, and booked. Clinical records stay where they belong.',
            },
            {
                question: 'We do not want pressure tactics.',
                answer:
                    'Neither do we. Nothing here pushes for urgency. The patient sets the pace.',
            },
            {
                question: 'Do we need a brand new website?',
                answer:
                    'Usually not. We start with the gap between enquiry and booking, because that is where most clinics quietly lose patients.',
            },
        ],
    };

    return {
        slug: 'small-private-clinics',
        industries: ['private-clinic'],
        systems: [
            'smart-website-systems',
            'reputation-review',
            'crm-automation',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'review-generation', 'booking-systems'],
        type: 'detail',
        parentSlug: 'local-appointment-businesses',
        seo: {
            title: 'Small Private Clinics — Turn Hesitant Enquiries Into Booked Consultations | MindWP',
            description:
                'For small private clinics where enquiries are warm but never seem to book. We help reply in a way that reassures, build the trust signals patients quietly check, and hold the door open without pressure.',
            keywords: [
                'private clinic enquiry follow-up',
                'private clinic booking system',
                'private clinic reputation management',
                'private clinic local seo',
                'private clinic patient acquisition',
            ],
            canonical: '/industries/local-appointment-businesses/small-private-clinics',
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
            title: 'Tell us where patients are hesitating',
            description:
                'If enquiries come in but rarely turn into a first consultation, walk us through the patient journey and we will show you where the trust gap actually is.',
        },
    };
}

export const smallPrivateClinicsIndustryPageData: IndustryPageData = buildSmallPrivateClinicsIndustryPageData();
