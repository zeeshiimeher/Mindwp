import { buildMetadata } from '@/lib/seo/metadata';
import { ROUTES } from '@/config/routes';
import { HomeScreen } from '@/screens/home/HomeScreen';

export const dynamic = 'force-static';

export const metadata = buildMetadata({
  title: 'Connected website systems for service businesses',
  description:
    'MindWP builds conversion-focused website systems with connected handling for established service businesses and specialist clinics.',
  path: ROUTES.home,
});

export default function Page() {
  return <HomeScreen />;
}
