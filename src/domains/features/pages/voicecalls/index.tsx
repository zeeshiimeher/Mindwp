import type { FeaturePageData } from '@/domains/features/types';
import VoiceCallsRenderer from '@/domains/features/renderers/VoiceCallsRenderer';

interface VoiceCallsPageProps {
  data: FeaturePageData;
}

export default function VoiceCallsPage({ data }: VoiceCallsPageProps) {
  return <VoiceCallsRenderer data={data} />;
}
