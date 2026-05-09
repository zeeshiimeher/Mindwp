import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['reputation-review-systems'];
  slug: string;
}

const sections = [
  { key: 'trustGap', tone: 'white' },
  { key: 'reviewTiming', tone: 'mist' },
  { key: 'feedbackRoute', tone: 'gradient-dark' },
  { key: 'monitoringBoard', tone: 'white' },
  { key: 'localTrustHandoff', tone: 'mist' },
  { key: 'fitFilter', tone: 'white' },
] satisfies readonly ServiceSkeletonSection[];

export function ReputationReviewSystemsRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'rep',
    sections,
    faq: true,
    faqTone: 'mist',
    faqVariant: 'split',
    heroChipDotVariant: 'warn',
  });
}
