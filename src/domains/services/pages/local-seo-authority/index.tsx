import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import LocalSeoAuthorityRenderer from '@/domains/services/renderers/LocalSeoAuthorityRenderer';

export default function LocalSeoAuthorityPage() {
  return <LocalSeoAuthorityRenderer data={localSeoAuthorityPage} slug='local-seo-authority' />;
}
