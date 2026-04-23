import {
    CalendarCheck,
    ClipboardList,
    FileSearch,
    MessageSquare,
    PhoneCall,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
    UserCheck,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallMedSpasIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Small Med Spas',
        title: 'She Filled In The Consultation Form On Tuesday Night. By Friday She Had Booked The Clinic That Replied On Wednesday.',
        description:
            'Med spa clients do not buy on impulse. They enquire, they compare, they wait. The clinic that calls them back the next morning — calmly, not pushy — is almost always the one that ends up doing the treatment.',
        list: ['Cold enquiry', 'Slow callback', 'No follow-up', 'Plan dropped'],
        cssPrefix: 'small-med-spas-hero',
    };

    const decisionChecklistData = {
        badge: 'How A Med Spa Enquiry Actually Decides',
        title: 'Three things she is quietly checking before she books',
        description: 'She is not comparing prices. She is checking whether you feel safe, organised, and present.',
        items: [
            'A same-day, named reply with two suggested consult times',
            'A short pre-consult intake that respects her time',
            'A written plan within 24 hours of the consult, in her words',
            'Recent, real reviews from completed treatment journeys',
            'A Google profile that matches the work she actually wants',
            'Practitioner credentials surfaced calmly, not buried',
        ],
        columns: 2 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'small-med-spas-decision-checklist',
    };

    const operatingPatternsData = {
        badge: 'Where Consults Become Bookings — Or Don\'t',
        title: 'The treatment is not the sale. The follow-up is.',
        benefits: [
            {
                icon: MessageSquare,
                title: 'The form sat in an inbox until Wednesday',
                description: 'By the time anyone replied, she had a Friday consult booked elsewhere. The form was fine. The reply was not.',
                iconType: 'primary' as const,
            },
            {
                icon: FileSearch,
                title: 'The consult went well. Then nothing.',
                description: 'No written plan, no follow-up at the right window. She liked the practitioner. She just did not feel chased — in the right way.',
                iconType: 'secondary' as const,
            },
            {
                icon: CalendarCheck,
                title: 'The treatment plan stalled at session two',
                description: 'Series-based treatments need scheduled rebook prompts. Without them, plans quietly become single sessions.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Calm, fast, structured follow-up — from first enquiry to plan completion',
        description: 'You stay focused on assessment and treatment. The bit that turns enquiry into a booked plan stops depending on someone remembering to email back.',
        featureCategories: [
            {
                title: 'Same-day, named reply to every enquiry',
                description: 'No web form sits past lunch. The first reply offers two consult times and feels like a real human, not a portal.',
                icon: PhoneCall,
                features: [
                    'Same-day acknowledgement',
                    'Two consult slots in the first reply',
                    'Tone matched to the treatment area',
                ],
            },
            {
                title: 'Pre-consult intake, post-consult plan',
                description: 'A short structured intake before the consult, and a written plan after. She sees you take it seriously.',
                icon: ClipboardList,
                features: [
                    'Pre-consult intake form',
                    'Written plan within 24 hours',
                    'References her actual goals, not a template',
                ],
            },
            {
                title: 'Treatment plan rebooks, not loose ends',
                description: 'Series-based treatments get scheduled rebook prompts at the right interval. Plans complete instead of stalling.',
                icon: CalendarCheck,
                features: [
                    'Scheduled rebook prompts per plan',
                    'Reminders before each session',
                    'Pause and resume without losing the thread',
                ],
            },
            {
                title: 'Reviews from completed plans, not first sessions',
                description: 'Review requests fire at the right window — when results are visible — not at session one when she is still nervous.',
                icon: Star,
                features: [
                    'Outcome-based review timing',
                    'Asked once, never twice',
                    'Reviews that read like real journeys',
                ],
            },
            {
                title: 'Trust-led local presence',
                description: 'A Google profile and pages that match the actual treatments, recent reviews, and practitioner credentials. Quiet confidence, not loud claims.',
                icon: Search,
                features: [
                    'Found for the treatments you actually offer',
                    'Practitioner-led trust signals',
                    'Profile reflects the clinic, not a template',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for small med spas.',
        cards: [
            {
                icon: PhoneCall,
                title: 'Smart Website Systems',
                description: 'Same-day reply, two consult slots, written plan — without the inbox guilt.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: CalendarCheck,
                title: 'CRM & Treatment Plan Automation',
                description: 'Series rebooks, follow-ups, and plan completion that does not stall at session two.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from completed plans, where comparison clients are scrolling.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the clinic that shows up — and reads as safe — for the treatments you actually offer.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things small med spas usually ask',
        description: 'Honest answers about how this fits a clinic-led, considered-purchase day.',
        faqs: [
            {
                question: 'We do not want to feel pushy. Will follow-up sound like sales?',
                answer:
                    'No. The whole point is calm. Same-day reply, structured plan, and one warm follow-up at the right moment. No discount chasing.',
            },
            {
                question: 'Our practitioner does the consults. Who handles the admin?',
                answer:
                    'The system does the routine bits — acknowledgement, reminders, rebook prompts — so the practitioner only steps in for the parts that need them.',
            },
            {
                question: 'Can it handle different treatment journeys?',
                answer:
                    'Yes. Single-session, three-session, and longer plans each get the right rebook cadence and review timing.',
            },
            {
                question: 'What about clients who went quiet after a consult?',
                answer:
                    'A single, calm follow-up references the plan she discussed. It either reopens the conversation or respectfully ends it.',
            },
            {
                question: 'Will this affect compliance or how we present treatments?',
                answer:
                    'No. Tone, claims, and copy stay aligned with what your practitioners are comfortable saying. We do not introduce claims.',
            },
        ],
    };

    return {
        slug: 'small-med-spas',
        industries: ['med-spa'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-response-time', 'follow-up', 'review-generation'],
        type: 'detail',
        parentSlug: 'beauty-personal-care',
        seo: {
            title: 'Small Med Spas — Calm Consult Follow-Up, Plan Completion | MindWP',
            description:
                'For small med spas where enquiries cool overnight and treatment plans stall at session two. We put same-day replies, written plans, scheduled rebooks, and outcome-based reviews in place.',
            keywords: [
                'med spa lead follow up',
                'med spa consult conversion',
                'med spa treatment plan rebook',
                'med spa reviews',
                'med spa local seo',
            ],
            canonical: '/industries/beauty-personal-care/small-med-spas',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        decisionChecklist: decisionChecklistData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the consult goes quiet',
            description:
                'If enquiries cool before Wednesday or plans stall after session two, walk us through a recent month and we will show you where calm follow-up would have closed the loop.',
        },
    };
}

export const smallMedSpasIndustryPageData: IndustryPageData = buildSmallMedSpasIndustryPageData();
