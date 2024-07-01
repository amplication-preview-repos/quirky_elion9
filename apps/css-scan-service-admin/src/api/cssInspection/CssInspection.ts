import { JsonValue } from "type-fest";

export type CssInspection = {
  createdAt: Date;
  cssProperties: JsonValue;
  elementSelector: string | null;
  id: string;
  inspectedAt: Date | null;
  updatedAt: Date;
};
