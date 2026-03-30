import { ServicesLanding } from '@/domains/services/pages';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Services',
  description: 'Explore MindWP services: smart websites, SEO, automation, and AI.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesLanding />;
}
