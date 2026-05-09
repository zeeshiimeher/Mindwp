import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['system-migration-platform-consolidation'];
  slug: string;
}

const sections = [
  { key: 'migrationSignals', tone: 'white' },
  { key: 'consolidationPath', tone: 'mist' },
  { key: 'riskBoundaries', tone: 'gradient-mist' },
  { key: 'handoffPlan', tone: 'white' },
  { key: 'fitBoundaries', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function SystemMigrationPlatformConsolidationRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'migration',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'subtle',
  });
}
