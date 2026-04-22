import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { MissedCallRecoverySystemRenderer } from '@/domains/services/renderers/MissedCallRecoverySystemRenderer';

export default function MissedCallRecoverySystemPage() {
  return (
    <MissedCallRecoverySystemRenderer
      data={missedCallRecoverySystemPage}
      slug='missed-call-recovery-system'
    />
  );
}
