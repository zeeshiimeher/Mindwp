import {
    Award,
    CalendarRange,
    CheckCircle,
    Eye,
    FileText,
    HeartHandshake,
    MessageCircle,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
    UserCheck,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAestheticCosmeticClinicsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Aesthetic & Cosmetic Clinics',
        title: 'She Sat Through The Consult, Took The Brochure Home, Talked To Her Sister, And Then Heard Nothing From You.',
        description:
            'High-ticket aesthetic decisions are not made in the chair. They are made over the next ten days — at home, in the mirror, in conversation. The clinic that stays gently present in those ten days is almost always the one she returns to.',
        list: ['Consult silence', 'No nurture', 'Compared clinics', 'Quiet drop'],
        cssPrefix: 'aesthetic-cosmetic-clinics-hero',
    };

    const operatingPatternsData = {
        badge: 'Where High-Ticket Goes Quiet',
        title: 'You did the consult well. The next ten days decided whether she came back.',
        benefits: [
            {
                icon: FileText,
                title: 'No written summary after the consult',
                description: 'She remembered the room. She did not remember the numbers, the timeline, or which option you actually recommended. By day three the detail was gone.',
                iconType: 'primary' as const,
            },
            {
                icon: HeartHandshake,
                title: 'No structured follow-up at day three or day seven',
                description: 'Not a discount. A real, calm "we are here when you are ready" with the plan attached. Without it she assumed you were too busy.',
                iconType: 'secondary' as const,
            },
            {
                icon: Eye,
                title: 'She compared three clinics — and yours read quietest',
                description: 'Same credentials, same treatments. The other clinic had recent reviews, real outcomes, and a profile that read calm and current. Yours read sparse.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Decision Moments',
        title: 'The ten days after the consult — done well',
        description: 'Not a campaign. A small set of named, calm touches that sit between the consult and the decision.',
        workflows: [
            {
                trigger: 'A consultation just finished.',
                actions: [
                    'A written summary lands within 24 hours — her actual options, in her words',
                    'It includes timing, recovery, and what to think about — not pricing as a banner',
                    'Routed in her preferred channel — email, WhatsApp, portal',
                ],
            },
            {
                trigger: 'Day three after the consult.',
                actions: [
                    'A short, calm "any questions come up?" message goes out',
                    'It is signed by the practitioner, not the clinic',
                    'It opens a real reply, not a booking link',
                ],
            },
            {
                trigger: 'Day seven, no booking yet.',
                actions: [
                    'A final, gentle "we are here whenever you are ready" message lands',
                    'It includes one quiet trust signal — a recent outcome, a relevant review',
                    'It does not chase. If she does not reply, it stops.',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'aesthetic-cosmetic-clinics-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Calm, considered follow-up that matches how high-ticket aesthetic decisions actually get made',
        description: 'You stay focused on the consult, the work, and the outcome. The bit that turns considered enquiries into booked treatments stops depending on someone remembering to email at day three.',
        featureCategories: [
            {
                title: 'Written consult summaries — every time',
                description: 'Within 24 hours, in her words, with her options. Recovery, timing, and what to think about. Pricing handled with care, not as a banner.',
                icon: FileText,
                features: [
                    'Practitioner-signed summary',
                    'Her actual options, not a brochure',
                    'Sent in her preferred channel',
                ],
            },
            {
                title: 'Day-three and day-seven nurture',
                description: 'Two calm, named follow-ups in the window where the decision actually gets made. Stops if she replies or rebooks.',
                icon: CalendarRange,
                features: [
                    'Practitioner tone, not marketing',
                    'No discount chasing',
                    'Stops the moment she engages',
                ],
            },
            {
                title: 'Quiet trust at every comparison moment',
                description: 'Recent reviews, real outcomes, and credentials surfaced where comparison happens — not buried two clicks deep.',
                icon: ShieldCheck,
                features: [
                    'Recent reviews kept fresh',
                    'Outcomes presented with care',
                    'Credentials in the right place',
                ],
            },
            {
                title: 'A profile that reads as a real, current clinic',
                description: 'Google profile, pages, and proof aligned to the treatments you actually do — not a generic aesthetic template.',
                icon: Search,
                features: [
                    'Treatment-led pages, not generic',
                    'Profile reflects real practitioners',
                    'Found by considered, right-fit clients',
                ],
            },
            {
                title: 'Reviews from outcomes, not first impressions',
                description: 'Review prompts fire when results are visible, with care for tone and consent. The reviews then read like real journeys.',
                icon: Star,
                features: [
                    'Outcome-based timing',
                    'Consent-aware prompts',
                    'Stack where comparison clients look',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for aesthetic clinics.',
        cards: [
            {
                icon: FileText,
                title: 'Smart Website Systems',
                description: 'Consult summaries, follow-ups, and trust signals — calmly, in the channel she actually reads.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: CalendarRange,
                title: 'CRM & Nurture Automation',
                description: 'Day-three and day-seven nurture that does not feel like sales.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from real outcomes, where comparison decisions are made.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Show up — and read calm — for considered, right-fit searches.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things aesthetic clinics usually ask',
        description: 'Honest answers about how this fits a considered, high-ticket clinic day.',
        faqs: [
            {
                question: 'Will follow-up feel like marketing?',
                answer:
                    'No. The tone is practitioner-led and calm. Day three and day seven are real, named messages, not sequences with offers attached.',
            },
            {
                question: 'How does this handle pricing in the follow-up?',
                answer:
                    'Pricing sits in the written consult summary, in context. It does not appear as banners or discounts in nurture messages.',
            },
            {
                question: 'What about clients who go quiet for months?',
                answer:
                    'A single, respectful re-open at the right moment — referencing the original plan, not a generic offer. If she does not respond, it does not chase.',
            },
            {
                question: 'Will this affect how we present treatments and outcomes?',
                answer:
                    'No. Tone, claims, and copy stay aligned with what your practitioners are comfortable saying. We do not introduce claims.',
            },
            {
                question: 'Can it sit alongside our existing patient management software?',
                answer:
                    'Yes. The systems live on top of your clinic software, handling the bits it does not — first reply, written summaries, structured nurture, reviews.',
            },
        ],
    };

    return {
        slug: 'aesthetic-cosmetic-clinics',
        industries: ['aesthetic-clinic'],
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'lead-response-time', 'review-generation'],
        type: 'detail',
        parentSlug: 'beauty-personal-care',
        seo: {
            title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion | MindWP',
            description:
                'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
            keywords: [
                'aesthetic clinic follow up',
                'cosmetic clinic crm',
                'aesthetic clinic consult conversion',
                'aesthetic clinic reviews',
                'aesthetic clinic seo',
            ],
            canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
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
            title: 'Tell us where the ten days go quiet',
            description:
                'If considered enquiries cool between consult and decision, walk us through your last few weeks and we will show you where calm, named follow-up would have brought her back.',
        },
    };
}

export const aestheticCosmeticClinicsIndustryPageData: IndustryPageData = buildAestheticCosmeticClinicsIndustryPageData();
