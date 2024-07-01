import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StyleCopyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="copiedAt" source="copiedAt" />
        <div />
        <TextInput label="elementSelector" source="elementSelector" />
      </SimpleForm>
    </Create>
  );
};
