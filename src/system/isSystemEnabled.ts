export const isSystemEnabled = process.env.SYSTEM_ENABLED === 'true';

export function getIsSystemEnabled(): boolean {
  return process.env.SYSTEM_ENABLED === 'true';
}
