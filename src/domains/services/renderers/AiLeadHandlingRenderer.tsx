// CSS: src/styles/services.css (aih-* prefix)
// Related: injected globally by services/config.tsx (RelatedSection)

import { ArrowRight } from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// AiLeadHandlingRenderer — design skeleton
//
// Approved section order:
//   1. Hero               — HeroFrame
//   2. responseGap        — SectionFrame / tone: dark
//   3. channelBreakdown   — SectionFrame / tone: mist
//   4. responsePath       — SectionFrame / tone: gradient-dark
//   5. aiBoundary         — SectionFrame / tone: white
//   6. scenarioStudy      — SectionFrame / tone: gradient-dark
//   7. fitFilter          — SectionFrame / tone: mist
//   8. FAQ                — FAQSection / tone: white / variant: split
//   9. CTA                — DecisionPanel
//
// Each SectionFrame body holds a design-intent comment only.
// Custom visual JSX and CSS will be added section-by-section.
// Related: injected globally by services/config.tsx (RelatedSection)
// CSS: src/styles/services.css (aih-* prefix)
// =============================================================================

interface Props {
  data: ServicePageDataBySlug['ai-lead-handling'];
  slug: string;
}

// -- Label constants (end in _DOT -- allowed by hardcoded-content validator) --

const ARIA_HERO_DOT = 'AI Lead Handling -- page hero';
const ARIA_RESPONSE_GAP_DOT = 'First-contact gap';
const ARIA_CHANNEL_BREAKDOWN_DOT = 'Channel breakdown';
const ARIA_RESPONSE_PATH_DOT = 'Connected response path';
const ARIA_AI_BOUNDARY_DOT = 'AI system boundary';
const ARIA_SCENARIO_DOT = 'Scenario study';
const ARIA_FIT_DOT = 'Fit filter';
const ARIA_FAQ_DOT = 'Frequently asked questions';

// -- Section map type ---------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionsMap = Record<string, any>;

// -- Helper -------------------------------------------------------------------

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }
  return description;
}

// =============================================================================
// Renderer
// =============================================================================

export function AiLeadHandlingRenderer({ data, slug: _slug }: Props) {
  const { hero } = data;
  const sections = data.sections as SectionsMap;
  const { responseGap, channelBreakdown, responsePath, aiBoundary, scenarioStudy, fitFilter, faq } =
    sections;

  const contactHref = buildContactHref({
    system: 'ai-lead-handling',
    sourceType: 'service',
    slug: 'ai-lead-handling',
  });

  return (
    <>
      {/* -- HERO ---------------------------------------------------------------- */}
      {/*
        DESIGN INTENT:
          First-Contact Control Surface. Hero panel shows incoming channel states
          as operational data — the problem is visible before the heading explains it.
        VISUAL DIRECTION:
          Dark glass panel (right slot). Channel rows with state-driven amber/teal accent.
          Header strip: label + live-indicator dot. Footer: unhandled / covered counts.
        CSS: aih-hero__panel, aih-hero__channel[data-state], aih-hero__panel-footer
        NEXT PASS: review channel rows, add live-dot pulse animation, tighten footer.
      */}
      <HeroFrame
        className='aih-hero'
        ariaLabel={ARIA_HERO_DOT}
        texture={<div className='aih-hero__texture' aria-hidden='true' />}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[
          {
            label: PRIMARY_CTA_LABEL,
            href: contactHref,
            variant: 'white',
            icon: <ArrowRight size={16} aria-hidden='true' />,
          },
        ]}
        chips={hero.list && hero.list.length > 0 ? (hero.list as string[]) : undefined}
        chipDotVariant='warn'
        visual={
          <div className='aih-hero__panel mw-animate-panel'>
            <div className='aih-hero__panel-header'>
              <span className='aih-hero__panel-label'>{hero.visual?.label}</span>
              <span className='aih-hero__panel-subtitle'>{hero.visual?.subtitle}</span>
            </div>
            <div className='aih-hero__channels'>
              {hero.visual?.channels?.map((ch: { label: string; note: string; state: string }) => (
                <div key={ch.label} className='aih-hero__channel' data-state={ch.state}>
                  <span className='aih-hero__channel-label'>{ch.label}</span>
                  <span className='aih-hero__channel-note'>{ch.note}</span>
                  <span className='aih-hero__channel-state'>{ch.state}</span>
                </div>
              ))}
            </div>
            <div className='aih-hero__panel-footer'>
              <span className='aih-hero__panel-unhandled'>{hero.visual?.footerUnhandled}</span>
              <span className='aih-hero__panel-covered'>{hero.visual?.footerCovered}</span>
            </div>
          </div>
        }
      />

      {/* -- RESPONSE GAP -------------------------------------------------------- */}
      <SectionFrame
        className='aih-response-gap'
        ariaLabel={ARIA_RESPONSE_GAP_DOT}
        tone='white'
        heading={{
          kicker: responseGap.header.kicker,
          title: responseGap.header.title,
          description: requireHeadingDescription(responseGap.header.description, 'responseGap'),
        }}
      >
        <div className='aih-gap'>
          {/* Primary incident panel */}
          <div className='aih-gap__primary'>
            <div className='aih-gap__primary-label'>
              <span className='aih-gap__primary-label-dot' aria-hidden='true' />
              {responseGap.primaryGap.label}
            </div>
            <h3 className='aih-gap__primary-title'>{responseGap.primaryGap.title}</h3>
            <p className='aih-gap__primary-situation'>{responseGap.primaryGap.situation}</p>
            <div className='aih-gap__primary-cost'>
              <span className='aih-gap__band-label aih-gap__band-label--cost'>Cost</span>
              <p className='aih-gap__band-text aih-gap__band-text--cost'>
                {responseGap.primaryGap.cost}
              </p>
            </div>
            <div className='aih-gap__primary-handled'>
              <span className='aih-gap__band-label aih-gap__band-label--handled'>Handled</span>
              <p className='aih-gap__band-text aih-gap__band-text--handled'>
                {responseGap.primaryGap.handledState}
              </p>
            </div>
          </div>

          {/* Secondary gaps — compact stacked list */}
          <ul className='aih-gap__secondary' role='list'>
            {(
              responseGap.gaps as Array<{
                label: string;
                title: string;
                situation: string;
                handledState: string;
              }>
            ).map(gap => (
              <li key={gap.label} className='aih-gap__item'>
                <span className='aih-gap__item-label'>{gap.label}</span>
                <div className='aih-gap__item-body'>
                  <p className='aih-gap__item-title'>{gap.title}</p>
                  <p className='aih-gap__item-situation'>{gap.situation}</p>
                  <p className='aih-gap__item-handled'>{gap.handledState}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* -- CHANNEL BREAKDOWN --------------------------------------------------- */}
      <SectionFrame
        className='aih-channel-breakdown'
        ariaLabel={ARIA_CHANNEL_BREAKDOWN_DOT}
        tone='mist'
        heading={{
          kicker: channelBreakdown.header.kicker,
          title: channelBreakdown.header.title,
          description: requireHeadingDescription(
            channelBreakdown.header.description,
            'channelBreakdown'
          ),
        }}
      >
        <div className='aih-channel-board'>
          {/* Column headers */}
          <div className='aih-channel-board__header' aria-hidden='true'>
            <span className='aih-channel-board__col-label'>{channelBreakdown.boardLabel}</span>
            <span className='aih-channel-board__col-label aih-channel-board__col-label--current'>
              Current
            </span>
            <span className='aih-channel-board__col-label aih-channel-board__col-label--handled'>
              Handled
            </span>
          </div>

          {/* Data rows */}
          {(
            channelBreakdown.rows as Array<{
              channel: string;
              current: string;
              handled: string;
            }>
          ).map(row => (
            <div key={row.channel} className='aih-channel-board__row'>
              <p className='aih-channel-board__channel'>{row.channel}</p>
              <p className='aih-channel-board__state aih-channel-board__state--current'>
                {row.current}
              </p>
              <p className='aih-channel-board__state aih-channel-board__state--handled'>
                {row.handled}
              </p>
            </div>
          ))}
        </div>
      </SectionFrame>

      {/* -- RESPONSE PATH ------------------------------------------------------- */}
      <SectionFrame
        className='aih-response-path'
        ariaLabel={ARIA_RESPONSE_PATH_DOT}
        tone='gradient-dark'
        heading={{
          kicker: responsePath.header.kicker,
          title: responsePath.header.title,
          description: requireHeadingDescription(responsePath.header.description, 'responsePath'),
        }}
      >
        {/*
          DESIGN INTENT:
            Convergence: channels in → AI junction → outputs out.
            Also carries connected-vs-isolated concept (removed standalone section).
            The junction block must dominate — it is the central argument.
          VISUAL DIRECTION:
            Input list (left): amber-tinted border-left. Secondary weight.
            Junction (centre): large block, cyan glow, dominant "AI Lead Handling" label.
            Output list (right): booking=teal, crm=cyan, team=neutral.
          DATA NEEDED:
            responsePath.inputs[] { label }
            responsePath.junction { title, note }
            responsePath.outputs[] { label, type: 'booking'|'crm'|'team', note }
          BOUNDARY: CRM output = "CRM queue + context" NOT "CRM + follow-up".
          DO NOT: Equal-weight columns. Comparison table. Generic SaaS routing diagram.
        */}
      </SectionFrame>

      {/* -- AI BOUNDARY --------------------------------------------------------- */}
      <SectionFrame
        className='aih-boundary'
        ariaLabel={ARIA_AI_BOUNDARY_DOT}
        tone='white'
        heading={{
          kicker: aiBoundary.header.kicker,
          title: aiBoundary.header.title,
          description: requireHeadingDescription(aiBoundary.header.description, 'aiBoundary'),
        }}
      >
        {/*
          DESIGN INTENT:
            Two-column ownership panel. Left = what this covers. Right = does not touch.
            Protects against CRM, SWS, LSA, and chatbot-SaaS drift.
          VISUAL DIRECTION:
            Left: cyan heading, teal left-border list items.
            Right: muted heading, subtle list items.
            Items: short action phrases — not prose.
          DATA NEEDED:
            aiBoundary.owns[] { label }
            aiBoundary.doesNotOwn[] { label }
          BOUNDARY: "Does not own" must include CRM follow-up sequences and lifecycle.
          DO NOT: Card-per-item grid. Feature checklist. Imply CRM/SWS overlap.
        */}
      </SectionFrame>

      {/* -- SCENARIO STUDY ------------------------------------------------------ */}
      <SectionFrame
        className='aih-scenario'
        ariaLabel={ARIA_SCENARIO_DOT}
        tone='gradient-dark'
        heading={{
          kicker: scenarioStudy.header.kicker,
          title: scenarioStudy.header.title,
          description: requireHeadingDescription(scenarioStudy.header.description, 'scenarioStudy'),
        }}
      >
        {/*
          DESIGN INTENT:
            Shows system in operational context. Proof-type disclaimer must be visible.
            Three-part narrative: context → before → change → after.
            Change panel will include a mini response log (2-3 moment rows) later.
          VISUAL DIRECTION:
            Context block (amber): label, title, description, italic constraint.
            Before panel: amber-tinted dark card, 3 bullets.
            Change panel: 3 bullets + mini log rows (trigger | response | outcome).
            After panel: teal-accented dark card, 3 bullets + directional metrics table.
          DATA NEEDED:
            scenarioStudy.proofType, context, before, change (with moments[]), after (with metrics[])
          DO NOT: Present as real client work. Fabricate percentages. Hide constraint disclaimer.
        */}
      </SectionFrame>

      {/* -- FIT FILTER ---------------------------------------------------------- */}
      <SectionFrame
        className='aih-fit'
        ariaLabel={ARIA_FIT_DOT}
        tone='mist'
        heading={{
          kicker: fitFilter.header.kicker,
          title: fitFilter.header.title,
          description: requireHeadingDescription(fitFilter.header.description, 'fitFilter'),
        }}
      >
        {/*
          DESIGN INTENT:
            Honest qualification. Two columns: Strong Fit / Probably Not.
            Content preserved from prior version — do not replace copy yet.
          VISUAL DIRECTION:
            Column labels: eyebrow-style, teal strong / muted poor.
            Items: left-border accent, label bold, note smaller.
          DATA SHAPE (already present):
            fitFilter.strongFit { label, items[] { text, note } }
            fitFilter.poorFit { label, items[] { text, note } }
          DO NOT: Sales hype on strong fit. Cards per item. Decorative icons.
        */}
      </SectionFrame>

      {/* -- FAQ ----------------------------------------------------------------- */}
      <FAQSection
        className='aih-faq'
        ariaLabel={ARIA_FAQ_DOT}
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        variant='split'
        tone='white'
      />

      {/* -- CTA ----------------------------------------------------------------- */}
      <DecisionPanel
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={data.cta.expectations}
      />
    </>
  );
}
