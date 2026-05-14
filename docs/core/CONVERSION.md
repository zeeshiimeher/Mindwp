# Conversion

MindWP CTAs should feel diagnostic, specific, and low-pressure.

## Current Build-System Rule

CTA components and helpers may exist, but runtime CTA enforcement must not block page creation.

In the MindWP build system:

- CTAs may live in custom JSX.
- CTA wording may be shaped around the section/page.
- Final CTA placement can move while the page is being designed.
- `DecisionPanel` is useful, but not mandatory for every section.
- Registry/count/position enforcement is deferred.

## CTA Intent

Good CTAs should:

- follow recognition and proof
- invite a useful conversation
- reflect the page's owning problem
- avoid pressure, hype, or fake urgency

Do not invent proof, savings, guarantees, rankings, or results to make a CTA stronger.

## Contact Links

Use `buildContactHref()` when a stable CTA should preserve source context. During page creation and section redesign, do not let contact-helper plumbing block section composition.

## Deferred

Rebuild stricter CTA rules later after the approved page system exists:

- canonical labels
- contact-source contracts
- CTA registry
- panel counts
- CTA position rules
