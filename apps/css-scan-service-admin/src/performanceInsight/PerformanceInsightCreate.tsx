import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PerformanceInsightCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="metricName" source="metricName" />
        <DateTimeInput label="recordedAt" source="recordedAt" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
