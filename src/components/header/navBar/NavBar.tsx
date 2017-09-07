import * as React from "react";
import { Link } from "react-router-dom";
import { homePath, signUpPath } from "../../../routes/paths";
import strings from "../../../strings";

import logo from "./logo.svg";

interface INavBarProps {
  isAuthenticated: boolean;
  handleSignOut: () => void;
}

export default function NavBar(props: INavBarProps) {
  let authenticationLink = (
    <Link to={signUpPath} className="nav-link">
      {strings.navBar.signUp}
    </Link>
  );

  if (props.isAuthenticated) {
    authenticationLink = (
      <a href="#" onClick={props.handleSignOut} className="nav-link">
        {strings.navBar.signOut}
      </a>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={homePath} className="navbar-brand">
          <span>
            <img src={logo} alt="" />
            {strings.navBar.appName}
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
              {authenticationLink}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
