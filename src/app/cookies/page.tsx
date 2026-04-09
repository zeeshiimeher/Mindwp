import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import CookiePolicy from '@/screens/CookiePolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/cookies');
}

export default function Page() {
  return <CookiePolicy />;
}
