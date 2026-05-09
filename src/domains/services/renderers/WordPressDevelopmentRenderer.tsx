import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['wordpress-development'];
  slug: string;
}

const sections = [
  { key: 'fitContext', tone: 'white' },
  { key: 'buildPath', tone: 'mist' },
  { key: 'operatingBoundaries', tone: 'gradient-mist' },
  { key: 'handoffIntoSystems', tone: 'white' },
  { key: 'fitBoundaries', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function WordPressDevelopmentRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'wp',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'subtle',
  });
}
