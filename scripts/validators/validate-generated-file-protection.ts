import fs from 'node:fs';
import path from 'node:path';

import {
    createGeneratedJsonMetadata,
    getGeneratedCodeFiles,
    getGeneratedMarkdownFiles,
    getReportFiles,
} from '../core/system-manifest.mjs';
import { GENERATED_FILE_WARNING } from '../lib/generated-file-metadata.mjs';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'generated-file-protection-report.json');

function hasGeneratedJsonProtection(payload: unknown) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return false;
    }

    const candidate = payload as {
        _generated?: { source?: string; type?: string; hash?: string };
    };

    return typeof candidate._generated?.source === 'string'
        && typeof candidate._generated?.type === 'string'
        && typeof candidate._generated?.hash === 'string';
}

function hasDeterministicHash(payload: unknown) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return false;
    }

    const candidate = payload as {
        _generated?: { source?: string; type?: string; hash?: string };
    };
    if (!candidate._generated) {
        return false;
    }

    const expected = createGeneratedJsonMetadata({
        payload,
        source: candidate._generated.source,
        type: candidate._generated.type,
    });

    return candidate._generated.hash === expected.hash;
}

function main() {
    const generatedAt = new Date().toISOString();
    const issues: Array<{ file: string; message: string }> = [];
    const jsonFiles = [
        ...getReportFiles()
            .filter(file => file.endsWith('.json'))
            .map(file => path.join(root, 'reports', file)),
        path.join(root, 'reports', '.system-full', 'system-snapshot.json'),
        path.join(root, 'reports', 'system-snapshots', 'latest-summary.json'),
    ];

    for (const filePath of jsonFiles) {
        if (!fs.existsSync(filePath)) {
            continue;
        }

        const payload = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (!hasGeneratedJsonProtection(payload)) {
            issues.push({
                file: path.relative(root, filePath).replaceAll(path.sep, '/'),
                message: 'missing generated file metadata',
            });
            continue;
        }

        if (!hasDeterministicHash(payload)) {
            issues.push({
                file: path.relative(root, filePath).replaceAll(path.sep, '/'),
                message: 'generated file hash does not match file contents',
            });
        }
    }

    for (const relativePath of getGeneratedMarkdownFiles()) {
        const absolutePath = path.join(root, relativePath);
        if (!fs.existsSync(absolutePath)) {
            continue;
        }

        const content = fs.readFileSync(absolutePath, 'utf8');
        if (!content.startsWith(`<!--\n${GENERATED_FILE_WARNING}`)) {
            issues.push({ file: relativePath, message: 'missing generated markdown notice' });
        }
    }

    for (const relativePath of getGeneratedCodeFiles()) {
        const absolutePath = path.join(root, relativePath);
        if (!fs.existsSync(absolutePath)) {
            continue;
        }

        const content = fs.readFileSync(absolutePath, 'utf8');
        if (!content.startsWith(`// ${GENERATED_FILE_WARNING}`)) {
            issues.push({ file: relativePath, message: 'missing generated code notice' });
        }
    }

    const trackedFiles = jsonFiles
        .map(filePath => path.relative(root, filePath).replaceAll(path.sep, '/'))
        .concat(getGeneratedMarkdownFiles(), getGeneratedCodeFiles());
    const report = createReportSchema({
        name: 'validate-generated-file-protection',
        status: issues.length === 0 ? 'PASS' : 'FAIL',
        generatedAt,
        summary: {
            total: trackedFiles.length,
            passed: trackedFiles.length - issues.length,
            failed: issues.length,
            warnings: 0,
        },
        issues,
        data: {
            trackedFiles,
        },
        sourceCommand: 'node --import tsx/esm scripts/validators/validate-generated-file-protection.ts',
    });

    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

    if (issues.length > 0) {
        process.exitCode = 1;
    }
}

main();