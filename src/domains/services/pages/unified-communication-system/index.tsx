import { unifiedCommunicationSystemPage } from '@/domains/services/data/unified-communication-system';
import { UnifiedCommunicationSystemRenderer } from '@/domains/services/renderers/UnifiedCommunicationSystemRenderer';

export default function UnifiedCommunicationSystemPage() {
  return (
    <UnifiedCommunicationSystemRenderer
      data={unifiedCommunicationSystemPage}
      slug='unified-communication-system'
    />
  );
}
