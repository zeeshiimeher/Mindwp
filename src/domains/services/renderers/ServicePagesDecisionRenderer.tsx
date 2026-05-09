import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['service-pages-vs-one-generic-services-page'];
  slug: string;
}

const sections = [
  { key: 'decisionProblem', tone: 'white' },
  { key: 'comparison', tone: 'mist' },
  { key: 'chooseServicePages', tone: 'white' },
  { key: 'boundaries', tone: 'mist' },
  { key: 'nextStep', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function ServicePagesDecisionRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'service-pages-decision',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
