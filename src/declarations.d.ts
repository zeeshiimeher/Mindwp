/**
 * Type declarations for side-effect CSS imports (e.g. import '@/index.css').
 * TypeScript does not natively resolve CSS modules; this declaration suppresses
 * the TS2307 "Cannot find module" error for all .css imports.
 */
declare module '*.css';
