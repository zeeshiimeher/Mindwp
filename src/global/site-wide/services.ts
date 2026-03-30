/**
 * Global service toggles (infra control only).
 *
 * Rules:
 * - Defaults must keep current production behavior unchanged (everything ON).
 * - Centralize all enable/disable switches here.
 * - No secrets in this file.
 */

export const SERVICES = {
  mail: {
    enabled: true,
  },
  captcha: {
    enabled: true,
  },
  reporting: {
    enabled: true,
  },
  marketingScripts: {
    enabled: true,
  },
  debug: {
    logEmails: false,
    bypassCaptchaInDev: false,
  },
} as const;

