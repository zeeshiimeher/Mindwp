export function formatIsoDate(iso: string, locale: string = 'en-GB') {
  const dateValue = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(dateValue);
}

export function isRecentIsoDate(iso: string, days: number) {
  const epoch = Date.parse(`${iso}T00:00:00Z`);
  if (!Number.isFinite(epoch)) return false;
  const delta = Date.now() - epoch;
  return delta >= 0 && delta <= days * 24 * 60 * 60 * 1000;
}
