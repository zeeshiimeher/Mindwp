# MindWP - Smart Website System

## What This Is

MindWP is a smart website system for service businesses.

It combines a Next.js application with a deterministic control plane that validates content, routing, conversion flow, and deployment safety before production builds are allowed to proceed.

This repo is built for service-led operations, not ad inventory, affiliate content, or blog-first publishing.

## Core Idea

1 command -> full validation -> safe deploy

`npm run system:full` is the trusted gate. It validates the system, regenerates required artifacts, runs tests, and confirms the repo is safe to deploy.

Production builds are blocked if that gate fails.

## What This Repo Contains

- Next.js app
- deterministic system engine
- validators and analyzers
- reporting and dashboard outputs

## Quick Start

```bash
npm install
npm run system:full
npm run dev
```

## Daily Workflow

```bash
npm run system:quick
npm run system:regen
npm run system:full
```

## Deployment

- Push to `main` -> Vercel deploy
- Build automatically runs `system:full`

## Documentation

- System -> `docs/system/`
- Workflow -> `docs/ops/WORKFLOW.md`
- Audit -> `docs/ops/AUDIT.md`
