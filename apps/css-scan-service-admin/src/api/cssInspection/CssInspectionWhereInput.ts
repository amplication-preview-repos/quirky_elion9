import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CssInspectionWhereInput = {
  cssProperties?: JsonFilter;
  elementSelector?: StringNullableFilter;
  id?: StringFilter;
  inspectedAt?: DateTimeNullableFilter;
};
