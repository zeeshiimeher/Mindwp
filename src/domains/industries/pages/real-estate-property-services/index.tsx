import {
    AlarmClock,
    Banknote,
    Building2,
    CalendarRange,
    ClipboardList,
    Clock,
    HardHat,
    Home,
    MessageSquare,
    RotateCcw,
    Search,
    ShieldCheck,
    Star,
    Timer,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealEstatePropertyServicesIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'Real Estate & Property Services',
        title: 'Property Work Is Won In Minutes And Lost In Months. Both Halves Are Pipeline.',
        description:
            'Realtors, property managers, mortgage brokers, inspectors — different work, identical leak. Enquiries arrive on someone else\'s deadline. Whoever responds first holds the conversation. Whoever follows up last keeps the relationship. The middle is where most of the money is quietly lost.',
        list: ['First-minute miss', 'Cold pipeline', 'Silent updates', 'Forgotten clients'],
        cssPrefix: 'real-estate-property-services-hero',
    };

    const operatingPatternsData = {
        badge: 'Three Patterns Across The Category',
        title: 'Different roles, the same three windows that decide everything',
        description: 'Whether the enquiry is a buyer, a landlord, a borrower, or an agent booking an inspection, the leak sits in the same three places.',
        benefits: [
            {
                icon: Timer,
                title: 'The first-response window is shorter than anyone admits',
                description: 'Buyers and landlords are messaging multiple firms at once. The first personal-feeling reply usually wins. Everyone else gets ignored.',
                iconType: 'primary' as const,
            },
            {
                icon: ClipboardList,
                title: 'Pipeline memory lives in someone\'s head',
                description: '"Looking in spring" buyers, stalled DIPs, agents who used you once — all forgotten by the next quiet week. Competitors get the next call by being remembered, not better.',
                iconType: 'secondary' as const,
            },
            {
                icon: RotateCcw,
                title: 'Silence after the work breaks the next referral',
                description: 'No update, no review request, no remortgage flag. The relationship that should compound for years is forgotten the day the work is done.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const decisionChecklistData = {
        badge: 'Quietly Familiar?',
        title: 'A few signs the leak is timing and follow-up, not lead volume',
        description: 'If most of these ring true, the work is not in finding more enquiries. It is in keeping the ones already arriving.',
        items: [
            'Enquiries arrive while you are mid-viewing, mid-inspection, or out of hours',
            'Portal or website forms get a reply slower than the buyer expects',
            'Old leads, stalled cases, or "looking later" buyers are never circled back to',
            'Past clients only hear from you when something is wrong',
            'Reviews online do not match the volume of completed work',
            'Pipeline visibility lives in a notebook, an inbox, or someone\'s memory',
        ],
        columns: 2 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'real-estate-property-services-decision-checklist',
    };

    const spectrumData = {
        badge: 'Where Property Firms Sit',
        title: 'Same category, four very different shapes of pipeline',
        description: 'The category looks similar from the outside. The actual point where work is lost is different in each kind of practice.',
        cards: [
            {
                title: 'Speed-of-response practices',
                description: 'Estate agents and mortgage brokers where the seven-minute window after a portal lead decides the entire deal.',
                points: [
                    'Portal leads going to whoever rings first',
                    'Weekend enquiries lost by Monday morning',
                    'Mid-viewing missed calls turning cold',
                ],
            },
            {
                title: 'Reliability-of-update practices',
                description: 'Property managers where landlords and tenants leave because nobody told them what was happening, not because the work was bad.',
                points: [
                    'Landlords chasing for portfolio updates',
                    'Tenants left wondering on maintenance tickets',
                    'Renewal windows missed before notice arrives',
                ],
                featured: true,
            },
            {
                title: 'Calendar-window practices',
                description: 'Home inspectors and surveyors where the booking has to happen inside someone else\'s deadline or it disappears.',
                points: [
                    'Booking windows that close in days',
                    'Missed calls during on-site work',
                    'Referring agents lost to silence after delivery',
                ],
            },
        ],
        backgroundColor: 'bg-alt',
        cssPrefix: 'real-estate-property-services-spectrum',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Win the first window, then hold the relationship through every quiet month',
        description: 'You keep doing the work. The bits that decide whether each enquiry becomes a deal, and whether each deal becomes a referral, stop relying on anyone being near a phone.',
        featureCategories: [
            {
                title: 'Be the first response, every time',
                description: 'Web forms, portal leads, missed calls, and out-of-hours enquiries all answered by a personal-feeling reply within minutes.',
                icon: MessageSquare,
                features: [
                    'Same-hour acknowledgement, in your voice',
                    'Out-of-hours and weekend coverage',
                    'Lead held until a person can call back',
                ],
            },
            {
                title: 'Hold the pipeline you keep forgetting',
                description: 'Old buyers, stalled cases, agents who used you once — all visible in one place, nudged on a sensible cycle.',
                icon: Clock,
                features: [
                    'Stale leads surfaced before competitors call them',
                    'Stage-aware nudges for in-flight cases',
                    'Past clients re-touched at the right moment',
                ],
            },
            {
                title: 'Keep clients and agents in the loop without extra calls',
                description: 'Status updates fire automatically as bookings, inspections, cases, or maintenance tickets move. People stop chasing.',
                icon: CalendarRange,
                features: [
                    'Auto-updates on every status change',
                    'Standard cadence per relationship type',
                    'Tenant, landlord, and agent satisfaction tracked',
                ],
            },
            {
                title: 'Turn completed work into proof',
                description: 'A review request at the moment of completion, exchange, or report delivery — when relief is freshest.',
                icon: ShieldCheck,
                features: [
                    'Asked once, at the right point',
                    'Tone matched to the relationship',
                    'Reviews catch up to the volume of work',
                ],
            },
            {
                title: 'Be findable for the work you actually want',
                description: 'Pages and Google profile lined up for postcode, property type, buyer profile, or inspection type — not generic property search.',
                icon: Search,
                features: [
                    'Found for area + service type',
                    'Profiles vendors, landlords, and buyers trust',
                    'Less time on enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const detailRoutesData = {
        badge: 'By Practice Type',
        title: 'Pick the one closest to how you actually run',
        description: 'Same category, different windows. Each page gets specific to a different shape of property practice.',
        items: [
            {
                title: 'Realtors & Estate Agents',
                description: 'For agents losing portal leads in the seven minutes between enquiry and callback.',
                href: '/industries/real-estate-property-services/realtors',
                icon: Home,
            },
            {
                title: 'Property Managers',
                description: 'For agencies losing doors quietly because landlords got tired of chasing for updates.',
                href: '/industries/real-estate-property-services/property-managers',
                icon: Building2,
            },
            {
                title: 'Mortgage Brokers',
                description: 'For brokers where weekend enquiries get placed by whoever replied first.',
                href: '/industries/real-estate-property-services/mortgage-brokers',
                icon: Banknote,
            },
            {
                title: 'Home Inspectors',
                description: 'For inspectors where the booking window is days, not weeks, and silence after the report kills the next referral.',
                href: '/industries/real-estate-property-services/home-inspectors',
                icon: HardHat,
            },
        ],
        backgroundColor: 'bg-muted/20',
        cssPrefix: 'real-estate-property-services-detail-routes',
        styleVariant: 'style1' as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The parts that come up most across realtors, property managers, brokers, and inspectors.',
        cards: [
            {
                icon: AlarmClock,
                title: 'Smart Website Systems',
                description: 'Be the first response, even mid-viewing or out of hours.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Clock,
                title: 'CRM & Pipeline Memory',
                description: 'Hold every old buyer, stalled case, and past client — automatically.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews that catch up to the volume of completed work.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the property name people find for the area you actually cover.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    return {
        slug: 'real-estate-property-services',
        type: 'category',
        category: 'real-estate-property-services',
        systems: [
            'smart-website-systems',
            'crm-automation',
            'local-seo-authority',
            'reputation-review',
        ],
        topics: [
            'lead-response-time',
            'follow-up',
            'pipeline-visibility',
            'review-generation',
        ],
        industries: ['home-inspection', 'mortgage-broker', 'property-management', 'realtor'],
        seo: {
            title: 'Real Estate & Property Services — Win The First Minute, Hold The Pipeline | MindWP',
            description:
                'For realtors, property managers, mortgage brokers, and inspectors where the leak is in the first-response window and the long pipeline that follows. We put first-minute response, pipeline memory, and follow-up in place across the category.',
            keywords: [
                'real estate lead response system',
                'property management crm',
                'mortgage broker follow-up',
                'home inspector booking system',
                'real estate pipeline automation',
            ],
            canonical: '/industries/real-estate-property-services',
        },
        hero: heroData,
        operatingPatterns: operatingPatternsData,
        decisionChecklist: decisionChecklistData,
        spectrum: spectrumData,
        systemLayers: systemLayersData,
        detailRoutes: detailRoutesData,
        explore: exploreData,
        sectionControls: {
            subIndustries: {
                enabled: false,
            },
            caseStudies: {
                enabled: false,
            },
        },
        cta: {
            title: 'Tell us where the pipeline is leaking',
            description:
                'If portal leads cool off before you can ring, if past clients drift to a portal, or if old enquiries never come back — walk us through how the last few weeks ran and we will show you which window is costing the most work.',
        },
    };
}

export const realEstatePropertyServicesIndustryPageData: IndustryPageData =
    buildRealEstatePropertyServicesIndustryPageData();
