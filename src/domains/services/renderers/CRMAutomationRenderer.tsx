import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['crm-infrastructure-implementation'];
  slug: string;
}

const sections = [
  { key: 'ownershipGap', tone: 'white' },
  { key: 'leadOwnershipBoard', tone: 'mist' },
  { key: 'followUpPath', tone: 'gradient-dark' },
  { key: 'statusVisibility', tone: 'white' },
  { key: 'handoffBoundaries', tone: 'mist' },
  { key: 'readinessFilter', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function CRMAutomationRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'crm',
    sections,
    faq: true,
    faqTone: 'mist',
    faqVariant: 'split',
    heroChipDotVariant: 'subtle',
  });
}
