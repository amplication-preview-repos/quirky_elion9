import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StyleCopyList } from "./styleCopy/StyleCopyList";
import { StyleCopyCreate } from "./styleCopy/StyleCopyCreate";
import { StyleCopyEdit } from "./styleCopy/StyleCopyEdit";
import { StyleCopyShow } from "./styleCopy/StyleCopyShow";
import { CssInspectionList } from "./cssInspection/CssInspectionList";
import { CssInspectionCreate } from "./cssInspection/CssInspectionCreate";
import { CssInspectionEdit } from "./cssInspection/CssInspectionEdit";
import { CssInspectionShow } from "./cssInspection/CssInspectionShow";
import { PerformanceInsightList } from "./performanceInsight/PerformanceInsightList";
import { PerformanceInsightCreate } from "./performanceInsight/PerformanceInsightCreate";
import { PerformanceInsightEdit } from "./performanceInsight/PerformanceInsightEdit";
import { PerformanceInsightShow } from "./performanceInsight/PerformanceInsightShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CSSScanService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="StyleCopy"
          list={StyleCopyList}
          edit={StyleCopyEdit}
          create={StyleCopyCreate}
          show={StyleCopyShow}
        />
        <Resource
          name="CssInspection"
          list={CssInspectionList}
          edit={CssInspectionEdit}
          create={CssInspectionCreate}
          show={CssInspectionShow}
        />
        <Resource
          name="PerformanceInsight"
          list={PerformanceInsightList}
          edit={PerformanceInsightEdit}
          create={PerformanceInsightCreate}
          show={PerformanceInsightShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
