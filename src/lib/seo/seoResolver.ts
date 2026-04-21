import type { Metadata } from 'next';

import {
    getInventoryEntry,
    inventoryEntryToMetadata,
    type RouteInventoryEntry,
} from '@/lib/content-quality/inventory';
import { normalizePath, toAbsoluteUrl } from '@/lib/seo/config';

export type SEOResolverInput = {
    path: string;
    type?: string;
    slug?: string;
};

function assertResolverEntry(entry: RouteInventoryEntry, normalizedPath: string, input: SEOResolverInput) {
    if (entry.canonical !== normalizedPath) {
        throw new Error(
            `SEO resolver canonical mismatch for ${normalizedPath}. Resolved canonical ${entry.canonical} must match the route path.`
        );
    }

    const metadata = inventoryEntryToMetadata(entry);
    const canonical = metadata.alternates?.canonical;
    const absoluteCanonical = canonical instanceof URL ? canonical.toString() : canonical;

    if (!absoluteCanonical) {
        throw new Error(`SEO resolver emitted metadata without a canonical for ${normalizedPath}.`);
    }

    if (absoluteCanonical !== toAbsoluteUrl(normalizedPath)) {
        throw new Error(
            `SEO resolver emitted canonical ${String(canonical)} for ${normalizedPath}. The canonical must be absolute and match the route path.`
        );
    }

    const openGraphUrl = metadata.openGraph?.url;
    const absoluteOpenGraphUrl = openGraphUrl instanceof URL ? openGraphUrl.toString() : openGraphUrl;
    if (absoluteOpenGraphUrl !== toAbsoluteUrl(normalizedPath)) {
        throw new Error(
            `SEO resolver emitted openGraph.url ${String(openGraphUrl)} for ${normalizedPath}. The Open Graph URL must be absolute and match the canonical route.`
        );
    }

    if (!metadata.robots) {
        throw new Error(`SEO resolver emitted metadata without robots for ${normalizedPath}.`);
    }

    return metadata;
}

export async function resolveSEO(input: SEOResolverInput): Promise<Metadata> {
    const normalizedPath = normalizePath(input.path);
    const entry = await getInventoryEntry(normalizedPath);

    if (!entry) {
        const context = [input.type, input.slug].filter(Boolean).join(':');
        throw new Error(
            `Missing SEO inventory entry for ${normalizedPath}${context ? ` (${context})` : ''}.`
        );
    }

    return assertResolverEntry(entry, normalizedPath, input);
}