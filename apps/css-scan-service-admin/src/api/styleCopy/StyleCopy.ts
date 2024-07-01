import { JsonValue } from "type-fest";

export type StyleCopy = {
  copiedAt: Date | null;
  copiedCss: JsonValue;
  createdAt: Date;
  elementSelector: string | null;
  id: string;
  updatedAt: Date;
};
