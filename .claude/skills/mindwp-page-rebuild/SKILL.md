# MindWP Page Rebuild Skill

Use only after a page plan has been approved.

## Workflow

1. Read `CLAUDE.md`, the approved plan, and the relevant core docs.
2. Rebuild the target page from the approved plan.
3. First prepare the render shape:
   - set up `HeroFrame` with the right title, description, actions, props, and basic page-specific framing
   - do not build the final hero visual until the base shape is clear
   - lay out the major `SectionShell` sections with useful headings, titles, descriptions, tones, variants, and any needed custom class names
   - decide whether sections need background treatment, pseudo-element support, custom CSS, token support, or component variant support
   - use `DecisionPanel` and `FAQSection` where they strengthen the page
4. After the render shape is clear, design the inner section content with page-owned JSX, Tailwind, and direct content inside `SectionShell` where appropriate.
5. Use existing `HeroFrame`, `SectionShell`, `DecisionPanel`, and `FAQSection` where they strengthen the page.
6. During the first-three-pages baseline phase only, shared component, token, or CSS improvements may be made when the approved design clearly justifies them.
7. After Homepage, Smart Website Systems, and Local SEO Authority Systems are approved, do not modify `HeroFrame`, `SectionShell`, `DecisionPanel`, `FAQSection`, global tokens, or shared CSS during normal page rebuilds unless the user explicitly approves a design-system change.
8. Do not force all content into data files too early. Hero, FAQ, and DecisionPanel content may stay in data files when useful; custom section content may live in JSX while the design is being proven.
9. Keep inner section patterns distinct. For later pages, do not make more than about 20% of inner section patterns feel identical to previous approved pages unless intentional reuse is approved.
10. Do not invent proof, metrics, testimonials, rankings, guarantees, or client results.

## Output

Summarize changed files, how the approved plan was implemented, render-shape decisions, inner-section design decisions, any shared component/token changes, and validation results.
