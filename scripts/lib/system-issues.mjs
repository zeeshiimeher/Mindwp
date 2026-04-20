const VALID_CATEGORIES = new Set(['seo', 'content', 'authority']);
const VALID_SEVERITIES = new Set(['critical', 'warning']);

function sanitizeSegment(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createIssueId(parts) {
  const id = parts
    .map(part => sanitizeSegment(part))
    .filter(Boolean)
    .join('__');

  return id || 'issue';
}

export function createSystemIssue({
  source,
  code,
  idParts = null,
  severity,
  category,
  entityType,
  slug,
  title,
  description,
  impact,
  fix,
  autoFixable = false,
  details = null,
  path = null,
  count = 1,
}) {
  const normalizedSeverity = VALID_SEVERITIES.has(severity) ? severity : 'warning';
  const normalizedCategory = VALID_CATEGORIES.has(category) ? category : 'content';
  const normalizedSlug = String(slug ?? '').trim() || 'unknown';
  const normalizedEntityType = String(entityType ?? '').trim() || 'unknown';

  return {
    id: createIssueId(
      idParts ?? [source, code, normalizedCategory, normalizedEntityType, normalizedSlug]
    ),
    severity: normalizedSeverity,
    category: normalizedCategory,
    entityType: normalizedEntityType,
    slug: normalizedSlug,
    title: String(title ?? '').trim(),
    description: String(description ?? '').trim(),
    impact: String(impact ?? '').trim(),
    fix: String(fix ?? '').trim(),
    autoFixable: Boolean(autoFixable),
    source: String(source ?? '').trim(),
    code: String(code ?? '').trim(),
    details,
    path,
    count,
  };
}

const severityRank = {
  critical: 0,
  warning: 1,
};

export function sortSystemIssues(issues) {
  return [...issues].sort((left, right) => {
    const severityDelta =
      (severityRank[left.severity] ?? Number.MAX_SAFE_INTEGER) -
      (severityRank[right.severity] ?? Number.MAX_SAFE_INTEGER);

    if (severityDelta !== 0) {
      return severityDelta;
    }

    const categoryDelta = left.category.localeCompare(right.category);
    if (categoryDelta !== 0) {
      return categoryDelta;
    }

    const titleDelta = left.title.localeCompare(right.title);
    if (titleDelta !== 0) {
      return titleDelta;
    }

    return left.slug.localeCompare(right.slug);
  });
}

export function groupSystemIssues(issues) {
  const grouped = {
    seo: [],
    content: [],
    authority: [],
  };

  for (const issue of sortSystemIssues(issues)) {
    if (!VALID_CATEGORIES.has(issue.category)) {
      continue;
    }

    grouped[issue.category].push(issue);
  }

  return grouped;
}

export function flattenSystemIssueGroups(groups) {
  return sortSystemIssues([
    ...(groups?.seo ?? []),
    ...(groups?.content ?? []),
    ...(groups?.authority ?? []),
  ]);
}
