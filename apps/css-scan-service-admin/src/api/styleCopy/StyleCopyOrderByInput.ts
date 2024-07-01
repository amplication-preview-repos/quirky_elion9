import { SortOrder } from "../../util/SortOrder";

export type StyleCopyOrderByInput = {
  copiedAt?: SortOrder;
  copiedCss?: SortOrder;
  createdAt?: SortOrder;
  elementSelector?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
