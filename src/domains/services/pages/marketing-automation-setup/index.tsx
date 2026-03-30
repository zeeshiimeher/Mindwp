import { marketingAutomationSetupPage } from '@/domains/services/data/marketing-automation-setup';
import { MarketingAutomationSetupRenderer } from '@/domains/services/renderers/MarketingAutomationSetupRenderer';

export default function MarketingAutomationSetupPage() {
  return (
    <MarketingAutomationSetupRenderer
      data={marketingAutomationSetupPage}
      slug='marketing-automation-setup'
    />
  );
}
