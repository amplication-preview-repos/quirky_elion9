import { CssInspection as TCssInspection } from "../api/cssInspection/CssInspection";

export const CSSINSPECTION_TITLE_FIELD = "elementSelector";

export const CssInspectionTitle = (record: TCssInspection): string => {
  return record.elementSelector?.toString() || String(record.id);
};
