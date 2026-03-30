import { homepageData } from '@/domains/home/data/homepage';
import { buildMetadata } from '@/lib/seo/metadata';
import Homepage from '@/screens/Homepage';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: homepageData.seo.title,
  description: homepageData.seo.description,
  keywords: homepageData.seo.keywords,
  path: '/',
});

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
      {schema.website ? (
        <script
          id='homepage-website-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.website),
          }}
        />
      ) : null}
      <Homepage />
    </>
  );
}
