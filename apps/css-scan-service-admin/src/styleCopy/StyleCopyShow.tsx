import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StyleCopyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="copiedAt" source="copiedAt" />
        <TextField label="copiedCss" source="copiedCss" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="elementSelector" source="elementSelector" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
