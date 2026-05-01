import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import {
    getReportFiles,
    getTransientReportFiles,
    getValidatorDefinitions,
} from '../core/system-manifest.mjs';
import { readReportJson } from '../lib/report-json.mjs';
import { createReportSchema, unwrapReportData } from '../lib/report-schema.mjs';

type IntegrityIssue = {
    file: string;
    rule: string;
    message: string;
};

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const reportPath = path.join(root, 'reports', 'generated-artifact-integrity-report.json');
const sourceCommand =
    'node --import tsx/esm scripts/validators/validate-generated-artifact-integrity.ts';
const logger = createLogger({
    label: 'validate-generated-artifact-integrity',
    mode: 'summary',
    rootDir: root,
});

function listManagedTopLevelEntries() {
    const durableFiles = getReportFiles().filter(fileName => !fileName.includes('/'));
    const transientFiles = getTransientReportFiles().filter(fileName => !fileName.includes('/'));

    return [...new Set([...durableFiles, ...transientFiles, 'dashboard', 'system-snapshots', 'visual-audit'])].sort(
        (left, right) => left.localeCompare(right)
    );
}

function toValidatorNames(report: unknown) {
    const data = unwrapReportData(report) ?? {};

    if (!Array.isArray((data as { validators?: Array<{ name?: unknown }> }).validators)) {
        return [];
    }

    return (data as { validators: Array<{ name?: unknown }> }).validators
        .map(validator => validator?.name)
        .filter((name): name is string => typeof name === 'string' && name.trim().length > 0)
        .sort((left, right) => left.localeCompare(right));
}

function pushIssue(issues: IntegrityIssue[], file: string, rule: string, message: string) {
    issues.push({ file, rule, message });
}

function diffNames(expected: string[], actual: string[]) {
    return {
        missing: expected.filter(name => !actual.includes(name)),
        unexpected: actual.filter(name => !expected.includes(name)),
    };
}

function main() {
    const issues: IntegrityIssue[] = [];
    const managedTopLevelEntries = listManagedTopLevelEntries();
    const managedTopLevelSet = new Set(managedTopLevelEntries);
    const expectedValidatorNames = getValidatorDefinitions()
        .map(validator => validator.name)
        .sort((left, right) => left.localeCompare(right));

    if (fs.existsSync(reportsDir)) {
        for (const entry of fs.readdirSync(reportsDir, { withFileTypes: true })) {
            if (entry.name.startsWith('.')) {
                continue;
            }

            if (entry.isDirectory()) {
                if (!managedTopLevelSet.has(entry.name)) {
                    pushIssue(
                        issues,
                        `reports/${entry.name}`,
                        'orphaned_entry',
                        `${entry.name} is not a manifest-owned report directory.`
                    );
                }
                continue;
            }

            if (/\.(json|md)$/i.test(entry.name) && !managedTopLevelSet.has(entry.name)) {
                pushIssue(
                    issues,
                    `reports/${entry.name}`,
                    'orphaned_entry',
                    `${entry.name} is not a manifest-owned report artifact.`
                );
            }
        }
    }

    const validationResults = readReportJson(root, 'validation-results.json');
    const actualValidatorNames = toValidatorNames(validationResults);

    for (const name of actualValidatorNames.filter(name => !expectedValidatorNames.includes(name))) {
        pushIssue(
            issues,
            'reports/validation-results.json',
            'outdated_validator_results',
            `validation-results.json still contains non-current validator ${name}.`
        );
    }

    const clientReport = readReportJson(root, 'client-report.json');
    const clientReportData = unwrapReportData(clientReport) as
        | { reports?: Array<{ name?: unknown }> }
        | undefined;
    const actualClientReportNames = Array.isArray(clientReportData?.reports)
        ? clientReportData.reports
            .map(item => item?.name)
            .filter((name): name is string => typeof name === 'string' && name.trim().length > 0)
            .sort((left, right) => left.localeCompare(right))
        : [];
    const expectedClientReportNames = managedTopLevelEntries
        .filter(name => fs.existsSync(path.join(reportsDir, name)))
        .sort((left, right) => left.localeCompare(right));
    for (const name of actualClientReportNames.filter(name => !expectedClientReportNames.includes(name))) {
        pushIssue(
            issues,
            'reports/client-report.json',
            'stale_reference',
            `client-report.json still references non-current artifact ${name}.`
        );
    }

    const clientReportMdPath = path.join(reportsDir, 'client-report.md');
    if (fs.existsSync(clientReportMdPath)) {
        const clientReportMd = fs.readFileSync(clientReportMdPath, 'utf8');
        if (clientReportMd.includes('system-state.json')) {
            pushIssue(
                issues,
                'reports/client-report.md',
                'stale_reference',
                'client-report.md still references legacy system-state.json.'
            );
        }
    }

    const legacySystemStatePath = path.join(reportsDir, 'system-state.json');
    if (fs.existsSync(legacySystemStatePath)) {
        const legacySystemState = readReportJson(root, 'system-state.json') as
            | { data?: { validation?: { validators?: Array<{ name?: unknown }> } } }
            | null;
        const legacyValidatorNames = Array.isArray(legacySystemState?.data?.validation?.validators)
            ? legacySystemState.data.validation.validators
                .map(validator => validator?.name)
                .filter((name): name is string => typeof name === 'string' && name.trim().length > 0)
                .sort((left, right) => left.localeCompare(right))
            : [];
        const legacyDiff = diffNames(expectedValidatorNames, legacyValidatorNames);

        pushIssue(
            issues,
            'reports/system-state.json',
            'stale_reference',
            'Legacy system-state.json is present even though system:full no longer generates it.'
        );

        for (const name of [...legacyDiff.missing, ...legacyDiff.unexpected]) {
            pushIssue(
                issues,
                'reports/system-state.json',
                'outdated_validator_results',
                `system-state.json does not match the current validator set (${name}).`
            );
        }
    }

    const report = createReportSchema({
        name: 'validate-generated-artifact-integrity',
        status: issues.length === 0 ? 'PASS' : 'FAIL',
        summary: {
            total: issues.length,
            passed: issues.length === 0 ? 1 : 0,
            failed: issues.length,
            warnings: 0,
        },
        issues,
        data: {
            managedTopLevelEntries,
            expectedValidatorNames,
            actualValidatorNames,
            actualClientReportNames,
            expectedClientReportNames,
        },
        generatedAt: new Date().toISOString(),
        sourceCommand,
    });

    logger.writeReport(reportPath, report);
    logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);

    if (issues.length > 0) {
        process.exitCode = 1;
    }
}

main();