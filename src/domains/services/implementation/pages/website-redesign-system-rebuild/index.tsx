import { websiteRedesignSystemRebuildPage } from '@/domains/services/implementation/data/website-redesign-system-rebuild';
import WebsiteRedesignSystemRebuildRenderer from '@/domains/services/implementation/renderers/WebsiteRedesignSystemRebuildRenderer';

export default function WebsiteRedesignSystemRebuildPage() {
  return (
    <WebsiteRedesignSystemRebuildRenderer
      data={websiteRedesignSystemRebuildPage}
      slug='website-redesign-system-rebuild'
    />
  );
}
