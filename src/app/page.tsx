import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';
import { homepageData } from '@/domains/home/data/homepage';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import Homepage from '@/screens/Homepage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/');
}

export default function Home() {
  const { schema } = homepageData.seo;
  const featuredCaseStudies = getCaseStudiesTemplateMetadata().slice(0, 3);

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
      <Homepage featuredCaseStudies={featuredCaseStudies} />
    </>
  );
}
