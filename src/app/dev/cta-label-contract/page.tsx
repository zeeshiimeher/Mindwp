import { notFound } from 'next/navigation';

import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { buildContactHref } from '@/lib/contact/contactHref';
import { getPrimaryCTA, getSecondaryCTA } from '@/lib/cta/primaryAction';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

const SMART_CTA_CASES = [
  {
    testId: 'smart-website-cta',
    slug: 'cta-label-contract-smart-website',
  },
  {
    testId: 'ai-lead-handling-cta',
    slug: 'cta-label-contract-ai-lead-handling',
  },
  {
    testId: 'revenue-growth-cta',
    slug: 'cta-label-contract-revenue-growth',
  },
] as const;

export default function CtaLabelContractPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  return (
    <main className='l-container l-section' data-testid='cta-label-contract-page'>
      <h1>CTA Label Contract</h1>
      <p>Deterministic PrimaryCTASection coverage for label and href consistency.</p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {SMART_CTA_CASES.map(testCase => (
          <CTARegistryProvider
            key={testCase.testId}
            pageId={`service:${testCase.slug}`}
            pageType='service'
          >
            <div data-testid={testCase.testId}>
              <PrimaryCTASection
                heading={{
                  title: `Contract case: ${testCase.slug}`,
                  description: 'Deterministic PrimaryCTASection contract validation.',
                }}
                actions={[
                  {
                    label: 'Get Started',
                    href: buildContactHref({
                      system: 'smart-website-systems',
                      sourceType: 'service',
                      slug: testCase.slug,
                    }),
                  },
                ]}
              />
            </div>
          </CTARegistryProvider>
        ))}

        <div data-testid='fallback-labels'>
          <p data-testid='fallback-unknown'>{getPrimaryCTA()}</p>
          <p data-testid='fallback-empty'>{getSecondaryCTA(true)}</p>
        </div>
      </div>
    </main>
  );
}
