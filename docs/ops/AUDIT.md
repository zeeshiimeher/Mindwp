# MindWP Audit System

## Overview

MindWP is a deterministic validation system.

Correctness is enforced through:

- validators
- analyzers
- manifest
- snapshot

---

## `system:full`

The only trusted gate.

Ensures:

- system integrity
- SEO correctness
- indexing policy
- route ownership
- env validation

---

## Validation Layers

### Validators

- blocking
- manifest-driven
- enforce rules

---

## Snapshot System

- built once
- reused across validators
- prevents drift

---

## Generated File Protection

- metadata enforced
- cannot be manually edited

---

## Manifest Control

- single source of truth
- defines system structure

---

## Determinism Guarantee

Running:

```bash
npm run system:full
```

twice must produce identical outputs.

---

## Failure Behavior

If anything fails:

- `system:full` fails
- build is blocked
- deployment is unsafe

---

## Principle

System is:

- deterministic
- enforced
- non-optional