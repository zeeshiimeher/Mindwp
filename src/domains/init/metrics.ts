export interface InitMetrics {
  totalTime: number;
  contentGraphTime: number;
}

let metrics: InitMetrics | null = null;

export function setInitMetrics(m: InitMetrics) {
  metrics = m;
}

export function getInitMetrics(): InitMetrics | null {
  return metrics;
}
