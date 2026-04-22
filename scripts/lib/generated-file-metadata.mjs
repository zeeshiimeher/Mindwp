import { createHash } from 'node:crypto';

export const GENERATED_FILE_WARNING = 'AUTO-GENERATED FILE - DO NOT EDIT';

function sortValue(value) {
    if (Array.isArray(value)) {
        return value.map(sortValue);
    }

    if (!value || typeof value !== 'object') {
        return value;
    }

    return Object.keys(value)
        .sort((left, right) => left.localeCompare(right))
        .reduce((output, key) => {
            output[key] = sortValue(value[key]);
            return output;
        }, {});
}

export function stableSerialize(value) {
    return JSON.stringify(sortValue(value), null, 2);
}

function normalizeSource(source) {
    if (Array.isArray(source)) {
        return source.filter(Boolean).sort((left, right) => left.localeCompare(right)).join(', ');
    }

    return typeof source === 'string' && source.trim().length > 0
        ? source.trim()
        : 'manifest-owned system inputs';
}

function normalizeType(type) {
    return typeof type === 'string' && type.trim().length > 0 ? type.trim() : 'generated-artifact';
}

function stripExistingMetadata(payload) {
    if (Array.isArray(payload)) {
        return payload.map(stripExistingMetadata);
    }

    if (!payload || typeof payload !== 'object') {
        return payload;
    }

    return Object.entries(payload).reduce((output, [key, value]) => {
        if (
            key === '_generated' ||
            key === 'generatedAt' ||
            key === 'generatedFile' ||
            key === 'lastGenerated'
        ) {
            return output;
        }

        output[key] = stripExistingMetadata(value);
        return output;
    }, {});
}

export function createGeneratedJsonMetadata({ payload, source, type }) {
    const normalizedPayload = stripExistingMetadata(payload);
    const hash = createHash('sha256').update(stableSerialize(normalizedPayload)).digest('hex');

    return {
        source: normalizeSource(source),
        type: normalizeType(type),
        hash,
    };
}

export function attachGeneratedJsonMetadata(payload, options) {
    return {
        ...stripExistingMetadata(payload),
        _generated: createGeneratedJsonMetadata({ payload, ...options }),
    };
}

export function buildGeneratedMarkdownNotice(_metadata) {
    return ['<!--', GENERATED_FILE_WARNING, '-->', ''].join('\n');
}

export function buildGeneratedCodeNotice(_metadata) {
    return [`// ${GENERATED_FILE_WARNING}`, ''].join('\n');
}