import { z } from 'zod';

const nodeEnv = z.enum(['development', 'production', 'test']);

function readOptionalValue(value) {
  if (value == null || value === '' || value === 'undefined') {
    return undefined;
  }

  return value;
}

function readFlag(value, fallback = 'false') {
  return readOptionalValue(value) ?? fallback;
}

const systemEnvSchema = z.object({
  NODE_ENV: nodeEnv.default('development'),
  SYSTEM_MODE: z.enum(['development', 'production']).default('development'),
  SYSTEM_EXECUTION_LOCK: z.string().default(''),
  SYSTEM_LOGGING_MODE: z.enum(['summary', 'verbose', 'debug']).default('summary'),
  SYSTEM_INCLUDE_OPTIONAL_AUDITS: z.enum(['0', '1']).default('0'),
  SYSTEM_ALLOW_REPORT_EXPORT: z.enum(['0', '1']).default('0'),
  MINDWP_LINK_SCAN_ROOT: z.string().default(''),
  PROFILE_GRAPH: z.enum(['true', 'false']).default('false'),
  VISUAL_AUDIT_PORT: z.string().default('3009'),
  VISUAL_AUDIT_HOST: z.string().default('127.0.0.1'),
  VISUAL_AUDIT_DIST_DIR: z.string().default('.next-audit'),
  VISUAL_AUDIT_BASE_URL: z.string().optional(),
  BASE_URL: z.string().default('http://127.0.0.1:3009'),
  COMPONENT_CAPTURE_BASE_URL: z.string().default('http://127.0.0.1:3001/components'),
  NEXT_DIST_DIR: z.string().default('.next'),
  UNSPLASH_ACCESS_KEY: z.string().optional().default(''),
  PEXELS_API_KEY: z.string().optional().default(''),
  PIXABAY_API_KEY: z.string().optional().default(''),
});

function buildRawSystemEnv(source = process.env) {
  return {
    ...source,
    NODE_ENV: readOptionalValue(source.NODE_ENV) ?? 'development',
    SYSTEM_MODE: readOptionalValue(source.SYSTEM_MODE) ?? 'development',
    SYSTEM_EXECUTION_LOCK: readOptionalValue(source.SYSTEM_EXECUTION_LOCK) ?? '',
    SYSTEM_LOGGING_MODE: readOptionalValue(source.SYSTEM_LOGGING_MODE) ?? 'summary',
    SYSTEM_INCLUDE_OPTIONAL_AUDITS: readOptionalValue(source.SYSTEM_INCLUDE_OPTIONAL_AUDITS) ?? '0',
    SYSTEM_ALLOW_REPORT_EXPORT: readOptionalValue(source.SYSTEM_ALLOW_REPORT_EXPORT) ?? '0',
    MINDWP_LINK_SCAN_ROOT: readOptionalValue(source.MINDWP_LINK_SCAN_ROOT) ?? '',
    PROFILE_GRAPH: readFlag(source.PROFILE_GRAPH),
    VISUAL_AUDIT_PORT: readOptionalValue(source.VISUAL_AUDIT_PORT) ?? '3009',
    VISUAL_AUDIT_HOST: readOptionalValue(source.VISUAL_AUDIT_HOST) ?? '127.0.0.1',
    VISUAL_AUDIT_DIST_DIR: readOptionalValue(source.VISUAL_AUDIT_DIST_DIR) ?? '.next-audit',
    VISUAL_AUDIT_BASE_URL: readOptionalValue(source.VISUAL_AUDIT_BASE_URL),
    BASE_URL: readOptionalValue(source.BASE_URL) ?? 'http://127.0.0.1:3009',
    COMPONENT_CAPTURE_BASE_URL:
      readOptionalValue(source.COMPONENT_CAPTURE_BASE_URL) ?? 'http://127.0.0.1:3001/components',
    NEXT_DIST_DIR: readOptionalValue(source.NEXT_DIST_DIR) ?? '.next',
    UNSPLASH_ACCESS_KEY: readOptionalValue(source.UNSPLASH_ACCESS_KEY) ?? '',
    PEXELS_API_KEY: readOptionalValue(source.PEXELS_API_KEY) ?? '',
    PIXABAY_API_KEY: readOptionalValue(source.PIXABAY_API_KEY) ?? '',
  };
}

export function readSystemEnv(source = process.env) {
  return systemEnvSchema.parse(buildRawSystemEnv(source));
}

export const systemEnv = new Proxy(/** @type {ReturnType<typeof readSystemEnv>} */ ({}), {
  get(_target, prop) {
    return readSystemEnv()[prop];
  },
  has(_target, prop) {
    return prop in readSystemEnv();
  },
  ownKeys() {
    return Reflect.ownKeys(readSystemEnv());
  },
  getOwnPropertyDescriptor(_target, prop) {
    return {
      configurable: true,
      enumerable: true,
      value: readSystemEnv()[prop],
      writable: false,
    };
  },
});

export function buildSystemProcessEnv(overrides = {}) {
  return {
    ...process.env,
    ...overrides,
  };
}

export async function withSystemEnvOverrides(overrides, callback) {
  const previousValues = new Map();

  for (const [key, value] of Object.entries(overrides)) {
    previousValues.set(key, process.env[key]);
    if (value == null) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  try {
    return await callback();
  } finally {
    for (const [key, value] of previousValues.entries()) {
      if (value == null) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}
