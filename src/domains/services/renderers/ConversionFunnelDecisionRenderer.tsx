import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['conversion-funnel-system-vs-landing-page-development'];
  slug: string;
}

const sections = [
  { key: 'decisionProblem', tone: 'white' },
  { key: 'comparison', tone: 'mist' },
  { key: 'chooseStructured', tone: 'white' },
  { key: 'boundaries', tone: 'mist' },
  { key: 'nextStep', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function ConversionFunnelDecisionRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'funnel-decision',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
