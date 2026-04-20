import { z } from 'zod';

const nodeEnv = z.enum(['development', 'production', 'test']);
const booleanFlag = z.enum(['true', 'false']).optional().default('false');
const debugFlag = z.enum(['0', '1']).optional().default('0');

function readOptionalValue(value: string | undefined) {
  if (value == null || value === '' || value === 'undefined') {
    return undefined;
  }

  return value;
}

function readFlag(value: string | undefined, fallback: 'true' | 'false' = 'false') {
  return readOptionalValue(value) ?? fallback;
}

function readDebugFlag(value: string | undefined) {
  const nextValue = readOptionalValue(value);
  return nextValue === '1' ? '1' : '0';
}

const optionalEmail = z.preprocess(
  value => readOptionalValue(typeof value === 'string' ? value.trim() : undefined),
  z.string().email().optional()
);

const envSchema = z.object({
  NODE_ENV: nodeEnv.default('development'),
  CI: z.string().optional(),
  ENABLE_DEV_DASHBOARD: booleanFlag,
  COMPONENT_LIBRARY_ENABLED: booleanFlag,
  PROFILE_GRAPH: booleanFlag,
  NEXT_PUBLIC_DEBUG_INLINE_LINKS: debugFlag,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional().default(''),
  NEXT_PUBLIC_SITE_URL: z.string().optional(),
  NEXT_PUBLIC_SITE_ORIGIN: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL: optionalEmail,
  CONTACT_FROM_EMAIL: optionalEmail,
  TURNSTILE_SECRET_KEY: z.string().optional(),
  UNSPLASH_ACCESS_KEY: z.string().optional().default(''),
  PEXELS_API_KEY: z.string().optional().default(''),
  PIXABAY_API_KEY: z.string().optional().default(''),
  PLAYWRIGHT_PORT: z.string().optional().default('3001'),
  SHELL: z.string().optional().default('/bin/zsh'),
  MINDWP_LINK_SCAN_ROOT: z.string().optional().default(''),
});

function buildRawEnv(source: NodeJS.ProcessEnv = process.env) {
  return {
    ...source,
    NODE_ENV: readOptionalValue(source.NODE_ENV) ?? 'development',
    ENABLE_DEV_DASHBOARD: readFlag(source.ENABLE_DEV_DASHBOARD),
    COMPONENT_LIBRARY_ENABLED: readFlag(source.COMPONENT_LIBRARY_ENABLED),
    PROFILE_GRAPH: readFlag(source.PROFILE_GRAPH),
    NEXT_PUBLIC_DEBUG_INLINE_LINKS: readDebugFlag(source.NEXT_PUBLIC_DEBUG_INLINE_LINKS),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: readOptionalValue(source.NEXT_PUBLIC_TURNSTILE_SITE_KEY) ?? '',
    NEXT_PUBLIC_SITE_URL: readOptionalValue(source.NEXT_PUBLIC_SITE_URL),
    NEXT_PUBLIC_SITE_ORIGIN: readOptionalValue(source.NEXT_PUBLIC_SITE_ORIGIN),
    NEXT_PUBLIC_APP_URL: readOptionalValue(source.NEXT_PUBLIC_APP_URL),
    RESEND_API_KEY: readOptionalValue(source.RESEND_API_KEY),
    CONTACT_EMAIL: readOptionalValue(source.CONTACT_EMAIL),
    CONTACT_FROM_EMAIL: readOptionalValue(source.CONTACT_FROM_EMAIL),
    TURNSTILE_SECRET_KEY: readOptionalValue(source.TURNSTILE_SECRET_KEY),
    UNSPLASH_ACCESS_KEY: readOptionalValue(source.UNSPLASH_ACCESS_KEY) ?? '',
    PEXELS_API_KEY: readOptionalValue(source.PEXELS_API_KEY) ?? '',
    PIXABAY_API_KEY: readOptionalValue(source.PIXABAY_API_KEY) ?? '',
    PLAYWRIGHT_PORT: readOptionalValue(source.PLAYWRIGHT_PORT) ?? '3001',
    SHELL: readOptionalValue(source.SHELL) ?? '/bin/zsh',
    MINDWP_LINK_SCAN_ROOT: readOptionalValue(source.MINDWP_LINK_SCAN_ROOT) ?? '',
  };
}

export function readEnv(source: NodeJS.ProcessEnv = process.env) {
  return envSchema.parse(buildRawEnv(source));
}

export const env = new Proxy({} as ReturnType<typeof readEnv>, {
  get(_target, prop: keyof ReturnType<typeof readEnv>) {
    return readEnv()[prop];
  },
  has(_target, prop: keyof ReturnType<typeof readEnv>) {
    return prop in readEnv();
  },
  ownKeys() {
    return Reflect.ownKeys(readEnv());
  },
  getOwnPropertyDescriptor(_target, prop: keyof ReturnType<typeof readEnv>) {
    return {
      configurable: true,
      enumerable: true,
      value: readEnv()[prop],
      writable: false,
    };
  },
});

export function buildProcessEnv(overrides: Partial<NodeJS.ProcessEnv> = {}): NodeJS.ProcessEnv {
  return {
    ...process.env,
    ...overrides,
  };
}
