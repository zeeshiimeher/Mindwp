import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bell,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock,
  Compass,
  Database,
  Eye,
  Filter,
  Inbox,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Repeat,
  Route as RouteIcon,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

/**
 * Controlled icon registry for production section components.
 *
 * Why a key map:
 *   - Server-rendered renderers can pass plain string keys to client
 *     components without serialising function references.
 *   - Locks the design system to a vetted icon vocabulary instead of
 *     letting callers import any LucideIcon ad-hoc.
 *   - Consumers add new icons by extending this file, not by importing
 *     lucide-react directly inside section components.
 */
export const SECTION_ICONS = {
  activity: Activity,
  alert: AlertTriangle,
  arrow: ArrowRight,
  bell: Bell,
  building: Building2,
  check: Check,
  'check-circle': CheckCircle2,
  clipboard: ClipboardList,
  clock: Clock,
  compass: Compass,
  database: Database,
  eye: Eye,
  filter: Filter,
  inbox: Inbox,
  'line-chart': LineChart,
  mail: Mail,
  'map-pin': MapPin,
  message: MessageCircle,
  minus: Minus,
  phone: Phone,
  repeat: Repeat,
  route: RouteIcon,
  search: Search,
  shield: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  users: Users,
  workflow: Workflow,
  x: X,
  zap: Zap,
} as const satisfies Record<string, LucideIcon>;

export type SectionIconKey = keyof typeof SECTION_ICONS;

export function resolveSectionIcon(key: SectionIconKey | undefined): LucideIcon | null {
  if (!key) return null;
  return SECTION_ICONS[key] ?? null;
}
