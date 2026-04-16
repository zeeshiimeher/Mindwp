# Component Evolution Proposals

## Basis

This proposal is grounded in:

- `Mindwp-Docs/system/component-audit.md`
- repeated service renderer chains under `src/domains/services/renderers/**`
- current reusable sections under `src/components/reusable/sections/**`

## Root Cause Map

| Repetition | Root Cause | Structural Fix |
| --- | --- | --- |
| Repeated `SectionWrapper -> SectionIntro -> CardGrid` custom sections for signals, use cases, risks, workflows, targets | the system has generic grids, but lacks deterministic sections that combine narrative context with mapped decision items | add asymmetric sections that merge context + structured rows instead of another flat grid |
| Repeated `ComparisonSection -> proof grid -> SmartCTA -> qualification split` ladders | decision support is fragmented across separate grid sections, so many pages converge on the same bottom-half sequence | add a single decision-stage section that can carry comparison, fit, and action handoff together |
| Repeated `ProcessStepsSection` as a 4-card grid | process sections explain sequence, but not handoff, deliverables, or checkpoints, so pages fall back to another grid after process | add a process layout with a rail/timeline structure and explicit outputs |
| Underused narrative and split patterns already exist (`NarrativeStatsSection`, `StepCardsSplitSection`, `TabbedFeatureCardsSection`) | renderer vocabulary is narrower than library capacity | introduce variants that reuse those structural ideas in high-frequency service components |

---

## New Components

### 1. Component Name

`SignalResponseSection`

### 2. Problem It Solves

This solves repeated custom sections where pages render another flat card grid for symptoms, use cases, risks, or workflow triggers.

Repeated pattern it replaces:

- `SectionWrapper -> SectionIntro -> IconTextCard[]`
- `SectionWrapper -> SectionIntro -> RiskListCard[]`
- `SectionWrapper -> SectionIntro -> WorkflowStepCard[]`

Root repetition examples:

- CRM Automation: use cases, feature categories, workflows
- System Migration: migration signals, risk areas, consolidation targets
- Conversion Funnel System: funnel breakpoints, levers
- Unified Communication System: fragmented mid-page operational blocks

### 3. JSX Structure

```tsx
<SectionWrapper>
  <div className='section-shell'>
    <div className='context-column'>
      <SectionIntro />
      <p />
      <ul />
    </div>

    <div className='response-column'>
      {items.map(item => (
        <Card>
          <div className='row-head'>
            <Badge />
            <h3 />
          </div>
          <p className='signal' />
          <p className='response' />
          <ul className='impact-list' />
        </Card>
      ))}
    </div>
  </div>
</SectionWrapper>
```

### 4. Props Shape

```ts
{
  badge?: string
  title: string
  description?: string
  contextTitle?: string
  contextParagraphs?: string[]
  contextPoints?: string[]
  items: Array<{
    label?: string
    title: string
    signal: string
    response: string
    impactPoints?: string[]
  }>
  backgroundColor?: string
  cssPrefix?: string
}
```

### 5. Where It Will Be Used

- CRM Automation
- System Migration Platform Consolidation
- Conversion Funnel System
- Unified Communication System
- Missed Call Recovery System
- Lead Reactivation System

---

### 2. Component Name

`DecisionPathsSection`

### 2. Problem It Solves

This solves the repeated bottom-half ladder where pages separately render comparison, proof, qualification, and then CTA.

Repeated pattern it replaces:

- `ComparisonSection`
- `ServiceSpectrumCardsSection`
- inline `SmartCTA`
- `DualToneChecklistComparisonSection`

Root repetition examples:

- WordPress Development
- Booking Scheduling System
- Local SEO Authority
- System Migration Platform Consolidation
- Website Redesign System Rebuild

### 3. JSX Structure

```tsx
<SectionWrapper>
  <SectionIntro />

  <div className='decision-layout'>
    <div className='decision-summary'>
      <h3 />
      <p />
      <SmartCTA mode='actions-only' />
    </div>

    <div className='decision-paths'>
      {paths.map(path => (
        <Card>
          <div className='path-head'>
            <h3 />
            <Badge />
          </div>
          <p />
          <div className='path-columns'>
            <ul className='fit-list' />
            <ul className='risk-list' />
          </div>
          <p className='outcome-line' />
        </Card>
      ))}
    </div>
  </div>
</SectionWrapper>
```

### 4. Props Shape

```ts
{
  badge?: string
  title: string
  description?: string
  summaryTitle?: string
  summaryDescription?: string
  smartCta?: {
    system: string
    pageType: 'service'
    slug: string
    primaryActionVariant?: 'primary' | 'white'
  }
  paths: Array<{
    title: string
    label?: string
    description?: string
    goodFit: string[]
    cautionPoints?: string[]
    expectedOutcome?: string
  }>
  backgroundColor?: string
  cssPrefix?: string
}
```

### 5. Where It Will Be Used

- WordPress Development
- Booking Scheduling System
- Local SEO Authority
- Website Redesign System Rebuild
- System Migration Platform Consolidation

---

### 3. Component Name

`OutcomeTimelineSection`

### 2. Problem It Solves

This solves the repeated use of `ProcessStepsSection` followed by another card grid just to show outputs, checkpoints, or what the client gets at each stage.

Repeated pattern it replaces:

- `ProcessStepsSection`
- followed by `FeatureChecklistCardsSection` or `ServiceSpectrumCardsSection`

Root repetition examples:

- WordPress Development
- Booking Scheduling System
- Review Automation System
- Reputation Review Systems
- Funnel Landing Page Development

### 3. JSX Structure

```tsx
<SectionWrapper>
  <SectionIntro />

  <div className='timeline'>
    {stages.map(stage => (
      <div className='timeline-row'>
        <div className='timeline-rail'>
          <span className='stage-number' />
        </div>

        <Card>
          <div className='stage-head'>
            <h3 />
            <p className='stage-duration' />
          </div>
          <p className='stage-description' />
          <div className='stage-columns'>
            <ul className='actions' />
            <ul className='deliverables' />
          </div>
        </Card>
      </div>
    ))}
  </div>
</SectionWrapper>
```

### 4. Props Shape

```ts
{
  badge?: string
  title: string
  description?: string
  stages: Array<{
    number: string
    title: string
    description: string
    duration?: string
    actions?: string[]
    deliverables?: string[]
  }>
  backgroundColor?: string
  cssPrefix?: string
}
```

### 5. Where It Will Be Used

- WordPress Development
- Booking Scheduling System
- Funnel Landing Page Development
- Review Automation System
- Reputation Review Systems

---

## Variants

### Component Name

`ProcessStepsSection`

### Variant Name

`split-rail`

### What Changes

Structure changes from a flat `CardGrid` to a split layout with intro on one side and a vertical stack of steps on the other, borrowing the proven structure from the currently underused `StepCardsSplitSection`.

### Why It Matters

`ProcessStepsSection` is one of the most overused service-page components. A structural variant immediately breaks the repeated four-card grid without adding a new conceptual component category.

### Where Used

- WordPress Development
- Booking Scheduling System
- System Migration Platform Consolidation
- Conversion Funnel System

---

### Component Name

`FeatureChecklistCardsSection`

### Variant Name

`segmented`

### What Changes

Structure changes from all categories shown at once in a single grid to grouped capability segments with one active segment displayed at a time, borrowing the structural logic of `TabbedFeatureCardsSection` but keeping the same feature-checklist content model.

### Why It Matters

Capability sections are currently one of the biggest sources of repeat mid-page grids. This variant preserves the current data shape while changing the browsing structure.

### Where Used

- WordPress Development
- Booking Scheduling System
- Local SEO Authority
- AI Lead Handling
- Elementor
- Bricks Builder
- Divi 5
- WooCommerce

---

### Component Name

`StackedFeatureListSection`

### Variant Name

`narrative-stats`

### What Changes

Structure changes from stacked feature cards plus narrative copy to narrative copy plus a stats or outcomes rail, borrowing from the currently unused `NarrativeStatsSection` pattern.

### Why It Matters

`StackedFeatureListSection` already introduces one of the few asymmetric layouts in the service system. This variant keeps that asymmetry but swaps repeated feature cards for proof-oriented stats, which helps break the repeated `features -> proof grid` sequence.

### Where Used

- Smart Website Systems
- Local SEO Authority
- Booking Scheduling System
- Review Automation System
- Reputation Review Systems
- Growth Revenue Systems

---

## Recommended Priority

1. Add `split-rail` to `ProcessStepsSection`.
2. Add `segmented` to `FeatureChecklistCardsSection`.
3. Add `SignalResponseSection`.
4. Add `OutcomeTimelineSection`.
5. Add `DecisionPathsSection` only where pages currently chain comparison, proof, qualification, and CTA too tightly.

This keeps complexity bounded while attacking the exact renderer-level repetition found in the audit.