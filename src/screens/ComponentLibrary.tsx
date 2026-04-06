'use client';

import React, { useMemo, useState } from 'react';

import AppErrorBoundary from '@/components/ErrorBoundary';
import {
  generateComponentVariations,
  generateMockData,
  getAllComponents,
  getComponentRegistry,
  groupComponentsByCategory,
} from '@/lib/devtools/componentScanner';
import { componentDocs } from '@/utils/componentDocs.generated';

type ComponentDoc = {
  filePath?: string;
  representativeUsageFilePath?: string;
  representativePageUrl?: string;
  summary?: string;
  props?: Array<{ name: string; type: string; optional: boolean; description?: string }>;
};

const CATEGORY_ORDER = [
  'components',
  'core-sections',
  'feature-sections',
  'service-sections',
  'industry-sections',
  'resource-sections',
  'blog-sections',
  'case-study-sections',
] as const;

const PREVIEW_VARIATION_EXCLUDED_PROPS = new Set([
  'headingLevel',
  'headingTag',
  'alignment',
  'align',
  'wrapper',
  'includeContainer',
]);

/**
 * ComponentLibrary - Internal component preview page
 *
 * Renders scanner-discovered reusable components and section wrappers
 * with generated prop variations for visual QA.
 */

const isFullWidthPreview = (componentName: string, category: string) => {
  if (category !== 'components') return true;
  if (componentName.endsWith('Section')) return true;
  if (componentName.endsWith('Hero')) return true;
  if (componentName.endsWith('Header')) return true;
  return ['CTASection', 'FAQSection', 'SimpleHero', 'SplitHeroSection'].includes(componentName);
};

const isSingleCategory = (category: string) => category === 'components';

const getCategoryLabel = (category: string) => category.replace(/-/g, ' ');

const REPRESENTATIVE_SECTION_ID_BY_COMPONENT: Record<string, string> = {
  Badge: 'hero',
  IconBenefitCardsSection: 'industries',
  Button: 'hero',
  CTASection: 'client-journey',
  FeatureChecklistCard: 'visibility-alignment',
  DetailedStepCard: 'client-journey',
  IconBenefitCard: 'smart-website-framework',
  ProcessStepsSection: 'implementation-principles',
  ProblemSolutionSplitCard: 'infrastructure-gaps',
  ResourceBusinessCostsSection: 'resource-business-costs',
  ResourceCaseSection: 'resource-case',
  ResourceChecklistSection: 'resource-checklist',
  ResourceComparisonSection: 'resource-comparison',
  ResourceDIYSection: 'resource-diy',
  ResourceProblemSection: 'resource-problem',
  ResourceSolutionsSection: 'resource-solution-cards',
  ResourceTakeawaysSection: 'resource-takeaways',
  ResourceTemplatesSection: 'resource-templates',
  SectionIntro: 'smart-website-framework',
};

const getRepresentativeSectionId = (componentName: string, category: string) => {
  if (componentName in REPRESENTATIVE_SECTION_ID_BY_COMPONENT) {
    return REPRESENTATIVE_SECTION_ID_BY_COMPONENT[componentName];
  }

  if (category === 'industry-sections') return 'industries';

  return undefined;
};

const getRepresentativePageUrl = (componentName: string, category: string) => {
  const sectionId = getRepresentativeSectionId(componentName, category);

  if (componentName.startsWith('CaseStudy')) {
    const base = '/case-study/beauty-salon-online-booking-local-seo-manchester-all-sections';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  if (componentName.startsWith('Resource')) {
    const base = '/resources/auto-reply-funnel';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  if (componentName.startsWith('Blog')) {
    const base = '/blog/ai-reception-for-automotive-shops';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  if (componentName.startsWith('Industry')) {
    const base = '/industries/beauty-personal-care';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  if (componentName.startsWith('Service')) {
    const base = '/services/crm-infrastructure-implementation';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  if (componentName.startsWith('Feature')) {
    const base = '/features/crm';
    return sectionId ? `${base}#${sectionId}` : base;
  }

  const byCategory: Record<string, string> = {
    components: '/',
    'core-sections': '/',
    'feature-sections': '/features/crm',
    'service-sections': '/services/crm-infrastructure-implementation',
    'industry-sections': '/industries/beauty-personal-care',
    'resource-sections': '/resources/auto-reply-funnel',
    'blog-sections': '/blog/ai-reception-for-automotive-shops',
    'case-study-sections':
      '/case-study/beauty-salon-online-booking-local-seo-manchester-all-sections',
  };

  const base = byCategory[category] ?? '/';
  return sectionId ? `${base}#${sectionId}` : base;
};

const getVariationLabel = (variationProps: Record<string, unknown>, index: number) => {
  const label = variationProps['variationLabel'];
  if (typeof label === 'string' && label.trim().length > 0) return label;
  return `Variation ${index + 1}`;
};

const stripPreviewProps = (variationProps: Record<string, unknown>) => {
  const rest = { ...variationProps };
  delete rest['variationLabel'];
  return rest;
};

const renderType = (typeText: string) => {
  // Keep preview labels readable; extracted types can include long import(...) prefixes.
  return typeText.replace(/import\([^)]*\)\./g, '');
};

const extractStringLiterals = (typeText: string) => {
  // Extract literal union values such as 'left' | 'right'.
  const matches = typeText.match(/'([^']+)'|"([^"]+)"/g) ?? [];
  const values = matches.map(m => m.replace(/^['"]|['"]$/g, '')).filter(v => v.trim().length > 0);
  return Array.from(new Set(values));
};

const describeValue = (value: unknown) => {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return `Array(${value.length})`;
  if (React.isValidElement(value)) return '<Element />';
  if (typeof value === 'function') return '<function>';
  if (typeof value === 'object') return '{…}';
  return String(value);
};

const escapeJsxString = (value: string) => value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const toTsLiteral = (value: unknown) => {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  if (typeof value === 'string') return `"${escapeJsxString(value)}"`;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return '[]';
  return '/* … */';
};

const toOverridesSnippet = (componentName: string, propName: string, value: unknown) => {
  if (value === undefined) {
    return [
      `// remove prop: ${propName}`,
      `const { ${propName}, ...rest } = baseProps;`,
      `<${componentName} {...rest} />`,
    ].join('\n');
  }

  return [
    `const overrides = { ${propName}: ${toTsLiteral(value)} };`,
    `<${componentName} {...baseProps} {...overrides} />`,
  ].join('\n');
};

const pickExampleValue = (typeText: string, baseValue: unknown) => {
  const type = renderType(typeText).trim();
  const literals = extractStringLiterals(type);
  if (literals.length > 0) {
    const current = typeof baseValue === 'string' ? baseValue : undefined;
    return literals.find(v => v !== current) ?? literals[0];
  }

  if (/(^|\W)boolean(\W|$)/.test(type) || type === 'true | false' || type === 'false | true') {
    if (typeof baseValue === 'boolean') return !baseValue;
    return true;
  }

  if (/(^|\W)number(\W|$)/.test(type)) {
    if (typeof baseValue === 'number') return baseValue === 0 ? 42 : 0;
    return 42;
  }

  if (/(^|\W)string(\W|$)/.test(type)) {
    if (typeof baseValue === 'string') {
      if (baseValue.trim().length === 0) return 'Example text';
      return `${baseValue} (changed)`;
    }
    return 'Example text';
  }

  if (
    /(React\.)?(ReactNode|ReactElement|JSX\.Element)/.test(type) ||
    type.includes('React.ReactNode')
  ) {
    return 'Example content';
  }

  if (type.endsWith('[]') || /^Array<.*>$/.test(type)) {
    return Array.isArray(baseValue) ? [] : [];
  }

  return undefined;
};

function PropExplorer({
  name,
  Component,
  fullWidth,
}: {
  name: string;
  Component: React.ComponentType<Record<string, unknown>>;
  fullWidth: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const propCount = useMemo(() => {
    const doc = (componentDocs as Record<string, ComponentDoc | undefined>)[name];
    const props = Array.isArray(doc?.props) ? doc.props : [];
    return props.filter(
      p => p?.name && p.name !== 'variationLabel' && !PREVIEW_VARIATION_EXCLUDED_PROPS.has(p.name)
    ).length;
  }, [name]);

  const explorer = useMemo(() => {
    if (!open) return null;

    const doc = (componentDocs as Record<string, ComponentDoc | undefined>)[name];

    const propMetas = Array.isArray(doc?.props) ? doc.props : [];
    const base = (generateMockData(name) ?? {}) as Record<string, unknown>;

    const variations: Array<{
      key: string;
      label: string;
      snippet: string;
      props: Record<string, unknown>;
    }> = [];

    for (const propMeta of propMetas) {
      if (!propMeta?.name || propMeta.name === 'variationLabel') continue;
      if (PREVIEW_VARIATION_EXCLUDED_PROPS.has(propMeta.name)) continue;

      const propName = propMeta.name;
      const hasProp = Object.prototype.hasOwnProperty.call(base, propName);
      const baseValue = base[propName];

      // Prefer removing optional props first to show default behavior.
      if (propMeta.optional && hasProp) {
        const next = { ...base };
        delete next[propName];
        variations.push({
          key: `${propName}-remove`,
          label: `Without ${propName}`,
          snippet: toOverridesSnippet(name, propName, undefined),
          props: next,
        });
        continue;
      }

      // Otherwise set or toggle a representative value.
      const example = pickExampleValue(propMeta.type, baseValue);
      if (example === undefined) continue;

      // For optional missing props this creates a "With ..." preview;
      // for required props it creates an alternate-value preview.
      const next = { ...base, [propName]: example };
      variations.push({
        key: `${propName}-set`,
        label: `${propName} = ${describeValue(example)}`,
        snippet: toOverridesSnippet(name, propName, example),
        props: next,
      });
    }

    return {
      base,
      variations,
    };
  }, [name, open]);

  if (propCount === 0) return null;

  return (
    <details
      className='component-library__details'
      open={false}
      onToggle={e => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className='component-library__details-summary'>
        Prop Explorer
        <span className='component-library__muted-meta'>(auto-generated)</span>
      </summary>
      <div className='component-library__details-body'>
        <div className='component-library__muted-hint'>
          Shows one focused preview per prop (toggle/remove/change), based on detected prop types.
        </div>

        {open && (!explorer || explorer.variations.length === 0) ? (
          <div className='component-library__muted-text'>No previewable props detected.</div>
        ) : null}

        {open && explorer && explorer.variations.length > 0 ? (
          fullWidth ? (
            <div className='component-library__variation-stack'>
              {explorer.variations.map((v, idx) => (
                <div key={v.key ?? idx} className='component-library__variation-card'>
                  <div className='component-library__variation-header'>{v.label}</div>
                  <div className='component-library__variation-body'>
                    <div className='component-library__snippet-row'>
                      <pre className='component-library__snippet'>
                        <code>{v.snippet}</code>
                      </pre>
                      <button
                        type='button'
                        className='component-library__copy-button'
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(v.snippet);
                            setCopiedKey(v.key);
                            window.setTimeout(() => setCopiedKey(null), 1200);
                          } catch {
                            // Clipboard may be unavailable in some runtimes.
                          }
                        }}
                      >
                        {copiedKey === v.key ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <AppErrorBoundary
                      fallback={() => <div className='text-sm'>Failed to render</div>}
                    >
                      <Component {...v.props} />
                    </AppErrorBoundary>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='component-library__grid component-library__grid--2-md'>
              {explorer.variations.map((v, idx) => (
                <div key={v.key ?? idx} className='component-library__mini-card'>
                  <div className='component-library__muted-label'>{v.label}</div>
                  <div className='component-library__snippet-row'>
                    <pre className='component-library__snippet'>
                      <code>{v.snippet}</code>
                    </pre>
                    <button
                      type='button'
                      className='component-library__copy-button'
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(v.snippet);
                          setCopiedKey(v.key);
                          window.setTimeout(() => setCopiedKey(null), 1200);
                        } catch {
                          // Clipboard may be unavailable in some runtimes.
                        }
                      }}
                    >
                      {copiedKey === v.key ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <AppErrorBoundary
                    fallback={() => <div className='text-sm'>Failed to render</div>}
                  >
                    <Component {...v.props} />
                  </AppErrorBoundary>
                </div>
              ))}
            </div>
          )
        ) : null}
      </div>
    </details>
  );
}

function PropsDocs({ name }: { name: string }) {
  const doc = (componentDocs as Record<string, ComponentDoc | undefined>)[name];

  if (!doc) return null;

  const props = Array.isArray(doc.props) ? doc.props : [];

  return (
    <details className='component-library__details' open={false}>
      <summary className='component-library__details-summary'>Props ({props.length})</summary>
      <div className='component-library__details-body'>
        {doc.filePath && (
          <div className='component-library__muted-hint'>Source: {doc.filePath}</div>
        )}
        {doc.summary && <div className='component-library__muted-text'>{doc.summary}</div>}

        {props.length > 0 ? (
          <div className='overflow-x-auto'>
            <table className='component-library__props-table'>
              <thead>
                <tr className='text-left text-xs text-muted-foreground border-b'>
                  <th className='py-2 pr-3 font-medium'>Prop</th>
                  <th className='py-2 pr-3 font-medium'>Type</th>
                  <th className='py-2 pr-3 font-medium'>Required</th>
                  <th className='py-2 font-medium'>Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map(p => (
                  <tr key={p.name} className='component-library__props-row'>
                    <td className='component-library__props-cell component-library__props-cell--name'>
                      {p.name}
                    </td>
                    <td className='component-library__props-cell component-library__props-cell--type'>
                      {renderType(p.type)}
                    </td>
                    <td className='component-library__props-cell component-library__props-cell--required'>
                      {p.optional ? 'No' : 'Yes'}
                    </td>
                    <td className='component-library__props-cell component-library__props-cell--desc'>
                      {p.description?.trim() ? p.description : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className='component-library__muted-text'>No props detected.</div>
        )}
      </div>
    </details>
  );
}

export function ComponentLibrary() {
  const [query, setQuery] = useState('');

  const registry = useMemo(() => getComponentRegistry(), []);
  const allComponents = useMemo(() => getAllComponents(), []);

  const filteredComponents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allComponents;
    return allComponents.filter(c => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.filePath.toLowerCase().includes(q)
      );
    });
  }, [allComponents, query]);

  const componentsByCategory = useMemo(
    () => groupComponentsByCategory(filteredComponents),
    [filteredComponents]
  );

  const orderedCategoryEntries = useMemo(() => {
    const entries = Object.entries(componentsByCategory);
    const orderIndex = new Map<string, number>(CATEGORY_ORDER.map((c, i) => [c, i]));
    return entries.sort(([a], [b]) => (orderIndex.get(a) ?? 999) - (orderIndex.get(b) ?? 999));
  }, [componentsByCategory]);

  const singleCategoryEntry = useMemo(
    () => orderedCategoryEntries.find(([category]) => isSingleCategory(category)) ?? null,
    [orderedCategoryEntries]
  );

  const sectionCategoryEntries = useMemo(
    () => orderedCategoryEntries.filter(([category]) => !isSingleCategory(category)),
    [orderedCategoryEntries]
  );

  const makePreviewFallback = (componentLabel: string): React.ComponentType<{ error: Error }> => {
    function PreviewFallback({ error }: { error: Error }) {
      return (
        <div className='p-4 border border-destructive/30 rounded-md bg-destructive/5 text-sm'>
          <div className='font-semibold mb-1'>Failed to render: {componentLabel}</div>
          <div className='text-muted-foreground break-words'>{error.message}</div>
        </div>
      );
    }
    return PreviewFallback;
  };

  return (
    <div className='l-section component-library'>
      <div className='component-library__container'>
        <div className='l-container component-library__header'>
          <h1 className='component-library__title'>Component Library</h1>
          <p className='component-library__subtitle'>
            Internal preview + documentation for global components and sections
          </p>
          <div className='component-library__search-row'>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='component-library__search-input'
              placeholder='Search components (name/category/path)'
            />
            <div className='component-library__muted-text'>Showing {filteredComponents.length}</div>
          </div>
        </div>

        <div className='component-library-inner--container component-library__layout'>
          <aside className='component-library__sidebar'>
            <div className='component-library__sidebar-card'>
              <div className='component-library__sidebar-title'>Component index</div>

              <details open className='component-library__sidebar-dropdown'>
                <summary className='component-library__sidebar-link'>Single components</summary>
                <div className='component-library__sidebar-sublist'>
                  {(singleCategoryEntry?.[1] ?? []).map(componentInfo => (
                    <a
                      key={`single-${componentInfo.name}`}
                      href={`#component-${componentInfo.name}`}
                      className='component-library__sidebar-sublink'
                    >
                      {componentInfo.name}
                    </a>
                  ))}
                </div>
              </details>

              <details open className='component-library__sidebar-dropdown'>
                <summary className='component-library__sidebar-link'>Section components</summary>
                <div className='component-library__sidebar-list'>
                  {sectionCategoryEntries.map(([category, components]) => (
                    <div key={`sidebar-${category}`}>
                      <a href={`#category-${category}`} className='component-library__sidebar-link'>
                        {getCategoryLabel(category)}
                      </a>
                      <div className='component-library__sidebar-sublist'>
                        {components.map(componentInfo => (
                          <a
                            key={`section-${componentInfo.name}`}
                            href={`#component-${componentInfo.name}`}
                            className='component-library__sidebar-sublink'
                          >
                            {componentInfo.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </aside>

          <div className='component-library__content'>
            {orderedCategoryEntries.map(([category, components], categoryIndex) => (
              <section
                key={category}
                id={`category-${category}`}
                className='component-library__category component-library__scroll-anchor'
              >
                <details className='component-library__category-details' open={categoryIndex === 0}>
                  <summary className='component-library__category-summary'>
                    <h2 className='component-library__category-title'>
                      {getCategoryLabel(category)} ({components.length})
                    </h2>
                  </summary>

                  <div className='component-library__components-stack'>
                    {components.map(componentInfo => {
                      const Component = registry[componentInfo.name] as
                        | React.ComponentType<Record<string, unknown>>
                        | undefined;

                      const variations = generateComponentVariations(componentInfo.name);
                      const componentDoc = (
                        componentDocs as Record<string, ComponentDoc | undefined>
                      )[componentInfo.name];

                      const livePageUrl =
                        componentDoc?.representativePageUrl ||
                        getRepresentativePageUrl(componentInfo.name, componentInfo.category);
                      const fullWidth = isFullWidthPreview(
                        componentInfo.name,
                        componentInfo.category
                      );

                      if (!Component) {
                        return (
                          <div className='component-library__component-missing'>
                            <h3 className='component-library__component-title'>
                              {componentInfo.name}
                            </h3>
                            <div className='component-library__muted-text'>Failed to load</div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={componentInfo.name}
                          id={`component-${componentInfo.name}`}
                          className='component-library__scroll-anchor'
                        >
                          <div className='component-library__component-head'>
                            <h3 className='component-library__component-title'>
                              {componentInfo.name}
                            </h3>
                            <div className='component-library__component-meta'>
                              <div className='component-library__component-path'>
                                {componentInfo.filePath}
                              </div>
                              {componentDoc?.representativeUsageFilePath ? (
                                <div className='component-library__component-path'>
                                  Usage: {componentDoc.representativeUsageFilePath}
                                </div>
                              ) : null}
                              <a
                                href={livePageUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='component-library__component-live-link'
                              >
                                Live page: {livePageUrl}
                              </a>
                            </div>
                          </div>

                          {fullWidth ? (
                            <div className='component-library__variation-stack'>
                              {variations.filter(Boolean).map((variationProps, variationIndex) => {
                                const safeVariationProps = variationProps as Record<
                                  string,
                                  unknown
                                >;
                                const label = getVariationLabel(safeVariationProps, variationIndex);
                                const props = stripPreviewProps(safeVariationProps);

                                return (
                                  <div
                                    key={`${componentInfo.name}-${variationIndex}`}
                                    className='component-library__variation-card'
                                  >
                                    <div className='component-library__variation-header'>
                                      {label}
                                    </div>
                                    <div className='component-library__variation-body'>
                                      <AppErrorBoundary
                                        fallback={makePreviewFallback(
                                          `${componentInfo.name} — ${label}`
                                        )}
                                      >
                                        <Component {...props} />
                                      </AppErrorBoundary>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className='component-library__grid component-library__grid--2-md component-library__grid--3-lg'>
                              {variations.filter(Boolean).map((variationProps, variationIndex) => {
                                const safeVariationProps = variationProps as Record<
                                  string,
                                  unknown
                                >;
                                const label = getVariationLabel(safeVariationProps, variationIndex);
                                const props = stripPreviewProps(safeVariationProps);

                                return (
                                  <div
                                    key={`${componentInfo.name}-${variationIndex}`}
                                    className='component-library__mini-card'
                                  >
                                    <div className='component-library__muted-label'>{label}</div>
                                    <AppErrorBoundary
                                      fallback={makePreviewFallback(
                                        `${componentInfo.name} — ${label}`
                                      )}
                                    >
                                      <Component {...props} />
                                    </AppErrorBoundary>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          <PropsDocs name={componentInfo.name} />

                          <PropExplorer
                            name={componentInfo.name}
                            Component={Component}
                            fullWidth={fullWidth}
                          />
                        </div>
                      );
                    })}
                  </div>
                </details>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
