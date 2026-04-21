import { readEnv as parseEnv, validateEnv as validateRuntimeEnv } from '../config/env.schema.ts';
import { ensureSetupEnvNodeOptions } from '../scripts/setup-env.mjs';

if (typeof window === 'undefined') {
  validateRuntimeEnv();
}

export function readEnv(source: NodeJS.ProcessEnv = process.env) {
  return parseEnv(source);
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
  const nextEnv = {
    ...process.env,
    ...overrides,
  };

  return {
    ...nextEnv,
    NODE_OPTIONS: ensureSetupEnvNodeOptions(nextEnv.NODE_OPTIONS),
  };
}
