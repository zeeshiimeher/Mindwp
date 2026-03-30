import { buildMetadata } from '@/lib/seo/metadata';
import PrivacyPolicy from '@/screens/PrivacyPolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How MindWP collects, uses, and protects personal data.',
  path: '/privacy',
});

export default function Page() {
  return <PrivacyPolicy />;
}
