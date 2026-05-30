import { buildMetadata } from '@/lib/seo/metadata';
import { ROUTES } from '@/config/routes';
import { JsonLd } from '@/lib/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/schema';
import { SmartWebsiteSystemsScreen } from '@/screens/services/SmartWebsiteSystemsScreen';

export const dynamic = 'force-static';

const TITLE = 'Smart Website Systems';
const DESCRIPTION =
  'Enquiry capture and conversion structure — the flagship website system that turns site traffic into booked work.';

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: ROUTES.services.smartWebsiteSystems,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: ROUTES.services.smartWebsiteSystems,
          }),
          breadcrumbSchema([
            { name: 'Home', path: ROUTES.home },
            { name: TITLE, path: ROUTES.services.smartWebsiteSystems },
          ]),
        ]}
      />
      <SmartWebsiteSystemsScreen />
    </>
  );
}
