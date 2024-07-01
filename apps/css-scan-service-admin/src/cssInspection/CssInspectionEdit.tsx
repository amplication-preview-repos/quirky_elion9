import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CssInspectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="elementSelector" source="elementSelector" />
        <DateTimeInput label="inspectedAt" source="inspectedAt" />
      </SimpleForm>
    </Edit>
  );
};
