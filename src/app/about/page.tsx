import { buildMetadata } from '@/lib/seo/metadata';
import { About } from '@/screens/About';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'About',
  description: 'Why MindWP exists and how we work.',
  path: '/about',
});

export default function AboutPage() {
  return <About />;
}
