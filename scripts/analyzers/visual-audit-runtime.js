(function initMindwpVisualAudit() {
  const BLOCK_KEYWORDS = ['card', 'section', 'hero', 'cta', 'faq', 'feature', 'benefit'];
  const VALID_TAGS = new Set(['section', 'div', 'h1', 'h2', 'h3', 'h4', 'p', 'button']);
  const SKIP_TAGS = new Set(['svg', 'path', 'script', 'style', 'noscript', 'link']);
  const MAX_COMPONENT_NODES = 200;
  const MAX_FALLBACK_NODES = 300;
  const SPACING_SCALE_VALUES = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80];

  const STYLE_FIELDS = {
    spacing: ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'gap'],
    typography: ['fontSize', 'lineHeight', 'fontWeight'],
    colors: ['color', 'backgroundColor', 'borderColor'],
    layout: ['display'],
  };

  const SEVERITY_WEIGHTS = {
    critical: 20,
    warning: 10,
  };

  const COLOR_TOLERANCE = 8;

  function toClassList(value) {
    if (!value || typeof value !== 'string') return [];
    return value
      .split(/\s+/)
      .map(token => token.trim())
      .filter(Boolean);
  }

  function normalizeSpaceScale() {
    const computedRoot = window.getComputedStyle(document.documentElement);
    const scale = [];

    for (let index = 1; index <= 10; index += 1) {
      const token = `--space-${index}`;
      const rawValue = computedRoot.getPropertyValue(token).trim();
      const numericValue = toPxNumber(rawValue);
      if (numericValue > 0) {
        scale.push({ token, value: numericValue });
      }
    }

    const discovered = scale.sort((left, right) => left.value - right.value);
    const fallback = SPACING_SCALE_VALUES.map((value, index) => ({
      token: `scale-${index + 1}`,
      value,
    }));
    return discovered.length > 0 ? discovered : fallback;
  }

  function toPxNumber(value) {
    if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
    if (!value || value === 'normal' || value === 'none' || value === 'auto') return 0;

    const numericValue = Number.parseFloat(String(value).replace('px', '').trim());
    return Number.isFinite(numericValue) ? numericValue : 0;
  }

  function roundValue(value) {
    return Math.round(value * 100) / 100;
  }

  function nearlyEqual(left, right, tolerance = 2) {
    return Math.abs(left - right) < tolerance;
  }

  function normalizeColor(value) {
    if (!value || typeof value !== 'string') return '';
    return value.replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function parseRgb(color) {
    const normalized = normalizeColor(color);
    const match = normalized.match(/rgba?\((\d+), (\d+), (\d+)/);
    if (!match) return null;

    return {
      red: Number.parseInt(match[1], 10),
      green: Number.parseInt(match[2], 10),
      blue: Number.parseInt(match[3], 10),
    };
  }

  function distanceBetweenColors(left, right) {
    const leftRgb = parseRgb(left);
    const rightRgb = parseRgb(right);
    if (!leftRgb || !rightRgb) return Number.POSITIVE_INFINITY;

    return Math.max(
      Math.abs(leftRgb.red - rightRgb.red),
      Math.abs(leftRgb.green - rightRgb.green),
      Math.abs(leftRgb.blue - rightRgb.blue)
    );
  }

  function normalizeColorTokens() {
    const computedRoot = window.getComputedStyle(document.documentElement);
    const tokens = [];

    for (const name of [
      '--brand-primary',
      '--brand-secondary',
      '--brand-accent',
      '--brand-surface',
      '--brand-white',
      '--brand-grey',
      '--brand-grey-light',
      '--brand-text',
      '--brand-headline',
      '--icon-bg-primary',
      '--icon-bg-secondary',
      '--icon-bg-accent',
    ]) {
      const value = normalizeColor(computedRoot.getPropertyValue(name));
      if (value) {
        tokens.push({ token: name, value });
      }
    }

    return tokens;
  }

  function getNearestSpacingToken(value, spacingScale) {
    if (!value || spacingScale.length === 0) return null;

    return spacingScale.reduce((closest, current) => {
      if (!closest) return current;

      return Math.abs(current.value - value) < Math.abs(closest.value - value) ? current : closest;
    }, null);
  }

  function isSpacingOnScale(value, spacingScale) {
    if (!value) return true;
    return spacingScale.some(entry => nearlyEqual(entry.value, value, 2));
  }

  function classifyBackground(color) {
    const normalized = normalizeColor(color);
    if (!normalized || normalized === 'transparent' || normalized === 'rgba(0, 0, 0, 0)') {
      return 'transparent';
    }
    if (normalized === 'rgb(255, 255, 255)' || normalized === '#fff' || normalized === '#ffffff') {
      return 'white';
    }

    const match = normalized.match(/rgba?\((\d+), (\d+), (\d+)/);
    if (!match) return 'other';

    const red = Number.parseInt(match[1], 10);
    const green = Number.parseInt(match[2], 10);
    const blue = Number.parseInt(match[3], 10);
    const average = (red + green + blue) / 3;
    const variance = Math.max(red, green, blue) - Math.min(red, green, blue);

    if (average >= 250 && variance < 8) return 'white';
    if (average >= 232 && variance < 18) return 'grey';
    return 'other';
  }

  function getNodeTextHint(element) {
    const text = (element.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return '';
    return text.slice(0, 120);
  }

  function shouldSkipElement(element) {
    return SKIP_TAGS.has(element.tagName.toLowerCase());
  }

  function isPriorityElement(element) {
    return VALID_TAGS.has(element.tagName.toLowerCase());
  }

  function getBlockClasses(element) {
    const classList = toClassList(element.className);
    return classList.filter(token => {
      if (!token) return false;
      if (token.startsWith('l-')) return false;
      if (token.startsWith('bg-')) return false;
      if (token.startsWith('text-')) return false;
      if (token.startsWith('grid')) return false;
      if (token.startsWith('flex')) return false;
      if (token.startsWith('gap-')) return false;
      if (token.startsWith('px-') || token.startsWith('py-') || token.startsWith('pt-'))
        return false;
      if (token.startsWith('pb-') || token.startsWith('mx-') || token.startsWith('my-'))
        return false;
      if (token.startsWith('items-') || token.startsWith('justify-')) return false;
      if (token.startsWith('@')) return false;
      if (token.includes('__') || token.includes('--')) return false;
      if (token.includes('[') || token.includes(':')) return false;

      return token.startsWith('c-') || BLOCK_KEYWORDS.some(keyword => token.includes(keyword));
    });
  }

  function getSectionBlock(element) {
    return (
      getBlockClasses(element).find(
        token => token.startsWith('c-') || token.endsWith('-section')
      ) || ''
    );
  }

  function getComponentBlock(element) {
    return getBlockClasses(element).find(token => !token.endsWith('-section')) || '';
  }

  function extractComponentFromClass(className) {
    const classes = toClassList(className);
    return (
      classes.find(token => token.startsWith('c-') || token.startsWith('s-')) ||
      getBlockClasses({ className })[0] ||
      ''
    );
  }

  function getComponentName(element) {
    const derived =
      element.dataset.component ||
      extractComponentFromClass(typeof element.className === 'string' ? element.className : '');

    if (derived && derived !== 'div' && derived !== 'section') {
      return derived;
    }

    return element.tagName.toLowerCase();
  }

  function isHeroElement(element) {
    const classes = toClassList(element.className);
    const id = (element.id || '').toLowerCase();
    return classes.some(token => token.includes('hero')) || id.includes('hero');
  }

  function isLikelySection(element) {
    if (element.matches('section, [data-section]')) return true;
    return Boolean(getSectionBlock(element));
  }

  function isLikelyComponent(element) {
    if (element.hasAttribute('data-component')) return true;
    if (element.hasAttribute('data-slot')) return false;
    return Boolean(getComponentBlock(element));
  }

  function hasAncestorMatch(element, predicate) {
    let parent = element.parentElement;
    while (parent) {
      if (predicate(parent)) return true;
      parent = parent.parentElement;
    }
    return false;
  }

  function buildElementPath(element, root) {
    const segments = [];
    let current = element;

    while (current) {
      const tag = current.tagName.toLowerCase();
      const classes = toClassList(current.className).slice(0, 3).join('.');
      const idSuffix = current.id ? `#${current.id}` : '';
      const classSuffix = classes ? `.${classes}` : '';
      segments.unshift(`${tag}${idSuffix}${classSuffix}`);

      if (current === root) break;
      current = current.parentElement;
    }

    return segments.join(' > ');
  }

  function getNearestColorToken(color, colorTokens) {
    const normalized = normalizeColor(color);
    if (!normalized) return null;

    let closest = null;
    for (const token of colorTokens) {
      const distance = distanceBetweenColors(normalized, token.value);
      if (distance <= COLOR_TOLERANCE) {
        return { token: token.token, value: token.value, distance };
      }

      if (!closest || distance < closest.distance) {
        closest = { token: token.token, value: token.value, distance };
      }
    }

    return closest;
  }

  function getNormalizedStyles(element, spacingScale, colorTokens) {
    const computed = window.getComputedStyle(element);
    const styles = {
      spacing: {},
      typography: {},
      colors: {},
      layout: {},
    };

    for (const field of STYLE_FIELDS.spacing) {
      const numericValue = roundValue(toPxNumber(computed[field]));
      if (!numericValue) continue;
      const nearest = getNearestSpacingToken(numericValue, spacingScale);
      styles.spacing[field] = {
        value: numericValue,
        nearestToken: nearest ? nearest.token : null,
        nearestValue: nearest ? nearest.value : null,
        onScale: isSpacingOnScale(numericValue, spacingScale),
      };
    }

    for (const field of STYLE_FIELDS.typography) {
      if (field === 'fontWeight') {
        const weightValue = Number.parseInt(computed[field], 10);
        if (Number.isFinite(weightValue) && weightValue > 0) {
          styles.typography[field] = weightValue;
        }
        continue;
      }

      const numericValue = roundValue(toPxNumber(computed[field]));
      if (numericValue > 0) {
        styles.typography[field] = numericValue;
      }
    }

    for (const field of STYLE_FIELDS.colors) {
      const normalizedValue = normalizeColor(computed[field]);
      if (!normalizedValue) continue;
      const nearestColor = getNearestColorToken(normalizedValue, colorTokens);
      styles.colors[field] = {
        value: normalizedValue,
        nearestToken: nearestColor ? nearestColor.token : null,
        tokenDistance: nearestColor ? nearestColor.distance : null,
      };
    }

    const display = computed.display;
    if (display) {
      styles.layout.display = display;
    }

    return styles;
  }

  function buildSnapshot(element, root, spacingScale, colorTokens) {
    return {
      path: buildElementPath(element, root),
      tag: element.tagName.toLowerCase(),
      className: toClassList(element.className).join(' '),
      blockClasses: getBlockClasses(element),
      textHint: getNodeTextHint(element),
      styles: getNormalizedStyles(element, spacingScale, colorTokens),
    };
  }

  function traverseComponent(root, callback) {
    let count = 0;

    function walk(element) {
      if (!element || shouldSkipElement(element) || count >= MAX_COMPONENT_NODES) return;

      count += 1;

      if (isPriorityElement(element)) {
        callback(element);
      }

      for (const child of element.children) {
        walk(child);
      }
    }

    walk(root);
    return count;
  }

  function pushIssue(target, issue, suggestion) {
    target.issues.push({
      ...issue,
      suggestion: suggestion || '',
    });
    if (suggestion) {
      target.suggestions.push(suggestion);
    }
    target.score -= SEVERITY_WEIGHTS[issue.severity] || 0;
  }

  function getStatus(score) {
    if (score >= 80) return 'good';
    if (score >= 60) return 'needs-improvement';
    return 'critical';
  }

  function collectSnapshots(root, spacingScale, colorTokens) {
    const snapshots = [];

    const traversedNodes = traverseComponent(root, element => {
      snapshots.push(buildSnapshot(element, root, spacingScale, colorTokens));
    });

    return { snapshots, traversedNodes };
  }

  function createDesignSystemSummary() {
    return {
      spacingViolations: [],
      colorViolations: [],
    };
  }

  function auditComponent(root, spacingScale, colorTokens, route, viewport, designSystem) {
    const blockName = getComponentName(root);
    const { snapshots, traversedNodes } = collectSnapshots(root, spacingScale, colorTokens);
    const result = {
      type: 'component',
      route,
      viewport,
      name: blockName,
      rootPath: buildElementPath(root, root),
      className: toClassList(root.className).join(' '),
      score: 100,
      status: 'good',
      issues: [],
      suggestions: [],
      snapshots,
      traversedNodes,
    };

    const spacingFindings = new Map();
    const fontSizes = new Set();
    const headingSizes = new Map();
    const backgroundColors = new Set();
    const textColors = new Set();

    for (const snapshot of snapshots) {
      for (const [field, metadata] of Object.entries(snapshot.styles.spacing)) {
        if (!metadata || !metadata.value) continue;

        const values = spacingFindings.get(field) || new Set();
        values.add(metadata.value);
        spacingFindings.set(field, values);

        if (!metadata.onScale) {
          pushIssue(
            result,
            {
              severity: 'warning',
              code: 'spacing-off-scale',
              message: `${field} (${metadata.value}px) is not aligned to the spacing scale.`,
              elementPath: snapshot.path,
            },
            metadata.nearestValue
              ? `${field} (${metadata.value}px) is not aligned with the spacing scale. Consider using ${metadata.nearestValue}px (${metadata.nearestToken}).`
              : `${field} (${metadata.value}px) is not aligned with the spacing scale.`
          );
        }
      }

      if (snapshot.styles.typography.fontSize) {
        fontSizes.add(snapshot.styles.typography.fontSize);
        if (/^h[1-6]$/.test(snapshot.tag)) {
          const headingSet = headingSizes.get(snapshot.tag) || new Set();
          headingSet.add(snapshot.styles.typography.fontSize);
          headingSizes.set(snapshot.tag, headingSet);
        }
      }

      if (snapshot.styles.colors.backgroundColor && snapshot.styles.colors.backgroundColor.value) {
        backgroundColors.add(snapshot.styles.colors.backgroundColor.value);
      }
      if (snapshot.styles.colors.color && snapshot.styles.colors.color.value) {
        textColors.add(snapshot.styles.colors.color.value);
      }

      for (const [field, metadata] of Object.entries(snapshot.styles.colors)) {
        if (!metadata || !metadata.value) continue;
        if (metadata.value === 'rgba(0, 0, 0, 0)' || metadata.value === 'transparent') {
          continue;
        }

        if (metadata.tokenDistance !== null && metadata.tokenDistance > COLOR_TOLERANCE) {
          designSystem.colorViolations.push({
            route,
            viewport,
            component: blockName,
            elementPath: snapshot.path,
            field,
            value: metadata.value,
            nearestToken: metadata.nearestToken,
          });

          pushIssue(
            result,
            {
              severity: 'warning',
              code: 'color-off-token',
              message: `${field} (${metadata.value}) does not match a known color token.`,
              elementPath: snapshot.path,
            },
            metadata.nearestToken
              ? `${field} (${metadata.value}) does not align with the design token set. Check the nearest token ${metadata.nearestToken}.`
              : `${field} (${metadata.value}) does not align with the design token set.`
          );
        }
      }

      for (const [field, metadata] of Object.entries(snapshot.styles.spacing)) {
        if (!metadata || !metadata.value || metadata.onScale) continue;
        designSystem.spacingViolations.push({
          route,
          viewport,
          component: blockName,
          elementPath: snapshot.path,
          field,
          value: metadata.value,
          nearestToken: metadata.nearestToken,
        });
      }
    }

    for (const [field, values] of spacingFindings.entries()) {
      if (values.size > 4) {
        pushIssue(
          result,
          {
            severity: 'warning',
            code: 'spacing-inconsistent',
            message: `${field} uses too many distinct values within the same component.`,
            elementPath: result.rootPath,
          },
          `${field} uses ${values.size} distinct values inside ${blockName}. Consolidate them to the nearest shared spacing token values.`
        );
      }
    }

    if (fontSizes.size > 5) {
      pushIssue(
        result,
        {
          severity: 'warning',
          code: 'typography-mismatch',
          message: `Too many font-size values were found within the same component.`,
          elementPath: result.rootPath,
        },
        `${blockName} uses ${fontSizes.size} distinct font sizes. Reduce the number of typography sizes inside this component to improve consistency.`
      );
    }

    for (const [tagName, values] of headingSizes.entries()) {
      if (values.size > 1) {
        pushIssue(
          result,
          {
            severity: 'warning',
            code: 'heading-mismatch',
            message: `${tagName} elements render at inconsistent sizes inside the same component.`,
            elementPath: result.rootPath,
          },
          `${tagName} elements in ${blockName} use ${values.size} different computed sizes. Align these headings to one token where possible.`
        );
      }
    }

    if (backgroundColors.size > 3) {
      pushIssue(
        result,
        {
          severity: 'warning',
          code: 'color-misuse',
          message: `More than three background colors appear within the component subtree.`,
          elementPath: result.rootPath,
        },
        `${blockName} uses ${backgroundColors.size} background colors. Reduce background variation so the component reads as one systemized block.`
      );
    }

    if (textColors.size > 4) {
      pushIssue(
        result,
        {
          severity: 'warning',
          code: 'text-color-variation',
          message: `Too many text colors appear within the same component.`,
          elementPath: result.rootPath,
        },
        `${blockName} uses ${textColors.size} text colors. Consolidate text color usage to the primary semantic text tokens used elsewhere in the component.`
      );
    }

    if (root.hasAttribute('style')) {
      pushIssue(
        result,
        {
          severity: 'warning',
          code: 'possible-override',
          message: `Inline styles may be overriding the expected visual pattern.`,
          elementPath: result.rootPath,
        },
        `${blockName} has inline styles on its root element. Confirm this is an intentional override and not component drift.`
      );
    }

    result.score = Math.max(0, result.score);
    result.status = getStatus(result.score);
    return result;
  }

  function auditSection(root, spacingScale, colorTokens, route, viewport) {
    const { snapshots, traversedNodes } = collectSnapshots(root, spacingScale, colorTokens);
    const rootStyles = getNormalizedStyles(root, spacingScale, colorTokens);
    const rootText = (root.textContent || '').replace(/\s+/g, ' ').trim();
    const buttons = root.querySelectorAll(
      'button, a.btn, [data-slot="button"], [role="button"]'
    ).length;
    const blockName = getSectionBlock(root) || root.tagName.toLowerCase();
    const backgroundColor = rootStyles.colors.backgroundColor
      ? rootStyles.colors.backgroundColor.value
      : 'transparent';

    return {
      type: 'section',
      route,
      viewport,
      name: blockName,
      rootPath: buildElementPath(root, root),
      className: toClassList(root.className).join(' '),
      score: 100,
      status: 'good',
      backgroundColor,
      backgroundLabel: classifyBackground(backgroundColor),
      paddingTop: rootStyles.spacing.paddingTop ? rootStyles.spacing.paddingTop.value : 0,
      paddingBottom: rootStyles.spacing.paddingBottom ? rootStyles.spacing.paddingBottom.value : 0,
      isHero: isHeroElement(root),
      containsCta:
        blockName.includes('cta') ||
        /\b(start|contact|book|conversation|strategy call)\b/i.test(rootText) ||
        buttons >= 2,
      buttonCount: buttons,
      issues: [],
      suggestions: [],
      snapshots,
      traversedNodes,
    };
  }

  function applySectionRhythm(sectionResults) {
    let previousAudited = null;

    for (const section of sectionResults) {
      if (section.isHero) {
        section.status = getStatus(section.score);
        continue;
      }

      if (
        previousAudited &&
        section.backgroundLabel !== 'transparent' &&
        section.backgroundLabel === previousAudited.backgroundLabel
      ) {
        if (section.paddingTop !== 0 || previousAudited.paddingBottom !== 0) {
          pushIssue(
            section,
            {
              severity: 'critical',
              code: 'background-conflict',
              message: 'Consecutive sections share the same background without merged spacing.',
              elementPath: section.rootPath,
            },
            `This section and the previous section both use ${section.backgroundLabel} backgrounds. Merge them by removing the current top padding and previous bottom padding.`
          );
        }
      }

      if (
        section.containsCta &&
        (section.backgroundLabel === 'white' || section.backgroundLabel === 'transparent')
      ) {
        pushIssue(
          section,
          {
            severity: 'warning',
            code: 'cta-low-distinction',
            message: 'CTA-like section does not have a visually distinct background treatment.',
            elementPath: section.rootPath,
          },
          `This CTA-style section uses a ${section.backgroundLabel} background. Consider giving it a more distinct surface so it separates from surrounding content.`
        );
      }

      section.score = Math.max(0, section.score);
      section.status = getStatus(section.score);
      previousAudited = section;
    }
  }

  function getComponentRoots() {
    const roots = new Set();

    document.querySelectorAll('[data-component]').forEach(element => {
      roots.add(element);
    });

    if (roots.size === 0) {
      document.querySelectorAll('[class*="c-"], [class*="s-"]').forEach(element => {
        if (!isLikelyComponent(element)) return;
        roots.add(element);
      });
    }

    document.querySelectorAll('[class*="c-"], [class*="s-"]').forEach(element => {
      if (!isLikelyComponent(element)) return;
      if (
        hasAncestorMatch(
          element,
          ancestor =>
            isLikelyComponent(ancestor) &&
            getComponentBlock(ancestor) === getComponentBlock(element)
        )
      ) {
        return;
      }
      roots.add(element);
    });

    return Array.from(roots);
  }

  function getFallbackComponentRoots() {
    const roots = [];
    let count = 0;

    for (const element of document.body.querySelectorAll(
      'section, div, h1, h2, h3, h4, p, button'
    )) {
      if (count >= MAX_FALLBACK_NODES) break;
      if (shouldSkipElement(element)) continue;
      if (hasAncestorMatch(element, ancestor => roots.includes(ancestor))) continue;
      roots.push(element);
      count += 1;
    }

    return roots;
  }

  function getSectionRoots() {
    const roots = new Set();

    document.querySelectorAll('section, [data-section]').forEach(element => {
      roots.add(element);
    });

    document.querySelectorAll('[class*="c-"], [class*="s-"]').forEach(element => {
      if (!isLikelySection(element)) return;
      if (
        hasAncestorMatch(
          element,
          ancestor =>
            isLikelySection(ancestor) && getSectionBlock(ancestor) === getSectionBlock(element)
        )
      ) {
        return;
      }
      roots.add(element);
    });

    return Array.from(roots);
  }

  function summarizeIssues(entries) {
    const summary = {
      total: 0,
      critical: 0,
      warning: 0,
    };

    for (const entry of entries) {
      for (const issue of entry.issues) {
        summary.total += 1;
        if (issue.severity === 'critical') summary.critical += 1;
        if (issue.severity === 'warning') summary.warning += 1;
      }
    }

    return summary;
  }

  function sortEntries(entries) {
    return [...entries].sort(
      (left, right) =>
        left.name.localeCompare(right.name) || left.rootPath.localeCompare(right.rootPath)
    );
  }

  function runVisualAudit(config) {
    console.log('[engine] start');
    const spacingScale = normalizeSpaceScale();
    const colorTokens = normalizeColorTokens();
    console.log('[engine] scanning components');
    let componentRoots = getComponentRoots().filter(root => !isLikelySection(root));
    if (componentRoots.length === 0) {
      componentRoots = getFallbackComponentRoots();
    }
    const sectionRoots = getSectionRoots();
    const designSystem = createDesignSystemSummary();

    const components = sortEntries(
      componentRoots.map(root =>
        auditComponent(root, spacingScale, colorTokens, config.route, config.viewport, designSystem)
      )
    );
    const sectionEntries = sectionRoots.map(root =>
      auditSection(root, spacingScale, colorTokens, config.route, config.viewport)
    );
    applySectionRhythm(sectionEntries);
    const sections = sortEntries(sectionEntries);

    designSystem.spacingViolations.sort(
      (left, right) =>
        left.route.localeCompare(right.route) || left.component.localeCompare(right.component)
    );
    designSystem.colorViolations.sort(
      (left, right) =>
        left.route.localeCompare(right.route) || left.component.localeCompare(right.component)
    );

    console.log('[engine] done');

    return {
      route: config.route,
      viewport: config.viewport,
      capturedAt: new Date().toISOString(),
      pageTitle: document.title,
      spacingScale,
      colorTokens,
      components,
      sections,
      designSystem,
      summary: {
        componentCount: components.length,
        sectionCount: sections.length,
        componentIssues: summarizeIssues(components),
        sectionIssues: summarizeIssues(sections),
      },
    };
  }

  window.__MINDWP_VISUAL_AUDIT__ = {
    runVisualAudit,
  };
})();
