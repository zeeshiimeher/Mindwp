import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['elementor'];
  slug: string;
}

const sections = [
  { key: 'capabilityFit', tone: 'white' },
  { key: 'deliveryPath', tone: 'mist' },
  { key: 'proofContext', tone: 'white' },
  { key: 'boundaries', tone: 'mist' },
  { key: 'nextStep', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function ElementorRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'elementor',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
