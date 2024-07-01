import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CssInspectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CSSInspections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="cssProperties" source="cssProperties" />
        <TextField label="elementSelector" source="elementSelector" />
        <TextField label="ID" source="id" />
        <TextField label="inspectedAt" source="inspectedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
