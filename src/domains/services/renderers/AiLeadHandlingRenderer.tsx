import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['ai-lead-handling'];
  slug: string;
}

const sections = [
  { key: 'responseGap', tone: 'white' },
  { key: 'channelSurface', tone: 'mist' },
  { key: 'handledPath', tone: 'gradient-dark' },
  { key: 'aiBoundary', tone: 'white' },
  { key: 'scenarioReadiness', tone: 'gradient-mist' },
  { key: 'fitFilter', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function AiLeadHandlingRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'aih',
    sections,
    faq: true,
    faqTone: 'white',
    faqVariant: 'split',
    heroChipDotVariant: 'warn',
  });
}
