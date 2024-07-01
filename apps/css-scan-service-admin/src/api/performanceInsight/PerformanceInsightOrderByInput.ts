import { SortOrder } from "../../util/SortOrder";

export type PerformanceInsightOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  metricName?: SortOrder;
  recordedAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
