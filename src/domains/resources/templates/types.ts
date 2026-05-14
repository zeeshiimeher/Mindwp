export interface ResourceFAQItem {
  question: string;
  answer: string;
}

export type ResourcePageTemplateSection = {
  type: string;
  [key: string]: unknown;
};
