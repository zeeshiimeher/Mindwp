import JsonLd from '@/components/system/JsonLd';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { buildFAQSchema } from '@/lib/seo/schema';
import { FAQPage } from '@/screens/FAQPage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/faq', type: 'static', slug: 'faq' });
}

const faqSchema = buildFAQSchema({
  questions: [
    {
      question: "What exactly is a 'Smart Website'?",
      answer:
        'A Smart Website is more than design alone. It combines a WordPress website with CRM, automation, AI, and marketing tooling so enquiries and operations are connected.',
    },
    {
      question: 'Can you work with my existing website?',
      answer:
        'Yes. Existing WordPress sites can be audited and improved, while non-WordPress sites are typically rebuilt and content-migrated for better long-term flexibility.',
    },
    {
      question: 'How long does SEO take to work?',
      answer:
        'Local SEO typically shows early movement in 6-12 weeks, while broader organic growth often takes 3-6 months depending on competition and baseline performance.',
    },
    {
      question: 'Do you guarantee #1 rankings?',
      answer:
        'No legitimate SEO provider can guarantee ranking positions. The focus is on transparent execution, measurable progress, and sustained optimization.',
    },
    {
      question: 'Who owns the website and data?',
      answer:
        'The business owner retains ownership of domain, website content, and customer data, with export and transition support if needed.',
    },
  ],
});

export default function FaqPage() {
  return (
    <CTARegistryProvider pageId='page:faq' pageType='page'>
      {faqSchema && <JsonLd id='faq-jsonld' schema={faqSchema} />}
      <FAQPage />
    </CTARegistryProvider>
  );
}
