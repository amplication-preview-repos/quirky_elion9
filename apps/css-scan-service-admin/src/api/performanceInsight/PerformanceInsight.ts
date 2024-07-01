export type PerformanceInsight = {
  createdAt: Date;
  id: string;
  metricName: string | null;
  recordedAt: Date | null;
  updatedAt: Date;
  value: number | null;
};
