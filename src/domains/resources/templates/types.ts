/* eslint-disable @typescript-eslint/no-explicit-any */
export type DesignModeValue = any;

export interface ResourceFAQItem {
  question: string;
  answer: string;
}

export type ResourcePageTemplateSection = {
  type: string;
  [key: string]: DesignModeValue;
};
