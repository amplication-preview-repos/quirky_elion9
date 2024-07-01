import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PerformanceInsightList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PerformanceInsights"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="metricName" source="metricName" />
        <TextField label="recordedAt" source="recordedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
