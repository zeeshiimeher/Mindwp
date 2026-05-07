# Legacy Dependency Map

> Created: Milestone 6E. Updated as pages are rebuilt.

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
| `src/components/sections/RelatedContentSection.tsx` | SmartRelatedSectionClient.tsx (system component) | Global (smart related content system) | Quarantine delete-later | When SmartRelatedSectionClient is rebuilt to use new-system component |
| `src/components/sections/SectionShell.tsx` | PrimaryCTASection.tsx, RelatedContentSection.tsx (and 17 deleted section files) | Internal to sections/ only | Quarantine delete-later | When PrimaryCTASection and RelatedContentSection are deleted |
| `src/components/sections/icons.ts` | RelatedContentSection.tsx internally | Internal to sections/ | Quarantine delete-later | Same as RelatedContentSection |
| `src/components/sections/types.ts` | PrimaryCTASection.tsx, RelatedContentSection.tsx, SectionShell.tsx internally | Internal to sections/ | Quarantine delete-later | Same as PrimaryCTASection and RelatedContentSection |
| `src/components/sections/index.ts` | Barrel (trimmed — 17 zero-import sections removed in 6E) | Internal | Quarantine delete-later | When PrimaryCTASection and RelatedContentSection are deleted |
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
- `SmartRelatedSectionClient.tsx` — imports RelatedContentSection (the primary dependency blocker)
- `ClusterPageLayout.tsx` — imports RelatedCardsSection from reusable/sections/core
- `ActionButtons.tsx` — imports Button from reusable/single (old Button, not new-system component)

### Dev Pages (internal only)
- `src/app/dev/system-dashboard/OperatorDashboard.tsx` — SectionWrapper from reusable
- `src/app/image-dashboard/dashboard.tsx` — SectionWrapper from reusable
- `src/app/dev/cta-label-contract/page.tsx` — PrimaryCTASection (dev contract test page)

---

## Next Deletion Gates

### Gate: Delete the 17 zero-import `src/components/sections/` orphans
- **Already deleted in 6E** — AccordionFAQSection, AuthoritySignalMapSection, BeforeAfterSection, CompoundingSignalsSection, CriteriaComparisonSection, GridCardsSection, HeroSplitSection, ImageStorySection, JourneyLeakMapSection, LayerStackSection, LeakBoardSection, OperatingBuildSection, ProcessStepsSection, ProofStorySection, QualificationSection, ScopeSection, ServiceBridgeSection
- `src/components/sections/index.ts` trimmed to export only: PrimaryCTASection, RelatedContentSection, SectionShell, icons, types

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
**Then also delete**: SectionShell.tsx, types.ts (if no longer needed by RelatedContentSection)

### Gate: Delete RelatedContentSection
**Condition**: SmartRelatedSectionClient.tsx is rebuilt to use a new-system related content component.
**Then also delete**: icons.ts (if only used by deleted sections and RelatedContentSection)

### Gate: Delete entire `src/components/sections/` folder
**Condition**: Both PrimaryCTASection and RelatedContentSection deletion gates are met.

### Gate: Delete `src/components/reusable/`
**Condition**: All of the following domains are rebuilt with new-system components:
- All blog templates/UI
- All resource templates/pages
- All case-study templates/pages
- All features renderers
- All industry templates/pages
- All old service renderers
- About.tsx and Contact.tsx
- SmartRelatedSectionClient.tsx (RelatedCardsSection dependency)
- ClusterPageLayout.tsx (RelatedCardsSection dependency)
- ActionButtons.tsx (Button dependency)
- Dev dashboard pages (SectionWrapper dependency)
