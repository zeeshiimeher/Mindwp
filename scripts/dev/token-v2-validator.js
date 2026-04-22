/**
 * Token V2 Migration — Computed Style Validator
 *
 * Usage:  Inject via Playwright or browser console during dev.
 *
 *   __check(".benefit-card")        → snapshot one selector
 *   __checkAll()                     → snapshot all known components
 *   __compare(before, after)         → diff two snapshots
 *   __snapshot()                     → full page snapshot for regression
 *
 * This file is DEV-ONLY. Do not import in production bundles.
 */

(function initTokenV2Validator() {
  'use strict';

  const PROPS = ['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderBottomColor'];

  /** Snapshot computed color values for every direct child and the root. */
  function check(selector) {
    const root = document.querySelector(selector);
    if (!root) return { error: `No element found: ${selector}` };

    const computed = window.getComputedStyle(root);
    const result = {
      selector,
      root: {},
      children: [],
    };

    for (const prop of PROPS) {
      const val = computed[prop];
      if (val && val !== 'rgba(0, 0, 0, 0)') {
        result.root[prop] = val;
      }
    }

    const children = root.querySelectorAll('*');
    const seen = new Set();
    for (const child of children) {
      const tag = child.tagName.toLowerCase();
      const cls = (child.className || '').toString().split(/\s+/).slice(0, 2).join('.');
      const key = `${tag}.${cls}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const cs = window.getComputedStyle(child);
      const entry = { element: key };
      let hasValue = false;
      for (const prop of PROPS) {
        const val = cs[prop];
        if (val && val !== 'rgba(0, 0, 0, 0)') {
          entry[prop] = val;
          hasValue = true;
        }
      }
      if (hasValue) result.children.push(entry);
    }

    return result;
  }

  /** Known component selectors to audit. */
  const KNOWN_SELECTORS = [
    '.btn-primary',
    '.btn-secondary',
    '.btn-outline',
    '.btn-outline-light',
    '.btn-white',
    '.benefit-card',
    '.reusable-card',
    '.section-header',
    '[data-component]',
    '.c-icon-benefit-cards-section',
    '.c-process-steps-section',
    '.c-related-cards-section',
    '.cta-section',
    '.business-use-case-card',
  ];

  function checkAll() {
    const results = {};
    for (const sel of KNOWN_SELECTORS) {
      const el = document.querySelector(sel);
      if (el) results[sel] = check(sel);
    }
    return results;
  }

  /** Compare two snapshots and return diffs. */
  function compare(before, after) {
    const diffs = [];
    for (const key of Object.keys(before)) {
      const b = before[key];
      const a = after[key];
      if (!a) {
        diffs.push({ selector: key, issue: 'MISSING in after' });
        continue;
      }

      // Compare root
      for (const prop of PROPS) {
        if (b.root?.[prop] !== a.root?.[prop]) {
          diffs.push({
            selector: key,
            element: 'root',
            prop,
            before: b.root?.[prop],
            after: a.root?.[prop],
          });
        }
      }
    }
    return diffs.length === 0 ? { status: 'IDENTICAL' } : { status: 'DRIFT', diffs };
  }

  /** Full page snapshot: every component root + its direct styles. */
  function snapshot() {
    return checkAll();
  }

  // Expose globally
  window.__check = check;
  window.__checkAll = checkAll;
  window.__compare = compare;
  window.__snapshot = snapshot;

  console.log(
    '[token-v2] Validator loaded. Use __check(".selector"), __checkAll(), __compare(before, after)'
  );
})();
