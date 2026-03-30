import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import SmartWebsiteSystemsRenderer from '@/domains/services/renderers/SmartWebsiteSystemsRenderer';

export default function SmartWebsiteSystemsPage() {
  return (
    <SmartWebsiteSystemsRenderer data={smartWebsiteSystemsPage} slug='smart-website-systems' />
  );
}
