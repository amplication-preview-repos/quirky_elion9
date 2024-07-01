import { InputJsonValue } from "../../types";

export type StyleCopyCreateInput = {
  copiedAt?: Date | null;
  copiedCss?: InputJsonValue;
  elementSelector?: string | null;
};
