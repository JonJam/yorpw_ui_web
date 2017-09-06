import * as React from "react";
import { Redirect } from "react-router-dom";
import { SitesRoute } from "../../routes";

function SignUpPage() {
  return <Redirect to={SitesRoute} />;
}

export default SignUpPage;
