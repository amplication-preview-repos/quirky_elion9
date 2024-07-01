import { InputJsonValue } from "../../types";

export type CssInspectionCreateInput = {
  cssProperties?: InputJsonValue;
  elementSelector?: string | null;
  inspectedAt?: Date | null;
};
