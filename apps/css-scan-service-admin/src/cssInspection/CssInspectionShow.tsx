import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CssInspectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="cssProperties" source="cssProperties" />
        <TextField label="elementSelector" source="elementSelector" />
        <TextField label="ID" source="id" />
        <TextField label="inspectedAt" source="inspectedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
