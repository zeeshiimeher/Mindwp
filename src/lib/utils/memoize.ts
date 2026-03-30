/**
 * Generic memoization for single-argument pure functions.
 * Uses a Map for O(1) cache lookups keyed by the first argument.
 */
export function memoize<A, R>(fn: (arg: A) => R): (arg: A) => R {
  const cache = new Map<A, R>();
  return (arg: A): R => {
    if (cache.has(arg)) return cache.get(arg) as R;
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

/**
 * Memoize with a string key derived from the arguments.
 * Useful when the function takes multiple arguments.
 */
export function memoizeWithKey<Args extends unknown[], R>(
  fn: (...args: Args) => R,
  keyFn: (...args: Args) => string
): (...args: Args) => R {
  const cache = new Map<string, R>();
  return (...args: Args): R => {
    const key = keyFn(...args);
    if (cache.has(key)) return cache.get(key) as R;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
