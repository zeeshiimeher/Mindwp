import {
  assertIntegrationRequirements,
  buildRuntimeRawEnv,
  buildSystemRawEnv,
  resolveConfiguredSiteUrl,
  sharedEnvSchema,
  systemEnvSchema,
} from './env.schema.shared.mjs';

export const envSchema = sharedEnvSchema;
export { resolveConfiguredSiteUrl, systemEnvSchema };

export function readEnv(source: NodeJS.ProcessEnv = process.env) {
  return envSchema.parse(buildRuntimeRawEnv(source));
}

export function validateEnv(source: NodeJS.ProcessEnv = process.env) {
  return assertIntegrationRequirements(readEnv(source), 'Runtime environment');
}

export function readValidatedSystemEnv(source: NodeJS.ProcessEnv = process.env) {
  return systemEnvSchema.parse(buildSystemRawEnv(source));
}

export function validateSystemEnv(source: NodeJS.ProcessEnv = process.env) {
  return assertIntegrationRequirements(readValidatedSystemEnv(source), 'System environment');
}

export type RuntimeEnv = ReturnType<typeof readEnv>;
export type ValidatedRuntimeEnv = ReturnType<typeof validateEnv>;
export type ValidatedSystemEnv = ReturnType<typeof validateSystemEnv>;
