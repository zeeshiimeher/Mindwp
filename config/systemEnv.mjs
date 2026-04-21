import { buildSystemRawEnv, systemEnvSchema } from './env.schema.shared.mjs';

export function readSystemEnv(source = process.env) {
  return systemEnvSchema.parse(buildSystemRawEnv(source));
}

export const systemEnv = new Proxy(/** @type {ReturnType<typeof readSystemEnv>} */({}), {
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
