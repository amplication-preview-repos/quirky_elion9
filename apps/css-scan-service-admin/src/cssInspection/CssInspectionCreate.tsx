import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CssInspectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="elementSelector" source="elementSelector" />
        <DateTimeInput label="inspectedAt" source="inspectedAt" />
      </SimpleForm>
    </Create>
  );
};
