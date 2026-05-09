import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['bricks-builder'];
  slug: string;
}

const sections = [
  { key: 'capabilityFit', tone: 'white' },
  { key: 'deliveryPath', tone: 'mist' },
  { key: 'proofContext', tone: 'white' },
  { key: 'boundaries', tone: 'mist' },
  { key: 'nextStep', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function BricksBuilderRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'bricks',
    sections,
    heroChipDotVariant: 'subtle',
  });
}
