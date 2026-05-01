export function getIsSystemEnabled(): boolean {
  return process.env.SYSTEM_ENABLED === 'true';
}
