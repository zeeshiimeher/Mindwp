import {
  Car,
  Droplets,
  HeartPulse,
  House,
  type LucideIcon,
  Scissors,
  Shield,
  Wind,
  Wrench,
} from 'lucide-react';

export type IndustryCategory = 'automotive-services' | 'beauty-personal-care' | 'home-services';

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
    description: 'Systems for roofing, HVAC, and plumbing businesses.',
    landingSubtitle: 'Roofing, HVAC, Plumbing',
    icon: House,
    href: '/industries/home-services',
    category: 'home-services',
    priority: 'primary',
    prioritySignal: 'Primary Lane',
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
    slug: 'automotive-services',
    name: 'Automotive Services',
    description: 'Systems for auto repair shops that need clearer booking and trust flow.',
    landingSubtitle: 'Auto Repair',
    icon: Car,
    href: '/industries/automotive-services',
    category: 'automotive-services',
    priority: 'coverage',
    prioritySignal: 'Coverage Lane',
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
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Systems for hair salons and small med spas.',
    landingSubtitle: 'Hair Salons, Small Med Spas',
    icon: Scissors,
    href: '/industries/beauty-personal-care',
    category: 'beauty-personal-care',
    priority: 'expansion',
    prioritySignal: 'Expansion Lane',
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
