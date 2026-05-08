# Legacy Dependency Map

> Created: Milestone 6E. Updated as pages are rebuilt.
> Last updated: Milestone 6N. Latest baseline: Homepage, SWS, LSA rebuilt. CaseStudyTemplate resolved (RelatedSection + PrimaryCTASection). All rebuilt renderers use SectionFrame.

## Purpose

This is the live old-dependency map. It answers:
- What old file/pattern remains and who imports it?
- Why is it still here and when can it be deleted?
- What is already deleted/resolved?

This is not a milestone history. See `docs/Planning/System-hard-reset.md` for architecture rules and the compressed milestone summary.

## Quarantine Rules

- Do not import from `src/components/reusable` in rebuilt/new files.
- Do not import from `src/components/sections` in rebuilt/new files.
- Do not use `PrimaryCTASection` in rebuilt/new files.
- Do not use old `rd-*`, `l-section`, `l-container`, `btn-primary`, `btn-outline`, `hero-split`, `grid-cards`, `scope__`, `process-steps`, or `layer-stack` classes in rebuilt/new files.
- Delete old files only when all consumers are rebuilt or disabled.
- Never empty old files to fake a pass.

Quarantine is enforced by `scripts/validators/validate-legacy-quarantine.mjs`.

---

## Deleted / Resolved

Items below are confirmed deleted and must not appear as active requirements in new work:

- **`SectionShell.tsx`** — Deleted in 6G. No remaining consumers.
- **`RelatedContentSection.tsx`** — Deleted in 6F. Replaced by `src/components/navigation/RelatedSection.tsx`.
- **`SmartRelatedSection.tsx`** + **`SmartRelatedSectionClient.tsx`** — Deleted in 6F.
- **`src/components/sections/icons.ts`** — Deleted in 6F.
- **17 zero-import section files** — Deleted in 6E (AccordionFAQSection, AuthoritySignalMapSection, BeforeAfterSection, CompoundingSignalsSection, CriteriaComparisonSection, GridCardsSection, HeroSplitSection, ImageStorySection, JourneyLeakMapSection, LayerStackSection, LeakBoardSection, OperatingBuildSection, ProcessStepsSection, ProofStorySection, QualificationSection, ScopeSection, ServiceBridgeSection).
- **Component library route** (`/components`, `ComponentLibrary.tsx`, `componentDocs.generated.ts`) — Deleted in 6D.
- **`{ type: 'more' }` case-study pseudo-section** — Removed from all 25 case-study data files in 6M.
- **`lsa-cycle` raw section exception** — Resolved in 6L. `SectionFrame` now wraps it correctly.
- **`CaseStudyTemplate` `RelatedSection` direct import** — Resolved in 6M. No template-owned related exceptions remain.
- **`CaseStudyTemplate` `PrimaryCTASection` direct import** — Resolved in 6N. Now uses `DecisionPanel`.
- **`SLUGS_WITH_OWN_RELATED`** — Removed in 6A/6F. Replaced by `options.relatedContent` registry contract.

---

## Remaining Old UI Dependencies

| Old file / pattern | Current consumers | Route / domain | Status | Delete condition |
|---|---|---|---|---|
| `src/components/sections/PrimaryCTASection.tsx` | About.tsx, Contact.tsx, BlogPostTemplate, BlogFooterCTA, case-studies/pages/index.tsx, Features pages + 7 renderers, Industries templates + pages, Resources hub/template, Services pages + 14 old renderers, dev/cta-label-contract | all unrebuilt domains + About/Contact | Quarantine delete-later | When all consuming pages are rebuilt and no longer import it |
| `src/components/sections/types.ts` | PrimaryCTASection.tsx internally | Internal to sections/ | Quarantine delete-later | Same as PrimaryCTASection |
| `src/components/sections/index.ts` | Barrel (trimmed — only PrimaryCTASection + types) | Internal | Quarantine delete-later | When PrimaryCTASection is deleted |
| `src/components/reusable/` (entire folder) | Blog templates/UI, Resources templates/pages, CaseStudyTemplate (old visual sections only), Features renderers (7), Industries templates, Services old renderers (14+), About, Contact, dev dashboards, ClusterPageLayout, ActionButtons | All unrebuilt domains + shared system components | Quarantine delete-later | When all consuming pages/components are rebuilt |

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
- `CaseStudyTemplate.tsx` — imports from `reusable/` (old visual sections: `SectionWrapper`, `TestimonialCard`, etc). No longer imports `PrimaryCTASection` (resolved in 6N). Still quarantined.
- `case-studies/pages/index.tsx` — imports from `reusable/` and `PrimaryCTASection`.

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
- `ClusterPageLayout.tsx` — imports RelatedCardsSection from reusable/sections/core
- `ActionButtons.tsx` — imports Button from reusable/single (old Button, not new-system component)

### Dev Pages (internal only)
- `src/app/dev/system-dashboard/OperatorDashboard.tsx` — SectionWrapper from reusable
- `src/app/image-dashboard/dashboard.tsx` — SectionWrapper from reusable
- `src/app/dev/cta-label-contract/page.tsx` — PrimaryCTASection (dev contract test page)

### Scripts (quarantine guard)
- `scripts/generators/generate-global-inventory.mjs` — Quarantine guard added in 6K. Exits with error unless invoked with `--manual`. Previously scanned `src/components/reusable/` and updated `GLOBAL-COMPONENTS-CATALOG.md` (now a quarantine snapshot only). **Delete gate**: when `src/components/reusable/` is deleted.

---

## Deletion Gates

### Gate: Delete PrimaryCTASection
**Condition**: All of the following are rebuilt to use DecisionPanel:
- About.tsx, Contact.tsx
- All blog templates/UI (BlogPostTemplate, BlogFooterCTA, etc.)
- All features renderers (7)
- All industry templates
- All resource templates/pages
- `case-studies/pages/index.tsx` (CaseStudyTemplate already resolved in 6N)
- All old service renderers (14)
- dev/cta-label-contract page removed or updated

Note: `SectionShell.tsx` is already deleted (6G) — not a prerequisite. **Then also delete**: `sections/types.ts`, `sections/index.ts`.

### Gate: Delete entire `src/components/sections/` folder
**Condition**: PrimaryCTASection deletion gate is met.

### Gate: Delete `src/components/reusable/`
**Condition**: All of the following domains are rebuilt with new-system components:
- All blog templates/UI
- All resource templates/pages
- All case-study templates/pages (includes CaseStudyTemplate full rebuild)
- All features renderers
- All industry templates/pages
- All old service renderers
- About.tsx and Contact.tsx
- ClusterPageLayout.tsx (RelatedCardsSection dependency)
- ActionButtons.tsx (Button dependency)
- Dev dashboard pages (SectionWrapper dependency)
