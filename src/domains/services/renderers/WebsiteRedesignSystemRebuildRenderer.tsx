import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['website-redesign-system-rebuild'];
  slug: string;
}

const sections = [
  { key: 'decisionProblem', tone: 'white' },
  { key: 'comparison', tone: 'mist' },
  { key: 'rebuildTriggers', tone: 'gradient-mist' },
  { key: 'boundaries', tone: 'white' },
  { key: 'nextStep', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function WebsiteRedesignSystemRebuildRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'redesign',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
