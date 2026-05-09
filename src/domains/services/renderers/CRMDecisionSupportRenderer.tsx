import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['website-crm-integration-vs-manual-lead-handling'];
  slug: string;
}

const sections = [
  { key: 'decisionProblem', tone: 'white' },
  { key: 'comparison', tone: 'mist' },
  { key: 'chooseCRM', tone: 'white' },
  { key: 'boundaries', tone: 'mist' },
  { key: 'nextStep', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function CRMDecisionSupportRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'crm-decision',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
