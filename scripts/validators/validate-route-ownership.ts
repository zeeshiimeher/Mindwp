#!/usr/bin/env node

import { buildRouteInventory } from '@/lib/content-quality/inventory';
import { assertRouteOwnershipEntries } from '../../config/routeOwnership';

type ValidationFailure = {
    code: string;
    message: string;
};

async function main() {
    const failures: ValidationFailure[] = [];

    try {
        const inventory = await buildRouteInventory();
        assertRouteOwnershipEntries(inventory.map(entry => ({ path: entry.path, kind: entry.kind })));
    } catch (error) {
        failures.push({
            code: 'route-ownership-invalid',
            message: error instanceof Error ? error.message : String(error),
        });
    }

    try {
        assertRouteOwnershipEntries([
            { path: '/services/ai-lead-handling', kind: 'service' },
            { path: '/services/ai-lead-handling', kind: 'service' },
        ]);
        failures.push({
            code: 'duplicate-path-simulation-missed',
            message: 'Duplicate route ownership simulation did not fail as expected.',
        });
    } catch {
        // expected
    }

    if (failures.length > 0) {
        process.stderr.write(`${failures.map(failure => `- [${failure.code}] ${failure.message}`).join('\n')}\n`);
        process.exit(1);
    }

    process.stdout.write('Route ownership validation passed.\n');
}

await main();