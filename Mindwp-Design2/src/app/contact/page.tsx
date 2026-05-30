import { buildMetadata } from '@/lib/seo/metadata';
import { ROUTES } from '@/config/routes';
import { ContactScreen } from '@/screens/contact/ContactScreen';

export const dynamic = 'force-static';

export const metadata = buildMetadata({
  title: 'Request a Website Review',
  description:
    'Request a website review and tell us where work is slipping. We respond with a clear next step.',
  path: ROUTES.contact,
});

export default function Page() {
  return <ContactScreen />;
}
