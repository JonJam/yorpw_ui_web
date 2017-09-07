import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeRoute, SignUpRoute, SitesRoute } from "./index";
import Error404Page from "../components/errors/Error404Page";
import HomePage from "../components/home/HomePage";
import SignUpPage from "../components/signup/SignUpPage";
import SitesPage from "../components/sites/SitesPage";
import AuthorizeRoute from "./AuthorizeRoute";

interface IRoutesProps {
  isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProps) {
  console.log(props);

  return (
    <Switch>
      <Route exact={true} path={HomeRoute} component={HomePage} />

      <AuthorizeRoute
        authorizePath={SignUpRoute}
        path={SitesRoute}
        component={SitesPage}
        isAuthenticated={true}
      />
      <Route path={SignUpRoute} component={SignUpPage} />
      <Route component={Error404Page} />
    </Switch>
  );
}

// function mapStateToProps(state: IStoreState) {
//   return {
//     groups: getGroupViewModels(state.groups, state.sites),
//     isBusy: isBusy(state.pendingActions)
//   };
// }

// export default connect(mapStateToProps)(Routes);
