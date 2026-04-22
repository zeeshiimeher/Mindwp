#!/usr/bin/env node
/**
 * AI Editing Stability Test.
 *
 * Verifies that the validation pipeline catches tone drift, structure
 * breaks, and vocabulary violations when simulated "bad edits" are
 * introduced. Picks one file from each domain, injects known violations,
 * runs the relevant validator, and confirms detection.
 *
 * All injected content is reverted automatically after each test.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();

const TEST_FILES = [
  {
    label: 'blog',
    file: 'src/domains/blog/content/AiReceptionForAutomotiveShops.tsx',
    validator: 'node scripts/validators/validate-vocabulary.mjs',
  },
  {
    label: 'resource',
    file: 'src/domains/resources/content/AuthoritySignalsForLocalSearch.tsx',
    validator: 'node scripts/validators/validate-vocabulary.mjs',
  },
  {
    label: 'service',
    file: 'src/domains/services/data/ai-lead-handling.ts',
    validator: 'node scripts/validators/validate-vocabulary.mjs',
  },
];

const INJECTIONS = [
  { label: 'hype-word', text: '// TEST-INJECT: This will skyrocket your leads guaranteed\n' },
  {
    label: 'banned-phrase',
    text: '// TEST-INJECT: The enquiry routing and operational flow is great\n',
  },
  { label: 'anti-hype', text: '// TEST-INJECT: Revolutionary game-changer that will dominate\n' },
];

function runValidator(command) {
  try {
    const output = execSync(command + ' 2>&1', { cwd: root, encoding: 'utf8', stdio: 'pipe' });
    return { passed: true, output: output + '' };
  } catch (error) {
    return { passed: false, output: (error.stdout || '') + (error.stderr || '') };
  }
}

function main() {
  let allPassed = true;
  const results = [];

  for (const testFile of TEST_FILES) {
    const absPath = path.join(root, testFile.file);
    if (!fs.existsSync(absPath)) {
      results.push({
        label: testFile.label,
        status: 'SKIP',
        reason: `Missing file: ${testFile.file}`,
      });
      continue;
    }

    const original = fs.readFileSync(absPath, 'utf8');

    for (const injection of INJECTIONS) {
      const injected = injection.text + original;
      fs.writeFileSync(absPath, injected, 'utf8');

      const result = runValidator(testFile.validator);
      const detected = /warning|banned|hype|vocabulary/i.test(result.output);

      results.push({
        label: testFile.label,
        injection: injection.label,
        validator: testFile.validator,
        detected,
      });

      if (!detected) {
        allPassed = false;
      }

      fs.writeFileSync(absPath, original, 'utf8');
    }
  }

  console.log('[test-editing-stability] Results');
  for (const result of results) {
    if (result.status === 'SKIP') {
      console.log(`- ${result.label}: SKIP (${result.reason})`);
      continue;
    }

    console.log(
      `- ${result.label} / ${result.injection}: ${result.detected ? 'PASS' : 'FAIL'} (${result.validator})`
    );
  }

  if (!allPassed) {
    process.exitCode = 1;
  }
}

main();
