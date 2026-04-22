import { crmAutomationPage } from '@/domains/services/data/crm-automation';
import { CRMAutomationRenderer } from '@/domains/services/renderers/CRMAutomationRenderer';

export default function CRMInfrastructureImplementationPage() {
  return (
    <CRMAutomationRenderer data={crmAutomationPage} slug='crm-infrastructure-implementation' />
  );
}
