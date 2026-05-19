import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { LocalSEOAuthorityRenderer } from '@/domains/services/renderers/LocalSEOAuthorityRenderer';

export default function LocalSeoAuthorityPage() {
  return <LocalSEOAuthorityRenderer data={localSeoAuthorityPage} slug='local-seo-authority' />;
}
