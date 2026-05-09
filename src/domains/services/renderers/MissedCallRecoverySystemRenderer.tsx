import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import {
  renderServiceSkeletonPage,
  type ServiceSkeletonSection,
} from '@/domains/services/renderers/ServiceSkeletonRenderer';

interface Props {
  data: ServicePageDataBySlug['missed-call-recovery-system'];
  slug: string;
}

const sections = [
  { key: 'missedCallMoment', tone: 'white' },
  { key: 'recoveryPath', tone: 'mist' },
  { key: 'routingBoundary', tone: 'gradient-mist' },
  { key: 'fitSignals', tone: 'white' },
  { key: 'handoffBack', tone: 'mist' },
] satisfies readonly ServiceSkeletonSection[];

export function MissedCallRecoverySystemRenderer({ data, slug: _slug }: Props) {
  return renderServiceSkeletonPage({
    data,
    prefix: 'missed-call',
    sections,
    faq: true,
    faqTone: 'white',
    heroChipDotVariant: 'warn',
  });
}
