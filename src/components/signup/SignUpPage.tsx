import * as React from "react";
import { Redirect } from "react-router-dom";
import routes from "../../routes";

function SignUpPage() {
  return <Redirect to={routes.sites} />;
}

export default SignUpPage;
