import { systemMigrationPlatformConsolidationPage } from '@/domains/services/data/system-migration-platform-consolidation';
import { SystemMigrationPlatformConsolidationRenderer } from '@/domains/services/renderers/SystemMigrationPlatformConsolidationRenderer';

export default function SystemMigrationPlatformConsolidationPage() {
  return (
    <SystemMigrationPlatformConsolidationRenderer
      data={systemMigrationPlatformConsolidationPage}
      slug='system-migration-platform-consolidation'
    />
  );
}
