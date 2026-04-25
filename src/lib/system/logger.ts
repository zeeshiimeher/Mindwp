/* eslint-disable no-console */

declare global {
  var __mindwpGlobalErrorHandlersRegistered: boolean | undefined;
}

function formatError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack ?? null,
    };
  }

  return error;
}

export function logError(error: unknown) {
  console.error('[SYSTEM ERROR]', formatError(error));
}

export function registerGlobalErrorHandlers() {
  if (typeof process === 'undefined' || typeof process.on !== 'function') {
    return;
  }

  if (globalThis.__mindwpGlobalErrorHandlersRegistered) {
    return;
  }

  process.on('uncaughtException', logError);
  process.on('unhandledRejection', logError);
  globalThis.__mindwpGlobalErrorHandlersRegistered = true;
}

export {};
