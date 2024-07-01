import { PerformanceInsightWhereInput } from "./PerformanceInsightWhereInput";
import { PerformanceInsightOrderByInput } from "./PerformanceInsightOrderByInput";

export type PerformanceInsightFindManyArgs = {
  where?: PerformanceInsightWhereInput;
  orderBy?: Array<PerformanceInsightOrderByInput>;
  skip?: number;
  take?: number;
};
