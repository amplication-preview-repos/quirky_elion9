import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PerformanceInsightEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="metricName" source="metricName" />
        <DateTimeInput label="recordedAt" source="recordedAt" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
