import { websiteRedesignSystemRebuildPage } from '@/domains/services/data/website-redesign-system-rebuild';
import { WebsiteRedesignSystemRebuildRenderer } from '@/domains/services/renderers/WebsiteRedesignSystemRebuildRenderer';

export default function WebsiteRedesignSystemRebuildPage() {
  return (
    <WebsiteRedesignSystemRebuildRenderer
      data={websiteRedesignSystemRebuildPage}
      slug='website-redesign-system-rebuild'
    />
  );
}
