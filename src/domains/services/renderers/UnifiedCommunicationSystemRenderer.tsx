import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['unified-communication-system'];
  slug: string;
}

const sections = [
  { key: 'channelScatter', tone: 'white' },
  { key: 'ownershipSurface', tone: 'mist' },
  { key: 'routingPath', tone: 'gradient-mist' },
  { key: 'handoffRules', tone: 'white' },
  { key: 'fitBoundaries', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function UnifiedCommunicationSystemRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'unified',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'subtle',
  });
}
