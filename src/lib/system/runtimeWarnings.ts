import { env } from '@/env';

function getRuntimeMode() {
  return process.env.NODE_ENV ?? env.NODE_ENV;
}

export function isDevelopmentRuntime() {
  return getRuntimeMode() === 'development';
}

export function isTestRuntime() {
  return process.env.VITEST === 'true' || getRuntimeMode() === 'test';
}

export function isStrictDevelopmentRuntime() {
  return isDevelopmentRuntime() && !isTestRuntime();
}

export function systemWarning(message: string, options?: { developmentOnly?: boolean }) {
  if (options?.developmentOnly && !isDevelopmentRuntime()) {
    return;
  }

  // eslint-disable-next-line no-console
  console.warn(`[system] warning -> ${message}`);
}

export function systemDevelopmentWarning(message: string) {
  systemWarning(message, { developmentOnly: true });
}

export function warnOrThrow(message: string) {
  if (isStrictDevelopmentRuntime()) {
    throw new Error(`[system] warning -> ${message}`);
  }

  systemWarning(message);
}