export {
  buildLoggingModeArg,
  DEFAULT_LOGGING_MODE,
  LOGGING_MODE,
  normalizeLoggingMode,
  resolveLoggingMode,
  stripLoggingModeArgs,
} from './loggingConfig.mjs';

export type LoggingMode = 'summary' | 'verbose';
