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
    enabled: process.env.ENABLE_MAIL_SERVICE !== 'false',
  },
  captcha: {
    enabled: process.env.ENABLE_CAPTCHA_SERVICE !== 'false',
    provider: 'turnstile',
  },
  contactForm: {
    honeypotField: 'website',
    rateLimit: {
      maxRequests: 5,
      windowMs: 15 * 60 * 1000,
    },
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
