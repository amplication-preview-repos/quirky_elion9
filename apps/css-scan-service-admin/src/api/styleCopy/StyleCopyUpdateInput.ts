import { InputJsonValue } from "../../types";

export type StyleCopyUpdateInput = {
  copiedAt?: Date | null;
  copiedCss?: InputJsonValue;
  elementSelector?: string | null;
};
