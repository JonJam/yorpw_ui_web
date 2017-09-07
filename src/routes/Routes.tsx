import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { homePath, signUpPath, sitesPath } from "./paths";
import Error404Page from "../components/errors/Error404Page";
import HomePage from "../components/home/HomePage";
import SignUpPage from "../components/signup/SignUpPage";
import SitesPage from "../components/sites/SitesPage";
import AuthenticateRoute from "./AuthenticateRoute";

interface IRoutesProps {
  isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProps) {
  return (
    <Switch>
      <Route exact={true} path={homePath} component={HomePage} />
      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={sitesPath}
        component={SitesPage}
        isAuthenticated={props.isAuthenticated}
      />
      <Route path={signUpPath} component={SignUpPage} />
      <Route component={Error404Page} />
    </Switch>
  );
}
