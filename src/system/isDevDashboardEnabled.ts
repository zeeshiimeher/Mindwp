export function getIsDevDashboardEnabled(): boolean {
  return process.env.ENABLE_DEV_DASHBOARD === 'true';
}
