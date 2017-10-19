import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Error404Page from "../components/errors/Error404Page";
import GeneratePasswordPage from "../components/generatePassword/GeneratePasswordPage";
import GroupPage from "../components/group/GroupPage";
import HomePage from "../components/home/HomePage";
import SignUpPage from "../components/signUp/SignUpPage";
import SitePage from "../components/site/SitePage";
import SitesPage from "../components/sites/SitesPage";
import AuthenticateRoute from "./AuthenticateRoute";
import {
  generatePasswordPath,
  groupPath,
  homePath,
  signUpPath,
  sitePath,
  sitesPath
} from "./paths";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

interface IRoutesProps {
  readonly isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProps) {
  return (
    <Switch>
      <RedirectIfAuthenticated
        exact={true}
        path={homePath}
        component={HomePage}
        redirectPath={sitesPath}
        isAuthenticated={props.isAuthenticated}
      />

      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={`${sitePath}/:siteId?`}
        component={SitePage}
        isAuthenticated={props.isAuthenticated}
      />

      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={sitesPath}
        component={SitesPage}
        isAuthenticated={props.isAuthenticated}
      />

      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={`${groupPath}/:groupId?`}
        component={GroupPage}
        isAuthenticated={props.isAuthenticated}
      />

      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={generatePasswordPath}
        component={GeneratePasswordPage}
        isAuthenticated={props.isAuthenticated}
      />

      <RedirectIfAuthenticated
        path={signUpPath}
        component={SignUpPage}
        redirectPath={sitesPath}
        isAuthenticated={props.isAuthenticated}
      />

      <Route component={Error404Page} />
    </Switch>
  );
}
