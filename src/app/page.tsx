import { getCaseStudiesTemplateMetadata } from '@/domains/case-studies/data';
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
  const featuredCaseStudies = getCaseStudiesTemplateMetadata()
    .slice(0, 3)
    .map(study => ({
      slug: study.slug,
      industryLabel: study.industryLabel,
      client: study.client,
      location: study.location,
      description: study.heroHeadline,
      publishDate: study.publishDate,
    }));

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
