#!/usr/bin/env node

import { buildRouteInventory, buildSitemapRoutePaths } from '@/lib/content-quality/inventory';
import {
    getApprovedPublicTopics,
    isPublicTopic,
    resolveIndexingPolicy,
} from '../../config/indexingPolicy';

type ValidationFailure = {
    code: string;
    message: string;
};

function getSlugFromPath(path: string): string {
    return path.split('/').filter(Boolean).at(-1) ?? '';
}

async function main() {
    const failures: ValidationFailure[] = [];
    const inventory = await buildRouteInventory();
    const sitemapPaths = new Set(await buildSitemapRoutePaths());
    const approvedTopics = new Set(getApprovedPublicTopics());

    for (const entry of inventory) {
        if (entry.kind === 'blog-topic') {
            if (entry.indexable) {
                failures.push({
                    code: 'blog-topic-indexable',
                    message: `${entry.path} must always be noindex, but it is indexable.`,
                });
            }

            if (entry.robots.follow !== true) {
                failures.push({
                    code: 'blog-topic-follow-disabled',
                    message: `${entry.path} must remain follow=true as internal taxonomy.`,
                });
            }

            if (sitemapPaths.has(entry.path)) {
                failures.push({
                    code: 'blog-topic-in-sitemap',
                    message: `${entry.path} must never appear in sitemap output.`,
                });
            }
        }

        if (entry.kind === 'topic-hub') {
            const slug = getSlugFromPath(entry.path);
            const approved = approvedTopics.has(slug);

            if (entry.indexable && !approved) {
                failures.push({
                    code: 'unapproved-topic-indexable',
                    message: `${entry.path} is indexable without topic approval.`,
                });
            }

            if (sitemapPaths.has(entry.path) && !approved) {
                failures.push({
                    code: 'unapproved-topic-in-sitemap',
                    message: `${entry.path} appears in sitemap without topic approval.`,
                });
            }
        }
    }

    if (isPublicTopic('test-page')) {
        failures.push({
            code: 'new-topic-approved',
            message: 'Simulated new topic test-page is unexpectedly approved for public indexing.',
        });
    }

    const simulatedNewTopicRoute = resolveIndexingPolicy('topic-hub', '/topics/test-page');
    if (simulatedNewTopicRoute.index) {
        failures.push({
            code: 'new-topic-indexable',
            message: 'Simulated new topic route /topics/test-page is indexable.',
        });
    }

    const simulatedBlogTopicRoute = resolveIndexingPolicy('blog-topic', '/blog/topic/test-page');
    if (simulatedBlogTopicRoute.index || simulatedBlogTopicRoute.follow !== true) {
        failures.push({
            code: 'blog-topic-policy-invalid',
            message: 'Simulated blog-topic route does not resolve to noindex, follow=true.',
        });
    }

    if (failures.length > 0) {
        process.stderr.write(`${failures.map(failure => `- [${failure.code}] ${failure.message}`).join('\n')}\n`);
        process.exit(1);
    }

    process.stdout.write('Topic indexability validation passed.\n');
}

await main();