import { buildMetadata } from '@/lib/seo/metadata';
import CookiePolicy from '@/screens/CookiePolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description: 'How MindWP uses cookies and similar technologies across this website.',
  path: '/cookies',
});

export default function Page() {
  return <CookiePolicy />;
}
