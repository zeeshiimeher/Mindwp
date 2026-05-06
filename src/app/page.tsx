import { homepageData } from '@/domains/home/data/homepage';
import { resolveSEO } from '@/lib/seo/seoResolver';
import Homepage from '@/screens/Homepage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/', type: 'static', slug: 'home' });
}

export default function Home() {
  const { schema } = homepageData.seo;

  return (
    <>
      <script
        id='homepage-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.organization),
        }}
      />
      <Homepage />
    </>
  );
}
