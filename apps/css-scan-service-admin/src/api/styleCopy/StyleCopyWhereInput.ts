import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StyleCopyWhereInput = {
  copiedAt?: DateTimeNullableFilter;
  copiedCss?: JsonFilter;
  elementSelector?: StringNullableFilter;
  id?: StringFilter;
};
