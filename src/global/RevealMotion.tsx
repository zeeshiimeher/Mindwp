'use client';

import { useEffect } from 'react';

/**
 * RevealMotion — global client island that enables in-view animations.
 *
 * Contract:
 *   - Without JS, content stays fully visible (CSS hides nothing by default).
 *   - On mount, sets `data-js-motion` on <html>, which arms the hidden
 *     pre-state in framework.css.
 *   - Observes any element with an `rd-animate-*` class and toggles
 *     `is-visible` when it enters the viewport. Once revealed, it stays
 *     revealed (single-fire) so animations never restart.
 *   - Respects prefers-reduced-motion: still sets `data-js-motion` so the
 *     reduced-motion CSS branch can force everything visible.
 *   - Idempotent: handles SSR mount, route transitions, and dynamically
 *     inserted nodes via a MutationObserver.
 */

const TARGET_SELECTOR = [
  '.rd-animate-section',
  '.rd-animate-list',
  '.rd-animate-stagger',
  '.rd-animate-fade',
  '.rd-animate-up',
  '.rd-animate-panel',
  '.rd-animate-line',
].join(',');

export function RevealMotion(): null {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    root.setAttribute('data-js-motion', '');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      // Reveal immediately so nothing stays hidden.
      document.querySelectorAll(TARGET_SELECTOR).forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    const observe = (scope: ParentNode) => {
      scope.querySelectorAll(TARGET_SELECTOR).forEach(el => {
        if (!el.classList.contains('is-visible')) io.observe(el);
      });
    };

    observe(document);

    const mo = new MutationObserver(muts => {
      for (const m of muts) {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          const el = node as Element;
          if (el.matches?.(TARGET_SELECTOR)) io.observe(el);
          observe(el);
        });
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

export default RevealMotion;
