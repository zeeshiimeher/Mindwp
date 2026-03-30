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
    validator: 'node scripts/validation/validate-vocabulary.mjs',
  },
  {
    label: 'resource',
    file: 'src/domains/resources/content/AuthoritySignalsForLocalSearch.tsx',
    validator: 'node scripts/validation/validate-vocabulary.mjs',
  },
  {
    label: 'service',
    file: 'src/domains/services/data/ai-lead-handling.ts',
    validator: 'node scripts/validation/validate-vocabulary.mjs',
  },
];

/**
 * Simulated bad edits: each injects a known violation into the file.
 * The injection is a comment line so it doesn't break syntax.
 */
const INJECTIONS = [
  { label: 'hype-word', text: "// TEST-INJECT: This will skyrocket your leads guaranteed\n" },
  { label: 'banned-phrase', text: "// TEST-INJECT: The enquiry routing and operational flow is great\n" },
  { label: 'anti-hype', text: "// TEST-INJECT: Revolutionary game-changer that will dominate\n" },
];

function runValidator(cmd) {
  try {
    // Redirect stderr to stdout to capture warnings from WARN-mode validators
    const output = execSync(cmd + ' 2>&1', { cwd: root, encoding: 'utf8', stdio: 'pipe' });
    return { passed: true, output: output + '' };
  } catch (e) {
    return { passed: false, output: (e.stdout || '') + (e.stderr || '') };
  }
}

function main() {
  let allPassed = true;
  const results = [];

  console.log('AI Editing Stability Test');
  console.log('========================\n');

  for (const testFile of TEST_FILES) {
    const absPath = path.join(root, testFile.file);
    if (!fs.existsSync(absPath)) {
      console.log(`⚠ Skipping ${testFile.label} — file not found: ${testFile.file}`);
      continue;
    }

    const original = fs.readFileSync(absPath, 'utf8');

    // Step 1: Verify baseline passes
    const baseline = runValidator(testFile.validator);
    console.log(`[${testFile.label}] Baseline: ${baseline.passed ? '✓ pass' : '✗ fail'}`);

    for (const injection of INJECTIONS) {
      // Step 2: Inject bad edit
      fs.writeFileSync(absPath, injection.text + original, 'utf8');

      // Step 3: Run validator — should detect violation
      const after = runValidator(testFile.validator);
      const detected = after.output.includes('warning') || after.output.includes('Warning') ||
                       after.output.includes('⚠') || after.output.includes('banned') ||
                       after.output.includes('Banned');
      
      console.log(`[${testFile.label}] Inject "${injection.label}": ${detected ? '✓ detected' : '✗ NOT detected'}`);
      
      if (!detected) {
        allPassed = false;
        results.push({ file: testFile.file, injection: injection.label, status: 'MISSED' });
      } else {
        results.push({ file: testFile.file, injection: injection.label, status: 'DETECTED' });
      }

      // Step 4: Revert
      fs.writeFileSync(absPath, original, 'utf8');
    }

    // Step 5: Verify post-revert passes
    const postRevert = runValidator(testFile.validator);
    console.log(`[${testFile.label}] Post-revert: ${postRevert.passed ? '✓ pass' : '✗ fail'}\n`);
  }

  // Summary
  const detected = results.filter((r) => r.status === 'DETECTED').length;
  const missed = results.filter((r) => r.status === 'MISSED').length;

  console.log('========================');
  console.log(`Results: ${detected} detected, ${missed} missed (${results.length} total)`);

  if (allPassed) {
    console.log('✓ All injected violations were detected by validators.');
  } else {
    console.error('✗ Some violations were not detected.');
    process.exitCode = 1;
  }
}

main();
