# Final Component APIs

These APIs are additive only.

Compatibility guarantees:

- no existing prop is renamed
- no existing prop is removed
- existing renderer usage continues working unchanged
- new behavior is enabled only through new optional props or new components

---

## 1. SignalResponseSection

### Component Name

`SignalResponseSection`

### Final TypeScript Interface

```ts
export interface SignalResponseItem {
  title: string;
  signal: string;
  response: string;
  points?: string[];
}

export interface SignalResponseSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: SignalResponseItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Variant Handling

No structural variants.

Default behavior:

- renders a deterministic signal/response list from `items`
- each item produces one repeated row with one signal, one response, and optional supporting points

### Backward Compatibility Strategy

- this is a new component, so no existing usage is affected
- existing renderers may keep using `SectionWrapper + SectionIntro + mapped cards`
- adoption is incremental because no existing section contract changes

### Example Usage

1. Existing usage (unchanged)

```tsx
<SectionWrapper className='crm-automation-workflows' background='bg-base'>
  <SectionIntro
    badge={workflowsSection.badge}
    title={workflowsSection.title}
    description={workflowsSection.description}
  />

  <div className='l-grid l-gap-6 md:l-grid-2'>
    {workflowsSection.items.map((workflow, index) => (
      <WorkflowStepCard
        key={index}
        trigger={workflow.trigger}
        actions={workflow.actions}
      />
    ))}
  </div>
</SectionWrapper>
```

2. New usage (with new structure)

```tsx
<SignalResponseSection
  badge={workflowsSection.badge}
  title={workflowsSection.title}
  description={workflowsSection.description}
  items={workflowsSection.items.map(workflow => ({
    title: workflow.trigger,
    signal: workflow.trigger,
    response: workflow.actions.join(', '),
    points: workflow.actions,
  }))}
  cssPrefix='crm-automation-workflows'
/>
```

---

## 2. OutcomeTimelineSection

### Component Name

`OutcomeTimelineSection`

### Final TypeScript Interface

```ts
export interface OutcomeTimelineStage {
  step?: number | string;
  title: string;
  description: string;
  outcomes: string[];
}

export interface OutcomeTimelineSectionProps {
  badge?: string;
  title: string;
  description?: string;
  stages: OutcomeTimelineStage[];
  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Variant Handling

No structural variants.

Default behavior:

- renders one deterministic timeline row per `stage`
- each row contains sequence, summary, and outcomes

### Backward Compatibility Strategy

- this is a new component, so no existing usage is affected
- existing pages may continue using `ProcessStepsSection` and separate capability or proof sections
- adoption can happen page by page without touching current renderer paths

### Example Usage

1. Existing usage (unchanged)

```tsx
<ProcessStepsSection
  badge={processSection.badge}
  title={processSection.title}
  description={processSection.description}
  steps={processSection.steps}
  columns={4}
  cssPrefix='wordpress-development-process'
/>

<FeatureChecklistCardsSection
  badge={capabilitySection.badge}
  title={capabilitySection.title}
  description={capabilitySection.description}
  featureCategories={capabilitySection.categories}
  columns={3}
  cssPrefix='wordpress-development-capabilities'
/>
```

2. New usage (with new structure)

```tsx
<OutcomeTimelineSection
  badge={processSection.badge}
  title={processSection.title}
  description={processSection.description}
  stages={processSection.steps.map(step => ({
    step: step.number,
    title: step.title,
    description: step.description,
    outcomes: ['Approved output', 'Next-stage handoff'],
  }))}
  cssPrefix='wordpress-development-process'
/>
```

---

## 3. DecisionFitSection

### Component Name

`DecisionFitSection`

### Final TypeScript Interface

```ts
export interface DecisionFitSectionProps {
  badge?: string;
  title: string;
  description?: string;
  strongFitTitle: string;
  strongFitItems: string[];
  notFitTitle: string;
  notFitItems: string[];
  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Variant Handling

No structural variants.

Default behavior:

- renders one deterministic qualification split
- left side is the strong-fit column
- right side is the not-fit column

### Backward Compatibility Strategy

- this is a new component, so no existing usage is affected
- existing renderers may keep using `DualToneChecklistComparisonSection` directly
- new adoption can replace qualification-only sections without forcing migration

### Example Usage

1. Existing usage (unchanged)

```tsx
<ComparisonSection
  title={comparison.header.title}
  description={comparison.header.description}
  comparisons={comparison.items}
  cssPrefix='local-seo-comparison'
/>

<SmartCTA
  system={data.systems?.[0] ?? 'smart-website-systems'}
  slug={slug}
  pageType='service'
  title={inlineCtaTitle}
  description={inlineCtaDescription}
  primaryActionVariant='white'
/>

<DualToneChecklistComparisonSection
  title={qualification.title}
  description={qualification.description}
  leftColumn={{
    title: qualification.strongFitTitle,
    items: qualification.strongFitItems,
  }}
  rightColumn={{
    title: qualification.notDesignedTitle,
    items: qualification.notDesignedItems,
  }}
  cssPrefix='local-seo-qualification'
/>
```

2. New usage (with new structure)

```tsx
<DecisionFitSection
  badge='Decision Fit'
  title={qualification.title}
  description={qualification.description}
  strongFitTitle={qualification.strongFitTitle}
  strongFitItems={qualification.strongFitItems}
  notFitTitle={qualification.notDesignedTitle}
  notFitItems={qualification.notDesignedItems}
  cssPrefix='local-seo-decision-fit'
/>
```

---

## 4. ProcessStepsSection

### Component Name

`ProcessStepsSection`

### Final TypeScript Interface

```ts
export interface ProcessStepsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
  columns?: 2 | 3 | 4;
  cssPrefix?: string;
  backgroundColor?: string;
  layout?: 'grid' | 'timeline';
}
```

### Variant Handling

Allowed values:

- `grid`
- `timeline`

Default behavior:

- `layout` defaults to `grid`
- when `layout` is omitted, current rendering stays exactly as it works today
- `columns` continues to apply only to `grid`
- internal alias support also accepts the earlier `split-rail` value without breaking existing usage

### Backward Compatibility Strategy

- all existing props remain unchanged
- existing renderers pass no `layout`, so they continue using the current grid implementation
- internal fallback: `layout ?? 'grid'`

### Example Usage

1. Existing usage (unchanged)

```tsx
<ProcessStepsSection
  badge={processSection.badge}
  title={processSection.title}
  description={processSection.description}
  steps={processSection.steps}
  columns={4}
  cssPrefix='booking-scheduling-process'
  backgroundColor='bg-base'
/>
```

2. New usage (with variant or new structure)

```tsx
<ProcessStepsSection
  badge={processSection.badge}
  title={processSection.title}
  description={processSection.description}
  steps={processSection.steps}
  layout='timeline'
  cssPrefix='booking-scheduling-process'
  backgroundColor='bg-base'
/>
```

---

## 5. FeatureChecklistCardsSection

### Component Name

`FeatureChecklistCardsSection`

### Final TypeScript Interface

```ts
export interface FeatureChecklistCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  featureCategories: FeatureCategory[];
  backgroundColor?: string;
  cssPrefix?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'stacked';
  align?: 'left' | 'center';
  layout?: 'grid' | 'split';
}
```

### Variant Handling

Allowed values:

- existing visual variant values remain: `default`, `stacked`
- new structural layout values: `grid`, `split`

Default behavior:

- `variant` defaults to `default`
- `layout` defaults to `grid`
- omitting `layout` preserves the current all-cards-visible behavior
- internal alias support also accepts the earlier `segmented` value without breaking existing usage

Rule:

- `variant` controls visual treatment only
- `layout` controls structure only

### Backward Compatibility Strategy

- existing `variant` keeps its current meaning and is not overloaded
- new structural behavior is introduced through a new optional `layout` prop only
- internal fallback: `layout ?? 'grid'`

### Example Usage

1. Existing usage (unchanged)

```tsx
<FeatureChecklistCardsSection
  badge={capabilitySection.badge}
  title={capabilitySection.title}
  description={capabilitySection.description}
  featureCategories={capabilitySection.categories}
  columns={3}
  cssPrefix='wordpress-development-capabilities'
/>
```

2. New usage (with variant or new structure)

```tsx
<FeatureChecklistCardsSection
  badge={capabilitySection.badge}
  title={capabilitySection.title}
  description={capabilitySection.description}
  featureCategories={capabilitySection.categories}
  layout='split'
  variant='default'
  cssPrefix='wordpress-development-capabilities'
/>
```

---

## 6. StackedFeatureListSection

### Component Name

`StackedFeatureListSection`

### Final TypeScript Interface

```ts
export interface StackedFeatureListSectionProps {
  badge?: string;
  title: string;
  description?: string;
  features: StackedFeatureItem[];
  tagline?: string;
  narrativeTitle: string;
  narrativeParagraphs: string[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  variant?: 'icon' | 'media';
  backgroundColor?: string;
  cssPrefix?: string;
  layout?: 'split-features' | 'narrative-stats';
  stats?: Array<{
    value: string;
    label: string;
  }>;
}
```

### Variant Handling

Allowed values:

- existing card rendering values remain: `icon`, `media`
- new structural layout values: `split-features`, `narrative-stats`

Default behavior:

- `variant` defaults to `icon`
- `layout` defaults to `split-features`
- `stats` is used only when `layout === 'narrative-stats'`
- when `layout` is omitted, the component renders exactly as it does today

Rule:

- `variant` controls visual treatment only
- `layout` controls structure only

### Backward Compatibility Strategy

- existing `variant` keeps its current visual meaning
- new structure is introduced through a separate optional `layout` prop
- existing usage does not need to provide `stats`
- internal fallback: `layout ?? 'split-features'`

### Example Usage

1. Existing usage (unchanged)

```tsx
<StackedFeatureListSection
  badge={principles.badge}
  title={principles.title}
  description={principles.description}
  features={principles.features}
  tagline={principles.tagline}
  narrativeTitle={principles.narrativeTitle}
  narrativeParagraphs={principles.narrativeParagraphs}
  cssPrefix='wordpress-development-principles'
/>
```

2. New usage (with variant or new structure)

```tsx
<StackedFeatureListSection
  badge={why.badge}
  title={why.title}
  description={why.description}
  features={why.features}
  tagline={why.tagline}
  narrativeTitle={why.narrativeTitle}
  narrativeParagraphs={why.narrativeParagraphs}
  layout='narrative-stats'
  stats={[
    { value: '24/7', label: 'Visibility' },
    { value: '3x', label: 'Qualified actions' },
    { value: '1', label: 'System source of truth' },
  ]}
  cssPrefix='local-seo-why'
/>
```

---

## 7. AlternatingDetailRowsSection

### Component Name

`AlternatingDetailRowsSection`

### Final TypeScript Interface

```ts
export interface AlternatingDetailItem {
  title: string;
  description: string;
  points: string[];
}

export interface AlternatingDetailRowsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: AlternatingDetailItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Variant Handling

No structural variants.

Default behavior:

- renders rows with alternating layout from left to right
- each row contains one narrative block and one structured points block

### Backward Compatibility Strategy

- this is a new component, so no existing usage is affected
- existing renderers may keep using `SectionWrapper + SectionIntro + grid sections`
- adoption is incremental and additive only

### Example Usage

1. Existing usage (unchanged)

```tsx
<SectionWrapper className='system-migration-risks'>
  <SectionIntro
    badge={riskAreas.badge}
    title={riskAreas.title}
    description={riskAreas.description}
    cssPrefix='system-migration-risks-header'
  />
  <div className='l-grid l-gap-6 md:l-grid-2'>
    {riskAreas.lists.map((list, index) => (
      <RiskListCard
        key={index}
        title={list.title}
        issues={list.issues}
        cssPrefix='system-migration-risk-card'
      />
    ))}
  </div>
</SectionWrapper>
```

2. New usage (with new structure)

```tsx
<AlternatingDetailRowsSection
  badge={riskAreas.badge}
  title={riskAreas.title}
  description={riskAreas.description}
  items={riskAreas.lists.map(list => ({
    title: list.title,
    description: list.issues[0] ?? '',
    points: list.issues,
  }))}
  cssPrefix='system-migration-risks'
/>
```

---

## 8. ComparisonEvidenceBand

### Component Name

`ComparisonEvidenceBand`

### Final TypeScript Interface

```ts
export interface ComparisonEvidenceItem {
  title: string;
  description: string;
}

export interface ComparisonEvidenceBandProps {
  badge?: string;
  title: string;
  description?: string;
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  evidenceItems: ComparisonEvidenceItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Variant Handling

No structural variants.

Default behavior:

- left side renders a deterministic before-versus-after comparison
- right side renders supporting evidence cards from `evidenceItems`

### Backward Compatibility Strategy

- this is a new component, so no existing usage is affected
- existing renderers may keep using `ComparisonSection` and `ServiceSpectrumCardsSection` separately
- adoption is additive and limited to pages that currently stack those sections back to back

### Example Usage

1. Existing usage (unchanged)

```tsx
<ComparisonSection
  title={comparison.header.title}
  description={comparison.header.description}
  comparisons={comparison.items}
  cssPrefix='wordpress-development-comparison'
/>

<ServiceSpectrumCardsSection
  title={proof.header.title}
  description={proof.header.description}
  cards={proof.cards}
  cssPrefix='wordpress-development-proof'
/>
```

2. New usage (with new structure)

```tsx
<ComparisonEvidenceBand
  badge='Evidence'
  title={comparison.header.title}
  description={comparison.header.description}
  beforeTitle={comparison.items[0]?.title ?? 'Before'}
  beforeItems={comparison.items[0]?.items ?? []}
  afterTitle={comparison.items[1]?.title ?? 'After'}
  afterItems={comparison.items[1]?.items ?? []}
  evidenceItems={proof.cards.map(card => ({
    title: card.title,
    description: card.description,
  }))}
  cssPrefix='wordpress-development-evidence-band'
/>
```

---

## 9. TransformationProofSection

### Component Name

`TransformationProofSection`

### Purpose

Represents a three-stage transformation:

- before problem state
- what we implemented
- after result or outcome

This is not:

- `ComparisonSection`
- `ServiceSpectrumCardsSection`
- `ComparisonEvidenceBand`

### Final TypeScript Interface

```ts
export interface TransformationProofSectionProps {
  badge?: string;
  title: string;
  description?: string;

  before: {
    title: string;
    points: string[];
  };

  build: {
    title: string;
    description: string;
    highlights?: string[];
  };

  after: {
    title: string;
    results: string[];
  };

  backgroundColor?: string;
  cssPrefix?: string;
}
```

### Structure Rules

- must visually emphasize the center build phase
- must show directional flow from before to build to after
- must not render as three equal cards
- must not degrade into a generic grid

### Variant Handling

No structural variants.

Default behavior:

- left side renders the before state as problem evidence
- center renders the build phase as the primary intervention
- right side renders the after state as result or outcome
- emphasis stays on the build phase because that is the semantic hinge of the section

### Non-Overlap Rules

- do not use this for simple before vs after list comparison; use `ComparisonSection`
- do not use this for peer capability cards; use `ServiceSpectrumCardsSection`
- do not use this when evidence merely supports a comparison block; use `ComparisonEvidenceBand`

### Usage Rule

Use only when:

- all three stages exist explicitly
- the transformation is real, not implied
- the build phase is meaningful enough to be the center of the section

Otherwise do not use it.

### Backward Compatibility Strategy

- this is a new additive component, so no existing renderer contract changes
- existing proof sections may keep using `ServiceSpectrumCardsSection` unchanged
- adoption should happen only when section data is rewritten to the explicit `before`, `build`, and `after` contract

### Example Usage

1. Existing usage (unchanged)

```tsx
<ServiceSpectrumCardsSection
  title={proof.header.title}
  description={proof.header.description}
  cards={proof.cards}
  cssPrefix='crm-automation-proof'
/>
```

2. New usage (with new structure)

```tsx
<TransformationProofSection
  badge='Proof'
  title={proof.header.title}
  description={proof.header.description}
  before={{
    title: 'Before: leads everywhere, follow-up nowhere',
    points: [
      'No single view of active leads or their status',
      'Follow-up happened when someone remembered, if at all',
      'Missed calls and after-hours enquiries went untracked',
    ],
  }}
  build={{
    title: 'What we built: one system for everything',
    description:
      'We configured a CRM to capture every enquiry source, set up automated follow-up sequences, and created clear ownership rules.',
    highlights: [
      'Unified inbox for all enquiry sources',
      'Automated follow-up by lead stage',
      'Pipeline visibility and ownership rules',
    ],
  }}
  after={{
    title: 'After: nothing falls through',
    results: [
      'Every lead tracked from first contact through to outcome',
      'Follow-up response times dropped from days to minutes',
      'Team gained full visibility into pipeline and workload',
    ],
  }}
  cssPrefix='transformation-proof'
/>
```

---

## Implementation Notes

### Required internal fallbacks

```ts
const processLayout = layout ?? 'grid';
const checklistLayout = layout ?? 'grid';
const stackedLayout = layout ?? 'split-features';
```
## CSS Prefix Convention

All `cssPrefix` values must be **component-scoped**, not page-scoped.

### Rules:

- MUST represent component identity, not page or service
- MUST be reusable across all pages
- MUST NOT include service/page names

### Correct Examples:

- 'process-steps'
- 'comparison'
- 'feature-checklist'
- 'decision-fit'
- 'stacked-feature-list'

### Incorrect Examples:

- 'crm-automation-process'
- 'wordpress-development-process'
- 'local-seo-comparison'

### Page-level styling

If page-specific styling is required:

- use `className` on parent wrapper
- or use layout/variant props
- DO NOT modify `cssPrefix`

### Title convention

- for new section-level components in this contract, `title` is required
- for nested items or sub-elements, `title` may be optional only when the parent contract already establishes the heading context
- existing components with `title?: string` remain unchanged for backward compatibility

### Compatibility summary

- existing renderers require zero updates
- new components are additive only
- new structural behavior is introduced only through optional props on existing components
- existing visual `variant` props keep their current semantics
- `variant` means visual style only
- `layout` means structural change only

This is the long-term contract surface that can be implemented without further API decisions.