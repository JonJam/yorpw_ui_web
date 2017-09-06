import * as React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

interface IAuthorizeRouteProps {
  isAuthenticated: boolean; // TODO how to pass this in
  authorizeRoute: string;
  Component: new () => React.Component; // TODO Improve typings
}

// WORKING HERE

export default function AuthorizeRoute(props: IAuthorizeRouteProps) {
  // TODO improve any ?
  // TODO Check this works as expected.
  const render = (renderProps: RouteComponentProps<any>) => {
    let element = (
      <Redirect
        to={{
          pathname: props.authorizeRoute,
          state: { from: renderProps.location }
        }}
      />
    );

    if (props.isAuthenticated) {
      element = <props.Component {...renderProps} />;
    }

    return element;
  };

  return <Route {...props} render={render} />;
}
