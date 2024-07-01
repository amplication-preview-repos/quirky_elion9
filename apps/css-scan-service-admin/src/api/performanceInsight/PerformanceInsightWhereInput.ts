import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PerformanceInsightWhereInput = {
  id?: StringFilter;
  metricName?: StringNullableFilter;
  recordedAt?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
