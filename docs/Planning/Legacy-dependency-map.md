# Legacy Dependency Map

> Created: Milestone 6E. Updated as pages are rebuilt.
> Last updated: Milestone 6H (Homepage SectionFrame/FAQSection/InlineText migration complete; SectionShell deleted in 6G).

## Status

Old UI files exist only to keep unrebuilt pages rendering.
They are not valid patterns for new work.

## Quarantine Rules

- Do not import from `src/components/reusable` in rebuilt/new files.
- Do not import from `src/components/sections` in rebuilt/new files.
- Do not use `PrimaryCTASection` in rebuilt/new files.
- Do not use `SectionShell` in rebuilt/new files.
- Do not use old `rd-*`, `l-section`, `l-container`, `btn-primary`, `btn-outline`, `hero-split`, `grid-cards`, `scope__`, `process-steps`, or `layer-stack` classes in rebuilt/new files.
- Delete old files only when all consumers are rebuilt or disabled.
- Never empty old files to fake a pass.

Quarantine is enforced by `scripts/validators/validate-legacy-quarantine.mjs`.

---

## Remaining Old UI Dependencies

| Old file / pattern | Current consumers | Route / domain | Status | Delete condition |
|---|---|---|---|---|
| `src/components/sections/PrimaryCTASection.tsx` | About.tsx, Contact.tsx, BlogPostTemplate, BlogFooterCTA, CaseStudyTemplate, CaseStudy/index, Features pages + 7 renderers, Industries templates + pages, Resources hub/template, Services pages + 14 old renderers, dev/cta-label-contract | all unrebuilt domains + About/Contact | Quarantine delete-later | When all consuming pages are rebuilt and no longer import it |
| `src/components/sections/SectionShell.tsx` | **Deleted in Milestone 6G** | — | Deleted | — |
| `src/components/sections/types.ts` | PrimaryCTASection.tsx internally | Internal to sections/ | Quarantine delete-later | Same as PrimaryCTASection |
| `src/components/sections/index.ts` | Barrel (trimmed — only PrimaryCTASection + types) | Internal | Quarantine delete-later | When PrimaryCTASection is deleted |
| `src/components/reusable/` (entire folder) | Blog templates/UI, Resources templates/pages, Case-study template, Features renderers (7), Industries templates, Services old renderers (14+), About, Contact, dev dashboards, ClusterPageLayout, ActionButtons | All unrebuilt domains + shared system components | Quarantine delete-later | When all consuming pages/components are rebuilt |

---

## Per-Domain Cleanup Targets

### Features (`src/domains/features/`)
Renderers importing from reusable/sections/features + PrimaryCTASection:
- AIChatRenderer.tsx
- CRMRenderer.tsx
- CalendarsRenderer.tsx
- InboxRenderer.tsx
- ReputationRenderer.tsx
- VoiceCallsRenderer.tsx
- WorkflowsRenderer.tsx

Also: `features/pages/index.tsx`, `features/types.ts`

### Industries (`src/domains/industries/`)
Templates and pages importing from reusable/sections/industries + PrimaryCTASection:
- IndustryCategoryPageTemplate.tsx
- IndustryDetailPageTemplate.tsx
- IndustryExploreSection.tsx
- IndustrySubIndustriesSection.tsx
- industries/pages/index.tsx
- industries/types.ts
- industries/utils/industryPresentation.ts

### Resources (`src/domains/resources/`)
Templates and pages importing from reusable/sections/resources + PrimaryCTASection:
- ResourcePageTemplate.tsx
- ResourceCategoryTemplate.tsx
- ResourcesHub.tsx
- ResourcesGuidesIsland.tsx
- ResourceNotFound.tsx
- resources/templates/types.ts

### Blog (`src/domains/blog/`)
Templates and UI importing from reusable/sections/blog + reusable/single + PrimaryCTASection:
- BlogPostTemplate.tsx
- BlogCategoryTemplate.tsx
- BlogTopicTemplate.tsx
- BlogFooterCTA.tsx
- BlogLanding.tsx
- BlogPostShareIsland.tsx
- BlogPostsListIsland.tsx

### Case Studies (`src/domains/case-studies/`)
Templates and pages importing from reusable/sections/case-studies + PrimaryCTASection:
- CaseStudyTemplate.tsx
- case-studies/pages/index.tsx

### Old Services Renderers (`src/domains/services/renderers/`)
The following are unrebuilt service renderers still importing from reusable/sections + PrimaryCTASection
(SWS + LSA have been rebuilt and are clean):
- AiLeadHandlingRenderer.tsx
- BricksBuilderRenderer.tsx
- CRMAutomationRenderer.tsx
- ConversionLayerRenderer.tsx
- Divi5Renderer.tsx
- ElementorRenderer.tsx
- LeadReactivationSystemRenderer.tsx
- MissedCallRecoverySystemRenderer.tsx
- ReputationReviewSystemsRenderer.tsx
- SystemMigrationPlatformConsolidationRenderer.tsx
- UnifiedCommunicationSystemRenderer.tsx
- WebsiteRedesignSystemRebuildRenderer.tsx
- WooCommerceRenderer.tsx
- WordPressDevelopmentRenderer.tsx

### Screens (About + Contact)
- `src/screens/About.tsx` — imports SectionWrapper + Badge from reusable, PrimaryCTASection from sections
- `src/screens/Contact.tsx` — imports SectionWrapper + Button from reusable, PrimaryCTASection from sections

### System Components (shared infrastructure)
These are in `src/components/system/` and use old imports internally:
- `ClusterPageLayout.tsx` — imports RelatedCardsSection from reusable/sections/core
- `ActionButtons.tsx` — imports Button from reusable/single (old Button, not new-system component)

**Deleted in 6F** (no longer in quarantine):
- `SmartRelatedSection.tsx` — replaced by `src/components/navigation/RelatedSection.tsx`
- `SmartRelatedSectionClient.tsx` — deleted with SmartRelatedSection chain
- `src/components/sections/RelatedContentSection.tsx` — deleted
- `src/components/sections/icons.ts` — deleted

### Dev Pages (internal only)
- `src/app/dev/system-dashboard/OperatorDashboard.tsx` — SectionWrapper from reusable
- `src/app/image-dashboard/dashboard.tsx` — SectionWrapper from reusable
- `src/app/dev/cta-label-contract/page.tsx` — PrimaryCTASection (dev contract test page)

---

## Next Deletion Gates

### Gate: Delete the 17 zero-import `src/components/sections/` orphans
- **Already deleted in 6E** — AccordionFAQSection, AuthoritySignalMapSection, BeforeAfterSection, CompoundingSignalsSection, CriteriaComparisonSection, GridCardsSection, HeroSplitSection, ImageStorySection, JourneyLeakMapSection, LayerStackSection, LeakBoardSection, OperatingBuildSection, ProcessStepsSection, ProofStorySection, QualificationSection, ScopeSection, ServiceBridgeSection
- `src/components/sections/index.ts` trimmed to export only: PrimaryCTASection + types

### Gate: Delete RelatedContentSection (+ SmartRelatedSection chain)
- **Already completed in 6F** — RelatedContentSection.tsx, SmartRelatedSection.tsx, SmartRelatedSectionClient.tsx, icons.ts all deleted.
- New-system replacement: `src/components/navigation/RelatedSection.tsx`
- LSA lsa-related page-owned section removed; global injection handles all service + feature + industry + case-study pages.

### Gate: Delete PrimaryCTASection
**Condition**: All of the following are rebuilt to use DecisionPanel:
- About.tsx, Contact.tsx
- All blog templates/UI (BlogPostTemplate, BlogFooterCTA, etc.)
- All features renderers (7)
- All industry templates
- All resource templates/pages
- All case-study templates/pages
- All old service renderers (14)
- dev/cta-label-contract page removed or updated
**Then also delete**: SectionShell.tsx, types.ts

### Gate: Delete entire `src/components/sections/` folder
**Condition**: PrimaryCTASection deletion gate is met (RelatedContentSection already deleted in 6F).

### Gate: Delete `src/components/reusable/`
**Condition**: All of the following domains are rebuilt with new-system components:
- All blog templates/UI
- All resource templates/pages
- All case-study templates/pages
- All features renderers
- All industry templates/pages
- All old service renderers
- About.tsx and Contact.tsx
- ClusterPageLayout.tsx (RelatedCardsSection dependency)
- ActionButtons.tsx (Button dependency)
- Dev dashboard pages (SectionWrapper dependency)

---

## Milestone 6K Quarantine Entries

### CaseStudyTemplate.tsx — RelatedSection direct import (Quarantine)
- **File**: `src/domains/case-studies/templates/CaseStudyTemplate.tsx`
- **Issue**: Template imports and renders `RelatedSection` directly inside a `section.type === 'more'` branch, instead of having RelatedSection injected by a config wrapper.
- **Why allowed**: The pattern is data-driven (section data controls whether related is shown), but template-owned, not config-owned. Full case-study config/wrapper migration is out of Milestone 6K scope.
- **Validator exception**: Listed in `APPROVED_RELATED_OWNERS` in `scripts/validators/validate-related-duplication.ts`.
- **Delete gate**: When CaseStudyTemplate is rebuilt with a config/wrapper pattern (`src/domains/case-studies/config.tsx`) that handles RelatedSection injection globally.

### generate-global-inventory.mjs — Quarantine guard added
- **File**: `scripts/generators/generate-global-inventory.mjs`
- **Status**: Quarantine guard added in Milestone 6K. Script exits with error unless invoked with `--manual`.
- **Why**: The generator scanned `src/components/reusable/` and updated `GLOBAL-COMPONENTS-CATALOG.md`, which was removed from all active pipeline commands (`predev`, `generate:all`, `validate:docs`) in 6K.
- **Delete gate**: When `src/components/reusable/` is deleted (same as the reusable folder gate above).

---

## Milestone 6L Entries

### lsa-cycle raw section — RESOLVED in 6L
- **Was**: `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx` — raw `<section className='lsa-cycle'>` with a comment noting incompatibility with SectionFrame's standalone header block.
- **Resolution**: Heading (kicker, h2, description) extracted above the two-column grid; `SectionFrame` now wraps the section with `tone='white'`. CSS layout/copy rules removed. All rebuilt-baseline renderers now use SectionFrame for every normal section. No raw `<section>` remains in new-system renderer files.
