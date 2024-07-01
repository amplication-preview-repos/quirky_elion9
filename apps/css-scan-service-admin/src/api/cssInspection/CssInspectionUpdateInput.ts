import { InputJsonValue } from "../../types";

export type CssInspectionUpdateInput = {
  cssProperties?: InputJsonValue;
  elementSelector?: string | null;
  inspectedAt?: Date | null;
};
