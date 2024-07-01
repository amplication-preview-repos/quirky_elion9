import { SortOrder } from "../../util/SortOrder";

export type CssInspectionOrderByInput = {
  createdAt?: SortOrder;
  cssProperties?: SortOrder;
  elementSelector?: SortOrder;
  id?: SortOrder;
  inspectedAt?: SortOrder;
  updatedAt?: SortOrder;
};
