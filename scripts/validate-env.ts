#!/usr/bin/env node

import process from 'node:process';

import { validateEnv, validateSystemEnv } from '../config/env.schema.ts';

type ValidationTarget = 'runtime' | 'system' | 'all';

function resolveTarget(args: string[]): ValidationTarget {
  const explicitTarget = args.find(arg => arg.startsWith('--target='));
  if (!explicitTarget) {
    return 'all';
  }

  const value = explicitTarget.slice('--target='.length);
  if (value === 'runtime' || value === 'system' || value === 'all') {
    return value;
  }

  throw new Error(`Unknown validation target: ${value}`);
}

function validateTarget(target: ValidationTarget) {
  const completed: ValidationTarget[] = [];

  if (target === 'runtime' || target === 'all') {
    validateEnv();
    completed.push('runtime');
  }

  if (target === 'system' || target === 'all') {
    validateSystemEnv();
    completed.push('system');
  }

  return completed;
}

try {
  const completed = validateTarget(resolveTarget(process.argv.slice(2)));
  process.stdout.write(`Environment validation passed for: ${completed.join(', ')}\n`);
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
}
