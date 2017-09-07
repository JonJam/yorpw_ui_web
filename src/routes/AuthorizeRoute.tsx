import * as React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

interface IAuthorizeRouteProps {
  isAuthenticated: boolean; // TODO how to pass this in
  authorizePath: string;
  component: new () => React.Component; // TODO Improve typings
  path: string;
}

// WORKING HERE

export default function AuthorizeRoute(props: IAuthorizeRouteProps) {
  const Component = props.component;

  // TODO improve any ?
  // TODO Check this works as expected.
  const render = (renderProps: RouteComponentProps<any>) => {
    let element = (
      <Redirect
        to={{
          pathname: props.authorizePath,
          state: { from: renderProps.location }
        }}
      />
    );

    if (props.isAuthenticated) {
      element = <Component {...renderProps} />;
    }

    return element;
  };

  return <Route {...props} render={render} />;
}
