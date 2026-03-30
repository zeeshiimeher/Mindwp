import { FeaturesLanding } from '@/domains/features/pages';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Features Index | Platform Capabilities',
  description:
    'Overview of all system features and core platform capabilities. Organize, view, and manage every function from a single location.',
  path: '/features',
});

export default function FeaturesPage() {
  return <FeaturesLanding />;
}
