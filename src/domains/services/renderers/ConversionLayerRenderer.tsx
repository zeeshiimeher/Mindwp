import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['conversion-layer'];
  slug: string;
}

const sections = [
  { key: 'leakagePattern', tone: 'white' },
  { key: 'decisionSurface', tone: 'mist' },
  { key: 'improvementPath', tone: 'gradient-mist' },
  { key: 'parentHandoff', tone: 'white' },
  { key: 'fitBoundaries', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function ConversionLayerRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'cvl',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'subtle',
  });
}
