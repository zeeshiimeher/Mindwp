/* eslint-disable no-console */

export interface ConversionLogData {
  submissionId: string;
  system: string;
  source: string;
  email: string;
  timestamp: string;
  mainConcern: string;
  preferredContactMethod: string;
}

export function logConversion(data: ConversionLogData) {
  console.info('[CONVERSION STORAGE]', data);
}
