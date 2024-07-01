import { StyleCopy as TStyleCopy } from "../api/styleCopy/StyleCopy";

export const STYLECOPY_TITLE_FIELD = "elementSelector";

export const StyleCopyTitle = (record: TStyleCopy): string => {
  return record.elementSelector?.toString() || String(record.id);
};
