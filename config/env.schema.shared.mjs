import { z } from 'zod';

export const nodeEnv = z.enum(['development', 'production', 'test']);
export const booleanFlag = z.enum(['true', 'false']);

export function readOptionalValue(value) {
  if (value == null || value === '' || value === 'undefined') {
    return undefined;
  }

  return value;
}

export function readFlag(value, fallback = 'false') {
  return readOptionalValue(value) ?? fallback;
}

const optionalString = z.preprocess(
  value => readOptionalValue(typeof value === 'string' ? value.trim() : undefined),
  z.string().min(1).optional()
);

const optionalEmail = z.preprocess(
  value => readOptionalValue(typeof value === 'string' ? value.trim() : undefined),
  z.string().email().optional()
);

const optionalUrl = z.preprocess(
  value => readOptionalValue(typeof value === 'string' ? value.trim() : undefined),
  z.string().url().optional()
);

const optionalAnalyticsId = z.preprocess(
  value => readOptionalValue(typeof value === 'string' ? value.trim() : undefined),
  z
    .string()
    .regex(/^(G|AW)-[A-Z0-9-]+$/i, 'Analytics id must look like G-XXXXXXXXXX or AW-XXXXXXXXX')
    .optional()
);

export const sharedEnvSchema = z.object({
  NODE_ENV: nodeEnv.default('development'),
  CI: optionalString,
  SYSTEM_ENABLED: booleanFlag.default('false'),
  PROFILE_GRAPH: booleanFlag.default('false'),
  ENABLE_MAIL_SERVICE: booleanFlag.default('true'),
  ENABLE_CAPTCHA_SERVICE: booleanFlag.default('true'),
  NEXT_PUBLIC_SITE_URL: optionalUrl,
  NEXT_PUBLIC_SITE_ORIGIN: optionalUrl,
  NEXT_PUBLIC_APP_URL: optionalUrl,
  NEXT_PUBLIC_ANALYTICS_ID: optionalAnalyticsId,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: optionalString,
  RESEND_API_KEY: optionalString,
  CONTACT_EMAIL: optionalEmail,
  CONTACT_FROM_EMAIL: optionalEmail,
  TURNSTILE_SECRET_KEY: optionalString,
  UNSPLASH_ACCESS_KEY: optionalString,
  PEXELS_API_KEY: optionalString,
  PIXABAY_API_KEY: optionalString,
  PLAYWRIGHT_PORT: optionalString,
  SHELL: optionalString,
  MINDWP_LINK_SCAN_ROOT: optionalString,
});

export const systemEnvSchema = sharedEnvSchema.extend({
  SYSTEM_MODE: z.enum(['development', 'production']).default('development'),
  SYSTEM_EXECUTION_LOCK: z.string().default(''),
  SYSTEM_LOGGING_MODE: z.enum(['summary', 'verbose', 'debug']).default('summary'),
  SYSTEM_INCLUDE_OPTIONAL_AUDITS: z.enum(['0', '1']).default('0'),
  SYSTEM_ALLOW_REPORT_EXPORT: z.enum(['0', '1']).default('0'),
  SYSTEM_ENTRY_COMMAND: optionalString,
  VISUAL_AUDIT_PORT: z.string().default('3009'),
  VISUAL_AUDIT_HOST: z.string().default('127.0.0.1'),
  VISUAL_AUDIT_DIST_DIR: z.string().default('.next-audit'),
  VISUAL_AUDIT_BASE_URL: optionalUrl,
  BASE_URL: z.string().url().default('http://127.0.0.1:3009'),
  NEXT_DIST_DIR: z.string().default('.next'),
});

export function buildRuntimeRawEnv(source = process.env) {
  return {
    ...source,
    NODE_ENV: readOptionalValue(source.NODE_ENV) ?? 'development',
    CI: readOptionalValue(source.CI),
    SYSTEM_ENABLED: readFlag(source.SYSTEM_ENABLED),
    PROFILE_GRAPH: readFlag(source.PROFILE_GRAPH),
    ENABLE_MAIL_SERVICE: readFlag(source.ENABLE_MAIL_SERVICE, 'true'),
    ENABLE_CAPTCHA_SERVICE: readFlag(source.ENABLE_CAPTCHA_SERVICE, 'true'),
    NEXT_PUBLIC_SITE_URL: readOptionalValue(source.NEXT_PUBLIC_SITE_URL),
    NEXT_PUBLIC_SITE_ORIGIN: readOptionalValue(source.NEXT_PUBLIC_SITE_ORIGIN),
    NEXT_PUBLIC_APP_URL: readOptionalValue(source.NEXT_PUBLIC_APP_URL),
    NEXT_PUBLIC_ANALYTICS_ID: readOptionalValue(source.NEXT_PUBLIC_ANALYTICS_ID),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: readOptionalValue(source.NEXT_PUBLIC_TURNSTILE_SITE_KEY),
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

export function buildSystemRawEnv(source = process.env) {
  return {
    ...buildRuntimeRawEnv(source),
    SYSTEM_MODE: readOptionalValue(source.SYSTEM_MODE) ?? 'development',
    SYSTEM_EXECUTION_LOCK: readOptionalValue(source.SYSTEM_EXECUTION_LOCK) ?? '',
    SYSTEM_LOGGING_MODE: readOptionalValue(source.SYSTEM_LOGGING_MODE) ?? 'summary',
    SYSTEM_INCLUDE_OPTIONAL_AUDITS: readOptionalValue(source.SYSTEM_INCLUDE_OPTIONAL_AUDITS) ?? '0',
    SYSTEM_ALLOW_REPORT_EXPORT: readOptionalValue(source.SYSTEM_ALLOW_REPORT_EXPORT) ?? '0',
    SYSTEM_ENTRY_COMMAND: readOptionalValue(source.SYSTEM_ENTRY_COMMAND),
    VISUAL_AUDIT_PORT: readOptionalValue(source.VISUAL_AUDIT_PORT) ?? '3009',
    VISUAL_AUDIT_HOST: readOptionalValue(source.VISUAL_AUDIT_HOST) ?? '127.0.0.1',
    VISUAL_AUDIT_DIST_DIR: readOptionalValue(source.VISUAL_AUDIT_DIST_DIR) ?? '.next-audit',
    VISUAL_AUDIT_BASE_URL: readOptionalValue(source.VISUAL_AUDIT_BASE_URL),
    BASE_URL: readOptionalValue(source.BASE_URL) ?? 'http://127.0.0.1:3009',
    NEXT_DIST_DIR: readOptionalValue(source.NEXT_DIST_DIR) ?? '.next',
  };
}

export function resolveConfiguredSiteUrl(envSource) {
  return (
    envSource.NEXT_PUBLIC_SITE_URL ??
    envSource.NEXT_PUBLIC_SITE_ORIGIN ??
    envSource.NEXT_PUBLIC_APP_URL
  );
}

export function validateIntegrationRequirements(envSource) {
  const issues = [];

  if (!resolveConfiguredSiteUrl(envSource)) {
    issues.push(
      'Set NEXT_PUBLIC_SITE_URL (preferred), NEXT_PUBLIC_SITE_ORIGIN, or NEXT_PUBLIC_APP_URL to a valid absolute URL.'
    );
  }

  if (envSource.ENABLE_MAIL_SERVICE === 'true') {
    if (!envSource.RESEND_API_KEY) {
      issues.push('ENABLE_MAIL_SERVICE=true requires RESEND_API_KEY.');
    }
    if (!envSource.CONTACT_EMAIL) {
      issues.push('ENABLE_MAIL_SERVICE=true requires CONTACT_EMAIL.');
    }
    if (!envSource.CONTACT_FROM_EMAIL) {
      issues.push('ENABLE_MAIL_SERVICE=true requires CONTACT_FROM_EMAIL.');
    }
  }

  if (envSource.ENABLE_CAPTCHA_SERVICE === 'true') {
    if (!envSource.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      issues.push('ENABLE_CAPTCHA_SERVICE=true requires NEXT_PUBLIC_TURNSTILE_SITE_KEY.');
    }
    if (!envSource.TURNSTILE_SECRET_KEY) {
      issues.push('ENABLE_CAPTCHA_SERVICE=true requires TURNSTILE_SECRET_KEY.');
    }
  }

  return issues;
}

export function formatIntegrationRequirementsError(issues, scope = 'Environment') {
  return `${scope} validation failed:\n${issues.map(issue => `- ${issue}`).join('\n')}`;
}

export function assertIntegrationRequirements(envSource, scope = 'Environment') {
  const issues = validateIntegrationRequirements(envSource);
  if (issues.length === 0) {
    return envSource;
  }

  throw new Error(formatIntegrationRequirementsError(issues, scope));
}
