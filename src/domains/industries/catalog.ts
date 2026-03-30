import {
  BriefcaseBusiness,
  Calculator,
  Car,
  Droplets,
  HeartPulse,
  Hospital,
  House,
  Landmark,
  type LucideIcon,
  Scissors,
  Shield,
  Shovel,
  Sparkles,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';

export type IndustryCategory =
  | 'automotive-services'
  | 'beauty-personal-care'
  | 'home-services'
  | 'legal-professional-services'
  | 'local-appointment-businesses'
  | 'real-estate-property-services';

export type IndustryPriority = 'coverage' | 'expansion' | 'primary';

export interface IndustryCatalogEntry {
  slug: string;
  name: string;
  description: string;
  landingSubtitle?: string;
  icon: LucideIcon;
  href: string;
  category: IndustryCategory;
  component?: string;
  priority?: IndustryPriority;
  prioritySignal?: string;
  ctaLabel?: string;
  isLive?: boolean;
}

export const INDUSTRY_CATALOG: IndustryCatalogEntry[] = [
  {
    slug: 'home-services',
    name: 'Home Services',
    description: 'Systems for roofing, HVAC, plumbing, electrical, and landscaping businesses.',
    landingSubtitle: 'Roofing, HVAC, Plumbing, Electrical, Landscaping',
    icon: House,
    href: '/industries/home-services',
    category: 'home-services',
    priority: 'primary',
    prioritySignal: 'Primary Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'roofing-companies',
    name: 'Roofing',
    description: 'Lead handling, inspection booking, and follow-up for roofers.',
    icon: Shield,
    href: '/industries/home-services/roofing-companies',
    category: 'home-services',
    component: 'RoofingCompanies',
    isLive: true,
  },
  {
    slug: 'hvac-companies',
    name: 'HVAC',
    description: 'Service booking, maintenance follow-up, and local trust for HVAC teams.',
    icon: Wind,
    href: '/industries/home-services/hvac-companies',
    category: 'home-services',
    component: 'HvacCompanies',
    isLive: true,
  },
  {
    slug: 'plumbing-companies',
    name: 'Plumbing',
    description: 'Emergency routing, visit booking, and follow-up for plumbers.',
    icon: Droplets,
    href: '/industries/home-services/plumbing-companies',
    category: 'home-services',
    component: 'PlumbingCompanies',
    isLive: true,
  },
  {
    slug: 'electrical-companies',
    name: 'Electrical',
    description: 'Service routing, quote handling, and local trust for electrical teams.',
    icon: Zap,
    href: '/industries/home-services/electrical-companies',
    category: 'home-services',
    component: 'ElectricalCompanies',
    isLive: true,
  },
  {
    slug: 'landscaping-companies',
    name: 'Landscaping',
    description: 'Estimate booking, seasonal follow-up, and local proof for landscaping teams.',
    icon: Shovel,
    href: '/industries/home-services/landscaping-companies',
    category: 'home-services',
    component: 'LandscapingCompanies',
    isLive: true,
  },
  {
    slug: 'automotive-services',
    name: 'Automotive Services',
    description:
      'Systems for auto repair, detailing, body shops, and mobile mechanics that need clearer booking and trust flow.',
    landingSubtitle: 'Auto Repair, Car Detailing, Mobile Mechanics, Body Shops',
    icon: Car,
    href: '/industries/automotive-services',
    category: 'automotive-services',
    priority: 'coverage',
    prioritySignal: 'Coverage Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair',
    description: 'Diagnostics, estimate follow-up, and local trust systems for repair shops.',
    icon: Wrench,
    href: '/industries/automotive-services/auto-repair',
    category: 'automotive-services',
    component: 'AutoRepair',
    isLive: true,
  },
  {
    slug: 'car-detailing',
    name: 'Car Detailing',
    description:
      'Package clarity, booking flow, and repeat-visit systems for detailing businesses.',
    icon: Sparkles,
    href: '/industries/automotive-services/car-detailing',
    category: 'automotive-services',
    component: 'CarDetailing',
    isLive: true,
  },
  {
    slug: 'mobile-mechanics',
    name: 'Mobile Mechanics',
    description:
      'Service-area routing, booking flow, and local trust systems for mobile mechanics.',
    icon: Car,
    href: '/industries/automotive-services/mobile-mechanics',
    category: 'automotive-services',
    component: 'MobileMechanics',
    isLive: true,
  },
  {
    slug: 'body-shops',
    name: 'Body Shops',
    description: 'Assessment flow, estimate follow-up, and local trust systems for body shops.',
    icon: Shield,
    href: '/industries/automotive-services/body-shops',
    category: 'automotive-services',
    component: 'BodyShops',
    isLive: true,
  },
  {
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Solutions for salons, clinics, spas, and personal care teams.',
    landingSubtitle:
      'Aesthetic & Cosmetic Clinics, Hair Salons, Nail Salons, Small Med Spas, Lash Lift & Extensions',
    icon: Scissors,
    href: '/industries/beauty-personal-care',
    category: 'beauty-personal-care',
    priority: 'expansion',
    prioritySignal: 'Expansion Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'aesthetic-cosmetic-clinics',
    name: 'Aesthetic & Cosmetic Clinics',
    description:
      'Consultation flow, booking support, and trust-building systems for treatment-led clinics.',
    icon: Sparkles,
    href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
    category: 'beauty-personal-care',
    component: 'AestheticCosmeticClinics',
    isLive: true,
  },
  {
    slug: 'hair-salons',
    name: 'Hair Salons',
    description: 'Booking flow, reminder support, and repeat-visit systems for salons.',
    icon: Scissors,
    href: '/industries/beauty-personal-care/hair-salons',
    category: 'beauty-personal-care',
    component: 'HairSalons',
    isLive: true,
  },
  {
    slug: 'nail-salons',
    name: 'Nail Salons',
    description: 'Service clarity, reminder support, and repeat-visit systems for nail salons.',
    icon: Sparkles,
    href: '/industries/beauty-personal-care/nail-salons',
    category: 'beauty-personal-care',
    component: 'NailSalons',
    isLive: true,
  },
  {
    slug: 'small-med-spas',
    name: 'Small Med Spas',
    description:
      'Consultation flow, booking support, and trust-building systems for small med spas.',
    icon: HeartPulse,
    href: '/industries/beauty-personal-care/small-med-spas',
    category: 'beauty-personal-care',
    component: 'SmallMedSpas',
    isLive: true,
  },
  {
    slug: 'lash-lift-and-extensions',
    name: 'Lash Lift & Extensions',
    description: 'Booking and management for lash artists.',
    icon: Scissors,
    href: '/industries/beauty-personal-care/lash-lift-and-extensions',
    category: 'beauty-personal-care',
    component: 'LashExtensions',
    isLive: true,
  },
  {
    slug: 'real-estate-property-services',
    name: 'Real Estate & Property Services',
    description:
      'Systems for realtors, property managers, inspectors, and mortgage brokers that need clearer trust and enquiry handling.',
    landingSubtitle: 'Realtors, Property Managers, Home Inspectors, Mortgage Brokers',
    icon: Landmark,
    href: '/industries/real-estate-property-services',
    category: 'real-estate-property-services',
    priority: 'coverage',
    prioritySignal: 'Coverage Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'realtors',
    name: 'Realtors',
    description: 'Appointment flow, nurture follow-up, and local trust systems for realtors.',
    icon: Landmark,
    href: '/industries/real-estate-property-services/realtors',
    category: 'real-estate-property-services',
    component: 'Realtors',
    isLive: true,
  },
  {
    slug: 'property-managers',
    name: 'Property Managers',
    description:
      'Owner and tenant routing, maintenance coordination, and trust systems for property managers.',
    icon: House,
    href: '/industries/real-estate-property-services/property-managers',
    category: 'real-estate-property-services',
    component: 'PropertyManagers',
    isLive: true,
  },
  {
    slug: 'home-inspectors',
    name: 'Home Inspectors',
    description:
      'Inspection booking, preparation flow, and local trust systems for home inspectors.',
    icon: Hospital,
    href: '/industries/real-estate-property-services/home-inspectors',
    category: 'real-estate-property-services',
    component: 'HomeInspectors',
    isLive: true,
  },
  {
    slug: 'mortgage-brokers',
    name: 'Mortgage Brokers',
    description:
      'Qualification routing, consultation flow, and trust systems for mortgage brokers.',
    icon: Landmark,
    href: '/industries/real-estate-property-services/mortgage-brokers',
    category: 'real-estate-property-services',
    component: 'MortgageBrokers',
    isLive: true,
  },
  {
    slug: 'legal-professional-services',
    name: 'Legal & Professional Services',
    description:
      'Systems for small law firms, accountants, and consultants that need stronger trust, qualification, and follow-up flow.',
    landingSubtitle: 'Small Law Firms, Accounting Firms, Consultants',
    icon: BriefcaseBusiness,
    href: '/industries/legal-professional-services',
    category: 'legal-professional-services',
    priority: 'coverage',
    prioritySignal: 'Coverage Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'small-law-firms',
    name: 'Small Law Firms',
    description: 'Matter qualification, consultation flow, and trust systems for small law firms.',
    icon: BriefcaseBusiness,
    href: '/industries/legal-professional-services/small-law-firms',
    category: 'legal-professional-services',
    component: 'SmallLawFirms',
    isLive: true,
  },
  {
    slug: 'accounting-firms',
    name: 'Accounting Firms',
    description:
      'Service-fit qualification, consultation flow, and trust systems for accounting firms.',
    icon: Calculator,
    href: '/industries/legal-professional-services/accounting-firms',
    category: 'legal-professional-services',
    component: 'AccountingFirms',
    isLive: true,
  },
  {
    slug: 'consultants',
    name: 'Consultants',
    description: 'Qualification routing, discovery flow, and trust systems for consultants.',
    icon: BriefcaseBusiness,
    href: '/industries/legal-professional-services/consultants',
    category: 'legal-professional-services',
    component: 'Consultants',
    isLive: true,
  },
  {
    slug: 'local-appointment-businesses',
    name: 'Local Appointment Businesses',
    description:
      'Systems for tattoo studios, driving schools, repair shops, dental clinics, and small clinics that rely on booking and reputation.',
    landingSubtitle:
      'Tattoo Studios, Driving Schools, Repair Shops, Small Private Clinics, Dental Clinics',
    icon: Hospital,
    href: '/industries/local-appointment-businesses',
    category: 'local-appointment-businesses',
    priority: 'coverage',
    prioritySignal: 'Coverage Lane',
    ctaLabel: 'Explore Category',
    isLive: true,
  },
  {
    slug: 'tattoo-studios',
    name: 'Tattoo Studios',
    description: 'Consultation flow, booking readiness, and trust systems for tattoo studios.',
    icon: Sparkles,
    href: '/industries/local-appointment-businesses/tattoo-studios',
    category: 'local-appointment-businesses',
    component: 'TattooStudios',
    isLive: true,
  },
  {
    slug: 'driving-schools',
    name: 'Driving Schools',
    description: 'Lesson qualification, booking flow, and trust systems for driving schools.',
    icon: Car,
    href: '/industries/local-appointment-businesses/driving-schools',
    category: 'local-appointment-businesses',
    component: 'DrivingSchools',
    isLive: true,
  },
  {
    slug: 'repair-shops',
    name: 'Repair Shops',
    description: 'Service qualification, booking flow, and trust systems for repair shops.',
    icon: Wrench,
    href: '/industries/local-appointment-businesses/repair-shops',
    category: 'local-appointment-businesses',
    component: 'RepairShops',
    isLive: true,
  },
  {
    slug: 'small-private-clinics',
    name: 'Small Private Clinics',
    description:
      'Appointment qualification, booking flow, and trust systems for small private clinics.',
    icon: HeartPulse,
    href: '/industries/local-appointment-businesses/small-private-clinics',
    category: 'local-appointment-businesses',
    component: 'SmallPrivateClinics',
    isLive: true,
  },
  {
    slug: 'dental-clinics',
    name: 'Dental Clinics',
    description:
      'Appointment qualification, treatment-flow clarity, and trust systems for dental clinics.',
    icon: HeartPulse,
    href: '/industries/local-appointment-businesses/dental-clinics',
    category: 'local-appointment-businesses',
    component: 'DentalClinics',
    isLive: true,
  },
];

export function getIndustryBySlug(slug: string): IndustryCatalogEntry | undefined {
  return INDUSTRY_CATALOG.find(industry => industry.slug === slug);
}

export function getIndustriesByCategory(category: IndustryCategory): IndustryCatalogEntry[] {
  return INDUSTRY_CATALOG.filter(industry => industry.category === category);
}

export function getCategoryIndexPage(category: IndustryCategory): IndustryCatalogEntry | undefined {
  return INDUSTRY_CATALOG.find(industry => industry.slug === category);
}

export function getCategoryIndexIndustries(): IndustryCatalogEntry[] {
  const out = INDUSTRY_CATALOG.filter(industry => industry.slug === industry.category);

  if (import.meta.env?.DEV) {
    const warnedContainer = globalThis as typeof globalThis & {
      __mindwpIndustriesSubtitleWarned?: Set<string>;
    };
    const warned = (warnedContainer.__mindwpIndustriesSubtitleWarned ??= new Set<string>());

    const MAX_SUBTITLE_LEN = 56;
    for (const ind of out) {
      const subtitle = ind.landingSubtitle?.trim();
      if (!subtitle) continue;

      if (subtitle.length > MAX_SUBTITLE_LEN && !warned.has(ind.slug)) {
        warned.add(ind.slug);
        // eslint-disable-next-line no-console
        console.warn(
          `[industries] landingSubtitle is long (${subtitle.length} chars) and may wrap awkwardly: ${ind.slug}`
        );
      }
    }
  }

  return out;
}
