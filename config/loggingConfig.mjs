export const LOGGING_MODE = {
  DEFAULT: 'summary',
  VERBOSE: 'verbose',
};

export const DEFAULT_LOGGING_MODE = LOGGING_MODE.DEFAULT;

function parseInlineModeArg(arg) {
  if (!arg.startsWith('--mode=')) {
    return null;
  }

  return arg.slice('--mode='.length).trim() || null;
}

export function normalizeLoggingMode(value) {
  if (value === LOGGING_MODE.VERBOSE) {
    return LOGGING_MODE.VERBOSE;
  }

  return LOGGING_MODE.DEFAULT;
}

export function resolveLoggingMode(argv = [], env = process.env) {
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--mode') {
      return normalizeLoggingMode(argv[index + 1]);
    }

    const inlineMode = parseInlineModeArg(arg);
    if (inlineMode) {
      return normalizeLoggingMode(inlineMode);
    }
  }

  return normalizeLoggingMode(env.SYSTEM_LOGGING_MODE);
}

export function stripLoggingModeArgs(argv = []) {
  const nextArgs = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--mode') {
      index += 1;
      continue;
    }

    if (arg.startsWith('--mode=')) {
      continue;
    }

    nextArgs.push(arg);
  }

  return nextArgs;
}

export function buildLoggingModeArg(mode) {
  return `--mode=${normalizeLoggingMode(mode)}`;
}