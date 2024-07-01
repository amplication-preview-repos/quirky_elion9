import { PerformanceInsight as TPerformanceInsight } from "../api/performanceInsight/PerformanceInsight";

export const PERFORMANCEINSIGHT_TITLE_FIELD = "metricName";

export const PerformanceInsightTitle = (
  record: TPerformanceInsight
): string => {
  return record.metricName?.toString() || String(record.id);
};
