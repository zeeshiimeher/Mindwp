import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { About } from '@/screens/About';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/about', type: 'static', slug: 'about' });
}

export default function AboutPage() {
  return (
    <CTARegistryProvider pageId='page:about' pageType='page' primarySystem='smart-website-systems'>
      <About />
    </CTARegistryProvider>
  );
}
