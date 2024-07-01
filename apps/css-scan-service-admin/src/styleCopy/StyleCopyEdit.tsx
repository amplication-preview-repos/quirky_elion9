import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StyleCopyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="copiedAt" source="copiedAt" />
        <div />
        <TextInput label="elementSelector" source="elementSelector" />
      </SimpleForm>
    </Edit>
  );
};
