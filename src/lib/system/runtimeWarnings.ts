import { env } from '@/env';

const isVitestRuntime = process.env.VITEST === 'true';

export function isStrictDevelopmentRuntime() {
  return env.NODE_ENV === 'development' && !isVitestRuntime;
}

export function systemWarning(message: string) {
  // eslint-disable-next-line no-console
  console.warn(`[system] warning -> ${message}`);
}

export function warnOrThrow(message: string) {
  if (isStrictDevelopmentRuntime()) {
    throw new Error(`[system] warning -> ${message}`);
  }

  systemWarning(message);
}