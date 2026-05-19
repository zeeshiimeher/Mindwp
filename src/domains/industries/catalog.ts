import {
  Activity,
  Bone,
  Droplets,
  Ear,
  Eye,
  HeartPulse,
  House,
  Leaf,
  type LucideIcon,
  Shield,
  Smile,
  Stethoscope,
  Trees,
  Wind,
  Wrench,
} from 'lucide-react';

export type IndustryCategory = 'home-services' | 'healthcare-practices';

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
  isLive?: boolean;
}

export const INDUSTRY_CATALOG: IndustryCatalogEntry[] = [
  {
    slug: 'home-services',
    name: 'Home Services',
    description: 'Approved lane for home service companies.',
    landingSubtitle: 'HVAC, plumbing, roofing, foundation, septic, tree service',
    icon: House,
    href: '/industries/home-services',
    category: 'home-services',
    priority: 'primary',
    prioritySignal: 'Approved Lane',
    isLive: true,
  },
  {
    slug: 'hvac-companies',
    name: 'HVAC Companies',
    description: 'Website clarity, local trust, seasonal enquiries, and follow-up for HVAC teams.',
    icon: Wind,
    href: '/industries/home-services/hvac-companies',
    category: 'home-services',
    component: 'HvacCompanies',
    isLive: true,
  },
  {
    slug: 'plumbing-companies',
    name: 'Plumbing Companies',
    description: 'Service clarity, response paths, local trust, and review proof for plumbers.',
    icon: Droplets,
    href: '/industries/home-services/plumbing-companies',
    category: 'home-services',
    component: 'PlumbingCompanies',
    isLive: true,
  },
  {
    slug: 'roofing-companies',
    name: 'Roofing Companies',
    description: 'Inspection enquiries, quote follow-up, local proof, and trust for roofers.',
    icon: Shield,
    href: '/industries/home-services/roofing-companies',
    category: 'home-services',
    component: 'RoofingCompanies',
    isLive: true,
  },
  {
    slug: 'foundation-repair-companies',
    name: 'Foundation Repair Companies',
    description: 'High-trust consultation paths, proof, and follow-up for foundation repair.',
    icon: Wrench,
    href: '/industries/home-services/foundation-repair-companies',
    category: 'home-services',
    component: 'FoundationRepairCompanies',
    isLive: true,
  },
  {
    slug: 'septic-services-companies',
    name: 'Septic Services Companies',
    description: 'Maintenance reminders, repeat booking, local trust, and follow-up.',
    icon: Leaf,
    href: '/industries/home-services/septic-services-companies',
    category: 'home-services',
    component: 'SepticServicesCompanies',
    isLive: true,
  },
  {
    slug: 'tree-service-companies',
    name: 'Tree Service Companies',
    description: 'Estimate follow-up, local proof, and trust for tree service companies.',
    icon: Trees,
    href: '/industries/home-services/tree-service-companies',
    category: 'home-services',
    component: 'TreeServiceCompanies',
    isLive: true,
  },
  {
    slug: 'healthcare-practices',
    name: 'Healthcare Practices',
    description: 'Approved lane for specialist clinics and private practices.',
    landingSubtitle: 'Specialist clinic and private practice pages',
    icon: HeartPulse,
    href: '/industries/healthcare-practices',
    category: 'healthcare-practices',
    priority: 'primary',
    prioritySignal: 'Approved Lane',
    isLive: true,
  },
  {
    slug: 'dental-implant-clinics',
    name: 'Dental Implant Clinics',
    description: 'Treatment clarity, consultation booking, trust, and follow-up.',
    icon: Smile,
    href: '/industries/healthcare-practices/dental-implant-clinics',
    category: 'healthcare-practices',
    component: 'DentalImplantClinics',
    isLive: true,
  },
  {
    slug: 'orthodontic-clinics',
    name: 'Orthodontic Clinics',
    description: 'Treatment enquiry clarity, consultation paths, and follow-up ownership.',
    icon: Smile,
    href: '/industries/healthcare-practices/orthodontic-clinics',
    category: 'healthcare-practices',
    component: 'OrthodonticClinics',
    isLive: true,
  },
  {
    slug: 'oral-surgery-clinics',
    name: 'Oral Surgery Clinics',
    description: 'Procedure clarity, specialist trust, consultation requests, and follow-up.',
    icon: Stethoscope,
    href: '/industries/healthcare-practices/oral-surgery-clinics',
    category: 'healthcare-practices',
    component: 'OralSurgeryClinics',
    isLive: true,
  },
  {
    slug: 'dermatology-clinics',
    name: 'Dermatology Clinics',
    description: 'Service clarity, provider trust, appointment requests, and reviews.',
    icon: Activity,
    href: '/industries/healthcare-practices/dermatology-clinics',
    category: 'healthcare-practices',
    component: 'DermatologyClinics',
    isLive: true,
  },
  {
    slug: 'ent-sinus-clinics',
    name: 'ENT / Sinus Clinics',
    description: 'Specialist trust, symptom-to-service clarity, and consultation requests.',
    icon: Ear,
    href: '/industries/healthcare-practices/ent-sinus-clinics',
    category: 'healthcare-practices',
    component: 'EntSinusClinics',
    isLive: true,
  },
  {
    slug: 'podiatry-clinics',
    name: 'Podiatry Clinics',
    description: 'Local condition search, service clarity, booking, follow-up, and reviews.',
    icon: Activity,
    href: '/industries/healthcare-practices/podiatry-clinics',
    category: 'healthcare-practices',
    component: 'PodiatryClinics',
    isLive: true,
  },
  {
    slug: 'hearing-aid-clinics',
    name: 'Hearing Aid Clinics',
    description: 'Testing enquiries, lifecycle follow-up, after-care reminders, and reviews.',
    icon: Ear,
    href: '/industries/healthcare-practices/hearing-aid-clinics',
    category: 'healthcare-practices',
    component: 'HearingAidClinics',
    isLive: true,
  },
  {
    slug: 'physiotherapy-clinics',
    name: 'Physiotherapy Clinics',
    description: 'Appointment paths, service clarity, follow-up, reviews, and local trust.',
    icon: Activity,
    href: '/industries/healthcare-practices/physiotherapy-clinics',
    category: 'healthcare-practices',
    component: 'PhysiotherapyClinics',
    isLive: true,
  },
  {
    slug: 'optometry-clinics',
    name: 'Optometry Clinics',
    description: 'Exam booking, service clarity, reminders, local trust, and reviews.',
    icon: Eye,
    href: '/industries/healthcare-practices/optometry-clinics',
    category: 'healthcare-practices',
    component: 'OptometryClinics',
    isLive: true,
  },
  {
    slug: 'orthopedic-clinics',
    name: 'Orthopedic Clinics',
    description: 'Specialist trust, consultation paths, service clarity, and follow-up.',
    icon: Bone,
    href: '/industries/healthcare-practices/orthopedic-clinics',
    category: 'healthcare-practices',
    component: 'OrthopedicClinics',
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

    const MAX_SUBTITLE_LEN = 72;
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
