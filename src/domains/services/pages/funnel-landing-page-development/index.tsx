import { funnelLandingPageDevelopmentPage } from '@/domains/services/data/funnel-landing-page-development';
import { FunnelLandingPageDevelopmentRenderer } from '@/domains/services/renderers/FunnelLandingPageDevelopmentRenderer';

export default function FunnelLandingPageDevelopmentPage() {
  return (
    <FunnelLandingPageDevelopmentRenderer
      data={funnelLandingPageDevelopmentPage}
      slug='funnel-landing-page-development'
    />
  );
}
