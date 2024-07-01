import { CssInspectionWhereInput } from "./CssInspectionWhereInput";
import { CssInspectionOrderByInput } from "./CssInspectionOrderByInput";

export type CssInspectionFindManyArgs = {
  where?: CssInspectionWhereInput;
  orderBy?: Array<CssInspectionOrderByInput>;
  skip?: number;
  take?: number;
};
