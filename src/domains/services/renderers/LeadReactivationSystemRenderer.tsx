import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['lead-reactivation-system'];
  slug: string;
}

const sections = [
  { key: 'dormantLeadMap', tone: 'white' },
  { key: 'reactivationPath', tone: 'mist' },
  { key: 'dataReadiness', tone: 'gradient-mist' },
  { key: 'handoffBack', tone: 'white' },
  { key: 'fitBoundaries', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function LeadReactivationSystemRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'reactivate',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'subtle',
  });
}
