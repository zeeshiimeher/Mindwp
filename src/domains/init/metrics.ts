export interface InitMetrics {
  totalTime: number;
  contentGraphTime: number;
  resolverIndexesTime: number;
  resolverCreationTime: number;
}

let metrics: InitMetrics | null = null;

export function setInitMetrics(m: InitMetrics) {
  metrics = m;
}

export function getInitMetrics(): InitMetrics | null {
  return metrics;
}
