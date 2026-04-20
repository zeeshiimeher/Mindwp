import VoiceCallsRenderer from '@/domains/features/renderers/VoiceCallsRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface VoiceCallsPageProps {
  data: FeaturePageData;
}

export default function VoiceCallsPage({ data }: VoiceCallsPageProps) {
  return <VoiceCallsRenderer data={data} />;
}
