import { buildMetadata } from '@/lib/seo/metadata';
import TermsConditions from '@/screens/TermsConditions';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using MindWP website and services.',
  path: '/terms',
});

export default function Page() {
  return <TermsConditions />;
}
