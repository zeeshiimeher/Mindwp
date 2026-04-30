import fs from 'node:fs';
import path from 'node:path';

import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const packageJsonPath = path.join(root, 'package.json');
const buildRunnerPath = path.join(root, 'scripts', 'runners', 'build-safe.mjs');
const reportPath = path.join(root, 'reports', 'build-safety-report.json');

function main() {
  const generatedAt = new Date().toISOString();
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {
    scripts?: Record<string, string>;
  };
  const issues: Array<{ area: string; message: string }> = [];
  const buildScript = packageJson.scripts?.build ?? '';

  if (buildScript !== 'node scripts/runners/build-safe.mjs') {
    issues.push({ area: 'package.json', message: 'build must use scripts/runners/build-safe.mjs' });
  }

  if (!fs.existsSync(buildRunnerPath)) {
    issues.push({
      area: 'scripts/runners/build-safe.mjs',
      message: 'safe build runner is missing',
    });
  } else {
    const runner = fs.readFileSync(buildRunnerPath, 'utf8');
    if (!/command:\s*'npm'[\s\S]*?args:\s*\['run',\s*'-s',\s*'system:full'\]/.test(runner)) {
      issues.push({
        area: 'scripts/runners/build-safe.mjs',
        message: 'safe build runner must execute system:full first',
      });
    }
    if (!/args:\s*\['scripts\/runners\/run-next\.mjs',\s*'build'\]/.test(runner)) {
      issues.push({
        area: 'scripts/runners/build-safe.mjs',
        message: 'safe build runner must execute the Next build after validation',
      });
    }
  }

  const report = createReportSchema({
    name: 'validate-build-safety',
    status: issues.length === 0 ? 'PASS' : 'FAIL',
    generatedAt,
    summary: {
      total: 2,
      passed: issues.length === 0 ? 2 : Math.max(2 - issues.length, 0),
      failed: issues.length,
      warnings: 0,
    },
    issues,
    data: {
      buildScript,
      buildRunnerPath: path.relative(root, buildRunnerPath).replaceAll(path.sep, '/'),
    },
    sourceCommand: 'node --import tsx/esm scripts/validators/validate-build-safety.ts',
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  if (issues.length > 0) {
    process.exitCode = 1;
  }
}

main();
