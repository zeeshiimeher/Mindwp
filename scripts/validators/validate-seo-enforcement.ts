#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { buildRouteInventory } from '@/lib/content-quality/inventory';
import { toAbsoluteUrl } from '@/lib/seo/config';
import { resolveSEO } from '@/lib/seo/seoResolver';

type ValidationFailure = {
    code: string;
    message: string;
};

type ResolvedMetadataLike = {
    alternates?: { canonical?: string | URL | { url?: string | URL | null } | null } | null;
    openGraph?: { url?: string | URL | null } | null;
    robots?: unknown;
};

type CanonicalRecord = {
    path: string;
    canonical: string;
};

const workspaceRoot = process.cwd();
const appRoot = path.join(workspaceRoot, 'src', 'app');

function toWorkspacePath(filePath: string) {
    return path.relative(workspaceRoot, filePath).replace(/\\/g, '/');
}

function getSlugFromPath(routePath: string) {
    return routePath.split('/').filter(Boolean).at(-1) ?? 'home';
}

function collectRouteModuleFiles(currentPath: string, files: string[] = []): string[] {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
        const entryPath = path.join(currentPath, entry.name);
        if (entry.isDirectory()) {
            collectRouteModuleFiles(entryPath, files);
            continue;
        }

        if (entry.name === 'page.tsx' || entry.name === 'layout.tsx') {
            files.push(entryPath);
        }
    }

    return files;
}

function validateRouteSourceText(filePath: string, sourceText: string): ValidationFailure[] {
    const failures: ValidationFailure[] = [];
    const modulePath = toWorkspacePath(filePath);

    if (/export\s+const\s+metadata\b/.test(sourceText)) {
        failures.push({
            code: 'manual-metadata-export',
            message: `${modulePath} exports manual metadata instead of the shared SEO resolver.`,
        });
    }

    if (/openGraph\s*:/.test(sourceText)) {
        failures.push({
            code: 'manual-open-graph',
            message: `${modulePath} defines Open Graph metadata directly instead of the shared SEO resolver.`,
        });
    }

    if (/generateMetadata\s*\(/.test(sourceText)) {
        if (!/from\s+['"]@\/lib\/seo\/seoResolver['"]/.test(sourceText)) {
            failures.push({
                code: 'missing-resolver-import',
                message: `${modulePath} defines generateMetadata without importing resolveSEO from the shared resolver.`,
            });
        }

        if (!/return\s+resolveSEO\s*\(/.test(sourceText)) {
            failures.push({
                code: 'metadata-not-from-resolver',
                message: `${modulePath} defines generateMetadata without returning resolveSEO(...).`,
            });
        }
    }

    return failures;
}

function normalizeCanonical(value: string | URL | { url?: string | URL | null } | null | undefined) {
    if (!value) {
        return null;
    }

    if (value instanceof URL) {
        return value.toString();
    }

    if (typeof value === 'object') {
        const descriptorUrl = value.url;
        if (!descriptorUrl) {
            return null;
        }

        return descriptorUrl instanceof URL ? descriptorUrl.toString() : String(descriptorUrl);
    }

    return String(value);
}

function validateResolvedMetadata(routePath: string, metadata: ResolvedMetadataLike): ValidationFailure[] {
    const failures: ValidationFailure[] = [];
    const canonical = normalizeCanonical(metadata.alternates?.canonical);
    const expectedCanonical = toAbsoluteUrl(routePath);

    if (!canonical) {
        failures.push({
            code: 'missing-canonical',
            message: `${routePath} resolved metadata without a canonical URL.`,
        });
    } else {
        if (!/^https?:\/\//.test(canonical)) {
            failures.push({
                code: 'canonical-not-absolute',
                message: `${routePath} resolved a non-absolute canonical URL: ${canonical}.`,
            });
        }

        if (canonical !== expectedCanonical) {
            failures.push({
                code: 'canonical-mismatch',
                message: `${routePath} resolved canonical ${canonical} but expected ${expectedCanonical}.`,
            });
        }
    }

    const openGraphUrl = normalizeCanonical(metadata.openGraph?.url);
    if (!openGraphUrl) {
        failures.push({
            code: 'missing-open-graph-url',
            message: `${routePath} resolved metadata without openGraph.url.`,
        });
    } else if (openGraphUrl !== expectedCanonical) {
        failures.push({
            code: 'open-graph-mismatch',
            message: `${routePath} resolved openGraph.url ${openGraphUrl} but expected ${expectedCanonical}.`,
        });
    }

    if (!metadata.robots) {
        failures.push({
            code: 'missing-robots',
            message: `${routePath} resolved metadata without robots settings.`,
        });
    }

    return failures;
}

function validateCanonicalDuplicates(records: CanonicalRecord[]): ValidationFailure[] {
    const failures: ValidationFailure[] = [];
    const canonicalToPaths = new Map<string, string[]>();

    for (const record of records) {
        const paths = canonicalToPaths.get(record.canonical) ?? [];
        paths.push(record.path);
        canonicalToPaths.set(record.canonical, paths);
    }

    for (const [canonical, paths] of canonicalToPaths) {
        if (paths.length < 2) {
            continue;
        }

        failures.push({
            code: 'duplicate-canonical',
            message: `Canonical ${canonical} is shared by multiple routes: ${paths.join(', ')}.`,
        });
    }

    return failures;
}

async function main() {
    const failures: ValidationFailure[] = [];
    const routeFiles = collectRouteModuleFiles(appRoot);

    for (const filePath of routeFiles) {
        failures.push(...validateRouteSourceText(filePath, fs.readFileSync(filePath, 'utf8')));
    }

    const inventory = await buildRouteInventory();
    const canonicalRecords: CanonicalRecord[] = [];

    for (const entry of inventory) {
        const metadata = await resolveSEO({
            path: entry.path,
            type: entry.kind,
            slug: getSlugFromPath(entry.path),
        });
        failures.push(...validateResolvedMetadata(entry.path, metadata));

        const canonical = normalizeCanonical(metadata.alternates?.canonical);
        if (canonical) {
            canonicalRecords.push({ path: entry.path, canonical });
        }
    }

    failures.push(...validateCanonicalDuplicates(canonicalRecords));

    const manualSimulation = validateRouteSourceText(
        path.join(appRoot, 'simulated-manual-page.tsx'),
        "export const metadata = { title: 'Manual SEO' };"
    );
    if (!manualSimulation.some(failure => failure.code === 'manual-metadata-export')) {
        failures.push({
            code: 'simulation-manual-metadata-missed',
            message: 'Manual metadata simulation did not fail as expected.',
        });
    }

    const bypassSimulation = validateRouteSourceText(
        path.join(appRoot, 'simulated-bypass-page.tsx'),
        "export async function generateMetadata() { return {}; }"
    );
    if (!bypassSimulation.some(failure => failure.code === 'metadata-not-from-resolver')) {
        failures.push({
            code: 'simulation-resolver-bypass-missed',
            message: 'Resolver bypass simulation did not fail as expected.',
        });
    }

    const missingCanonicalSimulation = validateResolvedMetadata('/simulated-missing-canonical', {
        alternates: {},
        openGraph: { url: toAbsoluteUrl('/simulated-missing-canonical') },
        robots: { index: true, follow: true },
    });
    if (!missingCanonicalSimulation.some(failure => failure.code === 'missing-canonical')) {
        failures.push({
            code: 'simulation-missing-canonical-missed',
            message: 'Missing canonical simulation did not fail as expected.',
        });
    }

    const duplicateCanonicalSimulation = validateCanonicalDuplicates([
        { path: '/simulated-a', canonical: toAbsoluteUrl('/shared') },
        { path: '/simulated-b', canonical: toAbsoluteUrl('/shared') },
    ]);
    if (!duplicateCanonicalSimulation.some(failure => failure.code === 'duplicate-canonical')) {
        failures.push({
            code: 'simulation-duplicate-canonical-missed',
            message: 'Duplicate canonical simulation did not fail as expected.',
        });
    }

    const validRouteSimulation = validateResolvedMetadata(
        '/contact',
        await resolveSEO({ path: '/contact', type: 'static', slug: 'contact' })
    );
    if (validRouteSimulation.length > 0) {
        failures.push({
            code: 'simulation-valid-route-failed',
            message: `Valid route simulation failed unexpectedly: ${validRouteSimulation.map(failure => failure.code).join(', ')}.`,
        });
    }

    if (failures.length > 0) {
        process.stderr.write(
            `${failures.map(failure => `- [${failure.code}] ${failure.message}`).join('\n')}\n`
        );
        process.exit(1);
    }

    process.stdout.write('SEO enforcement validation passed.\n');
}

await main();