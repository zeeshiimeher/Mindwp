import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  AuthoritySignalMapSection,
  BeforeAfterSection,
  CriteriaComparisonSection,
  HeroSplitSection,
  PrimaryCTASection,
  ProofStorySection,
  QualificationSection,
  type SectionIconKey,
} from '@/components/sections';
import { SectionShell } from '@/components/sections/SectionShell';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface LocalSeoAuthorityRendererProps {
  data: ServicePageDataBySlug['local-seo-authority'];
  slug: string;
}

const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }

  return description;
}

function requireNonEmptyValue(value: string | undefined, section: string) {
  if (!value || value.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }

  return value;
}

export function LocalSeoAuthorityRenderer({ data, slug }: LocalSeoAuthorityRendererProps) {
  const { hero, sections } = data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const s = sections as Record<string, any>;
  const {
    comparisonCriteria,
    comparisonCriteriaHeader,
    authoritySignalFamilies,
    authoritySignalFamiliesHeader,
    misconceptions,
    comparison,
    processSection,
    scopeSection,
    proof,
    qualification,
    faqSection,
  } = s;

  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <ErrorBoundary fallback={<GenericErrorFallback />}>
      <main role='main'>
        {/* 1. Hero — signal-grid visual */}
        <HeroSplitSection
          visualType='signal-grid'
          kicker={hero.badge}
          heading={{ title: hero.title, description: hero.description }}
          chips={hero.list}
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
          visual={hero.visual}
        />

        {/* 2. Criteria comparison — package thinking vs system approach */}
        {comparisonCriteria && comparisonCriteria.length >= 3 && (
          <CriteriaComparisonSection
            tone='light'
            heading={{
              kicker: comparisonCriteriaHeader?.kicker,
              title: requireNonEmptyValue(
                comparisonCriteriaHeader?.title,
                'criteria comparison section'
              ),
              description: requireHeadingDescription(
                comparisonCriteriaHeader?.description,
                'criteria comparison section'
              ),
            }}
            criteria={comparisonCriteria}
            leftLabel={comparisonCriteriaHeader?.leftLabel}
            rightLabel={comparisonCriteriaHeader?.rightLabel}
          />
        )}

        {/* 3. Authority signal map — 4 signal families with state */}
        {authoritySignalFamilies && authoritySignalFamilies.length >= 2 && (
          <AuthoritySignalMapSection
            tone='soft'
            heading={{
              kicker: authoritySignalFamiliesHeader?.kicker,
              title: requireNonEmptyValue(
                authoritySignalFamiliesHeader?.title,
                'authority signal families section'
              ),
              description: requireHeadingDescription(
                authoritySignalFamiliesHeader?.description,
                'authority signal families section'
              ),
            }}
            families={authoritySignalFamilies}
          />
        )}

        {/* 4. Before / after — off-the-shelf SEO vs structured local */}
        {comparison &&
          (() => {
            const before = comparison.items.find(
              (item: { type: string }) => item.type === 'before'
            );
            const after = comparison.items.find((item: { type: string }) => item.type === 'after');
            if (!before || !after) {
              throw new Error('[comparison section] Invalid data');
            }

            return (
              <BeforeAfterSection
                variant='split-panel'
                heading={{
                  kicker: comparison.header.badge,
                  title: comparison.header.title,
                  description: requireHeadingDescription(
                    comparison.header.description,
                    'comparison section'
                  ),
                }}
                before={{
                  label: comparison.beforeLabel,
                  title: before.title,
                  items: before.items,
                }}
                after={{
                  label: comparison.afterLabel,
                  title: after.title,
                  items: after.items,
                }}
              />
            );
          })()}

        {/* 5. Assumptions — what people believe vs what actually holds */}
        {misconceptions && (
          <SectionShell
            tone='soft'
            heading={{
              kicker: misconceptions.badge,
              title: misconceptions.title,
              description: requireHeadingDescription(
                misconceptions.description,
                'misconceptions section'
              ),
            }}
            sectionClassName='lsa-assumptions'
          >
            <dl className='lsa-assumptions__list rd-animate-stagger'>
              {misconceptions.painPoints.map(
                (point: { before: string; after: string }, index: number) => (
                  <div key={index} className='lsa-assumptions__item rd-animate-up'>
                    <dt className='lsa-assumptions__assumption'>{point.before}</dt>
                    <dd className='lsa-assumptions__reality'>{point.after}</dd>
                  </div>
                )
              )}
            </dl>
          </SectionShell>
        )}

        {/* 6. Local visibility coverage — what we handle */}
        {scopeSection && (
          <SectionShell
            tone='light'
            heading={{
              kicker: scopeSection.badge,
              title: scopeSection.title,
              description: requireHeadingDescription(scopeSection.description, 'scope section'),
            }}
            sectionClassName='lsa-coverage'
          >
            <ul className='lsa-coverage__areas rd-animate-stagger'>
              {scopeSection.services.map(
                (area: { title: string; summary?: string; items: readonly string[] }) => (
                  <li key={area.title} className='lsa-coverage__area rd-animate-up'>
                    <div className='lsa-coverage__area-head'>
                      <h3 className='lsa-coverage__area-title'>{area.title}</h3>
                      {area.summary && <p className='lsa-coverage__area-summary'>{area.summary}</p>}
                    </div>
                    <ul className='lsa-coverage__area-items'>
                      {area.items.map((item: string) => (
                        <li key={item} className='lsa-coverage__area-item'>
                          <span className='rd-dot rd-dot--info' aria-hidden='true' />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </SectionShell>
        )}

        {/* 7. Recurring cycle — what happens after we start */}
        {processSection && (
          <SectionShell
            tone='soft'
            heading={{
              kicker: processSection.badge,
              title: processSection.title,
              description: requireHeadingDescription(processSection.description, 'process section'),
            }}
            sectionClassName='lsa-cycle'
          >
            <ol className='lsa-cycle__phases rd-animate-stagger'>
              {processSection.steps.map(
                (step: { number: string; title: string; description: string }) => (
                  <li key={step.number} className='lsa-cycle__phase rd-animate-up'>
                    <div className='lsa-cycle__phase-index' aria-hidden='true'>
                      <span>{step.number}</span>
                    </div>
                    <div className='lsa-cycle__phase-content'>
                      <h3 className='lsa-cycle__phase-title'>{step.title}</h3>
                      <p className='lsa-cycle__phase-desc'>{step.description}</p>
                    </div>
                  </li>
                )
              )}
            </ol>
          </SectionShell>
        )}

        {/* 8. Proof story — before / change / after with evidence points */}
        {proof &&
          (() => {
            const before = proof.cards[0];
            const change = proof.cards[1];
            const after = proof.cards[2];
            if (!before || !change || !after) {
              throw new Error('[proof section] Invalid data');
            }

            return (
              <ProofStorySection
                variant='before-change-after'
                tone='light'
                heading={{
                  kicker: proof.header.badge,
                  title: proof.header.title,
                  description: requireHeadingDescription(proof.header.description, 'proof section'),
                }}
                before={{
                  label: proof.beforeLabel,
                  title: before.title,
                  body: before.description,
                  iconKey: PROOF_ICON_KEYS[0],
                  bullets: (before as { points?: readonly string[] }).points,
                }}
                change={{
                  label: proof.changeLabel,
                  title: change.title,
                  body: change.description,
                  iconKey: PROOF_ICON_KEYS[1],
                  bullets: (change as { points?: readonly string[] }).points,
                }}
                after={{
                  label: proof.afterLabel,
                  title: after.title,
                  body: after.description,
                  iconKey: PROOF_ICON_KEYS[2],
                  bullets: (after as { points?: readonly string[] }).points,
                }}
              />
            );
          })()}

        {/* 9. Qualification — fit check */}
        {qualification && (
          <QualificationSection
            variant='fit-filter'
            tone='soft'
            heading={{
              kicker: qualification.badge,
              title: qualification.title,
              description: requireHeadingDescription(
                qualification.description,
                'qualification section'
              ),
            }}
            good={{
              label: qualification.strongFitLabel,
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems.map(
                (item: { title: string; description: string }) => ({
                  text: item.title,
                  note: item.description,
                })
              ),
            }}
            not={{
              label: qualification.notDesignedLabel,
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems.map(
                (item: { title: string; description: string }) => ({
                  text: item.title,
                  note: item.description,
                })
              ),
            }}
          />
        )}

        {/* 10. FAQ */}
        {faqSection && (
          <AccordionFAQSection
            variant='single-column'
            tone='light'
            heading={{
              kicker: faqSection.badge,
              title: faqSection.title,
              description: requireHeadingDescription(faqSection.description, 'faq section'),
            }}
            items={faqSection.faqs.map(
              (faq: { question: string; answer: string }, index: number) => ({
                id: `local-seo-faq-${index}`,
                question: faq.question,
                answer: faq.answer,
              })
            )}
          />
        )}

        {/* 11. CTA */}
        <PrimaryCTASection
          variant='soft-panel'
          heading={data.cta.heading}
          actions={data.cta.actions}
        />
      </main>
    </ErrorBoundary>
  );
}

export default LocalSeoAuthorityRenderer;
