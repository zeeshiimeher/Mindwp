export { createGeneratedJsonMetadata } from '../lib/generated-file-metadata.mjs';

const VALIDATOR_DEFINITIONS = [
    {
        name: 'check-generated',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/core/check-generated.mjs'],
        blocking: true,
        reportFile: 'check-generated-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-env',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validate-env.ts', '--target=all'],
        blocking: true,
        reportFile: 'env-validation-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-indexing-policy',
        category: 'seo',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-indexing-policy.ts'],
        blocking: true,
        reportFile: 'indexing-policy-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-topic-indexability',
        category: 'seo',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-topic-indexability.ts'],
        blocking: true,
        reportFile: 'topic-indexability-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-route-ownership',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-route-ownership.ts'],
        blocking: true,
        reportFile: 'route-ownership-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-seo-enforcement',
        category: 'seo',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-seo-enforcement.ts'],
        blocking: true,
        reportFile: 'seo-enforcement-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-duplicate-intent',
        category: 'seo',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-duplicate-intent.ts'],
        blocking: true,
        reportFile: 'duplicate-intent-report.json',
        syntheticReport: true,
    },
    {
        name: 'typecheck',
        category: 'core',
        command: 'npx',
        args: ['tsc', '--noEmit'],
        blocking: true,
        reportFile: 'typecheck-report.json',
        syntheticReport: true,
    },
    {
        name: 'lint',
        category: 'core',
        command: 'node',
        args: ['scripts/runners/run-eslint.mjs'],
        blocking: false,
        reportFile: 'lint-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-content-contract',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-content-contract.mjs', '--report-json'],
        blocking: true,
        reportFile: 'content-contract-report.json',
    },
    {
        name: 'validate-content-quality',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-content-quality.mjs', '--report-json'],
        blocking: true,
        reportFile: 'content-quality-report.json',
    },
    {
        name: 'validate-section-order-consistency',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-section-order-consistency.mjs', '--report-json'],
        blocking: true,
        reportFile: 'section-order-consistency-report.json',
    },
    {
        name: 'validate-hero-list-length',
        category: 'content',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=hero-list-length', '--report-json'],
        blocking: true,
        reportFile: 'hero-list-length-report.json',
    },
    {
        name: 'validate-heading-hierarchy',
        category: 'content',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=heading-hierarchy', '--report-json'],
        blocking: true,
        reportFile: 'heading-hierarchy-report.json',
    },
    {
        name: 'validate-seo-position',
        category: 'content',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=seo-position', '--report-json'],
        blocking: true,
        reportFile: 'seo-position-report.json',
    },
    {
        name: 'validate-faq-position',
        category: 'content',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=faq-position', '--report-json'],
        blocking: true,
        reportFile: 'faq-position-report.json',
    },
    {
        name: 'validate-button-rule',
        category: 'cta',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=button-rule', '--report-json'],
        blocking: true,
        reportFile: 'button-rule-report.json',
    },
    {
        name: 'validate-badge-length',
        category: 'content',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-content-enforcement.ts', '--rule=badge-length', '--report-json'],
        blocking: true,
        reportFile: 'badge-length-report.json',
    },
    {
        name: 'validate-cta-labels',
        category: 'cta',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-cta-labels.mjs', '--report-json'],
        blocking: true,
        reportFile: 'cta-label-contract-report.json',
    },
    {
        name: 'validate-cta-resolver-integrity',
        category: 'cta',
        command: 'node',
        args: ['scripts/validators/validate-cta-resolver-integrity.mjs', '--report-json'],
        blocking: true,
        reportFile: 'cta-resolver-integrity-report.json',
    },
    {
        name: 'validate-conversion-contract',
        category: 'cta',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-conversion-contract.mjs', '--report-json'],
        blocking: true,
        reportFile: 'conversion-contract-report.json',
    },
    {
        name: 'validate-template-payload-sufficiency',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-template-payload-sufficiency.mjs', '--report-json'],
        blocking: true,
        reportFile: 'template-payload-report.json',
    },
    {
        name: 'validate-section-structure',
        category: 'structure',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-section-structure.mjs', '--report-json'],
        blocking: true,
        reportFile: 'section-structure-report.json',
    },
    {
        name: 'validate-system-invariants',
        category: 'core',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-system-invariants.mjs', '--report-json'],
        blocking: true,
        reportFile: 'system-invariants-report.json',
    },
    {
        name: 'validate-section-shell-integrity',
        category: 'structure',
        command: 'node',
        args: ['scripts/validators/validate-section-shell-integrity.mjs', '--report-json'],
        blocking: true,
        reportFile: 'section-shell-integrity-report.json',
    },
    {
        name: 'validate-design-system',
        category: 'structure',
        command: 'node',
        args: ['scripts/validators/validate-design-system.cjs', '--report-json'],
        blocking: true,
        reportFile: 'design-system-report.json',
    },
    {
        name: 'validate-ui-purity',
        category: 'structure',
        command: 'node',
        args: ['scripts/validators/validate-ui-purity.mjs', '--report-json'],
        blocking: true,
        reportFile: 'ui-purity-report.json',
    },
    {
        name: 'validate-graph',
        category: 'graph',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-graph.ts', '--report-json'],
        blocking: true,
        reportFile: 'graph-report.json',
    },
    {
        name: 'validate-internal-links',
        category: 'seo',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-internal-links.ts'],
        blocking: true,
        reportFile: 'internal-links-report.json',
    },
    {
        name: 'validate-cta-violations',
        category: 'cta',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-cta-violations.ts'],
        blocking: true,
        reportFile: 'cta-violation-scan.json',
    },
    {
        name: 'validate-related-duplication',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-related-duplication.ts'],
        blocking: true,
        reportFile: 'related-duplication-scan.json',
    },
    {
        name: 'validate-production-contracts',
        category: 'core',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-production-contracts.ts', '--report-json'],
        blocking: true,
        reportFile: 'production-contract-report.json',
    },
    {
        name: 'validate-inline-link-misuse',
        category: 'seo',
        command: 'npx',
        args: ['tsx', 'scripts/validators/validate-inline-link-misuse.ts'],
        blocking: true,
        reportFile: 'inline-link-misuse-scan.json',
    },
    {
        name: 'generate-proof-coverage',
        category: 'content',
        command: 'npx',
        args: ['tsx', 'scripts/validators/generate-proof-coverage.ts'],
        blocking: false,
        reportFile: 'proof-coverage.json',
    },
    {
        name: 'validate-tokens',
        category: 'structure',
        command: 'node',
        args: ['scripts/validators/validate-tokens.mjs', '--report-json'],
        blocking: true,
        reportFile: 'token-report.json',
    },
    {
        name: 'validate-inline-styles',
        category: 'structure',
        command: 'node',
        args: ['scripts/validators/validate-inline-styles.mjs', '--report-json'],
        blocking: true,
        reportFile: 'inline-style-report.json',
    },
    {
        name: 'validate-docs',
        category: 'docs',
        command: 'node',
        args: ['scripts/validators/validate-docs.mjs', '--report-json'],
        blocking: false,
        reportFile: 'docs-report.json',
    },
    {
        name: 'validate-vocabulary',
        category: 'content',
        command: 'node',
        args: ['scripts/validators/validate-vocabulary.mjs', '--report-json'],
        blocking: false,
        reportFile: 'vocabulary-report.json',
    },
    {
        name: 'validate-system-manifest-integrity',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-system-manifest-integrity.ts'],
        blocking: true,
        reportFile: 'system-manifest-integrity-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-command-integrity',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-command-integrity.ts'],
        blocking: true,
        reportFile: 'command-integrity-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-build-safety',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-build-safety.ts'],
        blocking: true,
        reportFile: 'build-safety-report.json',
        syntheticReport: true,
    },
    {
        name: 'validate-generated-file-protection',
        category: 'core',
        command: 'node',
        args: ['--import', 'tsx/esm', 'scripts/validators/validate-generated-file-protection.ts'],
        blocking: true,
        reportFile: 'generated-file-protection-report.json',
        syntheticReport: true,
    },
];

const ANALYZERS = [
    'export-reports',
    'generate-content-gaps',
    'audit-content-consistency',
    'detect-page-priorities',
    'generate-content-intelligence',
    'inspect-graph',
    'score-content',
];

const ANALYZER_TOOLS = [
    'heading-audit',
    'run-visual-audit',
    'split-screenshots',
    'test-editing-stability',
    'visual-audit-runtime',
];

const REQUIRED_COMMANDS = [
    {
        name: 'system:full',
        description: 'FULL SYSTEM VALIDATION - run before build or deploy.',
        contract: 'full-trust',
    },
    {
        name: 'system:quick',
        description: 'FAST DEV CHECK - use during development.',
        contract: 'fast-feedback',
    },
    {
        name: 'system:regen',
        description: 'REGENERATE REPORTS - use after content or graph changes.',
        contract: 'artifact-regeneration',
    },
    {
        name: 'build',
        description: 'SAFE BUILD - blocked until full validation passes.',
        contract: 'build-safety',
    },
];

const QUICK_VALIDATOR_NAMES = [
    'check-generated',
    'validate-env',
    'validate-route-ownership',
    'validate-indexing-policy',
    'validate-topic-indexability',
    'validate-seo-enforcement',
    'validate-duplicate-intent',
    'validate-hero-list-length',
    'validate-heading-hierarchy',
    'validate-seo-position',
    'validate-faq-position',
    'validate-button-rule',
    'validate-badge-length',
    'typecheck',
    'validate-system-invariants',
    'validate-system-manifest-integrity',
    'validate-command-integrity',
    'validate-build-safety',
];

const DASHBOARD_REPORT_FILES = [
    'dashboard/system.json',
    'dashboard/validators.json',
    'dashboard/graph.json',
    'dashboard/topics.json',
    'dashboard/content.json',
    'dashboard/pipeline.json',
];

const PRIMARY_REPORT_FILES = [
    'authority-map.json',
    'check-generated-report.json',
    'client-dashboard.json',
    'client-report.json',
    'client-report.md',
    'content-consistency-audit.json',
    'content-contract-report.json',
    'content-gaps.json',
    'content-gaps.md',
    'content-intelligence.json',
    'content-quality-report.json',
    'content-score.json',
    'conversion-contract-report.json',
    'cta-label-contract-report.json',
    'cta-report.json',
    'cta-resolver-integrity-report.json',
    'cta-violation-scan.json',
    'design-system-report.json',
    'docs-report.json',
    'section-order-consistency-report.json',
    'hero-list-length-report.json',
    'heading-hierarchy-report.json',
    'duplicate-intent-report.json',
    'env-validation-report.json',
    'faq-position-report.json',
    'generated-file-protection-report.json',
    'graph-derived-summary.json',
    'graph-report.json',
    'indexing-policy-report.json',
    'inline-link-misuse-scan.json',
    'inline-style-report.json',
    'internal-links-report.json',
    'lint-report.json',
    'page-priorities.json',
    'pipeline-report.json',
    'production-contract-report.json',
    'proof-coverage.json',
    'related-duplication-scan.json',
    'route-ownership-report.json',
    'badge-length-report.json',
    'button-rule-report.json',
    'section-shell-integrity-report.json',
    'section-structure-report.json',
    'seo-enforcement-report.json',
    'seo-position-report.json',
    'build-safety-report.json',
    'command-integrity-report.json',
    'system-health.json',
    'system-manifest-integrity-report.json',
    'system-invariants-report.json',
    'system-report.json',
    'template-payload-report.json',
    'token-report.json',
    'topic-authority-scores.json',
    'topic-authority-scores.md',
    'topic-indexability-report.json',
    'topic-insights.json',
    'typecheck-report.json',
    'ui-purity-report.json',
    'validation-report.json',
    'validation-results.json',
    'vocabulary-report.json',
];

const TRANSIENT_REPORT_FILES = [
    'heading-audit-report.json',
    'session-log.json',
    'split-screenshots-report.json',
    'system-drift.json',
    'system-state.json',
    'test-editing-stability-report.json',
    'visual-audit-report.json',
    'visual-audit-runtime-report.json',
];

const GENERATED_MARKDOWN_FILES = [
    'reports/client-report.md',
    'reports/topic-authority-scores.md',
];

const GENERATED_CODE_FILES = [
    'src/lib/authority/generated/authorityMap.ts',
];

export const systemManifest = {
    validators: VALIDATOR_DEFINITIONS,
    analyzers: ANALYZERS,
    analyzerTools: ANALYZER_TOOLS,
    reports: [...PRIMARY_REPORT_FILES, ...DASHBOARD_REPORT_FILES],
    transientReports: TRANSIENT_REPORT_FILES,
    dashboardReports: DASHBOARD_REPORT_FILES,
    requiredCommands: REQUIRED_COMMANDS,
    quickValidators: QUICK_VALIDATOR_NAMES,
    generatedMarkdownFiles: GENERATED_MARKDOWN_FILES,
    generatedCodeFiles: GENERATED_CODE_FILES,
    ctaReportValidators: [
        'validate-cta-labels',
        'validate-conversion-contract',
        'validate-cta-violations',
    ],
    pipelineSteps: ['validate:all', 'export:reports', 'dashboard-data', 'system-report'],
    debugModes: ['summary', 'verbose', 'debug'],
};

export function getValidatorDefinitions() {
    return systemManifest.validators.map(validator => ({ ...validator, args: [...validator.args] }));
}

export function getValidatorNames() {
    return systemManifest.validators.map(validator => validator.name);
}

export function getValidatorByName(name) {
    return systemManifest.validators.find(validator => validator.name === name) ?? null;
}

export function getReportFiles() {
    return [...systemManifest.reports];
}

export function getTransientReportFiles() {
    return [...systemManifest.transientReports];
}

export function getDashboardReportFiles() {
    return [...systemManifest.dashboardReports];
}

export function getRequiredCommands() {
    return systemManifest.requiredCommands.map(command => ({ ...command }));
}

export function getQuickValidatorNames() {
    return [...systemManifest.quickValidators];
}

export function getGeneratedMarkdownFiles() {
    return [...systemManifest.generatedMarkdownFiles];
}

export function getGeneratedCodeFiles() {
    return [...systemManifest.generatedCodeFiles];
}

export function getDurableAnalyzerNames() {
    return [...systemManifest.analyzers];
}

export function getCtaReportValidatorNames() {
    return [...systemManifest.ctaReportValidators];
}