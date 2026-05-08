// AUTO-GENERATED FILE - DO NOT EDIT
export interface AuthorityMapItem {
  title: string;
  description: string;
  slug: string;
  path: string;
  nodeType: string;
}

interface ServiceSlots {
  services: AuthorityMapItem[];
}
interface FeatureSlots {
  services: AuthorityMapItem[];
}
interface IndustrySlots {
  services: AuthorityMapItem[];
  caseStudies: AuthorityMapItem[];
  resources: AuthorityMapItem[];
}
interface BlogSlots {
  resources: AuthorityMapItem[];
  industries: AuthorityMapItem[];
}
interface ResourceSlots {
  services: AuthorityMapItem[];
  industries: AuthorityMapItem[];
}
interface CaseStudySlots {
  industries: AuthorityMapItem[];
  resources: AuthorityMapItem[];
}

export interface AuthorityMap {
  service: Record<string, ServiceSlots>;
  feature: Record<string, FeatureSlots>;
  industry: Record<string, IndustrySlots>;
  blog: Record<string, BlogSlots>;
  resource: Record<string, ResourceSlots>;
  caseStudy: Record<string, CaseStudySlots>;
}

export const AUTHORITY_MAP: AuthorityMap = {
  service: {
    'ai-lead-handling': {
      services: [
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
    },
    'bricks-builder': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    'conversion-funnel-system-vs-landing-page-development': {
      services: [
        {
          title: 'Lead Reactivation System for Service Businesses',
          description:
            'Old enquiries, stalled quotes, and past customers sitting in your CRM doing nothing. Structured reactivation that turns forgotten contacts into recovered revenue.',
          slug: 'lead-reactivation-system',
          path: '/services/lead-reactivation-system',
          nodeType: 'service',
        },
        {
          title: 'Conversion Layer for Service Businesses',
          description:
            "Visitors arrive interested. Then they can't figure out what to do next. Conversion work that fixes the gap between attention and action — offer clarity, CTA alignment, and enquiry follow-up.",
          slug: 'conversion-layer',
          path: '/services/conversion-layer',
          nodeType: 'service',
        },
      ],
    },
    'conversion-layer': {
      services: [
        {
          title: 'Lead Reactivation System for Service Businesses',
          description:
            'Old enquiries, stalled quotes, and past customers sitting in your CRM doing nothing. Structured reactivation that turns forgotten contacts into recovered revenue.',
          slug: 'lead-reactivation-system',
          path: '/services/lead-reactivation-system',
          nodeType: 'service',
        },
        {
          title: 'Conversion Funnel System vs Landing Page Development',
          description:
            'A service decision page comparing isolated landing-page development against a full conversion funnel system for service businesses that need stronger movement from attention to action.',
          slug: 'conversion-funnel-system-vs-landing-page-development',
          path: '/services/conversion-funnel-system-vs-landing-page-development',
          nodeType: 'service',
        },
      ],
    },
    'crm-infrastructure-implementation': {
      services: [
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
    },
    divi5: {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    ecommerce: {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    elementor: {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    'lead-reactivation-system': {
      services: [
        {
          title: 'Conversion Layer for Service Businesses',
          description:
            "Visitors arrive interested. Then they can't figure out what to do next. Conversion work that fixes the gap between attention and action — offer clarity, CTA alignment, and enquiry follow-up.",
          slug: 'conversion-layer',
          path: '/services/conversion-layer',
          nodeType: 'service',
        },
        {
          title: 'Conversion Funnel System vs Landing Page Development',
          description:
            'A service decision page comparing isolated landing-page development against a full conversion funnel system for service businesses that need stronger movement from attention to action.',
          slug: 'conversion-funnel-system-vs-landing-page-development',
          path: '/services/conversion-funnel-system-vs-landing-page-development',
          nodeType: 'service',
        },
      ],
    },
    'local-seo-authority': {
      services: [],
    },
    'missed-call-recovery-system': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
    },
    'reputation-review-systems': {
      services: [],
    },
    'service-pages-vs-one-generic-services-page': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    'smart-website-systems': {
      services: [
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    'system-migration-platform-consolidation': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
      ],
    },
    'unified-communication-system': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
      ],
    },
    'website-crm-integration-vs-manual-lead-handling': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
      ],
    },
    'website-redesign-system-rebuild': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
    'wordpress-development': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
    },
  },
  feature: {
    aichat: {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
    },
    calendars: {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Conversion Layer for Service Businesses',
          description:
            "Visitors arrive interested. Then they can't figure out what to do next. Conversion work that fixes the gap between attention and action — offer clarity, CTA alignment, and enquiry follow-up.",
          slug: 'conversion-layer',
          path: '/services/conversion-layer',
          nodeType: 'service',
        },
        {
          title: 'Conversion Funnel System vs Landing Page Development',
          description:
            'A service decision page comparing isolated landing-page development against a full conversion funnel system for service businesses that need stronger movement from attention to action.',
          slug: 'conversion-funnel-system-vs-landing-page-development',
          path: '/services/conversion-funnel-system-vs-landing-page-development',
          nodeType: 'service',
        },
      ],
    },
    crm: {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
    },
    inbox: {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
    },
    reputation: {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
    },
    voicecalls: {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
    },
    workflows: {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
    },
  },
  industry: {
    'accounting-firms': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'aesthetic-cosmetic-clinics': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'auto-repair': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Garage missed call case study: more enquiries recovered',
          description:
            'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been quietly slipping away.',
          slug: 'garage-morning-rush-missed-calls',
          path: '/case-studies/garage-morning-rush-missed-calls',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Estate agent enquiry routing case study: faster, sharper replies',
          description:
            'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
          slug: 'estate-agent-enquiries-going-to-the-wrong-place',
          path: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'automotive-services': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Garage missed call case study: more enquiries recovered',
          description:
            'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been quietly slipping away.',
          slug: 'garage-morning-rush-missed-calls',
          path: '/case-studies/garage-morning-rush-missed-calls',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Estate agent enquiry routing case study: faster, sharper replies',
          description:
            'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
          slug: 'estate-agent-enquiries-going-to-the-wrong-place',
          path: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'beauty-personal-care': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'body-shops': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Estate agent enquiry routing case study: faster, sharper replies',
          description:
            'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
          slug: 'estate-agent-enquiries-going-to-the-wrong-place',
          path: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
          nodeType: 'case-study',
        },
        {
          title: 'Cleaning business case study: turning lost enquiries into booked cleans',
          description:
            'How a Reading domestic cleaning business closed the gap between enquiry and reply, and stopped letting half its leads quietly slip away.',
          slug: 'cleaning-enquiries-half-getting-lost',
          path: '/case-studies/cleaning-enquiries-half-getting-lost',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
      ],
    },
    'car-detailing': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    consultants: {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Sales Pipeline Visibility Framework',
          description:
            'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
          slug: 'sales-pipeline-visibility-framework',
          path: '/resources/sales-pipeline-visibility-framework',
          nodeType: 'resource',
        },
      ],
    },
    'dental-clinics': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'driving-schools': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'electrical-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Garage missed call case study: more enquiries recovered',
          description:
            'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been quietly slipping away.',
          slug: 'garage-morning-rush-missed-calls',
          path: '/case-studies/garage-morning-rush-missed-calls',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Estate agent enquiry routing case study: faster, sharper replies',
          description:
            'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
          slug: 'estate-agent-enquiries-going-to-the-wrong-place',
          path: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'hair-salons': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'home-inspectors': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Optimization Checklist for HVAC Businesses',
          description:
            'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
          slug: 'lead-response-optimization-checklist-for-hvac-businesses',
          path: '/resources/lead-response-optimization-checklist-for-hvac-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'home-services': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'HVAC after-hours call case study: more emergency jobs captured',
          description:
            'How a Manchester heating and cooling business stopped losing so many after-hours emergency calls and kept more urgent work in play on the same evening.',
          slug: 'hvac-after-hours-calls-going-cold',
          path: '/case-studies/hvac-after-hours-calls-going-cold',
          nodeType: 'case-study',
        },
        {
          title: 'Cleaning business case study: turning lost enquiries into booked cleans',
          description:
            'How a Reading domestic cleaning business closed the gap between enquiry and reply, and stopped letting half its leads quietly slip away.',
          slug: 'cleaning-enquiries-half-getting-lost',
          path: '/case-studies/cleaning-enquiries-half-getting-lost',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
      ],
    },
    'hvac-companies': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'HVAC peak season case study: more calls held in play during surges',
          description:
            'How a Nottingham heating and cooling business stopped losing calls during peak season and made surge weeks feel manageable for the office team.',
          slug: 'hvac-peak-season-couldnt-keep-up',
          path: '/case-studies/hvac-peak-season-couldnt-keep-up',
          nodeType: 'case-study',
        },
        {
          title: 'HVAC after-hours call case study: more emergency jobs captured',
          description:
            'How a Manchester heating and cooling business stopped losing so many after-hours emergency calls and kept more urgent work in play on the same evening.',
          slug: 'hvac-after-hours-calls-going-cold',
          path: '/case-studies/hvac-after-hours-calls-going-cold',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
      ],
    },
    'landscaping-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'lash-lift-and-extensions': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'legal-professional-services': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'local-appointment-businesses': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'mobile-mechanics': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Garage missed call case study: more enquiries recovered',
          description:
            'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been quietly slipping away.',
          slug: 'garage-morning-rush-missed-calls',
          path: '/case-studies/garage-morning-rush-missed-calls',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Estate agent enquiry routing case study: faster, sharper replies',
          description:
            'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
          slug: 'estate-agent-enquiries-going-to-the-wrong-place',
          path: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'mortgage-brokers': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'nail-salons': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'plumbing-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Locksmith case study: holding onto more late-night call-outs',
          description:
            'How a Newcastle locksmith stopped losing late-night call-outs to whoever happened to answer first and finally saw the real cost of the missed calls.',
          slug: 'locksmith-late-night-calls-missed',
          path: '/case-studies/locksmith-late-night-calls-missed',
          nodeType: 'case-study',
        },
        {
          title: 'Plumber missed call case study: keeping morning emergencies in play',
          description:
            'How a Glasgow plumbing firm stopped losing the morning rush of emergency calls and made sure urgent jobs were spotted within minutes.',
          slug: 'plumber-emergency-calls-mostly-missed',
          path: '/case-studies/plumber-emergency-calls-mostly-missed',
          nodeType: 'case-study',
        },
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'property-managers': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Sales Pipeline Visibility Framework',
          description:
            'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
          slug: 'sales-pipeline-visibility-framework',
          path: '/resources/sales-pipeline-visibility-framework',
          nodeType: 'resource',
        },
      ],
    },
    'real-estate-property-services': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    realtors: {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'repair-shops': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'roofing-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Construction firm case study: one shared view of every live lead',
          description:
            'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
          slug: 'construction-leads-everywhere-untracked',
          path: '/case-studies/construction-leads-everywhere-untracked',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Roofing Review Generation System',
          description:
            'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
          slug: 'roofing-review-generation-system',
          path: '/resources/roofing-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'small-law-firms': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'small-med-spas': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
    },
    'small-private-clinics': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
    'tattoo-studios': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      caseStudies: [
        {
          title: 'Electrical contractor case study: a Google profile that finally shows the work',
          description:
            'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
          slug: 'contractor-solid-work-no-reviews',
          path: '/case-studies/contractor-solid-work-no-reviews',
          nodeType: 'case-study',
        },
        {
          title: 'Salon review case study: a Google profile that finally matches the salon',
          description:
            'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
          slug: 'salon-great-work-going-unseen',
          path: '/case-studies/salon-great-work-going-unseen',
          nodeType: 'case-study',
        },
        {
          title: 'Law firm consultation case study: more calls becoming clients',
          description:
            'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
          slug: 'law-firm-consultations-not-becoming-clients',
          path: '/case-studies/law-firm-consultations-not-becoming-clients',
          nodeType: 'case-study',
        },
      ],
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
    },
  },
  blog: {
    'ai-reception-for-automotive-shops': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'authority-signals-for-local-search': {
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Local SEO vs Website Optimisation',
          description:
            'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
          slug: 'local-seo-vs-website-optimization',
          path: '/resources/local-seo-vs-website-optimization',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'authority-signals-for-salons': {
      resources: [
        {
          title: 'Salon Review Generation Framework',
          description:
            'See how salons automate review collection with photo prompts, stylist-specific personalisation, and post-appointment timing to build the Google review profile that drives booking decisions.',
          slug: 'salon-review-generation-framework',
          path: '/resources/salon-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-crm-pipeline-for-repair-jobs': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-review-generation-system': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Review Generation System',
          description:
            'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
          slug: 'review-generation-system',
          path: '/resources/review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Roofing Review Generation System',
          description:
            'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
          slug: 'roofing-review-generation-system',
          path: '/resources/roofing-review-generation-system',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-service-reminders-explained': {
      resources: [
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
        {
          title: 'Building Revenue Visibility Through CRM Tracking Guide',
          description:
            'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
          slug: 'building-revenue-visibility-through-crm-tracking',
          path: '/resources/building-revenue-visibility-through-crm-tracking',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'autonomous-booking-systems-for-salons': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'booking-systems-for-salons-explained': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
        {
          title: 'Lash Studios — Refill-Cycle Rebooks, Quiet Win-Backs',
          description:
            'For lash techs and studios where loyalty turns on the refill nudge nobody sent. We put cycle-aware rebook prompts, warm win-backs, and reviews from the look she loved in place.',
          slug: 'lash-lift-and-extensions',
          path: '/industries/beauty-personal-care/lash-lift-and-extensions',
          nodeType: 'industry-detail',
        },
      ],
    },
    'building-revenue-visibility-through-crm-tracking': {
      resources: [
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Client Reactivation Systems',
          description:
            'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
          slug: 'client-reactivation-systems',
          path: '/resources/client-reactivation-systems',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'client-reactivation-for-salons': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Client Reactivation Systems',
          description:
            'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
          slug: 'client-reactivation-systems',
          path: '/resources/client-reactivation-systems',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'client-reactivation-systems-for-service-businesses': {
      resources: [
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Client Reactivation Systems',
          description:
            'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
          slug: 'client-reactivation-systems',
          path: '/resources/client-reactivation-systems',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'conversion-tracking-for-hvac-companies': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'HVAC CRM Pipeline Structure',
          description:
            'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
          slug: 'hvac-crm-pipeline-structure',
          path: '/resources/hvac-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Tracking for Service Businesses Guide',
          description:
            'Learn how to set up conversion tracking that connects website activity to CRM pipeline outcomes and measures which pages and channels produce paying customers.',
          slug: 'conversion-tracking-for-service-businesses',
          path: '/resources/conversion-tracking-for-service-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'conversion-tracking-for-service-businesses-explained': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Tracking for Service Businesses Guide',
          description:
            'Learn how to set up conversion tracking that connects website activity to CRM pipeline outcomes and measures which pages and channels produce paying customers.',
          slug: 'conversion-tracking-for-service-businesses',
          path: '/resources/conversion-tracking-for-service-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'crm-pipeline-architecture-for-service-businesses': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Architecture',
          description:
            'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
          slug: 'crm-pipeline-architecture',
          path: '/resources/crm-pipeline-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'customer-feedback-loop-for-plumbing-companies': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
        {
          title: 'Customer Feedback Loop Framework',
          description:
            'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
          slug: 'customer-feedback-loop-framework',
          path: '/resources/customer-feedback-loop-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Plumbing Firms — Catch The 7pm Burst, Close The Bathroom Quote',
          description:
            'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
          slug: 'plumbing-companies',
          path: '/industries/home-services/plumbing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'customer-feedback-loop-framework-for-service-businesses': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
        {
          title: 'Customer Feedback Loop Framework',
          description:
            'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
          slug: 'customer-feedback-loop-framework',
          path: '/resources/customer-feedback-loop-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'future-crm-visibility-for-hvac-companies': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'HVAC CRM Pipeline Structure',
          description:
            'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
          slug: 'hvac-crm-pipeline-structure',
          path: '/resources/hvac-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Architecture',
          description:
            'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
          slug: 'crm-pipeline-architecture',
          path: '/resources/crm-pipeline-architecture',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'future-local-seo-after-google-business-profile-automation': {
      resources: [
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Local SEO vs Website Optimisation',
          description:
            'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
          slug: 'local-seo-vs-website-optimization',
          path: '/resources/local-seo-vs-website-optimization',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Plumbing Firms — Catch The 7pm Burst, Close The Bathroom Quote',
          description:
            'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
          slug: 'plumbing-companies',
          path: '/industries/home-services/plumbing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'google-business-profile-for-hvac-companies': {
      resources: [
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Local SEO vs Website Optimisation',
          description:
            'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
          slug: 'local-seo-vs-website-optimization',
          path: '/resources/local-seo-vs-website-optimization',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'google-business-profile-system-architecture': {
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Local SEO vs Website Optimisation',
          description:
            'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
          slug: 'local-seo-vs-website-optimization',
          path: '/resources/local-seo-vs-website-optimization',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-ai-search-changes-local-business-visibility': {
      resources: [
        {
          title: 'Local Visibility Framework',
          description:
            'Build a local visibility framework that coordinates search, directories, reviews, and content into a unified strategy that maximises how often customers find your business.',
          slug: 'local-visibility-framework',
          path: '/resources/local-visibility-framework',
          nodeType: 'resource',
        },
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-review-automation-improves-local-authority': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-smart-website-systems-work-for-local-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'How Smart Website Systems Work',
          description:
            'Learn how smart website systems connect lead capture, CRM, booking, and follow-up into one operational infrastructure for service businesses.',
          slug: 'how-smart-website-systems-work',
          path: '/resources/how-smart-website-systems-work',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-to-fix-lead-response-time-in-automotive-businesses-using-crm-automation': {
      resources: [
        {
          title: 'Lead Response Optimization Checklist for HVAC Businesses',
          description:
            'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
          slug: 'lead-response-optimization-checklist-for-hvac-businesses',
          path: '/resources/lead-response-optimization-checklist-for-hvac-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
          description:
            'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
          slug: 'hair-salons',
          path: '/industries/beauty-personal-care/hair-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-crm-pipeline-for-service-companies': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'HVAC CRM Pipeline Structure',
          description:
            'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
          slug: 'hvac-crm-pipeline-structure',
          path: '/resources/hvac-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-emergency-call-handling-mistakes': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-local-visibility-system-for-service-areas': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for HVAC Companies',
          description:
            'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-hvac-companies',
          path: '/resources/local-visibility-optimization-guide-for-hvac-companies',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for Realtors',
          description:
            'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-realtors',
          path: '/resources/local-visibility-optimization-guide-for-realtors',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-review-generation-framework': {
      resources: [
        {
          title: 'Review Generation System',
          description:
            'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
          slug: 'review-generation-system',
          path: '/resources/review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Roofing Review Generation System',
          description:
            'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
          slug: 'roofing-review-generation-system',
          path: '/resources/roofing-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-automation-framework-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Lead Automation Framework Guide',
          description:
            'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
          slug: 'lead-automation-framework',
          path: '/resources/lead-automation-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-qualification-for-roofing-companies': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Lead Qualification Framework',
          description:
            'Learn how to build a lead qualification framework that scores and prioritises leads automatically so your team focuses on the highest-value opportunities.',
          slug: 'lead-qualification-framework',
          path: '/resources/lead-qualification-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-qualification-framework-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Qualification Framework',
          description:
            'Learn how to build a lead qualification framework that scores and prioritises leads automatically so your team focuses on the highest-value opportunities.',
          slug: 'lead-qualification-framework',
          path: '/resources/lead-qualification-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-response-time-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-routing-for-hvac-companies': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Lead Routing Models for Service Companies Guide',
          description:
            'Understand the four lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your service business.',
          slug: 'lead-routing-models-for-service-companies',
          path: '/resources/lead-routing-models-for-service-companies',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-routing-models-for-service-companies': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-seo-for-roofing-companies-explained': {
      resources: [
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Local SEO vs Website Optimisation',
          description:
            'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
          slug: 'local-seo-vs-website-optimization',
          path: '/resources/local-seo-vs-website-optimization',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-seo-vs-website-optimization': {
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-service-page-architecture-for-local-businesses': {
      resources: [
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-service-page-architecture-for-roofing-companies': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-visibility-framework-for-service-businesses': {
      resources: [
        {
          title: 'Local Visibility Framework',
          description:
            'Build a local visibility framework that coordinates search, directories, reviews, and content into a unified strategy that maximises how often customers find your business.',
          slug: 'local-visibility-framework',
          path: '/resources/local-visibility-framework',
          nodeType: 'resource',
        },
        {
          title: 'Google Business Profile System Architecture Guide',
          description:
            'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
          slug: 'google-business-profile-system-architecture',
          path: '/resources/google-business-profile-system-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Authority Signals for Local Search',
          description:
            'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
          slug: 'authority-signals-for-local-search',
          path: '/resources/authority-signals-for-local-search',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-for-service-businesses': {
      resources: [
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'multi-channel-lead-capture-for-salons': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Salons',
          description:
            'See how salons recover missed calls with instant booking link texts, converting unanswered phone calls into confirmed appointments even during the busiest service hours.',
          slug: 'missed-call-recovery-for-salons',
          path: '/resources/missed-call-recovery-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Multi-Channel Lead Capture Systems',
          description:
            'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
          slug: 'multi-channel-lead-capture-systems',
          path: '/resources/multi-channel-lead-capture-systems',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'multi-channel-lead-capture-system-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Multi-Channel Lead Capture Systems',
          description:
            'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
          slug: 'multi-channel-lead-capture-systems',
          path: '/resources/multi-channel-lead-capture-systems',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'negative-reviews-for-auto-repair-shops': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Customer Feedback Loop Framework',
          description:
            'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
          slug: 'customer-feedback-loop-framework',
          path: '/resources/customer-feedback-loop-framework',
          nodeType: 'resource',
        },
        {
          title: 'Responding to Negative Reviews Systematically Guide',
          description:
            'Build a systematic process for handling negative reviews with professional templates, fast response times, and resolution follow-up that protects your reputation.',
          slug: 'responding-to-negative-reviews-systematically',
          path: '/resources/responding-to-negative-reviews-systematically',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'plumbing-crm-pipeline-for-job-management': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'realtor-local-visibility-system-for-lead-generation': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for HVAC Companies',
          description:
            'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-hvac-companies',
          path: '/resources/local-visibility-optimization-guide-for-hvac-companies',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for Realtors',
          description:
            'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-realtors',
          path: '/resources/local-visibility-optimization-guide-for-realtors',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Realtors & Estate Agents — Win The Seven-Minute Window, Then The Pipeline',
          description:
            'For estate agents and realtors where deals are decided in the minutes after a portal enquiry. We put first-minute response, callback booking, and pipeline memory in place so you stop losing instructions to whoever rang back fastest.',
          slug: 'realtors',
          path: '/industries/real-estate-property-services/realtors',
          nodeType: 'industry-detail',
        },
      ],
    },
    'reducing-salon-no-shows-with-automation': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'reputation-monitoring-systems-for-service-businesses': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Customer Feedback Loop Framework',
          description:
            'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
          slug: 'customer-feedback-loop-framework',
          path: '/resources/customer-feedback-loop-framework',
          nodeType: 'resource',
        },
        {
          title: 'Reputation Monitoring Systems',
          description:
            'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
          slug: 'reputation-monitoring-systems',
          path: '/resources/reputation-monitoring-systems',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'responding-to-negative-reviews-systematically': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
        {
          title: 'Customer Feedback Loop Framework',
          description:
            'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
          slug: 'customer-feedback-loop-framework',
          path: '/resources/customer-feedback-loop-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'revenue-visibility-for-roofing-companies': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'Roofing CRM Pipeline Structure',
          description:
            'See how roofing companies structure their CRM pipeline to track every job from inquiry to completion, eliminate missed estimates, and build predictable revenue visibility.',
          slug: 'roofing-crm-pipeline-structure',
          path: '/resources/roofing-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'Building Revenue Visibility Through CRM Tracking Guide',
          description:
            'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
          slug: 'building-revenue-visibility-through-crm-tracking',
          path: '/resources/building-revenue-visibility-through-crm-tracking',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-automation-for-hvac-companies': {
      resources: [
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-automation-for-roofing-companies': {
      resources: [
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-automation-for-salons': {
      resources: [
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-generation-system-for-local-businesses': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Review Generation System',
          description:
            'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
          slug: 'review-generation-system',
          path: '/resources/review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-crm-pipeline-for-estimates': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Roofing CRM Pipeline Structure',
          description:
            'See how roofing companies structure their CRM pipeline to track every job from inquiry to completion, eliminate missed estimates, and build predictable revenue visibility.',
          slug: 'roofing-crm-pipeline-structure',
          path: '/resources/roofing-crm-pipeline-structure',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-estimate-follow-up-delays': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-review-generation-system': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Review Generation System',
          description:
            'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
          slug: 'review-generation-system',
          path: '/resources/review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'sales-pipeline-visibility-for-hvac-companies': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'HVAC CRM Pipeline Structure',
          description:
            'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
          slug: 'hvac-crm-pipeline-structure',
          path: '/resources/hvac-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'Sales Pipeline Visibility Framework',
          description:
            'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
          slug: 'sales-pipeline-visibility-framework',
          path: '/resources/sales-pipeline-visibility-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Independent Consultants — Stop Losing Engagements To "Let Us Think About It"',
          description:
            'For independent consultants where discovery calls go well but engagements quietly die in buying committees. We help sharpen the offer, define the next step, and follow up gracefully through long decisions.',
          slug: 'consultants',
          path: '/industries/legal-professional-services/consultants',
          nodeType: 'industry-detail',
        },
        {
          title: 'Property Managers — Stop Losing Doors To Slow Replies And Silent Months',
          description:
            'For property managers where landlords leave because they got tired of chasing and tenants leave because nobody updated them. We put landlord acknowledgement, tenant updates, and renewal visibility in place so the portfolio stops eroding quietly.',
          slug: 'property-managers',
          path: '/industries/real-estate-property-services/property-managers',
          nodeType: 'industry-detail',
        },
      ],
    },
    'sales-pipeline-visibility-framework': {
      resources: [
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
        {
          title: 'Building Revenue Visibility Through CRM Tracking Guide',
          description:
            'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
          slug: 'building-revenue-visibility-through-crm-tracking',
          path: '/resources/building-revenue-visibility-through-crm-tracking',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
        {
          title: 'Independent Consultants — Stop Losing Engagements To "Let Us Think About It"',
          description:
            'For independent consultants where discovery calls go well but engagements quietly die in buying committees. We help sharpen the offer, define the next step, and follow up gracefully through long decisions.',
          slug: 'consultants',
          path: '/industries/legal-professional-services/consultants',
          nodeType: 'industry-detail',
        },
        {
          title: 'Property Managers — Stop Losing Doors To Slow Replies And Silent Months',
          description:
            'For property managers where landlords leave because they got tired of chasing and tenants leave because nobody updated them. We put landlord acknowledgement, tenant updates, and renewal visibility in place so the portfolio stops eroding quietly.',
          slug: 'property-managers',
          path: '/industries/real-estate-property-services/property-managers',
          nodeType: 'industry-detail',
        },
      ],
    },
    'salon-crm-pipeline-for-client-retention': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'salon-review-generation-framework': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Review Generation System',
          description:
            'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
          slug: 'review-generation-system',
          path: '/resources/review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'service-business-follow-up-automation': {
      resources: [
        {
          title: 'Roofing Estimate Follow-Up Workflow',
          description:
            'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
          slug: 'roofing-estimate-follow-up-workflow',
          path: '/resources/roofing-estimate-follow-up-workflow',
          nodeType: 'resource',
        },
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Service Business Follow-Up Automation Guide',
          description:
            'Learn how to build automated follow-up sequences triggered by CRM pipeline stages that ensure every lead receives consistent, timely communication.',
          slug: 'service-business-follow-up-automation-guide',
          path: '/resources/service-business-follow-up-automation-guide',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'service-page-architecture-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Local Service Page Architecture',
          description:
            'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
          slug: 'local-service-page-architecture',
          path: '/resources/local-service-page-architecture',
          nodeType: 'resource',
        },
        {
          title: 'Service Page Architecture That Converts',
          description:
            'Learn how to architect service pages that guide visitors through decision paths with search-intent matching, multi-path CTAs, and CRM-connected forms.',
          slug: 'service-page-architecture-that-converts',
          path: '/resources/service-page-architecture-that-converts',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'smart-website-systems-for-roofing-companies': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'How Smart Website Systems Work',
          description:
            'Learn how smart website systems connect lead capture, CRM, booking, and follow-up into one operational infrastructure for service businesses.',
          slug: 'how-smart-website-systems-work',
          path: '/resources/how-smart-website-systems-work',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'systems-first-website-for-hvac-companies': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'What Is a Systems-First Website?',
          description:
            'Understand the systems-first website approach — designing around operational workflows instead of templates to build websites that run your business.',
          slug: 'what-is-a-systems-first-website',
          path: '/resources/what-is-a-systems-first-website',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'tracking-customer-lifetime-value-using-crm': {
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'tracking-salon-client-lifetime-value': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Tracking Customer Lifetime Value Using CRM Guide',
          description:
            'Learn how to calculate and track Customer Lifetime Value using CRM data to make better acquisition, retention, and pricing decisions for your service business.',
          slug: 'tracking-customer-lifetime-value-using-crm',
          path: '/resources/tracking-customer-lifetime-value-using-crm',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'website-crm-integration-for-salons': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Website + CRM Integration Explained',
          description:
            'Understand how website-CRM integration connects form submissions, booking data, and visitor behaviour directly to your CRM pipeline for faster response and better tracking.',
          slug: 'website-crm-integration-explained',
          path: '/resources/website-crm-integration-explained',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'website-crm-integration-for-service-businesses': {
      resources: [
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Website + CRM Integration Explained',
          description:
            'Understand how website-CRM integration connects form submissions, booking data, and visitor behaviour directly to your CRM pipeline for faster response and better tracking.',
          slug: 'website-crm-integration-explained',
          path: '/resources/website-crm-integration-explained',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'website-design-that-supports-crm-systems': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'Designing Websites That Support CRM Systems',
          description:
            'Learn how to design service business websites that natively support CRM integration with proper form architecture, data mapping, and pipeline-aligned page structure.',
          slug: 'designing-websites-that-support-crm-systems',
          path: '/resources/designing-websites-that-support-crm-systems',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'what-is-a-systems-first-website-for-service-businesses': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'What Is a Systems-First Website?',
          description:
            'Understand the systems-first website approach — designing around operational workflows instead of templates to build websites that run your business.',
          slug: 'what-is-a-systems-first-website',
          path: '/resources/what-is-a-systems-first-website',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-auto-repair-missed-calls-lose-booked-work': {
      resources: [
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-auto-repair-shops-lose-phone-leads': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Lead Automation Framework Guide',
          description:
            'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
          slug: 'lead-automation-framework',
          path: '/resources/lead-automation-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-booking-systems-need-website-infrastructure': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Architecture for Service Websites',
          description:
            'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
          slug: 'conversion-architecture-for-service-websites',
          path: '/resources/conversion-architecture-for-service-websites',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
        {
          title: 'Lash Studios — Refill-Cycle Rebooks, Quiet Win-Backs',
          description:
            'For lash techs and studios where loyalty turns on the refill nudge nobody sent. We put cycle-aware rebook prompts, warm win-backs, and reviews from the look she loved in place.',
          slug: 'lash-lift-and-extensions',
          path: '/industries/beauty-personal-care/lash-lift-and-extensions',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-hvac-companies-disappear-from-local-search': {
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for HVAC Companies',
          description:
            'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-hvac-companies',
          path: '/resources/local-visibility-optimization-guide-for-hvac-companies',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for Realtors',
          description:
            'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-realtors',
          path: '/resources/local-visibility-optimization-guide-for-realtors',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-hvac-companies-lose-leads-after-hours': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Lead Automation Framework Guide',
          description:
            'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
          slug: 'lead-automation-framework',
          path: '/resources/lead-automation-framework',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-hvac-missed-calls-lose-after-hours-revenue': {
      resources: [
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-plumbing-companies-lose-jobs-without-crm-pipeline': {
      resources: [
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-realtors-lose-leads-without-local-visibility': {
      resources: [
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for HVAC Companies',
          description:
            'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-hvac-companies',
          path: '/resources/local-visibility-optimization-guide-for-hvac-companies',
          nodeType: 'resource',
        },
        {
          title: 'Local Visibility Optimization Guide for Realtors',
          description:
            'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
          slug: 'local-visibility-optimization-guide-for-realtors',
          path: '/resources/local-visibility-optimization-guide-for-realtors',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Realtors & Estate Agents — Win The Seven-Minute Window, Then The Pipeline',
          description:
            'For estate agents and realtors where deals are decided in the minutes after a portal enquiry. We put first-minute response, callback booking, and pipeline memory in place so you stop losing instructions to whoever rang back fastest.',
          slug: 'realtors',
          path: '/industries/real-estate-property-services/realtors',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-roofing-companies-lose-jobs-without-review-automation': {
      resources: [
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-roofing-companies-lose-leads-during-storm-season': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Roofing Lead Handling Example',
          description:
            'See how roofing companies implement AI-assisted lead handling systems that respond instantly, qualify by job type, and route emergency and quote leads to the right team members.',
          slug: 'roofing-lead-handling-example',
          path: '/resources/roofing-lead-handling-example',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-roofing-missed-calls-cost-emergency-jobs': {
      resources: [
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-salons-lose-calls-during-service-hours': {
      resources: [
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Salons',
          description:
            'See how salons recover missed calls with instant booking link texts, converting unanswered phone calls into confirmed appointments even during the busiest service hours.',
          slug: 'missed-call-recovery-for-salons',
          path: '/resources/missed-call-recovery-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-salons-lose-clients-without-crm-pipeline': {
      resources: [
        {
          title: 'Reducing Salon No-Shows with Automation',
          description:
            'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
          slug: 'reducing-salon-no-shows-with-automation',
          path: '/resources/reducing-salon-no-shows-with-automation',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Salons',
          description:
            'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
          slug: 'crm-pipeline-setup-guide-for-salons',
          path: '/resources/crm-pipeline-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
          description:
            'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
          slug: 'crm-pipeline-setup-guide-for-plumbing-businesses',
          path: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-salons-lose-clients-without-review-automation': {
      resources: [
        {
          title: 'Review Automation Setup Guide for Roofing Companies',
          description:
            'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-roofing-companies',
          path: '/resources/review-automation-setup-guide-for-roofing-companies',
          nodeType: 'resource',
        },
        {
          title: 'Review Automation Setup Guide for Salons',
          description:
            'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
          slug: 'review-automation-setup-guide-for-salons',
          path: '/resources/review-automation-setup-guide-for-salons',
          nodeType: 'resource',
        },
        {
          title: 'How Review Automation Improves Local Authority Guide',
          description:
            'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
          slug: 'how-review-automation-improves-local-authority',
          path: '/resources/how-review-automation-improves-local-authority',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-salons-need-lead-handling-systems': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Salon Lead Handling Example',
          description:
            'See how salons use automated lead handling to respond instantly across Instagram, phone, and web, convert inquiries into self-service bookings, and grow new client acquisition by 50%.',
          slug: 'salon-lead-handling-example',
          path: '/resources/salon-lead-handling-example',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-service-business-websites-fail-to-convert': {
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Architecture for Service Websites',
          description:
            'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
          slug: 'conversion-architecture-for-service-websites',
          path: '/resources/conversion-architecture-for-service-websites',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-slow-lead-response-is-killing-automotive-businesses': {
      resources: [
        {
          title: 'Lead Response Optimization Checklist for HVAC Businesses',
          description:
            'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
          slug: 'lead-response-optimization-checklist-for-hvac-businesses',
          path: '/resources/lead-response-optimization-checklist-for-hvac-businesses',
          nodeType: 'resource',
        },
        {
          title: 'Automotive CRM Pipeline for Repair Jobs',
          description:
            'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
          slug: 'automotive-crm-pipeline-for-repair-jobs',
          path: '/resources/automotive-crm-pipeline-for-repair-jobs',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Service Reminder Automation Framework',
          description:
            'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
          slug: 'automotive-service-reminder-automation',
          path: '/resources/automotive-service-reminder-automation',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
          description:
            'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
          slug: 'hair-salons',
          path: '/industries/beauty-personal-care/hair-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'why-slow-lead-response-is-killing-hvac-businesses': {
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'HVAC CRM Pipeline Structure',
          description:
            'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
          slug: 'hvac-crm-pipeline-structure',
          path: '/resources/hvac-crm-pipeline-structure',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Optimization Checklist for HVAC Businesses',
          description:
            'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
          slug: 'lead-response-optimization-checklist-for-hvac-businesses',
          path: '/resources/lead-response-optimization-checklist-for-hvac-businesses',
          nodeType: 'resource',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
          description:
            'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
          slug: 'hair-salons',
          path: '/industries/beauty-personal-care/hair-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
  },
  resource: {
    'authority-signals-for-local-search': {
      services: [
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'auto-repair-lead-handling-example': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'auto-reply-funnel': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-crm-pipeline-for-repair-jobs': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-review-generation-system': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'automotive-service-reminder-automation': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'booking-systems-inside-website-infrastructure': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
        {
          title: 'Lash Studios — Refill-Cycle Rebooks, Quiet Win-Backs',
          description:
            'For lash techs and studios where loyalty turns on the refill nudge nobody sent. We put cycle-aware rebook prompts, warm win-backs, and reviews from the look she loved in place.',
          slug: 'lash-lift-and-extensions',
          path: '/industries/beauty-personal-care/lash-lift-and-extensions',
          nodeType: 'industry-detail',
        },
      ],
    },
    'building-revenue-visibility-through-crm-tracking': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'client-reactivation-systems': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'conversion-architecture-for-service-websites': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'conversion-tracking-for-service-businesses': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'crm-pipeline-architecture': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'crm-pipeline-automation': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Landscapers — Stop Patio Quotes Drifting, Bring Regulars Back',
          description:
            'For landscapers whose patio quotes drift for six weeks while the homeowner mulls, and whose lapsed regulars never re-engage in spring. Open quote board, friendly check-ins, lapsed-regular nudges.',
          slug: 'landscaping-companies',
          path: '/industries/home-services/landscaping-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'crm-pipeline-setup-guide-for-plumbing-businesses': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'crm-pipeline-setup-guide-for-salons': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'customer-feedback-loop-framework': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'designing-websites-that-support-crm-systems': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'google-business-profile-system-architecture': {
      services: [
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-review-automation-improves-local-authority': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'how-smart-website-systems-work': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-crm-pipeline-structure': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-emergency-call-handling-system': {
      services: [
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-lead-handling-example': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'hvac-review-generation-framework': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-automation-framework': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-qualification-framework': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-response-optimization-checklist-for-hvac-businesses': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills',
          description:
            'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
          slug: 'nail-salons',
          path: '/industries/beauty-personal-care/nail-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
          description:
            'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
          slug: 'hair-salons',
          path: '/industries/beauty-personal-care/hair-salons',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-response-time-framework': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'lead-routing-models-for-service-companies': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-seo-vs-website-optimization': {
      services: [
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-service-page-architecture': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Service Pages vs One Generic Services Page',
          description:
            'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
          slug: 'service-pages-vs-one-generic-services-page',
          path: '/services/service-pages-vs-one-generic-services-page',
          nodeType: 'service',
        },
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-visibility-framework': {
      services: [
        {
          title: 'Local SEO for Service Businesses | Show Up When Customers Search',
          description:
            'Local customers search for your services every day. If they find your competitors instead, that is business you lose. We make your website, Google profile, and listings work together so the right people find you.',
          slug: 'local-seo-authority',
          path: '/services/local-seo-authority',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-visibility-optimization-guide-for-hvac-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'local-visibility-optimization-guide-for-realtors': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Realtors & Estate Agents — Win The Seven-Minute Window, Then The Pipeline',
          description:
            'For estate agents and realtors where deals are decided in the minutes after a portal enquiry. We put first-minute response, callback booking, and pipeline memory in place so you stop losing instructions to whoever rang back fastest.',
          slug: 'realtors',
          path: '/industries/real-estate-property-services/realtors',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-for-auto-repair': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-for-hvac': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-for-roofing': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-for-salons': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'missed-call-recovery-system': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'multi-channel-lead-capture-systems': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'reducing-salon-no-shows-with-automation': {
      services: [
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'reputation-monitoring-systems': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'responding-to-negative-reviews-systematically': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-automation-setup-guide-for-roofing-companies': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-automation-setup-guide-for-salons': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'review-generation-system': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-crm-pipeline-structure': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-estimate-follow-up-workflow': {
      services: [
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
          description:
            'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
          slug: 'aesthetic-cosmetic-clinics',
          path: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-lead-handling-example': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'roofing-review-generation-system': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
    },
    'sales-pipeline-visibility-framework': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
        {
          title: 'Independent Consultants — Stop Losing Engagements To "Let Us Think About It"',
          description:
            'For independent consultants where discovery calls go well but engagements quietly die in buying committees. We help sharpen the offer, define the next step, and follow up gracefully through long decisions.',
          slug: 'consultants',
          path: '/industries/legal-professional-services/consultants',
          nodeType: 'industry-detail',
        },
        {
          title: 'Property Managers — Stop Losing Doors To Slow Replies And Silent Months',
          description:
            'For property managers where landlords leave because they got tired of chasing and tenants leave because nobody updated them. We put landlord acknowledgement, tenant updates, and renewal visibility in place so the portfolio stops eroding quietly.',
          slug: 'property-managers',
          path: '/industries/real-estate-property-services/property-managers',
          nodeType: 'industry-detail',
        },
      ],
    },
    'salon-lead-handling-example': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
    },
    'salon-review-generation-framework': {
      services: [
        {
          title: 'Reputation & Review Management for Service Businesses',
          description:
            "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
          slug: 'reputation-review-systems',
          path: '/services/reputation-review-systems',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'service-business-follow-up-automation-guide': {
      services: [
        {
          title: 'AI Lead Handling for Service Businesses',
          description:
            "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
          slug: 'ai-lead-handling',
          path: '/services/ai-lead-handling',
          nodeType: 'service',
        },
        {
          title: 'Missed Call Recovery Automation for Service Businesses',
          description:
            'When nobody picks up, the caller rings someone else. Missed call recovery catches those moments — text back instantly, capture the details, get someone on it before the job goes elsewhere.',
          slug: 'missed-call-recovery-system',
          path: '/services/missed-call-recovery-system',
          nodeType: 'service',
        },
        {
          title: 'Unified Communication System for Service Businesses',
          description:
            'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
          slug: 'unified-communication-system',
          path: '/services/unified-communication-system',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
    },
    'service-page-architecture-that-converts': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'Website Redesign & Rebuild for Service Businesses',
          description:
            'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
          slug: 'website-redesign-system-rebuild',
          path: '/services/website-redesign-system-rebuild',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'tracking-customer-lifetime-value-using-crm': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'tracking-salon-client-lifetime-value': {
      services: [
        {
          title: 'Lead Reactivation System for Service Businesses',
          description:
            'Old enquiries, stalled quotes, and past customers sitting in your CRM doing nothing. Structured reactivation that turns forgotten contacts into recovered revenue.',
          slug: 'lead-reactivation-system',
          path: '/services/lead-reactivation-system',
          nodeType: 'service',
        },
        {
          title: 'Conversion Layer for Service Businesses',
          description:
            "Visitors arrive interested. Then they can't figure out what to do next. Conversion work that fixes the gap between attention and action — offer clarity, CTA alignment, and enquiry follow-up.",
          slug: 'conversion-layer',
          path: '/services/conversion-layer',
          nodeType: 'service',
        },
        {
          title: 'Conversion Funnel System vs Landing Page Development',
          description:
            'A service decision page comparing isolated landing-page development against a full conversion funnel system for service businesses that need stronger movement from attention to action.',
          slug: 'conversion-funnel-system-vs-landing-page-development',
          path: '/services/conversion-funnel-system-vs-landing-page-development',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'website-crm-integration-explained': {
      services: [
        {
          title: 'CRM Setup for Service Businesses',
          description:
            "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
          slug: 'crm-infrastructure-implementation',
          path: '/services/crm-infrastructure-implementation',
          nodeType: 'service',
        },
        {
          title: 'Website CRM Integration vs Manual Lead Handling',
          description:
            'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
          slug: 'website-crm-integration-vs-manual-lead-handling',
          path: '/services/website-crm-integration-vs-manual-lead-handling',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
    'what-is-a-systems-first-website': {
      services: [
        {
          title: 'Smart Website Systems for Service Businesses',
          description:
            'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
          slug: 'smart-website-systems',
          path: '/services/smart-website-systems',
          nodeType: 'service',
        },
        {
          title: 'WordPress Development for Service Businesses',
          description:
            "A properly built WordPress site is a good start. But the build alone doesn't bring in work. What matters is what happens when someone visits and tries to get in touch.",
          slug: 'wordpress-development',
          path: '/services/wordpress-development',
          nodeType: 'service',
        },
        {
          title: 'System Migration & Platform Consolidation for Service Businesses',
          description:
            'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
          slug: 'system-migration-platform-consolidation',
          path: '/services/system-migration-platform-consolidation',
          nodeType: 'service',
        },
      ],
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Car Detailers — Stop Losing Saturday DMs To 6pm Reads',
          description:
            'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
          slug: 'car-detailing',
          path: '/industries/automotive-services/car-detailing',
          nodeType: 'industry-detail',
        },
      ],
    },
  },
  caseStudy: {
    'car-detailing-customers-not-coming-back': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'cleaning-enquiries-half-getting-lost': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
        {
          title: 'Multi-Channel Lead Capture Systems',
          description:
            'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
          slug: 'multi-channel-lead-capture-systems',
          path: '/resources/multi-channel-lead-capture-systems',
          nodeType: 'resource',
        },
      ],
    },
    'construction-leads-everywhere-untracked': {
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Landscapers — Stop Patio Quotes Drifting, Bring Regulars Back',
          description:
            'For landscapers whose patio quotes drift for six weeks while the homeowner mulls, and whose lapsed regulars never re-engage in spring. Open quote board, friendly check-ins, lapsed-regular nudges.',
          slug: 'landscaping-companies',
          path: '/industries/home-services/landscaping-companies',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'CRM Pipeline Architecture',
          description:
            'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
          slug: 'crm-pipeline-architecture',
          path: '/resources/crm-pipeline-architecture',
          nodeType: 'resource',
        },
        {
          title: 'CRM Pipeline Automation: Stop Losing Leads (Stages + Follow-Up Templates)',
          description:
            'A practical CRM pipeline you can set up in under an hour: stages, automation triggers, and follow-up templates so every lead gets a next step.',
          slug: 'crm-pipeline-automation',
          path: '/resources/crm-pipeline-automation',
          nodeType: 'resource',
        },
        {
          title: 'Sales Pipeline Visibility Framework',
          description:
            'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
          slug: 'sales-pipeline-visibility-framework',
          path: '/resources/sales-pipeline-visibility-framework',
          nodeType: 'resource',
        },
      ],
    },
    'contractor-solid-work-no-reviews': {
      industries: [
        {
          title: 'Electrical Firms — Catch The Fault Call, Close The EV Quote',
          description:
            'For electricians whose Sunday-night fault calls go to voicemail and whose EV charger quotes drift over a long weekend. Fault triage, big-ticket chase, reviews on Maps.',
          slug: 'electrical-companies',
          path: '/industries/home-services/electrical-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Reputation Monitoring Systems',
          description:
            'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
          slug: 'reputation-monitoring-systems',
          path: '/resources/reputation-monitoring-systems',
          nodeType: 'resource',
        },
      ],
    },
    'dental-bookings-people-not-showing-up': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'electrician-quote-replies-too-slow': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'estate-agent-enquiries-going-to-the-wrong-place': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'HVAC Lead Handling Example',
          description:
            'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
          slug: 'hvac-lead-handling-example',
          path: '/resources/hvac-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
      ],
    },
    'estate-agent-enquiries-not-becoming-conversations': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'fitness-trial-signups-not-coming-back': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'garage-customers-came-once-then-disappeared': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'garage-morning-rush-missed-calls': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
      ],
    },
    'hvac-after-hours-calls-going-cold': {
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Lead Routing Models for Service Companies Guide',
          description:
            'Understand the four lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your service business.',
          slug: 'lead-routing-models-for-service-companies',
          path: '/resources/lead-routing-models-for-service-companies',
          nodeType: 'resource',
        },
      ],
    },
    'hvac-past-customers-not-coming-back': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'hvac-peak-season-couldnt-keep-up': {
      industries: [
        {
          title: 'HVAC Firms — Survive The Surge Week, Refill The Service Diary',
          description:
            'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
          slug: 'hvac-companies',
          path: '/industries/home-services/hvac-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for HVAC',
          description:
            'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
          slug: 'missed-call-recovery-for-hvac',
          path: '/resources/missed-call-recovery-for-hvac',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Auto Repair',
          description:
            'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
          slug: 'missed-call-recovery-for-auto-repair',
          path: '/resources/missed-call-recovery-for-auto-repair',
          nodeType: 'resource',
        },
      ],
    },
    'law-firm-consultations-not-becoming-clients': {
      industries: [
        {
          title: 'Lash Studios — Refill-Cycle Rebooks, Quiet Win-Backs',
          description:
            'For lash techs and studios where loyalty turns on the refill nudge nobody sent. We put cycle-aware rebook prompts, warm win-backs, and reviews from the look she loved in place.',
          slug: 'lash-lift-and-extensions',
          path: '/industries/beauty-personal-care/lash-lift-and-extensions',
          nodeType: 'industry-detail',
        },
        {
          title: 'Dental Clinics — Fix Recall And Treatment Drop-Off, Not Just New Patients',
          description:
            'For dental clinics where the recall list is long and treatment plans quietly stall. We put two-touch recall, plan follow-up, and warmer first replies in place so the chair fills from the patients you already have.',
          slug: 'dental-clinics',
          path: '/industries/local-appointment-businesses/dental-clinics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Driving Schools — Turn "I\'ll Book Next Week" Into Booked Lessons',
          description:
            'For driving schools where enquiries drift instead of booking. We put gentle, scheduled follow-up, easy booking, and review prompts in place so the soft maybes land.',
          slug: 'driving-schools',
          path: '/industries/local-appointment-businesses/driving-schools',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Booking Systems Inside Website Infrastructure',
          description:
            'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
          slug: 'booking-systems-inside-website-infrastructure',
          path: '/resources/booking-systems-inside-website-infrastructure',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Architecture for Service Websites',
          description:
            'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
          slug: 'conversion-architecture-for-service-websites',
          path: '/resources/conversion-architecture-for-service-websites',
          nodeType: 'resource',
        },
      ],
    },
    'law-firm-intake-stalled-after-first-enquiry': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'leads-everywhere-no-one-knew-what-was-happening': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'locksmith-late-night-calls-missed': {
      industries: [
        {
          title: 'Plumbing Firms — Catch The 7pm Burst, Close The Bathroom Quote',
          description:
            'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
          slug: 'plumbing-companies',
          path: '/industries/home-services/plumbing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
      ],
    },
    'manchester-salon-steady-clients-growth-stalled': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'pest-control-urgent-calls-cant-get-through': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Mobile Mechanics — Stop Losing Calls From The Glovebox',
          description:
            'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
          slug: 'mobile-mechanics',
          path: '/industries/automotive-services/mobile-mechanics',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Missed Call Recovery for Roofing',
          description:
            'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
          slug: 'missed-call-recovery-for-roofing',
          path: '/resources/missed-call-recovery-for-roofing',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
      ],
    },
    'plumber-emergency-calls-mostly-missed': {
      industries: [
        {
          title: 'Plumbing Firms — Catch The 7pm Burst, Close The Bathroom Quote',
          description:
            'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
          slug: 'plumbing-companies',
          path: '/industries/home-services/plumbing-companies',
          nodeType: 'industry-detail',
        },
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Emergency Call Handling System',
          description:
            'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
          slug: 'hvac-emergency-call-handling-system',
          path: '/resources/hvac-emergency-call-handling-system',
          nodeType: 'resource',
        },
        {
          title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
          description:
            'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
          slug: 'auto-reply-funnel',
          path: '/resources/auto-reply-funnel',
          nodeType: 'resource',
        },
        {
          title: 'Lead Response Time Framework',
          description:
            'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
          slug: 'lead-response-time-framework',
          path: '/resources/lead-response-time-framework',
          nodeType: 'resource',
        },
      ],
    },
    'roofing-quotes-not-being-followed-up': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'roofing-website-looked-fine-work-not-flowing': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Roofing Companies — Stop Re-Roof Quotes Drifting',
          description:
            'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
          slug: 'roofing-companies',
          path: '/industries/home-services/roofing-companies',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'Auto Repair Lead Handling Example',
          description:
            'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
          slug: 'auto-repair-lead-handling-example',
          path: '/resources/auto-repair-lead-handling-example',
          nodeType: 'resource',
        },
        {
          title: 'Conversion Architecture for Service Websites',
          description:
            'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
          slug: 'conversion-architecture-for-service-websites',
          path: '/resources/conversion-architecture-for-service-websites',
          nodeType: 'resource',
        },
        {
          title: 'Designing Websites That Support CRM Systems',
          description:
            'Learn how to design service business websites that natively support CRM integration with proper form architecture, data mapping, and pipeline-aligned page structure.',
          slug: 'designing-websites-that-support-crm-systems',
          path: '/resources/designing-websites-that-support-crm-systems',
          nodeType: 'resource',
        },
      ],
    },
    'salon-bookings-full-chairs-empty': {
      industries: [],
      resources: [
        {
          title: 'Tracking Salon Client Lifetime Value',
          description:
            'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
          slug: 'tracking-salon-client-lifetime-value',
          path: '/resources/tracking-salon-client-lifetime-value',
          nodeType: 'resource',
        },
      ],
    },
    'salon-great-work-going-unseen': {
      industries: [
        {
          title: 'Auto Repair Shops — Stop Losing Brake Jobs To Voicemail',
          description:
            'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
          slug: 'auto-repair',
          path: '/industries/automotive-services/auto-repair',
          nodeType: 'industry-detail',
        },
        {
          title: 'Body Shops — Win The Photo Race After A Bump',
          description:
            'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
          slug: 'body-shops',
          path: '/industries/automotive-services/body-shops',
          nodeType: 'industry-detail',
        },
        {
          title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
          description:
            'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
          slug: 'hair-salons',
          path: '/industries/beauty-personal-care/hair-salons',
          nodeType: 'industry-detail',
        },
      ],
      resources: [
        {
          title: 'HVAC Review Generation Framework',
          description:
            'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
          slug: 'hvac-review-generation-framework',
          path: '/resources/hvac-review-generation-framework',
          nodeType: 'resource',
        },
        {
          title: 'Automotive Review Generation System',
          description:
            'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
          slug: 'automotive-review-generation-system',
          path: '/resources/automotive-review-generation-system',
          nodeType: 'resource',
        },
        {
          title: 'Reputation Monitoring Systems',
          description:
            'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
          slug: 'reputation-monitoring-systems',
          path: '/resources/reputation-monitoring-systems',
          nodeType: 'resource',
        },
      ],
    },
  },
};

export interface ConversionMeta {
  conversionGoal: string;
  conversionPriority: number;
}

export const CONVERSION_META: Record<string, ConversionMeta> = {
  'ai-lead-handling': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'bricks-builder': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'conversion-funnel-system-vs-landing-page-development': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'conversion-layer': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'crm-infrastructure-implementation': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  divi5: {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  ecommerce: {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  elementor: {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'lead-reactivation-system': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'local-seo-authority': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'missed-call-recovery-system': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'reputation-review-systems': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'service-pages-vs-one-generic-services-page': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'smart-website-systems': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'system-migration-platform-consolidation': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'unified-communication-system': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'website-crm-integration-vs-manual-lead-handling': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'website-redesign-system-rebuild': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  'wordpress-development': {
    conversionGoal: 'consultation',
    conversionPriority: 100,
  },
  aichat: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  calendars: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  crm: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  inbox: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  reputation: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  voicecalls: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  workflows: {
    conversionGoal: 'demo',
    conversionPriority: 80,
  },
  'accounting-firms': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'aesthetic-cosmetic-clinics': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'auto-repair': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'automotive-services': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'beauty-personal-care': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'body-shops': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'car-detailing': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  consultants: {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'dental-clinics': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'driving-schools': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'electrical-companies': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'hair-salons': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'home-inspectors': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'home-services': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'hvac-companies': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'landscaping-companies': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'lash-lift-and-extensions': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'legal-professional-services': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'local-appointment-businesses': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'mobile-mechanics': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'mortgage-brokers': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'nail-salons': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'plumbing-companies': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'property-managers': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'real-estate-property-services': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  realtors: {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'repair-shops': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'roofing-companies': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'small-law-firms': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'small-med-spas': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'small-private-clinics': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'tattoo-studios': {
    conversionGoal: 'lead',
    conversionPriority: 90,
  },
  'ai-reception-for-automotive-shops': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'authority-signals-for-local-search': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'authority-signals-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'automotive-crm-pipeline-for-repair-jobs': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'automotive-review-generation-system': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'automotive-service-reminders-explained': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'autonomous-booking-systems-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'booking-systems-for-salons-explained': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'building-revenue-visibility-through-crm-tracking': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'client-reactivation-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'client-reactivation-systems-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'conversion-tracking-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'conversion-tracking-for-service-businesses-explained': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'crm-pipeline-architecture-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'customer-feedback-loop-for-plumbing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'customer-feedback-loop-framework-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'future-crm-visibility-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'future-local-seo-after-google-business-profile-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'google-business-profile-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'google-business-profile-system-architecture': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'how-ai-search-changes-local-business-visibility': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'how-review-automation-improves-local-authority': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'how-smart-website-systems-work-for-local-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'how-to-fix-lead-response-time-in-automotive-businesses-using-crm-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'hvac-crm-pipeline-for-service-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'hvac-emergency-call-handling-mistakes': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'hvac-local-visibility-system-for-service-areas': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'hvac-review-generation-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'lead-automation-framework-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'lead-qualification-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'lead-qualification-framework-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'lead-response-time-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'lead-routing-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'lead-routing-models-for-service-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-seo-for-roofing-companies-explained': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'local-seo-vs-website-optimization': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-service-page-architecture-for-local-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'local-service-page-architecture-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'local-visibility-framework-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'missed-call-recovery-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'multi-channel-lead-capture-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'multi-channel-lead-capture-system-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'negative-reviews-for-auto-repair-shops': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'plumbing-crm-pipeline-for-job-management': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'realtor-local-visibility-system-for-lead-generation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'reducing-salon-no-shows-with-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'reputation-monitoring-systems-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'responding-to-negative-reviews-systematically': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'revenue-visibility-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'review-automation-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'review-automation-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'review-automation-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'review-generation-system-for-local-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'roofing-crm-pipeline-for-estimates': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'roofing-estimate-follow-up-delays': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'roofing-review-generation-system': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'sales-pipeline-visibility-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'sales-pipeline-visibility-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'salon-crm-pipeline-for-client-retention': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'salon-review-generation-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'service-business-follow-up-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'service-page-architecture-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'smart-website-systems-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'systems-first-website-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'tracking-customer-lifetime-value-using-crm': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'tracking-salon-client-lifetime-value': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'website-crm-integration-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'website-crm-integration-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'website-design-that-supports-crm-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'what-is-a-systems-first-website-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-auto-repair-missed-calls-lose-booked-work': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-auto-repair-shops-lose-phone-leads': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-booking-systems-need-website-infrastructure': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-hvac-companies-disappear-from-local-search': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-hvac-companies-lose-leads-after-hours': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-hvac-missed-calls-lose-after-hours-revenue': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-plumbing-companies-lose-jobs-without-crm-pipeline': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-realtors-lose-leads-without-local-visibility': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-roofing-companies-lose-jobs-without-review-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-roofing-companies-lose-leads-during-storm-season': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-roofing-missed-calls-cost-emergency-jobs': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-salons-lose-calls-during-service-hours': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-salons-lose-clients-without-crm-pipeline': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-salons-lose-clients-without-review-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-salons-need-lead-handling-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-service-business-websites-fail-to-convert': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-slow-lead-response-is-killing-automotive-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'why-slow-lead-response-is-killing-hvac-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 40,
  },
  'auto-repair-lead-handling-example': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'auto-reply-funnel': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'automotive-service-reminder-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'booking-systems-inside-website-infrastructure': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'client-reactivation-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'conversion-architecture-for-service-websites': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'conversion-tracking-for-service-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'crm-pipeline-architecture': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'crm-pipeline-automation': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'crm-pipeline-setup-guide-for-plumbing-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'crm-pipeline-setup-guide-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'customer-feedback-loop-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'designing-websites-that-support-crm-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'how-smart-website-systems-work': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'hvac-crm-pipeline-structure': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'hvac-emergency-call-handling-system': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'hvac-lead-handling-example': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'lead-automation-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'lead-qualification-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'lead-response-optimization-checklist-for-hvac-businesses': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'lead-response-time-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-service-page-architecture': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-visibility-framework': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-visibility-optimization-guide-for-hvac-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'local-visibility-optimization-guide-for-realtors': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'missed-call-recovery-for-auto-repair': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'missed-call-recovery-for-hvac': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'missed-call-recovery-for-roofing': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'missed-call-recovery-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'multi-channel-lead-capture-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'reputation-monitoring-systems': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'review-automation-setup-guide-for-roofing-companies': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'review-automation-setup-guide-for-salons': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'review-generation-system': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'roofing-crm-pipeline-structure': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'roofing-estimate-follow-up-workflow': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'roofing-lead-handling-example': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'salon-lead-handling-example': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'service-business-follow-up-automation-guide': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'service-page-architecture-that-converts': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'website-crm-integration-explained': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'what-is-a-systems-first-website': {
    conversionGoal: 'email-capture',
    conversionPriority: 50,
  },
  'car-detailing-customers-not-coming-back': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'cleaning-enquiries-half-getting-lost': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'construction-leads-everywhere-untracked': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'contractor-solid-work-no-reviews': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'dental-bookings-people-not-showing-up': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'electrician-quote-replies-too-slow': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'estate-agent-enquiries-going-to-the-wrong-place': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'estate-agent-enquiries-not-becoming-conversations': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'fitness-trial-signups-not-coming-back': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'garage-customers-came-once-then-disappeared': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'garage-morning-rush-missed-calls': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'hvac-after-hours-calls-going-cold': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'hvac-past-customers-not-coming-back': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'hvac-peak-season-couldnt-keep-up': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'law-firm-consultations-not-becoming-clients': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'law-firm-intake-stalled-after-first-enquiry': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'leads-everywhere-no-one-knew-what-was-happening': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'locksmith-late-night-calls-missed': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'manchester-salon-steady-clients-growth-stalled': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'pest-control-urgent-calls-cant-get-through': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'plumber-emergency-calls-mostly-missed': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'roofing-quotes-not-being-followed-up': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'roofing-website-looked-fine-work-not-flowing': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'salon-bookings-full-chairs-empty': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
  'salon-great-work-going-unseen': {
    conversionGoal: 'consultation',
    conversionPriority: 70,
  },
};
