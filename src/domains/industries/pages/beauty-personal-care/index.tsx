import {
    Bell,
    Calendar,
    CheckCircle2,
    Clock4,
    HeartHandshake,
    MessageSquare,
    RefreshCw,
    Search,
    Sparkles,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildBeautyPersonalCareIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'Beauty & Appointment Businesses',
        title: 'A Booking Window Closes. A Refill Gets Forgotten. A Quiet Regular Tries Somewhere New. The Chair Stays Empty For The Same Reason Every Week.',
        description:
            'Salons, lash studios, med spas, and aesthetic clinics all live and die on the same loop — fastest reply, easiest booking, most remembered business. Where that loop breaks looks different by treatment, but the leak is always the same.',
        list: ['Slow first reply', 'Hard booking', 'Forgotten regulars', 'No nudge'],
        cssPrefix: 'beauty-personal-care-hero',
    };

    const operatingPatternsData = {
        badge: 'The Three Patterns Every Appointment Business Shares',
        title: 'You are not losing clients to better treatments. You are losing them to faster, easier, more present ones.',
        benefits: [
            {
                icon: Clock4,
                title: 'The first reply decides who books',
                description: 'New enquiries DM two or three places at once. Whoever replies first with a real slot — not "DM us back" — usually gets sat down.',
                iconType: 'primary' as const,
            },
            {
                icon: RefreshCw,
                title: 'The rebook nudge decides who comes back',
                description: 'Six-week trims, three-week refills, three-session plans — they all rely on a nudge at the right moment. Without it, regulars quietly drift.',
                iconType: 'secondary' as const,
            },
            {
                icon: Bell,
                title: 'The empty chair decides what next month looks like',
                description: 'Cancellations and no-shows are the loudest leak. The salons that fill them in the same hour rarely feel "quiet weeks".',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const decisionChecklistData = {
        badge: 'A Quick Self-Check',
        title: 'Three honest questions about your last booked week',
        description: 'If any of these read uncomfortable, the leak is probably not the treatment — it is the loop around it.',
        items: [
            'New DMs wait until after closing for a real reply',
            'Regulars only rebook if the front desk remembers to ask',
            'Cancellations sit empty until next week, not next hour',
            'Refill or rebook windows are tracked in someone\'s head',
            'Reviews online do not match how full the chair actually is',
            'Past clients hear from you only when there is an offer',
        ],
        columns: 2 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'beauty-personal-care-decision-checklist',
    };

    const spectrumData = {
        badge: 'How The Loop Looks By Treatment',
        title: 'Same loop. Different breaking points.',
        description: 'Booking, rebook, and recall all matter — but they break in different places depending on the treatment.',
        cards: [
            {
                title: 'Walk-in & fast booking',
                description: 'Nail salons, hair trims, brow bars. Friction in the first three taps loses the booking. Cancellations need filling the same hour. Speed and ease win.',
                points: [
                    'Three-tap booking',
                    'Same-hour cancellation fill',
                    'Walk-in waitlist that actually fires',
                ],
            },
            {
                title: 'Cycle & refill',
                description: 'Lash extensions, hair colour, regular maintenance. The booking is fine. The cycle nudge is the leak. Two weeks of silence loses a year of loyalty.',
                points: [
                    'Cycle-aware refill nudges',
                    'Quiet, single-touch win-backs',
                    'Tech-led rebook prompts',
                ],
                featured: true,
            },
            {
                title: 'Considered & high-ticket',
                description: 'Med spas, aesthetic clinics, treatment plans. The consult goes well. The follow-up does not. Day three and day seven decide if she comes back.',
                points: [
                    'Written consult summaries',
                    'Day-three and day-seven nurture',
                    'Outcome-based reviews',
                ],
            },
        ],
        backgroundColor: 'bg-alt',
        cssPrefix: 'beauty-personal-care-spectrum',
    };

    const systemLayersData = {
        badge: 'What This Looks Like Across The Category',
        title: 'A small set of systems that fit every chair, room, and clinic',
        description: 'The same four layers, tuned to each treatment. Salons get fast booking. Lash studios get cycle nudges. Med spas get structured follow-up. The principle is the same.',
        featureCategories: [
            {
                title: 'First reply with a real slot',
                description: 'The first message back includes live availability — not "DM us". Bookable from Instagram, Google, and the site.',
                icon: MessageSquare,
                features: [
                    'Live slots in the first reply',
                    'Bookable from where she found you',
                    'Holds her until you can confirm',
                ],
            },
            {
                title: 'Rebook on the right cycle, every time',
                description: 'Six-week trims, three-week refills, three-session plans — each gets the right rebook prompt with the right tone.',
                icon: RefreshCw,
                features: [
                    'Service-specific rebook timing',
                    'Personal, named tone',
                    'Stops the moment she rebooks',
                ],
            },
            {
                title: 'Reviews from the moments worth reviewing',
                description: 'Review requests fire when results are freshest — not at random. Reviews then stack where new clients are scrolling.',
                icon: Star,
                features: [
                    'Trigger-based review timing',
                    'Asked once, never twice',
                    'Stack on Google and Maps',
                ],
            },
            {
                title: 'Be findable for the actual search',
                description: '"Lash refill near me", "nail salon Saturday", "skin consult [city]" — your profile and pages line up for the search she runs.',
                icon: Search,
                features: [
                    'Treatment + area pages',
                    'Profile that matches the work',
                    'Right-fit, not generic',
                ],
            },
        ],
        columns: 2 as const,
    };

    const detailRoutesData = {
        badge: 'Where Each Treatment Sits',
        title: 'Pick the page closest to your day',
        description: 'Each detail page goes deeper into how the loop breaks for that specific treatment, and what we put in place.',
        items: [
            {
                title: 'Hair Salons',
                description: 'Saturday DMs, six-week regulars, and the chair that sat empty mid-foil.',
                href: '/industries/beauty-personal-care/hair-salons',
                icon: Sparkles,
            },
            {
                title: 'Nail Salons',
                description: 'Three-tap booking, same-hour cancellation fills, and rebook before she Googles new.',
                href: '/industries/beauty-personal-care/nail-salons',
                icon: CheckCircle2,
            },
            {
                title: 'Lash Studios',
                description: 'Refill cycle nudges, quiet win-backs, and tech-led loyalty.',
                href: '/industries/beauty-personal-care/lash-lift-and-extensions',
                icon: HeartHandshake,
            },
            {
                title: 'Small Med Spas',
                description: 'Same-day reply, written treatment plans, and rebooks that complete the plan.',
                href: '/industries/beauty-personal-care/small-med-spas',
                icon: Bell,
            },
            {
                title: 'Aesthetic & Cosmetic Clinics',
                description: 'Day-three and day-seven nurture, outcome-based reviews, calm trust.',
                href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
                icon: Calendar,
            },
        ],
        backgroundColor: 'bg-muted/20',
        cssPrefix: 'beauty-personal-care-detail-routes',
        styleVariant: 'style1' as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The systems that show up across this whole category.',
        cards: [
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'First-reply availability, three-tap booking, written summaries.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: RefreshCw,
                title: 'CRM & Rebook Automation',
                description: 'Cycle-aware rebooks, calm nurture, quiet win-backs.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from the right moment, where new clients scroll.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the salon, studio, or clinic people find for the actual search.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    return {
        slug: 'beauty-personal-care',
        industries: ['aesthetic-clinic', 'hair-salon', 'nail-salon', 'med-spa', 'lash-extensions'],
        category: 'beauty-personal-care',
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-response-time', 'follow-up', 'booking-systems', 'review-generation'],
        type: 'category',
        seo: {
            title: 'Beauty & Appointment Businesses — Booking, Rebook, Retention | MindWP',
            description:
                'Salons, lash studios, med spas, and aesthetic clinics share the same loop — fastest reply, easiest booking, most remembered business. We put the systems in place that fix the loop where it actually breaks.',
            keywords: [
                'salon booking system',
                'med spa follow up',
                'lash studio rebook',
                'aesthetic clinic crm',
                'beauty business local seo',
            ],
            canonical: '/industries/beauty-personal-care',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        decisionChecklist: decisionChecklistData,
        spectrum: spectrumData,
        systemLayers: systemLayersData,
        detailRoutes: detailRoutesData,
        explore: exploreData,
        sectionControls: {
            subIndustries: { enabled: false },
            caseStudies: { enabled: false },
        },
        faq: {
            title: 'Things owners ask before they pick a page',
            description: 'A few common questions before you go deeper into the right detail page.',
            faqs: [
                {
                    question: 'I run more than one of these — which page should I read?',
                    answer:
                        'Read the one closest to your highest-volume treatment. The patterns are shared, but the breaking points differ.',
                },
                {
                    question: 'Is this only for owners with a team?',
                    answer:
                        'No. Solo lash techs, single-chair stylists, and small clinics feel the booking + rebook leak more, not less.',
                },
                {
                    question: 'Will this replace our salon software?',
                    answer:
                        'No. It sits on top of your booking software and fills the bits it does not — first reply, cycle nudges, structured follow-up, reviews.',
                },
            ],
        },
        cta: {
            title: 'Pick the page closest to your chair',
            description:
                'Each detail page below goes deeper into how the loop breaks for that specific treatment — and what we put in place to fix it.',
        },
    };
}

export const beautyPersonalCareIndustryPageData: IndustryPageData = buildBeautyPersonalCareIndustryPageData();
