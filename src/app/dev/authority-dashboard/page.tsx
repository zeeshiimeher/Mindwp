import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import {
  getContentHealth,
  getCTAHealth,
  getGraphHealth,
  getValidatorStatus,
} from '@/lib/dev/systemMonitor';

import { ContentHealthPanel } from './panels/ContentHealthPanel';
import { CTAHealthPanel } from './panels/CTAHealthPanel';
import { GraphHealthPanel } from './panels/GraphHealthPanel';
import { ValidatorStatusPanel } from './panels/ValidatorStatusPanel';

export const dynamic = 'force-dynamic';

export default async function AuthorityDashboardPage() {
  await ensureGraphInitialized();

  const graphHealth = getGraphHealth();
  const ctaHealth = getCTAHealth();
  const contentHealth = getContentHealth();
  const validatorStatus = getValidatorStatus();

  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '1.75rem', margin: '0 0 0.25rem' }}>System Monitor</h1>
      <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.85rem' }}>
        Live system health from registries and the content graph.
      </p>

      <GraphHealthPanel data={graphHealth} />
      <CTAHealthPanel data={ctaHealth} />
      <ContentHealthPanel data={contentHealth} />
      <ValidatorStatusPanel data={validatorStatus} />
    </div>
  );
}
