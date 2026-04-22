'use client';

import React, { useEffect, useMemo, useState } from 'react';

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
  usageCount?: number;
  composedComponents?: string[];
  summary?: string;
  props?: Array<{ name: string; type: string; optional: boolean; description?: string }>;
};

type PreviewControl = {
  name: string;
  type: 'select' | 'boolean';
  options?: string[];
};

type PreviewViewport = 'desktop' | 'tablet' | 'mobile';

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
  'as',
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
  return ['FAQSection', 'SimpleHero', 'SplitHeroSection'].includes(componentName);
};

const isSingleCategory = (category: string) => category === 'components';

const getCategoryLabel = (category: string) => category.replace(/-/g, ' ');

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

const PREVIEW_VIEWPORTS: Array<{ id: PreviewViewport; label: string }> = [
  { id: 'desktop', label: 'Desktop' },
  { id: 'tablet', label: 'Tablet 980px' },
  { id: 'mobile', label: 'Mobile 392px' },
];

const DOMAIN_LIVE_PAGE_FALLBACKS: Array<{ match: RegExp; url: string }> = [
  { match: /^\/services\//, url: '/services/smart-website-systems' },
  { match: /^\/resources\//, url: '/resources/auto-reply-funnel' },
  { match: /^\/blog\//, url: '/blog/ai-reception-for-automotive-shops' },
  { match: /^\/features\//, url: '/features/crm' },
  { match: /^\/industries\//, url: '/industries/beauty-personal-care' },
  { match: /^\/case-studies\//, url: '/case-studies/auto-repair-missed-call-recovery' },
];

const hasRepresentativeLivePage = (doc?: ComponentDoc) => {
  return Boolean(doc?.representativeUsageFilePath && doc.representativePageUrl);
};

const getNormalizedLivePageUrl = (doc?: ComponentDoc) => {
  const url = doc?.representativePageUrl;
  if (!url) return null;
  if (!url.includes('[')) return url;

  const fallback = DOMAIN_LIVE_PAGE_FALLBACKS.find(entry => entry.match.test(url));
  return fallback?.url ?? null;
};

const getComponentDoc = (name: string) => {
  return (componentDocs as Record<string, ComponentDoc | undefined>)[name];
};

const renderType = (typeText: string) => {
  // Keep preview labels readable; extracted types can include long import(...) prefixes.
  return typeText.replace(/import\([^)]*\)\./g, '');
};

const renderPreviewContent = (
  componentName: string,
  content: React.ReactNode,
  variationLabel: string
) => {
  if (componentName === 'BulletList') {
    return (
      <div className='component-library__inline-preview-shell'>
        <div className='component-library__inline-preview-label'>{variationLabel}</div>
        <div className='component-library__inline-preview-content'>{content}</div>
      </div>
    );
  }

  return content;
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

const getPreviewControls = (name: string, baseProps: Record<string, unknown>) => {
  const doc = getComponentDoc(name);
  const propMetas = Array.isArray(doc?.props) ? doc.props : [];

  return propMetas.flatMap<PreviewControl>(propMeta => {
    if (!propMeta?.name || propMeta.name === 'variationLabel') return [];
    if (PREVIEW_VARIATION_EXCLUDED_PROPS.has(propMeta.name)) return [];

    const type = renderType(propMeta.type ?? '').trim();
    const current = baseProps[propMeta.name];
    const literals = extractStringLiterals(type);

    if (literals.length > 0) {
      const currentValue =
        typeof current === 'string' && current.trim().length > 0 ? [current] : [];
      return [
        {
          name: propMeta.name,
          type: 'select',
          options: Array.from(new Set([...currentValue, ...literals])),
        },
      ];
    }

    if (/(^|\W)boolean(\W|$)/.test(type) || type === 'true | false' || type === 'false | true') {
      return [{ name: propMeta.name, type: 'boolean' }];
    }

    return [];
  });
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

function ComponentPreviewPanel({
  name,
  Component,
  variations,
  fullWidth,
}: {
  name: string;
  Component: React.ComponentType<Record<string, unknown>>;
  variations: Array<Record<string, unknown>>;
  fullWidth: boolean;
}) {
  const previewVariations = useMemo(
    () =>
      variations.map((variationProps, variationIndex) => {
        const safeVariationProps = variationProps as Record<string, unknown>;
        return {
          key: `${name}-${variationIndex}`,
          label: getVariationLabel(safeVariationProps, variationIndex),
          props: stripPreviewProps(safeVariationProps),
        };
      }),
    [name, variations]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewport, setViewport] = useState<PreviewViewport>('desktop');
  const [showAll, setShowAll] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, unknown>>({});

  const activeVariation = previewVariations[selectedIndex] ?? previewVariations[0];
  const previewControls = useMemo(
    () => (activeVariation ? getPreviewControls(name, activeVariation.props) : []),
    [activeVariation, name]
  );
  const activeProps = useMemo(
    () => (activeVariation ? { ...activeVariation.props, ...overrides } : null),
    [activeVariation, overrides]
  );

  useEffect(() => {
    setOverrides({});
  }, [selectedIndex]);

  if (previewVariations.length === 0 || !activeVariation) return null;

  const renderPreview = (variation: {
    key: string;
    label: string;
    props: Record<string, unknown>;
  }) => (
    <AppErrorBoundary fallback={() => <div className='text-sm'>Failed to render</div>}>
      {renderPreviewContent(name, <Component {...variation.props} />, variation.label)}
    </AppErrorBoundary>
  );

  if (showAll) {
    return fullWidth ? (
      <div className='component-library__variation-stack'>
        {previewVariations.map(variation => (
          <div key={variation.key} className='component-library__variation-card'>
            <div className='component-library__variation-header'>{variation.label}</div>
            <div className='component-library__variation-body'>{renderPreview(variation)}</div>
          </div>
        ))}
      </div>
    ) : (
      <div className='component-library__grid component-library__grid--2-md component-library__grid--3-lg'>
        {previewVariations.map(variation => (
          <div key={variation.key} className='component-library__mini-card'>
            <div className='component-library__muted-label'>{variation.label}</div>
            {renderPreview(variation)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='component-library__preview-panel'>
      <div className='component-library__preview-heading'>
        <div>
          <div className='component-library__preview-eyebrow'>Preview studio</div>
          <div className='component-library__preview-title'>{activeVariation.label}</div>
        </div>
        <div className='component-library__preview-note'>
          {previewControls.length > 0 ? 'Interactive controls enabled' : 'Static preview'}
        </div>
      </div>

      <div className='component-library__preview-toolbar'>
        <label className='component-library__control-field'>
          <span className='component-library__control-label'>Variation</span>
          <select
            className='component-library__control-select'
            value={selectedIndex}
            onChange={event => setSelectedIndex(Number(event.target.value))}
          >
            {previewVariations.map((variation, variationIndex) => (
              <option key={variation.key} value={variationIndex}>
                {variation.label}
              </option>
            ))}
          </select>
        </label>

        <div className='component-library__control-group'>
          <span className='component-library__control-label'>Viewport</span>
          <div className='component-library__segmented-control'>
            {PREVIEW_VIEWPORTS.map(option => (
              <button
                key={option.id}
                type='button'
                className='component-library__segmented-button'
                data-active={viewport === option.id ? 'true' : 'false'}
                onClick={() => setViewport(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {previewVariations.length > 1 ? (
          <button
            type='button'
            className='component-library__toggle-button'
            onClick={() => setShowAll(true)}
          >
            Show all variations
          </button>
        ) : null}

        {previewControls.length > 0 ? (
          <button
            type='button'
            className='component-library__toggle-button'
            onClick={() => setOverrides({})}
          >
            Reset prop controls
          </button>
        ) : null}
      </div>

      {previewControls.length > 0 ? (
        <div className='component-library__control-grid'>
          {previewControls.map(control => {
            const currentValue = activeProps?.[control.name];

            if (control.type === 'select') {
              return (
                <label key={control.name} className='component-library__control-field'>
                  <span className='component-library__control-label'>{control.name}</span>
                  <select
                    className='component-library__control-select'
                    value={
                      typeof currentValue === 'string' ? currentValue : (control.options?.[0] ?? '')
                    }
                    onChange={event => {
                      setOverrides(prev => ({
                        ...prev,
                        [control.name]: event.target.value,
                      }));
                    }}
                  >
                    {(control.options ?? []).map(option => (
                      <option key={`${control.name}-${option}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              );
            }

            if (control.type === 'boolean') {
              return (
                <label key={control.name} className='component-library__control-field'>
                  <span className='component-library__control-label'>{control.name}</span>
                  <select
                    className='component-library__control-select'
                    value={String(typeof currentValue === 'boolean' ? currentValue : false)}
                    onChange={event => {
                      setOverrides(prev => ({
                        ...prev,
                        [control.name]: event.target.value === 'true',
                      }));
                    }}
                  >
                    <option value='true'>true</option>
                    <option value='false'>false</option>
                  </select>
                </label>
              );
            }

            return null;
          })}
        </div>
      ) : null}

      <div className='component-library__variation-card'>
        <div className='component-library__variation-header'>{activeVariation.label}</div>
        <div className='component-library__variation-body'>
          <div
            className='component-library__preview-frame'
            data-viewport={viewport}
            data-full-width={fullWidth ? 'true' : 'false'}
          >
            {activeProps ? renderPreview({ ...activeVariation, props: activeProps }) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnderlyingSingleComponentsPanel({
  componentNames,
  registry,
  componentInfoByName,
}: {
  componentNames: string[];
  registry: Record<string, unknown>;
  componentInfoByName: Map<string, { category: string }>;
}) {
  const singleComponents = componentNames.filter(name => {
    return componentInfoByName.get(name)?.category === 'components';
  });

  if (singleComponents.length === 0) return null;

  return (
    <details className='component-library__details' open={false}>
      <summary className='component-library__details-summary'>
        Underlying single components ({singleComponents.length})
      </summary>
      <div className='component-library__details-body component-library__dependency-stack'>
        {singleComponents.map(componentName => {
          const Component = registry[componentName] as
            | React.ComponentType<Record<string, unknown>>
            | undefined;
          const fullWidth = isFullWidthPreview(
            componentName,
            componentInfoByName.get(componentName)?.category ?? 'components'
          );

          return (
            <div key={`dependency-${componentName}`} className='component-library__dependency-card'>
              <div className='component-library__dependency-title'>{componentName}</div>
              <PropsDocs name={componentName} />
              {Component ? (
                <PropExplorer name={componentName} Component={Component} fullWidth={fullWidth} />
              ) : null}
            </div>
          );
        })}
      </div>
    </details>
  );
}

export function ComponentLibrary() {
  const [query, setQuery] = useState('');

  const registry = useMemo(() => getComponentRegistry(), []);
  const allComponents = useMemo(() => getAllComponents(), []);
  const componentInfoByName = useMemo(
    () =>
      new Map(allComponents.map(component => [component.name, { category: component.category }])),
    [allComponents]
  );

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
                      const sourceLabel =
                        componentInfo.filePath && componentInfo.filePath !== 'unknown'
                          ? componentInfo.filePath
                          : componentInfo.importPath;

                      const livePageUrl = hasRepresentativeLivePage(componentDoc)
                        ? getNormalizedLivePageUrl(componentDoc)
                        : null;
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
                          className='component-library__component-card component-library__scroll-anchor'
                        >
                          <div className='component-library__component-head'>
                            <h3 className='component-library__component-title'>
                              {componentInfo.name}
                            </h3>
                            <div className='component-library__component-meta'>
                              <div className='component-library__meta-item'>
                                <span className='component-library__meta-label'>Source</span>
                                <span className='component-library__meta-value'>{sourceLabel}</span>
                              </div>
                              {componentDoc?.representativeUsageFilePath ? (
                                <div className='component-library__meta-item'>
                                  <span className='component-library__meta-label'>Usage</span>
                                  <span className='component-library__meta-value'>
                                    {componentDoc.representativeUsageFilePath}
                                  </span>
                                </div>
                              ) : null}
                              <div className='component-library__meta-item'>
                                <span className='component-library__meta-label'>Used on</span>
                                <span className='component-library__meta-value'>
                                  {componentDoc?.usageCount ?? 0} pages
                                </span>
                              </div>
                              {componentDoc?.composedComponents?.length ? (
                                <div className='component-library__meta-item'>
                                  <span className='component-library__meta-label'>Built from</span>
                                  <span className='component-library__meta-value'>
                                    {componentDoc.composedComponents.join(', ')}
                                  </span>
                                </div>
                              ) : null}
                              {livePageUrl ? (
                                <a
                                  href={livePageUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='component-library__component-live-link'
                                >
                                  Live page: {livePageUrl}
                                </a>
                              ) : (
                                <div className='component-library__meta-item'>
                                  <span className='component-library__meta-label'>Live page</span>
                                  <span className='component-library__meta-value'>
                                    not linked yet
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          <ComponentPreviewPanel
                            name={componentInfo.name}
                            Component={Component}
                            variations={
                              variations.filter(Boolean) as Array<Record<string, unknown>>
                            }
                            fullWidth={fullWidth}
                          />

                          <PropsDocs name={componentInfo.name} />

                          <PropExplorer
                            name={componentInfo.name}
                            Component={Component}
                            fullWidth={fullWidth}
                          />

                          <UnderlyingSingleComponentsPanel
                            componentNames={componentDoc?.composedComponents ?? []}
                            registry={registry as Record<string, unknown>}
                            componentInfoByName={componentInfoByName}
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
