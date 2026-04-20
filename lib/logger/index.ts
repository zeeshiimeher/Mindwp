export { createLogger } from './index.mjs';

export type LoggingMode = 'summary' | 'verbose';

export interface LoggerNodeLine {
  scope?: string;
  slug?: string;
  label?: string;
  relates?: number;
  supports?: number;
  validates?: number;
  total?: number;
  [key: string]: string | number | boolean | string[] | number[] | undefined;
}